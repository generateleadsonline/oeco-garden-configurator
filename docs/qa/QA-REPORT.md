# QA report: Oeco Garden Rooms configurator v2

13 October 2026.

**Live:** https://oeco-garden-configurator.netlify.app/configurator/

**Deploys:** two. The v2 build is commit c1663f3 (Netlify deploy 6ace2e66). One batch of fixes from the live QA pass is commit 522ef5d (deploy 6ace31c2). Every suite below was run against the live site after the final deploy, unless a row says local.

## Results

| Check | Result |
| --- | --- |
| Live files (`check-live-files.mjs`) | 32 of 32 files match the build by md5. `configurator/index.html` differs only by Netlify's form processing. The CSP matches `_headers`, and the X-Robots-Tag is noindex |
| Netlify Forms | 5 forms registered (`oeco-quote`, `oeco-callback`, `oeco-visit`, `oeco-brochure`, `oeco-book-call`). No live submissions were made |
| Prices against Oeco's live configurator | Read twice on 13 Oct 2026 (`tools/fetch-oeco-prices.py`): 2,130 prices and 34 extras, 0 differences from the catalogue |
| Model tests (`npm test`, local) | 14 of 14 |
| Every option changes the 3D (`check-options.mjs`) | 151 of 151 option changes alter the model and the view from the camera the page turns to. 23 of 23 real controls turn the camera to the part and outline it |
| Z-fighting (`check-zfighting.mjs`) | None in 638 designs |
| Phones and fault injection (`check-mobile-3d.mjs`) | 38 of 38 |
| Layout (`check-layout.mjs`) | 320, 360, 375, 390, 768, 1024 and 1440px: no sideways scrolling, every touch target 44px or more. Covers every step, every dialog, a busy design with the price unlocked, and the phone menu (109 screens) |
| Accessibility (`check-a11y.mjs`, axe-core 4.10, WCAG 2.2 A/AA plus best practice) | 0 violations on every step, dialog and the tour, desktop and phone |
| Forms (`check-forms.mjs`, live: validates and reads attachments, never submits) | 28 of 28 live checks. Locally every form was also submitted to the QA server and every field it sent was checked: all pass |
| Lighthouse, mobile, on live | After the final deploy: performance 95, 100 and 100 (LCP 1.2 to 1.7s, TBT 0 to 10ms, CLS 0.007). After the first deploy: 100, 100 and 100. Accessibility 100 and best practices 100 throughout. SEO 66, because the preview is noindex on purpose. Desktop: performance 95 |
| Customer PDF (`check-pdf.mjs` on live, no form sent) | 7 pages, every page rendered to an image and checked by eye. Both QR codes decode to the live design link with `&book=1`. The reviewed example is `docs/examples/oeco-reviewed-example-2026-10-13.pdf`: a Concave 6m × 4m in Contemporary Western Red Cedar with 3.0m bi-folds, an added 1.0m glass panel, 1.5m decking and canopy downlights, priced at £35,094 (reference OECO-5E58B3DD) |
| Guide PDF ("Download brochure") | 6 pages, rendered and checked by eye |

### Every option, shown in 3D

`check-options.mjs` covers:

- the five shapes and five uses;
- 10 widths and depths, plus each shape at 2.5m × 2.5m, 10m × 3m and 6m × 5m;
- six claddings and the Classic design;
- 24 colours and the horizontal boards;
- canopy side extensions and canopy downlights on every canopy shape;
- every decking depth (also on the Concave);
- one to four extra wall lights, outdoor sockets, the water butt and the mains connection;
- bi-fold main doors on three designs;
- each of the 12 doors and windows Oeco sells, added to a wall;
- moving, removing and mirroring, and the glass corner moved to the left;
- acoustic glass, both floors, every LED panel count and downlights;
- sockets, brushed sockets and heaters;
- the dividing wall (across and along the room) and its door;
- acoustic panels in all five finishes, acoustic plasterboard and insulation.

Acoustic plasterboard and insulation sit inside the walls. They show in the plan view, roof off, as the wall build-up: a blue 15mm acoustic board and a grey-green acoustic slab replace the standard white board and yellow slab.

### Flicker-free geometry

`check-zfighting.mjs` covers:

- every shape at all 71 sizes in the Contemporary design, and at every other size in the Classic design;
- each shape with every extra at 10m × 3m, 6m × 4m and 4m × 3m;
- fibre cement, stone, composites and the left-hand glass corner;
- every door and window type on every wall of a 6m × 4m room, in both designs, on the Cube, Corner and Concave.

### Phones and failure modes

`check-mobile-3d.mjs` uses SMART's suite unchanged apart from the design loop. It covers:

- an iPhone in WebKit: the medium tier, canvases released after upload, and memory across 43 shapes, claddings and colours (peak 0MB of live 2D canvases, at most 18 textures);
- a lost context: rebuilt once at a lighter tier, then low, safe and SVG on repeated losses, with one context left;
- no WebGL: the SVG 3D draws outside, inside and the plan, and fast enough to orbit;
- WebGL1 only: the r162 build;
- canvas budget spent (iOS memory): the 3D starts with flat colours;
- failure modes, with no contexts leaked:
  - shaders that will not link;
  - full shaders failing while simple ones link;
  - a GPU that draws nothing;
  - a setup fault after the context exists;
