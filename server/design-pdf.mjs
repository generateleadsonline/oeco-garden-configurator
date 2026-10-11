import { jsPDF } from 'jspdf';
import qrcode from 'qrcode-generator';
import { SHAPES, STYLES, CLADDINGS, DOORS, WINDOWS, USES, nameFor, designSummary, geometry, designUrl } from '../shared/catalog.js';
import { DISPLAY_MEDIUM, DISPLAY_BOLD, LOGO, PHOTOS } from './pdf-brand.mjs';

const C = { green: '#647a41', dark: '#263225', ink: '#202024', muted: '#62675d', paper: '#f6f5ef', line: '#dce1d2', white: '#ffffff', lime: '#7cbd3c', glass: '#b9d2cc', wood: '#c8ae85' };
const money = value => `£${new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(value)}`;
const printable = value => String(value ?? '').replace(/[–—]/g, '-').replace(/×/g, 'x').replace(/\u00a0/g, ' ');
const PURPOSES = {
  office: ['Space to focus.', 'Think about desk position, daylight for video calls, Wi-Fi, storage and everyday comfort.'],
  studio: ['Space to create.', 'Consider task lighting, natural light, power points, acoustic needs and storage for your materials.'],
  gym: ['Space to move.', 'Discuss your equipment dimensions, floor loading, ventilation, heating and storage before confirming the final room.'],
  retreat: ['Space to unwind.', 'Consider your favourite garden view, seating, lighting and the way you want to use your room throughout the year.'],
};

