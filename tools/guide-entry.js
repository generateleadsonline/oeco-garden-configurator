// The Oeco garden rooms guide PDF (tools/make-guide.mjs bundles this): the "Download brochure"
// file. Oeco emails its own brochure only after an enquiry, so this guide is compiled from its
// website (garden rooms page, optional extras, exterior and interior specifications, ready to
// order, showroom) and its configurator's published prices, with Oeco's own product photos.
// Every fact and price is Oeco's; it says so on its cover and needs Oeco's approval.
import {jsPDF} from 'jspdf';
import {RANGES, RANGE_ORDER, OPENINGS, EXTRA_OPENINGS, CLADDINGS, DESIGNS, EXTRAS, USPS, CONTACT, WIDTHS, DEPTHS_FOR, OFFER, OFFER_ITEMS, CATALOGUE_DATE, STANDARD, COLOURS} from '../src/configurator-data.js';
import {fromPrice, money} from '../src/configurator-model.js';
import {PDF_FONTS, PDF_LOGO, PDF_LOGO_SIZE, PDF_LOGO_WHITE, PDF_LOGO_WHITE_SIZE} from '../src/configurator-pdf-assets.js';

const C = {ink: '#202024', olive: '#647a41', green: '#7cbd3c', offer: '#742d32', mist: '#f3f4ef', muted: '#5b5b61', line: '#e1e3dc', frost: '#c3c3c6', pale: '#dcecca'};
const W = 210, H = 297, M = 16, CW = W - 2 * M, PAGES = 6;
const DESIGNER = 'https://oeco-garden-configurator.netlify.app/configurator/';

