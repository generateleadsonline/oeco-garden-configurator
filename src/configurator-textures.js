// Procedural material textures, drawn on canvases at runtime: no image downloads, no third-party
// assets. Each surface gets a colour map and a normal map derived from a height map, so board
// gaps, shadow lines and grain catch the light. Geometry UVs are in metres; `size` is the real
// width and height one tile covers, so boards are drawn at their true scale.
import * as THREE from 'three';

const PX = 1024;

function seeded(seed) {
  let s = seed >>> 0 || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function hashSeed(text) {
  let h = 2166136261;
  for (const c of String(text)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}
function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}
const clamp = (v, a = 0, b = 255) => Math.max(a, Math.min(b, v));
function rgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function shade([r, g, b], f, warm = 0) {
  return `rgb(${clamp(r * f + warm)},${clamp(g * f)},${clamp(b * f - warm)})`;
}

/** Sobel normal map from a greyscale height canvas (white is high). Tiles seamlessly. */
function normalFrom(height, strength) {
  const w = height.width, h = height.height;
  const src = height.getContext('2d').getImageData(0, 0, w, h).data;
  const out = canvas(w, h), ctx = out.getContext('2d');
  const img = ctx.createImageData(w, h), d = img.data;
  const at = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1));
      const dy = (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1));
      let nx = -dx * strength, ny = dy * strength, nz = 1;
      const len = Math.hypot(nx, ny, nz);
      const i = (y * w + x) * 4;
      d[i] = (nx / len * .5 + .5) * 255; d[i + 1] = (ny / len * .5 + .5) * 255; d[i + 2] = (nz / len * .5 + .5) * 255; d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

/** Fine speckle in place: breaks up flat colour the way real surfaces do. */
function speckle(c, amount, seed) {
  const ctx = c.getContext('2d'), img = ctx.getImageData(0, 0, c.width, c.height), d = img.data, rand = seeded(seed);
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - .5) * amount;
    d[i] = clamp(d[i] + n); d[i + 1] = clamp(d[i + 1] + n); d[i + 2] = clamp(d[i + 2] + n);
  }
  ctx.putImageData(img, 0, 0);
}

