# Deployed QA — 11 October 2026

Live: https://oeco-garden-configurator.netlify.app/configurator/

Repository: https://github.com/generateleadsonline/oeco-garden-configurator

The first production release was published at 2026-10-11T13:32:19Z, commit `2cd8b85b6e6f6b0ee585224a24b95d7d39e9c2fc`, deploy `6acb8fc66af9a700082995bb`. This follow-up release includes readability, initial viewport and form-error improvements identified during browser QA. Build and 17 backend/domain/PDF tests passed. Detailed HTTP checks are in [QA-API.md](QA-API.md).

## Browser journey

Chrome desktop, 375×812 mobile and 768×1024 tablet were checked through the actual live controls. Both responsive sizes have no horizontal overflow. Mobile form fields use 16px input text; selectable options and range controls remain usable. Form submission with empty required fields focuses the missing name. A valid synthetic example enquiry saved successfully, focused/announced the unlocked estimate, and revealed the sourced £20,913 price for Canopy, 4×3m, contemporary Thermowood, sliding doors and right letterbox window.

- Width and depth work with keyboard range controls, increment/decrement buttons and presets. At 10m width, depth remains within the sourced 2.5–3m choices; reducing width to 2.5m adjusts depth to 2.5m with an announcement. A separate normalization audit checked 480 combinations without finding an invalid output size.
- All five room shape options, four cladding choices, contemporary/classic trims, glazing selections and room uses were reviewed. Composite excludes classic trims and explains the change. Non-standard glazing is a request for Oeco confirmation, not an invented priced add-on.
- Garden, roof-off inside, dimensioned plan, day/evening, camera reset, undo and design editing work. Furniture, landscaping and exact glazing positions are labelled illustrative.
- A fresh browser tab restored the saved design and accepted enquiry without asking for contact details again. Changing width from 4 to 4.5m hides the previous price and PDF; saving the revision reveals £21,882 and restores the download. The server revision checks separately verified £20,913 → £37,329 with coherent updated PDF output.
- Contact actions point to Oeco’s verified phone, sales email and contact page. No emails were sent during QA. No external analytics service is connected; contact-free dataLayer events are ready for an authorised measurement integration.

## PDF verification

The actual browser download `Oeco-OECO-F7067475-design-pack.pdf` was copied to [the synthetic example](examples/oeco-design-pack.pdf). All six pages were rendered and visually inspected. The saved 3D capture preserves its proportions and shows the room without clipping. Shape, dimensions, cladding, style, glazing, use and £20,913 package price agree across the document. Dimension lines, plan, inclusions, price caveats, checklist, page numbers and contact links are legible with no overlap. The QR contains design-only parameters, excluding price and contact details.

The HTTP-created PDF was also checked with no preview image; it provides a dimensioned plan fallback instead of an unrelated generic room image. Unauthorized price/PDF requests fail closed, and customer PDFs are not public static files.

## Delivery limits

This is a GLO-operated preview with private persistent Netlify Blobs enquiry storage. Oeco CRM, email and sales-inbox delivery require an authorised connection before real customer traffic. The interface makes this clear. Published pricing is a dated source snapshot and requires Oeco confirmation for VAT, promotional eligibility, site work and bespoke changes. Conversion improvement is a design hypothesis; a traffic experiment is needed to measure uplift.

The exact competitor PDF attachment named in the brief was not supplied to this session. Available Noah/SMART examples and live journeys were compared, as documented in [competitor research](../research/competitors.md).
