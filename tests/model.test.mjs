// Model tests: every shape, size, style and price against Oeco's own configurator (the audit in
// research/audit-2026-10-13), every extra against its optional-extras page, no invented prices,
// the October offer, fitting, the glass corner, share links and the UK contact rules.
// node --test tests/
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';

// The model imports JSON; bundle it once for node.
const out = await build({entryPoints: ['src/configurator-model.js'], bundle: true, format: 'esm', write: false, platform: 'neutral', logLevel: 'silent'});
const M = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
const AUDIT = JSON.parse(readFileSync('research/audit-2026-10-13/style-prices.json', 'utf8'));
const SIZES = JSON.parse(readFileSync('research/audit-2026-10-13/sizes-prices.json', 'utf8'));
const EXTRAS_AUDIT = JSON.parse(readFileSync('research/audit-2026-10-13/extras.json', 'utf8')).extras;
const DURING = Date.parse('2026-10-20T12:00:00Z'), AFTER = Date.parse('2026-11-02T12:00:00Z');
const STYLE = {'thermo-contemporary': ['thermowood', 'contemporary'], 'thermo-classic': ['thermowood', 'classic'], smoothgrain: ['smooth', 'contemporary'], woodgrain: ['woodgrain', 'contemporary'], 'cedar-contemporary': ['cedar', 'contemporary'], 'cedar-classic': ['cedar', 'classic']};

test('the five shapes are Oeco’s, in its configurator’s order', () => {
  assert.deepEqual(M.RANGE_ORDER, ['cube', 'canopy', 'corner', 'concave', 'canopy-corner']);
  assert.deepEqual(M.RANGE_ORDER.map(k => M.RANGES[k].name), ['Cube', 'Canopy', 'Corner', 'Concave', 'Canopy Corner']);
  assert.deepEqual(Object.keys(AUDIT.catalogue), M.RANGE_ORDER);
});

test('every one of the 2,130 published prices is the price shown for that design', () => {
  let n = 0;
  for (const [shape, rows] of Object.entries(AUDIT.catalogue)) for (const row of rows) for (const [key, {price}] of Object.entries(row.styles)) {
    const [cladding, design] = STYLE[key];
    const s = M.normalise({range: shape, width: row.width, depth: row.depth, cladding, design});
    assert.equal(s.width, row.width); assert.equal(s.depth, row.depth);
    assert.equal(M.basePrice(s), price, `${shape} ${row.width}x${row.depth} ${key}`);
    assert.equal(M.priceFor(s, {now: DURING}).total, price, `${shape} ${row.width}x${row.depth} ${key}: the default design adds nothing`);
    n++;
  }
  assert.equal(n, 2130);
});

test('the shape step’s starting prices are the cheapest prices, as Oeco shows them', () => {
  assert.deepEqual(M.RANGE_ORDER.map(M.fromPrice), [16524, 17208, 17322, 18006, 18006]);
  for (const r of M.RANGE_ORDER) assert.ok(M.RANGES[r].highlights[0] === `From £${M.fromPrice(r).toLocaleString('en-GB')}`);
  // The size step shows each size's cheapest price.
  for (const [shape, rows] of Object.entries(SIZES.catalogue)) for (const row of rows) assert.equal(M.basePrice(M.normalise({range: shape, width: row.width, depth: row.depth})), row.price);
});

test('sizes: the 71 width and depth pairs Oeco offers, and nothing else', () => {
  const pairs = AUDIT.catalogue.cube.map(r => `${r.width}x${r.depth}`).sort();
  assert.equal(pairs.length, 71);
  const ours = M.WIDTHS.flatMap(w => M.depthsFor(w).map(d => `${w}x${d}`)).sort();
  assert.deepEqual(ours, pairs);
  for (const shape of M.RANGE_ORDER) assert.deepEqual(AUDIT.catalogue[shape].map(r => `${r.width}x${r.depth}`).sort(), pairs);
  // Anything else snaps to the nearest offered size: depth is clamped by width.
  assert.deepEqual([M.normalise({width: 10, depth: 5}).width, M.normalise({width: 10, depth: 5}).depth], [10, 3]);
  assert.deepEqual([M.normalise({width: 2.5, depth: 4}).width, M.normalise({width: 2.5, depth: 4}).depth], [2.5, 2.5]);
  assert.deepEqual([M.normalise({width: 4.2, depth: 3.3}).width, M.normalise({width: 4.2, depth: 3.3}).depth], [4, 3.5]);
  assert.deepEqual([M.normalise({width: 1, depth: 1}).width, M.normalise({width: 99, depth: 99}).width], [2.5, 10]);
});

