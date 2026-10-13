// The 3D preview: renderer, garden setting, cameras, focus and highlight, captures for the PDF.
// The building itself comes from configurator-building.js; textures are procedural.
// Adapted from the SMART configurator's scene (tiers, verified first frame, context-loss hooks,
// SVG renderer); the highlight is a fat-line edge outline so it draws on every WebGL tier.
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {LineSegments2} from 'three/addons/lines/LineSegments2.js';
import {LineSegmentsGeometry} from 'three/addons/lines/LineSegmentsGeometry.js';
import {LineMaterial} from 'three/addons/lines/LineMaterial.js';
import {buildRoom, extentsOf, roofOffsets, WALL} from './configurator-building.js';
import {createTextures} from './configurator-textures.js';
import {FlatSVGRenderer} from './configurator-svg.js';
import {OPENINGS, RANGES, BUILD} from './configurator-data.js';
import {outline} from './configurator-model.js';

const SIGNAL = '#ff8a3d';
const ease = t => 1 - Math.pow(1 - t, 3);

// What each device class can afford (as SMART's): phones share one memory budget across a site's
// tabs and drop WebGL when it runs out, so they get half-size textures, a lower pixel ratio and
// smaller PDF renders. `low`: a retry after a lost context, or WebGL1. `safe`: Lambert shading,
// no shadows or reflections, for GPUs whose full shaders fail. `svg`: no usable WebGL at all.
export const TIERS = {
  high: {ratio: 2, textures: 1, shadow: 2048, softShadows: true, antialias: true, capture: 2000, cache: 40},
  medium: {ratio: 1.5, textures: .5, shadow: 1024, softShadows: true, antialias: true, capture: 1600, cache: 18},
  low: {ratio: 1.25, textures: .5, shadow: 1024, softShadows: false, antialias: true, capture: 1400, cache: 14},
  safe: {ratio: 1, textures: .5, shadow: 0, softShadows: false, antialias: false, capture: 1400, cache: 14, simple: true},
  svg: {ratio: 1, textures: .5, shadow: 0, softShadows: false, antialias: false, capture: 0, cache: 40}
};

/**
 * Builds the preview in `container`. Failures carry `err.stage`: 'context' when no WebGL context
 * could be made, 'setup' for anything after that. Either way nothing is left behind: a context
 * that exists is lost on purpose and its canvas removed.
 */
export function createScene(container, options = {}) {
  const tier = TIERS[options.tier] ? options.tier : 'high', T = TIERS[tier];
  let renderer;
  if (tier === 'svg') renderer = new FlatSVGRenderer();
  else {
    const canvas = document.createElement('canvas');
    try {
      renderer = new THREE.WebGLRenderer({canvas, antialias: T.antialias, preserveDrawingBuffer: false, powerPreference: tier === 'high' ? 'high-performance' : 'default'});
    } catch (err) {
      releaseContext(canvas);
      throw staged(err, 'context');
    }
  }
  const undo = [];
  try {
    return setupScene(container, renderer, {...options, tier}, undo);
  } catch (err) {
    for (const f of undo.reverse()) { try { f(); } catch {} }
    try { renderer.dispose(); } catch {}
    if (renderer.isWebGLRenderer) { try { renderer.forceContextLoss(); } catch {} }
    renderer.domElement.remove();
    container.querySelectorAll('.scene-overlay').forEach(el => el.remove());
    throw staged(err, 'setup');
  }
}
function staged(err, stage) {
  const e = err instanceof Error ? err : new Error(String(err));
  e.stage = e.stage || stage;
  return e;
}
function releaseContext(canvas) {
  for (const type of ['webgl2', 'webgl']) {
    try {
      const gl = canvas.getContext(type);
      if (gl) { gl.getExtension('WEBGL_lose_context')?.loseContext(); return; }
    } catch {}
  }
}

