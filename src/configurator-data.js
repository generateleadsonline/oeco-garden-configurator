// Oeco Garden Rooms catalogue for the configurator. Pure data: no DOM, no Three.js.
//
// Sources (read 13 October 2026; details in research/ and docs/qa/CONFIRMATIONS.md):
// - Oeco's own configurator on oecogardenrooms.co.uk/garden-rooms.html: five shapes, 71 sizes per
//   shape and six style packages per size, 2,130 published prices (tools/data/catalogue.json, via
//   tools/build-catalogue.py from research/audit-2026-10-13).
// - /pages/optional-extras.html: 34 extras with their published price each or per m² (POA where
//   Oeco gives none).
// - /garden-rooms.html (what every room includes, the October offer), /pages/exterior-specifications
//   and /pages/interior-specifications (construction, claddings and colours, trims, flooring,
//   lighting), /pages/ready-to-order (installation, site survey, deposit), /visit.html (showroom).
// - Oeco's 30 product photos (five shapes in six styles, research/photos-2026-10-13), which the 3D
//   follows: vertical boards, a deep fascia band, anthracite PVCu trims on Contemporary designs and
//   cedar trims on Classic ones, anthracite frames, a composite deck lip at the front.
//
// Prices: the building price is Oeco's published price for the shape, size and style, exactly as
// its configurator shows it (it already carries Oeco's 5% October discount). Extras with a
// published price each are added at that price. Items in Oeco's October offer ("ten FREE
// upgrades", orders placed before 31 October 2026) are free while it runs. Anything with no
// published price, or priced per m² of an area only a survey can fix, is marked Quoted and never
// added up. Nothing here is estimated.
import CATALOGUE from '../tools/data/catalogue.json';

export const CATALOGUE_DATE = CATALOGUE.verifiedAt.slice(0, 10);
export const STYLE_KEYS = CATALOGUE.styles;   // the six priced packages, in Oeco's order

// ---- Shapes ----------------------------------------------------------------------------------
// Oeco's five shapes. All five are rectangular rooms; they differ at the front (Oeco's photos):
// Canopy: the roof projects over the doors, with downlights in its soffit. Corner: the main doors
// meet a tall glass panel round the front right corner. Concave: the canopy with both side walls
// carried forward to its edge, so the doors sit in a sheltered porch. Canopy Corner: both.
// The canopy and porch project about 500mm in Oeco's photos; Oeco publishes no figure (the side
// extension option is "0.5m"), so 500mm is drawn and is on the confirmations list.
export const RANGES = {
  cube: {name: 'Cube', tag: 'Clean lines, a flush roof', canopy: 0, corner: false, porch: false,
    description: 'Oeco’s simplest shape: a flat roof finished flush with the walls, a deep fascia band and the doors in the front wall.',
    highlights: ['From £16,524', 'Flush roof edge'], photo: 'cube'},
  canopy: {name: 'Canopy', tag: 'A roof canopy over the doors', canopy: .5, corner: false, porch: false,
    description: 'The roof carries on over the doors as a canopy: shade, shelter, and room for canopy downlights in the soffit.',
    highlights: ['From £17,208', 'Sheltered doors'], photo: 'canopy'},
  corner: {name: 'Corner', tag: 'Glass round the front corner', canopy: 0, corner: true, porch: false,
    description: 'The main doors run to the front right corner and meet a tall glass panel in the side wall: light and views on two sides.',
    highlights: ['From £17,322', 'Glass corner'], photo: 'corner'},
  concave: {name: 'Concave', tag: 'A recessed front porch', canopy: .5, corner: false, porch: true,
    description: 'Both side walls carry forward to the edge of the roof canopy, framing a sheltered porch in front of the doors.',
    highlights: ['From £18,006', 'Framed porch'], photo: 'concave'},
  'canopy-corner': {name: 'Canopy Corner', tag: 'Canopy and a glass corner', canopy: .5, corner: true, porch: false,
    description: 'The canopy over the doors, and the glass corner: the main doors meet a tall glass panel round the front right corner.',
    highlights: ['From £18,006', 'Canopy and glass corner'], photo: 'canopy-corner'}
};
export const RANGE_ORDER = ['cube', 'canopy', 'corner', 'concave', 'canopy-corner'];

