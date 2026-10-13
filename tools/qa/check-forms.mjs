// Forms: every form needs a first name, a last name, a UK phone number (Ofcom's numbering plan), an
// email address and a UK postcode, and sends the full specification, the price and a design link.
// Against the local server (tools/qa/static-server.mjs, which records each POST in
// .qa-forms.ndjson) it submits every form and checks what arrives. Against any other origin (the
// live site) it never submits a valid form: it checks validation and the data each form would
// attach, read from the form itself.
//   PLAYWRIGHT_CORE=<path> BASE=http://127.0.0.1:4791 node tools/qa/check-forms.mjs
import {readFile, writeFile} from 'node:fs/promises';
import {launch, BASE, SKIP_TOUR} from './lib.mjs';

const LOCAL = /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(BASE);
const LOG = new URL('../../.qa-forms.ndjson', import.meta.url);
if (LOCAL) await writeFile(LOG, '');
let failed = 0;
const check = (ok, label, detail = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? '  ' + detail : ''}`); if (!ok) failed++; };
const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 1280, height: 900}});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(240000);
const events = [];
await page.exposeFunction('__qaEvent', e => events.push(e));
await ctx.addInitScript(() => { const push = Array.prototype.push; window.dataLayer = []; window.dataLayer.push = function (...a) { a.forEach(e => window.__qaEvent?.(e)); return push.apply(this, a); }; });
await page.goto(BASE + '/configurator/?qa=1&no3d', {waitUntil: 'load'});
await page.evaluate(() => document.querySelector('#steps [data-step="5"]').click());
const fill = async (form, v) => page.evaluate(([form, v]) => {
  const f = document.forms[form];
  for (const [k, val] of Object.entries(v)) { const el = f.elements.namedItem(k); el.value = val; el.dispatchEvent(new Event('input', {bubbles: true})); }
}, [form, v]);
const submitAndRead = async form => page.evaluate(async form => {
  const f = document.forms[form];
  f.requestSubmit();
  await new Promise(r => setTimeout(r, 900));
  return {errors: [...f.querySelectorAll('.field-error:not([hidden])')].map(e => e.textContent), status: f.querySelector('.form-status')?.hidden ? '' : f.querySelector('.form-status')?.textContent, hidden: f.hidden};
}, form);

// Validation on the price form.
await fill('oeco-quote', {'first-name': '', 'last-name': '', email: 'not-an-email', phone: '07700 900123', postcode: 'HG4'});
let r = await submitAndRead('oeco-quote');
check(r.errors.length === 5, 'Quote form: empty names, a bad email, a reserved (drama) number and a part postcode are all refused', r.errors.join(' / '));
for (const [phone, ok] of [['07123 456789', true], ['+44 7123 456789', true], ['(01765) 690000', true], ['020 7946 1234', true], ['0800 170 1270', true], ['0330 123 4567', true], ['07012 345678', false], ['0900 123 4567', false], ['12345', false], ['+1 202 555 0100', false], ['07777 777777', false], ['01632 960123', false]]) {
  const res = await page.evaluate(p => { const el = document.forms['oeco-quote'].elements.phone; el.value = p; el.dispatchEvent(new FocusEvent('focusout', {bubbles: true})); return el.getAttribute('aria-invalid'); }, phone);
  check((res === 'false') === ok, `Phone ${phone} is ${ok ? 'accepted' : 'refused'}`, `aria-invalid ${res}`);
}
for (const [pc, ok] of [['HG4 1AJ', true], ['sw1a1aa', true], ['M1 1AE', true], ['HG4', false], ['12345', false]]) {
  const res = await page.evaluate(p => { const el = document.forms['oeco-quote'].elements.postcode; el.value = p; el.dispatchEvent(new FocusEvent('focusout', {bubbles: true})); return el.getAttribute('aria-invalid'); }, pc);
  check((res === 'false') === ok, `Postcode ${pc} is ${ok ? 'accepted' : 'refused'}`, `aria-invalid ${res}`);
}
const person0 = {'first-name': 'Qa', 'last-name': 'Test', email: 'qa-test@example.com', phone: '07123 456789', postcode: 'hg41aj'};
if (!LOCAL) {
  // Live: fill the forms but never send a valid one; check what they would attach.
  for (const [name, dlg] of [['oeco-quote', null], ['oeco-callback', 'callback'], ['oeco-visit', 'showroom'], ['oeco-brochure', 'brochure'], ['oeco-book-call', 'book']]) {
    if (dlg) await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`).click(), dlg);
    await fill(name, {...person0, 'last-name': ''});
    r = await submitAndRead(name);
    check(r.errors.length === 1 && !r.hidden, `${name} (live): a missing last name is refused before anything is sent`, r.errors.join(' / '));
    const f = await page.evaluate(n => { const f = document.forms[n]; return {link: f.elements['design-link'].value, summary: f.elements['design-summary'].value, ref: f.elements['design-reference'].value}; }, name);
    check(/\/configurator\/\?v=1&r=/.test(f.link) && f.summary.split('\n').length > 15 && /^OECO-/.test(f.ref), `${name} (live): would attach the design link and full specification`, `${f.summary.split('\n').length} lines`);
    if (dlg) await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
  }
  await browser.close();
  console.log(failed ? `${failed} failed` : 'All live form checks passed (nothing submitted)');
  process.exit(failed ? 1 : 0);
}
// A good submission unlocks the price and sends everything.
const person = {'first-name': 'Qa', 'last-name': 'Test', email: 'qa-test@example.com', phone: '07123 456789', postcode: 'hg41aj'};
const expected = await page.evaluate(() => { const {model: M, state} = window.__cfg; return M.priceFor(state).total; });
await fill('oeco-quote', person);
r = await submitAndRead('oeco-quote');
const unlocked = await page.evaluate(() => !document.getElementById('quote-unlocked').hidden && document.querySelector('#price-value').textContent);
check(unlocked === '£' + expected.toLocaleString('en-GB'), 'Quote form: a valid enquiry unlocks the price (Oeco’s published figure), the PDF and booking', unlocked);
for (const [name, dlg] of [['oeco-callback', 'callback'], ['oeco-visit', 'showroom'], ['oeco-brochure', 'brochure'], ['oeco-book-call', 'book']]) {
  await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`).click(), dlg);
  // Details given once in the visit are filled in again; clear one to prove it is required.
  await page.evaluate(n => { const f = document.forms[n]; f.elements['last-name'].value = ''; }, name);
  r = await submitAndRead(name);
  check(r.errors.length === 1 && !r.hidden, `${name}: a missing last name is refused`, r.errors.join(' / '));
  await fill(name, person);
  r = await submitAndRead(name);
  check(r.hidden, `${name}: sends with first and last name, phone, email and postcode`);
  await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
}
await page.waitForTimeout(500);
const posts = (await readFile(LOG, 'utf8')).trim().split('\n').filter(Boolean).map(l => JSON.parse(l).fields);
const forms = ['oeco-quote', 'oeco-callback', 'oeco-visit', 'oeco-brochure', 'oeco-book-call'];
for (const f of forms) {
  const p = posts.find(x => x['form-name'] === f);
  if (!p) { check(false, `${f}: received`); continue; }
  const missing = ['first-name', 'last-name', 'email', 'phone', 'phone-e164', 'postcode', 'design-link', 'design-reference', 'design-summary', 'building-style', 'room-size', 'building-price', 'design-total'].filter(k => !p[k]);
  check(!missing.length, `${f}: carries the person, the design link and the full specification`, missing.length ? 'missing ' + missing.join(', ') : `${p['design-summary'].split('\n').length} specification lines`);
  check(p['phone-e164'] === '+447123456789' && p.phone === '07123 456789' && p.postcode === 'HG4 1AJ' && p['first-name'] === 'Qa' && p['last-name'] === 'Test', `${f}: separate first and last names, phone normalised to +44, postcode formatted`, `${p['phone-e164']} ${p.phone} ${p.postcode}`);
  check(p['design-total'] === '£' + expected.toLocaleString('en-GB') && new RegExp('Price: £' + expected.toLocaleString('en-GB')).test(p['design-summary']), `${f}: carries Oeco’s published price for the design`, p['design-total']);
  check(/^https?:\/\/[^ ]+\/configurator\/\?v=1&r=/.test(p['design-link']), `${f}: design link reopens the design`, p['design-link'].slice(0, 80));
}
// Analytics: every call to action and step is an event.
const names = new Set(events.map(e => e.event));
for (const e of ['configurator_view', 'configurator_step_view', 'cta_click', 'configurator_form_view', 'configurator_form_start', 'configurator_submit_attempt', 'configurator_form_error', 'generate_lead', 'configurator_enquiry_saved', 'configurator_dialog_open']) check(names.has(e), `Analytics event ${e}`);
await browser.close();
console.log(failed ? `${failed} failed` : 'All form checks passed');
process.exit(failed ? 1 : 0);
