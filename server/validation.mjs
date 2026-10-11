import { SHAPES, STYLES, CLADDINGS, DOORS, WINDOWS, USES, EXTRAS, SIZES, DEFAULT_CONFIG } from '../shared/catalog.js';

export class QuoteInputError extends Error {
  constructor(message, status = 400, field) { super(message); this.name = 'QuoteInputError'; this.status = status; this.field = field; }
}
export const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
export function knownKeys(value, allowed) {
  if (Object.keys(value).some(key => !allowed.includes(key))) throw new QuoteInputError('This request contains an unsupported field.');
}
export function validateConfig(input) {
  if (!isObject(input)) throw new QuoteInputError('Please check your room design.', 400, 'config');
  knownKeys(input, Object.keys(DEFAULT_CONFIG));
  const output = {};
  for (const [key, options] of Object.entries({ shape: SHAPES, style: STYLES, cladding: CLADDINGS, doors: DOORS, window: WINDOWS, use: USES })) {
    if (!options.some(option => option.id === input[key])) throw new QuoteInputError(`Please check your ${key} selection.`, 400, key);
    output[key] = input[key];
  }
  for (const key of ['width', 'depth']) {
    if (typeof input[key] !== 'number' || !Number.isFinite(input[key])) throw new QuoteInputError(`Please select a valid ${key}.`, 400, key);
    output[key] = input[key];
  }
  if (!SIZES[output.shape]?.some(([width, depth]) => width === output.width && depth === output.depth)) throw new QuoteInputError('Please choose an available width and depth combination.', 400, 'width');
  if (output.style === 'classic' && !['thermowood', 'cedar'].includes(output.cladding)) throw new QuoteInputError('Classic styling is available with Thermowood or Cedar.', 400, 'style');
  if (!['left', 'right'].includes(input.windowSide)) throw new QuoteInputError('Please choose a side for your window.', 400, 'windowSide');
  output.windowSide = input.windowSide;
  if (!Array.isArray(input.extras) || new Set(input.extras).size !== input.extras.length || input.extras.some(id => !EXTRAS.some(option => option.id === id))) throw new QuoteInputError('Please check your additional options.', 400, 'extras');
  output.extras = [...input.extras];
  // Stable field order supports idempotency even if JSON key order changes in transit.
  return Object.fromEntries(Object.keys(DEFAULT_CONFIG).map(key => [key, output[key]]));
}
const POSTCODE = /^(?:GIR0AA|(?:[A-PR-UWYZ]\d(?:\d|[A-HJKPSTUW])?|[A-PR-UWYZ][A-HK-Y]\d(?:\d|[ABEHMNPRVWXY])?)\d[ABD-HJLNP-UW-Z]{2})$/i;
function text(value, field, { required = false, max = 120 } = {}) {
  value ??= '';
  if (typeof value !== 'string' || value.length > max || /[\u0000-\u001f\u007f<>]/u.test(value)) throw new QuoteInputError(`Please check your ${field}.`, 400, field);
  value = value.trim();
  if (required && !value) throw new QuoteInputError(`Please enter your ${field}.`, 400, field);
  return value;
}
export function validateLead(input) {
  if (!isObject(input)) throw new QuoteInputError('Please enter your contact details.');
  knownKeys(input, ['name', 'email', 'phone', 'postcode', 'timeline', 'marketingConsent', 'privacyAcknowledged']);
  const name = text(input.name, 'name', { required: true, max: 100 });
  if (name.length < 2) throw new QuoteInputError('Please enter your name.', 400, 'name');
  const email = text(input.email, 'email', { required: true, max: 254 }).toLowerCase();
  if (!/^[^\s@]{1,64}@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email)) throw new QuoteInputError('Please enter a valid email address.', 400, 'email');
  const postcode = text(input.postcode, 'postcode', { required: true, max: 12 }).toUpperCase().replace(/\s+/g, '');
  if (!POSTCODE.test(postcode)) throw new QuoteInputError('Please enter a valid UK postcode.', 400, 'postcode');
  const phone = text(input.phone, 'phone', { max: 30 }), digits = phone.replace(/\D/g, '').length;
  if (phone && (!/^[+()\d\s.-]+$/.test(phone) || digits < 7 || digits > 15)) throw new QuoteInputError('Please check your phone number.', 400, 'phone');
  if (input.marketingConsent !== undefined && typeof input.marketingConsent !== 'boolean') throw new QuoteInputError('Please check your contact preferences.', 400, 'marketingConsent');
  if (input.privacyAcknowledged !== true) throw new QuoteInputError('Please acknowledge the privacy notice to request your design guide.', 400, 'privacyAcknowledged');
  return { name, email, phone, postcode: `${postcode.slice(0, -3)} ${postcode.slice(-3)}`, timeline: text(input.timeline, 'timeline', { max: 80 }), marketingConsent: input.marketingConsent === true, privacyAcknowledged: true };
}