export function guide(photos) {
  const pdf = new jsPDF({unit: 'mm', format: 'a4', compress: true});
  for (const [key, family, style] of [['regular', 'Manrope', 'normal'], ['bold', 'Manrope', 'bold'], ['heading', 'Cormorant', 'bold']]) { pdf.addFileToVFS(key + '.ttf', PDF_FONTS[key]); pdf.addFont(key + '.ttf', family, style); }
  pdf.setProperties({title: 'Oeco garden rooms: a guide', author: 'Oeco Garden Rooms', subject: 'Shapes, sizes, styles, prices, extras and how an order runs'});
  const date = new Date(CATALOGUE_DATE).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
  const set = (size, bold = false, colour = C.ink, heading = false) => { pdf.setFont(heading ? 'Cormorant' : 'Manrope', heading ? 'bold' : bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(colour); };
  const para = (t, x, y, w, size = 9.5, colour = C.muted, line = 4.6) => { set(size, false, colour); const l = pdf.splitTextToSize(t, w); pdf.text(l, x, y, {lineHeightFactor: line / (size * .352778)}); return y + l.length * line; };
  const label = (t, x, y, colour = C.olive, align = 'left') => { set(7.4, true, colour); const u = t.toUpperCase(); pdf.text(u, align === 'right' ? x - pdf.getTextWidth(u) - .5 * (u.length - 1) : x, y, {charSpace: .5}); };
  const pic = (data, x, y, w, h) => { const p = pdf.getImageProperties(data), k = Math.max(w / p.width, h / p.height); pdf.saveGraphicsState(); pdf.rect(x, y, w, h, null); pdf.clip(); pdf.discardPath(); pdf.addImage(data, data.startsWith('data:image/jpeg') ? 'JPEG' : 'PNG', x - (p.width * k - w) / 2, y - (p.height * k - h) / 2, p.width * k, p.height * k, undefined, 'FAST'); pdf.restoreGraphicsState(); };
  const frame = (n, title) => {
    pdf.addImage(PDF_LOGO, 'PNG', M, 8, 30, 30 * PDF_LOGO_SIZE[1] / PDF_LOGO_SIZE[0]);
    label('Oeco garden rooms: a guide', W - M, 15, C.muted, 'right');
    pdf.setDrawColor(C.olive); pdf.setLineWidth(.6); pdf.line(M, 26, W - M, 26);
    set(26, false, C.ink, true); pdf.text(title, M, 40);
    pdf.setFillColor(C.ink); pdf.rect(0, 283, W, 14, 'F');
    set(8.4, true, C.green); pdf.textWithLink('Design yours in 3D', M, 289.5, {url: DESIGNER});
    set(7.2, false, C.frost); pdf.text(`Freephone ${CONTACT.phone}  |  ${CONTACT.email}  |  oecogardenrooms.co.uk`, M, 293.6);
    pdf.text(`${n} of ${PAGES}`, W - M, 291.5, {align: 'right'});
  };
  const dot = (x, y, colour = C.olive) => { pdf.setFillColor(colour); pdf.circle(x + 1, y - 1.1, .8, 'F'); };
  const bullets = (items, x, y, w, size = 9) => { for (const it of items) { dot(x, y); y = para(it, x + 5, y, w - 5, size, C.ink, 4.2) + 1.6; } return y; };

  // 1. Cover
  pdf.setFillColor(C.ink); pdf.rect(0, 0, W, H, 'F');
  pdf.addImage(PDF_LOGO_WHITE, 'PNG', M, 14, 54, 54 * PDF_LOGO_WHITE_SIZE[1] / PDF_LOGO_WHITE_SIZE[0]);
  set(38, false, '#ffffff', true); pdf.text('Garden rooms for', M, 64); pdf.text('every day of the year', M, 79);
  para('Five shapes, every size from 2.5m to 10m wide, six cladding styles and Oeco’s published prices: a guide to Oeco’s garden rooms, what every one includes, the extras, and how an order goes from survey to installation.', M, 92, CW, 11, C.pale, 5.4);
  pic(photos['canopy-corner'], M, 114, CW, 110);
  para('Canopy Corner in Western Red Cedar. Photographs: Oeco Garden Rooms.', M, 230, CW, 7.6, C.frost, 3.6);
  pdf.setFillColor(C.olive); pdf.rect(M, 240, 100, 14, 'F'); set(10, true, '#ffffff'); pdf.text('Design yours in 3D', M + 50, 248.6, {align: 'center'}); pdf.link(M, 240, 100, 14, {url: DESIGNER});
  para(`Compiled on ${date} from oecogardenrooms.co.uk: the garden rooms page and configurator, optional extras, exterior and interior specifications, ready to order and the showroom page. Prices are Oeco’s, as published that day; Oeco confirms every price in writing.`, M, 264, CW, 7.6, C.frost, 3.6);

  // 2. Shapes
  pdf.addPage(); frame(2, 'Five shapes');
  RANGE_ORDER.forEach((k, i) => {
    const r = RANGES[k], y = 48 + i * 46.5;
    pic(photos[k], M, y, 62, 40);
    set(17, false, C.ink, true); pdf.text(r.name, M + 70, y + 7);
    label(`From ${money(fromPrice(k))}`, M + 70, y + 13);
    para(r.description, M + 70, y + 19, CW - 70, 9, C.muted, 4.3);
  });

  // 3. Sizes and styles
  pdf.addPage(); frame(3, 'Sizes and styles');
  para('Every shape comes in the same 71 sizes, in 0.5m steps. External sizes; bespoke sizes after Oeco’s free site survey.', M, 50, CW, 9.5, C.muted, 4.6);
  let y = 60;
  set(8.4, true, C.ink); pdf.text('Width', M, y); pdf.text('Depths available', M + 26, y); y += 2;
  const groups = [];
  for (const w of WIDTHS) { const d = DEPTHS_FOR[w], key = d.join(','); const g = groups.find(x => x.key === key); if (g) g.ws.push(w); else groups.push({key, ws: [w], d}); }
  for (const g of groups) { pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, y, W - M, y); set(8.6, false, C.ink); pdf.text(g.ws.length > 1 ? `${g.ws[0].toFixed(1)}m to ${g.ws[g.ws.length - 1].toFixed(1)}m` : `${g.ws[0].toFixed(1)}m`, M, y + 4.6); pdf.text(g.d.length > 1 ? `${g.d[0].toFixed(1)}m to ${g.d[g.d.length - 1].toFixed(1)}m deep` : `${g.d[0].toFixed(1)}m deep`, M + 26, y + 4.6); y += 6.6; }
  y += 8;
  set(15, false, C.ink, true); pdf.text('Six priced styles', M, y); y += 7;
  const styles = [['thermowood', 'contemporary'], ['thermowood', 'classic'], ['smooth', 'contemporary'], ['woodgrain', 'contemporary'], ['cedar', 'contemporary'], ['cedar', 'classic']];
  styles.forEach(([c, d], i) => {
    const x = M + (i % 3) * (CW / 3), yy = y + Math.floor(i / 3) * 52, w0 = CW / 3 - 4;
    const photo = photos[`cube-${c}-${d}`];
    if (photo) pic(photo, x, yy, w0, 30);
    set(9.6, true, C.ink); const title = pdf.splitTextToSize(`${DESIGNS[d].name} ${CLADDINGS[c].name}`.replace('Contemporary Composite', 'Composite'), w0); pdf.text(title, x, yy + 35);
    para(c === 'smooth' || c === 'woodgrain' ? `${COLOURS[CLADDINGS[c].colours][c === 'smooth' ? 'charcoal' : 'sandstone'].name} as photographed; ${CLADDINGS[c].note.toLowerCase()}` : CLADDINGS[c].note, x, yy + 36 + 4.4 * title.length, w0, 7.8, C.muted, 3.6);
  });
  y += 108;
  para(`Contemporary: ${DESIGNS.contemporary.note.toLowerCase()}. Classic: ${DESIGNS.classic.note.toLowerCase()}. Fibre cement and natural stone are also on Oeco’s specification, priced on request.`, M, y, CW, 8.6, C.ink, 4.2);

  // 4. Included and construction
  pdf.addPage(); frame(4, 'What every room includes');
  let yi = bullets(['Delivery to any UK mainland address and full on-site installation by Oeco’s own teams', 'Concrete pile foundations with heavy-duty, adjustable steel feet: no base to lay, the room sits clear of the ground', 'Insulated to the latest Building Regulations, for use all year', 'Plasterboarded and skimmed walls and ceiling, high-quality laminate flooring', 'Electrics: consumer unit, four double sockets, a two-way light switch, a ceiling light and two outside lights, with a Part P certificate', 'Anthracite PVCu doors and windows, A-rated argon-filled Planitherm double glazing, insurance-approved locks', `Contemporary: a ${OPENINGS[STANDARD.contemporary.door].w}m sliding patio section and a 1.2m × 0.5m opening window. Classic: a ${OPENINGS[STANDARD.classic.door].w}m double patio section and a 0.4m × 1.6m tall opening window`, '10-year structural guarantee; a minimum life span of 30 years and more'], M, 52, CW, 9);
  yi += 6;
  set(15, false, C.ink, true); pdf.text('How it is built', M, yi); yi += 7;
  yi = bullets(['Roof: 145mm five-layer insulated panels with an anthracite outer skin and aluminium roof edges, falling slightly to a black half-round gutter and downpipe at the back', 'Walls: 160mm, eight layers: cladding on battens, a breathing membrane, C16 timber frame with Knauf insulation, double air vents, plasterboard and skim', 'Floor: 178mm, eight layers, Tanalith E treated joists, insulation, moisture-resistant boarding and oak laminate', 'Built to the 2.5m height limit of permitted development: planning permission is not normally needed. Rooms up to 15m² sit at least 0.5m from a boundary, larger ones at least 1m'], M, yi, CW, 9);
  yi += 4;
  ['guarantee', 'plastered', 'foundations', 'since2006'].forEach((k, i) => { const x = M + (i % 2) * (CW / 2 + 2), yy = yi + 6 + Math.floor(i / 2) * 18; pdf.setFillColor(C.green); pdf.circle(x + 2, yy - 1.4, 1.5, 'F'); set(9.6, true, C.ink); pdf.text(USPS[k].title, x + 6, yy); para(USPS[k].copy, x + 6, yy + 4.6, CW / 2 - 10, 8.2, C.muted, 3.8); });

  // 5. Extras price list
  pdf.addPage(); frame(5, 'Doors, windows and extras');
  para('Oeco’s published prices, each unless shown; POA items are priced after the survey.', M, 48, CW, 9, C.muted, 4.4);
  const rows = [
    ...EXTRA_OPENINGS.map(k => [OPENINGS[k].name, money(OPENINGS[k].price)]),
    ['Aluminium bi-folding doors, 2.2m (replaces the standard doors)', '+' + money(OPENINGS.bifold22.upgrade)],
    ['Aluminium bi-folding doors, 3.0m (replaces the standard doors)', '+' + money(OPENINGS.bifold30.upgrade)],
    ...Object.values(EXTRAS).map(e => [e.source.replace('\\', '/'), e.price === null ? 'POA' : `${money(e.price)}${e.unit === 'm²' ? ' per m²' : e.source === 'Acoustic Wall Panels' ? ' (unit not stated)' : ''}`])
  ];
  const seen = new Set(), list = rows.filter(([name]) => !seen.has(name) && seen.add(name));
  let yr = 56, col = 0;
  for (const [i, [name, price]] of list.entries()) {
    if (i === Math.ceil(list.length / 2)) { col = 1; yr = 56; }
    const x = M + col * (CW / 2 + 2), w0 = CW / 2 - 2;
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(x, yr, x + w0, yr);
    set(7.8, false, C.ink); const l = pdf.splitTextToSize(name, w0 - 26); pdf.text(l, x, yr + 4);
    set(7.8, true, C.ink); pdf.text(price, x + w0, yr + 4, {align: 'right'});
    yr += 3.6 * l.length + 2.8;
  }

  // 6. Ordering, showroom and the offer
  pdf.addPage(); frame(6, 'From survey to installation');
  let yo = bullets(['Free site survey: Oeco checks the ground (no more than a foot of slope across the room), access for one large van and the clear area, and can quote a mains connection and bespoke sizes', 'Order: a 50% deposit, fully refundable if you cancel before the installation start date; you receive a confirmed start date', 'Installation: Oeco’s team starts on a Monday, stays locally and builds everything from the foundations to the electrics. You choose exact positions for doors, windows, sockets and switches on site', 'Completion: you inspect the room with the team; the balance is due on completion and Oeco’s electrician certifies the electrics for connection'], M, 52, CW, 9);
  yo += 6;
  pdf.setFillColor(C.mist); pdf.rect(M, yo, CW, 40, 'F');
  set(15, false, C.ink, true); pdf.text('Visit the showroom', M + 6, yo + 10);
  para(`5,000 sq ft of indoor showrooms with ten furnished garden rooms, offices and studios. ${CONTACT.showroom}. ${CONTACT.hours}.`, M + 6, yo + 17, CW - 12, 8.8, C.ink, 4.2);
  yo += 48;
  pdf.setFillColor(C.offer); pdf.rect(M, yo, CW, 44, 'F');
  set(15, false, '#ffffff', true); pdf.text(OFFER.title, M + 6, yo + 10);
  para(`${OFFER.summary}: ${OFFER_ITEMS.map(t => t.replace('FREE ', '').replace('\\', '/')).join(', ')}. Also a ${OFFER.showroom}.`, M + 6, yo + 17, CW - 12, 8.4, '#f6e3e4', 4);
  yo += 52;
  pdf.setFillColor(C.olive); pdf.rect(M, yo, 100, 14, 'F'); set(10, true, '#ffffff'); pdf.text('Design yours in 3D', M + 50, yo + 8.6, {align: 'center'}); pdf.link(M, yo, 100, 14, {url: DESIGNER});
  set(9, true, C.ink); pdf.text(`Or call free on ${CONTACT.phone}`, M + 108, yo + 8.6);
  return pdf.output('arraybuffer');
}
