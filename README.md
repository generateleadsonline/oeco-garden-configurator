# Oeco Garden Rooms: 3D garden room designer (v2)

A 3D configurator for Oeco Garden Rooms (oecogardenrooms.co.uk, Ripon). It covers:

- Oeco's five shapes: **Cube**, **Canopy**, **Corner**, **Concave** and **Canopy Corner**;
- all 71 sizes Oeco makes, from 2.5m to 10m wide and up to 5m deep, in 0.5m steps;
- Oeco's six priced styles (Thermowood and Western Red Cedar in Contemporary or Classic designs, Composite Smoothgrain, Composite ProClad Woodgrain), plus fibre cement and natural stone, which are Quoted;
- every door, window and extra on Oeco's optional-extras page, at its published price;
- Oeco's published price for the design, unlocked by an enquiry;
- an illustrated PDF of the design.

Live: https://oeco-garden-configurator.netlify.app/configurator/ (Netlify site `2ddce899-70c1-4080-b73a-e56fa93515e7`, GLO team). The site is Git-linked: every push to `main` deploys.

v2 (13 October 2026) replaces the first React build. Its notes are in `docs/v1/`; an uncommitted v1.5 attempt is kept on the local branch `wip/react-v1.5-2026-10-13`. v2 reuses the architecture and tested parts of the SMART Modular Buildings configurator (`smart-modular-buildings-homepage`), as adapted for Hideaway and Atelia:

- `src/configurator-boot.js`, the start-up module, unchanged apart from its storage-key prefix;
- the SVG renderer, the compatibility shims and the attribution helper;
- the QA tools `check-mobile-3d.mjs`, `zfight.js`, `check-zfighting.mjs`, `shot.mjs` and the harness.

## Where the facts come from

- `research/audit-2026-10-13/`: Oeco's configurator, read on 13 October 2026 by `tools/fetch-oeco-prices.py`. The script posts only the public shape, size and style steps, never an enquiry. The folder holds:
  - `style-prices.json`: every shape, size and style price (2,130);
  - `sizes-prices.json`: the size step's prices;
  - `extras.json`: the 34 optional extras and their prices;
  - `source-manifest.json`: hashes of each page read.
- `research/audit-2026-10-13-recheck/`: the same read again that evening, compared with the catalogue (`price-changes.json`).
- `tools/build-catalogue.py` turns the audit into `tools/data/catalogue.json`. It checks that every size step price is the cheapest style at that size.
- `src/configurator-data.js`: the shapes, claddings, colours, designs, doors, windows, extras, the October offer, selling points (each naming its source page) and contact details.
- `research/photos-2026-10-13/` (git-ignored): Oeco's product and gallery photos. The 3D follows them: vertical boards at their measured widths, the deep fascia, anthracite PVCu or timber trims, anthracite frames, the composite deck lip.
- `docs/qa/CONFIRMATIONS.md`: everything Oeco needs to confirm. Nothing on that list is guessed.

### How prices work

- **The building price** is Oeco's published price for the shape, size and style, exactly as its configurator shows it. On 13 October 2026 that price includes Oeco's 5% October discount.
- **Extras with a published price** each are added at that price: added doors and windows, the bi-fold upgrade, LED panels, the internal door, extra heaters and outdoor sockets after the first.
- **Items in the October offer** ("ten FREE upgrades", orders placed before 31 October 2026) show as free until the end of that day. After it, they show their published rate.
- **Quoted** items are never added up. They are:
  - POA items;
  - per-m² items whose area the survey fixes;
  - colours other than the photographed ones;
  - horizontal boards;
  - fibre cement and stone.

The price is shown once the customer sends their details, as on SMART and Hideaway. The gate is in the page only: the prices themselves are public on Oeco's site.

## How it is built

| File | Does |
| --- | --- |
| `src/configurator-data.js` | Catalogue: shapes, sizes, claddings, colours, designs, doors and windows, extras, the offer, selling points with sources, contacts |
| `src/configurator-model.js` | Pure design rules: sizes, prices, the offer, opening fitting (with the glass corner), specification, share links, UK phone and postcode rules |
| `src/configurator-building.js` | The building in Three.js: walls and cladding, base trim, fascia and aluminium roof edge, sloping roof, canopy and soffit, the Concave's porch, the glass corner, doors and windows, lights, sockets, water butt, mains cable, decking, foundations, interior and the wall build-up shown in the plan |
| `src/configurator-furniture.js` | Electrics, ceiling lights and extra panels, downlights, heaters, the dividing wall and oak door, acoustic panels, illustrative furniture for Oeco's uses |
| `src/configurator-textures.js` | Procedural textures at true board scale: cedar, Thermowood, both composites, fibre cement, split-face stone, the base skirt, the roof panels |
| `src/configurator-scene.js` | Renderer tiers, the garden (lawn, conifer hedge, fence), views (outside, inside, plan with dimensions), focus and edge-outline highlight, PDF captures, diagnostics |
| `src/configurator-boot.js` | Tier ladder, retries, context-loss rebuild, crash guard, `?debug3d` log (reused from SMART) |
| `src/configurator-svg.js` | The flat-shaded SVG last resort (reused from SMART) |
| `src/configurator.js` | The page: steps, controls, undo and redo, forms, analytics, tour, lazy 3D boot |
| `src/configurator-pdf.js` | The customer PDF: eight pages, with the specification running on when it is long |
| `tools/guide-entry.js`, `tools/make-guide.mjs` | The "Download brochure" guide, compiled from Oeco's site, prices and photos |

