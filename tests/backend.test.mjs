import test from 'node:test';
import assert from 'node:assert/strict';
import { createQuoteHandler, validateLead, validateConfig, validatePreview, createRateLimiter, COOKIE_NAME, digest } from '../server/quote-service.mjs';
import { DEFAULT_CONFIG } from '../shared/catalog.js';
import { calculateEstimate } from '../server/pricing.mjs';
import { PRICE_BOOK } from '../server/price-book.mjs';
import { createPdfHandler } from '../server/pdf-service.mjs';
import { PREVIEW } from './fixtures.mjs';

const NOW = Date.UTC(2026, 9, 11, 12);
const LEAD = { name: 'Alex Sample', email: 'alex@example.com', postcode: 'OX10 0AB', timeline: 'exploring', privacyAcknowledged: true, marketingConsent: false };
const ID = '3bd287f6-bcbe-4879-8121-284593ec4dfc', PATCH_ID = '36c90fd4-f953-49e1-930c-62e6eb2cdd86';
const production = { deploy: { context: 'production', id: 'deploy1' }, ip: '203.0.113.2' };
function memoryStore(failure) {
  const entries = new Map(), names = [];
  const store = {
    async setJSON(key, data, options = {}) {
      if (failure?.(key)) throw new Error('StorageUnavailable');
      if (options.onlyIfNew && entries.has(key)) return { modified: false };
      entries.set(key, structuredClone(data)); return { modified: true, etag: 'saved' };
    },
    async set(key, data, options = {}) {
      if (failure?.(key)) throw new Error('StorageUnavailable');
      if (options.onlyIfNew && entries.has(key)) return { modified: false };
      entries.set(key, Uint8Array.from(data).buffer); return { modified: true, etag: 'saved' };
    },
    async get(key) { return entries.has(key) ? structuredClone(entries.get(key)) : null; },
  };
  return { entries, names, getStore(options) { names.push(options); return store; } };
}
function request(method = 'POST', body = { config: DEFAULT_CONFIG, lead: LEAD, idempotencyKey: ID, website: '' }, cookie = '', extra = {}) {
  return new Request('https://oeco.example/api/quote', { method, headers: { ...(body ? { 'Content-Type': 'application/json' } : {}), ...(cookie ? { Cookie: cookie } : {}), ...extra }, ...(body ? { body: JSON.stringify(body) } : {}) });
}
function setup(failure) {
  const db = memoryStore(failure); let token = 0;
  const handler = createQuoteHandler({ getStore: db.getStore, now: () => NOW, makeToken: () => (++token).toString(16).padStart(64, '0'), rateLimit: () => {} });
  return { ...db, handler };
}

