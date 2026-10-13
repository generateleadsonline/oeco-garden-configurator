# Live API and PDF QA — 11 October 2026

Live site: https://oeco-garden-configurator.netlify.app/configurator/

Source revision supplied by deployment owner: `2cd8b85b6e6f6b0ee585224a24b95d7d39e9c2fc`.

Netlify production deployment `6acb8fc66af9a700082995bb` was published at **2026-10-11 13:32:19 UTC** (20:32:19 Vietnam time), from the source revision above, as verified in the deployment owner's Netlify metadata. The deployed index returned HTTP 200 at 13:32:39 UTC. The accepted synthetic API enquiry was saved at `2026-10-11T13:33:42.841Z`, followed by a new immutable design revision at `2026-10-11T13:33:46.930Z`. Both responses report current published Oeco prices checked on `2026-10-11`.

## Results

| Check | Observed | Result |
|---|---|---|
| Quote GET without a session | 401 with no estimate | Pass |
| PDF GET without a session | 401 with no PDF | Pass |
| Malformed email enquiry | 400 validation error | Pass |
| Cross-origin enquiry POST | 403 | Pass |
| Synthetic enquiry POST | 201, `saved:true`, revision 1 | Pass |
| Session access | HttpOnly, Secure, SameSite=Lax, `/api` cookie; GET 200 | Pass |
| Initial saved PDF | 200, private attachment, six pages | Pass |
| Design PATCH | 200, revision 2, coherent new configuration/price | Pass |
| Updated saved PDF | 200; ignores URL-supplied width/quote ID | Pass |
| Public `/server/price-book.mjs` | 404 | Pass |
| Deployed JavaScript bundle | No `PRICE_BOOK`, `calculateEstimate` or checked exact price constants | Pass |

Only synthetic QA contact details were used. The project stores the receipt privately; no Oeco email or CRM forwarding is configured. API responses contain configuration and estimate data without returning name, email, postcode or phone. Cookies were used in memory and are not saved in the QA report.

## Price and PDF coherence

Initial configuration: 4m × 3m Canopy, Contemporary Thermowood, sliding doors and letterbox window. Exact current source package price: **£20,913**.

Updated configuration: 10m × 3m Canopy Corner, Contemporary Composite ProClad Woodgrain, sliding doors, left tall window and gym use. Exact current source package price: **£37,329**. The tall side window differs from the Contemporary standard letterbox layout and is clearly listed as a preference for Oeco confirmation without an artificial upgrade price.

The downloaded updated guide is saved at `qa/live-api-guide.pdf`. All six pages were rendered and reviewed at `qa/live-api-guide-overview.png`. Its cover, plan, specification and price agree with revision 2. Text extraction verified the exact price, shape, width/depth, cladding, synthetic name, revision and GLO storage/no-forwarding disclosure. Text bounding checks found no content outside the page. No clipping or collisions were visible.

PDF annotations also verified the clickable official phone and email contacts, source page and live-design link. The design link/QR destination contains only selections; it does not include contact information or an unlocked price.

The API test omitted a captured 3D image deliberately and verified the correctly dimensioned plan fallback.

## Browser-captured PDF review

The actual browser download `/Users/johnparnell/Downloads/Oeco-OECO-F7067475-design-pack.pdf` was independently reviewed after all six pages were rendered. It is revision 1 for the synthetic **Oeco QA Example** enquiry. The exact configuration is **4m × 3m Canopy, Contemporary Thermowood, sliding doors, right letterbox window, Work**. The package price is **£20,913** on both cover and price page.

- Page 1 contains the actual captured 3D room: warm timber cladding, anthracite Contemporary trims, front canopy, sliding glazing and right letterbox window. The image retains its aspect ratio and the building is visible without clipping.
- Page 2 shows the matching 4m × 3m enclosed footprint, additional illustrative canopy projection and correct front door/right window preferences.
- Page 3 records all exact selections and labels the separate official Canopy photograph as range inspiration.
- Page 4 states the published package inclusions and standard Contemporary glazing.
- Page 5 repeats the exact £20,913 package price and confirms the chosen glazing follows the standard style layout, with site/VAT/promotion confirmation details.
- Page 6 contains practical next steps, official contact links, a design-only QR and transparent GLO storage/no-forwarding disclosure.

No text fell outside any page. Visual review found no overlapping content, clipped headings, cropped dimensions or inconsistent price/specification. The example contains synthetic information only and is copied to **`docs/examples/oeco-design-pack.pdf`** for review and publication. Render evidence is at `qa/browser-captured-guide-overview.png` and the six full-size page images.

Raw status/header data: `qa/live-api-results.json` and individual unauthenticated response captures. The report contains no session tokens. Production functions return `private, no-store, max-age=0`, `Vary: Cookie`, noindex and attachment headers for authenticated downloads.