/** Grain along a vertical board between x0 and x1, wrapping top to bottom. */
function grain(ctx, x0, x1, H, rand, base, o) {
  const width = x1 - x0;
  for (let i = 0; i < o.lines; i++) {
    const xs = x0 + rand() * width;
    const dark = rand() < o.darkShare;
    const f = dark ? 1 - o.contrast * (.4 + rand() * .6) : 1 + o.contrast * .5 * rand();
    ctx.strokeStyle = shade(base, f, o.warm);
    ctx.globalAlpha = .12 + rand() * .3;
    ctx.lineWidth = .6 + rand() * (dark ? 2.6 : 1.6);
    const k1 = 1 + Math.floor(rand() * 2), k2 = 2 + Math.floor(rand() * 4), a1 = rand() * o.wave, a2 = rand() * o.wave * .35;
    const p1 = rand() * 6.283, p2 = rand() * 6.283;
    ctx.beginPath();
    for (let y = 0; y <= H; y += 8) {
      const x = xs + a1 * Math.sin(6.283 * k1 * y / H + p1) + a2 * Math.sin(6.283 * k2 * y / H + p2);
      if (y === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function knot(ctx, hctx, x, y, H, rand, base, size) {
  for (const yy of [y, y - H, y + H]) {
    const rx = size * (.6 + rand() * .4), ry = size * (1.4 + rand() * .8);
    const g = ctx.createRadialGradient(x, yy, 0, x, yy, rx * 1.6);
    g.addColorStop(0, shade(base, .42)); g.addColorStop(.45, shade(base, .62)); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(x, yy, rx * 1.6, ry * 1.6, 0, 0, 6.283); ctx.fill();
    ctx.strokeStyle = shade(base, .7); ctx.globalAlpha = .4; ctx.lineWidth = 1;
    for (let r = 1; r < 4; r++) { ctx.beginPath(); ctx.ellipse(x, yy, rx * (1 + r * .5), ry * (1 + r * .6), 0, 0, 6.283); ctx.stroke(); }
    ctx.globalAlpha = 1;
    if (hctx) { hctx.fillStyle = 'rgba(0,0,0,.18)'; hctx.beginPath(); hctx.ellipse(x, yy, rx, ry, 0, 0, 6.283); hctx.fill(); }
  }
}

// Board systems, in metres, measured on Oeco's product photos against the 1.2m wide window
// (research/photos-2026-10-13): Western Red Cedar about 125mm with strong board-to-board colour
// variation, Thermowood about 130mm in a consistent brown, both composites about 145mm with a
// V-groove (Smoothgrain plain, ProClad Woodgrain embossed). Fibre cement is a 180mm lap
// weatherboard (horizontal only); the skirt is the narrow vertical PVCu or composite board Oeco
// uses round the base and the decking.
const BOARDS = {
  cedar: {board: .125, count: 8, groove: .004, bevel: .003, lines: 30, contrast: .3, darkShare: .6, wave: 2.2, warm: 6, knots: .14, jitter: .16, roughness: .74, normal: 3, vgroove: true, hues: [[1.05, .9, .86], [1, .97, .94], [.86, .83, .8], [1.03, .94, .88], [.93, .88, .85]]},
  thermowood: {board: .13, count: 8, groove: .004, bevel: .003, lines: 26, contrast: .34, darkShare: .7, wave: 2.6, warm: 8, knots: .4, jitter: .1, roughness: .78, normal: 3, vgroove: true},
  smooth: {board: .145, count: 7, groove: .005, bevel: .003, lines: 0, contrast: 0, darkShare: .5, wave: 0, warm: 0, knots: 0, jitter: .02, roughness: .6, normal: 3.2, vgroove: true, emboss: .07},
  woodgrain: {board: .145, count: 7, groove: .005, bevel: .003, lines: 34, contrast: .12, darkShare: .55, wave: 2, warm: 2, knots: 0, jitter: .03, roughness: .62, normal: 3.4, vgroove: true, emboss: .2},
  fibre: {board: .18, count: 6, groove: .004, bevel: .003, lines: 22, contrast: .05, darkShare: .5, wave: 2, warm: 0, knots: 0, jitter: .012, roughness: .76, normal: 3.6, lap: true, emboss: .16},
  skirt: {board: .1, count: 10, groove: .006, bevel: .003, lines: 0, contrast: 0, darkShare: .5, wave: 0, warm: 0, knots: 0, jitter: .025, roughness: .55, normal: 3.4, vgroove: true, emboss: .05}
};

/**
 * `scale` below 1 allocates every canvas at a fraction of its designed size (phones use .5, a
 * quarter of the memory) while the drawing code keeps working in designed pixels.
 */
export function createTextures(renderer, {scale = 1, flat: flatOnly = false} = {}) {
  const cache = new Map();
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const k = scale;
  let gen = 0, failures = 0;
  // Shadows the unscaled helper: a canvas at the device's budget, drawn in designed pixels.
  const canvas = (w, h = w) => {
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
    const ctx = c.getContext('2d');
    // iOS Safari returns null once a site's canvases pass its memory budget.
    if (!ctx) throw new Error('2D canvas unavailable');
    if (k !== 1) ctx.scale(k, k);
    return c;
  };
  // Zero-size canvases give their memory back at once; waiting for garbage collection is what
  // pushes iPhones over the budget.
  const free = c => { c.width = c.height = 0; };
  // Fewer pixels make each height step steeper, so the strength scales with them.
  const normal = (h, strength) => { const n = normalFrom(h, strength * k); free(h); return n; };
  const make = (c, colour = true, repeat = true) => {
    const t = new THREE.CanvasTexture(c);
    if (colour) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = anisotropy;
    if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
    // Once the GPU holds its copy the canvas is only memory. A lost context rebuilds every
    // texture from scratch, so nothing needs it again.
    t.onUpdate = () => { t.onUpdate = null; free(c); };
    return t;
  };
  // A surface that could not be drawn renders in its flat colour rather than stopping the 3D.
  const flat = hex => {
    if (!hex) return {map: null, normalMap: null, roughness: .8, size: [1, 1]};
    const t = new THREE.DataTexture(new Uint8Array([...rgb(hex), 255]), 1, 1);
    t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true;
    // The SVG renderer reads this to colour the material, as it draws no textures.
    t.userData.hex = hex;
    return {map: t, normalMap: null, roughness: .8, size: [1, 1]};
  };
  const memo = (key, hex, build) => {
    let entry = cache.get(key);
    if (!entry) {
      let value;
      if (flatOnly) value = flat(hex);
      else try { value = build(); } catch (err) { failures++; console.warn('Texture drawn flat:', key, err); value = flat(hex); }
      entry = {value, used: gen};
      cache.set(key, entry);
    }
    entry.used = gen;
    return entry.value;
  };
  const release = pair => { for (const t of [pair.map, pair.normalMap]) t?.dispose(); };
  // UVs are metres, so a tile covering `size` metres repeats every `size`.
  const set = (pair, sx, sy) => {
    for (const t of [pair.map, pair.normalMap].filter(Boolean)) t.repeat.set(1 / sx, 1 / sy);
    return {...pair, size: [sx, sy]};
  };

  /** Cladding: vertical or horizontal boards of the range's system in the chosen colour. */
  function cladding(kind, hex, horizontal) {
    if (kind === 'stone') return stone(hex);
    return memo(`clad:${kind}:${hex}:${horizontal}`, hex, () => {
      const o = BOARDS[kind];
      const widths = o.widths || Array(o.count).fill(o.board + (o.gap || 0));
      const tile = widths.reduce((a, b) => a + b, 0);
      const S = PX, H = PX, px = S / tile;
      const c = canvas(S), h = canvas(S);
      const ctx = c.getContext('2d'), hctx = h.getContext('2d');
      if (horizontal) for (const k of [ctx, hctx]) { k.translate(S, 0); k.rotate(Math.PI / 2); }
      const base = rgb(hex), rand = seeded(hashSeed(kind + hex));
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, S, H);
      let edge = 0;
      for (let b = 0; b < widths.length; b++) {
        const x0 = edge * px, x1 = x0 + (widths[b] - (o.gap || 0)) * px;
        edge += widths[b];
        const f = 1 + (rand() - .5) * 2 * o.jitter;
        // Western Red Cedar: each board its own red, pink, honey or brown (Oeco's photos).
        const hue = o.hues ? o.hues[Math.floor(rand() * o.hues.length)] : [1, 1, 1];
        const boardBase = base.map((v, i) => v * f * hue[i]);
        ctx.fillStyle = shade(boardBase, 1, o.warm * (rand() - .5));
        ctx.fillRect(x0, 0, x1 - x0, H);
        grain(ctx, x0, x1, H, rand, boardBase, o);
        if (o.knots && rand() < o.knots) knot(ctx, hctx, x0 + (x1 - x0) * (.25 + rand() * .5), rand() * H, H, rand, boardBase, 4 + rand() * 6);
        // Height: flat face, bevelled shoulders.
        const bevel = Math.max(1, o.bevel * px);
        const g = hctx.createLinearGradient(x0, 0, x1, 0);
        g.addColorStop(0, '#5a5a5a'); g.addColorStop(bevel / (x1 - x0), '#f0f0f0');
        g.addColorStop(1 - bevel / (x1 - x0), '#f0f0f0'); g.addColorStop(1, '#5a5a5a');
        hctx.fillStyle = g; hctx.fillRect(x0, 0, x1 - x0, H);
        if (o.shiplap || o.lap) {
          // The lap: each board sits proud of the next, casting a shadow line; a weatherboard
          // tapers across its whole face, so its shadow is deeper.
          const lap = hctx.createLinearGradient(x0, 0, x1, 0);
          lap.addColorStop(0, o.lap ? 'rgba(0,0,0,.75)' : 'rgba(0,0,0,.3)'); lap.addColorStop(o.lap ? 1 : .5, 'rgba(0,0,0,0)');
          hctx.fillStyle = lap; hctx.fillRect(x0, 0, x1 - x0, H);
          ctx.fillStyle = o.lap ? 'rgba(0,0,0,.16)' : 'rgba(0,0,0,.07)'; ctx.fillRect(x0, 0, (x1 - x0) * (o.lap ? .12 : .2), H);
          if (o.lap) { ctx.fillStyle = 'rgba(255,255,255,.06)'; ctx.fillRect(x1 - (x1 - x0) * .25, 0, (x1 - x0) * .25, H); }
        }
        if (o.vgroove) { ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(x0, 0, 2, H); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(x1 - 3, 0, 2, H); }
        if (o.alternate && b % 2) { ctx.fillStyle = 'rgba(0,0,0,.14)'; ctx.fillRect(x0, 0, x1 - x0, H); hctx.fillStyle = 'rgba(0,0,0,.35)'; hctx.fillRect(x0, 0, x1 - x0, H); }
        if (o.weathered) {
          // Thermowood silvers in streaks along the grain, as in SMART's Key Studio photos.
          for (let k = 0; k < 6; k++) {
            ctx.fillStyle = `rgba(${rand() < .5 ? '200,200,205' : '90,70,50'},${.05 + rand() * .07})`;
            ctx.fillRect(x0 + rand() * (x1 - x0) * .8, 0, (x1 - x0) * (.1 + rand() * .3), H);
          }
        }
        // Joint: a dark groove, or the recessed batten of a shadow-gap system.
        const groove = Math.max(1.5, (o.groove || 0) * px);
        if (o.gap) {
          const gx = x1, gw = o.gap * px;
          ctx.fillStyle = shade(base, .38); ctx.fillRect(gx, 0, gw, H);
          ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(gx, 0, gw * .3, H);
          hctx.fillStyle = '#101010'; hctx.fillRect(gx, 0, gw, H);
        } else {
          ctx.fillStyle = shade(base, .45); ctx.fillRect(x1 - groove, 0, groove, H);
          hctx.fillStyle = '#000'; hctx.fillRect(x1 - groove, 0, groove, H);
        }
      }
      // Fibre cement and composite carry an embossed grain; timber carries its real grain.
      if (o.emboss || o.brush) {
        // Composite carries an embossed or brushed grain in its surface.
        hctx.globalAlpha = o.emboss || .16;
        for (let i = 0; i < (o.brush || 520); i++) {
          const x = rand() * S, y = rand() * H, len = 40 + rand() * 160;
          hctx.strokeStyle = rand() < .5 ? '#000' : '#fff'; hctx.lineWidth = .8 + rand();
          hctx.beginPath(); hctx.moveTo(x, y); hctx.lineTo(x + (rand() - .5) * 3, y + len); hctx.stroke();
        }
        hctx.globalAlpha = 1;
      }
      speckle(c, kind === 'smooth' || kind === 'skirt' ? 5 : 10, hashSeed(hex));
      return set({map: make(c), normalMap: make(normal(h, o.normal), false), roughness: o.roughness}, tile, tile);
    });
  }

  /**
   * Split-face stacked stone: courses of thin slate strips of random length, each face rough,
   * deep joints between them (Oeco: "irregular sections vary in depth up to 50mm").
   */
  function stone(hex) {
    return memo(`stone:${hex}`, hex, () => {
      const S = 1024, tile = 1.2, px = S / tile, rand = seeded(hashSeed('stone' + hex)), base = rgb(hex);
      const c = canvas(S), h = canvas(S), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      ctx.fillStyle = shade(base, .35); ctx.fillRect(0, 0, S, S);
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, S, S);
      let y = 0;
      while (y < S) {
        const ch = (.045 + rand() * .05) * px;
        let x = -rand() * 120;
        while (x < S) {
          const len = (.15 + rand() * .35) * px, f = .7 + rand() * .55;
          const draw = dx => {
            ctx.fillStyle = shade(base, f, (rand() - .5) * 18); ctx.fillRect(x + dx + 2, y + 2, len - 4, ch - 4);
            for (let k = 0; k < 14; k++) { ctx.fillStyle = `rgba(${rand() < .5 ? '0,0,0' : '255,255,255'},${.05 + rand() * .08})`; ctx.fillRect(x + dx + 2 + rand() * (len - 8), y + 2 + rand() * (ch - 6), 3 + rand() * 18, 1 + rand() * 3); }
            const g = hctx.createLinearGradient(0, y, 0, y + ch);
            const top = 150 + rand() * 90 | 0;
            g.addColorStop(0, `rgb(${top},${top},${top})`); g.addColorStop(1, `rgb(${top - 60},${top - 60},${top - 60})`);
            hctx.fillStyle = g; hctx.fillRect(x + dx + 2, y + 2, len - 4, ch - 4);
          };
          draw(0); if (x + len > S) draw(-S);
          x += len;
        }
        y += ch;
      }
      speckle(c, 14, hashSeed(hex)); speckle(h, 50, 3);
      return set({map: make(c), normalMap: make(normal(h, 3.4), false), roughness: .92}, tile, tile);
    });
  }

  /** Narrow vertical boards for the base trim and the decking's fascia. */
  const skirt = hex => cladding('skirt', hex, false);

  /** Box-profile steel sheet: a raised trapezoidal rib every 200mm, the rest flat pans. */
  function metal(hex, horizontal) {
    return memo(`metal:${hex}:${horizontal}`, hex, () => {
      const pitch = .2, ribs = 5, tile = pitch * ribs, S = 512, px = S / tile;
      const c = canvas(S), h = canvas(S), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      if (horizontal) for (const k of [ctx, hctx]) { k.translate(S, 0); k.rotate(Math.PI / 2); }
      const base = rgb(hex);
      ctx.fillStyle = shade(base, 1); ctx.fillRect(0, 0, S, S);
      hctx.fillStyle = '#303030'; hctx.fillRect(0, 0, S, S);
      for (let i = 0; i < ribs; i++) {
        const x = i * pitch * px, top = .02 * px, slope = .012 * px, w = .044 * px;
        // Rib: two sloped webs and a flat crown, lit from the left.
        ctx.fillStyle = shade(base, 1.18); ctx.fillRect(x, 0, slope, S);
        ctx.fillStyle = shade(base, 1.06); ctx.fillRect(x + slope, 0, top, S);
        ctx.fillStyle = shade(base, .72); ctx.fillRect(x + slope + top, 0, slope, S);
        const g = hctx.createLinearGradient(x, 0, x + w, 0);
        g.addColorStop(0, '#303030'); g.addColorStop(.3, '#f0f0f0'); g.addColorStop(.7, '#f0f0f0'); g.addColorStop(1, '#303030');
        hctx.fillStyle = g; hctx.fillRect(x, 0, w, S);
        // Minor stiffening ribs in the pans.
        for (const f of [.45, .7]) { ctx.fillStyle = shade(base, .9); ctx.fillRect(x + f * pitch * px, 0, 2, S); hctx.fillStyle = '#505050'; hctx.fillRect(x + f * pitch * px, 0, 2, S); }
      }
      speckle(c, 5, hashSeed('metal' + hex));
      return set({map: make(c), normalMap: make(normal(h, 2.6), false), roughness: .42}, tile, tile);
    });
  }

  /** Floors: staggered planks (laminate, vinyl) or a soft carpet. */
  function floor(kind, hex) {
    return memo(`floor:${kind}:${hex}`, hex, () => {
      const base = rgb(hex), rand = seeded(hashSeed(hex));
      const c = canvas(PX), h = canvas(PX), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      if (kind === 'carpet' || kind === 'rubber') {
        ctx.fillStyle = shade(base, 1); ctx.fillRect(0, 0, PX, PX);
        for (let i = 0; i < 26000; i++) { ctx.fillStyle = shade(base, .82 + rand() * .36); ctx.fillRect(rand() * PX, rand() * PX, 1.4, 1.4); }
        hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, PX, PX);
        speckle(h, 60, 9);
        return set({map: make(c), normalMap: make(normal(h, 1.2), false), roughness: 1}, .5, .5);
      }
      const rows = 6, plankW = .19, plankL = 1.28, tileX = plankL, tileY = plankW * rows, sx = PX / tileX, sy = PX / tileY;
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, PX, PX);
      for (let r = 0; r < rows; r++) {
        const offset = (r * .37 % 1) * plankL;
        for (let k = -1; k < 2; k++) {
          const x0 = (offset + k * plankL) * sx, y0 = r * plankW * sy, w = plankL * sx, hgt = plankW * sy;
          const f = 1 + (rand() - .5) * .16;
          ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, w, hgt); ctx.clip();
          ctx.fillStyle = shade(base, f); ctx.fillRect(x0, y0, w, hgt);
          ctx.translate(x0, y0 + hgt); ctx.rotate(-Math.PI / 2);
          grain(ctx, 0, hgt, w, rand, base.map(v => v * f), {lines: 22, contrast: .28, darkShare: .7, wave: 4, warm: 3});
          ctx.restore();
          hctx.fillStyle = '#e8e8e8'; hctx.fillRect(x0 + 2, y0 + 2, w - 4, hgt - 4);
          ctx.fillStyle = shade(base, .55); ctx.fillRect(x0, y0, w, 1.2); ctx.fillRect(x0, y0, 1.2, hgt);
        }
      }
      speckle(c, 8, 5);
      return set({map: make(c), normalMap: make(normal(h, 1.6), false), roughness: kind === 'plank' ? .5 : .55}, tileX, tileY);
    });
  }

  /** Hardwood decking: grooved boards with fine gaps and staggered butt joints. */
  function deck(hex) {
    return memo(`deck:${hex}`, hex, () => {
      const base = rgb(hex), rand = seeded(hashSeed('deck' + hex));
      const board = .14, gap = .006, count = 6, tile = (board + gap) * count, len = 1.8;
      const c = canvas(PX), h = canvas(PX), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      const sx = PX / tile, sy = PX / len;
      ctx.fillStyle = shade(base, .25); ctx.fillRect(0, 0, PX, PX);
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, PX, PX);
      for (let b = 0; b < count; b++) {
        const x0 = b * (board + gap) * sx, x1 = x0 + board * sx, f = 1 + (rand() - .5) * .22;
        ctx.fillStyle = shade(base, f); ctx.fillRect(x0, 0, x1 - x0, PX);
        grain(ctx, x0, x1, PX, rand, base.map(v => v * f), {lines: 24, contrast: .3, darkShare: .7, wave: 3, warm: 4});
        hctx.fillStyle = '#d0d0d0'; hctx.fillRect(x0, 0, x1 - x0, PX);
        for (let g = 1; g < 7; g++) { hctx.fillStyle = '#9a9a9a'; hctx.fillRect(x0 + (x1 - x0) * g / 7 - 1, 0, 2, PX); }
        const joint = ((b * .43) % 1) * PX;
        ctx.fillStyle = shade(base, .3); ctx.fillRect(x0, joint, x1 - x0, 3);
        hctx.fillStyle = '#000'; hctx.fillRect(x0, joint, x1 - x0, 3);
      }
      speckle(c, 10, 77);
      return set({map: make(c), normalMap: make(normal(h, 2.5), false), roughness: .74}, tile, len);
    });
  }

  /** EPDM roof membrane, bitumen shingles or a smooth painted ceiling. */
  function roof(kind) {
    return memo(`roof:${kind}`, '#2d2f30', () => {
      const rand = seeded(hashSeed(kind));
      const c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      if (kind === 'shingles') {
        ctx.fillStyle = '#232527'; ctx.fillRect(0, 0, 512, 512);
        hctx.fillStyle = '#000'; hctx.fillRect(0, 0, 512, 512);
        const rows = 6, tabs = 3, rh = 512 / rows, tw = 512 / tabs;
        for (let r = 0; r < rows; r++) {
          const off = (r % 2) * tw / 2;
          for (let t = -1; t <= tabs; t++) {
            const x = off + t * tw, f = .85 + rand() * .3;
            ctx.fillStyle = `rgb(${38 * f},${40 * f},${43 * f})`; ctx.fillRect(x + 2, r * rh, tw - 4, rh - 3);
            const g = hctx.createLinearGradient(0, r * rh, 0, r * rh + rh);
            g.addColorStop(0, '#606060'); g.addColorStop(1, '#f0f0f0');
            hctx.fillStyle = g; hctx.fillRect(x + 2, r * rh, tw - 4, rh - 3);
          }
        }
        speckle(c, 26, 41);
        return set({map: make(c), normalMap: make(normal(h, 3), false), roughness: .92}, 1, .84);
      }
      if (kind === 'panel') {
        // Oeco's interlocking insulated roof panels: an anthracite polyester-coated skin, a
        // standing joint every 1m running front to back.
        ctx.fillStyle = '#3b4044'; ctx.fillRect(0, 0, 512, 512);
        hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 512, 512);
        for (const x of [0, 256]) { ctx.fillStyle = '#2a2e31'; ctx.fillRect(x, 0, 6, 512); ctx.fillStyle = '#50565a'; ctx.fillRect(x + 6, 0, 3, 512); hctx.fillStyle = '#f0f0f0'; hctx.fillRect(x, 0, 9, 512); }
        speckle(c, 8, 41); speckle(h, 14, 5);
        return set({map: make(c), normalMap: make(normal(h, 2), false), roughness: .55}, 2, 2);
      }
      ctx.fillStyle = '#2d2f30'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 6000; i++) { ctx.fillStyle = `rgba(${rand() < .5 ? '0,0,0' : '90,92,94'},.18)`; ctx.fillRect(rand() * 512, rand() * 512, 2, 2); }
      hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 512, 512); speckle(h, 30, 3);
      return set({map: make(c), normalMap: make(normal(h, 1), false), roughness: .88}, 1.2, 1.2);
    });
  }

  /** Interior walls: white panels with cover beading at every 1.22m panel joint. */
  function interior(spec) {
    return memo(`int:${spec.panels}:${spec.wall}:${spec.beading}`, spec.wall, () => {
      const c = canvas(512, 1024), h = canvas(512, 1024), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      const W = 1.22, Hm = 2.44, sx = 512 / W, sy = 1024 / Hm;
      ctx.fillStyle = spec.wall; ctx.fillRect(0, 0, 512, 1024);
      hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 512, 1024);
      const strip = (x, y, w, hh, colour) => {
        ctx.fillStyle = colour; ctx.fillRect(x, y, w, hh);
        ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.fillRect(x + w, y, 2, hh);
        hctx.fillStyle = '#f4f4f4'; hctx.fillRect(x, y, w, hh);
      };
      if (spec.panels === 'plaster') {
        // Plasterboarded and skimmed: a flat, faintly mottled finish, no joints.
        const rand = seeded(13);
        for (let i = 0; i < 4000; i++) { ctx.fillStyle = `rgba(${rand() < .5 ? '0,0,0' : '255,255,255'},.025)`; ctx.fillRect(rand() * 512, rand() * 1024, 6 + rand() * 20, 4 + rand() * 14); }
        speckle(h, 6, 9);
      }
      if (spec.panels === 'beaded') strip(0, 0, .045 * sx, 1024, spec.beading);
      if (spec.panels === 'slatted') {
        // Acoustic slat panels: 27mm slats on a dark felt backing, 20 to a 1.22m sheet.
        const n = 20, pw = 512 / n;
        ctx.fillStyle = '#26282a'; ctx.fillRect(0, 0, 512, 1024);
        const base = rgb(spec.wall), rand = seeded(hashSeed(spec.wall));
        for (let i = 0; i < n; i++) {
          const f = 1 + (rand() - .5) * .12;
          ctx.fillStyle = shade(base, f); ctx.fillRect(i * pw + 2, 0, pw - 6, 1024);
          grain(ctx, i * pw + 2, i * pw + pw - 4, 1024, rand, base.map(v => v * f), {lines: 6, contrast: .2, darkShare: .6, wave: 2, warm: 4});
          hctx.fillStyle = '#e8e8e8'; hctx.fillRect(i * pw + 2, 0, pw - 6, 1024);
        }
        hctx.fillStyle = '#202020'; for (let i = 0; i < n; i++) hctx.fillRect(i * pw + pw - 4, 0, 6, 1024);
      }
      if (spec.panels === 'plywood') {
        const base = rgb(spec.wall), rand = seeded(5);
        grain(ctx, 0, 512, 1024, rand, base, {lines: 70, contrast: .18, darkShare: .5, wave: 14, warm: 6});
        ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 0, 2, 1024); ctx.fillRect(0, 0, 512, 2);
        hctx.fillStyle = '#000'; hctx.fillRect(0, 0, 2, 1024); hctx.fillRect(0, 0, 512, 2);
      }
      if (spec.panels === 'wrapped') {
        ctx.fillStyle = 'rgba(0,0,0,.07)'; ctx.fillRect(0, 0, 3, 1024);
        hctx.fillStyle = '#202020'; hctx.fillRect(0, 0, 3, 1024);
      }
      if (spec.panels === 'boards') {
        // Atelia's finished lining: insulated walls faced in white boards, 1.22m sheets with fine
        // joints (the planner's cement-board tile, 1220mm).
        ctx.fillStyle = 'rgba(0,0,0,.09)'; ctx.fillRect(0, 0, 3, 1024); ctx.fillRect(0, 0, 512, 3);
        hctx.fillStyle = '#000'; hctx.fillRect(0, 0, 3, 1024); hctx.fillRect(0, 0, 512, 3);
      }
      if (spec.panels === 'membrane') {
        // A vapour barrier stapled over the studs: woven grey membrane, taped joints every 1.2m.
        const rand = seeded(31);
        for (let i = 0; i < 9000; i++) { ctx.fillStyle = rand() < .5 ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.07)'; ctx.fillRect(rand() * 512, rand() * 1024, 2, 1); }
        ctx.fillStyle = '#c9c9c4'; ctx.fillRect(0, 0, 512, .05 * sy); ctx.fillRect(0, 1024 - .05 * sy, 512, .05 * sy);
        for (const x of [0, 256]) { ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(x, 0, 2, 1024); hctx.fillStyle = '#5a5a5a'; hctx.fillRect(x, 0, 2, 1024); }
        for (let y = 20; y < 1024; y += 70) for (const x of [6, 250, 262, 506]) { ctx.fillStyle = '#8e9090'; ctx.fillRect(x, y, 4, 2); }
        speckle(h, 18, 7);
      }
      speckle(c, 3, 11);
      return set({map: make(c), normalMap: make(normal(h, 2), false), roughness: .82}, W, Hm);
    });
  }

  /** Lawn, with mown stripes and blade speckle. */
  function lawn() {
    return memo('lawn', '#6a8649', () => {
      const rand = seeded(17), c = canvas(PX), ctx = c.getContext('2d');
      ctx.fillStyle = '#6a8649'; ctx.fillRect(0, 0, PX, PX);
      for (let s = 0; s < 2; s++) { ctx.fillStyle = s % 2 ? 'rgba(255,255,230,.025)' : 'rgba(20,40,0,.025)'; ctx.fillRect(0, s * PX / 2, PX, PX / 2); }
      for (let i = 0; i < 90000; i++) {
        const g = rand();
        ctx.fillStyle = g < .45 ? 'rgba(46,72,30,.55)' : g < .85 ? 'rgba(125,152,86,.5)' : 'rgba(170,180,110,.45)';
        const x = rand() * PX, y = rand() * PX;
        ctx.fillRect(x, y, 1.3, 2.6 + rand() * 3);
      }
      const h = canvas(512); h.getContext('2d').fillStyle = '#808080'; h.getContext('2d').fillRect(0, 0, 512, 512); speckle(h, 90, 21);
      return set({map: make(c), normalMap: make(normal(h, 1.4), false), roughness: .95}, 3, 3);
    });
  }

  /** Riven paving slabs for the path and patio. */
  function paving() {
    return memo('paving', '#c8c4ba', () => {
      const rand = seeded(5), c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      ctx.fillStyle = "#b9ab90"; ctx.fillRect(0, 0, 512, 512); hctx.fillStyle = "#000"; hctx.fillRect(0, 0, 512, 512);
      const n = 2, s = 512 / n;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const f = .9 + rand() * .18;
        ctx.fillStyle = `rgb(${224 * f},${210 * f},${184 * f})`; ctx.fillRect(i * s + 3, j * s + 3, s - 6, s - 6);
        hctx.fillStyle = '#d8d8d8'; hctx.fillRect(i * s + 3, j * s + 3, s - 6, s - 6);
      }
      speckle(c, 22, 8); speckle(h, 40, 9);
      return set({map: make(c), normalMap: make(normal(h, 2), false), roughness: .9}, 1.2, 1.2);
    });
  }

  function gravel() {
    return memo('gravel', '#a49d90', () => {
      const rand = seeded(23), c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      ctx.fillStyle = '#a49d90'; ctx.fillRect(0, 0, 512, 512); hctx.fillStyle = '#202020'; hctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 9000; i++) {
        const x = rand() * 512, y = rand() * 512, r = 1.5 + rand() * 3.5, f = .7 + rand() * .5;
        ctx.fillStyle = `rgb(${190 * f},${182 * f},${168 * f})`; ctx.beginPath(); ctx.ellipse(x, y, r, r * .8, rand() * 3, 0, 6.283); ctx.fill();
        hctx.fillStyle = `rgb(${200 * f},${200 * f},${200 * f})`; hctx.beginPath(); hctx.ellipse(x, y, r, r * .8, 0, 0, 6.283); hctx.fill();
      }
      return set({map: make(c), normalMap: make(normal(h, 2.2), false), roughness: 1}, .8, .8);
    });
  }

  /** Painted steel ground screw collar and soffit: a gentle orange-peel finish. */
  function powder() {
    return memo('powder', null, () => {
      const h = canvas(256); h.getContext('2d').fillStyle = '#808080'; h.getContext('2d').fillRect(0, 0, 256, 256); speckle(h, 26, 4);
      const t = make(normal(h, .8), false);
      t.repeat.set(4, 4);
      return {normalMap: t};
    });
  }

  return {
    cladding, skirt, stone, metal, floor, deck, roof, interior, lawn, paving, gravel, powder,
    /** Starts a rebuild: textures the new room does not ask for become free to prune. */
    begin() { gen++; },
    /**
     * Frees the least recently used textures beyond `limit`. Never one the current room uses,
     * and never the lawn, which the garden keeps for the life of the scene.
     */
    prune(limit) {
      const old = [...cache].filter(([key, e]) => e.used < gen && key !== 'lawn').sort((a, b) => a[1].used - b[1].used);
      for (const [key, e] of old) {
        if (cache.size <= limit) break;
        release(e.value); cache.delete(key);
      }
    },
    stats: () => ({textures: cache.size, failures, scale: k}),
    dispose() { for (const e of cache.values()) release(e.value); cache.clear(); }
  };
}
