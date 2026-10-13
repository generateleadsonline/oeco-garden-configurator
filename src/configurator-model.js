// The configurator's design model: pure functions only, shared by the page, the scene, the PDF
// and the QA tools. Adapted from the Atelia, Hideaway and SMART configurators (fitting, share
// links, contact rules). Prices come only from Oeco's published figures (configurator-data.js).
import {
  RANGES, RANGE_ORDER, WIDTHS, DEPTHS_FOR, LIMITS, QUICK_SIZES, BUILD, CLADDINGS, CLADDING_ORDER, COLOURS, DEFAULT_COLOUR,
  DESIGNS, OPENINGS, STANDARD, CORNER_GLASS, MAIN_DOOR_TYPES, DOWNSIZE, EXTRA_OPENINGS, WALLS, EXTRAS, OFFER, SIDE_CANOPY,
  DECK_DEPTHS, ACOUSTIC_FINISHES, FLOORS, USES, CONTACT, PRICES, STYLE_KEYS
} from './configurator-data.js';

export {RANGES, RANGE_ORDER, WIDTHS, DEPTHS_FOR, LIMITS, QUICK_SIZES, BUILD, CLADDINGS, CLADDING_ORDER, COLOURS, DESIGNS, OPENINGS, STANDARD, MAIN_DOOR_TYPES, EXTRA_OPENINGS, WALLS, EXTRAS, OFFER, SIDE_CANOPY, DECK_DEPTHS, ACOUSTIC_FINISHES, FLOORS, USES};

export const STEPS = ['shape', 'size', 'exterior', 'openings', 'interior', 'price'];
export const WALL_THICKNESS = BUILD.wall;
const GAP = .1;          // minimum wall between two openings (m)
const CORNER = .2;       // minimum wall from a corner to an opening: clears the 160mm wall and the trim
const round = (v, dp = 3) => Math.round(v * 10 ** dp) / 10 ** dp;
const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const oneOf = (value, object, fallback) => (typeof value === 'string' && has(object, value) ? value : fallback);
const num = v => (v !== null && v !== undefined && v !== '' && Number.isFinite(Number(v)) ? Number(v) : null);
export const nearest = (list, value) => list.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const int = (v, a, b) => clamp(Math.round(num(v) ?? 0), a, b);

// ---- Formatting ------------------------------------------------------------------------------
export const metres = value => `${Number(value).toFixed(1)}m`;
export const metres2 = value => `${Number(value).toFixed(2)}m`;
export const feet = m => { const inches = Math.round(m / .0254); return `${Math.floor(inches / 12)}ft${inches % 12 ? ` ${inches % 12}in` : ''}`; };
export const money = v => '£' + Math.round(v).toLocaleString('en-GB');

// ---- Sizes -------------------------------------------------------------------------------------
/** The depths Oeco offers at a width (the same for every shape). */
export const depthsFor = width => DEPTHS_FOR[nearest(WIDTHS, width)];
/** Snaps any width and depth to the nearest size Oeco publishes. */
export function snapSize(width, depth) {
  const w = nearest(WIDTHS, clamp(num(width) ?? 4, LIMITS.width[0], LIMITS.width[1]));
  const d = nearest(DEPTHS_FOR[w], clamp(num(depth) ?? 3, LIMITS.depth[0], LIMITS.depth[1]));
  return [w, d];
}

// ---- Offer -------------------------------------------------------------------------------------
// "On all orders placed before 31st October 2026": the free upgrades run to the end of that day,
// UK time (GMT after the clocks change on 25 October).
export const OFFER_END = Date.parse(OFFER.ends + 'T23:59:59Z');
export const offerActive = (now = Date.now()) => now <= OFFER_END;

// ---- Price -------------------------------------------------------------------------------------
/** The priced package for a cladding and design, or null (fibre cement and stone are quoted). */
export const packageOf = state => CLADDINGS[state.cladding].packages[state.design] || null;
/** Oeco's published price for the shape, size and style package, or null. */
export function basePrice(state) {
  const key = packageOf(state);
  if (!key) return null;
  const row = PRICES[state.range]?.find(r => r[0] === state.width && r[1] === state.depth);
  return row ? row[2 + STYLE_KEYS.indexOf(key)] : null;
}
/** The cheapest published price for a shape (as the shape step of Oeco's configurator). */
export const fromPrice = range => Math.min(...PRICES[range].map(r => Math.min(...r.slice(2))));

/** Area figures for the per-m² items (shown with the rate, never priced). */
export function areas(state) {
  const s = state, T = WALL_THICKNESS, iw = s.width - 2 * T, id = s.depth - 2 * T;
  const h = BUILD.topBack - BUILD.fascia - BUILD.base - BUILD.roof + .1;
  const glazing = s.openings.reduce((a, o) => a + OPENINGS[o.type].w * OPENINGS[o.type].h * .82, 0);
  const deck = s.deck * s.width;
  const wallLen = s.width < 5 ? id : iw;
  return {
    deck: round(deck, 1), glazing: round(glazing, 1), dividingWall: round(wallLen * (h - .05), 1),
    linings: round(2 * (iw + id) * h + iw * id - glazing, 0), insulation: round(2 * (iw + id) * h + iw * id - glazing, 0)
  };
}

/**
 * The full price: Oeco's published building price plus each extra at its published price.
 * Lines carry a status: 'included' (part of every room), 'priced' (amount added), 'upgrade'
 * (a published replacement price), 'offer' (free in Oeco's October offer), 'quoted' (no published
 * figure, or a per-m² rate on an area a survey fixes: never added).
 */
