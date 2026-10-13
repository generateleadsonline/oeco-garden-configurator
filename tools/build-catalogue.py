"""Builds tools/data/catalogue.json from Oeco's own configurator, as audited.

python3 tools/build-catalogue.py

Source: research/audit-2026-10-13/ (written by tools/fetch-oeco-prices.py, which posts only the
public shape, size and style steps of oecogardenrooms.co.uk/garden-rooms.html and never an
enquiry). The configurator offers five shapes, 71 sizes per shape and six style packages per size:
2,130 published prices. The optional extras page lists 34 extras with their published rates.

Output, compact and checked:
  prices[shape] = [[width, depth, thermo-contemporary, thermo-classic, smoothgrain, woodgrain,
                    cedar-contemporary, cedar-classic], ...]
  extras = [{name, price (null = POA), unit}]
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIT = ROOT / 'research' / 'audit-2026-10-13'
STYLE_ORDER = ['thermo-contemporary', 'thermo-classic', 'smoothgrain', 'woodgrain', 'cedar-contemporary', 'cedar-classic']
SHAPES = ['cube', 'canopy', 'corner', 'concave', 'canopy-corner']

styles = json.loads((AUDIT / 'style-prices.json').read_text())
sizes = json.loads((AUDIT / 'sizes-prices.json').read_text())
extras = json.loads((AUDIT / 'extras.json').read_text())

prices = {}
for shape in SHAPES:
    rows = []
    base = {(r['width'], r['depth']): r['price'] for r in sizes['catalogue'][shape]}
    for r in sorted(styles['catalogue'][shape], key=lambda r: (r['width'], r['depth'])):
        s = r['styles']
        assert set(s) == set(STYLE_ORDER), (shape, r['width'], r['depth'])
        row = [r['width'], r['depth']] + [s[k]['price'] for k in STYLE_ORDER]
        # The size step shows each size's cheapest price: Thermowood, every time.
        assert base[(r['width'], r['depth'])] == min(row[2:]) == row[2], (shape, row)
        rows.append(row)
    assert len(rows) == 71, (shape, len(rows))
    prices[shape] = rows

out = {
    'source': 'https://www.oecogardenrooms.co.uk/garden-rooms.html (configurator: shape, size, style steps) '
              'and https://www.oecogardenrooms.co.uk/pages/optional-extras.html',
    'verifiedAt': styles['verifiedAt'],
    'styles': STYLE_ORDER,
    'prices': prices,
    'extras': [{'name': e['name'], 'price': e['price'], 'unit': e['sourceUnit']} for e in extras['extras']],
}
assert len(out['extras']) == 34
(ROOT / 'tools' / 'data').mkdir(exist_ok=True)
(ROOT / 'tools' / 'data' / 'catalogue.json').write_text(json.dumps(out, separators=(',', ':')))
print('catalogue:', sum(len(v) for v in prices.values()), 'sizes,', sum(len(v) * 6 for v in prices.values()), 'prices,',
      len(out['extras']), 'extras, verified', out['verifiedAt'])
