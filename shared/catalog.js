import { SIZES } from './sizes.js';
export { SIZES };
export const SHAPES = [
 {id:'cube',label:'Cube',description:'Clean lines. Beautifully simple.',image:'/assets/cube-card.webp',canopy:0},
 {id:'canopy',label:'Canopy',description:'A sheltered welcome to your room.',image:'/assets/canopy-card.webp',canopy:.5},
 {id:'corner',label:'Corner',description:'Light and views around the corner.',image:'/assets/corner-card.webp',canopy:0},
 {id:'concave',label:'Concave',description:'A recessed entrance, neatly framed.',image:'/assets/concave-card.webp',canopy:.5},
 {id:'canopy-corner',label:'Canopy Corner',description:'Wraparound light. A sheltered entrance.',image:'/assets/canopy-corner-card.webp',canopy:.5}
];
export const STYLES = [{id:'contemporary',label:'Contemporary',description:'Crisp anthracite roof and corner trims.'},{id:'classic',label:'Classic',description:'Coordinating timber trims, naturally warm.'}];
export const CLADDINGS = [{id:'thermowood',label:'Thermowood',color:'#99744f',description:'A rich, even timber tone.'},{id:'cedar',label:'Western Red Cedar',color:'#bb8255',description:'Natural variations in warm cedar.'},{id:'smoothgrain',label:'Composite Smoothgrain',color:'#7d7770',description:'A smooth contemporary finish.'},{id:'woodgrain',label:'Composite ProClad Woodgrain',color:'#857660',description:'A textured composite finish.'}];
export const DOORS = [{id:'patio',label:'Double patio',description:'Traditional double doors.'},{id:'sliding',label:'Sliding',description:'A wide view of the garden.'}];
export const WINDOWS = [{id:'none',label:'No side window'},{id:'narrow',label:'Letterbox'},{id:'wide',label:'Tall window'}];
export const USES = [{id:'office',label:'Work',description:'A place to focus.'},{id:'studio',label:'Create',description:'Room for your ideas.'},{id:'gym',label:'Move',description:'Your own fitness space.'},{id:'retreat',label:'Unwind',description:'A garden escape.'}];
export const EXTRAS = [];
export const DIMENSIONS = {minWidth:2.5,maxWidth:10,minDepth:2.5,maxDepth:5,step:.5};
export const DEFAULT_CONFIG = {shape:'canopy',width:4,depth:3,style:'contemporary',cladding:'thermowood',doors:'sliding',window:'narrow',windowSide:'right',use:'office',extras:[]};
export const shapeFor = c => SHAPES.find(s=>s.id===c.shape)||SHAPES[1];
export const nameFor = (options,id) => options.find(o=>o.id===id)?.label||id;
export const validDepths = c => [...new Set((SIZES[c.shape]||SIZES.cube).filter(([w])=>w===c.width).map(([,d])=>d))].sort((a,b)=>a-b);
export const validWidths = c => [...new Set((SIZES[c.shape]||SIZES.cube).map(([w])=>w))].sort((a,b)=>a-b);
export function normalise(value={}) {
 const c={...DEFAULT_CONFIG,extras:[]};
 for (const [key,options] of Object.entries({shape:SHAPES,style:STYLES,cladding:CLADDINGS,doors:DOORS,window:WINDOWS,use:USES})) if(options.some(o=>o.id===value[key])) c[key]=value[key];
 if(['left','right'].includes(value.windowSide)) c.windowSide=value.windowSide;
 const widths=validWidths(c),n=Number(value.width);
 c.width=widths.reduce((a,b)=>Math.abs(b-(Number.isFinite(n)?n:4))<Math.abs(a-(Number.isFinite(n)?n:4))?b:a,widths[0]);
 const depths=validDepths(c),d=Number(value.depth);
 c.depth=depths.reduce((a,b)=>Math.abs(b-(Number.isFinite(d)?d:3))<Math.abs(a-(Number.isFinite(d)?d:3))?b:a,depths[0]);
 if(c.style==='classic'&&!['cedar','thermowood'].includes(c.cladding)) c.style='contemporary';
 return c;
}
export const configKey = c => JSON.stringify(normalise(c));
export const isCorner = c => ['corner','canopy-corner'].includes(c.shape);
export function geometry(value) {
 const c=normalise(value),w=c.width,d=c.depth,h=2.15,frontZ=d/2,doorW=Math.min(c.doors==='sliding'?2.4:1.5,w-.3),doorX=isCorner(c)?w/2-doorW/2-.13:0;
 return {config:c,width:w,depth:d,height:h,floorY:.23,canopy:shapeFor(c).canopy,frontZ,doorW,doorX,corner:isCorner(c),internalWidth:w-.32,internalDepth:d-.32};
}
export function designSummary(value) { const c=normalise(value); return [['Shape',shapeFor(c).label],['External size',`${c.width.toFixed(1)} × ${c.depth.toFixed(1)}m`],['Style',nameFor(STYLES,c.style)],['Cladding',nameFor(CLADDINGS,c.cladding)],['Doors',nameFor(DOORS,c.doors)],['Side window',c.window==='none'?'None':`${nameFor(WINDOWS,c.window)} · ${c.windowSide}`],['Room use',nameFor(USES,c.use)]]; }
export function designUrl(value,origin=globalThis.location?.origin||'') {const c=normalise(value);const params=new URLSearchParams();for(const key of Object.keys(c)) if(key!=='extras') params.set(key,c[key]);return `${origin}/configurator/?${params}`;}
export function fromUrl(search) {const p=new URLSearchParams(search);return normalise(Object.fromEntries(p));}