export function priceFor(input, {now = Date.now()} = {}) {
  const s = normalise(input), offer = offerActive(now);
  const base = basePrice(s), lines = [];
  const add = (key, label, status, amount = null, extra = {}) => lines.push({key, label, status, amount, ...extra});
  const r = RANGES[s.range], c = CLADDINGS[s.cladding];
  // The building.
  if (base === null) add('cladding', `${c.name} cladding`, 'quoted', null, {note: 'Not in Oeco’s priced packages'});
  const colour = c.colours && COLOURS[c.colours][s.colour];
  if (colour && colour.status !== 'included' && base !== null) add('colour', `${c.name} in ${colour.name}`, 'quoted', null, {note: 'Colour confirmed by Oeco'});
  if (s.dir !== c.dirs[0]) add('dir', `${s.dir === 'horizontal' ? 'Horizontal' : 'Vertical'} boards`, 'quoted', null, {note: 'Oeco’s photos show vertical boards'});
  // Doors and windows.
  for (const o of s.openings) {
    const sp = OPENINGS[o.type];
    if (o.role === 'main' && sp.upgrade) add('opening:' + o.id, `${sp.name} instead of the ${OPENINGS[STANDARD[s.design].door].name.toLowerCase()}`, 'upgrade', sp.upgrade, {source: sp.source});
    else if (o.role === 'extra') add('opening:' + o.id, `${sp.name}, ${WALLS[o.wall].toLowerCase()}`, 'priced', sp.price, {source: sp.source});
  }
  // Extras. Counts multiply Oeco's price each; the October offer makes its items free.
  const each = (key, qty, label, opts = {}) => {
    if (!qty) return;
    const e = EXTRAS[key], unit = opts.price ?? e.price, name = n => (typeof label === 'function' ? label(n) : label);
    if (e.offer && offer) return add(key, name(qty), 'offer', 0, {qty, unitPrice: unit, source: e.source});
    if (e.offerFirst && offer) {
      add(key, name(1), 'offer', 0, {qty: 1, unitPrice: unit, source: e.source});
      if (qty > 1) add(key + ':more', name(qty - 1).replace(/^(\d+) /, '$1 more '), 'priced', (qty - 1) * unit, {qty: qty - 1, unitPrice: unit, source: e.source, parent: key});
      return;
    }
    if (unit === null) return add(key, name(qty), 'quoted', null, {qty, source: e.source});
    add(key, name(qty), 'priced', qty * unit, {qty, unitPrice: unit, source: e.source});
  };
  const plural = (one, many = one + 's') => n => `${n} ${n === 1 ? one : many}`;
  const ex = s.extras;
  const sockets = 4 + ex.extraSockets;
  each('extraSockets', ex.extraSockets, `${ex.extraSockets} extra double socket${ex.extraSockets === 1 ? '' : 's'}`, {price: ex.brushedSockets ? EXTRAS.brushedSockets.price : EXTRAS.extraSockets.price});
  if (ex.brushedSockets) {
    // Upgrading the four included sockets: Oeco prices a brushed socket at £35 each but not the
    // upgrade of an included one, so it is free in the offer and quoted after it.
    if (offer) add('brushedSockets', `Brushed aluminium finish on all ${sockets} sockets`, 'offer', 0, {source: EXTRAS.brushedSockets.source});
    else add('brushedSockets', 'Brushed aluminium finish on the four included sockets', 'quoted', null, {note: '£35 each for a brushed socket', source: EXTRAS.brushedSockets.source});
  }
  each('ledPanels', ex.ledPanels, `${ex.ledPanels} extra LED ceiling panel${ex.ledPanels === 1 ? '' : 's'}, 600 × 600mm`);
  each('rgbPanels', ex.rgbPanels, `${ex.rgbPanels} RGB LED ceiling panel${ex.rgbPanels === 1 ? '' : 's'}`);
  each('widePanels', ex.widePanels, `${ex.widePanels} LED ceiling panel${ex.widePanels === 1 ? '' : 's'}, 1200 × 600mm`);
  if (ex.downlights) add('downlights', 'Recessed LED downlights', 'quoted', null, {note: 'POA', source: EXTRAS.downlights.source});
  each('heaters', ex.heaters, plural('electric panel heater'));
  const A = areas(s);
  if (s.layout === 'divided') {
    add('dividingWall', `Internal dividing wall, about ${A.dividingWall}m²`, 'quoted', null, {rate: EXTRAS.dividingWall.price, unit: 'm²', source: EXTRAS.dividingWall.source});
    if (ex.internalDoor) add('internalDoor', 'Internal oak timber door', 'priced', EXTRAS.internalDoor.price, {qty: 1, unitPrice: EXTRAS.internalDoor.price, source: EXTRAS.internalDoor.source});
  }
  if (ex.acousticPanels) add('acousticPanels', `Acoustic wall panels, ${ACOUSTIC_FINISHES[s.acousticFinish].name}`, 'quoted', null, {rate: EXTRAS.acousticPanels.price, note: 'Oeco lists £145 with no unit or panel size', source: EXTRAS.acousticPanels.source});
  if (ex.acousticBoard) add('acousticBoard', `Acoustic plasterboard, about ${A.linings}m² of walls and ceiling`, 'quoted', null, {rate: EXTRAS.acousticBoard.price, unit: 'm²', source: EXTRAS.acousticBoard.source});
  if (ex.acousticInsulation) {
    if (offer) add('acousticInsulation', 'Acoustic insulation (RS45 slab)', 'offer', 0, {rate: EXTRAS.acousticInsulation.price, unit: 'm²', source: EXTRAS.acousticInsulation.source});
    else add('acousticInsulation', `Acoustic insulation, about ${A.insulation}m²`, 'quoted', null, {rate: EXTRAS.acousticInsulation.price, unit: 'm²', source: EXTRAS.acousticInsulation.source});
  }
  if (ex.acousticGlass) add('acousticGlass', `Acoustic glass, about ${A.glazing}m² of glazing`, 'quoted', null, {rate: EXTRAS.acousticGlass.price, unit: 'm²', source: EXTRAS.acousticGlass.source});
  each('upDownLights', ex.upDownLights, `${ex.upDownLights} extra up and down wall light${ex.upDownLights === 1 ? '' : 's'}`);
  each('outdoorSocket', ex.outdoorSocket, plural('outdoor waterproof double socket'));
  if (ex.canopyLights && r.canopy) each('canopyLights', canopyLightCount(s), `${canopyLightCount(s)} canopy downlights`);
  if (ex.waterButt) each('waterButt', 1, '100 litre water butt');
  if (s.sideCanopy !== 'none' && r.canopy) add('sideCanopy', `Canopy side extension, ${SIDE_CANOPY[s.sideCanopy].toLowerCase()}`, 'quoted', null, {note: 'POA', source: EXTRAS.sideCanopy.source});
  if (ex.connection) add('connection', 'Mains connection to your house', 'quoted', null, {note: 'POA, after the site survey', source: EXTRAS.connection.source});
  if (s.deck) {
    if (offer) add('deck', `Composite decking, ${s.deck === .3 ? 'a front lip' : metres(s.deck) + ' deep'} across the front`, 'offer', 0, {rate: EXTRAS.deck.price, unit: 'm²', area: A.deck, source: EXTRAS.deck.source});
    else add('deck', `Composite decking, about ${A.deck}m²`, 'quoted', null, {rate: EXTRAS.deck.price, unit: 'm²', area: A.deck, source: EXTRAS.deck.source});
  }
  if (s.floor !== FLOOR_FOR[s.design]) add('floor', FLOORS[s.floor].name, 'quoted', null, {note: 'Another laminate, chosen when you order'});
  const extrasTotal = lines.reduce((a, l) => a + (l.status === 'priced' || l.status === 'upgrade' ? l.amount : 0), 0);
  return {
    base, package: packageOf(s), extras: extrasTotal, total: base === null ? null : base + extrasTotal, lines,
    quoted: lines.filter(l => l.status === 'quoted'), offer: lines.filter(l => l.status === 'offer'), offerActive: offer
  };
}
export const canopyLightCount = state => Math.max(1, Math.floor(state.width + (state.sideCanopy === 'both' ? 1 : state.sideCanopy !== 'none' ? .5 : 0) + 1e-6));
export function priceLabel(price) {
  if (price.total === null) return 'Quoted by Oeco';
  return money(price.total) + (price.quoted.length ? ' + quoted items' : '');
}
const FLOOR_FOR = {contemporary: 'grey-oak', classic: 'classic-oak'};

