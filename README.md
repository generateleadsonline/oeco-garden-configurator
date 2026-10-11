# Oeco Garden Room Configurator

A branded, responsive design studio for Oeco Garden Rooms. Five verified room shapes, accessible width/depth sliders restricted to Oeco’s available dimensions, live Three.js previews, roof-off interior and dimensioned plan, editable selections, device autosave, undo and shareable design links.

## Run and deploy

Node 22+; `npm ci`, `npm run dev`, `npm run build`, `npm test`. Netlify builds `dist` and modern functions in `netlify/functions`. Root and `/configurator/` serve the studio. `.netlify` is excluded from Git; no local account metadata or secrets are committed. Production is linked to GitHub `main` through Netlify continuous deployment.

## Price, lead and PDF gate

Prices are calculated only on the server using a snapshot of all 2,130 published Oeco configurator combinations checked 11 October 2026. The public bundle contains dimensions and options, never price tables. Prices are a published package starting point; Oeco confirms VAT treatment, promotion eligibility, site work and bespoke glazing in its final quotation. Refresh the source price book before any real launch and whenever Oeco changes its pricing.

POST `/api/quote` validates design and contact fields, saves a private lead, immutable design and validated preview in Netlify Blobs, then issues a random HttpOnly/Secure/SameSite session. The estimate only unlocks after successful persistence. GET `/api/quote` and `/api/quote/pdf` require an accepted saved enquiry and unexpired session. PATCH saves a new immutable revision without requesting contact details again; the UI hides outdated prices and disables stale PDF access until the revision is saved. Requests support idempotent retries. PDF generation uses the authenticated saved configuration and preview, with an integrity check on the stored image; documents and responses are private/no-store.

The six-page pack contains the exact saved preview, dimensioned concept plan, full selections, package scope, sourced price and exclusions, survey checklist, clickable contact details and design-only QR. Photos are clearly labelled collection inspiration. Room dimensions describe the enclosed external footprint; canopy and porch projections are illustrative and additional. Furniture and landscaping are illustrative.

## Lead destination and privacy

Leads persist in this project’s private `oeco-enquiries` Netlify Blobs store. Preview deploys use isolated stores. **This is a GLO-operated demonstration; Oeco’s CRM, email delivery and sales inbox are not connected.** The interface and `/privacy.html` state this clearly. It does not claim to email quotes. Connect an authorised Oeco destination and agreed retention/privacy policy before directing real paid traffic here. No marketing list is connected. Contact data stays out of local storage, URLs and analytics events. Session expiry is seven days and does not delete retained server records.

## CRO measurement

The UI emits contact-free `oeco_` events into `window.dataLayer` for design changes, step views, submissions, accepted leads, errors and PDF downloads. No external tracker is installed. Wire an authorised analytics destination and consent flow for a real launch. Evaluate step completion, accepted enquiries per visitor and PDF downloads; conversion uplift is a hypothesis until tested with traffic.

## Research and verification

`research/oeco.md` documents Oeco’s original flow, options, geometry, sizing, brand and current pricing provenance. `research/competitors.md` covers the Noah/SMART live journeys, PDFs and local configurator architecture. The exact attachment mentioned in the brief was not accessible; available competitor examples were compared without claiming review of an unidentified file. Raw third-party HTML/CSS and full external source dumps are excluded from publishing.

See `docs/QA.md` for deployed browser/API/PDF verification, and `docs/pdf-and-gate.md` for implementation checks. Tests cover every source price, valid sizing, validation, fail-closed persistence, sessions, idempotency, immutable revisions and PDF image integrity. A sanitised sample can be generated for demonstration, but customer PDFs are never deployed at public static URLs.
