// Builds the Oeco garden room for a design as a Three.js group. Dimensions are metres. Axes: x
// to the right as you face the front, y up, z towards you; the room is centred on the origin, so
// the front wall's outer face is at z = depth / 2.
//
// Construction follows Oeco's exterior specification and photos: 160mm timber-framed walls clad in
// vertical boards, the floor 200mm off the ground on concrete pile foundations behind a base trim,
// a 145mm insulated roof falling slightly from front to back inside a deep fascia band with an
// aluminium roof edge, 100mm corner trims, a black half-round gutter at the back. Contemporary
// designs have anthracite PVCu fascia, corner and base trims; Classic designs have them in the
// timber. Canopy shapes carry the roof about 0.5m over the doors (a timber soffit under timber
// cladding, anthracite otherwise); the Concave carries both side walls forward to its edge; Corner
// shapes run the main doors into the front corner to meet a glass panel at a 100mm post.
//
// Every mesh is tagged (userData.tags) so the scene can frame and outline any part: 'walls',
// 'wall:front', 'opening:<id>', 'roof', 'fascia', 'trims', 'canopy', 'deck', ...
// No two visible faces share a plane (tools/qa/zfight.js checks it): parts stop 1 to 5mm short
// of their neighbours, trims stand proud, slabs sit inside fascias.
import * as THREE from 'three';
import {RANGES, OPENINGS, CLADDINGS, COLOURS, ANTHRACITE, BUILD, FLOORS, ACOUSTIC_FINISHES} from './configurator-data.js';
import {outline, roofOffsets, topAt, canopyLightCount, cornerSide} from './configurator-model.js';
import {furnish} from './configurator-furniture.js';
export {roofOffsets};

export const WALL = BUILD.wall, SKIN = .022, FT = .045;
const UPSTAND = .012;    // the aluminium roof edge stands this far above the roof skin
const PORCH = .5;        // the Concave's side walls carry forward this far (the canopy depth)
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const COLOURS3 = {steel: '#c9cdd0', white: '#f4f4f0', concrete: '#b9b6ad', soil: '#6b5a45', deck: '#3f4346'};

/** The roof's plan outline: each wall moved out by its offset, corners where the lines meet. */
export function roofOutline(state, inset = 0) {
  const walls = outline(state), off = roofOffsets(state);
  const lines = walls.map(w => ({w, d: (off[w.id] ?? .035) - inset}));
  return lines.map((L, i) => {
    const prev = lines[(i - 1 + lines.length) % lines.length];
    const fix = l => (l.w.axis === 'x' ? {z: l.w.a[1] + l.w.n[1] * l.d} : {x: l.w.a[0] + l.w.n[0] * l.d});
    const a = fix(prev), b = fix(L);
    return [a.x ?? b.x, a.z ?? b.z];
  });
}
/** Heights at a plan point: fascia top, fascia bottom, the roof deck's underside, wall tops. */
export function levels(state, x, z) {
  const top = topAt(state, x, z), fb = top - BUILD.fascia;
  return {top, fasciaBottom: fb, slabTop: top - UPSTAND, slabBottom: fb + .005, coreTop: fb - .004, skinTop: fb - .002, sectionY: fb + .0005, ceiling: fb + .005 - .03};
}
/** Building, roof, canopies and decking extents in plan, for framing and the garden. */
export function extentsOf(state) {
  const ro = roofOutline(state), xs = ro.map(p => p[0]), zs = ro.map(p => p[1]);
  return {x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(Math.max(...zs), state.depth / 2 + (state.deck || 0)), top: BUILD.topFront};
}

/** A box whose UVs are in metres on every face, so tiled textures keep their true scale. */
export function metricBox(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let i = 0; i < uv.count; i++) {
    const [a, b] = dims[Math.floor(i / 4)];
    uv.setXY(i, uv.getX(i) * a, uv.getY(i) * b);
  }
  return g;
}
/** Splits an extruded solid's lids into separate groups: inside (z=0), outside (z=depth), edges. */
function splitLids(geometry) {
  const [lids, sides] = geometry.groups;
  const half = lids.count / 2;
  geometry.clearGroups();
  geometry.addGroup(lids.start, half, 0);
  geometry.addGroup(lids.start + half, half, 1);
  geometry.addGroup(sides.start, sides.count, 2);
  return geometry;
}
/** Regroups a geometry's triangles by a classifier of their normals (returns group index). */
function groupBy(geometry, classify, groups = 3) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry;
  const pos = g.attributes.position, buckets = Array.from({length: groups}, () => []);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 3) {
    a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, i + 1); c.fromBufferAttribute(pos, i + 2);
    n.subVectors(c, b).cross(a.clone().sub(b)).normalize();
    buckets[classify(n)].push(i);
  }
  const out = new THREE.BufferGeometry();
  for (const name of Object.keys(g.attributes)) {
    const src = g.attributes[name], size = src.itemSize, arr = new Float32Array(src.count * size);
    let k = 0;
    for (const bucket of buckets) for (const i of bucket) for (let j = 0; j < 3; j++) for (let s = 0; s < size; s++) arr[k++] = src.array[(i + j) * size + s];
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  let start = 0;
  buckets.forEach((bucket, m) => { out.addGroup(start, bucket.length * 3, m); start += bucket.length * 3; });
  return out;
}
/** A plan polygon [[x, z], ...] as a THREE.Shape for extrusion upwards. */
function planShape(points, holes = []) {
  const s = new THREE.Shape(points.map(([x, z]) => new THREE.Vector2(x, -z)));
  for (const h of holes) s.holes.push(new THREE.Path(h.map(([x, z]) => new THREE.Vector2(x, -z))));
  return s;
}
/** Bakes an extrusion of a plan shape upright, from y0 to y0 + depth, in plan coordinates. */
function uprightGeo(geo, y0) { geo.rotateX(-Math.PI / 2); geo.translate(0, y0, 0); return geo; }
/** Lifts every vertex by fn(x, z): turns a flat roof part into the sloped one. */
function lift(geo, fn) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) + fn(p.getX(i), p.getZ(i)));
  p.needsUpdate = true;
  geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
  return geo;
}
/** Inset a rectilinear plan polygon by d (positive = inwards), corners where the lines meet. */
export function insetPolygon(walls, d) {
  return walls.map((w, i) => {
    const prev = walls[(i - 1 + walls.length) % walls.length];
    const fix = l => (l.axis === 'x' ? {z: l.a[1] - l.n[1] * d} : {x: l.a[0] - l.n[0] * d});
    const a = fix(prev), b = fix(w);
    return [a.x ?? b.x, a.z ?? b.z];
  });
}

