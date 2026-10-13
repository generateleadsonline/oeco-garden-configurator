// Oeco garden room designer: page controller. Adapted from the Atelia, Hideaway and SMART
// configurators. Pure design rules and prices live in configurator-model.js; the 3D scene and the
// PDF load only when they are needed.
import {shimDialogs} from './configurator-compat.js';
import {createBoot, RUNGS} from './configurator-boot.js';
import {
  RANGES, RANGE_ORDER, WIDTHS, LIMITS, QUICK_SIZES, CLADDINGS, CLADDING_ORDER, COLOURS, DESIGNS, OPENINGS, STANDARD, MAIN_DOOR_TYPES,
  EXTRA_OPENINGS, WALLS, EXTRAS, SIDE_CANOPY, DECK_DEPTHS, ACOUSTIC_FINISHES, FLOORS, USES, STEPS, BUILD,
  normalise, apply, switchRange, addOpening, fitsWall, priceFor, priceLabel, metres, metres2, feet, money, wallLength, wallsOf,
  shareURL, fromURL, summary, specRows, upgradesOf, claddingName, styleName, openingLabel, parseUKPhone, phoneProblem, validEmail,
  validPostcode, formatPostcode, sizeLabel, outlineArea, internalArea, depthsFor, fromPrice, offerActive, canopyLightCount, areas, cornerSide
} from './configurator-model.js';
import {USPS, CONTACT, BROCHURE, OFFER, CATALOGUE_DATE} from './configurator-data.js';
import {captureAttribution, attributionFields} from './configurator-attribution.js';
import {createTour} from './configurator-tour.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = v => String(v).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const tick = `<span class="tick">${icon('check')}</span>`;
// Every call to action and every step is an analytics event (dataLayer, as GTM expects).
const track = (event, values = {}) => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({event, ...values}); };
const clone = v => JSON.parse(JSON.stringify(v));
const STORAGE = 'oeco-room-design-v2', RECEIPT = 'oeco-price-receipt-v2';
const params = new URLSearchParams(location.search);
const QA = params.has('qa');
const DEBUG3D = params.has('debug3d');
const BOOK = params.has('book');
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const stacked = () => matchMedia('(max-width: 860px)').matches;
// QA can pin the clock (?now=2026-11-02) to check the prices after the October offer ends.
const NOW = () => (QA && params.get('now') ? Date.parse(params.get('now')) : Date.now());

let attributionStore; try { attributionStore = sessionStorage; } catch {}
const attribution = captureAttribution({url: location.href, referrer: document.referrer, storage: attributionStore});

let state = normalise({});
let undoStack = [], future = [];
let scene = null, night = false;
let ui = {wall: 'front', opening: null, adding: null, notice: null, view: 'outside'};
let receipt = null, started = false, lastCapture = null;
const tour = createTour({onEvent: track});

