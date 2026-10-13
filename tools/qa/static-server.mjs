// Local stand-in for Netlify: serves public/ with the headers from public/_headers (so the CSP is
// exercised), /dir/ to index.html, 404.html for misses, the netlify.toml redirects for / and
// /configurator, and answers form POSTs with 200 the way Netlify Forms does. Posted forms are
// appended to $FORMS_LOG (default: .qa-forms.ndjson, git-ignored) so QA can check every field.
// node tools/qa/static-server.mjs [port]
import {createServer} from 'node:http';
import {readFile, appendFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public');
const port = Number(process.argv[2] || process.env.PORT || 4791);
const log = process.env.FORMS_LOG || path.resolve(root, '../.qa-forms.ndjson');
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain'};

async function headersFor(urlPath) {
  const text = await readFile(path.join(root, '_headers'), 'utf8').catch(() => '');
  const out = {};
  let match = false;
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    if (!/^\s/.test(line)) {
      const pattern = line.trim().replace(/\*/g, '.*');
      match = new RegExp('^' + pattern + '$').test(urlPath);
    } else if (match) {
      const i = line.indexOf(':');
      // Served over plain http here, so the live CSP's upgrade-insecure-requests would send
      // WebKit to https://127.0.0.1 and fail every subresource: drop just that directive.
      out[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/;\s*upgrade-insecure-requests/, '');
    }
  }
  return out;
}
createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  let p = decodeURIComponent(url.pathname);
  if (req.method === 'POST') {
    let body = ''; for await (const c of req) body += c;
    await appendFile(log, JSON.stringify({at: new Date().toISOString(), path: p, fields: Object.fromEntries(new URLSearchParams(body))}) + '\n');
    res.writeHead(200, {'Content-Type': 'text/html'}); res.end('ok'); return;
  }
  if (p === '/') { res.writeHead(302, {Location: '/configurator/' + url.search}); res.end(); return; }
  if (p === '/configurator') { res.writeHead(301, {Location: '/configurator/' + url.search}); res.end(); return; }
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(root, p), status = 200;
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); } catch { file = path.join(root, '404.html'); status = 404; }
  try {
    const body = await readFile(file);
    res.writeHead(status, {'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', ...(await headersFor(url.pathname))});
    res.end(body);
  } catch { res.writeHead(404); res.end('not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Serving public/ on http://127.0.0.1:${port}`));