// Sizes: Oeco's configurator offers widths 2.5m to 10m and depths 2.5m to 5m in 0.5m steps, with
// the deepest size depending on the width (identical for all five shapes): 71 sizes per shape.
export const STEP = .5;
export const WIDTHS = [...new Set(CATALOGUE.prices.cube.map(r => r[0]))].sort((a, b) => a - b);
export const DEPTHS_FOR = Object.fromEntries(WIDTHS.map(w => [w, CATALOGUE.prices.cube.filter(r => r[0] === w).map(r => r[1]).sort((a, b) => a - b)]));
export const LIMITS = {width: [WIDTHS[0], WIDTHS[WIDTHS.length - 1]], depth: [2.5, 5]};
// Oeco's own example on its product page is the 4m x 3m Cube; the others are starting points.
export const QUICK_SIZES = [[3, 2.5, 'Compact office'], [4, 3, 'Oeco’s example room'], [5, 3, 'Office with a seating corner'], [6, 4, 'Gym, studio or lounge'], [8, 4, 'Two zones with a dividing wall']];

// Construction (Oeco's exterior specification): 145mm five-layer roof, 160mm walls, 178mm floor,
// 2.5m maximum height for permitted development, a roof that falls slightly from front to back,
// black half-round gutter and downpipe at the back, concrete pads with steel piles and adjustable
// feet. Drawn: 2.5m to the top of the fascia at the front, 2.45m at the back, a 180mm fascia band
// and the floor 200mm off the ground (read from the photos; on the confirmations list).
export const BUILD = {wall: .16, roof: .145, floor: .178, base: .2, topFront: 2.5, topBack: 2.45, fascia: .18, trim: .1, post: .1};