test('every extra’s price is Oeco’s published price, and POA items have none', () => {
  const byName = Object.fromEntries(EXTRAS_AUDIT.map(e => [e.name, e]));
  for (const [k, e] of Object.entries(M.EXTRAS)) {
    assert.ok(byName[e.source], `${k}: ${e.source} is on Oeco's page`);
    assert.equal(e.price, byName[e.source].price, k);
  }
  for (const [k, o] of Object.entries(M.OPENINGS)) {
    const src = byName[o.source];
    assert.ok(src, `${k}: ${o.source} is on Oeco's page`);
    assert.equal(o.price ?? o.upgrade, src.price, k);
  }
  // All 34 extras on the page are offered somewhere.
  const used = new Set([...Object.values(M.EXTRAS).map(e => e.source), ...Object.values(M.OPENINGS).map(o => o.source)]);
  for (const e of EXTRAS_AUDIT) assert.ok(used.has(e.name) || e.name === 'Double Socket - Brushed Aluminium', `${e.name} is offered`);
  assert.equal(EXTRAS_AUDIT.length, 34);
});

test('extras add exactly their published prices; quoted items never add anything', () => {
  const base = M.normalise({width: 6, depth: 4});
  const p0 = M.basePrice(base);
  const priced = M.normalise({...base, mainDoor: 'bifold30', layout: 'divided', extras: {...base.extras, internalDoor: true, ledPanels: 2, widePanels: 1, rgbPanels: 1}});
  assert.equal(M.priceFor(priced, {now: DURING}).total, p0 + 1695 + 495 + 2 * 145 + 245 + 215);
  const added = M.addOpening(base, 'back', 'glass10');
  assert.equal(M.priceFor(M.normalise({...base, openings: added.state.openings}), {now: DURING}).total, p0 + 485);
  // Quoted: POA items and the per-m² ones whose area the survey fixes.
  const quoted = M.normalise({...base, sideCanopy: 'both', range: 'canopy', layout: 'divided', extras: {...base.extras, downlights: true, connection: true, acousticBoard: true, acousticGlass: true, acousticPanels: true}});
  const p = M.priceFor(quoted, {now: DURING});
  assert.equal(p.total, M.basePrice(quoted) + 495 * 0, 'quoted items add nothing (no internal door chosen)');
  assert.deepEqual(p.quoted.map(l => l.key).sort(), ['acousticBoard', 'acousticGlass', 'acousticPanels', 'connection', 'dividingWall', 'downlights', 'sideCanopy'].sort());
  // Fibre cement and stone have no package price: the whole design is quoted.
  for (const cladding of ['fibre', 'stone']) assert.equal(M.priceFor(M.normalise({cladding}), {now: DURING}).total, null);
  // A colour other than the photographed one is confirmed, not priced.
  assert.equal(M.priceFor(M.normalise({cladding: 'smooth', colour: 'redwood'}), {now: DURING}).quoted[0].key, 'colour');
});

test('the October offer: free while it runs (to 31 October 2026), published prices after', () => {
  const s = M.normalise({range: 'canopy', width: 4, depth: 3, extras: {extraSockets: 2, heaters: 2, upDownLights: 2, outdoorSocket: 2, waterButt: true, canopyLights: true, brushedSockets: true, acousticInsulation: true}});
  const base = M.basePrice(s);
  const during = M.priceFor(s, {now: DURING});
  assert.equal(during.total, base + 150 + 105, 'only the second heater and second outdoor socket are paid');
  assert.ok(M.offerActive(Date.parse('2026-10-31T23:00:00Z')) && !M.offerActive(Date.parse('2026-11-01T00:00:01Z')));
  const after = M.priceFor(s, {now: AFTER});
  assert.equal(after.total, base + 2 * 35 + 2 * 150 + 2 * 55 + 2 * 105 + 95 + 4 * 45, 'after: brushed sockets at £35, the rest at their rates');
  assert.ok(after.quoted.some(l => l.key === 'brushedSockets') && after.quoted.some(l => l.key === 'acousticInsulation') && after.quoted.some(l => l.key === 'deck'));
});

