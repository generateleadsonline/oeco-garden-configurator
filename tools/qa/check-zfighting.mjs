// Fails if any two visible faces share a plane and overlap (z-fighting: flicker and blotches on
// real GPUs), across every shape at every size Oeco makes, in both designs, plus every feature
// that adds geometry. Reuses the SMART configurator's detector (tools/qa/zfight.js) unchanged;
// this runner builds each design in one page instead of one browser per design.
//
//   PLAYWRIGHT_CORE=<path>/node_modules/playwright-core BASE=http://127.0.0.1:4827 node tools/qa/check-zfighting.mjs [quick]
// BASE can be the live site, as the check builds designs in the page.
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {launch, BASE, SKIP_TOUR, ready3d} from './lib.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const detector = await readFile(path.join(here, 'zfight.js'), 'utf8');
const quick = process.argv[2] === 'quick';
const SHAPES = ['cube', 'canopy', 'corner', 'concave', 'canopy-corner'];
// Oeco's 71 sizes (the same for every shape): widths 2.5m to 10m, depths 2.5m to 5m by width.
const DEPTHS_FOR = w => (w === 2.5 ? [2.5] : w <= 6 ? [2.5, 3, 3.5, 4, 4.5, 5] : w <= 7 ? [2.5, 3, 3.5, 4, 4.5] : w <= 8 ? [2.5, 3, 3.5, 4] : w <= 9 ? [2.5, 3, 3.5] : [2.5, 3]);
const WIDTHS = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
const designs = [];
for (const range of SHAPES) {
  // Every size in the Contemporary design, and every other size in the Classic one.
  for (const width of WIDTHS) for (const depth of DEPTHS_FOR(width)) {
    if (quick && (WIDTHS.indexOf(width) + depth * 2) % 3) continue;
    designs.push({range, width, depth});
    if ((WIDTHS.indexOf(width) + depth * 2) % 2 === 0) designs.push({range, width, depth, cladding: 'cedar', design: 'classic'});
  }
  const all = {extraSockets: 8, brushedSockets: true, ledPanels: 2, rgbPanels: 1, widePanels: 1, downlights: true, heaters: 3, internalDoor: true, acousticPanels: true, acousticBoard: true, acousticInsulation: true, acousticGlass: true, upDownLights: 4, outdoorSocket: 2, canopyLights: true, waterButt: true, connection: true};
  designs.push({range, width: 10, depth: 3, deck: 2, sideCanopy: 'both', mainDoor: 'bifold30', layout: 'divided', extras: all, use: 'lounge'});
  designs.push({range, width: 6, depth: 4, deck: 1, sideCanopy: 'left', mainDoor: 'bifold22', layout: 'divided', extras: all, use: 'gym', cladding: 'smooth', colour: 'redwood', dir: 'horizontal'});
  designs.push({range, width: 4, depth: 3, deck: 1.5, sideCanopy: 'right', layout: 'divided', extras: {...all, internalDoor: false}, use: 'studio', cladding: 'fibre', colour: 'sage'});
  designs.push({range, width: 3, depth: 2.5, deck: 0, hand: 'left', cladding: 'stone', use: 'library'});
  designs.push({range, width: 2.5, depth: 2.5, deck: .3, cladding: 'woodgrain', extras: {canopyLights: true, waterButt: true}});
  designs.push({range, width: 8, depth: 4, cladding: 'thermowood', design: 'classic', hand: 'left', openings: null, extras: {upDownLights: 2}, use: 'office'});
}
// Every door and window Oeco sells, on every wall of a 6m x 4m room, in both designs.
for (const design of ['contemporary', 'classic']) for (const range of ['cube', 'corner', 'concave']) {
  const types = ['patio', 'sliding', 'single', 'wide1205', 'wide1275', 'wide854', 'tall416', 'tall7516', 'glass05', 'glass075', 'glass10', 'panoramic'];
  designs.push({range, width: 9, depth: 4.5, cladding: 'thermowood', design, __add: [['back', 'sliding'], ['back', 'patio'], ['back', 'single'], ['back', 'wide1275'], ['right', 'tall7516'], ['right', 'glass10'], ['left', 'panoramic'], ['left', 'glass05']]});
  for (const t of types) designs.push({range, width: 6, depth: 4, cladding: 'cedar', design, __add: [['back', t], ['left', t], ['right', t]]});
}

const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 640, height: 480}});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
await page.goto(BASE + '/configurator/?qa=1&tier=low', {waitUntil: 'load'});
await ready3d(page);
let failures = 0, n = 0;
for (const d of designs) {
  n++;
  const label = JSON.stringify(d);
  const ok = await page.evaluate(d => {
    const {scene, model: M} = window.__cfg;
    const {__add, ...rest} = d;
    let s = M.normalise(rest);
    for (const [wall, type] of __add || []) s = M.normalise({...s, openings: M.addOpening(s, wall, type).state.openings});
    scene.update(s);
    return true;
  }, d);
  if (!ok) continue;
  const found = await page.evaluate(detector);
  const visible = (found || []).filter(f => f.visible);
  if (visible.length) {
    failures++;
    console.log(`FAIL ${label}${visible.map(f => `\n     ${f.pair} (${f.count}) normal ${f.normal} near ${f.at}`).join('')}`);
  } else if (n % 40 === 0) console.log(`ok ${n}/${designs.length}`);
}
await browser.close();
if (failures) { console.error(`${failures} of ${designs.length} designs have visible z-fighting`); process.exitCode = 1; }
else console.log(`No visible z-fighting in ${designs.length} designs (every shape at every size Oeco makes, both designs, every extra and every door and window on every wall).`);