// ---- Claddings and designs ---------------------------------------------------------------------
// Oeco's configurator prices six style packages: Thermowood and Western Red Cedar in a
// Contemporary design (anthracite PVCu fascia, corner and base trims) or a Classic design (the
// trims in the timber), and two composites, Contemporary only. Fibre cement and natural stone are
// on Oeco's exterior specification and named on the garden rooms page, but have no price in the
// configurator: offered here as Quoted.
export const CLADDINGS = {
  thermowood: {name: 'Thermowood', note: 'Heat-treated timber in a consistent brown; can be stained or painted', kind: 'thermowood', hex: '#90653d', board: .13, dirs: ['vertical', 'horizontal'], designs: ['contemporary', 'classic'], packages: {contemporary: 'thermo-contemporary', classic: 'thermo-classic'}, photo: 'thermowood'},
  cedar: {name: 'Western Red Cedar', note: 'Rich browns, reds and pinks; vertical only', kind: 'cedar', hex: '#b27a50', board: .125, dirs: ['vertical'], designs: ['contemporary', 'classic'], packages: {contemporary: 'cedar-contemporary', classic: 'cedar-classic'}, photo: 'cedar'},
  smooth: {name: 'Composite Smoothgrain', note: '60% recycled hardwood fibres, 40% recycled plastic; no maintenance', kind: 'smooth', board: .145, dirs: ['vertical', 'horizontal'], designs: ['contemporary'], packages: {contemporary: 'smoothgrain'}, colours: 'smooth', photo: 'charcoal'},
  woodgrain: {name: 'Composite ProClad Woodgrain', note: 'The look of timber with no upkeep', kind: 'woodgrain', board: .145, dirs: ['vertical', 'horizontal'], designs: ['contemporary'], packages: {contemporary: 'woodgrain'}, colours: 'woodgrain', photo: 'sandstone'},
  fibre: {name: 'Fibre cement', note: 'Woodgrain fibre cement, horizontal only', kind: 'fibre', board: .18, dirs: ['horizontal'], designs: ['contemporary'], packages: {}, colours: 'fibre', quoted: true},
  stone: {name: 'Natural stone', note: 'Split-face stacked slate, horizontal only', kind: 'stone', board: .1, dirs: ['horizontal'], designs: ['contemporary'], packages: {}, colours: 'stone', quoted: true}
};
export const CLADDING_ORDER = ['thermowood', 'cedar', 'smooth', 'woodgrain', 'fibre', 'stone'];
// Colours. Composites: the seven named on Oeco's exterior specification (the woodgrain paragraph
// repeats the smooth list), plus the two its configurator photographs: Charcoal for Smoothgrain,
// Sandstone for ProClad Woodgrain. Only the photographed colour is the priced package; the others
// are Oeco's named colours, confirmed with Oeco. Swatch colours are a guide: Oeco publishes none.
const COMPOSITE = [['charcoal', 'Charcoal', '#4a4a4a'], ['light-grey', 'Light grey', '#a7a8a4'], ['redwood', 'Redwood', '#8a4b36'], ['olive', 'Olive green', '#5f6648'], ['ivory', 'Ivory', '#d9d0b9'], ['teak', 'Teak', '#9c6b43'], ['coffee', 'Coffee', '#5b4535']];
export const COLOURS = {
  smooth: Object.fromEntries(COMPOSITE.map(([k, n, h]) => [k, {name: n, hex: h, status: k === 'charcoal' ? 'included' : 'quoted'}])),
  woodgrain: {sandstone: {name: 'Sandstone', hex: '#b59e7f', status: 'included'}, ...Object.fromEntries(COMPOSITE.map(([k, n, h]) => [k, {name: n, hex: h, status: 'quoted'}]))},
  fibre: Object.fromEntries([['natural', 'Natural (unpainted)', '#a9a69e'], ['black', 'Black', '#2c2c2d'], ['cream', 'Cream', '#e4d9bd'], ['sage', 'Sage green', '#9aa48a'], ['blue', 'Blue', '#4f6b84'], ['granite', 'Granite', '#6f7275'], ['slate', 'Slate', '#4f5559'], ['light-grey', 'Light grey', '#b9bcbc'], ['white', 'White', '#f0efea']].map(([k, n, h]) => [k, {name: n, hex: h, status: 'quoted'}])),
  stone: {slate: {name: 'Dark grey slate', hex: '#4b4e52', status: 'quoted'}, rustic: {name: 'Rustic multicolour slate', hex: '#8a7d6c', status: 'quoted'}}
};
export const DEFAULT_COLOUR = {smooth: 'charcoal', woodgrain: 'sandstone', fibre: 'natural', stone: 'slate'};
// Classic: "roofing fascias, corner wall trims and base decking profiles" in the timber.
// Contemporary: "anthracite profiles" (PVCu fascia, corner and base trims, aluminium roof edge).
export const DESIGNS = {
  contemporary: {name: 'Contemporary', note: 'Anthracite fascia, corner and base trims; sliding patio doors and a wide opening window; light grey oak laminate; slimline LED panel'},
  classic: {name: 'Classic', note: 'Fascia, corner and base trims in the timber; double patio doors and a tall opening window; oak laminate; four-spot light'}
};
export const ANTHRACITE = '#383e42';

