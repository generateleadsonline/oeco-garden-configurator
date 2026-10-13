var kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eu=0,jc=1,Tu=2;var Io=1,Pc=2,jn=3,vi=0,en=1,on=2,gi=0,xs=1,Qc=2,tl=3,el=4,Au=5,Ni=100,Ru=101,Cu=102,nl=103,il=104,Pu=200,Lu=201,Iu=202,Du=203,Na=204,Oa=205,Uu=206,Nu=207,Ou=208,Fu=209,Bu=210,ku=211,zu=212,Hu=213,Vu=214,Gu=0,Wu=1,Xu=2,jr=3,qu=4,Yu=5,$u=6,Zu=7,Lc=0,Ju=1,Ku=2,xi=0,ju=1,Qu=2,td=3,Ic=4,ed=5,nd=6,id=7;var Ih=300,Ms=301,Ss=302,Fa=303,Ba=304,Do=306,js=1e3,Rn=1001,ka=1002,Xe=1003,sl=1004;var Vs=1005;var un=1006,jo=1007;var Fi=1008;var _i=1009,sd=1010,rd=1011,Dc=1012,Dh=1013,mi=1014,Qn=1015,Qs=1016,Uh=1017,Nh=1018,ki=1020,od=1021,Cn=1023,ad=1024,cd=1025,zi=1026,bs=1027,ld=1028,Oh=1029,hd=1030,Fh=1031,Bh=1033,Qo=33776,ta=33777,ea=33778,na=33779,rl=35840,ol=35841,al=35842,cl=35843,kh=36196,ll=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,Sl=37819,bl=37820,wl=37821,ia=36492,El=36494,Tl=36495,ud=36283,Al=36284,Rl=36285,Cl=36286;var Qr=2300,to=2301,sa=2302,Pl=2400,Ll=2401,Il=2402;var dd=3200,fd=3201,Uc=0,pd=1,pi="",tn="srgb",Si="srgb-linear",Nc="display-p3",Uo="display-p3-linear",eo="linear",Ee="srgb",no="rec709",io="p3";var ji=7680;var Dl=519,md=512,gd=513,xd=514,zh=515,_d=516,yd=517,vd=518,Md=519,za=35044;var Ul="300 es",Ha=1035,ti=2e3,so=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=1234567,_s=Math.PI/180,ws=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Oc(i,t){return(i%t+t)%t}function Sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bd(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function wd(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function Ed(i,t=1){return t-Math.abs(Oc(i,t*2)-t)}function Td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cd(i,t){return i+Math.random()*(t-i)}function Pd(i){return i*(.5-Math.random())}function Ld(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(i){return i*_s}function Dd(i){return i*ws}function Va(i){return(i&i-1)===0&&i!==0}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ro(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ri={DEG2RAD:_s,RAD2DEG:ws,generateUUID:Nn,clamp:De,euclideanModulo:Oc,mapLinear:Sd,inverseLerp:bd,lerp:$s,damp:wd,pingpong:Ed,smoothstep:Td,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Pd,seededRandom:Ld,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Va,ceilPowerOfTwo:Ud,floorPowerOfTwo:ro,setQuaternionFromProperEuler:Nd,normalize:Se,denormalize:Pn},Pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],M=s[1],x=s[4],w=s[7],k=s[2],F=s[5],P=s[8];return r[0]=a*y+o*M+c*k,r[3]=a*m+o*x+c*F,r[6]=a*f+o*w+c*P,r[1]=l*y+h*M+u*k,r[4]=l*m+h*x+u*F,r[7]=l*f+h*w+u*P,r[2]=d*y+p*M+g*k,r[5]=d*m+p*x+g*F,r[8]=d*f+p*w+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new he;function Hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=oo("canvas");return i.style.display="block",i}var Ol={};function Vh(i){i in Ol||(Ol[i]=!0,console.warn(i))}var Fl=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bl=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Si]:{transfer:eo,primaries:no,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:Ee,primaries:no,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Uo]:{transfer:eo,primaries:io,toReference:i=>i.applyMatrix3(Bl),fromReference:i=>i.applyMatrix3(Fl)},[Nc]:{transfer:Ee,primaries:io,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bl),fromReference:i=>i.applyMatrix3(Fl).convertLinearToSRGB()}},Fd=new Set([Si,Uo]),be={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=br[t].toReference,s=br[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===pi?eo:br[i].transfer}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,ao=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=oo("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=oo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kd=0,dn=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=un,a=Fi,o=Cn,c=_i,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Nn(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Ih;dn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,w=(p+1)/2,k=(f+1)/2,F=(h+d)/4,P=(u+y)/4,Y=(g+m)/4;return x>w&&x>k?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=F/n,r=P/n):w>k?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=F/s,r=Y/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=P/r,s=Y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*y,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let k=Math.sqrt(x),F=Math.atan2(k,f*M);m=Math.sin(m*F)/k,o=Math.sin(o*F)/k}let w=o*M;if(c=c*m+d*w,l=l*m+p*w,h=h*m+g*w,u=u*m+y*w,m===1-o){let k=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=k,l*=k,h*=k,u*=k}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new T,kl=new Ln,cn=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Er.subVectors(this.max,Gs),ts.subVectors(t.a,Gs),es.subVectors(t.b,Gs),ns.subVectors(t.c,Gs),ci.subVectors(es,ts),li.subVectors(ns,es),Ri.subVectors(ts,ns);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!la(e,ts,es,ns,Er)||(e=[1,0,0,0,1,0,0,0,1],!la(e,ts,es,ns,Er))?!1:(Tr.crossVectors(ci,li),e=[Tr.x,Tr.y,Tr.z],la(e,ts,es,ns,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new T,new T,new T,new T,new T,new T,new T,new T],wn=new T,wr=new cn,ts=new T,es=new T,ns=new T,ci=new T,li=new T,Ri=new T,Gs=new T,Er=new T,Tr=new T,Ci=new T;function la(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zd=new cn,Ws=new T,ha=new T,ni=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(ha)),this.expandByPoint(Ws.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new T,ua=new T,Ar=new T,hi=new T,da=new T,Rr=new T,fa=new T,Es=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=hi.dot(this.direction),c=-hi.dot(Ar),l=hi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(Ar,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),Rr.subVectors(n,t),fa.crossVectors(da,Rr);let a=this.direction.dot(fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,t);let c=o*this.direction.dot(Rr.crossVectors(hi,Rr));if(c<0)return null;let l=o*this.direction.dot(da.cross(hi));if(l<0||c+l>a)return null;let h=-o*hi.dot(fa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,y=l*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,y=l*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Vd)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ui.crossVectors(n,mn),ui.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ui.crossVectors(n,mn)),ui.normalize(),Cr.crossVectors(mn,ui),s[0]=ui.x,s[4]=Cr.x,s[8]=mn.x,s[1]=ui.y,s[5]=Cr.y,s[9]=mn.y,s[2]=ui.z,s[6]=Cr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],M=n[3],x=n[7],w=n[11],k=n[15],F=s[0],P=s[4],Y=s[8],at=s[12],S=s[1],A=s[5],R=s[9],q=s[13],L=s[2],C=s[6],I=s[10],W=s[14],B=s[3],X=s[7],ct=s[11],Q=s[15];return r[0]=a*F+o*S+c*L+l*B,r[4]=a*P+o*A+c*C+l*X,r[8]=a*Y+o*R+c*I+l*ct,r[12]=a*at+o*q+c*W+l*Q,r[1]=h*F+u*S+d*L+p*B,r[5]=h*P+u*A+d*C+p*X,r[9]=h*Y+u*R+d*I+p*ct,r[13]=h*at+u*q+d*W+p*Q,r[2]=g*F+y*S+m*L+f*B,r[6]=g*P+y*A+m*C+f*X,r[10]=g*Y+y*R+m*I+f*ct,r[14]=g*at+y*q+m*W+f*Q,r[3]=M*F+x*S+w*L+k*B,r[7]=M*P+x*A+w*C+k*X,r[11]=M*Y+x*R+w*I+k*ct,r[15]=M*at+x*q+w*W+k*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],M=u*m*l-y*d*l+y*c*p-o*m*p-u*c*f+o*d*f,x=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,w=h*y*l-g*u*l+g*o*p-a*y*p-h*o*f+a*u*f,k=g*u*c-h*y*c-g*o*d+a*y*d+h*o*m-a*u*m,F=e*M+n*x+s*w+r*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/F;return t[0]=M*P,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*P,t[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*f+n*c*f)*P,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*P,t[4]=x*P,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*P,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*P,t[8]=w*P,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*P,t[10]=(a*y*r-g*o*r+g*n*l-e*y*l-a*n*f+e*o*f)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*P,t[12]=k*P,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,y=a*h,m=a*u,f=o*u,M=c*l,x=c*h,w=c*u,k=n.x,F=n.y,P=n.z;return s[0]=(1-(y+f))*k,s[1]=(p+w)*k,s[2]=(g-x)*k,s[3]=0,s[4]=(p-w)*F,s[5]=(1-(d+f))*F,s[6]=(m+M)*F,s[7]=0,s[8]=(g+x)*P,s[9]=(m-M)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=is.set(s[0],s[1],s[2]).length(),a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ti){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===ti)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===so)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ti){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,g,y;if(o===ti)g=(a+r)*u,y=-2*u;else if(o===so)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new T,En=new we,Hd=new T(0,0,0),Vd=new T(1,1,1),ui=new T,Cr=new T,mn=new T,zl=new we,Hl=new Ln,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,Vl=new T,ss=new Ln,Zn=new we,Pr=new T,Xs=new T,Wd=new T,Xd=new Ln,Gl=new T(1,0,0),Wl=new T(0,1,0),Xl=new T(0,0,1),qd={type:"added"},Yd={type:"removed"},pa={type:"childadded",child:null},ma={type:"childremoved",child:null},Ye=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new In,n=new Ln,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new he}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Xs,Pr,this.up):Zn.lookAt(Pr,Xs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Zn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qd),pa.child=t,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new T(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new T,Jn=new T,ga=new T,Kn=new T,rs=new T,os=new T,ql=new T,xa=new T,_a=new T,ya=new T,Bi=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Jn.subVectors(n,e),ga.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot(Jn),c=Tn.dot(ga),l=Jn.dot(Jn),h=Jn.dot(ga),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),os.subVectors(r,n),xa.subVectors(t,n);let c=rs.dot(xa),l=os.dot(xa);if(c<=0&&l<=0)return e.copy(n);_a.subVectors(t,s);let h=rs.dot(_a),u=os.dot(_a);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(rs,a);ya.subVectors(t,r);let p=rs.dot(ya),g=os.dot(ya);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(os,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ql.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ql,o);let f=1/(m+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(rs,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Oc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=va(a,r,t+1/3),this.g=va(a,r,t),this.b=va(a,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return be.fromWorkingColorSpace(Qe.copy(this),t),Math.round(De(Qe.r*255,0,255))*65536+Math.round(De(Qe.g*255,0,255))*256+Math.round(De(Qe.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=tn){be.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Lr);let n=$s(di.h,Lr.h,e),s=$s(di.s,Lr.s,e),r=$s(di.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new ne;ne.NAMES=Gh;var $d=0,Mi=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=xs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ts=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new T,Ir=new Pt,an=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Vh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}};var ho=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zd=0,yn=new we,Ma=new Ye,as=new T,gn=new cn,qs=new cn,He=new T,Oe=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?uo:ho)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(gn.min,qs.min),gn.expandByPoint(He),He.addVectors(gn.max,qs.max),gn.expandByPoint(He)):(gn.expandByPoint(qs.min),gn.expandByPoint(qs.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)He.fromBufferAttribute(o,l),c&&(as.fromBufferAttribute(t,l),He.add(as)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let Y=0;Y<n.count;Y++)o[Y]=new T,c[Y]=new T;let l=new T,h=new T,u=new T,d=new Pt,p=new Pt,g=new Pt,y=new T,m=new T;function f(Y,at,S){l.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,at),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,Y),p.fromBufferAttribute(r,at),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[Y].add(y),o[at].add(y),o[S].add(y),c[Y].add(m),c[at].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let Y=0,at=M.length;Y<at;++Y){let S=M[Y],A=S.start,R=S.count;for(let q=A,L=A+R;q<L;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let x=new T,w=new T,k=new T,F=new T;function P(Y){k.fromBufferAttribute(s,Y),F.copy(k);let at=o[Y];x.copy(at),x.sub(k.multiplyScalar(k.dot(at))).normalize(),w.crossVectors(F,at);let A=w.dot(c[Y])<0?-1:1;a.setXYZW(Y,x.x,x.y,x.z,A)}for(let Y=0,at=M.length;Y<at;++Y){let S=M[Y],A=S.start,R=S.count;for(let q=A,L=A+R;q<L;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yl=new we,Pi=new Es,Dr=new ni,$l=new T,cs=new T,ls=new T,hs=new T,Sa=new T,Ur=new T,Nr=new Pt,Or=new Pt,Fr=new Pt,Zl=new T,Jl=new T,Kl=new T,Br=new T,kr=new T,de=class extends Ye{constructor(t=new Oe,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),a?Ur.addScaledVector(Sa,h):Ur.addScaledVector(Sa.sub(e),h))}e.add(Ur)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Dr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Dr,$l)===null||Pi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,k=x;w<k;w+=3){let F=o.getX(w),P=o.getX(w+1),Y=o.getX(w+2);s=zr(this,f,t,n,l,h,u,F,P,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);s=zr(this,a,t,n,l,h,u,M,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,k=x;w<k;w+=3){let F=w,P=w+1,Y=w+2;s=zr(this,f,t,n,l,h,u,F,P,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=m,x=m+1,w=m+2;s=zr(this,a,t,n,l,h,u,M,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===vi,o),c===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:i}}function zr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,cs),i.getVertexPosition(c,ls),i.getVertexPosition(l,hs);let h=Jd(i,t,e,n,cs,ls,hs,Br);if(h){s&&(Nr.fromBufferAttribute(s,o),Or.fromBufferAttribute(s,c),Fr.fromBufferAttribute(s,l),h.uv=Bi.getInterpolation(Br,cs,ls,hs,Nr,Or,Fr,new Pt)),r&&(Nr.fromBufferAttribute(r,o),Or.fromBufferAttribute(r,c),Fr.fromBufferAttribute(r,l),h.uv1=Bi.getInterpolation(Br,cs,ls,hs,Nr,Or,Fr,new Pt)),a&&(Zl.fromBufferAttribute(a,o),Jl.fromBufferAttribute(a,c),Kl.fromBufferAttribute(a,l),h.normal=Bi.getInterpolation(Br,cs,ls,hs,Zl,Jl,Kl,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};Bi.getNormal(cs,ls,hs,u.normal),h.face=u}return h}var Fe=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(y,m,f,M,x,w,k,F,P,Y,at){let S=w/P,A=k/Y,R=w/2,q=k/2,L=F/2,C=P+1,I=Y+1,W=0,B=0,X=new T;for(let ct=0;ct<I;ct++){let Q=ct*A-q;for(let tt=0;tt<C;tt++){let lt=tt*S-R;X[y]=lt*M,X[m]=Q*x,X[f]=L,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=F>0?1:-1,h.push(X.x,X.y,X.z),u.push(tt/P),u.push(1-ct/Y),W+=1}}for(let ct=0;ct<Y;ct++)for(let Q=0;Q<P;Q++){let tt=d+Q+C*ct,lt=d+Q+C*(ct+1),H=d+(Q+1)+C*(ct+1),st=d+(Q+1)+C*ct;c.push(tt,lt,st),c.push(lt,H,st),B+=6}o.addGroup(p,B,at),p+=B,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Kd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){return i.getRenderTarget()===null?i.outputColorSpace:be.workingColorSpace}var No={clone:As,merge:sn},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new T,jl=new Pt,Ql=new Pt,Ve=class extends fo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Ql),e.subVectors(Ql,jl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,Xa=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Ve(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new Ve(us,ds,t,e);a.layers=this.layers,this.add(a);let o=new Ve(us,ds,t,e);o.layers=this.layers,this.add(o);let c=new Ve(us,ds,t,e);c.layers=this.layers,this.add(c);let l=new Ve(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends dn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qa=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fe(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:gi});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=un),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ba=new T,tf=new T,ef=new he,An=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ba.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new ni,Hr=new T,er=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],M=s[13],x=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,m-p,w-f).normalize(),n[1].setComponents(c+r,d+l,m+p,w+f).normalize(),n[2].setComponents(c+a,d+h,m+g,w+M).normalize(),n[3].setComponents(c-a,d-h,m-g,w-M).normalize(),n[4].setComponents(c-o,d-u,m-y,w-x).normalize(),e===ti)n[5].setComponents(c+o,d+u,m+y,w+x).normalize();else if(e===so)n[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let f=g[y];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Fn=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let M=f*d-a;for(let x=0;x<l;x++){let w=x*u-r;g.push(w,-M,0),y.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let x=M+l*f,w=M+l*(f+1),k=M+1+l*(f+1),F=M+1+l*f;p.push(x,w,F),p.push(w,k,F)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:cf,alphatest_pars_fragment:lf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:xf,bumpmap_pars_fragment:_f,clipping_planes_fragment:yf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:Sf,color_fragment:bf,color_pars_fragment:wf,color_pars_vertex:Ef,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:If,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Of,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:zf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:xp,morphcolor_vertex:_p,morphnormal_vertex:yp,morphtarget_pars_vertex:vp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:wp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Op,dithering_pars_fragment:Fp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:$p,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Kp,transmission_fragment:jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:cm,cube_frag:lm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:xm,meshbasic_vert:_m,meshbasic_frag:ym,meshlambert_vert:vm,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Im,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Fm},Wt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},rn={basic:{uniforms:sn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:sn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:sn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:sn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:sn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:sn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:sn([Wt.points,Wt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:sn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:sn([Wt.common,Wt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:sn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:sn([Wt.sprite,Wt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:sn([Wt.common,Wt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:sn([Wt.lights,Wt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};rn.physical={uniforms:sn([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Vr={r:0,b:0,g:0},Ii=new In,Bm=new we;function km(i,t,e,n,s,r,a){let o=new ne(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let M=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,c):x&&x.isColor&&(y(x,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Do)?(h===void 0&&(h=new de(new Fe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:As(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(f.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Ii)),h.material.toneMapped=be.getTransfer(x.colorSpace)!==Ee,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new de(new Fn(2,2),new vn({name:"BackgroundMaterial",uniforms:As(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=be.getTransfer(x.colorSpace)!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,f){m.getRGB(Vr,Wh(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(o,c)},render:g}}function zm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(L,C,I,W,B){let X=!1;if(a){let ct=y(W,I,C);l!==ct&&(l=ct,p(l.object)),X=f(L,W,I,B),X&&M(L,W,I,B)}else{let ct=C.wireframe===!0;(l.geometry!==W.id||l.program!==I.id||l.wireframe!==ct)&&(l.geometry=W.id,l.program=I.id,l.wireframe=ct,X=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,Y(L,C,I,W),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,C,I){let W=I.wireframe===!0,B=o[L.id];B===void 0&&(B={},o[L.id]=B);let X=B[C.id];X===void 0&&(X={},B[C.id]=X);let ct=X[W];return ct===void 0&&(ct=m(d()),X[W]=ct),ct}function m(L){let C=[],I=[],W=[];for(let B=0;B<s;B++)C[B]=0,I[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:W,object:L,attributes:{},index:null}}function f(L,C,I,W){let B=l.attributes,X=C.attributes,ct=0,Q=I.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let H=B[tt],st=X[tt];if(st===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),H===void 0||H.attribute!==st||st&&H.data!==st.data)return!0;ct++}return l.attributesNum!==ct||l.index!==W}function M(L,C,I,W){let B={},X=C.attributes,ct=0,Q=I.getAttributes();for(let tt in Q)if(Q[tt].location>=0){let H=X[tt];H===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));let st={};st.attribute=H,H&&H.data&&(st.data=H.data),B[tt]=st,ct++}l.attributes=B,l.attributesNum=ct,l.index=W}function x(){let L=l.newAttributes;for(let C=0,I=L.length;C<I;C++)L[C]=0}function w(L){k(L,0)}function k(L,C){let I=l.newAttributes,W=l.enabledAttributes,B=l.attributeDivisors;I[L]=1,W[L]===0&&(i.enableVertexAttribArray(L),W[L]=1),B[L]!==C&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,C),B[L]=C)}function F(){let L=l.newAttributes,C=l.enabledAttributes;for(let I=0,W=C.length;I<W;I++)C[I]!==L[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function P(L,C,I,W,B,X,ct){ct===!0?i.vertexAttribIPointer(L,C,I,B,X):i.vertexAttribPointer(L,C,I,W,B,X)}function Y(L,C,I,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let B=W.attributes,X=I.getAttributes(),ct=C.defaultAttributeValues;for(let Q in X){let tt=X[Q];if(tt.location>=0){let lt=B[Q];if(lt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),lt!==void 0){let H=lt.normalized,st=lt.itemSize,mt=e.get(lt);if(mt===void 0)continue;let Tt=mt.buffer,At=mt.type,ut=mt.bytesPerElement,Ot=n.isWebGL2===!0&&(At===i.INT||At===i.UNSIGNED_INT||lt.gpuType===Dh);if(lt.isInterleavedBufferAttribute){let Ht=lt.data,D=Ht.stride,bt=lt.offset;if(Ht.isInstancedInterleavedBuffer){for(let pt=0;pt<tt.locationSize;pt++)k(tt.location+pt,Ht.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let pt=0;pt<tt.locationSize;pt++)w(tt.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let pt=0;pt<tt.locationSize;pt++)P(tt.location+pt,st/tt.locationSize,At,H,D*ut,(bt+st/tt.locationSize*pt)*ut,Ot)}else{if(lt.isInstancedBufferAttribute){for(let Ht=0;Ht<tt.locationSize;Ht++)k(tt.location+Ht,lt.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<tt.locationSize;Ht++)w(tt.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Ht=0;Ht<tt.locationSize;Ht++)P(tt.location+Ht,st/tt.locationSize,At,H,st*ut,st/tt.locationSize*Ht*ut,Ot)}}else if(ct!==void 0){let H=ct[Q];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(tt.location,H);break;case 3:i.vertexAttrib3fv(tt.location,H);break;case 4:i.vertexAttrib4fv(tt.location,H);break;default:i.vertexAttrib1fv(tt.location,H)}}}}F()}function at(){R();for(let L in o){let C=o[L];for(let I in C){let W=C[I];for(let B in W)g(W[B].object),delete W[B];delete C[I]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;let C=o[L.id];for(let I in C){let W=C[I];for(let B in W)g(W[B].object),delete W[B];delete C[I]}delete o[L.id]}function A(L){for(let C in o){let I=o[C];if(I[L.id]===void 0)continue;let W=I[L.id];for(let B in W)g(W[B].object),delete W[B];delete I[L.id]}}function R(){q(),h=!0,l!==c&&(l=c,p(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:R,resetDefaultState:q,dispose:at,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:w,disableUnusedAttributes:F}}function Hm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Vm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=a||t.has("OES_texture_float"),k=x&&w,F=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:k,maxSamples:F}}function Gm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new An,o=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,x=M*4,w=f.clippingState||null;c.value=w,w=h(g,d,x,p);for(let k=0;k!==x;++k)w[k]=e[k];f.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,w=p;x!==y;++x,w+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Wm(i){let t=new WeakMap;function e(a,o){return o===Fa?a.mapping=Ms:o===Ba&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fa||o===Ba)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new qa(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var mo=class extends fo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,th=[.125,.215,.35,.446,.526,.582],Oi=20,wa=new mo,eh=new ne,Ea=null,Ta=0,Aa=0,Ui=(1+Math.sqrt(5))/2,fs=1/Ui,nh=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Ui,fs),new T(0,Ui,-fs),new T(fs,0,Ui),new T(-fs,0,Ui),new T(Ui,fs,0),new T(-Ui,fs,0)],Rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,Ta,Aa),t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Qs,format:Cn,colorSpace:Si,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=qm(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(eh),h.toneMapping=xi,h.autoClear=!1;let p=new Ts({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new de(new Fe,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(eh),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let x=this._cubeSize;Gr(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ms||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nh[(s-1)%nh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let f=[],M=0;for(let P=0;P<Oi;++P){let Y=P/y,at=Math.exp(-Y*Y/2);f.push(at),P===0?M+=at:P<m&&(M+=2*at)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let w=this._sizeLods[s],k=3*w*(s>x-ps?s-x+ps:0),F=4*(this._cubeSize-w);Gr(e,k,F,3*w,2*w),c.setRenderTarget(e),c.render(u,wa)}};function Xm(i){let t=[],e=[],n=[],s=i,r=i-ps+1+th.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ps?c=th[a-i+ps-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,M=new Float32Array(y*g*p),x=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let F=0;F<p;F++){let P=F%3*2/3-1,Y=F>2?0:-1,at=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];M.set(at,y*g*F),x.set(d,m*g*F);let S=[F,F,F,F,F,F];w.set(S,f*g*F)}let k=new Oe;k.setAttribute("position",new an(M,y)),k.setAttribute("uv",new an(x,m)),k.setAttribute("faceIndex",new an(w,f)),t.push(k),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qm(i,t,e){let n=new Float32Array(Oi),s=new T(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function sh(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rh(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ym(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fa||c===Ba,h=c===Ms||c===Ss;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Rs(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Rs(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $m(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let x=0,w=M.length;x<w;x+=3){let k=M[x+0],F=M[x+1],P=M[x+2];d.push(k,F,F,P,P,k)}}else if(g!==void 0){let M=g.array;y=g.version;for(let x=0,w=M.length/3-1;x<w;x+=3){let k=x+0,F=x+1,P=x+2;d.push(k,F,F,P,P,k)}}else return;let m=new(Hh(d)?uo:ho)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Jm(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*c),e.update(g,r,1)}function u(p,g,y){if(y===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*c,y),e.update(g,r,y)}function d(p,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let f=0;for(let M=0;M<y;M++)f+=g[M];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,t){return i[0]-t[0]}function Qm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function t0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new _e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==g){let R=function(){S.dispose(),r.delete(h),h.removeEventListener("dispose",R)};y!==void 0&&y.texture.dispose();let m=h.morphAttributes.position!==void 0,f=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],k=h.morphAttributes.color||[],F=0;m===!0&&(F=1),f===!0&&(F=2),M===!0&&(F=3);let P=h.attributes.position.count*F,Y=1;P>t.maxTextureSize&&(Y=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let at=new Float32Array(P*Y*4*g),S=new lo(at,P,Y,g);S.type=Qn,S.needsUpdate=!0;let A=F*4;for(let q=0;q<g;q++){let L=x[q],C=w[q],I=k[q],W=P*Y*4*q;for(let B=0;B<L.count;B++){let X=B*A;m===!0&&(a.fromBufferAttribute(L,B),at[W+X+0]=a.x,at[W+X+1]=a.y,at[W+X+2]=a.z,at[W+X+3]=0),f===!0&&(a.fromBufferAttribute(C,B),at[W+X+4]=a.x,at[W+X+5]=a.y,at[W+X+6]=a.z,at[W+X+7]=0),M===!0&&(a.fromBufferAttribute(I,B),at[W+X+8]=a.x,at[W+X+9]=a.y,at[W+X+10]=a.z,at[W+X+11]=I.itemSize===4?a.w:1)}}y={count:g,texture:S,size:new Pt(P,Y)},r.set(h,y),h.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let w=g[x];w[0]=x,w[1]=d[x]}g.sort(Qm);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(jm);let y=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let w=o[x],k=w[0],F=w[1];k!==Number.MAX_SAFE_INTEGER&&F?(y&&h.getAttribute("morphTarget"+x)!==y[k]&&h.setAttribute("morphTarget"+x,y[k]),m&&h.getAttribute("morphNormal"+x)!==m[k]&&h.setAttribute("morphNormal"+x,m[k]),s[x]=F,f+=F):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function e0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var go=class extends dn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:zi,h!==zi&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=mi),n===void 0&&h===bs&&(n=ki),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qh=new dn,Yh=new go(1,1);Yh.compareFunction=zh;var $h=new lo,Zh=new Wa,Jh=new po,oh=[],ah=[],ch=new Float32Array(16),lh=new Float32Array(9),hh=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function o0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),ke(e,n)}}function a0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),ke(e,n)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),ke(e,n)}}function l0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function f0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yh:qh;e.setTexture2D(t||r,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function M0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return v0}}function S0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function T0(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A0(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function U0(i,t){i.uniform2uiv(this.addr,t)}function N0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function F0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qh,r[a])}function B0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zh,r[a])}function k0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jh,r[a])}function z0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$h,r[a])}function H0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return z0}}var Ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}},$a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}},Za=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ra=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function V0(i,t,e){let n=i.name,s=n.length;for(Ra.lastIndex=0;;){let r=Ra.exec(n),a=Ra.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){uh(e,l===void 0?new Ya(o,i,t):new $a(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Za(o),uh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);V0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var G0=37297,W0=0;function X0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function q0(i){let t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(i),n;switch(t===e?n="":t===io&&e===no?n="LinearDisplayP3ToLinearSRGB":t===no&&e===io&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case Uo:return[n,"LinearTransferOETF"];case tn:case Nc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+X0(i.getShaderSource(t),a)}else return s}function Y0(i,t){let e=q0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $0(i,t){let e;switch(t){case ju:e="Linear";break;case Qu:e="Reinhard";break;case td:e="OptimizedCineon";break;case Ic:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function K0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function ph(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Q0,eg)}var tg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eg(i,t){let e=le[t];if(e===void 0){let n=tg.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(ng,ig)}function ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function og(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(t="ENVMAP_MODE_REFRACTION"),t}function ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function cg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=sg(e),l=rg(e),h=og(e),u=ag(e),d=cg(e),p=e.isWebGL2?"":Z0(e),g=J0(e),y=K0(r),m=s.createProgram(),f,M,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ms).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ms).join(`
`),M.length>0&&(M+=`
`)):(f=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),M=[p,xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?le.tonemapping_pars_fragment:"",e.toneMapping!==xi?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Ja(a),a=ph(a,e),a=mh(a,e),o=Ja(o),o=ph(o,e),o=mh(o,e),a=gh(a),o=gh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=x+f+a,k=x+M+o,F=dh(s,s.VERTEX_SHADER,w),P=dh(s,s.FRAGMENT_SHADER,k);s.attachShader(m,F),s.attachShader(m,P),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Y(R){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(F).trim(),C=s.getShaderInfoLog(P).trim(),I=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,F,P);else{let B=fh(s,F,"vertex"),X=fh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+B+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||C==="")&&(W=!1);W&&(R.diagnostics={runnable:I,programLog:q,vertexShader:{log:L,prefix:f},fragmentShader:{log:C,prefix:M}})}s.deleteShader(F),s.deleteShader(P),at=new vs(s,m),S=j0(s,m)}let at;this.getUniforms=function(){return at===void 0&&Y(this),at};let S;this.getAttributes=function(){return S===void 0&&Y(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(m,G0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=F,this.fragmentShader=P,this}var hg=0,Ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ja(t),e.set(t,n)),n}},ja=class{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}};function ug(i,t,e,n,s,r,a){let o=new tr,c=new Ka,l=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function f(S,A,R,q,L){let C=q.fog,I=L.geometry,W=S.isMeshStandardMaterial?q.environment:null,B=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=B&&B.mapping===Do?B.image.height:null,ct=y[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=Q!==void 0?Q.length:0,lt=0;I.morphAttributes.position!==void 0&&(lt=1),I.morphAttributes.normal!==void 0&&(lt=2),I.morphAttributes.color!==void 0&&(lt=3);let H,st,mt,Tt;if(ct){let ee=rn[ct];H=ee.vertexShader,st=ee.fragmentShader}else H=S.vertexShader,st=S.fragmentShader,c.update(S),mt=c.getVertexShaderID(S),Tt=c.getFragmentShaderID(S);let At=i.getRenderTarget(),ut=L.isInstancedMesh===!0,Ot=L.isBatchedMesh===!0,Ht=!!S.map,D=!!S.matcap,bt=!!B,pt=!!S.aoMap,Rt=!!S.lightMap,gt=!!S.bumpMap,Mt=!!S.normalMap,_t=!!S.displacementMap,It=!!S.emissiveMap,te=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,ot=S.clearcoat>0,ft=S.iridescence>0,wt=S.sheen>0,yt=S.transmission>0,Xt=v&&!!S.anisotropyMap,Zt=ot&&!!S.clearcoatMap,Bt=ot&&!!S.clearcoatNormalMap,Gt=ot&&!!S.clearcoatRoughnessMap,Qt=ft&&!!S.iridescenceMap,Nt=ft&&!!S.iridescenceThicknessMap,Me=wt&&!!S.sheenColorMap,K=wt&&!!S.sheenRoughnessMap,nt=!!S.specularMap,Z=!!S.specularColorMap,it=!!S.specularIntensityMap,b=yt&&!!S.transmissionMap,J=yt&&!!S.thicknessMap,xt=!!S.gradientMap,U=!!S.alphaMap,Et=S.alphaTest>0,et=!!S.alphaHash,Lt=!!S.extensions,qt=xi;S.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(qt=i.toneMapping);let ie={isWebGL2:u,shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:st,defines:S.defines,customVertexShaderID:mt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ot,instancing:ut,instancingColor:ut&&L.instanceColor!==null,instancingMorph:ut&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Si,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:D,envMap:bt,envMapMode:bt&&B.mapping,envMapCubeUVHeight:X,aoMap:pt,lightMap:Rt,bumpMap:gt,normalMap:Mt,displacementMap:p&&_t,emissiveMap:It,normalMapObjectSpace:Mt&&S.normalMapType===pd,normalMapTangentSpace:Mt&&S.normalMapType===Uc,metalnessMap:te,roughnessMap:E,anisotropy:v,anisotropyMap:Xt,clearcoat:ot,clearcoatMap:Zt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Gt,iridescence:ft,iridescenceMap:Qt,iridescenceThicknessMap:Nt,sheen:wt,sheenColorMap:Me,sheenRoughnessMap:K,specularMap:nt,specularColorMap:Z,specularIntensityMap:it,transmission:yt,transmissionMap:b,thicknessMap:J,gradientMap:xt,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:U,alphaTest:Et,alphaHash:et,combine:S.combine,mapUv:Ht&&m(S.map.channel),aoMapUv:pt&&m(S.aoMap.channel),lightMapUv:Rt&&m(S.lightMap.channel),bumpMapUv:gt&&m(S.bumpMap.channel),normalMapUv:Mt&&m(S.normalMap.channel),displacementMapUv:_t&&m(S.displacementMap.channel),emissiveMapUv:It&&m(S.emissiveMap.channel),metalnessMapUv:te&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:Xt&&m(S.anisotropyMap.channel),clearcoatMapUv:Zt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(S.sheenRoughnessMap.channel),specularMapUv:nt&&m(S.specularMap.channel),specularColorMapUv:Z&&m(S.specularColorMap.channel),specularIntensityMapUv:it&&m(S.specularIntensityMap.channel),transmissionMapUv:b&&m(S.transmissionMap.channel),thicknessMapUv:J&&m(S.thicknessMap.channel),alphaMapUv:U&&m(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Mt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ht||U),fog:!!C,useFog:S.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&be.getTransfer(S.map.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Lt&&S.extensions.derivatives===!0,extensionFragDepth:Lt&&S.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function M(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)A.push(R),A.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(A,S),w(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function w(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),S.push(o.mask)}function k(S){let A=y[S.type],R;if(A){let q=rn[A];R=No.clone(q.uniforms)}else R=S.uniforms;return R}function F(S,A){let R;for(let q=0,L=h.length;q<L;q++){let C=h[q];if(C.cacheKey===A){R=C,++R.usedTimes;break}}return R===void 0&&(R=new lg(i,A,S,r),h.push(R)),R}function P(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function Y(S){c.remove(S)}function at(){c.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:k,acquireProgram:F,releaseProgram:P,releaseShaderCache:Y,programs:h,dispose:at}}function dg(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function o(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(d||_h),s.length>1&&s.sort(d||_h)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function pg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new yh,i.set(n,[a])):s>=r.length?(a=new yh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new ne};break;case"SpotLight":e={position:new T,direction:new T,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xg=0;function _g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yg(i,t){let e=new mg,n=gg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new T);let r=new T,a=new we,o=new we;function c(h,u){let d=0,p=0,g=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,m=0,f=0,M=0,x=0,w=0,k=0,F=0,P=0,Y=0,at=0;h.sort(_g);let S=u===!0?Math.PI:1;for(let R=0,q=h.length;R<q;R++){let L=h[R],C=L.color,I=L.intensity,W=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=C.r*I*S,p+=C.g*I*S,g+=C.b*I*S;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],I);at++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let ct=L.shadow,Q=n.get(L);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=B,s.directionalShadowMatrix[y]=L.shadow.matrix,w++}s.directional[y]=X,y++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(C).multiplyScalar(I*S),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[f]=X;let ct=L.shadow;if(L.map&&(s.spotLightMap[P]=L.map,P++,ct.updateMatrices(L),L.castShadow&&Y++),s.spotLightMatrix[f]=ct.matrix,L.castShadow){let Q=n.get(L);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,s.spotShadow[f]=Q,s.spotShadowMap[f]=B,F++}f++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(C).multiplyScalar(I),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=X,M++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),X.distance=L.distance,X.decay=L.decay,L.castShadow){let ct=L.shadow,Q=n.get(L);Q.shadowBias=ct.bias,Q.shadowNormalBias=ct.normalBias,Q.shadowRadius=ct.radius,Q.shadowMapSize=ct.mapSize,Q.shadowCameraNear=ct.camera.near,Q.shadowCameraFar=ct.camera.far,s.pointShadow[m]=Q,s.pointShadowMap[m]=B,s.pointShadowMatrix[m]=L.shadow.matrix,k++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(I*S),X.groundColor.copy(L.groundColor).multiplyScalar(I*S),s.hemi[x]=X,x++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let A=s.hash;(A.directionalLength!==y||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==M||A.hemiLength!==x||A.numDirectionalShadows!==w||A.numPointShadows!==k||A.numSpotShadows!==F||A.numSpotMaps!==P||A.numLightProbes!==at)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=F+P-Y,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=at,A.directionalLength=y,A.pointLength=m,A.spotLength=f,A.rectAreaLength=M,A.hemiLength=x,A.numDirectionalShadows=w,A.numPointShadows=k,A.numSpotShadows=F,A.numSpotMaps=P,A.numLightProbes=at,s.version=xg++)}function l(h,u){let d=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let w=h[M];if(w.isDirectionalLight){let k=s.directional[d];k.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),k.direction.sub(r),k.direction.transformDirection(f),d++}else if(w.isSpotLight){let k=s.spot[g];k.position.setFromMatrixPosition(w.matrixWorld),k.position.applyMatrix4(f),k.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),k.direction.sub(r),k.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let k=s.rectArea[y];k.position.setFromMatrixPosition(w.matrixWorld),k.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),k.halfWidth.applyMatrix4(o),k.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let k=s.point[p];k.position.setFromMatrixPosition(w.matrixWorld),k.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){let k=s.hemi[m];k.direction.setFromMatrixPosition(w.matrixWorld),k.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function vh(i,t){let e=new yg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function vg(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new vh(i,t),e.set(r,[c])):a>=o.length?(c=new vh(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Qa=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(i,t,e){let n=new er,s=new Pt,r=new Pt,a=new _e,o=new Qa({depthPacking:fd}),c=new tc,l={},h=e.maxTextureSize,u={[vi]:en,[en]:vi,[on]:on},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(F,P,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;let at=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(gi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let q=f!==jn&&this.type===jn,L=f===jn&&this.type!==jn;for(let C=0,I=F.length;C<I;C++){let W=F[C],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();if(s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y)),B.map===null||q===!0||L===!0){let Q=this.type!==jn?{minFilter:Xe,magFilter:Xe}:{};B.map!==null&&B.map.dispose(),B.map=new ei(s.x,s.y,Q),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let ct=B.getViewportCount();for(let Q=0;Q<ct;Q++){let tt=B.getViewport(Q);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),R.viewport(a),B.updateMatrices(W,Q),n=B.getFrustum(),w(P,Y,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&M(B,Y),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(at,S,A)};function M(F,P){let Y=t.update(y);d.defines.VSM_SAMPLES!==F.blurSamples&&(d.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=F.map.texture,d.uniforms.resolution.value=F.mapSize,d.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(P,null,Y,d,y,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(P,null,Y,p,y,null)}function x(F,P,Y,at){let S=null,A=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(A!==void 0)S=A;else if(S=Y.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let R=S.uuid,q=P.uuid,L=l[R];L===void 0&&(L={},l[R]=L);let C=L[q];C===void 0&&(C=S.clone(),L[q]=C,P.addEventListener("dispose",k)),S=C}if(S.visible=P.visible,S.wireframe=P.wireframe,at===jn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,Y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let R=i.properties.get(S);R.light=Y}return S}function w(F,P,Y,at,S){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&S===jn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);let q=t.update(F),L=F.material;if(Array.isArray(L)){let C=q.groups;for(let I=0,W=C.length;I<W;I++){let B=C[I],X=L[B.materialIndex];if(X&&X.visible){let ct=x(F,X,at,S);F.onBeforeShadow(i,F,P,Y,q,ct,B),i.renderBufferDirect(Y,null,q,ct,F,B),F.onAfterShadow(i,F,P,Y,q,ct,B)}}}else if(L.visible){let C=x(F,L,at,S);F.onBeforeShadow(i,F,P,Y,q,C,null),i.renderBufferDirect(Y,null,q,C,F,null),F.onAfterShadow(i,F,P,Y,q,C,null)}}let R=F.children;for(let q=0,L=R.length;q<L;q++)w(R[q],P,Y,at,S)}function k(F){F.target.removeEventListener("dispose",k);for(let Y in l){let at=l[Y],S=F.target.uuid;S in at&&(at[S].dispose(),delete at[S])}}}function wg(i,t,e){let n=e.isWebGL2;function s(){let U=!1,Et=new _e,et=null,Lt=new _e(0,0,0,0);return{setMask:function(qt){et!==qt&&!U&&(i.colorMask(qt,qt,qt,qt),et=qt)},setLocked:function(qt){U=qt},setClear:function(qt,ie,ee,oe,pe){pe===!0&&(qt*=oe,ie*=oe,ee*=oe),Et.set(qt,ie,ee,oe),Lt.equals(Et)===!1&&(i.clearColor(qt,ie,ee,oe),Lt.copy(Et))},reset:function(){U=!1,et=null,Lt.set(-1,0,0,0)}}}function r(){let U=!1,Et=null,et=null,Lt=null;return{setTest:function(qt){qt?ut(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(qt){Et!==qt&&!U&&(i.depthMask(qt),Et=qt)},setFunc:function(qt){if(et!==qt){switch(qt){case Gu:i.depthFunc(i.NEVER);break;case Wu:i.depthFunc(i.ALWAYS);break;case Xu:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case qu:i.depthFunc(i.EQUAL);break;case Yu:i.depthFunc(i.GEQUAL);break;case $u:i.depthFunc(i.GREATER);break;case Zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=qt}},setLocked:function(qt){U=qt},setClear:function(qt){Lt!==qt&&(i.clearDepth(qt),Lt=qt)},reset:function(){U=!1,Et=null,et=null,Lt=null}}}function a(){let U=!1,Et=null,et=null,Lt=null,qt=null,ie=null,ee=null,oe=null,pe=null;return{setTest:function(ae){U||(ae?ut(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ae){Et!==ae&&!U&&(i.stencilMask(ae),Et=ae)},setFunc:function(ae,rt,dt){(et!==ae||Lt!==rt||qt!==dt)&&(i.stencilFunc(ae,rt,dt),et=ae,Lt=rt,qt=dt)},setOp:function(ae,rt,dt){(ie!==ae||ee!==rt||oe!==dt)&&(i.stencilOp(ae,rt,dt),ie=ae,ee=rt,oe=dt)},setLocked:function(ae){U=ae},setClear:function(ae){pe!==ae&&(i.clearStencil(ae),pe=ae)},reset:function(){U=!1,Et=null,et=null,Lt=null,qt=null,ie=null,ee=null,oe=null,pe=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,y=[],m=null,f=!1,M=null,x=null,w=null,k=null,F=null,P=null,Y=null,at=new ne(0,0,0),S=0,A=!1,R=null,q=null,L=null,C=null,I=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ct)[1]),B=X>=1):ct.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),B=X>=2);let Q=null,tt={},lt=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),st=new _e().fromArray(lt),mt=new _e().fromArray(H);function Tt(U,Et,et,Lt){let qt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<et;ee++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(Et,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,qt):i.texImage2D(Et+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qt);return ie}let At={};At[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ut(i.DEPTH_TEST),c.setFunc(jr),_t(!1),It(jc),ut(i.CULL_FACE),gt(gi);function ut(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Ot(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Ht(U,Et){return p[U]!==Et?(i.bindFramebuffer(U,Et),p[U]=Et,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Et),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Et)),!0):!1}function D(U,Et){let et=y,Lt=!1;if(U){et=g.get(Et),et===void 0&&(et=[],g.set(Et,et));let qt=U.textures;if(et.length!==qt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,ee=qt.length;ie<ee;ie++)et[ie]=i.COLOR_ATTACHMENT0+ie;et.length=qt.length,Lt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,Lt=!0);if(Lt)if(e.isWebGL2)i.drawBuffers(et);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function bt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let pt={[Ni]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};if(n)pt[nl]=i.MIN,pt[il]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(pt[nl]=U.MIN_EXT,pt[il]=U.MAX_EXT)}let Rt={[Pu]:i.ZERO,[Lu]:i.ONE,[Iu]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(U,Et,et,Lt,qt,ie,ee,oe,pe,ae){if(U===gi){f===!0&&(Ot(i.BLEND),f=!1);return}if(f===!1&&(ut(i.BLEND),f=!0),U!==Au){if(U!==M||ae!==A){if((x!==Ni||F!==Ni)&&(i.blendEquation(i.FUNC_ADD),x=Ni,F=Ni),ae)switch(U){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,k=null,P=null,Y=null,at.set(0,0,0),S=0,M=U,A=ae}return}qt=qt||Et,ie=ie||et,ee=ee||Lt,(Et!==x||qt!==F)&&(i.blendEquationSeparate(pt[Et],pt[qt]),x=Et,F=qt),(et!==w||Lt!==k||ie!==P||ee!==Y)&&(i.blendFuncSeparate(Rt[et],Rt[Lt],Rt[ie],Rt[ee]),w=et,k=Lt,P=ie,Y=ee),(oe.equals(at)===!1||pe!==S)&&(i.blendColor(oe.r,oe.g,oe.b,pe),at.copy(oe),S=pe),M=U,A=!1}function Mt(U,Et){U.side===on?Ot(i.CULL_FACE):ut(i.CULL_FACE);let et=U.side===en;Et&&(et=!et),_t(et),U.blending===xs&&U.transparent===!1?gt(gi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let Lt=U.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),E(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(U){R!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),R=U)}function It(U){U!==Eu?(ut(i.CULL_FACE),U!==q&&(U===jc?i.cullFace(i.BACK):U===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),q=U}function te(U){U!==L&&(B&&i.lineWidth(U),L=U)}function E(U,Et,et){U?(ut(i.POLYGON_OFFSET_FILL),(C!==Et||I!==et)&&(i.polygonOffset(Et,et),C=Et,I=et)):Ot(i.POLYGON_OFFSET_FILL)}function v(U){U?ut(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+W-1),Q!==U&&(i.activeTexture(U),Q=U)}function ft(U,Et,et){et===void 0&&(Q===null?et=i.TEXTURE0+W-1:et=Q);let Lt=tt[et];Lt===void 0&&(Lt={type:void 0,texture:void 0},tt[et]=Lt),(Lt.type!==U||Lt.texture!==Et)&&(Q!==et&&(i.activeTexture(et),Q=et),i.bindTexture(U,Et||At[U]),Lt.type=U,Lt.texture=Et)}function wt(){let U=tt[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function it(U){mt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),mt.copy(U))}function b(U,Et){let et=u.get(Et);et===void 0&&(et=new WeakMap,u.set(Et,et));let Lt=et.get(U);Lt===void 0&&(Lt=i.getUniformBlockIndex(Et,U.name),et.set(U,Lt))}function J(U,Et){let Lt=u.get(Et).get(U);h.get(Et)!==Lt&&(i.uniformBlockBinding(Et,Lt,U.__bindingPointIndex),h.set(Et,Lt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,tt={},p={},g=new WeakMap,y=[],m=null,f=!1,M=null,x=null,w=null,k=null,F=null,P=null,Y=null,at=new ne(0,0,0),S=0,A=!1,R=null,q=null,L=null,C=null,I=null,st.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ut,disable:Ot,bindFramebuffer:Ht,drawBuffers:D,useProgram:bt,setBlending:gt,setMaterial:Mt,setFlipSided:_t,setCullFace:It,setLineWidth:te,setPolygonOffset:E,setScissorTest:v,activeTexture:ot,bindTexture:ft,unbindTexture:wt,compressedTexImage2D:yt,compressedTexImage3D:Xt,texImage2D:K,texImage3D:nt,updateUBOMapping:b,uniformBlockBinding:J,texStorage2D:Nt,texStorage3D:Me,texSubImage2D:Zt,texSubImage3D:Bt,compressedTexSubImage2D:Gt,compressedTexSubImage3D:Qt,scissor:Z,viewport:it,reset:xt}}function Eg(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,u=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function y(E,v){return g?new OffscreenCanvas(E,v):oo("canvas")}function m(E,v,ot,ft){let wt=1,yt=te(E);if((yt.width>ft||yt.height>ft)&&(wt=ft/Math.max(yt.width,yt.height)),wt<1||v===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let Xt=v?ro:Math.floor,Zt=Xt(wt*yt.width),Bt=Xt(wt*yt.height);d===void 0&&(d=y(Zt,Bt));let Gt=ot?y(Zt,Bt):d;return Gt.width=Zt,Gt.height=Bt,Gt.getContext("2d").drawImage(E,0,0,Zt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Zt+"x"+Bt+")."),Gt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),E;return E}function f(E){let v=te(E);return Va(v.width)&&Va(v.height)}function M(E){return o?!1:E.wrapS!==Rn||E.wrapT!==Rn||E.minFilter!==Xe&&E.minFilter!==un}function x(E,v){return E.generateMipmaps&&v&&E.minFilter!==Xe&&E.minFilter!==un}function w(E){i.generateMipmap(E)}function k(E,v,ot,ft,wt=!1){if(o===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let yt=v;if(v===i.RED&&(ot===i.FLOAT&&(yt=i.R32F),ot===i.HALF_FLOAT&&(yt=i.R16F),ot===i.UNSIGNED_BYTE&&(yt=i.R8)),v===i.RED_INTEGER&&(ot===i.UNSIGNED_BYTE&&(yt=i.R8UI),ot===i.UNSIGNED_SHORT&&(yt=i.R16UI),ot===i.UNSIGNED_INT&&(yt=i.R32UI),ot===i.BYTE&&(yt=i.R8I),ot===i.SHORT&&(yt=i.R16I),ot===i.INT&&(yt=i.R32I)),v===i.RG&&(ot===i.FLOAT&&(yt=i.RG32F),ot===i.HALF_FLOAT&&(yt=i.RG16F),ot===i.UNSIGNED_BYTE&&(yt=i.RG8)),v===i.RG_INTEGER&&(ot===i.UNSIGNED_BYTE&&(yt=i.RG8UI),ot===i.UNSIGNED_SHORT&&(yt=i.RG16UI),ot===i.UNSIGNED_INT&&(yt=i.RG32UI),ot===i.BYTE&&(yt=i.RG8I),ot===i.SHORT&&(yt=i.RG16I),ot===i.INT&&(yt=i.RG32I)),v===i.RGBA){let Xt=wt?eo:be.getTransfer(ft);ot===i.FLOAT&&(yt=i.RGBA32F),ot===i.HALF_FLOAT&&(yt=i.RGBA16F),ot===i.UNSIGNED_BYTE&&(yt=Xt===Ee?i.SRGB8_ALPHA8:i.RGBA8),ot===i.UNSIGNED_SHORT_4_4_4_4&&(yt=i.RGBA4),ot===i.UNSIGNED_SHORT_5_5_5_1&&(yt=i.RGB5_A1)}return(yt===i.R16F||yt===i.R32F||yt===i.RG16F||yt===i.RG32F||yt===i.RGBA16F||yt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function F(E,v,ot){return x(E,ot)===!0||E.isFramebufferTexture&&E.minFilter!==Xe&&E.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function P(E){return E===Xe||E===sl||E===Vs?i.NEAREST:i.LINEAR}function Y(E){let v=E.target;v.removeEventListener("dispose",Y),S(v),v.isVideoTexture&&u.delete(v)}function at(E){let v=E.target;v.removeEventListener("dispose",at),R(v)}function S(E){let v=n.get(E);if(v.__webglInit===void 0)return;let ot=E.source,ft=p.get(ot);if(ft){let wt=ft[v.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&A(E),Object.keys(ft).length===0&&p.delete(ot)}n.remove(E)}function A(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let ot=E.source,ft=p.get(ot);delete ft[v.__cacheKey],a.memory.textures--}function R(E){let v=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(v.__webglFramebuffer[ft]))for(let wt=0;wt<v.__webglFramebuffer[ft].length;wt++)i.deleteFramebuffer(v.__webglFramebuffer[ft][wt]);else i.deleteFramebuffer(v.__webglFramebuffer[ft]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ft])}else{if(Array.isArray(v.__webglFramebuffer))for(let ft=0;ft<v.__webglFramebuffer.length;ft++)i.deleteFramebuffer(v.__webglFramebuffer[ft]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ft=0;ft<v.__webglColorRenderbuffer.length;ft++)v.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ft]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ot=E.textures;for(let ft=0,wt=ot.length;ft<wt;ft++){let yt=n.get(ot[ft]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(ot[ft])}n.remove(E)}let q=0;function L(){q=0}function C(){let E=q;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),q+=1,E}function I(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){let ot=n.get(E);if(E.isVideoTexture&&_t(E),E.isRenderTargetTexture===!1&&E.version>0&&ot.__version!==E.version){let ft=E.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(ot,E,v);return}}e.bindTexture(i.TEXTURE_2D,ot.__webglTexture,i.TEXTURE0+v)}function B(E,v){let ot=n.get(E);if(E.version>0&&ot.__version!==E.version){mt(ot,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ot.__webglTexture,i.TEXTURE0+v)}function X(E,v){let ot=n.get(E);if(E.version>0&&ot.__version!==E.version){mt(ot,E,v);return}e.bindTexture(i.TEXTURE_3D,ot.__webglTexture,i.TEXTURE0+v)}function ct(E,v){let ot=n.get(E);if(E.version>0&&ot.__version!==E.version){Tt(ot,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture,i.TEXTURE0+v)}let Q={[js]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},tt={[Xe]:i.NEAREST,[sl]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},lt={[md]:i.NEVER,[Md]:i.ALWAYS,[gd]:i.LESS,[zh]:i.LEQUAL,[xd]:i.EQUAL,[vd]:i.GEQUAL,[_d]:i.GREATER,[yd]:i.NOTEQUAL};function H(E,v,ot){if(v.type===Qn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===jo||v.magFilter===Vs||v.magFilter===Fi||v.minFilter===un||v.minFilter===jo||v.minFilter===Vs||v.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ot?(i.texParameteri(E,i.TEXTURE_WRAP_S,Q[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Q[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Q[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Rn||v.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,P(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,P(v.minFilter)),v.minFilter!==Xe&&v.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==Vs&&v.minFilter!==Fi||v.type===Qn&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===Qs&&t.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let ft=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(E,v){let ot=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",Y));let ft=v.source,wt=p.get(ft);wt===void 0&&(wt={},p.set(ft,wt));let yt=I(v);if(yt!==E.__cacheKey){wt[yt]===void 0&&(wt[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ot=!0),wt[yt].usedTimes++;let Xt=wt[E.__cacheKey];Xt!==void 0&&(wt[E.__cacheKey].usedTimes--,Xt.usedTimes===0&&A(v)),E.__cacheKey=yt,E.__webglTexture=wt[yt].texture}return ot}function mt(E,v,ot){let ft=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ft=i.TEXTURE_3D);let wt=st(E,v),yt=v.source;e.bindTexture(ft,E.__webglTexture,i.TEXTURE0+ot);let Xt=n.get(yt);if(yt.version!==Xt.__version||wt===!0){e.activeTexture(i.TEXTURE0+ot);let Zt=be.getPrimaries(be.workingColorSpace),Bt=v.colorSpace===pi?null:be.getPrimaries(v.colorSpace),Gt=v.colorSpace===pi||Zt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Qt=M(v)&&f(v.image)===!1,Nt=m(v.image,Qt,!1,s.maxTextureSize);Nt=It(v,Nt);let Me=f(Nt)||o,K=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),Z=k(v.internalFormat,K,nt,v.colorSpace,v.isVideoTexture);H(ft,v,Me);let it,b=v.mipmaps,J=o&&v.isVideoTexture!==!0&&Z!==kh,xt=Xt.__version===void 0||wt===!0,U=yt.dataReady,Et=F(v,Nt,Me);if(v.isDepthTexture)Z=i.DEPTH_COMPONENT,o?v.type===Qn?Z=i.DEPTH_COMPONENT32F:v.type===mi?Z=i.DEPTH_COMPONENT24:v.type===ki?Z=i.DEPTH24_STENCIL8:Z=i.DEPTH_COMPONENT16:v.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zi&&Z===i.DEPTH_COMPONENT&&v.type!==Dc&&v.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=mi,nt=r.convert(v.type)),v.format===bs&&Z===i.DEPTH_COMPONENT&&(Z=i.DEPTH_STENCIL,v.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ki,nt=r.convert(v.type))),xt&&(J?e.texStorage2D(i.TEXTURE_2D,1,Z,Nt.width,Nt.height):e.texImage2D(i.TEXTURE_2D,0,Z,Nt.width,Nt.height,0,K,nt,null));else if(v.isDataTexture)if(b.length>0&&Me){J&&xt&&e.texStorage2D(i.TEXTURE_2D,Et,Z,b[0].width,b[0].height);for(let et=0,Lt=b.length;et<Lt;et++)it=b[et],J?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,it.width,it.height,K,nt,it.data):e.texImage2D(i.TEXTURE_2D,et,Z,it.width,it.height,0,K,nt,it.data);v.generateMipmaps=!1}else J?(xt&&e.texStorage2D(i.TEXTURE_2D,Et,Z,Nt.width,Nt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt.width,Nt.height,K,nt,Nt.data)):e.texImage2D(i.TEXTURE_2D,0,Z,Nt.width,Nt.height,0,K,nt,Nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){J&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Z,b[0].width,b[0].height,Nt.depth);for(let et=0,Lt=b.length;et<Lt;et++)it=b[et],v.format!==Cn?K!==null?J?U&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,it.width,it.height,Nt.depth,K,it.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Z,it.width,it.height,Nt.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,it.width,it.height,Nt.depth,K,nt,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Z,it.width,it.height,Nt.depth,0,K,nt,it.data)}else{J&&xt&&e.texStorage2D(i.TEXTURE_2D,Et,Z,b[0].width,b[0].height);for(let et=0,Lt=b.length;et<Lt;et++)it=b[et],v.format!==Cn?K!==null?J?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,it.width,it.height,K,it.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Z,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,it.width,it.height,K,nt,it.data):e.texImage2D(i.TEXTURE_2D,et,Z,it.width,it.height,0,K,nt,it.data)}else if(v.isDataArrayTexture)J?(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Z,Nt.width,Nt.height,Nt.depth),U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Nt.width,Nt.height,Nt.depth,K,nt,Nt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,Nt.width,Nt.height,Nt.depth,0,K,nt,Nt.data);else if(v.isData3DTexture)J?(xt&&e.texStorage3D(i.TEXTURE_3D,Et,Z,Nt.width,Nt.height,Nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Nt.width,Nt.height,Nt.depth,K,nt,Nt.data)):e.texImage3D(i.TEXTURE_3D,0,Z,Nt.width,Nt.height,Nt.depth,0,K,nt,Nt.data);else if(v.isFramebufferTexture){if(xt)if(J)e.texStorage2D(i.TEXTURE_2D,Et,Z,Nt.width,Nt.height);else{let et=Nt.width,Lt=Nt.height;for(let qt=0;qt<Et;qt++)e.texImage2D(i.TEXTURE_2D,qt,Z,et,Lt,0,K,nt,null),et>>=1,Lt>>=1}}else if(b.length>0&&Me){if(J&&xt){let et=te(b[0]);e.texStorage2D(i.TEXTURE_2D,Et,Z,et.width,et.height)}for(let et=0,Lt=b.length;et<Lt;et++)it=b[et],J?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,K,nt,it):e.texImage2D(i.TEXTURE_2D,et,Z,K,nt,it);v.generateMipmaps=!1}else if(J){if(xt){let et=te(Nt);e.texStorage2D(i.TEXTURE_2D,Et,Z,et.width,et.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,nt,Nt)}else e.texImage2D(i.TEXTURE_2D,0,Z,K,nt,Nt);x(v,Me)&&w(ft),Xt.__version=yt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Tt(E,v,ot){if(v.image.length!==6)return;let ft=st(E,v),wt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+ot);let yt=n.get(wt);if(wt.version!==yt.__version||ft===!0){e.activeTexture(i.TEXTURE0+ot);let Xt=be.getPrimaries(be.workingColorSpace),Zt=v.colorSpace===pi?null:be.getPrimaries(v.colorSpace),Bt=v.colorSpace===pi||Xt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Qt=v.image[0]&&v.image[0].isDataTexture,Nt=[];for(let et=0;et<6;et++)!Gt&&!Qt?Nt[et]=m(v.image[et],!1,!0,s.maxCubemapSize):Nt[et]=Qt?v.image[et].image:v.image[et],Nt[et]=It(v,Nt[et]);let Me=Nt[0],K=f(Me)||o,nt=r.convert(v.format,v.colorSpace),Z=r.convert(v.type),it=k(v.internalFormat,nt,Z,v.colorSpace),b=o&&v.isVideoTexture!==!0,J=yt.__version===void 0||ft===!0,xt=wt.dataReady,U=F(v,Me,K);H(i.TEXTURE_CUBE_MAP,v,K);let Et;if(Gt){b&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,U,it,Me.width,Me.height);for(let et=0;et<6;et++){Et=Nt[et].mipmaps;for(let Lt=0;Lt<Et.length;Lt++){let qt=Et[Lt];v.format!==Cn?nt!==null?b?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt,0,0,qt.width,qt.height,nt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt,it,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt,0,0,qt.width,qt.height,nt,Z,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt,it,qt.width,qt.height,0,nt,Z,qt.data)}}}else{if(Et=v.mipmaps,b&&J){Et.length>0&&U++;let et=te(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,U,it,et.width,et.height)}for(let et=0;et<6;et++)if(Qt){b?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt[et].width,Nt[et].height,nt,Z,Nt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,it,Nt[et].width,Nt[et].height,0,nt,Z,Nt[et].data);for(let Lt=0;Lt<Et.length;Lt++){let ie=Et[Lt].image[et].image;b?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt+1,0,0,ie.width,ie.height,nt,Z,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt+1,it,ie.width,ie.height,0,nt,Z,ie.data)}}else{b?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,nt,Z,Nt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,it,nt,Z,Nt[et]);for(let Lt=0;Lt<Et.length;Lt++){let qt=Et[Lt];b?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt+1,0,0,nt,Z,qt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Lt+1,it,nt,Z,qt.image[et])}}}x(v,K)&&w(i.TEXTURE_CUBE_MAP),yt.__version=wt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function At(E,v,ot,ft,wt,yt){let Xt=r.convert(ot.format,ot.colorSpace),Zt=r.convert(ot.type),Bt=k(ot.internalFormat,Xt,Zt,ot.colorSpace);if(!n.get(v).__hasExternalTextures){let Qt=Math.max(1,v.width>>yt),Nt=Math.max(1,v.height>>yt);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?e.texImage3D(wt,yt,Bt,Qt,Nt,v.depth,0,Xt,Zt,null):e.texImage2D(wt,yt,Bt,Qt,Nt,0,Xt,Zt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Mt(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,wt,n.get(ot).__webglTexture,0,gt(v)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,wt,n.get(ot).__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(E,v,ot){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ft=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ot||Mt(v)){let wt=v.depthTexture;wt&&wt.isDepthTexture&&(wt.type===Qn?ft=i.DEPTH_COMPONENT32F:wt.type===mi&&(ft=i.DEPTH_COMPONENT24));let yt=gt(v);Mt(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ft,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ft,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ft,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){let ft=gt(v);ot&&Mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,i.DEPTH24_STENCIL8,v.width,v.height):Mt(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ft=v.textures;for(let wt=0;wt<ft.length;wt++){let yt=ft[wt],Xt=r.convert(yt.format,yt.colorSpace),Zt=r.convert(yt.type),Bt=k(yt.internalFormat,Xt,Zt,yt.colorSpace),Gt=gt(v);ot&&Mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Bt,v.width,v.height):Mt(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Bt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Bt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let ft=n.get(v.depthTexture).__webglTexture,wt=gt(v);if(v.depthTexture.format===zi)Mt(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(v.depthTexture.format===bs)Mt(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function Ht(E){let v=n.get(E),ot=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Ot(v.__webglFramebuffer,E)}else if(ot){v.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ft]),v.__webglDepthbuffer[ft]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[ft],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(E,v,ot){let ft=n.get(E);v!==void 0&&At(ft.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ot!==void 0&&Ht(E)}function bt(E){let v=E.texture,ot=n.get(E),ft=n.get(v);E.addEventListener("dispose",at);let wt=E.textures,yt=E.isWebGLCubeRenderTarget===!0,Xt=wt.length>1,Zt=f(E)||o;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=v.version,a.memory.textures++),yt){ot.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(o&&v.mipmaps&&v.mipmaps.length>0){ot.__webglFramebuffer[Bt]=[];for(let Gt=0;Gt<v.mipmaps.length;Gt++)ot.__webglFramebuffer[Bt][Gt]=i.createFramebuffer()}else ot.__webglFramebuffer[Bt]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Bt=0;Bt<v.mipmaps.length;Bt++)ot.__webglFramebuffer[Bt]=i.createFramebuffer()}else ot.__webglFramebuffer=i.createFramebuffer();if(Xt)if(s.drawBuffers)for(let Bt=0,Gt=wt.length;Bt<Gt;Bt++){let Qt=n.get(wt[Bt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Mt(E)===!1){ot.__webglMultisampledFramebuffer=i.createFramebuffer(),ot.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Bt=0;Bt<wt.length;Bt++){let Gt=wt[Bt];ot.__webglColorRenderbuffer[Bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ot.__webglColorRenderbuffer[Bt]);let Qt=r.convert(Gt.format,Gt.colorSpace),Nt=r.convert(Gt.type),Me=k(Gt.internalFormat,Qt,Nt,Gt.colorSpace,E.isXRRenderTarget===!0),K=gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(ot.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(ot.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,Zt);for(let Bt=0;Bt<6;Bt++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let Gt=0;Gt<v.mipmaps.length;Gt++)At(ot.__webglFramebuffer[Bt][Gt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Gt);else At(ot.__webglFramebuffer[Bt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);x(v,Zt)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Bt=0,Gt=wt.length;Bt<Gt;Bt++){let Qt=wt[Bt],Nt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,Nt.__webglTexture),H(i.TEXTURE_2D,Qt,Zt),At(ot.__webglFramebuffer,E,Qt,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,0),x(Qt,Zt)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let Bt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?Bt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Bt,ft.__webglTexture),H(Bt,v,Zt),o&&v.mipmaps&&v.mipmaps.length>0)for(let Gt=0;Gt<v.mipmaps.length;Gt++)At(ot.__webglFramebuffer[Gt],E,v,i.COLOR_ATTACHMENT0,Bt,Gt);else At(ot.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Bt,0);x(v,Zt)&&w(Bt),e.unbindTexture()}E.depthBuffer&&Ht(E)}function pt(E){let v=f(E)||o,ot=E.textures;for(let ft=0,wt=ot.length;ft<wt;ft++){let yt=ot[ft];if(x(yt,v)){let Xt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Zt=n.get(yt).__webglTexture;e.bindTexture(Xt,Zt),w(Xt),e.unbindTexture()}}}function Rt(E){if(o&&E.samples>0&&Mt(E)===!1){let v=E.textures,ot=E.width,ft=E.height,wt=i.COLOR_BUFFER_BIT,yt=[],Xt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Zt=n.get(E),Bt=v.length>1;if(Bt)for(let Gt=0;Gt<v.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Gt=0;Gt<v.length;Gt++){yt.push(i.COLOR_ATTACHMENT0+Gt),E.depthBuffer&&yt.push(Xt);let Qt=Zt.__ignoreDepthValues!==void 0?Zt.__ignoreDepthValues:!1;if(Qt===!1&&(E.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Zt.__webglColorRenderbuffer[Gt]),Qt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Xt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Xt])),Bt){let Nt=n.get(v[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,ot,ft,0,0,ot,ft,wt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Bt)for(let Gt=0;Gt<v.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,Zt.__webglColorRenderbuffer[Gt]);let Qt=n.get(v[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}}function gt(E){return Math.min(s.maxSamples,E.samples)}function Mt(E){let v=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _t(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function It(E,v){let ot=E.colorSpace,ft=E.format,wt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ha||ot!==Si&&ot!==pi&&(be.getTransfer(ot)===Ee?o===!1?t.has("EXT_sRGB")===!0&&ft===Cn?(E.format=Ha,E.minFilter=un,E.generateMipmaps=!1):v=ao.sRGBToLinear(v):(ft!==Cn||wt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),v}function te(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=ct,this.rebindTextures=D,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Mt}function Tg(i,t,e){let n=e.isWebGL2;function s(r,a=pi){let o,c=be.getTransfer(a);if(r===_i)return i.UNSIGNED_BYTE;if(r===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===sd)return i.BYTE;if(r===rd)return i.SHORT;if(r===Dc)return i.UNSIGNED_SHORT;if(r===Dh)return i.INT;if(r===mi)return i.UNSIGNED_INT;if(r===Qn)return i.FLOAT;if(r===Qs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===od)return i.ALPHA;if(r===Cn)return i.RGBA;if(r===ad)return i.LUMINANCE;if(r===cd)return i.LUMINANCE_ALPHA;if(r===zi)return i.DEPTH_COMPONENT;if(r===bs)return i.DEPTH_STENCIL;if(r===Ha)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ld)return i.RED;if(r===Oh)return i.RED_INTEGER;if(r===hd)return i.RG;if(r===Fh)return i.RG_INTEGER;if(r===Bh)return i.RGBA_INTEGER;if(r===Qo||r===ta||r===ea||r===na)if(c===Ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rl||r===ol||r===al||r===cl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ol)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ll||r===hl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ll)return c===Ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===xl||r===_l||r===yl||r===vl||r===Ml||r===Sl||r===bl||r===wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ul)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ml)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_l)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ml)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wl)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ia||r===El||r===Tl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ia)return c===Ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===El)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===Al||r===Rl||r===Cl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ia)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ec=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qe=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new vn({extensions:{fragDepth:!0},vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new de(new Fn(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},ic=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,y=new nc,m=e.getContextAttributes(),f=null,M=null,x=[],w=[],k=new Pt,F=null,P=new Ve;P.layers.enable(1),P.viewport=new _e;let Y=new Ve;Y.layers.enable(2),Y.viewport=new _e;let at=[P,Y],S=new ec;S.layers.enable(1),S.layers.enable(2);let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let st=x[H];return st===void 0&&(st=new Zs,x[H]=st),st.getTargetRaySpace()},this.getControllerGrip=function(H){let st=x[H];return st===void 0&&(st=new Zs,x[H]=st),st.getGripSpace()},this.getHand=function(H){let st=x[H];return st===void 0&&(st=new Zs,x[H]=st),st.getHandSpace()};function q(H){let st=w.indexOf(H.inputSource);if(st===-1)return;let mt=x[st];mt!==void 0&&(mt.update(H.inputSource,H.frame,l||a),mt.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",C);for(let H=0;H<x.length;H++){let st=w[H];st!==null&&(w[H]=null,x[H].disconnect(st))}A=null,R=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",L),s.addEventListener("inputsourceschange",C),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ei(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,mt=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?bs:zi,mt=m.stencil?ki:mi);let At={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:Cn,type:_i,depthTexture:new go(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});let ut=t.properties.get(M);ut.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(H){for(let st=0;st<H.removed.length;st++){let mt=H.removed[st],Tt=w.indexOf(mt);Tt>=0&&(w[Tt]=null,x[Tt].disconnect(mt))}for(let st=0;st<H.added.length;st++){let mt=H.added[st],Tt=w.indexOf(mt);if(Tt===-1){for(let ut=0;ut<x.length;ut++)if(ut>=w.length){w.push(mt),Tt=ut;break}else if(w[ut]===null){w[ut]=mt,Tt=ut;break}if(Tt===-1)break}let At=x[Tt];At&&At.connect(mt)}}let I=new T,W=new T;function B(H,st,mt){I.setFromMatrixPosition(st.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);let Tt=I.distanceTo(W),At=st.projectionMatrix.elements,ut=mt.projectionMatrix.elements,Ot=At[14]/(At[10]-1),Ht=At[14]/(At[10]+1),D=(At[9]+1)/At[5],bt=(At[9]-1)/At[5],pt=(At[8]-1)/At[0],Rt=(ut[8]+1)/ut[0],gt=Ot*pt,Mt=Ot*Rt,_t=Tt/(-pt+Rt),It=_t*-pt;st.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(It),H.translateZ(_t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let te=Ot+_t,E=Ht+_t,v=gt-It,ot=Mt+(Tt-It),ft=D*Ht/E*te,wt=bt*Ht/E*te;H.projectionMatrix.makePerspective(v,ot,ft,wt,te,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,st){st===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(st.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),S.near=Y.near=P.near=H.near,S.far=Y.far=P.far=H.far,(A!==S.near||R!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,R=S.far,P.near=A,P.far=R,Y.near=A,Y.far=R,P.updateProjectionMatrix(),Y.updateProjectionMatrix(),H.updateProjectionMatrix());let st=H.parent,mt=S.cameras;X(S,st);for(let Tt=0;Tt<mt.length;Tt++)X(mt[Tt],st);mt.length===2?B(S,P,Y):S.projectionMatrix.copy(P.projectionMatrix),ct(H,S,st)};function ct(H,st,mt){mt===null?H.matrix.copy(st.matrixWorld):(H.matrix.copy(mt.matrixWorld),H.matrix.invert(),H.matrix.multiply(st.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(st.projectionMatrix),H.projectionMatrixInverse.copy(st.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ws*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let Q=null;function tt(H,st){if(h=st.getViewerPose(l||a),g=st,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Tt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let ut=0;ut<mt.length;ut++){let Ot=mt[ut],Ht=null;if(p!==null)Ht=p.getViewport(Ot);else{let bt=u.getViewSubImage(d,Ot);Ht=bt.viewport,ut===0&&(t.setRenderTargetTextures(M,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(M))}let D=at[ut];D===void 0&&(D=new Ve,D.layers.enable(ut),D.viewport=new _e,at[ut]=D),D.matrix.fromArray(Ot.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ot.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),ut===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(D)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let ut=u.getDepthInformation(mt[0]);ut&&ut.isValid&&ut.texture&&y.init(t,ut,s.renderState)}}for(let mt=0;mt<x.length;mt++){let Tt=w[mt],At=x[mt];Tt!==null&&At!==void 0&&At.update(Tt,st,l||a)}y.render(t,S),Q&&Q(H,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let lt=new Xh;lt.setAnimationLoop(tt),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}},Di=new In,Pg=new we;function Lg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),x=M.envMap,w=M.envMapRotation;if(x&&(m.envMap.value=x,Di.copy(w),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let k=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*k,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ig(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,x){let w=x.program;n.uniformBlockBinding(M,w)}function l(M,x){let w=s[M.id];w===void 0&&(g(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",m));let k=x.program;n.updateUBOMapping(M,k);let F=t.render.frame;r[M.id]!==F&&(d(M),r[M.id]=F)}function h(M){let x=u();M.__bindingPointIndex=x;let w=i.createBuffer(),k=M.__size,F=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,k,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],w=M.uniforms,k=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let F=0,P=w.length;F<P;F++){let Y=Array.isArray(w[F])?w[F]:[w[F]];for(let at=0,S=Y.length;at<S;at++){let A=Y[at];if(p(A,F,at,k)===!0){let R=A.__offset,q=Array.isArray(A.value)?A.value:[A.value],L=0;for(let C=0;C<q.length;C++){let I=q[C],W=y(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,R+L,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,w,k){let F=M.value,P=x+"_"+w;if(k[P]===void 0)return typeof F=="number"||typeof F=="boolean"?k[P]=F:k[P]=F.clone(),!0;{let Y=k[P];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return k[P]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function g(M){let x=M.uniforms,w=0,k=16;for(let P=0,Y=x.length;P<Y;P++){let at=Array.isArray(x[P])?x[P]:[x[P]];for(let S=0,A=at.length;S<A;S++){let R=at[S],q=Array.isArray(R.value)?R.value:[R.value];for(let L=0,C=q.length;L<C;L++){let I=q[L],W=y(I),B=w%k;B!==0&&k-B<W.boundary&&(w+=k-B),R.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=W.storage}}}let F=w%k;return F>0&&(w+=k-F),M.__size=w,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var nr=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;let x=this,w=!1,k=0,F=0,P=null,Y=-1,at=null,S=new _e,A=new _e,R=null,q=new ne(0),L=0,C=e.width,I=e.height,W=1,B=null,X=null,ct=new _e(0,0,C,I),Q=new _e(0,0,C,I),tt=!1,lt=new er,H=!1,st=!1,mt=null,Tt=new we,At=new Pt,ut=new T,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return P===null?W:1}let D=n;function bt(_,O){for(let V=0;V<_.length;V++){let z=_[V],G=e.getContext(z,O);if(G!==null)return G}return null}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",Et,!1),D===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),D=bt(O,_),D===null)throw bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let pt,Rt,gt,Mt,_t,It,te,E,v,ot,ft,wt,yt,Xt,Zt,Bt,Gt,Qt,Nt,Me,K,nt,Z,it;function b(){pt=new $m(D),Rt=new Vm(D,pt,t),pt.init(Rt),nt=new Tg(D,pt,Rt),gt=new wg(D,pt,Rt),Mt=new Km(D),_t=new dg,It=new Eg(D,pt,gt,_t,Rt,nt,Mt),te=new Wm(x),E=new Ym(x),v=new nf(D,Rt),Z=new zm(D,pt,v,Rt),ot=new Zm(D,v,Mt,Z),ft=new e0(D,ot,v,Mt),Nt=new t0(D,Rt,It),Bt=new Gm(_t),wt=new ug(x,te,E,pt,Rt,Z,Bt),yt=new Lg(x,_t),Xt=new pg,Zt=new vg(pt,Rt),Qt=new km(x,te,E,gt,ft,d,c),Gt=new bg(x,ft,Rt),it=new Ig(D,Mt,Rt,gt),Me=new Hm(D,pt,Mt,Rt),K=new Jm(D,pt,Mt,Rt),Mt.programs=wt.programs,x.capabilities=Rt,x.extensions=pt,x.properties=_t,x.renderLists=Xt,x.shadowMap=Gt,x.state=gt,x.info=Mt}b();let J=new ic(x,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=pt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=pt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(_){_!==void 0&&(W=_,this.setSize(C,I,!1))},this.getSize=function(_){return _.set(C,I)},this.setSize=function(_,O,V=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=_,I=O,e.width=Math.floor(_*W),e.height=Math.floor(O*W),V===!0&&(e.style.width=_+"px",e.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(C*W,I*W).floor()},this.setDrawingBufferSize=function(_,O,V){C=_,I=O,W=V,e.width=Math.floor(_*V),e.height=Math.floor(O*V),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(S)},this.getViewport=function(_){return _.copy(ct)},this.setViewport=function(_,O,V,z){_.isVector4?ct.set(_.x,_.y,_.z,_.w):ct.set(_,O,V,z),gt.viewport(S.copy(ct).multiplyScalar(W).round())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,O,V,z){_.isVector4?Q.set(_.x,_.y,_.z,_.w):Q.set(_,O,V,z),gt.scissor(A.copy(Q).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(_){gt.setScissorTest(tt=_)},this.setOpaqueSort=function(_){B=_},this.setTransparentSort=function(_){X=_},this.getClearColor=function(_){return _.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(_=!0,O=!0,V=!0){let z=0;if(_){let G=!1;if(P!==null){let vt=P.texture.format;G=vt===Bh||vt===Fh||vt===Oh}if(G){let vt=P.texture.type,St=vt===_i||vt===mi||vt===Dc||vt===ki||vt===Uh||vt===Nh,Yt=Qt.getClearColor(),Vt=Qt.getClearAlpha(),Ut=Yt.r,zt=Yt.g,Ft=Yt.b;St?(p[0]=Ut,p[1]=zt,p[2]=Ft,p[3]=Vt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ut,g[1]=zt,g[2]=Ft,g[3]=Vt,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}O&&(z|=D.DEPTH_BUFFER_BIT),V&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Xt.dispose(),Zt.dispose(),_t.dispose(),te.dispose(),E.dispose(),ft.dispose(),Z.dispose(),it.dispose(),wt.dispose(),J.dispose(),J.removeEventListener("sessionstart",pe),J.removeEventListener("sessionend",ae),mt&&(mt.dispose(),mt=null),rt.stop()};function xt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let _=Mt.autoReset,O=Gt.enabled,V=Gt.autoUpdate,z=Gt.needsUpdate,G=Gt.type;b(),Mt.autoReset=_,Gt.enabled=O,Gt.autoUpdate=V,Gt.needsUpdate=z,Gt.type=G}function Et(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function et(_){let O=_.target;O.removeEventListener("dispose",et),Lt(O)}function Lt(_){qt(_),_t.remove(_)}function qt(_){let O=_t.get(_).programs;O!==void 0&&(O.forEach(function(V){wt.releaseProgram(V)}),_.isShaderMaterial&&wt.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,V,z,G,vt){O===null&&(O=Ot);let St=G.isMesh&&G.matrixWorld.determinant()<0,Yt=$(_,O,V,z,G);gt.setMaterial(z,St);let Vt=V.index,Ut=1;if(z.wireframe===!0){if(Vt=ot.getWireframeAttribute(V),Vt===void 0)return;Ut=2}let zt=V.drawRange,Ft=V.attributes.position,jt=zt.start*Ut,re=(zt.start+zt.count)*Ut;vt!==null&&(jt=Math.max(jt,vt.start*Ut),re=Math.min(re,(vt.start+vt.count)*Ut)),Vt!==null?(jt=Math.max(jt,0),re=Math.min(re,Vt.count)):Ft!=null&&(jt=Math.max(jt,0),re=Math.min(re,Ft.count));let ue=re-jt;if(ue<0||ue===1/0)return;Z.setup(G,z,Yt,V,Vt);let ce,ye=Me;if(Vt!==null&&(ce=v.get(Vt),ye=K,ye.setIndex(ce)),G.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Ht()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(G.isLine){let se=z.linewidth;se===void 0&&(se=1),gt.setLineWidth(se*Ht()),G.isLineSegments?ye.setMode(D.LINES):G.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else G.isPoints?ye.setMode(D.POINTS):G.isSprite&&ye.setMode(D.TRIANGLES);if(G.isBatchedMesh)ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ye.renderInstances(jt,ue,G.count);else if(V.isInstancedBufferGeometry){let se=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xn=Math.min(V.instanceCount,se);ye.renderInstances(jt,ue,Xn)}else ye.render(jt,ue)};function ie(_,O,V){_.transparent===!0&&_.side===on&&_.forceSinglePass===!1?(_.side=en,_.needsUpdate=!0,$t(_,O,V),_.side=vi,_.needsUpdate=!0,$t(_,O,V),_.side=on):$t(_,O,V)}this.compile=function(_,O,V=null){V===null&&(V=_),m=Zt.get(V),m.init(),M.push(m),V.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),_!==V&&_.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);let z=new Set;return _.traverse(function(G){let vt=G.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){let Yt=vt[St];ie(Yt,V,G),z.add(Yt)}else ie(vt,V,G),z.add(vt)}),M.pop(),m=null,z},this.compileAsync=function(_,O,V=null){let z=this.compile(_,O,V);return new Promise(G=>{function vt(){if(z.forEach(function(St){_t.get(St).currentProgram.isReady()&&z.delete(St)}),z.size===0){G(_);return}setTimeout(vt,10)}pt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ee=null;function oe(_){ee&&ee(_)}function pe(){rt.stop()}function ae(){rt.start()}let rt=new Xh;rt.setAnimationLoop(oe),typeof self!="undefined"&&rt.setContext(self),this.setAnimationLoop=function(_){ee=_,J.setAnimationLoop(_),_===null?rt.stop():rt.start()},J.addEventListener("sessionstart",pe),J.addEventListener("sessionend",ae),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,O,P),m=Zt.get(_,M.length),m.init(),M.push(m),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),lt.setFromProjectionMatrix(Tt),st=this.localClippingEnabled,H=Bt.init(this.clippingPlanes,st),y=Xt.get(_,f.length),y.init(),f.push(y),dt(_,O,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(B,X),this.info.render.frame++,H===!0&&Bt.beginShadows();let V=m.state.shadowsArray;if(Gt.render(V,_,O),H===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1)&&Qt.render(y,_),m.setupLights(x._useLegacyLights),O.isArrayCamera){let z=O.cameras;for(let G=0,vt=z.length;G<vt;G++){let St=z[G];Dt(y,_,St,St.viewport)}}else Dt(y,_,O);P!==null&&(It.updateMultisampleRenderTarget(P),It.updateRenderTargetMipmap(P)),_.isScene===!0&&_.onAfterRender(x,_,O),Z.resetDefaultState(),Y=-1,at=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function dt(_,O,V,z){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)V=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||lt.intersectsSprite(_)){z&&ut.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Tt);let St=ft.update(_),Yt=_.material;Yt.visible&&y.push(_,St,Yt,V,ut.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||lt.intersectsObject(_))){let St=ft.update(_),Yt=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ut.copy(_.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ut.copy(St.boundingSphere.center)),ut.applyMatrix4(_.matrixWorld).applyMatrix4(Tt)),Array.isArray(Yt)){let Vt=St.groups;for(let Ut=0,zt=Vt.length;Ut<zt;Ut++){let Ft=Vt[Ut],jt=Yt[Ft.materialIndex];jt&&jt.visible&&y.push(_,St,jt,V,ut.z,Ft)}}else Yt.visible&&y.push(_,St,Yt,V,ut.z,null)}}let vt=_.children;for(let St=0,Yt=vt.length;St<Yt;St++)dt(vt[St],O,V,z)}function Dt(_,O,V,z){let G=_.opaque,vt=_.transmissive,St=_.transparent;m.setupLightsView(V),H===!0&&Bt.setGlobalState(x.clippingPlanes,V),vt.length>0&&Ct(G,vt,O,V),z&&gt.viewport(S.copy(z)),G.length>0&&kt(G,O,V),vt.length>0&&kt(vt,O,V),St.length>0&&kt(St,O,V),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Ct(_,O,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let vt=Rt.isWebGL2;mt===null&&(mt=new ei(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Qs:_i,minFilter:Fi,samples:vt?4:0})),x.getDrawingBufferSize(At),vt?mt.setSize(At.x,At.y):mt.setSize(ro(At.x),ro(At.y));let St=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Yt=x.toneMapping;x.toneMapping=xi,kt(_,V,z),It.updateMultisampleRenderTarget(mt),It.updateRenderTargetMipmap(mt);let Vt=!1;for(let Ut=0,zt=O.length;Ut<zt;Ut++){let Ft=O[Ut],jt=Ft.object,re=Ft.geometry,ue=Ft.material,ce=Ft.group;if(ue.side===on&&jt.layers.test(z.layers)){let ye=ue.side;ue.side=en,ue.needsUpdate=!0,Kt(jt,V,z,re,ue,ce),ue.side=ye,ue.needsUpdate=!0,Vt=!0}}Vt===!0&&(It.updateMultisampleRenderTarget(mt),It.updateRenderTargetMipmap(mt)),x.setRenderTarget(St),x.setClearColor(q,L),x.toneMapping=Yt}function kt(_,O,V){let z=O.isScene===!0?O.overrideMaterial:null;for(let G=0,vt=_.length;G<vt;G++){let St=_[G],Yt=St.object,Vt=St.geometry,Ut=z===null?St.material:z,zt=St.group;Yt.layers.test(V.layers)&&Kt(Yt,O,V,Vt,Ut,zt)}}function Kt(_,O,V,z,G,vt){_.onBeforeRender(x,O,V,z,G,vt),_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(x,O,V,z,_,vt),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,x.renderBufferDirect(V,O,z,G,_,vt),G.side=vi,G.needsUpdate=!0,x.renderBufferDirect(V,O,z,G,_,vt),G.side=on):x.renderBufferDirect(V,O,z,G,_,vt),_.onAfterRender(x,O,V,z,G,vt)}function $t(_,O,V){O.isScene!==!0&&(O=Ot);let z=_t.get(_),G=m.state.lights,vt=m.state.shadowsArray,St=G.state.version,Yt=wt.getParameters(_,G.state,vt,O,V),Vt=wt.getProgramCacheKey(Yt),Ut=z.programs;z.environment=_.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(_.isMeshStandardMaterial?E:te).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?O.environmentRotation:_.envMapRotation,Ut===void 0&&(_.addEventListener("dispose",et),Ut=new Map,z.programs=Ut);let zt=Ut.get(Vt);if(zt!==void 0){if(z.currentProgram===zt&&z.lightsStateVersion===St)return N(_,Yt),zt}else Yt.uniforms=wt.getUniforms(_),_.onBuild(V,Yt,x),_.onBeforeCompile(Yt,x),zt=wt.acquireProgram(Yt,Vt),Ut.set(Vt,zt),z.uniforms=Yt.uniforms;let Ft=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ft.clippingPlanes=Bt.uniform),N(_,Yt),z.needsLights=ht(_),z.lightsStateVersion=St,z.needsLights&&(Ft.ambientLightColor.value=G.state.ambient,Ft.lightProbe.value=G.state.probe,Ft.directionalLights.value=G.state.directional,Ft.directionalLightShadows.value=G.state.directionalShadow,Ft.spotLights.value=G.state.spot,Ft.spotLightShadows.value=G.state.spotShadow,Ft.rectAreaLights.value=G.state.rectArea,Ft.ltc_1.value=G.state.rectAreaLTC1,Ft.ltc_2.value=G.state.rectAreaLTC2,Ft.pointLights.value=G.state.point,Ft.pointLightShadows.value=G.state.pointShadow,Ft.hemisphereLights.value=G.state.hemi,Ft.directionalShadowMap.value=G.state.directionalShadowMap,Ft.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ft.spotShadowMap.value=G.state.spotShadowMap,Ft.spotLightMatrix.value=G.state.spotLightMatrix,Ft.spotLightMap.value=G.state.spotLightMap,Ft.pointShadowMap.value=G.state.pointShadowMap,Ft.pointShadowMatrix.value=G.state.pointShadowMatrix),z.currentProgram=zt,z.uniformsList=null,zt}function Jt(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=vs.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function N(_,O){let V=_t.get(_);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function $(_,O,V,z,G){O.isScene!==!0&&(O=Ot),It.resetTextureUnits();let vt=O.fog,St=z.isMeshStandardMaterial?O.environment:null,Yt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Si,Vt=(z.isMeshStandardMaterial?E:te).get(z.envMap||St),Ut=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ft=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color,ue=xi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=x.toneMapping);let ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ye=ce!==void 0?ce.length:0,se=_t.get(z),Xn=m.state.lights;if(H===!0&&(st===!0||_!==at)){let Ne=_===at&&z.id===Y;Bt.setState(z,_,Ne)}let xe=!1;z.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Xn.state.version||se.outputColorSpace!==Yt||G.isBatchedMesh&&se.batching===!1||!G.isBatchedMesh&&se.batching===!0||G.isInstancedMesh&&se.instancing===!1||!G.isInstancedMesh&&se.instancing===!0||G.isSkinnedMesh&&se.skinning===!1||!G.isSkinnedMesh&&se.skinning===!0||G.isInstancedMesh&&se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&se.instancingMorph===!1&&G.morphTexture!==null||se.envMap!==Vt||z.fog===!0&&se.fog!==vt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Bt.numPlanes||se.numIntersection!==Bt.numIntersection)||se.vertexAlphas!==Ut||se.vertexTangents!==zt||se.morphTargets!==Ft||se.morphNormals!==jt||se.morphColors!==re||se.toneMapping!==ue||Rt.isWebGL2===!0&&se.morphTargetsCount!==ye)&&(xe=!0):(xe=!0,se.__version=z.version);let Ke=se.currentProgram;xe===!0&&(Ke=$t(z,O,G));let wi=!1,qn=!1,Ei=!1,Le=Ke.getUniforms(),pn=se.uniforms;if(gt.useProgram(Ke.program)&&(wi=!0,qn=!0,Ei=!0),z.id!==Y&&(Y=z.id,qn=!0),wi||at!==_){Le.setValue(D,"projectionMatrix",_.projectionMatrix),Le.setValue(D,"viewMatrix",_.matrixWorldInverse);let Ne=Le.map.cameraPosition;Ne!==void 0&&Ne.setValue(D,ut.setFromMatrixPosition(_.matrixWorld)),Rt.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Le.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),at!==_&&(at=_,qn=!0,Ei=!0)}if(G.isSkinnedMesh){Le.setOptional(D,G,"bindMatrix"),Le.setOptional(D,G,"bindMatrixInverse");let Ne=G.skeleton;Ne&&(Rt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),Le.setValue(D,"boneTexture",Ne.boneTexture,It)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Le.setOptional(D,G,"batchingTexture"),Le.setValue(D,"batchingTexture",G._matricesTexture,It));let Ti=V.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0&&Rt.isWebGL2===!0)&&Nt.update(G,V,Ke),(qn||se.receiveShadow!==G.receiveShadow)&&(se.receiveShadow=G.receiveShadow,Le.setValue(D,"receiveShadow",G.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=Vt,pn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),qn&&(Le.setValue(D,"toneMappingExposure",x.toneMappingExposure),se.needsLights&&j(pn,Ei),vt&&z.fog===!0&&yt.refreshFogUniforms(pn,vt),yt.refreshMaterialUniforms(pn,z,W,I,mt),vs.upload(D,Jt(se),pn,It)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vs.upload(D,Jt(se),pn,It),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Le.setValue(D,"center",G.center),Le.setValue(D,"modelViewMatrix",G.modelViewMatrix),Le.setValue(D,"normalMatrix",G.normalMatrix),Le.setValue(D,"modelMatrix",G.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ne=z.uniformsGroups;for(let Ai=0,Mr=Ne.length;Ai<Mr;Ai++)if(Rt.isWebGL2){let me=Ne[Ai];it.update(me,Ke),it.bind(me,Ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ke}function j(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function ht(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,O,V){_t.get(_.texture).__webglTexture=O,_t.get(_.depthTexture).__webglTexture=V;let z=_t.get(_);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,O){let V=_t.get(_);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(_,O=0,V=0){P=_,k=O,F=V;let z=!0,G=null,vt=!1,St=!1;if(_){let Vt=_t.get(_);Vt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Vt.__webglFramebuffer===void 0?It.setupRenderTarget(_):Vt.__hasExternalTextures&&It.rebindTextures(_,_t.get(_.texture).__webglTexture,_t.get(_.depthTexture).__webglTexture);let Ut=_.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(St=!0);let zt=_t.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?G=zt[O][V]:G=zt[O],vt=!0):Rt.isWebGL2&&_.samples>0&&It.useMultisampledRTT(_)===!1?G=_t.get(_).__webglMultisampledFramebuffer:Array.isArray(zt)?G=zt[V]:G=zt,S.copy(_.viewport),A.copy(_.scissor),R=_.scissorTest}else S.copy(ct).multiplyScalar(W).floor(),A.copy(Q).multiplyScalar(W).floor(),R=tt;if(gt.bindFramebuffer(D.FRAMEBUFFER,G)&&Rt.drawBuffers&&z&&gt.drawBuffers(_,G),gt.viewport(S),gt.scissor(A),gt.setScissorTest(R),vt){let Vt=_t.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Vt.__webglTexture,V)}else if(St){let Vt=_t.get(_.texture),Ut=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.__webglTexture,V||0,Ut)}Y=-1},this.readRenderTargetPixels=function(_,O,V,z,G,vt,St){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=_t.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&St!==void 0&&(Yt=Yt[St]),Yt){gt.bindFramebuffer(D.FRAMEBUFFER,Yt);try{let Vt=_.texture,Ut=Vt.format,zt=Vt.type;if(Ut!==Cn&&nt.convert(Ut)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=zt===Qs&&(pt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(zt!==_i&&nt.convert(zt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Qn&&(Rt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-z&&V>=0&&V<=_.height-G&&D.readPixels(O,V,z,G,nt.convert(Ut),nt.convert(zt),vt)}finally{let Vt=P!==null?_t.get(P).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(_,O,V=0){let z=Math.pow(2,-V),G=Math.floor(O.image.width*z),vt=Math.floor(O.image.height*z);It.setTexture2D(O,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_.x,_.y,G,vt),gt.unbindTexture()},this.copyTextureToTexture=function(_,O,V,z=0){let G=O.image.width,vt=O.image.height,St=nt.convert(V.format),Yt=nt.convert(V.type);It.setTexture2D(V,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,_.x,_.y,G,vt,St,Yt,O.image.data):O.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,_.x,_.y,O.mipmaps[0].width,O.mipmaps[0].height,St,O.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,_.x,_.y,St,Yt,O.image),z===0&&V.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(_,O,V,z,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=Math.round(_.max.x-_.min.x),St=Math.round(_.max.y-_.min.y),Yt=_.max.z-_.min.z+1,Vt=nt.convert(z.format),Ut=nt.convert(z.type),zt;if(z.isData3DTexture)It.setTexture3D(z,0),zt=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)It.setTexture2DArray(z,0),zt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ft=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),re=D.getParameter(D.UNPACK_SKIP_PIXELS),ue=D.getParameter(D.UNPACK_SKIP_ROWS),ce=D.getParameter(D.UNPACK_SKIP_IMAGES),ye=V.isCompressedTexture?V.mipmaps[G]:V.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,_.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_.min.z),V.isDataTexture||V.isData3DTexture?D.texSubImage3D(zt,G,O.x,O.y,O.z,vt,St,Yt,Vt,Ut,ye.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,G,O.x,O.y,O.z,vt,St,Yt,Vt,ye.data):D.texSubImage3D(zt,G,O.x,O.y,O.z,vt,St,Yt,Vt,Ut,ye),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,re),D.pixelStorei(D.UNPACK_SKIP_ROWS,ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ce),G===0&&z.generateMipmaps&&D.generateMipmap(zt),gt.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?It.setTextureCube(_,0):_.isData3DTexture?It.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?It.setTexture2DArray(_,0):It.setTexture2D(_,0),gt.unbindTexture()},this.resetState=function(){k=0,F=0,P=null,gt.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Nc?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===Uo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},sc=class extends nr{};sc.prototype.isWebGL1Renderer=!0;var xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Vh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new T,Bn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var _o=class extends dn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Xe,h=Xe,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=class extends dn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Pt:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],a=[],o=new T,c=new we;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(De(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oc=class extends ir{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Wr=new T,Ca=new Bc,Pa=new Bc,La=new Bc,ac=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),l=Wr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ca.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),Pa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),La.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Pa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),La.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ca.calc(c),Pa.calc(c),La.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Dg(i,t){let e=1-i;return e*e*t}function Ug(i,t){return 2*(1-i)*i*t}function Ng(i,t){return i*i*t}function Js(i,t,e,n){return Dg(i,t)+Ug(i,e)+Ng(i,n)}function Og(i,t){let e=1-i;return e*e*e*t}function Fg(i,t){let e=1-i;return 3*e*e*i*t}function Bg(i,t){return 3*(1-i)*i*i*t}function kg(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return Og(i,t)+Fg(i,e)+Bg(i,n)+kg(i,s)}var yo=class extends Mn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends Mn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends Mn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lc=class extends Mn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Mn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends Mn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Mh(o,c.x,l.x,h.x,u.x),Mh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},uc=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:ac,CubicBezierCurve:yo,CubicBezierCurve3:cc,EllipseCurve:ir,LineCurve:vo,LineCurve3:lc,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:hc,SplineCurve:So}),dc=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uc[s.type]().fromJSON(s))}return this}},Hi=class extends dc{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new yo(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new So(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ir(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var bo=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new T,h=new Pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function M(){let w=new T,k=new T,F=0,P=(e-t)/n;for(let Y=0;Y<=r;Y++){let at=[],S=Y/r,A=S*(e-t)+t;for(let R=0;R<=s;R++){let q=R/s,L=q*c+o,C=Math.sin(L),I=Math.cos(L);k.x=A*C,k.y=-S*n+m,k.z=A*I,u.push(k.x,k.y,k.z),w.set(C,P,I).normalize(),d.push(w.x,w.y,w.z),p.push(q,1-S),at.push(g++)}y.push(at)}for(let Y=0;Y<s;Y++)for(let at=0;at<r;at++){let S=y[at][Y],A=y[at+1][Y],R=y[at+1][Y+1],q=y[at][Y+1];h.push(S,A,q),h.push(A,R,q),F+=6}l.addGroup(f,F,0),f+=F}function x(w){let k=g,F=new Pt,P=new T,Y=0,at=w===!0?t:e,S=w===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let A=g;for(let R=0;R<=s;R++){let L=R/s*c+o,C=Math.cos(L),I=Math.sin(L);P.x=at*I,P.y=m*S,P.z=at*C,u.push(P.x,P.y,P.z),d.push(0,S,0),F.x=C*.5+.5,F.y=I*.5*S+.5,p.push(F.x,F.y),g++}for(let R=0;R<s;R++){let q=k+R,L=A+R;w===!0?h.push(L,L+1,q):h.push(L+1,L,q),Y+=3}l.addGroup(f,Y,w===!0?1:2),f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wo=class i extends Pe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fc=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new T,w=new T,k=new T;for(let F=0;F<e.length;F+=3)p(e[F+0],x),p(e[F+1],w),p(e[F+2],k),c(x,w,k,M)}function c(M,x,w,k){let F=k+1,P=[];for(let Y=0;Y<=F;Y++){P[Y]=[];let at=M.clone().lerp(w,Y/F),S=x.clone().lerp(w,Y/F),A=F-Y;for(let R=0;R<=A;R++)R===0&&Y===F?P[Y][R]=at:P[Y][R]=at.clone().lerp(S,R/A)}for(let Y=0;Y<F;Y++)for(let at=0;at<2*(F-Y)-1;at++){let S=Math.floor(at/2);at%2===0?(d(P[Y][S+1]),d(P[Y+1][S]),d(P[Y][S])):(d(P[Y][S+1]),d(P[Y+1][S+1]),d(P[Y+1][S]))}}function l(M){let x=new T;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(M),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){let M=new T;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let w=m(M)/2/Math.PI+.5,k=f(M)/Math.PI+.5;a.push(w,1-k)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],w=a[M+2],k=a[M+4],F=Math.max(x,w,k),P=Math.min(x,w,k);F>.9&&P<.1&&(x<.2&&(a[M+0]+=1),w<.2&&(a[M+2]+=1),k<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,x){let w=M*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){let M=new T,x=new T,w=new T,k=new T,F=new Pt,P=new Pt,Y=new Pt;for(let at=0,S=0;at<r.length;at+=9,S+=6){M.set(r[at+0],r[at+1],r[at+2]),x.set(r[at+3],r[at+4],r[at+5]),w.set(r[at+6],r[at+7],r[at+8]),F.set(a[S+0],a[S+1]),P.set(a[S+2],a[S+3]),Y.set(a[S+4],a[S+5]),k.copy(M).add(x).add(w).divideScalar(3);let A=m(k);y(F,S+0,M,A),y(P,S+2,x,A),y(Y,S+4,w,A)}}function y(M,x,w,k){k<0&&M.x===1&&(a[x]=M.x-1),w.x===0&&w.z===0&&(a[x]=k/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xr=new T,qr=new T,Ia=new T,Yr=new Bi,Eo=class extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(_s*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:y,b:m,c:f}=Yr;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Yr.getNormal(Ia),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let x=(M+1)%3,w=u[M],k=u[x],F=Yr[h[M]],P=Yr[h[x]],Y=`${w}_${k}`,at=`${k}_${w}`;at in d&&d[at]?(Ia.dot(d[at].normal)<=r&&(p.push(F.x,F.y,F.z),p.push(P.x,P.y,P.z)),d[at]=null):Y in d||(d[Y]={index0:l[M],index1:l[x],normal:Ia.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:m}=d[g];Xr.fromBufferAttribute(o,y),qr.fromBufferAttribute(o,m),p.push(Xr.x,Xr.y,Xr.z),p.push(qr.x,qr.y,qr.z)}this.setAttribute("position",new ve(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ii=class extends Hi{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hi().fromJSON(s))}return this}},zg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Kh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=Xg(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return sr(r,a,e,o,c,p,0),a}};function Kh(i,t,e,n,s){let r,a;if(s===nx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Sh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Sh(r,i[r],i[r+1],a);return a&&Fo(a,a.next)&&(or(a),a=a.next),a}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||Re(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Jg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Vg(i,n,s,r):Hg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Gg(Vi(i),t,e),sr(i,t,e,n,s,r,2)):a===2&&Wg(i,t,e,n,s,r):sr(Vi(i),t,e,n,s,r,1);break}}}function Hg(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&gs(s,o,r,c,a,l,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Re(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=pc(p,g,t,e,n),M=pc(y,m,t,e,n),x=i.prevZ,w=i.nextZ;for(;x&&x.z>=f&&w&&w.z<=M;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&gs(o,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=p&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&gs(o,h,c,u,l,d,w.x,w.y)&&Re(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&gs(o,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=M;){if(w.x>=p&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&gs(o,h,c,u,l,d,w.x,w.y)&&Re(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Gg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Fo(s,r)&&jh(s,n,n.next,r)&&rr(s,r)&&rr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),or(n),or(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function Wg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qg(a,o)){let c=Qh(a,o);a=Vi(a,a.next),c=Vi(c,c.next),sr(a,t,e,n,s,r,0),sr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xg(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Kh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(jg(l));for(s.sort(qg),r=0;r<s.length;r++)e=Yg(s[r],e);return e}function qg(i,t){return i.x-t.x}function Yg(i,t){let e=$g(i,t);if(!e)return t;let n=Qh(e,i);return Vi(n,n.next),Vi(e,e.next)}function $g(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&gs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),rr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Zg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Zg(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function Jg(i,t,e,n){let s=i;do s.z===0&&(s.z=pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kg(s)}function Kg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tx(i,t)&&(rr(i,t)&&rr(t,i)&&ex(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Fo(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fo(i,t){return i.x===t.x&&i.y===t.y}function jh(i,t,e,n){let s=Zr(Re(i,t,e)),r=Zr(Re(i,t,n)),a=Zr(Re(e,n,i)),o=Zr(Re(e,n,t));return!!(s!==r&&a!==o||s===0&&$r(i,e,t)||r===0&&$r(i,n,t)||a===0&&$r(e,i,n)||o===0&&$r(e,t,n))}function $r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function tx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function ex(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qh(i,t){let e=new mc(i.i,i.x,i.y),n=new mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sh(i,t,e,n){let s=new mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bh(t),wh(n,t);let a=t.length;e.forEach(bh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,wh(n,e[c]);let o=zg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Dn=class i extends Oe{constructor(t=new ii([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ix,x,w=!1,k,F,P,Y;f&&(x=f.getSpacedPoints(h),w=!0,d=!1,k=f.computeFrenetFrames(h,!1),F=new T,P=new T,Y=new T),d||(m=0,p=0,g=0,y=0);let at=o.extractPoints(l),S=at.shape,A=at.holes;if(!yi.isClockWise(S)){S=S.reverse();for(let D=0,bt=A.length;D<bt;D++){let pt=A[D];yi.isClockWise(pt)&&(A[D]=pt.reverse())}}let q=yi.triangulateShape(S,A),L=S;for(let D=0,bt=A.length;D<bt;D++){let pt=A[D];S=S.concat(pt)}function C(D,bt,pt){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(bt,pt)}let I=S.length,W=q.length;function B(D,bt,pt){let Rt,gt,Mt,_t=D.x-bt.x,It=D.y-bt.y,te=pt.x-D.x,E=pt.y-D.y,v=_t*_t+It*It,ot=_t*E-It*te;if(Math.abs(ot)>Number.EPSILON){let ft=Math.sqrt(v),wt=Math.sqrt(te*te+E*E),yt=bt.x-It/ft,Xt=bt.y+_t/ft,Zt=pt.x-E/wt,Bt=pt.y+te/wt,Gt=((Zt-yt)*E-(Bt-Xt)*te)/(_t*E-It*te);Rt=yt+_t*Gt-D.x,gt=Xt+It*Gt-D.y;let Qt=Rt*Rt+gt*gt;if(Qt<=2)return new Pt(Rt,gt);Mt=Math.sqrt(Qt/2)}else{let ft=!1;_t>Number.EPSILON?te>Number.EPSILON&&(ft=!0):_t<-Number.EPSILON?te<-Number.EPSILON&&(ft=!0):Math.sign(It)===Math.sign(E)&&(ft=!0),ft?(Rt=-It,gt=_t,Mt=Math.sqrt(v)):(Rt=_t,gt=It,Mt=Math.sqrt(v/2))}return new Pt(Rt/Mt,gt/Mt)}let X=[];for(let D=0,bt=L.length,pt=bt-1,Rt=D+1;D<bt;D++,pt++,Rt++)pt===bt&&(pt=0),Rt===bt&&(Rt=0),X[D]=B(L[D],L[pt],L[Rt]);let ct=[],Q,tt=X.concat();for(let D=0,bt=A.length;D<bt;D++){let pt=A[D];Q=[];for(let Rt=0,gt=pt.length,Mt=gt-1,_t=Rt+1;Rt<gt;Rt++,Mt++,_t++)Mt===gt&&(Mt=0),_t===gt&&(_t=0),Q[Rt]=B(pt[Rt],pt[Mt],pt[_t]);ct.push(Q),tt=tt.concat(Q)}for(let D=0;D<m;D++){let bt=D/m,pt=p*Math.cos(bt*Math.PI/2),Rt=g*Math.sin(bt*Math.PI/2)+y;for(let gt=0,Mt=L.length;gt<Mt;gt++){let _t=C(L[gt],X[gt],Rt);Tt(_t.x,_t.y,-pt)}for(let gt=0,Mt=A.length;gt<Mt;gt++){let _t=A[gt];Q=ct[gt];for(let It=0,te=_t.length;It<te;It++){let E=C(_t[It],Q[It],Rt);Tt(E.x,E.y,-pt)}}}let lt=g+y;for(let D=0;D<I;D++){let bt=d?C(S[D],tt[D],lt):S[D];w?(P.copy(k.normals[0]).multiplyScalar(bt.x),F.copy(k.binormals[0]).multiplyScalar(bt.y),Y.copy(x[0]).add(P).add(F),Tt(Y.x,Y.y,Y.z)):Tt(bt.x,bt.y,0)}for(let D=1;D<=h;D++)for(let bt=0;bt<I;bt++){let pt=d?C(S[bt],tt[bt],lt):S[bt];w?(P.copy(k.normals[D]).multiplyScalar(pt.x),F.copy(k.binormals[D]).multiplyScalar(pt.y),Y.copy(x[D]).add(P).add(F),Tt(Y.x,Y.y,Y.z)):Tt(pt.x,pt.y,u/h*D)}for(let D=m-1;D>=0;D--){let bt=D/m,pt=p*Math.cos(bt*Math.PI/2),Rt=g*Math.sin(bt*Math.PI/2)+y;for(let gt=0,Mt=L.length;gt<Mt;gt++){let _t=C(L[gt],X[gt],Rt);Tt(_t.x,_t.y,u+pt)}for(let gt=0,Mt=A.length;gt<Mt;gt++){let _t=A[gt];Q=ct[gt];for(let It=0,te=_t.length;It<te;It++){let E=C(_t[It],Q[It],Rt);w?Tt(E.x,E.y+x[h-1].y,x[h-1].x+pt):Tt(E.x,E.y,u+pt)}}}H(),st();function H(){let D=s.length/3;if(d){let bt=0,pt=I*bt;for(let Rt=0;Rt<W;Rt++){let gt=q[Rt];At(gt[2]+pt,gt[1]+pt,gt[0]+pt)}bt=h+m*2,pt=I*bt;for(let Rt=0;Rt<W;Rt++){let gt=q[Rt];At(gt[0]+pt,gt[1]+pt,gt[2]+pt)}}else{for(let bt=0;bt<W;bt++){let pt=q[bt];At(pt[2],pt[1],pt[0])}for(let bt=0;bt<W;bt++){let pt=q[bt];At(pt[0]+I*h,pt[1]+I*h,pt[2]+I*h)}}n.addGroup(D,s.length/3-D,0)}function st(){let D=s.length/3,bt=0;mt(L,bt),bt+=L.length;for(let pt=0,Rt=A.length;pt<Rt;pt++){let gt=A[pt];mt(gt,bt),bt+=gt.length}n.addGroup(D,s.length/3-D,1)}function mt(D,bt){let pt=D.length;for(;--pt>=0;){let Rt=pt,gt=pt-1;gt<0&&(gt=D.length-1);for(let Mt=0,_t=h+m*2;Mt<_t;Mt++){let It=I*Mt,te=I*(Mt+1),E=bt+Rt+It,v=bt+gt+It,ot=bt+gt+te,ft=bt+Rt+te;ut(E,v,ot,ft)}}}function Tt(D,bt,pt){c.push(D),c.push(bt),c.push(pt)}function At(D,bt,pt){Ot(D),Ot(bt),Ot(pt);let Rt=s.length/3,gt=M.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);Ht(gt[0]),Ht(gt[1]),Ht(gt[2])}function ut(D,bt,pt,Rt){Ot(D),Ot(bt),Ot(Rt),Ot(bt),Ot(pt),Ot(Rt);let gt=s.length/3,Mt=M.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);Ht(Mt[0]),Ht(Mt[1]),Ht(Mt[3]),Ht(Mt[1]),Ht(Mt[2]),Ht(Mt[3])}function Ot(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function Ht(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uc[s.type]().fromJSON(s)),new i(n,t.options)}},ix={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Pt(r,a),new Pt(o,c),new Pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Pt(a,1-c),new Pt(l,1-u),new Pt(d,1-g),new Pt(y,1-f)]:[new Pt(o,1-c),new Pt(h,1-u),new Pt(p,1-g),new Pt(m,1-f)]}};function sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ar=class i extends fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var cr=class i extends Oe{constructor(t=new ii([new Pt(0,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(a,2));function l(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;yi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];yi.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=yi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,f=y.length;m<f;m++){let M=y[m],x=M[0]+u,w=M[1]+u,k=M[2]+u;n.push(x,w,k),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return rx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function rx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var To=class extends Oe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new T,r=new T;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,p=u.count;for(let g=d,y=d+p;g<y;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),M=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,M),Eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Eh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Ge=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ro=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ox(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,o=2*e-n;break;case Il:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:a=t,c=2*n-e;break;case Il:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,w=p*m-p*y;for(let k=0;k!==o;++k)r[k]=f*a[h+k]+M*a[l+k]+x*a[c+k]+w*a[u+k];return r}},xc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},_c=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ox(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=to;var Gi=class extends Un{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Qr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Un{};yc.prototype.ValueTypeName="color";var vc=class extends Un{};vc.prototype.ValueTypeName="number";var Mc=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},lr=class extends Un{InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.DefaultInterpolation=to;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Un{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Qr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Un{};Sc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ax=new bc,wc=class{constructor(t){this.manager=t!==void 0?t:ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Co=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Da=new we,Th=new T,Ah=new T,hr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ec=class extends hr{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ws*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ur=class extends Is{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ec}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Rh=new we,Ys=new T,Ua=new T,Tc=class extends hr{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),Ua.copy(n.position),Ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ua),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}},Xi=class extends Is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ac=class extends hr{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Po=class extends Oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var kc="\\[\\]\\.:\\/",cx=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",lx="[^"+kc.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",zc),ux=/(WCOD+)?/.source.replace("WCOD",lx),dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),px=new RegExp("^"+hx+ux+dx+fx+"$"),mx=["material","materials","bones","map"],Rc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(t){let e=px.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Rc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);var qi=class extends rc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ch=new we,fr=class{constructor(t,e,n=0,s=1/0){this.ray=new Es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(t,e=!0,n=[]){return Cc(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cc(t[s],this,n,e);return n.sort(Ph),n}};function Ph(i,t){return i.distance-t.distance}function Cc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Cc(s[r],t,e,!0)}}var si=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lh=new T,Kr=new T,Lo=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Lh.subVectors(t,this.start),Kr.subVectors(this.end,this.start);let n=Kr.dot(Kr),r=Kr.dot(Lh)/n;return e&&(r=De(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var tu={type:"change"},Hc={type:"start"},eu={type:"end"},ko=new Es,nu=new An,gx=Math.cos(70*ri.DEG2RAD),zo=class extends On{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Zt),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Zt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tu),n.update(),r=s.NONE},this.update=(function(){let b=new T,J=new Ln().setFromUnitVectors(t.up,new T(0,1,0)),xt=J.clone().invert(),U=new T,Et=new Ln,et=new T,Lt=2*Math.PI;return function(ie=null){let ee=n.object.position;b.copy(ee).sub(n.target),b.applyQuaternion(J),o.setFromVector3(b),n.autoRotate&&r===s.NONE&&R(S(ie)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let oe=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(oe)&&isFinite(pe)&&(oe<-Math.PI?oe+=Lt:oe>Math.PI&&(oe-=Lt),pe<-Math.PI?pe+=Lt:pe>Math.PI&&(pe-=Lt),oe<=pe?o.theta=Math.max(oe,Math.min(pe,o.theta)):o.theta=o.theta>(oe+pe)/2?Math.max(oe,o.theta):Math.min(pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ae=!1;if(n.zoomToCursor&&F||n.object.isOrthographicCamera)o.radius=ct(o.radius);else{let rt=o.radius;o.radius=ct(o.radius*l),ae=rt!=o.radius}if(b.setFromSpherical(o),b.applyQuaternion(xt),ee.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&F){let rt=null;if(n.object.isPerspectiveCamera){let dt=b.length();rt=ct(dt*l);let Dt=dt-rt;n.object.position.addScaledVector(w,Dt),n.object.updateMatrixWorld(),ae=!!Dt}else if(n.object.isOrthographicCamera){let dt=new T(k.x,k.y,0);dt.unproject(n.object);let Dt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ae=Dt!==n.object.zoom;let Ct=new T(k.x,k.y,0);Ct.unproject(n.object),n.object.position.sub(Ct).add(dt),n.object.updateMatrixWorld(),rt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(rt).add(n.object.position):(ko.origin.copy(n.object.position),ko.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ko.direction))<gx?t.lookAt(n.target):(nu.setFromNormalAndCoplanarPoint(n.object.up,n.target),ko.intersectPlane(nu,n.target))))}else if(n.object.isOrthographicCamera){let rt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),rt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ae=!0)}return l=1,F=!1,ae||U.distanceToSquared(n.object.position)>a||8*(1-Et.dot(n.object.quaternion))>a||et.distanceToSquared(n.target)>a?(n.dispatchEvent(tu),U.copy(n.object.position),Et.copy(n.object.quaternion),et.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qt),n.domElement.removeEventListener("pointerdown",It),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",ft),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",E),n.domElement.getRootNode().removeEventListener("keydown",yt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Zt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new si,c=new si,l=1,h=new T,u=new Pt,d=new Pt,p=new Pt,g=new Pt,y=new Pt,m=new Pt,f=new Pt,M=new Pt,x=new Pt,w=new T,k=new Pt,F=!1,P=[],Y={},at=!1;function S(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function A(b){let J=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*J)}function R(b){c.theta-=b}function q(b){c.phi-=b}let L=(function(){let b=new T;return function(xt,U){b.setFromMatrixColumn(U,0),b.multiplyScalar(-xt),h.add(b)}})(),C=(function(){let b=new T;return function(xt,U){n.screenSpacePanning===!0?b.setFromMatrixColumn(U,1):(b.setFromMatrixColumn(U,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(xt),h.add(b)}})(),I=(function(){let b=new T;return function(xt,U){let Et=n.domElement;if(n.object.isPerspectiveCamera){let et=n.object.position;b.copy(et).sub(n.target);let Lt=b.length();Lt*=Math.tan(n.object.fov/2*Math.PI/180),L(2*xt*Lt/Et.clientHeight,n.object.matrix),C(2*U*Lt/Et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(xt*(n.object.right-n.object.left)/n.object.zoom/Et.clientWidth,n.object.matrix),C(U*(n.object.top-n.object.bottom)/n.object.zoom/Et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function W(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(b,J){if(!n.zoomToCursor)return;F=!0;let xt=n.domElement.getBoundingClientRect(),U=b-xt.left,Et=J-xt.top,et=xt.width,Lt=xt.height;k.x=U/et*2-1,k.y=-(Et/Lt)*2+1,w.set(k.x,k.y,1).unproject(n.object).sub(n.object.position).normalize()}function ct(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function Q(b){u.set(b.clientX,b.clientY)}function tt(b){X(b.clientX,b.clientX),f.set(b.clientX,b.clientY)}function lt(b){g.set(b.clientX,b.clientY)}function H(b){d.set(b.clientX,b.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let J=n.domElement;R(2*Math.PI*p.x/J.clientHeight),q(2*Math.PI*p.y/J.clientHeight),u.copy(d),n.update()}function st(b){M.set(b.clientX,b.clientY),x.subVectors(M,f),x.y>0?W(A(x.y)):x.y<0&&B(A(x.y)),f.copy(M),n.update()}function mt(b){y.set(b.clientX,b.clientY),m.subVectors(y,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(y),n.update()}function Tt(b){X(b.clientX,b.clientY),b.deltaY<0?B(A(b.deltaY)):b.deltaY>0&&W(A(b.deltaY)),n.update()}function At(b){let J=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),n.update())}function ut(b){if(P.length===1)u.set(b.pageX,b.pageY);else{let J=Z(b),xt=.5*(b.pageX+J.x),U=.5*(b.pageY+J.y);u.set(xt,U)}}function Ot(b){if(P.length===1)g.set(b.pageX,b.pageY);else{let J=Z(b),xt=.5*(b.pageX+J.x),U=.5*(b.pageY+J.y);g.set(xt,U)}}function Ht(b){let J=Z(b),xt=b.pageX-J.x,U=b.pageY-J.y,Et=Math.sqrt(xt*xt+U*U);f.set(0,Et)}function D(b){n.enableZoom&&Ht(b),n.enablePan&&Ot(b)}function bt(b){n.enableZoom&&Ht(b),n.enableRotate&&ut(b)}function pt(b){if(P.length==1)d.set(b.pageX,b.pageY);else{let xt=Z(b),U=.5*(b.pageX+xt.x),Et=.5*(b.pageY+xt.y);d.set(U,Et)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let J=n.domElement;R(2*Math.PI*p.x/J.clientHeight),q(2*Math.PI*p.y/J.clientHeight),u.copy(d)}function Rt(b){if(P.length===1)y.set(b.pageX,b.pageY);else{let J=Z(b),xt=.5*(b.pageX+J.x),U=.5*(b.pageY+J.y);y.set(xt,U)}m.subVectors(y,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(y)}function gt(b){let J=Z(b),xt=b.pageX-J.x,U=b.pageY-J.y,Et=Math.sqrt(xt*xt+U*U);M.set(0,Et),x.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),W(x.y),f.copy(M);let et=(b.pageX+J.x)*.5,Lt=(b.pageY+J.y)*.5;X(et,Lt)}function Mt(b){n.enableZoom&&gt(b),n.enablePan&&Rt(b)}function _t(b){n.enableZoom&&gt(b),n.enableRotate&&pt(b)}function It(b){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",E)),!K(b)&&(Nt(b),b.pointerType==="touch"?Bt(b):v(b)))}function te(b){n.enabled!==!1&&(b.pointerType==="touch"?Gt(b):ot(b))}function E(b){switch(Me(b),P.length){case 0:n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",E),n.dispatchEvent(eu),r=s.NONE;break;case 1:let J=P[0],xt=Y[J];Bt({pointerId:J,pageX:xt.x,pageY:xt.y});break}}function v(b){let J;switch(b.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case kn.DOLLY:if(n.enableZoom===!1)return;tt(b),r=s.DOLLY;break;case kn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;lt(b),r=s.PAN}else{if(n.enableRotate===!1)return;Q(b),r=s.ROTATE}break;case kn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;Q(b),r=s.ROTATE}else{if(n.enablePan===!1)return;lt(b),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Hc)}function ot(b){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;H(b);break;case s.DOLLY:if(n.enableZoom===!1)return;st(b);break;case s.PAN:if(n.enablePan===!1)return;mt(b);break}}function ft(b){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(b.preventDefault(),n.dispatchEvent(Hc),Tt(wt(b)),n.dispatchEvent(eu))}function wt(b){let J=b.deltaMode,xt={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(J){case 1:xt.deltaY*=16;break;case 2:xt.deltaY*=100;break}return b.ctrlKey&&!at&&(xt.deltaY*=10),xt}function yt(b){b.key==="Control"&&(at=!0,n.domElement.getRootNode().addEventListener("keyup",Xt,{passive:!0,capture:!0}))}function Xt(b){b.key==="Control"&&(at=!1,n.domElement.getRootNode().removeEventListener("keyup",Xt,{passive:!0,capture:!0}))}function Zt(b){n.enabled===!1||n.enablePan===!1||At(b)}function Bt(b){switch(nt(b),P.length){case 1:switch(n.touches.ONE){case zn.ROTATE:if(n.enableRotate===!1)return;ut(b),r=s.TOUCH_ROTATE;break;case zn.PAN:if(n.enablePan===!1)return;Ot(b),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(b),r=s.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(b),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Hc)}function Gt(b){switch(nt(b),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;pt(b),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Rt(b),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(b),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(b),n.update();break;default:r=s.NONE}}function Qt(b){n.enabled!==!1&&b.preventDefault()}function Nt(b){P.push(b.pointerId)}function Me(b){delete Y[b.pointerId];for(let J=0;J<P.length;J++)if(P[J]==b.pointerId){P.splice(J,1);return}}function K(b){for(let J=0;J<P.length;J++)if(P[J]==b.pointerId)return!0;return!1}function nt(b){let J=Y[b.pointerId];J===void 0&&(J=new Pt,Y[b.pointerId]=J),J.set(b.pageX,b.pageY)}function Z(b){let J=b.pointerId===P[0]?P[1]:P[0];return Y[J]}n.domElement.addEventListener("contextmenu",Qt),n.domElement.addEventListener("pointerdown",It),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",ft,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",yt,{passive:!0,capture:!0}),this.update()}};var Ho=class extends Cs{constructor(t=null){super();let e=new Fe;e.deleteAttribute("uv");let n=new Ge({side:en}),s=new Ge,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new Xi(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new de(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new de(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new de(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new de(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new de(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new de(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new de(e,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new de(e,Us(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let y=new de(e,Us(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let m=new de(e,Us(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new de(e,Us(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let M=new de(e,Us(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let x=new de(e,Us(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Us(i){let t=new Ts;return t.color.setScalar(i),t}var iu=new cn,Vo=new T,Ns=class extends Po{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ve(t,3)),this.setAttribute("uv",new ve(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new qi(e,6,1);return this.setAttribute("instanceStart",new Bn(n,3,0)),this.setAttribute("instanceEnd",new Bn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new qi(e,6,1);return this.setAttribute("instanceColorStart",new Bn(n,3,0)),this.setAttribute("instanceColorEnd",new Bn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new To(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),iu.setFromBufferAttribute(e),this.boundingBox.union(iu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Vo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Vo)),Vo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};Wt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Pt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};rn.line={uniforms:No.merge([Wt.common,Wt.fog,Wt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Os=class extends vn{constructor(t){super({type:"LineMaterial",uniforms:No.clone(rn.line.uniforms),vertexShader:rn.line.vertexShader,fragmentShader:rn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var su=new T,ru=new T,$e=new _e,Ze=new _e,Hn=new _e,Vc=new T,Gc=new we,Je=new Lo,ou=new T,Go=new cn,Wo=new ni,Vn=new _e,Gn,Yi;function au(i,t,e){return Vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Vn.multiplyScalar(1/Vn.w),Vn.x=Yi/e.width,Vn.y=Yi/e.height,Vn.applyMatrix4(i.projectionMatrixInverse),Vn.multiplyScalar(1/Vn.w),Math.abs(Math.max(Vn.x,Vn.y))}function xx(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){Je.start.fromBufferAttribute(s,o),Je.end.fromBufferAttribute(r,o),Je.applyMatrix4(e);let l=new T,h=new T;Gn.distanceSqToSegment(Je.start,Je.end,h,l),h.distanceTo(l)<Yi*.5&&t.push({point:h,pointOnLine:l,distance:Gn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function _x(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),u=-t.near;Gn.at(1,Hn),Hn.w=1,Hn.applyMatrix4(t.matrixWorldInverse),Hn.applyMatrix4(n),Hn.multiplyScalar(1/Hn.w),Hn.x*=r.x/2,Hn.y*=r.y/2,Hn.z=0,Vc.copy(Hn),Gc.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if($e.fromBufferAttribute(c,d),Ze.fromBufferAttribute(l,d),$e.w=1,Ze.w=1,$e.applyMatrix4(Gc),Ze.applyMatrix4(Gc),$e.z>u&&Ze.z>u)continue;if($e.z>u){let x=$e.z-Ze.z,w=($e.z-u)/x;$e.lerp(Ze,w)}else if(Ze.z>u){let x=Ze.z-$e.z,w=(Ze.z-u)/x;Ze.lerp($e,w)}$e.applyMatrix4(n),Ze.applyMatrix4(n),$e.multiplyScalar(1/$e.w),Ze.multiplyScalar(1/Ze.w),$e.x*=r.x/2,$e.y*=r.y/2,Ze.x*=r.x/2,Ze.y*=r.y/2,Je.start.copy($e),Je.start.z=0,Je.end.copy(Ze),Je.end.z=0;let y=Je.closestPointToPointParameter(Vc,!0);Je.at(y,ou);let m=ri.lerp($e.z,Ze.z,y),f=m>=-1&&m<=1,M=Vc.distanceTo(ou)<Yi*.5;if(f&&M){Je.start.fromBufferAttribute(c,d),Je.end.fromBufferAttribute(l,d),Je.start.applyMatrix4(a),Je.end.applyMatrix4(a);let x=new T,w=new T;Gn.distanceSqToSegment(Je.start,Je.end,w,x),e.push({point:w,pointOnLine:x,distance:Gn.origin.distanceTo(w),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var Xo=class extends de{constructor(t=new Ns,e=new Os({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)su.fromBufferAttribute(e,a),ru.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+su.distanceTo(ru);let r=new qi(s,2,1);return t.setAttribute("instanceDistanceStart",new Bn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Bn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gn=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;Yi=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Wo.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Yi*.5;else{let u=Math.max(s.near,Wo.distanceToPoint(Gn.origin));l=au(s,u,c.resolution)}if(Wo.radius+=l,Gn.intersectsSphere(Wo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Go.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Yi*.5;else{let u=Math.max(s.near,Go.distanceToPoint(Gn.origin));h=au(s,u,c.resolution)}Go.expandByScalar(h),Gn.intersectsBox(Go)!==!1&&(n?xx(this,e):_x(this,s,e))}};var $i={source:"https://www.oecogardenrooms.co.uk/garden-rooms.html (configurator: shape, size, style steps) and https://www.oecogardenrooms.co.uk/pages/optional-extras.html",verifiedAt:"2026-10-13T06:38:23.344019+00:00",styles:["thermo-contemporary","thermo-classic","smoothgrain","woodgrain","cedar-contemporary","cedar-classic"],prices:{cube:[[2.5,2.5,16524,16524,16638,16980,17778,17778],[3,2.5,17322,17322,17550,17892,18804,18804],[3,3,18462,18462,18576,19032,19944,19944],[3,3.5,19146,19146,19260,19716,20742,20742],[3,4,19944,19944,20172,20628,21768,21768],[3,4.5,20856,20856,21084,21540,22794,22794],[3,5,21654,21654,21996,22566,23820,23820],[3.5,2.5,18234,18234,18462,18804,19716,19716],[3.5,3,19146,19146,19374,19830,20856,20856],[3.5,3.5,20058,20058,20286,20742,21882,21882],[3.5,4,20970,20970,21198,21768,22908,22908],[3.5,4.5,22224,22224,22452,23022,24276,24276],[3.5,5,23478,23478,23706,24276,25644,25644],[4,2.5,19146,19146,19260,19716,20742,20742],[4,3,20058,20058,20286,20742,21882,21882],[4,3.5,21084,21084,21312,21768,23022,23022],[4,4,22680,22680,22908,23478,24732,24732],[4,4.5,23934,23934,24162,24732,26214,26214],[4,5,25188,25188,25530,26100,27582,27582],[4.5,2.5,19716,19716,19944,20400,21540,21540],[4.5,3,20970,20970,21198,21768,22908,22908],[4.5,3.5,22338,22338,22566,23136,24390,24390],[4.5,4,23934,23934,24276,24846,26214,26214],[4.5,4.5,25644,25644,25872,26556,28038,28038],[4.5,5,26898,26898,27240,27924,29520,29520],[5,2.5,20514,20514,20742,21312,22452,22452],[5,3,21882,21882,22224,22794,24048,24048],[5,3.5,23592,23592,23934,24504,25872,25872],[5,4,25302,25302,25644,26214,27696,27696],[5,4.5,27012,27012,27354,27924,29520,29520],[5,5,28722,28722,28950,29748,31344,31344],[5.5,2.5,21426,21426,21654,22224,23478,23478],[5.5,3,23136,23136,23478,24048,25416,25416],[5.5,3.5,24846,24846,25188,25872,27240,27240],[5.5,4,26898,26898,27240,27924,29520,29520],[5.5,4.5,28380,28380,28722,29406,31116,31116],[5.5,5,30432,30432,30774,31572,33282,33282],[6,2.5,21996,21996,22224,22794,24276,24276],[6,3,24390,24390,24732,25302,26784,26784],[6,3.5,26442,26442,26784,27468,29064,29064],[6,4,27924,27924,28266,29064,30660,30660],[6,4.5,30090,30090,30432,31116,32940,32940],[6,5,32712,32712,33168,33966,35790,35790],[6.5,2.5,23478,23478,23820,24390,25872,25872],[6.5,3,25302,25302,25644,26328,27810,27810],[6.5,3.5,27468,27468,27810,28494,30204,30204],[6.5,4,29634,29634,29976,30660,32484,32484],[6.5,4.5,31800,31800,32142,32940,34764,34764],[7,2.5,24390,24390,24618,25302,26898,26898],[7,3,26898,26898,27240,27924,29520,29520],[7,3.5,28722,28722,29064,29862,31572,31572],[7,4,31230,31230,31572,32370,34308,34308],[7,4.5,33396,33396,33852,34650,36588,36588],[7.5,2.5,25188,25188,25530,26214,27924,27924],[7.5,3,27810,27810,28152,28836,30660,30660],[7.5,3.5,29976,29976,30432,31230,33054,33054],[7.5,4,32598,32598,32940,33852,35676,35676],[8,2.5,26100,26100,26442,27126,28950,28950],[8,3,28722,28722,29064,29862,31686,31686],[8,3.5,31116,31116,31572,32370,34308,34308],[8,4,34536,34536,34992,35790,37842,37842],[8.5,2.5,27582,27582,27924,28722,30546,30546],[8.5,3,29976,29976,30318,31116,33054,33054],[8.5,3.5,32598,32598,33054,33852,35904,35904],[9,2.5,28494,28494,28836,29634,31572,31572],[9,3,31116,31116,31572,32370,34422,34422],[9,3.5,34194,34194,34650,35562,37614,37614],[9.5,2.5,29064,29064,29406,30318,32256,32256],[9.5,3,32370,32370,32826,33738,35790,35790],[10,2.5,30204,30204,30660,31458,33624,33624],[10,3,33624,33624,34080,34992,37158,37158]],canopy:[[2.5,2.5,17208,17208,17322,17664,18462,18462],[3,2.5,18063,18063,18291,18633,19545,19545],[3,3,19203,19203,19317,19773,20685,20685],[3,3.5,19887,19887,20001,20457,21483,21483],[3,4,20685,20685,20913,21369,22509,22509],[3,4.5,21597,21597,21825,22281,23535,23535],[3,5,22395,22395,22737,23307,24561,24561],[3.5,2.5,19032,19032,19260,19602,20514,20514],[3.5,3,19944,19944,20172,20628,21654,21654],[3.5,3.5,20856,20856,21084,21540,22680,22680],[3.5,4,21768,21768,21996,22566,23706,23706],[3.5,4.5,23022,23022,23250,23820,25074,25074],[3.5,5,24276,24276,24504,25074,26442,26442],[4,2.5,20001,20001,20115,20571,21597,21597],[4,3,20913,20913,21141,21597,22737,22737],[4,3.5,21939,21939,22167,22623,23877,23877],[4,4,23535,23535,23763,24333,25587,25587],[4,4.5,24789,24789,25017,25587,27069,27069],[4,5,26043,26043,26385,26955,28437,28437],[4.5,2.5,20628,20628,20856,21312,22452,22452],[4.5,3,21882,21882,22110,22680,23820,23820],[4.5,3.5,23250,23250,23478,24048,25302,25302],[4.5,4,24846,24846,25188,25758,27126,27126],[4.5,4.5,26556,26556,26784,27468,28950,28950],[4.5,5,27810,27810,28152,28836,30432,30432],[5,2.5,21483,21483,21711,22281,23421,23421],[5,3,22851,22851,23193,23763,25017,25017],[5,3.5,24561,24561,24903,25473,26841,26841],[5,4,26271,26271,26613,27183,28665,28665],[5,4.5,27981,27981,28323,28893,30489,30489],[5,5,29691,29691,29919,30717,32313,32313],[5.5,2.5,22452,22452,22680,23250,24504,24504],[5.5,3,24162,24162,24504,25074,26442,26442],[5.5,3.5,25872,25872,26214,26898,28266,28266],[5.5,4,27924,27924,28266,28950,30546,30546],[5.5,4.5,29406,29406,29748,30432,32142,32142],[5.5,5,31458,31458,31800,32598,34308,34308],[6,2.5,23079,23079,23307,23877,25359,25359],[6,3,25473,25473,25815,26385,27867,27867],[6,3.5,27525,27525,27867,28551,30147,30147],[6,4,29007,29007,29349,30147,31743,31743],[6,4.5,31173,31173,31515,32199,34023,34023],[6,5,33795,33795,34251,35049,36873,36873],[6.5,2.5,24618,24618,24960,25530,27012,27012],[6.5,3,26442,26442,26784,27468,28950,28950],[6.5,3.5,28608,28608,28950,29634,31344,31344],[6.5,4,30774,30774,31116,31800,33624,33624],[6.5,4.5,32940,32940,33282,34080,35904,35904],[7,2.5,25587,25587,25815,26499,28095,28095],[7,3,28095,28095,28437,29121,30717,30717],[7,3.5,29919,29919,30261,31059,32769,32769],[7,4,32427,32427,32769,33567,35505,35505],[7,4.5,34593,34593,35049,35847,37785,37785],[7.5,2.5,26442,26442,26784,27468,29178,29178],[7.5,3,29064,29064,29406,30090,31914,31914],[7.5,3.5,31230,31230,31686,32484,34308,34308],[7.5,4,33852,33852,34194,35106,36930,36930],[8,2.5,27411,27411,27753,28437,30261,30261],[8,3,30033,30033,30375,31173,32997,32997],[8,3.5,32427,32427,32883,33681,35619,35619],[8,4,35847,35847,36303,37101,39153,39153],[8.5,2.5,28950,28950,29292,30090,31914,31914],[8.5,3,31344,31344,31686,32484,34422,34422],[8.5,3.5,33966,33966,34422,35220,37272,37272],[9,2.5,29919,29919,30261,31059,32997,32997],[9,3,32541,32541,32997,33795,35847,35847],[9,3.5,35619,35619,36075,36987,39039,39039],[9.5,2.5,30546,30546,30888,31800,33738,33738],[9.5,3,33852,33852,34308,35220,37272,37272],[10,2.5,31743,31743,32199,32997,35163,35163],[10,3,35163,35163,35619,36531,38697,38697]],corner:[[2.5,2.5,17322,17322,17436,17778,18576,18576],[3,2.5,18120,18120,18348,18690,19602,19602],[3,3,19260,19260,19374,19830,20742,20742],[3,3.5,19944,19944,20058,20514,21540,21540],[3,4,20742,20742,20970,21426,22566,22566],[3,4.5,21654,21654,21882,22338,23592,23592],[3,5,22452,22452,22794,23364,24618,24618],[3.5,2.5,19032,19032,19260,19602,20514,20514],[3.5,3,19944,19944,20172,20628,21654,21654],[3.5,3.5,20856,20856,21084,21540,22680,22680],[3.5,4,21768,21768,21996,22566,23706,23706],[3.5,4.5,23022,23022,23250,23820,25074,25074],[3.5,5,24276,24276,24504,25074,26442,26442],[4,2.5,19944,19944,20058,20514,21540,21540],[4,3,20856,20856,21084,21540,22680,22680],[4,3.5,21882,21882,22110,22566,23820,23820],[4,4,23478,23478,23706,24276,25530,25530],[4,4.5,24732,24732,24960,25530,27012,27012],[4,5,25986,25986,26328,26898,28380,28380],[4.5,2.5,20514,20514,20742,21198,22338,22338],[4.5,3,21768,21768,21996,22566,23706,23706],[4.5,3.5,23136,23136,23364,23934,25188,25188],[4.5,4,24732,24732,25074,25644,27012,27012],[4.5,4.5,26442,26442,26670,27354,28836,28836],[4.5,5,27696,27696,28038,28722,30318,30318],[5,2.5,21312,21312,21540,22110,23250,23250],[5,3,22680,22680,23022,23592,24846,24846],[5,3.5,24390,24390,24732,25302,26670,26670],[5,4,26100,26100,26442,27012,28494,28494],[5,4.5,27810,27810,28152,28722,30318,30318],[5,5,29520,29520,29748,30546,32142,32142],[5.5,2.5,22224,22224,22452,23022,24276,24276],[5.5,3,23934,23934,24276,24846,26214,26214],[5.5,3.5,25644,25644,25986,26670,28038,28038],[5.5,4,27696,27696,28038,28722,30318,30318],[5.5,4.5,29178,29178,29520,30204,31914,31914],[5.5,5,31230,31230,31572,32370,34080,34080],[6,2.5,22794,22794,23022,23592,25074,25074],[6,3,25188,25188,25530,26100,27582,27582],[6,3.5,27240,27240,27582,28266,29862,29862],[6,4,28722,28722,29064,29862,31458,31458],[6,4.5,30888,30888,31230,31914,33738,33738],[6,5,33510,33510,33966,34764,36588,36588],[6.5,2.5,24276,24276,24618,25188,26670,26670],[6.5,3,26100,26100,26442,27126,28608,28608],[6.5,3.5,28266,28266,28608,29292,31002,31002],[6.5,4,30432,30432,30774,31458,33282,33282],[6.5,4.5,32598,32598,32940,33738,35562,35562],[7,2.5,25188,25188,25416,26100,27696,27696],[7,3,27696,27696,28038,28722,30318,30318],[7,3.5,29520,29520,29862,30660,32370,32370],[7,4,32028,32028,32370,33168,35106,35106],[7,4.5,34194,34194,34650,35448,37386,37386],[7.5,2.5,25986,25986,26328,27012,28722,28722],[7.5,3,28608,28608,28950,29634,31458,31458],[7.5,3.5,30774,30774,31230,32028,33852,33852],[7.5,4,33396,33396,33738,34650,36474,36474],[8,2.5,26898,26898,27240,27924,29748,29748],[8,3,29520,29520,29862,30660,32484,32484],[8,3.5,31914,31914,32370,33168,35106,35106],[8,4,35334,35334,35790,36588,38640,38640],[8.5,2.5,28380,28380,28722,29520,31344,31344],[8.5,3,30774,30774,31116,31914,33852,33852],[8.5,3.5,33396,33396,33852,34650,36702,36702],[9,2.5,29292,29292,29634,30432,32370,32370],[9,3,31914,31914,32370,33168,35220,35220],[9,3.5,34992,34992,35448,36360,38412,38412],[9.5,2.5,29862,29862,30204,31116,33054,33054],[9.5,3,33168,33168,33624,34536,36588,36588],[10,2.5,31002,31002,31458,32256,34422,34422],[10,3,34422,34422,34878,35790,37956,37956]],concave:[[2.5,2.5,18006,18006,18120,18576,19488,19488],[3,2.5,18861,18861,19089,19545,20571,20571],[3,3,20001,20001,20115,20685,21711,21711],[3,3.5,20685,20685,20799,21369,22509,22509],[3,4,21483,21483,21711,22281,23535,23535],[3,4.5,22395,22395,22623,23193,24561,24561],[3,5,23193,23193,23535,24219,25587,25587],[3.5,2.5,19830,19830,20058,20514,21540,21540],[3.5,3,20742,20742,20970,21540,22680,22680],[3.5,3.5,21654,21654,21882,22452,23706,23706],[3.5,4,22566,22566,22794,23478,24732,24732],[3.5,4.5,23820,23820,24048,24732,26100,26100],[3.5,5,25074,25074,25302,25986,27468,27468],[4,2.5,20799,20799,20913,21483,22623,22623],[4,3,21711,21711,21939,22509,23763,23763],[4,3.5,22737,22737,22965,23535,24903,24903],[4,4,24333,24333,24561,25245,26613,26613],[4,4.5,25587,25587,25815,26499,28095,28095],[4,5,26841,26841,27183,27867,29463,29463],[4.5,2.5,21426,21426,21654,22224,23478,23478],[4.5,3,22680,22680,22908,23592,24846,24846],[4.5,3.5,24048,24048,24276,24960,26328,26328],[4.5,4,25644,25644,25986,26670,28152,28152],[4.5,4.5,27354,27354,27582,28380,29976,29976],[4.5,5,28608,28608,28950,29748,31458,31458],[5,2.5,22281,22281,22509,23193,24447,24447],[5,3,23649,23649,23991,24675,26043,26043],[5,3.5,25359,25359,25701,26385,27867,27867],[5,4,27069,27069,27411,28095,29691,29691],[5,4.5,28779,28779,29121,29805,31515,31515],[5,5,30489,30489,30717,31629,33339,33339],[5.5,2.5,23250,23250,23478,24162,25530,25530],[5.5,3,24960,24960,25302,25986,27468,27468],[5.5,3.5,26670,26670,27012,27810,29292,29292],[5.5,4,28722,28722,29064,29862,31572,31572],[5.5,4.5,30204,30204,30546,31344,33168,33168],[5.5,5,32256,32256,32598,33510,35334,35334],[6,2.5,23877,23877,24105,24789,26385,26385],[6,3,26271,26271,26613,27297,28893,28893],[6,3.5,28323,28323,28665,29463,31173,31173],[6,4,29805,29805,30147,31059,32769,32769],[6,4.5,31971,31971,32313,33111,35049,35049],[6,5,34593,34593,35049,35961,37899,37899],[6.5,2.5,25416,25416,25758,26442,28038,28038],[6.5,3,27240,27240,27582,28380,29976,29976],[6.5,3.5,29406,29406,29748,30546,32370,32370],[6.5,4,31572,31572,31914,32712,34650,34650],[6.5,4.5,33738,33738,34080,34992,36930,36930],[7,2.5,26385,26385,26613,27411,29121,29121],[7,3,28893,28893,29235,30033,31743,31743],[7,3.5,30717,30717,31059,31971,33795,33795],[7,4,33225,33225,33567,34479,36531,36531],[7,4.5,35391,35391,35847,36759,38811,38811],[7.5,2.5,27240,27240,27582,28380,30204,30204],[7.5,3,29862,29862,30204,31002,32940,32940],[7.5,3.5,32028,32028,32484,33396,35334,35334],[7.5,4,34650,34650,34992,36018,37956,37956],[8,2.5,28209,28209,28551,29349,31287,31287],[8,3,30831,30831,31173,32085,34023,34023],[8,3.5,33225,33225,33681,34593,36645,36645],[8,4,36645,36645,37101,38013,40179,40179],[8.5,2.5,29748,29748,30090,31002,32940,32940],[8.5,3,32142,32142,32484,33396,35448,35448],[8.5,3.5,34764,34764,35220,36132,38298,38298],[9,2.5,30717,30717,31059,31971,34023,34023],[9,3,33339,33339,33795,34707,36873,36873],[9,3.5,36417,36417,36873,37899,40065,40065],[9.5,2.5,31344,31344,31686,32712,34764,34764],[9.5,3,34650,34650,35106,36132,38298,38298],[10,2.5,32541,32541,32997,33909,36189,36189],[10,3,35961,35961,36417,37443,39723,39723]],"canopy-corner":[[2.5,2.5,18006,18006,18120,18462,19260,19260],[3,2.5,18861,18861,19089,19431,20343,20343],[3,3,20001,20001,20115,20571,21483,21483],[3,3.5,20685,20685,20799,21255,22281,22281],[3,4,21483,21483,21711,22167,23307,23307],[3,4.5,22395,22395,22623,23079,24333,24333],[3,5,23193,23193,23535,24105,25359,25359],[3.5,2.5,19830,19830,20058,20400,21312,21312],[3.5,3,20742,20742,20970,21426,22452,22452],[3.5,3.5,21654,21654,21882,22338,23478,23478],[3.5,4,22566,22566,22794,23364,24504,24504],[3.5,4.5,23820,23820,24048,24618,25872,25872],[3.5,5,25074,25074,25302,25872,27240,27240],[4,2.5,20799,20799,20913,21369,22395,22395],[4,3,21711,21711,21939,22395,23535,23535],[4,3.5,22737,22737,22965,23421,24675,24675],[4,4,24333,24333,24561,25131,26385,26385],[4,4.5,25587,25587,25815,26385,27867,27867],[4,5,26841,26841,27183,27753,29235,29235],[4.5,2.5,21426,21426,21654,22110,23250,23250],[4.5,3,22680,22680,22908,23478,24618,24618],[4.5,3.5,24048,24048,24276,24846,26100,26100],[4.5,4,25644,25644,25986,26556,27924,27924],[4.5,4.5,27354,27354,27582,28266,29748,29748],[4.5,5,28608,28608,28950,29634,31230,31230],[5,2.5,22281,22281,22509,23079,24219,24219],[5,3,23649,23649,23991,24561,25815,25815],[5,3.5,25359,25359,25701,26271,27639,27639],[5,4,27069,27069,27411,27981,29463,29463],[5,4.5,28779,28779,29121,29691,31287,31287],[5,5,30489,30489,30717,31515,33111,33111],[5.5,2.5,23250,23250,23478,24048,25302,25302],[5.5,3,24960,24960,25302,25872,27240,27240],[5.5,3.5,26670,26670,27012,27696,29064,29064],[5.5,4,28722,28722,29064,29748,31344,31344],[5.5,4.5,30204,30204,30546,31230,32940,32940],[5.5,5,32256,32256,32598,33396,35106,35106],[6,2.5,23877,23877,24105,24675,26157,26157],[6,3,26271,26271,26613,27183,28665,28665],[6,3.5,28323,28323,28665,29349,30945,30945],[6,4,29805,29805,30147,30945,32541,32541],[6,4.5,31971,31971,32313,32997,34821,34821],[6,5,34593,34593,35049,35847,37671,37671],[6.5,2.5,25416,25416,25758,26328,27810,27810],[6.5,3,27240,27240,27582,28266,29748,29748],[6.5,3.5,29406,29406,29748,30432,32142,32142],[6.5,4,31572,31572,31914,32598,34422,34422],[6.5,4.5,33738,33738,34080,34878,36702,36702],[7,2.5,26385,26385,26613,27297,28893,28893],[7,3,28893,28893,29235,29919,31515,31515],[7,3.5,30717,30717,31059,31857,33567,33567],[7,4,33225,33225,33567,34365,36303,36303],[7,4.5,35391,35391,35847,36645,38583,38583],[7.5,2.5,27240,27240,27582,28266,29976,29976],[7.5,3,29862,29862,30204,30888,32712,32712],[7.5,3.5,32028,32028,32484,33282,35106,35106],[7.5,4,34650,34650,34992,35904,37728,37728],[8,2.5,28209,28209,28551,29235,31059,31059],[8,3,30831,30831,31173,31971,33795,33795],[8,3.5,33225,33225,33681,34479,36417,36417],[8,4,36645,36645,37101,37899,39951,39951],[8.5,2.5,29748,29748,30090,30888,32712,32712],[8.5,3,32142,32142,32484,33282,35220,35220],[8.5,3.5,34764,34764,35220,36018,38070,38070],[9,2.5,30717,30717,31059,31857,33795,33795],[9,3,33339,33339,33795,34593,36645,36645],[9,3.5,36417,36417,36873,37785,39837,39837],[9.5,2.5,31344,31344,31686,32598,34536,34536],[9.5,3,34650,34650,35106,36018,38070,38070],[10,2.5,32541,32541,32997,33795,35961,35961],[10,3,35961,35961,36417,37329,39495,39495]]},extras:[{name:"Electrical Connection",price:null,unit:null},{name:"Internal Recessed Downlights",price:null,unit:null},{name:"Canopy Roof Side Extension",price:null,unit:null},{name:"Double Socket - White",price:30,unit:"each"},{name:"Double Socket - Brushed Aluminium",price:35,unit:"each"},{name:"Canopy Roof Downlights",price:45,unit:"each"},{name:"External Up\\Down Lights",price:55,unit:"each"},{name:"External Waterproof Double Socket",price:105,unit:"each"},{name:"LED Ceiling Light Panel - 600mm x 600mm",price:145,unit:"each"},{name:"RGB LED Ceiling Light Panel - 600mm x 600mm",price:215,unit:"each"},{name:"LED Ceiling Light Panel - 1200mm x 600mm",price:245,unit:"each"},{name:"Electric Panel Heater",price:150,unit:"each"},{name:"Rainwater Butt",price:95,unit:"each"},{name:"Decking - Composite",price:195,unit:"m\xB2"},{name:"Internal Dividing Wall",price:95,unit:"m\xB2"},{name:"Internal Timber Door",price:495,unit:"each"},{name:"Acoustic Wall Panels",price:145,unit:null},{name:"Acoustic Plasterboard",price:20,unit:"m\xB2"},{name:"Acoustic Insulation",price:15,unit:"m\xB2"},{name:"Acoustic Glass",price:250,unit:"m\xB2"},{name:"Tall Fixed Glass Window Panel - 0.5m x 2.02m",price:325,unit:"each"},{name:"Tall Fixed Glass Window Panel - 0.75m x 2.02m",price:395,unit:"each"},{name:"Tall Fixed Glass Window Panel - 1.0m x 2.02m",price:485,unit:"each"},{name:"Wide Opening Window - 850mm x 400mm",price:325,unit:"each"},{name:"Wide Opening Window - 1200mm x 500mm",price:355,unit:"each"},{name:"Wide Opening Window - 1200mm x 750mm",price:395,unit:"each"},{name:"Tall Opening Window - 400mm x 1.6m",price:385,unit:"each"},{name:"Tall Opening Window - 750mm x 1.6m",price:485,unit:"each"},{name:"Panoramic Fixed Window - 2.02m x 500mm",price:325,unit:"each"},{name:"Single Door - 900mm x 2.02m",price:995,unit:"each"},{name:"Double Patio Doors - 1.5m x 2.02m",price:1625,unit:"each"},{name:"Sliding Patio Doors - 2.4m x 2.02m",price:1895,unit:"each"},{name:"Aluminium Bi-Folding Sliding Doors - 2.2m Wide",price:1495,unit:"upgrade"},{name:"Aluminium Bi-Folding Sliding Doors - 3.0m Wide",price:1695,unit:"upgrade"}]};var i_=$i.verifiedAt.slice(0,10),vx=$i.styles,Zi={cube:{name:"Cube",tag:"Clean lines, a flush roof",canopy:0,corner:!1,porch:!1,description:"Oeco\u2019s simplest shape: a flat roof finished flush with the walls, a deep fascia band and the doors in the front wall.",highlights:["From \xA316,524","Flush roof edge"],photo:"cube"},canopy:{name:"Canopy",tag:"A roof canopy over the doors",canopy:.5,corner:!1,porch:!1,description:"The roof carries on over the doors as a canopy: shade, shelter, and room for canopy downlights in the soffit.",highlights:["From \xA317,208","Sheltered doors"],photo:"canopy"},corner:{name:"Corner",tag:"Glass round the front corner",canopy:0,corner:!0,porch:!1,description:"The main doors run to the front right corner and meet a tall glass panel in the side wall: light and views on two sides.",highlights:["From \xA317,322","Glass corner"],photo:"corner"},concave:{name:"Concave",tag:"A recessed front porch",canopy:.5,corner:!1,porch:!0,description:"Both side walls carry forward to the edge of the roof canopy, framing a sheltered porch in front of the doors.",highlights:["From \xA318,006","Framed porch"],photo:"concave"},"canopy-corner":{name:"Canopy Corner",tag:"Canopy and a glass corner",canopy:.5,corner:!0,porch:!1,description:"The canopy over the doors, and the glass corner: the main doors meet a tall glass panel round the front right corner.",highlights:["From \xA318,006","Canopy and glass corner"],photo:"canopy-corner"}};var pr=[...new Set($i.prices.cube.map(i=>i[0]))].sort((i,t)=>i-t),Mx=Object.fromEntries(pr.map(i=>[i,$i.prices.cube.filter(t=>t[0]===i).map(t=>t[1]).sort((t,e)=>t-e)])),Sx={width:[pr[0],pr[pr.length-1]],depth:[2.5,5]};var Te={wall:.16,roof:.145,floor:.178,base:.2,topFront:2.5,topBack:2.45,fascia:.18,trim:.1,post:.1},Wc={thermowood:{name:"Thermowood",note:"Heat-treated timber in a consistent brown; can be stained or painted",kind:"thermowood",hex:"#90653d",board:.13,dirs:["vertical","horizontal"],designs:["contemporary","classic"],packages:{contemporary:"thermo-contemporary",classic:"thermo-classic"},photo:"thermowood"},cedar:{name:"Western Red Cedar",note:"Rich browns, reds and pinks; vertical only",kind:"cedar",hex:"#b27a50",board:.125,dirs:["vertical"],designs:["contemporary","classic"],packages:{contemporary:"cedar-contemporary",classic:"cedar-classic"},photo:"cedar"},smooth:{name:"Composite Smoothgrain",note:"60% recycled hardwood fibres, 40% recycled plastic; no maintenance",kind:"smooth",board:.145,dirs:["vertical","horizontal"],designs:["contemporary"],packages:{contemporary:"smoothgrain"},colours:"smooth",photo:"charcoal"},woodgrain:{name:"Composite ProClad Woodgrain",note:"The look of timber with no upkeep",kind:"woodgrain",board:.145,dirs:["vertical","horizontal"],designs:["contemporary"],packages:{contemporary:"woodgrain"},colours:"woodgrain",photo:"sandstone"},fibre:{name:"Fibre cement",note:"Woodgrain fibre cement, horizontal only",kind:"fibre",board:.18,dirs:["horizontal"],designs:["contemporary"],packages:{},colours:"fibre",quoted:!0},stone:{name:"Natural stone",note:"Split-face stacked slate, horizontal only",kind:"stone",board:.1,dirs:["horizontal"],designs:["contemporary"],packages:{},colours:"stone",quoted:!0}};var cu=[["charcoal","Charcoal","#4a4a4a"],["light-grey","Light grey","#a7a8a4"],["redwood","Redwood","#8a4b36"],["olive","Olive green","#5f6648"],["ivory","Ivory","#d9d0b9"],["teak","Teak","#9c6b43"],["coffee","Coffee","#5b4535"]],Xc={smooth:Object.fromEntries(cu.map(([i,t,e])=>[i,{name:t,hex:e,status:i==="charcoal"?"included":"quoted"}])),woodgrain:{sandstone:{name:"Sandstone",hex:"#b59e7f",status:"included"},...Object.fromEntries(cu.map(([i,t,e])=>[i,{name:t,hex:e,status:"quoted"}]))},fibre:Object.fromEntries([["natural","Natural (unpainted)","#a9a69e"],["black","Black","#2c2c2d"],["cream","Cream","#e4d9bd"],["sage","Sage green","#9aa48a"],["blue","Blue","#4f6b84"],["granite","Granite","#6f7275"],["slate","Slate","#4f5559"],["light-grey","Light grey","#b9bcbc"],["white","White","#f0efea"]].map(([i,t,e])=>[i,{name:t,hex:e,status:"quoted"}])),stone:{slate:{name:"Dark grey slate",hex:"#4b4e52",status:"quoted"},rustic:{name:"Rustic multicolour slate",hex:"#8a7d6c",status:"quoted"}}};var mr="#383e42",fn=(i,t,e,n,s,r,a={})=>({name:i,group:t,w:e,h:n,sill:s,kind:r,...a}),ln={sliding:fn("Sliding patio doors","door",2.4,2.02,0,"sliding",{leaves:2,price:1895,source:"Sliding Patio Doors - 2.4m x 2.02m"}),patio:fn("Double patio doors","door",1.5,2.02,0,"patio",{leaves:2,price:1625,source:"Double Patio Doors - 1.5m x 2.02m"}),single:fn("Single door","door",.9,2.02,0,"hinged",{leaves:1,price:995,source:"Single Door - 900mm x 2.02m"}),bifold22:fn("Aluminium bi-folding doors, 2.2m","door",2.2,2.02,0,"folding",{leaves:3,upgrade:1495,alu:!0,source:"Aluminium Bi-Folding Sliding Doors - 2.2m Wide"}),bifold30:fn("Aluminium bi-folding doors, 3.0m","door",3,2.02,0,"folding",{leaves:4,upgrade:1695,alu:!0,source:"Aluminium Bi-Folding Sliding Doors - 3.0m Wide"}),wide1205:fn("Wide opening window, 1200 \xD7 500mm","window",1.2,.5,1.52,"top",{price:355,source:"Wide Opening Window - 1200mm x 500mm"}),wide1275:fn("Wide opening window, 1200 \xD7 750mm","window",1.2,.75,1.27,"top",{price:395,source:"Wide Opening Window - 1200mm x 750mm"}),wide854:fn("Wide opening window, 850 \xD7 400mm","window",.85,.4,1.62,"top",{price:325,source:"Wide Opening Window - 850mm x 400mm",note:"Oeco gives its height as both 400mm and 500mm"}),tall416:fn("Tall opening window, 400 \xD7 1600mm","window",.4,1.6,.42,"tall",{price:385,source:"Tall Opening Window - 400mm x 1.6m"}),tall7516:fn("Tall opening window, 750 \xD7 1600mm","window",.75,1.6,.42,"tall",{price:485,source:"Tall Opening Window - 750mm x 1.6m"}),glass05:fn("Tall fixed glass panel, 0.5m","window",.5,2.02,0,"fixed",{price:325,source:"Tall Fixed Glass Window Panel - 0.5m x 2.02m"}),glass075:fn("Tall fixed glass panel, 0.75m","window",.75,2.02,0,"fixed",{price:395,source:"Tall Fixed Glass Window Panel - 0.75m x 2.02m"}),glass10:fn("Tall fixed glass panel, 1.0m","window",1,2.02,0,"fixed",{price:485,source:"Tall Fixed Glass Window Panel - 1.0m x 2.02m"}),panoramic:fn("Panoramic fixed window, 2.02m \xD7 500mm","window",2.02,.5,1,"fixed",{price:325,source:"Panoramic Fixed Window - 2.02m x 500mm"})};var hu={ends:"2026-10-31",title:"Oeco\u2019s October offer",summary:"5% off, already in these prices, and ten free upgrades on orders placed before 31 October 2026",showroom:"\xA3250 showroom exclusive discount, on orders placed at Oeco\u2019s showroom before 31 October 2026"};var lu=Object.fromEntries($i.extras.map(i=>[i.name,i])),Ue=(i,t)=>{var e,n,s,r;return{source:i,price:(n=(e=lu[i])==null?void 0:e.price)!=null?n:null,unit:(r=(s=lu[i])==null?void 0:s.unit)!=null?r:null,...t}},bx={extraSockets:Ue("Double Socket - White",{name:"Extra double sockets",kind:"count",max:8,offer:!0,note:"Four white double sockets come with every room",step:"interior"}),brushedSockets:Ue("Double Socket - Brushed Aluminium",{name:"Brushed aluminium sockets",kind:"toggle",offer:!0,note:"Every socket in brushed aluminium instead of white",step:"interior"}),ledPanels:Ue("LED Ceiling Light Panel - 600mm x 600mm",{name:"Extra LED ceiling panels, 600 \xD7 600mm",kind:"count",max:4,note:"For larger rooms, or each part of a divided room",step:"interior"}),rgbPanels:Ue("RGB LED Ceiling Light Panel - 600mm x 600mm",{name:"RGB LED ceiling panels, 600 \xD7 600mm",kind:"count",max:4,note:"Colour sequences and 100% to 0% dimming by remote",step:"interior"}),widePanels:Ue("LED Ceiling Light Panel - 1200mm x 600mm",{name:"LED ceiling panels, 1200 \xD7 600mm",kind:"count",max:4,note:"The larger slimline panel",step:"interior"}),downlights:Ue("Internal Recessed Downlights",{name:"Recessed LED downlights",kind:"toggle",note:"Flush in the plastered ceiling; the ceiling drops 25mm",step:"interior"}),heaters:Ue("Electric Panel Heater",{name:"Electric panel heaters, 1.5kW",kind:"count",max:3,offerFirst:!0,note:"Thermostat and thermal protection; wall mounted",step:"interior"}),dividingWall:Ue("Internal Dividing Wall",{name:"Internal dividing wall",kind:"area",note:"Insulated, plastered both sides; position agreed on site",step:"interior"}),internalDoor:Ue("Internal Timber Door",{name:"Internal oak timber door",kind:"toggle",note:"Oak panel door, frame, handles and lock, in the dividing wall",step:"interior"}),acousticPanels:Ue("Acoustic Wall Panels",{name:"Acoustic wall panels",kind:"toggle",note:"Slatted panels on the back wall",step:"interior",quoted:!0}),acousticBoard:Ue("Acoustic Plasterboard",{name:"Acoustic plasterboard",kind:"area",note:"15mm high-density acoustic plasterboard in the walls and ceiling",step:"interior"}),acousticInsulation:Ue("Acoustic Insulation",{name:"Acoustic insulation (RS45 slab)",kind:"area",offer:!0,note:"Knauf acoustic slab in the walls and floor",step:"interior"}),acousticGlass:Ue("Acoustic Glass",{name:"Acoustic glass",kind:"area",note:"In every door and window",step:"openings"}),upDownLights:Ue("External Up\\Down Lights",{name:"Extra up and down wall lights",kind:"count",max:4,offer:!0,note:"Two come with every room, beside the doors",step:"exterior"}),outdoorSocket:Ue("External Waterproof Double Socket",{name:"Outdoor waterproof double socket",kind:"count",max:2,offerFirst:!0,note:"IP66, RCD protected",step:"exterior"}),canopyLights:Ue("Canopy Roof Downlights",{name:"Canopy downlights",kind:"toggle",offer:!0,note:"One per metre under the canopy, own switch",step:"exterior",needsCanopy:!0}),waterButt:Ue("Rainwater Butt",{name:"100 litre water butt",kind:"toggle",offer:!0,note:"On the downpipe at the back, with stand and tap",step:"exterior"}),sideCanopy:Ue("Canopy Roof Side Extension",{name:"Canopy side extension",kind:"choice",note:"The canopy carried 0.5m past one or both sides",step:"exterior",needsCanopy:!0}),connection:Ue("Electrical Connection",{name:"Mains connection to your house",kind:"toggle",note:"Armoured cable from the room to your consumer unit",step:"exterior"}),deck:Ue("Decking - Composite",{name:"Anthracite composite decking",kind:"area",offer:!0,step:"exterior"})};var qc={"antique-oak":{name:"Antique Oak",hex:"#9b7a55"},espresso:{name:"Espresso",hex:"#4a3326"},"golden-pine":{name:"Golden Pine",hex:"#c69b5f"},"pebble-grey":{name:"Pebble Grey",hex:"#8e8c86"},hazel:{name:"Hazel",hex:"#a8814f"}},Yc={"grey-oak":{name:"Light grey oak laminate",hex:"#b9b4ab",design:"contemporary"},"classic-oak":{name:"Classic oak laminate",hex:"#b88f5f",design:"classic"}};var wx=$i.prices;var Ex=Te.wall;var Tx=(i,t=3)=>Math.round(i*10**t)/10**t;var M_=Date.parse(hu.ends+"T23:59:59Z");var uu=i=>Math.max(1,Math.floor(i.width+(i.sideCanopy==="both"?1:i.sideCanopy!=="none"?.5:0)+1e-6));function gr(i){let t=i.width,e=i.depth,n=-t/2,s=t/2,r=-e/2,a=e/2;return[["front",[n,a],[s,a]],["right",[s,a],[s,r]],["back",[s,r],[n,r]],["left",[n,r],[n,a]]].map(([c,l,h],u)=>{let d=Math.hypot(h[0]-l[0],h[1]-l[1]),p=[(h[0]-l[0])/d,(h[1]-l[1])/d];return{id:c,i:u,a:l,b:h,L:Tx(d,4),u:p,n:[-p[1],p[0]],axis:Math.abs(p[0])>.5?"x":"z"}})}function Ji(i){let t=Zi[i.range],e=.035,n=t.canopy&&i.sideCanopy!=="none"?.5:0;return{front:t.canopy||e,back:e,left:e+(n&&(i.sideCanopy==="left"||i.sideCanopy==="both")?n:0),right:e+(n&&(i.sideCanopy==="right"||i.sideCanopy==="both")?n:0)}}function $c(i,t,e){let n=Ji(i),s=-i.depth/2-n.back,r=i.depth/2+n.front;return Te.topBack+(e-s)/(r-s)*(Te.topFront-Te.topBack)}function du(i){if(i.layout!=="divided")return[];let t=Ex,e=-i.width/2+t,n=i.width/2-t,s=-i.depth/2+t,r=i.depth/2-t,a=n-e,o=r-s;if(i.width<5){let l=s+Math.max(1,Math.min(1.8,o*.4));return[{a:[e,l],b:[n,l],door:Math.min(a-.6,a*.3),hasDoor:i.extras.internalDoor,axis:"x"}]}let c=n-Math.max(1.2,Math.min(2.2,a*.34));return[{a:[c,s],b:[c,r],door:Math.min(o-.6,o*.72),hasDoor:i.extras.internalDoor,axis:"z"}]}var fu=i=>Zi[i.range].corner?i.hand==="left"?"left":"right":null;var pu=["extraSockets","ledPanels","rgbPanels","widePanels","heaters","upDownLights","outdoorSocket"],Ax=["brushedSockets","downlights","internalDoor","acousticPanels","acousticBoard","acousticInsulation","acousticGlass","canopyLights","waterButt","connection"],Rx=[...pu,...Ax],S_=Object.freeze({v:1,range:"cube",use:"office",width:4,depth:3,cladding:"thermowood",design:"contemporary",colour:null,dir:"vertical",mainDoor:"standard",hand:"right",openings:null,floor:null,layout:"open",deck:.3,sideCanopy:"none",acousticFinish:"antique-oak",extras:Object.fromEntries(Rx.map(i=>[i,pu.includes(i)?0:!1])),step:0});var Cx={front:"f",right:"r",back:"b",left:"l"},b_=Object.fromEntries(Object.entries(Cx).map(([i,t])=>[t,i])),Px={main:"m",window:"w",corner:"c",extra:"x"},w_=Object.fromEntries(Object.entries(Px).map(([i,t])=>[t,i]));var xr=new T;function Sn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;xr.copy(t),xr[n]=0,xr.normalize();let l=.5*a/(a+o),h=1-xr.angleTo(i)/c;return Math.sign(xr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var qo=class extends Fe{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new T,c=new T,l=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new T,y=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Sn(g,c,"z","y",r,n),d[f+1]=1-Sn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Sn(g,c,"z","y",r,n),d[f+1]=1-Sn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Sn(g,c,"x","z",r,t),d[f+1]=Sn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Sn(g,c,"x","z",r,t),d[f+1]=1-Sn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Sn(g,c,"x","y",r,t),d[f+1]=1-Sn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Sn(g,c,"x","y",r,t),d[f+1]=1-Sn(g,c,"y","x",r,e);break}}};var Wn={sand:"#d8c7a8",oat:"#e6dccb",terracotta:"#b8714e",clay:"#c99a72",ink:"#2a2f33",oak:"#b88d5f",walnut:"#6e4b33",rubber:"#2b2d2f",canvas:"#efe9dc",leaf:"#4f7a46",brass:"#b8955a",charcoal:"#3a3a3c",linen:"#f1ece2"};function mu(i,t,e,n){let{std:s,add:r,box:a,group:o}=n,c=t.extras,l=e.x1-e.x0,h=e.z1-e.z0,u=e.floor,d=(e.x0+e.x1)/2,p=(e.z0+e.z1)/2,g=(K,nt)=>e.ceilingAt(K+d,nt+p)-.002,y=Math.min(g(-l/2,-h/2),g(l/2,-h/2),g(-l/2,h/2),g(l/2,h/2)),m=o(i);m.position.set(d,0,p);let f={};for(let[K,nt]of Object.entries(Wn))f[K]=s(nt,{roughness:K==="rubber"?.95:K==="brass"?.35:.75,metalness:K==="brass"?.6:0});let M=K=>s(K,{roughness:.95}),x=(K,nt,Z,it,b,J,xt,U,Et=.04)=>r(K,new qo(nt,Z,it,3,Math.min(Et,nt/2,Z/2,it/2)),U,b,J,xt),w=(K,nt,Z,it,b,J,xt,U,Et=20)=>r(K,new Pe(nt,Z,it,Et),U,b,J,xt),k={front:e.z1,back:e.z0,left:e.x0,right:e.x1},F=K=>{let nt=[];for(let Z of e.walls){let it=Z.axis==="x"?Z.a[1]-Z.n[1]*.15:Z.a[0]-Z.n[0]*.15,b=K==="front"||K==="back"?"x":"z";if(!(Z.axis!==b||Math.abs(it-k[K])>.01))for(let J of t.openings.filter(xt=>xt.wall===Z.id)){let xt=ln[J.type],U=J.p*Z.L,Et=[U-xt.w/2,U+xt.w/2].map(et=>b==="x"?Z.a[0]+Z.u[0]*et-d:Z.a[1]+Z.u[1]*et-p);nt.push({a:Math.min(...Et),b:Math.max(...Et),type:J.type,sill:xt.sill,top:xt.sill+xt.h,wall:Z.id,group:xt.group})}}return nt},P=(K,nt,Z,it=2.1)=>F(K).every(b=>nt+Z<b.a-.05||nt-Z>b.b+.05||b.sill>it),Y=(K,nt,Z=0,it=2.1)=>{let b=(K==="front"||K==="back"?l:h)/2-nt-.05;for(let J=0;J<40;J++)for(let xt of[1,-1]){let U=Z+xt*J*.1;if(Math.abs(U)<=b&&P(K,U,nt,it))return U}return null},at=(K,nt,Z,it,b=0)=>(nt==="back"&&(K.position.set(Z,it,-h/2+b),K.rotation.y=0),nt==="front"&&(K.position.set(Z,it,h/2-b),K.rotation.y=Math.PI),nt==="left"&&(K.position.set(-l/2+b,it,Z),K.rotation.y=Math.PI/2),nt==="right"&&(K.position.set(l/2-b,it,Z),K.rotation.y=-Math.PI/2),K),S=o(m,"layout"),A=0,R=null,q=s("#f3f2ed",{roughness:.85}),L=(K,nt,Z,it,b=null,J=!0)=>{let xt=Math.hypot(Z-K,it-nt),U=Math.abs(Z-K)>Math.abs(it-nt)?"x":"z",Et=(Z-K)/xt,et=(it-nt)/xt,Lt=ee=>[K+Et*ee,nt+et*ee],qt=b===null?[[.002,xt-.002]]:[[.002,b-.45],[b+.45,xt-.002]],ie=(ee,oe,pe)=>{let ae=[ee];ae.push(oe);let rt=new ii;rt.moveTo(ee,pe),rt.lineTo(oe,pe);for(let Ct of ae.slice().reverse())rt.lineTo(Ct,g(...Lt(Ct))-.002);rt.lineTo(ee,pe);let dt=new Dn(rt,{depth:.1,bevelEnabled:!1});dt.translate(0,0,-.05);let Dt=r(S,dt,q,K,0,nt);return Dt.rotation.y=Math.atan2(-et,Et),Dt};for(let[ee,oe]of qt)oe-ee>.02&&ie(ee,oe,u);if(b!==null){let[ee,oe]=Lt(b),pe=Math.min(g(...Lt(b-.45)),g(...Lt(b+.45)))-u,ae=Math.min(1.98,pe-.07);pe-ae-.022>.02&&ie(b-.45+.002,b+.45-.002,u+ae+.022),J&&C(S,ee,oe,U,.826,ae)}},C=(K,nt,Z,it,b=.826,J=1.98)=>{let xt=o(K,"internalDoor");xt.position.set(nt,u,Z),it==="z"&&(xt.rotation.y=Math.PI/2),a(xt,.05,J+.01,.12,-b/2-.025,(J+.01)/2,0,q),a(xt,.05,J+.01,.12,b/2+.025,(J+.01)/2,0,q),a(xt,b+.1,.01,.12,0,J+.015,0,q);let U=new qe;U.position.set(-b/2,0,.04),xt.add(U),U.rotation.y=-.45,a(U,b-.01,J-.02,.04,b/2,(J-.02)/2+.01,0,f.oak);for(let Et of[.45,1.05,1.6])a(U,b-.2,.32,.006,b/2,Et,.023,s("#a77d50",{roughness:.7}));r(U,new Fe(.12,.02,.02),n.materials.steel,b-.1,1,.04)},I=du(t).map(K=>({...K,a:[K.a[0]-d,K.a[1]-p],b:[K.b[0]-d,K.b[1]-p]}));for(let K of I)L(K.a[0],K.a[1],K.b[0],K.b[1],K.door,K.hasDoor);I.length&&(I[0].axis==="x"?R={x0:-l/2-1,z1:I[0].a[1]+.1}:A=l/2-I[0].a[0]+.1);let W=-l/2,B=l/2-A;if(c.heaters){let K=o(m,"heaters"),nt=s("#f7f7f5",{roughness:.15,metalness:.05}),Z=0;for(let[it,b]of[["back",l*.25],["left",0],["back",-l*.25],["right",0]]){if(Z>=c.heaters)break;if(it==="right"&&A)continue;let J=Y(it,.45,b,.7);if(J===null)continue;let xt=at(o(K,"heaters"),it,J,u+.18,.04);a(xt,.85,.45,.06,0,.225,0,nt),a(xt,.8,.012,.03,0,.46,.01,s("#d9dadb",{roughness:.4})),Z++}}let X=o(m,"lighting"),ct=n.materials.lamp,Q=R?(R.z1+h/2)/2:0,tt=A?(-l/2+l/2-A)/2:0,lt=(K,nt,Z,it,b,J=null)=>{let xt=g(K,nt)-.012,U=o(X,b);a(U,Z,.012,it,K,xt,nt,n.materials.white);let Et=J?s("#ffffff",{emissive:J,emissiveIntensity:.6,roughness:.3}):s("#fffaf0",{emissive:"#fff1d6",emissiveIntensity:.45,roughness:.3}),et=a(U,Z-.03,.004,it-.03,K,xt-.008,nt,Et);et.userData.tags=["lamp"],n.lights.push({kind:"interior",position:new T(d+K,xt-.15,p+nt)})};if(t.design==="classic"){let K=o(X,"mainLight"),nt=g(tt,Q)-.02;a(K,.62,.04,.07,tt,nt,Q,n.materials.steel);for(let Z=0;Z<4;Z++){let it=tt-.24+Z*.16;r(K,new Pe(.035,.03,.1,16),n.materials.steel,it,nt-.07,Q).rotation.x=Z%2?.35:-.35,w(K,.026,.026,.004,it,nt-.121,Q+(Z%2?.018:-.018),ct).userData.tags=["lamp"]}n.lights.push({kind:"interior",position:new T(d+tt,nt-.2,p+Q)})}else lt(tt,Q,.6,.6,"mainLight");let H=[...Array(c.ledPanels).fill(["ledPanels",.6,.6,null]),...Array(c.rgbPanels).fill(["rgbPanels",.6,.6,"#7a5cff"]),...Array(c.widePanels).fill(["widePanels",1.2,.6,null])],st=l>=h,mt=st?l-(A||0):h-(R?R.z1+h/2:0),Tt=st?h:l,At=[[tt,Q]];if(H.forEach(([K,nt,Z,it],b)=>{let J=Math.ceil((b+1)/2)*(b%2?1:-1),xt=mt/2-Math.max(nt,Z)/2-.15,U=Math.max(-xt,Math.min(xt,J*Math.min(1.3,mt/3))),Et=0,et=()=>st?[tt+U,Q+Et]:[tt+Et,Q+U];for(let ie of[0,.9,-.9])if(Et=Math.max(-(Tt/2-.45),Math.min(Tt/2-.45,ie)),At.every(([ee,oe])=>Math.hypot(ee-et()[0],oe-et()[1])>.75))break;let[Lt,qt]=et();At.push([Lt,qt]),lt(Lt,qt,nt,Z,K,it)}),c.downlights){let K=o(X,"downlights"),nt=Math.max(2,Math.round(l/1.2)),Z=Math.max(2,Math.round(h/1.2));for(let it=0;it<nt;it++)for(let b=0;b<Z;b++){let J=-l/2+l*(it+.5)/nt,xt=-h/2+h*(b+.5)/Z;if(Math.abs(J-tt)<.45&&Math.abs(xt-Q)<.45)continue;let U=g(J,xt)-.006;w(K,.045,.045,.006,J,U,xt,n.materials.steel),w(K,.035,.035,.004,J,U-.005,xt,ct).userData.tags=["lamp"]}}let ut=o(m,"electrics"),Ht=c.brushedSockets?s("#b7bcbf",{roughness:.3,metalness:.75}):s("#f6faf4",{roughness:.35}),D=s("#2b2f33",{roughness:.5}),bt=(K,nt,Z)=>{let it=at(o(ut,"sockets",Z?"extraSockets":"includedSockets","brushedSockets"),K,nt,u+.4,.004);a(it,.146,.086,.012,0,0,0,Ht);for(let b of[-.035,.035])a(it,.02,.012,.004,b,.01,.007,D)},pt={front:[],back:[],left:[],right:[]},Rt=0,gt=4+c.extraSockets,Mt=[["back",-l*.3],["back",l*.3],["left",-h*.2],["right",-h*.2],["front",-l*.35],["front",l*.35],["back",0],["left",h*.25],["right",h*.25],["back",-l*.42],["back",l*.42],["left",-h*.4]];for(let[K,nt]of Mt){if(Rt>=gt)break;if(K==="right"&&A)continue;let Z=Y(K,.1,nt,.45);Z===null||pt[K].some(it=>Math.abs(it-Z)<.3)||(pt[K].push(Z),bt(K,Z,Rt>=4),Rt++)}let _t=F("front").filter(K=>K.group==="door").sort((K,nt)=>nt.b-nt.a-(K.b-K.a))[0];{let K=_t?_t.b+.2<B-.1?_t.b+.16:_t.a-.16:B-.3,nt=at(o(ut,"switch"),"front",K,u+1.2,.004);a(nt,.086,.086,.012,0,0,0,Ht),a(nt,.03,.045,.008,0,0,.01,Ht);let Z=_t?_t.a-.45>-l/2+.2?_t.a-.32:Math.min(B-.25,_t.b+.45):-l/2+.4,it=at(o(ut,"consumerUnit"),"front",Z,u+1.75,.05);a(it,.26,.3,.1,0,0,0,s("#f4f4f2",{roughness:.4})),a(it,.2,.06,.01,0,.05,.055,s("#bfc3c6",{roughness:.5}))}if(c.acousticPanels){let K=o(m,"acousticPanels"),nt=s(n.acoustic.hex,{roughness:.7}),Z=s("#2c2d2f",{roughness:1}),it=Math.min(y-.12,u+2);for(let b=-l/2+.35;b+.6<B-.3;b+=.66){if(!P("back",b+.3,.3,2.2))continue;let J=at(o(K,"acousticPanels"),"back",b+.3,u+.1,.012);a(J,.6,it-u-.1,.012,0,(it-u-.1)/2,0,Z);for(let xt=0;xt<12;xt++)a(J,.027,it-u-.12,.02,-.3+.025+xt*.05,(it-u-.1)/2,.016,nt)}}let It=o(m,"furniture"),te=0,E=W+.1,v=B-.1-te,ot=v-E,ft=-h/2,wt=h/2,yt=K=>{var nt;return R&&K>R.x0&&K<((nt=R.x1)!=null?nt:99)?R.z1:ft},Xt=(K,nt,Z=1)=>{let it=o(It);it.position.set(K,u,nt),it.scale.setScalar(Z),w(it,.17,.13,.34,0,.17,0,f.clay);for(let b=0;b<9;b++)x(it,.22,.02,.07,Math.cos(b*2.4)*.12,.5+b%3*.14,Math.sin(b*2.4)*.12,f.leaf,.01).rotation.set(.6*Math.sin(b),b*2.4,.5);w(it,.015,.02,.4,0,.5,0,f.walnut,6)},Zt=(K,nt,Z,it,b)=>{let J=a(It,Z,.006,it,K,u+.006,nt,b);J.castShadow=!1},Bt=(K,nt,Z=1.8,it=.8)=>{let b=at(o(It),K,nt,u,.17);for(let J of[0,Z*.33,Z*.66,Z])a(b,it,.025,.32,0,J+.0135,0,f.oak);for(let J of[-it/2,it/2])a(b,.025,Z,.32,J,Z/2+.001,0,f.oak);for(let J of[0,.33,.66])for(let xt=0;xt<7;xt++)a(b,.03+xt%3*.01,.2+xt%2*.05,.2,-it/2+.1+xt*.085,Z*J+.128+xt%2*.025,0,[f.terracotta,f.sand,f.charcoal,f.oat][(xt+J*3)%4|0]);return b},Gt=(K,nt,Z)=>{let it=o(It);it.position.set(K,u,nt),a(it,Z,.03,.7,0,.735,0,f.oak);for(let J of[-Z/2+.04,Z/2-.04])a(it,.04,.719,.62,J,.3595,0,f.ink);a(it,.55,.33,.02,0,1.06,-.22,f.ink),a(it,.06,.16,.06,0,.83,-.22,f.ink),a(it,.2,.012,.15,0,.756,-.22,f.ink);let b=o(it);return b.position.set(0,0,.55),b.rotation.y=Math.PI+.15,x(b,.5,.08,.48,0,.48,0,f.charcoal,.03),x(b,.48,.55,.07,0,.82,.22,f.charcoal,.03).rotation.x=-.12,w(b,.025,.025,.4,0,.25,0,f.ink,8),it},Qt=(K,nt,Z,it=0)=>{let b=o(It);b.position.set(K,u,nt),b.rotation.y=it,x(b,Z,.22,.85,0,.22,0,M(Wn.sand),.06),x(b,Z-.3,.14,.62,0,.4,.06,M(Wn.oat),.06),x(b,Z,.45,.2,0,.58,-.34,M(Wn.sand),.08);for(let J of[-Z/2+.09,Z/2-.09])x(b,.18,.38,.85,J,.44,0,M(Wn.sand),.07);return x(b,.4,.38,.12,Z*.25,.66,-.18,M(Wn.terracotta),.06).rotation.z=.2,x(b,.38,.36,.12,-Z*.27,.65,-.2,M(Wn.clay),.06).rotation.z=-.15,b},Nt=(K,nt,Z,it=Wn.terracotta)=>{let b=o(It);b.position.set(K,u,nt),b.rotation.y=Z,x(b,.75,.2,.75,0,.25,0,M(it),.06),x(b,.75,.45,.16,0,.55,-.3,M(it),.07);for(let J of[-.32,.32])x(b,.12,.32,.75,J,.42,0,M(it),.05)},Me=(K,nt)=>{let Z=o(It);Z.position.set(K,u,nt),w(Z,.14,.14,.02,0,.01,0,f.brass),w(Z,.012,.012,1.4,0,.71,0,f.brass,8),w(Z,.12,.18,.25,0,1.45,0,M(Wn.linen))};if(ot<1.1||h<1.4)Xt(E+.25,ft+.3,.8);else if(t.use==="office"){let K=Math.min(1.5,ot*.55),nt=E+K/2+.1;Gt(nt,yt(nt+K/2)+.38,K),Zt(nt,yt(nt)+.9,Math.min(1.8,ot*.6),1.2,M("#c8b9a0")),ot>2.4&&h>2.2&&!A&&!R&&Bt("right",Math.min(-.2,h/2-1.2),Math.min(1.8,y-u-.15),.8),Xt(v-.25,wt-.35,.9),ot>3.2&&h>2.6&&Nt(v-.6,Math.max(wt-1.1,(R?R.z1:-9)+.75),-Math.PI*.8)}else if(t.use==="gym"){let K=a(It,Math.min(2.2,ot*.7),.012,Math.min(1.8,h*.7),E+Math.min(2.2,ot*.7)/2+.05,u+.007,0,f.rubber);K.castShadow=!1;let nt=o(It);if(nt.position.set(E+.5,u,yt(E+.5)+.7),nt.rotation.y=.3,a(nt,.08,.5,.9,0,.25,0,f.ink),w(nt,.22,.22,.06,0,.3,.35,f.charcoal).rotation.z=Math.PI/2,x(nt,.22,.06,.28,0,.95,-.25,f.ink,.02),a(nt,.45,.03,.04,0,1.1,.35,f.ink),a(nt,.04,.55,.04,0,.8,.3,f.ink),ot>2){let Z=E+Math.min(2.2,ot*.7)-.4,it=o(It);it.position.set(Z,u,yt(Z)+.25),a(it,.9,.04,.3,0,.5,0,f.ink),a(it,.9,.04,.3,0,.2,0,f.ink);for(let b of[-.42,.42])a(it,.04,.6,.3,b,.3,0,f.ink);for(let b=0;b<5;b++)for(let J of[.55,.25]){let xt=w(it,.04,.04,.25,-.32+b*.16,J,0,f.charcoal,12);xt.rotation.x=Math.PI/2}}Xt(v-.25,wt-.35,.85)}else if(t.use==="studio"){let K=Math.min(1.6,ot*.55),nt=E+ot*.45,Z=o(It);Z.position.set(nt,u,-h*.05),a(Z,K,.04,.8,0,.9,0,f.oak);for(let b of[-K/2+.05,K/2-.05])for(let J of[-.33,.33])a(Z,.05,.879,.05,b,.4395,J,f.walnut);a(Z,.5,.01,.35,-.2,.925,0,f.canvas);let it=o(It);it.position.set(E+.45,u,wt-.9),it.rotation.y=.6;for(let b of[-.25,.25]){let J=a(it,.035,1.7,.035,b,.85,0,f.oak);J.rotation.z=-b*.25}a(it,.7,.55,.03,0,1.25,.04,f.canvas),a(it,.35,.25,.005,.05,1.28,.057,f.terracotta),Xt(v-.25,wt-.35,.8)}else if(t.use==="library"){let K=Math.max(1,Math.min(4,Math.floor((ot-.3)/.85))),nt=Math.min(2,y-u-.12);for(let Z=0;Z<K;Z++){let it=E+.45+Z*.86;P("back",it,.41,nt)&&Bt("back",it,nt,.82)}Nt(v-.7,wt-1.2,-Math.PI*.8,Wn.terracotta),Me(v-.25,wt-1.75),Zt(E+ot*.6,wt-1.2,Math.min(1.8,ot*.5),1.2,M("#c2a98a"))}else{let K=Math.min(2.2,ot*.62),nt=E+K/2+.15;Qt(nt,yt(nt+K/2)+.5,K),Zt(nt,.1,Math.min(2.2,ot*.7),Math.min(1.6,h*.55),M("#d4c3a6"));let Z=o(It);Z.position.set(nt,u,yt(nt)+1.35),w(Z,.38,.38,.04,0,.4,0,f.brass,32),w(Z,.05,.05,.38,0,.2,0,f.brass,12),ot>3&&Nt(v-.55,Math.max(.2,(R?R.z1:-9)+.75),-Math.PI/2-.3),Xt(v-.25,wt-.35,1)}return{blockRight:A,blockBack:R}}var fe=Te.wall,oi=.022,gu=.045,Zc=.012,_r=.5,xu=(i,t,e)=>new T(i,t,e),Fs={steel:"#c9cdd0",white:"#f4f4f0",concrete:"#b9b6ad",soil:"#6b5a45",deck:"#3f4346"};function zs(i,t=0){let e=gr(i),n=Ji(i),s=e.map(r=>{var a;return{w:r,d:((a=n[r.id])!=null?a:.035)-t}});return s.map((r,a)=>{var u,d;let o=s[(a-1+s.length)%s.length],c=p=>p.w.axis==="x"?{z:p.w.a[1]+p.w.n[1]*p.d}:{x:p.w.a[0]+p.w.n[0]*p.d},l=c(o),h=c(r);return[(u=l.x)!=null?u:h.x,(d=l.z)!=null?d:h.z]})}function Lx(i,t,e){let n=$c(i,t,e),s=n-Te.fascia;return{top:n,fasciaBottom:s,slabTop:n-Zc,slabBottom:s+.005,coreTop:s-.004,skinTop:s-.002,sectionY:s+5e-4,ceiling:s+.005-.03}}function yr(i){let t=zs(i),e=t.map(s=>s[0]),n=t.map(s=>s[1]);return{x0:Math.min(...e),x1:Math.max(...e),z0:Math.min(...n),z1:Math.max(Math.max(...n),i.depth/2+(i.deck||0)),top:Te.topFront}}function Yo(i,t,e){let n=new Fe(i,t,e),s=n.attributes.uv,r=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<s.count;a++){let[o,c]=r[Math.floor(a/4)];s.setXY(a,s.getX(a)*o,s.getY(a)*c)}return n}function _u(i){let[t,e]=i.groups,n=t.count/2;return i.clearGroups(),i.addGroup(t.start,n,0),i.addGroup(t.start+n,n,1),i.addGroup(e.start,e.count,2),i}function Ix(i,t,e=3){let n=i.index?i.toNonIndexed():i,s=n.attributes.position,r=Array.from({length:e},()=>[]),a=new T,o=new T,c=new T,l=new T;for(let d=0;d<s.count;d+=3)a.fromBufferAttribute(s,d),o.fromBufferAttribute(s,d+1),c.fromBufferAttribute(s,d+2),l.subVectors(c,o).cross(a.clone().sub(o)).normalize(),r[t(l)].push(d);let h=new Oe;for(let d of Object.keys(n.attributes)){let p=n.attributes[d],g=p.itemSize,y=new Float32Array(p.count*g),m=0;for(let f of r)for(let M of f)for(let x=0;x<3;x++)for(let w=0;w<g;w++)y[m++]=p.array[(M+x)*g+w];h.setAttribute(d,new an(y,g))}let u=0;return r.forEach((d,p)=>{h.addGroup(u,d.length*3,p),u+=d.length*3}),h}function Bs(i,t=[]){let e=new ii(i.map(([n,s])=>new Pt(n,-s)));for(let n of t)e.holes.push(new Hi(n.map(([s,r])=>new Pt(s,-r))));return e}function ks(i,t){return i.rotateX(-Math.PI/2),i.translate(0,t,0),i}function $o(i,t){let e=i.attributes.position;for(let n=0;n<e.count;n++)e.setY(n,e.getY(n)+t(e.getX(n),e.getZ(n)));return e.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere(),i}function yu(i,t){return i.map((e,n)=>{var c,l;let s=i[(n-1+i.length)%i.length],r=h=>h.axis==="x"?{z:h.a[1]-h.n[1]*t}:{x:h.a[0]-h.n[0]*t},a=r(s),o=r(e);return[(c=a.x)!=null?c:o.x,(l=a.z)!=null?l:o.z]})}function vu(i,t){let e=Zi[i.range],n=i.width,s=i.depth,r=Te.base,a=i.design==="classic",o=fu(i),c=new qe;c.name="room";let l=[],h=[],u=rt=>(h.push(rt),rt),d=(rt,dt={})=>u(new Ge({color:rt,roughness:.7,...dt})),p=(rt,dt)=>Lx(i,rt,dt),g=Wc[i.cladding],y=i.dir==="horizontal",m=g.colours?Xc[g.colours][i.colour].hex:g.hex,f=t.cladding(g.kind,m,y),M=d("#ffffff",{map:f.map,normalMap:f.normalMap,roughness:f.roughness,normalScale:new Pt(.9,.9)});M.name="cladding";let x=g.kind==="cedar"||g.kind==="thermowood",w=d(mr,{roughness:.45,metalness:.05}),k=a?t.cladding(g.kind,m,!0):null,F=a?d("#ffffff",{map:k.map,normalMap:k.normalMap,roughness:.8}):w,P=a?M:w,Y=a?null:t.skirt(mr),at=a?M:d("#ffffff",{map:Y.map,normalMap:Y.normalMap,roughness:.55}),S=d("#33383b",{roughness:.35,metalness:.55}),A=e.canopy&&x?t.cladding(g.kind,m,!0):null,R=A?d("#ffffff",{map:A.map,normalMap:A.normalMap,roughness:.8}):d(mr,{roughness:.7}),q=d(mr,{roughness:.4,metalness:.1}),L=d("#f6f6f3",{roughness:.4}),C=d("#3a3f43",{roughness:.35,metalness:.5}),I=i.extras.acousticGlass,W=u(new Ao({color:I?"#8fa89c":"#a9c0c4",roughness:.04,metalness:0,transparent:!0,opacity:I?.3:.2,envMapIntensity:1.8,side:on,depthWrite:!1,reflectivity:.6}));W.name=I?"acoustic-glass":"glass";let B=t.interior({panels:"plaster",wall:"#f3f2ee"}),X=d("#ffffff",{map:B.map,normalMap:B.normalMap,roughness:.85}),ct=d("#f6f6f3",{roughness:.9,side:on}),Q=d("#f2f2ee",{roughness:.8}),tt=d("#3a3a38",{roughness:1});tt.name="hidden";let lt=d(Fs.white,{roughness:.5}),H=Yc[i.floor],st=t.floor("plank",H.hex),mt=d("#ffffff",{map:st.map,normalMap:st.normalMap,roughness:st.roughness}),Tt=i.deck>0?t.deck(Fs.deck):null,At=Tt?d("#ffffff",{map:Tt.map,normalMap:Tt.normalMap,roughness:Tt.roughness}):null,ut=i.deck>0?t.skirt(Fs.deck):null,Ot=ut?d("#ffffff",{map:ut.map,normalMap:ut.normalMap,roughness:.6}):null,Ht=t.roof("panel"),D=d("#ffffff",{map:Ht.map,normalMap:Ht.normalMap,roughness:Ht.roughness}),bt=d(Fs.steel,{roughness:.3,metalness:.85}),pt=u(new Ge({color:"#fff6e0",emissive:"#ffd79a",emissiveIntensity:.35,roughness:.3})),Rt=d("#1f2124",{roughness:.45,metalness:.25}),gt=(rt,...dt)=>(rt.userData.tags=[...rt.userData.tags||[],...dt],rt),Mt=(rt,dt,Dt,Ct=0,kt=0,Kt=0,...$t)=>{let Jt=new de(dt,Dt);return Jt.position.set(Ct,kt,Kt),Jt.castShadow=!0,Jt.receiveShadow=!0,rt.add(Jt),gt(Jt,...$t)},_t=(rt,dt,Dt,Ct,kt,Kt,$t,Jt,...N)=>Mt(rt,Yo(dt,Dt,Ct),Jt,kt,Kt,$t,...N),It=(rt,...dt)=>{let Dt=new qe;return rt.add(Dt),gt(Dt,...dt)},te=(rt,dt)=>{let Dt=rt.attributes.position,Ct=rt.attributes.uv;for(let kt=0;kt<Dt.count;kt++){let[Kt,$t]=dt(Dt.getX(kt),Dt.getY(kt),Dt.getZ(kt));Ct.setXY(kt,Kt,$t)}},E=(rt,dt)=>$c(i,rt,dt),v=gr(i),ot=It(c,"walls"),ft={},wt=(rt,dt)=>{let Dt=i.openings.find(Ct=>Ct.wall===rt&&Ct.corner===dt);return Dt?Te.post+ln[Dt.type].w:0},yt=(rt,dt,Dt,Ct)=>{let kt=new ii;return kt.moveTo(rt,Dt),kt.lineTo(dt,Dt),kt.lineTo(dt,Ct(dt)),kt.lineTo(rt,Ct(rt)),kt.lineTo(rt,Dt),kt},Xt=(rt,dt)=>[rt.a[0]+rt.u[0]*dt,rt.a[1]+rt.u[1]*dt];v.forEach(rt=>{let dt=rt.L,Dt=rt.id,Ct=It(ot,"wall:"+Dt);Ct.position.set(rt.a[0],0,rt.a[1]),Ct.rotation.y=Math.atan2(-rt.u[1],rt.u[0]),ft[Dt]={g:Ct,L:dt,wall:rt},Ct.userData.axis=rt.axis;let kt=i.openings.filter(St=>St.wall===Dt),Kt=wt(Dt,"start"),$t=wt(Dt,"end"),Jt=kt.filter(St=>!St.corner).map(St=>{let Yt=ln[St.type],Vt=St.p*dt,Ut=new Hi,zt=Vt-Yt.w/2,Ft=Vt+Yt.w/2,jt=r+Yt.sill,re=r+Yt.sill+Yt.h;return Ut.moveTo(zt,jt),Ut.lineTo(zt,re),Ut.lineTo(Ft,re),Ut.lineTo(Ft,jt),Ut.lineTo(zt,jt),Ut}),N=Math.max(oi,Kt),$=Math.min(dt-oi,dt-$t),j=yt(N,$,r-.03,St=>p(...Xt(rt,St)).coreTop);j.holes=Jt,Mt(Ct,_u(new Dn(j,{depth:fe-oi,bevelEnabled:!1})),[X,tt,Q],0,0,-fe,"interiorWalls","wall:"+Dt);let ht=e.porch&&Dt==="front",_=rt.axis==="x"?ht?fe:0:oi,O=rt.axis==="x"?ht?dt-fe:dt:dt-oi;e.porch&&Dt==="left"&&(O=dt),e.porch&&Dt==="right"&&(_=0),_=Math.max(_,Kt),O=Math.min(O,dt-$t);let V=yt(_,O,r-.03,St=>p(...Xt(rt,St)).skinTop);V.holes=Jt,Mt(Ct,_u(new Dn(V,{depth:oi,bevelEnabled:!1})),[tt,M,M],0,0,-oi,"cladding","wall:"+Dt);let z=ht?fe+.002:rt.axis==="x"?-.025:.002,G=ht?dt-fe-.002:rt.axis==="x"?dt+.025:dt-.002,vt=_t(Ct,G-z,r-.015,.02,(z+G)/2,(r-.015)/2+.01,.015,at,"base","trims");vt.userData.solid=!0;for(let St of kt)Zt(Ct,St,dt);for(let[St,Yt]of[[Kt,"start"],[$t,"end"]]){if(!St)continue;let Vt=kt.find(ue=>ue.corner===Yt),Ut=r+ln[Vt.type].h,zt=rt.axis==="x"?Te.post:fe+.002,Ft=Yt==="start"?zt:dt-St,jt=Yt==="start"?St:dt-zt,re=Math.min(p(...Xt(rt,Ft)).skinTop,p(...Xt(rt,jt)).skinTop)-Ut;re>.01&&Mt(Ct,Yo(jt-Ft-.004,re,fe-.01),[q,q,q,q,q,lt],(Ft+jt)/2,Ut+re/2,-fe/2,"frames","cornerGlass")}});{let rt=It(c,"trims","corners");v.forEach((dt,Dt)=>{let Ct=v[(Dt+1)%v.length];if(wt(dt.id,"end")&&wt(Ct.id,"start")){let[ht,_]=dt.b,O=p(ht,_).skinTop-.003,V=-dt.n[0]-Ct.n[0],z=-dt.n[1]-Ct.n[1];_t(rt,Te.post,O-r+.03,Te.post,ht+V*Te.post/2,(O+r-.03)/2,_+z*Te.post/2,q,"cornerGlass","frames");return}if(e.porch&&(dt.id==="front"||Ct.id==="front"))return;let kt=Te.trim,Kt=.008,$t=(ht,_)=>p(...Xt(ht,_)).skinTop,Jt=Math.min($t(dt,dt.L),$t(dt,dt.L-kt),$t(Ct,0),$t(Ct,kt))-.003,N=ft[dt.id].g,$=ft[Ct.id].g,j=Jt-r+.03;_t(N,kt,j,Kt,dt.L-kt/2,r-.03+j/2,Kt/2,P,"trims"),_t($,kt+Kt,j,Kt,(kt-Kt)/2,r-.03+j/2,Kt/2,P,"trims")})}if(e.porch){let rt=It(c,"porch","canopy");for(let dt of[-1,1]){let Dt=dt*(n/2-fe/2),Ct=s/2,kt=s/2+_r-.004,Kt=Math.min(p(Dt,Ct).skinTop,p(Dt,kt).skinTop)-.001,$t=Kt-(r-.03);Mt(rt,Yo(fe,$t,kt-Ct),[M,M,tt,tt,tt,tt],Dt,r-.03+$t/2,(Ct+kt)/2,"porch","cladding"),_t(rt,fe+.05,r-.015,.02,Dt,(r-.015)/2+.01,kt+.015,at,"base","trims"),_t(rt,fe+.016,$t,.008,Dt,r-.03+$t/2,kt+.004,P,"trims","porch"),_t(rt,.02,r-.015,kt-Ct+.004,Dt+dt*(fe/2+.015),(r-.015)/2+.01,(Ct+kt+.004)/2,at,"base","trims")}}function Zt(rt,dt,Dt){let Ct=ln[dt.type],kt=dt.p*Dt,Kt=Ct.w,$t=Ct.h,Jt=r+Ct.sill,N=It(rt,"opening:"+dt.id,"openings",Ct.group==="door"?"doors":"windows");N.position.set(kt,Jt,0);let $=Ct.alu?C:q,j=Ct.alu?C:L,ht=(Ut,zt,Ft,jt,re,ue)=>Mt(N,new Fe(Ut,zt,Ft),[$,$,$,$,$,j],jt,re,ue,"frames"),_=(Ut,zt,Ft,jt,re)=>{let ue=Mt(N,new Fn(Ut,zt),W,Ft,jt,re,"glass");return ue.castShadow=!1,ue.renderOrder=2,ue},O=Ct.alu?.05:.07,V=.07,z=-.06;if(ht(Kt,O,V,0,$t-O/2,z),ht(O,$t,V,-Kt/2+O/2,$t/2,z),ht(O,$t,V,Kt/2-O/2,$t/2,z),Ct.group==="door"||Ct.sill===0){let Ut=dt.corner&&rt.userData.axis==="z"?dt.corner==="start"?1:-1:0,zt=Ut?fe-Te.post+.005:0,Ft=Kt+(Ut?0:.02)-zt;_t(N,Ft,.03,fe+.02,Ut*zt/2,.015,-fe/2+.005,$,"frames")}else ht(Kt,O,V,0,O/2,z),_t(N,Kt+.06,.022,.07,0,-.008,.012,$,"frames");let G=Kt-2*O,vt=$t-(Ct.group==="door"||Ct.sill===0?O+.03:2*O),St=Ct.group==="door"||Ct.sill===0?.03:O,Yt=(Ut,zt,Ft)=>{Mt(N,new Fe(.025,.16,.02),bt,Ut,zt,Ft+.02,"frames"),Mt(N,new Fe(.13,.02,.02),bt,Ut-.055,zt+.05,Ft+.04,"frames")},Vt=(Ut,zt,Ft,jt,re,ue=!0,ce=Ct.alu?.05:.07)=>{ht(zt-.004,ce,.065,Ut,jt+Ft-ce/2,re),ht(zt-.004,ce*1.3,.065,Ut,jt+ce*.65,re),ht(ce,Ft,.065,Ut-zt/2+ce/2,jt+Ft/2,re),ht(ce,Ft,.065,Ut+zt/2-ce/2,jt+Ft/2,re),ue&&_(zt-2*ce,Ft-2.3*ce,Ut,jt+Ft/2+.15*ce,re)};if(Ct.kind==="sliding"){let Ut=G/2+.03;Vt(-G/2+Ut/2,Ut,vt,St,z-.0325),Vt(G/2-Ut/2,Ut,vt,St,z+.0325),Yt(-G/2+.1,1,z-.0325+.02)}else if(Ct.kind==="patio"){let Ut=Math.min(.3,G*.2);for(let jt of[-1,1])ht(O*.8,vt,V,jt*(G/2-Ut),St+vt/2,z),_(Ut-O*.4-.01,vt-.03,jt*(G/2-Ut/2+O*.2),St+vt/2,z);let zt=G-2*Ut-O*.8,Ft=zt/2;for(let jt=0;jt<2;jt++)Vt(-zt/2+Ft/2+jt*Ft,Ft-.006,vt,St,z+.002);for(let jt of[-.03,.03])Yt(jt+(jt>0?.06:0),1,z+.03)}else if(Ct.kind==="folding"){let Ut=Ct.leaves,zt=G/Ut;for(let Ft=0;Ft<Ut;Ft++)Vt(-G/2+zt/2+Ft*zt,zt,vt,St,z);Yt(-G/2+zt-.06,1,z+.03)}else if(Ct.kind==="hinged")Vt(0,G,vt,St,z),Yt(G/2-.09,1,z+.03);else if(Ct.kind==="top")Vt(0,G,vt,St,z+.01,!0,.06);else if(Ct.kind==="tall"){let Ut=vt*.44;_(G-.01,vt-Ut-.05,0,St+(vt-Ut-.05)/2,z),ht(G,.05,V,0,St+vt-Ut-.025,z),Vt(0,G,Ut,St+vt-Ut,z+.01,!0,.055)}else _(G-.01,vt-.01,0,St+vt/2,z)}let Bt=It(c,"roof"),Gt=zs(i),Qt=zs(i,gu),Nt=zs(i,gu+.003),Me=Te.fascia-Zc-.005;{let rt=Bs(Gt,[Qt.slice().reverse()]),dt=$o(ks(new Dn(rt,{depth:Te.fascia,bevelEnabled:!1}),-Te.fascia),E);te(dt,(Jt,N,$)=>[Jt+$,N]),Mt(Bt,dt,F,0,0,0,"fascia","trims");let Dt=zs(i,-.005),Ct=zs(i,.03),kt=$o(ks(new Dn(Bs(Dt,[Ct.slice().reverse()]),{depth:.032,bevelEnabled:!1}),-.026),E);Mt(Bt,kt,S,0,0,0,"fascia","roofEdge");let Kt=Ix($o(ks(new Dn(Bs(Nt),{depth:Me,bevelEnabled:!1}),-Zc-Me),E),Jt=>Jt.y>.5?0:Jt.y<-.5?1:2);te(Kt,(Jt,N,$)=>[Jt,$]);let $t=Mt(Bt,Kt,[D,R,tt],0,0,0,"roofDeck");$t.userData.solid=!0,e.canopy&&gt($t,"canopy")}let K={x:n/2-.25,z:-s/2-.09};{let rt=u(Rt.clone());rt.side=on;let dt=Gt.map(N=>N[0]),Dt=Gt.map(N=>N[1]),Ct=Math.min(...dt),kt=Math.max(...dt),Kt=Math.min(...Dt),$t=p(0,Kt).fasciaBottom;Mt(Bt,new Pe(.05,.05,kt-Ct-.02,14,1,!0,0,Math.PI),rt,(Ct+kt)/2,$t+.02,Kt-.055,"gutters").rotation.set(0,0,-Math.PI/2),Mt(Bt,new Pe(.034,.034,$t,12),Rt,K.x,$t/2,K.z,"gutters")}let nt=Ji(i);if(e.canopy&&i.extras.canopyLights){let rt=It(c,"canopyLights"),dt=uu(i),Dt=-n/2-nt.left+.3,Ct=n/2+nt.right-.3,kt=s/2+nt.front*.5;for(let Kt=0;Kt<dt;Kt++){let $t=dt===1?0:Dt+(Ct-Dt)*Kt/(dt-1);Z(rt,$t,p($t,kt).slabBottom,kt)}}function Z(rt,dt,Dt,Ct){Mt(rt,new Pe(.04,.04,.008,20),bt,dt,Dt-.004,Ct),Mt(rt,new Pe(.03,.03,.004,20),pt,dt,Dt-.009,Ct,"lamp"),l.push({kind:"down",position:xu(dt,Dt-.06,Ct)})}let it=It(c,"exteriorLights"),b=(rt,dt,Dt,Ct)=>{let kt=It(ft[rt.id].g,"exteriorLights",Ct?"upDownLights":"includedLights");kt.position.set(dt,Dt,0),Mt(kt,new Pe(.03,.03,.2,18),bt,0,0,.05),_t(kt,.05,.08,.03,0,0,.016,bt),Mt(kt,new Pe(.024,.024,.006,16),pt,0,.101,.05,"lamp"),Mt(kt,new Pe(.024,.024,.006,16),pt,0,-.101,.05,"lamp"),l.push({kind:"updown",position:xu(rt.a[0]+rt.u[0]*dt+rt.n[0]*.12,Dt,rt.a[1]+rt.u[1]*dt+rt.n[1]*.12)})},J=(rt,dt,Dt,Ct=.12)=>dt>.2&&dt<Dt-.2&&i.openings.filter(kt=>kt.wall===rt).every(kt=>Math.abs(dt-kt.p*Dt)>ln[kt.type].w/2+Ct);{let rt=v.find($t=>$t.id==="front"),dt=rt.L,Dt=i.openings.find($t=>$t.role==="main"&&$t.wall==="front"),Ct=Math.min(r+1.85,p(0,s/2).skinTop-.2),kt=[];if(Dt){let $t=Dt.p*dt,Jt=ln[Dt.type].w/2;kt=[$t-Jt-.2,$t+Jt+.2].filter(N=>J("front",N,dt,.1))}kt.length<2&&(kt=[...kt,...[.4,dt-.4].filter($t=>J("front",$t,dt)&&kt.every(Jt=>Math.abs(Jt-$t)>.5))].slice(0,2));for(let $t of kt)b(rt,$t,Ct,!1);let Kt=[];for(let[$t,Jt]of[["left",.82],["left",.2],["right",.18],["right",.8],["back",.2],["back",.8]]){let N=v.find(j=>j.id===$t),$=N.L*Jt;J($t,$,N.L)&&Kt.push([N,$])}for(let[$t,Jt]of Kt.slice(0,i.extras.upDownLights))b($t,Jt,Math.min(r+1.85,p(...Xt($t,Jt)).skinTop-.2),!0)}if(i.extras.outdoorSocket){let rt=[["front",.12],["left",.75],["front",.9]],dt=0;for(let[Dt,Ct]of rt){if(dt>=i.extras.outdoorSocket)break;let kt=v.find(Jt=>Jt.id===Dt),Kt=Math.max(.35,Math.min(kt.L-.35,kt.L*Ct));if(!J(Dt,Kt,kt.L,.1))continue;let $t=It(ft[Dt].g,"outdoorSocket");$t.position.set(Kt,r+.45,0),_t($t,.12,.16,.06,0,0,.03,d("#5b6064",{roughness:.5})),_t($t,.1,.07,.012,0,.03,.066,d("#7e8488",{roughness:.4})),dt++}}if(i.extras.waterButt){let rt=It(c,"waterButt");rt.position.set(K.x-.1,0,K.z-.38);let dt=d("#2f4a35",{roughness:.7});Mt(rt,new Pe(.24,.21,.72,24),dt,0,.3+.36,0),Mt(rt,new Pe(.25,.25,.03,24),Rt,0,1.035,0),Mt(rt,new Pe(.24,.24,.28,4),d("#444a4d",{roughness:.8}),0,.14,0).rotation.y=Math.PI/4,_t(rt,.04,.04,.08,0,.45,.23,bt),Mt(rt,new Pe(.02,.02,.3,8),Rt,.08,1.15,.22)}if(i.extras.connection){let rt=It(c,"connection"),dt=d(Fs.soil,{roughness:1}),Dt=-n/2+.5,Ct=3.2,kt=_t(rt,.14,.012,Ct,Dt,.006,-s/2-.3-Ct/2,dt,"connection");kt.castShadow=!1;for(let Kt=0;Kt<4;Kt++)_t(rt,.045,.3,.045,Dt+.14,.15,-s/2-.55-Kt*(Ct-.5)/3,d("#d7801f",{roughness:.6}),"connection");_t(rt,.16,.22,.08,Dt,r+.25,-s/2-.04,d("#5b6064",{roughness:.5}),"connection")}let xt=s/2;function U(rt,dt,Dt,Ct,kt,Kt){if(Dt-dt<.05||kt-Ct<.05)return;let $t=r-.015,Jt=new Fn(Dt-dt,kt-Ct);te(Jt,(j,ht)=>[j,ht]);let N=Mt(rt,Jt,At,(dt+Dt)/2,$t,(Ct+kt)/2,"deck");N.rotation.x=-Math.PI/2;let $=$t-.01;if(Kt.front&&_t(rt,Dt-dt,$,.02,(dt+Dt)/2,$/2,kt-.01,Ot,"deck"),Kt.sides)for(let j of[dt+.01,Dt-.01])_t(rt,.02,$,kt-Ct-.022,j,$/2,(Ct+kt)/2-.011,Ot,"deck")}if(i.deck>0){let rt=It(c,"deck");if(e.porch){let dt=xt+_r;U(rt,-n/2+fe+.003,n/2-fe-.003,xt+.03,i.deck>_r?dt:dt-.004,{front:i.deck<=_r,sides:!1}),i.deck>_r&&U(rt,-n/2-.03,n/2+.03,dt+.03,xt+.03+i.deck,{front:!0,sides:!0})}else U(rt,-n/2,n/2,xt+.03,xt+.03+i.deck,{front:!0,sides:!0})}let Et=It(c,"foundations");{let rt=-n/2+.25,dt=n/2-.25,Dt=-s/2+.25,Ct=s/2-.25,kt=Math.max(2,Math.ceil((dt-rt)/1.5)+1),Kt=Math.max(2,Math.ceil((Ct-Dt)/1.5)+1),$t=d(Fs.concrete,{roughness:.95});for(let Jt=0;Jt<kt;Jt++)for(let N=0;N<Kt;N++){let $=rt+(dt-rt)*Jt/(kt-1),j=Dt+(Ct-Dt)*N/(Kt-1);_t(Et,.25,.02,.25,$,.01,j,$t),Mt(Et,new Pe(.03,.03,r-.21+.17,8),bt,$,.02+(r-.04)/2,j)}}let et=It(c,"interior"),Lt=yu(v,fe),qt=new cr(Bs(Lt));te(qt,(rt,dt)=>[rt,dt]);let ie=Mt(et,ks(qt,r+.001),mt,0,0,0,"floor");ie.castShadow=!1;let ee=ks(new Dn(Bs(yu(v,.012)),{depth:r-.03-.06,bevelEnabled:!1}),.06),oe=Mt(et,ee,tt,0,0,0);oe.castShadow=!1,oe.userData.solid=!0;let pe=(rt,dt)=>p(rt,dt).ceiling;{let rt=new cr(Bs(Lt));te(rt,(Dt,Ct)=>[Dt,-Ct]);let dt=Mt(c,$o(ks(rt,0),pe),ct,0,0,0,"ceiling");dt.castShadow=!1}for(let{g:rt,L:dt,wall:Dt}of Object.values(ft)){let Ct=i.openings.filter(Jt=>Jt.wall===Dt.id&&ln[Jt.type].sill===0).map(Jt=>[Jt.p*dt-ln[Jt.type].w/2,Jt.p*dt+ln[Jt.type].w/2]),kt=Math.max(fe,wt(Dt.id,"start")),Kt=Math.min(dt-fe,dt-wt(Dt.id,"end")),$t=[];for(let[Jt,N]of Ct.sort(($,j)=>$[0]-j[0]))Jt>kt&&$t.push([kt,Jt]),kt=Math.max(kt,N);kt<Kt&&$t.push([kt,Kt]);for(let[Jt,N]of $t){if(N-Jt<.02)continue;let $=_t(rt,N-Jt-.004,.07,.015,(Jt+N)/2,r+.036,-fe-.0075,lt,"interiorWalls");$.castShadow=!1}}{let rt=It(c,"wallSection"),dt=d(i.extras.acousticInsulation?"#7f8f86":"#e8c95a",{roughness:1}),Dt=d(i.extras.acousticBoard?"#7d86b8":"#eceae4",{roughness:1}),Ct=d("#4f6d8a",{roughness:1}),kt=d("#2b2b2a",{roughness:1});for(let{g:Kt,L:$t,wall:Jt}of Object.values(ft)){let N=Math.max(oi,wt(Jt.id,"start")),$=Math.min($t-oi,$t-wt(Jt.id,"end"));if($-N<.05)continue;let j=Math.min(p(...Xt(Jt,N)).sectionY,p(...Xt(Jt,$)).sectionY),ht=i.extras.acousticBoard?-.141:-.1465,_=[[-.047,-.0228,kt,"wallSection"],[-.0515,-.0475,Ct,"wallSection"],[ht+5e-4,-.052,dt,"acousticInsulation"],[-.1595,ht,Dt,"acousticBoard"]];for(let[O,V,z,G]of _){let vt=Mt(Kt,new Fn($-N-.004,V-O),z,(N+$)/2,j,(O+V)/2,"wallSection",G);vt.rotation.x=-Math.PI/2,vt.castShadow=!1,vt.receiveShadow=!1}}}let ae={x0:-n/2+fe,x1:n/2-fe,z0:-s/2+fe,z1:s/2-fe};return mu(et,i,{...ae,floor:r,ceilingAt:pe,frontWall:"front",wallGroups:ft,walls:v},{std:d,add:Mt,box:_t,group:It,tag:gt,keep:u,metricBox:Yo,lights:l,materials:{white:lt,steel:bt,lamp:pt,glass:W,cladMat:M,trim:P,aluMat:C},acoustic:qc[i.acousticFinish]}),c.traverse(rt=>{rt.parent&&rt.parent.userData.tags&&(rt.userData.tags=[...new Set([...rt.parent.userData.tags||[],...rt.userData.tags||[]])])}),{group:c,lights:l,materials:h}}var ge=1024;function xn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ai(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function Dx(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Hs=(i,t=0,e=255)=>Math.max(t,Math.min(e,i));function bi(i){let t=parseInt(i.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function Ce([i,t,e],n,s=0){return`rgb(${Hs(i*n+s)},${Hs(t*n)},${Hs(e*n-s)})`}function Ux(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=Dx(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),c=o.data,l=(h,u)=>s[((u+n)%n*e+(h+e)%e)*4]/255;for(let h=0;h<n;h++)for(let u=0;u<e;u++){let d=l(u+1,h-1)+2*l(u+1,h)+l(u+1,h+1)-(l(u-1,h-1)+2*l(u-1,h)+l(u-1,h+1)),p=l(u-1,h+1)+2*l(u,h+1)+l(u+1,h+1)-(l(u-1,h-1)+2*l(u,h-1)+l(u+1,h-1)),g=-d*t,y=p*t,m=1,f=Math.hypot(g,y,m),M=(h*e+u)*4;c[M]=(g/f*.5+.5)*255,c[M+1]=(y/f*.5+.5)*255,c[M+2]=(m/f*.5+.5)*255,c[M+3]=255}return a.putImageData(o,0,0),r}function We(i,t,e){let n=i.getContext("2d"),s=n.getImageData(0,0,i.width,i.height),r=s.data,a=xn(e);for(let o=0;o<r.length;o+=4){let c=(a()-.5)*t;r[o]=Hs(r[o]+c),r[o+1]=Hs(r[o+1]+c),r[o+2]=Hs(r[o+2]+c)}n.putImageData(s,0,0)}function vr(i,t,e,n,s,r,a){let o=e-t;for(let c=0;c<a.lines;c++){let l=t+s()*o,h=s()<a.darkShare,u=h?1-a.contrast*(.4+s()*.6):1+a.contrast*.5*s();i.strokeStyle=Ce(r,u,a.warm),i.globalAlpha=.12+s()*.3,i.lineWidth=.6+s()*(h?2.6:1.6);let d=1+Math.floor(s()*2),p=2+Math.floor(s()*4),g=s()*a.wave,y=s()*a.wave*.35,m=s()*6.283,f=s()*6.283;i.beginPath();for(let M=0;M<=n;M+=8){let x=l+g*Math.sin(6.283*d*M/n+m)+y*Math.sin(6.283*p*M/n+f);M===0?i.moveTo(x,M):i.lineTo(x,M)}i.stroke()}i.globalAlpha=1}function Nx(i,t,e,n,s,r,a,o){for(let c of[n,n-s,n+s]){let l=o*(.6+r()*.4),h=o*(1.4+r()*.8),u=i.createRadialGradient(e,c,0,e,c,l*1.6);u.addColorStop(0,Ce(a,.42)),u.addColorStop(.45,Ce(a,.62)),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.ellipse(e,c,l*1.6,h*1.6,0,0,6.283),i.fill(),i.strokeStyle=Ce(a,.7),i.globalAlpha=.4,i.lineWidth=1;for(let d=1;d<4;d++)i.beginPath(),i.ellipse(e,c,l*(1+d*.5),h*(1+d*.6),0,0,6.283),i.stroke();i.globalAlpha=1,t&&(t.fillStyle="rgba(0,0,0,.18)",t.beginPath(),t.ellipse(e,c,l,h,0,0,6.283),t.fill())}}var Ox={cedar:{board:.125,count:8,groove:.004,bevel:.003,lines:30,contrast:.3,darkShare:.6,wave:2.2,warm:6,knots:.14,jitter:.16,roughness:.74,normal:3,vgroove:!0,hues:[[1.05,.9,.86],[1,.97,.94],[.86,.83,.8],[1.03,.94,.88],[.93,.88,.85]]},thermowood:{board:.13,count:8,groove:.004,bevel:.003,lines:26,contrast:.34,darkShare:.7,wave:2.6,warm:8,knots:.4,jitter:.1,roughness:.78,normal:3,vgroove:!0},smooth:{board:.145,count:7,groove:.005,bevel:.003,lines:0,contrast:0,darkShare:.5,wave:0,warm:0,knots:0,jitter:.02,roughness:.6,normal:3.2,vgroove:!0,emboss:.07},woodgrain:{board:.145,count:7,groove:.005,bevel:.003,lines:34,contrast:.12,darkShare:.55,wave:2,warm:2,knots:0,jitter:.03,roughness:.62,normal:3.4,vgroove:!0,emboss:.2},fibre:{board:.18,count:6,groove:.004,bevel:.003,lines:22,contrast:.05,darkShare:.5,wave:2,warm:0,knots:0,jitter:.012,roughness:.76,normal:3.6,lap:!0,emboss:.16},skirt:{board:.1,count:10,groove:.006,bevel:.003,lines:0,contrast:0,darkShare:.5,wave:0,warm:0,knots:0,jitter:.025,roughness:.55,normal:3.4,vgroove:!0,emboss:.05}};function Mu(i,{scale:t=1,flat:e=!1}={}){let n=new Map,s=Math.min(8,i.capabilities.getMaxAnisotropy()),r=t,a=0,o=0,c=(R,q=R)=>{let L=document.createElement("canvas");L.width=Math.max(1,Math.round(R*r)),L.height=Math.max(1,Math.round(q*r));let C=L.getContext("2d");if(!C)throw new Error("2D canvas unavailable");return r!==1&&C.scale(r,r),L},l=R=>{R.width=R.height=0},h=(R,q)=>{let L=Ux(R,q*r);return l(R),L},u=(R,q=!0,L=!0)=>{let C=new Ps(R);return q&&(C.colorSpace=tn),C.anisotropy=s,L&&(C.wrapS=C.wrapT=js),C.onUpdate=()=>{C.onUpdate=null,l(R)},C},d=R=>{if(!R)return{map:null,normalMap:null,roughness:.8,size:[1,1]};let q=new _o(new Uint8Array([...bi(R),255]),1,1);return q.colorSpace=tn,q.needsUpdate=!0,q.userData.hex=R,{map:q,normalMap:null,roughness:.8,size:[1,1]}},p=(R,q,L)=>{let C=n.get(R);if(!C){let I;if(e)I=d(q);else try{I=L()}catch(W){o++,console.warn("Texture drawn flat:",R,W),I=d(q)}C={value:I,used:a},n.set(R,C)}return C.used=a,C.value},g=R=>{for(let q of[R.map,R.normalMap])q==null||q.dispose()},y=(R,q,L)=>{for(let C of[R.map,R.normalMap].filter(Boolean))C.repeat.set(1/q,1/L);return{...R,size:[q,L]}};function m(R,q,L){return R==="stone"?f(q):p(`clad:${R}:${q}:${L}`,q,()=>{let C=Ox[R],I=C.widths||Array(C.count).fill(C.board+(C.gap||0)),W=I.reduce((At,ut)=>At+ut,0),B=ge,X=ge,ct=B/W,Q=c(B),tt=c(B),lt=Q.getContext("2d"),H=tt.getContext("2d");if(L)for(let At of[lt,H])At.translate(B,0),At.rotate(Math.PI/2);let st=bi(q),mt=xn(ai(R+q));H.fillStyle="#000",H.fillRect(0,0,B,X);let Tt=0;for(let At=0;At<I.length;At++){let ut=Tt*ct,Ot=ut+(I[At]-(C.gap||0))*ct;Tt+=I[At];let Ht=1+(mt()-.5)*2*C.jitter,D=C.hues?C.hues[Math.floor(mt()*C.hues.length)]:[1,1,1],bt=st.map((Mt,_t)=>Mt*Ht*D[_t]);lt.fillStyle=Ce(bt,1,C.warm*(mt()-.5)),lt.fillRect(ut,0,Ot-ut,X),vr(lt,ut,Ot,X,mt,bt,C),C.knots&&mt()<C.knots&&Nx(lt,H,ut+(Ot-ut)*(.25+mt()*.5),mt()*X,X,mt,bt,4+mt()*6);let pt=Math.max(1,C.bevel*ct),Rt=H.createLinearGradient(ut,0,Ot,0);if(Rt.addColorStop(0,"#5a5a5a"),Rt.addColorStop(pt/(Ot-ut),"#f0f0f0"),Rt.addColorStop(1-pt/(Ot-ut),"#f0f0f0"),Rt.addColorStop(1,"#5a5a5a"),H.fillStyle=Rt,H.fillRect(ut,0,Ot-ut,X),C.shiplap||C.lap){let Mt=H.createLinearGradient(ut,0,Ot,0);Mt.addColorStop(0,C.lap?"rgba(0,0,0,.75)":"rgba(0,0,0,.3)"),Mt.addColorStop(C.lap?1:.5,"rgba(0,0,0,0)"),H.fillStyle=Mt,H.fillRect(ut,0,Ot-ut,X),lt.fillStyle=C.lap?"rgba(0,0,0,.16)":"rgba(0,0,0,.07)",lt.fillRect(ut,0,(Ot-ut)*(C.lap?.12:.2),X),C.lap&&(lt.fillStyle="rgba(255,255,255,.06)",lt.fillRect(Ot-(Ot-ut)*.25,0,(Ot-ut)*.25,X))}if(C.vgroove&&(lt.fillStyle="rgba(0,0,0,.12)",lt.fillRect(ut,0,2,X),lt.fillStyle="rgba(255,255,255,.18)",lt.fillRect(Ot-3,0,2,X)),C.alternate&&At%2&&(lt.fillStyle="rgba(0,0,0,.14)",lt.fillRect(ut,0,Ot-ut,X),H.fillStyle="rgba(0,0,0,.35)",H.fillRect(ut,0,Ot-ut,X)),C.weathered)for(let Mt=0;Mt<6;Mt++)lt.fillStyle=`rgba(${mt()<.5?"200,200,205":"90,70,50"},${.05+mt()*.07})`,lt.fillRect(ut+mt()*(Ot-ut)*.8,0,(Ot-ut)*(.1+mt()*.3),X);let gt=Math.max(1.5,(C.groove||0)*ct);if(C.gap){let Mt=Ot,_t=C.gap*ct;lt.fillStyle=Ce(st,.38),lt.fillRect(Mt,0,_t,X),lt.fillStyle="rgba(0,0,0,.35)",lt.fillRect(Mt,0,_t*.3,X),H.fillStyle="#101010",H.fillRect(Mt,0,_t,X)}else lt.fillStyle=Ce(st,.45),lt.fillRect(Ot-gt,0,gt,X),H.fillStyle="#000",H.fillRect(Ot-gt,0,gt,X)}if(C.emboss||C.brush){H.globalAlpha=C.emboss||.16;for(let At=0;At<(C.brush||520);At++){let ut=mt()*B,Ot=mt()*X,Ht=40+mt()*160;H.strokeStyle=mt()<.5?"#000":"#fff",H.lineWidth=.8+mt(),H.beginPath(),H.moveTo(ut,Ot),H.lineTo(ut+(mt()-.5)*3,Ot+Ht),H.stroke()}H.globalAlpha=1}return We(Q,R==="smooth"||R==="skirt"?5:10,ai(q)),y({map:u(Q),normalMap:u(h(tt,C.normal),!1),roughness:C.roughness},W,W)})}function f(R){return p(`stone:${R}`,R,()=>{let C=853.3333333333334,I=xn(ai("stone"+R)),W=bi(R),B=c(1024),X=c(1024),ct=B.getContext("2d"),Q=X.getContext("2d");ct.fillStyle=Ce(W,.35),ct.fillRect(0,0,1024,1024),Q.fillStyle="#000",Q.fillRect(0,0,1024,1024);let tt=0;for(;tt<1024;){let lt=(.045+I()*.05)*C,H=-I()*120;for(;H<1024;){let st=(.15+I()*.35)*C,mt=.7+I()*.55,Tt=At=>{ct.fillStyle=Ce(W,mt,(I()-.5)*18),ct.fillRect(H+At+2,tt+2,st-4,lt-4);for(let Ht=0;Ht<14;Ht++)ct.fillStyle=`rgba(${I()<.5?"0,0,0":"255,255,255"},${.05+I()*.08})`,ct.fillRect(H+At+2+I()*(st-8),tt+2+I()*(lt-6),3+I()*18,1+I()*3);let ut=Q.createLinearGradient(0,tt,0,tt+lt),Ot=150+I()*90|0;ut.addColorStop(0,`rgb(${Ot},${Ot},${Ot})`),ut.addColorStop(1,`rgb(${Ot-60},${Ot-60},${Ot-60})`),Q.fillStyle=ut,Q.fillRect(H+At+2,tt+2,st-4,lt-4)};Tt(0),H+st>1024&&Tt(-1024),H+=st}tt+=lt}return We(B,14,ai(R)),We(X,50,3),y({map:u(B),normalMap:u(h(X,3.4),!1),roughness:.92},1.2,1.2)})}let M=R=>m("skirt",R,!1);function x(R,q){return p(`metal:${R}:${q}`,R,()=>{let X=c(512),ct=c(512),Q=X.getContext("2d"),tt=ct.getContext("2d");if(q)for(let H of[Q,tt])H.translate(512,0),H.rotate(Math.PI/2);let lt=bi(R);Q.fillStyle=Ce(lt,1),Q.fillRect(0,0,512,512),tt.fillStyle="#303030",tt.fillRect(0,0,512,512);for(let H=0;H<5;H++){let st=H*.2*512,mt=.02*512,Tt=.012*512,At=.044*512;Q.fillStyle=Ce(lt,1.18),Q.fillRect(st,0,Tt,512),Q.fillStyle=Ce(lt,1.06),Q.fillRect(st+Tt,0,mt,512),Q.fillStyle=Ce(lt,.72),Q.fillRect(st+Tt+mt,0,Tt,512);let ut=tt.createLinearGradient(st,0,st+At,0);ut.addColorStop(0,"#303030"),ut.addColorStop(.3,"#f0f0f0"),ut.addColorStop(.7,"#f0f0f0"),ut.addColorStop(1,"#303030"),tt.fillStyle=ut,tt.fillRect(st,0,At,512);for(let Ot of[.45,.7])Q.fillStyle=Ce(lt,.9),Q.fillRect(st+Ot*.2*512,0,2,512),tt.fillStyle="#505050",tt.fillRect(st+Ot*.2*512,0,2,512)}return We(X,5,ai("metal"+R)),y({map:u(X),normalMap:u(h(ct,2.6),!1),roughness:.42},1,1)})}function w(R,q){return p(`floor:${R}:${q}`,q,()=>{let L=bi(q),C=xn(ai(q)),I=c(ge),W=c(ge),B=I.getContext("2d"),X=W.getContext("2d");if(R==="carpet"||R==="rubber"){B.fillStyle=Ce(L,1),B.fillRect(0,0,ge,ge);for(let Tt=0;Tt<26e3;Tt++)B.fillStyle=Ce(L,.82+C()*.36),B.fillRect(C()*ge,C()*ge,1.4,1.4);return X.fillStyle="#808080",X.fillRect(0,0,ge,ge),We(W,60,9),y({map:u(I),normalMap:u(h(W,1.2),!1),roughness:1},.5,.5)}let ct=6,Q=.19,tt=1.28,lt=tt,H=Q*ct,st=ge/lt,mt=ge/H;X.fillStyle="#000",X.fillRect(0,0,ge,ge);for(let Tt=0;Tt<ct;Tt++){let At=Tt*.37%1*tt;for(let ut=-1;ut<2;ut++){let Ot=(At+ut*tt)*st,Ht=Tt*Q*mt,D=tt*st,bt=Q*mt,pt=1+(C()-.5)*.16;B.save(),B.beginPath(),B.rect(Ot,Ht,D,bt),B.clip(),B.fillStyle=Ce(L,pt),B.fillRect(Ot,Ht,D,bt),B.translate(Ot,Ht+bt),B.rotate(-Math.PI/2),vr(B,0,bt,D,C,L.map(Rt=>Rt*pt),{lines:22,contrast:.28,darkShare:.7,wave:4,warm:3}),B.restore(),X.fillStyle="#e8e8e8",X.fillRect(Ot+2,Ht+2,D-4,bt-4),B.fillStyle=Ce(L,.55),B.fillRect(Ot,Ht,D,1.2),B.fillRect(Ot,Ht,1.2,bt)}}return We(I,8,5),y({map:u(I),normalMap:u(h(W,1.6),!1),roughness:R==="plank"?.5:.55},lt,H)})}function k(R){return p(`deck:${R}`,R,()=>{let q=bi(R),L=xn(ai("deck"+R)),C=.14,I=.006,W=6,B=(C+I)*W,X=1.8,ct=c(ge),Q=c(ge),tt=ct.getContext("2d"),lt=Q.getContext("2d"),H=ge/B,st=ge/X;tt.fillStyle=Ce(q,.25),tt.fillRect(0,0,ge,ge),lt.fillStyle="#000",lt.fillRect(0,0,ge,ge);for(let mt=0;mt<W;mt++){let Tt=mt*(C+I)*H,At=Tt+C*H,ut=1+(L()-.5)*.22;tt.fillStyle=Ce(q,ut),tt.fillRect(Tt,0,At-Tt,ge),vr(tt,Tt,At,ge,L,q.map(Ht=>Ht*ut),{lines:24,contrast:.3,darkShare:.7,wave:3,warm:4}),lt.fillStyle="#d0d0d0",lt.fillRect(Tt,0,At-Tt,ge);for(let Ht=1;Ht<7;Ht++)lt.fillStyle="#9a9a9a",lt.fillRect(Tt+(At-Tt)*Ht/7-1,0,2,ge);let Ot=mt*.43%1*ge;tt.fillStyle=Ce(q,.3),tt.fillRect(Tt,Ot,At-Tt,3),lt.fillStyle="#000",lt.fillRect(Tt,Ot,At-Tt,3)}return We(ct,10,77),y({map:u(ct),normalMap:u(h(Q,2.5),!1),roughness:.74},B,X)})}function F(R){return p(`roof:${R}`,"#2d2f30",()=>{let q=xn(ai(R)),L=c(512),C=c(512),I=L.getContext("2d"),W=C.getContext("2d");if(R==="shingles"){I.fillStyle="#232527",I.fillRect(0,0,512,512),W.fillStyle="#000",W.fillRect(0,0,512,512);let B=6,X=3,ct=512/B,Q=512/X;for(let tt=0;tt<B;tt++){let lt=tt%2*Q/2;for(let H=-1;H<=X;H++){let st=lt+H*Q,mt=.85+q()*.3;I.fillStyle=`rgb(${38*mt},${40*mt},${43*mt})`,I.fillRect(st+2,tt*ct,Q-4,ct-3);let Tt=W.createLinearGradient(0,tt*ct,0,tt*ct+ct);Tt.addColorStop(0,"#606060"),Tt.addColorStop(1,"#f0f0f0"),W.fillStyle=Tt,W.fillRect(st+2,tt*ct,Q-4,ct-3)}}return We(L,26,41),y({map:u(L),normalMap:u(h(C,3),!1),roughness:.92},1,.84)}if(R==="panel"){I.fillStyle="#3b4044",I.fillRect(0,0,512,512),W.fillStyle="#808080",W.fillRect(0,0,512,512);for(let B of[0,256])I.fillStyle="#2a2e31",I.fillRect(B,0,6,512),I.fillStyle="#50565a",I.fillRect(B+6,0,3,512),W.fillStyle="#f0f0f0",W.fillRect(B,0,9,512);return We(L,8,41),We(C,14,5),y({map:u(L),normalMap:u(h(C,2),!1),roughness:.55},2,2)}I.fillStyle="#2d2f30",I.fillRect(0,0,512,512);for(let B=0;B<6e3;B++)I.fillStyle=`rgba(${q()<.5?"0,0,0":"90,92,94"},.18)`,I.fillRect(q()*512,q()*512,2,2);return W.fillStyle="#808080",W.fillRect(0,0,512,512),We(C,30,3),y({map:u(L),normalMap:u(h(C,1),!1),roughness:.88},1.2,1.2)})}function P(R){return p(`int:${R.panels}:${R.wall}:${R.beading}`,R.wall,()=>{let q=c(512,1024),L=c(512,1024),C=q.getContext("2d"),I=L.getContext("2d"),W=1.22,B=2.44,X=512/W,ct=1024/B;C.fillStyle=R.wall,C.fillRect(0,0,512,1024),I.fillStyle="#808080",I.fillRect(0,0,512,1024);let Q=(tt,lt,H,st,mt)=>{C.fillStyle=mt,C.fillRect(tt,lt,H,st),C.fillStyle="rgba(0,0,0,.08)",C.fillRect(tt+H,lt,2,st),I.fillStyle="#f4f4f4",I.fillRect(tt,lt,H,st)};if(R.panels==="plaster"){let tt=xn(13);for(let lt=0;lt<4e3;lt++)C.fillStyle=`rgba(${tt()<.5?"0,0,0":"255,255,255"},.025)`,C.fillRect(tt()*512,tt()*1024,6+tt()*20,4+tt()*14);We(L,6,9)}if(R.panels==="beaded"&&Q(0,0,.045*X,1024,R.beading),R.panels==="slatted"){C.fillStyle="#26282a",C.fillRect(0,0,512,1024);let H=bi(R.wall),st=xn(ai(R.wall));for(let mt=0;mt<20;mt++){let Tt=1+(st()-.5)*.12;C.fillStyle=Ce(H,Tt),C.fillRect(mt*25.6+2,0,25.6-6,1024),vr(C,mt*25.6+2,mt*25.6+25.6-4,1024,st,H.map(At=>At*Tt),{lines:6,contrast:.2,darkShare:.6,wave:2,warm:4}),I.fillStyle="#e8e8e8",I.fillRect(mt*25.6+2,0,25.6-6,1024)}I.fillStyle="#202020";for(let mt=0;mt<20;mt++)I.fillRect(mt*25.6+25.6-4,0,6,1024)}if(R.panels==="plywood"){let tt=bi(R.wall),lt=xn(5);vr(C,0,512,1024,lt,tt,{lines:70,contrast:.18,darkShare:.5,wave:14,warm:6}),C.fillStyle="rgba(0,0,0,.25)",C.fillRect(0,0,2,1024),C.fillRect(0,0,512,2),I.fillStyle="#000",I.fillRect(0,0,2,1024),I.fillRect(0,0,512,2)}if(R.panels==="wrapped"&&(C.fillStyle="rgba(0,0,0,.07)",C.fillRect(0,0,3,1024),I.fillStyle="#202020",I.fillRect(0,0,3,1024)),R.panels==="boards"&&(C.fillStyle="rgba(0,0,0,.09)",C.fillRect(0,0,3,1024),C.fillRect(0,0,512,3),I.fillStyle="#000",I.fillRect(0,0,3,1024),I.fillRect(0,0,512,3)),R.panels==="membrane"){let tt=xn(31);for(let lt=0;lt<9e3;lt++)C.fillStyle=tt()<.5?"rgba(0,0,0,.06)":"rgba(255,255,255,.07)",C.fillRect(tt()*512,tt()*1024,2,1);C.fillStyle="#c9c9c4",C.fillRect(0,0,512,.05*ct),C.fillRect(0,1024-.05*ct,512,.05*ct);for(let lt of[0,256])C.fillStyle="rgba(0,0,0,.18)",C.fillRect(lt,0,2,1024),I.fillStyle="#5a5a5a",I.fillRect(lt,0,2,1024);for(let lt=20;lt<1024;lt+=70)for(let H of[6,250,262,506])C.fillStyle="#8e9090",C.fillRect(H,lt,4,2);We(L,18,7)}return We(q,3,11),y({map:u(q),normalMap:u(h(L,2),!1),roughness:.82},W,B)})}function Y(){return p("lawn","#6a8649",()=>{let R=xn(17),q=c(ge),L=q.getContext("2d");L.fillStyle="#6a8649",L.fillRect(0,0,ge,ge);for(let I=0;I<2;I++)L.fillStyle=I%2?"rgba(255,255,230,.025)":"rgba(20,40,0,.025)",L.fillRect(0,I*ge/2,ge,ge/2);for(let I=0;I<9e4;I++){let W=R();L.fillStyle=W<.45?"rgba(46,72,30,.55)":W<.85?"rgba(125,152,86,.5)":"rgba(170,180,110,.45)";let B=R()*ge,X=R()*ge;L.fillRect(B,X,1.3,2.6+R()*3)}let C=c(512);return C.getContext("2d").fillStyle="#808080",C.getContext("2d").fillRect(0,0,512,512),We(C,90,21),y({map:u(q),normalMap:u(h(C,1.4),!1),roughness:.95},3,3)})}function at(){return p("paving","#c8c4ba",()=>{let R=xn(5),q=c(512),L=c(512),C=q.getContext("2d"),I=L.getContext("2d");C.fillStyle="#b9ab90",C.fillRect(0,0,512,512),I.fillStyle="#000",I.fillRect(0,0,512,512);let W=2,B=512/W;for(let X=0;X<W;X++)for(let ct=0;ct<W;ct++){let Q=.9+R()*.18;C.fillStyle=`rgb(${224*Q},${210*Q},${184*Q})`,C.fillRect(X*B+3,ct*B+3,B-6,B-6),I.fillStyle="#d8d8d8",I.fillRect(X*B+3,ct*B+3,B-6,B-6)}return We(q,22,8),We(L,40,9),y({map:u(q),normalMap:u(h(L,2),!1),roughness:.9},1.2,1.2)})}function S(){return p("gravel","#a49d90",()=>{let R=xn(23),q=c(512),L=c(512),C=q.getContext("2d"),I=L.getContext("2d");C.fillStyle="#a49d90",C.fillRect(0,0,512,512),I.fillStyle="#202020",I.fillRect(0,0,512,512);for(let W=0;W<9e3;W++){let B=R()*512,X=R()*512,ct=1.5+R()*3.5,Q=.7+R()*.5;C.fillStyle=`rgb(${190*Q},${182*Q},${168*Q})`,C.beginPath(),C.ellipse(B,X,ct,ct*.8,R()*3,0,6.283),C.fill(),I.fillStyle=`rgb(${200*Q},${200*Q},${200*Q})`,I.beginPath(),I.ellipse(B,X,ct,ct*.8,0,0,6.283),I.fill()}return y({map:u(q),normalMap:u(h(L,2.2),!1),roughness:1},.8,.8)})}function A(){return p("powder",null,()=>{let R=c(256);R.getContext("2d").fillStyle="#808080",R.getContext("2d").fillRect(0,0,256,256),We(R,26,4);let q=u(h(R,.8),!1);return q.repeat.set(4,4),{normalMap:q}})}return{cladding:m,skirt:M,stone:f,metal:x,floor:w,deck:k,roof:F,interior:P,lawn:Y,paving:at,gravel:S,powder:A,begin(){a++},prune(R){let q=[...n].filter(([L,C])=>C.used<a&&L!=="lawn").sort((L,C)=>L[1].used-C[1].used);for(let[L,C]of q){if(n.size<=R)break;g(C.value),n.delete(L)}},stats:()=>({textures:n.size,failures:o,scale:r}),dispose(){for(let R of n.values())g(R.value);n.clear()}}}var Su="http://www.w3.org/2000/svg",Jc=.12,Zo=class{constructor(){this.domElement=document.createElementNS(Su,"svg"),this.domElement.setAttribute("class","scene-svg"),this.domElement.setAttribute("preserveAspectRatio","none"),this.info={faces:0,paths:0,ms:0},this.shadowMap={enabled:!1,type:0},this.capabilities={getMaxAnisotropy:()=>1,isWebGL2:!1},this.extensions={has:()=>!1},this.toneMappingExposure=1,this._pool=[],this._w=1,this._h=1}setPixelRatio(){}getPixelRatio(){return 1}setSize(t,e){this._w=Math.max(1,t),this._h=Math.max(1,e),this.domElement.setAttribute("viewBox",`${-this._w/2} ${-this._h/2} ${this._w} ${this._h}`)}getSize(t){return t.set(this._w,this._h)}getContext(){return{isContextLost:()=>!1}}dispose(){this._pool.length=0,this.domElement.replaceChildren()}forceContextLoss(){}render(t,e){let n=performance.now();t.updateMatrixWorld(),e.parent||e.updateMatrixWorld();let s=t.background;s&&s.isColor&&(this.domElement.style.backgroundColor=s.getStyle());let r=new we().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a=new T().setFromMatrixPosition(e.matrixWorld),o=this._w/2,c=this._h/2,l=new ne(0,0,0),h=[];t.traverseVisible(R=>{if(R.isLight){if(R.isAmbientLight)l.add(R.color.clone().multiplyScalar(R.intensity));else if(R.isHemisphereLight)l.add(R.color.clone().lerp(R.groundColor,.5).multiplyScalar(R.intensity*.5));else if(R.isDirectionalLight){let q=new T().setFromMatrixPosition(R.matrixWorld).sub(new T().setFromMatrixPosition(R.target.matrixWorld)).normalize();h.push({dir:q,colour:R.color.clone().multiplyScalar(R.intensity)})}}});let u=[],d=new T,p=new T,g=new T,y=new T,m=new T,f=new T,M=new _e,x=new _e,w=new _e,k=new ne,F=new ne;t.traverseVisible(R=>{var B,X;if(!R.isMesh||!((B=R.geometry)!=null&&B.attributes.position))return;let q=[].concat(R.material),L=R.geometry.attributes.position,C=R.geometry.index,I=R.geometry.groups.length?R.geometry.groups:[{start:0,count:C?C.count:L.count,materialIndex:0}],W=!!R.userData.ground;for(let ct of I){let Q=q[ct.materialIndex]||q[0];if(!Q||!Q.visible||Q.colorWrite===!1||Q.opacity<.03||Q.name==="hidden")continue;let tt=Q.side!==0,lt=Q.side===1,H=Math.min(ct.start+ct.count,C?C.count:L.count);for(let st=ct.start;st+2<H;st+=3){let mt=C?C.getX(st):st,Tt=C?C.getX(st+1):st+1,At=C?C.getX(st+2):st+2;if(d.fromBufferAttribute(L,mt).applyMatrix4(R.matrixWorld),p.fromBufferAttribute(L,Tt).applyMatrix4(R.matrixWorld),g.fromBufferAttribute(L,At).applyMatrix4(R.matrixWorld),y.crossVectors(m.subVectors(p,d),f.subVectors(g,d)),y.lengthSq()<1e-12)continue;y.normalize();let ut=y.dot(m.subVectors(a,d));if(lt&&(y.negate(),ut=-ut),ut<=0){if(!tt)continue;y.negate()}M.set(d.x,d.y,d.z,1).applyMatrix4(r),x.set(p.x,p.y,p.z,1).applyMatrix4(r),w.set(g.x,g.y,g.z,1).applyMatrix4(r);let Ot=Fx([M.clone(),x.clone(),w.clone()]);if(Ot.length<3)continue;let Ht="",D=1/0,bt=-1/0,pt=1/0,Rt=-1/0,gt=0;for(let _t=0;_t<Ot.length;_t++){let It=Ot[_t],te=It.x/It.w*o,E=-It.y/It.w*c;Ht+=(_t?"L":"M")+te.toFixed(1)+","+E.toFixed(1),D=Math.min(D,te),bt=Math.max(bt,te),pt=Math.min(pt,E),Rt=Math.max(Rt,E),gt+=It.w}if(bt<-o||D>o||Rt<-c||pt>c||(bt-D)*(Rt-pt)<.5)continue;k.copy(l);for(let _t of h){let It=Math.round(y.dot(_t.dir)*12)/12;It>0&&k.add(F.copy(_t.colour).multiplyScalar(It))}k.multiply(Q.color),Q.emissive&&k.add(Q.emissive.clone().multiplyScalar((X=Q.emissiveIntensity)!=null?X:1));let Mt=Q.transparent?Q.opacity:1;u.push({depth:gt/Ot.length,ground:W,d:Ht+"z",fill:"#"+k.getHexString(),opacity:Mt})}}}),u.sort((R,q)=>q.ground-R.ground||q.depth-R.depth);let P=0,Y="",at=1,S="",A=()=>{if(!S)return;let R=this._pool[P];R||(R=this._pool[P]=document.createElementNS(Su,"path"),R.setAttribute("stroke-linejoin","round")),R.setAttribute("d",S),R.setAttribute("fill",Y),at<1?(R.setAttribute("fill-opacity",at.toFixed(2)),R.setAttribute("stroke","none")):(R.removeAttribute("fill-opacity"),R.setAttribute("stroke",Y),R.setAttribute("stroke-width",".7")),(R.parentNode!==this.domElement||this.domElement.childNodes[P]!==R)&&this.domElement.appendChild(R),P++,S=""};for(let R of u)(R.fill!==Y||R.opacity!==at)&&(A(),Y=R.fill,at=R.opacity),S+=R.d;for(A();this.domElement.childNodes.length>P;)this.domElement.lastChild.remove();this.info={faces:u.length,paths:P,ms:Math.round(performance.now()-n)}}};function Fx(i){let t=[];for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=n.w>Jc,a=s.w>Jc;if(r&&t.push(n),r!==a){let o=(Jc-n.w)/(s.w-n.w);t.push(new _e().lerpVectors(n,s,o))}}return t}var Bx="#ff8a3d",kx=i=>1-Math.pow(1-i,3),Kc={high:{ratio:2,textures:1,shadow:2048,softShadows:!0,antialias:!0,capture:2e3,cache:40},medium:{ratio:1.5,textures:.5,shadow:1024,softShadows:!0,antialias:!0,capture:1600,cache:18},low:{ratio:1.25,textures:.5,shadow:1024,softShadows:!1,antialias:!0,capture:1400,cache:14},safe:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:1400,cache:14,simple:!0},svg:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:0,cache:40}};function Z_(i,t={}){let e=Kc[t.tier]?t.tier:"high",n=Kc[e],s;if(e==="svg")s=new Zo;else{let a=document.createElement("canvas");try{s=new nr({canvas:a,antialias:n.antialias,preserveDrawingBuffer:!1,powerPreference:e==="high"?"high-performance":"default"})}catch(o){throw zx(a),bu(o,"context")}}let r=[];try{return Hx(i,s,{...t,tier:e},r)}catch(a){for(let o of r.reverse())try{o()}catch(c){}try{s.dispose()}catch(o){}if(s.isWebGLRenderer)try{s.forceContextLoss()}catch(o){}throw s.domElement.remove(),i.querySelectorAll(".scene-overlay").forEach(o=>o.remove()),bu(a,"setup")}}function bu(i,t){let e=i instanceof Error?i:new Error(String(i));return e.stage=e.stage||t,e}function zx(i){var t;for(let e of["webgl2","webgl"])try{let n=i.getContext(e);if(n){(t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext();return}}catch(n){}}function Hx(i,t,{onLost:e=()=>{},onBroken:n=()=>{},onVerified:s=()=>{},onPick:r=()=>{},onViewChange:a=()=>{},tier:o},c){let l=Kc[o],h=o==="svg",u=!!l.simple,d=matchMedia("(prefers-reduced-motion: reduce)"),p=Math.min(window.devicePixelRatio||1,l.ratio);t.setPixelRatio(p),t.outputColorSpace=tn,t.toneMapping=Ic,t.toneMappingExposure=.98,t.shadowMap.enabled=!h&&!u,t.shadowMap.type=l.softShadows?Pc:Io;let g=null,y=!1,m=[];h||(t.debug.onShaderError=(N,$,j,ht)=>{let _=[N.getProgramInfoLog($),N.getShaderInfoLog(j),N.getShaderInfoLog(ht)].filter(Boolean).join(" | ").replace(/\s+/g," ").slice(0,300);m.push(_||"link failed, no log"),console.warn("A 3D shader failed to link on this GPU:",_),g||(g="shader",y&&setTimeout(()=>{!ct&&!it&&n("shader")}))}),t.domElement.setAttribute("role","img"),t.domElement.setAttribute("aria-label","Interactive 3D preview of your Oeco garden room. Drag to look around, scroll or pinch to zoom."),i.appendChild(t.domElement);let f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("class","scene-overlay"),f.setAttribute("aria-hidden","true"),i.appendChild(f);let M=new Cs,x=Mu(t,{scale:l.textures,flat:h});c.push(()=>x.dispose());let w=null;if(!h&&!u){let N=new Rs(t);w=N.fromScene(new Ho,.04).texture,N.dispose()}M.environment=w;let k="environmentIntensity"in M;function F(N){M.environmentIntensity=N,!k&&M.traverse($=>{for(let j of $.material?[].concat($.material):[])"envMapIntensity"in j&&(j.userData.envBase===void 0&&(j.userData.envBase=j.envMapIntensity),j.envMapIntensity=j.userData.envBase*N)})}F(.55);let P=(N,$,j)=>{let ht=document.createElement("canvas");ht.width=4,ht.height=512;let _=ht.getContext("2d"),O=_.createLinearGradient(0,0,0,512);O.addColorStop(0,N),O.addColorStop(.55,$),O.addColorStop(1,j),_.fillStyle=O,_.fillRect(0,0,4,512);let V=new Ps(ht);return V.colorSpace=tn,V},Y=h?new ne("#d6e4ee"):P("#7fb0d8","#d9e8f0","#dfe7d5"),at=h?new ne("#2e3346"):P("#1b2340","#7a5a62","#3a3330");M.background=Y,M.fog=new xo("#dfe7d5",18,52);let S=new Co("#e6eef4","#6f7f56",1.05);M.add(S);let A=new dr("#fff3df",2.9);A.position.set(-7,10,9),A.castShadow=!0,A.shadow.mapSize.set(l.shadow||1,l.shadow||1),A.shadow.bias=-2e-4,A.shadow.normalBias=.02,A.shadow.radius=3,M.add(A,A.target);let R=new dr("#d9e6f2",.55);R.position.set(8,5,-6),M.add(R);let q=new qe;M.add(q);let L=x.lawn(),C=new de(new bo(60,64),new Ge({map:L.map,normalMap:L.normalMap,roughness:.95,color:"#ffffff"}));C.rotation.x=-Math.PI/2,C.receiveShadow=!0,C.userData.ground=!0,C.geometry.attributes.uv.array.forEach((N,$,j)=>{j[$]=(N-.5)*120}),q.add(C);let I=new Ve(35,1,.05,220),W=new zo(I,t.domElement);c.push(()=>W.dispose()),W.enableDamping=!d.matches&&!h,W.dampingFactor=.09,W.rotateSpeed=.6,W.zoomSpeed=.8,W.enablePan=!1;let B=null,X=null,ct=!1,Q=0,tt=!1,lt="outside",H=null,st=null,mt=[],Tt=[],At=null,ut={w:1,h:1};function Ot(N){N.traverse($=>{$.geometry&&$.geometry.dispose()})}function Ht(N,$){var Mr;At&&(q.remove(At),Ot(At),(Mr=At.userData.mats)==null||Mr.forEach(me=>me.dispose()));let j=new qe;At=j,q.add(j);let ht=[],O=((me,ze="#ffffff",_n=.9)=>{let hn=new Ge({color:ze,map:(me==null?void 0:me.map)||null,normalMap:(me==null?void 0:me.normalMap)||null,roughness:_n});return ht.push(hn),hn})(x.paving()),{x0:V,x1:z,z0:G}=$,vt=N.depth/2+Math.max(Ji(N).front,0)+(N.deck||0),St=1.2,Yt=2.4,Vt=new de(new Fn(St,Yt),O);Vt.rotation.x=-Math.PI/2,Vt.position.set(-N.width*.15,.006,vt+Yt/2+.05),Vt.receiveShadow=!0,Vt.userData.ground=!0;let Ut=Vt.geometry.attributes.uv;for(let me=0;me<Ut.count;me++)Ut.setXY(me,Ut.getX(me)*St,Ut.getY(me)*Yt);j.add(Vt);let zt=new Ge({color:"#2c4f29",roughness:.95,flatShading:!0});ht.push(zt);let Ft=new Ge({color:"#3d6b35",roughness:.95});ht.push(Ft);let jt=new Ge({color:"#6e5a45",roughness:.95});ht.push(jt);let re=new Ge({color:"#5d8a48",roughness:.9});ht.push(re);let ue=new Ge({color:"#e8b9c6",roughness:.9});ht.push(ue);let ce=(()=>{let me=7;return()=>(me=me*16807%2147483647)/2147483647})(),ye=G-3.4,se=[];for(let[me,ze,_n]of[[0,0,1],[1,.7,.85]])for(let hn=V-7+me*.35;hn<=z+7;hn+=.55+ce()*.2){let bn=4.2+ce()*1.3-me*.3,Ki=.5+ce()*.18,Jo=new wo(Ki,bn,10,3);Jo.translate(hn,bn/2+.25,ye-ze+(ce()-.5)*.3);let Ko=Jo.attributes.position;for(let Sr=0;Sr<Ko.count;Sr++){let wu=1+(ce()-.5)*.16;Ko.setX(Sr,hn+(Ko.getX(Sr)-hn)*wu)}se.push(Jo)}let Xn=[],xe=[];for(let me of se){let ze=me.toNonIndexed();ze.computeVertexNormals();let _n=ze.attributes.position.array,hn=ze.attributes.normal.array;for(let bn=0;bn<_n.length;bn++)Xn.push(_n[bn]),xe.push(hn[bn]);ze.dispose(),me.dispose()}let Ke=new Oe;Ke.setAttribute("position",new ve(Xn,3)),Ke.setAttribute("normal",new ve(xe,3));let wi=new de(Ke,zt);wi.castShadow=!0,wi.receiveShadow=!0,wi.userData.hedge=!0,j.add(wi);let qn=new Ge({color:"#7c7468",roughness:.9});ht.push(qn);let Ei=z-V+10,Le=ye+1.2,pn=new de(new Fe(Ei,1.8,.04),qn);pn.position.set((V+z)/2,.9,Le),pn.castShadow=pn.receiveShadow=!0,pn.userData.hedge=!0,j.add(pn);for(let me=(V+z)/2-Ei/2;me<=(V+z)/2+Ei/2;me+=1.83){let ze=new de(new Fe(.1,1.86,.1),qn);ze.position.set(me,.93,Le+.07),ze.userData.hedge=!0,j.add(ze)}j.userData.hedgeZ=Le;let Ti=(me,ze,_n)=>{let hn=new qe;hn.position.set(me,0,ze),j.add(hn);for(let bn=0;bn<6;bn++){let Ki=new de(new ar(.26*_n*(.7+ce()*.5),1),bn%2?re:Ft);Ki.position.set((ce()-.5)*.5*_n,.22*_n+ce()*.3*_n,(ce()-.5)*.5*_n),Ki.castShadow=Ki.receiveShadow=!0,hn.add(Ki)}};Ti(V-1.1,vt-.5,.8),Ti(z+1.2,vt-1.1,.7),Ti(V-1.4,G+.2,1);let Ne=new qe;Ne.position.set(z+2.6,0,G-1.2),Ne.scale.setScalar(.8),Ne.visible=!1,j.add(Ne);let Ai=new de(new Pe(.09,.13,2.2,8),jt);Ai.position.y=1.1,Ai.castShadow=!0,Ne.add(Ai);for(let me=0;me<9;me++){let ze=new de(new ar(.55+ce()*.3,1),me%3?ue:re);ze.position.set((ce()-.5)*1.4,2.3+ce()*.9,(ce()-.5)*1.4),ze.castShadow=!0,Ne.add(ze)}j.userData.mats=ht}let D=new WeakMap;function bt(N,$){let j=ht=>{if(!(ht!=null&&ht.isMeshStandardMaterial))return ht;let _=D.get(ht);return _||(_=new Ro({color:ht.color,map:ht.map,emissive:ht.emissive,emissiveIntensity:ht.emissiveIntensity,transparent:ht.transparent,opacity:ht.opacity,side:ht.side,depthWrite:ht.depthWrite,visible:ht.visible}),_.name=ht.name,_.userData=ht.userData,D.set(ht,_),$==null||$.push(_)),_};N.traverse(ht=>{ht.isMesh&&(ht.material=Array.isArray(ht.material)?ht.material.map(j):j(ht.material))})}function pt(){M.traverse(N=>{var $;for(let j of N.material?[].concat(N.material):[])j.userData.flatColour||!(($=j.map)!=null&&$.userData.hex)||(j.color.multiply(new ne(j.map.userData.hex)),j.userData.flatColour=!0)})}function Rt(N){var $;for(let j of Tt)M.remove(j),($=j.dispose)==null||$.call(j);if(Tt=[],!!tt){for(let j of N.filter(ht=>ht.kind==="interior").slice(0,4)){let ht=new Xi("#ffd8a8",5,7,1.6);ht.position.copy(j.position),M.add(ht),Tt.push(ht)}for(let j of N.filter(ht=>ht.kind!=="interior").slice(0,5))if(j.kind==="down"||j.kind==="updown"){let ht=new ur("#ffcf94",6,4.5,.75,.65,1.4);if(ht.position.copy(j.position),ht.target.position.copy(j.position).add(new T(0,-2,.25)),M.add(ht,ht.target),Tt.push(ht,ht.target),j.kind==="updown"){let _=new ur("#ffcf94",3,2.2,.5,.7,1.4);_.position.copy(j.position),_.target.position.copy(j.position).add(new T(0,2,0)),M.add(_,_.target),Tt.push(_,_.target)}}else{let ht=new Xi("#ffc98a",2.5,4,1.8);ht.position.copy(j.position),M.add(ht),Tt.push(ht)}}}function gt(){M.background=tt?at:Y,M.fog.color.set(tt?"#2f3534":"#e4eae2"),S.intensity=tt?.14:1.05,S.color.set(tt?"#5b6f96":"#e6eef4"),A.intensity=tt?.18:2.7,A.color.set(tt?"#9fb4ff":"#fff1dc"),R.intensity=tt?.05:.55,F(tt?.07:.55),t.toneMappingExposure=tt?1.2:.98,h&&(S.intensity=tt?.35:1.25,A.intensity=tt?.08:.55,R.intensity=tt?.02:.12),X==null||X.group.traverse(N=>{var $;N.isMesh&&(($=N.userData.tags)!=null&&$.includes("lamp"))&&(N.material.emissiveIntensity=tt?4:.35)}),Rt((X==null?void 0:X.lights)||[])}function Mt(N){let $=Math.max(N.x1-N.x0,N.z1-N.z0)/2+2.5,j=A.shadow.camera;j.left=-$,j.right=$,j.top=$,j.bottom=-$,j.near=1,j.far=40,j.updateProjectionMatrix(),A.target.position.set((N.x0+N.x1)/2,0,(N.z0+N.z1)/2)}let _t=()=>{let N=yr(B);return new cn(new T(N.x0-.2,0,N.z0-.25),new T(N.x1+.2,N.top+.05,N.z1+.1))};function It(N,$,j,ht,_=1.1){let O=N.getCenter(new T),V=new T().crossVectors(new T(0,1,0),$).normalize();V.lengthSq()<.1&&V.set(1,0,0);let z=new T().crossVectors($,V).normalize(),G=Math.tan(ri.degToRad(j/2)),vt=G*ht,St=0;for(let Yt of[N.min.x,N.max.x])for(let Vt of[N.min.y,N.max.y])for(let Ut of[N.min.z,N.max.z]){let zt=new T(Yt,Vt,Ut).sub(O),Ft=zt.dot($);St=Math.max(St,Ft+Math.abs(zt.dot(V))/vt*_,Ft+Math.abs(zt.dot(z))/G*_)}return St}function te(N=null){let $=B.width,j=B.depth,ht=Te.base,_=$-2*fe,O=-j/2+fe,V=j/2-fe,z=gr(B).find(Ft=>Ft.id==="front"),G=B.openings.find(Ft=>Ft.wall==="front"&&Ft.role==="main")||B.openings.find(Ft=>Ft.wall==="front"&&ln[Ft.type].group==="door"),vt=G?z.a[0]+G.p*z.L:0,Yt=B.layout==="divided"&&B.width>=5||vt>0?-1:1,Vt=Yt*(_/2-.45),Ut=new T(Vt,ht+1.55,V-.35),zt=N||new T(-Yt*_*.22,ht+.95,O+.2);return{pos:Ut,at:zt}}function E(N,$={}){let j=ut.w/ut.h;if(N==="inside"){let{pos:G,at:vt}=te($.lookAt),St=vt.clone().sub(G).normalize();return{view:"inside",fov:j<.9?84:74,position:G,target:G.clone().addScaledVector(St,.02)}}if(N==="plan"){let G=_t();G.max.y=1;let vt=G.getCenter(new T),St=It(G,new T(0,1,1e-4).normalize(),30,j,1.22);return{view:"plan",fov:30,position:new T(vt.x,St+1,vt.z+.001),target:new T(vt.x,0,vt.z)}}let ht=($.dir||new T(-.62,.32,1)).clone().normalize(),_=$.box||_t(),O=_.getCenter(new T);$.box||(O.y=Math.min(O.y,1.25));let V=35,z=Math.max($.minDistance||0,It(_,ht,V,j,$.margin||($.box?1.08:1.2)));return{view:"outside",fov:V,position:O.clone().addScaledVector(ht,z),target:O}}function v(N){if(W.enableRotate=N!=="plan",W.enablePan=N==="plan",W.screenSpacePanning=!0,W.enableZoom=N!=="inside",N==="outside"){W.minPolarAngle=.12,W.maxPolarAngle=1.5;let $=yr(B);W.minDistance=2.2,W.maxDistance=Math.max($.x1-$.x0,$.z1-$.z0)*3+14,W.rotateSpeed=.6,W.mouseButtons.LEFT=kn.ROTATE}else N==="inside"?(W.minPolarAngle=.5,W.maxPolarAngle=2.4,W.minDistance=0,W.maxDistance=.05,W.rotateSpeed=-.35):(W.minDistance=2,W.maxDistance=90,W.mouseButtons.LEFT=kn.PAN,W.touches.ONE=zn.PAN);N!=="plan"&&(W.touches.ONE=zn.ROTATE)}function ot(){if(!X)return;let N=lt==="plan";X.group.traverse($=>{let j=$.userData.tags;!j||!$.isMesh||(j.includes("roof")||j.includes("ceiling")||j.includes("lighting")||j.includes("canopyLights"))&&($.visible=!N)}),pe()}function ft(N,$=!0){let j=N.view!==lt;lt=N.view,v(lt),ot();let ht={position:I.position.clone(),target:W.target.clone(),fov:I.fov};!$||d.matches||j&&(lt==="inside"||ht.position.distanceTo(N.position)>70)?(I.position.copy(N.position),W.target.copy(N.target),I.fov=N.fov,I.updateProjectionMatrix(),H=null,W.update(),K()):(H={start:performance.now(),duration:j?700:650,from:ht,to:N},K()),j&&a(lt)}function wt(N){if(!H)return!1;let $=Math.min(1,(N-H.start)/H.duration),j=kx($),ht=H.from.target.clone().lerp(H.to.target,j),_=new si().setFromVector3(H.from.position.clone().sub(H.from.target)),O=new si().setFromVector3(H.to.position.clone().sub(H.to.target)),V=O.theta-_.theta;V>Math.PI&&(V-=2*Math.PI),V<-Math.PI&&(V+=2*Math.PI);let z=new si(_.radius+(O.radius-_.radius)*j,_.phi+(O.phi-_.phi)*j,_.theta+V*j);return I.position.copy(ht).add(new T().setFromSpherical(z)),W.target.copy(ht),I.fov=H.from.fov+(H.to.fov-H.from.fov)*j,I.updateProjectionMatrix(),$===1&&(H=null),!0}let yt=new qe;yt.name="highlight",M.add(yt);let Xt=h?null:new Os({color:Bx,linewidth:3.2,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1});Xt&&(Xt.resolution.set(1,1),c.push(()=>Xt.dispose()));let Zt=null;function Bt(N){let $=[];return X==null||X.group.traverse(j=>{j.isMesh&&j.visible&&j.userData.tags&&N.some(ht=>j.userData.tags.includes(ht))&&!j.userData.tags.includes("glass")&&!j.userData.ground&&$.push(j)}),$}function Gt(N){let $=new cn;for(let j of N)$.expandByObject(j);return $}function Qt(N){if(yt.clear(),Zt==null||Zt.dispose(),Zt=null,!Xt||!N.length)return;let $=[],j=new T;for(let _ of N.slice(0,260)){_.updateMatrixWorld(!0);let O=new Eo(_.geometry,32),V=O.attributes.position;for(let z=0;z<V.count;z++)j.fromBufferAttribute(V,z).applyMatrix4(_.matrixWorld),$.push(j.x,j.y,j.z);if(O.dispose(),$.length>24e4)break}Zt=new Ns().setPositions($);let ht=new Xo(Zt,Xt);ht.renderOrder=5,ht.frustumCulled=!1,yt.add(ht)}let Nt=[];function Me(N){var j;if(!At)return;let $=N.position.z>((j=At.userData.hedgeZ)!=null?j:-99)+.6;At.traverse(ht=>{ht.userData.hedge&&(ht.visible=$)})}function K(){!ct&&!it&&!Q&&(Q=requestAnimationFrame(xt))}let nt=0,Z=null,it=!1,b=0,J=0;function xt(N){if(Q=0,nt++,ct||it)return;ie(N);let $=wt(N),j=W.update(),ht=!1;if(st&&Xt){st.frames=(st.frames||0)+1;let _=Math.min((N-st.start)/1e3,st.frames/13);Xt.opacity=_<0?0:_<1.8?.55+.45*Math.abs(Math.sin(_*Math.PI*1.1)):Math.max(Nt.length?.6:0,1-(_-1.8)/1.2),_>3&&(st=null,Nt.length?Qt(Nt):Qt([]),Xt.opacity=Nt.length?.6:0),ht=!!st}try{Xt&&Xt.resolution.set(ut.w,ut.h),Me(I),t.render(M,I)}catch(_){Z=String(_)}pe(),!y&&!U&&qt(),($||j||ht)&&K()}let U=!1,Et=0,et=[],Lt=[];function qt(){let N=!1;if(!h&&!g)try{let $=t.getContext(),j=t.getDrawingBufferSize(new Pt),ht=new Uint8Array(4),_=[];for(let V of[.92,.5,.08])$.readPixels(j.x>>1,Math.round(j.y*V),1,1,$.RGBA,$.UNSIGNED_BYTE,ht),_.push([ht[0],ht[1],ht[2]]);et.push(_),N=_.every(([V,z,G])=>V+z+G<12);let O=$.getError();O&&Lt.push(O)}catch($){et.push(String($))}if(N&&++Et<3){K();return}N&&(g="blank"),U=!0,setTimeout(()=>{ct||it||(g?n(g):(y=!0,s()))})}function ie(N){let $=N-b;b=N,$>0&&$<250&&(J=$>50?J+1:Math.max(0,J-2),!(J<20||p<=1)&&(J=0,p=Math.max(1,Math.round((p-.25)*4)/4),t.setPixelRatio(p),ut={w:0,h:0},kt()))}W.addEventListener("change",K),W.addEventListener("start",()=>{H=null});let ee=!1;function oe(N){let $=N.clone().project(I);return[($.x+1)/2*ut.w,(1-$.y)/2*ut.h,$.z]}function pe(){if(!B||!ee&&lt!=="plan"){f.replaceChildren();return}let N=B.width,$=B.depth,j=lt==="plan"?0:.02,ht=Zi[B.range],_=[],O="http://www.w3.org/2000/svg",V=(St,Yt,Vt)=>{let Ut=document.createElementNS(O,St);for(let[zt,Ft]of Object.entries(Yt))Ut.setAttribute(zt,Ft);return Vt&&(Ut.textContent=Vt),_.push(Ut),Ut},z=(St,Yt,Vt,Ut)=>{let[zt,Ft,jt]=oe(St.clone().add(Ut)),[re,ue,ce]=oe(Yt.clone().add(Ut));if(jt>1||ce>1)return;let ye=(zt+re)/2,se=(Ft+ue)/2;V("line",{x1:zt,y1:Ft,x2:re,y2:ue}),V("line",{class:"tick",x1:zt,y1:Ft-6,x2:zt,y2:Ft+6}),V("line",{class:"tick",x1:re,y1:ue-6,x2:re,y2:ue+6});let Xn=V("g",{transform:`translate(${ye} ${se})`}),xe=document.createElementNS(O,"rect");xe.setAttribute("x","-36"),xe.setAttribute("y","-12"),xe.setAttribute("width","72"),xe.setAttribute("height","24"),xe.setAttribute("rx","12");let Ke=document.createElementNS(O,"text");Ke.setAttribute("text-anchor","middle"),Ke.setAttribute("dy","4"),Ke.textContent=Vt,Xn.append(xe,Ke)},G=Ji(B),vt=$/2+G.front;if(z(new T(-N/2,j,$/2),new T(N/2,j,$/2),`${N.toFixed(1)}m`,new T(0,0,Math.max(.55,vt-$/2+.5,(B.deck||0)+.5))),z(new T(N/2,j,$/2),new T(N/2,j,-$/2),`${$.toFixed(1)}m`,new T(.6+G.right,0,0)),lt==="plan"){ht.canopy&&z(new T(-N/2,j,$/2),new T(-N/2,j,$/2+G.front),`${G.front.toFixed(1)}m`,new T(-.6-G.left,0,0)),B.deck&&B.deck!==G.front&&z(new T(N/2,j,$/2),new T(N/2,j,$/2+B.deck),`Deck ${B.deck.toFixed(1)}m`,new T(1.5+G.right,0,0));let St=N-2*fe,Yt=$-2*fe;z(new T(-St/2,j,-$/2+fe+.02),new T(St/2,j,-$/2+fe+.02),`${St.toFixed(2)}m inside`,new T(0,0,.45));let Vt=[["Front",0,Math.max(vt,$/2+(B.deck||0))+.3],["Back",0,-$/2-.5],["Left",-N/2-.5-G.left,-$*.3],["Right",N/2+.5+G.right,-$*.3]];for(let[Ut,zt,Ft]of Vt){let[jt,re]=oe(new T(zt,0,Ft));V("text",{class:"wall-name",x:jt,y:re,"text-anchor":"middle"},Ut)}}f.setAttribute("viewBox",`0 0 ${ut.w} ${ut.h}`),f.replaceChildren(..._)}let ae=new fr,rt=null;t.domElement.addEventListener("pointerdown",N=>{rt=[N.clientX,N.clientY]}),t.domElement.addEventListener("pointerup",N=>{var _;if(!rt||Math.hypot(N.clientX-rt[0],N.clientY-rt[1])>6||!X)return;let $=t.domElement.getBoundingClientRect();ae.setFromCamera(new Pt((N.clientX-$.left)/$.width*2-1,-((N.clientY-$.top)/$.height)*2+1),I);let j=ae.intersectObject(X.group,!0).find(O=>O.object.visible),ht=(_=j==null?void 0:j.object.userData.tags)==null?void 0:_.find(O=>O.startsWith("opening:"));if(ht)r({kind:"opening",id:ht.slice(8)});else if(j){let O=["canopyLights","porch","canopy","fascia","roof","deck","floor","furniture","cladding","trims","base","layout","electrics","lighting","heaters","acousticPanels","upDownLights","includedLights","outdoorSocket","waterButt","connection","interiorWalls","ceiling"].find(V=>{var z;return(z=j.object.userData.tags)==null?void 0:z.includes(V)});O&&r({kind:"part",part:O})}});let dt=N=>{I.fov=ri.clamp(I.fov*N,38,88),I.updateProjectionMatrix(),K()};t.domElement.addEventListener("wheel",N=>{lt==="inside"&&(N.preventDefault(),dt(N.deltaY>0?1.08:1/1.08))},{passive:!1});let Dt=new Map,Ct=0;t.domElement.addEventListener("pointerdown",N=>{N.pointerType==="touch"&&Dt.set(N.pointerId,[N.clientX,N.clientY])}),t.domElement.addEventListener("pointermove",N=>{if(!Dt.has(N.pointerId))return;if(Dt.set(N.pointerId,[N.clientX,N.clientY]),lt!=="inside"||Dt.size!==2){Ct=0;return}let[$,j]=[...Dt.values()],ht=Math.hypot($[0]-j[0],$[1]-j[1]);Ct&&dt(Ct/ht),Ct=ht});for(let N of["pointerup","pointercancel","pointerleave"])t.domElement.addEventListener(N,$=>{Dt.delete($.pointerId),Ct=0});function kt(){let N=i.getBoundingClientRect();N.width<2||N.height<2||Math.abs(N.width-ut.w)<.5&&Math.abs(N.height-ut.h)<.5||(ut={w:N.width,h:N.height},t.setSize(ut.w,ut.h,!1),I.aspect=ut.w/ut.h,I.updateProjectionMatrix(),B&&ft(E(lt),!1),K())}let Kt=new ResizeObserver(kt);c.push(()=>Kt.disconnect()),Kt.observe(i),t.domElement.addEventListener("webglcontextlost",N=>{N.preventDefault(),!(ct||it)&&(it=!0,Q&&cancelAnimationFrame(Q),Q=0,e())});let $t="",Jt={update(N,{refit:$=!1}={}){if(ct)return;let j=JSON.stringify({...N,step:0});if(j===$t&&!$)return;$t=j;let ht=!B,_=B&&(B.width!==N.width||B.depth!==N.depth||B.range!==N.range||B.sideCanopy!==N.sideCanopy||B.deck!==N.deck);x.begin();let O;try{O=vu(N,x)}catch(z){if(Z=String(z),$t="",ht)throw z;console.error(z);return}B=N,X&&(M.remove(X.group),Ot(X.group),X.materials.forEach(z=>z.dispose())),X=O,M.add(X.group);let V=yr(B);Ht(B,V),x.prune(l.cache),h&&pt(),u&&(bt(X.group,X.materials),bt(At,At.userData.mats),bt(C)),Mt(V),gt(),Nt=mt.length?Bt(mt):[],st?(st.meshes=Bt(st.tags),Qt(st.meshes)):Qt(Nt),Xt&&!st&&(Xt.opacity=Nt.length?.6:0),ot(),ht?(kt(),ft(E("outside"),!1)):($||_)&&ft(E(lt),!0),K()},setView(N,{animate:$=!0}={}){B&&ft(E(N),$)},get view(){return lt},focus(N){var O;if(!B||!X)return;M.updateMatrixWorld(!0);let $=N.dir,j={...N,dir:$&&$!=="auto"?Array.isArray($)?new T(...$):new T($.x,$.y,$.z):void 0},ht=j.tags||[],_=j.view||"outside";if(_==="inside"){let V=Bt(ht),z=V.length?Gt(V).getCenter(new T):null;z&&j.lookDown&&(z.y=Te.base),ft(E("inside",{lookAt:z}),!0)}else if(_==="plan")ft(E("plan"),!0);else{let V=ht.length?Bt(ht):[],z=V.length?Gt(V):_t();if(N.dir==="auto"&&V.length){let G=new T(0,0,1).transformDirection(V[V.length-1].parent.matrixWorld);G.y=0,G.lengthSq()<1e-6&&G.set(0,0,1),z=Gt(V.filter(vt=>new T(0,0,1).transformDirection(vt.parent.matrixWorld).dot(G)>.7)),j.dir=G.normalize().add(new T(0,.22,0)).normalize()}else N.dir==="auto"&&(j.dir=void 0);if(j.context!==!1){let G=(O=j.pad)!=null?O:.35,vt=z.getSize(new T);z=z.clone().expandByVector(new T(Math.max(G,vt.x*.15),Math.max(G*.7,.3),Math.max(G,vt.z*.15))),j.whole&&(z=_t()),j.ground&&(z.min.y=0),z.min.y=Math.max(0,z.min.y)}ft(E("outside",{dir:j.dir,box:z,minDistance:j.minDistance||3}),!0)}j.highlight!==!1&&ht.length&&(st={tags:ht,start:performance.now()+(d.matches?0:250),meshes:Bt(ht)},Qt(st.meshes)),K()},select(N){M.updateMatrixWorld(!0),mt=N||[],Nt=N!=null&&N.length?Bt(N):[],st||(Qt(Nt),Xt&&(Xt.opacity=Nt.length?.6:0)),K()},zoom(N){if(lt==="inside"){I.fov=ri.clamp(I.fov-N*8,38,88),I.updateProjectionMatrix(),K();return}let $=I.position.clone().sub(W.target),j=ri.clamp($.length()*(N>0?.8:1.25),W.minDistance,W.maxDistance),ht={view:lt,fov:I.fov,position:W.target.clone().add($.setLength(j)),target:W.target.clone()};H=d.matches?null:{start:performance.now(),duration:260,from:{position:I.position.clone(),target:W.target.clone(),fov:I.fov},to:ht},H||I.position.copy(ht.position),K()},reset(){ft(E(lt==="plan"?"plan":lt),!0)},setNight(N){tt=!!N,gt(),K()},setDimensions(N){ee=!!N,pe(),K()},capture(N=["hero","front","back","left","right","inside","inside2","plan","dusk"],{width:$=2e3,height:j=1250}={}){if(!B||it||h||t.getContext().isContextLost())return{};$>l.capture&&(j=Math.round(j*l.capture/$),$=l.capture);let ht=new Ve(35,$/j,.05,220),_={night:tt,view:lt,size:t.getSize(new Pt),ratio:t.getPixelRatio()},O={},V=yt.visible;yt.visible=!1;try{t.setPixelRatio(1),t.setSize($,j,!1);let z=ut;ut={w:$,h:j};let G=yr(B),vt=()=>_t();for(let St of N){let Yt=St==="dusk";tt!==Yt&&(tt=Yt,gt());let Vt;if(St==="hero"||St==="dusk")Vt=E("outside",{dir:new T(-.62,.26,1),margin:1.06});else if(St==="front")Vt=E("outside",{dir:new T(0,.12,1),margin:1.08});else if(St==="back")Vt=E("outside",{dir:new T(0,.14,-1),margin:1.08,box:vt()});else if(St==="left")Vt=E("outside",{dir:new T(-1,.14,0),margin:1.08,box:vt()});else if(St==="right")Vt=E("outside",{dir:new T(1,.14,0),margin:1.08,box:vt()});else if(St==="inside")Vt=E("inside");else if(St==="inside2"){let Ut=B.width,zt=B.depth,Ft=Ut-2*fe,jt=-zt/2+fe,re=zt/2-fe,ue=Te.base,ce=B.layout==="divided",ye=ce&&B.width<5,se=ye?jt+Math.max(1,Math.min(1.8,(re-jt)*.4))+.5:jt+.4;Vt={view:"inside",fov:72,position:new T(ce&&!ye?-Ft/2+.45:Ft/2-.4,ue+1.45,Math.min(se,re-.3)),target:new T(ce&&!ye?Ft/4:-Ft/4,ue+1,re)}}else Vt=E("plan");lt=Vt.view,ot(),ht.fov=Vt.fov,ht.aspect=$/j,ht.updateProjectionMatrix(),ht.position.copy(Vt.position),ht.lookAt(Vt.target),Me(ht),t.render(M,ht),O[St]=t.domElement.toDataURL("image/jpeg",.9)}ut=z}catch(z){}finally{tt!==_.night&&(tt=_.night,gt()),lt=_.view,ot(),yt.visible=V,t.setPixelRatio(_.ratio),t.setSize(_.size.x,_.size.y,!1),it||t.render(M,I)}return O},dispose(){ct||(ct=!0,Q&&cancelAnimationFrame(Q),Kt.disconnect(),W.dispose(),X&&(Ot(X.group),X.materials.forEach(N=>N.dispose())),At&&Ot(At),Zt==null||Zt.dispose(),Xt==null||Xt.dispose(),x.dispose(),w==null||w.dispose(),t.dispose(),it||t.forceContextLoss(),t.domElement.remove(),f.remove())},quality:()=>({tier:o,ratio:p,lost:it,broken:g,...x.stats(),webgl:h?0:t.capabilities.isWebGL2===!1?1:2,svg:h?t.info:void 0}),diagnostics(){let N={tier:o,gpu:Jt.gpu(),ratio:p,frames:nt,verified:y,broken:g,shaderErrors:m.slice(0,3),glErrors:Lt.slice(0,5),samples:et.slice(0,3),lastError:Z,textures:x.stats()};if(h)N.svg=t.info;else try{let $=t.getContext(),j=$.getContextAttributes()||{};N.webgl=t.capabilities.isWebGL2===!1?1:2,N.context={antialias:j.antialias,alpha:j.alpha,lost:$.isContextLost()},N.maxTexture=$.getParameter($.MAX_TEXTURE_SIZE),N.extensions=["EXT_color_buffer_float","EXT_color_buffer_half_float","KHR_parallel_shader_compile","OES_texture_float_linear"].filter(ht=>$.getExtension(ht)),N.buffer=t.getDrawingBufferSize(new Pt).toArray()}catch($){N.contextError=String($)}return N},gpu(){if(h)return"none (SVG)";try{let N=t.getContext(),$=N.getExtension("WEBGL_debug_renderer_info");return String(N.getParameter($?$.UNMASKED_RENDERER_WEBGL:N.RENDERER))}catch(N){return"unknown"}},_debug:()=>{var N;return{scene:M,camera:I,controls:W,renderer:t,room:X,view:lt,state:B,highlight:yt,pulse:st,anim:H,frames:nt,frame:Q,lastError:Z,lineOpacity:(N=Xt==null?void 0:Xt.opacity)!=null?N:0,THREE:{Raycaster:fr,Vector3:T,DoubleSide:on}}}};return Jt}export{Kc as TIERS,Z_ as createScene};
/*! Bundled license information:

three-webgl1/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
