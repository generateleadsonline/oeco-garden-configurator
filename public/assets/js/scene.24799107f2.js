var qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,Oc=1,Vu=2;var No=1,lc=2,si=3,Ri=0,on=1,fn=2,Ei=0,gs=1,Fc=2,Bc=3,kc=4,Gu=5,Bi=100,Wu=101,Xu=102,qu=103,Yu=104,$u=200,Zu=201,Ju=202,Ku=203,Na=204,Oa=205,ju=206,Qu=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,od=214,Fa=0,Ba=1,ka=2,Ms=3,za=4,Ha=5,Va=6,Ga=7,cc=0,ad=1,ld=2,Ti=0,cd=1,hd=2,ud=3,hc=4,dd=5,fd=6,pd=7;var Yh=300,Ss=301,bs=302,Wa=303,Xa=304,Oo=306,ir=1e3,zi=1001,qa=1002,bn=1003,md=1004;var Er=1005;var Vn=1006,ea=1007;var Hi=1008;var li=1009,$h=1010,Zh=1011,sr=1012,uc=1013,Vi=1014,ri=1015,_r=1016,dc=1017,fc=1018,ws=1020,Jh=35902,Kh=1021,jh=1022,On=1023,Qh=1024,tu=1025,_s=1026,Es=1027,eu=1028,pc=1029,nu=1030,mc=1031;var gc=1033,to=33776,eo=33777,no=33778,io=33779,Ya=35840,$a=35841,Za=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,so=36492,pl=36494,ml=36495,iu=36283,gl=36284,_l=36285,xl=36286;var ro=2300,yl=2301,na=2302,zc=2400,Hc=2401,Vc=2402;var gd=3200,_d=3201;var _c=0,xd=1,bi="",qe="srgb",Ns="srgb-linear",Fo="linear",we="srgb";var ts=7680;var Gc=519,yd=512,vd=513,Md=514,su=515,Sd=516,bd=517,wd=518,Ed=519,vl=35044;var Wc="300 es",oi=2e3,oo=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,xs=Math.PI/180,Ts=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ad(i,t,e){return i!==t?(e-i)/(t-i):0}function Qs(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return Qs(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ld(i,t){return i+Math.random()*(t-i)}function Ud(i){return i*(.5-Math.random())}function Nd(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*xs}function Fd(i){return i*Ts}function Bd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pi={DEG2RAD:xs,RAD2DEG:Ts,generateUUID:Gn,clamp:Fe,euclideanModulo:xc,mapLinear:Td,inverseLerp:Ad,lerp:Qs,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Dd,randFloat:Ld,randFloatSpread:Ud,seededRandom:Nd,degToRad:Od,radToDeg:Fd,isPowerOfTwo:Bd,ceilPowerOfTwo:kd,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Hd,normalize:be,denormalize:Nn},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],S=s[1],b=s[4],x=s[7],q=s[2],k=s[5],F=s[8];return r[0]=o*y+a*S+l*q,r[3]=o*m+a*b+l*k,r[6]=o*f+a*x+l*F,r[1]=c*y+h*S+u*q,r[4]=c*m+h*b+u*k,r[7]=c*f+h*x+u*F,r[2]=d*y+p*S+g*q,r[5]=d*m+p*b+g*k,r[8]=d*f+p*x+g*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia=new ce;function ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=ao("canvas");return i.style.display="block",i}var qc={};function Ks(i){i in qc||(qc[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ye={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yc=[.64,.33,.3,.6,.15,.06],$c=[.2126,.7152,.0722],Zc=[.3127,.329],Jc=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ye.define({[Ns]:{primaries:Yc,whitePoint:Zc,transfer:Fo,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:$c,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Yc,whitePoint:Zc,transfer:we,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:$c,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var es,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=ao("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,xn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=Vn,o=Hi,a=On,l=li,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Gn(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Yh;xn.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(p+1)/2,q=(f+1)/2,k=(h+d)/4,F=(u+y)/4,z=(g+m)/4;return b>x&&b>q?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=k/n,r=F/n):x>q?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=k/s,r=z/s):q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),n=F/r,s=z/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,S=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let q=Math.sqrt(b),k=Math.atan2(q,f*S);m=Math.sin(m*k)/q,a=Math.sin(a*k)/q}let x=a*S;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+y*x,m===1-a){let q=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=q,c*=q,h*=q,u*=q}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new A,jc=new Fn,mn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Ar.subVectors(this.max,qs),ns.subVectors(t.a,qs),is.subVectors(t.b,qs),ss.subVectors(t.c,qs),_i.subVectors(is,ns),xi.subVectors(ss,is),Ii.subVectors(ns,ss);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ii.z,Ii.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ii.z,0,-Ii.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ii.y,Ii.x,0];return!oa(e,ns,is,ss,Ar)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,ns,is,ss,Ar))?!1:(Rr.crossVectors(_i,xi),e=[Rr.x,Rr.y,Rr.z],oa(e,ns,is,ss,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new A,new A,new A,new A,new A,new A,new A,new A],In=new A,Tr=new mn,ns=new A,is=new A,ss=new A,_i=new A,xi=new A,Ii=new A,qs=new A,Ar=new A,Rr=new A,Di=new A;function oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $d=new mn,Ys=new A,aa=new A,ui=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(aa)),this.expandByPoint(Ys.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new A,la=new A,Cr=new A,yi=new A,ca=new A,Pr=new A,ha=new A,As=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(la);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=yi.dot(this.direction),l=-yi.dot(Cr),c=yi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(Cr,d),p}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),Pr.subVectors(n,t),ha.crossVectors(ca,Pr);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let l=a*this.direction.dot(Pr.crossVectors(yi,Pr));if(l<0)return null;let c=a*this.direction.dot(ca.cross(yi));if(c<0||l+c>o)return null;let h=-a*yi.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),vi.crossVectors(n,Mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),vi.crossVectors(n,Mn)),vi.normalize(),Ir.crossVectors(Mn,vi),s[0]=vi.x,s[4]=Ir.x,s[8]=Mn.x,s[1]=vi.y,s[5]=Ir.y,s[9]=Mn.y,s[2]=vi.z,s[6]=Ir.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],S=n[3],b=n[7],x=n[11],q=n[15],k=s[0],F=s[4],z=s[8],w=s[12],M=s[1],U=s[5],T=s[9],O=s[13],V=s[2],R=s[6],P=s[10],$=s[14],N=s[3],j=s[7],dt=s[11],it=s[15];return r[0]=o*k+a*M+l*V+c*N,r[4]=o*F+a*U+l*R+c*j,r[8]=o*z+a*T+l*P+c*dt,r[12]=o*w+a*O+l*$+c*it,r[1]=h*k+u*M+d*V+p*N,r[5]=h*F+u*U+d*R+p*j,r[9]=h*z+u*T+d*P+p*dt,r[13]=h*w+u*O+d*$+p*it,r[2]=g*k+y*M+m*V+f*N,r[6]=g*F+y*U+m*R+f*j,r[10]=g*z+y*T+m*P+f*dt,r[14]=g*w+y*O+m*$+f*it,r[3]=S*k+b*M+x*V+q*N,r[7]=S*F+b*U+x*R+q*j,r[11]=S*z+b*T+x*P+q*dt,r[15]=S*w+b*O+x*$+q*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],S=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,q=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,k=e*S+n*b+s*x+r*q;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/k;return t[0]=S*F,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*F,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*F,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*F,t[4]=b*F,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*F,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*F,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*F,t[8]=x*F,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*F,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*F,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*F,t[12]=q*F,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*F,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*F,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,S=l*c,b=l*h,x=l*u,q=n.x,k=n.y,F=n.z;return s[0]=(1-(y+f))*q,s[1]=(p+x)*q,s[2]=(g-b)*q,s[3]=0,s[4]=(p-x)*k,s[5]=(1-(d+f))*k,s[6]=(m+S)*k,s[7]=0,s[8]=(g+b)*F,s[9]=(m-S)*F,s[10]=(1-(d+y))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let c=1/r,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===oi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,g,y;if(a===oi)g=(o+r)*u,y=-2*u;else if(a===oo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new A,Dn=new Ee,Zd=new A(0,0,0),Jd=new A(1,1,1),vi=new A,Ir=new A,Mn=new A,Qc=new Ee,th=new Fn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,eh=new A,os=new Fn,ei=new Ee,Dr=new A,$s=new A,jd=new A,Qd=new Fn,nh=new A(1,0,0),ih=new A(0,1,0),sh=new A(0,0,1),rh={type:"added"},tf={type:"removed"},as={type:"childadded",child:null},ua={type:"childremoved",child:null},Qe=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Bn,n=new Fn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ce}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt($s,Dr,this.up):ei.lookAt(Dr,$s,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new A(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new A,ni=new A,da=new A,ii=new A,ls=new A,cs=new A,oh=new A,fa=new A,pa=new A,ma=new A,ga=new ue,_a=new ue,xa=new ue,wi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ni.subVectors(n,e),da.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(da),c=ni.dot(ni),h=ni.dot(da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(_a,r.y),o.addScaledVector(xa,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,n),cs.subVectors(r,n),fa.subVectors(t,n);let l=ls.dot(fa),c=cs.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,s);let h=ls.dot(pa),u=cs.dot(pa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);ma.subVectors(t,r);let p=ls.dot(ma),g=cs.dot(ma);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(cs,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return oh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(oh,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=xc(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return ye.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ye.fromWorkingColorSpace(rn.copy(this),t),Math.round(Fe(rn.r*255,0,255))*65536+Math.round(Fe(rn.g*255,0,255))*256+Math.round(Fe(rn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=qe){ye.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Lr);let n=Qs(Mi.h,Lr.h,e),s=Qs(Mi.s,Lr.s,e),r=Qs(Mi.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new re;re.NAMES=ou;var ef=0,Ci=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Gn(),this.name="",this.blending=gs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rs=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new A,Ur=new It,pn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}};var ho=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},nf=0,En=new Ee,va=new Qe,hs=new A,Sn=new mn,Zs=new mn,Xe=new A,ke=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Sn.min,Zs.min),Sn.expandByPoint(Xe),Xe.addVectors(Sn.max,Zs.max),Sn.expandByPoint(Xe)):(Sn.expandByPoint(Zs.min),Sn.expandByPoint(Zs.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Xe.add(hs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new A,l[z]=new A;let c=new A,h=new A,u=new A,d=new It,p=new It,g=new It,y=new A,m=new A;function f(z,w,M){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,z),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[z].add(y),a[w].add(y),a[M].add(y),l[z].add(m),l[w].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let z=0,w=S.length;z<w;++z){let M=S[z],U=M.start,T=M.count;for(let O=U,V=U+T;O<V;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new A,x=new A,q=new A,k=new A;function F(z){q.fromBufferAttribute(s,z),k.copy(q);let w=a[z];b.copy(w),b.sub(q.multiplyScalar(q.dot(w))).normalize(),x.crossVectors(k,w);let U=x.dot(l[z])<0?-1:1;o.setXYZW(z,b.x,b.y,b.z,U)}for(let z=0,w=S.length;z<w;++z){let M=S[z],U=M.start,T=M.count;for(let O=U,V=U+T;O<V;O+=3)F(t.getX(O+0)),F(t.getX(O+1)),F(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new Ee,Li=new As,Nr=new ui,lh=new A,Or=new A,Fr=new A,Br=new A,Ma=new A,kr=new A,ch=new A,zr=new A,de=class extends Qe{constructor(t=new ke,e=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),o?kr.addScaledVector(Ma,h):kr.addScaledVector(Ma.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Nr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Nr,lh)===null||Li.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ah.copy(r).invert(),Li.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,q=b;x<q;x+=3){let k=a.getX(x),F=a.getX(x+1),z=a.getX(x+2);s=Hr(this,f,t,n,c,h,u,k,F,z),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Hr(this,o,t,n,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,q=b;x<q;x+=3){let k=x,F=x+1,z=x+2;s=Hr(this,f,t,n,c,h,u,k,F,z),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=m,b=m+1,x=m+2;s=Hr(this,o,t,n,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sf(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ri,a),l===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function Hr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Or),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Br);let h=sf(i,t,e,n,Or,Fr,Br,ch);if(h){let u=new A;wi.getBarycoord(ch,Or,Fr,Br,u),s&&(h.uv=wi.getInterpolatedAttribute(s,a,l,c,u,new It)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,u,new It)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};wi.getNormal(Or,Fr,Br,d.normal),h.face=d,h.barycoord=u}return h}var ze=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(y,m,f,S,b,x,q,k,F,z,w){let M=x/F,U=q/z,T=x/2,O=q/2,V=k/2,R=F+1,P=z+1,$=0,N=0,j=new A;for(let dt=0;dt<P;dt++){let it=dt*U-O;for(let rt=0;rt<R;rt++){let ft=rt*M-T;j[y]=ft*S,j[m]=it*b,j[f]=V,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=k>0?1:-1,h.push(j.x,j.y,j.z),u.push(rt/F),u.push(1-dt/z),$+=1}}for(let dt=0;dt<z;dt++)for(let it=0;it<F;it++){let rt=d+it+R*dt,ft=d+it+R*(dt+1),G=d+(it+1)+R*(dt+1),tt=d+(it+1)+R*dt;l.push(rt,ft,tt),l.push(ft,G,tt),N+=6}a.addGroup(p,N,w),p+=N,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let s in n)t[s]=n[s]}return t}function rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Bo={clone:Cs,merge:un},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new A,hh=new It,uh=new It,Ye=class extends fo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,wl=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Ye(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new Ye(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Ye(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new Ye(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Ye(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends xn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},El=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ei});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Vn),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Sa=new A,lf=new A,cf=new ce,Un=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sa.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cf.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new ui,Vr=new A,or=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],S=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+g,x+S).normalize(),n[3].setComponents(l-o,d-h,m-g,x-S).normalize(),n[4].setComponents(l-a,d-u,m-y,x-b).normalize(),e===oi)n[5].setComponents(l+a,d+u,m+y,x+b).normalize();else if(e===oo)n[5].setComponents(a,u,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wn=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let S=f*d-o;for(let b=0;b<c;b++){let x=b*u-r;g.push(x,-S,0),y.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let b=S+c*f,x=S+c*(f+1),q=S+1+c*(f+1),k=S+1+c*f;p.push(b,x,k),p.push(x,q,k)}this.setIndex(p),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,hp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Om=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Gm=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:uf,alphahash_pars_fragment:df,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:vf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:If,color_pars_vertex:Df,color_vertex:Lf,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Ff,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:zf,colorspace_fragment:Hf,colorspace_pars_fragment:Vf,envmap_fragment:Gf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:$f,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:bp,morphcolor_vertex:wp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Dp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Hp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:$p,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Kp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:tm,specularmap_pars_fragment:em,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:dm,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Dm,meshphong_frag:Lm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:km,shadow_vert:zm,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Gm},Zt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},dn={basic:{uniforms:un([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:un([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:un([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:un([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:un([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new re(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:un([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:un([Zt.points,Zt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:un([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:un([Zt.common,Zt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:un([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:un([Zt.sprite,Zt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:un([Zt.common,Zt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:un([Zt.lights,Zt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};dn.physical={uniforms:un([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Gr={r:0,b:0,g:0},Ni=new Bn,Wm=new Ee;function Xm(i,t,e,n,s,r,o){let a=new re(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function y(S){let b=!1,x=g(S);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);let q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,o):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===Oo)?(h===void 0&&(h=new de(new ze(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Cs(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(q,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(b.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Ni)),h.material.toneMapped=ye.getTransfer(x.colorSpace)!==we,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Wn(2,2),new Tn({name:"BackgroundMaterial",uniforms:Cs(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ye.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,b){S.getRGB(Gr,au(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:m}}function qm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,U,T,O,V){let R=!1,P=u(O,T,U);r!==P&&(r=P,c(r.object)),R=p(M,O,T,V),R&&g(M,O,T,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,x(M,U,T,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,U,T){let O=T.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let R=V[U.id];R===void 0&&(R={},V[U.id]=R);let P=R[O];return P===void 0&&(P=d(l()),R[O]=P),P}function d(M){let U=[],T=[],O=[];for(let V=0;V<e;V++)U[V]=0,T[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:T,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,U,T,O){let V=r.attributes,R=U.attributes,P=0,$=T.getAttributes();for(let N in $)if($[N].location>=0){let dt=V[N],it=R[N];if(it===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),dt===void 0||dt.attribute!==it||it&&dt.data!==it.data)return!0;P++}return r.attributesNum!==P||r.index!==O}function g(M,U,T,O){let V={},R=U.attributes,P=0,$=T.getAttributes();for(let N in $)if($[N].location>=0){let dt=R[N];dt===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let it={};it.attribute=dt,dt&&dt.data&&(it.data=dt.data),V[N]=it,P++}r.attributes=V,r.attributesNum=P,r.index=O}function y(){let M=r.newAttributes;for(let U=0,T=M.length;U<T;U++)M[U]=0}function m(M){f(M,0)}function f(M,U){let T=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;T[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),V[M]!==U&&(i.vertexAttribDivisor(M,U),V[M]=U)}function S(){let M=r.newAttributes,U=r.enabledAttributes;for(let T=0,O=U.length;T<O;T++)U[T]!==M[T]&&(i.disableVertexAttribArray(T),U[T]=0)}function b(M,U,T,O,V,R,P){P===!0?i.vertexAttribIPointer(M,U,T,V,R):i.vertexAttribPointer(M,U,T,O,V,R)}function x(M,U,T,O){y();let V=O.attributes,R=T.getAttributes(),P=U.defaultAttributeValues;for(let $ in R){let N=R[$];if(N.location>=0){let j=V[$];if(j===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){let dt=j.normalized,it=j.itemSize,rt=t.get(j);if(rt===void 0)continue;let ft=rt.buffer,G=rt.type,tt=rt.bytesPerElement,Mt=G===i.INT||G===i.UNSIGNED_INT||j.gpuType===uc;if(j.isInterleavedBufferAttribute){let lt=j.data,Dt=lt.stride,_t=j.offset;if(lt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<N.locationSize;Ct++)f(N.location+Ct,lt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ct=0;Ct<N.locationSize;Ct++)m(N.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ct=0;Ct<N.locationSize;Ct++)b(N.location+Ct,it/N.locationSize,G,dt,Dt*tt,(_t+it/N.locationSize*Ct)*tt,Mt)}else{if(j.isInstancedBufferAttribute){for(let lt=0;lt<N.locationSize;lt++)f(N.location+lt,j.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let lt=0;lt<N.locationSize;lt++)m(N.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let lt=0;lt<N.locationSize;lt++)b(N.location+lt,it/N.locationSize,G,dt,it*tt,it/N.locationSize*lt*tt,Mt)}}else if(P!==void 0){let dt=P[$];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(N.location,dt);break;case 3:i.vertexAttrib3fv(N.location,dt);break;case 4:i.vertexAttrib4fv(N.location,dt);break;default:i.vertexAttrib1fv(N.location,dt)}}}}S()}function q(){z();for(let M in n){let U=n[M];for(let T in U){let O=U[T];for(let V in O)h(O[V].object),delete O[V];delete U[T]}delete n[M]}}function k(M){if(n[M.id]===void 0)return;let U=n[M.id];for(let T in U){let O=U[T];for(let V in O)h(O[V].object),delete O[V];delete U[T]}delete n[M.id]}function F(M){for(let U in n){let T=n[U];if(T[M.id]===void 0)continue;let O=T[M.id];for(let V in O)h(O[V].object),delete O[V];delete T[M.id]}}function z(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Ym(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $m(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==On&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let z=F===_r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==li&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ri&&!z)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=g>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:q,maxSamples:k}}function Zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,b=S*4,x=f.clippingState||null;l.value=x,x=h(g,d,b,p);for(let q=0;q!==b;++q)x[q]=e[q];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==y;++b,x+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Jm(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Ss:a===Xa&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new El(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var mo=class extends fo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,dh=[.125,.215,.35,.446,.526,.582],ki=20,ba=new mo,fh=new re,wa=null,Ea=0,Ta=0,Aa=!1,Fi=(1+Math.sqrt(5))/2,fs=1/Fi,ph=[new A(-Fi,fs,0),new A(Fi,fs,0),new A(-fs,0,Fi),new A(fs,0,Fi),new A(0,Fi,-fs),new A(0,Fi,fs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ea,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:_r,format:On,colorSpace:Ns,depthBuffer:!1},s=mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fh),h.toneMapping=Ti,h.autoClear=!1;let p=new Rs({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new de(new ze,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(fh),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;Wr(s,S*b,f>2?b:0,b,b),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ph[(s-r-1)%ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let f=[],S=0;for(let F=0;F<ki;++F){let z=F/y,w=Math.exp(-z*z/2);f.push(w),F===0?S+=w:F<m&&(S+=2*w)}for(let F=0;F<f.length;F++)f[F]=f[F]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let x=this._sizeLods[s],q=3*x*(s>b-ps?s-b+ps:0),k=4*(this._cubeSize-x);Wr(e,q,k,3*x,2*x),l.setRenderTarget(e),l.render(u,ba)}};function Km(i){let t=[],e=[],n=[],s=i,r=i-ps+1+dh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ps?l=dh[o-i+ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,S=new Float32Array(y*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let k=0;k<p;k++){let F=k%3*2/3-1,z=k>2?0:-1,w=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];S.set(w,y*g*k),b.set(d,m*g*k);let M=[k,k,k,k,k,k];x.set(M,f*g*k)}let q=new ke;q.setAttribute("position",new pn(S,y)),q.setAttribute("uv",new pn(b,m)),q.setAttribute("faceIndex",new pn(x,f)),t.push(q),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mh(i,t,e){let n=new hi(i,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){let n=new Float32Array(ki),s=new A(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function gh(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function _h(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===Ss||l===bs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ps(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ps(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function t0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function e0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let b=0,x=S.length;b<x;b+=3){let q=S[b+0],k=S[b+1],F=S[b+2];d.push(q,k,k,F,F,q)}}else if(g!==void 0){let S=g.array;y=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let q=b+0,k=b+1,F=b+2;d.push(q,k,k,F,F,q)}}else return;let m=new(ru(d)?uo:ho)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function n0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*y[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s0(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let x=a.attributes.position.count*b,q=1;x>t.maxTextureSize&&(q=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let k=new Float32Array(x*q*4*u),F=new co(k,x,q,u);F.type=ri,F.needsUpdate=!0;let z=b*4;for(let M=0;M<u;M++){let U=m[M],T=f[M],O=S[M],V=x*q*4*M;for(let R=0;R<U.count;R++){let P=R*z;p===!0&&(s.fromBufferAttribute(U,R),k[V+P+0]=s.x,k[V+P+1]=s.y,k[V+P+2]=s.z,k[V+P+3]=0),g===!0&&(s.fromBufferAttribute(T,R),k[V+P+4]=s.x,k[V+P+5]=s.y,k[V+P+6]=s.z,k[V+P+7]=0),y===!0&&(s.fromBufferAttribute(O,R),k[V+P+8]=s.x,k[V+P+9]=s.y,k[V+P+10]=s.z,k[V+P+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new It(x,q)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function r0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var go=class extends xn{constructor(t,e,n,s,r,o,a,l,c,h=_s){if(h!==_s&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Vi),n===void 0&&h===Es&&(n=ws),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cu=new xn,xh=new go(1,1),hu=new co,uu=new bl,du=new po,yh=[],vh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ko(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;bh.set(n),i.uniformMatrix2fv(this.addr,!1,bh),Ve(e,n)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Ve(e,n)}}function d0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Ve(e,n)}}function f0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function _0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=su,r=xh):r=cu,e.setTexture2D(t||r,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||du,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hu,s)}function E0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}function T0(i,t){i.uniform1fv(this.addr,t)}function A0(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function R0(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function C0(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I0(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D0(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function O0(i,t){i.uniform4iv(this.addr,t)}function F0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function k0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function H0(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cu,r[o])}function V0(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function G0(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function W0(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return I0;case 35676:return D0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return k0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ra=/(\w+)(\])?(\[|\.)?/g;function wh(i,t){i.seq.push(t),i.map[t.id]=t}function q0(i,t,e){let n=i.name,s=n.length;for(Ra.lastIndex=0;;){let r=Ra.exec(n),o=Ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(e,c===void 0?new Tl(a,i,t):new Al(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rl(a),wh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);q0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Y0=37297,$0=0;function Z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Th=new ce;function J0(i){ye._getMatrix(Th,ye.workingColorSpace,i);let t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Z0(i.getShaderSource(t),o)}else return s}function K0(i,t){let e=J0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case cd:e="Linear";break;case hd:e="Reinhard";break;case ud:e="Cineon";break;case hc:e="ACESFilmic";break;case fd:e="AgX";break;case pd:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new A;function Q0(){ye.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function Rh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(ig,rg)}var sg=new Map;function rg(i,t){let e=he[t];if(e===void 0){let n=sg.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(og,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===bs&&(t="ENVMAP_MODE_REFRACTION"),t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lg(e),c=cg(e),h=hg(e),u=ug(e),d=dg(e),p=tg(e),g=eg(r),y=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`)):(m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?he.tonemapping_pars_fragment:"",e.toneMapping!==Ti?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Cl(o),o=Rh(o,e),o=Ch(o,e),a=Cl(a),a=Rh(a,e),a=Ch(a,e),o=Ph(o),a=Ph(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=S+m+o,x=S+f+a,q=Eh(s,s.VERTEX_SHADER,b),k=Eh(s,s.FRAGMENT_SHADER,x);s.attachShader(y,q),s.attachShader(y,k),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(U){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(q).trim(),V=s.getShaderInfoLog(k).trim(),R=!0,P=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(R=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,q,k);else{let $=Ah(s,q,"vertex"),N=Ah(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+T+`
`+$+`
`+N)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(O===""||V==="")&&(P=!1);P&&(U.diagnostics={runnable:R,programLog:T,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(q),s.deleteShader(k),z=new vs(s,y),w=ng(s,y)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=q,this.fragmentShader=k,this}var pg=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}};function mg(i,t,e,n,s,r,o){let a=new rr,l=new Pl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,U,T,O){let V=T.fog,R=O.geometry,P=w.isMeshStandardMaterial?T.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||P),N=$&&$.mapping===Oo?$.image.height:null,j=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let dt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,it=dt!==void 0?dt.length:0,rt=0;R.morphAttributes.position!==void 0&&(rt=1),R.morphAttributes.normal!==void 0&&(rt=2),R.morphAttributes.color!==void 0&&(rt=3);let ft,G,tt,Mt;if(j){let ae=dn[j];ft=ae.vertexShader,G=ae.fragmentShader}else ft=w.vertexShader,G=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),Mt=l.getFragmentShaderID(w);let lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),_t=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,jt=!!w.map,yt=!!w.matcap,bt=!!$,I=!!w.aoMap,Wt=!!w.lightMap,Tt=!!w.bumpMap,wt=!!w.normalMap,mt=!!w.displacementMap,Ft=!!w.emissiveMap,Xt=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,Z=w.clearcoat>0,ct=w.dispersion>0,vt=w.iridescence>0,ut=w.sheen>0,Ot=w.transmission>0,zt=v&&!!w.anisotropyMap,Gt=Z&&!!w.clearcoatMap,oe=Z&&!!w.clearcoatNormalMap,Ut=Z&&!!w.clearcoatRoughnessMap,qt=vt&&!!w.iridescenceMap,ne=vt&&!!w.iridescenceThicknessMap,Y=ut&&!!w.sheenColorMap,K=ut&&!!w.sheenRoughnessMap,et=!!w.specularMap,st=!!w.specularColorMap,at=!!w.specularIntensityMap,D=Ot&&!!w.transmissionMap,ht=Ot&&!!w.thicknessMap,Q=!!w.gradientMap,gt=!!w.alphaMap,Ht=w.alphaTest>0,Vt=!!w.alphaHash,se=!!w.extensions,ve=Ti;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ve=i.toneMapping);let me={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:ft,fragmentShader:G,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:_t,instancingColor:_t&&O.instanceColor!==null,instancingMorph:_t&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:yt,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:N,aoMap:I,lightMap:Wt,bumpMap:Tt,normalMap:wt,displacementMap:d&&mt,emissiveMap:Ft,normalMapObjectSpace:wt&&w.normalMapType===xd,normalMapTangentSpace:wt&&w.normalMapType===_c,metalnessMap:Xt,roughnessMap:E,anisotropy:v,anisotropyMap:zt,clearcoat:Z,clearcoatMap:Gt,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ut,dispersion:ct,iridescence:vt,iridescenceMap:qt,iridescenceThicknessMap:ne,sheen:ut,sheenColorMap:Y,sheenRoughnessMap:K,specularMap:et,specularColorMap:st,specularIntensityMap:at,transmission:Ot,transmissionMap:D,thicknessMap:ht,gradientMap:Q,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ht,alphaHash:Vt,combine:w.combine,mapUv:jt&&y(w.map.channel),aoMapUv:I&&y(w.aoMap.channel),lightMapUv:Wt&&y(w.lightMap.channel),bumpMapUv:Tt&&y(w.bumpMap.channel),normalMapUv:wt&&y(w.normalMap.channel),displacementMapUv:mt&&y(w.displacementMap.channel),emissiveMapUv:Ft&&y(w.emissiveMap.channel),metalnessMapUv:Xt&&y(w.metalnessMap.channel),roughnessMapUv:E&&y(w.roughnessMap.channel),anisotropyMapUv:zt&&y(w.anisotropyMap.channel),clearcoatMapUv:Gt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:K&&y(w.sheenRoughnessMap.channel),specularMapUv:et&&y(w.specularMap.channel),specularColorMapUv:st&&y(w.specularColorMap.channel),specularIntensityMapUv:at&&y(w.specularIntensityMap.channel),transmissionMapUv:D&&y(w.transmissionMap.channel),thicknessMapUv:ht&&y(w.thicknessMap.channel),alphaMapUv:gt&&y(w.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(wt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!R.attributes.uv&&(jt||gt),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&ye.getTransfer(w.map.colorSpace)===we,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&ye.getTransfer(w.emissiveMap.colorSpace)===we,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fn,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:se&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&w.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(S(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let M=g[w.type],U;if(M){let T=dn[M];U=Bo.clone(T.uniforms)}else U=w.uniforms;return U}function q(w,M){let U;for(let T=0,O=h.length;T<O;T++){let V=h[T];if(V.cacheKey===M){U=V,++U.usedTimes;break}}return U===void 0&&(U=new fg(i,M,w,r),h.push(U)),U}function k(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function F(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:q,releaseProgram:k,releaseShaderCache:F,programs:h,dispose:z}}function gg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Dh),s.length>1&&s.sort(d||Dh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Lh,i.set(n,[o])):s>=r.length?(o=new Lh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new re};break;case"SpotLight":e={position:new A,direction:new A,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new yg,e=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Ee,o=new Ee;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,S=0,b=0,x=0,q=0,k=0,F=0;c.sort(Sg);for(let w=0,M=c.length;w<M;w++){let U=c[w],T=U.color,O=U.intensity,V=U.distance,R=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=T.r*O,u+=T.g*O,d+=T.b*O;else if(U.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(U.sh.coefficients[P],O);F++}else if(U.isDirectionalLight){let P=t.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,N=e.get(U);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=R,n.directionalShadowMatrix[p]=U.shadow.matrix,S++}n.directional[p]=P,p++}else if(U.isSpotLight){let P=t.get(U);P.position.setFromMatrixPosition(U.matrixWorld),P.color.copy(T).multiplyScalar(O),P.distance=V,P.coneCos=Math.cos(U.angle),P.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),P.decay=U.decay,n.spot[y]=P;let $=U.shadow;if(U.map&&(n.spotLightMap[q]=U.map,q++,$.updateMatrices(U),U.castShadow&&k++),n.spotLightMatrix[y]=$.matrix,U.castShadow){let N=e.get(U);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,n.spotShadow[y]=N,n.spotShadowMap[y]=R,x++}y++}else if(U.isRectAreaLight){let P=t.get(U);P.color.copy(T).multiplyScalar(O),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=P,m++}else if(U.isPointLight){let P=t.get(U);if(P.color.copy(U.color).multiplyScalar(U.intensity),P.distance=U.distance,P.decay=U.decay,U.castShadow){let $=U.shadow,N=e.get(U);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=R,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=P,g++}else if(U.isHemisphereLight){let P=t.get(U);P.skyColor.copy(U.color).multiplyScalar(O),P.groundColor.copy(U.groundColor).multiplyScalar(O),n.hemi[f]=P,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let z=n.hash;(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==y||z.rectAreaLength!==m||z.hemiLength!==f||z.numDirectionalShadows!==S||z.numPointShadows!==b||z.numSpotShadows!==x||z.numSpotMaps!==q||z.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+q-k,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=F,z.directionalLength=p,z.pointLength=g,z.spotLength=y,z.rectAreaLength=m,z.hemiLength=f,z.numDirectionalShadows=S,z.numPointShadows=b,z.numSpotShadows=x,z.numSpotMaps=q,z.numLightProbes=F,n.version=Mg++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let b=c[f];if(b.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Uh(i){let t=new bg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uh(i),t.set(s,[a])):r>=o.length?(a=new Uh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Dl=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(i,t,e){let n=new or,s=new It,r=new It,o=new ue,a=new Dl({depthPacking:_d}),l=new Ll,c={},h=e.maxTextureSize,u={[Ri]:on,[on]:Ri,[fn]:fn},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let f=this.type;this.render=function(k,F,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||k.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Ei),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let O=f!==si&&this.type===si,V=f===si&&this.type!==si;for(let R=0,P=k.length;R<P;R++){let $=k[R],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let j=N.getFrameExtents();if(s.multiply(j),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,N.mapSize.y=r.y)),N.map===null||O===!0||V===!0){let it=this.type!==si?{minFilter:bn,magFilter:bn}:{};N.map!==null&&N.map.dispose(),N.map=new hi(s.x,s.y,it),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let dt=N.getViewportCount();for(let it=0;it<dt;it++){let rt=N.getViewport(it);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),T.viewport(o),N.updateMatrices($,it),n=N.getFrustum(),x(F,z,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===si&&S(N,z),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,U)};function S(k,F){let z=t.update(y);d.defines.VSM_SAMPLES!==k.blurSamples&&(d.defines.VSM_SAMPLES=k.blurSamples,p.defines.VSM_SAMPLES=k.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=k.map.texture,d.uniforms.resolution.value=k.mapSize,d.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(F,null,z,d,y,null),p.uniforms.shadow_pass.value=k.mapPass.texture,p.uniforms.resolution.value=k.mapSize,p.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(F,null,z,p,y,null)}function b(k,F,z,w){let M=null,U=z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(U!==void 0)M=U;else if(M=z.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let T=M.uuid,O=F.uuid,V=c[T];V===void 0&&(V={},c[T]=V);let R=V[O];R===void 0&&(R=M.clone(),V[O]=R,F.addEventListener("dispose",q)),M=R}if(M.visible=F.visible,M.wireframe=F.wireframe,w===si?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:u[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let T=i.properties.get(M);T.light=z}return M}function x(k,F,z,w,M){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&M===si)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,k.matrixWorld);let O=t.update(k),V=k.material;if(Array.isArray(V)){let R=O.groups;for(let P=0,$=R.length;P<$;P++){let N=R[P],j=V[N.materialIndex];if(j&&j.visible){let dt=b(k,j,w,M);k.onBeforeShadow(i,k,F,z,O,dt,N),i.renderBufferDirect(z,null,O,dt,k,N),k.onAfterShadow(i,k,F,z,O,dt,N)}}}else if(V.visible){let R=b(k,V,w,M);k.onBeforeShadow(i,k,F,z,O,R,null),i.renderBufferDirect(z,null,O,R,k,null),k.onAfterShadow(i,k,F,z,O,R,null)}}let T=k.children;for(let O=0,V=T.length;O<V;O++)x(T[O],F,z,w,M)}function q(k){k.target.removeEventListener("dispose",q);for(let z in c){let w=c[z],M=k.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Rg={[Fa]:Ba,[ka]:Va,[za]:Ga,[Ms]:Ha,[Ba]:Fa,[Va]:ka,[Ga]:za,[Ha]:Ms};function Cg(i,t){function e(){let D=!1,ht=new ue,Q=null,gt=new ue(0,0,0,0);return{setMask:function(Ht){Q!==Ht&&!D&&(i.colorMask(Ht,Ht,Ht,Ht),Q=Ht)},setLocked:function(Ht){D=Ht},setClear:function(Ht,Vt,se,ve,me){me===!0&&(Ht*=ve,Vt*=ve,se*=ve),ht.set(Ht,Vt,se,ve),gt.equals(ht)===!1&&(i.clearColor(Ht,Vt,se,ve),gt.copy(ht))},reset:function(){D=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,Q=null,gt=null,Ht=null;return{setReversed:function(Vt){if(ht!==Vt){let se=t.get("EXT_clip_control");ht?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let ve=Ht;Ht=null,this.setClear(ve)}ht=Vt},getReversed:function(){return ht},setTest:function(Vt){Vt?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Vt){Q!==Vt&&!D&&(i.depthMask(Vt),Q=Vt)},setFunc:function(Vt){if(ht&&(Vt=Rg[Vt]),gt!==Vt){switch(Vt){case Fa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Vt}},setLocked:function(Vt){D=Vt},setClear:function(Vt){Ht!==Vt&&(ht&&(Vt=1-Vt),i.clearDepth(Vt),Ht=Vt)},reset:function(){D=!1,Q=null,gt=null,Ht=null,ht=!1}}}function s(){let D=!1,ht=null,Q=null,gt=null,Ht=null,Vt=null,se=null,ve=null,me=null;return{setTest:function(ae){D||(ae?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!D&&(i.stencilMask(ae),ht=ae)},setFunc:function(ae,Re,Le){(Q!==ae||gt!==Re||Ht!==Le)&&(i.stencilFunc(ae,Re,Le),Q=ae,gt=Re,Ht=Le)},setOp:function(ae,Re,Le){(Vt!==ae||se!==Re||ve!==Le)&&(i.stencilOp(ae,Re,Le),Vt=ae,se=Re,ve=Le)},setLocked:function(ae){D=ae},setClear:function(ae){me!==ae&&(i.clearStencil(ae),me=ae)},reset:function(){D=!1,ht=null,Q=null,gt=null,Ht=null,Vt=null,se=null,ve=null,me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,b=null,x=null,q=null,k=null,F=new re(0,0,0),z=0,w=!1,M=null,U=null,T=null,O=null,V=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,$=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=$>=2);let j=null,dt={},it=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),ft=new ue().fromArray(it),G=new ue().fromArray(rt);function tt(D,ht,Q,gt){let Ht=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(D,Vt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<Q;se++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Ht):i.texImage2D(ht+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ht);return Vt}let Mt={};Mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Ms),Tt(!1),wt(Oc),lt(i.CULL_FACE),I(Ei);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function _t(D,ht){return u[D]!==ht?(i.bindFramebuffer(D,ht),u[D]=ht,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(D,ht){let Q=p,gt=!1;if(D){Q=d.get(ht),Q===void 0&&(Q=[],d.set(ht,Q));let Ht=D.textures;if(Q.length!==Ht.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,se=Ht.length;Vt<se;Vt++)Q[Vt]=i.COLOR_ATTACHMENT0+Vt;Q.length=Ht.length,gt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Q)}function jt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let yt={[Bi]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Xu]:i.FUNC_REVERSE_SUBTRACT};yt[qu]=i.MIN,yt[Yu]=i.MAX;let bt={[$u]:i.ZERO,[Zu]:i.ONE,[Ju]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[ju]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ht,Q,gt,Ht,Vt,se,ve,me,ae){if(D===Ei){y===!0&&(Dt(i.BLEND),y=!1);return}if(y===!1&&(lt(i.BLEND),y=!0),D!==Gu){if(D!==m||ae!==w){if((f!==Bi||x!==Bi)&&(i.blendEquation(i.FUNC_ADD),f=Bi,x=Bi),ae)switch(D){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,b=null,q=null,k=null,F.set(0,0,0),z=0,m=D,w=ae}return}Ht=Ht||ht,Vt=Vt||Q,se=se||gt,(ht!==f||Ht!==x)&&(i.blendEquationSeparate(yt[ht],yt[Ht]),f=ht,x=Ht),(Q!==S||gt!==b||Vt!==q||se!==k)&&(i.blendFuncSeparate(bt[Q],bt[gt],bt[Vt],bt[se]),S=Q,b=gt,q=Vt,k=se),(ve.equals(F)===!1||me!==z)&&(i.blendColor(ve.r,ve.g,ve.b,me),F.copy(ve),z=me),m=D,w=!1}function Wt(D,ht){D.side===fn?Dt(i.CULL_FACE):lt(i.CULL_FACE);let Q=D.side===on;ht&&(Q=!Q),Tt(Q),D.blending===gs&&D.transparent===!1?I(Ei):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let gt=D.stencilWrite;a.setTest(gt),gt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function wt(D){D!==Hu?(lt(i.CULL_FACE),D!==U&&(D===Oc?i.cullFace(i.BACK):D===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),U=D}function mt(D){D!==T&&(P&&i.lineWidth(D),T=D)}function Ft(D,ht,Q){D?(lt(i.POLYGON_OFFSET_FILL),(O!==ht||V!==Q)&&(i.polygonOffset(ht,Q),O=ht,V=Q)):Dt(i.POLYGON_OFFSET_FILL)}function Xt(D){D?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+R-1),j!==D&&(i.activeTexture(D),j=D)}function v(D,ht,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+R-1:Q=j);let gt=dt[Q];gt===void 0&&(gt={type:void 0,texture:void 0},dt[Q]=gt),(gt.type!==D||gt.texture!==ht)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(D,ht||Mt[D]),gt.type=D,gt.texture=ht)}function Z(){let D=dt[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(D){ft.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ft.copy(D))}function K(D){G.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function et(D,ht){let Q=c.get(ht);Q===void 0&&(Q=new WeakMap,c.set(ht,Q));let gt=Q.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(ht,D.name),Q.set(D,gt))}function st(D,ht){let gt=c.get(ht).get(D);l.get(ht)!==gt&&(i.uniformBlockBinding(ht,gt,D.__bindingPointIndex),l.set(ht,gt))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,dt={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,b=null,x=null,q=null,k=null,F=new re(0,0,0),z=0,w=!1,M=null,U=null,T=null,O=null,V=null,ft.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Dt,bindFramebuffer:_t,drawBuffers:Ct,useProgram:jt,setBlending:I,setMaterial:Wt,setFlipSided:Tt,setCullFace:wt,setLineWidth:mt,setPolygonOffset:Ft,setScissorTest:Xt,activeTexture:E,bindTexture:v,unbindTexture:Z,compressedTexImage2D:ct,compressedTexImage3D:vt,texImage2D:qt,texImage3D:ne,updateUBOMapping:et,uniformBlockBinding:st,texStorage2D:oe,texStorage3D:Ut,texSubImage2D:ut,texSubImage3D:Ot,compressedTexSubImage2D:zt,compressedTexSubImage3D:Gt,scissor:Y,viewport:K,reset:at}}function Nh(i,t,e,n){let s=Pg(n);switch(e){case Kh:return i*t;case Qh:return i*t;case tu:return i*t*2;case eu:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case nu:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case jh:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case iu:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pg(i){switch(i){case li:case $h:return{byteLength:1,components:1};case sr:case Zh:case _r:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Vi:case uc:case ri:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ig(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function g(E,v){return p?new OffscreenCanvas(E,v):ao("canvas")}function y(E,v,Z){let ct=1,vt=Xt(E);if((vt.width>Z||vt.height>Z)&&(ct=Z/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let ut=Math.floor(ct*vt.width),Ot=Math.floor(ct*vt.height);u===void 0&&(u=g(ut,Ot));let zt=v?g(ut,Ot):u;return zt.width=ut,zt.height=Ot,zt.getContext("2d").drawImage(E,0,0,ut,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+Ot+")."),zt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,Z,ct,vt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut=v;if(v===i.RED&&(Z===i.FLOAT&&(ut=i.R32F),Z===i.HALF_FLOAT&&(ut=i.R16F),Z===i.UNSIGNED_BYTE&&(ut=i.R8)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ut=i.R8UI),Z===i.UNSIGNED_SHORT&&(ut=i.R16UI),Z===i.UNSIGNED_INT&&(ut=i.R32UI),Z===i.BYTE&&(ut=i.R8I),Z===i.SHORT&&(ut=i.R16I),Z===i.INT&&(ut=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(ut=i.RG32F),Z===i.HALF_FLOAT&&(ut=i.RG16F),Z===i.UNSIGNED_BYTE&&(ut=i.RG8)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Z===i.UNSIGNED_INT&&(ut=i.RG32UI),Z===i.BYTE&&(ut=i.RG8I),Z===i.SHORT&&(ut=i.RG16I),Z===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Z===i.UNSIGNED_INT&&(ut=i.RGB32UI),Z===i.BYTE&&(ut=i.RGB8I),Z===i.SHORT&&(ut=i.RGB16I),Z===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Z===i.BYTE&&(ut=i.RGBA8I),Z===i.SHORT&&(ut=i.RGBA16I),Z===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),v===i.RGBA){let Ot=vt?Fo:ye.getTransfer(ct);Z===i.FLOAT&&(ut=i.RGBA32F),Z===i.HALF_FLOAT&&(ut=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ut=Ot===we?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(E,v){let Z;return E?v===null||v===Vi||v===ws?Z=i.DEPTH24_STENCIL8:v===ri?Z=i.DEPTH32F_STENCIL8:v===sr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===ws?Z=i.DEPTH_COMPONENT24:v===ri?Z=i.DEPTH_COMPONENT32F:v===sr&&(Z=i.DEPTH_COMPONENT16),Z}function q(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==bn&&E.minFilter!==Vn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function k(E){let v=E.target;v.removeEventListener("dispose",k),z(v),v.isVideoTexture&&h.delete(v)}function F(E){let v=E.target;v.removeEventListener("dispose",F),M(v)}function z(E){let v=n.get(E);if(v.__webglInit===void 0)return;let Z=E.source,ct=d.get(Z);if(ct){let vt=ct[v.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(E),Object.keys(ct).length===0&&d.delete(Z)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let Z=E.source,ct=d.get(Z);delete ct[v.__cacheKey],o.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(v.__webglFramebuffer[ct]))for(let vt=0;vt<v.__webglFramebuffer[ct].length;vt++)i.deleteFramebuffer(v.__webglFramebuffer[ct][vt]);else i.deleteFramebuffer(v.__webglFramebuffer[ct]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ct])}else{if(Array.isArray(v.__webglFramebuffer))for(let ct=0;ct<v.__webglFramebuffer.length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[ct]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ct=0;ct<v.__webglColorRenderbuffer.length;ct++)v.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ct]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=E.textures;for(let ct=0,vt=Z.length;ct<vt;ct++){let ut=n.get(Z[ct]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(Z[ct])}n.remove(E)}let U=0;function T(){U=0}function O(){let E=U;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function V(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function R(E,v){let Z=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.version>0&&Z.__version!==E.version){let ct=E.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Z,E,v);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function P(E,v){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){G(Z,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function $(E,v){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){G(Z,E,v);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function N(E,v){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){tt(Z,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let j={[ir]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},dt={[bn]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},it={[yd]:i.NEVER,[Ed]:i.ALWAYS,[vd]:i.LESS,[su]:i.LEQUAL,[Md]:i.EQUAL,[wd]:i.GEQUAL,[Sd]:i.GREATER,[bd]:i.NOTEQUAL};function rt(E,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Vn||v.magFilter===ea||v.magFilter===Er||v.magFilter===Hi||v.minFilter===Vn||v.minFilter===ea||v.minFilter===Er||v.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,j[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,it[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Er&&v.minFilter!==Hi||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ft(E,v){let Z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",k));let ct=v.source,vt=d.get(ct);vt===void 0&&(vt={},d.set(ct,vt));let ut=V(v);if(ut!==E.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),vt[ut].usedTimes++;let Ot=vt[E.__cacheKey];Ot!==void 0&&(vt[E.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(v)),E.__cacheKey=ut,E.__webglTexture=vt[ut].texture}return Z}function G(E,v,Z){let ct=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ct=i.TEXTURE_3D);let vt=ft(E,v),ut=v.source;e.bindTexture(ct,E.__webglTexture,i.TEXTURE0+Z);let Ot=n.get(ut);if(ut.version!==Ot.__version||vt===!0){e.activeTexture(i.TEXTURE0+Z);let zt=ye.getPrimaries(ye.workingColorSpace),Gt=v.colorSpace===bi?null:ye.getPrimaries(v.colorSpace),oe=v.colorSpace===bi||zt===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ut=y(v.image,!1,s.maxTextureSize);Ut=Ft(v,Ut);let qt=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),Y=b(v.internalFormat,qt,ne,v.colorSpace,v.isVideoTexture);rt(ct,v);let K,et=v.mipmaps,st=v.isVideoTexture!==!0,at=Ot.__version===void 0||vt===!0,D=ut.dataReady,ht=q(v,Ut);if(v.isDepthTexture)Y=x(v.format===Es,v.type),at&&(st?e.texStorage2D(i.TEXTURE_2D,1,Y,Ut.width,Ut.height):e.texImage2D(i.TEXTURE_2D,0,Y,Ut.width,Ut.height,0,qt,ne,null));else if(v.isDataTexture)if(et.length>0){st&&at&&e.texStorage2D(i.TEXTURE_2D,ht,Y,et[0].width,et[0].height);for(let Q=0,gt=et.length;Q<gt;Q++)K=et[Q],st?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,qt,ne,K.data):e.texImage2D(i.TEXTURE_2D,Q,Y,K.width,K.height,0,qt,ne,K.data);v.generateMipmaps=!1}else st?(at&&e.texStorage2D(i.TEXTURE_2D,ht,Y,Ut.width,Ut.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut.width,Ut.height,qt,ne,Ut.data)):e.texImage2D(i.TEXTURE_2D,0,Y,Ut.width,Ut.height,0,qt,ne,Ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Y,et[0].width,et[0].height,Ut.depth);for(let Q=0,gt=et.length;Q<gt;Q++)if(K=et[Q],v.format!==On)if(qt!==null)if(st){if(D)if(v.layerUpdates.size>0){let Ht=Nh(K.width,K.height,v.format,v.type);for(let Vt of v.layerUpdates){let se=K.data.subarray(Vt*Ht/K.data.BYTES_PER_ELEMENT,(Vt+1)*Ht/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Vt,K.width,K.height,1,qt,se)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,K.width,K.height,Ut.depth,qt,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Y,K.width,K.height,Ut.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,K.width,K.height,Ut.depth,qt,ne,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Y,K.width,K.height,Ut.depth,0,qt,ne,K.data)}else{st&&at&&e.texStorage2D(i.TEXTURE_2D,ht,Y,et[0].width,et[0].height);for(let Q=0,gt=et.length;Q<gt;Q++)K=et[Q],v.format!==On?qt!==null?st?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,qt,K.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Y,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,K.width,K.height,qt,ne,K.data):e.texImage2D(i.TEXTURE_2D,Q,Y,K.width,K.height,0,qt,ne,K.data)}else if(v.isDataArrayTexture)if(st){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Y,Ut.width,Ut.height,Ut.depth),D)if(v.layerUpdates.size>0){let Q=Nh(Ut.width,Ut.height,v.format,v.type);for(let gt of v.layerUpdates){let Ht=Ut.data.subarray(gt*Q/Ut.data.BYTES_PER_ELEMENT,(gt+1)*Q/Ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,Ut.width,Ut.height,1,qt,ne,Ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ut.width,Ut.height,Ut.depth,qt,ne,Ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,Ut.width,Ut.height,Ut.depth,0,qt,ne,Ut.data);else if(v.isData3DTexture)st?(at&&e.texStorage3D(i.TEXTURE_3D,ht,Y,Ut.width,Ut.height,Ut.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ut.width,Ut.height,Ut.depth,qt,ne,Ut.data)):e.texImage3D(i.TEXTURE_3D,0,Y,Ut.width,Ut.height,Ut.depth,0,qt,ne,Ut.data);else if(v.isFramebufferTexture){if(at)if(st)e.texStorage2D(i.TEXTURE_2D,ht,Y,Ut.width,Ut.height);else{let Q=Ut.width,gt=Ut.height;for(let Ht=0;Ht<ht;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Y,Q,gt,0,qt,ne,null),Q>>=1,gt>>=1}}else if(et.length>0){if(st&&at){let Q=Xt(et[0]);e.texStorage2D(i.TEXTURE_2D,ht,Y,Q.width,Q.height)}for(let Q=0,gt=et.length;Q<gt;Q++)K=et[Q],st?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,qt,ne,K):e.texImage2D(i.TEXTURE_2D,Q,Y,qt,ne,K);v.generateMipmaps=!1}else if(st){if(at){let Q=Xt(Ut);e.texStorage2D(i.TEXTURE_2D,ht,Y,Q.width,Q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,ne,Ut)}else e.texImage2D(i.TEXTURE_2D,0,Y,qt,ne,Ut);m(v)&&f(ct),Ot.__version=ut.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function tt(E,v,Z){if(v.image.length!==6)return;let ct=ft(E,v),vt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+Z);let ut=n.get(vt);if(vt.version!==ut.__version||ct===!0){e.activeTexture(i.TEXTURE0+Z);let Ot=ye.getPrimaries(ye.workingColorSpace),zt=v.colorSpace===bi?null:ye.getPrimaries(v.colorSpace),Gt=v.colorSpace===bi||Ot===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let oe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,qt=[];for(let gt=0;gt<6;gt++)!oe&&!Ut?qt[gt]=y(v.image[gt],!0,s.maxCubemapSize):qt[gt]=Ut?v.image[gt].image:v.image[gt],qt[gt]=Ft(v,qt[gt]);let ne=qt[0],Y=r.convert(v.format,v.colorSpace),K=r.convert(v.type),et=b(v.internalFormat,Y,K,v.colorSpace),st=v.isVideoTexture!==!0,at=ut.__version===void 0||ct===!0,D=vt.dataReady,ht=q(v,ne);rt(i.TEXTURE_CUBE_MAP,v);let Q;if(oe){st&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,et,ne.width,ne.height);for(let gt=0;gt<6;gt++){Q=qt[gt].mipmaps;for(let Ht=0;Ht<Q.length;Ht++){let Vt=Q[Ht];v.format!==On?Y!==null?st?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Vt.width,Vt.height,Y,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,et,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Vt.width,Vt.height,Y,K,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,et,Vt.width,Vt.height,0,Y,K,Vt.data)}}}else{if(Q=v.mipmaps,st&&at){Q.length>0&&ht++;let gt=Xt(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,et,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Ut){st?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt[gt].width,qt[gt].height,Y,K,qt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,et,qt[gt].width,qt[gt].height,0,Y,K,qt[gt].data);for(let Ht=0;Ht<Q.length;Ht++){let se=Q[Ht].image[gt].image;st?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,se.width,se.height,Y,K,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,et,se.width,se.height,0,Y,K,se.data)}}else{st?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Y,K,qt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,et,Y,K,qt[gt]);for(let Ht=0;Ht<Q.length;Ht++){let Vt=Q[Ht];st?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Y,K,Vt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,et,Y,K,Vt.image[gt])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),ut.__version=vt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Mt(E,v,Z,ct,vt,ut){let Ot=r.convert(Z.format,Z.colorSpace),zt=r.convert(Z.type),Gt=b(Z.internalFormat,Ot,zt,Z.colorSpace),oe=n.get(v),Ut=n.get(Z);if(Ut.__renderTarget=v,!oe.__hasExternalTextures){let qt=Math.max(1,v.width>>ut),ne=Math.max(1,v.height>>ut);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,ut,Gt,qt,ne,v.depth,0,Ot,zt,null):e.texImage2D(vt,ut,Gt,qt,ne,0,Ot,zt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),wt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,vt,Ut.__webglTexture,0,Tt(v)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,vt,Ut.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let ct=v.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,ut=x(v.stencilBuffer,vt),Ot=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=Tt(v);wt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ut,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,E)}else{let ct=v.textures;for(let vt=0;vt<ct.length;vt++){let ut=ct[vt],Ot=r.convert(ut.format,ut.colorSpace),zt=r.convert(ut.type),Gt=b(ut.internalFormat,Ot,zt,ut.colorSpace),oe=Tt(v);Z&&wt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Gt,v.width,v.height):wt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(v.depthTexture);ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),R(v.depthTexture,0);let vt=ct.__webglTexture,ut=Tt(v);if(v.depthTexture.format===_s)wt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(v.depthTexture.format===Es)wt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function _t(E){let v=n.get(E),Z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let ct=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ct){let vt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),v.__depthDisposeCallback=vt}v.__boundDepthTexture=ct}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Dt(v.__webglFramebuffer,E)}else if(Z){v.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ct]),v.__webglDepthbuffer[ct]===void 0)v.__webglDepthbuffer[ct]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[ct],E,!1);else{let vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,E,!1);else{let ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(E,v,Z){let ct=n.get(E);v!==void 0&&Mt(ct.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&_t(E)}function jt(E){let v=E.texture,Z=n.get(E),ct=n.get(v);E.addEventListener("dispose",F);let vt=E.textures,ut=E.isWebGLCubeRenderTarget===!0,Ot=vt.length>1;if(Ot||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=v.version,o.memory.textures++),ut){Z.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[zt]=[];for(let Gt=0;Gt<v.mipmaps.length;Gt++)Z.__webglFramebuffer[zt][Gt]=i.createFramebuffer()}else Z.__webglFramebuffer[zt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let zt=0;zt<v.mipmaps.length;zt++)Z.__webglFramebuffer[zt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let zt=0,Gt=vt.length;zt<Gt;zt++){let oe=n.get(vt[zt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&wt(E)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let zt=0;zt<vt.length;zt++){let Gt=vt[zt];Z.__webglColorRenderbuffer[zt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[zt]);let oe=r.convert(Gt.format,Gt.colorSpace),Ut=r.convert(Gt.type),qt=b(Gt.internalFormat,oe,Ut,Gt.colorSpace,E.isXRRenderTarget===!0),ne=Tt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,qt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[zt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),rt(i.TEXTURE_CUBE_MAP,v);for(let zt=0;zt<6;zt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Gt=0;Gt<v.mipmaps.length;Gt++)Mt(Z.__webglFramebuffer[zt][Gt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Gt);else Mt(Z.__webglFramebuffer[zt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let zt=0,Gt=vt.length;zt<Gt;zt++){let oe=vt[zt],Ut=n.get(oe);e.bindTexture(i.TEXTURE_2D,Ut.__webglTexture),rt(i.TEXTURE_2D,oe),Mt(Z.__webglFramebuffer,E,oe,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,0),m(oe)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let zt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(zt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(zt,ct.__webglTexture),rt(zt,v),v.mipmaps&&v.mipmaps.length>0)for(let Gt=0;Gt<v.mipmaps.length;Gt++)Mt(Z.__webglFramebuffer[Gt],E,v,i.COLOR_ATTACHMENT0,zt,Gt);else Mt(Z.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,zt,0);m(v)&&f(zt),e.unbindTexture()}E.depthBuffer&&_t(E)}function yt(E){let v=E.textures;for(let Z=0,ct=v.length;Z<ct;Z++){let vt=v[Z];if(m(vt)){let ut=S(E),Ot=n.get(vt).__webglTexture;e.bindTexture(ut,Ot),f(ut),e.unbindTexture()}}}let bt=[],I=[];function Wt(E){if(E.samples>0){if(wt(E)===!1){let v=E.textures,Z=E.width,ct=E.height,vt=i.COLOR_BUFFER_BIT,ut=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(E),zt=v.length>1;if(zt)for(let Gt=0;Gt<v.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Gt=0;Gt<v.length;Gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),zt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Gt]);let oe=n.get(v[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,Z,ct,0,0,Z,ct,vt,i.NEAREST),l===!0&&(bt.length=0,I.length=0,bt.push(i.COLOR_ATTACHMENT0+Gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(bt.push(ut),I.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),zt)for(let Gt=0;Gt<v.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Gt]);let oe=n.get(v[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Tt(E){return Math.min(s.maxSamples,E.samples)}function wt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(E){let v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Ft(E,v){let Z=E.colorSpace,ct=E.format,vt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Z!==Ns&&Z!==bi&&(ye.getTransfer(Z)===we?(ct!==On||vt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function Xt(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=R,this.setTexture2DArray=P,this.setTexture3D=$,this.setTextureCube=N,this.rebindTextures=Ct,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=wt}function Dg(i,t){function e(n,s=bi){let r,o=ye.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.BYTE;if(n===Zh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===_r)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===jh)return i.RGB;if(n===On)return i.RGBA;if(n===Qh)return i.LUMINANCE;if(n===tu)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===nu)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===$a||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===ja)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===gl||n===_l||n===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ul=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},je=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Tn({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Nl,m=e.getContextAttributes(),f=null,S=null,b=[],x=[],q=new It,k=null,F=new Ye;F.viewport=new ue;let z=new Ye;z.viewport=new ue;let w=[F,z],M=new Ul,U=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=b[G];return tt===void 0&&(tt=new tr,b[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=b[G];return tt===void 0&&(tt=new tr,b[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=b[G];return tt===void 0&&(tt=new tr,b[G]=tt),tt.getHandSpace()};function O(G){let tt=x.indexOf(G.inputSource);if(tt===-1)return;let Mt=b[tt];Mt!==void 0&&(Mt.update(G.inputSource,G.frame,c||o),Mt.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",R);for(let G=0;G<b.length;G++){let tt=x[G];tt!==null&&(x[G]=null,b[G].disconnect(tt))}U=null,T=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(k),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await e.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new hi(p.framebufferWidth,p.framebufferHeight,{format:On,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Es:_s,Mt=m.stencil?ws:Vi);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new hi(d.textureWidth,d.textureHeight,{format:On,type:li,depthTexture:new go(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function R(G){for(let tt=0;tt<G.removed.length;tt++){let Mt=G.removed[tt],lt=x.indexOf(Mt);lt>=0&&(x[lt]=null,b[lt].disconnect(Mt))}for(let tt=0;tt<G.added.length;tt++){let Mt=G.added[tt],lt=x.indexOf(Mt);if(lt===-1){for(let _t=0;_t<b.length;_t++)if(_t>=x.length){x.push(Mt),lt=_t;break}else if(x[_t]===null){x[_t]=Mt,lt=_t;break}if(lt===-1)break}let Dt=b[lt];Dt&&Dt.connect(Mt)}}let P=new A,$=new A;function N(G,tt,Mt){P.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(Mt.matrixWorld);let lt=P.distanceTo($),Dt=tt.projectionMatrix.elements,_t=Mt.projectionMatrix.elements,Ct=Dt[14]/(Dt[10]-1),jt=Dt[14]/(Dt[10]+1),yt=(Dt[9]+1)/Dt[5],bt=(Dt[9]-1)/Dt[5],I=(Dt[8]-1)/Dt[0],Wt=(_t[8]+1)/_t[0],Tt=Ct*I,wt=Ct*Wt,mt=lt/(-I+Wt),Ft=mt*-I;if(tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ft),G.translateZ(mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Dt[10]===-1)G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Xt=Ct+mt,E=jt+mt,v=Tt-Ft,Z=wt+(lt-Ft),ct=yt*jt/E*Xt,vt=bt*jt/E*Xt;G.projectionMatrix.makePerspective(v,Z,ct,vt,Xt,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function j(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let tt=G.near,Mt=G.far;y.texture!==null&&(y.depthNear>0&&(tt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),M.near=z.near=F.near=tt,M.far=z.far=F.far=Mt,(U!==M.near||T!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,T=M.far),F.layers.mask=G.layers.mask|2,z.layers.mask=G.layers.mask|4,M.layers.mask=F.layers.mask|z.layers.mask;let lt=G.parent,Dt=M.cameras;j(M,lt);for(let _t=0;_t<Dt.length;_t++)j(Dt[_t],lt);Dt.length===2?N(M,F,z):M.projectionMatrix.copy(F.projectionMatrix),dt(G,M,lt)};function dt(G,tt,Mt){Mt===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(Mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ts*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let it=null;function rt(G,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let lt=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let _t=0;_t<Mt.length;_t++){let Ct=Mt[_t],jt=null;if(p!==null)jt=p.getViewport(Ct);else{let bt=u.getViewSubImage(d,Ct);jt=bt.viewport,_t===0&&(t.setRenderTargetTextures(S,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(S))}let yt=w[_t];yt===void 0&&(yt=new Ye,yt.layers.enable(_t),yt.viewport=new ue,w[_t]=yt),yt.matrix.fromArray(Ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(jt.x,jt.y,jt.width,jt.height),_t===0&&(M.matrix.copy(yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(yt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let _t=u.getDepthInformation(Mt[0]);_t&&_t.isValid&&_t.texture&&y.init(t,_t,s.renderState)}}for(let Mt=0;Mt<b.length;Mt++){let lt=x[Mt],Dt=b[Mt];lt!==null&&Dt!==void 0&&Dt.update(lt,tt,c||o)}it&&it(G,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ft=new lu;ft.setAnimationLoop(rt),this.setAnimationLoop=function(G){it=G},this.dispose=function(){}}},Oi=new Bn,Og=new Ee;function Fg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,au(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Oi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let x=b.program;n.uniformBlockBinding(S,x)}function c(S,b){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let q=b.program;n.updateUBOMapping(S,q);let k=t.render.frame;r[S.id]!==k&&(d(S),r[S.id]=k)}function h(S){let b=u();S.__bindingPointIndex=b;let x=i.createBuffer(),q=S.__size,k=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,q,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],x=S.uniforms,q=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let k=0,F=x.length;k<F;k++){let z=Array.isArray(x[k])?x[k]:[x[k]];for(let w=0,M=z.length;w<M;w++){let U=z[w];if(p(U,k,w,q)===!0){let T=U.__offset,O=Array.isArray(U.value)?U.value:[U.value],V=0;for(let R=0;R<O.length;R++){let P=O[R],$=y(P);typeof P=="number"||typeof P=="boolean"?(U.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,T+V,U.__data)):P.isMatrix3?(U.__data[0]=P.elements[0],U.__data[1]=P.elements[1],U.__data[2]=P.elements[2],U.__data[3]=0,U.__data[4]=P.elements[3],U.__data[5]=P.elements[4],U.__data[6]=P.elements[5],U.__data[7]=0,U.__data[8]=P.elements[6],U.__data[9]=P.elements[7],U.__data[10]=P.elements[8],U.__data[11]=0):(P.toArray(U.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,x,q){let k=S.value,F=b+"_"+x;if(q[F]===void 0)return typeof k=="number"||typeof k=="boolean"?q[F]=k:q[F]=k.clone(),!0;{let z=q[F];if(typeof k=="number"||typeof k=="boolean"){if(z!==k)return q[F]=k,!0}else if(z.equals(k)===!1)return z.copy(k),!0}return!1}function g(S){let b=S.uniforms,x=0,q=16;for(let F=0,z=b.length;F<z;F++){let w=Array.isArray(b[F])?b[F]:[b[F]];for(let M=0,U=w.length;M<U;M++){let T=w[M],O=Array.isArray(T.value)?T.value:[T.value];for(let V=0,R=O.length;V<R;V++){let P=O[V],$=y(P),N=x%q,j=N%$.boundary,dt=N+j;x+=j,dt!==0&&q-dt<$.storage&&(x+=q-dt),T.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,x+=$.storage}}}let k=x%q;return k>0&&(x+=q-k),S.__size=x,S.__cache={},this}function y(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var _o=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Ti,this.toneMappingExposure=1;let x=this,q=!1,k=0,F=0,z=null,w=-1,M=null,U=new ue,T=new ue,O=null,V=new re(0),R=0,P=e.width,$=e.height,N=1,j=null,dt=null,it=new ue(0,0,P,$),rt=new ue(0,0,P,$),ft=!1,G=new or,tt=!1,Mt=!1,lt=new Ee,Dt=new Ee,_t=new A,Ct=new ue,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function bt(){return z===null?N:1}let I=n;function Wt(_,C){return e.getContext(_,C)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),I===null){let C="webgl2";if(I=Wt(C,_),I===null)throw Wt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Tt,wt,mt,Ft,Xt,E,v,Z,ct,vt,ut,Ot,zt,Gt,oe,Ut,qt,ne,Y,K,et,st,at,D;function ht(){Tt=new t0(I),Tt.init(),st=new Dg(I,Tt),wt=new $m(I,Tt,t,st),mt=new Cg(I,Tt),wt.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Ft=new i0(I),Xt=new gg,E=new Ig(I,Tt,mt,Xt,wt,st,Ft),v=new Jm(x),Z=new Qm(x),ct=new hf(I),at=new qm(I,ct),vt=new e0(I,ct,Ft,at),ut=new r0(I,vt,ct,Ft),Y=new s0(I,wt,E),Ut=new Zm(Xt),Ot=new mg(x,v,Z,Tt,wt,at,Ut),zt=new Fg(x,Xt),Gt=new xg,oe=new wg(Tt),ne=new Xm(x,v,Z,mt,ut,p,l),qt=new Ag(x,ut,wt),D=new Bg(I,Ft,wt,mt),K=new Ym(I,Tt,Ft),et=new n0(I,Tt,Ft),Ft.programs=Ot.programs,x.capabilities=wt,x.extensions=Tt,x.properties=Xt,x.renderLists=Gt,x.shadowMap=qt,x.state=mt,x.info=Ft}ht();let Q=new Ol(x,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let _=Tt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Tt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(_){_!==void 0&&(N=_,this.setSize(P,$,!1))},this.getSize=function(_){return _.set(P,$)},this.setSize=function(_,C,H=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=_,$=C,e.width=Math.floor(_*N),e.height=Math.floor(C*N),H===!0&&(e.style.width=_+"px",e.style.height=C+"px"),this.setViewport(0,0,_,C)},this.getDrawingBufferSize=function(_){return _.set(P*N,$*N).floor()},this.setDrawingBufferSize=function(_,C,H){P=_,$=C,N=H,e.width=Math.floor(_*H),e.height=Math.floor(C*H),this.setViewport(0,0,_,C)},this.getCurrentViewport=function(_){return _.copy(U)},this.getViewport=function(_){return _.copy(it)},this.setViewport=function(_,C,H,W){_.isVector4?it.set(_.x,_.y,_.z,_.w):it.set(_,C,H,W),mt.viewport(U.copy(it).multiplyScalar(N).round())},this.getScissor=function(_){return _.copy(rt)},this.setScissor=function(_,C,H,W){_.isVector4?rt.set(_.x,_.y,_.z,_.w):rt.set(_,C,H,W),mt.scissor(T.copy(rt).multiplyScalar(N).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(_){mt.setScissorTest(ft=_)},this.setOpaqueSort=function(_){j=_},this.setTransparentSort=function(_){dt=_},this.getClearColor=function(_){return _.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(_=!0,C=!0,H=!0){let W=0;if(_){let B=!1;if(z!==null){let St=z.texture.format;B=St===gc||St===mc||St===pc}if(B){let St=z.texture.type,Et=St===li||St===Vi||St===sr||St===ws||St===dc||St===fc,xt=ne.getClearColor(),At=ne.getClearAlpha(),Lt=xt.r,$t=xt.g,kt=xt.b;Et?(g[0]=Lt,g[1]=$t,g[2]=kt,g[3]=At,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Lt,y[1]=$t,y[2]=kt,y[3]=At,I.clearBufferiv(I.COLOR,0,y))}else W|=I.COLOR_BUFFER_BIT}C&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Gt.dispose(),oe.dispose(),Xt.dispose(),v.dispose(),Z.dispose(),ut.dispose(),at.dispose(),D.dispose(),Ot.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ot),Q.removeEventListener("sessionend",pt),Pt.stop()};function gt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let _=Ft.autoReset,C=qt.enabled,H=qt.autoUpdate,W=qt.needsUpdate,B=qt.type;ht(),Ft.autoReset=_,qt.enabled=C,qt.autoUpdate=H,qt.needsUpdate=W,qt.type=B}function Vt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function se(_){let C=_.target;C.removeEventListener("dispose",se),ve(C)}function ve(_){me(_),Xt.remove(_)}function me(_){let C=Xt.get(_).programs;C!==void 0&&(C.forEach(function(H){Ot.releaseProgram(H)}),_.isShaderMaterial&&Ot.releaseShaderCache(_))}this.renderBufferDirect=function(_,C,H,W,B,St){C===null&&(C=jt);let Et=B.isMesh&&B.matrixWorld.determinant()<0,xt=nt(_,C,H,W,B);mt.setMaterial(W,Et);let At=H.index,Lt=1;if(W.wireframe===!0){if(At=vt.getWireframeAttribute(H),At===void 0)return;Lt=2}let $t=H.drawRange,kt=H.attributes.position,ie=$t.start*Lt,ee=($t.start+$t.count)*Lt;St!==null&&(ie=Math.max(ie,St.start*Lt),ee=Math.min(ee,(St.start+St.count)*Lt)),At!==null?(ie=Math.max(ie,0),ee=Math.min(ee,At.count)):kt!=null&&(ie=Math.max(ie,0),ee=Math.min(ee,kt.count));let xe=ee-ie;if(xe<0||xe===1/0)return;at.setup(B,W,xt,H,At);let Ue,pe=K;if(At!==null&&(Ue=ct.get(At),pe=et,pe.setIndex(Ue)),B.isMesh)W.wireframe===!0?(mt.setLineWidth(W.wireframeLinewidth*bt()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(B.isLine){let Qt=W.linewidth;Qt===void 0&&(Qt=1),mt.setLineWidth(Qt*bt()),B.isLineSegments?pe.setMode(I.LINES):B.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else B.isPoints?pe.setMode(I.POINTS):B.isSprite&&pe.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Qt=B._multiDrawStarts,We=B._multiDrawCounts,ge=B._multiDrawCount,an=At?ct.get(At).bytesPerElement:1,Hn=Xt.get(W).currentProgram.getUniforms();for(let Je=0;Je<ge;Je++)Hn.setValue(I,"_gl_DrawID",Je),pe.render(Qt[Je]/an,We[Je])}else if(B.isInstancedMesh)pe.renderInstances(ie,xe,B.count);else if(H.isInstancedBufferGeometry){let Qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,We=Math.min(H.instanceCount,Qt);pe.renderInstances(ie,xe,We)}else pe.render(ie,xe)};function ae(_,C,H){_.transparent===!0&&_.side===fn&&_.forceSinglePass===!1?(_.side=on,_.needsUpdate=!0,L(_,C,H),_.side=Ri,_.needsUpdate=!0,L(_,C,H),_.side=fn):L(_,C,H)}this.compile=function(_,C,H=null){H===null&&(H=_),f=oe.get(H),f.init(C),b.push(f),H.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),_!==H&&_.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let W=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let St=B.material;if(St)if(Array.isArray(St))for(let Et=0;Et<St.length;Et++){let xt=St[Et];ae(xt,H,B),W.add(xt)}else ae(St,H,B),W.add(St)}),b.pop(),f=null,W},this.compileAsync=function(_,C,H=null){let W=this.compile(_,C,H);return new Promise(B=>{function St(){if(W.forEach(function(Et){Xt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){B(_);return}setTimeout(St,10)}Tt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Re=null;function Le(_){Re&&Re(_)}function ot(){Pt.stop()}function pt(){Pt.start()}let Pt=new lu;Pt.setAnimationLoop(Le),typeof self!="undefined"&&Pt.setContext(self),this.setAnimationLoop=function(_){Re=_,Q.setAnimationLoop(_),_===null?Pt.stop():Pt.start()},Q.addEventListener("sessionstart",ot),Q.addEventListener("sessionend",pt),this.render=function(_,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(C),C=Q.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,C,z),f=oe.get(_,b.length),f.init(C),b.push(f),Dt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),G.setFromProjectionMatrix(Dt),Mt=this.localClippingEnabled,tt=Ut.init(this.clippingPlanes,Mt),m=Gt.get(_,S.length),m.init(),S.push(m),Q.enabled===!0&&Q.isPresenting===!0){let St=x.xr.getDepthSensingMesh();St!==null&&Rt(St,C,-1/0,x.sortObjects)}Rt(_,C,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,dt),yt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,yt&&ne.addToRenderList(m,_),this.info.render.frame++,tt===!0&&Ut.beginShadows();let H=f.state.shadowsArray;qt.render(H,_,C),tt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(f.setupLights(),C.isArrayCamera){let St=C.cameras;if(B.length>0)for(let Et=0,xt=St.length;Et<xt;Et++){let At=St[Et];te(W,B,_,At)}yt&&ne.render(_);for(let Et=0,xt=St.length;Et<xt;Et++){let At=St[Et];Nt(m,_,At,At.viewport)}}else B.length>0&&te(W,B,_,C),yt&&ne.render(_),Nt(m,_,C);z!==null&&(E.updateMultisampleRenderTarget(z),E.updateRenderTargetMipmap(z)),_.isScene===!0&&_.onAfterRender(x,_,C),at.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],tt===!0&&Ut.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Rt(_,C,H,W){if(_.visible===!1)return;if(_.layers.test(C.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(C);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||G.intersectsSprite(_)){W&&Ct.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Dt);let Et=ut.update(_),xt=_.material;xt.visible&&m.push(_,Et,xt,H,Ct.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||G.intersectsObject(_))){let Et=ut.update(_),xt=_.material;if(W&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ct.copy(_.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ct.copy(Et.boundingSphere.center)),Ct.applyMatrix4(_.matrixWorld).applyMatrix4(Dt)),Array.isArray(xt)){let At=Et.groups;for(let Lt=0,$t=At.length;Lt<$t;Lt++){let kt=At[Lt],ie=xt[kt.materialIndex];ie&&ie.visible&&m.push(_,Et,ie,H,Ct.z,kt)}}else xt.visible&&m.push(_,Et,xt,H,Ct.z,null)}}let St=_.children;for(let Et=0,xt=St.length;Et<xt;Et++)Rt(St[Et],C,H,W)}function Nt(_,C,H,W){let B=_.opaque,St=_.transmissive,Et=_.transparent;f.setupLightsView(H),tt===!0&&Ut.setGlobalState(x.clippingPlanes,H),W&&mt.viewport(U.copy(W)),B.length>0&&Yt(B,C,H),St.length>0&&Yt(St,C,H),Et.length>0&&Yt(Et,C,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function te(_,C,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?_r:li,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let St=f.state.transmissionRenderTarget[W.id],Et=W.viewport||U;St.setSize(Et.z,Et.w);let xt=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(V),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear(),yt&&ne.render(H);let At=x.toneMapping;x.toneMapping=Ti;let Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),tt===!0&&Ut.setGlobalState(x.clippingPlanes,W),Yt(_,H,W),E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let kt=0,ie=C.length;kt<ie;kt++){let ee=C[kt],xe=ee.object,Ue=ee.geometry,pe=ee.material,Qt=ee.group;if(pe.side===fn&&xe.layers.test(W.layers)){let We=pe.side;pe.side=on,pe.needsUpdate=!0,Kt(xe,H,W,Ue,pe,Qt),pe.side=We,pe.needsUpdate=!0,$t=!0}}$t===!0&&(E.updateMultisampleRenderTarget(St),E.updateRenderTargetMipmap(St))}x.setRenderTarget(xt),x.setClearColor(V,R),Lt!==void 0&&(W.viewport=Lt),x.toneMapping=At}function Yt(_,C,H){let W=C.isScene===!0?C.overrideMaterial:null;for(let B=0,St=_.length;B<St;B++){let Et=_[B],xt=Et.object,At=Et.geometry,Lt=W===null?Et.material:W,$t=Et.group;xt.layers.test(H.layers)&&Kt(xt,C,H,At,Lt,$t)}}function Kt(_,C,H,W,B,St){_.onBeforeRender(x,C,H,W,B,St),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(x,C,H,W,_,St),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,x.renderBufferDirect(H,C,W,B,_,St),B.side=Ri,B.needsUpdate=!0,x.renderBufferDirect(H,C,W,B,_,St),B.side=fn):x.renderBufferDirect(H,C,W,B,_,St),_.onAfterRender(x,C,H,W,B,St)}function L(_,C,H){C.isScene!==!0&&(C=jt);let W=Xt.get(_),B=f.state.lights,St=f.state.shadowsArray,Et=B.state.version,xt=Ot.getParameters(_,B.state,St,C,H),At=Ot.getProgramCacheKey(xt),Lt=W.programs;W.environment=_.isMeshStandardMaterial?C.environment:null,W.fog=C.fog,W.envMap=(_.isMeshStandardMaterial?Z:v).get(_.envMap||W.environment),W.envMapRotation=W.environment!==null&&_.envMap===null?C.environmentRotation:_.envMapRotation,Lt===void 0&&(_.addEventListener("dispose",se),Lt=new Map,W.programs=Lt);let $t=Lt.get(At);if($t!==void 0){if(W.currentProgram===$t&&W.lightsStateVersion===Et)return J(_,xt),$t}else xt.uniforms=Ot.getUniforms(_),_.onBeforeCompile(xt,x),$t=Ot.acquireProgram(xt,At),Lt.set(At,$t),W.uniforms=xt.uniforms;let kt=W.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(kt.clippingPlanes=Ut.uniform),J(_,xt),W.needsLights=Jt(_),W.lightsStateVersion=Et,W.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=$t,W.uniformsList=null,$t}function X(_){if(_.uniformsList===null){let C=_.currentProgram.getUniforms();_.uniformsList=vs.seqWithValue(C.seq,_.uniforms)}return _.uniformsList}function J(_,C){let H=Xt.get(_);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function nt(_,C,H,W,B){C.isScene!==!0&&(C=jt),E.resetTextureUnits();let St=C.fog,Et=W.isMeshStandardMaterial?C.environment:null,xt=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ns,At=(W.isMeshStandardMaterial?Z:v).get(W.envMap||Et),Lt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$t=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),kt=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,ee=!!H.morphAttributes.color,xe=Ti;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xe=x.toneMapping);let Ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=Ue!==void 0?Ue.length:0,Qt=Xt.get(W),We=f.state.lights;if(tt===!0&&(Mt===!0||_!==M)){let ln=_===M&&W.id===w;Ut.setState(W,_,ln)}let ge=!1;W.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==xt||B.isBatchedMesh&&Qt.batching===!1||!B.isBatchedMesh&&Qt.batching===!0||B.isBatchedMesh&&Qt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Qt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Qt.instancing===!1||!B.isInstancedMesh&&Qt.instancing===!0||B.isSkinnedMesh&&Qt.skinning===!1||!B.isSkinnedMesh&&Qt.skinning===!0||B.isInstancedMesh&&Qt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Qt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Qt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Qt.instancingMorph===!1&&B.morphTexture!==null||Qt.envMap!==At||W.fog===!0&&Qt.fog!==St||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ut.numPlanes||Qt.numIntersection!==Ut.numIntersection)||Qt.vertexAlphas!==Lt||Qt.vertexTangents!==$t||Qt.morphTargets!==kt||Qt.morphNormals!==ie||Qt.morphColors!==ee||Qt.toneMapping!==xe||Qt.morphTargetsCount!==pe)&&(ge=!0):(ge=!0,Qt.__version=W.version);let an=Qt.currentProgram;ge===!0&&(an=L(W,C,B));let Hn=!1,Je=!1,Cn=!1,Se=an.getUniforms(),Ke=Qt.uniforms;if(mt.useProgram(an.program)&&(Hn=!0,Je=!0,Cn=!0),W.id!==w&&(w=W.id,Je=!0),Hn||M!==_){mt.buffers.depth.getReversed()?(lt.copy(_.projectionMatrix),Wd(lt),Xd(lt),Se.setValue(I,"projectionMatrix",lt)):Se.setValue(I,"projectionMatrix",_.projectionMatrix),Se.setValue(I,"viewMatrix",_.matrixWorldInverse);let le=Se.map.cameraPosition;le!==void 0&&le.setValue(I,_t.setFromMatrixPosition(_.matrixWorld)),wt.logarithmicDepthBuffer&&Se.setValue(I,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Se.setValue(I,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Je=!0,Cn=!0)}if(B.isSkinnedMesh){Se.setOptional(I,B,"bindMatrix"),Se.setOptional(I,B,"bindMatrixInverse");let ln=B.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Se.setValue(I,"boneTexture",ln.boneTexture,E))}B.isBatchedMesh&&(Se.setOptional(I,B,"batchingTexture"),Se.setValue(I,"batchingTexture",B._matricesTexture,E),Se.setOptional(I,B,"batchingIdTexture"),Se.setValue(I,"batchingIdTexture",B._indirectTexture,E),Se.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Se.setValue(I,"batchingColorTexture",B._colorsTexture,E));let jn=H.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Y.update(B,H,an),(Je||Qt.receiveShadow!==B.receiveShadow)&&(Qt.receiveShadow=B.receiveShadow,Se.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ke.envMap.value=At,Ke.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&C.environment!==null&&(Ke.envMapIntensity.value=C.environmentIntensity),Je&&(Se.setValue(I,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&Bt(Ke,Cn),St&&W.fog===!0&&zt.refreshFogUniforms(Ke,St),zt.refreshMaterialUniforms(Ke,W,N,$,f.state.transmissionRenderTarget[_.id]),vs.upload(I,X(Qt),Ke,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vs.upload(I,X(Qt),Ke,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Se.setValue(I,"center",B.center),Se.setValue(I,"modelViewMatrix",B.modelViewMatrix),Se.setValue(I,"normalMatrix",B.normalMatrix),Se.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ln=W.uniformsGroups;for(let le=0,Ae=ln.length;le<Ae;le++){let cn=ln[le];D.update(cn,an),D.bind(cn,an)}}return an}function Bt(_,C){_.ambientLightColor.needsUpdate=C,_.lightProbe.needsUpdate=C,_.directionalLights.needsUpdate=C,_.directionalLightShadows.needsUpdate=C,_.pointLights.needsUpdate=C,_.pointLightShadows.needsUpdate=C,_.spotLights.needsUpdate=C,_.spotLightShadows.needsUpdate=C,_.rectAreaLights.needsUpdate=C,_.hemisphereLights.needsUpdate=C}function Jt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(_,C,H){Xt.get(_.texture).__webglTexture=C,Xt.get(_.depthTexture).__webglTexture=H;let W=Xt.get(_);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,C){let H=Xt.get(_);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(_,C=0,H=0){z=_,k=C,F=H;let W=!0,B=null,St=!1,Et=!1;if(_){let At=Xt.get(_);if(At.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)E.setupRenderTarget(_);else if(At.__hasExternalTextures)E.rebindTextures(_,Xt.get(_.texture).__webglTexture,Xt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let kt=_.depthTexture;if(At.__boundDepthTexture!==kt){if(kt!==null&&Xt.has(kt)&&(_.width!==kt.image.width||_.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(_)}}let Lt=_.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Et=!0);let $t=Xt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray($t[C])?B=$t[C][H]:B=$t[C],St=!0):_.samples>0&&E.useMultisampledRTT(_)===!1?B=Xt.get(_).__webglMultisampledFramebuffer:Array.isArray($t)?B=$t[H]:B=$t,U.copy(_.viewport),T.copy(_.scissor),O=_.scissorTest}else U.copy(it).multiplyScalar(N).floor(),T.copy(rt).multiplyScalar(N).floor(),O=ft;if(mt.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&mt.drawBuffers(_,B),mt.viewport(U),mt.scissor(T),mt.setScissorTest(O),St){let At=Xt.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,At.__webglTexture,H)}else if(Et){let At=Xt.get(_.texture),Lt=C||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,H||0,Lt)}w=-1},this.readRenderTargetPixels=function(_,C,H,W,B,St,Et){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Xt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(xt=xt[Et]),xt){mt.bindFramebuffer(I.FRAMEBUFFER,xt);try{let At=_.texture,Lt=At.format,$t=At.type;if(!wt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=_.width-W&&H>=0&&H<=_.height-B&&I.readPixels(C,H,W,B,st.convert(Lt),st.convert($t),St)}finally{let At=z!==null?Xt.get(z).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(_,C,H,W,B,St,Et){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Xt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(xt=xt[Et]),xt){let At=_.texture,Lt=At.format,$t=At.type;if(!wt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=_.width-W&&H>=0&&H<=_.height-B){mt.bindFramebuffer(I.FRAMEBUFFER,xt);let kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(C,H,W,B,st.convert(Lt),st.convert($t),0);let ie=z!==null?Xt.get(z).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,ie);let ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gd(I,ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(kt),I.deleteSync(ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,C=null,H=0){_.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,_=arguments[1]);let W=Math.pow(2,-H),B=Math.floor(_.image.width*W),St=Math.floor(_.image.height*W),Et=C!==null?C.x:0,xt=C!==null?C.y:0;E.setTexture2D(_,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Et,xt,B,St),mt.unbindTexture()},this.copyTextureToTexture=function(_,C,H=null,W=null,B=0){_.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,_=arguments[1],C=arguments[2],B=arguments[3]||0,H=null);let St,Et,xt,At,Lt,$t,kt,ie,ee,xe=_.isCompressedTexture?_.mipmaps[B]:_.image;H!==null?(St=H.max.x-H.min.x,Et=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Lt=H.min.y,$t=H.isBox3?H.min.z:0):(St=xe.width,Et=xe.height,xt=xe.depth||1,At=0,Lt=0,$t=0),W!==null?(kt=W.x,ie=W.y,ee=W.z):(kt=0,ie=0,ee=0);let Ue=st.convert(C.format),pe=st.convert(C.type),Qt;C.isData3DTexture?(E.setTexture3D(C,0),Qt=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(E.setTexture2DArray(C,0),Qt=I.TEXTURE_2D_ARRAY):(E.setTexture2D(C,0),Qt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);let We=I.getParameter(I.UNPACK_ROW_LENGTH),ge=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Hn=I.getParameter(I.UNPACK_SKIP_ROWS),Je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);let Cn=_.isDataArrayTexture||_.isData3DTexture,Se=C.isDataArrayTexture||C.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let Ke=Xt.get(_),jn=Xt.get(C),ln=Xt.get(Ke.__renderTarget),le=Xt.get(jn.__renderTarget);mt.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<xt;Ae++)Cn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(_).__webglTexture,B,$t+Ae),_.isDepthTexture?(Se&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(C).__webglTexture,B,ee+Ae),I.blitFramebuffer(At,Lt,St,Et,kt,ie,St,Et,I.DEPTH_BUFFER_BIT,I.NEAREST)):Se?I.copyTexSubImage3D(Qt,B,kt,ie,ee+Ae,At,Lt,St,Et):I.copyTexSubImage2D(Qt,B,kt,ie,ee+Ae,At,Lt,St,Et);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Se?_.isDataTexture||_.isData3DTexture?I.texSubImage3D(Qt,B,kt,ie,ee,St,Et,xt,Ue,pe,xe.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(Qt,B,kt,ie,ee,St,Et,xt,Ue,xe.data):I.texSubImage3D(Qt,B,kt,ie,ee,St,Et,xt,Ue,pe,xe):_.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,kt,ie,St,Et,Ue,pe,xe.data):_.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,kt,ie,xe.width,xe.height,Ue,xe.data):I.texSubImage2D(I.TEXTURE_2D,B,kt,ie,St,Et,Ue,pe,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,We),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Je),B===0&&C.generateMipmaps&&I.generateMipmap(Qt),mt.unbindTexture()},this.copyTextureToTexture3D=function(_,C,H=null,W=null,B=0){return _.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,_=arguments[2],C=arguments[3],B=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,C,H,W,B)},this.initRenderTarget=function(_){Xt.get(_).__webglFramebuffer===void 0&&E.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),mt.unbindTexture()},this.resetState=function(){k=0,F=0,z=null,mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new A,Xn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var yo=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=bn,h=bn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ds=class extends xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],o=[],a=new A,l=new Ee;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qr=new A,Ca=new vc,Pa=new vc,Ia=new vc,kl=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),c=qr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ca.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Pa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Ia.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Pa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ia.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ca.calc(l),Pa.calc(l),Ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Oh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kg(i,t){let e=1-i;return e*e*t}function zg(i,t){return 2*(1-i)*i*t}function Hg(i,t){return i*i*t}function er(i,t,e,n){return kg(i,t)+zg(i,e)+Hg(i,n)}function Vg(i,t){let e=1-i;return e*e*e*t}function Gg(i,t){let e=1-i;return 3*e*e*i*t}function Wg(i,t){return 3*(1-i)*i*i*t}function Xg(i,t){return i*i*i*t}function nr(i,t,e,n,s){return Vg(i,t)+Gg(i,e)+Wg(i,n)+Xg(i,s)}var vo=class extends An{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends An{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends An{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends An{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends An{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends An{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Oh(a,l.x,c.x,h.x,u.x),Oh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Gl=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:kl,CubicBezierCurve:vo,CubicBezierCurve3:zl,EllipseCurve:ar,LineCurve:Mo,LineCurve3:Hl,QuadraticBezierCurve:So,QuadraticBezierCurve3:Vl,SplineCurve:bo}),Wl=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this}},Gi=class extends Wl{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ar(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var wo=class i extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class i extends ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function S(){let x=new A,q=new A,k=0,F=(e-t)/n;for(let z=0;z<=r;z++){let w=[],M=z/r,U=M*(e-t)+t;for(let T=0;T<=s;T++){let O=T/s,V=O*l+a,R=Math.sin(V),P=Math.cos(V);q.x=U*R,q.y=-M*n+m,q.z=U*P,u.push(q.x,q.y,q.z),x.set(R,F,P).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-M),w.push(g++)}y.push(w)}for(let z=0;z<s;z++)for(let w=0;w<r;w++){let M=y[w][z],U=y[w+1][z],T=y[w+1][z+1],O=y[w][z+1];(t>0||w!==0)&&(h.push(M,U,O),k+=3),(e>0||w!==r-1)&&(h.push(U,T,O),k+=3)}c.addGroup(f,k,0),f+=k}function b(x){let q=g,k=new It,F=new A,z=0,w=x===!0?t:e,M=x===!0?1:-1;for(let T=1;T<=s;T++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let T=0;T<=s;T++){let V=T/s*l+a,R=Math.cos(V),P=Math.sin(V);F.x=w*P,F.y=m*M,F.z=w*R,u.push(F.x,F.y,F.z),d.push(0,M,0),k.x=R*.5+.5,k.y=P*.5*M+.5,p.push(k.x,k.y),g++}for(let T=0;T<s;T++){let O=q+T,V=U+T;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),z+=3}c.addGroup(f,z,x===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class i extends Ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xl=class i extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new A,x=new A,q=new A;for(let k=0;k<e.length;k+=3)p(e[k+0],b),p(e[k+1],x),p(e[k+2],q),l(b,x,q,S)}function l(S,b,x,q){let k=q+1,F=[];for(let z=0;z<=k;z++){F[z]=[];let w=S.clone().lerp(x,z/k),M=b.clone().lerp(x,z/k),U=k-z;for(let T=0;T<=U;T++)T===0&&z===k?F[z][T]=w:F[z][T]=w.clone().lerp(M,T/U)}for(let z=0;z<k;z++)for(let w=0;w<2*(k-z)-1;w++){let M=Math.floor(w/2);w%2===0?(d(F[z][M+1]),d(F[z+1][M]),d(F[z][M])):(d(F[z][M+1]),d(F[z+1][M+1]),d(F[z+1][M]))}}function c(S){let b=new A;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(S),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let S=new A;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let x=m(S)/2/Math.PI+.5,q=f(S)/Math.PI+.5;o.push(x,1-q)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let b=o[S+0],x=o[S+2],q=o[S+4],k=Math.max(b,x,q),F=Math.min(b,x,q);k>.9&&F<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),q<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,b){let x=S*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){let S=new A,b=new A,x=new A,q=new A,k=new It,F=new It,z=new It;for(let w=0,M=0;w<r.length;w+=9,M+=6){S.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),k.set(o[M+0],o[M+1]),F.set(o[M+2],o[M+3]),z.set(o[M+4],o[M+5]),q.copy(S).add(b).add(x).divideScalar(3);let U=m(q);y(k,M+0,S,U),y(F,M+2,b,U),y(z,M+4,x,U)}}function y(S,b,x,q){q<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=q/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Yr=new A,$r=new A,Da=new A,Zr=new wi,To=class extends ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(xs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:f}=Zr;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Zr.getNormal(Da),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let b=(S+1)%3,x=u[S],q=u[b],k=Zr[h[S]],F=Zr[h[b]],z=`${x}_${q}`,w=`${q}_${x}`;w in d&&d[w]?(Da.dot(d[w].normal)<=r&&(p.push(k.x,k.y,k.z),p.push(F.x,F.y,F.z)),d[w]=null):z in d||(d[z]={index0:c[S],index1:c[b],normal:Da.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:m}=d[g];Yr.fromBufferAttribute(a,y),$r.fromBufferAttribute(a,m),p.push(Yr.x,Yr.y,Yr.z),p.push($r.x,$r.y,$r.z)}this.setAttribute("position",new Me(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},di=class extends Gi{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Gi().fromJSON(s))}return this}},qg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=fu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=Kg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return lr(r,o,e,a,l,p,0),o}};function fu(i,t,e,n,s){let r,o;if(s===l_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Fh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Fh(r,i[r],i[r+1],o);return o&&zo(o,o.next)&&(hr(o),o=o.next),o}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||Ie(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&n_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?$g(i,n,s,r):Yg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Zg(Wi(i),t,e),lr(i,t,e,n,s,r,2)):o===2&&Jg(i,t,e,n,s,r):lr(Wi(i),t,e,n,s,r,1);break}}}function Yg(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ms(s,a,r,l,o,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=ql(p,g,t,e,n),S=ql(y,m,t,e,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=f&&x&&x.z<=S;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ms(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ms(a,h,l,u,c,d,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ms(a,h,l,u,c,d,b.x,b.y)&&Ie(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ms(a,h,l,u,c,d,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!zo(s,r)&&pu(s,n,n.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return Wi(n)}function Jg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r_(o,a)){let l=mu(o,a);o=Wi(o,o.next),l=Wi(l,l.next),lr(o,t,e,n,s,r,0),lr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=fu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(s_(c));for(s.sort(jg),r=0;r<s.length;r++)e=Qg(s[r],e);return e}function jg(i,t){return i.x-t.x}function Qg(i,t){let e=t_(i,t);if(!e)return t;let n=mu(e,i);return Wi(n,n.next),Wi(e,e.next)}function t_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ms(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),cr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&e_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function e_(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function n_(i,t,e,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i_(s)}function i_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ms(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function r_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o_(i,t)&&(cr(i,t)&&cr(t,i)&&a_(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||zo(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){let s=Kr(Ie(i,t,e)),r=Kr(Ie(i,t,n)),o=Kr(Ie(e,n,i)),a=Kr(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Jr(i,e,t)||r===0&&Jr(i,n,t)||o===0&&Jr(e,i,n)||a===0&&Jr(e,t,n))}function Jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kr(i){return i>0?1:i<0?-1:0}function o_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function a_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){let e=new Yl(i.i,i.x,i.y),n=new Yl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(i,t,e,n){let s=new Yl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Bh(t),kh(n,t);let o=t.length;e.forEach(Bh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,kh(n,e[l]);let a=qg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kn=class i extends ke{constructor(t=new di([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:c_,b,x=!1,q,k,F,z;f&&(b=f.getSpacedPoints(h),x=!0,d=!1,q=f.computeFrenetFrames(h,!1),k=new A,F=new A,z=new A),d||(m=0,p=0,g=0,y=0);let w=a.extractPoints(c),M=w.shape,U=w.holes;if(!Ai.isClockWise(M)){M=M.reverse();for(let yt=0,bt=U.length;yt<bt;yt++){let I=U[yt];Ai.isClockWise(I)&&(U[yt]=I.reverse())}}let O=Ai.triangulateShape(M,U),V=M;for(let yt=0,bt=U.length;yt<bt;yt++){let I=U[yt];M=M.concat(I)}function R(yt,bt,I){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(bt,I)}let P=M.length,$=O.length;function N(yt,bt,I){let Wt,Tt,wt,mt=yt.x-bt.x,Ft=yt.y-bt.y,Xt=I.x-yt.x,E=I.y-yt.y,v=mt*mt+Ft*Ft,Z=mt*E-Ft*Xt;if(Math.abs(Z)>Number.EPSILON){let ct=Math.sqrt(v),vt=Math.sqrt(Xt*Xt+E*E),ut=bt.x-Ft/ct,Ot=bt.y+mt/ct,zt=I.x-E/vt,Gt=I.y+Xt/vt,oe=((zt-ut)*E-(Gt-Ot)*Xt)/(mt*E-Ft*Xt);Wt=ut+mt*oe-yt.x,Tt=Ot+Ft*oe-yt.y;let Ut=Wt*Wt+Tt*Tt;if(Ut<=2)return new It(Wt,Tt);wt=Math.sqrt(Ut/2)}else{let ct=!1;mt>Number.EPSILON?Xt>Number.EPSILON&&(ct=!0):mt<-Number.EPSILON?Xt<-Number.EPSILON&&(ct=!0):Math.sign(Ft)===Math.sign(E)&&(ct=!0),ct?(Wt=-Ft,Tt=mt,wt=Math.sqrt(v)):(Wt=mt,Tt=Ft,wt=Math.sqrt(v/2))}return new It(Wt/wt,Tt/wt)}let j=[];for(let yt=0,bt=V.length,I=bt-1,Wt=yt+1;yt<bt;yt++,I++,Wt++)I===bt&&(I=0),Wt===bt&&(Wt=0),j[yt]=N(V[yt],V[I],V[Wt]);let dt=[],it,rt=j.concat();for(let yt=0,bt=U.length;yt<bt;yt++){let I=U[yt];it=[];for(let Wt=0,Tt=I.length,wt=Tt-1,mt=Wt+1;Wt<Tt;Wt++,wt++,mt++)wt===Tt&&(wt=0),mt===Tt&&(mt=0),it[Wt]=N(I[Wt],I[wt],I[mt]);dt.push(it),rt=rt.concat(it)}for(let yt=0;yt<m;yt++){let bt=yt/m,I=p*Math.cos(bt*Math.PI/2),Wt=g*Math.sin(bt*Math.PI/2)+y;for(let Tt=0,wt=V.length;Tt<wt;Tt++){let mt=R(V[Tt],j[Tt],Wt);lt(mt.x,mt.y,-I)}for(let Tt=0,wt=U.length;Tt<wt;Tt++){let mt=U[Tt];it=dt[Tt];for(let Ft=0,Xt=mt.length;Ft<Xt;Ft++){let E=R(mt[Ft],it[Ft],Wt);lt(E.x,E.y,-I)}}}let ft=g+y;for(let yt=0;yt<P;yt++){let bt=d?R(M[yt],rt[yt],ft):M[yt];x?(F.copy(q.normals[0]).multiplyScalar(bt.x),k.copy(q.binormals[0]).multiplyScalar(bt.y),z.copy(b[0]).add(F).add(k),lt(z.x,z.y,z.z)):lt(bt.x,bt.y,0)}for(let yt=1;yt<=h;yt++)for(let bt=0;bt<P;bt++){let I=d?R(M[bt],rt[bt],ft):M[bt];x?(F.copy(q.normals[yt]).multiplyScalar(I.x),k.copy(q.binormals[yt]).multiplyScalar(I.y),z.copy(b[yt]).add(F).add(k),lt(z.x,z.y,z.z)):lt(I.x,I.y,u/h*yt)}for(let yt=m-1;yt>=0;yt--){let bt=yt/m,I=p*Math.cos(bt*Math.PI/2),Wt=g*Math.sin(bt*Math.PI/2)+y;for(let Tt=0,wt=V.length;Tt<wt;Tt++){let mt=R(V[Tt],j[Tt],Wt);lt(mt.x,mt.y,u+I)}for(let Tt=0,wt=U.length;Tt<wt;Tt++){let mt=U[Tt];it=dt[Tt];for(let Ft=0,Xt=mt.length;Ft<Xt;Ft++){let E=R(mt[Ft],it[Ft],Wt);x?lt(E.x,E.y+b[h-1].y,b[h-1].x+I):lt(E.x,E.y,u+I)}}}G(),tt();function G(){let yt=s.length/3;if(d){let bt=0,I=P*bt;for(let Wt=0;Wt<$;Wt++){let Tt=O[Wt];Dt(Tt[2]+I,Tt[1]+I,Tt[0]+I)}bt=h+m*2,I=P*bt;for(let Wt=0;Wt<$;Wt++){let Tt=O[Wt];Dt(Tt[0]+I,Tt[1]+I,Tt[2]+I)}}else{for(let bt=0;bt<$;bt++){let I=O[bt];Dt(I[2],I[1],I[0])}for(let bt=0;bt<$;bt++){let I=O[bt];Dt(I[0]+P*h,I[1]+P*h,I[2]+P*h)}}n.addGroup(yt,s.length/3-yt,0)}function tt(){let yt=s.length/3,bt=0;Mt(V,bt),bt+=V.length;for(let I=0,Wt=U.length;I<Wt;I++){let Tt=U[I];Mt(Tt,bt),bt+=Tt.length}n.addGroup(yt,s.length/3-yt,1)}function Mt(yt,bt){let I=yt.length;for(;--I>=0;){let Wt=I,Tt=I-1;Tt<0&&(Tt=yt.length-1);for(let wt=0,mt=h+m*2;wt<mt;wt++){let Ft=P*wt,Xt=P*(wt+1),E=bt+Wt+Ft,v=bt+Tt+Ft,Z=bt+Tt+Xt,ct=bt+Wt+Xt;_t(E,v,Z,ct)}}}function lt(yt,bt,I){l.push(yt),l.push(bt),l.push(I)}function Dt(yt,bt,I){Ct(yt),Ct(bt),Ct(I);let Wt=s.length/3,Tt=S.generateTopUV(n,s,Wt-3,Wt-2,Wt-1);jt(Tt[0]),jt(Tt[1]),jt(Tt[2])}function _t(yt,bt,I,Wt){Ct(yt),Ct(bt),Ct(Wt),Ct(bt),Ct(I),Ct(Wt);let Tt=s.length/3,wt=S.generateSideWallUV(n,s,Tt-6,Tt-3,Tt-2,Tt-1);jt(wt[0]),jt(wt[1]),jt(wt[3]),jt(wt[1]),jt(wt[2]),jt(wt[3])}function Ct(yt){s.push(l[yt*3+0]),s.push(l[yt*3+1]),s.push(l[yt*3+2])}function jt(yt){r.push(yt.x),r.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new i(n,t.options)}},c_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new It(r,o),new It(a,l),new It(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new It(o,1-l),new It(c,1-u),new It(d,1-g),new It(y,1-f)]:[new It(a,1-l),new It(h,1-u),new It(p,1-g),new It(m,1-f)]}};function h_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ur=class i extends Xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var dr=class i extends ke{constructor(t=new di([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Ai.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let S=g[m];Ai.isClockWise(S)===!0&&(g[m]=S.reverse())}let y=Ai.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let S=g[m];p=p.concat(S)}for(let m=0,f=p.length;m<f;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,f=y.length;m<f;m++){let S=y[m],b=S[0]+u,x=S[1]+u,q=S[2]+u;n.push(b,x,q),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return u_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function u_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ao=class extends ke{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new A,r=new A;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,y=d+p;g<y;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),S=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,S),zh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),zh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Me(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function zh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var $e=class extends Ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ro=class extends $e{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Co=class extends Ci{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function d_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends Ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hc:r=t,a=2*e-n;break;case Vc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hc:o=t,l=2*n-e;break;case Vc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let q=0;q!==a;++q)r[q]=f*o[h+q]+S*o[c+q]+b*o[l+q]+x*o[u+q];return r}},Zl=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Jl=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&d_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=yl;var Xi=class extends zn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ro;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends zn{};Kl.prototype.ValueTypeName="color";var jl=class extends zn{};jl.prototype.ValueTypeName="number";var Ql=class extends Ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Po=class extends zn{InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends zn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ro;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends zn{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},f_=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Io=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},La=new Ee,Hh=new A,Vh=new A,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ic=class extends fr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ts*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},pr=class extends Us{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gh=new Ee,Js=new A,Ua=new A,sc=class extends fr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Ua.copy(n.position),Ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ua),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},Yi=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rc=class extends fr{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Do=class extends ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Mc="\\[\\]\\.:\\/",p_=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",m_="[^"+Mc.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",Sc),__=/(WCOD+)?/.source.replace("WCOD",m_),x_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),v_=new RegExp("^"+g_+__+x_+y_+"$"),M_=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(t){let e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);M_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=oc;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ox=new Float32Array(1);var $i=class extends Fl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Wh=new Ee,gr=class{constructor(t,e,n=0,s=1/0){this.ray=new As(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(t,e=!0,n=[]){return ac(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ac(t[s],this,n,e);return n.sort(Xh),n}};function Xh(i,t){return i.distance-t.distance}function ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ac(r[o],t,e,!0)}}var fi=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qh=new A,Qr=new A,Lo=class{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qh.subVectors(t,this.start),Qr.subVectors(this.end,this.start);let n=Qr.dot(Qr),r=Qr.dot(qh)/n;return e&&(r=Fe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Uo=class extends ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var gu={type:"change"},wc={type:"start"},xu={type:"end"},Vo=new As,_u=new Un,S_=Math.cos(70*pi.DEG2RAD),Ge=new A,yn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6,Go=class extends Uo{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Fn,this._lastTargetPosition=new A,this._quat=new Fn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fi,this._sphericalDelta=new fi,this._scale=1,this._panOffset=new A,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new A,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w_.bind(this),this._onPointerDown=b_.bind(this),this._onPointerUp=E_.bind(this),this._onContextMenu=D_.bind(this),this._onMouseWheel=R_.bind(this),this._onKeyDown=C_.bind(this),this._onTouchStart=P_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=T_.bind(this),this._onMouseMove=A_.bind(this),this._interceptControlDown=L_.bind(this),this._interceptControlUp=U_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gu),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ge.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<S_?this.object.lookAt(this.target):(_u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(_u,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function b_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function w_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function T_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case qn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case qn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(wc)}function A_(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function R_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(wc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xu))}function C_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function P_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case Yn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Yn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(wc)}function I_(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function D_(i){this.enabled!==!1&&i.preventDefault()}function L_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wo=class extends Is{constructor(){super();let t=new ze;t.deleteAttribute("uv");let e=new $e({side:on}),n=new $e,s=new Yi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new de(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new de(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new de(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new de(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new de(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new de(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new de(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new de(t,Fs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new de(t,Fs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new de(t,Fs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new de(t,Fs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new de(t,Fs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new de(t,Fs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Fs(i){let t=new Rs;return t.color.setScalar(i),t}var yu=new mn,Xo=new A,Bs=class extends Do{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Me(t,3)),this.setAttribute("uv",new Me(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new $i(e,6,1);return this.setAttribute("instanceStart",new Xn(n,3,0)),this.setAttribute("instanceEnd",new Xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new $i(e,6,1);return this.setAttribute("instanceColorStart",new Xn(n,3,0)),this.setAttribute("instanceColorEnd",new Xn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ao(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),yu.setFromBufferAttribute(e),this.boundingBox.union(yu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xo)),Xo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};Zt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new It(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};dn.line={uniforms:Bo.merge([Zt.common,Zt.fog,Zt.line]),vertexShader:`
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
		`};var ks=class extends Tn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Bo.clone(dn.line.uniforms),vertexShader:dn.line.vertexShader,fragmentShader:dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ec=new ue,vu=new A,Mu=new A,tn=new ue,en=new ue,$n=new ue,Tc=new A,Ac=new Ee,nn=new Lo,Su=new A,qo=new mn,Yo=new ui,Zn=new ue,Jn,Zi;function bu(i,t,e){return Zn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zn.multiplyScalar(1/Zn.w),Zn.x=Zi/e.width,Zn.y=Zi/e.height,Zn.applyMatrix4(i.projectionMatrixInverse),Zn.multiplyScalar(1/Zn.w),Math.abs(Math.max(Zn.x,Zn.y))}function N_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){nn.start.fromBufferAttribute(s,a),nn.end.fromBufferAttribute(r,a),nn.applyMatrix4(e);let c=new A,h=new A;Jn.distanceSqToSegment(nn.start,nn.end,h,c),h.distanceTo(c)<Zi*.5&&t.push({point:h,pointOnLine:c,distance:Jn.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function O_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-t.near;Jn.at(1,$n),$n.w=1,$n.applyMatrix4(t.matrixWorldInverse),$n.applyMatrix4(n),$n.multiplyScalar(1/$n.w),$n.x*=r.x/2,$n.y*=r.y/2,$n.z=0,Tc.copy($n),Ac.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(tn.fromBufferAttribute(l,d),en.fromBufferAttribute(c,d),tn.w=1,en.w=1,tn.applyMatrix4(Ac),en.applyMatrix4(Ac),tn.z>u&&en.z>u)continue;if(tn.z>u){let b=tn.z-en.z,x=(tn.z-u)/b;tn.lerp(en,x)}else if(en.z>u){let b=en.z-tn.z,x=(en.z-u)/b;en.lerp(tn,x)}tn.applyMatrix4(n),en.applyMatrix4(n),tn.multiplyScalar(1/tn.w),en.multiplyScalar(1/en.w),tn.x*=r.x/2,tn.y*=r.y/2,en.x*=r.x/2,en.y*=r.y/2,nn.start.copy(tn),nn.start.z=0,nn.end.copy(en),nn.end.z=0;let y=nn.closestPointToPointParameter(Tc,!0);nn.at(y,Su);let m=pi.lerp(tn.z,en.z,y),f=m>=-1&&m<=1,S=Tc.distanceTo(Su)<Zi*.5;if(f&&S){nn.start.fromBufferAttribute(l,d),nn.end.fromBufferAttribute(c,d),nn.start.applyMatrix4(o),nn.end.applyMatrix4(o);let b=new A,x=new A;Jn.distanceSqToSegment(nn.start,nn.end,x,b),e.push({point:x,pointOnLine:b,distance:Jn.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var $o=class extends de{constructor(t=new Bs,e=new ks({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)vu.fromBufferAttribute(e,o),Mu.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+vu.distanceTo(Mu);let r=new $i(s,2,1);return t.setAttribute("instanceDistanceStart",new Xn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Jn=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Zi=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Yo.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Zi*.5;else{let u=Math.max(s.near,Yo.distanceToPoint(Jn.origin));c=bu(s,u,l.resolution)}if(Yo.radius+=c,Jn.intersectsSphere(Yo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),qo.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Zi*.5;else{let u=Math.max(s.near,qo.distanceToPoint(Jn.origin));h=bu(s,u,l.resolution)}qo.expandByScalar(h),Jn.intersectsBox(qo)!==!1&&(n?N_(this,e):O_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ec),this.material.uniforms.resolution.value.set(Ec.z,Ec.w))}};var Ji={source:"https://www.oecogardenrooms.co.uk/garden-rooms.html (configurator: shape, size, style steps) and https://www.oecogardenrooms.co.uk/pages/optional-extras.html",verifiedAt:"2026-10-13T06:38:23.344019+00:00",styles:["thermo-contemporary","thermo-classic","smoothgrain","woodgrain","cedar-contemporary","cedar-classic"],prices:{cube:[[2.5,2.5,16524,16524,16638,16980,17778,17778],[3,2.5,17322,17322,17550,17892,18804,18804],[3,3,18462,18462,18576,19032,19944,19944],[3,3.5,19146,19146,19260,19716,20742,20742],[3,4,19944,19944,20172,20628,21768,21768],[3,4.5,20856,20856,21084,21540,22794,22794],[3,5,21654,21654,21996,22566,23820,23820],[3.5,2.5,18234,18234,18462,18804,19716,19716],[3.5,3,19146,19146,19374,19830,20856,20856],[3.5,3.5,20058,20058,20286,20742,21882,21882],[3.5,4,20970,20970,21198,21768,22908,22908],[3.5,4.5,22224,22224,22452,23022,24276,24276],[3.5,5,23478,23478,23706,24276,25644,25644],[4,2.5,19146,19146,19260,19716,20742,20742],[4,3,20058,20058,20286,20742,21882,21882],[4,3.5,21084,21084,21312,21768,23022,23022],[4,4,22680,22680,22908,23478,24732,24732],[4,4.5,23934,23934,24162,24732,26214,26214],[4,5,25188,25188,25530,26100,27582,27582],[4.5,2.5,19716,19716,19944,20400,21540,21540],[4.5,3,20970,20970,21198,21768,22908,22908],[4.5,3.5,22338,22338,22566,23136,24390,24390],[4.5,4,23934,23934,24276,24846,26214,26214],[4.5,4.5,25644,25644,25872,26556,28038,28038],[4.5,5,26898,26898,27240,27924,29520,29520],[5,2.5,20514,20514,20742,21312,22452,22452],[5,3,21882,21882,22224,22794,24048,24048],[5,3.5,23592,23592,23934,24504,25872,25872],[5,4,25302,25302,25644,26214,27696,27696],[5,4.5,27012,27012,27354,27924,29520,29520],[5,5,28722,28722,28950,29748,31344,31344],[5.5,2.5,21426,21426,21654,22224,23478,23478],[5.5,3,23136,23136,23478,24048,25416,25416],[5.5,3.5,24846,24846,25188,25872,27240,27240],[5.5,4,26898,26898,27240,27924,29520,29520],[5.5,4.5,28380,28380,28722,29406,31116,31116],[5.5,5,30432,30432,30774,31572,33282,33282],[6,2.5,21996,21996,22224,22794,24276,24276],[6,3,24390,24390,24732,25302,26784,26784],[6,3.5,26442,26442,26784,27468,29064,29064],[6,4,27924,27924,28266,29064,30660,30660],[6,4.5,30090,30090,30432,31116,32940,32940],[6,5,32712,32712,33168,33966,35790,35790],[6.5,2.5,23478,23478,23820,24390,25872,25872],[6.5,3,25302,25302,25644,26328,27810,27810],[6.5,3.5,27468,27468,27810,28494,30204,30204],[6.5,4,29634,29634,29976,30660,32484,32484],[6.5,4.5,31800,31800,32142,32940,34764,34764],[7,2.5,24390,24390,24618,25302,26898,26898],[7,3,26898,26898,27240,27924,29520,29520],[7,3.5,28722,28722,29064,29862,31572,31572],[7,4,31230,31230,31572,32370,34308,34308],[7,4.5,33396,33396,33852,34650,36588,36588],[7.5,2.5,25188,25188,25530,26214,27924,27924],[7.5,3,27810,27810,28152,28836,30660,30660],[7.5,3.5,29976,29976,30432,31230,33054,33054],[7.5,4,32598,32598,32940,33852,35676,35676],[8,2.5,26100,26100,26442,27126,28950,28950],[8,3,28722,28722,29064,29862,31686,31686],[8,3.5,31116,31116,31572,32370,34308,34308],[8,4,34536,34536,34992,35790,37842,37842],[8.5,2.5,27582,27582,27924,28722,30546,30546],[8.5,3,29976,29976,30318,31116,33054,33054],[8.5,3.5,32598,32598,33054,33852,35904,35904],[9,2.5,28494,28494,28836,29634,31572,31572],[9,3,31116,31116,31572,32370,34422,34422],[9,3.5,34194,34194,34650,35562,37614,37614],[9.5,2.5,29064,29064,29406,30318,32256,32256],[9.5,3,32370,32370,32826,33738,35790,35790],[10,2.5,30204,30204,30660,31458,33624,33624],[10,3,33624,33624,34080,34992,37158,37158]],canopy:[[2.5,2.5,17208,17208,17322,17664,18462,18462],[3,2.5,18063,18063,18291,18633,19545,19545],[3,3,19203,19203,19317,19773,20685,20685],[3,3.5,19887,19887,20001,20457,21483,21483],[3,4,20685,20685,20913,21369,22509,22509],[3,4.5,21597,21597,21825,22281,23535,23535],[3,5,22395,22395,22737,23307,24561,24561],[3.5,2.5,19032,19032,19260,19602,20514,20514],[3.5,3,19944,19944,20172,20628,21654,21654],[3.5,3.5,20856,20856,21084,21540,22680,22680],[3.5,4,21768,21768,21996,22566,23706,23706],[3.5,4.5,23022,23022,23250,23820,25074,25074],[3.5,5,24276,24276,24504,25074,26442,26442],[4,2.5,20001,20001,20115,20571,21597,21597],[4,3,20913,20913,21141,21597,22737,22737],[4,3.5,21939,21939,22167,22623,23877,23877],[4,4,23535,23535,23763,24333,25587,25587],[4,4.5,24789,24789,25017,25587,27069,27069],[4,5,26043,26043,26385,26955,28437,28437],[4.5,2.5,20628,20628,20856,21312,22452,22452],[4.5,3,21882,21882,22110,22680,23820,23820],[4.5,3.5,23250,23250,23478,24048,25302,25302],[4.5,4,24846,24846,25188,25758,27126,27126],[4.5,4.5,26556,26556,26784,27468,28950,28950],[4.5,5,27810,27810,28152,28836,30432,30432],[5,2.5,21483,21483,21711,22281,23421,23421],[5,3,22851,22851,23193,23763,25017,25017],[5,3.5,24561,24561,24903,25473,26841,26841],[5,4,26271,26271,26613,27183,28665,28665],[5,4.5,27981,27981,28323,28893,30489,30489],[5,5,29691,29691,29919,30717,32313,32313],[5.5,2.5,22452,22452,22680,23250,24504,24504],[5.5,3,24162,24162,24504,25074,26442,26442],[5.5,3.5,25872,25872,26214,26898,28266,28266],[5.5,4,27924,27924,28266,28950,30546,30546],[5.5,4.5,29406,29406,29748,30432,32142,32142],[5.5,5,31458,31458,31800,32598,34308,34308],[6,2.5,23079,23079,23307,23877,25359,25359],[6,3,25473,25473,25815,26385,27867,27867],[6,3.5,27525,27525,27867,28551,30147,30147],[6,4,29007,29007,29349,30147,31743,31743],[6,4.5,31173,31173,31515,32199,34023,34023],[6,5,33795,33795,34251,35049,36873,36873],[6.5,2.5,24618,24618,24960,25530,27012,27012],[6.5,3,26442,26442,26784,27468,28950,28950],[6.5,3.5,28608,28608,28950,29634,31344,31344],[6.5,4,30774,30774,31116,31800,33624,33624],[6.5,4.5,32940,32940,33282,34080,35904,35904],[7,2.5,25587,25587,25815,26499,28095,28095],[7,3,28095,28095,28437,29121,30717,30717],[7,3.5,29919,29919,30261,31059,32769,32769],[7,4,32427,32427,32769,33567,35505,35505],[7,4.5,34593,34593,35049,35847,37785,37785],[7.5,2.5,26442,26442,26784,27468,29178,29178],[7.5,3,29064,29064,29406,30090,31914,31914],[7.5,3.5,31230,31230,31686,32484,34308,34308],[7.5,4,33852,33852,34194,35106,36930,36930],[8,2.5,27411,27411,27753,28437,30261,30261],[8,3,30033,30033,30375,31173,32997,32997],[8,3.5,32427,32427,32883,33681,35619,35619],[8,4,35847,35847,36303,37101,39153,39153],[8.5,2.5,28950,28950,29292,30090,31914,31914],[8.5,3,31344,31344,31686,32484,34422,34422],[8.5,3.5,33966,33966,34422,35220,37272,37272],[9,2.5,29919,29919,30261,31059,32997,32997],[9,3,32541,32541,32997,33795,35847,35847],[9,3.5,35619,35619,36075,36987,39039,39039],[9.5,2.5,30546,30546,30888,31800,33738,33738],[9.5,3,33852,33852,34308,35220,37272,37272],[10,2.5,31743,31743,32199,32997,35163,35163],[10,3,35163,35163,35619,36531,38697,38697]],corner:[[2.5,2.5,17322,17322,17436,17778,18576,18576],[3,2.5,18120,18120,18348,18690,19602,19602],[3,3,19260,19260,19374,19830,20742,20742],[3,3.5,19944,19944,20058,20514,21540,21540],[3,4,20742,20742,20970,21426,22566,22566],[3,4.5,21654,21654,21882,22338,23592,23592],[3,5,22452,22452,22794,23364,24618,24618],[3.5,2.5,19032,19032,19260,19602,20514,20514],[3.5,3,19944,19944,20172,20628,21654,21654],[3.5,3.5,20856,20856,21084,21540,22680,22680],[3.5,4,21768,21768,21996,22566,23706,23706],[3.5,4.5,23022,23022,23250,23820,25074,25074],[3.5,5,24276,24276,24504,25074,26442,26442],[4,2.5,19944,19944,20058,20514,21540,21540],[4,3,20856,20856,21084,21540,22680,22680],[4,3.5,21882,21882,22110,22566,23820,23820],[4,4,23478,23478,23706,24276,25530,25530],[4,4.5,24732,24732,24960,25530,27012,27012],[4,5,25986,25986,26328,26898,28380,28380],[4.5,2.5,20514,20514,20742,21198,22338,22338],[4.5,3,21768,21768,21996,22566,23706,23706],[4.5,3.5,23136,23136,23364,23934,25188,25188],[4.5,4,24732,24732,25074,25644,27012,27012],[4.5,4.5,26442,26442,26670,27354,28836,28836],[4.5,5,27696,27696,28038,28722,30318,30318],[5,2.5,21312,21312,21540,22110,23250,23250],[5,3,22680,22680,23022,23592,24846,24846],[5,3.5,24390,24390,24732,25302,26670,26670],[5,4,26100,26100,26442,27012,28494,28494],[5,4.5,27810,27810,28152,28722,30318,30318],[5,5,29520,29520,29748,30546,32142,32142],[5.5,2.5,22224,22224,22452,23022,24276,24276],[5.5,3,23934,23934,24276,24846,26214,26214],[5.5,3.5,25644,25644,25986,26670,28038,28038],[5.5,4,27696,27696,28038,28722,30318,30318],[5.5,4.5,29178,29178,29520,30204,31914,31914],[5.5,5,31230,31230,31572,32370,34080,34080],[6,2.5,22794,22794,23022,23592,25074,25074],[6,3,25188,25188,25530,26100,27582,27582],[6,3.5,27240,27240,27582,28266,29862,29862],[6,4,28722,28722,29064,29862,31458,31458],[6,4.5,30888,30888,31230,31914,33738,33738],[6,5,33510,33510,33966,34764,36588,36588],[6.5,2.5,24276,24276,24618,25188,26670,26670],[6.5,3,26100,26100,26442,27126,28608,28608],[6.5,3.5,28266,28266,28608,29292,31002,31002],[6.5,4,30432,30432,30774,31458,33282,33282],[6.5,4.5,32598,32598,32940,33738,35562,35562],[7,2.5,25188,25188,25416,26100,27696,27696],[7,3,27696,27696,28038,28722,30318,30318],[7,3.5,29520,29520,29862,30660,32370,32370],[7,4,32028,32028,32370,33168,35106,35106],[7,4.5,34194,34194,34650,35448,37386,37386],[7.5,2.5,25986,25986,26328,27012,28722,28722],[7.5,3,28608,28608,28950,29634,31458,31458],[7.5,3.5,30774,30774,31230,32028,33852,33852],[7.5,4,33396,33396,33738,34650,36474,36474],[8,2.5,26898,26898,27240,27924,29748,29748],[8,3,29520,29520,29862,30660,32484,32484],[8,3.5,31914,31914,32370,33168,35106,35106],[8,4,35334,35334,35790,36588,38640,38640],[8.5,2.5,28380,28380,28722,29520,31344,31344],[8.5,3,30774,30774,31116,31914,33852,33852],[8.5,3.5,33396,33396,33852,34650,36702,36702],[9,2.5,29292,29292,29634,30432,32370,32370],[9,3,31914,31914,32370,33168,35220,35220],[9,3.5,34992,34992,35448,36360,38412,38412],[9.5,2.5,29862,29862,30204,31116,33054,33054],[9.5,3,33168,33168,33624,34536,36588,36588],[10,2.5,31002,31002,31458,32256,34422,34422],[10,3,34422,34422,34878,35790,37956,37956]],concave:[[2.5,2.5,18006,18006,18120,18576,19488,19488],[3,2.5,18861,18861,19089,19545,20571,20571],[3,3,20001,20001,20115,20685,21711,21711],[3,3.5,20685,20685,20799,21369,22509,22509],[3,4,21483,21483,21711,22281,23535,23535],[3,4.5,22395,22395,22623,23193,24561,24561],[3,5,23193,23193,23535,24219,25587,25587],[3.5,2.5,19830,19830,20058,20514,21540,21540],[3.5,3,20742,20742,20970,21540,22680,22680],[3.5,3.5,21654,21654,21882,22452,23706,23706],[3.5,4,22566,22566,22794,23478,24732,24732],[3.5,4.5,23820,23820,24048,24732,26100,26100],[3.5,5,25074,25074,25302,25986,27468,27468],[4,2.5,20799,20799,20913,21483,22623,22623],[4,3,21711,21711,21939,22509,23763,23763],[4,3.5,22737,22737,22965,23535,24903,24903],[4,4,24333,24333,24561,25245,26613,26613],[4,4.5,25587,25587,25815,26499,28095,28095],[4,5,26841,26841,27183,27867,29463,29463],[4.5,2.5,21426,21426,21654,22224,23478,23478],[4.5,3,22680,22680,22908,23592,24846,24846],[4.5,3.5,24048,24048,24276,24960,26328,26328],[4.5,4,25644,25644,25986,26670,28152,28152],[4.5,4.5,27354,27354,27582,28380,29976,29976],[4.5,5,28608,28608,28950,29748,31458,31458],[5,2.5,22281,22281,22509,23193,24447,24447],[5,3,23649,23649,23991,24675,26043,26043],[5,3.5,25359,25359,25701,26385,27867,27867],[5,4,27069,27069,27411,28095,29691,29691],[5,4.5,28779,28779,29121,29805,31515,31515],[5,5,30489,30489,30717,31629,33339,33339],[5.5,2.5,23250,23250,23478,24162,25530,25530],[5.5,3,24960,24960,25302,25986,27468,27468],[5.5,3.5,26670,26670,27012,27810,29292,29292],[5.5,4,28722,28722,29064,29862,31572,31572],[5.5,4.5,30204,30204,30546,31344,33168,33168],[5.5,5,32256,32256,32598,33510,35334,35334],[6,2.5,23877,23877,24105,24789,26385,26385],[6,3,26271,26271,26613,27297,28893,28893],[6,3.5,28323,28323,28665,29463,31173,31173],[6,4,29805,29805,30147,31059,32769,32769],[6,4.5,31971,31971,32313,33111,35049,35049],[6,5,34593,34593,35049,35961,37899,37899],[6.5,2.5,25416,25416,25758,26442,28038,28038],[6.5,3,27240,27240,27582,28380,29976,29976],[6.5,3.5,29406,29406,29748,30546,32370,32370],[6.5,4,31572,31572,31914,32712,34650,34650],[6.5,4.5,33738,33738,34080,34992,36930,36930],[7,2.5,26385,26385,26613,27411,29121,29121],[7,3,28893,28893,29235,30033,31743,31743],[7,3.5,30717,30717,31059,31971,33795,33795],[7,4,33225,33225,33567,34479,36531,36531],[7,4.5,35391,35391,35847,36759,38811,38811],[7.5,2.5,27240,27240,27582,28380,30204,30204],[7.5,3,29862,29862,30204,31002,32940,32940],[7.5,3.5,32028,32028,32484,33396,35334,35334],[7.5,4,34650,34650,34992,36018,37956,37956],[8,2.5,28209,28209,28551,29349,31287,31287],[8,3,30831,30831,31173,32085,34023,34023],[8,3.5,33225,33225,33681,34593,36645,36645],[8,4,36645,36645,37101,38013,40179,40179],[8.5,2.5,29748,29748,30090,31002,32940,32940],[8.5,3,32142,32142,32484,33396,35448,35448],[8.5,3.5,34764,34764,35220,36132,38298,38298],[9,2.5,30717,30717,31059,31971,34023,34023],[9,3,33339,33339,33795,34707,36873,36873],[9,3.5,36417,36417,36873,37899,40065,40065],[9.5,2.5,31344,31344,31686,32712,34764,34764],[9.5,3,34650,34650,35106,36132,38298,38298],[10,2.5,32541,32541,32997,33909,36189,36189],[10,3,35961,35961,36417,37443,39723,39723]],"canopy-corner":[[2.5,2.5,18006,18006,18120,18462,19260,19260],[3,2.5,18861,18861,19089,19431,20343,20343],[3,3,20001,20001,20115,20571,21483,21483],[3,3.5,20685,20685,20799,21255,22281,22281],[3,4,21483,21483,21711,22167,23307,23307],[3,4.5,22395,22395,22623,23079,24333,24333],[3,5,23193,23193,23535,24105,25359,25359],[3.5,2.5,19830,19830,20058,20400,21312,21312],[3.5,3,20742,20742,20970,21426,22452,22452],[3.5,3.5,21654,21654,21882,22338,23478,23478],[3.5,4,22566,22566,22794,23364,24504,24504],[3.5,4.5,23820,23820,24048,24618,25872,25872],[3.5,5,25074,25074,25302,25872,27240,27240],[4,2.5,20799,20799,20913,21369,22395,22395],[4,3,21711,21711,21939,22395,23535,23535],[4,3.5,22737,22737,22965,23421,24675,24675],[4,4,24333,24333,24561,25131,26385,26385],[4,4.5,25587,25587,25815,26385,27867,27867],[4,5,26841,26841,27183,27753,29235,29235],[4.5,2.5,21426,21426,21654,22110,23250,23250],[4.5,3,22680,22680,22908,23478,24618,24618],[4.5,3.5,24048,24048,24276,24846,26100,26100],[4.5,4,25644,25644,25986,26556,27924,27924],[4.5,4.5,27354,27354,27582,28266,29748,29748],[4.5,5,28608,28608,28950,29634,31230,31230],[5,2.5,22281,22281,22509,23079,24219,24219],[5,3,23649,23649,23991,24561,25815,25815],[5,3.5,25359,25359,25701,26271,27639,27639],[5,4,27069,27069,27411,27981,29463,29463],[5,4.5,28779,28779,29121,29691,31287,31287],[5,5,30489,30489,30717,31515,33111,33111],[5.5,2.5,23250,23250,23478,24048,25302,25302],[5.5,3,24960,24960,25302,25872,27240,27240],[5.5,3.5,26670,26670,27012,27696,29064,29064],[5.5,4,28722,28722,29064,29748,31344,31344],[5.5,4.5,30204,30204,30546,31230,32940,32940],[5.5,5,32256,32256,32598,33396,35106,35106],[6,2.5,23877,23877,24105,24675,26157,26157],[6,3,26271,26271,26613,27183,28665,28665],[6,3.5,28323,28323,28665,29349,30945,30945],[6,4,29805,29805,30147,30945,32541,32541],[6,4.5,31971,31971,32313,32997,34821,34821],[6,5,34593,34593,35049,35847,37671,37671],[6.5,2.5,25416,25416,25758,26328,27810,27810],[6.5,3,27240,27240,27582,28266,29748,29748],[6.5,3.5,29406,29406,29748,30432,32142,32142],[6.5,4,31572,31572,31914,32598,34422,34422],[6.5,4.5,33738,33738,34080,34878,36702,36702],[7,2.5,26385,26385,26613,27297,28893,28893],[7,3,28893,28893,29235,29919,31515,31515],[7,3.5,30717,30717,31059,31857,33567,33567],[7,4,33225,33225,33567,34365,36303,36303],[7,4.5,35391,35391,35847,36645,38583,38583],[7.5,2.5,27240,27240,27582,28266,29976,29976],[7.5,3,29862,29862,30204,30888,32712,32712],[7.5,3.5,32028,32028,32484,33282,35106,35106],[7.5,4,34650,34650,34992,35904,37728,37728],[8,2.5,28209,28209,28551,29235,31059,31059],[8,3,30831,30831,31173,31971,33795,33795],[8,3.5,33225,33225,33681,34479,36417,36417],[8,4,36645,36645,37101,37899,39951,39951],[8.5,2.5,29748,29748,30090,30888,32712,32712],[8.5,3,32142,32142,32484,33282,35220,35220],[8.5,3.5,34764,34764,35220,36018,38070,38070],[9,2.5,30717,30717,31059,31857,33795,33795],[9,3,33339,33339,33795,34593,36645,36645],[9,3.5,36417,36417,36873,37785,39837,39837],[9.5,2.5,31344,31344,31686,32598,34536,34536],[9.5,3,34650,34650,35106,36018,38070,38070],[10,2.5,32541,32541,32997,33795,35961,35961],[10,3,35961,35961,36417,37329,39495,39495]]},extras:[{name:"Electrical Connection",price:null,unit:null},{name:"Internal Recessed Downlights",price:null,unit:null},{name:"Canopy Roof Side Extension",price:null,unit:null},{name:"Double Socket - White",price:30,unit:"each"},{name:"Double Socket - Brushed Aluminium",price:35,unit:"each"},{name:"Canopy Roof Downlights",price:45,unit:"each"},{name:"External Up\\Down Lights",price:55,unit:"each"},{name:"External Waterproof Double Socket",price:105,unit:"each"},{name:"LED Ceiling Light Panel - 600mm x 600mm",price:145,unit:"each"},{name:"RGB LED Ceiling Light Panel - 600mm x 600mm",price:215,unit:"each"},{name:"LED Ceiling Light Panel - 1200mm x 600mm",price:245,unit:"each"},{name:"Electric Panel Heater",price:150,unit:"each"},{name:"Rainwater Butt",price:95,unit:"each"},{name:"Decking - Composite",price:195,unit:"m\xB2"},{name:"Internal Dividing Wall",price:95,unit:"m\xB2"},{name:"Internal Timber Door",price:495,unit:"each"},{name:"Acoustic Wall Panels",price:145,unit:null},{name:"Acoustic Plasterboard",price:20,unit:"m\xB2"},{name:"Acoustic Insulation",price:15,unit:"m\xB2"},{name:"Acoustic Glass",price:250,unit:"m\xB2"},{name:"Tall Fixed Glass Window Panel - 0.5m x 2.02m",price:325,unit:"each"},{name:"Tall Fixed Glass Window Panel - 0.75m x 2.02m",price:395,unit:"each"},{name:"Tall Fixed Glass Window Panel - 1.0m x 2.02m",price:485,unit:"each"},{name:"Wide Opening Window - 850mm x 400mm",price:325,unit:"each"},{name:"Wide Opening Window - 1200mm x 500mm",price:355,unit:"each"},{name:"Wide Opening Window - 1200mm x 750mm",price:395,unit:"each"},{name:"Tall Opening Window - 400mm x 1.6m",price:385,unit:"each"},{name:"Tall Opening Window - 750mm x 1.6m",price:485,unit:"each"},{name:"Panoramic Fixed Window - 2.02m x 500mm",price:325,unit:"each"},{name:"Single Door - 900mm x 2.02m",price:995,unit:"each"},{name:"Double Patio Doors - 1.5m x 2.02m",price:1625,unit:"each"},{name:"Sliding Patio Doors - 2.4m x 2.02m",price:1895,unit:"each"},{name:"Aluminium Bi-Folding Sliding Doors - 2.2m Wide",price:1495,unit:"upgrade"},{name:"Aluminium Bi-Folding Sliding Doors - 3.0m Wide",price:1695,unit:"upgrade"}]};var Mx=Ji.verifiedAt.slice(0,10),B_=Ji.styles,Ki={cube:{name:"Cube",tag:"Clean lines, a flush roof",canopy:0,corner:!1,porch:!1,description:"Oeco\u2019s simplest shape: a flat roof finished flush with the walls, a deep fascia band and the doors in the front wall.",highlights:["From \xA316,524","Flush roof edge"],photo:"cube"},canopy:{name:"Canopy",tag:"A roof canopy over the doors",canopy:.5,corner:!1,porch:!1,description:"The roof carries on over the doors as a canopy: shade, shelter, and room for canopy downlights in the soffit.",highlights:["From \xA317,208","Sheltered doors"],photo:"canopy"},corner:{name:"Corner",tag:"Glass round the front corner",canopy:0,corner:!0,porch:!1,description:"The main doors run to the front right corner and meet a tall glass panel in the side wall: light and views on two sides.",highlights:["From \xA317,322","Glass corner"],photo:"corner"},concave:{name:"Concave",tag:"A recessed front porch",canopy:.5,corner:!1,porch:!0,description:"Both side walls carry forward to the edge of the roof canopy, framing a sheltered porch in front of the doors.",highlights:["From \xA318,006","Framed porch"],photo:"concave"},"canopy-corner":{name:"Canopy Corner",tag:"Canopy and a glass corner",canopy:.5,corner:!0,porch:!1,description:"The canopy over the doors, and the glass corner: the main doors meet a tall glass panel round the front right corner.",highlights:["From \xA318,006","Canopy and glass corner"],photo:"canopy-corner"}};var xr=[...new Set(Ji.prices.cube.map(i=>i[0]))].sort((i,t)=>i-t),k_=Object.fromEntries(xr.map(i=>[i,Ji.prices.cube.filter(t=>t[0]===i).map(t=>t[1]).sort((t,e)=>t-e)])),z_={width:[xr[0],xr[xr.length-1]],depth:[2.5,5]};var Ce={wall:.16,roof:.145,floor:.178,base:.2,topFront:2.5,topBack:2.45,fascia:.18,trim:.1,post:.1},Rc={thermowood:{name:"Thermowood",note:"Heat-treated timber in a consistent brown; can be stained or painted",kind:"thermowood",hex:"#90653d",board:.13,dirs:["vertical","horizontal"],designs:["contemporary","classic"],packages:{contemporary:"thermo-contemporary",classic:"thermo-classic"},photo:"thermowood"},cedar:{name:"Western Red Cedar",note:"Rich browns, reds and pinks; vertical only",kind:"cedar",hex:"#b27a50",board:.125,dirs:["vertical"],designs:["contemporary","classic"],packages:{contemporary:"cedar-contemporary",classic:"cedar-classic"},photo:"cedar"},smooth:{name:"Composite Smoothgrain",note:"60% recycled hardwood fibres, 40% recycled plastic; no maintenance",kind:"smooth",board:.145,dirs:["vertical","horizontal"],designs:["contemporary"],packages:{contemporary:"smoothgrain"},colours:"smooth",photo:"charcoal"},woodgrain:{name:"Composite ProClad Woodgrain",note:"The look of timber with no upkeep",kind:"woodgrain",board:.145,dirs:["vertical","horizontal"],designs:["contemporary"],packages:{contemporary:"woodgrain"},colours:"woodgrain",photo:"sandstone"},fibre:{name:"Fibre cement",note:"Woodgrain fibre cement, horizontal only",kind:"fibre",board:.18,dirs:["horizontal"],designs:["contemporary"],packages:{},colours:"fibre",quoted:!0},stone:{name:"Natural stone",note:"Split-face stacked slate, horizontal only",kind:"stone",board:.1,dirs:["horizontal"],designs:["contemporary"],packages:{},colours:"stone",quoted:!0}};var wu=[["charcoal","Charcoal","#4a4a4a"],["light-grey","Light grey","#a7a8a4"],["redwood","Redwood","#8a4b36"],["olive","Olive green","#5f6648"],["ivory","Ivory","#d9d0b9"],["teak","Teak","#9c6b43"],["coffee","Coffee","#5b4535"]],Cc={smooth:Object.fromEntries(wu.map(([i,t,e])=>[i,{name:t,hex:e,status:i==="charcoal"?"included":"quoted"}])),woodgrain:{sandstone:{name:"Sandstone",hex:"#b59e7f",status:"included"},...Object.fromEntries(wu.map(([i,t,e])=>[i,{name:t,hex:e,status:"quoted"}]))},fibre:Object.fromEntries([["natural","Natural (unpainted)","#a9a69e"],["black","Black","#2c2c2d"],["cream","Cream","#e4d9bd"],["sage","Sage green","#9aa48a"],["blue","Blue","#4f6b84"],["granite","Granite","#6f7275"],["slate","Slate","#4f5559"],["light-grey","Light grey","#b9bcbc"],["white","White","#f0efea"]].map(([i,t,e])=>[i,{name:t,hex:e,status:"quoted"}])),stone:{slate:{name:"Dark grey slate",hex:"#4b4e52",status:"quoted"},rustic:{name:"Rustic multicolour slate",hex:"#8a7d6c",status:"quoted"}}};var yr="#383e42",vn=(i,t,e,n,s,r,o={})=>({name:i,group:t,w:e,h:n,sill:s,kind:r,...o}),gn={sliding:vn("Sliding patio doors","door",2.4,2.02,0,"sliding",{leaves:2,price:1895,source:"Sliding Patio Doors - 2.4m x 2.02m"}),patio:vn("Double patio doors","door",1.5,2.02,0,"patio",{leaves:2,price:1625,source:"Double Patio Doors - 1.5m x 2.02m"}),single:vn("Single door","door",.9,2.02,0,"hinged",{leaves:1,price:995,source:"Single Door - 900mm x 2.02m"}),bifold22:vn("Aluminium bi-folding doors, 2.2m","door",2.2,2.02,0,"folding",{leaves:3,upgrade:1495,alu:!0,source:"Aluminium Bi-Folding Sliding Doors - 2.2m Wide"}),bifold30:vn("Aluminium bi-folding doors, 3.0m","door",3,2.02,0,"folding",{leaves:4,upgrade:1695,alu:!0,source:"Aluminium Bi-Folding Sliding Doors - 3.0m Wide"}),wide1205:vn("Wide opening window, 1200 \xD7 500mm","window",1.2,.5,1.52,"top",{price:355,source:"Wide Opening Window - 1200mm x 500mm"}),wide1275:vn("Wide opening window, 1200 \xD7 750mm","window",1.2,.75,1.27,"top",{price:395,source:"Wide Opening Window - 1200mm x 750mm"}),wide854:vn("Wide opening window, 850 \xD7 400mm","window",.85,.4,1.62,"top",{price:325,source:"Wide Opening Window - 850mm x 400mm",note:"Oeco gives its height as both 400mm and 500mm"}),tall416:vn("Tall opening window, 400 \xD7 1600mm","window",.4,1.6,.42,"tall",{price:385,source:"Tall Opening Window - 400mm x 1.6m"}),tall7516:vn("Tall opening window, 750 \xD7 1600mm","window",.75,1.6,.42,"tall",{price:485,source:"Tall Opening Window - 750mm x 1.6m"}),glass05:vn("Tall fixed glass panel, 0.5m","window",.5,2.02,0,"fixed",{price:325,source:"Tall Fixed Glass Window Panel - 0.5m x 2.02m"}),glass075:vn("Tall fixed glass panel, 0.75m","window",.75,2.02,0,"fixed",{price:395,source:"Tall Fixed Glass Window Panel - 0.75m x 2.02m"}),glass10:vn("Tall fixed glass panel, 1.0m","window",1,2.02,0,"fixed",{price:485,source:"Tall Fixed Glass Window Panel - 1.0m x 2.02m"}),panoramic:vn("Panoramic fixed window, 2.02m \xD7 500mm","window",2.02,.5,1,"fixed",{price:325,source:"Panoramic Fixed Window - 2.02m x 500mm"})};var Tu={ends:"2026-10-31",title:"Oeco\u2019s October offer",summary:"5% off, already in these prices, and ten free upgrades on orders placed before 31 October 2026",showroom:"\xA3250 showroom exclusive discount, on orders placed at Oeco\u2019s showroom before 31 October 2026"};var Eu=Object.fromEntries(Ji.extras.map(i=>[i.name,i])),Be=(i,t)=>{var e,n,s,r;return{source:i,price:(n=(e=Eu[i])==null?void 0:e.price)!=null?n:null,unit:(r=(s=Eu[i])==null?void 0:s.unit)!=null?r:null,...t}},H_={extraSockets:Be("Double Socket - White",{name:"Extra double sockets",kind:"count",max:8,offer:!0,note:"Four white double sockets come with every room",step:"interior"}),brushedSockets:Be("Double Socket - Brushed Aluminium",{name:"Brushed aluminium sockets",kind:"toggle",offer:!0,note:"Every socket in brushed aluminium instead of white",step:"interior"}),ledPanels:Be("LED Ceiling Light Panel - 600mm x 600mm",{name:"Extra LED ceiling panels, 600 \xD7 600mm",kind:"count",max:4,note:"For larger rooms, or each part of a divided room",step:"interior"}),rgbPanels:Be("RGB LED Ceiling Light Panel - 600mm x 600mm",{name:"RGB LED ceiling panels, 600 \xD7 600mm",kind:"count",max:4,note:"Colour sequences and 100% to 0% dimming by remote",step:"interior"}),widePanels:Be("LED Ceiling Light Panel - 1200mm x 600mm",{name:"LED ceiling panels, 1200 \xD7 600mm",kind:"count",max:4,note:"The larger slimline panel",step:"interior"}),downlights:Be("Internal Recessed Downlights",{name:"Recessed LED downlights",kind:"toggle",note:"Flush in the plastered ceiling; the ceiling drops 25mm",step:"interior"}),heaters:Be("Electric Panel Heater",{name:"Electric panel heaters, 1.5kW",kind:"count",max:3,offerFirst:!0,note:"Thermostat and thermal protection; wall mounted",step:"interior"}),dividingWall:Be("Internal Dividing Wall",{name:"Internal dividing wall",kind:"area",note:"Insulated, plastered both sides; position agreed on site",step:"interior"}),internalDoor:Be("Internal Timber Door",{name:"Internal oak timber door",kind:"toggle",note:"Oak panel door, frame, handles and lock, in the dividing wall",step:"interior"}),acousticPanels:Be("Acoustic Wall Panels",{name:"Acoustic wall panels",kind:"toggle",note:"Slatted panels on the back wall",step:"interior",quoted:!0}),acousticBoard:Be("Acoustic Plasterboard",{name:"Acoustic plasterboard",kind:"area",note:"15mm high-density acoustic plasterboard in the walls and ceiling",step:"interior"}),acousticInsulation:Be("Acoustic Insulation",{name:"Acoustic insulation (RS45 slab)",kind:"area",offer:!0,note:"Knauf acoustic slab in the walls and floor",step:"interior"}),acousticGlass:Be("Acoustic Glass",{name:"Acoustic glass",kind:"area",note:"In every door and window",step:"openings"}),upDownLights:Be("External Up\\Down Lights",{name:"Extra up and down wall lights",kind:"count",max:4,offer:!0,note:"Two come with every room, beside the doors",step:"exterior"}),outdoorSocket:Be("External Waterproof Double Socket",{name:"Outdoor waterproof double socket",kind:"count",max:2,offerFirst:!0,note:"IP66, RCD protected",step:"exterior"}),canopyLights:Be("Canopy Roof Downlights",{name:"Canopy downlights",kind:"toggle",offer:!0,note:"One per metre under the canopy, own switch",step:"exterior",needsCanopy:!0}),waterButt:Be("Rainwater Butt",{name:"100 litre water butt",kind:"toggle",offer:!0,note:"On the downpipe at the back, with stand and tap",step:"exterior"}),sideCanopy:Be("Canopy Roof Side Extension",{name:"Canopy side extension",kind:"choice",note:"The canopy carried 0.5m past one or both sides",step:"exterior",needsCanopy:!0}),connection:Be("Electrical Connection",{name:"Mains connection to your house",kind:"toggle",note:"Armoured cable from the room to your consumer unit",step:"exterior"}),deck:Be("Decking - Composite",{name:"Anthracite composite decking",kind:"area",offer:!0,step:"exterior"})};var Pc={"antique-oak":{name:"Antique Oak",hex:"#9b7a55"},espresso:{name:"Espresso",hex:"#4a3326"},"golden-pine":{name:"Golden Pine",hex:"#c69b5f"},"pebble-grey":{name:"Pebble Grey",hex:"#8e8c86"},hazel:{name:"Hazel",hex:"#a8814f"}},Ic={"grey-oak":{name:"Light grey oak laminate",hex:"#b9b4ab",design:"contemporary"},"classic-oak":{name:"Classic oak laminate",hex:"#b88f5f",design:"classic"}};var V_=Ji.prices;var G_=Ce.wall;var W_=(i,t=3)=>Math.round(i*10**t)/10**t;var kx=Date.parse(Tu.ends+"T23:59:59Z");var Au=i=>Math.max(1,Math.floor(i.width+(i.sideCanopy==="both"?1:i.sideCanopy!=="none"?.5:0)+1e-6));function vr(i){let t=i.width,e=i.depth,n=-t/2,s=t/2,r=-e/2,o=e/2;return[["front",[n,o],[s,o]],["right",[s,o],[s,r]],["back",[s,r],[n,r]],["left",[n,r],[n,o]]].map(([l,c,h],u)=>{let d=Math.hypot(h[0]-c[0],h[1]-c[1]),p=[(h[0]-c[0])/d,(h[1]-c[1])/d];return{id:l,i:u,a:c,b:h,L:W_(d,4),u:p,n:[-p[1],p[0]],axis:Math.abs(p[0])>.5?"x":"z"}})}function ji(i){let t=Ki[i.range],e=.035,n=t.canopy&&i.sideCanopy!=="none"?.5:0;return{front:t.canopy||e,back:e,left:e+(n&&(i.sideCanopy==="left"||i.sideCanopy==="both")?n:0),right:e+(n&&(i.sideCanopy==="right"||i.sideCanopy==="both")?n:0)}}function Dc(i,t,e){let n=ji(i),s=-i.depth/2-n.back,r=i.depth/2+n.front;return Ce.topBack+(e-s)/(r-s)*(Ce.topFront-Ce.topBack)}function Ru(i){if(i.layout!=="divided")return[];let t=G_,e=-i.width/2+t,n=i.width/2-t,s=-i.depth/2+t,r=i.depth/2-t,o=n-e,a=r-s;if(i.width<5){let c=s+Math.max(1,Math.min(1.8,a*.4));return[{a:[e,c],b:[n,c],door:Math.min(o-.6,o*.3),hasDoor:i.extras.internalDoor,axis:"x"}]}let l=n-Math.max(1.2,Math.min(2.2,o*.34));return[{a:[l,s],b:[l,r],door:Math.min(a-.6,a*.72),hasDoor:i.extras.internalDoor,axis:"z"}]}var Cu=i=>Ki[i.range].corner?i.hand==="left"?"left":"right":null;var Pu=["extraSockets","ledPanels","rgbPanels","widePanels","heaters","upDownLights","outdoorSocket"],X_=["brushedSockets","downlights","internalDoor","acousticPanels","acousticBoard","acousticInsulation","acousticGlass","canopyLights","waterButt","connection"],q_=[...Pu,...X_],zx=Object.freeze({v:1,range:"cube",use:"office",width:4,depth:3,cladding:"thermowood",design:"contemporary",colour:null,dir:"vertical",mainDoor:"standard",hand:"right",openings:null,floor:null,layout:"open",deck:.3,sideCanopy:"none",acousticFinish:"antique-oak",extras:Object.fromEntries(q_.map(i=>[i,Pu.includes(i)?0:!1])),step:0});var Y_={front:"f",right:"r",back:"b",left:"l"},Hx=Object.fromEntries(Object.entries(Y_).map(([i,t])=>[t,i])),$_={main:"m",window:"w",corner:"c",extra:"x"},Vx=Object.fromEntries(Object.entries($_).map(([i,t])=>[t,i]));var Mr=new A;function Rn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Mr.copy(t),Mr[n]=0,Mr.normalize();let c=.5*o/(o+a),h=1-Mr.angleTo(i)/l;return Math.sign(Mr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Zo=class extends ze{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,l=new A,c=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new A,y=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Rn(g,l,"z","y",r,n),d[f+1]=1-Rn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Rn(g,l,"z","y",r,n),d[f+1]=1-Rn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Rn(g,l,"x","z",r,t),d[f+1]=Rn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Rn(g,l,"x","z",r,t),d[f+1]=1-Rn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Rn(g,l,"x","y",r,t),d[f+1]=1-Rn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Rn(g,l,"x","y",r,t),d[f+1]=1-Rn(g,l,"y","x",r,e);break}}};var Kn={sand:"#d8c7a8",oat:"#e6dccb",terracotta:"#b8714e",clay:"#c99a72",ink:"#2a2f33",oak:"#b88d5f",walnut:"#6e4b33",rubber:"#2b2d2f",canvas:"#efe9dc",leaf:"#4f7a46",brass:"#b8955a",charcoal:"#3a3a3c",linen:"#f1ece2"};function Iu(i,t,e,n){let{std:s,add:r,box:o,group:a}=n,l=t.extras,c=e.x1-e.x0,h=e.z1-e.z0,u=e.floor,d=(e.x0+e.x1)/2,p=(e.z0+e.z1)/2,g=(Y,K)=>e.ceilingAt(Y+d,K+p)-.002,y=Math.min(g(-c/2,-h/2),g(c/2,-h/2),g(-c/2,h/2),g(c/2,h/2)),m=a(i);m.position.set(d,0,p);let f={};for(let[Y,K]of Object.entries(Kn))f[Y]=s(K,{roughness:Y==="rubber"?.95:Y==="brass"?.35:.75,metalness:Y==="brass"?.6:0});let S=Y=>s(Y,{roughness:.95}),b=(Y,K,et,st,at,D,ht,Q,gt=.04)=>r(Y,new Zo(K,et,st,3,Math.min(gt,K/2,et/2,st/2)),Q,at,D,ht),x=(Y,K,et,st,at,D,ht,Q,gt=20)=>r(Y,new Ne(K,et,st,gt),Q,at,D,ht),q={front:e.z1,back:e.z0,left:e.x0,right:e.x1},k=Y=>{let K=[];for(let et of e.walls){let st=et.axis==="x"?et.a[1]-et.n[1]*.15:et.a[0]-et.n[0]*.15,at=Y==="front"||Y==="back"?"x":"z";if(!(et.axis!==at||Math.abs(st-q[Y])>.01))for(let D of t.openings.filter(ht=>ht.wall===et.id)){let ht=gn[D.type],Q=D.p*et.L,gt=[Q-ht.w/2,Q+ht.w/2].map(Ht=>at==="x"?et.a[0]+et.u[0]*Ht-d:et.a[1]+et.u[1]*Ht-p);K.push({a:Math.min(...gt),b:Math.max(...gt),type:D.type,sill:ht.sill,top:ht.sill+ht.h,wall:et.id,group:ht.group})}}return K},F=(Y,K,et,st=2.1)=>k(Y).every(at=>K+et<at.a-.05||K-et>at.b+.05||at.sill>st),z=(Y,K,et=0,st=2.1)=>{let at=(Y==="front"||Y==="back"?c:h)/2-K-.05;for(let D=0;D<40;D++)for(let ht of[1,-1]){let Q=et+ht*D*.1;if(Math.abs(Q)<=at&&F(Y,Q,K,st))return Q}return null},w=(Y,K,et,st,at=0)=>(K==="back"&&(Y.position.set(et,st,-h/2+at),Y.rotation.y=0),K==="front"&&(Y.position.set(et,st,h/2-at),Y.rotation.y=Math.PI),K==="left"&&(Y.position.set(-c/2+at,st,et),Y.rotation.y=Math.PI/2),K==="right"&&(Y.position.set(c/2-at,st,et),Y.rotation.y=-Math.PI/2),Y),M=a(m,"layout"),U=0,T=null,O=s("#f3f2ed",{roughness:.85}),V=(Y,K,et,st,at=null,D=!0)=>{let ht=Math.hypot(et-Y,st-K),Q=Math.abs(et-Y)>Math.abs(st-K)?"x":"z",gt=(et-Y)/ht,Ht=(st-K)/ht,Vt=me=>[Y+gt*me,K+Ht*me],se=at===null?[[.002,ht-.002]]:[[.002,at-.45],[at+.45,ht-.002]],ve=(me,ae,Re)=>{let Le=[me];Le.push(ae);let ot=new di;ot.moveTo(me,Re),ot.lineTo(ae,Re);for(let Rt of Le.slice().reverse())ot.lineTo(Rt,g(...Vt(Rt))-.002);ot.lineTo(me,Re);let pt=new kn(ot,{depth:.1,bevelEnabled:!1});pt.translate(0,0,-.05);let Pt=r(M,pt,O,Y,0,K);return Pt.rotation.y=Math.atan2(-Ht,gt),Pt};for(let[me,ae]of se)ae-me>.02&&ve(me,ae,u);if(at!==null){let[me,ae]=Vt(at),Re=Math.min(g(...Vt(at-.45)),g(...Vt(at+.45)))-u,Le=Math.min(1.98,Re-.07);Re-Le-.022>.02&&ve(at-.45+.002,at+.45-.002,u+Le+.022),D&&R(M,me,ae,Q,.826,Le)}},R=(Y,K,et,st,at=.826,D=1.98)=>{let ht=a(Y,"internalDoor");ht.position.set(K,u,et),st==="z"&&(ht.rotation.y=Math.PI/2),o(ht,.05,D+.01,.12,-at/2-.025,(D+.01)/2,0,O),o(ht,.05,D+.01,.12,at/2+.025,(D+.01)/2,0,O),o(ht,at+.1,.01,.12,0,D+.015,0,O);let Q=new je;Q.position.set(-at/2,0,.04),ht.add(Q),Q.rotation.y=-.45,o(Q,at-.01,D-.02,.04,at/2,(D-.02)/2+.01,0,f.oak);for(let gt of[.45,1.05,1.6])o(Q,at-.2,.32,.006,at/2,gt,.023,s("#a77d50",{roughness:.7}));r(Q,new ze(.12,.02,.02),n.materials.steel,at-.1,1,.04)},P=Ru(t).map(Y=>({...Y,a:[Y.a[0]-d,Y.a[1]-p],b:[Y.b[0]-d,Y.b[1]-p]}));for(let Y of P)V(Y.a[0],Y.a[1],Y.b[0],Y.b[1],Y.door,Y.hasDoor);P.length&&(P[0].axis==="x"?T={x0:-c/2-1,z1:P[0].a[1]+.1}:U=c/2-P[0].a[0]+.1);let $=-c/2,N=c/2-U;if(l.heaters){let Y=a(m,"heaters"),K=s("#f7f7f5",{roughness:.15,metalness:.05}),et=0,st=l.acousticPanels?[["left",0],["right",0],["front",-c*.3]]:[["back",c*.25],["left",0],["back",-c*.25],["right",0]];for(let[at,D]of st){if(et>=l.heaters)break;if(at==="right"&&U)continue;let ht=z(at,.45,D,.7);if(ht===null)continue;let Q=w(a(Y,"heaters"),at,ht,u+.18,.04);o(Q,.85,.45,.06,0,.225,0,K),o(Q,.8,.012,.03,0,.46,.01,s("#d9dadb",{roughness:.4})),et++}}let j=a(m,"lighting"),dt=n.materials.lamp,it=T?(T.z1+h/2)/2:0,rt=U?(-c/2+c/2-U)/2:0,ft=(Y,K,et,st,at,D=null)=>{let ht=g(Y,K)-.012,Q=a(j,at);o(Q,et,.012,st,Y,ht,K,n.materials.white);let gt=D?s("#ffffff",{emissive:D,emissiveIntensity:.6,roughness:.3}):s("#fffaf0",{emissive:"#fff1d6",emissiveIntensity:.45,roughness:.3}),Ht=o(Q,et-.03,.004,st-.03,Y,ht-.008,K,gt);Ht.userData.tags=["lamp"],n.lights.push({kind:"interior",position:new A(d+Y,ht-.15,p+K)})};if(t.design==="classic"){let Y=a(j,"mainLight"),K=g(rt,it)-.02;o(Y,.62,.04,.07,rt,K,it,n.materials.steel);for(let et=0;et<4;et++){let st=rt-.24+et*.16;r(Y,new Ne(.035,.03,.1,16),n.materials.steel,st,K-.07,it).rotation.x=et%2?.35:-.35,x(Y,.026,.026,.004,st,K-.121,it+(et%2?.018:-.018),dt).userData.tags=["lamp"]}n.lights.push({kind:"interior",position:new A(d+rt,K-.2,p+it)})}else ft(rt,it,.6,.6,"mainLight");let G=[...Array(l.ledPanels).fill(["ledPanels",.6,.6,null]),...Array(l.rgbPanels).fill(["rgbPanels",.6,.6,"#7a5cff"]),...Array(l.widePanels).fill(["widePanels",1.2,.6,null])],tt=c>=h,Mt=tt?c-(U||0):h-(T?T.z1+h/2:0),lt=tt?h:c,Dt=[[rt,it]];if(G.forEach(([Y,K,et,st],at)=>{let D=Math.ceil((at+1)/2)*(at%2?1:-1),ht=Mt/2-Math.max(K,et)/2-.15,Q=Math.max(-ht,Math.min(ht,D*Math.min(1.3,Mt/3))),gt=0,Ht=()=>tt?[rt+Q,it+gt]:[rt+gt,it+Q];for(let ve of[0,.9,-.9])if(gt=Math.max(-(lt/2-.45),Math.min(lt/2-.45,ve)),Dt.every(([me,ae])=>Math.hypot(me-Ht()[0],ae-Ht()[1])>.75))break;let[Vt,se]=Ht();Dt.push([Vt,se]),ft(Vt,se,K,et,Y,st)}),l.downlights){let Y=a(j,"downlights"),K=Math.max(2,Math.round(c/1.2)),et=Math.max(2,Math.round(h/1.2));for(let st=0;st<K;st++)for(let at=0;at<et;at++){let D=-c/2+c*(st+.5)/K,ht=-h/2+h*(at+.5)/et;if(Math.abs(D-rt)<.45&&Math.abs(ht-it)<.45)continue;let Q=g(D,ht)-.006;x(Y,.045,.045,.006,D,Q,ht,n.materials.steel),x(Y,.035,.035,.004,D,Q-.005,ht,dt).userData.tags=["lamp"]}}let _t=a(m,"electrics"),jt=l.brushedSockets?s("#b7bcbf",{roughness:.3,metalness:.75}):s("#f6faf4",{roughness:.35}),yt=s("#2b2f33",{roughness:.5}),bt=(Y,K,et)=>{let st=w(a(_t,"sockets",et?"extraSockets":"includedSockets","brushedSockets"),Y,K,u+.4,.004);o(st,.146,.086,.012,0,0,0,jt);for(let at of[-.035,.035])o(st,.02,.012,.004,at,.01,.007,yt)},I={front:[],back:[],left:[],right:[]},Wt=0,Tt=4+l.extraSockets,wt=[["back",-c*.3],["back",c*.3],["left",-h*.2],["right",-h*.2],["front",-c*.35],["front",c*.35],["back",0],["left",h*.25],["right",h*.25],["back",-c*.42],["back",c*.42],["left",-h*.4]];for(let[Y,K]of wt){if(Wt>=Tt)break;if(Y==="right"&&U)continue;let et=z(Y,.1,K,.45);et===null||I[Y].some(st=>Math.abs(st-et)<.3)||(I[Y].push(et),bt(Y,et,Wt>=4),Wt++)}let mt=k("front").filter(Y=>Y.group==="door").sort((Y,K)=>K.b-K.a-(Y.b-Y.a))[0];{let Y=mt?mt.b+.2<N-.1?mt.b+.16:mt.a-.16:N-.3,K=w(a(_t,"switch"),"front",Y,u+1.2,.004);o(K,.086,.086,.012,0,0,0,jt),o(K,.03,.045,.008,0,0,.01,jt);let et=mt?mt.a-.45>-c/2+.2?mt.a-.32:Math.min(N-.25,mt.b+.45):-c/2+.4,st=w(a(_t,"consumerUnit"),"front",et,u+1.75,.05);o(st,.26,.3,.1,0,0,0,s("#f4f4f2",{roughness:.4})),o(st,.2,.06,.01,0,.05,.055,s("#bfc3c6",{roughness:.5}))}if(l.acousticPanels){let Y=a(m,"acousticPanels"),K=s(n.acoustic.hex,{roughness:.7}),et=s("#2c2d2f",{roughness:1}),st=Math.min(y-.12,u+2);for(let at=-c/2+.35;at+.6<N-.3;at+=.66){if(!F("back",at+.3,.3,2.2))continue;let D=w(a(Y,"acousticPanels"),"back",at+.3,u+.1,.012);o(D,.6,st-u-.1,.012,0,(st-u-.1)/2,0,et);for(let ht=0;ht<12;ht++)o(D,.027,st-u-.12,.02,-.3+.025+ht*.05,(st-u-.1)/2,.016,K)}}let Ft=a(m,"furniture"),Xt=0,E=$+.1,v=N-.1-Xt,Z=v-E,ct=-h/2,vt=h/2,ut=Y=>{var K;return T&&Y>T.x0&&Y<((K=T.x1)!=null?K:99)?T.z1:ct},Ot=(Y,K,et=1)=>{let st=a(Ft);st.position.set(Y,u,K),st.scale.setScalar(et),x(st,.17,.13,.34,0,.17,0,f.clay);for(let at=0;at<9;at++)b(st,.22,.02,.07,Math.cos(at*2.4)*.12,.5+at%3*.14,Math.sin(at*2.4)*.12,f.leaf,.01).rotation.set(.6*Math.sin(at),at*2.4,.5);x(st,.015,.02,.4,0,.5,0,f.walnut,6)},zt=(Y,K,et,st,at)=>{let D=o(Ft,et,.006,st,Y,u+.006,K,at);D.castShadow=!1},Gt=(Y,K,et=1.8,st=.8)=>{let at=w(a(Ft),Y,K,u,.17);for(let D of[0,et*.33,et*.66,et])o(at,st,.025,.32,0,D+.0135,0,f.oak);for(let D of[-st/2,st/2])o(at,.025,et,.32,D,et/2+.001,0,f.oak);for(let D of[0,.33,.66])for(let ht=0;ht<7;ht++)o(at,.03+ht%3*.01,.2+ht%2*.05,.2,-st/2+.1+ht*.085,et*D+.128+ht%2*.025,0,[f.terracotta,f.sand,f.charcoal,f.oat][(ht+D*3)%4|0]);return at},oe=(Y,K,et)=>{let st=a(Ft);st.position.set(Y,u,K),o(st,et,.03,.7,0,.735,0,f.oak);for(let D of[-et/2+.04,et/2-.04])o(st,.04,.719,.62,D,.3595,0,f.ink);o(st,.55,.33,.02,0,1.06,-.22,f.ink),o(st,.06,.16,.06,0,.83,-.22,f.ink),o(st,.2,.012,.15,0,.756,-.22,f.ink);let at=a(st);return at.position.set(0,0,.55),at.rotation.y=Math.PI+.15,b(at,.5,.08,.48,0,.48,0,f.charcoal,.03),b(at,.48,.55,.07,0,.82,.22,f.charcoal,.03).rotation.x=-.12,x(at,.025,.025,.4,0,.25,0,f.ink,8),st},Ut=(Y,K,et,st=0)=>{let at=a(Ft);at.position.set(Y,u,K),at.rotation.y=st,b(at,et,.22,.85,0,.22,0,S(Kn.sand),.06),b(at,et-.3,.14,.62,0,.4,.06,S(Kn.oat),.06),b(at,et,.45,.2,0,.58,-.34,S(Kn.sand),.08);for(let D of[-et/2+.09,et/2-.09])b(at,.18,.38,.85,D,.44,0,S(Kn.sand),.07);return b(at,.4,.38,.12,et*.25,.66,-.18,S(Kn.terracotta),.06).rotation.z=.2,b(at,.38,.36,.12,-et*.27,.65,-.2,S(Kn.clay),.06).rotation.z=-.15,at},qt=(Y,K,et,st=Kn.terracotta)=>{let at=a(Ft);at.position.set(Y,u,K),at.rotation.y=et,b(at,.75,.2,.75,0,.25,0,S(st),.06),b(at,.75,.45,.16,0,.55,-.3,S(st),.07);for(let D of[-.32,.32])b(at,.12,.32,.75,D,.42,0,S(st),.05)},ne=(Y,K)=>{let et=a(Ft);et.position.set(Y,u,K),x(et,.14,.14,.02,0,.01,0,f.brass),x(et,.012,.012,1.4,0,.71,0,f.brass,8),x(et,.12,.18,.25,0,1.45,0,S(Kn.linen))};if(Z<1.1||h<1.4)Ot(E+.25,ct+.3,.8);else if(t.use==="office"){let Y=Math.min(1.5,Z*.55),K=E+Y/2+.1;oe(K,ut(K+Y/2)+.38,Y),zt(K,ut(K)+.9,Math.min(1.8,Z*.6),1.2,S("#c8b9a0")),Z>2.4&&h>2.2&&!U&&!T&&Gt("right",Math.min(-.2,h/2-1.2),Math.min(1.8,y-u-.15),.8),Ot(v-.25,vt-.35,.9),Z>3.2&&h>2.6&&qt(v-.6,Math.max(vt-1.1,(T?T.z1:-9)+.75),-Math.PI*.8)}else if(t.use==="gym"){let Y=o(Ft,Math.min(2.2,Z*.7),.012,Math.min(1.8,h*.7),E+Math.min(2.2,Z*.7)/2+.05,u+.007,0,f.rubber);Y.castShadow=!1;let K=a(Ft);if(K.position.set(E+.5,u,ut(E+.5)+.7),K.rotation.y=.3,o(K,.08,.5,.9,0,.25,0,f.ink),x(K,.22,.22,.06,0,.3,.35,f.charcoal).rotation.z=Math.PI/2,b(K,.22,.06,.28,0,.95,-.25,f.ink,.02),o(K,.45,.03,.04,0,1.1,.35,f.ink),o(K,.04,.55,.04,0,.8,.3,f.ink),Z>2){let et=E+Math.min(2.2,Z*.7)-.4,st=a(Ft);st.position.set(et,u,ut(et)+.25),o(st,.9,.04,.3,0,.5,0,f.ink),o(st,.9,.04,.3,0,.2,0,f.ink);for(let at of[-.42,.42])o(st,.04,.6,.3,at,.3,0,f.ink);for(let at=0;at<5;at++)for(let D of[.55,.25]){let ht=x(st,.04,.04,.25,-.32+at*.16,D,0,f.charcoal,12);ht.rotation.x=Math.PI/2}}Ot(v-.25,vt-.35,.85)}else if(t.use==="studio"){let Y=Math.min(1.6,Z*.55),K=E+Z*.45,et=a(Ft);et.position.set(K,u,-h*.05),o(et,Y,.04,.8,0,.9,0,f.oak);for(let at of[-Y/2+.05,Y/2-.05])for(let D of[-.33,.33])o(et,.05,.879,.05,at,.4395,D,f.walnut);o(et,.5,.01,.35,-.2,.925,0,f.canvas);let st=a(Ft);st.position.set(E+.45,u,vt-.9),st.rotation.y=.6;for(let at of[-.25,.25]){let D=o(st,.035,1.7,.035,at,.85,0,f.oak);D.rotation.z=-at*.25}o(st,.7,.55,.03,0,1.25,.04,f.canvas),o(st,.35,.25,.005,.05,1.28,.057,f.terracotta),Ot(v-.25,vt-.35,.8)}else if(t.use==="library"){let Y=Math.max(1,Math.min(4,Math.floor((Z-.3)/.85))),K=Math.min(2,y-u-.12);for(let et=0;et<Y;et++){let st=E+.45+et*.86;F("back",st,.41,K)&&Gt("back",st,K,.82)}qt(v-.7,vt-1.2,-Math.PI*.8,Kn.terracotta),ne(v-.25,vt-1.75),zt(E+Z*.6,vt-1.2,Math.min(1.8,Z*.5),1.2,S("#c2a98a"))}else{let Y=Math.min(2.2,Z*.62),K=E+Y/2+.15;Ut(K,ut(K+Y/2)+.5,Y),zt(K,.1,Math.min(2.2,Z*.7),Math.min(1.6,h*.55),S("#d4c3a6"));let et=a(Ft);et.position.set(K,u,ut(K)+1.35),x(et,.38,.38,.04,0,.4,0,f.brass,32),x(et,.05,.05,.38,0,.2,0,f.brass,12),Z>3&&qt(v-.55,Math.max(.2,(T?T.z1:-9)+.75),-Math.PI/2-.3),Ot(v-.25,vt-.35,1)}return{blockRight:U,blockBack:T}}var fe=Ce.wall,mi=.022,Du=.045,Lc=.012,zs=.5,Lu=(i,t,e)=>new A(i,t,e),Hs={steel:"#c9cdd0",white:"#f4f4f0",concrete:"#b9b6ad",soil:"#6b5a45",deck:"#3f4346"};function Ws(i,t=0){let e=vr(i),n=ji(i),s=e.map(r=>{var o;return{w:r,d:((o=n[r.id])!=null?o:.035)-t}});return s.map((r,o)=>{var u,d;let a=s[(o-1+s.length)%s.length],l=p=>p.w.axis==="x"?{z:p.w.a[1]+p.w.n[1]*p.d}:{x:p.w.a[0]+p.w.n[0]*p.d},c=l(a),h=l(r);return[(u=c.x)!=null?u:h.x,(d=c.z)!=null?d:h.z]})}function Z_(i,t,e){let n=Dc(i,t,e),s=n-Ce.fascia;return{top:n,fasciaBottom:s,slabTop:n-Lc,slabBottom:s+.005,coreTop:s-.004,skinTop:s-.002,sectionY:s+5e-4,ceiling:s+.005-.03}}function Sr(i){let t=Ws(i),e=t.map(s=>s[0]),n=t.map(s=>s[1]);return{x0:Math.min(...e),x1:Math.max(...e),z0:Math.min(...n),z1:Math.max(Math.max(...n),i.depth/2+(i.deck||0)),top:Ce.topFront}}function Jo(i,t,e){let n=new ze(i,t,e),s=n.attributes.uv,r=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let o=0;o<s.count;o++){let[a,l]=r[Math.floor(o/4)];s.setXY(o,s.getX(o)*a,s.getY(o)*l)}return n}function Uu(i){let[t,e]=i.groups,n=t.count/2;return i.clearGroups(),i.addGroup(t.start,n,0),i.addGroup(t.start+n,n,1),i.addGroup(e.start,e.count,2),i}function J_(i,t,e=3){let n=i.index?i.toNonIndexed():i,s=n.attributes.position,r=Array.from({length:e},()=>[]),o=new A,a=new A,l=new A,c=new A;for(let d=0;d<s.count;d+=3)o.fromBufferAttribute(s,d),a.fromBufferAttribute(s,d+1),l.fromBufferAttribute(s,d+2),c.subVectors(l,a).cross(o.clone().sub(a)).normalize(),r[t(c)].push(d);let h=new ke;for(let d of Object.keys(n.attributes)){let p=n.attributes[d],g=p.itemSize,y=new Float32Array(p.count*g),m=0;for(let f of r)for(let S of f)for(let b=0;b<3;b++)for(let x=0;x<g;x++)y[m++]=p.array[(S+b)*g+x];h.setAttribute(d,new pn(y,g))}let u=0;return r.forEach((d,p)=>{h.addGroup(u,d.length*3,p),u+=d.length*3}),h}function Vs(i,t=[]){let e=new di(i.map(([n,s])=>new It(n,-s)));for(let n of t)e.holes.push(new Gi(n.map(([s,r])=>new It(s,-r))));return e}function Gs(i,t){return i.rotateX(-Math.PI/2),i.translate(0,t,0),i}function Ko(i,t){let e=i.attributes.position;for(let n=0;n<e.count;n++)e.setY(n,e.getY(n)+t(e.getX(n),e.getZ(n)));return e.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere(),i}function Nu(i,t){return i.map((e,n)=>{var l,c;let s=i[(n-1+i.length)%i.length],r=h=>h.axis==="x"?{z:h.a[1]-h.n[1]*t}:{x:h.a[0]-h.n[0]*t},o=r(s),a=r(e);return[(l=o.x)!=null?l:a.x,(c=o.z)!=null?c:a.z]})}function Ou(i,t){let e=Ki[i.range],n=i.width,s=i.depth,r=Ce.base,o=i.design==="classic",a=Cu(i),l=new je;l.name="room";let c=[],h=[],u=ot=>(h.push(ot),ot),d=(ot,pt={})=>u(new $e({color:ot,roughness:.7,...pt})),p=(ot,pt)=>Z_(i,ot,pt),g=Rc[i.cladding],y=i.dir==="horizontal",m=g.colours?Cc[g.colours][i.colour].hex:g.hex,f=t.cladding(g.kind,m,y),S=d("#ffffff",{map:f.map,normalMap:f.normalMap,roughness:f.roughness,normalScale:new It(.9,.9)});S.name="cladding";let b=g.kind==="cedar"||g.kind==="thermowood",x=d(yr,{roughness:.45,metalness:.05}),q=o?t.cladding(g.kind,m,!0):null,k=o?d("#ffffff",{map:q.map,normalMap:q.normalMap,roughness:.8}):x,F=o?S:x,z=o?null:t.skirt(yr),w=o?S:d("#ffffff",{map:z.map,normalMap:z.normalMap,roughness:.55}),M=d("#33383b",{roughness:.35,metalness:.55}),U=e.canopy&&b?t.cladding(g.kind,m,!0):null,T=U?d("#ffffff",{map:U.map,normalMap:U.normalMap,roughness:.8}):d(yr,{roughness:.7}),O=d(yr,{roughness:.4,metalness:.1}),V=d("#f6f6f3",{roughness:.4}),R=d("#3a3f43",{roughness:.35,metalness:.5}),P=i.extras.acousticGlass,$=u(new Ro({color:P?"#8fa89c":"#a9c0c4",roughness:.04,metalness:0,transparent:!0,opacity:P?.3:.2,envMapIntensity:1.8,side:fn,depthWrite:!1,reflectivity:.6}));$.name=P?"acoustic-glass":"glass";let N=t.interior({panels:"plaster",wall:"#f3f2ee"}),j=d("#ffffff",{map:N.map,normalMap:N.normalMap,roughness:.85}),dt=d("#f6f6f3",{roughness:.9,side:fn}),it=d("#f2f2ee",{roughness:.8}),rt=d("#3a3a38",{roughness:1});rt.name="hidden";let ft=d(Hs.white,{roughness:.5}),G=Ic[i.floor],tt=t.floor("plank",G.hex),Mt=d("#ffffff",{map:tt.map,normalMap:tt.normalMap,roughness:tt.roughness}),lt=i.deck>0?t.deck(Hs.deck):null,Dt=lt?d("#ffffff",{map:lt.map,normalMap:lt.normalMap,roughness:lt.roughness}):null,_t=i.deck>0?t.skirt(Hs.deck):null,Ct=_t?d("#ffffff",{map:_t.map,normalMap:_t.normalMap,roughness:.6}):null,jt=t.roof("panel"),yt=d("#ffffff",{map:jt.map,normalMap:jt.normalMap,roughness:jt.roughness}),bt=d(Hs.steel,{roughness:.3,metalness:.85}),I=u(new $e({color:"#fff6e0",emissive:"#ffd79a",emissiveIntensity:.35,roughness:.3})),Wt=d("#1f2124",{roughness:.45,metalness:.25}),Tt=(ot,...pt)=>(ot.userData.tags=[...ot.userData.tags||[],...pt],ot),wt=(ot,pt,Pt,Rt=0,Nt=0,te=0,...Yt)=>{let Kt=new de(pt,Pt);return Kt.position.set(Rt,Nt,te),Kt.castShadow=!0,Kt.receiveShadow=!0,ot.add(Kt),Tt(Kt,...Yt)},mt=(ot,pt,Pt,Rt,Nt,te,Yt,Kt,...L)=>wt(ot,Jo(pt,Pt,Rt),Kt,Nt,te,Yt,...L),Ft=(ot,...pt)=>{let Pt=new je;return ot.add(Pt),Tt(Pt,...pt)},Xt=(ot,pt)=>{let Pt=ot.attributes.position,Rt=ot.attributes.uv;for(let Nt=0;Nt<Pt.count;Nt++){let[te,Yt]=pt(Pt.getX(Nt),Pt.getY(Nt),Pt.getZ(Nt));Rt.setXY(Nt,te,Yt)}},E=(ot,pt)=>Dc(i,ot,pt),v=vr(i),Z=Ft(l,"walls"),ct={},vt=(ot,pt)=>{let Pt=i.openings.find(Rt=>Rt.wall===ot&&Rt.corner===pt);return Pt?Ce.post+gn[Pt.type].w:0},ut=(ot,pt,Pt,Rt)=>{let Nt=new di;return Nt.moveTo(ot,Pt),Nt.lineTo(pt,Pt),Nt.lineTo(pt,Rt(pt)),Nt.lineTo(ot,Rt(ot)),Nt.lineTo(ot,Pt),Nt},Ot=(ot,pt)=>[ot.a[0]+ot.u[0]*pt,ot.a[1]+ot.u[1]*pt];v.forEach(ot=>{let pt=ot.L,Pt=ot.id,Rt=Ft(Z,"wall:"+Pt);Rt.position.set(ot.a[0],0,ot.a[1]),Rt.rotation.y=Math.atan2(-ot.u[1],ot.u[0]),ct[Pt]={g:Rt,L:pt,wall:ot},Rt.userData.axis=ot.axis;let Nt=i.openings.filter(B=>B.wall===Pt),te=vt(Pt,"start"),Yt=vt(Pt,"end"),Kt=Nt.filter(B=>!B.corner).map(B=>{let St=gn[B.type],Et=B.p*pt,xt=new Gi,At=Et-St.w/2,Lt=Et+St.w/2,$t=r+St.sill,kt=r+St.sill+St.h;return xt.moveTo(At,$t),xt.lineTo(At,kt),xt.lineTo(Lt,kt),xt.lineTo(Lt,$t),xt.lineTo(At,$t),xt}),L=Math.max(mi,te),X=Math.min(pt-mi,pt-Yt),J=ut(L,X,r-.03,B=>p(...Ot(ot,B)).coreTop);J.holes=Kt,wt(Rt,Uu(new kn(J,{depth:fe-mi,bevelEnabled:!1})),[j,rt,it],0,0,-fe,"interiorWalls","wall:"+Pt);let nt=e.porch&&Pt==="front",Bt=ot.axis==="x"?nt?fe:0:mi,Jt=ot.axis==="x"?nt?pt-fe:pt:pt-mi;e.porch&&Pt==="left"&&(Jt=pt),e.porch&&Pt==="right"&&(Bt=0),Bt=Math.max(Bt,te),Jt=Math.min(Jt,pt-Yt);let _=ut(Bt,Jt,r-.03,B=>p(...Ot(ot,B)).skinTop);_.holes=Kt,wt(Rt,Uu(new kn(_,{depth:mi,bevelEnabled:!1})),[rt,S,S],0,0,-mi,"cladding","wall:"+Pt);let C=nt?fe+.002:ot.axis==="x"?-.025:.002,H=nt?pt-fe-.002:ot.axis==="x"?pt+.025:pt-.002,W=mt(Rt,H-C,r-.015,.02,(C+H)/2,(r-.015)/2+.01,.015,w,"base","trims");W.userData.solid=!0;for(let B of Nt)zt(Rt,B,pt);for(let[B,St]of[[te,"start"],[Yt,"end"]]){if(!B)continue;let Et=Nt.find(ie=>ie.corner===St),xt=r+gn[Et.type].h,At=ot.axis==="x"?Ce.post:fe+.002,Lt=St==="start"?At:pt-B,$t=St==="start"?B:pt-At,kt=Math.min(p(...Ot(ot,Lt)).skinTop,p(...Ot(ot,$t)).skinTop)-xt;kt>.01&&wt(Rt,Jo($t-Lt-.004,kt,fe-.01),[O,O,O,O,O,ft],(Lt+$t)/2,xt+kt/2,-fe/2,"frames","cornerGlass")}});{let ot=Ft(l,"trims","corners");v.forEach((pt,Pt)=>{let Rt=v[(Pt+1)%v.length];if(vt(pt.id,"end")&&vt(Rt.id,"start")){let[nt,Bt]=pt.b,Jt=p(nt,Bt).skinTop-.003,_=-pt.n[0]-Rt.n[0],C=-pt.n[1]-Rt.n[1];mt(ot,Ce.post,Jt-r+.03,Ce.post,nt+_*Ce.post/2,(Jt+r-.03)/2,Bt+C*Ce.post/2,O,"cornerGlass","frames");return}if(e.porch&&(pt.id==="front"||Rt.id==="front"))return;let Nt=Ce.trim,te=.008,Yt=(nt,Bt)=>p(...Ot(nt,Bt)).skinTop,Kt=Math.min(Yt(pt,pt.L),Yt(pt,pt.L-Nt),Yt(Rt,0),Yt(Rt,Nt))-.003,L=ct[pt.id].g,X=ct[Rt.id].g,J=Kt-r+.03;mt(L,Nt,J,te,pt.L-Nt/2,r-.03+J/2,te/2,F,"trims"),mt(X,Nt+te,J,te,(Nt-te)/2,r-.03+J/2,te/2,F,"trims")})}if(e.porch){let ot=Ft(l,"porch","canopy");for(let pt of[-1,1]){let Pt=pt*(n/2-fe/2),Rt=s/2,Nt=s/2+zs-.004,te=Math.min(p(Pt,Rt).skinTop,p(Pt,Nt).skinTop)-.001,Yt=te-(r-.03);wt(ot,Jo(fe,Yt,Nt-Rt),[S,S,rt,rt,rt,rt],Pt,r-.03+Yt/2,(Rt+Nt)/2,"porch","cladding"),i.deck>zs||mt(ot,fe+.05,r-.015,.02,Pt,(r-.015)/2+.01,Nt+.015,w,"base","trims"),mt(ot,fe+.016,Yt,.008,Pt,r-.03+Yt/2,Nt+.004,F,"trims","porch"),mt(ot,.02,r-.015,Nt-Rt+.004,Pt+pt*(fe/2+.015),(r-.015)/2+.01,(Rt+Nt+.004)/2,w,"base","trims")}}function zt(ot,pt,Pt){let Rt=gn[pt.type],Nt=pt.p*Pt,te=Rt.w,Yt=Rt.h,Kt=r+Rt.sill,L=Ft(ot,"opening:"+pt.id,"openings",Rt.group==="door"?"doors":"windows");L.position.set(Nt,Kt,0);let X=Rt.alu?R:O,J=Rt.alu?R:V,nt=(xt,At,Lt,$t,kt,ie)=>wt(L,new ze(xt,At,Lt),[X,X,X,X,X,J],$t,kt,ie,"frames"),Bt=(xt,At,Lt,$t,kt)=>{let ie=wt(L,new Wn(xt,At),$,Lt,$t,kt,"glass");return ie.castShadow=!1,ie.renderOrder=2,ie},Jt=Rt.alu?.05:.07,_=.07,C=-.06;if(nt(te,Jt,_,0,Yt-Jt/2,C),nt(Jt,Yt,_,-te/2+Jt/2,Yt/2,C),nt(Jt,Yt,_,te/2-Jt/2,Yt/2,C),Rt.group==="door"||Rt.sill===0){let xt=pt.corner&&ot.userData.axis==="z"?pt.corner==="start"?1:-1:0,At=xt?fe-Ce.post+.005:0,Lt=te+(xt?0:.02)-At;mt(L,Lt,.03,fe+.02,xt*At/2,.015,-fe/2+.005,X,"frames")}else nt(te,Jt,_,0,Jt/2,C),mt(L,te+.06,.022,.07,0,-.008,.012,X,"frames");let H=te-2*Jt,W=Yt-(Rt.group==="door"||Rt.sill===0?Jt+.03:2*Jt),B=Rt.group==="door"||Rt.sill===0?.03:Jt,St=(xt,At,Lt)=>{wt(L,new ze(.025,.16,.02),bt,xt,At,Lt+.02,"frames"),wt(L,new ze(.13,.02,.02),bt,xt-.055,At+.05,Lt+.04,"frames")},Et=(xt,At,Lt,$t,kt,ie=!0,ee=Rt.alu?.05:.07)=>{nt(At-.004,ee,.065,xt,$t+Lt-ee/2,kt),nt(At-.004,ee*1.3,.065,xt,$t+ee*.65,kt),nt(ee,Lt,.065,xt-At/2+ee/2,$t+Lt/2,kt),nt(ee,Lt,.065,xt+At/2-ee/2,$t+Lt/2,kt),ie&&Bt(At-2*ee,Lt-2.3*ee,xt,$t+Lt/2+.15*ee,kt)};if(Rt.kind==="sliding"){let xt=H/2+.03;Et(-H/2+xt/2,xt,W,B,C-.0325),Et(H/2-xt/2,xt,W,B,C+.0325),St(-H/2+.1,1,C-.0325+.02)}else if(Rt.kind==="patio"){let xt=Math.min(.3,H*.2);for(let $t of[-1,1])nt(Jt*.8,W,_,$t*(H/2-xt),B+W/2,C),Bt(xt-Jt*.4-.01,W-.03,$t*(H/2-xt/2+Jt*.2),B+W/2,C);let At=H-2*xt-Jt*.8,Lt=At/2;for(let $t=0;$t<2;$t++)Et(-At/2+Lt/2+$t*Lt,Lt-.006,W,B,C+.002);for(let $t of[-.03,.03])St($t+($t>0?.06:0),1,C+.03)}else if(Rt.kind==="folding"){let xt=Rt.leaves,At=H/xt;for(let Lt=0;Lt<xt;Lt++)Et(-H/2+At/2+Lt*At,At,W,B,C);St(-H/2+At-.06,1,C+.03)}else if(Rt.kind==="hinged")Et(0,H,W,B,C),St(H/2-.09,1,C+.03);else if(Rt.kind==="top")Et(0,H,W,B,C+.01,!0,.06);else if(Rt.kind==="tall"){let xt=W*.44;Bt(H-.01,W-xt-.05,0,B+(W-xt-.05)/2,C),nt(H,.05,_,0,B+W-xt-.025,C),Et(0,H,xt,B+W-xt,C+.01,!0,.055)}else Bt(H-.01,W-.01,0,B+W/2,C)}let Gt=Ft(l,"roof"),oe=Ws(i),Ut=Ws(i,Du),qt=Ws(i,Du+.003),ne=Ce.fascia-Lc-.005;{let ot=Vs(oe,[Ut.slice().reverse()]),pt=Ko(Gs(new kn(ot,{depth:Ce.fascia,bevelEnabled:!1}),-Ce.fascia),E);Xt(pt,(Kt,L,X)=>[Kt+X,L]),wt(Gt,pt,k,0,0,0,"fascia","trims");let Pt=Ws(i,-.005),Rt=Ws(i,.03),Nt=Ko(Gs(new kn(Vs(Pt,[Rt.slice().reverse()]),{depth:.032,bevelEnabled:!1}),-.026),E);wt(Gt,Nt,M,0,0,0,"fascia","roofEdge");let te=J_(Ko(Gs(new kn(Vs(qt),{depth:ne,bevelEnabled:!1}),-Lc-ne),E),Kt=>Kt.y>.5?0:Kt.y<-.5?1:2);Xt(te,(Kt,L,X)=>[Kt,X]);let Yt=wt(Gt,te,[yt,T,rt],0,0,0,"roofDeck");Yt.userData.solid=!0,e.canopy&&Tt(Yt,"canopy")}let Y={x:n/2-.25,z:-s/2-.09};{let ot=u(Wt.clone());ot.side=fn;let pt=oe.map(L=>L[0]),Pt=oe.map(L=>L[1]),Rt=Math.min(...pt),Nt=Math.max(...pt),te=Math.min(...Pt),Yt=p(0,te).fasciaBottom;wt(Gt,new Ne(.05,.05,Nt-Rt-.02,14,1,!0,0,Math.PI),ot,(Rt+Nt)/2,Yt+.02,te-.055,"gutters").rotation.set(0,0,-Math.PI/2),wt(Gt,new Ne(.034,.034,Yt,12),Wt,Y.x,Yt/2,Y.z,"gutters")}let K=ji(i);if(e.canopy&&i.extras.canopyLights){let ot=Ft(l,"canopyLights"),pt=Au(i),Pt=-n/2-K.left+.3,Rt=n/2+K.right-.3,Nt=s/2+K.front*.5;for(let te=0;te<pt;te++){let Yt=pt===1?0:Pt+(Rt-Pt)*te/(pt-1);et(ot,Yt,p(Yt,Nt).slabBottom,Nt)}}function et(ot,pt,Pt,Rt){wt(ot,new Ne(.04,.04,.008,20),bt,pt,Pt-.004,Rt),wt(ot,new Ne(.03,.03,.004,20),I,pt,Pt-.009,Rt,"lamp"),c.push({kind:"down",position:Lu(pt,Pt-.06,Rt)})}let st=Ft(l,"exteriorLights"),at=(ot,pt,Pt,Rt)=>{let Nt=Ft(ct[ot.id].g,"exteriorLights",Rt?"upDownLights":"includedLights");Nt.position.set(pt,Pt,0),wt(Nt,new Ne(.03,.03,.2,18),bt,0,0,.05),mt(Nt,.05,.08,.03,0,0,.016,bt),wt(Nt,new Ne(.024,.024,.006,16),I,0,.101,.05,"lamp"),wt(Nt,new Ne(.024,.024,.006,16),I,0,-.101,.05,"lamp"),c.push({kind:"updown",position:Lu(ot.a[0]+ot.u[0]*pt+ot.n[0]*.12,Pt,ot.a[1]+ot.u[1]*pt+ot.n[1]*.12)})},D=(ot,pt,Pt,Rt=.12)=>pt>.2&&pt<Pt-.2&&i.openings.filter(Nt=>Nt.wall===ot).every(Nt=>Math.abs(pt-Nt.p*Pt)>gn[Nt.type].w/2+Rt);{let ot=v.find(Yt=>Yt.id==="front"),pt=ot.L,Pt=i.openings.find(Yt=>Yt.role==="main"&&Yt.wall==="front"),Rt=Math.min(r+1.85,p(0,s/2).skinTop-.2),Nt=[];if(Pt){let Yt=Pt.p*pt,Kt=gn[Pt.type].w/2;Nt=[Yt-Kt-.2,Yt+Kt+.2].filter(L=>D("front",L,pt,.1))}Nt.length<2&&(Nt=[...Nt,...[.4,pt-.4].filter(Yt=>D("front",Yt,pt)&&Nt.every(Kt=>Math.abs(Kt-Yt)>.5))].slice(0,2));for(let Yt of Nt)at(ot,Yt,Rt,!1);let te=[];for(let[Yt,Kt]of[["left",.82],["left",.2],["right",.18],["right",.8],["back",.2],["back",.8]]){let L=v.find(J=>J.id===Yt),X=L.L*Kt;D(Yt,X,L.L)&&te.push([L,X])}for(let[Yt,Kt]of te.slice(0,i.extras.upDownLights))at(Yt,Kt,Math.min(r+1.85,p(...Ot(Yt,Kt)).skinTop-.2),!0)}if(i.extras.outdoorSocket){let ot=[["front",.12],["left",.75],["front",.9]],pt=0;for(let[Pt,Rt]of ot){if(pt>=i.extras.outdoorSocket)break;let Nt=v.find(Kt=>Kt.id===Pt),te=Math.max(.35,Math.min(Nt.L-.35,Nt.L*Rt));if(!D(Pt,te,Nt.L,.1))continue;let Yt=Ft(ct[Pt].g,"outdoorSocket");Yt.position.set(te,r+.45,0),mt(Yt,.12,.16,.06,0,0,.03,d("#5b6064",{roughness:.5})),mt(Yt,.1,.07,.012,0,.03,.066,d("#7e8488",{roughness:.4})),pt++}}if(i.extras.waterButt){let ot=Ft(l,"waterButt");ot.position.set(Y.x-.1,0,Y.z-.38);let pt=d("#2f4a35",{roughness:.7});wt(ot,new Ne(.24,.21,.72,24),pt,0,.3+.36,0),wt(ot,new Ne(.25,.25,.03,24),Wt,0,1.035,0),wt(ot,new Ne(.24,.24,.28,4),d("#444a4d",{roughness:.8}),0,.14,0).rotation.y=Math.PI/4,mt(ot,.04,.04,.08,0,.45,.23,bt),wt(ot,new Ne(.02,.02,.3,8),Wt,.08,1.15,.22)}if(i.extras.connection){let ot=Ft(l,"connection"),pt=d(Hs.soil,{roughness:1}),Pt=-n/2+.5,Rt=3.2,Nt=mt(ot,.14,.012,Rt,Pt,.006,-s/2-.3-Rt/2,pt,"connection");Nt.castShadow=!1;for(let te=0;te<4;te++)mt(ot,.045,.3,.045,Pt+.14,.15,-s/2-.55-te*(Rt-.5)/3,d("#d7801f",{roughness:.6}),"connection");mt(ot,.16,.22,.08,Pt,r+.25,-s/2-.04,d("#5b6064",{roughness:.5}),"connection")}let ht=s/2;function Q(ot,pt,Pt,Rt,Nt,te){if(Pt-pt<.05||Nt-Rt<.05)return;let Yt=r-.015,Kt=new Wn(Pt-pt,Nt-Rt);Xt(Kt,(J,nt)=>[J,nt]);let L=wt(ot,Kt,Dt,(pt+Pt)/2,Yt,(Rt+Nt)/2,"deck");L.rotation.x=-Math.PI/2;let X=Yt-.01;if(te.front&&mt(ot,Pt-pt,X,.02,(pt+Pt)/2,X/2,Nt-.01,Ct,"deck"),te.sides)for(let J of[pt+.01,Pt-.01])mt(ot,.02,X,Nt-Rt-.022,J,X/2,(Rt+Nt)/2-.011,Ct,"deck")}if(i.deck>0){let ot=Ft(l,"deck");if(e.porch){let pt=ht+zs;Q(ot,-n/2+fe+.003,n/2-fe-.003,ht+.03,i.deck>zs?pt-.001:pt-.004,{front:i.deck<=zs,sides:!1}),i.deck>zs&&Q(ot,-n/2-.03,n/2+.03,pt+.001,ht+.03+i.deck,{front:!0,sides:!0})}else Q(ot,-n/2,n/2,ht+.03,ht+.03+i.deck,{front:!0,sides:!0})}let gt=Ft(l,"foundations");{let ot=-n/2+.25,pt=n/2-.25,Pt=-s/2+.25,Rt=s/2-.25,Nt=Math.max(2,Math.ceil((pt-ot)/1.5)+1),te=Math.max(2,Math.ceil((Rt-Pt)/1.5)+1),Yt=d(Hs.concrete,{roughness:.95});for(let Kt=0;Kt<Nt;Kt++)for(let L=0;L<te;L++){let X=ot+(pt-ot)*Kt/(Nt-1),J=Pt+(Rt-Pt)*L/(te-1);mt(gt,.25,.02,.25,X,.01,J,Yt),wt(gt,new Ne(.03,.03,r-.21+.17,8),bt,X,.02+(r-.04)/2,J)}}let Ht=Ft(l,"interior"),Vt=Nu(v,fe),se=new dr(Vs(Vt));Xt(se,(ot,pt)=>[ot,pt]);let ve=wt(Ht,Gs(se,r+.001),Mt,0,0,0,"floor");ve.castShadow=!1;let me=Gs(new kn(Vs(Nu(v,.012)),{depth:r-.03-.06,bevelEnabled:!1}),.06),ae=wt(Ht,me,rt,0,0,0);ae.castShadow=!1,ae.userData.solid=!0;let Re=(ot,pt)=>p(ot,pt).ceiling;{let ot=new dr(Vs(Vt));Xt(ot,(Pt,Rt)=>[Pt,-Rt]);let pt=wt(l,Ko(Gs(ot,0),Re),dt,0,0,0,"ceiling");pt.castShadow=!1}for(let{g:ot,L:pt,wall:Pt}of Object.values(ct)){let Rt=i.openings.filter(Kt=>Kt.wall===Pt.id&&gn[Kt.type].sill===0).map(Kt=>[Kt.p*pt-gn[Kt.type].w/2,Kt.p*pt+gn[Kt.type].w/2]),Nt=Math.max(fe,vt(Pt.id,"start")),te=Math.min(pt-fe,pt-vt(Pt.id,"end")),Yt=[];for(let[Kt,L]of Rt.sort((X,J)=>X[0]-J[0]))Kt>Nt&&Yt.push([Nt,Kt]),Nt=Math.max(Nt,L);Nt<te&&Yt.push([Nt,te]);for(let[Kt,L]of Yt){if(L-Kt<.02)continue;let X=mt(ot,L-Kt-.004,.07,.015,(Kt+L)/2,r+.036,-fe-.0075,ft,"interiorWalls");X.castShadow=!1}}{let ot=Ft(l,"wallSection"),pt=d(i.extras.acousticInsulation?"#7f8f86":"#e8c95a",{roughness:1}),Pt=d(i.extras.acousticBoard?"#7d86b8":"#eceae4",{roughness:1}),Rt=d("#4f6d8a",{roughness:1}),Nt=d("#2b2b2a",{roughness:1});for(let{g:te,L:Yt,wall:Kt}of Object.values(ct)){let L=Math.max(mi,vt(Kt.id,"start")),X=Math.min(Yt-mi,Yt-vt(Kt.id,"end"));if(X-L<.05)continue;let J=Math.min(p(...Ot(Kt,L)).sectionY,p(...Ot(Kt,X)).sectionY),nt=i.extras.acousticBoard?-.141:-.1465,Bt=[[-.047,-.0228,Nt,"wallSection"],[-.0515,-.0475,Rt,"wallSection"],[nt+5e-4,-.052,pt,"acousticInsulation"],[-.1595,nt,Pt,"acousticBoard"]];for(let[Jt,_,C,H]of Bt){let W=wt(te,new Wn(X-L-.004,_-Jt),C,(L+X)/2,J,(Jt+_)/2,"wallSection",H);W.rotation.x=-Math.PI/2,W.castShadow=!1,W.receiveShadow=!1}}}let Le={x0:-n/2+fe,x1:n/2-fe,z0:-s/2+fe,z1:s/2-fe};return Iu(Ht,i,{...Le,floor:r,ceilingAt:Re,frontWall:"front",wallGroups:ct,walls:v},{std:d,add:wt,box:mt,group:Ft,tag:Tt,keep:u,metricBox:Jo,lights:c,materials:{white:ft,steel:bt,lamp:I,glass:$,cladMat:S,trim:F,aluMat:R},acoustic:Pc[i.acousticFinish]}),l.traverse(ot=>{ot.parent&&ot.parent.userData.tags&&(ot.userData.tags=[...new Set([...ot.parent.userData.tags||[],...ot.userData.tags||[]])])}),{group:l,lights:c,materials:h}}var _e=1024;function wn(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function gi(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function K_(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Xs=(i,t=0,e=255)=>Math.max(t,Math.min(e,i));function Pi(i){let t=parseInt(i.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function De([i,t,e],n,s=0){return`rgb(${Xs(i*n+s)},${Xs(t*n)},${Xs(e*n-s)})`}function j_(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,r=K_(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=a.data,c=(h,u)=>s[((u+n)%n*e+(h+e)%e)*4]/255;for(let h=0;h<n;h++)for(let u=0;u<e;u++){let d=c(u+1,h-1)+2*c(u+1,h)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u-1,h)+c(u-1,h+1)),p=c(u-1,h+1)+2*c(u,h+1)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u,h-1)+c(u+1,h-1)),g=-d*t,y=p*t,m=1,f=Math.hypot(g,y,m),S=(h*e+u)*4;l[S]=(g/f*.5+.5)*255,l[S+1]=(y/f*.5+.5)*255,l[S+2]=(m/f*.5+.5)*255,l[S+3]=255}return o.putImageData(a,0,0),r}function Ze(i,t,e){let n=i.getContext("2d"),s=n.getImageData(0,0,i.width,i.height),r=s.data,o=wn(e);for(let a=0;a<r.length;a+=4){let l=(o()-.5)*t;r[a]=Xs(r[a]+l),r[a+1]=Xs(r[a+1]+l),r[a+2]=Xs(r[a+2]+l)}n.putImageData(s,0,0)}function br(i,t,e,n,s,r,o){let a=e-t;for(let l=0;l<o.lines;l++){let c=t+s()*a,h=s()<o.darkShare,u=h?1-o.contrast*(.4+s()*.6):1+o.contrast*.5*s();i.strokeStyle=De(r,u,o.warm),i.globalAlpha=.12+s()*.3,i.lineWidth=.6+s()*(h?2.6:1.6);let d=1+Math.floor(s()*2),p=2+Math.floor(s()*4),g=s()*o.wave,y=s()*o.wave*.35,m=s()*6.283,f=s()*6.283;i.beginPath();for(let S=0;S<=n;S+=8){let b=c+g*Math.sin(6.283*d*S/n+m)+y*Math.sin(6.283*p*S/n+f);S===0?i.moveTo(b,S):i.lineTo(b,S)}i.stroke()}i.globalAlpha=1}function Q_(i,t,e,n,s,r,o,a){for(let l of[n,n-s,n+s]){let c=a*(.6+r()*.4),h=a*(1.4+r()*.8),u=i.createRadialGradient(e,l,0,e,l,c*1.6);u.addColorStop(0,De(o,.42)),u.addColorStop(.45,De(o,.62)),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.ellipse(e,l,c*1.6,h*1.6,0,0,6.283),i.fill(),i.strokeStyle=De(o,.7),i.globalAlpha=.4,i.lineWidth=1;for(let d=1;d<4;d++)i.beginPath(),i.ellipse(e,l,c*(1+d*.5),h*(1+d*.6),0,0,6.283),i.stroke();i.globalAlpha=1,t&&(t.fillStyle="rgba(0,0,0,.18)",t.beginPath(),t.ellipse(e,l,c,h,0,0,6.283),t.fill())}}var tx={cedar:{board:.125,count:8,groove:.004,bevel:.003,lines:30,contrast:.3,darkShare:.6,wave:2.2,warm:6,knots:.14,jitter:.16,roughness:.74,normal:3,vgroove:!0,hues:[[1.05,.9,.86],[1,.97,.94],[.86,.83,.8],[1.03,.94,.88],[.93,.88,.85]]},thermowood:{board:.13,count:8,groove:.004,bevel:.003,lines:26,contrast:.34,darkShare:.7,wave:2.6,warm:8,knots:.4,jitter:.1,roughness:.78,normal:3,vgroove:!0},smooth:{board:.145,count:7,groove:.005,bevel:.003,lines:0,contrast:0,darkShare:.5,wave:0,warm:0,knots:0,jitter:.02,roughness:.6,normal:3.2,vgroove:!0,emboss:.07},woodgrain:{board:.145,count:7,groove:.005,bevel:.003,lines:34,contrast:.12,darkShare:.55,wave:2,warm:2,knots:0,jitter:.03,roughness:.62,normal:3.4,vgroove:!0,emboss:.2},fibre:{board:.18,count:6,groove:.004,bevel:.003,lines:22,contrast:.05,darkShare:.5,wave:2,warm:0,knots:0,jitter:.012,roughness:.76,normal:3.6,lap:!0,emboss:.16},skirt:{board:.1,count:10,groove:.006,bevel:.003,lines:0,contrast:0,darkShare:.5,wave:0,warm:0,knots:0,jitter:.025,roughness:.55,normal:3.4,vgroove:!0,emboss:.05}};function Fu(i,{scale:t=1,flat:e=!1}={}){let n=new Map,s=Math.min(8,i.capabilities.getMaxAnisotropy()),r=t,o=0,a=0,l=(T,O=T)=>{let V=document.createElement("canvas");V.width=Math.max(1,Math.round(T*r)),V.height=Math.max(1,Math.round(O*r));let R=V.getContext("2d");if(!R)throw new Error("2D canvas unavailable");return r!==1&&R.scale(r,r),V},c=T=>{T.width=T.height=0},h=(T,O)=>{let V=j_(T,O*r);return c(T),V},u=(T,O=!0,V=!0)=>{let R=new Ds(T);return O&&(R.colorSpace=qe),R.anisotropy=s,V&&(R.wrapS=R.wrapT=ir),R.onUpdate=()=>{R.onUpdate=null,c(T)},R},d=T=>{if(!T)return{map:null,normalMap:null,roughness:.8,size:[1,1]};let O=new yo(new Uint8Array([...Pi(T),255]),1,1);return O.colorSpace=qe,O.needsUpdate=!0,O.userData.hex=T,{map:O,normalMap:null,roughness:.8,size:[1,1]}},p=(T,O,V)=>{let R=n.get(T);if(!R){let P;if(e)P=d(O);else try{P=V()}catch($){a++,console.warn("Texture drawn flat:",T,$),P=d(O)}R={value:P,used:o},n.set(T,R)}return R.used=o,R.value},g=T=>{for(let O of[T.map,T.normalMap])O==null||O.dispose()},y=(T,O,V)=>{for(let R of[T.map,T.normalMap].filter(Boolean))R.repeat.set(1/O,1/V);return{...T,size:[O,V]}};function m(T,O,V){return T==="stone"?f(O):p(`clad:${T}:${O}:${V}`,O,()=>{let R=tx[T],P=R.widths||Array(R.count).fill(R.board+(R.gap||0)),$=P.reduce((Dt,_t)=>Dt+_t,0),N=_e,j=_e,dt=N/$,it=l(N),rt=l(N),ft=it.getContext("2d"),G=rt.getContext("2d");if(V)for(let Dt of[ft,G])Dt.translate(N,0),Dt.rotate(Math.PI/2);let tt=Pi(O),Mt=wn(gi(T+O));G.fillStyle="#000",G.fillRect(0,0,N,j);let lt=0;for(let Dt=0;Dt<P.length;Dt++){let _t=lt*dt,Ct=_t+(P[Dt]-(R.gap||0))*dt;lt+=P[Dt];let jt=1+(Mt()-.5)*2*R.jitter,yt=R.hues?R.hues[Math.floor(Mt()*R.hues.length)]:[1,1,1],bt=tt.map((wt,mt)=>wt*jt*yt[mt]);ft.fillStyle=De(bt,1,R.warm*(Mt()-.5)),ft.fillRect(_t,0,Ct-_t,j),br(ft,_t,Ct,j,Mt,bt,R),R.knots&&Mt()<R.knots&&Q_(ft,G,_t+(Ct-_t)*(.25+Mt()*.5),Mt()*j,j,Mt,bt,4+Mt()*6);let I=Math.max(1,R.bevel*dt),Wt=G.createLinearGradient(_t,0,Ct,0);if(Wt.addColorStop(0,"#5a5a5a"),Wt.addColorStop(I/(Ct-_t),"#f0f0f0"),Wt.addColorStop(1-I/(Ct-_t),"#f0f0f0"),Wt.addColorStop(1,"#5a5a5a"),G.fillStyle=Wt,G.fillRect(_t,0,Ct-_t,j),R.shiplap||R.lap){let wt=G.createLinearGradient(_t,0,Ct,0);wt.addColorStop(0,R.lap?"rgba(0,0,0,.75)":"rgba(0,0,0,.3)"),wt.addColorStop(R.lap?1:.5,"rgba(0,0,0,0)"),G.fillStyle=wt,G.fillRect(_t,0,Ct-_t,j),ft.fillStyle=R.lap?"rgba(0,0,0,.16)":"rgba(0,0,0,.07)",ft.fillRect(_t,0,(Ct-_t)*(R.lap?.12:.2),j),R.lap&&(ft.fillStyle="rgba(255,255,255,.06)",ft.fillRect(Ct-(Ct-_t)*.25,0,(Ct-_t)*.25,j))}if(R.vgroove&&(ft.fillStyle="rgba(0,0,0,.12)",ft.fillRect(_t,0,2,j),ft.fillStyle="rgba(255,255,255,.18)",ft.fillRect(Ct-3,0,2,j)),R.alternate&&Dt%2&&(ft.fillStyle="rgba(0,0,0,.14)",ft.fillRect(_t,0,Ct-_t,j),G.fillStyle="rgba(0,0,0,.35)",G.fillRect(_t,0,Ct-_t,j)),R.weathered)for(let wt=0;wt<6;wt++)ft.fillStyle=`rgba(${Mt()<.5?"200,200,205":"90,70,50"},${.05+Mt()*.07})`,ft.fillRect(_t+Mt()*(Ct-_t)*.8,0,(Ct-_t)*(.1+Mt()*.3),j);let Tt=Math.max(1.5,(R.groove||0)*dt);if(R.gap){let wt=Ct,mt=R.gap*dt;ft.fillStyle=De(tt,.38),ft.fillRect(wt,0,mt,j),ft.fillStyle="rgba(0,0,0,.35)",ft.fillRect(wt,0,mt*.3,j),G.fillStyle="#101010",G.fillRect(wt,0,mt,j)}else ft.fillStyle=De(tt,.45),ft.fillRect(Ct-Tt,0,Tt,j),G.fillStyle="#000",G.fillRect(Ct-Tt,0,Tt,j)}if(R.emboss||R.brush){G.globalAlpha=R.emboss||.16;for(let Dt=0;Dt<(R.brush||520);Dt++){let _t=Mt()*N,Ct=Mt()*j,jt=40+Mt()*160;G.strokeStyle=Mt()<.5?"#000":"#fff",G.lineWidth=.8+Mt(),G.beginPath(),G.moveTo(_t,Ct),G.lineTo(_t+(Mt()-.5)*3,Ct+jt),G.stroke()}G.globalAlpha=1}return Ze(it,T==="smooth"||T==="skirt"?5:10,gi(O)),y({map:u(it),normalMap:u(h(rt,R.normal),!1),roughness:R.roughness},$,$)})}function f(T){return p(`stone:${T}`,T,()=>{let R=853.3333333333334,P=wn(gi("stone"+T)),$=Pi(T),N=l(1024),j=l(1024),dt=N.getContext("2d"),it=j.getContext("2d");dt.fillStyle=De($,.35),dt.fillRect(0,0,1024,1024),it.fillStyle="#000",it.fillRect(0,0,1024,1024);let rt=0;for(;rt<1024;){let ft=(.045+P()*.05)*R,G=-P()*120;for(;G<1024;){let tt=(.15+P()*.35)*R,Mt=.7+P()*.55,lt=Dt=>{dt.fillStyle=De($,Mt,(P()-.5)*18),dt.fillRect(G+Dt+2,rt+2,tt-4,ft-4);for(let jt=0;jt<14;jt++)dt.fillStyle=`rgba(${P()<.5?"0,0,0":"255,255,255"},${.05+P()*.08})`,dt.fillRect(G+Dt+2+P()*(tt-8),rt+2+P()*(ft-6),3+P()*18,1+P()*3);let _t=it.createLinearGradient(0,rt,0,rt+ft),Ct=150+P()*90|0;_t.addColorStop(0,`rgb(${Ct},${Ct},${Ct})`),_t.addColorStop(1,`rgb(${Ct-60},${Ct-60},${Ct-60})`),it.fillStyle=_t,it.fillRect(G+Dt+2,rt+2,tt-4,ft-4)};lt(0),G+tt>1024&&lt(-1024),G+=tt}rt+=ft}return Ze(N,14,gi(T)),Ze(j,50,3),y({map:u(N),normalMap:u(h(j,3.4),!1),roughness:.92},1.2,1.2)})}let S=T=>m("skirt",T,!1);function b(T,O){return p(`metal:${T}:${O}`,T,()=>{let j=l(512),dt=l(512),it=j.getContext("2d"),rt=dt.getContext("2d");if(O)for(let G of[it,rt])G.translate(512,0),G.rotate(Math.PI/2);let ft=Pi(T);it.fillStyle=De(ft,1),it.fillRect(0,0,512,512),rt.fillStyle="#303030",rt.fillRect(0,0,512,512);for(let G=0;G<5;G++){let tt=G*.2*512,Mt=.02*512,lt=.012*512,Dt=.044*512;it.fillStyle=De(ft,1.18),it.fillRect(tt,0,lt,512),it.fillStyle=De(ft,1.06),it.fillRect(tt+lt,0,Mt,512),it.fillStyle=De(ft,.72),it.fillRect(tt+lt+Mt,0,lt,512);let _t=rt.createLinearGradient(tt,0,tt+Dt,0);_t.addColorStop(0,"#303030"),_t.addColorStop(.3,"#f0f0f0"),_t.addColorStop(.7,"#f0f0f0"),_t.addColorStop(1,"#303030"),rt.fillStyle=_t,rt.fillRect(tt,0,Dt,512);for(let Ct of[.45,.7])it.fillStyle=De(ft,.9),it.fillRect(tt+Ct*.2*512,0,2,512),rt.fillStyle="#505050",rt.fillRect(tt+Ct*.2*512,0,2,512)}return Ze(j,5,gi("metal"+T)),y({map:u(j),normalMap:u(h(dt,2.6),!1),roughness:.42},1,1)})}function x(T,O){return p(`floor:${T}:${O}`,O,()=>{let V=Pi(O),R=wn(gi(O)),P=l(_e),$=l(_e),N=P.getContext("2d"),j=$.getContext("2d");if(T==="carpet"||T==="rubber"){N.fillStyle=De(V,1),N.fillRect(0,0,_e,_e);for(let lt=0;lt<26e3;lt++)N.fillStyle=De(V,.82+R()*.36),N.fillRect(R()*_e,R()*_e,1.4,1.4);return j.fillStyle="#808080",j.fillRect(0,0,_e,_e),Ze($,60,9),y({map:u(P),normalMap:u(h($,1.2),!1),roughness:1},.5,.5)}let dt=6,it=.19,rt=1.28,ft=rt,G=it*dt,tt=_e/ft,Mt=_e/G;j.fillStyle="#000",j.fillRect(0,0,_e,_e);for(let lt=0;lt<dt;lt++){let Dt=lt*.37%1*rt;for(let _t=-1;_t<2;_t++){let Ct=(Dt+_t*rt)*tt,jt=lt*it*Mt,yt=rt*tt,bt=it*Mt,I=1+(R()-.5)*.16;N.save(),N.beginPath(),N.rect(Ct,jt,yt,bt),N.clip(),N.fillStyle=De(V,I),N.fillRect(Ct,jt,yt,bt),N.translate(Ct,jt+bt),N.rotate(-Math.PI/2),br(N,0,bt,yt,R,V.map(Wt=>Wt*I),{lines:22,contrast:.28,darkShare:.7,wave:4,warm:3}),N.restore(),j.fillStyle="#e8e8e8",j.fillRect(Ct+2,jt+2,yt-4,bt-4),N.fillStyle=De(V,.55),N.fillRect(Ct,jt,yt,1.2),N.fillRect(Ct,jt,1.2,bt)}}return Ze(P,8,5),y({map:u(P),normalMap:u(h($,1.6),!1),roughness:T==="plank"?.5:.55},ft,G)})}function q(T){return p(`deck:${T}`,T,()=>{let O=Pi(T),V=wn(gi("deck"+T)),R=.14,P=.006,$=6,N=(R+P)*$,j=1.8,dt=l(_e),it=l(_e),rt=dt.getContext("2d"),ft=it.getContext("2d"),G=_e/N,tt=_e/j;rt.fillStyle=De(O,.25),rt.fillRect(0,0,_e,_e),ft.fillStyle="#000",ft.fillRect(0,0,_e,_e);for(let Mt=0;Mt<$;Mt++){let lt=Mt*(R+P)*G,Dt=lt+R*G,_t=1+(V()-.5)*.22;rt.fillStyle=De(O,_t),rt.fillRect(lt,0,Dt-lt,_e),br(rt,lt,Dt,_e,V,O.map(jt=>jt*_t),{lines:24,contrast:.3,darkShare:.7,wave:3,warm:4}),ft.fillStyle="#d0d0d0",ft.fillRect(lt,0,Dt-lt,_e);for(let jt=1;jt<7;jt++)ft.fillStyle="#9a9a9a",ft.fillRect(lt+(Dt-lt)*jt/7-1,0,2,_e);let Ct=Mt*.43%1*_e;rt.fillStyle=De(O,.3),rt.fillRect(lt,Ct,Dt-lt,3),ft.fillStyle="#000",ft.fillRect(lt,Ct,Dt-lt,3)}return Ze(dt,10,77),y({map:u(dt),normalMap:u(h(it,2.5),!1),roughness:.74},N,j)})}function k(T){return p(`roof:${T}`,"#2d2f30",()=>{let O=wn(gi(T)),V=l(512),R=l(512),P=V.getContext("2d"),$=R.getContext("2d");if(T==="shingles"){P.fillStyle="#232527",P.fillRect(0,0,512,512),$.fillStyle="#000",$.fillRect(0,0,512,512);let N=6,j=3,dt=512/N,it=512/j;for(let rt=0;rt<N;rt++){let ft=rt%2*it/2;for(let G=-1;G<=j;G++){let tt=ft+G*it,Mt=.85+O()*.3;P.fillStyle=`rgb(${38*Mt},${40*Mt},${43*Mt})`,P.fillRect(tt+2,rt*dt,it-4,dt-3);let lt=$.createLinearGradient(0,rt*dt,0,rt*dt+dt);lt.addColorStop(0,"#606060"),lt.addColorStop(1,"#f0f0f0"),$.fillStyle=lt,$.fillRect(tt+2,rt*dt,it-4,dt-3)}}return Ze(V,26,41),y({map:u(V),normalMap:u(h(R,3),!1),roughness:.92},1,.84)}if(T==="panel"){P.fillStyle="#3b4044",P.fillRect(0,0,512,512),$.fillStyle="#808080",$.fillRect(0,0,512,512);for(let N of[0,256])P.fillStyle="#2a2e31",P.fillRect(N,0,6,512),P.fillStyle="#50565a",P.fillRect(N+6,0,3,512),$.fillStyle="#f0f0f0",$.fillRect(N,0,9,512);return Ze(V,8,41),Ze(R,14,5),y({map:u(V),normalMap:u(h(R,2),!1),roughness:.55},2,2)}P.fillStyle="#2d2f30",P.fillRect(0,0,512,512);for(let N=0;N<6e3;N++)P.fillStyle=`rgba(${O()<.5?"0,0,0":"90,92,94"},.18)`,P.fillRect(O()*512,O()*512,2,2);return $.fillStyle="#808080",$.fillRect(0,0,512,512),Ze(R,30,3),y({map:u(V),normalMap:u(h(R,1),!1),roughness:.88},1.2,1.2)})}function F(T){return p(`int:${T.panels}:${T.wall}:${T.beading}`,T.wall,()=>{let O=l(512,1024),V=l(512,1024),R=O.getContext("2d"),P=V.getContext("2d"),$=1.22,N=2.44,j=512/$,dt=1024/N;R.fillStyle=T.wall,R.fillRect(0,0,512,1024),P.fillStyle="#808080",P.fillRect(0,0,512,1024);let it=(rt,ft,G,tt,Mt)=>{R.fillStyle=Mt,R.fillRect(rt,ft,G,tt),R.fillStyle="rgba(0,0,0,.08)",R.fillRect(rt+G,ft,2,tt),P.fillStyle="#f4f4f4",P.fillRect(rt,ft,G,tt)};if(T.panels==="plaster"){let rt=wn(13);for(let ft=0;ft<4e3;ft++)R.fillStyle=`rgba(${rt()<.5?"0,0,0":"255,255,255"},.025)`,R.fillRect(rt()*512,rt()*1024,6+rt()*20,4+rt()*14);Ze(V,6,9)}if(T.panels==="beaded"&&it(0,0,.045*j,1024,T.beading),T.panels==="slatted"){R.fillStyle="#26282a",R.fillRect(0,0,512,1024);let G=Pi(T.wall),tt=wn(gi(T.wall));for(let Mt=0;Mt<20;Mt++){let lt=1+(tt()-.5)*.12;R.fillStyle=De(G,lt),R.fillRect(Mt*25.6+2,0,25.6-6,1024),br(R,Mt*25.6+2,Mt*25.6+25.6-4,1024,tt,G.map(Dt=>Dt*lt),{lines:6,contrast:.2,darkShare:.6,wave:2,warm:4}),P.fillStyle="#e8e8e8",P.fillRect(Mt*25.6+2,0,25.6-6,1024)}P.fillStyle="#202020";for(let Mt=0;Mt<20;Mt++)P.fillRect(Mt*25.6+25.6-4,0,6,1024)}if(T.panels==="plywood"){let rt=Pi(T.wall),ft=wn(5);br(R,0,512,1024,ft,rt,{lines:70,contrast:.18,darkShare:.5,wave:14,warm:6}),R.fillStyle="rgba(0,0,0,.25)",R.fillRect(0,0,2,1024),R.fillRect(0,0,512,2),P.fillStyle="#000",P.fillRect(0,0,2,1024),P.fillRect(0,0,512,2)}if(T.panels==="wrapped"&&(R.fillStyle="rgba(0,0,0,.07)",R.fillRect(0,0,3,1024),P.fillStyle="#202020",P.fillRect(0,0,3,1024)),T.panels==="boards"&&(R.fillStyle="rgba(0,0,0,.09)",R.fillRect(0,0,3,1024),R.fillRect(0,0,512,3),P.fillStyle="#000",P.fillRect(0,0,3,1024),P.fillRect(0,0,512,3)),T.panels==="membrane"){let rt=wn(31);for(let ft=0;ft<9e3;ft++)R.fillStyle=rt()<.5?"rgba(0,0,0,.06)":"rgba(255,255,255,.07)",R.fillRect(rt()*512,rt()*1024,2,1);R.fillStyle="#c9c9c4",R.fillRect(0,0,512,.05*dt),R.fillRect(0,1024-.05*dt,512,.05*dt);for(let ft of[0,256])R.fillStyle="rgba(0,0,0,.18)",R.fillRect(ft,0,2,1024),P.fillStyle="#5a5a5a",P.fillRect(ft,0,2,1024);for(let ft=20;ft<1024;ft+=70)for(let G of[6,250,262,506])R.fillStyle="#8e9090",R.fillRect(G,ft,4,2);Ze(V,18,7)}return Ze(O,3,11),y({map:u(O),normalMap:u(h(V,2),!1),roughness:.82},$,N)})}function z(){return p("lawn","#6a8649",()=>{let T=wn(17),O=l(_e),V=O.getContext("2d");V.fillStyle="#6a8649",V.fillRect(0,0,_e,_e);for(let P=0;P<2;P++)V.fillStyle=P%2?"rgba(255,255,230,.025)":"rgba(20,40,0,.025)",V.fillRect(0,P*_e/2,_e,_e/2);for(let P=0;P<9e4;P++){let $=T();V.fillStyle=$<.45?"rgba(46,72,30,.55)":$<.85?"rgba(125,152,86,.5)":"rgba(170,180,110,.45)";let N=T()*_e,j=T()*_e;V.fillRect(N,j,1.3,2.6+T()*3)}let R=l(512);return R.getContext("2d").fillStyle="#808080",R.getContext("2d").fillRect(0,0,512,512),Ze(R,90,21),y({map:u(O),normalMap:u(h(R,1.4),!1),roughness:.95},3,3)})}function w(){return p("paving","#c8c4ba",()=>{let T=wn(5),O=l(512),V=l(512),R=O.getContext("2d"),P=V.getContext("2d");R.fillStyle="#b9ab90",R.fillRect(0,0,512,512),P.fillStyle="#000",P.fillRect(0,0,512,512);let $=2,N=512/$;for(let j=0;j<$;j++)for(let dt=0;dt<$;dt++){let it=.9+T()*.18;R.fillStyle=`rgb(${224*it},${210*it},${184*it})`,R.fillRect(j*N+3,dt*N+3,N-6,N-6),P.fillStyle="#d8d8d8",P.fillRect(j*N+3,dt*N+3,N-6,N-6)}return Ze(O,22,8),Ze(V,40,9),y({map:u(O),normalMap:u(h(V,2),!1),roughness:.9},1.2,1.2)})}function M(){return p("gravel","#a49d90",()=>{let T=wn(23),O=l(512),V=l(512),R=O.getContext("2d"),P=V.getContext("2d");R.fillStyle="#a49d90",R.fillRect(0,0,512,512),P.fillStyle="#202020",P.fillRect(0,0,512,512);for(let $=0;$<9e3;$++){let N=T()*512,j=T()*512,dt=1.5+T()*3.5,it=.7+T()*.5;R.fillStyle=`rgb(${190*it},${182*it},${168*it})`,R.beginPath(),R.ellipse(N,j,dt,dt*.8,T()*3,0,6.283),R.fill(),P.fillStyle=`rgb(${200*it},${200*it},${200*it})`,P.beginPath(),P.ellipse(N,j,dt,dt*.8,0,0,6.283),P.fill()}return y({map:u(O),normalMap:u(h(V,2.2),!1),roughness:1},.8,.8)})}function U(){return p("powder",null,()=>{let T=l(256);T.getContext("2d").fillStyle="#808080",T.getContext("2d").fillRect(0,0,256,256),Ze(T,26,4);let O=u(h(T,.8),!1);return O.repeat.set(4,4),{normalMap:O}})}return{cladding:m,skirt:S,stone:f,metal:b,floor:x,deck:q,roof:k,interior:F,lawn:z,paving:w,gravel:M,powder:U,begin(){o++},prune(T){let O=[...n].filter(([V,R])=>R.used<o&&V!=="lawn").sort((V,R)=>V[1].used-R[1].used);for(let[V,R]of O){if(n.size<=T)break;g(R.value),n.delete(V)}},stats:()=>({textures:n.size,failures:a,scale:r}),dispose(){for(let T of n.values())g(T.value);n.clear()}}}var Bu="http://www.w3.org/2000/svg",Uc=.12,jo=class{constructor(){this.domElement=document.createElementNS(Bu,"svg"),this.domElement.setAttribute("class","scene-svg"),this.domElement.setAttribute("preserveAspectRatio","none"),this.info={faces:0,paths:0,ms:0},this.shadowMap={enabled:!1,type:0},this.capabilities={getMaxAnisotropy:()=>1,isWebGL2:!1},this.extensions={has:()=>!1},this.toneMappingExposure=1,this._pool=[],this._w=1,this._h=1}setPixelRatio(){}getPixelRatio(){return 1}setSize(t,e){this._w=Math.max(1,t),this._h=Math.max(1,e),this.domElement.setAttribute("viewBox",`${-this._w/2} ${-this._h/2} ${this._w} ${this._h}`)}getSize(t){return t.set(this._w,this._h)}getContext(){return{isContextLost:()=>!1}}dispose(){this._pool.length=0,this.domElement.replaceChildren()}forceContextLoss(){}render(t,e){let n=performance.now();t.updateMatrixWorld(),e.parent||e.updateMatrixWorld();let s=t.background;s&&s.isColor&&(this.domElement.style.backgroundColor=s.getStyle());let r=new Ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o=new A().setFromMatrixPosition(e.matrixWorld),a=this._w/2,l=this._h/2,c=new re(0,0,0),h=[];t.traverseVisible(T=>{if(T.isLight){if(T.isAmbientLight)c.add(T.color.clone().multiplyScalar(T.intensity));else if(T.isHemisphereLight)c.add(T.color.clone().lerp(T.groundColor,.5).multiplyScalar(T.intensity*.5));else if(T.isDirectionalLight){let O=new A().setFromMatrixPosition(T.matrixWorld).sub(new A().setFromMatrixPosition(T.target.matrixWorld)).normalize();h.push({dir:O,colour:T.color.clone().multiplyScalar(T.intensity)})}}});let u=[],d=new A,p=new A,g=new A,y=new A,m=new A,f=new A,S=new ue,b=new ue,x=new ue,q=new re,k=new re;t.traverseVisible(T=>{var N,j;if(!T.isMesh||!((N=T.geometry)!=null&&N.attributes.position))return;let O=[].concat(T.material),V=T.geometry.attributes.position,R=T.geometry.index,P=T.geometry.groups.length?T.geometry.groups:[{start:0,count:R?R.count:V.count,materialIndex:0}],$=!!T.userData.ground;for(let dt of P){let it=O[dt.materialIndex]||O[0];if(!it||!it.visible||it.colorWrite===!1||it.opacity<.03||it.name==="hidden")continue;let rt=it.side!==0,ft=it.side===1,G=Math.min(dt.start+dt.count,R?R.count:V.count);for(let tt=dt.start;tt+2<G;tt+=3){let Mt=R?R.getX(tt):tt,lt=R?R.getX(tt+1):tt+1,Dt=R?R.getX(tt+2):tt+2;if(d.fromBufferAttribute(V,Mt).applyMatrix4(T.matrixWorld),p.fromBufferAttribute(V,lt).applyMatrix4(T.matrixWorld),g.fromBufferAttribute(V,Dt).applyMatrix4(T.matrixWorld),y.crossVectors(m.subVectors(p,d),f.subVectors(g,d)),y.lengthSq()<1e-12)continue;y.normalize();let _t=y.dot(m.subVectors(o,d));if(ft&&(y.negate(),_t=-_t),_t<=0){if(!rt)continue;y.negate()}S.set(d.x,d.y,d.z,1).applyMatrix4(r),b.set(p.x,p.y,p.z,1).applyMatrix4(r),x.set(g.x,g.y,g.z,1).applyMatrix4(r);let Ct=ex([S.clone(),b.clone(),x.clone()]);if(Ct.length<3)continue;let jt="",yt=1/0,bt=-1/0,I=1/0,Wt=-1/0,Tt=0;for(let mt=0;mt<Ct.length;mt++){let Ft=Ct[mt],Xt=Ft.x/Ft.w*a,E=-Ft.y/Ft.w*l;jt+=(mt?"L":"M")+Xt.toFixed(1)+","+E.toFixed(1),yt=Math.min(yt,Xt),bt=Math.max(bt,Xt),I=Math.min(I,E),Wt=Math.max(Wt,E),Tt+=Ft.w}if(bt<-a||yt>a||Wt<-l||I>l||(bt-yt)*(Wt-I)<.5)continue;q.copy(c);for(let mt of h){let Ft=Math.round(y.dot(mt.dir)*12)/12;Ft>0&&q.add(k.copy(mt.colour).multiplyScalar(Ft))}q.multiply(it.color),it.emissive&&q.add(it.emissive.clone().multiplyScalar((j=it.emissiveIntensity)!=null?j:1));let wt=it.transparent?it.opacity:1;u.push({depth:Tt/Ct.length,ground:$,d:jt+"z",fill:"#"+q.getHexString(),opacity:wt})}}}),u.sort((T,O)=>O.ground-T.ground||O.depth-T.depth);let F=0,z="",w=1,M="",U=()=>{if(!M)return;let T=this._pool[F];T||(T=this._pool[F]=document.createElementNS(Bu,"path"),T.setAttribute("stroke-linejoin","round")),T.setAttribute("d",M),T.setAttribute("fill",z),w<1?(T.setAttribute("fill-opacity",w.toFixed(2)),T.setAttribute("stroke","none")):(T.removeAttribute("fill-opacity"),T.setAttribute("stroke",z),T.setAttribute("stroke-width",".7")),(T.parentNode!==this.domElement||this.domElement.childNodes[F]!==T)&&this.domElement.appendChild(T),F++,M=""};for(let T of u)(T.fill!==z||T.opacity!==w)&&(U(),z=T.fill,w=T.opacity),M+=T.d;for(U();this.domElement.childNodes.length>F;)this.domElement.lastChild.remove();this.info={faces:u.length,paths:F,ms:Math.round(performance.now()-n)}}};function ex(i){let t=[];for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=n.w>Uc,o=s.w>Uc;if(r&&t.push(n),r!==o){let a=(Uc-n.w)/(s.w-n.w);t.push(new ue().lerpVectors(n,s,a))}}return t}var nx="#ff8a3d",ix=i=>1-Math.pow(1-i,3),Nc={high:{ratio:2,textures:1,shadow:2048,softShadows:!0,antialias:!0,capture:2e3,cache:40},medium:{ratio:1.5,textures:.5,shadow:1024,softShadows:!0,antialias:!0,capture:1600,cache:18},low:{ratio:1.25,textures:.5,shadow:1024,softShadows:!1,antialias:!0,capture:1400,cache:14},safe:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:1400,cache:14,simple:!0},svg:{ratio:1,textures:.5,shadow:0,softShadows:!1,antialias:!1,capture:0,cache:40}};function fy(i,t={}){let e=Nc[t.tier]?t.tier:"high",n=Nc[e],s;if(e==="svg")s=new jo;else{let o=document.createElement("canvas");try{s=new _o({canvas:o,antialias:n.antialias,preserveDrawingBuffer:!1,powerPreference:e==="high"?"high-performance":"default"})}catch(a){throw sx(o),ku(a,"context")}}let r=[];try{return rx(i,s,{...t,tier:e},r)}catch(o){for(let a of r.reverse())try{a()}catch(l){}try{s.dispose()}catch(a){}if(s.isWebGLRenderer)try{s.forceContextLoss()}catch(a){}throw s.domElement.remove(),i.querySelectorAll(".scene-overlay").forEach(a=>a.remove()),ku(o,"setup")}}function ku(i,t){let e=i instanceof Error?i:new Error(String(i));return e.stage=e.stage||t,e}function sx(i){var t;for(let e of["webgl2","webgl"])try{let n=i.getContext(e);if(n){(t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext();return}}catch(n){}}function rx(i,t,{onLost:e=()=>{},onBroken:n=()=>{},onVerified:s=()=>{},onPick:r=()=>{},onViewChange:o=()=>{},tier:a},l){let c=Nc[a],h=a==="svg",u=!!c.simple,d=matchMedia("(prefers-reduced-motion: reduce)"),p=Math.min(window.devicePixelRatio||1,c.ratio);t.setPixelRatio(p),t.outputColorSpace=qe,t.toneMapping=hc,t.toneMappingExposure=.98,t.shadowMap.enabled=!h&&!u,t.shadowMap.type=c.softShadows?lc:No;let g=null,y=!1,m=[];h||(t.debug.onShaderError=(L,X,J,nt)=>{let Bt=[L.getProgramInfoLog(X),L.getShaderInfoLog(J),L.getShaderInfoLog(nt)].filter(Boolean).join(" | ").replace(/\s+/g," ").slice(0,300);m.push(Bt||"link failed, no log"),console.warn("A 3D shader failed to link on this GPU:",Bt),g||(g="shader",y&&setTimeout(()=>{!dt&&!st&&n("shader")}))}),t.domElement.setAttribute("role","img"),t.domElement.setAttribute("aria-label","Interactive 3D preview of your Oeco garden room. Drag to look around, scroll or pinch to zoom."),i.appendChild(t.domElement);let f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("class","scene-overlay"),f.setAttribute("aria-hidden","true"),i.appendChild(f);let S=new Is,b=Fu(t,{scale:c.textures,flat:h});l.push(()=>b.dispose());let x=null;if(!h&&!u){let L=new Ps(t);x=L.fromScene(new Wo,.04).texture,L.dispose()}S.environment=x;let q="environmentIntensity"in S;function k(L){S.environmentIntensity=L,!q&&S.traverse(X=>{for(let J of X.material?[].concat(X.material):[])"envMapIntensity"in J&&(J.userData.envBase===void 0&&(J.userData.envBase=J.envMapIntensity),J.envMapIntensity=J.userData.envBase*L)})}k(.55);let F=(L,X,J)=>{let nt=document.createElement("canvas");nt.width=4,nt.height=512;let Bt=nt.getContext("2d"),Jt=Bt.createLinearGradient(0,0,0,512);Jt.addColorStop(0,L),Jt.addColorStop(.55,X),Jt.addColorStop(1,J),Bt.fillStyle=Jt,Bt.fillRect(0,0,4,512);let _=new Ds(nt);return _.colorSpace=qe,_},z=h?new re("#d6e4ee"):F("#7fb0d8","#d9e8f0","#dfe7d5"),w=h?new re("#2e3346"):F("#1b2340","#7a5a62","#3a3330");S.background=z,S.fog=new xo("#dfe7d5",18,52);let M=new Io("#e6eef4","#6f7f56",1.05);S.add(M);let U=new mr("#fff3df",2.9);U.position.set(-7,10,9),U.castShadow=!0,U.shadow.mapSize.set(c.shadow||1,c.shadow||1),U.shadow.bias=-2e-4,U.shadow.normalBias=.02,U.shadow.radius=3,S.add(U,U.target);let T=new mr("#d9e6f2",.55);T.position.set(8,5,-6),S.add(T);let O=new je;S.add(O);let V=b.lawn(),R=new de(new wo(60,64),new $e({map:V.map,normalMap:V.normalMap,roughness:.95,color:"#ffffff"}));R.rotation.x=-Math.PI/2,R.receiveShadow=!0,R.userData.ground=!0,R.geometry.attributes.uv.array.forEach((L,X,J)=>{J[X]=(L-.5)*120}),O.add(R);let P=new Ye(35,1,.05,220),$=new Go(P,t.domElement);l.push(()=>$.dispose()),$.enableDamping=!d.matches&&!h,$.dampingFactor=.09,$.rotateSpeed=.6,$.zoomSpeed=.8,$.enablePan=!1;let N=null,j=null,dt=!1,it=0,rt=!1,ft="outside",G=null,tt=null,Mt=[],lt=[],Dt=null,_t={w:1,h:1};function Ct(L){L.traverse(X=>{X.geometry&&X.geometry.dispose()})}function jt(L,X){var ln;Dt&&(O.remove(Dt),Ct(Dt),(ln=Dt.userData.mats)==null||ln.forEach(le=>le.dispose()));let J=new je;Dt=J,O.add(J);let nt=[],Jt=((le,Ae="#ffffff",cn=.9)=>{let _n=new $e({color:Ae,map:(le==null?void 0:le.map)||null,normalMap:(le==null?void 0:le.normalMap)||null,roughness:cn});return nt.push(_n),_n})(b.paving()),{x0:_,x1:C,z0:H}=X,W=L.depth/2+Math.max(ji(L).front,0)+(L.deck||0),B=1.2,St=2.4,Et=new de(new Wn(B,St),Jt);Et.rotation.x=-Math.PI/2,Et.position.set(-L.width*.15,.006,W+St/2+.05),Et.receiveShadow=!0,Et.userData.ground=!0;let xt=Et.geometry.attributes.uv;for(let le=0;le<xt.count;le++)xt.setXY(le,xt.getX(le)*B,xt.getY(le)*St);J.add(Et);let At=new $e({color:"#2c4f29",roughness:.95,flatShading:!0});nt.push(At);let Lt=new $e({color:"#3d6b35",roughness:.95});nt.push(Lt);let $t=new $e({color:"#6e5a45",roughness:.95});nt.push($t);let kt=new $e({color:"#5d8a48",roughness:.9});nt.push(kt);let ie=new $e({color:"#e8b9c6",roughness:.9});nt.push(ie);let ee=(()=>{let le=7;return()=>(le=le*16807%2147483647)/2147483647})(),xe=H-3.4,Ue=[];for(let[le,Ae,cn]of[[0,0,1],[1,.7,.85]])for(let _n=_-7+le*.35;_n<=C+7;_n+=.55+ee()*.2){let Pn=4.2+ee()*1.3-le*.3,Qi=.5+ee()*.18,Qo=new Eo(Qi,Pn,10,3);Qo.translate(_n,Pn/2+.25,xe-Ae+(ee()-.5)*.3);let ta=Qo.attributes.position;for(let wr=0;wr<ta.count;wr++){let zu=1+(ee()-.5)*.16;ta.setX(wr,_n+(ta.getX(wr)-_n)*zu)}Ue.push(Qo)}let pe=[],Qt=[];for(let le of Ue){let Ae=le.toNonIndexed();Ae.computeVertexNormals();let cn=Ae.attributes.position.array,_n=Ae.attributes.normal.array;for(let Pn=0;Pn<cn.length;Pn++)pe.push(cn[Pn]),Qt.push(_n[Pn]);Ae.dispose(),le.dispose()}let We=new ke;We.setAttribute("position",new Me(pe,3)),We.setAttribute("normal",new Me(Qt,3));let ge=new de(We,At);ge.castShadow=!0,ge.receiveShadow=!0,ge.userData.hedge=!0,J.add(ge);let an=new $e({color:"#7c7468",roughness:.9});nt.push(an);let Hn=C-_+10,Je=xe+1.2,Cn=new de(new ze(Hn,1.8,.04),an);Cn.position.set((_+C)/2,.9,Je),Cn.castShadow=Cn.receiveShadow=!0,Cn.userData.hedge=!0,J.add(Cn);for(let le=(_+C)/2-Hn/2;le<=(_+C)/2+Hn/2;le+=1.83){let Ae=new de(new ze(.1,1.86,.1),an);Ae.position.set(le,.93,Je+.07),Ae.userData.hedge=!0,J.add(Ae)}J.userData.hedgeZ=Je;let Se=(le,Ae,cn)=>{let _n=new je;_n.position.set(le,0,Ae),J.add(_n);for(let Pn=0;Pn<6;Pn++){let Qi=new de(new ur(.26*cn*(.7+ee()*.5),1),Pn%2?kt:Lt);Qi.position.set((ee()-.5)*.5*cn,.22*cn+ee()*.3*cn,(ee()-.5)*.5*cn),Qi.castShadow=Qi.receiveShadow=!0,_n.add(Qi)}};Se(_-1.1,W-.5,.8),Se(C+1.2,W-1.1,.7),Se(_-1.4,H+.2,1);let Ke=new je;Ke.position.set(C+2.6,0,H-1.2),Ke.scale.setScalar(.8),Ke.visible=!1,J.add(Ke);let jn=new de(new Ne(.09,.13,2.2,8),$t);jn.position.y=1.1,jn.castShadow=!0,Ke.add(jn);for(let le=0;le<9;le++){let Ae=new de(new ur(.55+ee()*.3,1),le%3?ie:kt);Ae.position.set((ee()-.5)*1.4,2.3+ee()*.9,(ee()-.5)*1.4),Ae.castShadow=!0,Ke.add(Ae)}J.userData.mats=nt}let yt=new WeakMap;function bt(L,X){let J=nt=>{if(!(nt!=null&&nt.isMeshStandardMaterial))return nt;let Bt=yt.get(nt);return Bt||(Bt=new Co({color:nt.color,map:nt.map,emissive:nt.emissive,emissiveIntensity:nt.emissiveIntensity,transparent:nt.transparent,opacity:nt.opacity,side:nt.side,depthWrite:nt.depthWrite,visible:nt.visible}),Bt.name=nt.name,Bt.userData=nt.userData,yt.set(nt,Bt),X==null||X.push(Bt)),Bt};L.traverse(nt=>{nt.isMesh&&(nt.material=Array.isArray(nt.material)?nt.material.map(J):J(nt.material))})}function I(){S.traverse(L=>{var X;for(let J of L.material?[].concat(L.material):[])J.userData.flatColour||!((X=J.map)!=null&&X.userData.hex)||(J.color.multiply(new re(J.map.userData.hex)),J.userData.flatColour=!0)})}function Wt(L){var X;for(let J of lt)S.remove(J),(X=J.dispose)==null||X.call(J);if(lt=[],!!rt){for(let J of L.filter(nt=>nt.kind==="interior").slice(0,4)){let nt=new Yi("#ffd8a8",5,7,1.6);nt.position.copy(J.position),S.add(nt),lt.push(nt)}for(let J of L.filter(nt=>nt.kind!=="interior").slice(0,5))if(J.kind==="down"||J.kind==="updown"){let nt=new pr("#ffcf94",6,4.5,.75,.65,1.4);if(nt.position.copy(J.position),nt.target.position.copy(J.position).add(new A(0,-2,.25)),S.add(nt,nt.target),lt.push(nt,nt.target),J.kind==="updown"){let Bt=new pr("#ffcf94",3,2.2,.5,.7,1.4);Bt.position.copy(J.position),Bt.target.position.copy(J.position).add(new A(0,2,0)),S.add(Bt,Bt.target),lt.push(Bt,Bt.target)}}else{let nt=new Yi("#ffc98a",2.5,4,1.8);nt.position.copy(J.position),S.add(nt),lt.push(nt)}}}function Tt(){S.background=rt?w:z,S.fog.color.set(rt?"#2f3534":"#e4eae2"),M.intensity=rt?.14:1.05,M.color.set(rt?"#5b6f96":"#e6eef4"),U.intensity=rt?.18:2.7,U.color.set(rt?"#9fb4ff":"#fff1dc"),T.intensity=rt?.05:.55,k(rt?.07:.55),t.toneMappingExposure=rt?1.2:.98,h&&(M.intensity=rt?.35:1.25,U.intensity=rt?.08:.55,T.intensity=rt?.02:.12),j==null||j.group.traverse(L=>{var X;L.isMesh&&((X=L.userData.tags)!=null&&X.includes("lamp"))&&(L.material.emissiveIntensity=rt?4:.35)}),Wt((j==null?void 0:j.lights)||[])}function wt(L){let X=Math.max(L.x1-L.x0,L.z1-L.z0)/2+2.5,J=U.shadow.camera;J.left=-X,J.right=X,J.top=X,J.bottom=-X,J.near=1,J.far=40,J.updateProjectionMatrix(),U.target.position.set((L.x0+L.x1)/2,0,(L.z0+L.z1)/2)}let mt=()=>{let L=Sr(N);return new mn(new A(L.x0-.2,0,L.z0-.25),new A(L.x1+.2,L.top+.05,L.z1+.1))};function Ft(L,X,J,nt,Bt=1.1){let Jt=L.getCenter(new A),_=new A().crossVectors(new A(0,1,0),X).normalize();_.lengthSq()<.1&&_.set(1,0,0);let C=new A().crossVectors(X,_).normalize(),H=Math.tan(pi.degToRad(J/2)),W=H*nt,B=0;for(let St of[L.min.x,L.max.x])for(let Et of[L.min.y,L.max.y])for(let xt of[L.min.z,L.max.z]){let At=new A(St,Et,xt).sub(Jt),Lt=At.dot(X);B=Math.max(B,Lt+Math.abs(At.dot(_))/W*Bt,Lt+Math.abs(At.dot(C))/H*Bt)}return B}function Xt(L=null){let X=N.width,J=N.depth,nt=Ce.base,Bt=X-2*fe,Jt=-J/2+fe,_=J/2-fe,C=vr(N).find(Lt=>Lt.id==="front"),H=N.openings.find(Lt=>Lt.wall==="front"&&Lt.role==="main")||N.openings.find(Lt=>Lt.wall==="front"&&gn[Lt.type].group==="door"),W=H?C.a[0]+H.p*C.L:0,St=N.layout==="divided"&&N.width>=5||W>0?-1:1,Et=St*(Bt/2-.45),xt=new A(Et,nt+1.55,_-.35),At=L||new A(-St*Bt*.22,nt+.95,Jt+.2);return{pos:xt,at:At}}function E(L,X={}){let J=_t.w/_t.h;if(L==="inside"){let{pos:H,at:W}=Xt(X.lookAt),B=W.clone().sub(H).normalize();return{view:"inside",fov:J<.9?84:74,position:H,target:H.clone().addScaledVector(B,.02)}}if(L==="plan"){let H=mt();H.max.y=1;let W=H.getCenter(new A),B=Ft(H,new A(0,1,1e-4).normalize(),30,J,1.22);return{view:"plan",fov:30,position:new A(W.x,B+1,W.z+.001),target:new A(W.x,0,W.z)}}let nt=(X.dir||new A(-.62,.32,1)).clone().normalize(),Bt=X.box||mt(),Jt=Bt.getCenter(new A);X.box||(Jt.y=Math.min(Jt.y,1.25));let _=35,C=Math.max(X.minDistance||0,Ft(Bt,nt,_,J,X.margin||(X.box?1.08:1.2)));return{view:"outside",fov:_,position:Jt.clone().addScaledVector(nt,C),target:Jt}}function v(L){if($.enableRotate=L!=="plan",$.enablePan=L==="plan",$.screenSpacePanning=!0,$.enableZoom=L!=="inside",L==="outside"){$.minPolarAngle=.12,$.maxPolarAngle=1.5;let X=Sr(N);$.minDistance=2.2,$.maxDistance=Math.max(X.x1-X.x0,X.z1-X.z0)*3+14,$.rotateSpeed=.6,$.mouseButtons.LEFT=qn.ROTATE}else L==="inside"?($.minPolarAngle=.5,$.maxPolarAngle=2.4,$.minDistance=0,$.maxDistance=.05,$.rotateSpeed=-.35):($.minDistance=2,$.maxDistance=90,$.mouseButtons.LEFT=qn.PAN,$.touches.ONE=Yn.PAN);L!=="plan"&&($.touches.ONE=Yn.ROTATE)}function Z(){if(!j)return;let L=ft==="plan";j.group.traverse(X=>{let J=X.userData.tags;!J||!X.isMesh||(J.includes("roof")||J.includes("ceiling")||J.includes("lighting")||J.includes("canopyLights"))&&(X.visible=!L)}),Re()}function ct(L,X=!0){let J=L.view!==ft;ft=L.view,v(ft),Z();let nt={position:P.position.clone(),target:$.target.clone(),fov:P.fov};!X||d.matches||J&&(ft==="inside"||nt.position.distanceTo(L.position)>70)?(P.position.copy(L.position),$.target.copy(L.target),P.fov=L.fov,P.updateProjectionMatrix(),G=null,$.update(),Y()):(G={start:performance.now(),duration:J?700:650,from:nt,to:L},Y()),J&&o(ft)}function vt(L){if(!G)return!1;let X=Math.min(1,(L-G.start)/G.duration),J=ix(X),nt=G.from.target.clone().lerp(G.to.target,J),Bt=new fi().setFromVector3(G.from.position.clone().sub(G.from.target)),Jt=new fi().setFromVector3(G.to.position.clone().sub(G.to.target)),_=Jt.theta-Bt.theta;_>Math.PI&&(_-=2*Math.PI),_<-Math.PI&&(_+=2*Math.PI);let C=new fi(Bt.radius+(Jt.radius-Bt.radius)*J,Bt.phi+(Jt.phi-Bt.phi)*J,Bt.theta+_*J);return P.position.copy(nt).add(new A().setFromSpherical(C)),$.target.copy(nt),P.fov=G.from.fov+(G.to.fov-G.from.fov)*J,P.updateProjectionMatrix(),X===1&&(G=null),!0}let ut=new je;ut.name="highlight",S.add(ut);let Ot=h?null:new ks({color:nx,linewidth:3.2,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1});Ot&&(Ot.resolution.set(1,1),l.push(()=>Ot.dispose()));let zt=null;function Gt(L){let X=[];return j==null||j.group.traverse(J=>{J.isMesh&&J.visible&&J.userData.tags&&L.some(nt=>J.userData.tags.includes(nt))&&!J.userData.tags.includes("glass")&&!J.userData.ground&&X.push(J)}),X}function oe(L){let X=new mn;for(let J of L)X.expandByObject(J);return X}function Ut(L){if(ut.clear(),zt==null||zt.dispose(),zt=null,!Ot||!L.length)return;let X=[],J=new A;for(let Bt of L.slice(0,260)){Bt.updateMatrixWorld(!0);let Jt=new To(Bt.geometry,32),_=Jt.attributes.position;for(let C=0;C<_.count;C++)J.fromBufferAttribute(_,C).applyMatrix4(Bt.matrixWorld),X.push(J.x,J.y,J.z);if(Jt.dispose(),X.length>24e4)break}zt=new Bs().setPositions(X);let nt=new $o(zt,Ot);nt.renderOrder=5,nt.frustumCulled=!1,ut.add(nt)}let qt=[];function ne(L){var J;if(!Dt)return;let X=L.position.z>((J=Dt.userData.hedgeZ)!=null?J:-99)+.6;Dt.traverse(nt=>{nt.userData.hedge&&(nt.visible=X)})}function Y(){!dt&&!st&&!it&&(it=requestAnimationFrame(ht))}let K=0,et=null,st=!1,at=0,D=0;function ht(L){if(it=0,K++,dt||st)return;ve(L);let X=vt(L),J=$.update(),nt=!1;if(tt&&Ot){tt.frames=(tt.frames||0)+1;let Bt=Math.min((L-tt.start)/1e3,tt.frames/13);Ot.opacity=Bt<0?0:Bt<1.8?.55+.45*Math.abs(Math.sin(Bt*Math.PI*1.1)):Math.max(qt.length?.6:0,1-(Bt-1.8)/1.2),Bt>3&&(tt=null,qt.length?Ut(qt):Ut([]),Ot.opacity=qt.length?.6:0),nt=!!tt}try{Ot&&Ot.resolution.set(_t.w,_t.h),ne(P),t.render(S,P)}catch(Bt){et=String(Bt)}Re(),!y&&!Q&&se(),(X||J||nt)&&Y()}let Q=!1,gt=0,Ht=[],Vt=[];function se(){let L=!1;if(!h&&!g)try{let X=t.getContext(),J=t.getDrawingBufferSize(new It),nt=new Uint8Array(4),Bt=[];for(let _ of[.92,.5,.08])X.readPixels(J.x>>1,Math.round(J.y*_),1,1,X.RGBA,X.UNSIGNED_BYTE,nt),Bt.push([nt[0],nt[1],nt[2]]);Ht.push(Bt),L=Bt.every(([_,C,H])=>_+C+H<12);let Jt=X.getError();Jt&&Vt.push(Jt)}catch(X){Ht.push(String(X))}if(L&&++gt<3){Y();return}L&&(g="blank"),Q=!0,setTimeout(()=>{dt||st||(g?n(g):(y=!0,s()))})}function ve(L){let X=L-at;at=L,X>0&&X<250&&(D=X>50?D+1:Math.max(0,D-2),!(D<20||p<=1)&&(D=0,p=Math.max(1,Math.round((p-.25)*4)/4),t.setPixelRatio(p),_t={w:0,h:0},Nt()))}$.addEventListener("change",Y),$.addEventListener("start",()=>{G=null});let me=!1;function ae(L){let X=L.clone().project(P);return[(X.x+1)/2*_t.w,(1-X.y)/2*_t.h,X.z]}function Re(){if(!N||!me&&ft!=="plan"){f.replaceChildren();return}let L=N.width,X=N.depth,J=ft==="plan"?0:.02,nt=Ki[N.range],Bt=[],Jt="http://www.w3.org/2000/svg",_=(B,St,Et)=>{let xt=document.createElementNS(Jt,B);for(let[At,Lt]of Object.entries(St))xt.setAttribute(At,Lt);return Et&&(xt.textContent=Et),Bt.push(xt),xt},C=(B,St,Et,xt)=>{let[At,Lt,$t]=ae(B.clone().add(xt)),[kt,ie,ee]=ae(St.clone().add(xt));if($t>1||ee>1)return;let xe=(At+kt)/2,Ue=(Lt+ie)/2;_("line",{x1:At,y1:Lt,x2:kt,y2:ie}),_("line",{class:"tick",x1:At,y1:Lt-6,x2:At,y2:Lt+6}),_("line",{class:"tick",x1:kt,y1:ie-6,x2:kt,y2:ie+6});let pe=_("g",{transform:`translate(${xe} ${Ue})`}),Qt=document.createElementNS(Jt,"rect");Qt.setAttribute("x","-36"),Qt.setAttribute("y","-12"),Qt.setAttribute("width","72"),Qt.setAttribute("height","24"),Qt.setAttribute("rx","12");let We=document.createElementNS(Jt,"text");We.setAttribute("text-anchor","middle"),We.setAttribute("dy","4"),We.textContent=Et,pe.append(Qt,We)},H=ji(N),W=X/2+H.front;if(C(new A(-L/2,J,X/2),new A(L/2,J,X/2),`${L.toFixed(1)}m`,new A(0,0,Math.max(.55,W-X/2+.5,(N.deck||0)+.5))),C(new A(L/2,J,X/2),new A(L/2,J,-X/2),`${X.toFixed(1)}m`,new A(.6+H.right,0,0)),ft==="plan"){nt.canopy&&C(new A(-L/2,J,X/2),new A(-L/2,J,X/2+H.front),`${H.front.toFixed(1)}m`,new A(-.6-H.left,0,0)),N.deck&&N.deck!==H.front&&C(new A(-L/2,J,X/2),new A(-L/2,J,X/2+N.deck),`Deck ${N.deck.toFixed(1)}m`,new A(-(nt.canopy?1.3:.6)-H.left,0,0));let B=L-2*fe,St=X-2*fe;C(new A(-B/2,J,-X/2+fe+.02),new A(B/2,J,-X/2+fe+.02),`${B.toFixed(2)}m inside`,new A(0,0,.45));let Et=[["Front",0,Math.max(W,X/2+(N.deck||0))+.3],["Back",0,-X/2-.5],["Left",-L/2-.5-H.left,-X*.3],["Right",L/2+.5+H.right,-X*.3]];for(let[xt,At,Lt]of Et){let[$t,kt]=ae(new A(At,0,Lt));_("text",{class:"wall-name",x:$t,y:kt,"text-anchor":"middle"},xt)}}f.setAttribute("viewBox",`0 0 ${_t.w} ${_t.h}`),f.replaceChildren(...Bt)}let Le=new gr,ot=null;t.domElement.addEventListener("pointerdown",L=>{ot=[L.clientX,L.clientY]}),t.domElement.addEventListener("pointerup",L=>{var Bt;if(!ot||Math.hypot(L.clientX-ot[0],L.clientY-ot[1])>6||!j)return;let X=t.domElement.getBoundingClientRect();Le.setFromCamera(new It((L.clientX-X.left)/X.width*2-1,-((L.clientY-X.top)/X.height)*2+1),P);let J=Le.intersectObject(j.group,!0).find(Jt=>Jt.object.visible),nt=(Bt=J==null?void 0:J.object.userData.tags)==null?void 0:Bt.find(Jt=>Jt.startsWith("opening:"));if(nt)r({kind:"opening",id:nt.slice(8)});else if(J){let Jt=["canopyLights","porch","canopy","fascia","roof","deck","floor","furniture","cladding","trims","base","layout","electrics","lighting","heaters","acousticPanels","upDownLights","includedLights","outdoorSocket","waterButt","connection","interiorWalls","ceiling"].find(_=>{var C;return(C=J.object.userData.tags)==null?void 0:C.includes(_)});Jt&&r({kind:"part",part:Jt})}});let pt=L=>{P.fov=pi.clamp(P.fov*L,38,88),P.updateProjectionMatrix(),Y()};t.domElement.addEventListener("wheel",L=>{ft==="inside"&&(L.preventDefault(),pt(L.deltaY>0?1.08:1/1.08))},{passive:!1});let Pt=new Map,Rt=0;t.domElement.addEventListener("pointerdown",L=>{L.pointerType==="touch"&&Pt.set(L.pointerId,[L.clientX,L.clientY])}),t.domElement.addEventListener("pointermove",L=>{if(!Pt.has(L.pointerId))return;if(Pt.set(L.pointerId,[L.clientX,L.clientY]),ft!=="inside"||Pt.size!==2){Rt=0;return}let[X,J]=[...Pt.values()],nt=Math.hypot(X[0]-J[0],X[1]-J[1]);Rt&&pt(Rt/nt),Rt=nt});for(let L of["pointerup","pointercancel","pointerleave"])t.domElement.addEventListener(L,X=>{Pt.delete(X.pointerId),Rt=0});function Nt(){let L=i.getBoundingClientRect();L.width<2||L.height<2||Math.abs(L.width-_t.w)<.5&&Math.abs(L.height-_t.h)<.5||(_t={w:L.width,h:L.height},t.setSize(_t.w,_t.h,!1),P.aspect=_t.w/_t.h,P.updateProjectionMatrix(),N&&ct(E(ft),!1),Y())}let te=new ResizeObserver(Nt);l.push(()=>te.disconnect()),te.observe(i),t.domElement.addEventListener("webglcontextlost",L=>{L.preventDefault(),!(dt||st)&&(st=!0,it&&cancelAnimationFrame(it),it=0,e())});let Yt="",Kt={update(L,{refit:X=!1}={}){if(dt)return;let J=JSON.stringify({...L,step:0});if(J===Yt&&!X)return;Yt=J;let nt=!N,Bt=N&&(N.width!==L.width||N.depth!==L.depth||N.range!==L.range||N.sideCanopy!==L.sideCanopy||N.deck!==L.deck);b.begin();let Jt;try{Jt=Ou(L,b)}catch(C){if(et=String(C),Yt="",nt)throw C;console.error(C);return}N=L,j&&(S.remove(j.group),Ct(j.group),j.materials.forEach(C=>C.dispose())),j=Jt,S.add(j.group);let _=Sr(N);jt(N,_),b.prune(c.cache),h&&I(),u&&(bt(j.group,j.materials),bt(Dt,Dt.userData.mats),bt(R)),wt(_),Tt(),qt=Mt.length?Gt(Mt):[],tt?(tt.meshes=Gt(tt.tags),Ut(tt.meshes)):Ut(qt),Ot&&!tt&&(Ot.opacity=qt.length?.6:0),Z(),nt?(Nt(),ct(E("outside"),!1)):(X||Bt)&&ct(E(ft),!0),Y()},setView(L,{animate:X=!0}={}){N&&ct(E(L),X)},get view(){return ft},focus(L){var Jt;if(!N||!j)return;S.updateMatrixWorld(!0);let X=L.dir,J={...L,dir:X&&X!=="auto"?Array.isArray(X)?new A(...X):new A(X.x,X.y,X.z):void 0},nt=J.tags||[],Bt=J.view||"outside";if(Bt==="inside"){let _=Gt(nt),C=_.length?oe(_).getCenter(new A):null;C&&J.lookDown&&(C.y=Ce.base),ct(E("inside",{lookAt:C}),!0)}else if(Bt==="plan")ct(E("plan"),!0);else{let _=nt.length?Gt(nt):[],C=_.length?oe(_):mt();if(L.dir==="auto"&&_.length){let H=new A(0,0,1).transformDirection(_[_.length-1].parent.matrixWorld);H.y=0,H.lengthSq()<1e-6&&H.set(0,0,1),C=oe(_.filter(W=>new A(0,0,1).transformDirection(W.parent.matrixWorld).dot(H)>.7)),J.dir=H.normalize().add(new A(0,.22,0)).normalize()}else L.dir==="auto"&&(J.dir=void 0);if(J.context!==!1){let H=(Jt=J.pad)!=null?Jt:.35,W=C.getSize(new A);C=C.clone().expandByVector(new A(Math.max(H,W.x*.15),Math.max(H*.7,.3),Math.max(H,W.z*.15))),J.whole&&(C=mt()),J.ground&&(C.min.y=0),C.min.y=Math.max(0,C.min.y)}ct(E("outside",{dir:J.dir,box:C,minDistance:J.minDistance||3}),!0)}J.highlight!==!1&&nt.length&&(tt={tags:nt,start:performance.now()+(d.matches?0:250),meshes:Gt(nt)},Ut(tt.meshes)),Y()},select(L){S.updateMatrixWorld(!0),Mt=L||[],qt=L!=null&&L.length?Gt(L):[],tt||(Ut(qt),Ot&&(Ot.opacity=qt.length?.6:0)),Y()},zoom(L){if(ft==="inside"){P.fov=pi.clamp(P.fov-L*8,38,88),P.updateProjectionMatrix(),Y();return}let X=P.position.clone().sub($.target),J=pi.clamp(X.length()*(L>0?.8:1.25),$.minDistance,$.maxDistance),nt={view:ft,fov:P.fov,position:$.target.clone().add(X.setLength(J)),target:$.target.clone()};G=d.matches?null:{start:performance.now(),duration:260,from:{position:P.position.clone(),target:$.target.clone(),fov:P.fov},to:nt},G||P.position.copy(nt.position),Y()},reset(){ct(E(ft==="plan"?"plan":ft),!0)},setNight(L){rt=!!L,Tt(),Y()},setDimensions(L){me=!!L,Re(),Y()},capture(L=["hero","front","back","left","right","inside","inside2","plan","dusk"],{width:X=2e3,height:J=1250}={}){if(!N||st||h||t.getContext().isContextLost())return{};X>c.capture&&(J=Math.round(J*c.capture/X),X=c.capture);let nt=new Ye(35,X/J,.05,220),Bt={night:rt,view:ft,size:t.getSize(new It),ratio:t.getPixelRatio()},Jt={},_=ut.visible;ut.visible=!1;try{t.setPixelRatio(1),t.setSize(X,J,!1);let C=_t;_t={w:X,h:J};let H=Sr(N),W=()=>mt();for(let B of L){let St=B==="dusk";rt!==St&&(rt=St,Tt());let Et;if(B==="hero"||B==="dusk")Et=E("outside",{dir:new A(-.62,.26,1),margin:1.06});else if(B==="front")Et=E("outside",{dir:new A(0,.12,1),margin:1.08});else if(B==="back")Et=E("outside",{dir:new A(0,.14,-1),margin:1.08,box:W()});else if(B==="left")Et=E("outside",{dir:new A(-1,.14,0),margin:1.08,box:W()});else if(B==="right")Et=E("outside",{dir:new A(1,.14,0),margin:1.08,box:W()});else if(B==="inside")Et=E("inside");else if(B==="inside2"){let xt=N.width,At=N.depth,Lt=xt-2*fe,$t=-At/2+fe,kt=At/2-fe,ie=Ce.base,ee=N.layout==="divided",xe=ee&&N.width<5,Ue=xe?$t+Math.max(1,Math.min(1.8,(kt-$t)*.4))+.5:$t+.4;Et={view:"inside",fov:72,position:new A(ee&&!xe?-Lt/2+.45:Lt/2-.4,ie+1.45,Math.min(Ue,kt-.3)),target:new A(ee&&!xe?Lt/4:-Lt/4,ie+1,kt)}}else Et=E("plan");ft=Et.view,Z(),nt.fov=Et.fov,nt.aspect=X/J,nt.updateProjectionMatrix(),nt.position.copy(Et.position),nt.lookAt(Et.target),ne(nt),t.render(S,nt),Jt[B]=t.domElement.toDataURL("image/jpeg",.9)}_t=C}catch(C){}finally{rt!==Bt.night&&(rt=Bt.night,Tt()),ft=Bt.view,Z(),ut.visible=_,t.setPixelRatio(Bt.ratio),t.setSize(Bt.size.x,Bt.size.y,!1),st||t.render(S,P)}return Jt},dispose(){dt||(dt=!0,it&&cancelAnimationFrame(it),te.disconnect(),$.dispose(),j&&(Ct(j.group),j.materials.forEach(L=>L.dispose())),Dt&&Ct(Dt),zt==null||zt.dispose(),Ot==null||Ot.dispose(),b.dispose(),x==null||x.dispose(),t.dispose(),st||t.forceContextLoss(),t.domElement.remove(),f.remove())},quality:()=>({tier:a,ratio:p,lost:st,broken:g,...b.stats(),webgl:h?0:t.capabilities.isWebGL2===!1?1:2,svg:h?t.info:void 0}),diagnostics(){let L={tier:a,gpu:Kt.gpu(),ratio:p,frames:K,verified:y,broken:g,shaderErrors:m.slice(0,3),glErrors:Vt.slice(0,5),samples:Ht.slice(0,3),lastError:et,textures:b.stats()};if(h)L.svg=t.info;else try{let X=t.getContext(),J=X.getContextAttributes()||{};L.webgl=t.capabilities.isWebGL2===!1?1:2,L.context={antialias:J.antialias,alpha:J.alpha,lost:X.isContextLost()},L.maxTexture=X.getParameter(X.MAX_TEXTURE_SIZE),L.extensions=["EXT_color_buffer_float","EXT_color_buffer_half_float","KHR_parallel_shader_compile","OES_texture_float_linear"].filter(nt=>X.getExtension(nt)),L.buffer=t.getDrawingBufferSize(new It).toArray()}catch(X){L.contextError=String(X)}return L},gpu(){if(h)return"none (SVG)";try{let L=t.getContext(),X=L.getExtension("WEBGL_debug_renderer_info");return String(L.getParameter(X?X.UNMASKED_RENDERER_WEBGL:L.RENDERER))}catch(L){return"unknown"}},_debug:()=>{var L;return{scene:S,camera:P,controls:$,renderer:t,room:j,view:ft,state:N,highlight:ut,pulse:tt,anim:G,frames:K,frame:it,lastError:et,lineOpacity:(L=Ot==null?void 0:Ot.opacity)!=null?L:0,THREE:{Raycaster:gr,Vector3:A,DoubleSide:fn}}}};return Kt}export{Nc as TIERS,fy as createScene};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