// ---- Doors and windows ---------------------------------------------------------------------------
// Every size and price from Oeco's optional extras page. Anthracite PVCu outside, white inside,
// A-rated argon-filled double glazing. Heights are 2.02m for doors and tall glass; window sills
// are drawn so their heads line up with the doors (top-opening windows, Oeco's photos).
// `price` is for an additional one; `upgrade` for a replacement of the main doors.
const O = (name, group, w, h, sill, kind, extra = {}) => ({name, group, w, h, sill, kind, ...extra});
export const OPENINGS = {
  sliding: O('Sliding patio doors', 'door', 2.4, 2.02, 0, 'sliding', {leaves: 2, price: 1895, source: 'Sliding Patio Doors - 2.4m x 2.02m'}),
  patio: O('Double patio doors', 'door', 1.5, 2.02, 0, 'patio', {leaves: 2, price: 1625, source: 'Double Patio Doors - 1.5m x 2.02m'}),
  single: O('Single door', 'door', .9, 2.02, 0, 'hinged', {leaves: 1, price: 995, source: 'Single Door - 900mm x 2.02m'}),
  bifold22: O('Aluminium bi-folding doors, 2.2m', 'door', 2.2, 2.02, 0, 'folding', {leaves: 3, upgrade: 1495, alu: true, source: 'Aluminium Bi-Folding Sliding Doors - 2.2m Wide'}),
  bifold30: O('Aluminium bi-folding doors, 3.0m', 'door', 3, 2.02, 0, 'folding', {leaves: 4, upgrade: 1695, alu: true, source: 'Aluminium Bi-Folding Sliding Doors - 3.0m Wide'}),
  wide1205: O('Wide opening window, 1200 × 500mm', 'window', 1.2, .5, 1.52, 'top', {price: 355, source: 'Wide Opening Window - 1200mm x 500mm'}),
  wide1275: O('Wide opening window, 1200 × 750mm', 'window', 1.2, .75, 1.27, 'top', {price: 395, source: 'Wide Opening Window - 1200mm x 750mm'}),
  wide854: O('Wide opening window, 850 × 400mm', 'window', .85, .4, 1.62, 'top', {price: 325, source: 'Wide Opening Window - 850mm x 400mm', note: 'Oeco gives its height as both 400mm and 500mm'}),
  tall416: O('Tall opening window, 400 × 1600mm', 'window', .4, 1.6, .42, 'tall', {price: 385, source: 'Tall Opening Window - 400mm x 1.6m'}),
  tall7516: O('Tall opening window, 750 × 1600mm', 'window', .75, 1.6, .42, 'tall', {price: 485, source: 'Tall Opening Window - 750mm x 1.6m'}),
  glass05: O('Tall fixed glass panel, 0.5m', 'window', .5, 2.02, 0, 'fixed', {price: 325, source: 'Tall Fixed Glass Window Panel - 0.5m x 2.02m'}),
  glass075: O('Tall fixed glass panel, 0.75m', 'window', .75, 2.02, 0, 'fixed', {price: 395, source: 'Tall Fixed Glass Window Panel - 0.75m x 2.02m'}),
  glass10: O('Tall fixed glass panel, 1.0m', 'window', 1, 2.02, 0, 'fixed', {price: 485, source: 'Tall Fixed Glass Window Panel - 1.0m x 2.02m'}),
  panoramic: O('Panoramic fixed window, 2.02m × 500mm', 'window', 2.02, .5, 1, 'fixed', {price: 325, source: 'Panoramic Fixed Window - 2.02m x 500mm'})
};
// Included with every room: Contemporary has one 2.4m sliding patio section and one 1.2m x 0.5m
// wide opening window; Classic has one 1.5m double patio section and one 0.4m x 1.6m tall opening
// window. Corner shapes add the tall glass panel in the side wall at the corner.
export const STANDARD = {
  contemporary: {door: 'sliding', window: 'wide1205'},
  classic: {door: 'patio', window: 'tall416'}
};
export const CORNER_GLASS = 'glass05';
// The main doors can be replaced by aluminium bi-folds (Oeco: "replaces the standard patio door
// or sliding door section. Upgrade price only").
export const MAIN_DOOR_TYPES = ['standard', 'bifold22', 'bifold30'];
// When a wall is too short, a door steps down to the next smaller one (only the 2.5m wide room:
// a 2.4m slider cannot fit between its corners, see CONFIRMATIONS).
export const DOWNSIZE = {bifold30: 'bifold22', bifold22: 'patio', sliding: 'patio', patio: 'single', glass10: 'glass075', glass075: 'glass05', panoramic: 'wide1205', tall7516: 'tall416'};
export const EXTRA_OPENINGS = ['patio', 'sliding', 'single', 'wide1205', 'wide1275', 'wide854', 'tall416', 'tall7516', 'glass05', 'glass075', 'glass10', 'panoramic'];
// Walls: left and right as you face the front.
export const WALLS = {front: 'Front wall', right: 'Right side', back: 'Back wall', left: 'Left side'};