/** Builds the design. `tex` is the procedural texture factory; returns {group, lights, materials}. */
export function buildRoom(state, tex) {
  const r = RANGES[state.range], w = state.width, d = state.depth, FLOOR = BUILD.base;
  const classic = state.design === 'classic', hand = cornerSide(state);
  const root = new THREE.Group();
  root.name = 'room';
  const lights = [], materials = [];
  const keep = m => (materials.push(m), m);
  const std = (colour, o = {}) => keep(new THREE.MeshStandardMaterial({color: colour, roughness: .7, ...o}));
  const lv = (x, z) => levels(state, x, z);

  // ---- Materials --------------------------------------------------------------------------
  const clad = CLADDINGS[state.cladding], horizontal = state.dir === 'horizontal';
  const cladHex = clad.colours ? COLOURS[clad.colours][state.colour].hex : clad.hex;
  const cladPair = tex.cladding(clad.kind, cladHex, horizontal);
  const cladMat = std('#ffffff', {map: cladPair.map, normalMap: cladPair.normalMap, roughness: cladPair.roughness, normalScale: new THREE.Vector2(.9, .9)});
  cladMat.name = 'cladding';
  const timber = clad.kind === 'cedar' || clad.kind === 'thermowood';
  // Contemporary: anthracite PVCu trims. Classic: the timber itself, boards running along the
  // fascia and up the corners.
  const pvc = std(ANTHRACITE, {roughness: .45, metalness: .05});
  const trimFasciaPair = classic ? tex.cladding(clad.kind, cladHex, true) : null;
  const fasciaMat = classic ? std('#ffffff', {map: trimFasciaPair.map, normalMap: trimFasciaPair.normalMap, roughness: .8}) : pvc;
  const trimMat = classic ? cladMat : pvc;
  const skirtPair = classic ? null : tex.skirt(ANTHRACITE);
  const skirtMat = classic ? cladMat : std('#ffffff', {map: skirtPair.map, normalMap: skirtPair.normalMap, roughness: .55});
  const edgeMat = std('#33383b', {roughness: .35, metalness: .55});
  // Soffit: the timber under timber-clad canopies (Oeco's cedar and Thermowood photos), anthracite
  // under composite, fibre cement and stone. Drawn only when the design has a canopy.
  const soffitPair = r.canopy && timber ? tex.cladding(clad.kind, cladHex, true) : null;
  const soffitMat = soffitPair ? std('#ffffff', {map: soffitPair.map, normalMap: soffitPair.normalMap, roughness: .8}) : std(ANTHRACITE, {roughness: .7});
  const frameOut = std(ANTHRACITE, {roughness: .4, metalness: .1}), frameIn = std('#f6f6f3', {roughness: .4});
  const aluFrame = std('#3a3f43', {roughness: .35, metalness: .5});
  const acoustic = state.extras.acousticGlass;
  const glass = keep(new THREE.MeshPhysicalMaterial({color: acoustic ? '#8fa89c' : '#a9c0c4', roughness: .04, metalness: 0, transparent: true, opacity: acoustic ? .3 : .2, envMapIntensity: 1.8, side: THREE.DoubleSide, depthWrite: false, reflectivity: .6}));
  glass.name = acoustic ? 'acoustic-glass' : 'glass';
  const intTex = tex.interior({panels: 'plaster', wall: '#f3f2ee'});
  const lining = std('#ffffff', {map: intTex.map, normalMap: intTex.normalMap, roughness: .85});
  const ceilingMat = std('#f6f6f3', {roughness: .9, side: THREE.DoubleSide});
  const reveal = std('#f2f2ee', {roughness: .8});
  const hidden = std('#3a3a38', {roughness: 1});
  hidden.name = 'hidden';
  const white = std(COLOURS3.white, {roughness: .5});
  const floorSpec = FLOORS[state.floor];
  const floorTex = tex.floor('plank', floorSpec.hex);
  const floorMat = std('#ffffff', {map: floorTex.map, normalMap: floorTex.normalMap, roughness: floorTex.roughness});
  const deckTex = state.deck > 0 ? tex.deck(COLOURS3.deck) : null;
  const deckMat = deckTex ? std('#ffffff', {map: deckTex.map, normalMap: deckTex.normalMap, roughness: deckTex.roughness}) : null;
  const deckSkirtPair = state.deck > 0 ? tex.skirt(COLOURS3.deck) : null;
  const deckSkirt = deckSkirtPair ? std('#ffffff', {map: deckSkirtPair.map, normalMap: deckSkirtPair.normalMap, roughness: .6}) : null;
  const roofTex = tex.roof('panel');
  const roofMat = std('#ffffff', {map: roofTex.map, normalMap: roofTex.normalMap, roughness: roofTex.roughness});
  const steel = std(COLOURS3.steel, {roughness: .3, metalness: .85});
  const lamp = keep(new THREE.MeshStandardMaterial({color: '#fff6e0', emissive: '#ffd79a', emissiveIntensity: .35, roughness: .3}));
  const black = std('#1f2124', {roughness: .45, metalness: .25});

  // ---- Helpers ----------------------------------------------------------------------------
  const tag = (o, ...tags) => { o.userData.tags = [...(o.userData.tags || []), ...tags]; return o; };
  const add = (parent, geometry, material, x = 0, y = 0, z = 0, ...tags) => {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
    parent.add(m); return tag(m, ...tags);
  };
  const box = (parent, w0, h0, d0, x, y, z, material, ...tags) => add(parent, metricBox(w0, h0, d0), material, x, y, z, ...tags);
  const group = (parent, ...tags) => { const g = new THREE.Group(); parent.add(g); return tag(g, ...tags); };
  const remapUV = (geometry, fn) => {
    const p = geometry.attributes.position, uv = geometry.attributes.uv;
    for (let i = 0; i < p.count; i++) { const [u, v] = fn(p.getX(i), p.getY(i), p.getZ(i)); uv.setXY(i, u, v); }
  };
  const liftTop = (x, z) => topAt(state, x, z);

  // ---- Walls ------------------------------------------------------------------------------
  const walls = outline(state);
  const wallsGroup = group(root, 'walls');
  const wallGroups = {};
  // Corner glazing: a wall gives up its end to doors or glass that run into the corner post.
  const cornerCut = (wall, end) => {
    const o = state.openings.find(x => x.wall === wall && x.corner === end);
    return o ? BUILD.post + OPENINGS[o.type].w : 0;
  };
  const profile = (u0, u1, y0, topOf) => {
    const s = new THREE.Shape();
    s.moveTo(u0, y0); s.lineTo(u1, y0); s.lineTo(u1, topOf(u1)); s.lineTo(u0, topOf(u0)); s.lineTo(u0, y0);
    return s;
  };
  const at = (wl, u) => [wl.a[0] + wl.u[0] * u, wl.a[1] + wl.u[1] * u];
  walls.forEach(wl => {
    const L = wl.L, side = wl.id;
    const g = group(wallsGroup, 'wall:' + side);
    g.position.set(wl.a[0], 0, wl.a[1]);
    g.rotation.y = Math.atan2(-wl.u[1], wl.u[0]);
    wallGroups[side] = {g, L, wall: wl};
    g.userData.axis = wl.axis;
    const ops = state.openings.filter(o => o.wall === side);
    const cutA = cornerCut(side, 'start'), cutB = cornerCut(side, 'end');
    const holes = ops.filter(o => !o.corner).map(o => {
      const spec = OPENINGS[o.type], c = o.p * L;
      const h = new THREE.Path();
      const x0 = c - spec.w / 2, x1 = c + spec.w / 2, y0 = FLOOR + spec.sill, y1 = FLOOR + spec.sill + spec.h;
      h.moveTo(x0, y0); h.lineTo(x0, y1); h.lineTo(x1, y1); h.lineTo(x1, y0); h.lineTo(x0, y0);
      return h;
    });
    // Core: plastered lining inside, reveals on its edges. It stops inside the cladding at both
    // corners, or at the corner glazing.
    const c0 = Math.max(SKIN, cutA), c1 = Math.min(L - SKIN, L - cutB);
    const coreShape = profile(c0, c1, FLOOR - .03, u => lv(...at(wl, u)).coreTop);
    coreShape.holes = holes;
    add(g, splitLids(new THREE.ExtrudeGeometry(coreShape, {depth: WALL - SKIN, bevelEnabled: false})), [lining, hidden, reveal], 0, 0, -WALL, 'interiorWalls', 'wall:' + side);
    // Skin: the cladding, from just behind the base trim to under the fascia. Front and back
    // walls run to the corners; side walls stop inside them (on the Concave the side walls run
    // on into the porch wings and the front wall stops inside them).
    const porchFront = r.porch && side === 'front';
    let s0 = wl.axis === 'x' ? (porchFront ? WALL : 0) : SKIN, s1 = wl.axis === 'x' ? (porchFront ? L - WALL : L) : L - SKIN;
    if (r.porch && side === 'left') s1 = L;
    if (r.porch && side === 'right') s0 = 0;
    s0 = Math.max(s0, cutA); s1 = Math.min(s1, L - cutB);
    const skinShape = profile(s0, s1, FLOOR - .03, u => lv(...at(wl, u)).skinTop);
    skinShape.holes = holes;
    add(g, splitLids(new THREE.ExtrudeGeometry(skinShape, {depth: SKIN, bevelEnabled: false})), [hidden, cladMat, cladMat], 0, 0, -SKIN, 'cladding', 'wall:' + side);
    // Base trim: Oeco clads the floor base in anthracite PVCu (Contemporary) or the timber
    // (Classic), proud of the cladding, from the ground to the floor line.
    // On the Concave the front wall's base sits inside the porch, between the side walls.
    const b0 = porchFront ? WALL + .002 : wl.axis === 'x' ? -.025 : .002, b1 = porchFront ? L - WALL - .002 : wl.axis === 'x' ? L + .025 : L - .002;
    const base = box(g, b1 - b0, FLOOR - .015, .02, (b0 + b1) / 2, (FLOOR - .015) / 2 + .01, .015, skirtMat, 'base', 'trims');
    base.userData.solid = true;
    for (const o of ops) buildOpening(g, o, L);
    // Corner glazing: a header over the doors or glass, under the fascia.
    for (const [cut, end] of [[cutA, 'start'], [cutB, 'end']]) {
      if (!cut) continue;
      const o = ops.find(x => x.corner === end), top = FLOOR + OPENINGS[o.type].h;
      // The front wall's header runs to the post; the side wall's stops behind it.
      const lip = wl.axis === 'x' ? BUILD.post : WALL + .002;
      const u0 = end === 'start' ? lip : L - cut, u1 = end === 'start' ? cut : L - lip;
      const hy = Math.min(lv(...at(wl, u0)).skinTop, lv(...at(wl, u1)).skinTop) - top;
      if (hy > .01) add(g, metricBox(u1 - u0 - .004, hy, WALL - .01), [frameOut, frameOut, frameOut, frameOut, frameOut, white], (u0 + u1) / 2, top + hy / 2, -WALL / 2, 'frames', 'cornerGlass');
    }
  });

  // ---- Corner trims (100mm) and the glass corner's post ---------------------------------------
  {
    const cornerGroup = group(root, 'trims', 'corners');
    walls.forEach((wl, i) => {
      const next = walls[(i + 1) % walls.length];
      // The glass corner: a 100mm anthracite post from the base to the fascia.
      if (cornerCut(wl.id, 'end') && cornerCut(next.id, 'start')) {
        const [x, z] = wl.b, top = lv(x, z).skinTop - .003, sx = -wl.n[0] - next.n[0], sz = -wl.n[1] - next.n[1];
        box(cornerGroup, BUILD.post, top - FLOOR + .03, BUILD.post, x + sx * BUILD.post / 2, (top + FLOOR - .03) / 2, z + sz * BUILD.post / 2, frameOut, 'cornerGlass', 'frames');
        return;
      }
      // On the Concave the front corners are inside the porch: no trim there.
      if (r.porch && (wl.id === 'front' || next.id === 'front')) return;
      const size = BUILD.trim, t = .008;
      const along = (wall, u) => lv(...at(wall, u)).skinTop;
      const top = Math.min(along(wl, wl.L), along(wl, wl.L - size), along(next, 0), along(next, size)) - .003;
      const ga = wallGroups[wl.id].g, gb = wallGroups[next.id].g, hh = top - FLOOR + .03;
      box(ga, size, hh, t, wl.L - size / 2, FLOOR - .03 + hh / 2, t / 2, trimMat, 'trims');
      box(gb, size + t, hh, t, (size - t) / 2, FLOOR - .03 + hh / 2, t / 2, trimMat, 'trims');
    });
  }

  // ---- The Concave's porch: both side walls carried forward to the canopy edge ----------------
  if (r.porch) {
    const pg = group(root, 'porch', 'canopy');
    for (const sgn of [-1, 1]) {
      const x = sgn * (w / 2 - WALL / 2), z0 = d / 2, z1 = d / 2 + PORCH - .004;
      const top = Math.min(lv(x, z0).skinTop, lv(x, z1).skinTop) - .001, h = top - (FLOOR - .03);
      // Cladding outside and in, the front end in the trim (the porch's frame), the hidden back.
      add(pg, metricBox(WALL, h, z1 - z0), [cladMat, cladMat, hidden, hidden, hidden, hidden], x, FLOOR - .03 + h / 2, (z0 + z1) / 2, 'porch', 'cladding');
      box(pg, WALL + .05, FLOOR - .015, .02, x, (FLOOR - .015) / 2 + .01, z1 + .015, skirtMat, 'base', 'trims');
      // The frame: a trim on the wing's front face, as Oeco's Concave photos.
      box(pg, WALL + .016, h, .008, x, FLOOR - .03 + h / 2, z1 + .004, trimMat, 'trims', 'porch');
      // Base trim along the wing's outside face, continuing the side wall's.
      box(pg, .02, FLOOR - .015, z1 - z0 + .004, x + sgn * (WALL / 2 + .015), (FLOOR - .015) / 2 + .01, (z0 + z1 + .004) / 2, skirtMat, 'base', 'trims');
    }
  }

  // ---- Doors and windows: anthracite PVCu outside, white inside ----------------------------------
  function buildOpening(g, o, L) {
    const spec = OPENINGS[o.type], c = o.p * L, W0 = spec.w, H0 = spec.h, y0 = FLOOR + spec.sill;
    const og = group(g, 'opening:' + o.id, 'openings', spec.group === 'door' ? 'doors' : 'windows');
    og.position.set(c, y0, 0);
    const fo = spec.alu ? aluFrame : frameOut, fi = spec.alu ? aluFrame : frameIn;
    const bar = (bw, bh, bd, x, y, z) => add(og, new THREE.BoxGeometry(bw, bh, bd), [fo, fo, fo, fo, fo, fi], x, y, z, 'frames');
    const pane = (pw, ph, x, y, z) => {
      const m = add(og, new THREE.PlaneGeometry(pw, ph), glass, x, y, z, 'glass');
      m.castShadow = false; m.renderOrder = 2; return m;
    };
    // PVCu outer frames are chunky (70mm), the aluminium bi-folds slim (50mm).
    const fw = spec.alu ? .05 : .07, depth = .07, zf = -.06;
    bar(W0, fw, depth, 0, H0 - fw / 2, zf);
    bar(fw, H0, depth, -W0 / 2 + fw / 2, H0 / 2, zf);
    bar(fw, H0, depth, W0 / 2 - fw / 2, H0 / 2, zf);
    if (spec.group === 'door' || spec.sill === 0) {
      // The threshold. At a glass corner the side wall's one stops behind the front wall's.
      const cornerSide = o.corner && g.userData.axis === 'z' ? (o.corner === 'start' ? 1 : -1) : 0;
      const trimEnd = cornerSide ? WALL - BUILD.post + .005 : 0, tw = W0 + (cornerSide ? 0 : .02) - trimEnd;
      box(og, tw, .03, WALL + .02, cornerSide * trimEnd / 2, .015, -WALL / 2 + .005, fo, 'frames');
    }
    else {
      bar(W0, fw, depth, 0, fw / 2, zf);
      // A projecting anthracite sill, as in Oeco's photos; it stands 3mm proud of the opening's
      // bottom edge so the two never share a face.
      box(og, W0 + .06, .022, .07, 0, -.008, .012, fo, 'frames');
    }
    const innerW = W0 - 2 * fw, innerH = H0 - (spec.group === 'door' || spec.sill === 0 ? fw + .03 : 2 * fw), innerY = spec.group === 'door' || spec.sill === 0 ? .03 : fw;
    const handle = (x, y, z) => {
      add(og, new THREE.BoxGeometry(.025, .16, .02), steel, x, y, z + .02, 'frames');
      add(og, new THREE.BoxGeometry(.13, .02, .02), steel, x - .055, y + .05, z + .04, 'frames');
    };
    const sash = (sx, sw, sh, sy, z, glazed = true, rail = spec.alu ? .05 : .07) => {
      bar(sw - .004, rail, .065, sx, sy + sh - rail / 2, z); bar(sw - .004, rail * 1.3, .065, sx, sy + rail * .65, z);
      bar(rail, sh, .065, sx - sw / 2 + rail / 2, sy + sh / 2, z); bar(rail, sh, .065, sx + sw / 2 - rail / 2, sy + sh / 2, z);
      if (glazed) pane(sw - 2 * rail, sh - 2.3 * rail, sx, sy + sh / 2 + .15 * rail, z);
    };
    if (spec.kind === 'sliding') {
      // Two panes, the left one sliding behind the right (Oeco's photos: handle on the left pane).
      const lw = innerW / 2 + .03;
      sash(-innerW / 2 + lw / 2, lw, innerH, innerY, zf - .0325);
      sash(innerW / 2 - lw / 2, lw, innerH, innerY, zf + .0325);
      handle(-innerW / 2 + .1, 1.0, zf - .0325 + .02);
    } else if (spec.kind === 'patio') {
      // Double patio doors between two fixed sidelights (the 1.5m section in Oeco's photos).
      const sl = Math.min(.3, innerW * .2);
      for (const sgn of [-1, 1]) {
        bar(fw * .8, innerH, depth, sgn * (innerW / 2 - sl), innerY + innerH / 2, zf);
        pane(sl - fw * .4 - .01, innerH - .03, sgn * (innerW / 2 - sl / 2 + fw * .2), innerY + innerH / 2, zf);
      }
      const dw = innerW - 2 * sl - fw * .8, lw = dw / 2;
      for (let i = 0; i < 2; i++) sash(-dw / 2 + lw / 2 + i * lw, lw - .006, innerH, innerY, zf + .002);
      for (const x of [-.03, .03]) handle(x + (x > 0 ? .06 : 0), 1.0, zf + .03);
    } else if (spec.kind === 'folding') {
      const n = spec.leaves, lw = innerW / n;
      for (let i = 0; i < n; i++) sash(-innerW / 2 + lw / 2 + i * lw, lw, innerH, innerY, zf);
      handle(-innerW / 2 + lw - .06, 1.0, zf + .03);
    } else if (spec.kind === 'hinged') {
      sash(0, innerW, innerH, innerY, zf);
      handle(innerW / 2 - .09, 1.0, zf + .03);
    } else if (spec.kind === 'top') {
      // A top-hung opening sash filling the frame.
      sash(0, innerW, innerH, innerY, zf + .01, true, .06);
    } else if (spec.kind === 'tall') {
      // Tall opening window: a top-opening sash over a fixed pane (Oeco's Classic photos).
      const split = innerH * .44;
      pane(innerW - .01, innerH - split - .05, 0, innerY + (innerH - split - .05) / 2, zf);
      bar(innerW, .05, depth, 0, innerY + innerH - split - .025, zf);
      sash(0, innerW, split, innerY + innerH - split, zf + .01, true, .055);
    } else {
      pane(innerW - .01, innerH - .01, 0, innerY + innerH / 2, zf);
    }
  }

  // ---- Roof: fascia band, aluminium roof edge, roof deck, soffits -------------------------------
  const roof = group(root, 'roof');
  const ro = roofOutline(state), roIn = roofOutline(state, FT), slabOutline = roofOutline(state, FT + .003);
  const slabThick = BUILD.fascia - UPSTAND - .005;
  {
    const ringShape = planShape(ro, [roIn.slice().reverse()]);
    const ring = lift(uprightGeo(new THREE.ExtrudeGeometry(ringShape, {depth: BUILD.fascia, bevelEnabled: false}), -BUILD.fascia), liftTop);
    remapUV(ring, (x, y, z) => [x + z, y]);
    add(roof, ring, fasciaMat, 0, 0, 0, 'fascia', 'trims');
    // The aluminium roof edge: a slim anthracite capping, 5mm proud of the fascia and 6mm over it.
    const edgeOut = roofOutline(state, -.005), edgeIn = roofOutline(state, .03);
    const edge = lift(uprightGeo(new THREE.ExtrudeGeometry(planShape(edgeOut, [edgeIn.slice().reverse()]), {depth: .032, bevelEnabled: false}), -.026), liftTop);
    add(roof, edge, edgeMat, 0, 0, 0, 'fascia', 'roofEdge');
    // The deck: the anthracite roof panels on top, the soffit underneath.
    const slabGeo = groupBy(lift(uprightGeo(new THREE.ExtrudeGeometry(planShape(slabOutline), {depth: slabThick, bevelEnabled: false}), -UPSTAND - slabThick), liftTop), n => (n.y > .5 ? 0 : n.y < -.5 ? 1 : 2));
    remapUV(slabGeo, (x, y, z) => [x, z]);
    const slab = add(roof, slabGeo, [roofMat, soffitMat, hidden], 0, 0, 0, 'roofDeck');
    slab.userData.solid = true;
    if (r.canopy) tag(slab, 'canopy');
  }
  // Gutter along the back, with a downpipe at the back right corner (Oeco: "black half round
  // guttering and a down pipe to ground level is fitted to the rear").
  const downpipe = {x: w / 2 - .25, z: -d / 2 - .09};
  {
    const gm = keep(black.clone()); gm.side = THREE.DoubleSide;
    const xs = ro.map(p => p[0]), zs = ro.map(p => p[1]);
    const bx0 = Math.min(...xs), bx1 = Math.max(...xs), bz0 = Math.min(...zs);
    const y = lv(0, bz0).fasciaBottom;
    const gut = add(roof, new THREE.CylinderGeometry(.05, .05, bx1 - bx0 - .02, 14, 1, true, 0, Math.PI), gm, (bx0 + bx1) / 2, y + .02, bz0 - .055, 'gutters');
    gut.rotation.set(0, 0, -Math.PI / 2);
    add(roof, new THREE.CylinderGeometry(.034, .034, y, 12), black, downpipe.x, y / 2, downpipe.z, 'gutters');
  }

  // ---- Canopy downlights: one per metre under the canopy ------------------------------------------
  const off = roofOffsets(state);
  if (r.canopy && state.extras.canopyLights) {
    const cg = group(root, 'canopyLights');
    const n = canopyLightCount(state), x0 = -w / 2 - off.left + .3, x1 = w / 2 + off.right - .3;
    const z = d / 2 + off.front * .5;
    for (let i = 0; i < n; i++) { const x = n === 1 ? 0 : x0 + (x1 - x0) * i / (n - 1); downlight(cg, x, lv(x, z).slabBottom, z); }
  }
  function downlight(parent, x, y, z) {
    add(parent, new THREE.CylinderGeometry(.04, .04, .008, 20), steel, x, y - .004, z);
    add(parent, new THREE.CylinderGeometry(.03, .03, .004, 20), lamp, x, y - .009, z, 'lamp');
    lights.push({kind: 'down', position: V(x, y - .06, z)});
  }

  // ---- Outdoor wall lights: two beside the main doors (included), more on the sides --------------
  const lightGroup = group(root, 'exteriorLights');
  const updown = (wl, u, y, extra) => {
    const l = group(wallGroups[wl.id].g, 'exteriorLights', extra ? 'upDownLights' : 'includedLights');
    l.position.set(u, y, 0);
    add(l, new THREE.CylinderGeometry(.03, .03, .2, 18), steel, 0, 0, .05);
    box(l, .05, .08, .03, 0, 0, .016, steel);
    add(l, new THREE.CylinderGeometry(.024, .024, .006, 16), lamp, 0, .101, .05, 'lamp');
    add(l, new THREE.CylinderGeometry(.024, .024, .006, 16), lamp, 0, -.101, .05, 'lamp');
    lights.push({kind: 'updown', position: V(wl.a[0] + wl.u[0] * u + wl.n[0] * .12, y, wl.a[1] + wl.u[1] * u + wl.n[1] * .12)});
  };
  void lightGroup;
  const clearOf = (wallId, u, Lw, half = .12) => u > .2 && u < Lw - .2 && state.openings.filter(o => o.wall === wallId).every(o => Math.abs(u - o.p * Lw) > OPENINGS[o.type].w / 2 + half);
  {
    const fw = walls.find(x => x.id === 'front'), L = fw.L;
    const main = state.openings.find(o => o.role === 'main' && o.wall === 'front');
    const y = Math.min(FLOOR + 1.85, lv(0, d / 2).skinTop - .2);
    let spots = [];
    if (main) { const c = main.p * L, half = OPENINGS[main.type].w / 2; spots = [c - half - .2, c + half + .2].filter(u => clearOf('front', u, L, .1)); }
    if (spots.length < 2) spots = [...spots, ...[.4, L - .4].filter(u => clearOf('front', u, L) && spots.every(s => Math.abs(s - u) > .5))].slice(0, 2);
    for (const u of spots) updown(fw, u, y, false);
    // Extra lights: on the side walls near the front, then the back corners.
    const extraSpots = [];
    for (const [id, f] of [['left', .82], ['left', .2], ['right', .18], ['right', .8], ['back', .2], ['back', .8]]) {
      const sw = walls.find(x => x.id === id), u = sw.L * f;
      if (clearOf(id, u, sw.L)) extraSpots.push([sw, u]);
    }
    for (const [sw, u] of extraSpots.slice(0, state.extras.upDownLights)) updown(sw, u, Math.min(FLOOR + 1.85, lv(...at(sw, u)).skinTop - .2), true);
  }
  // Outdoor waterproof sockets: low on the front wall near a corner, then on the left side.
  if (state.extras.outdoorSocket) {
    const spots = [['front', .12], ['left', .75], ['front', .9]];
    let placed = 0;
    for (const [id, f] of spots) {
      if (placed >= state.extras.outdoorSocket) break;
      const wl = walls.find(x => x.id === id), u = Math.max(.35, Math.min(wl.L - .35, wl.L * f));
      if (!clearOf(id, u, wl.L, .1)) continue;
      const sg = group(wallGroups[id].g, 'outdoorSocket');
      sg.position.set(u, FLOOR + .45, 0);
      box(sg, .12, .16, .06, 0, 0, .03, std('#5b6064', {roughness: .5}));
      box(sg, .1, .07, .012, 0, .03, .066, std('#7e8488', {roughness: .4}));
      placed++;
    }
  }
  // The 100 litre water butt on its stand, by the downpipe.
  if (state.extras.waterButt) {
    const bg = group(root, 'waterButt');
    bg.position.set(downpipe.x - .1, 0, downpipe.z - .38);
    const butt = std('#2f4a35', {roughness: .7});
    add(bg, new THREE.CylinderGeometry(.24, .21, .72, 24), butt, 0, .3 + .36, 0);
    add(bg, new THREE.CylinderGeometry(.25, .25, .03, 24), black, 0, 1.035, 0);
    add(bg, new THREE.CylinderGeometry(.24, .24, .28, 4), std('#444a4d', {roughness: .8}), 0, .14, 0).rotation.y = Math.PI / 4;
    box(bg, .04, .04, .08, 0, .45, .23, steel);
    add(bg, new THREE.CylinderGeometry(.02, .02, .3, 8), black, .08, 1.15, .22);
  }
  // The mains connection: an armoured cable in a trench from the back of the room towards the
  // house (drawn behind the room; the real route is set at the survey).
  if (state.extras.connection) {
    const cg = group(root, 'connection');
    const trench = std(COLOURS3.soil, {roughness: 1});
    const x = -w / 2 + .5, len = 3.2;
    const t = box(cg, .14, .012, len, x, .006, -d / 2 - .3 - len / 2, trench, 'connection');
    t.castShadow = false;
    for (let k = 0; k < 4; k++) box(cg, .045, .3, .045, x + .14, .15, -d / 2 - .55 - k * (len - .5) / 3, std('#d7801f', {roughness: .6}), 'connection');
    box(cg, .16, .22, .08, x, FLOOR + .25, -d / 2 - .04, std('#5b6064', {roughness: .5}), 'connection');
  }

  // ---- Decking: anthracite composite, across the front (and the Concave's porch floor) --------
  const zFront = d / 2;
  function deckArea(parent, x0, x1, z0, z1, edges) {
    if (x1 - x0 < .05 || z1 - z0 < .05) return;
    const deckTop = FLOOR - .015, g0 = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
    remapUV(g0, (x, y) => [x, y]);
    const top = add(parent, g0, deckMat, (x0 + x1) / 2, deckTop, (z0 + z1) / 2, 'deck');
    top.rotation.x = -Math.PI / 2;
    // Fascia boards round its open edges (vertical boards, as in Oeco's photos).
    const hgt = deckTop - .01;
    if (edges.front) box(parent, x1 - x0, hgt, .02, (x0 + x1) / 2, hgt / 2, z1 - .01, deckSkirt, 'deck');
    if (edges.sides) for (const x of [x0 + .01, x1 - .01]) box(parent, .02, hgt, z1 - z0 - .022, x, hgt / 2, (z0 + z1) / 2 - .011, deckSkirt, 'deck');
  }
  if (state.deck > 0) {
    const dg = group(root, 'deck');
    if (r.porch) {
      // The porch is decked wall to wall; deeper decking carries on in front of it.
      const zp = zFront + PORCH;
      deckArea(dg, -w / 2 + WALL + .003, w / 2 - WALL - .003, zFront + .03, state.deck > PORCH ? zp : zp - .004, {front: state.deck <= PORCH, sides: false});
      if (state.deck > PORCH) deckArea(dg, -w / 2 - .03, w / 2 + .03, zp + .03, zFront + .03 + state.deck, {front: true, sides: true});
    } else deckArea(dg, -w / 2, w / 2, zFront + .03, zFront + .03 + state.deck, {front: true, sides: true});
  }

  // ---- Foundations: concrete pads (hidden behind the base trim, seen in the plan) ----------------
  const baseGroup = group(root, 'foundations');
  {
    const X0 = -w / 2 + .25, X1 = w / 2 - .25, Z0 = -d / 2 + .25, Z1 = d / 2 - .25;
    const nx = Math.max(2, Math.ceil((X1 - X0) / 1.5) + 1), nz = Math.max(2, Math.ceil((Z1 - Z0) / 1.5) + 1);
    const conc = std(COLOURS3.concrete, {roughness: .95});
    for (let i = 0; i < nx; i++) for (let k = 0; k < nz; k++) {
      const x = X0 + (X1 - X0) * i / (nx - 1), z = Z0 + (Z1 - Z0) * k / (nz - 1);
      box(baseGroup, .25, .02, .25, x, .01, z, conc);
      add(baseGroup, new THREE.CylinderGeometry(.03, .03, FLOOR - .21 + .17, 8), steel, x, .02 + (FLOOR - .04) / 2, z);
    }
  }

  // ---- Interior --------------------------------------------------------------------------------
  const inner = group(root, 'interior');
  const innerPoly = insetPolygon(walls, WALL);
  const fl = new THREE.ShapeGeometry(planShape(innerPoly));
  remapUV(fl, (x, y) => [x, y]);
  const floorMesh = add(inner, uprightGeo(fl, FLOOR + .001), floorMat, 0, 0, 0, 'floor');
  floorMesh.castShadow = false;
  const subfloor = uprightGeo(new THREE.ExtrudeGeometry(planShape(insetPolygon(walls, .012)), {depth: FLOOR - .03 - .06, bevelEnabled: false}), .06);
  const sf = add(inner, subfloor, hidden, 0, 0, 0); sf.castShadow = false; sf.userData.solid = true;
  // The ceiling follows the roof's slight fall.
  const ceilAt = (x, z) => lv(x, z).ceiling;
  {
    const cl = new THREE.ShapeGeometry(planShape(innerPoly));
    remapUV(cl, (x, y) => [x, -y]);
    const ceilMesh = add(root, lift(uprightGeo(cl, 0), ceilAt), ceilingMat, 0, 0, 0, 'ceiling');
    ceilMesh.castShadow = false;
  }
  // Skirting (pre-painted MDF), broken at doors and full-height glass.
  for (const {g, L, wall: wl} of Object.values(wallGroups)) {
    const doors = state.openings.filter(o => o.wall === wl.id && OPENINGS[o.type].sill === 0).map(o => [o.p * L - OPENINGS[o.type].w / 2, o.p * L + OPENINGS[o.type].w / 2]);
    let u = Math.max(WALL, cornerCut(wl.id, 'start'));
    const stop = Math.min(L - WALL, L - cornerCut(wl.id, 'end'));
    const pieces = [];
    for (const [a, b] of doors.sort((p, q) => p[0] - q[0])) { if (a > u) pieces.push([u, a]); u = Math.max(u, b); }
    if (u < stop) pieces.push([u, stop]);
    for (const [a, b] of pieces) {
      if (b - a < .02) continue;
      const sk = box(g, b - a - .004, .07, .015, (a + b) / 2, FLOOR + .036, -WALL - .0075, white, 'interiorWalls');
      sk.castShadow = false;
    }
  }
  // Wall build-up, seen from above in the plan with the roof off: cladding, air gap and membrane,
  // the insulated frame (Knauf thermal slab, or the RS45 acoustic slab), the plasterboard
  // (standard, or 15mm acoustic board) and the skim. Hidden under the roof in every other view.
  {
    const sec = group(root, 'wallSection');
    const insul = std(state.extras.acousticInsulation ? '#7f8f86' : '#e8c95a', {roughness: 1});
    const board = std(state.extras.acousticBoard ? '#7d86b8' : '#eceae4', {roughness: 1});
    const membrane = std('#4f6d8a', {roughness: 1}), gap = std('#2b2b2a', {roughness: 1});
    for (const {g, L, wall: wl} of Object.values(wallGroups)) {
      const a = Math.max(SKIN, cornerCut(wl.id, 'start')), b = Math.min(L - SKIN, L - cornerCut(wl.id, 'end'));
      if (b - a < .05) continue;
      const y = Math.min(lv(...at(wl, a)).sectionY, lv(...at(wl, b)).sectionY);
      const boardIn = state.extras.acousticBoard ? -.141 : -.1465;
      const layers = [[-.047, -.0228, gap, 'wallSection'], [-.0515, -.0475, membrane, 'wallSection'], [boardIn + .0005, -.052, insul, 'acousticInsulation'], [-.1595, boardIn, board, 'acousticBoard']];
      for (const [z0, z1, m, t] of layers) {
        const p = add(g, new THREE.PlaneGeometry(b - a - .004, z1 - z0), m, (a + b) / 2, y, (z0 + z1) / 2, 'wallSection', t);
        p.rotation.x = -Math.PI / 2; p.castShadow = false; p.receiveShadow = false;
      }
    }
  }
  // Fittings and furniture.
  const roomRect = {x0: -w / 2 + WALL, x1: w / 2 - WALL, z0: -d / 2 + WALL, z1: d / 2 - WALL};
  furnish(inner, state, {...roomRect, floor: FLOOR, ceilingAt: ceilAt, frontWall: 'front', wallGroups, walls}, {std, add, box, group, tag, keep, metricBox, lights, materials: {white, steel, lamp, glass, cladMat, trim: trimMat, aluMat: aluFrame}, acoustic: ACOUSTIC_FINISHES[state.acousticFinish]});

  // Tags flow down to every mesh, so the scene can find a part by any of its ancestors' tags.
  root.traverse(o => {
    if (o.parent && o.parent.userData.tags) o.userData.tags = [...new Set([...(o.parent.userData.tags || []), ...(o.userData.tags || [])])];
  });
  void hand;
  return {group: root, lights, materials};
}
