// "Your Oeco garden room" PDF: renders of the visitor's design (front, all four sides, two views
// inside, the plan and dusk), a dimensioned plan, the full specification, the price worked out
// from Oeco's published figures, and the next steps with a booking link. Adapted from the Atelia,
// Hideaway and SMART PDFs.
import {jsPDF} from 'jspdf';
import qrcode from 'qrcode-generator';
import {normalise, priceFor, priceLabel, money, metres, metres2, specRows, summary, claddingName, styleName, OPENINGS, WALLS, RANGES, USES, outline, outlineArea, internalArea, roofOffsets, layoutWalls, BUILD, DESIGNS} from './configurator-model.js';
import {USPS, CONTACT, OFFER, CATALOGUE_DATE} from './configurator-data.js';
import {PDF_FONTS, PDF_LOGO, PDF_LOGO_SIZE, PDF_LOGO_WHITE, PDF_LOGO_WHITE_SIZE} from './configurator-pdf-assets.js';

// Oeco: ink, olive, bright green, the sale burgundy for the October offer, neutral greys.
const C = {ink: '#202024', ink2: '#303036', olive: '#647a41', green: '#7cbd3c', offer: '#742d32', mist: '#f3f4ef', line: '#e1e3dc', muted: '#5b5b61', paper: '#ffffff', frost: '#c3c3c6', pale: '#dcecca'};
const W = 210, H = 297, M = 16, CW = W - 2 * M;

/**
 * @param input  a design state (or anything normalise() accepts)
 * @param views  {hero, front, back, left, right, inside, inside2, plan, dusk}: JPEG data URLs
 * @param options {contactName, reference, preparedAt, save=true, siteURL, now}
 */