// ---- Extras -----------------------------------------------------------------------------------
// The October offer on Oeco's garden rooms page: "5% Discount + ten FREE upgrades - On all orders
// placed before 31st October 2026". The 5% is already in the configurator prices. The free
// upgrades are listed in OFFER_ITEMS; quantities in the "packages" are not published.
export const OFFER = {ends: '2026-10-31', title: 'Oeco’s October offer', summary: '5% off, already in these prices, and ten free upgrades on orders placed before 31 October 2026', showroom: '£250 showroom exclusive discount, on orders placed at Oeco’s showroom before 31 October 2026'};
export const OFFER_ITEMS = ['FREE Anthracite Composite Decking', 'FREE RS45 Acoustic Slab Insulation Upgrade', 'FREE 1.5kW White Glass Electric Heater', 'FREE External Up\\Down Lighting Package', 'FREE Brushed Aluminium Electrical Upgrade', 'FREE Additional Electrical Socket Package', 'FREE External Double Electrical Socket', 'FREE 100 Litre Water Butt Package', 'FREE External Canopy Downlights Package'];
const EXTRA_BY_NAME = Object.fromEntries(CATALOGUE.extras.map(e => [e.name, e]));
const X = (source, extra) => ({source, price: EXTRA_BY_NAME[source]?.price ?? null, unit: EXTRA_BY_NAME[source]?.unit ?? null, ...extra});
// kind: 'count' (a number of them), 'toggle' (on or off), 'area' (per m², quoted for the area a
// survey fixes). offer: covered by the October offer while it runs; offerFirst: only the first one.
export const EXTRAS = {
  extraSockets: X('Double Socket - White', {name: 'Extra double sockets', kind: 'count', max: 8, offer: true, note: 'Four white double sockets come with every room', step: 'interior'}),
  brushedSockets: X('Double Socket - Brushed Aluminium', {name: 'Brushed aluminium sockets', kind: 'toggle', offer: true, note: 'Every socket in brushed aluminium instead of white', step: 'interior'}),
  ledPanels: X('LED Ceiling Light Panel - 600mm x 600mm', {name: 'Extra LED ceiling panels, 600 × 600mm', kind: 'count', max: 4, note: 'For larger rooms, or each part of a divided room', step: 'interior'}),
  rgbPanels: X('RGB LED Ceiling Light Panel - 600mm x 600mm', {name: 'RGB LED ceiling panels, 600 × 600mm', kind: 'count', max: 4, note: 'Colour sequences and 100% to 0% dimming by remote', step: 'interior'}),
  widePanels: X('LED Ceiling Light Panel - 1200mm x 600mm', {name: 'LED ceiling panels, 1200 × 600mm', kind: 'count', max: 4, note: 'The larger slimline panel', step: 'interior'}),
  downlights: X('Internal Recessed Downlights', {name: 'Recessed LED downlights', kind: 'toggle', note: 'Flush in the plastered ceiling; the ceiling drops 25mm', step: 'interior'}),
  heaters: X('Electric Panel Heater', {name: 'Electric panel heaters, 1.5kW', kind: 'count', max: 3, offerFirst: true, note: 'Thermostat and thermal protection; wall mounted', step: 'interior'}),
  dividingWall: X('Internal Dividing Wall', {name: 'Internal dividing wall', kind: 'area', note: 'Insulated, plastered both sides; position agreed on site', step: 'interior'}),
  internalDoor: X('Internal Timber Door', {name: 'Internal oak timber door', kind: 'toggle', note: 'Oak panel door, frame, handles and lock, in the dividing wall', step: 'interior'}),
  acousticPanels: X('Acoustic Wall Panels', {name: 'Acoustic wall panels', kind: 'toggle', note: 'Slatted panels on the back wall', step: 'interior', quoted: true}),
  acousticBoard: X('Acoustic Plasterboard', {name: 'Acoustic plasterboard', kind: 'area', note: '15mm high-density acoustic plasterboard in the walls and ceiling', step: 'interior'}),
  acousticInsulation: X('Acoustic Insulation', {name: 'Acoustic insulation (RS45 slab)', kind: 'area', offer: true, note: 'Knauf acoustic slab in the walls and floor', step: 'interior'}),
  acousticGlass: X('Acoustic Glass', {name: 'Acoustic glass', kind: 'area', note: 'In every door and window', step: 'openings'}),
  upDownLights: X('External Up\\Down Lights', {name: 'Extra up and down wall lights', kind: 'count', max: 4, offer: true, note: 'Two come with every room, beside the doors', step: 'exterior'}),
  outdoorSocket: X('External Waterproof Double Socket', {name: 'Outdoor waterproof double socket', kind: 'count', max: 2, offerFirst: true, note: 'IP66, RCD protected', step: 'exterior'}),
  canopyLights: X('Canopy Roof Downlights', {name: 'Canopy downlights', kind: 'toggle', offer: true, note: 'One per metre under the canopy, own switch', step: 'exterior', needsCanopy: true}),
  waterButt: X('Rainwater Butt', {name: '100 litre water butt', kind: 'toggle', offer: true, note: 'On the downpipe at the back, with stand and tap', step: 'exterior'}),
  sideCanopy: X('Canopy Roof Side Extension', {name: 'Canopy side extension', kind: 'choice', note: 'The canopy carried 0.5m past one or both sides', step: 'exterior', needsCanopy: true}),
  connection: X('Electrical Connection', {name: 'Mains connection to your house', kind: 'toggle', note: 'Armoured cable from the room to your consumer unit', step: 'exterior'}),
  deck: X('Decking - Composite', {name: 'Anthracite composite decking', kind: 'area', offer: true, step: 'exterior'})
};
export const SIDE_CANOPY = {none: 'None', left: 'Left side', right: 'Right side', both: 'Both sides'};
// Decking: Oeco's photos show a composite deck lip across the front of every room ("almost all of
// our garden rooms have some decking on, whether it's just a front lip or the sides as well").
export const DECK_DEPTHS = [0, .3, 1, 1.5, 2];
export const ACOUSTIC_FINISHES = {
  'antique-oak': {name: 'Antique Oak', hex: '#9b7a55'}, espresso: {name: 'Espresso', hex: '#4a3326'}, 'golden-pine': {name: 'Golden Pine', hex: '#c69b5f'},
  'pebble-grey': {name: 'Pebble Grey', hex: '#8e8c86'}, hazel: {name: 'Hazel', hex: '#a8814f'}
};
// Floors: Classic designs come with "timeless classic oak laminate", Contemporary ones with light
// grey oak laminate; another laminate can be chosen when ordering (quoted here).
export const FLOORS = {
  'grey-oak': {name: 'Light grey oak laminate', hex: '#b9b4ab', design: 'contemporary'},
  'classic-oak': {name: 'Classic oak laminate', hex: '#b88f5f', design: 'classic'}
};

