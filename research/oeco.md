# Oeco first-party configurator research

Researched 11 October 2026. Source URLs:

- https://www.oecogardenrooms.co.uk/garden-rooms.html
- https://www.oecogardenrooms.co.uk/pages/optional-extras.html
- https://www.oecogardenrooms.co.uk/pages/exterior-specifications.html
- https://www.oecogardenrooms.co.uk/pages/interior-specifications.html
- Official page CSS: https://www.oecogardenrooms.co.uk/inc/css/screen.css

## Verified current journey

The configurator is embedded well down the product page. It uses server POST steps, all at `/garden-rooms.html#configure`:

1. Shape: five photo/radio cards; no default shape. Cards show starting prices.
2. Size: 71 size/radio cards, grouped by width, showing cheapest finish prices.
3. Style: six combined style/cladding radio cards, ordered by price; each has a photo and total price.
4. Price: selected summary, total and previous price, finance link, then enquiry form.

The enquiry fields are Name, Email Address, Telephone and Message. CTA is `Send Enquiry`. The price is visible before enquiry. There is no PDF download or interactive 3D view. The actual UX includes full-page server reloads; the embedded form has `Reset` but no explicit previous-step control. Progress labels are four equal horizontal labels. Many control radio inputs are visually hidden; the styled label contains the visible checkbox-like selection affordance.

The empty shape submission produces a large red error panel saying a shape must be selected. Avoid asserting the old configurator is broken: a valid selection does advance after navigation completes.

## Exact catalogue and price-book files

`oeco-pricing.json` contains five shape arrays, each with 71 valid width/depth/base-price records. `oeco-style-pricing.json` contains all 355 shape/size combinations, each with six exact published prices: 2,130 price points. This was collected by posting only public product choices to the calculation steps, with no customer detail submission.

Format:

```
{
  "cube": [{
    "width": 4.0,
    "depth": 3.0,
    "styles": {
      "thermo-contemporary": {"price": 20058, "wasPrice": null, "sourceStyle": "Contemporary Thermowood Timber"},
      "thermo-classic": {...},
      "smoothgrain": {...},
      "woodgrain": {...},
      "cedar-contemporary": {...},
      "cedar-classic": {...}
    }
  }],
  "canopy": [...], "corner": [...], "concave": [...], "canopy-corner": [...]
}
```

No extrapolation, generic price-per-square-metre, inferred cladding percentage or constant shape uplift is needed. Every base-price record was checked against the corresponding Thermowood style price; all 355 matched. Classic/Contemporary Thermowood prices are equal at every size; Classic/Contemporary Cedar prices are also equal at every size.

`wasPrice` is null because the style cards do not expose previous prices. Two directly observed final-page values are Cube 4m × 3m Contemporary Thermowood: £20,058, previous £21,114; and the default product headline: £16,524, previous £17,394. Do not synthesize previous prices for the other records.

### Valid dimension sliders

Both dimensions increment in 0.5m. Available depth depends on width, identically for all five shapes:

| Width | Available depth |
| --- | --- |
| 2.5m | 2.5m only |
| 3–6m | 2.5–5m |
| 6.5–7m | 2.5–4.5m |
| 7.5–8m | 2.5–4m |
| 8.5–9m | 2.5–3.5m |
| 9.5–10m | 2.5–3m |

The marketing headline says `2.5m × 2.5m to 10m × 3m`, which is not the full shape of the valid catalogue. Avoid unrestricted sliders that create nonexistent priced combinations. Clamp depth on width changes and explain the adjustment. Bespoke sizes can be an enquiry option without inventing prices.

### Shape mapping and geometry

All five have a rectangular footprint; `Corner` refers to glazing around a corner, not a diagonal or chamfered front.

| App ID | Exact source POST name | Base starting price | Observed design |
| --- | --- | ---: | --- |
| cube | Cube | £16,524 | Flush-front roof edge, conventional front glazing |
| canopy | Canopy | £17,208 | Projecting front roof canopy, open sides |
| corner | Corner | £17,322 | Front glazing wraps onto a tall glazed return at the front-right corner |
| concave | Concave | £18,006 | Front glazing recessed under roof canopy; both side walls extend forwards to frame the porch |
| canopy-corner | Canopy Corner | £18,006 | Canopy roof plus Corner wrap-around glazing |

The apparent approximately 0.5m canopy depth is visual inference from the official imagery and optional-extras description, not a drawing-certified dimension. Three-dimensional visualisation should be labelled indicative and not presented as construction drawings.

### Exact style option keys

| App price-book key | Exact source POST name | Appearance |
| --- | --- | --- |
| thermo-contemporary | Contemporary Thermowood Timber | Timber with anthracite roof/corner/base trim |
| thermo-classic | Classic Thermowood Timber | Timber and matching timber trim |
| smoothgrain | Composite Smoothgrain | Unified contemporary composite selection |
| woodgrain | Composite ProClad Woodgrain | Unified contemporary composite selection |
| cedar-contemporary | Contemporary Western Red Cedar Timber | Cedar with anthracite trim |
| cedar-classic | Classic Western Red Cedar Timber | Cedar with matching timber trim |

