// Confirms the live site serves exactly the build: the md5 of every file in public/ against the
// live copy, and the live CSP against public/_headers. Netlify Forms strips data-netlify and
// netlify-honeypot from form tags (and rewrites their attribute quoting), so pages with forms are
// compared with those two attributes removed and the form tags' attributes sorted.
//   node tools/qa/check-live-files.mjs [https://oeco-garden-configurator.netlify.app]
import {readdir, readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {join, relative} from 'node:path';

const root = new URL('../../public/', import.meta.url).pathname;
const base = (process.argv[2] || 'https://oeco-garden-configurator.netlify.app').replace(/\/$/, '');
const md5 = b => createHash('md5').update(b).digest('hex');
const formTags = s => s.replace(/<form ([^>]*)>/g, (m, inner) => {
  const attrs = [...inner.matchAll(/([\w-]+)(?:=(?:"([^"]*)"|'([^']*)'))?/g)]
    .map(([, k, a, b]) => [k, a ?? b ?? ''])
    .filter(([k]) => k !== 'data-netlify' && k !== 'netlify-honeypot')
    .sort(([a], [b]) => a.localeCompare(b));
  return '<form ' + attrs.map(([k, v]) => `${k}="${v}"`).join(' ') + '>';
});
async function* walk(d) {
  for (const e of await readdir(d, {withFileTypes: true})) {
    const p = join(d, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

let same = 0, forms = 0, bad = 0;
for await (const file of walk(root)) {
  const rel = relative(root, file);
  if (rel === '_headers') continue;
  const res = await fetch(`${base}/${rel.replace(/(^|\/)index\.html$/, '$1')}`, {headers: {'accept-encoding': 'identity'}});
  const live = Buffer.from(await res.arrayBuffer());
  const local = await readFile(file);
  if (res.ok && md5(live) === md5(local)) same++;
  else if (res.ok && rel.endsWith('.html') && formTags(live.toString()) === formTags(local.toString())) { forms++; console.log(`same apart from Netlify form processing: ${rel}`); }
  else { bad++; console.log(`DIFFERS: ${rel} (HTTP ${res.status}) local ${md5(local)} live ${md5(live)}`); }
}
const csp = (await readFile(join(root, '_headers'), 'utf8')).match(/Content-Security-Policy: (.*)/)[1].trim();
const page = await fetch(`${base}/configurator/`);
const cspOk = page.headers.get('content-security-policy') === csp;
console.log(`${same} files byte-identical, ${forms} identical apart from Netlify form processing, ${bad} different; CSP ${cspOk ? 'matches' : 'DIFFERS'}; X-Robots-Tag ${page.headers.get('x-robots-tag')}`);
process.exit(bad || !cspOk ? 1 : 0);
