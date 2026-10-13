// Interior fittings and illustrative furniture, adapted from the Atelia, Hideaway and SMART
// configurators. Fittings follow the design: Oeco's included electrics (consumer unit, four double
// sockets, a two-way switch, the ceiling light: a slimline 600mm LED panel in Contemporary
// designs, a four-spot bar in Classic ones), extra sockets and panels, heaters, the dividing wall
// and its oak door, acoustic panels. Furniture shows what the room could become for the chosen use
// and is labelled illustrative wherever it is shown.
//
// Works in room coordinates: x across centred, z front (+) to back (-), floor at room.floor; the
// interior spans +/-iw/2 by +/-id/2. The ceiling follows the roof's slight fall (room.ceilingAt).
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {OPENINGS} from './configurator-data.js';
import {layoutWalls} from './configurator-model.js';

const SOFT = {sand: '#d8c7a8', oat: '#e6dccb', terracotta: '#b8714e', clay: '#c99a72', ink: '#2a2f33', oak: '#b88d5f', walnut: '#6e4b33', rubber: '#2b2d2f', canvas: '#efe9dc', leaf: '#4f7a46', brass: '#b8955a', charcoal: '#3a3a3c', linen: '#f1ece2'};

export function furnish(parent, state, room, kit) {
  const {std, add, box, group} = kit;
  const ex = state.extras;
  const iw = room.x1 - room.x0, id = room.z1 - room.z0, F = room.floor;
  const cx = (room.x0 + room.x1) / 2, cz = (room.z0 + room.z1) / 2;
  const ceil = (x, z) => room.ceilingAt(x + cx, z + cz) - .002;
  const low = Math.min(ceil(-iw / 2, -id / 2), ceil(iw / 2, -id / 2), ceil(-iw / 2, id / 2), ceil(iw / 2, id / 2));
  const local = group(parent);
  local.position.set(cx, 0, cz);
  const m = {};
  for (const [k, v] of Object.entries(SOFT)) m[k] = std(v, {roughness: k === 'rubber' ? .95 : k === 'brass' ? .35 : .75, metalness: k === 'brass' ? .6 : 0});
  const fabric = c => std(c, {roughness: .95});
  const rbox = (g, w, h, d, x, y, z, mat, r = .04) => add(g, new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2)), mat, x, y, z);
  const cyl = (g, r0, r1, h, x, y, z, mat, seg = 20) => add(g, new THREE.CylinderGeometry(r0, r1, h, seg), mat, x, y, z);

  // Where the openings fall on each side of the rectangle, in its own coordinates.
  const plane = {front: room.z1, back: room.z0, left: room.x0, right: room.x1};
  const spans = side => {
    const out = [];
    for (const wl of room.walls) {
      const inner = wl.axis === 'x' ? wl.a[1] - wl.n[1] * .15 : wl.a[0] - wl.n[0] * .15;
      const along = side === 'front' || side === 'back' ? 'x' : 'z';
      if (wl.axis !== along || Math.abs(inner - plane[side]) > .01) continue;
      for (const o of state.openings.filter(x => x.wall === wl.id)) {
        const s = OPENINGS[o.type], c = o.p * wl.L, ends = [c - s.w / 2, c + s.w / 2].map(u => along === 'x' ? wl.a[0] + wl.u[0] * u - cx : wl.a[1] + wl.u[1] * u - cz);
        out.push({a: Math.min(...ends), b: Math.max(...ends), type: o.type, sill: s.sill, top: s.sill + s.h, wall: wl.id, group: s.group});
      }
    }
    return out;
  };
  const freeAt = (side, pos, half, below = 2.1) => spans(side).every(s => pos + half < s.a - .05 || pos - half > s.b + .05 || s.sill > below);
  const findFree = (side, half, prefer = 0, below = 2.1) => {
    const lim = (side === 'front' || side === 'back' ? iw : id) / 2 - half - .05;
    for (let k = 0; k < 40; k++) {
      for (const sgn of [1, -1]) {
        const pos = prefer + sgn * k * .1;
        if (Math.abs(pos) <= lim && freeAt(side, pos, half, below)) return pos;
      }
    }
    return null;
  };
  const onWall = (g, side, pos, y, inset = 0) => {
    if (side === 'back') { g.position.set(pos, y, -id / 2 + inset); g.rotation.y = 0; }
    if (side === 'front') { g.position.set(pos, y, id / 2 - inset); g.rotation.y = Math.PI; }
    if (side === 'left') { g.position.set(-iw / 2 + inset, y, pos); g.rotation.y = Math.PI / 2; }
    if (side === 'right') { g.position.set(iw / 2 - inset, y, pos); g.rotation.y = -Math.PI / 2; }
    return g;
  };

  // ---- Layout: partition wall (planner PartitionVertical / PartitionHorizontal) and en-suite ----
  const layoutGroup = group(local, 'layout');
  let blockRight = 0, blockBack = null;
  const partitionMat = std('#f3f2ed', {roughness: .85});
  // A 100mm stud wall from (x0, z0) to (x1, z1) in room coordinates, its top following the
  // ceiling, split round a door opening when `doorAt` is given. It stops 2mm short of the ceiling
  // and the walls it meets, so no faces share a plane.
  const partitionWall = (x0, z0, x1, z1, doorAt = null, door = true) => {
    const len = Math.hypot(x1 - x0, z1 - z0), along = Math.abs(x1 - x0) > Math.abs(z1 - z0) ? 'x' : 'z';
    const dirx = (x1 - x0) / len, dirz = (z1 - z0) / len;
    const pt = u => [x0 + dirx * u, z0 + dirz * u];
    const pieces = doorAt === null ? [[.002, len - .002]] : [[.002, doorAt - .45], [doorAt + .45, len - .002]];
    const wallPiece = (a, b, yBottom) => {
      const us = [a];
      us.push(b);
      const s = new THREE.Shape();
      s.moveTo(a, yBottom); s.lineTo(b, yBottom);
      for (const u of us.slice().reverse()) s.lineTo(u, ceil(...pt(u)) - .002);
      s.lineTo(a, yBottom);
      const geo = new THREE.ExtrudeGeometry(s, {depth: .1, bevelEnabled: false});
      geo.translate(0, 0, -.05);
      const mesh = add(layoutGroup, geo, partitionMat, x0, 0, z0);
      mesh.rotation.y = Math.atan2(-dirz, dirx);
      return mesh;
    };
    for (const [a, b] of pieces) if (b - a > .02) wallPiece(a, b, F);
    if (doorAt !== null) {
      const [x, z] = pt(doorAt);
      // Atelia's rooms are low at the back (about 1.9m inside), so the door is sized to fit.
      const room0 = Math.min(ceil(...pt(doorAt - .45)), ceil(...pt(doorAt + .45))) - F;
      const dh = Math.min(1.98, room0 - .07);
      if (room0 - dh - .022 > .02) wallPiece(doorAt - .45 + .002, doorAt + .45 - .002, F + dh + .022);
      if (door) internalDoor(layoutGroup, x, z, along, .826, dh);
    }
  };
  const internalDoor = (g, x, z, along, w = .826, dh = 1.98) => {
    const dg = group(g, 'internalDoor');
    dg.position.set(x, F, z);
    if (along === 'z') dg.rotation.y = Math.PI / 2;
    box(dg, .05, dh + .01, .12, -w / 2 - .025, (dh + .01) / 2, 0, partitionMat);
    box(dg, .05, dh + .01, .12, w / 2 + .025, (dh + .01) / 2, 0, partitionMat);
    box(dg, w + .1, .01, .12, 0, dh + .015, 0, partitionMat);
    const leaf = new THREE.Group(); leaf.position.set(-w / 2, 0, .04); dg.add(leaf); leaf.rotation.y = -.45;
    box(leaf, w - .01, dh - .02, .04, w / 2, (dh - .02) / 2 + .01, 0, m.oak);
    for (const y of [.45, 1.05, 1.6]) box(leaf, w - .2, .32, .006, w / 2, y, .023, std('#a77d50', {roughness: .7}));
    add(leaf, new THREE.BoxGeometry(.12, .02, .02), kit.materials.steel, w - .1, 1.0, .04);
  };
  // The walls come from the model (layoutWalls), so the PDF's plan draws exactly these.
  const lw = layoutWalls(state).map(v => ({...v, a: [v.a[0] - cx, v.a[1] - cz], b: [v.b[0] - cx, v.b[1] - cz]}));
  for (const v of lw) partitionWall(v.a[0], v.a[1], v.b[0], v.b[1], v.door, v.hasDoor);
  if (lw.length) {
    if (lw[0].axis === 'x') blockBack = {x0: -iw / 2 - 1, z1: lw[0].a[1] + .1};
    else blockRight = iw / 2 - lw[0].a[0] + .1;
  }
  const xMin = -iw / 2, xMax = iw / 2 - blockRight;

  // ---- Heating: 1.5kW electric panel heaters, low on the walls -----------------------------------
  if (ex.heaters) {
    const heat = group(local, 'heaters');
    const glassWhite = std('#f7f7f5', {roughness: .15, metalness: .05});
    let placed = 0;
    for (const [side, prefer] of [['back', iw * .25], ['left', 0], ['back', -iw * .25], ['right', 0]]) {
      if (placed >= ex.heaters) break;
      if (side === 'right' && blockRight) continue;
      const pos = findFree(side, .45, prefer, .7);
      if (pos === null) continue;
      const unit = onWall(group(heat, 'heaters'), side, pos, F + .18, .04);
      box(unit, .85, .45, .06, 0, .225, 0, glassWhite);
      box(unit, .8, .012, .03, 0, .46, .01, std('#d9dadb', {roughness: .4}));
      placed++;
    }
  }

  // ---- Lighting -----------------------------------------------------------------------------
  // Included: a 600 x 600mm slimline LED panel (Contemporary) or an adjustable four-spot bar
  // (Classic), in the middle of the room. Extras: more 600mm panels, RGB panels, 1200 x 600mm
  // panels, recessed downlights in a grid.
  const lightGroup = group(local, 'lighting');
  const lamp = kit.materials.lamp;
  const zMid = blockBack ? (blockBack.z1 + id / 2) / 2 : 0, xMid = blockRight ? (-iw / 2 + iw / 2 - blockRight) / 2 : 0;
  const panel = (x, z, pw, pd, tagName, colour = null) => {
    const y = ceil(x, z) - .012;
    const g = group(lightGroup, tagName);
    box(g, pw, .012, pd, x, y, z, kit.materials.white);
    const face = colour ? std('#ffffff', {emissive: colour, emissiveIntensity: .6, roughness: .3}) : std('#fffaf0', {emissive: '#fff1d6', emissiveIntensity: .45, roughness: .3});
    const f = box(g, pw - .03, .004, pd - .03, x, y - .008, z, face);
    f.userData.tags = ['lamp'];
    kit.lights.push({kind: 'interior', position: new THREE.Vector3(cx + x, y - .15, cz + z)});
  };
  if (state.design === 'classic') {
    const g = group(lightGroup, 'mainLight'), y = ceil(xMid, zMid) - .02;
    box(g, .62, .04, .07, xMid, y, zMid, kit.materials.steel);
    for (let i = 0; i < 4; i++) {
      const x = xMid - .24 + i * .16;
      add(g, new THREE.CylinderGeometry(.035, .03, .1, 16), kit.materials.steel, x, y - .07, zMid).rotation.x = (i % 2 ? .35 : -.35);
      cyl(g, .026, .026, .004, x, y - .121, zMid + (i % 2 ? .018 : -.018), lamp).userData.tags = ['lamp'];
    }
    kit.lights.push({kind: 'interior', position: new THREE.Vector3(cx + xMid, y - .2, cz + zMid)});
  } else panel(xMid, zMid, .6, .6, 'mainLight');
  // Extra panels share out along the room's long axis, clear of the main light.
  const extra = [...Array(ex.ledPanels).fill(['ledPanels', .6, .6, null]), ...Array(ex.rgbPanels).fill(['rgbPanels', .6, .6, '#7a5cff']), ...Array(ex.widePanels).fill(['widePanels', 1.2, .6, null])];
  // Extra panels step out from the main light along the room's long axis, then across it.
  const along = iw >= id, len = along ? iw - (blockRight || 0) : id - (blockBack ? blockBack.z1 + id / 2 : 0), cross = along ? id : iw;
  const placedAt = [[xMid, zMid]];
  extra.forEach(([t, pw, pd, colour], i) => {
    const k = Math.ceil((i + 1) / 2) * (i % 2 ? 1 : -1), lim = len / 2 - Math.max(pw, pd) / 2 - .15;
    let u = Math.max(-lim, Math.min(lim, k * Math.min(1.3, len / 3))), v = 0;
    const at = () => (along ? [xMid + u, zMid + v] : [xMid + v, zMid + u]);
    for (const step of [0, .9, -.9]) { v = Math.max(-(cross / 2 - .45), Math.min(cross / 2 - .45, step)); if (placedAt.every(([px, pz]) => Math.hypot(px - at()[0], pz - at()[1]) > .75)) break; }
    const [x, z] = at(); placedAt.push([x, z]);
    panel(x, z, pw, pd, t, colour);
  });
  if (ex.downlights) {
    const dg = group(lightGroup, 'downlights');
    const cols = Math.max(2, Math.round(iw / 1.2)), rows = Math.max(2, Math.round(id / 1.2));
    for (let i = 0; i < cols; i++) for (let k = 0; k < rows; k++) {
      const x = -iw / 2 + iw * (i + .5) / cols, z = -id / 2 + id * (k + .5) / rows;
      if (Math.abs(x - xMid) < .45 && Math.abs(z - zMid) < .45) continue;
      const y = ceil(x, z) - .006;
      cyl(dg, .045, .045, .006, x, y, z, kit.materials.steel);
      cyl(dg, .035, .035, .004, x, y - .005, z, lamp).userData.tags = ['lamp'];
    }
  }

  // ---- Electrics: consumer unit, sockets and the two-way switch -----------------------------------
  const elec = group(local, 'electrics');
  const brushed = ex.brushedSockets;
  const plate = brushed ? std('#b7bcbf', {roughness: .3, metalness: .75}) : std('#f6faf4', {roughness: .35});
  const dark = std('#2b2f33', {roughness: .5});
  const socket = (side, pos, extraSocket) => {
    const g = onWall(group(elec, 'sockets', extraSocket ? 'extraSockets' : 'includedSockets', 'brushedSockets'), side, pos, F + .4, .004);
    box(g, .146, .086, .012, 0, 0, 0, plate);
    for (const x of [-.035, .035]) box(g, .02, .012, .004, x, .01, .007, dark);
  };
  const taken = {front: [], back: [], left: [], right: []};
  let placed = 0;
  const wanted = 4 + ex.extraSockets;
  const order = [['back', -iw * .3], ['back', iw * .3], ['left', -id * .2], ['right', -id * .2], ['front', -iw * .35], ['front', iw * .35], ['back', 0], ['left', id * .25], ['right', id * .25], ['back', -iw * .42], ['back', iw * .42], ['left', -id * .4]];
  for (const [side, prefer] of order) {
    if (placed >= wanted) break;
    if (side === 'right' && blockRight) continue;
    const pos = findFree(side, .1, prefer, .45);
    if (pos === null || taken[side].some(t => Math.abs(t - pos) < .3)) continue;
    taken[side].push(pos); socket(side, pos, placed >= 4); placed++;
  }
  const entrance = spans('front').filter(s0 => s0.group === 'door').sort((a, b) => (b.b - b.a) - (a.b - a.a))[0];
  {
    const x = entrance ? (entrance.b + .2 < xMax - .1 ? entrance.b + .16 : entrance.a - .16) : xMax - .3;
    const sw = onWall(group(elec, 'switch'), 'front', x, F + 1.2, .004);
    box(sw, .086, .086, .012, 0, 0, 0, plate);
    box(sw, .03, .045, .008, 0, 0, .01, plate);
    // The consumer unit, high beside the doors.
    const cuX = entrance ? (entrance.a - .45 > -iw / 2 + .2 ? entrance.a - .32 : Math.min(xMax - .25, entrance.b + .45)) : -iw / 2 + .4;
    const cu = onWall(group(elec, 'consumerUnit'), 'front', cuX, F + 1.75, .05);
    box(cu, .26, .3, .1, 0, 0, 0, std('#f4f4f2', {roughness: .4}));
    box(cu, .2, .06, .01, 0, .05, .055, std('#bfc3c6', {roughness: .5}));
  }

  // ---- Acoustic wall panels: slatted panels on the back wall, clear of windows --------------------
  if (ex.acousticPanels) {
    const ag = group(local, 'acousticPanels');
    const slat = std(kit.acoustic.hex, {roughness: .7}), felt = std('#2c2d2f', {roughness: 1});
    const top = Math.min(low - .12, F + 2.0);
    for (let x = -iw / 2 + .35; x + .6 < xMax - .3; x += .66) {
      if (!freeAt('back', x + .3, .3, 2.2)) continue;
      const p = onWall(group(ag, 'acousticPanels'), 'back', x + .3, F + .1, .012);
      box(p, .6, top - F - .1, .012, 0, (top - F - .1) / 2, 0, felt);
      for (let i = 0; i < 12; i++) box(p, .027, top - F - .12, .02, -.3 + .025 + i * .05, (top - F - .1) / 2, .016, slat);
    }
  }

  // ---- Furniture (illustrative) -----------------------------------------------------------------
  const fg = group(local, 'furniture');
  const barGap = 0;
  const x0 = xMin + .1, x1 = xMax - .1 - barGap, span = x1 - x0;
  const zBack = -id / 2, zFront = id / 2;
  const backLimit = x => (blockBack && x > blockBack.x0 && x < (blockBack.x1 ?? 99) ? blockBack.z1 : zBack);
  const plant = (x, z, s = 1) => {
    const p = group(fg); p.position.set(x, F, z); p.scale.setScalar(s);
    cyl(p, .17, .13, .34, 0, .17, 0, m.clay);
    for (let i = 0; i < 9; i++) {
      const leaf = rbox(p, .22, .02, .07, Math.cos(i * 2.4) * .12, .5 + (i % 3) * .14, Math.sin(i * 2.4) * .12, m.leaf, .01);
      leaf.rotation.set(.6 * Math.sin(i), i * 2.4, .5);
    }
    cyl(p, .015, .02, .4, 0, .5, 0, m.walnut, 6);
  };
  const rug = (x, z, w0, d0, mat) => { const r0 = box(fg, w0, .006, d0, x, F + .006, z, mat); r0.castShadow = false; };
  const shelf = (side, pos, h = 1.8, w0 = .8) => {
    const s = onWall(group(fg), side, pos, F, .17);
    for (const y of [0, h * .33, h * .66, h]) box(s, w0, .025, .32, 0, y + .0135, 0, m.oak);
    for (const x of [-w0 / 2, w0 / 2]) box(s, .025, h, .32, x, h / 2 + .001, 0, m.oak);
    for (const level of [0, .33, .66]) for (let i = 0; i < 7; i++) box(s, .03 + (i % 3) * .01, .2 + (i % 2) * .05, .2, -w0 / 2 + .1 + i * .085, h * level + .128 + (i % 2) * .025, 0, [m.terracotta, m.sand, m.charcoal, m.oat][(i + level * 3) % 4 | 0]);
    return s;
  };
  const deskSet = (x, z, dw) => {
    const g = group(fg); g.position.set(x, F, z);
    box(g, dw, .03, .7, 0, .735, 0, m.oak);
    for (const sx of [-dw / 2 + .04, dw / 2 - .04]) box(g, .04, .719, .62, sx, .3595, 0, m.ink);
    box(g, .55, .33, .02, 0, 1.06, -.22, m.ink);
    box(g, .06, .16, .06, 0, .83, -.22, m.ink);
    box(g, .2, .012, .15, 0, .756, -.22, m.ink);
    const c = group(g); c.position.set(0, 0, .55); c.rotation.y = Math.PI + .15;
    rbox(c, .5, .08, .48, 0, .48, 0, m.charcoal, .03);
    rbox(c, .48, .55, .07, 0, .82, .22, m.charcoal, .03).rotation.x = -.12;
    cyl(c, .025, .025, .4, 0, .25, 0, m.ink, 8);
    return g;
  };
  const sofa = (x, z, sw, rot = 0) => {
    const g = group(fg); g.position.set(x, F, z); g.rotation.y = rot;
    rbox(g, sw, .22, .85, 0, .22, 0, fabric(SOFT.sand), .06);
    rbox(g, sw - .3, .14, .62, 0, .4, .06, fabric(SOFT.oat), .06);
    rbox(g, sw, .45, .2, 0, .58, -.34, fabric(SOFT.sand), .08);
    for (const sx of [-sw / 2 + .09, sw / 2 - .09]) rbox(g, .18, .38, .85, sx, .44, 0, fabric(SOFT.sand), .07);
    rbox(g, .4, .38, .12, sw * .25, .66, -.18, fabric(SOFT.terracotta), .06).rotation.z = .2;
    rbox(g, .38, .36, .12, -sw * .27, .65, -.2, fabric(SOFT.clay), .06).rotation.z = -.15;
    return g;
  };
  const armchair = (x, z, rot, colour = SOFT.terracotta) => {
    const g = group(fg); g.position.set(x, F, z); g.rotation.y = rot;
    rbox(g, .75, .2, .75, 0, .25, 0, fabric(colour), .06);
    rbox(g, .75, .45, .16, 0, .55, -.3, fabric(colour), .07);
    for (const sx of [-.32, .32]) rbox(g, .12, .32, .75, sx, .42, 0, fabric(colour), .05);
  };
  const floorLamp = (x, z) => {
    const g = group(fg); g.position.set(x, F, z);
    cyl(g, .14, .14, .02, 0, .01, 0, m.brass); cyl(g, .012, .012, 1.4, 0, .71, 0, m.brass, 8);
    cyl(g, .12, .18, .25, 0, 1.45, 0, fabric(SOFT.linen));
  };

  if (span < 1.1 || id < 1.4) {
    plant(x0 + .25, zBack + .3, .8);
  } else if (state.use === 'office') {
    const dw = Math.min(1.5, span * .55), dx = x0 + dw / 2 + .1;
    deskSet(dx, backLimit(dx + dw / 2) + .38, dw);
    rug(dx, backLimit(dx) + .9, Math.min(1.8, span * .6), 1.2, fabric('#c8b9a0'));
    if (span > 2.4 && id > 2.2 && !blockRight && !blockBack) shelf('right', Math.min(-.2, id / 2 - 1.2), Math.min(1.8, low - F - .15), .8);
    plant(x1 - .25, zFront - .35, .9);
    if (span > 3.2 && id > 2.6) armchair(x1 - .6, Math.max(zFront - 1.1, (blockBack ? blockBack.z1 : -9) + .75), -Math.PI * .8);
  } else if (state.use === 'gym') {
    const mat = box(fg, Math.min(2.2, span * .7), .012, Math.min(1.8, id * .7), x0 + Math.min(2.2, span * .7) / 2 + .05, F + .007, 0, m.rubber);
    mat.castShadow = false;
    const bike = group(fg); bike.position.set(x0 + .5, F, backLimit(x0 + .5) + .7); bike.rotation.y = .3;
    box(bike, .08, .5, .9, 0, .25, 0, m.ink);
    cyl(bike, .22, .22, .06, 0, .3, .35, m.charcoal).rotation.z = Math.PI / 2;
    rbox(bike, .22, .06, .28, 0, .95, -.25, m.ink, .02);
    box(bike, .45, .03, .04, 0, 1.1, .35, m.ink);
    box(bike, .04, .55, .04, 0, .8, .3, m.ink);
    if (span > 2) {
      const rx = x0 + Math.min(2.2, span * .7) - .4;
      const rack = group(fg); rack.position.set(rx, F, backLimit(rx) + .25);
      box(rack, .9, .04, .3, 0, .5, 0, m.ink); box(rack, .9, .04, .3, 0, .2, 0, m.ink);
      for (const sx of [-.42, .42]) box(rack, .04, .6, .3, sx, .3, 0, m.ink);
      for (let i = 0; i < 5; i++) for (const y of [.55, .25]) { const db = cyl(rack, .04, .04, .25, -.32 + i * .16, y, 0, m.charcoal, 12); db.rotation.x = Math.PI / 2; }
    }
    plant(x1 - .25, zFront - .35, .85);
  } else if (state.use === 'studio') {
    const tw = Math.min(1.6, span * .55), tx = x0 + span * .45;
    const table = group(fg); table.position.set(tx, F, -id * .05);
    box(table, tw, .04, .8, 0, .9, 0, m.oak);
    for (const sx of [-tw / 2 + .05, tw / 2 - .05]) for (const sz of [-.33, .33]) box(table, .05, .879, .05, sx, .4395, sz, m.walnut);
    box(table, .5, .01, .35, -.2, .925, 0, m.canvas);
    const easel = group(fg); easel.position.set(x0 + .45, F, zFront - .9); easel.rotation.y = .6;
    for (const sx of [-.25, .25]) { const leg = box(easel, .035, 1.7, .035, sx, .85, 0, m.oak); leg.rotation.z = -sx * .25; }
    box(easel, .7, .55, .03, 0, 1.25, .04, m.canvas);
    box(easel, .35, .25, .005, .05, 1.28, .057, m.terracotta);
    plant(x1 - .25, zFront - .35, .8);
  } else if (state.use === 'library') {
    // Library and study: bookshelves along the back wall, a reading chair and a lamp.
    const n = Math.max(1, Math.min(4, Math.floor((span - .3) / .85)));
    const h = Math.min(2.0, low - F - .12);
    for (let i = 0; i < n; i++) { const pos = x0 + .45 + i * .86; if (freeAt('back', pos, .41, h)) shelf('back', pos, h, .82); }
    armchair(x1 - .7, zFront - 1.2, -Math.PI * .8, SOFT.terracotta);
    floorLamp(x1 - .25, zFront - 1.75);
    rug(x0 + span * .6, zFront - 1.2, Math.min(1.8, span * .5), 1.2, fabric('#c2a98a'));
  } else {
    // Entertainment lounge: a sofa facing a media wall, a coffee table and an armchair.
    const sw = Math.min(2.2, span * .62), sx = x0 + sw / 2 + .15;
    sofa(sx, backLimit(sx + sw / 2) + .5, sw);
    rug(sx, .1, Math.min(2.2, span * .7), Math.min(1.6, id * .55), fabric('#d4c3a6'));
    const ct = group(fg); ct.position.set(sx, F, backLimit(sx) + 1.35);
    cyl(ct, .38, .38, .04, 0, .4, 0, m.brass, 32); cyl(ct, .05, .05, .38, 0, .2, 0, m.brass, 12);
    if (span > 3) armchair(x1 - .55, Math.max(.2, (blockBack ? blockBack.z1 : -9) + .75), -Math.PI / 2 - .3);
    plant(x1 - .25, zFront - .35, 1);
  }
  return {blockRight, blockBack};
}