export async function downloadPDF(input, views = {}, options = {}) {
  const state = normalise(input), r = RANGES[state.range], now = options.now ?? Date.now();
  const price = priceFor(state, {now});
  const shots = views && typeof views === 'object' ? views : {};
  const base = options.siteURL || (typeof location !== 'undefined' ? location.origin + '/configurator/' : 'https://oeco-garden-configurator.netlify.app/configurator/');
  const s = summary(state, base, {now}), link = s.designLink, ref = options.reference || 'OECO-DESIGN';
  const booking = link + '&book=1';
  const prepared = new Date(options.preparedAt || now);
  const date = (Number.isFinite(prepared.getTime()) ? prepared : new Date()).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London'});
  const priceDate = new Date(CATALOGUE_DATE).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
  const first = String(options.contactName || '').trim().split(/\s+/)[0].slice(0, 30);
  const pdf = new jsPDF({unit: 'mm', format: 'a4', compress: true, putOnlyUsedFonts: true});
  for (const [key, family, style] of [['regular', 'Manrope', 'normal'], ['bold', 'Manrope', 'bold'], ['heading', 'Cormorant', 'bold']]) { pdf.addFileToVFS(key + '.ttf', PDF_FONTS[key]); pdf.addFont(key + '.ttf', family, style); }
  pdf.setProperties({title: `Your Oeco ${r.name} garden room`, subject: `${r.name} ${s.size}: your design, specification and price`, author: 'Oeco Garden Rooms', creator: 'Oeco garden room designer', keywords: 'Oeco, garden room, design, price'});
  pdf.setLanguage('en-GB');

  const set = (size = 10, bold = false, colour = C.ink, heading = false) => { pdf.setFont(heading ? 'Cormorant' : 'Manrope', heading ? 'bold' : bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(colour); };
  const para = (text, x, y, width, size = 9.5, colour = C.muted, line = 4.5, bold = false) => { set(size, bold, colour); const lines = pdf.splitTextToSize(String(text), width); pdf.text(lines, x, y, {lineHeightFactor: line / (size * .352778)}); return y + lines.length * line; };
  const heading = (text, x, y, size = 26, colour = C.ink, maxWidth = CW) => { set(size, false, colour, true); let fs = size; while (pdf.getTextWidth(String(text)) > maxWidth && fs > 11) { fs -= 1; pdf.setFontSize(fs); } pdf.text(String(text), x, y); };
  const label = (text, x, y, colour = C.muted) => { set(7.4, true, colour); pdf.text(String(text).toUpperCase(), x, y, {charSpace: .5}); };
  const image = (data, x, y, w, h, cover = true) => {
    if (typeof data !== 'string' || !/^data:image\/(png|jpeg);base64,/.test(data)) return false;
    try {
      const info = pdf.getImageProperties(data), fmt = data.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      if (cover) {
        const k = Math.max(w / info.width, h / info.height), iw = info.width * k, ih = info.height * k;
        pdf.saveGraphicsState(); pdf.rect(x, y, w, h, null); pdf.clip(); pdf.discardPath();
        pdf.addImage(data, fmt, x - (iw - w) / 2, y - (ih - h) / 2, iw, ih, undefined, 'FAST');
        pdf.restoreGraphicsState();
      } else {
        const k = Math.min(w / info.width, h / info.height);
        pdf.addImage(data, fmt, x + (w - info.width * k) / 2, y + (h - info.height * k) / 2, info.width * k, info.height * k, undefined, 'FAST');
      }
      return true;
    } catch { return false; }
  };
  const qr = (url, x, y, size, dark = C.ink) => {
    const code = qrcode(0, 'M'); code.addData(url, 'Byte'); code.make();
    const n = code.getModuleCount(), unit = size / (n + 4);
    pdf.setFillColor('#ffffff'); pdf.rect(x, y, size, size, 'F'); pdf.setFillColor(dark);
    for (let row = 0; row < n; row++) for (let col = 0; col < n; col++) if (code.isDark(row, col)) pdf.rect(x + (col + 2) * unit, y + (row + 2) * unit, unit + .02, unit + .02, 'F');
  };
  const button = (text, x, y, w, h, url, fill = C.olive, colour = '#ffffff') => { pdf.setFillColor(fill); pdf.rect(x, y, w, h, 'F'); set(10, true, colour); pdf.text(text, x + w / 2, y + h / 2 + 1.4, {align: 'center'}); pdf.link(x, y, w, h, {url}); };
  const dot = (x, y, colour = C.olive) => { pdf.setFillColor(colour); pdf.circle(x, y, .8, 'F'); };
  const bullets = (items, x, y, width, size = 9) => { for (const item of items) { dot(x + 1, y - 1.1); y = para(item, x + 5, y, width - 5, size, C.ink, 4.1) + 1.6; } return y; };
  const logoAt = (data, size, x, y, w) => image(data, x, y, w, w * size[1] / size[0], false);
  let pageNo = 0;
  const pageLabels = [];
  function frame(title, sub) {
    pageNo++;
    pdf.setFillColor(C.paper); pdf.rect(0, 0, W, H, 'F');
    logoAt(PDF_LOGO, PDF_LOGO_SIZE, M, 8, 30);
    set(8.5, true, C.ink); pdf.text(`${r.name}, ${s.size}`, W - M, 14.5, {align: 'right'});
    set(7.2, false, C.muted); pdf.text(`${ref}  |  ${date}`, W - M, 19.5, {align: 'right'});
    pdf.setDrawColor(C.olive); pdf.setLineWidth(.6); pdf.line(M, 26, W - M, 26);
    heading(title, M, 39, 26);
    if (sub) para(sub, M, 46.5, CW, 9.6, C.muted, 4.5);
    pdf.setFillColor(C.ink); pdf.rect(0, 283, W, 14, 'F');
    set(8.6, true, C.green); pdf.textWithLink('Book a call with Oeco', M, 289.5, {url: booking});
    set(7.2, false, C.frost); pdf.text(`Freephone ${CONTACT.phone}  |  ${CONTACT.email}  |  oecogardenrooms.co.uk`, M, 293.6);
    pageLabels.push(pageNo);
  }
  function framedImage(data, x, y, w, h, caption, fallback) {
    pdf.setFillColor(C.mist); pdf.rect(x, y, w, h, 'F');
    const ok = image(data, x, y, w, h) || (fallback ? fallback(x, y, w, h) : false);
    if (!ok) { set(8.5, false, C.muted); pdf.text('View not available on this device', x + w / 2, y + h / 2, {align: 'center'}); }
    if (caption) label(caption, x, y + h + 4.4);
    return ok;
  }

  // A dimensioned plan drawn as vectors: walls, doors and windows, the roof edge, the porch and
  // the decking.
  function drawPlan(x, y, w, h) {
    const off = roofOffsets(state), walls = outline(state);
    const rx0 = -state.width / 2 - off.left, rx1 = state.width / 2 + off.right, rz0 = -state.depth / 2 - off.back, rz1 = state.depth / 2 + Math.max(off.front, state.deck || 0) + .05;
    const k = Math.min((w - 34) / (rx1 - rx0), (h - 34) / (rz1 - rz0));
    const ox = x + (w - (rx1 - rx0) * k) / 2 - rx0 * k, oz = y + 10 + (h - 34 - (rz1 - rz0) * k) / 2 - rz0 * k;
    const P = (px, pz) => [ox + px * k, oz + pz * k];
    pdf.setFillColor('#ffffff'); pdf.rect(x, y, w, h, 'F');
    // Roof edge, dashed.
    pdf.setDrawColor(C.muted); pdf.setLineWidth(.25); pdf.setLineDashPattern([1.2, 1], 0);
    { const [a0, b0] = P(-state.width / 2 - off.left, -state.depth / 2 - off.back), [a1, b1] = P(state.width / 2 + off.right, state.depth / 2 + off.front); pdf.rect(a0, b0, a1 - a0, b1 - b0, 'S'); }
    if (state.deck) { const [dx0, dz0] = P(-state.width / 2, state.depth / 2 + .03), [dx1, dz1] = P(state.width / 2, state.depth / 2 + .03 + Math.max(state.deck, r.porch ? .5 : 0)); pdf.setDrawColor(C.olive); pdf.rect(dx0, dz0, dx1 - dx0, dz1 - dz0, 'S'); }
    pdf.setLineDashPattern([], 0);
    pdf.setDrawColor(C.ink); pdf.setLineWidth(BUILD.wall * k);
    const cut = (wall, end) => { const o = state.openings.find(v => v.wall === wall && v.corner === end); return o ? BUILD.post + OPENINGS[o.type].w : 0; };
    for (const wl of walls) {
      const u0 = cut(wl.id, 'start'), u1 = wl.L - cut(wl.id, 'end'), h2 = BUILD.wall / 2;
      const a = [wl.a[0] + wl.u[0] * u0 - wl.n[0] * h2, wl.a[1] + wl.u[1] * u0 - wl.n[1] * h2], b = [wl.a[0] + wl.u[0] * u1 - wl.n[0] * h2, wl.a[1] + wl.u[1] * u1 - wl.n[1] * h2];
      const [x1, z1] = P(...a), [x2, z2] = P(...b); pdf.line(x1, z1, x2, z2);
    }
    // The glass corner's 100mm post.
    const hand = state.openings.find(o => o.role === 'corner');
    if (hand) { const sx = hand.wall === 'right' ? 1 : -1, [px, pz] = P(sx * state.width / 2 - (sx > 0 ? BUILD.post : 0), state.depth / 2 - BUILD.post); pdf.setFillColor(C.ink); pdf.rect(px, pz, BUILD.post * k, BUILD.post * k, 'F'); }
    if (r.porch) for (const sgn of [-1, 1]) { const [x1, z1] = P(sgn * (state.width / 2 - BUILD.wall / 2), state.depth / 2), [x2, z2] = P(sgn * (state.width / 2 - BUILD.wall / 2), state.depth / 2 + .5); pdf.line(x1, z1, x2, z2); }
    pdf.setLineWidth(BUILD.wall * k + .2);
    for (const o of state.openings) {
      const wl = walls.find(v => v.id === o.wall), sp = OPENINGS[o.type], c = o.p * wl.L;
      const a = [wl.a[0] + wl.u[0] * (c - sp.w / 2) - wl.n[0] * BUILD.wall / 2, wl.a[1] + wl.u[1] * (c - sp.w / 2) - wl.n[1] * BUILD.wall / 2];
      const b = [wl.a[0] + wl.u[0] * (c + sp.w / 2) - wl.n[0] * BUILD.wall / 2, wl.a[1] + wl.u[1] * (c + sp.w / 2) - wl.n[1] * BUILD.wall / 2];
      pdf.setDrawColor(sp.group === 'door' ? C.olive : '#8fb7c9');
      const [x1, z1] = P(...a), [x2, z2] = P(...b); pdf.line(x1, z1, x2, z2);
    }
    // The dividing wall, with a gap and a swing for its door.
    for (const v of layoutWalls(state)) {
      const len = Math.hypot(v.b[0] - v.a[0], v.b[1] - v.a[1]), ux = (v.b[0] - v.a[0]) / len, uz = (v.b[1] - v.a[1]) / len;
      const at = u => P(v.a[0] + ux * u, v.a[1] + uz * u);
      const runs = [[0, v.door - .45], [v.door + .45, len]];
      pdf.setDrawColor(C.ink); pdf.setLineWidth(.1 * k);
      for (const [u0, u1] of runs) if (u1 > u0) { const [x1, z1] = at(u0), [x2, z2] = at(u1); pdf.line(x1, z1, x2, z2); }
      if (v.hasDoor) { const [hx, hz] = at(v.door - .41); pdf.setDrawColor(C.olive); pdf.setLineWidth(.35); pdf.line(hx, hz, hx - uz * .82 * k, hz + ux * .82 * k); }
    }
    const dim = (p1, p2, text, dx, dz) => {
      const [x1, z1] = P(...p1), [x2, z2] = P(...p2);
      pdf.setDrawColor(C.muted); pdf.setLineWidth(.2);
      pdf.line(x1 + dx, z1 + dz, x2 + dx, z2 + dz);
      for (const [px, pz] of [[x1, z1], [x2, z2]]) pdf.line(px + dx - (dz ? 1.2 : 0), pz + dz - (dx ? 1.2 : 0), px + dx + (dz ? 1.2 : 0), pz + dz + (dx ? 1.2 : 0));
      set(7.4, true, C.ink); pdf.text(text, (x1 + x2) / 2 + dx + (dx ? 1.6 : 0), (z1 + z2) / 2 + dz + (dz ? 3.2 : 1), {align: dx ? 'left' : 'center'});
    };
    dim([-state.width / 2, state.depth / 2], [state.width / 2, state.depth / 2], `${metres(state.width)} wide`, 0, Math.max(off.front, state.deck || 0) * k + 5);
    dim([state.width / 2, -state.depth / 2], [state.width / 2, state.depth / 2], `${metres(state.depth)} deep`, off.right * k + 4, 0);
    if (r.canopy) dim([-state.width / 2, state.depth / 2], [-state.width / 2, state.depth / 2 + off.front], `${metres(off.front)}`, -(off.left * k + 12), 0);
    set(7, true, C.olive); pdf.text('FRONT', P(0, rz1)[0], P(0, rz1)[1] + 13, {align: 'center', charSpace: .5});
    const [cx, cz] = P(0, 0);
    set(13, false, C.ink, true); pdf.text(`${outlineArea(state).toFixed(1)}m²`, cx, cz, {align: 'center'});
    set(7.4, false, C.muted); pdf.text(`about ${internalArea(state).toFixed(1)}m² inside`, cx, cz + 4.5, {align: 'center'});
    return true;
  }

  // ---- 1. Cover ----------------------------------------------------------------------------
  pageNo++;
  pdf.setFillColor(C.ink); pdf.rect(0, 0, W, H, 'F');
  logoAt(PDF_LOGO_WHITE, PDF_LOGO_WHITE_SIZE, M, 11, 42);
  set(8, false, C.frost); pdf.text(`Prepared ${date}`, W - M, 17.5, {align: 'right'}); pdf.text(ref, W - M, 23, {align: 'right'});
  heading(`Your ${r.name} garden room`, M, 50, 36, '#ffffff');
  para(`${first ? first + ', here is your' : 'Your'} ${s.size} ${styleName(state)} ${USES[state.use].name.toLowerCase()}, designed in 3D.`, M, 59, CW, 11, C.pale, 5);
  pdf.setFillColor(C.ink2); pdf.rect(M, 66, CW, 110, 'F');
  if (!image(shots.hero, M, 66, CW, 110)) drawPlan(M, 66, CW, 110);
  para(shots.hero ? 'Rendered from your design. Furniture, planting and the garden are illustrative.' : 'Your plan. Open the PDF from the designer on a device with 3D to add the renders.', M, 181, CW, 7.6, C.frost, 3.5);
  const facts = [[s.size, 'External size'], [`${outlineArea(state).toFixed(1)}m²`, 'Footprint'], [metres2(BUILD.topFront), 'Height, within permitted development']];
  facts.forEach(([v, c], i) => { heading(v, M + i * (CW / 3), 197, 22, '#ffffff', CW / 3 - 4); set(8, false, C.frost); pdf.text(c, M + i * (CW / 3), 203); });
  pdf.setDrawColor('#3a3a40'); pdf.setLineWidth(.3); pdf.line(M, 209, W - M, 209);
  label('Your price', M, 217, C.frost);
  heading(price.total === null ? 'Quoted by Oeco' : money(price.total), M, 230, 30, C.green, 100);
  para(`Oeco’s published prices (${priceDate}), with delivery, foundations and installation.${price.quoted.length ? ` Plus ${price.quoted.length} quoted item${price.quoted.length === 1 ? '' : 's'}.` : ''}`, M, 237, 98, 8.4, C.pale, 3.9);
  para(price.offerActive ? `Includes ${OFFER.title.replace('Oeco’s ', 'Oeco’s ')}: 5% off${price.offer.length ? ` and ${price.offer.length} free upgrade${price.offer.length === 1 ? '' : 's'} in your design` : ''}, on orders placed before 31 October 2026.` : 'Itemised on page 6.', 122, 217, 72, 8.4, C.pale, 3.9);
  button('Book a call with Oeco', M, 252, 112, 14, booking);
  set(8, false, C.pale); pdf.text(`Free, no obligation. Or call free on ${CONTACT.phone}.`, M, 273);
  qr(booking, 154, 246, 36); set(7.4, false, C.pale); pdf.text('Scan to book', 172, 287, {align: 'center'});

  // ---- 2. Front and four sides ------------------------------------------------------------
  pdf.addPage(); frame('Your room from every side', `${claddingName(state)} cladding, ${state.design === 'classic' ? 'timber' : 'anthracite'} fascia and trims (${DESIGNS[state.design].name} design)${r.canopy ? `, ${r.porch ? 'a framed porch under the canopy' : 'a canopy over the doors'}` : ''}.`);
  const fullH = CW * 10 / 16 * .74;
  framedImage(shots.front, M, 54, CW, fullH, 'Front', null);
  const gw = (CW - 6) / 2, gh = gw * 10 / 16;
  const y2 = 54 + fullH + 9;
  framedImage(shots.left, M, y2, gw, gh, 'Left side', null);
  framedImage(shots.right, M + gw + 6, y2, gw, gh, 'Right side', null);
  const y3 = y2 + gh + 9;
  framedImage(shots.back, M, y3, gw, gh, 'Back', null);
  framedImage(shots.hero, M + gw + 6, y3, gw, gh, 'From the front corner', null);

  // ---- 3. Inside, plan, dusk --------------------------------------------------------------
  pdf.addPage(); frame('Step inside', `Plastered walls and ceiling, ${s.rows.find(x => x.label === 'Floor').value.toLowerCase()}. Furniture is shown for scale and is not included.`);
  framedImage(shots.inside, M, 54, CW, fullH, 'Looking in from the doors', null);
  framedImage(shots.inside2, M, y2, gw, gh, 'Looking back towards the doors', null);
  framedImage(shots.plan, M + gw + 6, y2, gw, gh, 'From above, roof off', (x, y, w0, h0) => drawPlan(x, y, w0, h0));
  framedImage(shots.dusk, M, y3, gw, gh, 'At dusk', null);
  pdf.setFillColor(C.mist); pdf.rect(M + gw + 6, y3, gw, gh, 'F');
  let iy = y3 + 8;
  set(13, false, C.ink, true); pdf.text('Inside', M + gw + 11, iy); iy += 6;
  for (const row of specRows(state, {now}).filter(x => x.section === 'Interior').slice(0, 7)) iy = para(`${row.label}: ${row.value}`, M + gw + 11, iy, gw - 10, 8.2, C.ink, 3.9) + .8;

  // ---- 4. Plan --------------------------------------------------------------------------
  pdf.addPage(); frame('Your plan', `External dimensions in metres; about ${internalArea(state).toFixed(1)}m² inside the 160mm walls. Doors in olive, windows in blue; the dashed line is the roof edge${state.deck ? ', the olive outline the decking' : ''}.`);
  drawPlan(M, 54, CW, 150);
  let py = 214;
  set(13, false, C.ink, true); pdf.text('Doors and windows', M, py); py += 2;
  const walls = outline(state);
  for (const o of state.openings) {
    const sp = OPENINGS[o.type], wl = walls.find(v => v.id === o.wall), from = o.p * wl.L - sp.w / 2;
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, py, W - M, py);
    set(8.4, false, C.ink); pdf.text(`${WALLS[o.wall]}: ${sp.name}${o.role === 'corner' ? ' at the corner' : ''}`, M, py + 4.4);
    set(8.4, false, C.muted); pdf.text(`${(sp.w * 1000).toFixed(0)} × ${(sp.h * 1000).toFixed(0)}mm, ${from.toFixed(2)}m from the left corner`, W - M, py + 4.4, {align: 'right'});
    py += 6.2;
    if (py > 276) break;
  }

  // ---- 5. Specification (runs on to a second page when it is long) --------------------------
  const chip = (row, x, y) => {
    const st = row.status;
    if (row.info) return;
    const text = row.building ? (row.amount ? money(row.amount) : 'QUOTED') : st === 'priced' || st === 'upgrade' ? (row.amount ? '+' + money(row.amount) : 'PRICED') : st === 'offer' ? 'FREE IN OCTOBER' : st === 'quoted' ? 'QUOTED' : 'INCLUDED';
    pdf.setFillColor(st === 'offer' ? C.offer : st === 'priced' || st === 'upgrade' || row.building ? C.ink : st === 'quoted' ? '#f1f1ee' : '#edf2e4');
    set(6.4, true, st === 'offer' || st === 'priced' || st === 'upgrade' || row.building ? '#ffffff' : st === 'quoted' ? C.muted : '#3d4f22');
    const tw = pdf.getTextWidth(text) + 4; pdf.rect(x - tw, y - 3.5, tw, 5, 'F'); pdf.text(text, x - tw + 2, y);
  };
  pdf.addPage(); frame('Your specification', 'Everything in your design, and how each item is priced.');
  let sy = 54, lastSection = '';
  for (const row of specRows(state, {now})) {
    set(8.2, false, C.ink);
    const lines = pdf.splitTextToSize(row.value, 104);
    const need = 3.9 * lines.length + 2.6 + (row.section !== lastSection ? 9 : 0);
    if (sy + need > 279) { pdf.addPage(); frame('Your specification, continued', ''); sy = 50; lastSection = ''; }
    if (row.section !== lastSection) { sy += lastSection ? 6 : 2; set(12, false, C.ink, true); pdf.text(row.section, M, sy); sy += 2.2; lastSection = row.section; }
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, sy, W - M, sy);
    set(7.8, true, C.muted); pdf.text(row.label, M, sy + 4.1);
    set(8.2, false, C.ink); pdf.text(lines, M + 44, sy + 4.1, {lineHeightFactor: 1.28});
    chip(row, W - M, sy + 4.1);
    sy += 3.9 * lines.length + 2.6;
  }

  // ---- 6. Price ----------------------------------------------------------------------------
  pdf.addPage(); frame('Your price', `Oeco’s published prices on ${priceDate}: the building for your shape, size and style, and each extra at Oeco’s price.`);
  pdf.setFillColor(C.ink); pdf.rect(M, 54, CW, 30, 'F');
  label('Your price', M + 7, 63, C.frost);
  heading(price.total === null ? 'Quoted by Oeco' : money(price.total), M + 7, 77, 26, C.green, 90);
  para(`${price.quoted.length ? `Plus ${price.quoted.length} quoted item${price.quoted.length === 1 ? '' : 's'}. ` : ''}Delivery to UK mainland addresses, foundations and full installation included.`, 112, 63, 80, 8.4, C.pale, 3.9);
  let by = 94;
  const priceRow = (text, value, colour = C.ink, bold = false) => {
    set(8.8, bold, colour); const lines = pdf.splitTextToSize(text, 130);
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, by, W - M, by);
    pdf.text(lines, M, by + 4.8, {lineHeightFactor: 1.3});
    set(8.8, true, colour); pdf.text(value, W - M, by + 4.8, {align: 'right'});
    by += 4.4 * lines.length + 3.4;
  };
  set(13, false, C.ink, true); pdf.text('Itemised', M, by - 2); by += 2;
  if (price.base !== null) priceRow(`${r.name} ${s.size}, ${styleName(state)}: the building, delivered and installed`, money(price.base), C.ink, true);
  for (const l of price.lines.filter(x => x.status === 'priced' || x.status === 'upgrade')) priceRow(`${l.label}${l.unitPrice && l.qty > 1 ? ` (${l.qty} at ${money(l.unitPrice)})` : ''}`, (l.status === 'upgrade' ? '+' : '') + money(l.amount));
  for (const l of price.offer) priceRow(`${l.label} (October offer${l.unitPrice ? `; normally ${money(l.unitPrice)}${l.unit ? '/' + l.unit : ' each'}` : l.rate ? `; normally ${money(l.rate)}/${l.unit}` : ''})`, 'Free', C.offer);
  for (const l of price.quoted) priceRow(`${l.label}${l.rate ? ` (${money(l.rate)}${l.unit ? ' per ' + l.unit : ''})` : l.note ? ` (${l.note})` : ''}`, 'Quoted', C.muted);
  pdf.setDrawColor(C.ink); pdf.setLineWidth(.5); pdf.line(M, by, W - M, by);
  set(10, true, C.ink); pdf.text('Total', M, by + 5.6); pdf.text(price.total === null ? 'Quoted' : money(price.total), W - M, by + 5.6, {align: 'right'});
  by += 14;
  if (by < 200) {
    heading('Included with every room', M, by, 15);
    bullets(['Delivery to any UK mainland address and full installation by Oeco’s team', 'Concrete pile foundations with adjustable steel feet', 'Plasterboarded and skimmed walls and ceiling; laminate floor', 'Electrics: consumer unit, four double sockets, lighting, two outside lights, Part P certificate', 'Anthracite PVCu doors and windows, A-rated double glazing', '145mm insulated roof; insulated walls and floor', '10-year structural guarantee'], M, by + 8, CW, 8.4);
  }
  para(`${price.offerActive ? `${OFFER.title}: ${OFFER.summary}. ` : ''}This PDF is not a quotation: Oeco confirms the specification, the price and any site work in writing after its free site survey. Per-m² items are priced on the area the survey measures.`, M, 262, CW, 7.6, C.muted, 3.6);

  // ---- 7. Next steps -----------------------------------------------------------------------
  pdf.addPage(); frame('Your next steps', 'From your call to a finished garden room.');
  const step = (n, title, copy, y) => { pdf.setFillColor(C.ink); pdf.circle(M + 4, y - 1.5, 4, 'F'); set(10, true, C.green); pdf.text(String(n), M + 4, y - .1, {align: 'center'}); set(11, true, C.ink); pdf.text(title, M + 12, y); para(copy, M + 12, y + 5, 112, 8.8, C.muted, 4.1); };
  step(1, 'Talk it through', 'Book a call or visit Oeco’s showroom in Ripon: ten furnished rooms to walk round, and no pushy sales.', 62);
  step(2, 'Free site survey', 'Oeco checks the ground, access for a large van and where the room will sit, and can quote a mains connection and bespoke sizes.', 82);
  step(3, 'Order', 'A 50% deposit secures your installation date, fully refundable if you cancel before installation starts.', 102);
  step(4, 'Installation', 'Oeco’s team installs the room on site, from the foundations to the electrics. You choose exact positions as it is built; the balance is due on completion.', 122);
  qr(booking, 150, 58, 42); set(7.6, false, C.muted); pdf.text('Scan to book your call', 171, 105, {align: 'center'});
  button('Book a call with Oeco', M, 144, CW, 14, booking);
  const tiles = [['Call free', CONTACT.phone, 'tel:' + CONTACT.tel], ['Visit the showroom', 'Ripon Business Park, HG4 1AJ', CONTACT.pages.visit], ['Reopen your design', 'Change anything and see it again', link]];
  tiles.forEach(([t, c, url], i) => { const x = M + i * (CW / 3 + .5), w0 = CW / 3 - 3; pdf.setDrawColor(C.line); pdf.setLineWidth(.3); pdf.rect(x, 166, w0, 22, 'S'); set(9.2, true, C.olive); pdf.text(t, x + 4, 174); para(c, x + 4, 180, w0 - 8, 7.8, C.muted, 3.6); pdf.link(x, 166, w0, 22, {url}); });
  const keys = ['guarantee', 'foundations', 'plastered', 'roof', 'planning', 'since2006'];
  keys.forEach((k, i) => { const x = M + (i % 2) * (CW / 2 + 2), y = 200 + Math.floor(i / 2) * 18; pdf.setFillColor(C.green); pdf.circle(x + 2, y - 1.4, 1.5, 'F'); set(9.6, true, C.ink); pdf.text(USPS[k].title, x + 6, y); para(USPS[k].copy, x + 6, y + 4.6, CW / 2 - 10, 8.2, C.muted, 3.8); });
  para(`Oeco Garden Rooms, ${CONTACT.showroom}. ${CONTACT.hours}. Images are rendered from your design and are illustrative: colours vary by screen and printer.`, M, 262, CW, 7.2, C.muted, 3.4);

  // Page numbers, now the page count is known.
  const total = pdf.getNumberOfPages();
  for (let i = 2; i <= total; i++) { pdf.setPage(i); set(7.2, false, C.frost); pdf.text(`Your Oeco garden room  |  ${i} of ${total}`, W - M, 291.5, {align: 'right'}); }
  const slug = v => String(v).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
  const filename = `Oeco-${slug(r.name)}-${state.width}x${state.depth}-garden-room.pdf`;
  if (options.save !== false) pdf.save(filename);
  return {filename, pages: total, reference: ref, bytes: options.save === false ? pdf.output('arraybuffer') : null};
}
void [priceLabel];
