import { PRICE_BOOK } from './price-book.mjs';
import { SHAPES, STYLES, CLADDINGS, DOORS, WINDOWS, nameFor } from '../shared/catalog.js';
import { validateConfig } from './validation.mjs';

export const PRICE_VERSION = 'oeco-live-configurator-2026-10-11';
export const SOURCE_URL = 'https://www.oecogardenrooms.co.uk/garden-rooms.html';
export const INCLUSIONS = Object.freeze([
  'UK mainland delivery and on-site installation, subject to access and site confirmation',
  'Concrete or steel pile foundation system, subject to suitable ground conditions',
  'Fully insulated floor, walls and roof',
  'Plastered interior walls and ceiling',
  'Choice of laminate flooring',
  'Concealed internal electrical wiring, four white double sockets and a 600mm LED ceiling panel',
  'A-rated PVCu double glazing to the standard design specification',
  'Rear rainwater guttering and downpipe',
  '10-year structural guarantee, subject to Oeco terms',
]);
export const EXCLUSIONS = Object.freeze([
  'Mains electrical connection from the garden room to the house consumer unit is quoted separately.',
  'Nonstandard window and door preferences are confirmed separately in your Oeco quotation.',
  'Site preparation, unusual ground conditions, access restrictions and any additional works require a survey.',
  'Planning, Building Regulations and permissions depend on your site and intended use.',
  'Furniture, planting and garden styling shown in the concept are illustrative.',
  'Final dimensions, specification, promotion eligibility, delivery arrangements and VAT treatment are confirmed by Oeco.',
]);
export function sourceStyle(config) {
  if (config.cladding === 'thermowood') return `thermo-${config.style}`;
  if (config.cladding === 'cedar') return `cedar-${config.style}`;
  return config.cladding;
}
export function calculateEstimate(input) {
  const c = validateConfig(input);
  const row = PRICE_BOOK[c.shape]?.find(row => row.width === c.width && row.depth === c.depth);
  const entry = row?.styles?.[sourceStyle(c)];
  if (!entry || !Number.isFinite(entry.price) || entry.price <= 0) throw new Error('PublishedPriceUnavailable');
  const requestedExtras = [];
  const standardDoor = c.style === 'classic' ? 'patio' : 'sliding';
  const standardWindow = c.style === 'classic' ? 'wide' : 'narrow';
  if (c.doors !== standardDoor) requestedExtras.push({ label: `${nameFor(DOORS, c.doors)} doors instead of standard ${nameFor(DOORS, standardDoor).toLowerCase()} doors`, status: 'quote-required' });
  if (c.window !== standardWindow) requestedExtras.push({ label: c.window === 'none' ? 'Side window preference: no side window instead of the standard style layout' : `Side window preference: ${nameFor(WINDOWS, c.window).toLowerCase()} on the ${c.windowSide} instead of the standard style layout`, status: 'quote-required' });
  return {
    total: entry.price,
    basePrice: entry.price,
    lower: entry.price,
    upper: null,
    vatIncluded: null,
    currency: 'GBP',
    squareMetres: Math.round(c.width * c.depth * 100) / 100,
    basis: 'current-published-package-price',
    sourceStyle: entry.sourceStyle,
    sourceDate: '2026-10-11',
    sourceUrl: SOURCE_URL,
    priceVersion: PRICE_VERSION,
    priceLabel: 'Published Oeco package price',
    description: `${nameFor(SHAPES, c.shape)} ${c.width.toFixed(1)}m × ${c.depth.toFixed(1)}m · ${nameFor(STYLES, c.style)} · ${nameFor(CLADDINGS, c.cladding)}`,
    items: [{ label: 'Current published Oeco room package', amount: entry.price }],
    requestedExtras,
    inclusions: INCLUSIONS.map(item => item.startsWith('A-rated') ? (c.style === 'classic' ? 'A-rated PVCu double glazing: standard 1.5m double patio doors and 0.4m x 1.6m tall fixed window' : 'A-rated PVCu double glazing: standard 2.4m sliding doors and 1.2m x 0.5m letterbox opening window') : item),
    exclusions: [...EXCLUSIONS],
    assumptions: [
      'This reproduces the current Oeco configurator package price for the selected shape, external size, style and cladding.',
      'Nonstandard window and door preferences are confirmed separately. Final specification, site conditions and VAT treatment are confirmed by Oeco.',
      'This guide is an indicative starting point, not a binding quote or order confirmation.',
    ],
  };
}
