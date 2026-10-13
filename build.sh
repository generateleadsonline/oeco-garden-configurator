#!/bin/sh
# Netlify runs this. public/ is generated from src/ by tools/build.py and committed, so this only
# checks it: required files, no unexpanded placeholders, the Netlify forms, the CSP and noindex.
set -eu
for f in public/configurator/index.html public/configurator/thank-you/index.html public/404.html public/_headers \
         public/robots.txt public/favicon.png public/assets/brand/oeco-logo-white.svg public/assets/brand/oeco-logo.svg public/oeco-garden-rooms-guide.pdf \
         public/assets/fonts/manrope-latin.woff2 public/assets/fonts/cormorant-500.woff2 public/assets/fonts/cormorant-700.woff2; do
  test -s "$f" || { echo "missing: $f"; exit 1; }
done
for r in cube canopy corner concave canopy-corner; do
  test -s "public/assets/img/poster-$r-1200.webp" || { echo "poster missing: $r"; exit 1; }
  test -s "public/assets/img/poster-$r-800.webp" || { echo "poster missing: $r"; exit 1; }
  test -s "public/assets/img/shape-$r-240.webp" || { echo "shape image missing: $r"; exit 1; }
done
JS=$(grep -o '/assets/js/configurator\.[0-9a-f]*\.js' public/configurator/index.html | head -1)
test -n "$JS" && test -s "public$JS" || { echo "configurator script missing (run python3 tools/build.py)"; exit 1; }
for m in scene scene-gl1 configurator-pdf; do
  M=$(grep -o "/assets/js/$m\.[0-9a-f]*\.js" "public$JS" | head -1)
  test -n "$M" && test -s "public$M" || { echo "$m bundle missing (run python3 tools/build.py)"; exit 1; }
done
if grep -l '{{' public/configurator/index.html public/configurator/thank-you/index.html public/404.html; then echo "unexpanded placeholder"; exit 1; fi
for form in oeco-quote oeco-callback oeco-visit oeco-brochure oeco-book-call; do
  grep -q "name=\"$form\"" public/configurator/index.html || { echo "form missing: $form"; exit 1; }
done
grep -q 'data-netlify="true"' public/configurator/index.html || { echo "Netlify form attribute missing"; exit 1; }
grep -q 'name="robots" content="noindex, nofollow"' public/configurator/index.html || { echo "noindex missing"; exit 1; }
grep -q 'Disallow: /' public/robots.txt || { echo "robots.txt must disallow all on the preview"; exit 1; }
grep -q "Content-Security-Policy: default-src 'self'" public/_headers || { echo "CSP missing from public/_headers"; exit 1; }
printf 'Static site ready in public/\n'