// ---- Persistence ------------------------------------------------------------------------
function restore() {
  const linked = fromURL(location.href);
  if (linked) { state = linked; return 'link'; }
  try { const raw = localStorage.getItem(STORAGE); if (raw) { state = normalise(JSON.parse(raw)); return 'device'; } } catch {}
  return null;
}
function persist() {
  const url = new URL(shareURL(state, location.origin + '/configurator/'));
  url.searchParams.set('s', String(state.step));
  for (const keep of ['qa', 'debug3d', 'tier', 'no3d', 'now']) if (params.has(keep)) url.searchParams.set(keep, params.get(keep));
  window.history.replaceState(null, '', url);
  try { localStorage.setItem(STORAGE, JSON.stringify(state)); } catch {}
}
const unlocked = () => receipt !== null;
function reference(s) {
  let n = 2166136261;
  for (const ch of JSON.stringify({...s, step: 0, openings: s.openings.map(o => [o.wall, o.type, o.p])})) n = Math.imul(n ^ ch.charCodeAt(0), 16777619);
  return 'OECO-' + (n >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

// ---- Focus: where the camera turns for each option, and what it outlines ------------------
const WALL_DIR = {front: [-.28, .2, 1], back: [.28, .22, -1], left: [-1, .22, .28], right: [1, .22, .28]};
function focusFor(key, extra = {}) {
  switch (key) {
    case 'range': return {tags: [], whole: true, highlight: false};
    case 'use': return {tags: ['furniture'], view: 'inside'};
    case 'size': return {tags: [], whole: true, highlight: false, dir: [-.5, .55, 1]};
    case 'cladding': case 'colour': case 'dir': return {tags: ['cladding'], dir: [-.62, .25, 1], whole: true};
    case 'design': return {tags: ['trims', 'fascia'], dir: [-.6, .2, 1], whole: true};
    case 'sideCanopy': return {tags: ['roofDeck', 'fascia'], dir: [-.2, .05, 1], whole: true};
    case 'canopyLights': return {tags: ['canopyLights'], dir: [-.2, .02, 1], pad: .6, ground: true, night: true};
    case 'deck': return {tags: ['deck'], dir: [-.3, .55, 1], pad: .7};
    case 'upDownLights': return {tags: ['upDownLights'], dir: 'auto', pad: 1.4, night: true};
    case 'outdoorSocket': return {tags: ['outdoorSocket'], dir: 'auto', pad: 1, minDistance: 2.6};
    case 'waterButt': return {tags: ['waterButt', 'gutters'], dir: [.7, .3, -1], pad: .8};
    case 'connection': return {tags: ['connection'], dir: [-.4, .9, -1], pad: 1};
    case 'wall': return {tags: ['wall:' + extra.wall], dir: WALL_DIR[extra.wall], pad: .4, highlight: extra.highlight};
    case 'opening': return {tags: ['opening:' + extra.id], dir: WALL_DIR[extra.wall], pad: 1.3, minDistance: 4.2};
    case 'acousticGlass': return {tags: ['glass', 'frames'], dir: [-.2, .12, 1], whole: true};
    case 'floor': return {tags: ['floor'], view: 'inside', lookDown: true};
    case 'layout': case 'internalDoor': return {tags: ['layout'], view: 'inside'};
    case 'extraSockets': return {tags: ['extraSockets'], view: 'inside'};
    case 'brushedSockets': return {tags: ['sockets'], view: 'inside'};
    case 'ledPanels': case 'rgbPanels': case 'widePanels': case 'downlights': return {tags: [key], view: 'inside'};
    case 'heaters': return {tags: ['heaters'], view: 'inside'};
    case 'acousticPanels': case 'acousticFinish': return {tags: ['acousticPanels'], view: 'inside'};
    case 'acousticBoard': case 'acousticInsulation': return {tags: [key], view: 'plan'};
    default: return null;
  }
}

function change(patch, {key, label, focus = {}, value} = {}) {
  beginInteraction();
  let result;
  if (patch.__range) result = {state: switchRange(state, patch.__range), changes: []};
  else result = apply(state, patch);
  const next = {...result.state, step: state.step};
  if (JSON.stringify(next) === JSON.stringify(state)) return;
  undoStack.push(clone(state)); if (undoStack.length > 60) undoStack.shift(); future = [];
  state = next;
  ui.notice = result.changes.length ? describeChanges(result.changes) : null;
  if (ui.opening && !state.openings.some(o => o.id === ui.opening)) ui.opening = null;
  render({keepFocus: true, changed: key});
  persist();
  const spec = key && focusFor(key, focus);
  if (spec && scene) { if (spec.night && !night) setNight(true); scene.focus(spec); }
  if (QA) window.__cfgLastFocus = {key, spec, at: performance.now()};
  if (label) toast(label);
  track('configurator_option_change', {option: key || Object.keys(patch).join(','), value: value ?? label ?? '', range: state.range, step: state.step + 1});
}
function describeChanges(changes) {
  return changes.map(c => c.kind === 'removed'
    ? `There was no room for the ${OPENINGS[c.type].name.toLowerCase()} on the ${WALLS[c.wall].toLowerCase()}, so it was removed.`
    : `The ${OPENINGS[c.from].name.toLowerCase()} on the ${WALLS[c.wall].toLowerCase()} became the ${OPENINGS[c.to].name.toLowerCase()} to fit.`).join(' ');
}
let toastTimer = 0;
function toast(text) {
  const el = $('#change-toast');
  el.hidden = false; el.textContent = text;
  el.classList.remove('is-in'); void el.offsetWidth; el.classList.add('is-in');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  $('#announce').textContent = text;
}
function beginInteraction() {
  if (started) return;
  started = true;
  track('configurator_start', {range: state.range});
}

// ---- Rendering ---------------------------------------------------------------------------
const STEP_COPY = [
  ['Choose your shape', 'Oeco’s five garden room shapes. Each one comes in every size and style.'],
  ['Choose your size', 'Every size Oeco makes: 2.5m to 10m wide, up to 5m deep, in 0.5m steps.'],
  ['Style and outside', 'Cladding and design, then decking, lights and the other outside extras.'],
  ['Doors and windows', 'Your included doors and window, the bi-fold upgrade, and anything you add, on any wall.'],
  ['Make the inside yours', 'Floor, lighting, sockets, heating, a dividing wall and acoustics.'],
  ['Your Oeco garden room', 'Your design, Oeco’s published price and your next steps.']
];
const NEXT_LABEL = ['Next: size', 'Next: style and outside', 'Next: doors & windows', 'Next: inside', 'See my price'];
const STEP_USPS = [['since2006', 'installed', 'guarantee'], ['planning', 'foundations', 'survey'], ['roof', 'insulated', 'onsite'], ['glazing', 'onsite', 'guarantee'], ['plastered', 'electrics', 'insulated'], ['guarantee', 'deposit', 'showroom']];
const USP_ICON = {since2006: 'star', installed: 'truck', foundations: 'check', plastered: 'house', insulated: 'shield', roof: 'shield', glazing: 'window', electrics: 'bolt', guarantee: 'shield', planning: 'ruler', survey: 'pin', showroom: 'pin', deposit: 'lock', onsite: 'ruler'};

const radio = (name, value, checked, body, {cls = '', disabled = false, label = ''} = {}) =>
  `<label class="opt ${cls}" data-key="${name}:${esc(value)}"><input type="radio" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${label ? `aria-label="${esc(label)}"` : ''}><span>${body}</span></label>`;
const swatch = (name, value, checked, hex, label, pattern = '') =>
  `<label class="swatch" data-key="${name}:${esc(value)}"><input type="radio" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''}><span><i class="${pattern}" data-c="${hex || '#cfcfcf'}"></i><small>${esc(label)}</small></span></label>`;
const toggle = (name, checked, title, sub, {disabled = false, badge: b = ''} = {}) =>
  `<label class="switch" data-key="${name}"><input type="checkbox" name="${name}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}><span class="track"></span><span class="opt-text"><strong>${esc(title)} ${b}</strong>${sub ? `<small>${esc(sub)}</small>` : ''}</span></label>`;
const counter = (name, value, max, title, sub, b = '') =>
  `<div class="counter" data-key="${name}"><span class="opt-text"><strong id="${name}-label">${esc(title)} ${b}</strong>${sub ? `<small>${esc(sub)}</small>` : ''}</span><div class="count-ctl" role="group" aria-labelledby="${name}-label"><button type="button" data-count="${name}" data-dir="-1" aria-label="One fewer" ${value <= 0 ? 'disabled' : ''}>${icon('minus')}</button><output aria-live="polite">${value}</output><button type="button" data-count="${name}" data-dir="1" aria-label="One more" ${value >= max ? 'disabled' : ''}>${icon('plus')}</button></div></div>`;
// Status badges: Included, +£ (Oeco's published price), Free in October (the offer), Quoted.
const badge = (status, amount = null) => status === 'priced' || status === 'upgrade' ? `<span class="badge priced">${amount ? '+' + money(amount) : 'Priced'}</span>` : status === 'offer' ? '<span class="badge free">Free in October</span>' : status === 'quoted' ? '<span class="badge quoted">Quoted</span>' : status === 'info' ? '' : '<span class="badge included">Included</span>';
const offerOn = () => offerActive(NOW());
/** The badge for an extra as offered: its published price each, the offer, or Quoted. */
function extraBadge(key) {
  const e = EXTRAS[key];
  if (e.offer && offerOn()) return badge('offer');
  if (e.offerFirst && offerOn()) return `<span class="badge free">First one free</span>`;
  if (e.price === null || e.quoted || e.kind === 'area') return `<span class="badge quoted">${e.price && e.kind === 'area' ? money(e.price) + '/m²' : 'Quoted'}</span>`;
  return `<span class="badge priced">${money(e.price)}${e.kind === 'count' ? ' each' : ''}</span>`;
}
const section = (title, note, body, cls = '') => `<section class="section ${cls}"><div class="section-head"><h3>${title}</h3>${note ? `<small>${note}</small>` : ''}</div>${body}</section>`;
const usp = key => `<div class="usp">${icon(USP_ICON[key] || 'check')}<div><strong>${esc(USPS[key].title)}</strong><span>${esc(USPS[key].copy)}</span></div></div>`;
const segmented = (name, label, items, current, {fmt = v => v, disabled = () => false} = {}) =>
  `<div class="segmented" role="radiogroup" aria-label="${esc(label)}">${items.map(v => `<label data-key="${name}:${v}"><input type="radio" name="${name}" value="${v}" ${String(current) === String(v) ? 'checked' : ''} ${disabled(v) ? 'disabled' : ''}><span>${fmt(v)}</span></label>`).join('')}</div>`;
const offerBanner = () => (offerOn() ? `<p class="offer-banner">${icon('tag')}<span><strong>${esc(OFFER.title)}:</strong> ${esc(OFFER.summary)}.</span></p>` : '');

function renderShape() {
  const r = RANGES[state.range];
  return offerBanner() + section('Choose your shape', 'Oeco’s published starting prices', `<div class="choices">${RANGE_ORDER.map(k => {
      const x = RANGES[k];
      return radio('range', k, state.range === k, `<img src="/assets/img/shape-${k}-240.webp" width="112" height="80" alt="" loading="lazy" decoding="async"><span class="opt-text"><strong>${esc(x.name)}</strong><small>${esc(x.tag)}</small><span class="tags"><span>From ${money(fromPrice(k))}</span></span></span>${tick}`, {cls: 'range-card', label: `${x.name}: ${x.tag}, from ${money(fromPrice(k))}`});
    }).join('')}</div><p class="section-note">${esc(r.description)}</p>`) +
    section('What is it for?', 'Sets the furniture shown', `<div class="choices two uses">${Object.entries(USES).map(([k, u]) => radio('use', k, state.use === k, `<span class="icon">${icon(u.icon)}</span><span class="opt-text"><strong>${esc(u.name)}</strong></span>${tick}`)).join('')}</div>`) +
    `<div class="usp-row">${usp('since2006')}${usp('installed')}</div>`;
}

function renderSize() {
  const depths = depthsFor(state.width), area = outlineArea(state);
  const dimRow = (dim, value, list) => {
    const i = list.indexOf(value), [less, more] = dim === 'width' ? ['Narrower', 'Wider'] : ['Shallower', 'Deeper'];
    return `<div class="dim"><div class="dim-head"><label for="sl-${dim}" id="${dim}-label">${dim === 'width' ? 'Width (the front)' : 'Depth (the sides)'}</label><output for="sl-${dim}" aria-live="polite">${metres(value)}</output><small>${feet(value)}</small></div><div class="row"><button type="button" data-size="${dim}" data-dir="-1" aria-label="${less}" ${i <= 0 ? 'disabled' : ''}>${icon('minus')}</button><input type="range" id="sl-${dim}" data-dim="${dim}" min="${list[0]}" max="${list[list.length - 1]}" step="0.5" value="${value}" aria-valuetext="${metres(value)}" ${list.length < 2 ? 'disabled' : ''}><button type="button" data-size="${dim}" data-dir="1" aria-label="${more}" ${i >= list.length - 1 ? 'disabled' : ''}>${icon('plus')}</button></div></div>`;
  };
  const boundary = area <= 15 ? 'at least 0.5m from any boundary (rooms up to 15m²)' : 'at least 1m from any boundary (rooms over 15m²)';
  return section('Quick sizes', 'External sizes', `<div class="choices">${QUICK_SIZES.map(([w, d, name]) => radio('sizePreset', `${w}x${d}`, state.width === w && state.depth === d, `<span class="opt-text"><strong>${metres(w)} &times; ${metres(d)}</strong><small>${esc(name)}, ${(w * d).toFixed(1)}m&sup2;</small></span>${tick}`)).join('')}</div>`) +
    section('Or set your exact size', '0.5m steps, as Oeco’s configurator', `<div class="dims">${dimRow('width', state.width, WIDTHS)}${dimRow('depth', state.depth, depths)}</div><p class="section-note">At ${metres(state.width)} wide Oeco makes rooms ${metres(depths[0])} to ${metres(depths[depths.length - 1])} deep. Bespoke sizes are available after Oeco’s free site survey.</p><div class="area"><span>External footprint</span><strong>${area.toFixed(1)}m&sup2;</strong></div><div class="area"><span>Inside, about</span><strong>${internalArea(state).toFixed(1)}m&sup2;</strong></div><p class="section-note">About ${metres2(BUILD.topFront)} high, the permitted-development limit, so planning permission is not normally needed. Oeco sites a room this size ${boundary}.${RANGES[state.range].canopy ? ` The ${RANGES[state.range].porch ? 'porch and canopy add' : 'canopy adds'} about 0.5m in front.` : ''}</p>`) +
    `<div class="usp-row">${usp('planning')}${usp('foundations')}</div>`;
}

const PATTERN = {thermowood: 'boards-v', cedar: 'boards-v cedar', smooth: 'boards-v', woodgrain: 'boards-v', fibre: 'boards-h', stone: 'stone'};
function renderExterior() {
  const c = CLADDINGS[state.cladding], r = RANGES[state.range], price = priceFor(state, {now: NOW()});
  const line = key => price.lines.find(l => l.key === key);
  const cladCards = CLADDING_ORDER.map(k => {
    const x = CLADDINGS[k], hex = x.colours ? COLOURS[x.colours][state.cladding === k && state.colour ? state.colour : Object.keys(COLOURS[x.colours])[0]].hex : x.hex;
    return radio('cladding', k, state.cladding === k, `<span class="sw ${PATTERN[k]}" data-c="${hex}"></span><span class="opt-text"><strong>${esc(x.name)} ${x.quoted ? badge('quoted') : ''}</strong><small>${esc(x.note)}</small></span>${tick}`);
  }).join('');
  const designs = segmented('design', 'Design', ['contemporary', 'classic'], state.design, {fmt: v => DESIGNS[v].name, disabled: v => !c.designs.includes(v)});
  const colours = c.colours ? `<p class="section-note"><strong>Colour</strong></p><div class="swatches">${Object.entries(COLOURS[c.colours]).map(([k, x]) => swatch('colour', k, state.colour === k, x.hex, x.name, PATTERN[state.cladding])).join('')}</div><p class="section-note">${esc(COLOURS[c.colours][state.colour].name)} ${badge(COLOURS[c.colours][state.colour].status)} ${COLOURS[c.colours][state.colour].status === 'included' ? 'is the colour Oeco photographs and prices.' : 'is a colour Oeco lists; Oeco confirms it and its price.'} Colours on screen are a guide.</p>` : '';
  const dirs = c.dirs.length > 1 ? `<p class="section-note"><strong>Board direction</strong></p>${segmented('dir', 'Board direction', c.dirs, state.dir, {fmt: v => v === 'vertical' ? 'Vertical (as Oeco’s photos)' : 'Horizontal'})}${state.dir !== c.dirs[0] ? `<p class="section-note">${badge('quoted')} Oeco offers it; its photos and prices show vertical boards.</p>` : ''}` : `<p class="section-note">${esc(c.name)} is fitted ${c.dirs[0]}ly only.</p>`;
  const pkg = price.package ? `${badge('included')} ${esc(styleName(state))} is one of Oeco’s six priced styles.` : `${badge('quoted')} ${esc(c.name)} is on Oeco’s specification but not in its priced styles: Oeco quotes it.`;
  const deckLine = line('deck');
  const canopy = r.canopy ? section('Canopy', r.porch ? 'The porch’s roof' : 'Over the doors', `<p class="section-note"><strong>Side extension ${extraBadge('sideCanopy')}</strong></p>${segmented('sideCanopy', 'Canopy side extension', Object.keys(SIDE_CANOPY), state.sideCanopy, {fmt: v => SIDE_CANOPY[v]})}<p class="section-note">Oeco can carry the canopy 0.5m past one or both sides, for seating, dining or a hot tub.</p>${toggle('canopyLights', state.extras.canopyLights, `${EXTRAS.canopyLights.name} (${canopyLightCount(state)})`, `${EXTRAS.canopyLights.note}, ${money(EXTRAS.canopyLights.price)} each`, {badge: extraBadge('canopyLights')})}`) : '';
  return offerBanner() + section('Cladding', 'Oeco’s six priced styles use the first four', `<div class="choices">${cladCards}</div>`) +
    section('Design', 'Trims, standard doors, floor and light', `${designs}<p class="section-note">${esc(DESIGNS[state.design].note)}.</p><p class="section-note">${pkg}</p>${c.designs.length < 2 ? '<p class="section-note">The Classic design is for Thermowood and Western Red Cedar.</p>' : ''}`) +
    (colours || dirs ? section('Colour and direction', '', `${colours}${dirs}`) : '') +
    canopy +
    section(`Decking ${extraBadge('deck')}`, 'Anthracite composite, across the front', `${segmented('deck', 'Decking depth', DECK_DEPTHS, state.deck, {fmt: v => v ? (v === .3 ? (r.porch ? 'Porch' : 'Front lip') : `${v.toFixed(1)}m`) : 'None'})}<p class="section-note">Oeco’s photos show a ${r.porch ? 'decked porch' : '0.3m front lip'} on its rooms. ${deckLine && deckLine.status === 'offer' ? 'Anthracite composite decking is one of the free upgrades in Oeco’s October offer; Oeco confirms how much it covers.' : `${money(EXTRAS.deck.price)} per m²: about ${areas(state).deck}m² here, confirmed on site.`}</p>`) +
    section('Outside extras', '', `${toggle('waterButt', state.extras.waterButt, EXTRAS.waterButt.name, EXTRAS.waterButt.note, {badge: extraBadge('waterButt')})}${counter('upDownLights', state.extras.upDownLights, EXTRAS.upDownLights.max, EXTRAS.upDownLights.name, `${EXTRAS.upDownLights.note}; ${money(EXTRAS.upDownLights.price)} each`, extraBadge('upDownLights'))}${counter('outdoorSocket', state.extras.outdoorSocket, EXTRAS.outdoorSocket.max, EXTRAS.outdoorSocket.name, `${EXTRAS.outdoorSocket.note}; ${money(EXTRAS.outdoorSocket.price)} each`, extraBadge('outdoorSocket'))}${toggle('connection', state.extras.connection, EXTRAS.connection.name, `${EXTRAS.connection.note}; priced after the site survey`, {badge: extraBadge('connection')})}<button type="button" class="text-button" data-action="dusk">${icon('moon')}<span>See it at dusk</span></button>`) +
    `<div class="usp-row">${usp('roof')}${usp('insulated')}</div>`;
}

function renderOpenings() {
  const walls = wallsOf(state);
  if (!walls.includes(ui.wall)) ui.wall = walls[0];
  const wall = ui.wall, L = wallLength(state, wall), price = priceFor(state, {now: NOW()});
  const list = state.openings.filter(o => o.wall === wall);
  const count = w => state.openings.filter(o => o.wall === w).length;
  const std = OPENINGS[STANDARD[state.design].door];
  const main = state.openings.find(o => o.role === 'main');
  const mainChoices = `<div class="choices">${MAIN_DOOR_TYPES.map(k => {
    const t = k === 'standard' ? STANDARD[state.design].door : k, x = OPENINGS[t], fits = !main || k === state.mainDoor || fitsWall(state, main.wall, t);
    return radio('mainDoor', k, state.mainDoor === k, `<span class="icon">${icon('door')}</span><span class="opt-text"><strong>${esc(k === 'standard' ? `${std.name}, ${(std.w).toFixed(1)}m` : x.name)} ${k === 'standard' ? badge('included') : badge('upgrade', x.upgrade)}</strong><small>${k === 'standard' ? `Included with ${DESIGNS[state.design].name} designs` : 'Anthracite aluminium, replaces the standard doors'}${fits ? '' : ', too wide for this front'}</small></span>${tick}`, {disabled: !fits});
  }).join('')}</div>${main && main.type !== (state.mainDoor === 'standard' ? STANDARD[state.design].door : state.mainDoor) ? `<p class="notice" role="status">${icon('info')}<span>A ${metres(state.width)} front is too narrow for the ${OPENINGS[state.mainDoor === 'standard' ? STANDARD[state.design].door : state.mainDoor].name.toLowerCase()}, so the ${OPENINGS[main.type].name.toLowerCase()} ${OPENINGS[main.type].leaves > 1 ? 'are' : 'is'} drawn. Oeco confirms the doors for this size.</span></p>` : ''}`;
  const tabs = `<div class="wall-tabs" role="tablist" aria-label="Wall" data-walls="${walls.length}">${walls.map(k => `<button type="button" role="tab" data-wall="${k}" aria-selected="${k === wall}"><span>${esc(WALLS[k].replace(' side', '').replace(' wall', ''))}</span><small>${count(k)} ${count(k) === 1 ? 'item' : 'items'}</small></button>`).join('')}</div>`;
  const H = 2.2;
  const diagram = `<div class="wall-diagram" aria-hidden="true"><span class="len">${metres2(L)}</span>${list.map(o => { const s = OPENINGS[o.type]; const left = (o.p * L - s.w / 2) / L * 100, width = s.w / L * 100, top = (s.sill + s.h) / H * 100, bottom = s.sill / H * 100; return `<span class="seg ${s.group === 'door' ? 'is-door' : ''} ${o.id === ui.opening ? 'is-active' : ''}" data-open="${o.id}" data-box="${left.toFixed(2)},${width.toFixed(2)},${(top - bottom).toFixed(2)},${bottom.toFixed(2)}"></span>`; }).join('')}</div>`;
  const roleText = {main: 'Your main doors', window: 'Included window', corner: 'The glass corner', extra: 'Added'};
  const statusOf = o => { const l = price.lines.find(x => x.key === 'opening:' + o.id); return l ? badge(l.status, l.amount) : badge('included'); };
  const editor = o => {
    const s = OPENINGS[o.type], pos = o.p * L;
    const movable = !o.corner;
    return `<div class="opening-edit">${o.role === 'extra' ? `<div><label class="lead" for="type-${o.id}">Type</label><select id="type-${o.id}" data-field="type" data-id="${o.id}">${['door', 'window'].map(g => `<optgroup label="${g === 'door' ? 'Doors' : 'Windows and glass'}">${EXTRA_OPENINGS.filter(k => OPENINGS[k].group === g).map(k => `<option value="${k}" ${k === o.type ? 'selected' : ''} ${fitsWall(state, wall, k) || k === o.type ? '' : 'disabled'}>${esc(OPENINGS[k].name)}, ${money(OPENINGS[k].price)}</option>`).join('')}</optgroup>`).join('')}</select></div>` : ''}
      ${movable ? `<div><label class="lead" for="pos-${o.id}">Position: ${(pos - s.w / 2).toFixed(2)}m from the left corner</label><div class="slide"><button type="button" data-nudge="-1" data-id="${o.id}" aria-label="Move left">${icon('back')}</button><input id="pos-${o.id}" type="range" min="0" max="1000" step="5" value="${Math.round(o.p * 1000)}" data-field="p" data-id="${o.id}"><button type="button" data-nudge="1" data-id="${o.id}" aria-label="Move right">${icon('arrow')}</button></div></div>` : '<p class="section-note">Fixed at the corner post, as Oeco’s Corner shapes.</p>'}
      ${o.role === 'main' || o.corner ? '' : `<div class="opening-actions"><button type="button" class="button ghost small" data-remove="${o.id}">${icon('trash')}<span>Remove</span></button></div>`}${o.role === 'window' ? '<p class="section-note">Removing the included window does not change Oeco’s price.</p>' : ''}</div>`;
  };
  const rows = list.length ? list.map(o => {
    const s = OPENINGS[o.type], active = o.id === ui.opening;
    return `<div class="opening ${active ? 'is-active' : ''}"><button type="button" class="opening-row" data-open="${o.id}" aria-expanded="${active}"><span class="icon">${icon(s.group === 'door' ? 'door' : 'window')}</span><span class="opt-text"><strong>${esc(openingLabel(o))} ${statusOf(o)}</strong><small>${roleText[o.role]}, ${(s.w * 1000).toFixed(0)} &times; ${(s.h * 1000).toFixed(0)}mm${s.note ? ', ' + esc(s.note.toLowerCase()) : ''}</small></span>${icon(active ? 'minus' : 'plus')}</button>${active ? editor(o) : ''}</div>`;
  }).join('') : '<p class="section-note">No doors or windows on this wall yet.</p>';
  const picker = ui.adding ? `<div class="choices spaced">${EXTRA_OPENINGS.filter(k => OPENINGS[k].group === ui.adding).map(k => { const x = OPENINGS[k], ok = fitsWall(state, wall, k); return `<button type="button" class="opt" data-add="${k}" ${ok ? '' : 'disabled'}><span><span class="icon">${icon(x.group === 'door' ? 'door' : 'window')}</span><span class="opt-text"><strong>${esc(x.name)} <span class="badge priced">${money(x.price)}</span></strong><small>${(x.w * 1000).toFixed(0)} &times; ${(x.h * 1000).toFixed(0)}mm${ok ? '' : ', too big for this wall'}</small></span></span></button>`; }).join('')}<button type="button" class="text-button" data-add-cancel>Cancel</button></div>` : `<div class="add-row" role="group" aria-label="Add to this wall"><button type="button" class="button ghost" data-adding="window" aria-label="Add a window or glass panel">${icon('plus')}<span>Window</span></button><button type="button" class="button ghost" data-adding="door" aria-label="Add a door">${icon('plus')}<span>Door</span></button></div>`;
  const notice = ui.notice ? `<p class="notice" role="status">${icon('info')}<span>${esc(ui.notice)}</span><button type="button" data-undo-notice>Undo</button></p>` : '';
  return section('Your main doors', `${DESIGNS[state.design].name} design`, mainChoices) +
    section('Choose a wall', 'Left and right as you face the room', `${tabs}${diagram}<div class="opening-list">${rows}</div>${notice}${picker}<p class="section-note">Tap any door or window in the 3D view to edit it. Added doors and windows are at Oeco’s published prices. You can also fix exact positions with Oeco’s team on site.</p>`) +
    section('Glass', '', toggle('acousticGlass', state.extras.acousticGlass, EXTRAS.acousticGlass.name, `${EXTRAS.acousticGlass.note}; ${money(EXTRAS.acousticGlass.price)} per m², about ${areas(state).glazing}m² here`, {badge: extraBadge('acousticGlass')})) +
    section('Mirror the layout', '', `<button type="button" class="button ghost wide" data-action="mirror">${icon('mirror')}<span>${cornerSide(state) ? 'Put the glass corner on the other side' : 'Flip the doors and windows left to right'}</span></button>`) +
    `<div class="usp-row">${usp('glazing')}${usp('onsite')}</div>`;
}

function renderInterior() {
  const ex = state.extras;
  return offerBanner() + section('Floor', 'Laminate on a moisture-resistant timber floor', `<div class="choices">${Object.entries(FLOORS).map(([k, f]) => radio('floor', k, state.floor === k, `<span class="sw" data-c="${f.hex}"></span><span class="opt-text"><strong>${esc(f.name)} ${f.design === state.design ? badge('included') : badge('quoted')}</strong><small>${f.design === state.design ? `Standard in ${DESIGNS[state.design].name} designs` : 'Chosen when you order'}</small></span>${tick}`)).join('')}</div>`) +
    section('Lighting', state.design === 'classic' ? 'A four-spot ceiling light is included' : 'A 600 × 600mm LED panel is included', `${counter('ledPanels', ex.ledPanels, EXTRAS.ledPanels.max, EXTRAS.ledPanels.name, EXTRAS.ledPanels.note, extraBadge('ledPanels'))}${counter('widePanels', ex.widePanels, EXTRAS.widePanels.max, EXTRAS.widePanels.name, EXTRAS.widePanels.note, extraBadge('widePanels'))}${counter('rgbPanels', ex.rgbPanels, EXTRAS.rgbPanels.max, EXTRAS.rgbPanels.name, EXTRAS.rgbPanels.note, extraBadge('rgbPanels'))}${toggle('downlights', ex.downlights, EXTRAS.downlights.name, EXTRAS.downlights.note, {badge: extraBadge('downlights')})}`) +
    section('Electrics', 'Consumer unit, four double sockets and a two-way switch included', `${counter('extraSockets', ex.extraSockets, EXTRAS.extraSockets.max, EXTRAS.extraSockets.name, `${money(EXTRAS.extraSockets.price)} each white, ${money(EXTRAS.brushedSockets.price)} brushed`, extraBadge('extraSockets'))}${toggle('brushedSockets', ex.brushedSockets, EXTRAS.brushedSockets.name, EXTRAS.brushedSockets.note, {badge: extraBadge('brushedSockets')})}`) +
    section('Heating', '', counter('heaters', ex.heaters, EXTRAS.heaters.max, EXTRAS.heaters.name, `${EXTRAS.heaters.note}; ${money(EXTRAS.heaters.price)} each`, extraBadge('heaters'))) +
    section('Layout', '', `<div class="choices two">${radio('layout', 'open', state.layout === 'open', `<span class="opt-text"><strong>One open room ${badge('included')}</strong></span>${tick}`)}${radio('layout', 'divided', state.layout === 'divided', `<span class="opt-text"><strong>Dividing wall ${extraBadge('dividingWall')}</strong><small>${esc(EXTRAS.dividingWall.note)}</small></span>${tick}`)}</div>${state.layout === 'divided' ? toggle('internalDoor', ex.internalDoor, EXTRAS.internalDoor.name, EXTRAS.internalDoor.note, {badge: extraBadge('internalDoor')}) : ''}`) +
    section('Sound', 'Oeco’s acoustic options', `${toggle('acousticPanels', ex.acousticPanels, EXTRAS.acousticPanels.name, `${EXTRAS.acousticPanels.note}; Oeco lists ${money(EXTRAS.acousticPanels.price)}`, {badge: '<span class="badge quoted">Quoted</span>'})}${ex.acousticPanels ? `<div class="swatches small">${Object.entries(ACOUSTIC_FINISHES).map(([k, f]) => swatch('acousticFinish', k, state.acousticFinish === k, f.hex, f.name, 'boards-v')).join('')}</div>` : ''}${toggle('acousticBoard', ex.acousticBoard, EXTRAS.acousticBoard.name, `${EXTRAS.acousticBoard.note}; see the plan view`, {badge: extraBadge('acousticBoard')})}${toggle('acousticInsulation', ex.acousticInsulation, EXTRAS.acousticInsulation.name, `${EXTRAS.acousticInsulation.note}; see the plan view`, {badge: extraBadge('acousticInsulation')})}`) +
    `<div class="usp-row">${usp('plastered')}${usp('electrics')}</div><p class="illustrative">Furniture is shown for scale and is not included.</p>`;
}

function priceCardHTML(price) {
  const offerLines = price.lines.filter(l => l.status === 'offer'), paid = price.lines.filter(l => l.status === 'priced' || l.status === 'upgrade'), quoted = price.quoted;
  return `<div class="price-head"><div><span class="price-label">Your price</span><strong id="price-value">${price.total === null ? 'Quoted by Oeco' : money(price.total)}</strong><span class="price-for">${price.total === null ? 'Oeco prices this cladding after the survey' : `Oeco’s published prices, ${new Date(CATALOGUE_DATE).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}`}</span></div></div>
    <dl class="price-lines">${price.base !== null ? `<div><dt>${esc(RANGES[state.range].name)} ${esc(sizeLabel(state))}, ${esc(styleName(state))}</dt><dd>${money(price.base)}</dd></div>` : ''}${paid.map(l => `<div><dt>${esc(l.label)}</dt><dd>${l.status === 'upgrade' ? '+' : ''}${money(l.amount)}</dd></div>`).join('')}${offerLines.map(l => `<div class="is-offer"><dt>${esc(l.label)}</dt><dd>Free</dd></div>`).join('')}${quoted.map(l => `<div class="is-quoted"><dt>${esc(l.label)}${l.rate ? ` (${money(l.rate)}${l.unit ? '/' + l.unit : ''})` : ''}</dt><dd>Quoted</dd></div>`).join('')}</dl>
    <p class="price-note">${price.offerActive ? `Includes Oeco’s 5% October discount; the free upgrades apply to orders placed before 31 October 2026. ` : ''}Delivery to UK mainland addresses, foundations and full installation are included. ${quoted.length ? 'Quoted items are priced by Oeco after the site survey. ' : ''}Oeco confirms the final price and specification in writing.</p>`;
}

function renderQuote() {
  const r = RANGES[state.range], open = unlocked(), price = priceFor(state, {now: NOW()});
  $('#quote-summary').innerHTML = `<img id="summary-shot" src="${lastCapture || `/assets/img/shape-${state.range}-240.webp`}" alt="" width="120" height="80"><div><strong>${esc(r.name)}, ${esc(sizeLabel(state))}</strong><span>${esc(styleName(state))}, ${esc(USES[state.use].name.toLowerCase())}</span></div>`;
  $('#quote-locked').hidden = open; $('#quote-unlocked').hidden = !open;
  if (open) $('#price-card').innerHTML = priceCardHTML(price);
  $('#pdf-note').textContent = open ? 'Your design, views and price' : 'Unlocks with your price';
  const rows = specRows(state, {now: NOW()});
  const sections = [...new Set(rows.map(x => x.section))];
  const stepOf = {Building: 1, Exterior: 2, 'Doors and windows': 3, Interior: 4};
  $('#quote-spec').innerHTML = `<h3>Your specification</h3>` + sections.map(sec => `<h3>${esc(sec)} ${stepOf[sec] !== undefined ? `<button type="button" class="spec-edit" data-goto="${stepOf[sec]}">Edit</button>` : ''}</h3><dl>${rows.filter(x => x.section === sec).map(x => `<div class="spec-row"><dt>${esc(x.label)}</dt><dd>${esc(x.value)}</dd><dd class="spec-status">${x.building ? (open ? `<span class="badge priced">${x.amount ? money(x.amount) : 'Quoted'}</span>` : '') : badge(x.status, open ? x.amount : null)}</dd></div>`).join('')}</dl>`).join('') +
    `<p class="section-note">Included items come with every Oeco garden room. Prices are Oeco’s, as published on ${new Date(CATALOGUE_DATE).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}. Quoted items have no published price, or are priced per m² of an area the survey fixes.</p>`;
  $('#quote-proof').innerHTML = ['guarantee', 'installed', 'deposit', 'survey', 'showroom'].map(k => `<li>${icon(USP_ICON[k])}<span><strong>${esc(USPS[k].title)}</strong>${esc(USPS[k].copy)}</span></li>`).join('');
  fillHidden();
}

const RENDERERS = [renderShape, renderSize, renderExterior, renderOpenings, renderInterior];
function render({keepFocus = false, changed = null} = {}) {
  const focusKey = keepFocus ? document.activeElement?.closest('[data-key]')?.dataset.key || null : null;
  const focusCount = keepFocus && document.activeElement?.dataset?.count ? `[data-count="${document.activeElement.dataset.count}"][data-dir="${document.activeElement.dataset.dir}"]` : null;
  const focusSel = keepFocus && !focusKey && document.activeElement?.id ? '#' + document.activeElement.id : null;
  const r = RANGES[state.range], open = unlocked();
  $$('#steps [data-step]').forEach(b => { const i = Number(b.dataset.step); b.removeAttribute('aria-current'); if (i === state.step) b.setAttribute('aria-current', 'step'); b.classList.toggle('is-done', i < state.step); });
  $('#panel-title').firstChild.textContent = STEP_COPY[state.step][0];
  $('#panel-count').textContent = ` (step ${state.step + 1} of 6)`;
  $('#panel-intro').textContent = STEP_COPY[state.step][1];
  $$('[data-panel]').forEach(p => { p.hidden = Number(p.dataset.panel) !== state.step; });
  if (state.step < 5) { const p = $(`[data-panel="${state.step}"]`); p.innerHTML = RENDERERS[state.step](); paint(p); }
  else renderQuote();
  $('#stage-title').textContent = `Your ${r.name} garden room`;
  $('#stage-sub').textContent = `${sizeLabel(state)}, ${styleName(state)}`;
  const price = priceFor(state, {now: NOW()});
  $('#stage-price').classList.toggle('is-unlocked', open);
  $('#stage-price-text').textContent = open ? `${priceLabel(price)}: book a call` : 'See your price';
  $('#stage-price').querySelector('use').setAttribute('href', open ? '#i-calendar' : '#i-lock');
  $('#stage-usps').innerHTML = STEP_USPS[state.step].map(k => `<li>${icon(USP_ICON[k])}${esc(USPS[k].title)}</li>`).join('');
  $('#back').hidden = state.step === 0;
  $('#next-label').textContent = state.step === 5 ? (open ? 'Book a call' : 'Show my price') : NEXT_LABEL[state.step];
  $('#undo').disabled = !undoStack.length; $('#redo').disabled = !future.length;
  posterFor(state.range);
  $('#scene').setAttribute('aria-label', `3D view of an Oeco ${r.name} garden room, ${state.width} by ${state.depth} metres, ${claddingName(state)} cladding, ${state.openings.length} doors and windows.`);
  if (scene) {
    try { scene.update(state); scene.select(ui.opening && state.step === 3 ? ['opening:' + ui.opening] : []); } catch (err) { console.error(err); }
  }
  if (changed) {
    const el = document.querySelector(`[data-key="${CSS.escape(changedKey(changed))}"]`);
    if (el && !reduced()) { el.classList.remove('is-changed'); void el.offsetWidth; el.classList.add('is-changed'); }
  }
  if (focusCount) document.querySelector(focusCount)?.focus({preventScroll: true});
  else if (focusKey) document.querySelector(`[data-key="${CSS.escape(focusKey)}"] input`)?.focus({preventScroll: true});
  else if (focusSel) document.querySelector(focusSel)?.focus({preventScroll: true});
}
// The page's CSP forbids inline style attributes, so colours and positions are set through CSSOM.
function paint(root) {
  root.querySelectorAll('[data-c]').forEach(el => el.style.setProperty('--c', el.dataset.c));
  root.querySelectorAll('[data-box]').forEach(el => { const [l, w, h, b] = el.dataset.box.split(','); Object.assign(el.style, {left: l + '%', width: w + '%', height: h + '%', bottom: b + '%'}); });
  root.querySelectorAll('[data-walls]').forEach(el => el.style.setProperty('--walls', el.dataset.walls));
}
function changedKey(key) {
  const map = {cladding: 'cladding:' + state.cladding, use: 'use:' + state.use, range: 'range:' + state.range, floor: 'floor:' + state.floor, layout: 'layout:' + state.layout, deck: 'deck:' + state.deck, design: 'design:' + state.design, colour: 'colour:' + state.colour, mainDoor: 'mainDoor:' + state.mainDoor, sideCanopy: 'sideCanopy:' + state.sideCanopy};
  return map[key] || key;
}

// The poster: a still of each shape, shown until the 3D is running.
let posterRange = null;
function posterFor(range) {
  if (posterRange === range) return;
  posterRange = range;
  const img = $('#stage-poster'), base = `/assets/img/poster-${range}`;
  img.srcset = `${base}-800.webp 800w, ${base}-1200.webp 1200w`;
  img.src = `${base}-1200.webp`;
  $('#fallback-photo').src = `${base}-1200.webp`;
  $('#fallback-photo').alt = `An Oeco ${RANGES[range].name} garden room`;
}

function designSummary() {
  const s = summary(state, undefined, {now: NOW()});
  return [`Design ${reference(state)}: ${s.range}, ${s.size} (${s.area}), ${s.style}`, `Price: ${priceLabel(s.price)}${s.price.base !== null ? ` (building ${money(s.price.base)})` : ''}`, ...s.upgrades.map(u => `Extra | ${u}`), ...s.rows.map(x => `${x.section} | ${x.label}: ${x.value}${x.info ? '' : ` (${x.status})`}`), `Design link: ${s.designLink}`].join('\n');
}
function fillHidden() {
  const s = summary(state, undefined, {now: NOW()}), r = RANGES[state.range];
  const values = {
    'design-link': s.designLink, 'design-reference': reference(state), 'design-summary': designSummary(),
    'building-style': `${r.name}, ${styleName(state)}`, 'room-size': `${s.size} (${outlineArea(state).toFixed(1)}m²)`,
    'building-price': s.price.base === null ? 'Quoted' : money(s.price.base), 'design-total': priceLabel(s.price),
    'selected-extras': s.upgrades.join('; '), ...attributionFields(attribution)
  };
  for (const form of document.forms) for (const [name, value] of Object.entries(values)) { const el = form.elements.namedItem(name); if (el && !(el instanceof RadioNodeList)) el.value = value; }
}

// ---- Steps and navigation ------------------------------------------------------------------
function selectStep(i, {focusHeading = true} = {}) {
  beginInteraction();
  state.step = Math.max(0, Math.min(5, i));
  ui.adding = null;
  if (state.step !== 3) ui.opening = null;
  render();
  persist();
  scene?.setDimensions(state.step === 1);
  if (scene) {
    if (state.step === 0 || state.step === 5) scene.focus({tags: [], whole: true, highlight: false});
    if (state.step === 1) scene.focus({tags: [], whole: true, highlight: false, dir: [-.5, .55, 1]});
    if (state.step === 2) scene.focus({tags: [], whole: true, highlight: false, dir: [-.62, .3, 1]});
    if (state.step === 3) scene.focus(focusFor('wall', {wall: ui.wall, highlight: false}));
    if (state.step === 4) scene.setView('inside');
  }
  if (focusHeading) { $('#panel-title').focus({preventScroll: true}); $('#panel-body').scrollTop = 0; if (stacked()) $('#panel').scrollIntoView({block: 'start', behavior: reduced() ? 'auto' : 'smooth'}); }
  track('configurator_step_view', {step: state.step + 1, step_name: STEPS[state.step]});
  if (state.step === 5) { track('configurator_quote_view', {range: state.range}); captureThumb(); }
}
function captureThumb() {
  if (!scene) return;
  requestAnimationFrame(() => {
    const shots = scene.capture(['hero'], {width: 480, height: 320});
    if (shots.hero) { lastCapture = shots.hero; const img = $('#summary-shot'); if (img) img.src = lastCapture; }
  });
}
function goToQuote(placement) {
  track('cta_click', {cta: unlocked() ? 'book-call' : 'see-price', placement});
  if (unlocked()) return openDialog('book', $('#stage-price'));
  selectStep(5);
  setTimeout(() => $('#q-first').focus(), reduced() ? 0 : 350);
}

// ---- Panel events ------------------------------------------------------------------------
const panel = $('#panel-body');
const SIZE_LABEL = (w, d) => `${metres(w)} × ${metres(d)}`;
const extraLabel = (key, on) => `${EXTRAS[key].name}${on ? ' added' : ' removed'}`;
panel.addEventListener('change', e => {
  const el = e.target, name = el.name, v = el.value;
  if (el.dataset.field) return onOpeningField(el);
  if (el.dataset.dim) return onSizeSlider(el, false);
  if (name === 'range') return change({__range: v}, {key: 'range', value: v, label: `${RANGES[v].name}: ${RANGES[v].tag.toLowerCase()}`});
  if (name === 'use') return change({use: v}, {key: 'use', value: v, label: `Furnished as a ${USES[v].name.toLowerCase()}`});
  if (name === 'sizePreset') { const [w, d] = v.split('x').map(Number); return change({width: w, depth: d}, {key: 'size', value: v, label: SIZE_LABEL(w, d)}); }
  if (name === 'cladding') return change({cladding: v}, {key: 'cladding', value: v, label: `${CLADDINGS[v].name} cladding`});
  if (name === 'design') return change({design: v}, {key: 'design', value: v, label: `${DESIGNS[v].name} design, with its standard doors and window`});
  if (name === 'colour') return change({colour: v}, {key: 'colour', value: v, label: COLOURS[CLADDINGS[state.cladding].colours][v].name});
  if (name === 'dir') return change({dir: v}, {key: 'dir', value: v, label: `${v === 'vertical' ? 'Vertical' : 'Horizontal'} boards`});
  if (name === 'sideCanopy') return change({sideCanopy: v}, {key: 'sideCanopy', value: v, label: v === 'none' ? 'No side extension' : `Canopy extended: ${SIDE_CANOPY[v].toLowerCase()}`});
  if (name === 'deck') return change({deck: Number(v)}, {key: Number(v) ? 'deck' : 'cladding', value: v, label: Number(v) ? `Decking ${Number(v) === .3 ? 'lip' : Number(v).toFixed(1) + 'm'}` : 'No decking'});
  if (name === 'mainDoor') return change({mainDoor: v}, {key: 'opening', value: v, focus: {id: state.openings.find(o => o.role === 'main')?.id, wall: 'front'}, label: v === 'standard' ? 'Standard doors' : OPENINGS[v].name});
  if (name === 'floor') return change({floor: v}, {key: 'floor', value: v, label: FLOORS[v].name});
  if (name === 'layout') return change({layout: v, extras: {...state.extras, internalDoor: v === 'divided' ? true : false}}, {key: 'layout', value: v, label: v === 'divided' ? 'Dividing wall with an oak door' : 'One open room'});
  if (name === 'acousticFinish') return change({acousticFinish: v}, {key: 'acousticFinish', value: v, label: `Acoustic panels: ${ACOUSTIC_FINISHES[v].name}`});
  if (el.type === 'checkbox' && name in state.extras) {
    const fallback = {waterButt: 'cladding', connection: 'cladding', canopyLights: 'sideCanopy', acousticGlass: 'acousticGlass', downlights: 'ledPanels', brushedSockets: 'brushedSockets', internalDoor: 'layout', acousticPanels: 'acousticPanels', acousticBoard: 'acousticBoard', acousticInsulation: 'acousticInsulation'};
    return change({extras: {...state.extras, [name]: el.checked}}, {key: el.checked ? name : fallback[name] || name, value: String(el.checked), label: extraLabel(name, el.checked)});
  }
});
panel.addEventListener('input', e => {
  if (e.target.type === 'range' && e.target.dataset.field) onOpeningField(e.target, true);
  else if (e.target.dataset.dim) onSizeSlider(e.target, true);
});
// The size sliders resize the room live; the whole drag becomes one undo step when released.
let sizeDrag = null;
function onSizeSlider(el, live) {
  const dim = el.dataset.dim, value = Math.round(Number(el.value) * 2) / 2;
  if (!sizeDrag) sizeDrag = {before: clone(state)};
  const before = state.depth;
  const res = apply(state, {[dim]: value});
  state = {...res.state, step: state.step};
  const out = el.closest('.dim')?.querySelector('output');
  if (out) out.textContent = metres(state[dim]);
  el.setAttribute('aria-valuetext', metres(state[dim]));
  scene?.update(state);
  if (!live) {
    undoStack.push(sizeDrag.before); future = []; sizeDrag = null;
    ui.notice = res.changes.length ? describeChanges(res.changes) : null;
    persist(); render({keepFocus: true});
    scene?.focus(focusFor('size'));
    const deepest = depthsFor(state.width)[depthsFor(state.width).length - 1];
    toast(dim === 'width' && state.depth !== before ? `Width ${metres(state.width)}: Oeco makes this width up to ${metres(deepest)} deep, so the depth is now ${metres(state.depth)}` : `${dim === 'width' ? 'Width' : 'Depth'} ${metres(state[dim])}`);
    track('configurator_option_change', {option: 'size', value: `${dim}:${state[dim]}`, range: state.range, step: state.step + 1});
  }
}
panel.addEventListener('click', e => {
  const b = e.target.closest('button, [data-open]');
  if (!b) return;
  if (b.dataset.size) {
    const dim = b.dataset.size, dir = Number(b.dataset.dir), list = dim === 'width' ? WIDTHS : depthsFor(state.width);
    const i = list.indexOf(state[dim]), next = list[Math.max(0, Math.min(list.length - 1, i + dir))];
    const depthBefore = state.depth;
    change({[dim]: next}, {key: 'size', value: `${dim}:${next}`, label: `${dim === 'width' ? 'Width' : 'Depth'} ${metres(next)}`});
    if (dim === 'width' && state.depth !== depthBefore) toast(`Oeco makes ${metres(state.width)} wide rooms up to ${metres(depthsFor(state.width)[depthsFor(state.width).length - 1])} deep, so the depth is now ${metres(state.depth)}`);
    return;
  }
  if (b.dataset.count) {
    const k = b.dataset.count, next = Math.max(0, Math.min(EXTRAS[k].max, state.extras[k] + Number(b.dataset.dir)));
    return change({extras: {...state.extras, [k]: next}}, {key: k, value: String(next), label: `${EXTRAS[k].name}: ${next}`});
  }
  if (b.dataset.wall) { ui.wall = b.dataset.wall; ui.opening = null; ui.adding = null; render(); scene?.focus(focusFor('wall', {wall: ui.wall})); $(`[data-wall="${ui.wall}"]`)?.focus(); track('configurator_option_view', {option: 'wall', value: ui.wall}); return; }
  if (b.dataset.open) {
    ui.opening = ui.opening === b.dataset.open ? null : b.dataset.open; ui.adding = null; render();
    const o = state.openings.find(x => x.id === b.dataset.open);
    if (o && ui.opening) scene?.focus(focusFor('opening', {id: o.id, wall: o.wall}));
    document.querySelector(`.opening-row[data-open="${b.dataset.open}"]`)?.focus();
    return;
  }
  if (b.dataset.adding) { ui.adding = b.dataset.adding; render(); panel.querySelector('[data-add]:not(:disabled)')?.focus(); track('configurator_option_view', {option: 'add-' + b.dataset.adding, value: ui.wall}); return; }
  if (b.hasAttribute('data-add-cancel')) { ui.adding = null; render(); return; }
  if (b.dataset.add) {
    const res = addOpening(state, ui.wall, b.dataset.add);
    ui.adding = null;
    if (!res.id) { ui.notice = `There is no room for the ${OPENINGS[b.dataset.add].name.toLowerCase()} on the ${WALLS[ui.wall].toLowerCase()}. Try a smaller one, or another wall.`; render(); return; }
    ui.opening = res.id;
    change({openings: res.state.openings}, {key: 'opening', value: b.dataset.add, focus: {id: res.id, wall: ui.wall}, label: `${OPENINGS[b.dataset.add].name} added to the ${WALLS[ui.wall].toLowerCase()}`});
    return;
  }
  if (b.dataset.remove) {
    const o = state.openings.find(x => x.id === b.dataset.remove);
    ui.opening = null;
    change({openings: state.openings.filter(x => x.id !== b.dataset.remove)}, {key: 'wall', value: 'remove', focus: {wall: o.wall, highlight: true}, label: `${OPENINGS[o.type].name} removed. Undo is at the bottom of the 3D view.`});
    return;
  }
  if (b.dataset.nudge) {
    const o = state.openings.find(x => x.id === b.dataset.id), L = wallLength(state, o.wall);
    const p = Math.max(0, Math.min(1, o.p + Number(b.dataset.nudge) * .1 / L));
    return change({openings: state.openings.map(x => x.id === o.id ? {...x, p} : x)}, {key: 'opening', value: 'nudge', focus: {id: o.id, wall: o.wall}});
  }
  if (b.hasAttribute('data-undo-notice')) { $('#undo').click(); return; }
  if (b.dataset.action === 'mirror') return mirror();
  if (b.dataset.action === 'dusk') { setNight(true); return; }
});
let drag = null;
function onOpeningField(el, live = false) {
  const id = el.dataset.id, o = state.openings.find(x => x.id === id);
  if (!o) return;
  const field = el.dataset.field;
  const value = field === 'p' ? Number(el.value) / 1000 : el.value;
  const patch = {openings: state.openings.map(x => x.id === id ? {...x, [field]: value} : x)};
  const L = wallLength(state, o.wall);
  if (field === 'p') {
    if (!drag || drag.id !== id) drag = {id, before: clone(state)};
    const res = apply(state, patch);
    state = {...res.state, step: state.step};
    scene?.update(state); scene?.select(['opening:' + id]);
    const moved = state.openings.find(x => x.id === id);
    const label = el.closest('.opening-edit')?.querySelector(`label[for="pos-${id}"]`);
    if (label && moved) label.textContent = `Position: ${(moved.p * L - OPENINGS[moved.type].w / 2).toFixed(2)}m from the left corner`;
    if (!live) {
      undoStack.push(drag.before); future = []; drag = null;
      persist(); render({keepFocus: true});
      scene?.focus({...focusFor('opening', {id, wall: o.wall}), highlight: false});
      track('configurator_option_change', {option: 'opening-position', range: state.range, step: 4});
    }
    return;
  }
  change(patch, {key: 'opening', value: `${field}:${value}`, focus: {id, wall: o.wall}, label: field === 'type' ? `${OPENINGS[value].name} on the ${WALLS[o.wall].toLowerCase()}` : undefined});
}
function mirror() {
  const flip = {left: 'right', right: 'left', front: 'front', back: 'back'};
  const openings = state.openings.filter(o => o.role !== 'corner').map(o => ({...o, wall: flip[o.wall], p: 1 - o.p}));
  change({openings, hand: state.hand === 'left' ? 'right' : 'left'}, {key: cornerSide(state) ? 'design' : 'cladding', value: 'mirror', label: cornerSide(state) ? 'The glass corner moved to the other side' : 'Doors and windows mirrored'});
}

// ---- Stage controls -----------------------------------------------------------------------
function setView(v) {
  ui.view = v;
  $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
  $('#stage-hint').textContent = v === 'inside' ? 'Drag to look around the room. Scroll, pinch or use + and - to zoom.' : v === 'plan' ? 'From above with the roof off, dimensions in metres. Drag to move, scroll or pinch to zoom.' : 'Drag to look around. Scroll or pinch to zoom.';
  $('#stage-hint').classList.remove('is-faded');
  clearTimeout(setView.t); setView.t = setTimeout(() => $('#stage-hint').classList.add('is-faded'), 4000);
}
function setNight(on) {
  night = on; scene?.setNight(on);
  $('#dusk').setAttribute('aria-pressed', String(on));
  $('#dusk').setAttribute('aria-label', on ? 'Show it in daylight' : 'Show it at dusk');
  $('#dusk use').setAttribute('href', on ? '#i-sun' : '#i-moon');
  track('configurator_dusk', {on});
}
const needs3d = () => { if (!bootStarted) startBoot('control'); };
$$('[data-view]').forEach(b => b.addEventListener('click', () => { needs3d(); scene?.setView(b.dataset.view); setView(b.dataset.view); track('configurator_view_change', {view: b.dataset.view}); }));
$('#zoom-in').addEventListener('click', () => { needs3d(); scene?.zoom(1); track('configurator_zoom', {direction: 'in'}); });
$('#zoom-out').addEventListener('click', () => { needs3d(); scene?.zoom(-1); track('configurator_zoom', {direction: 'out'}); });
$('#reset-view').addEventListener('click', () => { scene?.setView('outside'); setView('outside'); track('configurator_view_change', {view: 'reset'}); });
$('#dusk').addEventListener('click', () => setNight(!night));
$('#fullscreen').addEventListener('click', () => { const s = $('#stage'); if (document.fullscreenElement) document.exitFullscreen(); else s.requestFullscreen?.().catch(() => {}); track('configurator_fullscreen'); });
$('#undo').addEventListener('click', () => { if (!undoStack.length) return; future.push(clone(state)); const st = state.step; state = {...undoStack.pop(), step: st}; ui.notice = null; render(); persist(); toast('Undone'); track('configurator_undo'); });
$('#redo').addEventListener('click', () => { if (!future.length) return; undoStack.push(clone(state)); const st = state.step; state = {...future.pop(), step: st}; render(); persist(); toast('Redone'); track('configurator_redo'); });
$('#stage-price').addEventListener('click', () => goToQuote('stage'));
$$('#steps [data-step]').forEach(b => b.addEventListener('click', () => { track('cta_click', {cta: 'step-tab', placement: 'steps', step: Number(b.dataset.step) + 1}); selectStep(Number(b.dataset.step)); }));
$('#back').addEventListener('click', () => { track('cta_click', {cta: 'back', placement: 'footer', step: state.step + 1}); selectStep(state.step - 1); });
$('#next').addEventListener('click', () => {
  track('cta_click', {cta: state.step < 5 ? 'next' : unlocked() ? 'book-call' : 'show-price', placement: 'footer', step: state.step + 1});
  if (state.step < 5) return selectStep(state.step + 1);
  if (unlocked()) return openDialog('book', $('#next'));
  $('form[name="oeco-quote"]').requestSubmit();
});
document.addEventListener('click', e => {
  const goto = e.target.closest('[data-goto]'); if (goto) { track('cta_click', {cta: 'edit-section', placement: 'price-step', step: Number(goto.dataset.goto) + 1}); selectStep(Number(goto.dataset.goto)); }
  const cta = e.target.closest('[data-cta]'); if (cta) track('cta_click', {cta: cta.dataset.cta, placement: placementOf(cta)});
  const dlg = e.target.closest('[data-dialog]'); if (dlg) openDialog(dlg.dataset.dialog, dlg);
  const close = e.target.closest('[data-close]'); if (close) { track('cta_click', {cta: 'close-dialog', placement: placementOf(close)}); close.closest('dialog')?.close(); }
});
function placementOf(el) {
  return !el ? 'page' : el.closest('header') ? 'header' : el.closest('.menu-sheet') ? 'menu' : el.closest('dialog') ? el.closest('dialog').id.replace('dlg-', 'dialog-') : el.closest('.quote') ? 'price-step' : el.closest('.stage') ? 'stage' : 'page';
}

// ---- Dialogs ------------------------------------------------------------------------------
// Oeco's office hours: Monday to Friday, 9am to 5pm (UK time).
function bookingDays() {
  const out = [], d = new Date();
  while (out.length < 8) {
    d.setDate(d.getDate() + 1);
    const day = d.toLocaleDateString('en-GB', {weekday: 'long', timeZone: 'Europe/London'});
    if (day === 'Saturday' || day === 'Sunday') continue;
    out.push(d.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/London'}));
  }
  return out;
}
function openDialog(name, from) {
  const d = $('#dlg-' + name);
  if (!d) return;
  $('#menu-sheet').hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false');
  fillHidden();
  if (name === 'share') { $('#share-link').value = shareURL(state, location.origin + '/configurator/'); $('#share-status').hidden = true; }
  if (name === 'book') { const sel = $('#bk-day'); if (!sel.options.length) sel.innerHTML = bookingDays().map(x => `<option>${esc(x)}</option>`).join(''); }
  if (name === 'showroom') $('#showroom-offer').textContent = offerOn() ? `Oeco’s offer: ${OFFER.showroom}.` : '';
  for (const [k, v] of Object.entries(contactMemo)) { const el = d.querySelector(`[name="${k}"]`); if (el && !el.value) el.value = v; }
  d.querySelector('.dialog-done') && (d.querySelector('.dialog-done').hidden = true);
  d.querySelector('form') && (d.querySelector('form').hidden = false);
  d.showModal();
  d.querySelector('input:not([type=hidden]):not([tabindex="-1"]), button')?.focus();
  d.addEventListener('close', () => from?.isConnected && from.focus({preventScroll: true}), {once: true});
  track('cta_click', {cta: name, placement: placementOf(from), step: state.step + 1});
  track('configurator_dialog_open', {dialog: name});
}
let contactMemo = {};
shimDialogs();
$$('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
$('#menu-toggle').addEventListener('click', () => { const open = $('#menu-sheet').hidden; $('#menu-sheet').hidden = !open; $('#menu-toggle').setAttribute('aria-expanded', String(open)); track('cta_click', {cta: 'menu', placement: 'header', open}); });
$('#share-copy').addEventListener('click', async () => {
  const link = $('#share-link').value, status = $('#share-status');
  try { await navigator.clipboard.writeText(link); status.textContent = 'Link copied. Paste it anywhere to open this exact design.'; }
  catch { $('#share-link').select(); status.textContent = 'Select the link above and copy it.'; }
  status.hidden = false; track('configurator_share', {method: 'copy'}); track('cta_click', {cta: 'copy-link', placement: 'dialog-share'});
});
$('#new-design').addEventListener('click', () => { undoStack.push(clone(state)); future = []; state = normalise({}); render(); persist(); $('#dlg-share').close(); toast('A fresh design. Undo brings your last one back.'); track('configurator_new_design'); track('cta_click', {cta: 'new-design', placement: 'dialog-share'}); });
$('#tour-open').addEventListener('click', e => { track('cta_click', {cta: 'help', placement: 'header'}); tour.start(e.currentTarget); });
$('#menu-tour').addEventListener('click', () => { $('#menu-sheet').hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false'); track('cta_click', {cta: 'help', placement: 'menu'}); tour.start($('#menu-toggle')); });

// ---- Forms --------------------------------------------------------------------------------
function fieldError(input, message) {
  const err = input.closest('.field')?.querySelector('.field-error');
  input.setAttribute('aria-invalid', String(Boolean(message)));
  input.classList.toggle('is-valid', !message && Boolean(input.value.trim()));
  if (err) {
    err.hidden = !message; err.textContent = message || '';
    if (!err.id) err.id = input.id + '-error';
    const hint = document.getElementById(input.id + '-hint');
    input.setAttribute('aria-describedby', [hint ? hint.id : '', err.id].filter(Boolean).join(' '));
  }
  return !message;
}
function check(input) {
  const v = input.value.trim(), name = input.name;
  if (input.closest('[hidden]')) return true;
  if (!input.required && !v) return fieldError(input, '');
  if (name === 'first-name' || name === 'last-name') return fieldError(input, !v ? `Enter your ${name === 'first-name' ? 'first' : 'last'} name.` : /^[\p{L}][\p{L}' .-]*$/u.test(v) ? '' : 'Use letters only, please.');
  if (name === 'email') return fieldError(input, validEmail(v) ? '' : 'Enter an email address like name@example.com.');
  if (name === 'phone') return fieldError(input, phoneProblem(v));
  if (name === 'postcode') return fieldError(input, validPostcode(v) ? '' : 'Enter a full UK postcode, such as HG4 1AJ.');
  return fieldError(input, '');
}
for (const form of document.forms) {
  form.addEventListener('focusout', e => {
    const input = e.target;
    if (!input.matches?.('input[required], select[required]')) return;
    if (input.name === 'phone') { const p = parseUKPhone(input.value); if (p.valid) input.value = p.display; }
    if (input.name === 'postcode' && validPostcode(input.value)) input.value = formatPostcode(input.value);
    if (input.value || input.getAttribute('aria-invalid') === 'true') check(input);
  });
  form.addEventListener('input', e => { if (e.target.getAttribute('aria-invalid') === 'true') check(e.target); });
  form.addEventListener('change', e => { if (e.target.tagName === 'SELECT' && e.target.required) check(e.target); });
  form.addEventListener('submit', submit);
  let viewed = false, begun = false;
  const kind = form.dataset.kind;
  form.addEventListener('focusin', () => { if (!viewed) { viewed = true; track('configurator_form_view', {form: kind, range: state.range}); } });
  form.addEventListener('input', () => { if (!begun) { begun = true; track('configurator_form_start', {form: kind, range: state.range}); } });
}
async function submit(e) {
  e.preventDefault();
  const form = e.currentTarget, kind = form.dataset.kind || 'quote';
  if (form.dataset.busy) return;
  fillHidden();
  const inputs = [...form.querySelectorAll('input[required], select[required]')];
  const bad = inputs.filter(i => !check(i));
  const status = form.querySelector('.form-status');
  track('configurator_submit_attempt', {form: kind, range: state.range});
  track('cta_click', {cta: 'submit-' + kind, placement: kind === 'quote' ? 'price-step' : 'dialog-' + kind});
  if (bad.length) { bad[0].focus(); status.hidden = false; status.classList.remove('ok'); status.textContent = bad.length === 1 ? 'Please check the highlighted field.' : `Please check the ${bad.length} highlighted fields.`; track('configurator_form_error', {form: kind, field: bad[0].name, count: bad.length}); return; }
  status.hidden = true;
  const phone = parseUKPhone(form.elements.phone.value);
  form.elements['phone-e164'].value = phone.e164;
  form.elements.phone.value = phone.display;
  form.elements.postcode.value = formatPostcode(form.elements.postcode.value);
  const button = form.querySelector('[type=submit]'); button.classList.add('is-busy'); form.dataset.busy = '1';
  const sending = clone(state);
  const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 20000);
  try {
    const body = new URLSearchParams(new FormData(form)).toString();
    const res = await fetch('/configurator/', {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body, signal: controller.signal});
    if (!res.ok) throw new Error('Not saved');
    const first = form.elements['first-name'].value.trim();
    contactMemo = {'first-name': first, 'last-name': form.elements['last-name'].value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value, postcode: form.elements.postcode.value};
    if (kind === 'quote') {
      receipt = reference(sending);
      try { sessionStorage.setItem(RECEIPT, receipt); sessionStorage.setItem(RECEIPT + '-name', first); } catch {}
      render();
      $('#thanks-title').textContent = `Thanks, ${first}. Your design is with Oeco.`;
      $('#quote-unlocked').scrollIntoView({block: 'start', behavior: reduced() ? 'auto' : 'smooth'});
      toast('Here is your price. Your PDF is ready.');
      const price = priceFor(sending, {now: NOW()});
      const lead = {lead_type: 'oeco_configurator_quote', range: sending.range, area_m2: Number(outlineArea(sending).toFixed(1)), value: price.total ?? undefined, currency: 'GBP'};
      track('configurator_enquiry_saved', lead); track('generate_lead', lead);
    } else {
      const done = form.closest('dialog').querySelector('.dialog-done');
      form.hidden = true; done.hidden = false;
      done.querySelector('.done-copy').textContent = kind === 'callback'
        ? `Thanks, ${first}. Oeco’s sales team will call you on ${phone.display}, with your design in front of them.`
        : kind === 'visit' ? `Thanks, ${first}. Oeco will call you on ${phone.display} to arrange your showroom visit.`
        : kind === 'book' ? `Thanks, ${first}. Oeco will confirm your call for ${form.elements['preferred-day'].value}, ${form.elements['preferred-time'].value}, on ${phone.display}.`
        : `Thanks, ${first}. Open the guide below.`;
      done.querySelector('h2').focus();
      if (kind === 'brochure') window.open(BROCHURE, '_blank', 'noopener');
      track('generate_lead', {lead_type: `oeco_${kind}`, range: sending.range});
    }
  } catch {
    status.hidden = false; status.classList.remove('ok');
    status.textContent = `That did not send. Your design is safe: please try again, or call Oeco free on ${CONTACT.phone}.`;
    track('configurator_submit_error', {form: kind});
  } finally { clearTimeout(timer); button.classList.remove('is-busy'); delete form.dataset.busy; }
}

// ---- PDF ----------------------------------------------------------------------------------
const PDF_VIEWS = ['hero', 'front', 'back', 'left', 'right', 'inside', 'inside2', 'plan', 'dusk'];
async function downloadPdf(placement) {
  const status = $('#pdf-status');
  track('cta_click', {cta: 'download-pdf', placement});
  if (!unlocked()) { status.textContent = 'Enter your details above to see your price and unlock your PDF.'; $('#q-first').focus(); track('configurator_pdf_locked'); return; }
  const buttons = [$('#pdf-download'), $('#pdf-download-main')]; buttons.forEach(b => { b.disabled = true; });
  status.textContent = 'Drawing your design from every side and building your PDF. This takes a few seconds.';
  try {
    if (!scene) { needs3d(); await waitFor(() => scene, 20000); }
    const views = scene ? scene.capture(PDF_VIEWS, {width: 2000, height: 1250}) : {};
    const mod = await loadPdf();
    let name = ''; try { name = sessionStorage.getItem(RECEIPT + '-name') || ''; } catch {}
    const out = await mod.downloadPDF(state, views, {contactName: name, reference: reference(state), now: NOW()});
    status.textContent = `Your PDF has downloaded (${out.pages} pages): renders of every side, inside and the plan, your specification, your price and how to book.`;
    track('configurator_pdf_download', {range: state.range, pages: out.pages, views: Object.keys(views).length});
  } catch (err) {
    console.error(err);
    status.textContent = `The PDF could not be made on this device. Your design link has been copied instead; call Oeco on ${CONTACT.phone} and they will send it to you.`;
    try { await navigator.clipboard.writeText(shareURL(state, location.origin + '/configurator/')); } catch {}
    track('configurator_pdf_error');
  } finally { buttons.forEach(b => { b.disabled = false; }); }
}
const loadPdf = () => import(/*PDF*/'/assets/js/configurator-pdf.js');
const waitFor = (fn, ms) => new Promise(resolve => { const end = Date.now() + ms; const t = () => (fn() || Date.now() > end ? resolve(fn()) : setTimeout(t, 200)); t(); });
$('#pdf-download').addEventListener('click', () => downloadPdf('tile'));
$('#pdf-download-main').addEventListener('click', () => downloadPdf('next-step'));

// ---- Start --------------------------------------------------------------------------------
const loadedFrom = restore();
try { receipt = sessionStorage.getItem(RECEIPT); } catch {}
render();
persist();
setView('outside');
track('configurator_view', {range: state.range, resumed: Boolean(loadedFrom)});
track('configurator_step_view', {step: state.step + 1, step_name: STEPS[state.step]});
if (loadedFrom === 'link') toast('This shared design is ready to make your own.');
else if (loadedFrom === 'device') toast('Welcome back. Your design is as you left it.');
window.addEventListener('pagehide', e => { if (!e.persisted) scene?.dispose(); });
if (BOOK) setTimeout(() => openDialog('book', null), 300);

// ---- 3D ------------------------------------------------------------------------------------
// configurator-boot.js (reused from SMART) runs the preview: it picks the renderer and tier,
// retries, steps down, guards against crash loops and keeps the diagnostics.
const FALLBACK_TEXT = {
  context: "The 3D view couldn't start this time. Your design is saved, so loading it again is safe.",
  setup: "The 3D view couldn't start this time. Your design is saved, so loading it again is safe.",
  load: "The 3D view didn't download. Check your connection and load it again; your design is saved.",
  build: "The 3D view couldn't draw this design. Your choices still work, and Oeco sees every detail."
};
const TIER_PARAM = QA && params.get('tier');
function preferredRung() {
  const memory = navigator.deviceMemory || 8;
  if (memory <= 2) return 'low';
  const coarse = matchMedia('(pointer: coarse)').matches;
  return coarse || memory <= 4 || Math.min(screen.width, screen.height) < 700 ? 'medium' : 'high';
}
function pickPart(hit) {
  if (hit.kind === 'opening') {
    const o = state.openings.find(x => x.id === hit.id); if (!o) return;
    ui.wall = o.wall; ui.opening = o.id; ui.adding = null;
    if (state.step !== 3) selectStep(3, {focusHeading: false}); else render();
    scene?.focus(focusFor('opening', {id: o.id, wall: o.wall}));
    document.querySelector(`.opening-row[data-open="${o.id}"]`)?.scrollIntoView({block: 'nearest', behavior: reduced() ? 'auto' : 'smooth'});
    track('configurator_3d_pick', {part: 'opening'});
  } else {
    const stepOf = {canopyLights: 2, porch: 2, canopy: 2, roof: 2, fascia: 2, trims: 2, deck: 2, cladding: 2, base: 2, upDownLights: 2, includedLights: 2, outdoorSocket: 2, waterButt: 2, connection: 2, floor: 4, furniture: 0, layout: 4, electrics: 4, lighting: 4, heaters: 4, acousticPanels: 4, interiorWalls: 4, ceiling: 4};
    const st = stepOf[hit.part];
    if (st !== undefined && st !== state.step) { selectStep(st, {focusHeading: false}); toast('Showing the options for what you tapped'); }
    track('configurator_3d_pick', {part: hit.part});
  }
}
const storage = name => { try { return window[name]; } catch { return null; } };
let sceneError = null, firstScene = true, bootStarted = false;
const boot = createBoot({
  container: $('#scene'),
  load: level => (level === 1 ? import(/*SCENE_GL1*/'/assets/js/scene-gl1.js') : import(/*SCENE*/'/assets/js/scene.js')),
  design: () => state,
  preferred: preferredRung(),
  override: RUNGS.includes(TIER_PARAM) ? TIER_PARAM : null,
  session: storage('sessionStorage'),
  local: storage('localStorage'),
  keyPrefix: 'oeco',
  track,
  sceneOptions: {onViewChange: v => setView(v), onPick: pickPart},
  onChange(phase, detail) {
    if (phase === 'loading' || phase === 'down') {
      scene = null;
      $('#stage-loader-text').textContent = firstScene ? 'Building your room in 3D' : 'Reloading the 3D view';
      $('#stage-loader').hidden = false;
    } else if (phase === 'ready') sceneReady(detail);
    else if (phase === 'verified') $('#stage-poster').classList.add('is-gone');
    else if (phase === 'failed') sceneFailed3d(detail.reason, detail.error);
    debug3d();
  }
});
function sceneReady(next) {
  scene = next;
  scene.setDimensions(state.step === 1);
  scene.select(ui.opening && state.step === 3 ? ['opening:' + ui.opening] : []);
  if (night) scene.setNight(true);
  const view = firstScene ? (state.step === 4 ? 'inside' : 'outside') : ui.view;
  if (view && view !== 'outside') scene.setView(view, {animate: firstScene});
  $('#stage-loader').hidden = true;
  $('#stage-fallback').hidden = true;
  $$('.view-switch, .stage-tools, .history, #stage-hint').forEach(el => { el.hidden = false; });
  if (boot.rung === 'svg') toast('Showing a simplified 3D view on this device. Every choice works as normal.');
  if (!firstScene) return;
  firstScene = false;
}
function sceneFailed3d(reason, err) {
  if (err) console.error(err);
  scene = null;
  $('#stage-loader').hidden = true; $('#stage-fallback').hidden = false;
  $('#fallback-caption').textContent = FALLBACK_TEXT[reason] || FALLBACK_TEXT.context;
  $('#fallback-retry').hidden = false;
  $$('.stage-tools, .history, #stage-hint').forEach(el => { el.hidden = true; });
  $('#stage').dataset.fallback = reason;
  sceneError = err ? String(err) : reason;
  track('configurator_3d_fallback', {reason, webgl: boot.gl, error: err ? String(err).slice(0, 120) : undefined});
  firstScene = false;
}
// ?debug3d on any device shows what the 3D is running on and every step it took, with Copy
// report, so a phone that misbehaves can say why.
function debug3d() {
  if (!DEBUG3D) return;
  let box = $('#debug3d');
  if (!box) {
    box = document.createElement('aside'); box.id = 'debug3d'; box.className = 'debug3d';
    box.innerHTML = '<pre></pre><button type="button" class="button ghost small">Copy report</button>';
    document.body.append(box);
    box.querySelector('button').addEventListener('click', () => navigator.clipboard?.writeText(box.querySelector('pre').textContent).catch(() => {}));
  }
  const d = boot.diagnostics(), s = d.scene || {};
  const fallback = $('#stage').dataset.fallback;
  box.querySelector('pre').textContent = [
    `3D: ${fallback ? 'photo (' + fallback + ')' : (d.rung || 'not started') + (d.verified ? '' : ' (starting)')} | WebGL ${d.gl}`,
    `GPU: ${s.gpu || '-'}`,
    `ratio ${s.ratio ?? '-'} | buffer ${s.buffer ? s.buffer.join('x') : '-'} | antialias ${s.context?.antialias ?? '-'} | max texture ${s.maxTexture ?? '-'}`,
    `extensions: ${s.extensions?.join(', ') || '-'}`,
    `textures ${s.textures?.textures ?? '-'} (scale ${s.textures?.scale ?? '-'}, flat ${s.textures?.failures ?? 0}) | frames ${s.frames ?? '-'}`,
    `first frame: ${s.samples?.length ? JSON.stringify(s.samples[0]) : '-'} | gl errors ${s.glErrors?.join(',') || '-'}`,
    `shader errors: ${s.shaderErrors?.join(' || ') || '-'}`,
    `error: ${sceneError || s.lastError || '-'}`,
    'steps:',
    ...d.log.map(e => `  +${e.t}ms ${e.rung || '-'} ${e.event}${e.detail ? ': ' + e.detail : ''}`),
    `screen ${screen.width}x${screen.height} @${devicePixelRatio} | memory ${navigator.deviceMemory || '?'}GB`,
    navigator.userAgent
  ].join('\n');
}
$('#fallback-retry').addEventListener('click', () => { track('configurator_3d_retry', {reason: $('#stage').dataset.fallback}); persist(); location.reload(); });

// The 3D loads only when it is needed: at once on a desktop, on the first touch, scroll or key
// on a phone (the poster shows the room until then), and after a few idle seconds otherwise.
function startBoot(why) {
  if (bootStarted) return;
  bootStarted = true;
  for (const ev of WAKE) removeEventListener(ev, wake, true);
  track('configurator_3d_start', {trigger: why});
  boot.start();
}
// The tour on a first visit, a moment after the page settles; Help replays it.
if (!tour.seen() && !QA) setTimeout(() => { if (!document.querySelector('dialog[open]')) tour.start(); }, 1200);
const WAKE = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'];
const wake = e => startBoot(e.type);
for (const ev of WAKE) addEventListener(ev, wake, {capture: true, passive: true});
const idle = (fn, timeout) => (window.requestIdleCallback ? requestIdleCallback(fn, {timeout}) : setTimeout(fn, timeout));
const desktop = matchMedia('(pointer: fine)').matches && innerWidth >= 1024;
if (QA && params.has('no3d')) bootStarted = true;
else if (QA || desktop || DEBUG3D || loadedFrom === 'link') idle(() => startBoot('idle'), 800);
else setTimeout(() => idle(() => startBoot('timer'), 1500), 5000);

// QA hook for headless checks: ?qa=1 exposes the live scene, the design and the boot's report.
if (QA) {
  window.__cfg = {
    get scene() { return scene; }, get state() { return state; },
    get rung() { return boot.rung; }, get boot() { return boot.diagnostics(); },
    get attempt() { return Math.max(0, boot.diagnostics().log.filter(e => e.event === 'ready').length - 1); },
    get fallback() { return $('#stage').dataset.fallback || null; },
    set(patch) { const r = apply(state, patch); state = {...r.state, step: state.step}; render(); persist(); },
    // The customer PDF without a form submission, for QA and the reviewed example.
    async pdf(options = {}) {
      const views = scene ? scene.capture(PDF_VIEWS, {width: 2000, height: 1250}) : {};
      return (await loadPdf()).downloadPDF(state, views, {reference: reference(state), now: NOW(), ...options});
    },
    unlock() { receipt = 'QA'; render(); },
    model: {normalise, apply, switchRange, specRows, priceFor, addOpening, wallsOf, fitsWall}, focusFor,
    data: {RANGES, RANGE_ORDER, OPENINGS, CLADDINGS, COLOURS, DESIGNS, EXTRAS, EXTRA_OPENINGS, MAIN_DOOR_TYPES, SIDE_CANOPY, DECK_DEPTHS, ACOUSTIC_FINISHES, FLOORS, USES, LIMITS}
  };
}
void [upgradesOf, LIMITS, STANDARD];
