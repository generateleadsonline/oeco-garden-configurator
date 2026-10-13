// Every option must visibly change the 3D model, and changing it must turn the camera to the part
// and outline it. Runs in headless Chrome (real WebGL; the Mac GPU unless SWIFTSHADER=1) against
// a served build.
//
//   PLAYWRIGHT_CORE=<path>/node_modules/playwright-core BASE=http://127.0.0.1:4791 node tools/qa/check-options.mjs
//
// Part A: for every value of every option (the five shapes, uses, sizes, every cladding, design,
// colour and board direction, canopy side extensions, canopy downlights, decking, outside lights,
// sockets, the water butt, the mains connection, the main doors, every door and window Oeco sells
// on a wall, moving, removing and mirroring, acoustic glass, floors, lighting, sockets, heaters, the
// dividing wall and its door, and the acoustic options), the design is built before and
// after. Two proofs must both hold:
//   1. the scene fingerprint (each visible mesh's tags, geometry, world position, colour and
//      texture) differs;
//   2. seen from the camera the page turns to for that option (focusFor, with no animation), the
//      rendered frame differs in at least 25 pixels. A whole-frame diff at full resolution, so a
//      small part counts (as My Retreat's sweep found).
// Part B: one real control of each kind is changed through the page; the camera must move (or
// switch view) and the changed part must be outlined.
import {launch, BASE, SKIP_TOUR, ready3d, waitFor} from './lib.mjs';

let failed = 0;
const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 1280, height: 820}, reducedMotion: 'reduce'});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + `/configurator/?qa=1&tier=${process.env.TIER || 'low'}`, {waitUntil: 'load'});
await ready3d(page);

