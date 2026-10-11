import { createHash, randomBytes, randomUUID } from 'node:crypto';
import { validateConfig, validateLead, QuoteInputError, knownKeys, isObject } from './validation.mjs';
import { calculateEstimate } from './pricing.mjs';

export { QuoteInputError, validateLead, validateConfig };
export const COOKIE_NAME = 'oeco_design_session';
export const SESSION_SECONDS = 7 * 24 * 60 * 60;
export const PRIVATE_HEADERS = Object.freeze({ 'Cache-Control': 'private, no-store, max-age=0', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex, nofollow', Vary: 'Cookie' });
export const digest = value => createHash('sha256').update(value).digest('hex');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const TOKEN = /^[a-f0-9]{64}$/;
const MAX_BODY_BYTES = 1_450_000;

export function json(body, status = 200, headers = {}) { return Response.json(body, { status, headers: { ...PRIVATE_HEADERS, ...headers } }); }
export function sameOrigin(request) {
  const origin = request.headers.get('origin');
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get('sec-fetch-site') === 'cross-site') throw new QuoteInputError('Please submit this request from the configurator.', 403);
}
export function tokenFrom(request) {
  const token = (request.headers.get('cookie') || '').split(';').map(value => value.trim()).find(value => value.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  return TOKEN.test(token || '') ? token : null;
}
function sessionCookie(token, request) {
  return `${COOKIE_NAME}=${token}; Path=/api; Max-Age=${SESSION_SECONDS}; HttpOnly; SameSite=Lax${new URL(request.url).protocol === 'https:' ? '; Secure' : ''}`;
}
export function enquiryStore(getStore, context = {}) {
  // Published leads survive deployments. Every preview has an isolated store.
  const suffix = context.deploy?.context === 'production' ? '' : `-preview-${String(context.deploy?.id || 'local').replace(/[^a-zA-Z0-9-]/g, '').slice(0, 30)}`;
  return getStore({ name: `oeco-enquiries${suffix}`, consistency: 'strong' });
}
async function readJson(request) {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) throw new QuoteInputError('Please send a valid design request.', 415);
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) throw new QuoteInputError('This request is too large.', 413);
  const reader = request.body?.getReader();
  if (!reader) throw new QuoteInputError('Please enter your design and contact details.');
  const chunks = []; let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) { await reader.cancel(); throw new QuoteInputError('This request is too large.', 413); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new QuoteInputError('Please send a valid design request.'); }
}
export function validatePreview(value) {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string' || !/^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) throw new QuoteInputError('Please prepare a JPEG image of your design.', 400, 'previewImage');
  const bytes = Buffer.from(value.slice(value.indexOf(',') + 1), 'base64');
  if (bytes.length > 1_048_576) throw new QuoteInputError('Your design preview is too large. Please try again.', 413, 'previewImage');
  if (bytes.length < 20 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes.at(-2) !== 0xff || bytes.at(-1) !== 0xd9) throw new QuoteInputError('Your preview image is incomplete.', 400, 'previewImage');
  let width = 0, height = 0, offset = 2;
  while (offset + 8 < bytes.length) {
    if (bytes[offset] !== 0xff) break;
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    if (marker === 0xd9 || marker === 0xda) break;
    if (marker >= 0xd0 && marker <= 0xd7) continue;
    const length = bytes.readUInt16BE(offset);
    if (length < 2 || offset + length > bytes.length) break;
    if ([0xc0, 0xc1, 0xc2].includes(marker)) { height = bytes.readUInt16BE(offset + 3); width = bytes.readUInt16BE(offset + 5); break; }
    offset += length;
  }
  if (!width || !height || width > 4096 || height > 4096 || width * height > 12_000_000) throw new QuoteInputError('Please use a standard sized design preview.', 400, 'previewImage');
  return { bytes, width, height, digest: digest(bytes) };
}
function validateId(value) {
  if (typeof value !== 'string' || !UUID.test(value)) throw new QuoteInputError('Please try submitting your details again.', 400, 'idempotencyKey');
  return value.toLowerCase();
}
export function createRateLimiter({ now = Date.now } = {}) {
  const windows = new Map();
  return (key, method) => {
    const period = method === 'POST' ? 600_000 : 60_000, limit = method === 'POST' ? 8 : 80;
    const id = `${method}:${digest(key || 'unknown')}`, current = windows.get(id), time = now();
    if (!current || time >= current.until) {
      if (windows.size > 5000) for (const [name, entry] of windows) if (time >= entry.until) windows.delete(name);
      if (windows.size > 5000) windows.clear();
      windows.set(id, { count: 1, until: time + period }); return;
    }
    current.count++;
    if (current.count > limit) throw new QuoteInputError('Please wait a moment before trying again.', 429);
  };
}
export async function acceptedSession(request, store, now = Date.now) {
  const token = tokenFrom(request);
  if (!token) throw new QuoteInputError('Submit your details to unlock your estimate and design pack first.', 401);
  const session = await store.get(`sessions/${digest(token)}`, { type: 'json' });
  if (!session || !UUID.test(session.leadId || '') || !UUID.test(session.designId || '') || !Number.isFinite(session.expiresAt) || session.expiresAt <= now()) throw new QuoteInputError('Please submit your details again to unlock your design.', 401);
  const [leadRecord, design] = await Promise.all([store.get(`leads/${session.leadId}`, { type: 'json' }), store.get(`designs/${session.designId}`, { type: 'json' })]);
  if (!leadRecord?.lead || !leadRecord?.consent?.enquiryRequested || !leadRecord?.consent?.privacyAcknowledged || leadRecord.id !== session.leadId || !design?.estimate || design.leadId !== session.leadId || design.id !== session.designId) throw new QuoteInputError('Please submit your details to unlock your design.', 401);
  return { session, leadRecord, design };
}
export const publicDesign = design => ({ ok: true, saved: true, quoteId: design.reference, revision: design.revision, config: design.config, estimate: design.estimate, pdfUrl: '/api/quote/pdf', savedAt: design.createdAt });
async function saveImage(store, id, preview) {
  if (!preview) return null;
  const key = `previews/${id}`;
  const saved = await store.set(key, preview.bytes, { onlyIfNew: true, metadata: { width: preview.width, height: preview.height, digest: preview.digest } });
  if (!saved?.modified) throw new Error('PreviewPersistenceError');
  return { key, width: preview.width, height: preview.height, digest: preview.digest };
}
async function createSession(store, design, makeToken, now) {
  const token = makeToken();
  if (!TOKEN.test(token)) throw new Error('SessionEntropyError');
  const saved = await store.setJSON(`sessions/${digest(token)}`, { leadId: design.leadId, designId: design.id, expiresAt: now() + SESSION_SECONDS * 1000 }, { onlyIfNew: true });
  if (!saved?.modified) throw new Error('SessionPersistenceError');
  return token;
}
function makeDesign(config, estimate, leadId, createdAt, { id = randomUUID(), reference = `OECO-${leadId.slice(0, 8).toUpperCase()}`, revision = 1 } = {}) { return { id, leadId, config, estimate, reference, revision, createdAt }; }
async function persistedDesign(store, id, leadId) {
  const design = await store.get(`designs/${id}`, { type: 'json' });
  if (!design?.estimate || design.leadId !== leadId) throw new Error('SavedDesignPersistenceError');
  return design;
}
export function createQuoteHandler({ getStore, now = Date.now, makeToken = () => randomBytes(32).toString('hex'), validate = validateConfig, price = calculateEstimate, rateLimit = createRateLimiter({ now }) } = {}) {
  return async (request, context = {}) => {
    if (!['GET', 'POST', 'PATCH'].includes(request.method)) return json({ error: 'Use the configurator to request your design.' }, 405, { Allow: 'GET, POST, PATCH' });
    try {
      sameOrigin(request); rateLimit(context.ip || 'local', request.method);
      const store = enquiryStore(getStore, context);
      if (request.method === 'GET') return json(publicDesign((await acceptedSession(request, store, now)).design));
      const input = await readJson(request);
      if (!isObject(input)) throw new QuoteInputError('Please check your design request.');
      knownKeys(input, request.method === 'POST' ? ['config', 'lead', 'idempotencyKey', 'website', 'previewImage'] : ['config', 'revision', 'idempotencyKey', 'previewImage']);
      if (input.website !== undefined && (typeof input.website !== 'string' || input.website.trim())) throw new QuoteInputError('We could not accept this request.');
      const key = validateId(input.idempotencyKey), config = validate(input.config), preview = validatePreview(input.previewImage), createdAt = new Date(now()).toISOString();
      let design;
      if (request.method === 'PATCH') {
        const { session, design: previous } = await acceptedSession(request, store, now);
        if (!Number.isSafeInteger(input.revision) || input.revision < 1) throw new QuoteInputError('Please refresh your saved estimate and try again.', 409, 'revision');
        const fingerprint = digest(JSON.stringify({ config, revision: input.revision })), receiptKey = `revisions/${session.leadId}/${key}`;
        const existing = await store.get(receiptKey, { type: 'json' });
        if (existing) {
          if (existing.fingerprint !== fingerprint) throw new QuoteInputError('This design update reference has already been used.', 409);
          design = await persistedDesign(store, existing.designId, session.leadId);
        } else {
          if (input.revision !== previous.revision) throw new QuoteInputError('Your saved design has changed. Please refresh the estimate before updating.', 409, 'revision');
          design = makeDesign(config, price(config), session.leadId, createdAt, { reference: previous.reference, revision: previous.revision + 1 });
          design.preview = await saveImage(store, design.id, preview);
          const saved = await store.setJSON(`designs/${design.id}`, design, { onlyIfNew: true });
          if (!saved?.modified) throw new Error('DesignPersistenceError');
          const savedReceipt = await store.setJSON(receiptKey, { fingerprint, designId: design.id, createdAt }, { onlyIfNew: true });
          if (!savedReceipt?.modified) {
            const accepted = await store.get(receiptKey, { type: 'json' });
            if (!accepted || accepted.fingerprint !== fingerprint) throw new QuoteInputError('Please try updating your design again.', 409);
            design = await persistedDesign(store, accepted.designId, session.leadId);
          }
        }
      } else {
        const lead = validateLead(input.lead), leadId = key;
        const fingerprint = digest(JSON.stringify({ config, lead }));
        const existing = await store.get(`leads/${leadId}`, { type: 'json' });
        if (existing) {
          if (existing.fingerprint !== fingerprint) throw new QuoteInputError('This submission reference has already been used. Please try again.', 409);
          design = await persistedDesign(store, existing.designId, leadId);
        } else {
          design = makeDesign(config, price(config), leadId, createdAt);
          design.preview = await saveImage(store, design.id, preview);
          const savedDesign = await store.setJSON(`designs/${design.id}`, design, { onlyIfNew: true });
          if (!savedDesign?.modified) throw new Error('DesignPersistenceError');
          const receipt = { id: leadId, designId: design.id, lead, fingerprint, createdAt, source: 'Oeco Garden Rooms configurator', consent: { enquiryRequested: true, privacyAcknowledged: true, marketing: lead.marketingConsent, privacyUrl: '/privacy.html', recordedAt: createdAt } };
          const savedLead = await store.setJSON(`leads/${leadId}`, receipt, { onlyIfNew: true });
          if (!savedLead?.modified) {
            const accepted = await store.get(`leads/${leadId}`, { type: 'json' });
            if (!accepted || accepted.fingerprint !== fingerprint) throw new QuoteInputError('Please try submitting your details again.', 409);
            design = await persistedDesign(store, accepted.designId, leadId);
          }
        }
      }
      const token = await createSession(store, design, makeToken, now);
      return json(publicDesign(design), request.method === 'POST' ? 201 : 200, { 'Set-Cookie': sessionCookie(token, request) });
    } catch (error) {
      if (error instanceof QuoteInputError) return json({ error: error.message, ...(error.field ? { field: error.field } : {}) }, error.status, error.status === 429 ? { 'Retry-After': '60' } : {});
      // Classification only. Lead details, cookies and image bodies never enter logs.
      console.warn('Oeco design service unavailable', error?.name || 'StorageError');
      return json({ error: 'We could not save your request yet. Your design is still here. Please try again.' }, 503);
    }
  };
}