To build:

```
npm ci
python3 tools/build.py
```

This writes `public/`. Never edit `public/*.html`. The build:

- bundles the page script;
- bundles the scene twice: on three r170 (WebGL2) and on three r162 (WebGL1, through the npm alias `three-webgl1`);
- bundles the PDF;
- inlines the CSS;
- writes a hashed CSP into `public/_headers`.

`sh build.sh` is Netlify's build check.

Images:

- `python3 tools/make-images.py <renders>` writes the posters, social image and touch icon. The shape thumbnails are Oeco's own photos.
- The renders come from `W=1600 H=1000 GPU=1 node tools/qa/render.mjs <renders> <queries>`, with queries from `node tools/qa/queries.mjs`.
- `node tools/make-guide.mjs` writes the guide.

When Oeco changes its prices, re-read them:

```
python3 tools/fetch-oeco-prices.py research/audit-<date>
```

Then point `tools/build-catalogue.py` at the new folder and rebuild.

### On every device

Each device class gets a quality tier:

- `high` on desktops;
- `medium` on phones and tablets: half-size textures, pixel ratio up to 1.5, 1600px PDF renders;
- `low` for WebGL1 or a retry;
- `safe`: Lambert shading, no shadows or reflections;
- `svg` when there is no WebGL at all.

The 3D also protects itself on weak devices:

- Texture canvases are freed after upload, and textures are drawn only for parts the design has.
- A lost context rebuilds the scene.
- The crash guard ignores reloads.
- `?debug3d` shows a report with Copy.

The 3D loads only when needed. A pre-rendered poster shows first. Desktops start the 3D at once. Phones start it on the first touch, scroll or key, or after about six idle seconds.

## QA

Run the local server first: `node tools/qa/static-server.mjs 4827`. It applies the CSP and records form POSTs in `.qa-forms.ndjson`.

The Playwright suites need `PLAYWRIGHT_CORE` pointing at a `playwright-core@1.49.1` install, which matches the cached WebKit 2104. Install it in a scratch folder, not here, along with `axe-core` for the accessibility check. Chrome runs on the Mac GPU (`--use-angle=metal`); `SWIFTSHADER=1` forces the software renderer.

| Command | Checks |
| --- | --- |
| `npm test` | All 2,130 prices and 71 sizes against Oeco's configurator, the 34 extras against its extras page, quoted items never added, the October offer cut-off, standard doors by design, the glass corner, fitting at every size, the 2.5m height, share links, UK phone and postcode rules |
| `node tools/qa/check-options.mjs` | Every option value (151) changes the 3D model and the view from the camera the page turns to (25+ pixels); 23 real controls turn the camera to the part and outline it |
| `node tools/qa/check-zfighting.mjs` | No coplanar overlapping faces in 638 designs: every shape at every size, both designs, every extra, every door and window on every wall |
| `node tools/qa/check-mobile-3d.mjs <base>` | Playwright WebKit as an iPhone and Chrome as a Pixel 7, with forced faults: no WebGL, WebGL1 only, lost contexts, shaders that won't link, a GPU that draws nothing, setup faults, early reloads, the crash guard, 2D canvases refused (iOS memory), low memory, `?debug3d` (38 checks) |
| `node tools/qa/check-layout.mjs` | 320, 360, 375, 390, 768, 1024 and 1440px: no sideways scrolling and touch targets of 44px or more, on every step, every dialog and a busy unlocked design |
| `AXE=<axe.min.js> node tools/qa/check-a11y.mjs` | axe-core WCAG 2.2 AA on every step, dialog and the tour, desktop and phone |
| `node tools/qa/check-forms.mjs` | Validation (names, UK phone, email, postcode), every field each form sends, the unlocked price, analytics events. Locally it submits every form to the QA server; against the live site it never submits a valid form |
| `node tools/qa/check-pdf.mjs "<query>"` | Builds the PDF in a real browser through the QA hook, with no form sent. Render its pages with `swift tools/qa/pdfrender.swift` and check them by eye |
| `node tools/qa/screens.mjs` | Screenshots of every step and dialog at a desktop and a phone width |
| `node tools/qa/check-live-files.mjs` | After a deploy: every live file against `public/` by md5, and the live CSP against `_headers` |

The results are in `docs/qa/QA-REPORT.md`. The reviewed example PDF, made from the live site, is in `docs/examples/`.

## Deploy

Netlify builds every push to `main`. It runs `sh build.sh`, which only checks the committed `public/`, and then publishes `public/`. To deploy:

1. Build.
2. Run the suites.
3. Commit `src/` and `public/` together.
4. Push.

Put `[skip netlify]` in the message of a commit that changes only docs or tools. After a deploy, run `check-live-files.mjs` and the suites against the live URL.

Leads go to Netlify Forms only: `oeco-quote`, `oeco-callback`, `oeco-visit`, `oeco-brochure` and `oeco-book-call`. Routing them to Oeco is still to be agreed (CONFIRMATIONS C1).