// Server generation uses only the authenticated immutable design and its validated image.
export function generateDesignPdf(design, leadRecord, previewBytes = null, { origin = 'https://oeco-garden-configurator.netlify.app' } = {}) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true, putOnlyUsedFonts: true });
  doc.addFileToVFS('Cormorant-Medium.ttf', DISPLAY_MEDIUM); doc.addFont('Cormorant-Medium.ttf', 'Cormorant', 'normal');
  doc.addFileToVFS('Cormorant-Bold.ttf', DISPLAY_BOLD); doc.addFont('Cormorant-Bold.ttf', 'Cormorant', 'bold');
  const { config: c, estimate: e } = design, g = geometry(c), shape = SHAPES.find(item => item.id === c.shape);
  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }).format(new Date(design.createdAt));
  const reopen = designUrl(c, origin), contact = 'https://www.oecogardenrooms.co.uk/contact.html';
  const name = leadRecord.lead.name;
  doc.setProperties({ title: `Your Oeco ${shape.label} design - ${design.reference}`, subject: 'Personal garden room design, plan, specification and published package price', author: 'Oeco Garden Rooms design configurator', creator: 'Generate Leads Online configurator prototype' });
  doc.setLanguage('en-GB');
  const fill = colour => doc.setFillColor(colour), draw = colour => doc.setDrawColor(colour);
  const text = (value, x, y, size = 10, weight = 'normal', colour = C.ink, options = {}) => {
    doc.setFont(weight === 'display' ? 'Cormorant' : 'helvetica', weight === 'display' ? 'bold' : weight);
    doc.setFontSize(size); doc.setTextColor(colour);
    doc.text(Array.isArray(value) ? value.map(printable) : printable(value), x, y, options);
  };
  const wrap = (value, x, y, width = 174, size = 9.3, colour = C.muted, gap = 4.8, bold = false) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal'); doc.setFontSize(size); doc.setTextColor(colour);
    const lines = doc.splitTextToSize(printable(value), width);
    doc.text(lines, x, y, { lineHeightFactor: gap / (size * .352778) }); return y + lines.length * gap;
  };
  const box = (x, y, w, h, colour = C.paper) => { fill(colour); doc.rect(x, y, w, h, 'F'); };
  const line = (x1, y1, x2, y2, colour = C.line, weight = .3) => { draw(colour); doc.setLineWidth(weight); doc.line(x1, y1, x2, y2); };
  const rule = y => line(18, y, 192, y);
  const note = (value, x, y, width = 174) => wrap(value, x, y, width, 7.6, C.muted, 4);
  const button = (label, x, y, width = 89, url = contact) => {
    box(x, y, width, 12, C.green); text(label, x + width / 2, y + 7.6, 9, 'bold', C.white, { align: 'center' }); doc.link(x, y, width, 12, { url });
  };
  function header(number, kicker) {
    box(0, 0, 210, 297, C.white);
    doc.addImage(LOGO, 'PNG', 18, 10, 42, 16.21, 'oeco-logo', 'FAST');
    text(design.reference, 192, 15, 8.4, 'bold', C.green, { align: 'right' });
    text(`Revision ${design.revision} | ${date}`, 192, 22, 7.3, 'normal', C.muted, { align: 'right' });
    rule(32); text(kicker.toUpperCase(), 18, 43, 7.8, 'bold', C.green);
    rule(279); text('oecogardenrooms.co.uk', 18, 287, 7.8, 'normal', C.green); doc.link(18, 282, 53, 8, { url: 'https://www.oecogardenrooms.co.uk/' });
    text('0800 170 1270', 105, 287, 7.8, 'normal', C.green, { align: 'center' }); doc.link(80, 282, 48, 8, { url: 'tel:08001701270' });
    text(`${number} / 6`, 192, 287, 7.8, 'normal', C.muted, { align: 'right' });
    text('Personal design concept. Final specification and price confirmed by Oeco.', 18, 293, 6.7, 'normal', C.muted);
  }
  const title = value => text(value, 18, 61, 28, 'display', C.ink);
  function page(number, kicker, heading, intro) { doc.addPage(); header(number, kicker); title(heading); if (intro) wrap(intro, 18, 73, 174, 9.3); }
  function image(data, imageWidth, imageHeight, x, y, w, h, alias) {
    const ratio = imageWidth / imageHeight, iw = Math.min(w, h * ratio), ih = iw / ratio;
    box(x, y, w, h, C.paper); doc.addImage(data, 'JPEG', x + (w - iw) / 2, y + (h - ih) / 2, iw, ih, alias, 'FAST');
  }
  function preview(x, y, w, h) {
    if (previewBytes && design.preview) image(new Uint8Array(previewBytes), design.preview.width, design.preview.height, x, y, w, h, 'saved-oeco-design');
    else plan(x, y, w, h, true);
  }
  function plan(x, y, w, h, compact = false) {
    box(x, y, w, h, C.paper);
    const k = Math.min((w - 43) / c.width, (h - 42) / (c.depth + g.canopy)), pw = c.width * k, pd = c.depth * k;
    const px = x + (w - pw) / 2 - 5, py = y + 18 + (h - 42 - (c.depth + g.canopy) * k) / 2, fy = py + pd;
    box(px, py, pw, pd, '#e1d2ba');
    for (let xx = px + 4; xx < px + pw; xx += 5) line(xx, py, xx, fy, '#f3e6cf', .25);
    draw(C.dark); doc.setLineWidth(1.1); doc.rect(px, py, pw, pd, 'S');
    if (g.canopy) {
      box(px, fy + .7, pw, g.canopy * k, '#e7ebdf');
      draw(C.green); doc.setLineWidth(.4); doc.setLineDashPattern([1.2, 1], 0); doc.rect(px, fy, pw, g.canopy * k, 'S'); doc.setLineDashPattern([], 0);
      if (!compact) text('ILLUSTRATIVE CANOPY / PORCH PROJECTION', px + pw / 2, fy + g.canopy * k / 2 + 1, 5.8, 'bold', C.green, { align: 'center' });
      if (c.shape === 'concave') { line(px, fy, px, fy + g.canopy * k, C.dark, 1); line(px + pw, fy, px + pw, fy + g.canopy * k, C.dark, 1); }
    }
    const dw = g.doorW * k, dx = px + (c.width / 2 + g.doorX - g.doorW / 2) * k;
    line(dx, fy, dx + dw, fy, C.glass, 2.5); line(dx, fy + .4, dx + dw, fy + .4, C.dark, .45);
    line(dx + dw / 2, fy - 1.5, dx + dw / 2, fy + 1.5, C.dark, .35);
    if (!compact) text('D1', dx + dw / 2, fy - 3, 6.8, 'bold', C.dark, { align: 'center' });
    if (g.corner) {
      const openingY = fy - (.13 + .55) * k;
      line(px + pw, openingY, px + pw, openingY + .55 * k, C.glass, 2.5);
      if (!compact) text('W1', px + pw - 5, openingY + .275 * k, 6.5, 'bold', C.dark, { align: 'center' });
    }
    if (c.window !== 'none') {
      const ww = c.window === 'narrow' ? Math.min(1.2, c.depth - .8) : .4;
      const wx = c.windowSide === 'left' ? px : px + pw, wy = py + (c.depth / 2 + .35 - ww / 2) * k;
      line(wx, wy, wx, wy + ww * k, C.glass, 2.5);
      if (!compact) text(g.corner ? 'W2' : 'W1', wx + (c.windowSide === 'left' ? 5 : -5), wy + ww * k / 2, 6.5, 'bold', C.dark, { align: 'center' });
    }
    // Furniture indicates purpose only, not a promised fit or a package inclusion.
    const sx = px + pw * .14, sy = py + pd * .16;
    if (['office', 'studio'].includes(c.use)) {
      box(sx, sy, Math.min(1.4 * k, pw * .48), .6 * k, '#f6f3e9');
      fill('#86947a'); doc.circle(sx + .7 * k, sy + .93 * k, .2 * k, 'F');
    } else if (c.use === 'gym') {
      box(sx, sy, .75 * k, Math.min(1.7 * k, pd * .58), '#798578');
      box(px + pw * .55, py + pd * .22, .7 * k, Math.min(1.65 * k, pd * .54), '#b8c5ad');
    } else {
      box(sx, sy, Math.min(1.6 * k, pw * .52), .8 * k, '#f6f3e9');
      fill('#a7967c'); doc.ellipse(sx + .8 * k, sy + 1.2 * k, .3 * k, .22 * k, 'F');
    }
    const dy = py - 8; line(px, dy, px + pw, dy, C.muted); line(px, dy - 2, px, dy + 2, C.muted); line(px + pw, dy - 2, px + pw, dy + 2, C.muted);
    text(`${c.width.toFixed(1)}m`, px + pw / 2, dy - 3, compact ? 8 : 10, 'bold', C.dark, { align: 'center' });
    const dimX = px + pw + 9; line(dimX, py, dimX, fy, C.muted); line(dimX - 2, py, dimX + 2, py, C.muted); line(dimX - 2, fy, dimX + 2, fy, C.muted);
    text(`${c.depth.toFixed(1)}m`, dimX + 4, py + pd / 2 + 1, compact ? 7 : 8.8, 'bold', C.dark);
    if (!compact) text('FRONT / GARDEN ENTRANCE', x + w / 2, y + h - 4, 7.2, 'bold', C.green, { align: 'center' });
  }
  function bullets(items, x, y, width, size = 9.2, spacing = 4) {
    for (const item of items) {
      fill(C.green); doc.circle(x + 1, y - 1, .7, 'F');
      y = wrap(item, x + 5, y, width - 5, size, C.ink, 4.6) + spacing;
    }
    return y;
  }

  header(1, 'Your personal garden room design');
  title('Your garden. Reimagined.');
  wrap(`Prepared for ${name}. Your ${c.width.toFixed(1)}m x ${c.depth.toFixed(1)}m ${shape.label.toLowerCase()}, made for ${nameFor(USES, c.use).toLowerCase()}.`, 18, 73, 174, 10);
  preview(18, 89, 174, 96);
  note('Your saved design concept. Finishes, furniture, landscaping and construction details are illustrative.', 18, 191);
  const thirds = 174 / 3;
  [[`${c.width.toFixed(1)}m x ${c.depth.toFixed(1)}m`, 'External room dimensions'], [`${(c.width * c.depth).toFixed(1)}m²`, 'External footprint'], [shape.label, 'Your selected design']].forEach(([value, caption], i) => {
    text(value, 18 + thirds * i, 213, 16, 'display', C.ink); text(caption, 18 + thirds * i, 220, 7.6, 'normal', C.muted);
  });
  box(18, 233, 174, 37, C.dark); text('PUBLISHED OECO PACKAGE PRICE', 24, 243, 7.8, 'bold', '#c9d4bd');
  text(money(e.total), 24, 261, 27, 'display', C.white);
  wrap('Your chosen shape, size, style and cladding. Additional preferences and site conditions require confirmation. Price detail: page 5.', 105, 244, 79, 7.9, '#e0e6d8', 4.1);

  page(2, '01 / Your footprint plan', 'Make room for your everyday.', 'A proportionate plan of the selected external room dimensions, with your glazing preferences and illustrative furniture.');
  plan(18, 88, 174, 128);
  text('Your opening preferences', 18, 229, 16, 'display', C.ink);
  text(`D1  ${nameFor(DOORS, c.doors)} doors`, 18, 240, 9, 'bold', C.green);
  const windowLine = `${g.corner ? 'Corner glazing on front and right side. ' : ''}${c.window !== 'none' ? `${nameFor(WINDOWS, c.window)} side window on ${c.windowSide}.` : 'No side window selected.'}`;
  wrap(windowLine, 18, 249, 174, 8.5);
  note('Concept only. Dimensions describe the external enclosed room footprint; roof and porch projections are additional and illustrative. Glazing positions, sizes, usable internal area and furniture clearances require Oeco confirmation. This is not a construction drawing.', 18, 263);

  page(3, '02 / Your selected specification', 'Every choice, in one place.', 'A clear record to help you compare finishes and talk through the final details with Oeco.');
  let y = 88;
  for (const [index, [label, value]] of designSummary(c).entries()) {
    const rh = 14; if (index % 2 === 0) box(18, y - 3, 174, rh, C.paper);
    text(label, 23, y + 4, 8.6, 'normal', C.muted); text(value, 77, y + 4, 9.6, 'bold', C.ink); y += rh;
  }
  const photo = PHOTOS[c.shape]; image(photo.data, photo.width, photo.height, 18, 197, 83, 64, `oeco-${c.shape}-inspiration`);
  text('From the Oeco collection', 110, 207, 15, 'display', C.ink);
  wrap(`Official ${shape.label} photography. This is inspiration for the range; your individually configured design appears on page 1.`, 110, 218, 81, 8.5);
  const cladding = CLADDINGS.find(item => item.id === c.cladding); box(110, 241, 8, 8, cladding.color);
  wrap(nameFor(CLADDINGS, c.cladding), 122, 246, 70, 8.2, C.ink, 4.2, true);
  note('Digital and printed colours are approximate. Confirm physical samples, dimensions, materials, glazing and the final specification before ordering.', 18, 268);

  page(4, '03 / The Oeco package', 'The detail behind the design.', 'Use this page to understand the published package scope and prepare the right questions for your site survey.');
  text('Included in the published room package', 18, 91, 17, 'display', C.green);
  let by = bullets(e.inclusions, 18, 103, 174, 8.8, 3.5);
  rule(by + 1); text('Your priorities', 18, by + 15, 17, 'display', C.ink);
  text(PURPOSES[c.use][0], 18, by + 27, 10, 'bold', C.green); wrap(PURPOSES[c.use][1], 18, by + 36, 174, 9.1);
  box(18, 251, 174, 23, C.paper);
  wrap('10-year structural guarantee. Fully insulated. Built and installed for your garden. Scope and guarantee conditions remain subject to Oeco terms and the final survey.', 24, 261, 162, 8.5, C.ink, 4.5);

  page(5, '04 / Your price & scope', 'A clearer starting point.', 'The exact current Oeco configurator package price for the room shape, size, style and cladding you selected.');
  box(18, 88, 174, 38, C.dark); text('PUBLISHED PACKAGE PRICE', 24, 99, 7.8, 'bold', '#c9d4bd');
  text(money(e.total), 24, 118, 29, 'display', C.white); wrap(e.sourceStyle, 110, 100, 74, 9.3, C.white, 4.8, true);
  text(`${shape.label} / ${c.width.toFixed(1)}m x ${c.depth.toFixed(1)}m`, 18, 139, 9.8, 'bold', C.green);
  text('Current Oeco room package', 18, 152, 9.3); text(money(e.basePrice), 192, 152, 10.5, 'bold', C.ink, { align: 'right' }); rule(158);
  const requested = e.requestedExtras.length ? e.requestedExtras.map(item => item.label).join('; ') : 'Your door and window preferences follow the selected style\'s standard layout.';
  text('Preferences to confirm', 18, 172, 15.5, 'display', C.ink);
  wrap(requested, 18, 182, 174, 8.5);
  note('Nonstandard window and door preferences are confirmed separately. Current promotion eligibility is agreed in your final Oeco quotation.', 18, 199);
  text('Confirm before ordering', 18, 217, 15.5, 'display', C.ink);
  wrap('House mains electrical connection; access and ground conditions; any site preparation or additional work; exact glazing and material specification; planning or Building Regulations where relevant; current promotion eligibility and VAT treatment.', 18, 228, 174, 8.5, C.muted, 4.5);
  note(`Source: live Oeco garden room configurator, checked ${e.sourceDate}. This is an indicative package guide, not a binding quote or confirmed order.`, 18, 254);
  text('View Oeco package information', 18, 270, 8, 'bold', C.green); doc.link(18, 265, 77, 8, { url: e.sourceUrl });

  page(6, '05 / Bring your room to life', 'Your next step, made simple.', 'Save this guide, refine your design, and contact Oeco when you are ready to discuss your garden.');
  const checks = [
    ['Measure your garden', 'Allow for the external footprint, canopy or porch, boundaries, maintenance access and door movement.'],
    ['Check the access route', 'Note gate widths, steps, slopes and anything that could affect installation.'],
    ['Take a few photographs', 'Capture the proposed position and the route from the road to your garden.'],
    ['Prepare your wish list', 'Share furniture or equipment sizes, heating, lighting, power and Wi-Fi needs.'],
    ['Review the final specification', 'Confirm the base, services, glazing, finishes, planning requirements and final written quotation.'],
  ];
  let cy = 94;
  for (const [heading, detail] of checks) {
    draw(C.green); doc.setLineWidth(.4); doc.rect(18, cy - 3, 4, 4, 'S'); text(heading, 26, cy, 9.2, 'bold', C.ink);
    cy = wrap(detail, 26, cy + 6, 165, 8.4, C.muted, 4.5) + 7;
  }
  box(18, 223, 174, 42, C.paper); button('Speak with Oeco', 24, 232, 91, 'tel:08001701270');
  text('sales@oecogardenrooms.co.uk', 24, 257, 8.5, 'bold', C.green); doc.link(24, 250, 95, 10, { url: 'mailto:sales@oecogardenrooms.co.uk' });
  const qr = qrcode(0, 'M'); qr.addData(reopen); qr.make(); const count = qr.getModuleCount(), size = 33, cell = size / (count + 8), qx = 153, qy = 226;
  box(qx, qy, size, size, C.white); fill(C.dark);
  for (let row = 0; row < count; row++) for (let col = 0; col < count; col++) if (qr.isDark(row, col)) doc.rect(qx + (col + 4) * cell, qy + (row + 4) * cell, cell + .01, cell + .01, 'F');
  doc.link(qx, qy, size, size, { url: reopen }); text('Reopen your design', qx + size / 2, 263, 6.3, 'bold', C.green, { align: 'center' });
  note('GLO demonstration configurator: your enquiry is stored privately in this project. It has not been emailed to Oeco or added to its CRM. Contact Oeco directly using the details above to take your project forward.', 18, 271);
  return new Uint8Array(doc.output('arraybuffer'));
}
