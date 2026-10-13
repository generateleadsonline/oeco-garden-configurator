# Oeco Garden Rooms configurator: points for Oeco to confirm

Checked 13 October 2026 against Oeco's own sources:

- the configurator on oecogardenrooms.co.uk/garden-rooms.html (five shapes, 71 sizes each, six priced styles: 2,130 prices);
- the optional extras page (34 extras);
- the exterior and interior specifications, the ready-to-order page, the showroom and contact pages;
- Oeco's 30 product photographs (each shape in six styles).

Nothing below is guessed in the configurator. Where a source is missing or two sources disagree, the configurator does one of three things, and the item is listed here:

- shows the item as **Quoted**;
- leaves it out;
- draws an indicative shape that is labelled as such.

Oeco publishes no brochure or price list for garden rooms: its brochure is emailed after an enquiry. So there is nothing to check against beyond the website and configurator. No form was submitted on Oeco's site.

## Before any traffic

| # | Point | What the configurator does now |
|---|---|---|
| C1 | **Where leads go.** The five forms (price, callback, showroom visit, guide, book a call) save to Netlify Forms on GLO's Netlify account only. Nothing is emailed to Oeco or sent to a CRM yet. | Each submission carries the full specification, the price, a link that reopens the design, the UK phone in +44 form and the postcode. Oeco needs to give a destination (sales@ email, CRM or webhook). |
| C2 | **Booking a call.** Oeco has no public booking calendar: only a contact form and a "Book a free site survey" page. | "Book a call" asks for a preferred weekday and a two-hour slot (Monday to Friday, 9am to 5pm) and promises that Oeco will confirm. A calendar link (Calendly, HubSpot) can replace it. The PDF's booking link reopens the design with the booking form open. |
| C3 | **Brochure.** "Download brochure" gives a six-page guide compiled from Oeco's website, prices and product photos (`public/oeco-garden-rooms-guide.pdf`, built by `tools/make-guide.mjs`). | The cover says it was compiled from oecogardenrooms.co.uk. It needs Oeco's approval, or a PDF of Oeco's own brochure to replace it. The guide form also has a "post me the printed brochure" box. |
| C4 | **Privacy and data controller.** The forms link to Oeco's privacy policy, but the configurator is hosted by GLO. | Oeco should confirm the wording and that its privacy policy covers this site. |
| C5 | **Prices expire with the October offer.** The prices captured on 13 October 2026 already carry Oeco's "5% discount" for orders placed before 31 October 2026. | From 1 November 2026 the page stops showing offer items as free and charges their published rates. The building prices stay as captured until refreshed. Run `python3 tools/fetch-oeco-prices.py` and `python3 tools/build-catalogue.py` when Oeco changes its prices. |
| C6 | **Analytics.** Every call to action, step, option change, form event and PDF download is pushed to `window.dataLayer`. There is no GTM or GA4 container on the page. | Needs Oeco's GTM container ID, or GLO's, before campaign traffic. |

## Prices and the October offer

| # | Point | What the configurator does now |
|---|---|---|
| C7 | **VAT.** Neither the configurator nor the extras page says whether prices include VAT. | Prices are shown as Oeco publishes them. The page makes no VAT claim. |
| C8 | **What the free "packages" cover.** "FREE Anthracite Composite Decking", "Additional Electrical Socket Package", "External Up/Down Lighting Package" and "External Canopy Downlights Package" have no published quantities. | While the offer runs, any amount the customer chooses is shown as "Free in October". The price page says Oeco confirms what each package includes. The standard rate is shown beside each one. |
| C9 | **The free heater.** The offer names a "1.5kW White Glass Electric Heater"; the extras page sells an "Electric Panel Heater", "white panel heater 1.5Kw", at £150. | The two are treated as the same heater. The first one is free in October and any more are £150 each. |
| C10 | **Brushed aluminium sockets: £35 each.** The page says the four included white sockets "can be upgraded", but does not say whether the upgrade of an included socket costs £35. | The October offer makes the "Brushed Aluminium Electrical Upgrade" free. Afterwards the upgrade is Quoted, and extra brushed sockets are £35 each. |
| C11 | **Acoustic wall panels: £145** with no unit (each, panel, m²) and no panel size. | Quoted, with £145 shown as Oeco's listed figure. |
| C12 | **Items priced per m².** Decking, the dividing wall, acoustic plasterboard and insulation, and acoustic glass are priced per m², but the area is fixed on site. | Quoted, showing the rate and an approximate area. Never added to the total. |
| C13 | **£250 showroom exclusive discount** (orders placed at the showroom before 31 October 2026). | Mentioned in the showroom dialog. Not taken off any price. |
| C14 | **Classic Thermowood fascia and trims.** The specification says Classic designs have Western Red Cedar fascias, corners and base trims. The configurator also sells a Classic Thermowood. | Classic trims are drawn in the cladding timber (Thermowood on Classic Thermowood). Oeco to confirm. |

## Sizes and construction (drawn from photos, not published)