test('all 2,130 exact current Oeco shape-size-style source prices are reproduced', () => {
  let count = 0;
  for (const [shape, rows] of Object.entries(PRICE_BOOK)) for (const row of rows) for (const [key, entry] of Object.entries(row.styles)) {
    const cladding = key.startsWith('thermo') ? 'thermowood' : key.startsWith('cedar') ? 'cedar' : key;
    const style = key.endsWith('classic') ? 'classic' : 'contemporary';
    const estimate = calculateEstimate({ ...DEFAULT_CONFIG, shape, width: row.width, depth: row.depth, cladding, style });
    assert.equal(estimate.total, entry.price); assert.equal(estimate.sourceStyle, entry.sourceStyle); count++;
  }
  assert.equal(count, 2130);
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, shape: 'cube', width: 4, depth: 3 }).total, 20058);
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, shape: 'canopy', width: 4, depth: 3 }).total, 20913);
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, shape: 'cube', width: 4, depth: 3, cladding: 'cedar' }).total, 21882);
});
test('the current package price does not invent VAT, extras or an artificial contingency', () => {
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, window: 'narrow', doors: 'sliding', style: 'contemporary' }).requestedExtras.length, 0);
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, window: 'wide', doors: 'patio', style: 'classic' }).requestedExtras.length, 0);
  assert.equal(calculateEstimate({ ...DEFAULT_CONFIG, window: 'none', doors: 'sliding', style: 'contemporary' }).requestedExtras.length, 1);
  const e = calculateEstimate({ ...DEFAULT_CONFIG, window: 'wide', doors: 'patio', style: 'contemporary' });
  assert.equal(e.vatIncluded, null); assert.equal(e.upper, null); assert.equal(e.total, e.basePrice);
  assert.equal(e.requestedExtras.length, 2); assert.ok(e.requestedExtras.every(x => x.status === 'quote-required'));
  assert.match(e.exclusions.join(' '), /Mains electrical/); assert.match(e.exclusions.join(' '), /VAT treatment/);
});
test('invalid pairings and manipulated configuration fields are rejected', () => {
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, price: 1 }), /unsupported/);
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, width: '4' }), /valid width/);
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, width: 4.2 }), /combination/);
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, width: 10, depth: 5 }), /combination/);
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, style: 'classic', cladding: 'woodgrain' }), /Classic/);
  assert.throws(() => validateConfig({ ...DEFAULT_CONFIG, extras: ['unpublished'] }), /additional/);
});
test('lead validation requires privacy acknowledgement but keeps phone and marketing optional', () => {
  assert.equal(validateLead(LEAD).marketingConsent, false);
  assert.equal(validateLead({ ...LEAD, phone: '' }).phone, '');
  assert.equal(validateLead({ ...LEAD, postcode: ' ox100ab ' }).postcode, 'OX10 0AB');
  for (const timeline of ['asap', '3-months', '6-months', 'exploring']) assert.equal(validateLead({ ...LEAD, timeline }).timeline, timeline);
  assert.throws(() => validateLead({ ...LEAD, email: 'not-an-email' }), /valid email/);
  assert.throws(() => validateLead({ ...LEAD, postcode: 'AAAAA' }), /UK postcode/);
  assert.throws(() => validateLead({ ...LEAD, privacyAcknowledged: false }), /privacy notice/);
  assert.throws(() => validateLead({ ...LEAD, marketingConsent: 'true' }), /preferences/);
  assert.throws(() => validateLead({ ...LEAD, name: '<script>' }), /name/);
});
test('price and PDF remain server gated without a durably accepted enquiry', async () => {
  const app = setup(), pdf = createPdfHandler({ getStore: app.getStore, now: () => NOW });
  assert.equal((await app.handler(request('GET', null), production)).status, 401);
  assert.equal((await app.handler(request('PATCH', { config: DEFAULT_CONFIG, revision: 1, idempotencyKey: PATCH_ID }), production)).status, 401);
  assert.equal((await pdf(request('GET', null), production)).status, 401);
  assert.equal((await app.handler(request('GET', null, `${COOKIE_NAME}=${'f'.repeat(64)}`), production)).status, 401);
  assert.equal((await app.handler(request('POST', { config: DEFAULT_CONFIG, idempotencyKey: ID }), production)).status, 400);
});
test('accepted enquiries receive private access and never return contact details', async () => {
  const app = setup(), response = await app.handler(request(), production), data = await response.json();
  assert.equal(response.status, 201); assert.equal(data.estimate.total, calculateEstimate(DEFAULT_CONFIG).total);
  const cookie = response.headers.get('set-cookie'); assert.match(cookie, /HttpOnly/); assert.match(cookie, /Secure/); assert.match(cookie, /SameSite=Lax/); assert.match(cookie, /Path=\/api/);
  assert.match(response.headers.get('cache-control'), /no-store/); assert.equal(data.pdfUrl, '/api/quote/pdf');
  assert.ok(!JSON.stringify(data).includes(LEAD.email)); assert.ok(!Object.hasOwn(data, 'lead'));
  const lead = app.entries.get(`leads/${ID}`); assert.equal(lead.consent.marketing, false); assert.equal(lead.consent.privacyAcknowledged, true);
  assert.equal(app.names[0].name, 'oeco-enquiries'); assert.equal(app.names[0].consistency, 'strong');
  assert.deepEqual(await (await app.handler(request('GET', null, cookie), production)).json(), data);
});
test('POST retries do not duplicate enquiries or permit conflicting data', async () => {
  const app = setup(); await app.handler(request(), production);
  assert.equal((await app.handler(request(), production)).status, 201);
  assert.equal([...app.entries.keys()].filter(key => key.startsWith('leads/')).length, 1);
  assert.equal([...app.entries.keys()].filter(key => key.startsWith('designs/')).length, 1);
  const conflict = await app.handler(request('POST', { config: { ...DEFAULT_CONFIG, width: 5 }, lead: LEAD, idempotencyKey: ID }), production);
  assert.equal(conflict.status, 409); assert.equal(conflict.headers.get('set-cookie'), null);
});
test('PATCH creates an immutable latest design revision and rejects stale updates', async () => {
  const app = setup(), accepted = await app.handler(request(), production), originalLead = structuredClone(app.entries.get(`leads/${ID}`));
  const body = { config: { ...DEFAULT_CONFIG, width: 5, window: 'none' }, revision: 1, idempotencyKey: PATCH_ID };
  const updated = await app.handler(request('PATCH', body, accepted.headers.get('set-cookie')), production), data = await updated.json();
  assert.equal(updated.status, 200); assert.equal(data.revision, 2); assert.equal(data.config.width, 5);
  assert.deepEqual(app.entries.get(`leads/${ID}`), originalLead); assert.equal([...app.entries.keys()].filter(key => key.startsWith('designs/')).length, 2);
  const retry = await app.handler(request('PATCH', body, updated.headers.get('set-cookie')), production);
  assert.equal((await retry.json()).revision, 2); assert.equal([...app.entries.keys()].filter(key => key.startsWith('designs/')).length, 2);
  const stale = await app.handler(request('PATCH', { ...body, idempotencyKey: '89935353-9b86-4fb4-825e-bf02c47fcb56' }, updated.headers.get('set-cookie')), production);
  assert.equal(stale.status, 409);
});
test('all persistence failures fail closed without exposing an estimate or issuing a session', async () => {
  for (const prefix of ['leads/', 'designs/', 'sessions/', 'previews/']) {
    const app = setup(key => key.startsWith(prefix));
    const response = await app.handler(request('POST', { config: DEFAULT_CONFIG, lead: LEAD, idempotencyKey: ID, previewImage: PREVIEW }), production);
    assert.equal(response.status, 503); assert.equal(response.headers.get('set-cookie'), null);
    assert.ok(!JSON.stringify(await response.json()).includes(String(calculateEstimate(DEFAULT_CONFIG).total)));
  }
});
test('missing receipts and expired sessions cannot unlock saved data', async () => {
  const app = setup(), accepted = await app.handler(request(), production), cookie = accepted.headers.get('set-cookie');
  app.entries.delete(`leads/${ID}`); assert.equal((await app.handler(request('GET', null, cookie), production)).status, 401);
  const other = setup(), response = await other.handler(request(), production), token = response.headers.get('set-cookie').split(';')[0].split('=')[1];
  other.entries.get(`sessions/${digest(token)}`).expiresAt = NOW - 1;
  assert.equal((await other.handler(request('GET', null, response.headers.get('set-cookie')), production)).status, 401);
});
test('cross-origin requests, honeypots and malformed/oversized bodies are rejected', async () => {
  const app = setup();
  assert.equal((await app.handler(request('POST', undefined, '', { Origin: 'https://attacker.example' }), production)).status, 403);
  assert.equal((await app.handler(request('GET', null, '', { 'Sec-Fetch-Site': 'cross-site' }), production)).status, 403);
  assert.equal((await app.handler(request('POST', { config: DEFAULT_CONFIG, lead: LEAD, idempotencyKey: ID, website: 'spam' }), production)).status, 400);
  assert.equal((await app.handler(request('POST', undefined, '', { 'Content-Type': 'text/plain' }), production)).status, 415);
  assert.equal((await app.handler(request('POST', undefined, '', { 'Content-Length': '9999999' }), production)).status, 413);
});
test('preview storage is isolated from production enquiries', async () => {
  const app = setup(); await app.handler(request(), { deploy: { context: 'deploy-preview', id: 'preview1' } });
  assert.equal(app.names[0].name, 'oeco-enquiries-preview-preview1');
});
test('preview validation refuses URLs, incomplete images and non-JPEG payloads', () => {
  assert.equal(validatePreview(PREVIEW).width, 32);
  assert.throws(() => validatePreview('https://attacker.example/preview.jpg'), /JPEG/);
  assert.throws(() => validatePreview('data:image/jpeg;base64,AAAA'), /incomplete/);
});
test('server generated PDF contains six pages with private attachment headers', async () => {
  const app = setup(), accepted = await app.handler(request(), production), pdf = createPdfHandler({ getStore: app.getStore, now: () => NOW });
  const response = await pdf(request('GET', null, accepted.headers.get('set-cookie')), production);
  assert.equal(response.status, 200); assert.equal(response.headers.get('content-type'), 'application/pdf');
  assert.match(response.headers.get('content-disposition'), /OECO-/); assert.match(response.headers.get('cache-control'), /no-store/);
  const bytes = Buffer.from(await response.arrayBuffer()); assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
  assert.equal((bytes.toString('latin1').match(/\/Type \/Page\b/g) || []).length, 6);
});
test('PDF rejects changed private preview association and image content', async () => {
  const app = setup(), accepted = await app.handler(request('POST', { config: DEFAULT_CONFIG, lead: LEAD, idempotencyKey: ID, previewImage: PREVIEW }), production), cookie = accepted.headers.get('set-cookie');
  const pdf = createPdfHandler({ getStore: app.getStore, now: () => NOW }); assert.equal((await pdf(request('GET', null, cookie), production)).status, 200);
  const key = [...app.entries.keys()].find(key => key.startsWith('designs/')), original = app.entries.get(key).preview.key;
  app.entries.get(key).preview.key = 'previews/other'; assert.equal((await pdf(request('GET', null, cookie), production)).status, 503);
  app.entries.get(key).preview.key = original; app.entries.set(original, new Uint8Array([1, 2, 3]).buffer); assert.equal((await pdf(request('GET', null, cookie), production)).status, 503);
});
test('PDF uses latest authenticated selections and ignores URL supplied design changes', async () => {
  const app = setup(), accepted = await app.handler(request(), production);
  const updated = await app.handler(request('PATCH', { config: { ...DEFAULT_CONFIG, width: 5, cladding: 'cedar' }, revision: 1, idempotencyKey: PATCH_ID }, accepted.headers.get('set-cookie')), production);
  let supplied;
  const pdf = createPdfHandler({ getStore: app.getStore, now: () => NOW, generate: (design, lead) => { supplied = { design, lead }; return new TextEncoder().encode('%PDF-test'); } });
  const response = await pdf(new Request('https://oeco.example/api/quote/pdf?width=10&quoteId=OTHER', { headers: { Cookie: updated.headers.get('set-cookie') } }), production);
  assert.equal(response.status, 200); assert.equal(supplied.design.config.width, 5); assert.equal(supplied.design.config.cladding, 'cedar'); assert.equal(supplied.design.revision, 2); assert.equal(supplied.lead.id, ID);
});
test('submission rate limits reset after their window', () => {
  let now = NOW; const limiter = createRateLimiter({ now: () => now });
  for (let i = 0; i < 8; i++) limiter('203.0.113.1', 'POST');
  assert.throws(() => limiter('203.0.113.1', 'POST'), /wait/); assert.doesNotThrow(() => limiter('203.0.113.2', 'POST'));
  now += 600_001; assert.doesNotThrow(() => limiter('203.0.113.1', 'POST'));
});