// What the room is for: Oeco's own examples (garden offices, gyms, bars, craft and dance studios,
// music rooms). Sets the illustrative furniture only.
export const USES = {
  office: {name: 'Garden office', icon: 'office'},
  lounge: {name: 'Lounge or garden bar', icon: 'retreat'},
  gym: {name: 'Garden gym', icon: 'gym'},
  studio: {name: 'Hobby or craft studio', icon: 'studio'},
  library: {name: 'Reading room or study', icon: 'book'}
};

// ---- Selling points, each from Oeco's own pages ---------------------------------------------------
// Left out on purpose (CONFIRMATIONS.md): the installation time (five working days on one page,
// seven on another), the review rating (it loads from a third-party widget), the next installation
// date (it changes daily).
export const USPS = {
  since2006: {title: 'Building garden rooms since 2006', copy: 'Oeco has built garden structures in its own way since 2006.', source: 'Garden rooms page'},
  installed: {title: 'Delivered and installed', copy: 'Delivery to any UK mainland address and full installation by Oeco’s own teams are in the price.', source: 'Garden rooms page; Ready to order'},
  foundations: {title: 'No base to lay', copy: 'Concrete pile foundations with adjustable steel feet are included: the room sits clear of the ground.', source: 'Exterior specifications: concrete pile foundations'},
  plastered: {title: 'Plastered like your home', copy: 'Plasterboarded and skimmed walls and ceiling: no PVC, vinyl or melamine boards.', source: 'Interior specifications'},
  insulated: {title: 'Warm all year', copy: 'Insulated to the latest Building Regulations, with Kingspan and Knauf insulation.', source: 'Garden rooms page; Exterior specifications'},
  roof: {title: '145mm five-layer roof', copy: 'Rigid insulated roof panels with an anthracite outer skin and aluminium roof edges.', source: 'Garden rooms page: roof, wall and floor construction'},
  glazing: {title: 'A-rated double glazing', copy: 'Argon-filled Planitherm units in anthracite PVCu frames with insurance-approved locks.', source: 'Garden rooms page: door and window profiles'},
  electrics: {title: 'Electrics included', copy: 'Consumer unit, four double sockets, lighting and two outside lights, with a Part P certificate.', source: 'Garden rooms page: electrical'},
  guarantee: {title: '10-year structural guarantee', copy: 'And a minimum life span of 30 years and more.', source: 'Garden rooms page: guarantee'},
  planning: {title: 'Built for permitted development', copy: 'Designed to the 2.5m maximum height, so planning permission is not normally needed.', source: 'Garden rooms page: free site survey'},
  survey: {title: 'Free site survey', copy: 'A free, no-obligation survey, with bespoke sizes on offer.', source: 'Garden rooms page; Ready to order'},
  showroom: {title: '5,000 sq ft of showrooms', copy: 'Ten furnished garden rooms, offices and studios to walk round in Ripon.', source: 'Visit our showrooms'},
  deposit: {title: 'Refundable deposit', copy: 'A 50% deposit, fully refundable if you cancel before the installation start date.', source: 'Ready to order'},
  onsite: {title: 'Decide on site', copy: 'Choose exactly where doors, windows, sockets and switches go as the room is built.', source: 'Ready to order: totally bespoke construction'}
};