// ---- Part A -------------------------------------------------------------------------------
const results = await page.evaluate(async () => {
  const {scene, model: M, data: D, focusFor} = window.__cfg;
  const N = M.normalise;
  const fp = () => {
    const {room} = scene._debug(), parts = [];
    room.group.updateMatrixWorld(true);
    room.group.traverse(o => {
      if (!o.isMesh || !o.visible) return;
      const e = o.matrixWorld.elements, mats = [].concat(o.material);
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      const bb = o.geometry.boundingBox, box = [bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z].map(v => v.toFixed(3)).join(',');
      parts.push([(o.userData.tags || []).slice(0, 2).join('/'), o.geometry.attributes.position.count, box, e[12].toFixed(3), e[13].toFixed(3), e[14].toFixed(3), e[0].toFixed(3), e[10].toFixed(3),
        mats.map(m => `${m.color?.getHexString()}:${m.map?.uuid || ''}:${m.normalMap?.uuid || ''}:${m.opacity}`).join(',')].join('|'));
    });
    return parts.sort().join('\n');
  };
  const pixels = () => {
    const {renderer, scene: sc, camera} = scene._debug();
    // As the page's render loop: the hedge and fence step aside when the camera is behind them.
    let hz = null; sc.traverse(o => { if (o.userData.hedgeZ !== undefined) hz = o.userData.hedgeZ; });
    sc.traverse(o => { if (o.userData.hedge) o.visible = hz === null || camera.position.z > hz + .6; });
    renderer.render(sc, camera);
    const gl = renderer.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight, px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    return px;
  };
  const diff = (a, b) => { let n = 0; for (let i = 0; i < a.length; i += 4) if (Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]) > 6) n++; return n; };
  const cases = [];
  const add = (label, key, base, patch, focus = {}) => cases.push({label, key, base, patch, focus});
  const cube = N({}), wide = N({width: 6, depth: 4}), x = (b, k, v) => ({extras: {...b.extras, [k]: v}});
  for (const r of D.RANGE_ORDER) if (r !== 'cube') add(`shape ${r}`, 'range', cube, {__range: r});
  for (const u of Object.keys(D.USES)) if (u !== cube.use) add(`use ${u}`, 'use', cube, {use: u});
  for (const w of [2.5, 3, 5, 6.5, 8, 10]) add(`width ${w}`, 'size', cube, {width: w});
  for (const d of [2.5, 3.5, 4, 5]) add(`depth ${d}`, 'size', cube, {depth: d});
  for (const r of D.RANGE_ORDER) { add(`${r} smallest`, 'size', N({range: r}), {width: 2.5, depth: 2.5}); add(`${r} 10m x 3m`, 'size', N({range: r}), {width: 10, depth: 3}); add(`${r} 6m x 5m`, 'size', N({range: r}), {width: 6, depth: 5}); }
  for (const c of Object.keys(D.CLADDINGS)) if (c !== cube.cladding) add(`cladding ${c}`, 'cladding', cube, {cladding: c});
  for (const c of ['thermowood', 'cedar']) { const b = N({cladding: c}); add(`${c} classic design`, 'design', b, {design: 'classic'}); }
  for (const [c, list] of Object.entries({smooth: D.COLOURS.smooth, woodgrain: D.COLOURS.woodgrain, fibre: D.COLOURS.fibre, stone: D.COLOURS.stone})) {
    const b = N({cladding: c});
    for (const k of Object.keys(list)) if (k !== b.colour) add(`${c} colour ${k}`, 'colour', b, {colour: k});
  }
  for (const c of ['thermowood', 'smooth', 'woodgrain']) add(`${c} horizontal boards`, 'dir', N({cladding: c}), {dir: 'horizontal'});
  for (const r of D.RANGE_ORDER.filter(k => D.RANGES[k].canopy)) {
    const b = N({range: r});
    for (const sc of Object.keys(D.SIDE_CANOPY)) if (sc !== 'none') add(`${r} canopy extension ${sc}`, 'sideCanopy', b, {sideCanopy: sc});
    add(`${r} canopy downlights`, 'canopyLights', b, x(b, 'canopyLights', true));
  }
  for (const dd of D.DECK_DEPTHS) if (dd !== cube.deck) { add(`deck ${dd}`, dd ? 'deck' : 'cladding', cube, {deck: dd}); add(`concave deck ${dd}`, dd ? 'deck' : 'cladding', N({range: 'concave'}), {deck: dd}); }
  for (let n = 1; n <= 4; n++) add(`${n} extra up/down lights`, 'upDownLights', cube, x(cube, 'upDownLights', n));
  for (let n = 1; n <= 2; n++) add(`${n} outdoor sockets`, 'outdoorSocket', cube, x(cube, 'outdoorSocket', n));
  add('water butt', 'waterButt', cube, x(cube, 'waterButt', true));
  add('mains connection', 'connection', cube, x(cube, 'connection', true));
  for (const b of [wide, N({width: 6, depth: 4, cladding: 'cedar', design: 'classic'}), N({range: 'corner', width: 6, depth: 4})]) for (const md of ['bifold22', 'bifold30']) { const main = b.openings.find(o => o.role === 'main'); add(`${b.range} ${b.design} main doors ${md}`, 'opening', b, {mainDoor: md}, {id: main.id, wall: 'front'}); }
  // Every door and window Oeco sells, added to the back wall of a 6m x 4m room.
  for (const t of D.EXTRA_OPENINGS) {
    const r = M.addOpening(wide, 'back', t);
    if (!r.id) { cases.push({label: `add ${t}`, error: 'no room on a 6m back wall'}); continue; }
    cases.push({label: `add ${t} to the back wall`, key: 'opening', base: wide, next: N({...wide, openings: r.state.openings}), focus: {id: r.id, wall: 'back'}});
  }
  const win = wide.openings.find(o => o.role === 'window'), main = wide.openings.find(o => o.role === 'main');
  add('move the main doors', 'opening', wide, {openings: wide.openings.map(o => o.id === main.id ? {...o, p: o.p + .08} : o)}, {id: main.id, wall: 'front'});
  add('move the window', 'opening', wide, {openings: wide.openings.map(o => o.id === win.id ? {...o, p: o.p - .06} : o)}, {id: win.id, wall: win.wall});
  add('remove the window', 'wall', wide, {openings: wide.openings.filter(o => o.id !== win.id)}, {wall: win.wall});
  add('mirror the layout', 'cladding', wide, {openings: wide.openings.map(o => ({...o, wall: {left: 'right', right: 'left'}[o.wall] || o.wall, p: 1 - o.p}))});
  for (const r of ['corner', 'canopy-corner']) { const b = N({range: r}); add(`${r} glass corner to the left`, 'design', b, {hand: 'left', openings: b.openings.filter(o => o.role !== 'corner').map(o => ({...o, p: 1 - o.p}))}); }
  add('acoustic glass', 'acousticGlass', cube, x(cube, 'acousticGlass', true));
  add('classic oak floor', 'floor', cube, {floor: 'classic-oak'});
  for (const k of ['ledPanels', 'widePanels', 'rgbPanels']) for (let n = 1; n <= D.EXTRAS[k].max; n++) add(`${n} ${k}`, k, wide, x(wide, k, n));
  add('recessed downlights', 'downlights', cube, x(cube, 'downlights', true));
  for (const n of [1, 2, 4, 6, 8]) add(`${n} extra sockets`, 'extraSockets', wide, x(wide, 'extraSockets', n));
  add('brushed sockets', 'brushedSockets', cube, x(cube, 'brushedSockets', true));
  for (let n = 1; n <= 3; n++) add(`${n} heaters`, 'heaters', wide, x(wide, 'heaters', n));
  for (const b of [cube, wide]) add(`${b.width}m dividing wall`, 'layout', b, {layout: 'divided', extras: {...b.extras, internalDoor: true}});
  const div = N({...wide, layout: 'divided', extras: {...wide.extras, internalDoor: true}});
  add('internal door off', 'internalDoor', div, x(div, 'internalDoor', false));
  add('acoustic panels', 'acousticPanels', wide, x(wide, 'acousticPanels', true));
  const panels = N({...wide, extras: {...wide.extras, acousticPanels: true}});
  for (const k of Object.keys(D.ACOUSTIC_FINISHES)) if (k !== panels.acousticFinish) add(`acoustic finish ${k}`, 'acousticFinish', panels, {acousticFinish: k});
  add('acoustic plasterboard', 'acousticBoard', cube, x(cube, 'acousticBoard', true));
  add('acoustic insulation', 'acousticInsulation', cube, x(cube, 'acousticInsulation', true));

  const out = [];
  for (const c of cases) {
    if (c.error) { out.push({label: c.label, ok: false, why: c.error}); continue; }
    const next = c.next || (c.patch.__range ? M.switchRange(c.base, c.patch.__range) : M.apply(c.base, c.patch).state);
    if (JSON.stringify({...next, step: 0}) === JSON.stringify({...c.base, step: 0})) { out.push({label: c.label, ok: false, why: 'the design did not change (option refused)'}); continue; }
    scene.update(c.base); const a = fp();
    scene.update(next); const b = fp();
    // The camera the page turns to after this change, with no outline and no animation.
    const spec = focusFor(c.key, c.focus) || {tags: [], whole: true};
    scene.focus({...spec, highlight: false});
    const after = pixels();
    scene.update(c.base); scene.select([]);
    const before = pixels();
    const changed = diff(before, after);
    out.push({label: c.label, ok: a !== b && changed >= 25, why: a === b ? '3D unchanged' : changed < 25 ? `only ${changed} pixels change from the focused camera` : '', changed});
  }
  scene.update(window.__cfg.state);
  scene.setView('outside', {animate: false});
  return out;
});
for (const r of results) if (!r.ok) { failed++; console.log(`FAIL  ${r.label}: ${r.why}`); }
const smallest = results.filter(r => r.ok).sort((a, b) => a.changed - b.changed).slice(0, 5).map(r => `${r.label} (${r.changed}px)`).join(', ');
console.log(`Part A: ${results.length - results.filter(r => !r.ok).length} of ${results.length} option changes change the 3D model and the focused view. Smallest: ${smallest}`);