// ---- Shape -------------------------------------------------------------------------------------
/**
 * The room's outline as walls, in plan metres: x to the right as you face the front, z towards
 * you, the room centred on the origin. Every shape is a rectangle; the canopy and the Concave's
 * porch project in front of it. Each wall runs from its left end as seen from outside (a) to its
 * right end (b); n is its outward normal.
 */
export function outline(state) {
  const w = state.width, d = state.depth, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const pts = [['front', [x0, z1], [x1, z1]], ['right', [x1, z1], [x1, z0]], ['back', [x1, z0], [x0, z0]], ['left', [x0, z0], [x0, z1]]];
  return pts.map(([id, a, b], i) => {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
    return {id, i, a, b, L: round(L, 4), u, n: [-u[1], u[0]], axis: Math.abs(u[0]) > .5 ? 'x' : 'z'};
  });
}
/** How far the roof projects past each wall: the canopy at the front, a fascia lip elsewhere. */
export function roofOffsets(state) {
  const r = RANGES[state.range], lip = .035, side = r.canopy && state.sideCanopy !== 'none' ? .5 : 0;
  return {
    front: r.canopy || lip, back: lip,
    left: lip + (side && (state.sideCanopy === 'left' || state.sideCanopy === 'both') ? side : 0),
    right: lip + (side && (state.sideCanopy === 'right' || state.sideCanopy === 'both') ? side : 0)
  };
}
/**
 * Height of the top of the fascia above the ground at plan depth z: Oeco's roof falls slightly
 * from front to back, 2.5m at its front edge (the permitted-development maximum).
 */
export function topAt(state, x, z) {
  const off = roofOffsets(state), zb = -state.depth / 2 - off.back, zf = state.depth / 2 + off.front;
  return BUILD.topBack + (z - zb) / (zf - zb) * (BUILD.topFront - BUILD.topBack);
}
export const heightRange = () => ({low: BUILD.topBack, high: BUILD.topFront});
export function wallsOf(state) { return outline(state).map(w => w.id); }
export function wallLength(state, wall) { return outline(state).find(w => w.id === wall)?.L ?? 0; }
/** The lowest clear height under the fascia along a wall, so an opening never cuts the roof. */
export function wallClearHeight(state, wall) {
  const wl = outline(state).find(w => w.id === wall);
  if (!wl) return 0;
  return Math.min(...[wl.a, wl.b].map(([x, z]) => topAt(state, x, z))) - BUILD.fascia - BUILD.base;
}
/** The interior wall of a divided room: across the room, about a third of the way in from the right (or the back on narrow rooms). */
export function layoutWalls(state) {
  if (state.layout !== 'divided') return [];
  const T = WALL_THICKNESS, x0 = -state.width / 2 + T, x1 = state.width / 2 - T, z0 = -state.depth / 2 + T, z1 = state.depth / 2 - T;
  const iw = x1 - x0, id = z1 - z0;
  if (state.width < 5) {
    const z = z0 + Math.max(1, Math.min(1.8, id * .4));
    return [{a: [x0, z], b: [x1, z], door: Math.min(iw - .6, iw * .3), hasDoor: state.extras.internalDoor, axis: 'x'}];
  }
  const x = x1 - Math.max(1.2, Math.min(2.2, iw * .34));
  return [{a: [x, z0], b: [x, z1], door: Math.min(id - .6, id * .72), hasDoor: state.extras.internalDoor, axis: 'z'}];
}

let idCounter = 0;
const newId = () => 'o' + (++idCounter).toString(36) + Math.floor(Math.random() * 1296).toString(36);

/** The corner shapes put the main doors and a tall glass panel either side of a front corner. */
export const cornerSide = state => (RANGES[state.range].corner ? (state.hand === 'left' ? 'left' : 'right') : null);