// Contact details exactly as Oeco publishes them (footer, contact and showroom pages). The
// showroom page says "Unit B & Unit 3", the footer "Unit 3": both on CONFIRMATIONS.md.
export const CONTACT = {
  phone: '0800 170 1270', tel: '+448001701270',
  email: 'sales@oecogardenrooms.co.uk',
  site: 'https://www.oecogardenrooms.co.uk',
  showroom: 'Unit 3, Charter Road, Navigation Way, Ripon Business Park, Ripon, North Yorkshire, HG4 1AJ',
  showroomShort: 'Ripon Business Park, North Yorkshire',
  hours: 'Monday to Friday, 9am to 5pm; Saturdays by appointment',
  pages: {
    product: 'https://www.oecogardenrooms.co.uk/garden-rooms.html',
    visit: 'https://www.oecogardenrooms.co.uk/visit.html',
    survey: 'https://www.oecogardenrooms.co.uk/survey.html',
    brochure: 'https://www.oecogardenrooms.co.uk/brochure.html',
    contact: 'https://www.oecogardenrooms.co.uk/contact.html',
    privacy: 'https://www.oecogardenrooms.co.uk/pages/privacy-policy.html',
    finance: 'https://www.oecogardenrooms.co.uk/pages/garden-room-finance.html'
  }
};
// Oeco sends its own brochure only after an enquiry; this guide is compiled from its website.
export const BROCHURE = '/oeco-garden-rooms-guide.pdf';
export const PRICES = CATALOGUE.prices;