// ---- Part B -------------------------------------------------------------------------------
// Real controls, through the page: the camera must move or change view and the part must be
// outlined (a pulse with meshes), except for whole-room changes, which only reframe.
const ui = [
  [0, 'input[name=use][value=gym]', 'use', true], [0, 'input[name=range][value=canopy]', 'range', false],
  [1, 'button[data-size=width][data-dir="1"]', 'size', false], [1, 'input[name=sizePreset][value="5x3"]', 'size', false],
  [2, 'input[name=cladding][value=cedar]', 'cladding', true], [2, 'input[name=design][value=classic]', 'design', true],
  [2, 'input[name=sideCanopy][value=both]', 'sideCanopy', true], [2, 'input[name=canopyLights]', 'canopyLights', true],
  [2, 'input[name=deck][value="1"]', 'deck', true], [2, 'input[name=waterButt]', 'waterButt', true],
  [2, 'button[data-count=upDownLights][data-dir="1"]', 'upDownLights', true], [2, 'button[data-count=outdoorSocket][data-dir="1"]', 'outdoorSocket', true], [2, 'input[name=connection]', 'connection', true],
  [3, 'input[name=mainDoor][value=bifold22]', 'opening', true], [3, 'button[data-wall=back]', 'wall', true], [3, 'input[name=acousticGlass]', 'acousticGlass', true],
  [4, 'input[name=floor][value=grey-oak]', 'floor', true], [4, 'button[data-count=ledPanels][data-dir="1"]', 'ledPanels', true],
  [4, 'button[data-count=extraSockets][data-dir="1"]', 'extraSockets', true], [4, 'button[data-count=heaters][data-dir="1"]', 'heaters', true],
  [4, 'input[name=layout][value=divided]', 'layout', true], [4, 'input[name=acousticPanels]', 'acousticPanels', true], [4, 'input[name=acousticInsulation]', 'acousticInsulation', true]
];
let bOk = 0;
for (const [step, sel, key, highlight] of ui) {
  await page.evaluate(s => { if (window.__cfg.state.step !== s) document.querySelector(`#steps [data-step="${s}"]`).click(); }, step);
  await page.waitForTimeout(400);
  const pose = () => { const d = window.__cfg.scene._debug(), p = d.camera.position, t = d.controls.target, dir = t.clone().sub(p).normalize(); return {pos: [...p.toArray(), ...dir.toArray()].map(v => +v.toFixed(3)), view: d.view, at: window.__cfgLastFocus?.at || 0}; };
  await waitFor(page, () => !window.__cfg.scene._debug().anim, null, 30000).catch(() => {});
  const before = await page.evaluate(pose);
  const clicked = await page.evaluate(s => { const el = document.querySelector(s); if (!el) return false; el.click(); return true; }, sel);
  if (!clicked) { failed++; console.log(`FAIL  UI ${key}: control ${sel} not found`); continue; }
  if (key === 'wall') await page.waitForTimeout(500);
  else await waitFor(page, at => (window.__cfgLastFocus?.at || 0) > at, before.at, 15000).catch(() => {});
  await page.waitForTimeout(300);
  const pulse = await page.evaluate(() => { const d = window.__cfg.scene._debug(); return {pulse: d.pulse ? d.pulse.meshes.length : 0, lines: d.highlight.children.length}; });
  await waitFor(page, () => !window.__cfg.scene._debug().anim, null, 30000).catch(() => {});
  const after = {...await page.evaluate(pose), key: key === 'wall' ? 'wall' : await page.evaluate(() => window.__cfgLastFocus?.key), ...pulse};
  const moved = after.view !== before.view || after.pos.some((v, i) => Math.abs(v - before.pos[i]) > .02);
  const lit = !highlight || (after.pulse > 0 && after.lines > 0);
  const ok = after.key === key && moved && lit;
  if (ok) bOk++; else { failed++; console.log(`FAIL  UI ${key} (${sel}): focus ${after.key}, camera moved ${moved}, outlined ${after.pulse} meshes / ${after.lines} line sets`); }
}
console.log(`Part B: ${bOk} of ${ui.length} real controls turn the camera to the part and outline it`);
if (errors.length) { failed++; console.log('Page errors:', errors.slice(0, 5).join(' | ')); }
await browser.close();
console.log(failed ? `${failed} failed` : 'All option checks passed');
process.exit(failed ? 1 : 0);
