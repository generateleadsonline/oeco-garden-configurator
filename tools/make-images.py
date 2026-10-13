"""Writes the poster stills, shape thumbnails, social image and touch icon.

python3 tools/make-images.py <renders-dir> [photos-dir]

<renders-dir> holds 00.png to 04.png: Cube, Canopy, Corner, Concave and Canopy Corner at the
designer's defaults, rendered at 1600 x 1000 by tools/qa/render.mjs (W=1600 H=1000, tier=high).
The posters show until the live 3D is running, so they are the same scene from the same camera.
The shape thumbnails are Oeco's own product photos (photos-dir, default research/photos-2026-10-13,
from oecogardenrooms.co.uk/uploads/products/2026/), as on its own configurator's shape step.
"""
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'public' / 'assets' / 'img'
IMG.mkdir(parents=True, exist_ok=True)
src = Path(sys.argv[1])
photos = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / 'research' / 'photos-2026-10-13'
SHAPES = ['cube', 'canopy', 'corner', 'concave', 'canopy-corner']
for i, r in enumerate(SHAPES):
    im = Image.open(src / f'{i:02d}.png').convert('RGB')
    for w in (1200, 800):
        im.resize((w, round(im.height * w / im.width)), Image.Resampling.LANCZOS).save(IMG / f'poster-{r}-{w}.webp', quality=78, method=6)
    if r == 'cube':
        W, H = im.size
        og = im.crop((0, int(H * .08), W, int(H * .08) + int(W * 630 / 1200))).resize((1200, 630), Image.Resampling.LANCZOS)
        og.save(IMG / 'og.jpg', quality=82)
    # Thumbnail: Oeco's photo of the shape in Contemporary Western Red Cedar, cropped to 3:2.
    ph = Image.open(photos / f"products_2026_{r.replace('-', '')}cedarcontemporary.jpg").convert('RGB')
    W, H = ph.size
    cw, ch = int(W * .78), int(W * .78 * 2 / 3)
    box = ((W - cw) // 2, max(0, int(H * .55) - ch // 2), (W - cw) // 2 + cw, max(0, int(H * .55) - ch // 2) + ch)
    ph.crop(box).resize((240, 160), Image.Resampling.LANCZOS).save(IMG / f'shape-{r}-240.webp', quality=80, method=6)
# Touch icon: Oeco's white logo on its ink colour.
logo = Image.open(ROOT / 'research' / 'raw' / 'brand' / 'oeco-logo-white.png').convert('RGBA')
logo = logo.crop(logo.getbbox())
bg = Image.new('RGBA', (180, 180), (32, 32, 36, 255))
c = logo.copy(); c.thumbnail((144, 144), Image.Resampling.LANCZOS)
bg.alpha_composite(c, ((180 - c.width) // 2, (180 - c.height) // 2))
bg.convert('RGB').save(ROOT / 'public' / 'apple-touch-icon.png')
print(sorted(p.name for p in IMG.iterdir()))