test('standard doors and windows by design, the bi-fold upgrade, the glass corner', () => {
  const c = M.normalise({width: 6, depth: 4});
  assert.deepEqual(c.openings.map(o => [o.role, o.type]), [['main', 'sliding'], ['window', 'wide1205']]);
  const k = M.normalise({width: 6, depth: 4, cladding: 'cedar', design: 'classic'});
  assert.deepEqual(k.openings.map(o => [o.role, o.type]), [['main', 'patio'], ['window', 'tall416']]);
  for (const range of ['corner', 'canopy-corner']) {
    const s = M.normalise({range, width: 6, depth: 4});
    const main = s.openings.find(o => o.role === 'main'), glass = s.openings.find(o => o.role === 'corner');
    assert.equal(main.corner, 'end'); assert.equal(glass.wall, 'right'); assert.equal(glass.corner, 'start');
    assert.ok(Math.abs(main.p * 6 + M.OPENINGS[main.type].w / 2 - (6 - M.BUILD.post)) < 1e-4, 'the doors run into the corner post');
    const left = M.normalise({...s, hand: 'left', openings: null});
    assert.equal(left.openings.find(o => o.role === 'corner').wall, 'left');
    const bi = M.apply(s, {mainDoor: 'bifold30'}).state;
    assert.equal(bi.openings.find(o => o.role === 'main').type, 'bifold30');
    assert.equal(M.priceFor(bi, {now: DURING}).total, M.basePrice(bi) + 1695);
  }
  // A 2.5m front has no room for the 2.4m slider between its corners: the doors step down and
  // the window moves to a side wall (both listed for Oeco to confirm).
  const small = M.normalise({width: 2.5, depth: 2.5});
  assert.equal(small.openings.find(o => o.role === 'main').type, 'patio');
  assert.notEqual(small.openings.find(o => o.role === 'window').wall, 'front');
  // A new design brings its own doors and window, and its floor.
  const toClassic = M.apply(M.normalise({cladding: 'thermowood'}), {design: 'classic'}).state;
  assert.equal(toClassic.openings.find(o => o.role === 'main').type, 'patio');
  assert.equal(toClassic.floor, 'classic-oak');
  // Composites are Contemporary only.
  assert.equal(M.normalise({cladding: 'smooth', design: 'classic'}).design, 'contemporary');
});

test('openings never overlap, stay clear of the corners and under the roof, at every size', () => {
  for (const range of M.RANGE_ORDER) for (const w of M.WIDTHS) for (const d of M.depthsFor(w)) {
    let s = M.normalise({range, width: w, depth: d});
    for (const t of ['glass075', 'wide1275', 'single']) s = M.normalise({...s, openings: M.addOpening(s, 'back', t).state.openings});
    for (const wall of M.wallsOf(s)) {
      const L = M.wallLength(s, wall), list = s.openings.filter(o => o.wall === wall).map(o => [o.p * L - M.OPENINGS[o.type].w / 2, o.p * L + M.OPENINGS[o.type].w / 2, o]).sort((a, b) => a[0] - b[0]);
      for (const [a, b, o] of list) {
        assert.ok(a >= (o.corner === 'start' ? M.BUILD.post : .2) - 1e-4 && b <= L - (o.corner === 'end' ? M.BUILD.post : .2) + 1e-4, `${range} ${w}x${d} ${o.type} inside the ${wall}`);
        assert.ok(M.OPENINGS[o.type].sill + M.OPENINGS[o.type].h <= M.wallClearHeight(s, wall), `${o.type} under the fascia`);
      }
      for (let i = 1; i < list.length; i++) assert.ok(list[i][0] >= list[i - 1][1] + .1 - 1e-4, `${range} ${w}x${d} gap on the ${wall}`);
    }
  }
});