- early reloads, and the crash guard and its one-day ceiling;
- the `?debug3d` panel;
- Android Chrome (Pixel 7).

## Accuracy

- **Shapes, sizes, prices.** Every price is Oeco's own: five shapes, 71 width × depth pairs each, six styles, 2,130 prices. `npm test` checks each against the audit and checks that the default design adds nothing. The shape step's "from" prices (£16,524, £17,208, £17,322, £18,006, £18,006) match Oeco's.
- **Extras.** All 34 optional extras are offered at their published prices: 12 doors and windows, the two bi-fold upgrades, 20 other extras.
- **The October offer.** It is applied only while it runs (to 31 October 2026). After that, free items show their published rates. A test pins the cut-off.
- **Quoted items.** POA items, per-m² items, colours other than the photographed ones, horizontal boards, fibre cement and stone never add to the total. A test asserts it.
- **Points to confirm.** Where Oeco's sources are missing or disagree, the point is in `CONFIRMATIONS.md` (36 points).
- **The 3D against Oeco's photos.** The 30 product photos (each shape in six styles) were compared with renders:
  - vertical boards at measured widths: cedar 125mm, Thermowood 130mm, composites 145mm;
  - the 180mm fascia band and aluminium roof edge;
  - anthracite PVCu trims on Contemporary designs and timber trims on Classic ones;
  - the anthracite base skirt and composite deck lip;
  - sliding doors and a wide top-opening window on Contemporary designs; double patio doors with sidelights and a tall opening window on Classic ones;
  - the canopy soffit with downlights, the Concave's framed porch, and the glass corner at a corner post.

## Sales features

- **Header.** Request a callback, Visit showroom, Download brochure and the freephone number. On phones they move into the menu, with Callback kept in the bar.
- **The price page.** It adds Book a call and Download PDF, as buttons and tiles, once the price is unlocked.
- **Selling points.** Each one is from Oeco's pages, names its source, and sits beside the step it supports. Three show on the stage at each step and two in each step's panel.
- **Analytics.** Every call to action (`cta_click` with placement), step view, option change, view change, form view, start, error and submit, lead, PDF download and 3D event goes to `window.dataLayer`. `check-forms.mjs` checks the core events.
- **Tour.** A seven-card tour on the first visit, replayable from Help. On narrow phones, Help is in the menu.
- **Forms.**
  - Separate first and last name, a required UK phone (Ofcom ranges; drama, premium and personal numbers refused), email and a UK postcode.
  - Each form sends the full specification, the price, the design link, a reference and campaign attribution.

## Bugs found during QA and fixed at the cause

1. **Window sills z-fought with the bottom of their wall openings** on every window (524 designs). The sill's top was flush with the opening's bottom face; it now stands 3mm proud.
2. **The glass corner's frames overlapped** by 25mm. The corner post constant was 70mm; the frames need 100mm (`BUILD.post`).
3. **The Concave's base trims overlapped** where the front wall met the porch walls. The front wall's base now sits between the porch walls.
4. **Corner thresholds overlapped** in the corner. The side wall's threshold now stops behind the front wall's.
5. **Extra LED panels were drawn on top of the main light.** The option check found the first extra panel changed 0 pixels. Extra panels now step out along the room.
6. **Canopy downlights could not be seen** from the camera the page turned to. Orbit limits keep the camera above its target, so the target is now taken down to the ground and the camera looks up under the canopy.
7. **Extra wall lights on two walls left the camera facing neither.** The camera now faces the wall of the newest light.
8. **The floor did not follow a change of design.** A Classic room kept Contemporary's grey laminate. It now changes, unless another laminate was chosen.
9. **The "Free in October" badge** inherited another component's padding through a shared class name. Renamed.
10. **Fixes from the live pass (deploy 2):**
    - a strip of lawn between the porch decking and deeper decking (seen by eye in the PDF);
    - heaters drawn over acoustic panels;
    - the plan's decking label off the edge;
    - one specification row spilling onto an extra PDF page.

Two things looked like bugs but were test artefacts:

- **Back-wall options showed 0 changed pixels.** The test rendered without the page's rule that hides the hedge when the camera is behind it. The test now applies the same rule.
- **The first render had no hedge.** The geometry merge had been dropped in an edit. Restored.

## Not done, and why

- **Deploy count.** The brief asked for one deploy. There were two: the first live pass found the decking gap by eye in the PDF, and it could not wait. All suites were re-run after the second deploy.
- **Lead routing, analytics container, booking calendar and brochure approval.** These need Oeco or John (CONFIRMATIONS C1 to C6).
- **No real phone was used.** Safari's engine ran through Playwright WebKit and Android through Chrome emulation. There is no Xcode on this Mac, so there was no iOS Simulator. `?debug3d` gives a copyable report from any real device.