Splitting Style and Cladding into separate controls is sensible, but classic is valid only for timber within the current published price catalogue. Fibre cement, natural stone and mixed cladding appear on broader Oeco pages but not among the six currently priced garden-room options; treat as bespoke enquiry if offered.

## Door/window and optional-extra facts

`oeco-extras.json` records 34 official optional extras, their exact listed price (or null for POA) and descriptive text. Critical distinction: additional door prices are different from replacing standard doors.

- Contemporary already includes a 2.4m × 2.02m sliding patio section and a 1.2m × 0.5m high opening window.
- Classic already includes a 1.5m × 2.02m double patio section and a 0.4m × 1.6m tall opening window.
- Bifold replacement upgrade: 2.2m/three sections £1,495; 3m/four sections £1,695. Fit depends on available wall width.
- Additional sliding patio doors are £1,895; additional double patio doors £1,625. Do not use these prices for included standard doors.
- Additional tall fixed glass panels: 0.5m £325; 0.75m £395; 1m £485, all 2.02m tall.
- Additional 1.2m × 0.5m high opening window: £355; 1.2m × 0.75m: £395; 2.02m × 0.5m panoramic fixed: £325.
- Electrical connection from house to building is POA. The internal electrical package does not include the house mains connection.
- Internal recessed lighting and canopy roof side extension are POA.
- Composite decking £195/m², internal dividing wall £95/m², acoustic plasterboard £20/m², acoustic insulation £15/m², acoustic glass £250/m².

The live October promotion includes decking and several other upgrades; it does not define full decking quantities. Do not infer unlimited free decking or subtract an invented promotion value. Additional requested decking should be site quoted until allowance is confirmed.

## Included package, trust and contact

The product explicitly includes delivery to UK mainland, full on-site installation, concrete and steel-pile foundations, plastered interior, internal electrical package, flooring, anthracite PVCu doors/windows, A-rated double glazing, insulation and a ten-year structural guarantee. Main-page package explanation describes the electrics as consumer unit, four double sockets, two-way light switch, ceiling light panel and two external lights.

Visible trust widget on the live page: Trust Star Reviews, 4.95 rating from 552 reviews. This is not Trustpilot. The company says it has built garden structures since 2006. Installation is described as typically five working days; future availability is dynamic.

Contact: 0800 170 1270; sales@oecogardenrooms.co.uk. Showroom: Unit 3, Charter Road, Navigation Way, Ripon Business Park, Ripon, North Yorkshire HG4 1AJ.

No explicit VAT treatment was located in the current product price step or optional-extras page. Use the published package total; do not create a net/VAT breakdown or assert tax treatment without confirmation. Estimate should say final specification/site conditions and applicable tax treatment are confirmed by Oeco.

## Branding and local assets

Official primary CTA olive: `#647a41`; bright green accent: `#7cbd3c`; sale burgundy: `#742d32`; ink `#202024`; neutral `#f8f8f8`. The site uses Cormorant serif throughout. The redesign should retain Cormorant headings and use a legible modern sans serif for dense controls, small print and labels.

Saved under `public/assets`:

- `oeco-logo.svg` and `oeco-logo-white.svg`: exact first-party SVG logos.
- `cormorant-500.woff2`, `cormorant-700.woff2`: exact website font files. Source CSS registers its 500 file at weight 400; document this intentional discrepancy rather than inventing another file.
- `favicon.png`: exact 32px website favicon.
- `{cube,canopy,corner,concave,canopy-corner}.jpg`: official product hero photographs, about 260–300KB.
- Same names with `-card.webp`: official 300px card crops, approximately 18–20KB.

The images are first-party marketing product renders/photographs from the official page, not examples generated for this project. Preview and PDF must distinguish exact selected specification from indicative appearance.

## UX/CRO improvements informed by observation

These are design hypotheses to test, not guarantees of conversion lift:

1. Start with a desirable visual result and valid default design; use one primary action per step.
2. Replace 71 radio-card sizes with constrained sliders, metric dimensions, area and a floor-plan view.
3. Persist configuration and preserve easy back/edit paths, so submitting details is not perceived as losing the design.
4. Put concise inclusions near the form and explain that contact details unlock the itemised estimate and PDF.
5. Keep mandatory contact fields minimal, mark optional fields clearly, and explain expected next steps without an invented response SLA.
6. Make differences understandable: full-front porch versus simple canopy, timber versus composite, standard versus optional glazing.
7. Separate priced package/selected extras from POA site items in the PDF; give the PDF a usable reference, exact configuration, image, dimensions, inclusions and next-step CTA.
8. Preserve the gate on the server. Sending prices in the initial client bundle, URL or public catalogue undermines the requested gate.
9. Avoid implying the lead form places an order or accepts a contract; `Get my estimate` is better aligned with exploration than the current `Get in Touch & Order`.
10. Measure step completion, dimensions interaction, form start/validation/success and PDF download, with proper consent and no unnecessary personal data in analytics.