/**
 * Places openings wall by wall, nearest to where each one asks to be, never overlapping or closer
 * than GAP. Corner glazing (corner: 'start' | 'end') sits flush against its corner post. A door or
 * window that cannot fit steps down within its family, then is dropped. Returns {openings, changes}.
 */
export function fitOpenings(list, state) {
  const result = [], changes = [];
  const walls = outline(state), placed = Object.fromEntries(walls.map(w => [w.id, []]));
  const ordered = [...list].sort((a, b) => (a.corner ? 0 : 1) - (b.corner ? 0 : 1));
  for (const o of ordered) {
    const wall = walls.find(w => w.id === o.wall);
    if (!wall || !has(OPENINGS, o.type)) continue;
    const L = wall.L, clear = wallClearHeight(state, o.wall);
    let type = o.type, spot = null;
    while (type) {
      const s = OPENINGS[type];
      if (s.sill + s.h <= clear - .02) {
        if (o.corner === 'end') spot = L - BUILD.post - s.w / 2;
        else if (o.corner === 'start') spot = BUILD.post + s.w / 2;
        else spot = freeSpot(placed[o.wall], s.w, (num(o.p) ?? .5) * L, CORNER, L);
        if (o.corner && placed[o.wall].some(t => Math.abs(t.c - spot) < (t.w + s.w) / 2 + GAP) || o.corner && s.w > L - BUILD.post - CORNER) spot = null;
      }
      if (spot !== null) break;
      type = DOWNSIZE[type];
    }
    if (spot === null) { changes.push({kind: 'removed', wall: o.wall, type: o.type, role: o.role}); continue; }
    if (type !== o.type) changes.push({kind: 'resized', wall: o.wall, from: o.type, to: type, role: o.role});
    placed[o.wall].push({c: spot, w: OPENINGS[type].w});
    result.push({id: o.id || newId(), wall: o.wall, type, p: round(spot / L, 5), role: o.role || 'extra', ...(o.corner ? {corner: o.corner} : {})});
  }
  // Keep the caller's order (the page lists them as added).
  const order = list.map(o => o.id);
  result.sort((a, b) => (order.indexOf(a.id) + 1 || 999) - (order.indexOf(b.id) + 1 || 999));
  return {openings: result, changes};
}
function freeSpot(taken, w, desired, margin, L) {
  const lo = margin + w / 2, hi = L - margin - w / 2;
  if (hi < lo - 1e-9) return null;
  const blocks = taken.map(t => [t.c - t.w / 2 - GAP - w / 2, t.c + t.w / 2 + GAP + w / 2]).sort((a, b) => a[0] - b[0]);
  const free = [];
  let start = lo;
  for (const [a, b] of blocks) {
    if (a > start) free.push([start, Math.min(a, hi)]);
    start = Math.max(start, b);
  }
  if (start <= hi) free.push([start, hi]);
  let best = null;
  for (const [a, b] of free) {
    if (b < a - 1e-9) continue;
    const c = Math.min(Math.max(desired, a), b);
    if (best === null || Math.abs(c - desired) < Math.abs(best - desired)) best = c;
  }
  return best;
}
/** The main door type for a design and a main-door choice. */
export const mainType = (design, choice) => (choice === 'standard' || !OPENINGS[choice] ? STANDARD[design].door : choice);
/**
 * Oeco's standard layout, from its photos: the main doors towards one end of the front with the
 * window beside them (Contemporary: doors left, wide window right; Classic: doors left, tall window
 * right). Corner shapes run the doors into the corner, with the glass panel round it. A window
 * that does not fit on a narrow front goes on the left side wall.
 */
export function defaultOpenings(state) {
  const std = STANDARD[state.design], hand = cornerSide(state);
  // Doors towards the left, with room for a wall light between them and the corner.
  const main = {id: newId(), wall: 'front', type: mainType(state.design, state.mainDoor), p: .4, role: 'main'};
  const win = {id: newId(), wall: 'front', type: std.window, p: .78, role: 'window'};
  const list = [main];
  if (hand === 'right') { main.corner = 'end'; win.p = .2; list.push({id: newId(), wall: 'right', type: CORNER_GLASS, p: .1, role: 'corner', corner: 'start'}); }
  if (hand === 'left') { main.corner = 'start'; win.p = .8; list.push({id: newId(), wall: 'left', type: CORNER_GLASS, p: .9, role: 'corner', corner: 'end'}); }
  list.push(win);
  let fitted = fitOpenings(list, state);
  if (!fitted.openings.some(o => o.role === 'window')) {
    // The left wall runs from the back to the front, the right wall from the front to the back.
    win.wall = hand === 'left' ? 'right' : 'left'; win.p = win.wall === 'left' ? .66 : .34;
    fitted = fitOpenings(list, state);
  }
  return fitted.openings;
}

// ---- The design ------------------------------------------------------------------------------
const COUNT_KEYS = ['extraSockets', 'ledPanels', 'rgbPanels', 'widePanels', 'heaters', 'upDownLights', 'outdoorSocket'];
const TOGGLE_KEYS = ['brushedSockets', 'downlights', 'internalDoor', 'acousticPanels', 'acousticBoard', 'acousticInsulation', 'acousticGlass', 'canopyLights', 'waterButt', 'connection'];
export const EXTRA_KEYS = [...COUNT_KEYS, ...TOGGLE_KEYS];
export const DEFAULT = Object.freeze({
  v: 1, range: 'cube', use: 'office', width: 4, depth: 3, cladding: 'thermowood', design: 'contemporary', colour: null, dir: 'vertical',
  mainDoor: 'standard', hand: 'right', openings: null, floor: null, layout: 'open', deck: .3, sideCanopy: 'none', acousticFinish: 'antique-oak',
  extras: Object.fromEntries(EXTRA_KEYS.map(k => [k, COUNT_KEYS.includes(k) ? 0 : false])), step: 0
});

