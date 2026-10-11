# Competitor research — 11 October 2026

Primary live sources: [Noah](https://start.noahgardenrooms.co.uk/configurator/), [SMART](https://smart-modular-buildings-homepage.netlify.app/configurator/). Both were inspected in the browser, including the dimensional controls, preview tools and gated enquiry screen. Neither live competitor form was submitted.

## Live benchmark

| Capability | Noah | SMART | Oeco opportunity |
|---|---|---|---|
| Journey | Six steps, nine for annexes; editable navigation | Five steps with persistent preview | Five short, editable steps; summary and clear next action |
| Size | Feet/metres, presets, +/- and text, 3D drag arrows | Use-based presets and width/depth dropdowns | Accessible dimension sliders with numeric readout, presets and valid size pairs |
| Preview | Outside, inside, roof-off plan, sizes; mirror, undo, sun/shadow, garden placement | Outside/front/inside; 3D, floor plan, real project; dusk, undo, zoom | Room view and dimensioned plan alongside controls, instant material/glazing updates |
| Price gate | First/last name, email, phone, postcode; confirm email | Name, email, postcode required; phone/timeline/budget/notes optional; marketing separate | Name/email/postcode required, phone optional, transparent value exchange and no unnecessary fields |
| Gate explanation | Price/PDF/edit link; inclusions, VAT, delivery radius and separately quoted work | Building price + six-page guide; no obligation; base and mains connection excluded | Tell visitors before designing that a short enquiry unlocks the saved price/PDF; exact Oeco pricing and official inclusions |
| Trust | Made in Shropshire, structural guarantee, Trustpilot | 10-year structural warranty, linked reviews, 15-minute call | Use sourced Oeco installation/guarantee/insulation reassurance at decisions |
| Persistence | Shareable encoded design, undo/redo | Device autosave and share | Restore selections and share design-only links; never put contacts or unlocked price in URL |

Noah's dark green/cream/gold visual hierarchy is polished, but its final screen puts more explanation below a large form and exposes paid upgrade prices earlier despite gating the total. SMART has a stronger persistent conversion panel and explains the guide before the form, but its width and depth remain dropdowns. On the observed 1280px desktop SMART viewport the quote form sat below the fold while another quote button remained fixed; Oeco should bring the three essential fields into the main gate view and keep success/download state unambiguous.

## PDF evidence

The prompt's exact attachment cannot be confidently identified from the message context. Accessible local samples were used as supplementary references: SMART max-spec QA PDF (two pages, an older sample), local current SMART source (six-page guide), and Noah industrial design sample (five pages). Do not claim the unidentified attachment was reviewed.

The current SMART source builds a six-page branded guide with personalised cover and price; captured perspective/interior/front/rear images; footprint plan and elevations; selection table; inclusions versus quoted site work; practical next steps and a clickable booking CTA/QR. The older two-page local SMART PDF is noticeably lighter: a single hero image, simple summary and no detailed plan. Noah's industrial sample has strong opening schedules and technical caveats, but its technical drawing style is less consumer-oriented.

Oeco PDF target: six pages with the actual saved configurator image, dimensioned external footprint and opening preferences, precise selections, current Oeco source price, clear scope/inclusions/limits, and useful next steps plus live-design QR and official contact links. Preserve aspect ratio; never use a different room photograph as though it depicts the user's design. Photos should be explicitly range inspiration. Guide length is useful only if every page adds decision value.

## Useful local architecture references

- `/Users/johnparnell/projects/crown-pavilions-configurator`: server-generated six-page jsPDF, validated JPEG preview, immutable private Blobs designs, GET/POST/PATCH quote API and HttpOnly session. Excellent fit for Oeco.
- `/Users/johnparnell/projects/haus-garden-configurator`: seven-page guide, plan and honest quote-required extras, fail-closed persistence and gate. Client-generated PDF upload approach is less strict than Crown's server generation.
- `/Users/johnparnell/projects/make-room-configurator`: Vite/React/Three.js, lead gate and PDF functions.
- `/Users/johnparnell/projects/smart-modular-buildings-homepage`: five-step UX, saved state, use-based recommendations and current six-page proposal source.

## CRO hypotheses to measure

1. Shorter required form and early disclosure of the gate increase completed enquiries.
2. Sourced inclusions beside decisions reduce uncertainty and form abandonment.
3. Sliders plus popular presets reduce effort on mobile while only allowing priced size combinations.
4. Strong saved-design/PDF value exchange creates a reason to submit even before the visitor is ready to speak.
5. Server persistence before success avoids false conversions and ensures every unlocked price has an accepted enquiry receipt.

Measure start → size interaction → each step → gate viewed → validation errors → accepted submission → PDF downloaded. Do not send contact information to analytics. Conversion improvements are hypotheses until tested with actual traffic.