function setupScene(container, renderer, {onLost = () => {}, onBroken = () => {}, onVerified = () => {}, onPick = () => {}, onViewChange = () => {}, tier}, undo) {
  const T = TIERS[tier];
  const svg = tier === 'svg', simple = Boolean(T.simple);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let ratio = Math.min(window.devicePixelRatio || 1, T.ratio);
  renderer.setPixelRatio(ratio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .98;
  renderer.shadowMap.enabled = !svg && !simple;
  renderer.shadowMap.type = T.softShadows ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  let broken = null, verified = false;
  const shaderErrors = [];
  if (!svg) {
    renderer.debug.onShaderError = (gl, program, vertex, fragment) => {
      const log = [gl.getProgramInfoLog(program), gl.getShaderInfoLog(vertex), gl.getShaderInfoLog(fragment)].filter(Boolean).join(' | ').replace(/\s+/g, ' ').slice(0, 300);
      shaderErrors.push(log || 'link failed, no log');
      console.warn('A 3D shader failed to link on this GPU:', log);
      if (!broken) { broken = 'shader'; if (verified) setTimeout(() => { if (!disposed && !lost) onBroken('shader'); }); }
    };
  }
  renderer.domElement.setAttribute('role', 'img');
  renderer.domElement.setAttribute('aria-label', 'Interactive 3D preview of your Oeco garden room. Drag to look around, scroll or pinch to zoom.');
  container.appendChild(renderer.domElement);
  const overlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  overlay.setAttribute('class', 'scene-overlay');
  overlay.setAttribute('aria-hidden', 'true');
  container.appendChild(overlay);

  const scene = new THREE.Scene();
  const tex = createTextures(renderer, {scale: T.textures, flat: svg});
  undo.push(() => tex.dispose());
  let envMap = null;
  if (!svg && !simple) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    envMap = pmrem.fromScene(new RoomEnvironment(), .04).texture;
    pmrem.dispose();
  }
  scene.environment = envMap;
  // Three.js r162 (the WebGL1 build) has no scene-wide environment intensity.
  const nativeEnvIntensity = 'environmentIntensity' in scene;
  function setEnvironmentIntensity(v) {
    scene.environmentIntensity = v;
    if (nativeEnvIntensity) return;
    scene.traverse(o => {
      for (const m of o.material ? [].concat(o.material) : []) {
        if (!('envMapIntensity' in m)) continue;
        if (m.userData.envBase === undefined) m.userData.envBase = m.envMapIntensity;
        m.envMapIntensity = m.userData.envBase * v;
      }
    });
  }
  setEnvironmentIntensity(.55);

  const sky = (top, horizon, ground) => {
    const c = document.createElement('canvas'); c.width = 4; c.height = 512;
    const ctx = c.getContext('2d'), g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, top); g.addColorStop(.55, horizon); g.addColorStop(1, ground);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  const daySky = svg ? new THREE.Color('#d6e4ee') : sky('#7fb0d8', '#d9e8f0', '#dfe7d5');
  const duskSky = svg ? new THREE.Color('#2e3346') : sky('#1b2340', '#7a5a62', '#3a3330');
  scene.background = daySky;
  scene.fog = new THREE.Fog('#dfe7d5', 18, 52);

  const hemi = new THREE.HemisphereLight('#e6eef4', '#6f7f56', 1.05);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff3df', 2.9);
  sun.position.set(-7, 10, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(T.shadow || 1, T.shadow || 1);
  sun.shadow.bias = -.0002; sun.shadow.normalBias = .02; sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight('#d9e6f2', .55);
  fill.position.set(8, 5, -6);
  scene.add(fill);

  const garden = new THREE.Group();
  scene.add(garden);
  const lawnTex = tex.lawn();
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(60, 64), new THREE.MeshStandardMaterial({map: lawnTex.map, normalMap: lawnTex.normalMap, roughness: .95, color: '#ffffff'}));
  lawn.rotation.x = -Math.PI / 2; lawn.receiveShadow = true; lawn.userData.ground = true;
  lawn.geometry.attributes.uv.array.forEach((v, i, a) => { a[i] = (v - .5) * 120; });
  garden.add(lawn);

  const camera = new THREE.PerspectiveCamera(35, 1, .05, 220);
  const controls = new OrbitControls(camera, renderer.domElement);
  undo.push(() => controls.dispose());
  controls.enableDamping = !reducedMotion.matches && !svg;
  controls.dampingFactor = .09;
  controls.rotateSpeed = .6;
  controls.zoomSpeed = .8;
  controls.enablePan = false;

  let state = null, room = null, disposed = false, frame = 0, night = false;
  let view = 'outside', anim = null, pulse = null, persistentTags = [], lightRig = [];
  let groundExtras = null, size = {w: 1, h: 1};

  function disposeObject(o) { o.traverse(m => { if (m.geometry) m.geometry.dispose(); }); }

  function landscaping(s, ext) {
    if (groundExtras) { garden.remove(groundExtras); disposeObject(groundExtras); groundExtras.userData.mats?.forEach(m => m.dispose()); }
    const g = new THREE.Group(); groundExtras = g; garden.add(g);
    const mats = [];
    const mk = (pair, colour = '#ffffff', rough = .9) => { const m = new THREE.MeshStandardMaterial({color: colour, map: pair?.map || null, normalMap: pair?.normalMap || null, roughness: rough}); mats.push(m); return m; };
    const paving = mk(tex.paving());
    const {x0, x1, z0} = ext, zF = s.depth / 2 + Math.max(roofOffsets(s).front, 0) + (s.deck || 0);
    // A path of riven slabs up to the doors, as in Oeco's garden photos.
    const pw = 1.2, pd = 2.4;
    const pv = new THREE.Mesh(new THREE.PlaneGeometry(pw, pd), paving);
    pv.rotation.x = -Math.PI / 2; pv.position.set(-s.width * .15, .006, zF + pd / 2 + .05); pv.receiveShadow = true; pv.userData.ground = true;
    const uv = pv.geometry.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * pw, uv.getY(i) * pd);
    g.add(pv);
    const needle = new THREE.MeshStandardMaterial({color: '#2c4f29', roughness: .95, flatShading: true}); mats.push(needle);
    const needle2 = new THREE.MeshStandardMaterial({color: '#3d6b35', roughness: .95}); mats.push(needle2);
    const trunk = new THREE.MeshStandardMaterial({color: '#6e5a45', roughness: .95}); mats.push(trunk);
    const leaf = new THREE.MeshStandardMaterial({color: '#5d8a48', roughness: .9}); mats.push(leaf);
    const blossom = new THREE.MeshStandardMaterial({color: '#e8b9c6', roughness: .9}); mats.push(blossom);
    const rand = (() => { let v = 7; return () => (v = (v * 16807) % 2147483647) / 2147483647; })();
    // A tall conifer hedge behind the room (the backdrop of every Oeco product photo): slim,
    // overlapping columns in two depths, merged into one mesh.
    const hz = z0 - 3.4, cones = [];
    for (const [row, dz, shade] of [[0, 0, 1], [1, .7, .85]]) {
      for (let x = x0 - 7 + row * .35; x <= x1 + 7; x += .55 + rand() * .2) {
        const h = 4.2 + rand() * 1.3 - row * .3, r0 = .5 + rand() * .18;
        const c = new THREE.ConeGeometry(r0, h, 10, 3); c.translate(x, h / 2 + .25, hz - dz + (rand() - .5) * .3);
        const pos = c.attributes.position;
        for (let i = 0; i < pos.count; i++) { const k = 1 + (rand() - .5) * .16; pos.setX(i, x + (pos.getX(i) - x) * k); }
        cones.push(c); void shade;
      }
    }
    const all = [], norms = [];
    for (const c of cones) {
      const n = c.toNonIndexed(); n.computeVertexNormals();
      const pa = n.attributes.position.array, na = n.attributes.normal.array;
      for (let i = 0; i < pa.length; i++) { all.push(pa[i]); norms.push(na[i]); }
      n.dispose(); c.dispose();
    }
    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.Float32BufferAttribute(all, 3)); merged.setAttribute('normal', new THREE.Float32BufferAttribute(norms, 3));
    const hedge = new THREE.Mesh(merged, needle); hedge.castShadow = true; hedge.receiveShadow = true; hedge.userData.hedge = true; g.add(hedge);
    // A close-boarded fence in front of the hedge.
    const fenceMat = new THREE.MeshStandardMaterial({color: '#7c7468', roughness: .9}); mats.push(fenceMat);
    const fw = x1 - x0 + 10, fz = hz + 1.2;
    const fence = new THREE.Mesh(new THREE.BoxGeometry(fw, 1.8, .04), fenceMat);
    fence.position.set((x0 + x1) / 2, .9, fz); fence.castShadow = fence.receiveShadow = true; fence.userData.hedge = true; g.add(fence);
    for (let x = (x0 + x1) / 2 - fw / 2; x <= (x0 + x1) / 2 + fw / 2; x += 1.83) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.1, 1.86, .1), fenceMat); post.position.set(x, .93, fz + .07); post.userData.hedge = true; g.add(post);
    }
    g.userData.hedgeZ = fz;
    // Shrubs either side, and a flowering cherry, as in Oeco's photos.
    const shrub = (x, z, s0) => {
      const sg = new THREE.Group(); sg.position.set(x, 0, z); g.add(sg);
      for (let i = 0; i < 6; i++) {
        const m = new THREE.Mesh(new THREE.IcosahedronGeometry(.26 * s0 * (.7 + rand() * .5), 1), i % 2 ? leaf : needle2);
        m.position.set((rand() - .5) * .5 * s0, .22 * s0 + rand() * .3 * s0, (rand() - .5) * .5 * s0);
        m.castShadow = m.receiveShadow = true; sg.add(m);
      }
    };
    shrub(x0 - 1.1, zF - .5, .8); shrub(x1 + 1.2, zF - 1.1, .7); shrub(x0 - 1.4, z0 + .2, 1);
    const tree = new THREE.Group(); tree.position.set(x1 + 2.6, 0, z0 - 1.2); tree.scale.setScalar(.8); tree.visible = false; g.add(tree);
    const tt = new THREE.Mesh(new THREE.CylinderGeometry(.09, .13, 2.2, 8), trunk); tt.position.y = 1.1; tt.castShadow = true; tree.add(tt);
    for (let i = 0; i < 9; i++) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(.55 + rand() * .3, 1), i % 3 ? blossom : leaf);
      b.position.set((rand() - .5) * 1.4, 2.3 + rand() * .9, (rand() - .5) * 1.4); b.castShadow = true; tree.add(b);
    }
    g.userData.mats = mats;
  }

  // Safe tier: Lambert materials (colour and texture kept, no normal maps, no reflections).
  const simpler = new WeakMap();
  function simplify(root, owned) {
    const swap = m => {
      if (!m?.isMeshStandardMaterial) return m;
      let l = simpler.get(m);
      if (!l) {
        l = new THREE.MeshLambertMaterial({color: m.color, map: m.map, emissive: m.emissive, emissiveIntensity: m.emissiveIntensity, transparent: m.transparent, opacity: m.opacity, side: m.side, depthWrite: m.depthWrite, visible: m.visible});
        l.name = m.name; l.userData = m.userData;
        simpler.set(m, l); owned?.push(l);
      }
      return l;
    };
    root.traverse(o => { if (o.isMesh) o.material = Array.isArray(o.material) ? o.material.map(swap) : swap(o.material); });
  }
  function flatColours() {
    scene.traverse(o => {
      for (const m of o.material ? [].concat(o.material) : []) {
        if (m.userData.flatColour || !m.map?.userData.hex) continue;
        m.color.multiply(new THREE.Color(m.map.userData.hex));
        m.userData.flatColour = true;
      }
    });
  }

  // ---- Lights for dusk -----------------------------------------------------------------------
  function rigLights(list) {
    for (const l of lightRig) { scene.remove(l); l.dispose?.(); }
    lightRig = [];
    if (!night) return;
    for (const l of list.filter(x => x.kind === 'interior').slice(0, 4)) {
      const p = new THREE.PointLight('#ffd8a8', 5, 7, 1.6); p.position.copy(l.position); scene.add(p); lightRig.push(p);
    }
    for (const l of list.filter(x => x.kind !== 'interior').slice(0, 5)) {
      if (l.kind === 'down' || l.kind === 'updown') {
        const s = new THREE.SpotLight('#ffcf94', 6, 4.5, .75, .65, 1.4);
        s.position.copy(l.position); s.target.position.copy(l.position).add(new THREE.Vector3(0, -2, .25));
        scene.add(s, s.target); lightRig.push(s, s.target);
        if (l.kind === 'updown') {
          const u = new THREE.SpotLight('#ffcf94', 3, 2.2, .5, .7, 1.4);
          u.position.copy(l.position); u.target.position.copy(l.position).add(new THREE.Vector3(0, 2, 0));
          scene.add(u, u.target); lightRig.push(u, u.target);
        }
      } else { const p = new THREE.PointLight('#ffc98a', 2.5, 4, 1.8); p.position.copy(l.position); scene.add(p); lightRig.push(p); }
    }
  }
  function applyLighting() {
    scene.background = night ? duskSky : daySky;
    scene.fog.color.set(night ? '#2f3534' : '#e4eae2');
    hemi.intensity = night ? .14 : 1.05; hemi.color.set(night ? '#5b6f96' : '#e6eef4');
    sun.intensity = night ? .18 : 2.7; sun.color.set(night ? '#9fb4ff' : '#fff1dc');
    fill.intensity = night ? .05 : .55;
    setEnvironmentIntensity(night ? .07 : .55);
    renderer.toneMappingExposure = night ? 1.2 : .98;
    if (svg) { hemi.intensity = night ? .35 : 1.25; sun.intensity = night ? .08 : .55; fill.intensity = night ? .02 : .12; }
    room?.group.traverse(o => { if (o.isMesh && o.userData.tags?.includes('lamp')) o.material.emissiveIntensity = night ? 4 : .35; });
    rigLights(room?.lights || []);
  }
  function fitShadow(ext) {
    const r = Math.max(ext.x1 - ext.x0, ext.z1 - ext.z0) / 2 + 2.5, cam = sun.shadow.camera;
    cam.left = -r; cam.right = r; cam.top = r; cam.bottom = -r; cam.near = 1; cam.far = 40;
    cam.updateProjectionMatrix();
    sun.target.position.set((ext.x0 + ext.x1) / 2, 0, (ext.z0 + ext.z1) / 2);
  }

  // ---- Views -----------------------------------------------------------------------------
  const roomBox = () => {
    const e = extentsOf(state);
    return new THREE.Box3(new THREE.Vector3(e.x0 - .2, 0, e.z0 - .25), new THREE.Vector3(e.x1 + .2, e.top + .05, e.z1 + .1));
  };
  function fitDistance(boxIn, dir, fov, aspect, margin = 1.1) {
    const c = boxIn.getCenter(new THREE.Vector3());
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), dir).normalize();
    if (right.lengthSq() < .1) right.set(1, 0, 0);
    const up = new THREE.Vector3().crossVectors(dir, right).normalize();
    const tanY = Math.tan(THREE.MathUtils.degToRad(fov / 2)), tanX = tanY * aspect;
    let dist = 0;
    for (const x of [boxIn.min.x, boxIn.max.x]) for (const y of [boxIn.min.y, boxIn.max.y]) for (const z of [boxIn.min.z, boxIn.max.z]) {
      const p = new THREE.Vector3(x, y, z).sub(c), near = p.dot(dir);
      dist = Math.max(dist, near + Math.abs(p.dot(right)) / tanX * margin, near + Math.abs(p.dot(up)) / tanY * margin);
    }
    return dist;
  }
  function insideViewpoint(lookAt = null) {
    const w = state.width, d = state.depth, FLOOR = BUILD.base;
    const iw = w - 2 * WALL, z0 = -d / 2 + WALL, z1 = d / 2 - WALL;
    const fw = outline(state).find(x => x.id === 'front');
    const door = state.openings.find(o => o.wall === 'front' && o.role === 'main') || state.openings.find(o => o.wall === 'front' && OPENINGS[o.type].group === 'door');
    const dx = door ? fw.a[0] + door.p * fw.L : 0;
    // A dividing wall on the right would stand between the camera and the room: stay left of it.
    // From the front corner away from the doors' handle side, looking across to the far back
    // corner, so the room reads as a whole; a dividing wall on the right keeps the camera left.
    const blockedRight = state.layout === 'divided' && state.width >= 5;
    const side = blockedRight || dx > 0 ? -1 : 1;
    const x = side * (iw / 2 - .45);
    const pos = new THREE.Vector3(x, FLOOR + 1.55, z1 - .35);
    const at = lookAt || new THREE.Vector3(-side * iw * .22, FLOOR + .95, z0 + .2);
    return {pos, at};
  }
  function poseFor(name, opts = {}) {
    const aspect = size.w / size.h;
    if (name === 'inside') {
      const {pos, at} = insideViewpoint(opts.lookAt);
      const dir = at.clone().sub(pos).normalize();
      return {view: 'inside', fov: aspect < .9 ? 84 : 74, position: pos, target: pos.clone().addScaledVector(dir, .02)};
    }
    if (name === 'plan') {
      const b = roomBox(); b.max.y = 1;
      const c = b.getCenter(new THREE.Vector3());
      const dist = fitDistance(b, new THREE.Vector3(0, 1, .0001).normalize(), 30, aspect, 1.22);
      return {view: 'plan', fov: 30, position: new THREE.Vector3(c.x, dist + 1, c.z + .001), target: new THREE.Vector3(c.x, 0, c.z)};
    }
    const dir = (opts.dir || new THREE.Vector3(-.62, .32, 1)).clone().normalize();
    const b = opts.box || roomBox(), c = b.getCenter(new THREE.Vector3());
    if (!opts.box) c.y = Math.min(c.y, 1.25);
    const fov = 35;
    const dist = Math.max(opts.minDistance || 0, fitDistance(b, dir, fov, aspect, opts.margin || (opts.box ? 1.08 : 1.2)));
    return {view: 'outside', fov, position: c.clone().addScaledVector(dir, dist), target: c};
  }
  function configureControls(name) {
    controls.enableRotate = name !== 'plan';
    controls.enablePan = name === 'plan';
    controls.screenSpacePanning = true;
    controls.enableZoom = name !== 'inside';
    if (name === 'outside') {
      controls.minPolarAngle = .12; controls.maxPolarAngle = 1.5;
      const ext = extentsOf(state);
      controls.minDistance = 2.2; controls.maxDistance = Math.max(ext.x1 - ext.x0, ext.z1 - ext.z0) * 3 + 14;
      controls.rotateSpeed = .6; controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    } else if (name === 'inside') {
      controls.minPolarAngle = .5; controls.maxPolarAngle = 2.4;
      controls.minDistance = 0; controls.maxDistance = .05; controls.rotateSpeed = -.35;
    } else {
      controls.minDistance = 2; controls.maxDistance = 90;
      controls.mouseButtons.LEFT = THREE.MOUSE.PAN; controls.touches.ONE = THREE.TOUCH.PAN;
    }
    if (name !== 'plan') controls.touches.ONE = THREE.TOUCH.ROTATE;
  }
  function applyViewVisibility() {
    if (!room) return;
    const plan = view === 'plan';
    room.group.traverse(o => {
      const t = o.userData.tags;
      if (!t || !o.isMesh) return;
      if (t.includes('roof') || t.includes('ceiling') || t.includes('lighting') || t.includes('canopyLights')) o.visible = !plan;
    });
    renderOverlay();
  }
  function moveTo(pose, animate = true) {
    const changed = pose.view !== view;
    view = pose.view;
    configureControls(view);
    applyViewVisibility();
    const from = {position: camera.position.clone(), target: controls.target.clone(), fov: camera.fov};
    if (!animate || reducedMotion.matches || changed && (view === 'inside' || from.position.distanceTo(pose.position) > 70)) {
      camera.position.copy(pose.position); controls.target.copy(pose.target); camera.fov = pose.fov; camera.updateProjectionMatrix();
      anim = null; controls.update(); request();
    } else {
      anim = {start: performance.now(), duration: changed ? 700 : 650, from, to: pose};
      request();
    }
    if (changed) onViewChange(view);
  }
  function step(now) {
    if (!anim) return false;
    const t = Math.min(1, (now - anim.start) / anim.duration), k = ease(t);
    const target = anim.from.target.clone().lerp(anim.to.target, k);
    const a = new THREE.Spherical().setFromVector3(anim.from.position.clone().sub(anim.from.target));
    const b = new THREE.Spherical().setFromVector3(anim.to.position.clone().sub(anim.to.target));
    let dTheta = b.theta - a.theta;
    if (dTheta > Math.PI) dTheta -= 2 * Math.PI; if (dTheta < -Math.PI) dTheta += 2 * Math.PI;
    const sph = new THREE.Spherical(a.radius + (b.radius - a.radius) * k, a.phi + (b.phi - a.phi) * k, a.theta + dTheta * k);
    camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(sph));
    controls.target.copy(target);
    camera.fov = anim.from.fov + (anim.to.fov - anim.from.fov) * k;
    camera.updateProjectionMatrix();
    if (t === 1) anim = null;
    return true;
  }

  // ---- Highlight: a bright edge outline round the changed part --------------------------------
  // Fat lines (LineSegments2) draw on WebGL2 and WebGL1 alike, show in screenshots, and never
  // recolour the building itself. The SVG tier only turns the camera.
  const highlight = new THREE.Group();
  highlight.name = 'highlight';
  scene.add(highlight);
  const lineMat = svg ? null : new LineMaterial({color: SIGNAL, linewidth: 3.2, transparent: true, opacity: 0, depthTest: true, depthWrite: false});
  if (lineMat) { lineMat.resolution.set(1, 1); undo.push(() => lineMat.dispose()); }
  let highlightGeo = null;
  function meshesTagged(tags) {
    const list = [];
    room?.group.traverse(o => {
      if (o.isMesh && o.visible && o.userData.tags && tags.some(t => o.userData.tags.includes(t)) && !o.userData.tags.includes('glass') && !o.userData.ground) list.push(o);
    });
    return list;
  }
  function boxOf(meshes) { const b = new THREE.Box3(); for (const m of meshes) b.expandByObject(m); return b; }
  function setHighlight(meshes) {
    highlight.clear();
    highlightGeo?.dispose(); highlightGeo = null;
    if (!lineMat || !meshes.length) return;
    const pts = [];
    const v = new THREE.Vector3();
    for (const m of meshes.slice(0, 260)) {
      m.updateMatrixWorld(true);
      const e = new THREE.EdgesGeometry(m.geometry, 32), p = e.attributes.position;
      for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld); pts.push(v.x, v.y, v.z); }
      e.dispose();
      if (pts.length > 240000) break;
    }
    highlightGeo = new LineSegmentsGeometry().setPositions(pts);
    const lines = new LineSegments2(highlightGeo, lineMat);
    lines.renderOrder = 5; lines.frustumCulled = false;
    highlight.add(lines);
  }
  let persistent = [];

  // The hedge behind the room closes the view from the front; from behind it would hide the
  // room, so it steps aside whenever the camera is on the far side of it.
  function hedgeFor(cam) {
    if (!groundExtras) return;
    const show = cam.position.z > (groundExtras.userData.hedgeZ ?? -99) + .6;
    groundExtras.traverse(o => { if (o.userData.hedge) o.visible = show; });
  }

  // ---- Render loop -----------------------------------------------------------------------
  function request() { if (!disposed && !lost && !frame) frame = requestAnimationFrame(render); }
  let frames = 0, lastError = null, lost = false, lastFrame = 0, slowFrames = 0;
  function render(now) {
    frame = 0; frames++;
    if (disposed || lost) return;
    adapt(now);
    const moving = step(now);
    const damped = controls.update();
    let pulsing = false;
    if (pulse && lineMat) {
      // Time-based, but never fewer than ~40 drawn frames, so slow devices still see it.
      pulse.frames = (pulse.frames || 0) + 1;
      const t = Math.min((now - pulse.start) / 1000, pulse.frames / 13);
      lineMat.opacity = t < 0 ? 0 : t < 1.8 ? .55 + .45 * Math.abs(Math.sin(t * Math.PI * 1.1)) : Math.max(persistent.length ? .6 : 0, 1 - (t - 1.8) / 1.2);
      if (t > 3) { pulse = null; if (persistent.length) setHighlight(persistent); else setHighlight([]); lineMat.opacity = persistent.length ? .6 : 0; }
      pulsing = Boolean(pulse);
    }
    try {
      if (lineMat) lineMat.resolution.set(size.w, size.h);
      hedgeFor(camera);
      renderer.render(scene, camera);
    } catch (err) { lastError = String(err); }
    renderOverlay();
    if (!verified && !checked) verifyFrame();
    if (moving || damped || pulsing) request();
  }
  // A context that renders nothing is worse than none: read back three points of the frame just
  // drawn. Sky, building and ground are never near black, even at dusk. Black has to repeat over
  // three frames to count.
  let checked = false, blankFrames = 0;
  const samples = [], glErrors = [];
  function verifyFrame() {
    let blank = false;
    if (!svg && !broken) {
      try {
        const gl = renderer.getContext(), b = renderer.getDrawingBufferSize(new THREE.Vector2()), px = new Uint8Array(4), read = [];
        for (const fy of [.92, .5, .08]) { gl.readPixels(b.x >> 1, Math.round(b.y * fy), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); read.push([px[0], px[1], px[2]]); }
        samples.push(read);
        blank = read.every(([r, g, b2]) => r + g + b2 < 12);
        const err = gl.getError();
        if (err) glErrors.push(err);
      } catch (err) { samples.push(String(err)); }
    }
    if (blank && ++blankFrames < 3) { request(); return; }
    if (blank) broken = 'blank';
    checked = true;
    setTimeout(() => {
      if (disposed || lost) return;
      if (broken) onBroken(broken);
      else { verified = true; onVerified(); }
    });
  }
  function adapt(now) {
    const dt = now - lastFrame;
    lastFrame = now;
    if (!(dt > 0 && dt < 250)) return;
    slowFrames = dt > 50 ? slowFrames + 1 : Math.max(0, slowFrames - 2);
    if (slowFrames < 20 || ratio <= 1) return;
    slowFrames = 0;
    ratio = Math.max(1, Math.round((ratio - .25) * 4) / 4);
    renderer.setPixelRatio(ratio);
    size = {w: 0, h: 0};
    resize();
  }
  controls.addEventListener('change', request);
  controls.addEventListener('start', () => { anim = null; });

  // ---- Overlay: dimensions in plan view ---------------------------------------------------
  let showDims = false;
  function project(v) {
    const p = v.clone().project(camera);
    return [(p.x + 1) / 2 * size.w, (1 - p.y) / 2 * size.h, p.z];
  }
  function renderOverlay() {
    if (!state || (!showDims && view !== 'plan')) { overlay.replaceChildren(); return; }
    const w = state.width, d = state.depth, y = view === 'plan' ? 0 : .02, r = RANGES[state.range];
    const els = [];
    const NS = 'http://www.w3.org/2000/svg';
    const el = (name, attrs, text) => { const e = document.createElementNS(NS, name); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); if (text) e.textContent = text; els.push(e); return e; };
    const dim = (a, b, label, offset) => {
      const [x1, y1, z1] = project(a.clone().add(offset)), [x2, y2, z2] = project(b.clone().add(offset));
      if (z1 > 1 || z2 > 1) return;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      el('line', {x1, y1, x2, y2});
      el('line', {class: 'tick', x1, y1: y1 - 6, x2: x1, y2: y1 + 6});
      el('line', {class: 'tick', x1: x2, y1: y2 - 6, x2, y2: y2 + 6});
      const g = el('g', {transform: `translate(${mx} ${my})`});
      const rect = document.createElementNS(NS, 'rect'); rect.setAttribute('x', '-36'); rect.setAttribute('y', '-12'); rect.setAttribute('width', '72'); rect.setAttribute('height', '24'); rect.setAttribute('rx', '12');
      const t = document.createElementNS(NS, 'text'); t.setAttribute('text-anchor', 'middle'); t.setAttribute('dy', '4'); t.textContent = label;
      g.append(rect, t);
    };
    const off = roofOffsets(state), front = d / 2 + off.front;
    dim(new THREE.Vector3(-w / 2, y, d / 2), new THREE.Vector3(w / 2, y, d / 2), `${w.toFixed(1)}m`, new THREE.Vector3(0, 0, Math.max(.55, front - d / 2 + .5, (state.deck || 0) + .5)));
    dim(new THREE.Vector3(w / 2, y, d / 2), new THREE.Vector3(w / 2, y, -d / 2), `${d.toFixed(1)}m`, new THREE.Vector3(.6 + off.right, 0, 0));
    if (view === 'plan') {
      if (r.canopy) dim(new THREE.Vector3(-w / 2, y, d / 2), new THREE.Vector3(-w / 2, y, d / 2 + off.front), `${off.front.toFixed(1)}m`, new THREE.Vector3(-.6 - off.left, 0, 0));
      if (state.deck && state.deck !== off.front) dim(new THREE.Vector3(-w / 2, y, d / 2), new THREE.Vector3(-w / 2, y, d / 2 + state.deck), `Deck ${state.deck.toFixed(1)}m`, new THREE.Vector3(-(r.canopy ? 1.3 : .6) - off.left, 0, 0));
      const iw = w - 2 * WALL, id = d - 2 * WALL;
      dim(new THREE.Vector3(-iw / 2, y, -d / 2 + WALL + .02), new THREE.Vector3(iw / 2, y, -d / 2 + WALL + .02), `${iw.toFixed(2)}m inside`, new THREE.Vector3(0, 0, .45));
      void id;
      const names = [['Front', 0, Math.max(front, d / 2 + (state.deck || 0)) + .3], ['Back', 0, -d / 2 - .5], ['Left', -w / 2 - .5 - off.left, -d * .3], ['Right', w / 2 + .5 + off.right, -d * .3]];
      for (const [n, x, z] of names) { const [px, py] = project(new THREE.Vector3(x, 0, z)); el('text', {class: 'wall-name', x: px, y: py, 'text-anchor': 'middle'}, n); }
    }
    overlay.setAttribute('viewBox', `0 0 ${size.w} ${size.h}`);
    overlay.replaceChildren(...els);
  }

  // ---- Picking ---------------------------------------------------------------------------
  const ray = new THREE.Raycaster();
  let downAt = null;
  renderer.domElement.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6 || !room) return;
    const rc = renderer.domElement.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2((e.clientX - rc.left) / rc.width * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1), camera);
    const hit = ray.intersectObject(room.group, true).find(h => h.object.visible);
    const t = hit?.object.userData.tags?.find(x => x.startsWith('opening:'));
    if (t) onPick({kind: 'opening', id: t.slice(8)});
    else if (hit) {
      const part = ['canopyLights', 'porch', 'canopy', 'fascia', 'roof', 'deck', 'floor', 'furniture', 'cladding', 'trims', 'base', 'layout', 'electrics', 'lighting', 'heaters', 'acousticPanels', 'upDownLights', 'includedLights', 'outdoorSocket', 'waterButt', 'connection', 'interiorWalls', 'ceiling'].find(x => hit.object.userData.tags?.includes(x));
      if (part) onPick({kind: 'part', part});
    }
  });

  // ---- Zoom inside: scroll and pinch change the field of view (the camera stays on the spot) ----
  const fovZoom = k => { camera.fov = THREE.MathUtils.clamp(camera.fov * k, 38, 88); camera.updateProjectionMatrix(); request(); };
  renderer.domElement.addEventListener('wheel', e => { if (view !== 'inside') return; e.preventDefault(); fovZoom(e.deltaY > 0 ? 1.08 : 1 / 1.08); }, {passive: false});
  const touches = new Map();
  let pinch = 0;
  renderer.domElement.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') touches.set(e.pointerId, [e.clientX, e.clientY]); });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!touches.has(e.pointerId)) return;
    touches.set(e.pointerId, [e.clientX, e.clientY]);
    if (view !== 'inside' || touches.size !== 2) { pinch = 0; return; }
    const [a, b] = [...touches.values()], dist = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (pinch) fovZoom(pinch / dist);
    pinch = dist;
  });
  for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) renderer.domElement.addEventListener(ev, e => { touches.delete(e.pointerId); pinch = 0; });

  // ---- Size and context loss -------------------------------------------------------------
  function resize() {
    const rect = container.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    if (Math.abs(rect.width - size.w) < .5 && Math.abs(rect.height - size.h) < .5) return;
    size = {w: rect.width, h: rect.height};
    renderer.setSize(size.w, size.h, false);
    camera.aspect = size.w / size.h; camera.updateProjectionMatrix();
    if (state) moveTo(poseFor(view), false);
    request();
  }
  const ro = new ResizeObserver(resize);
  undo.push(() => ro.disconnect());
  ro.observe(container);
  renderer.domElement.addEventListener('webglcontextlost', e => {
    e.preventDefault();
    if (disposed || lost) return;
    lost = true;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    onLost();
  });

  // ---- Public API ------------------------------------------------------------------------
  let designKey = '';
  const api = {
    update(next, {refit = false} = {}) {
      if (disposed) return;
      const key = JSON.stringify({...next, step: 0});
      if (key === designKey && !refit) return;
      designKey = key;
      const first = !state;
      const sizeChanged = state && (state.width !== next.width || state.depth !== next.depth || state.range !== next.range || state.sideCanopy !== next.sideCanopy || state.deck !== next.deck);
      tex.begin();
      let built;
      try { built = buildRoom(next, tex); } catch (err) {
        lastError = String(err); designKey = '';
        if (first) throw err;
        console.error(err);
        return;
      }
      state = next;
      if (room) { scene.remove(room.group); disposeObject(room.group); room.materials.forEach(m => m.dispose()); }
      room = built;
      scene.add(room.group);
      const ext = extentsOf(state);
      landscaping(state, ext);
      tex.prune(T.cache);
      if (svg) flatColours();
      if (simple) { simplify(room.group, room.materials); simplify(groundExtras, groundExtras.userData.mats); simplify(lawn); }
      fitShadow(ext);
      applyLighting();
      persistent = persistentTags.length ? meshesTagged(persistentTags) : [];
      if (pulse) { pulse.meshes = meshesTagged(pulse.tags); setHighlight(pulse.meshes); }
      else setHighlight(persistent);
      if (lineMat && !pulse) lineMat.opacity = persistent.length ? .6 : 0;
      applyViewVisibility();
      if (first) { resize(); moveTo(poseFor('outside'), false); }
      else if (refit || sizeChanged) moveTo(poseFor(view), true);
      request();
    },
    setView(name, {animate = true} = {}) { if (state) moveTo(poseFor(name), animate); },
    get view() { return view; },
    /** Turns to a part and outlines it. spec: {tags, view?, dir?, lookAt?, whole?, highlight?} */
    focus(input) {
      if (!state || !room) return;
      // A rebuilt room has not been rendered yet: bring its world matrices up to date before
      // measuring it, or the camera frames the origin (My Retreat, 13 Oct 2026).
      scene.updateMatrixWorld(true);
      const dd = input.dir;
      const spec = {...input, dir: dd && dd !== 'auto' ? (Array.isArray(dd) ? new THREE.Vector3(...dd) : new THREE.Vector3(dd.x, dd.y, dd.z)) : undefined};
      const tags = spec.tags || [];
      const wantView = spec.view || 'outside';
      if (wantView === 'inside') {
        const meshes = meshesTagged(tags);
        const at = meshes.length ? boxOf(meshes).getCenter(new THREE.Vector3()) : null;
        if (at && spec.lookDown) at.y = BUILD.base;
        moveTo(poseFor('inside', {lookAt: at}), true);
      } else if (wantView === 'plan') {
        moveTo(poseFor('plan'), true);
      } else {
        const meshes = tags.length ? meshesTagged(tags) : [];
        let b = meshes.length ? boxOf(meshes) : roomBox();
        // 'auto': face the parts square on, from the side of the wall they are fixed to.
        if (input.dir === 'auto' && meshes.length) {
          // The newest part decides (lights and sockets are added in order round the walls).
          const n = new THREE.Vector3(0, 0, 1).transformDirection(meshes[meshes.length - 1].parent.matrixWorld);
          n.y = 0; if (n.lengthSq() < 1e-6) n.set(0, 0, 1);
          b = boxOf(meshes.filter(m => new THREE.Vector3(0, 0, 1).transformDirection(m.parent.matrixWorld).dot(n) > .7));
          spec.dir = n.normalize().add(new THREE.Vector3(0, .22, 0)).normalize();
        } else if (input.dir === 'auto') spec.dir = undefined;
        if (spec.context !== false) {
          const pad = spec.pad ?? .35, s0 = b.getSize(new THREE.Vector3());
          b = b.clone().expandByVector(new THREE.Vector3(Math.max(pad, s0.x * .15), Math.max(pad * .7, .3), Math.max(pad, s0.z * .15)));
          if (spec.whole) b = roomBox();
          // Parts seen from below (canopy downlights): take the box down to the ground, so the
          // camera stands at eye level and looks up under the canopy.
          if (spec.ground) b.min.y = 0;
          b.min.y = Math.max(0, b.min.y);
        }
        moveTo(poseFor('outside', {dir: spec.dir, box: b, minDistance: spec.minDistance || 3}), true);
      }
      if (spec.highlight !== false && tags.length) {
        pulse = {tags, start: performance.now() + (reducedMotion.matches ? 0 : 250), meshes: meshesTagged(tags)};
        setHighlight(pulse.meshes);
      }
      request();
    },
    select(tags) {
      scene.updateMatrixWorld(true);
      persistentTags = tags || [];
      persistent = tags?.length ? meshesTagged(tags) : [];
      if (!pulse) { setHighlight(persistent); if (lineMat) lineMat.opacity = persistent.length ? .6 : 0; }
      request();
    },
    zoom(direction) {
      if (view === 'inside') { camera.fov = THREE.MathUtils.clamp(camera.fov - direction * 8, 38, 88); camera.updateProjectionMatrix(); request(); return; }
      const offset = camera.position.clone().sub(controls.target);
      const dist = THREE.MathUtils.clamp(offset.length() * (direction > 0 ? .8 : 1.25), controls.minDistance, controls.maxDistance);
      const to = {view, fov: camera.fov, position: controls.target.clone().add(offset.setLength(dist)), target: controls.target.clone()};
      anim = reducedMotion.matches ? null : {start: performance.now(), duration: 260, from: {position: camera.position.clone(), target: controls.target.clone(), fov: camera.fov}, to};
      if (!anim) camera.position.copy(to.position);
      request();
    },
    reset() { moveTo(poseFor(view === 'plan' ? 'plan' : view), true); },
    setNight(on) { night = Boolean(on); applyLighting(); request(); },
    setDimensions(on) { showDims = Boolean(on); renderOverlay(); request(); },
    /** Renders named views at a fixed size for the PDF; the visible preview is untouched. */
    capture(names = ['hero', 'front', 'back', 'left', 'right', 'inside', 'inside2', 'plan', 'dusk'], {width = 2000, height = 1250} = {}) {
      if (!state || lost || svg || renderer.getContext().isContextLost()) return {};
      if (width > T.capture) { height = Math.round(height * T.capture / width); width = T.capture; }
      const cam = new THREE.PerspectiveCamera(35, width / height, .05, 220);
      const saved = {night, view, size: renderer.getSize(new THREE.Vector2()), ratio: renderer.getPixelRatio()};
      const out = {}, hiVisible = highlight.visible;
      highlight.visible = false;
      try {
        renderer.setPixelRatio(1);
        renderer.setSize(width, height, false);
        const prevSize = size; size = {w: width, h: height};
        const ext = extentsOf(state);
        const sideBox = () => roomBox();
        for (const name of names) {
          const isDusk = name === 'dusk';
          if (night !== isDusk) { night = isDusk; applyLighting(); }
          let pose;
          if (name === 'hero' || name === 'dusk') pose = poseFor('outside', {dir: new THREE.Vector3(-.62, .26, 1), margin: 1.06});
          else if (name === 'front') pose = poseFor('outside', {dir: new THREE.Vector3(0, .12, 1), margin: 1.08});
          else if (name === 'back') pose = poseFor('outside', {dir: new THREE.Vector3(0, .14, -1), margin: 1.08, box: sideBox()});
          else if (name === 'left') pose = poseFor('outside', {dir: new THREE.Vector3(-1, .14, 0), margin: 1.08, box: sideBox()});
          else if (name === 'right') pose = poseFor('outside', {dir: new THREE.Vector3(1, .14, 0), margin: 1.08, box: sideBox()});
          else if (name === 'inside') pose = poseFor('inside');
          else if (name === 'inside2') {
            const w = state.width, d = state.depth, iw = w - 2 * WALL, z0 = -d / 2 + WALL, z1 = d / 2 - WALL, FLOOR = BUILD.base;
            const divided = state.layout === 'divided', across = divided && state.width < 5;
            const back = across ? z0 + Math.max(1, Math.min(1.8, (z1 - z0) * .4)) + .5 : z0 + .4;
            const pos = new THREE.Vector3(divided && !across ? -iw / 2 + .45 : iw / 2 - .4, FLOOR + 1.45, Math.min(back, z1 - .3));
            pose = {view: 'inside', fov: 72, position: pos, target: new THREE.Vector3(divided && !across ? iw / 4 : -iw / 4, FLOOR + 1.0, z1)};
          } else pose = poseFor('plan');
          void ext;
          view = pose.view;
          applyViewVisibility();
          cam.fov = pose.fov; cam.aspect = width / height; cam.updateProjectionMatrix();
          cam.position.copy(pose.position); cam.lookAt(pose.target);
          hedgeFor(cam);
          renderer.render(scene, cam);
          out[name] = renderer.domElement.toDataURL('image/jpeg', .9);
        }
        size = prevSize;
      } catch { /* The PDF falls back to drawings for any missing view. */ }
      finally {
        if (night !== saved.night) { night = saved.night; applyLighting(); }
        view = saved.view; applyViewVisibility();
        highlight.visible = hiVisible;
        renderer.setPixelRatio(saved.ratio);
        renderer.setSize(saved.size.x, saved.size.y, false);
        if (!lost) renderer.render(scene, camera);
      }
      return out;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      ro.disconnect(); controls.dispose();
      if (room) { disposeObject(room.group); room.materials.forEach(m => m.dispose()); }
      if (groundExtras) disposeObject(groundExtras);
      highlightGeo?.dispose(); lineMat?.dispose();
      tex.dispose(); envMap?.dispose();
      renderer.dispose();
      if (!lost) renderer.forceContextLoss();
      renderer.domElement.remove(); overlay.remove();
    },
    quality: () => ({tier, ratio, lost, broken, ...tex.stats(), webgl: svg ? 0 : renderer.capabilities.isWebGL2 === false ? 1 : 2, svg: svg ? renderer.info : undefined}),
    diagnostics() {
      const d = {tier, gpu: api.gpu(), ratio, frames, verified, broken, shaderErrors: shaderErrors.slice(0, 3), glErrors: glErrors.slice(0, 5), samples: samples.slice(0, 3), lastError, textures: tex.stats()};
      if (!svg) {
        try {
          const gl = renderer.getContext(), a = gl.getContextAttributes() || {};
          d.webgl = renderer.capabilities.isWebGL2 === false ? 1 : 2;
          d.context = {antialias: a.antialias, alpha: a.alpha, lost: gl.isContextLost()};
          d.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          d.extensions = ['EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'KHR_parallel_shader_compile', 'OES_texture_float_linear'].filter(e => gl.getExtension(e));
          d.buffer = renderer.getDrawingBufferSize(new THREE.Vector2()).toArray();
        } catch (err) { d.contextError = String(err); }
      } else d.svg = renderer.info;
      return d;
    },
    gpu() {
      if (svg) return 'none (SVG)';
      try {
        const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
        return String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
      } catch { return 'unknown'; }
    },
    // QA only: just the classes the z-fighting and option checks need.
    _debug: () => ({scene, camera, controls, renderer, room, view, state, highlight, pulse, anim, frames, frame, lastError, lineOpacity: lineMat?.opacity ?? 0, THREE: {Raycaster: THREE.Raycaster, Vector3: THREE.Vector3, DoubleSide: THREE.DoubleSide}})
  };
  return api;
}