/** Turns any input (saved JSON, a share link, a partial patch) into a complete valid design. */
export function normalise(input = {}) {
  if (!input || typeof input !== 'object') input = {};
  const range = oneOf(input.range, RANGES, DEFAULT.range), r = RANGES[range];
  const [width, depth] = snapSize(input.width ?? DEFAULT.width, input.depth ?? DEFAULT.depth);
  const cladding = oneOf(input.cladding, CLADDINGS, DEFAULT.cladding), c = CLADDINGS[cladding];
  const design = c.designs.includes(input.design) ? input.design : c.designs[0];
  const colour = c.colours ? oneOf(input.colour, COLOURS[c.colours], DEFAULT_COLOUR[c.colours]) : null;
  const dir = c.dirs.includes(input.dir) ? input.dir : c.dirs[0];
  const mainDoor = MAIN_DOOR_TYPES.includes(input.mainDoor) ? input.mainDoor : 'standard';
  const e = input.extras && typeof input.extras === 'object' ? input.extras : {};
  const extras = {};
  for (const k of COUNT_KEYS) extras[k] = int(e[k], 0, EXTRAS[k].max);
  for (const k of TOGGLE_KEYS) extras[k] = e[k] === true;
  if (!r.canopy) extras.canopyLights = false;
  const layout = input.layout === 'divided' && width >= 3 && depth >= 2.5 ? 'divided' : 'open';
  if (layout !== 'divided') extras.internalDoor = false;
  const state = {
    v: 1, range, use: oneOf(input.use, USES, DEFAULT.use), width, depth, cladding, design, colour, dir, mainDoor,
    hand: input.hand === 'left' ? 'left' : 'right', openings: [],
    floor: oneOf(input.floor, FLOORS, FLOOR_FOR[design]), layout,
    deck: nearest(DECK_DEPTHS, num(input.deck) ?? DEFAULT.deck), sideCanopy: r.canopy ? oneOf(input.sideCanopy, SIDE_CANOPY, 'none') : 'none',
    acousticFinish: oneOf(input.acousticFinish, ACOUSTIC_FINISHES, DEFAULT.acousticFinish), extras,
    step: clamp(Math.floor(num(input.step) || 0), 0, STEPS.length - 1)
  };
  const list = Array.isArray(input.openings) ? input.openings.filter(o => o && typeof o === 'object').slice(0, 24) : null;
  state.openings = list ? reconcile(list, state) : defaultOpenings(state);
  return state;
}
/**
 * Keeps a saved list of openings consistent with the design: exactly one main door of the right
 * type, the design's included window (unless it was removed on purpose), the corner glass on
 * corner shapes, and the extras the customer added.
 */
function reconcile(list, state) {
  const hand = cornerSide(state), std = STANDARD[state.design];
  let main = list.find(o => o.role === 'main');
  const rest = list.filter(o => o.role !== 'main' && o.role !== 'corner');
  const out = [];
  main = {...(main || {wall: 'front', p: .4}), id: main?.id || newId(), role: 'main', type: mainType(state.design, state.mainDoor)};
  if (hand) { main.wall = 'front'; main.corner = hand === 'right' ? 'end' : 'start'; }
  else delete main.corner;
  out.push(main);
  if (hand) {
    const old = list.find(o => o.role === 'corner');
    out.push({id: old?.id || newId(), wall: hand, type: CORNER_GLASS, p: hand === 'right' ? .1 : .9, role: 'corner', corner: hand === 'right' ? 'start' : 'end'});
  }
  for (const o of rest) {
    if (o.role === 'window') out.push({...o, type: std.window});
    else if (EXTRA_OPENINGS.includes(o.type)) out.push({...o, role: 'extra'});
  }
  return fitOpenings(out, state).openings;
}

/** Applies a change and reports any doors or windows the new shape moved or removed. */
export function apply(state, patch) {
  const merged = {...state, ...patch};
  const keys = Object.keys(patch);
  // A new design brings its own included doors and window, in Oeco's standard layout.
  const relayout = keys.includes('design') && patch.design !== state.design || keys.includes('cladding') && !CLADDINGS[patch.cladding].designs.includes(state.design);
  if (relayout) {
    const design = normalise({...merged, openings: []}).design;
    // The floor follows the design, unless another laminate had been chosen.
    const floor = state.floor === FLOOR_FOR[state.design] ? FLOOR_FOR[design] : merged.floor;
    return {state: normalise({...merged, floor, openings: null}), changes: []};
  }
  const before = merged.openings;
  const next = normalise({...merged, openings: Array.isArray(before) ? before : null});
  const changes = [];
  if (Array.isArray(before)) {
    for (const o of before) {
      const now = next.openings.find(x => x.id === o.id);
      if (!now) changes.push({kind: 'removed', wall: o.wall, type: o.type, role: o.role});
      else if (now.type !== o.type && o.role !== 'main' && o.role !== 'window') changes.push({kind: 'resized', wall: o.wall, from: o.type, to: now.type, role: o.role});
      else if (now.type !== o.type && o.role === 'main' && now.type !== mainType(next.design, next.mainDoor)) changes.push({kind: 'resized', wall: o.wall, from: o.type, to: now.type, role: o.role});
    }
  }
  return {state: next, changes};
}

/** A new shape keeps the size and finishes, and lays out the doors and windows again. */
export function switchRange(state, range) {
  return normalise({...state, range, openings: null, sideCanopy: RANGES[range].canopy ? state.sideCanopy : 'none'});
}

export function addOpening(state, wall, type) {
  const taken = state.openings.filter(o => o.wall === wall);
  const L = wallLength(state, wall);
  let p = .5, best = -1;
  for (const c of [.5, .25, .75, .15, .85]) {
    const room = Math.min(...taken.map(o => Math.abs(o.p * L - c * L) - OPENINGS[o.type].w / 2), 99);
    if (room > best) { best = room; p = c; }
  }
  const id = newId();
  const fitted = fitOpenings([...state.openings, {id, wall, type, p, role: 'extra'}], state);
  return {state: {...state, openings: fitted.openings}, id: fitted.openings.some(o => o.id === id && o.type === type) ? id : null, changes: fitted.changes};
}
/** Whether an opening type fits a wall at all (width and height), for disabling choices. */
export function fitsWall(state, wall, type) {
  const s = OPENINGS[type], L = wallLength(state, wall);
  return s.w <= L - 2 * CORNER + 1e-9 && s.sill + s.h <= wallClearHeight(state, wall) - .02;
}