test('height: within the 2.5m permitted-development limit, falling slightly to the back', () => {
  for (const range of M.RANGE_ORDER) {
    const s = M.normalise({range, width: 10, depth: 3, sideCanopy: 'both'});
    const off = M.roofOffsets(s);
    assert.ok(M.topAt(s, 0, s.depth / 2 + off.front) <= 2.5 + 1e-9);
    assert.ok(M.topAt(s, 0, -s.depth / 2) < M.topAt(s, 0, s.depth / 2));
  }
});

test('share links reproduce the design exactly', () => {
  const designs = [
    M.normalise({}),
    M.normalise({range: 'canopy-corner', width: 10, depth: 3, cladding: 'cedar', design: 'classic', mainDoor: 'bifold30', hand: 'left', deck: 2, sideCanopy: 'both', layout: 'divided', use: 'gym', extras: {extraSockets: 3, brushedSockets: true, heaters: 2, internalDoor: true, acousticPanels: true, canopyLights: true, connection: true}, acousticFinish: 'hazel'}),
    M.normalise({range: 'concave', width: 5, depth: 4.5, cladding: 'smooth', colour: 'olive', dir: 'horizontal', floor: 'classic-oak'})
  ];
  designs[1] = M.normalise({...designs[1], openings: M.addOpening(designs[1], 'back', 'panoramic').state.openings});
  const strip = s => JSON.stringify({...s, openings: s.openings.map(({id, ...o}) => o)});
  for (const d of designs) assert.equal(strip(M.fromURL(M.shareURL(d, 'https://x.test/configurator/'))), strip(d));
  assert.equal(M.fromURL('https://x.test/configurator/?v=2'), null);
});

test('specification: every row has a status, and the PDF/forms summary carries the link', () => {
  const s = M.normalise({range: 'corner', extras: {heaters: 1, acousticGlass: true}});
  const rows = M.specRows(s, {now: DURING});
  for (const r of rows) assert.ok(['included', 'priced', 'upgrade', 'offer', 'quoted', 'info'].includes(r.status), r.label);
  assert.ok(rows.find(r => r.label === 'Corner glass'));
  const sum = M.summary(s, 'https://x.test/configurator/', {now: DURING});
  assert.ok(sum.designLink.startsWith('https://x.test/configurator/?v=1'));
  assert.equal(sum.priceText, `£${M.basePrice(s).toLocaleString('en-GB')} + quoted items`);
});

test('UK phone numbers: Ofcom ranges accepted, others refused with a reason', () => {
  for (const ok of ['07123 456789', '+44 7123 456789', '0044 7123 456789', '(01765) 123456', '020 7946 1234', '0800 170 1270', '01765 690000', '07624 123456', '0330 123 4567']) assert.ok(M.parseUKPhone(ok).valid, ok);
  assert.equal(M.parseUKPhone('+44 (0) 7123 456789').e164, '+447123456789');
  const bad = {'': 'empty', 'call me': 'characters', '+33 1 23 45 67 89': 'international', '0712345': 'short', '071234567890': 'long', '09012 345678': 'range', '07012 345678': 'range', '07700 900123': 'fictional', '01632 960123': 'fictional', '07777 777777': 'fictional'};
  for (const [n, why] of Object.entries(bad)) assert.equal(M.parseUKPhone(n).reason, why, n);
  assert.match(M.phoneProblem('07700 900123'), /reserved/);
});

test('UK postcodes', () => {
  for (const ok of ['HG4 1AJ', 'hg41aj', 'SW1A 1AA', 'M1 1AE', 'B33 8TH', 'CR2 6XH', 'DN55 1PT', 'EC1A 1BB']) assert.ok(M.validPostcode(ok), ok);
  for (const bad of ['HG4', '12345', 'HG4 1A', 'QQ1 1QQ', 'HG4 1AJX']) assert.ok(!M.validPostcode(bad), bad);
  assert.equal(M.formatPostcode('hg41aj'), 'HG4 1AJ');
});
