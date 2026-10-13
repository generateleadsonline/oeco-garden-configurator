// Builds public/oeco-garden-rooms-guide.pdf, the "Download brochure" file.
//
// Oeco sends its own brochure only after an enquiry, so this guide is compiled from its website
// and configurator (prices as published, through src/configurator-data.js) with Oeco's own product
// photos. It says so on its cover and needs Oeco's approval (docs/qa/CONFIRMATIONS.md).
//
//   node tools/make-guide.mjs [photos-dir]   (default research/photos-2026-10-13: Oeco's product
//   photos, products_2026_<shape><style>.jpg, from oecogardenrooms.co.uk/uploads/products/2026/)
import {build} from 'esbuild';
import {readFileSync, writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';

const dir = process.argv[2] || 'research/photos-2026-10-13';
const out = await build({entryPoints: ['tools/guide-entry.js'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent'});
const mod = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
// Each photo shrunk to 1000px wide JPEG by PIL, so the guide stays small.
const shrink = file => {
  const tmp = path.join(process.env.TMPDIR || '/tmp', 'oeco-guide-' + path.basename(file));
  execFileSync('python3', ['-c', 'import sys;from PIL import Image;im=Image.open(sys.argv[1]).convert("RGB");im.thumbnail((1000,1000));im.save(sys.argv[2],quality=80)', file, tmp]);
  return 'data:image/jpeg;base64,' + readFileSync(tmp).toString('base64');
};
const photo = name => shrink(path.join(dir, `products_2026_${name}.jpg`));
const photos = {
  cube: photo('cubecedarcontemporary'), canopy: photo('canopycedarcontemporary'), corner: photo('cornercedarcontemporary'),
  concave: photo('concavecedarcontemporary'), 'canopy-corner': photo('canopycornercedarclassic'),
  'cube-thermowood-contemporary': photo('cubethermowoodcontemporary'), 'cube-thermowood-classic': photo('cubethermowoodclassic'),
  'cube-smooth-contemporary': photo('cubecharcoal'), 'cube-woodgrain-contemporary': photo('cubesandstone'),
  'cube-cedar-contemporary': photo('cubecedarcontemporary'), 'cube-cedar-classic': photo('cubecedarclassic')
};
const bytes = mod.guide(photos);
writeFileSync('public/oeco-garden-rooms-guide.pdf', Buffer.from(bytes));
console.log('public/oeco-garden-rooms-guide.pdf', bytes.byteLength, 'bytes');