// ---- Words ---------------------------------------------------------------------------------------
export function claddingName(state) {
  const c = CLADDINGS[state.cladding], colour = c.colours ? COLOURS[c.colours][state.colour] : null;
  return `${c.name}${colour ? ` in ${colour.name}` : ''}, ${state.dir}`;
}
export const styleName = state => `${DESIGNS[state.design].name} ${CLADDINGS[state.cladding].name}`;
export function openingLabel(o) {
  const s = OPENINGS[o.type];
  return o.role === 'corner' ? `${s.name} at the corner` : s.name;
}
export const sizeLabel = state => `${metres(state.width)} × ${metres(state.depth)}`;
export const outlineArea = state => state.width * state.depth;
/** Internal floor area: inside the 160mm walls. */
export const internalArea = state => (state.width - 2 * WALL_THICKNESS) * (state.depth - 2 * WALL_THICKNESS);

const STATUS_FOR = l => l.status;
/**
 * Ordered specification rows {section, label, value, status, amount}: status is included |
 * priced | upgrade | offer | quoted. `info` rows are descriptive and carry no status chip.
 */
export function specRows(input, {now = Date.now()} = {}) {
  const s = normalise(input), r = RANGES[s.range], c = CLADDINGS[s.cladding], price = priceFor(s, {now}), rows = [];
  const add = (section, label, value, status = 'included', extra = {}) => rows.push({section, label, value, status, ...extra});
  const line = key => price.lines.find(l => l.key === key);
  const fromLine = (section, label, value, key) => { const l = line(key); add(section, label, value, l ? STATUS_FOR(l) : 'included', l ? {amount: l.amount, rate: l.rate, unit: l.unit, unitPrice: l.unitPrice, qty: l.qty} : {}); };
  add('Building', 'Shape', `${r.name}: ${r.tag.toLowerCase()}`, price.base === null ? 'quoted' : 'priced', {amount: price.base, building: true});
  add('Building', 'External size', `${metres(s.width)} wide × ${metres(s.depth)} deep (${outlineArea(s).toFixed(1)}m² footprint, about ${internalArea(s).toFixed(1)}m² inside)${r.canopy ? `, plus the ${r.porch ? 'porch and canopy' : 'canopy'} about 0.5m in front` : ''}`, 'info', {info: true});
  add('Building', 'Style', `${styleName(s)}${price.package ? '' : ' (not one of Oeco’s priced packages)'}`, price.package ? 'included' : 'quoted');
  add('Building', 'Height', `About ${metres2(BUILD.topFront)} at the front, falling slightly to the back: within the 2.5m permitted-development limit`, 'included');
  add('Building', 'Construction', '160mm insulated timber-framed walls, 145mm five-layer roof, 178mm insulated floor, concrete pile foundations', 'included');
  add('Building', 'Use', `${USES[s.use].name} (furniture shown for illustration)`, 'info', {info: true});
  const colourLine = line('colour'), dirLine = line('dir'), cladLine = line('cladding');
  add('Exterior', 'Cladding', claddingName(s), cladLine || colourLine || dirLine ? 'quoted' : 'included');
  add('Exterior', 'Fascia, corner and base trims', s.design === 'classic' ? `${c.name}, to match the cladding (Classic design)` : 'Anthracite PVCu, aluminium roof edges (Contemporary design)', 'included');
  if (r.canopy) add('Exterior', r.porch ? 'Porch and canopy' : 'Canopy', `${r.porch ? 'Side walls carried forward to frame a porch, under a' : 'A'} roof canopy over the doors`, 'included');
  if (s.sideCanopy !== 'none') fromLine('Exterior', 'Canopy side extension', `0.5m past ${s.sideCanopy === 'both' ? 'both sides' : 'the ' + SIDE_CANOPY[s.sideCanopy].toLowerCase()}`, 'sideCanopy');
  if (s.deck) fromLine('Exterior', 'Decking', `Anthracite composite, ${s.deck === .3 ? 'a 0.3m lip' : metres(s.deck) + ' deep'} across the front`, 'deck');
  add('Exterior', 'Outside lights', `Two up and down wall lights beside the doors${s.extras.upDownLights ? `, plus ${s.extras.upDownLights} more` : ''}`, s.extras.upDownLights ? STATUS_FOR(line('upDownLights')) : 'included');
  if (s.extras.canopyLights) fromLine('Exterior', 'Canopy downlights', `${canopyLightCount(s)}, one per metre`, 'canopyLights');
  if (s.extras.outdoorSocket) add('Exterior', 'Outdoor socket', `${s.extras.outdoorSocket} waterproof double socket${s.extras.outdoorSocket === 1 ? '' : 's'}`, line('outdoorSocket:more') ? 'priced' : STATUS_FOR(line('outdoorSocket')), {amount: (line('outdoorSocket')?.amount || 0) + (line('outdoorSocket:more')?.amount || 0)});
  add('Exterior', 'Gutter', 'Black half-round gutter and downpipe at the back', 'included');
  if (s.extras.waterButt) fromLine('Exterior', 'Water butt', '100 litres, on the downpipe', 'waterButt');
  if (s.extras.connection) fromLine('Exterior', 'Mains connection', 'Armoured cable to your house’s consumer unit', 'connection');
  for (const o of s.openings) {
    const sp = OPENINGS[o.type], l = line('opening:' + o.id);
    const status = l ? l.status : 'included';
    const dims = /\d/.test(sp.name) ? '' : `, ${(sp.w * 1000).toFixed(0)} × ${(sp.h * 1000).toFixed(0)}mm`;
    add('Doors and windows', o.role === 'main' ? 'Main doors' : o.role === 'window' ? 'Included window' : o.role === 'corner' ? 'Corner glass' : 'Added', `${openingLabel(o)}${dims}, ${WALLS[o.wall].toLowerCase()}`, status, l ? {amount: l.amount} : {});
  }
  if (!s.openings.some(o => o.role === 'window')) add('Doors and windows', 'Included window', 'Removed from this design (no price change is published)', 'info', {info: true});
  add('Doors and windows', 'Frames and glass', 'Anthracite PVCu outside, white inside; A-rated argon-filled Planitherm double glazing; insurance-approved locks', 'included');
  if (s.extras.acousticGlass) fromLine('Doors and windows', 'Acoustic glass', 'In every door and window', 'acousticGlass');
  add('Interior', 'Walls and ceiling', 'Plasterboarded and skimmed, ready to paint', 'included');
  add('Interior', 'Floor', FLOORS[s.floor].name, s.floor === FLOOR_FOR[s.design] ? 'included' : 'quoted');
  add('Interior', 'Electrics', `Consumer unit, ${4 + s.extras.extraSockets} double sockets${s.extras.brushedSockets ? ' in brushed aluminium' : ''}, two-way switch, Part P certificate`, s.extras.extraSockets || s.extras.brushedSockets ? (line('extraSockets')?.status === 'priced' ? 'priced' : line('brushedSockets')?.status === 'quoted' ? 'quoted' : 'offer') : 'included', {amount: line('extraSockets')?.amount});
  const lightParts = [s.design === 'classic' ? 'Four-spot ceiling light' : '600 × 600mm LED ceiling panel'];
  if (s.extras.ledPanels) lightParts.push(`${s.extras.ledPanels} more 600mm panel${s.extras.ledPanels === 1 ? '' : 's'}`);
  if (s.extras.rgbPanels) lightParts.push(`${s.extras.rgbPanels} RGB panel${s.extras.rgbPanels === 1 ? '' : 's'}`);
  if (s.extras.widePanels) lightParts.push(`${s.extras.widePanels} 1200 × 600mm panel${s.extras.widePanels === 1 ? '' : 's'}`);
  if (s.extras.downlights) lightParts.push('recessed downlights');
  const lightLines = ['ledPanels', 'rgbPanels', 'widePanels', 'downlights'].map(line).filter(Boolean);
  add('Interior', 'Lighting', lightParts.join(', '), lightLines.some(l => l.status === 'quoted') ? 'quoted' : lightLines.length ? 'priced' : 'included', {amount: lightLines.reduce((a, l) => a + (l.amount || 0), 0) || undefined});
  if (s.extras.heaters) add('Interior', 'Heating', `${s.extras.heaters} electric panel heater${s.extras.heaters === 1 ? '' : 's'}, 1.5kW`, line('heaters:more') ? 'priced' : STATUS_FOR(line('heaters')), {amount: line('heaters:more')?.amount});
  if (s.layout === 'divided') fromLine('Interior', 'Dividing wall', `Insulated and plastered both sides${s.extras.internalDoor ? ', with an oak internal door' : ', open doorway'}`, 'dividingWall');
  if (s.extras.internalDoor) fromLine('Interior', 'Internal door', 'Oak panel door with frame, handles and lock', 'internalDoor');
  if (s.extras.acousticPanels) fromLine('Interior', 'Acoustic wall panels', ACOUSTIC_FINISHES[s.acousticFinish].name, 'acousticPanels');
  if (s.extras.acousticBoard) fromLine('Interior', 'Acoustic plasterboard', '15mm high-density boards in the walls and ceiling', 'acousticBoard');
  if (s.extras.acousticInsulation) fromLine('Interior', 'Acoustic insulation', 'Knauf RS45 acoustic slab in the walls and floor', 'acousticInsulation');
  add('Service', 'Delivery and installation', 'Delivery to any UK mainland address and full installation by Oeco’s own team', 'included');
  add('Service', 'Guarantee', '10-year structural guarantee', 'included');
  return rows;
}