| # | Point | What the configurator does now |
|---|---|---|
| C15 | **What the size includes on canopy shapes.** Sizes are given as width × depth. The canopy and the Concave's porch are not dimensioned. Oeco's side extension is "0.5m". | The size is taken as the room's walls. The canopy (Canopy, Canopy Corner, Concave) projects about 0.5m in front. The Concave's side walls carry forward 0.5m to frame the porch. Concave's price premium over Canopy Corner grows with cladding cost, which suggests the wing walls are additional, not inside the size. |
| C16 | **Heights and the floor.** Oeco states the 2.5m permitted-development maximum, a 145mm roof, 160mm walls and a 178mm floor, with a slight fall from front to back. | Drawn at 2.5m at the front fascia and 2.45m at the back, with a 180mm fascia band and the floor 200mm off the ground (from the photos). |
| C17 | **Board widths.** None are published. | Measured on Oeco's photos against the 1.2m window: Western Red Cedar about 125mm, Thermowood about 130mm, both composites about 145mm. Fibre cement is drawn as a 180mm lap board and stone as split-face courses. |
| C18 | **The glass corner.** The Corner shapes' glazing is not specified. | Drawn from Oeco's photos: the main doors run to a 100mm anthracite corner post and meet a 0.5m × 2.02m fixed glass panel in the side wall. The panel's size is an assumption. The corner can be put on the left with "Mirror the layout". |
| C19 | **Classic doors.** The included "1.5m double patio door section". | Drawn as Oeco's photos show it: two doors between two narrow fixed sidelights, 1.5m overall. |
| C20 | **The 2.5m wide room.** Its 2.5m front cannot take the 2.4m sliding section between its corner trims. | Contemporary 2.5m × 2.5m rooms are drawn with the 1.5m double patio doors and the window in a side wall; the page explains this. On 4m Contemporary rooms the 2.4m doors and 1.2m window do not both fit on the front, so the window goes on the left side. Oeco's photos show both on the front, probably on a wider room. |
| C21 | **Window heights.** Sills are not published. | Window heads line up with the 2.02m doors, as in the photos. The panoramic 2.02m × 0.5m window sits 1.0m above the floor ("above a work surface or desk"). |
| C22 | **850mm wide opening window.** The extras page gives it as "850mm x 400mm" in its name and "0.85m wide x 0.5m tall" in its description. | Drawn 400mm tall, at its published price (£325), with the conflict noted on the option. |
| C23 | **Wall build-up in the plan view.** Layers are shown so acoustic plasterboard and insulation are visible. | Layer thicknesses follow the 160mm wall description and are indicative. |
| C24 | **Mains connection route.** POA, after the survey. | An indicative armoured-cable trench is drawn behind the room. The real route is set at the survey. |

## Claddings and colours

| # | Point | What the configurator does now |
|---|---|---|
| C25 | **Composite colours.** The exterior page lists seven smooth composite colours (redwood, olive green, ivory, teak, coffee, charcoal, light grey). Its woodgrain paragraph repeats the smooth list word for word. The configurator photographs Composite ProClad Woodgrain in a colour it does not list (sandstone). | The photographed colours are the priced packages: Smoothgrain in Charcoal and ProClad Woodgrain in Sandstone. The other listed colours are offered as Quoted, for Oeco to confirm. Swatch colours are a guide only: Oeco publishes no swatches. |
| C26 | **Fibre cement colours.** "Eight colours including black, cream, sage green, blue, granite, slate, light grey, white and natural unpainted" lists nine. | All nine are offered, as Quoted. |
| C27 | **Fibre cement and natural stone.** Both are on the garden rooms page and the exterior specification, but not in the configurator's six priced styles. | Offered as Quoted claddings (horizontal only, as specified). The building price then reads "Quoted by Oeco". |
| C28 | **Horizontal boards.** Thermowood and both composites can be fitted horizontally, but every photo and price is for vertical boards. | Horizontal is offered as Quoted. Western Red Cedar is vertical only. |
| C29 | **Mixing claddings** (a popular option on the exterior page). | Not modelled. It can be asked for in the form's notes. |

## Copy and contact details

| # | Point | What the configurator does now |
|---|---|---|
| C30 | **Showroom address.** The showroom and contact pages say "Unit B & Unit 3"; the footer says "Unit 3". | Uses "Unit 3, Charter Road, Navigation Way, Ripon Business Park, Ripon HG4 1AJ". Oeco to confirm which unit visitors should go to. |
| C31 | **Installation time.** "Typically within 5 working days" on the garden rooms page; "typically within 7 working days" on the ready-to-order page. | No installation time is promised anywhere. |
| C32 | **Review rating.** Oeco shows a Trust Star Reviews widget, loaded from a third-party script. | No rating is quoted, so nothing can go out of date. |
| C33 | **Next installation date** ("19th October 2026" on 13 October). | Not shown: it changes daily. |
| C34 | **Selling points.** Each one is from Oeco's pages and names its source in `src/configurator-data.js` (`USPS`). | Oeco to approve the wording. |
| C35 | **Furniture and uses.** The uses are Oeco's own examples (offices, gyms, bars, craft studios, reading rooms). | The furniture is illustrative and labelled so on the page and in the PDF. |
| C36 | **Embedding.** If Oeco wants the configurator inside its own site. | The CSP allows framing by oecogardenrooms.co.uk. |