/** Everything beyond the included specification, as plain lines for forms and the PDF. */
export function upgradesOf(state, {now = Date.now()} = {}) {
  return priceFor(state, {now}).lines.map(l => `${l.label}: ${l.status === 'offer' ? 'free in Oeco’s October offer' : l.status === 'quoted' ? `quoted by Oeco${l.rate ? ` (${money(l.rate)} per ${l.unit || 'item'})` : ''}` : (l.status === 'upgrade' ? '+' : '') + money(l.amount)}`);
}

export function summary(state, base = typeof location !== 'undefined' ? location.origin + '/configurator/' : 'https://oeco-garden-configurator.netlify.app/configurator/', {now = Date.now()} = {}) {
  const s = normalise(state), r = RANGES[s.range], price = priceFor(s, {now});
  return {
    range: r.name, rangeKey: s.range, size: sizeLabel(s), area: outlineArea(s).toFixed(1) + 'm² external footprint',
    use: USES[s.use].name, style: styleName(s), cladding: claddingName(s), price, priceText: priceLabel(price),
    upgrades: upgradesOf(s, {now}), rows: specRows(s, {now}), designLink: shareURL(s, base)
  };
}

// ---- Share links -----------------------------------------------------------------------------------
const WALL_CODE = {front: 'f', right: 'r', back: 'b', left: 'l'};
const CODE_WALL = Object.fromEntries(Object.entries(WALL_CODE).map(([k, v]) => [v, k]));
const ROLE_CODE = {main: 'm', window: 'w', corner: 'c', extra: 'x'};
const CODE_ROLE = Object.fromEntries(Object.entries(ROLE_CODE).map(([k, v]) => [v, k]));
export function encode(state) {
  const s = normalise(state);
  return {
    v: '1', r: s.range, u: s.use, w: s.width, d: s.depth, c: s.cladding, ds: s.design, ...(s.colour ? {cl: s.colour} : {}), dr: s.dir[0],
    md: s.mainDoor, h: s.hand[0],
    o: s.openings.map(o => [ROLE_CODE[o.role], WALL_CODE[o.wall], o.type, Math.round(o.p * 10000)].join('.')).join('_'),
    f: s.floor, ly: s.layout, dk: s.deck, sc: s.sideCanopy, af: s.acousticFinish,
    x: EXTRA_KEYS.filter(k => s.extras[k]).map(k => (typeof s.extras[k] === 'number' ? `${k}-${s.extras[k]}` : k)).join('.')
  };
}
export function shareURL(state, base) {
  const u = new URL(base);
  u.hash = ''; u.search = '';
  Object.entries(encode(state)).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  return u.toString();
}
export function fromURL(url) {
  let p;
  try { p = new URL(url).searchParams; } catch { return null; }
  if (p.get('v') !== '1' || !p.get('r')) return null;
  const openings = !p.has('o') ? null : (p.get('o') || '').split('_').filter(Boolean).map(token => {
    const [role, w, type, pos] = token.split('.');
    return {role: CODE_ROLE[role], wall: CODE_WALL[w], type, p: Number(pos) / 10000};
  }).filter(o => o.role && o.wall && has(OPENINGS, o.type) && Number.isFinite(o.p));
  const extras = {};
  for (const token of (p.get('x') || '').split('.').filter(Boolean)) {
    const [k, n] = token.split('-');
    if (EXTRA_KEYS.includes(k)) extras[k] = n === undefined ? true : Number(n);
  }
  return normalise({
    range: p.get('r'), use: p.get('u'), width: p.get('w'), depth: p.get('d'), cladding: p.get('c'), design: p.get('ds'), colour: p.get('cl'),
    dir: p.get('dr') === 'h' ? 'horizontal' : 'vertical', mainDoor: p.get('md'), hand: p.get('h') === 'l' ? 'left' : 'right', openings,
    floor: p.get('f'), layout: p.get('ly'), deck: p.get('dk'), sideCanopy: p.get('sc'), acousticFinish: p.get('af'), extras, step: p.get('s')
  });
}

// ---- Contact validation (as SMART's and Hideaway's: Ofcom's numbering plan) ------------------------
const POSTCODE = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|[A-HK-Y][0-9]{1,2}|[0-9][A-HJKS-UW]|[A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
export const validPostcode = value => POSTCODE.test(String(value || '').trim());
export function formatPostcode(value) {
  const v = String(value || '').toUpperCase().replace(/\s+/g, '');
  return v.length > 3 ? `${v.slice(0, -3)} ${v.slice(-3)}` : v;
}
// Geographic 01/02, non-geographic 03, mobiles 071-075 and 077-079 (and 07624), corporate 055/056
// and freephone 0800/0808. Premium 09, personal 070, pagers and Ofcom's drama ranges are refused.
const UK_NUMBER = /^0(?:1\d{8,9}|2\d{9}|3[0347]\d{8}|5[56]\d{8}|7(?:[1-57-9]\d{8}|624\d{6})|80[08]\d{6,7})$/;
const DRAMA = [/^07700900\d{3}$/, /^01632960\d{3}$/, /^0113496\d{4}$/, /^0114496\d{4}$/, /^0115496\d{4}$/, /^0116496\d{4}$/, /^0117496\d{4}$/, /^0118496\d{4}$/, /^01414960\d{3}$/, /^01314960\d{3}$/, /^02079460\d{3}$/, /^02890180\d{3}$/, /^02920180\d{3}$/, /^0191498\d{4}$/, /^03069990\d{3}$/, /^08081570\d{3}$/, /^09098790\d{3}$/];
/** Returns {valid, national, e164, display, kind, reason}. Accepts +44, 0044 and (0) forms. */
export function parseUKPhone(input) {
  const raw = String(input || '').trim();
  if (!raw) return {valid: false, reason: 'empty'};
  if (/[^\d\s()+.\-]/.test(raw)) return {valid: false, reason: 'characters'};
  let digits = raw.replace(/\(0\)/g, '').replace(/[^\d+]/g, '');
  if (digits.startsWith('+44')) digits = '0' + digits.slice(3);
  else if (digits.startsWith('0044')) digits = '0' + digits.slice(4);
  else if (digits.startsWith('44') && digits.length >= 12) digits = '0' + digits.slice(2);
  else if (digits.startsWith('+')) return {valid: false, reason: 'international'};
  if (digits.startsWith('00')) return {valid: false, reason: 'international'};
  if (!digits.startsWith('0')) digits = '0' + digits;
  if (!UK_NUMBER.test(digits)) return {valid: false, reason: digits.length < 10 ? 'short' : digits.length > 11 ? 'long' : 'range'};
  if (DRAMA.some(re => re.test(digits)) || /^0\d(\d)\1{7,8}$/.test(digits)) return {valid: false, reason: 'fictional'};
  const kind = digits.startsWith('07') ? 'mobile' : digits.startsWith('01') || digits.startsWith('02') ? 'landline' : 'other';
  let display;
  if (digits.startsWith('02')) display = `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`;
  else if (digits.startsWith('07') || digits.startsWith('01') || digits.startsWith('05')) display = `${digits.slice(0, 5)} ${digits.slice(5)}`;
  else display = `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return {valid: true, national: digits, e164: '+44' + digits.slice(1), display, kind};
}
export function phoneProblem(input) {
  const r = parseUKPhone(input);
  if (r.valid) return '';
  return {
    empty: 'Enter a UK phone number so Oeco can talk you through your design.',
    characters: 'Use numbers only, for example 07123 456789.',
    international: `Enter a UK number. From outside the UK, call Oeco on +44 800 170 1270.`,
    short: 'That number looks too short. UK numbers have 10 or 11 digits, such as 07123 456789.',
    long: 'That number looks too long. UK numbers have 10 or 11 digits, such as 07123 456789.',
    range: 'That does not look like a UK mobile or landline. Check the number, such as 07123 456789 or 01765 123456.',
    fictional: 'That number is reserved and cannot be called. Enter the number we can reach you on.'
  }[r.reason];
}
export const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || '').trim());
export const contactPhone = () => CONTACT.phone;
