var Dm=Object.defineProperty;var Om=(r,e,t)=>e in r?Dm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Q=(r,e,t)=>Om(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="183",Fm=0,qu=1,Bm=2,Bo=1,zm=2,Fr=3,pi=0,rn=1,wn=2,ui=0,qs=1,Yo=2,Ju=3,Yu=4,km=5,Zi=100,Vm=101,Gm=102,Hm=103,Wm=104,Xm=200,qm=201,Jm=202,Ym=203,Lc=204,Nc=205,$m=206,Km=207,Zm=208,Qm=209,jm=210,eg=211,tg=212,ng=213,ig=214,Uc=0,Dc=1,Oc=2,Ks=3,Fc=4,Bc=5,zc=6,kc=7,fl=0,sg=1,rg=2,Zn=0,np=1,ip=2,sp=3,rp=4,ap=5,op=6,lp=7,$u="attached",ag="detached",Oh=300,Oi=301,os=302,zo=303,ko=304,Na=306,mi=1e3,Un=1001,Wr=1002,It=1003,Fh=1004,ks=1005,Lt=1006,kr=1007,$n=1008,vn=1009,cp=1010,hp=1011,Xr=1012,Bh=1013,On=1014,cn=1015,gi=1016,zh=1017,kh=1018,qr=1020,up=35902,dp=35899,fp=1021,pp=1022,hn=1023,_i=1026,ts=1027,Vh=1028,pl=1029,Zs=1030,Gh=1031,Hh=1033,Vo=33776,Go=33777,Ho=33778,Wo=33779,Vc=35840,Gc=35841,Hc=35842,Wc=35843,Xc=36196,qc=37492,Jc=37496,Yc=37488,$c=37489,Kc=37490,Zc=37491,Qc=37808,jc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,dh=36492,fh=36494,ph=36495,mh=36283,gh=36284,_h=36285,yh=36286,mp=2200,og=2201,lg=2202,Jr=2300,Yr=2301,Tl=2302,Ku=2303,Vs=2400,Gs=2401,$o=2402,Wh=2500,cg=2501,hg=0,gp=1,xh=2,ug=3200,ds=0,dg=1,Li="",Xt="srgb",an="srgb-linear",Ko="linear",ft="srgb",xs=7680,Zu=519,fg=512,pg=513,mg=514,Xh=515,gg=516,_g=517,qh=518,yg=519,vh=35044,nn=35048,Qu="300 es",Dn=2e3,$r=2001;function xg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const vg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Hs(r,e){return new vg[r](e)}function Mg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sg(){const r=Kr("canvas");return r.style.display="block",r}const ju={};function Zo(...r){const e="THREE."+r.shift();console.log(e,...r)}function _p(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Se(...r){r=_p(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=_p(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Qo(...r){const e=r.join(" ");e in ju||(ju[e]=!0,Se(...r))}function bg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const wg={[Uc]:Dc,[Oc]:zc,[Fc]:kc,[Ks]:Bc,[Dc]:Uc,[zc]:Oc,[kc]:Fc,[Bc]:Ks};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const Js=Math.PI/180,Qs=180/Math.PI;function Tn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ze(r,e,t){return Math.max(e,Math.min(t,r))}function Jh(r,e){return(r%e+e)%e}function Eg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Tg(r,e,t){return r!==e?(t-r)/(e-r):0}function Vr(r,e,t){return(1-t)*r+t*e}function Ag(r,e,t,n){return Vr(r,e,1-Math.exp(-t*n))}function Cg(r,e=1){return e-Math.abs(Jh(r,e*2)-e)}function Rg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ig(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lg(r,e){return r+Math.random()*(e-r)}function Ng(r){return r*(.5-Math.random())}function Ug(r){r!==void 0&&(ed=r);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dg(r){return r*Js}function Og(r){return r*Qs}function Fg(r){return(r&r-1)===0&&r!==0}function Bg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vg={DEG2RAD:Js,RAD2DEG:Qs,generateUUID:Tn,clamp:Ze,euclideanModulo:Jh,mapLinear:Eg,inverseLerp:Tg,lerp:Vr,damp:Ag,pingpong:Cg,smoothstep:Rg,smootherstep:Pg,randInt:Ig,randFloat:Lg,randFloatSpread:Ng,seededRandom:Ug,degToRad:Dg,radToDeg:Og,isPowerOfTwo:Fg,ceilPowerOfTwo:Bg,floorPowerOfTwo:zg,setQuaternionFromProperEuler:kg,normalize:pt,denormalize:Nn};let ne=class yp{constructor(e=0,t=0){yp.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,o=Math.sin(o*x)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class xp{constructor(e=0,t=0,n=0){xp.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Al=new I,td=new un;let Ke=class vp{constructor(e,t,n,i,s,a,o,l,c){vp.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],M=i[4],v=i[7],E=i[2],w=i[5],T=i[8];return s[0]=a*_+o*x+l*E,s[3]=a*m+o*M+l*w,s[6]=a*g+o*v+l*T,s[1]=c*_+h*x+u*E,s[4]=c*m+h*M+u*w,s[7]=c*g+h*v+u*T,s[2]=d*_+f*x+p*E,s[5]=d*m+f*M+p*w,s[8]=d*g+f*v+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Cl=new Ke,nd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gg(){const r={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[an]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),r}const st=Gg();function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class Hg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Kr("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wg=0;class ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Rl(i[a].image)):s.push(Rl(i[a]))}else s=Rl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let Xg=0;const Pl=new I;class Nt extends fs{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Un,i=Un,s=Lt,a=$n,o=hn,l=vn,c=Nt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Tn(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mi:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mi:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Oh;Nt.DEFAULT_ANISOTROPY=1;let St=class Mp{constructor(e=0,t=0,n=0,i=1){Mp.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,E=(g+1)/2,w=(h+d)/4,T=(u+_)/4,y=(p+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=T/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=y/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class qg extends fs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Nt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends qg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sp extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Je=class Mh{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m){Mh.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,$g)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Mi.crossVectors(n,pn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Mi.crossVectors(n,pn)),Mi.normalize(),Ga.crossVectors(pn,Mi),i[0]=Mi.x,i[4]=Ga.x,i[8]=pn.x,i[1]=Mi.y,i[5]=Ga.y,i[9]=pn.y,i[2]=Mi.z,i[6]=Ga.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],v=n[11],E=n[15],w=i[0],T=i[4],y=i[8],S=i[12],L=i[1],R=i[5],N=i[9],U=i[13],V=i[2],B=i[6],k=i[10],F=i[14],ie=i[3],Z=i[7],ce=i[11],de=i[15];return s[0]=a*w+o*L+l*V+c*ie,s[4]=a*T+o*R+l*B+c*Z,s[8]=a*y+o*N+l*k+c*ce,s[12]=a*S+o*U+l*F+c*de,s[1]=h*w+u*L+d*V+f*ie,s[5]=h*T+u*R+d*B+f*Z,s[9]=h*y+u*N+d*k+f*ce,s[13]=h*S+u*U+d*F+f*de,s[2]=p*w+_*L+m*V+g*ie,s[6]=p*T+_*R+m*B+g*Z,s[10]=p*y+_*N+m*k+g*ce,s[14]=p*S+_*U+m*F+g*de,s[3]=x*w+M*L+v*V+E*ie,s[7]=x*T+M*R+v*B+E*Z,s[11]=x*y+M*N+v*k+E*ce,s[15]=x*S+M*U+v*F+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*f-c*d,M=o*f-c*u,v=o*d-l*u,E=a*f-c*h,w=a*d-l*h,T=a*u-o*h;return t*(_*x-m*M+g*v)-n*(p*x-m*E+g*w)+i*(p*M-_*E+g*T)-s*(p*v-_*w+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*o-n*a,M=t*l-i*a,v=t*c-s*a,E=n*l-i*o,w=n*c-s*o,T=i*c-s*l,y=h*_-u*p,S=h*m-d*p,L=h*g-f*p,R=u*m-d*_,N=u*g-f*_,U=d*g-f*m,V=x*U-M*N+v*R+E*L-w*S+T*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return e[0]=(o*U-l*N+c*R)*B,e[1]=(i*N-n*U-s*R)*B,e[2]=(_*T-m*w+g*E)*B,e[3]=(d*w-u*T-f*E)*B,e[4]=(l*L-a*U-c*S)*B,e[5]=(t*U-i*L+s*S)*B,e[6]=(m*v-p*T-g*M)*B,e[7]=(h*T-d*v+f*M)*B,e[8]=(a*N-o*L+c*y)*B,e[9]=(n*L-t*N-s*y)*B,e[10]=(p*w-_*v+g*x)*B,e[11]=(u*v-h*w-f*x)*B,e[12]=(o*S-a*R-l*y)*B,e[13]=(t*R-n*S+i*y)*B,e[14]=(_*M-p*E-m*x)*B,e[15]=(h*E-u*M+d*x)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,_=a*h,m=a*u,g=o*u,x=l*c,M=l*h,v=l*u,E=n.x,w=n.y,T=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+v)*E,i[2]=(p-M)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+g))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(p+M)*T,i[9]=(m-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),l=Ms.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Rn.copy(this);const c=1/a,h=1/o,u=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Dn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===Dn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$r)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Dn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===Dn)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===$r)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Ms=new I,Rn=new Je,Yg=new I(0,0,0),$g=new I(1,1,1),Mi=new I,Ga=new I,pn=new I,sd=new Je,rd=new un;let jn=class bp{constructor(e=0,t=0,n=0,i=bp.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";class ss{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kg=0;const ad=new I,Ss=new un,ii=new Je,Ha=new I,xr=new I,Zg=new I,Qg=new un,od=new I(1,0,0),ld=new I(0,1,0),cd=new I(0,0,1),hd={type:"added"},jg={type:"removed"},bs={type:"childadded",child:null},Il={type:"childremoved",child:null};class ct extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new I,t=new jn,n=new un,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ke}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xr,Ha,this.up):ii.lookAt(Ha,xr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(ii),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),bs.child=e,this.dispatchEvent(bs),bs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new I(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class En extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Nl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Jh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nl(a,s,e+1/3),this.g=Nl(a,s,e),this.b=Nl(a,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return st.workingToColorSpace(Yt.copy(this),e),Math.round(Ze(Yt.r*255,0,255))*65536+Math.round(Ze(Yt.g*255,0,255))*256+Math.round(Ze(Yt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Xt){st.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Wa);const n=Vr(Si.h,Wa.h,t),i=Vr(Si.s,Wa.s,t),s=Vr(Si.l,Wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Te;Te.NAMES=wp;class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new gl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yh extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pn=new I,si=new I,Ul=new I,ri=new I,ws=new I,Es=new I,ud=new I,Dl=new I,Ol=new I,Fl=new I,Bl=new St,zl=new St,kl=new St;class ln{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pn.subVectors(i,t),si.subVectors(n,t),Ul.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(si),l=Pn.dot(Ul),c=si.dot(si),h=si.dot(Ul),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Bl,s.x),a.addScaledVector(zl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),si.subVectors(e,t),Pn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ws.subVectors(i,n),Es.subVectors(s,n),Dl.subVectors(e,n);const l=ws.dot(Dl),c=Es.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const h=ws.dot(Ol),u=Es.dot(Ol);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ws,a);Fl.subVectors(e,s);const f=ws.dot(Fl),p=Es.dot(Fl);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Es,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ud.subVectors(s,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(ud,o);const g=1/(m+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(ws,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),qa.subVectors(this.max,vr),Ts.subVectors(e.a,vr),As.subVectors(e.b,vr),Cs.subVectors(e.c,vr),bi.subVectors(As,Ts),wi.subVectors(Cs,As),ki.subVectors(Ts,Cs);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-ki.z,ki.y,bi.z,0,-bi.x,wi.z,0,-wi.x,ki.z,0,-ki.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-ki.y,ki.x,0];return!Vl(t,Ts,As,Cs,qa)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,Ts,As,Cs,qa))?!1:(Ja.crossVectors(bi,wi),t=[Ja.x,Ja.y,Ja.z],Vl(t,Ts,As,Cs,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,Xa=new jt,Ts=new I,As=new I,Cs=new I,bi=new I,wi=new I,ki=new I,vr=new I,qa=new I,Ja=new I,Vi=new I;function Vl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vi.fromArray(r,s);const o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ct=new I,Ya=new ne;let t_=0;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class Ep extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tp extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class We extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}const n_=new jt,Mr=new I,Gl=new I;class kt{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):n_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Gl)),this.expandByPoint(Mr.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let i_=0;const Sn=new Je,Hl=new ct,Rs=new I,mn=new jt,Sr=new jt,Ft=new I;class ot extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?Tp:Ep)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(mn.min,Sr.min),mn.expandByPoint(Ft),Ft.addVectors(mn.max,Sr.max),mn.expandByPoint(Ft)):(mn.expandByPoint(Sr.min),mn.expandByPoint(Sr.max))}mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Ft.add(Rs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new I,l[y]=new I;const c=new I,h=new I,u=new I,d=new ne,f=new ne,p=new ne,_=new I,m=new I;function g(y,S,L){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,L),d.fromBufferAttribute(s,y),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,L),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),o[y].add(_),o[S].add(_),o[L].add(_),l[y].add(m),l[S].add(m),l[L].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,S=x.length;y<S;++y){const L=x[y],R=L.start,N=L.count;for(let U=R,V=R+N;U<V;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new I,v=new I,E=new I,w=new I;function T(y){E.fromBufferAttribute(i,y),w.copy(E);const S=o[y];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,R)}for(let y=0,S=x.length;y<S;++y){const L=x[y],R=L.start,N=L.count;for(let U=R,V=R+N;U<V;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new _t(d,h,u)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $h{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new I;class ls{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let s_=0;class Vt extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=qs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Nc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ap extends Vt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const br=new I,Is=new I,Ls=new I,Ns=new ne,wr=new ne,Cp=new Je,$a=new I,Er=new I,Ka=new I,dd=new ne,Wl=new ne,fd=new ne;class Rp extends ct{constructor(e=new Ap){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $h(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new ls(n,3,0,!1)),Ps.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Za($a.set(-.5,-.5,0),Ls,a,Is,i,s),Za(Er.set(.5,-.5,0),Ls,a,Is,i,s),Za(Ka.set(.5,.5,0),Ls,a,Is,i,s),dd.set(0,0),Wl.set(1,0),fd.set(1,1);let o=e.ray.intersectTriangle($a,Er,Ka,!1,br);if(o===null&&(Za(Er.set(-.5,.5,0),Ls,a,Is,i,s),Wl.set(0,1),o=e.ray.intersectTriangle($a,Ka,Er,!1,br),o===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:ln.getInterpolation(br,$a,Er,Ka,dd,Wl,fd,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Za(r,e,t,n,i,s){Ns.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(wr.x=s*Ns.x-i*Ns.y,wr.y=i*Ns.x+s*Ns.y):wr.copy(Ns),r.copy(e),r.x+=wr.x,r.y+=wr.y,r.applyMatrix4(Cp)}const Qa=new I,pd=new I;class Pp extends ct{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Qa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Qa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Qa.setFromMatrixPosition(e.matrixWorld),pd.setFromMatrixPosition(this.matrixWorld);const n=Qa.distanceTo(pd)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const oi=new I,Xl=new I,ja=new I,Ei=new I,ql=new I,eo=new I,Jl=new I;class Ua{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Xl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ja),o=Ei.dot(this.direction),l=-Ei.dot(ja),c=Ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xl).addScaledVector(ja,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,s){ql.subVectors(t,e),eo.subVectors(n,e),Jl.crossVectors(ql,eo);let a=this.direction.dot(Jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(eo.crossVectors(Ei,eo));if(l<0)return null;const c=o*this.direction.dot(ql.cross(Ei));if(c<0||l+c>a)return null;const h=-o*Ei.dot(Jl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt extends Vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const md=new Je,Gi=new Ua,to=new kt,gd=new I,no=new I,io=new I,so=new I,Yl=new I,ro=new I,_d=new I,ao=new I;class Mt extends ct{constructor(e=new ot,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Yl.fromBufferAttribute(u,e),a?ro.addScaledVector(Yl,h):ro.addScaledVector(Yl.sub(t),h))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(to.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(to,gd)===null||Gi.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),y=o.getX(v+2);i=oo(this,g,e,n,c,h,u,w,T,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=oo(this,a,e,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){const w=v,T=v+1,y=v+2;i=oo(this,g,e,n,c,h,u,w,T,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,M=m+1,v=m+2;i=oo(this,a,e,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function r_(r,e,t,n,i,s,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===pi,o),l===null)return null;ao.copy(o),ao.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:r}}function oo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,no),r.getVertexPosition(l,io),r.getVertexPosition(c,so);const h=r_(r,e,t,n,no,io,so,_d);if(h){const u=new I;ln.getBarycoord(_d,no,io,so,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new ne)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};ln.getNormal(no,io,so,d.normal),h.face=d,h.barycoord=u}return h}const yd=new I,xd=new St,vd=new St,a_=new I,Md=new Je,lo=new I,$l=new kt,Sd=new Je,Kl=new Ua;class Kh extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$u,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(i),e.ray.intersectsSphere($l)!==!1&&(Sd.copy(i).invert(),Kl.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ag?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),vd.fromBufferAttribute(i.attributes.skinWeight,e),yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=vd.getComponent(s);if(a!==0){const o=xd.getComponent(s);Md.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(a_.copy(yd).applyMatrix4(Md),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _l extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fi extends Nt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=It,h=It,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Je,o_=new Je;class yl{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:o_;bd.multiplyMatrices(o,t[s]),bd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fi(t,e,e,hn,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Se("Skeleton: No bone found with UUID:",s),a=new _l),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class sn extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Je,wd=new Je,co=[],Ed=new jt,l_=new Je,Tr=new Mt,Ar=new kt;class Zh extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sn(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,l_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Ed.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Ed)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Ar.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Us),wd.multiplyMatrices(n,Us),Tr.matrixWorld=wd,Tr.raycast(e,co);for(let a=0,o=co.length;a<o;a++){const l=co[a];l.instanceId=s,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(i*this.count),i,this.count,Vh,cn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zl=new I,c_=new I,h_=new Ke;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zl.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h_.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new kt,u_=new ne(.5,.5),ho=new I;class Da{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,s=new Ii,a=new Ii){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],x=s[12],M=s[13],v=s[14],E=s[15];if(i[0].setComponents(c-a,f-h,g-p,E-x).normalize(),i[1].setComponents(c+a,f+h,g+p,E+x).normalize(),i[2].setComponents(c+o,f+u,g+_,E+M).normalize(),i[3].setComponents(c-o,f-u,g-_,E-M).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,g-m,E-v).normalize();else if(i[4].setComponents(c-l,f-d,g-m,E-v).normalize(),t===Dn)i[5].setComponents(c+l,f+d,g+m,E+v).normalize();else if(t===$r)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=u_.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const kn=new Je,Vn=new Da;class Qh{constructor(){this.coordinateSystem=Dn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(kn,i.coordinateSystem,i.reversedDepth),Vn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(kn,i.coordinateSystem,i.reversedDepth),Vn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(kn,i.coordinateSystem,i.reversedDepth),Vn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(kn,i.coordinateSystem,i.reversedDepth),Vn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(kn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(kn,i.coordinateSystem,i.reversedDepth),Vn.containsPoint(e))return!0}return!1}clone(){return new Qh}}function Ql(r,e){return r-e}function d_(r,e){return r.z-e.z}function f_(r,e){return e.z-r.z}class p_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const on=new Je,m_=new Te(1,1,1),Td=new Da,g_=new Qh,uo=new jt,Wi=new kt,Cr=new I,Ad=new I,__=new I,jl=new p_,$t=new Mt,fo=[];function y_(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Xi(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Ip extends Mt{constructor(e,t,n=t*2,i){super(new ot,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new fi(t,e,e,hn,cn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new fi(t,e,e,pl,On);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new fi(t,e,e,hn,cn);n.colorSpace=st.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new _t(h,l,c);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new _t(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingBoxAt(s,uo).applyMatrix4(on),e.union(uo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingSphereAt(s,Wi).applyMatrix4(on),e.union(Wi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ql),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;on.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(m_.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ql),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);y_(u,d,l);const f=u.itemSize;for(let p=u.count,_=c;p<_;p++){const m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)s.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)s.setX(h+d,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),s=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=s.index,p=f.array,_=e-u;for(let m=h;m<h+d;m++)p[m]=p[m]+_;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=s.attributes;for(const f in d){const p=d[f],{array:_,itemSize:m}=p;_.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new jt,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),s.expandByPoint(Cr.fromBufferAttribute(o,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new kt;this.getBoundingBoxAt(e,uo),uo.getCenter(s.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Cr.fromBufferAttribute(o,u),l=Math.max(l,s.center.distanceToSquared(Cr))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ql);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Xi(this._multiDrawCounts,i),Xi(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Xi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Xi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Xi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ot,this._initializeGeometry(s));const a=this.geometry;s.index&&Xi(s.index.array,a.index.array);for(const o in s.attributes)Xi(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,a=this.geometry;$t.material=this.material,$t.geometry.index=a.index,$t.geometry.attributes=a.attributes,$t.geometry.boundingBox===null&&($t.geometry.boundingBox=new jt),$t.geometry.boundingSphere===null&&($t.geometry.boundingSphere=new kt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];$t.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,$t.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,$t.geometry.boundingBox),this.getBoundingSphereAt(c,$t.geometry.boundingSphere),$t.raycast(e,fo);for(let u=0,d=fo.length;u<d;u++){const f=fo[u];f.object=this,f.batchId=o,t.push(f)}fo.length=0}$t.material=null,$t.geometry.index=null,$t.geometry.attributes={},$t.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?g_:Td;f&&!n.isArrayCamera&&(on.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Td.setFromProjectionMatrix(on,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){on.copy(this.matrixWorld).invert(),Cr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(on),Ad.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(on);for(let v=0,E=c.length;v<E;v++)if(c[v].visible&&c[v].active){const w=c[v].geometryIndex;this.getMatrixAt(v,on),this.getBoundingSphereAt(w,Wi).applyMatrix4(on);let T=!1;if(f&&(T=!m.intersectsSphere(Wi,n)),!T){const y=d[w],S=__.subVectors(Wi.center,Cr).dot(Ad);jl.push(y.start,y.count,S,v)}}const x=jl.list,M=this.customSort;M===null?x.sort(s.transparent?f_:d_):M.call(this,x,n);for(let v=0,E=x.length;v<E;v++){const w=x[v];h[g]=w.start*o*l,u[g]=w.count*l,_[g]=w.index,g++}jl.reset()}else for(let x=0,M=c.length;x<M;x++)if(c[x].visible&&c[x].active){const v=c[x].geometryIndex;let E=!1;if(f&&(this.getMatrixAt(x,on),this.getBoundingSphereAt(v,Wi).applyMatrix4(on),E=!m.intersectsSphere(Wi,n)),!E){const w=d[v];h[g]=w.start*o*l,u[g]=w.count*l,_[g]=x,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class xl extends Vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new I,el=new I,Cd=new Je,Rr=new Ua,po=new kt,ec=new I,Rd=new I;class Oa extends ct{constructor(e=new ot,t=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)jo.fromBufferAttribute(t,i-1),el.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jo.distanceTo(el);e.setAttribute("lineDistance",new We(n,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Cd.copy(i).invert(),Rr.copy(e.ray).applyMatrix4(Cd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),M=mo(this,e,Rr,l,g,x,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=mo(this,e,Rr,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=mo(this,e,Rr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=mo(this,e,Rr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mo(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(jo.fromBufferAttribute(o,i),el.fromBufferAttribute(o,s),t.distanceSqToSegment(jo,el,ec,Rd)>n)return;ec.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ec);if(!(c<e.near||c>e.far))return{distance:c,point:Rd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Pd=new I,Id=new I;class jh extends Oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pd.fromBufferAttribute(t,i),Id.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pd.distanceTo(Id);e.setAttribute("lineDistance",new We(n,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends Oa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tu extends Vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ld=new Je,Sh=new Ua,go=new kt,_o=new I;class nu extends ct{constructor(e=new ot,t=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Ld.copy(i).invert(),Sh.copy(e.ray).applyMatrix4(Ld);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);_o.fromBufferAttribute(u,m),Nd(_o,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)_o.fromBufferAttribute(u,p),Nd(_o,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nd(r,e,t,n,i,s,a){const o=Sh.distanceSqToPoint(r);if(o<t){const l=new I;Sh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iu extends Nt{constructor(e=[],t=Oi,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zr extends Nt{constructor(e,t,n=On,i,s,a,o=It,l=It,c,h=_i,u=1){if(h!==_i&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class x_ extends Zr{constructor(e,t=On,n=Oi,i,s,a=It,o=It,l,c=_i){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lp extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hr extends ot{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function p(_,m,g,x,M,v,E,w,T,y,S){const L=v/T,R=E/y,N=v/2,U=E/2,V=w/2,B=T+1,k=y+1;let F=0,ie=0;const Z=new I;for(let ce=0;ce<k;ce++){const de=ce*R-U;for(let pe=0;pe<B;pe++){const Ue=pe*L-N;Z[_]=Ue*x,Z[m]=de*M,Z[g]=V,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[g]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(pe/T),u.push(1-ce/y),F+=1}}for(let ce=0;ce<y;ce++)for(let de=0;de<T;de++){const pe=d+de+B*ce,Ue=d+de+B*(ce+1),et=d+(de+1)+B*(ce+1),tt=d+(de+1)+B*ce;l.push(pe,Ue,tt),l.push(Ue,et,tt),ie+=6}o.addGroup(f,ie,S),f+=ie,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class su extends ot{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+s,_=i+1,m=new I,g=new I;for(let x=0;x<=p;x++){let M=0,v=0,E=0,w=0;if(x<=n){const S=x/n,L=S*Math.PI/2;v=-h-e*Math.cos(L),E=e*Math.sin(L),w=-e*Math.cos(L),M=S*u}else if(x<=n+s){const S=(x-n)/s;v=-h+S*t,E=e,w=0,M=u+S*d}else{const S=(x-n-s)/n,L=S*Math.PI/2;v=h+e*Math.sin(L),E=e*Math.cos(L),w=e*Math.sin(L),M=u+d+S*u}const T=Math.max(0,Math.min(1,M/f));let y=0;x===0?y=.5/i:x===p&&(y=-.5/i);for(let S=0;S<=i;S++){const L=S/i,R=L*Math.PI*2,N=Math.sin(R),U=Math.cos(R);g.x=-E*U,g.y=v,g.z=E*N,o.push(g.x,g.y,g.z),m.set(-E*U,w,E*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(L+y,T)}if(x>0){const S=(x-1)*_;for(let L=0;L<i;L++){const R=S+L,N=S+L+1,U=x*_+L,V=x*_+L+1;a.push(R,N,U),a.push(N,V,U)}}}this.setIndex(a),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ru extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new I,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vl extends ot{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const _=[],m=n/2;let g=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function x(){const v=new I,E=new I;let w=0;const T=(t-e)/n;for(let y=0;y<=s;y++){const S=[],L=y/s,R=L*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,V=U*l+o,B=Math.sin(V),k=Math.cos(V);E.x=R*B,E.y=-L*n+m,E.z=R*k,u.push(E.x,E.y,E.z),v.set(B,T,k).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-L),S.push(p++)}_.push(S)}for(let y=0;y<i;y++)for(let S=0;S<s;S++){const L=_[S][y],R=_[S+1][y],N=_[S+1][y+1],U=_[S][y+1];(e>0||S!==0)&&(h.push(L,R,U),w+=3),(t>0||S!==s-1)&&(h.push(R,N,U),w+=3)}c.addGroup(g,w,0),g+=w}function M(v){const E=p,w=new ne,T=new I;let y=0;const S=v===!0?e:t,L=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*L,0),d.push(0,L,0),f.push(.5,.5),p++;const R=p;for(let N=0;N<=i;N++){const V=N/i*l+o,B=Math.cos(V),k=Math.sin(V);T.x=S*k,T.y=m*L,T.z=S*B,u.push(T.x,T.y,T.z),d.push(0,L,0),w.x=B*.5+.5,w.y=k*.5*L+.5,f.push(w.x,w.y),p++}for(let N=0;N<i;N++){const U=E+N,V=R+N;v===!0?h.push(V,V+1,U):h.push(V+1,V,U),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class au extends vl{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new au(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(s.slice(),3)),this.setAttribute("uv",new We(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new I,v=new I,E=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],v),f(t[w+2],E),l(M,v,E,x)}function l(x,M,v,E){const w=E+1,T=[];for(let y=0;y<=w;y++){T[y]=[];const S=x.clone().lerp(v,y/w),L=M.clone().lerp(v,y/w),R=w-y;for(let N=0;N<=R;N++)N===0&&y===w?T[y][N]=S:T[y][N]=S.clone().lerp(L,N/R)}for(let y=0;y<w;y++)for(let S=0;S<2*(w-y)-1;S++){const L=Math.floor(S/2);S%2===0?(d(T[y][L+1]),d(T[y+1][L]),d(T[y][L])):(d(T[y][L+1]),d(T[y+1][L+1]),d(T[y+1][L]))}}function c(x){const M=new I;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(x),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){const x=new I;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const v=m(x)/2/Math.PI+.5,E=g(x)/Math.PI+.5;a.push(v,1-E)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],E=a[x+4],w=Math.max(M,v,E),T=Math.min(M,v,E);w>.9&&T<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){const x=new I,M=new I,v=new I,E=new I,w=new ne,T=new ne,y=new ne;for(let S=0,L=0;S<s.length;S+=9,L+=6){x.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(a[L+0],a[L+1]),T.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),E.copy(x).add(M).add(v).divideScalar(3);const R=m(E);_(w,L+0,x,R),_(T,L+2,M,R),_(y,L+4,v,R)}}function _(x,M,v,E){E<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.vertices,e.indices,e.radius,e.detail)}}class ou extends ps{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ou(e.radius,e.detail)}}const yo=new I,xo=new I,tc=new I,vo=new ln;class v_ extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Js*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=vo;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),vo.getNormal(tc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const M=(x+1)%3,v=u[x],E=u[M],w=vo[h[x]],T=vo[h[M]],y=`${v}_${E}`,S=`${E}_${v}`;S in d&&d[S]?(tc.dot(d[S].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(T.x,T.y,T.z)),d[S]=null):y in d||(d[y]={index0:c[x],index1:c[M],normal:tc.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:m}=d[p];yo.fromBufferAttribute(o,_),xo.fromBufferAttribute(o,m),f.push(yo.x,yo.y,yo.z),f.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new We(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Se("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ne:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],s=[],a=[],o=new I,l=new Je;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ze(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lu extends ei{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M_ extends lu{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Mo=new I,nc=new cu,ic=new cu,sc=new cu;class S_ extends ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Mo.subVectors(i[0],i[1]).add(i[0]),c=Mo);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Mo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),nc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,m),ic.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,m),sc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ic.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nc.calc(l),ic.calc(l),sc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ud(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function b_(r,e){const t=1-r;return t*t*e}function w_(r,e){return 2*(1-r)*r*e}function E_(r,e){return r*r*e}function Gr(r,e,t,n){return b_(r,e)+w_(r,t)+E_(r,n)}function T_(r,e){const t=1-r;return t*t*t*e}function A_(r,e){const t=1-r;return 3*t*t*r*e}function C_(r,e){return 3*(1-r)*r*r*e}function R_(r,e){return r*r*r*e}function Hr(r,e,t,n,i){return T_(r,e)+A_(r,t)+C_(r,n)+R_(r,i)}class Np extends ei{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P_ extends ei{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y),Hr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Up extends ei{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends ei{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends ei{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gr(e,i.x,s.x,a.x),Gr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Op extends ei{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gr(e,i.x,s.x,a.x),Gr(e,i.y,s.y,a.y),Gr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fp extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ud(o,l.x,c.x,h.x,u.x),Ud(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:M_,CatmullRomCurve3:S_,CubicBezierCurve:Np,CubicBezierCurve3:P_,EllipseCurve:lu,LineCurve:Up,LineCurve3:I_,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:Op,SplineCurve:Fp});class L_ extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new tl[i.type]().fromJSON(i))}return this}}class Dd extends L_{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Up(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Dp(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Np(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new lu(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hu extends Dd{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Dd().fromJSON(i))}return this}}function N_(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Bp(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=B_(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let d=t;d<i;d+=t){const f=r[d],p=r[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qr(s,a,t,o,l,c,0),a}function Bp(r,e,t,n,i){let s;if(i===$_(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Od(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Od(a/n|0,r[a],r[a+1],s);return s&&js(s,s.next)&&(ea(s),s=s.next),s}function cs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(js(t,t.next)||wt(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&H_(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?D_(r,n,i,s):U_(r)){e.push(l.i,r.i,c.i),ea(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=O_(cs(r),e),Qr(r,e,t,n,i,s,2)):a===2&&F_(r,e,t,n,i,s):Qr(cs(r),e,t,n,i,s,1);break}}}function U_(r){const e=r.prev,t=r,n=r.next;if(wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Br(i,o,s,l,a,c,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function D_(r,e,t,n){const i=r.prev,s=r,a=r.next;if(wt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=bh(f,p,e,t,n),x=bh(_,m,e,t,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=g&&v&&v.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&Br(o,h,l,u,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&Br(o,h,l,u,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function O_(r,e){let t=r;do{const n=t.prev,i=t.next.next;!js(n,i)&&kp(n,t,t.next,i)&&jr(n,i)&&jr(i,n)&&(e.push(n.i,t.i,i.i),ea(t),ea(t.next),t=r=i),t=t.next}while(t!==r);return cs(t)}function F_(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&q_(a,o)){let l=Vp(a,o);a=cs(a,a.next),l=cs(l,l.next),Qr(a,e,t,n,i,s,0),Qr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function B_(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Bp(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(X_(c))}i.sort(z_);for(let s=0;s<i.length;s++)t=k_(i[s],t);return t}function z_(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function k_(r,e){const t=V_(r,e);if(!t)return e;const n=Vp(t,r);return cs(n,n.next),cs(t,t.next)}function V_(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(js(r,t))return t;do{if(js(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zp(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);jr(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&G_(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function G_(r,e){return wt(r.prev,r,e.prev)<0&&wt(e.next,r,r.next)<0}function H_(r,e,t,n){let i=r;do i.z===0&&(i.z=bh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,W_(i)}function W_(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function bh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function X_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function zp(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Br(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&zp(r,e,t,n,i,s,a,o)}function q_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!J_(r,e)&&(jr(r,e)&&jr(e,r)&&Y_(r,e)&&(wt(r.prev,r,e.prev)||wt(r,e.prev,e))||js(r,e)&&wt(r.prev,r,r.next)>0&&wt(e.prev,e,e.next)>0)}function wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function js(r,e){return r.x===e.x&&r.y===e.y}function kp(r,e,t,n){const i=bo(wt(r,e,t)),s=bo(wt(r,e,n)),a=bo(wt(t,n,r)),o=bo(wt(t,n,e));return!!(i!==s&&a!==o||i===0&&So(r,t,e)||s===0&&So(r,n,e)||a===0&&So(t,r,n)||o===0&&So(t,e,n))}function So(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function bo(r){return r>0?1:r<0?-1:0}function J_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&kp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function jr(r,e){return wt(r.prev,r,r.next)<0?wt(r,e,r.next)>=0&&wt(r,r.prev,e)>=0:wt(r,e,r.prev)<0||wt(r,r.next,e)<0}function Y_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Vp(r,e){const t=wh(r.i,r.x,r.y),n=wh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Od(r,e,t,n){const i=wh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ea(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wh(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $_(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class K_{static triangulate(e,t,n=2){return N_(e,t,n)}}class ci{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ci.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Fd(e),Bd(n,e);let a=e.length;t.forEach(Fd);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Bd(n,t[l]);const o=K_.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Fd(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Bd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class uu extends ot{constructor(e=new hu([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new We(i,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Z_;let M,v=!1,E,w,T,y;if(g){M=g.getSpacedPoints(h),v=!0,d=!1;const K=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,K),w=new I,T=new I,y=new I}d||(m=0,f=0,p=0,_=0);const S=o.extractPoints(c);let L=S.shape;const R=S.holes;if(!ci.isClockWise(L)){L=L.reverse();for(let K=0,se=R.length;K<se;K++){const j=R[K];ci.isClockWise(j)&&(R[K]=j.reverse())}}function U(K){const j=10000000000000001e-36;let me=K[0];for(let P=1;P<=K.length;P++){const De=P%K.length,_e=K[De],Oe=_e.x-me.x,oe=_e.y-me.y,C=Oe*Oe+oe*oe,b=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(me.x),Math.abs(me.y)),D=j*b*b;if(C<=D){K.splice(De,1),P--;continue}me=_e}}U(L),R.forEach(U);const V=R.length,B=L;for(let K=0;K<V;K++){const se=R[K];L=L.concat(se)}function k(K,se,j){return se||Ve("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,j)}const F=L.length;function ie(K,se,j){let me,P,De;const _e=K.x-se.x,Oe=K.y-se.y,oe=j.x-K.x,C=j.y-K.y,b=_e*_e+Oe*Oe,D=_e*C-Oe*oe;if(Math.abs(D)>Number.EPSILON){const X=Math.sqrt(b),$=Math.sqrt(oe*oe+C*C),q=se.x-Oe/X,ve=se.y+_e/X,ee=j.x-C/$,Be=j.y+oe/$,He=((ee-q)*C-(Be-ve)*oe)/(_e*C-Oe*oe);me=q+_e*He-K.x,P=ve+Oe*He-K.y;const re=me*me+P*P;if(re<=2)return new ne(me,P);De=Math.sqrt(re/2)}else{let X=!1;_e>Number.EPSILON?oe>Number.EPSILON&&(X=!0):_e<-Number.EPSILON?oe<-Number.EPSILON&&(X=!0):Math.sign(Oe)===Math.sign(C)&&(X=!0),X?(me=-Oe,P=_e,De=Math.sqrt(b)):(me=_e,P=Oe,De=Math.sqrt(b/2))}return new ne(me/De,P/De)}const Z=[];for(let K=0,se=B.length,j=se-1,me=K+1;K<se;K++,j++,me++)j===se&&(j=0),me===se&&(me=0),Z[K]=ie(B[K],B[j],B[me]);const ce=[];let de,pe=Z.concat();for(let K=0,se=V;K<se;K++){const j=R[K];de=[];for(let me=0,P=j.length,De=P-1,_e=me+1;me<P;me++,De++,_e++)De===P&&(De=0),_e===P&&(_e=0),de[me]=ie(j[me],j[De],j[_e]);ce.push(de),pe=pe.concat(de)}let Ue;if(m===0)Ue=ci.triangulateShape(B,R);else{const K=[],se=[];for(let j=0;j<m;j++){const me=j/m,P=f*Math.cos(me*Math.PI/2),De=p*Math.sin(me*Math.PI/2)+_;for(let _e=0,Oe=B.length;_e<Oe;_e++){const oe=k(B[_e],Z[_e],De);ke(oe.x,oe.y,-P),me===0&&K.push(oe)}for(let _e=0,Oe=V;_e<Oe;_e++){const oe=R[_e];de=ce[_e];const C=[];for(let b=0,D=oe.length;b<D;b++){const X=k(oe[b],de[b],De);ke(X.x,X.y,-P),me===0&&C.push(X)}me===0&&se.push(C)}}Ue=ci.triangulateShape(K,se)}const et=Ue.length,tt=p+_;for(let K=0;K<F;K++){const se=d?k(L[K],pe[K],tt):L[K];v?(T.copy(E.normals[0]).multiplyScalar(se.x),w.copy(E.binormals[0]).multiplyScalar(se.y),y.copy(M[0]).add(T).add(w),ke(y.x,y.y,y.z)):ke(se.x,se.y,0)}for(let K=1;K<=h;K++)for(let se=0;se<F;se++){const j=d?k(L[se],pe[se],tt):L[se];v?(T.copy(E.normals[K]).multiplyScalar(j.x),w.copy(E.binormals[K]).multiplyScalar(j.y),y.copy(M[K]).add(T).add(w),ke(y.x,y.y,y.z)):ke(j.x,j.y,u/h*K)}for(let K=m-1;K>=0;K--){const se=K/m,j=f*Math.cos(se*Math.PI/2),me=p*Math.sin(se*Math.PI/2)+_;for(let P=0,De=B.length;P<De;P++){const _e=k(B[P],Z[P],me);ke(_e.x,_e.y,u+j)}for(let P=0,De=R.length;P<De;P++){const _e=R[P];de=ce[P];for(let Oe=0,oe=_e.length;Oe<oe;Oe++){const C=k(_e[Oe],de[Oe],me);v?ke(C.x,C.y+M[h-1].y,M[h-1].x+j):ke(C.x,C.y,u+j)}}}J(),te();function J(){const K=i.length/3;if(d){let se=0,j=F*se;for(let me=0;me<et;me++){const P=Ue[me];Ne(P[2]+j,P[1]+j,P[0]+j)}se=h+m*2,j=F*se;for(let me=0;me<et;me++){const P=Ue[me];Ne(P[0]+j,P[1]+j,P[2]+j)}}else{for(let se=0;se<et;se++){const j=Ue[se];Ne(j[2],j[1],j[0])}for(let se=0;se<et;se++){const j=Ue[se];Ne(j[0]+F*h,j[1]+F*h,j[2]+F*h)}}n.addGroup(K,i.length/3-K,0)}function te(){const K=i.length/3;let se=0;le(B,se),se+=B.length;for(let j=0,me=R.length;j<me;j++){const P=R[j];le(P,se),se+=P.length}n.addGroup(K,i.length/3-K,1)}function le(K,se){let j=K.length;for(;--j>=0;){const me=j;let P=j-1;P<0&&(P=K.length-1);for(let De=0,_e=h+m*2;De<_e;De++){const Oe=F*De,oe=F*(De+1),C=se+me+Oe,b=se+P+Oe,D=se+P+oe,X=se+me+oe;Ge(C,b,D,X)}}}function ke(K,se,j){l.push(K),l.push(se),l.push(j)}function Ne(K,se,j){rt(K),rt(se),rt(j);const me=i.length/3,P=x.generateTopUV(n,i,me-3,me-2,me-1);Xe(P[0]),Xe(P[1]),Xe(P[2])}function Ge(K,se,j,me){rt(K),rt(se),rt(me),rt(se),rt(j),rt(me);const P=i.length/3,De=x.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);Xe(De[0]),Xe(De[1]),Xe(De[3]),Xe(De[1]),Xe(De[2]),Xe(De[3])}function rt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Xe(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new tl[i.type]().fromJSON(i)),new uu(n,e.options)}}const Z_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-p),new ne(_,1-g)]:[new ne(o,1-l),new ne(h,1-u),new ne(f,1-p),new ne(m,1-g)]}};function Q_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class du extends ps{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new du(e.radius,e.detail)}}class fu extends ot{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ze(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new ne,f=new I,p=new I,_=new I;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=t;x++){const M=n+x*h*i,v=Math.sin(M),E=Math.cos(M);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),d.x=x/t,d.y=w/(e.length-1),o.push(d.x,d.y);const T=l[3*w+0]*v,y=l[3*w+1],S=l[3*w+0]*E;c.push(T,y,S)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){const v=M+x*e.length,E=v,w=v+e.length,T=v+e.length+1,y=v+1;s.push(E,w,y),s.push(T,y,w)}this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.points,e.segments,e.phiStart,e.phiLength)}}class pu extends ps{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pu(e.radius,e.detail)}}class Fi extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*d-a;for(let M=0;M<c;M++){const v=M*u-s;p.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const M=x+c*g,v=x+c*(g+1),E=x+1+c*(g+1),w=x+1+c*g;f.push(M,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class mu extends ot{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new I,p=new ne;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=s+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,M=x,v=x+n+1,E=x+n+2,w=x+1;o.push(M,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gu extends ot{constructor(e=new hu([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new We(i,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];ci.isClockWise(x)===!0&&(p[m]=x.reverse())}const _=ci.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){const x=f[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){const x=_[m],M=x[0]+u,v=x[1]+u,E=x[2]+u;n.push(M,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new gu(n,e.curveSegments)}}function j_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class _u extends ot{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],M=g/n;let v=0;g===0&&a===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const w=E/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+M*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-M),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const M=h[g][x+1],v=h[g][x],E=h[g+1][x],w=h[g+1][x+1];(g!==0||a>0)&&f.push(M,v,w),(g!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yu extends ps{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yu(e.radius,e.detail)}}class xu extends ot{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new I,f=new I,p=new I;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const x=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vu extends ot{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new I,d=new I,f=new I,p=new I,_=new I,m=new I,g=new I;for(let M=0;M<=n;++M){const v=M/n*s*Math.PI*2;x(v,s,a,e,f),x(v+.01,s,a,e,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let E=0;E<=i;++E){const w=E/i*Math.PI*2,T=-t*Math.cos(w),y=t*Math.sin(w);u.x=f.x+(T*g.x+y*_.x),u.y=f.y+(T*g.y+y*_.y),u.z=f.z+(T*g.z+y*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(M/n),h.push(E/i)}}for(let M=1;M<=n;M++)for(let v=1;v<=i;v++){const E=(i+1)*(M-1)+(v-1),w=(i+1)*M+(v-1),T=(i+1)*M+v,y=(i+1)*(M-1)+v;o.push(E,w,y),o.push(w,T,y)}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2));function x(M,v,E,w,T){const y=Math.cos(M),S=Math.sin(M),L=E/v*M,R=Math.cos(L);T.x=w*(2+R)*.5*y,T.y=w*(2+R)*S*.5,T.z=w*Math.sin(L)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Mu extends ot{constructor(e=new Op(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ne;let h=new I;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function _(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),x(),g()}function m(M){h=e.getPointAt(M/t,h);const v=a.normals[M],E=a.binormals[M];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,y=Math.sin(T),S=-Math.cos(T);l.x=S*v.x+y*E.x,l.y=S*v.y+y*E.y,l.z=S*v.z+y*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){const E=(i+1)*(M-1)+(v-1),w=(i+1)*M+(v-1),T=(i+1)*M+v,y=(i+1)*(M-1)+v;p.push(E,w,y),p.push(w,T,y)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)c.x=M/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Mu(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ey extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new I,s=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),x=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),s.fromBufferAttribute(a,x),zd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),zd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new We(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function zd(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var kd=Object.freeze({__proto__:null,BoxGeometry:hr,CapsuleGeometry:su,CircleGeometry:ru,ConeGeometry:au,CylinderGeometry:vl,DodecahedronGeometry:ou,EdgesGeometry:v_,ExtrudeGeometry:uu,IcosahedronGeometry:du,LatheGeometry:fu,OctahedronGeometry:pu,PlaneGeometry:Fi,PolyhedronGeometry:ps,RingGeometry:mu,ShapeGeometry:gu,SphereGeometry:_u,TetrahedronGeometry:yu,TorusGeometry:xu,TorusKnotGeometry:vu,TubeGeometry:Mu,WireframeGeometry:ey});class ty extends Vt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function er(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=er(r[t]);for(const i in n)e[i]=n[i]}return e}function ny(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const iy={clone:er,merge:tn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hp extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ur extends Vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ay extends Vt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends Vt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ly extends Vt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class cy extends Vt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wp extends Vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xp extends Vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hy extends Vt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uy extends xl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function wo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function dy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function qp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class dr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fy extends dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gs:s=e,o=2*t-n;break;case $o:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gs:a=e,l=2*n-t;break;case $o:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+x*a[c+E]+M*a[l+E]+v*a[u+E];return s}}class Jp extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class py extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class my extends dr{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==o;++g)s[g]=a[c+g]*m+a[l+g]*_;return s}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const m=a[c+_],g=a[l+_],x=p*f+_*2,M=d[x],v=d[x+1],E=e*f+_*2,w=u[E],T=u[E+1];let y=(n-t)/(i-t),S,L,R,N,U;for(let V=0;V<8;V++){S=y*y,L=S*y,R=1-y,N=R*R,U=N*R;const k=U*t+3*N*y*M+3*R*S*w+L*i-n;if(Math.abs(k)<1e-10)break;const F=3*N*(M-t)+6*R*y*(w-M)+3*S*(i-w);if(Math.abs(F)<1e-10)break;y=y-k/F,y=Math.max(0,Math.min(1,y))}s[_]=U*m+3*N*y*v+3*R*S*T+L*g}return s}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new py(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new my(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Tl;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Mg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Yr;class fr extends Bn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Jr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yp extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}Yp.prototype.ValueTypeName="color";class tr extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="number";class gy extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(s,0,a,c-o,a,c,l);return s}}class nr extends Bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gy(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Bn{constructor(e,t,n){super(e,t,n)}}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Jr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}ir.prototype.ValueTypeName="vector";class nl{constructor(e="",t=-1,n=[],i=Wh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yy(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=dy(l);l=Vd(l,1,h),c=Vd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new tr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Se("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];qp(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){const M=d[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new tr(".morphTargetInfluence["+_+"]",m,g))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ir,f+".position",d,"pos",i),n(nr,f+".quaternion",d,"rot",i),n(ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _y(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Yp;case"quaternion":return nr;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_y(r.type);if(r.times===void 0){const t=[],n=[];qp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const hi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Gd(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Gd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Gd(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $p{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xy=new $p;class yi{constructor(e){this.manager=e!==void 0?e:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class vy extends Error{constructor(e,t){super(e),this.response=t}}class sr extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=li[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,T=h.length;w<T;w++){const y=h[w];y.onProgress&&y.onProgress(E)}g.enqueue(v),x()}},M=>{g.error(M)})}}});return new Response(m)}else throw new vy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{hi.add(`file:${e}`,c);const h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ds=new WeakMap;class Eh extends yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ds.get(a);u===void 0&&(u=[],Ds.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Kr("img");function l(){h(),t&&t(this);const u=Ds.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ds.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),hi.remove(`image:${e}`);const d=Ds.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}Ds.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Kp extends yi{constructor(e){super(e)}load(e,t,n,i){const s=new Nt,a=new Eh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ms extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zp extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rc=new Je,Hd=new I,Wd=new I;class Su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$r||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Eo=new I,To=new un,Gn=new I;class Qp extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Eo,To,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,To,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Eo,To,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,To,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new I,Xd=new ne,qd=new ne;class Zt extends Qp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class My extends Su{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bu extends ms{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new My}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Sy extends Su{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class wu extends ms{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class gs extends Qp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class by extends Su{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new by}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jp extends ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class em extends ms{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Tu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class tm extends ms{constructor(e=new Tu,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Au extends yi{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new sr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):Ve(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&Se("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new Te().setHex(a.value);break;case"v2":i.uniforms[s].value=new ne().fromArray(a.value);break;case"v3":i.uniforms[s].value=new I().fromArray(a.value);break;case"v4":i.uniforms[s].value=new St().fromArray(a.value);break;case"m3":i.uniforms[s].value=new Ke().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Je().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ne().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Au.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:ty,SpriteMaterial:Ap,RawShaderMaterial:Hp,ShaderMaterial:dn,PointsMaterial:tu,MeshPhysicalMaterial:An,MeshStandardMaterial:ur,MeshPhongMaterial:ay,MeshToonMaterial:oy,MeshNormalMaterial:ly,MeshLambertMaterial:cy,MeshDepthMaterial:Wp,MeshDistanceMaterial:Xp,MeshBasicMaterial:zt,MeshMatcapMaterial:hy,LineDashedMaterial:uy,LineBasicMaterial:xl,Material:Vt};return new t[e]}}class rs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nm extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wy extends yi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new sr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):Ve(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const m=f.interleavedBuffers[p],g=s(f,m.buffer),x=Hs(m.type,g),M=new $h(x,m.stride);return M.uuid=m.uuid,t[p]=M,M}function s(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=e.isInstancedBufferGeometry?new nm:new ot,o=e.data.index;if(o!==void 0){const f=Hs(o.type,o.array);a.setIndex(new _t(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new ls(m,p.itemSize,p.offset,p.normalized)}else{const m=Hs(p.type,p.array),g=p.isInstancedBufferAttribute?sn:_t;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];let M;if(x.isInterleavedBufferAttribute){const v=i(e.data,x.data);M=new ls(v,x.itemSize,x.offset,x.normalized)}else{const v=Hs(x.type,x.array);M=new _t(v,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),_.push(M)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new kt().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Ey extends yi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?rs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new sr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Ve("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?rs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new sr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new hu().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new yl().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new wy;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in kd?o=kd[l.type].fromJSON(l,t):Se(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Au;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=nl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Hs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new $p(t);s=new Eh(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new fi(g.data,g.width,g.height)))}i[u.uuid]=new ns(f)}else{const f=o(u.url);i[u.uuid]=new ns(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Hs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Eh(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new fi(p.data,p.width,p.height)))}n[l.uuid]=new ns(h)}else{const h=await s(l.url);n[l.uuid]=new ns(h)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(Se("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&Se('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Se("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new iu,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new fi:h=new Nt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Ty)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Jd),h.wrapT=n(o.wrap[1],Jd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Yd)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Yd)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,s){let a;function o(d){return t[d]===void 0&&Se("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const m=d[p];n[m]===void 0&&Se("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&Se("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Se("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Yh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Te(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new gl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ml(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Zt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new gs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new jp(e.color,e.intensity);break;case"DirectionalLight":a=new Eu(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new wu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new em(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new bu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Zp(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new Tu().fromArray(e.sh);a=new tm(d,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Kh(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Mt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Zh(h,u,f),a.instanceMatrix=new sn(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new sn(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Ip(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,x=null;return m.boundingBox!==void 0&&(g=new jt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(x=new kt().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:x}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new kt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new jt().fromJSON(e.boundingBox));break;case"LOD":a=new Pp;break;case"Line":a=new Oa(o(e.geometry),l(e.material));break;case"LineLoop":a=new eu(o(e.geometry),l(e.material));break;case"LineSegments":a=new jh(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new nu(o(e.geometry),l(e.material));break;case"Sprite":a=new Rp(l(e.material));break;case"Group":a=new En;break;case"Bone":a=new _l;break;default:a=new ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new I().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Se("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new ct}})}}const Ty={UVMapping:Oh,CubeReflectionMapping:Oi,CubeRefractionMapping:os,EquirectangularReflectionMapping:zo,EquirectangularRefractionMapping:ko,CubeUVReflectionMapping:Na},Jd={RepeatWrapping:mi,ClampToEdgeWrapping:Un,MirroredRepeatWrapping:Wr},Yd={NearestFilter:It,NearestMipmapNearestFilter:Fh,NearestMipmapLinearFilter:ks,LinearFilter:Lt,LinearMipmapNearestFilter:kr,LinearMipmapLinearFilter:$n},ac=new WeakMap;class Ay extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(ac.has(a)===!0)i&&i(ac.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ac.set(l,c),hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Os=-90,Fs=1;class Cy extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Os,Fs,e,t);i.layers=this.layers,this.add(i);const s=new Zt(Os,Fs,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Os,Fs,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Os,Fs,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Os,Fs,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ry extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Py{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;un.multiplyQuaternionsFlat(e,a,e,t,e,n),un.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Cu="\\[\\]\\.:\\/",Iy=new RegExp("["+Cu+"]","g"),Ru="[^"+Cu+"]",Ly="[^"+Cu.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Ru),Uy=/(WCOD+)?/.source.replace("WCOD",Ly),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),Fy=new RegExp("^"+Ny+Uy+Dy+Oy+"$"),By=["material","materials","bones","map"];class zy{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(e){const t=Fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);By.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=zy;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ky{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=og,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case cg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Wh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===lg;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===mp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gs,i.endingEnd=Gs):(e?i.endingStart=this.zeroSlopeAtStart?Gs:Vs:i.endingStart=$o,t?i.endingEnd=this.zeroSlopeAtEnd?Gs:Vs:i.endingEnd=$o)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const Vy=new Float32Array(1);class Gy extends fs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new Py(ht.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Jp(new Float32Array(2),new Float32Array(2),1,Vy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?nl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Wh),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new ky(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?nl.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class xn{constructor(e){this.value=e}clone(){return new xn(this.value.clone===void 0?this.value:this.value.clone())}}const $d=new Je;class Hy{constructor(e,t,n=0,i=1/0){this.ray=new Ua(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(e,t=!0,n=[]){return Th(e,this,n,t),n.sort(Kd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Th(e[i],this,n,t);return n.sort(Kd),n}}function Kd(r,e){return r.distance-e.distance}function Th(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Th(s[a],e,t,!0)}}class Wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Se("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zd(r,e,t,n){const i=Xy(n);switch(t){case fp:return r*e;case Vh:return r*e/i.components*i.byteLength;case pl:return r*e/i.components*i.byteLength;case Zs:return r*e*2/i.components*i.byteLength;case Gh:return r*e*2/i.components*i.byteLength;case pp:return r*e*3/i.components*i.byteLength;case hn:return r*e*4/i.components*i.byteLength;case Hh:return r*e*4/i.components*i.byteLength;case Vo:case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Wc:return Math.max(r,16)*Math.max(e,8)/4;case Vc:case Hc:return Math.max(r,8)*Math.max(e,8)/2;case Xc:case qc:case Yc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Kc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dh:case fh:case ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _h:case yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xy(r){switch(r){case vn:case cp:return{byteLength:1,components:1};case Xr:case hp:case gi:return{byteLength:2,components:1};case zh:case kh:return{byteLength:2,components:4};case On:case Bh:case cn:return{byteLength:4,components:1};case up:case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function im(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qy(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,z0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,X0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,hv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,yv=`#define TOON
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
}`,xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,vv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,bv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,wv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Jy,alphahash_pars_fragment:Yy,alphamap_fragment:$y,alphamap_pars_fragment:Ky,alphatest_fragment:Zy,alphatest_pars_fragment:Qy,aomap_fragment:jy,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:y0,displacementmap_pars_vertex:x0,displacementmap_vertex:v0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:w0,envmap_fragment:E0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:z0,envmap_vertex:R0,fog_vertex:P0,fog_pars_vertex:I0,fog_fragment:L0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:D0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:F0,lights_pars_begin:B0,lights_toon_fragment:k0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:H0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:J0,lights_fragment_end:Y0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:Q0,map_fragment:j0,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:yx,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:bx,dithering_fragment:wx,dithering_pars_fragment:Ex,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Px,shadowmask_pars_fragment:Ix,skinbase_vertex:Lx,skinning_pars_vertex:Nx,skinning_vertex:Ux,skinnormal_vertex:Dx,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:kx,transmission_pars_fragment:Vx,uv_pars_fragment:Gx,uv_pars_vertex:Hx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Jx,backgroundCube_vert:Yx,backgroundCube_frag:$x,cube_vert:Kx,cube_frag:Zx,depth_vert:Qx,depth_frag:jx,distance_vert:ev,distance_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:ov,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:uv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:yv,meshtoon_frag:xv,points_vert:vv,points_frag:Mv,shadow_vert:Sv,shadow_frag:bv,sprite_vert:wv,sprite_frag:Ev},ge={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Jn={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Te(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Jn.physical={uniforms:tn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ao={r:0,b:0,g:0},qi=new jn,Tv=new Je;function Av(r,e,t,n,i,s){const a=new Te(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const v=x.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(x){let M=!1;const v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,M){const v=f(M);v&&(v.isCubeTexture||v.mapping===Na)?(c===void 0&&(c=new Mt(new hr(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:er(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),qi.copy(M.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(qi)),c.material.toneMapped=st.getTransfer(v.colorSpace)!==ft,(h!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Mt(new Fi(2,2),new dn({name:"BackgroundMaterial",uniforms:er(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(Ao,Gp(r)),t.buffers.color.setClear(Ao.r,Ao.g,Ao.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Cv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(R,N,U,V,B){let k=!1;const F=u(R,V,U,N);s!==F&&(s=F,c(s.object)),k=f(R,V,U,B),k&&p(R,V,U,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(R,N,U,V),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function u(R,N,U,V){const B=V.wireframe===!0;let k=n[N.id];k===void 0&&(k={},n[N.id]=k);const F=R.isInstancedMesh===!0?R.id:0;let ie=k[F];ie===void 0&&(ie={},k[F]=ie);let Z=ie[U.id];Z===void 0&&(Z={},ie[U.id]=Z);let ce=Z[B];return ce===void 0&&(ce=d(l()),Z[B]=ce),ce}function d(R){const N=[],U=[],V=[];for(let B=0;B<t;B++)N[B]=0,U[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:V,object:R,attributes:{},index:null}}function f(R,N,U,V){const B=s.attributes,k=N.attributes;let F=0;const ie=U.getAttributes();for(const Z in ie)if(ie[Z].location>=0){const de=B[Z];let pe=k[Z];if(pe===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function p(R,N,U,V){const B={},k=N.attributes;let F=0;const ie=U.getAttributes();for(const Z in ie)if(ie[Z].location>=0){let de=k[Z];de===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(de=R.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),B[Z]=pe,F++}s.attributes=B,s.attributesNum=F,s.index=V}function _(){const R=s.newAttributes;for(let N=0,U=R.length;N<U;N++)R[N]=0}function m(R){g(R,0)}function g(R,N){const U=s.newAttributes,V=s.enabledAttributes,B=s.attributeDivisors;U[R]=1,V[R]===0&&(r.enableVertexAttribArray(R),V[R]=1),B[R]!==N&&(r.vertexAttribDivisor(R,N),B[R]=N)}function x(){const R=s.newAttributes,N=s.enabledAttributes;for(let U=0,V=N.length;U<V;U++)N[U]!==R[U]&&(r.disableVertexAttribArray(U),N[U]=0)}function M(R,N,U,V,B,k,F){F===!0?r.vertexAttribIPointer(R,N,U,B,k):r.vertexAttribPointer(R,N,U,V,B,k)}function v(R,N,U,V){_();const B=V.attributes,k=U.getAttributes(),F=N.defaultAttributeValues;for(const ie in k){const Z=k[ie];if(Z.location>=0){let ce=B[ie];if(ce===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const de=ce.normalized,pe=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const et=Ue.buffer,tt=Ue.type,J=Ue.bytesPerElement,te=tt===r.INT||tt===r.UNSIGNED_INT||ce.gpuType===Bh;if(ce.isInterleavedBufferAttribute){const le=ce.data,ke=le.stride,Ne=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Z.locationSize;Ge++)g(Z.location+Ge,le.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)m(Z.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Ge=0;Ge<Z.locationSize;Ge++)M(Z.location+Ge,pe/Z.locationSize,tt,de,ke*J,(Ne+pe/Z.locationSize*Ge)*J,te)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)g(Z.location+le,ce.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<Z.locationSize;le++)m(Z.location+le);r.bindBuffer(r.ARRAY_BUFFER,et);for(let le=0;le<Z.locationSize;le++)M(Z.location+le,pe/Z.locationSize,tt,de,pe*J,pe/Z.locationSize*le*J,te)}}else if(F!==void 0){const de=F[ie];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(Z.location,de);break;case 3:r.vertexAttrib3fv(Z.location,de);break;case 4:r.vertexAttrib4fv(Z.location,de);break;default:r.vertexAttrib1fv(Z.location,de)}}}}x()}function E(){S();for(const R in n){const N=n[R];for(const U in N){const V=N[U];for(const B in V){const k=V[B];for(const F in k)h(k[F].object),delete k[F];delete V[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const N=n[R.id];for(const U in N){const V=N[U];for(const B in V){const k=V[B];for(const F in k)h(k[F].object),delete k[F];delete V[B]}}delete n[R.id]}function T(R){for(const N in n){const U=n[N];for(const V in U){const B=U[V];if(B[R.id]===void 0)continue;const k=B[R.id];for(const F in k)h(k[F].object),delete k[F];delete B[R.id]}}}function y(R){for(const N in n){const U=n[N],V=R.isInstancedMesh===!0?R.id:0,B=U[V];if(B!==void 0){for(const k in B){const F=B[k];for(const ie in F)h(F[ie].object),delete F[ie];delete B[k]}delete U[V],Object.keys(U).length===0&&delete n[N]}}}function S(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Rv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==hn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const y=T===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!y)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:w}}function Iv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ii,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,M=x*4;let v=g.clippingState||null;l.value=v,v=h(p,d,M,f);for(let E=0;E!==M;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ni=4,Qd=[.125,.215,.35,.446,.526,.582],Qi=20,Lv=256,Pr=new gs,jd=new Te;let oc=null,lc=0,cc=0,hc=!1;const Nv=new I;class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Nv}=s;oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,lc,cc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:gi,format:hn,colorSpace:an,depthBuffer:!1},i=tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=Ov(s,e,t),this._ggxMaterial=Dv(s,e,t)}return i}_compileMaterial(e){const t=new Mt(new ot,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,n,i,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jd),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new hr,new zt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(jd),g=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const E=this._cubeSize;Bs(i,v*E,M>2?E:0,E,E),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Ni?n-p+Ni:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Bs(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(o,Pr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Bs(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,Pr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):Qi;m>Qi&&Se(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const g=[];let x=0;for(let T=0;T<Qi;++T){const y=T/_,S=Math.exp(-y*y/2);g.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<g.length;T++)g[T]=g[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const v=this._sizeLods[i],E=3*v*(i>M-Ni?i-M+Ni:0),w=4*(this._cubeSize-v);Bs(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Pr)}}function Uv(r){const e=[],t=[],n=[];let i=r;const s=r-Ni+1+Qd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ni?l=Qd[a-r+Ni-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),M=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,y=w>2?0:-1,S=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];x.set(S,_*p*w),M.set(d,m*p*w);const L=[w,w,w,w,w,w];v.set(L,g*p*w)}const E=new ot;E.setAttribute("position",new _t(x,_)),E.setAttribute("uv",new _t(M,m)),E.setAttribute("faceIndex",new _t(v,g)),n.push(new Mt(E,null)),i>Ni&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tf(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Dv(r,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ov(r,e,t){const n=new Float32Array(Qi),i=new I(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function nf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sf(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}class sm extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new iu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hr(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ui});s.uniforms.tEquirect.value=t;const a=new Mt(i,s),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Lt),new Cy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Fv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===zo||f===ko)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new sm(p.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===zo||f===ko,_=f===Oi||f===os;if(p||_){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ef(r)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new ef(r)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===zo?d.mapping=Oi:f===ko&&(d.mapping=os),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Bv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qo("WebGLRenderer: "+n+" extension not supported."),i}}}function zv(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const E=x[M+0],w=x[M+1],T=x[M+2];d.push(E,w,w,T,T,E)}}else{const x=p.array;_=p.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const E=M+0,w=M+1,T=M+2;d.push(E,w,w,T,T,E)}}const m=new(p.count>=65535?Tp:Ep)(d,1);m.version=_;const g=s.get(u);g&&e.remove(g),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gv(r,e,t){const n=new WeakMap,i=new St;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let L=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var f=L;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*u),y=new Sp(T,E,w,u);y.type=cn,y.needsUpdate=!0;const S=v*4;for(let R=0;R<u;R++){const N=g[R],U=x[R],V=M[R],B=E*w*4*R;for(let k=0;k<N.count;k++){const F=k*S;p===!0&&(i.fromBufferAttribute(N,k),T[B+F+0]=i.x,T[B+F+1]=i.y,T[B+F+2]=i.z,T[B+F+3]=0),_===!0&&(i.fromBufferAttribute(U,k),T[B+F+4]=i.x,T[B+F+5]=i.y,T[B+F+6]=i.z,T[B+F+7]=0),m===!0&&(i.fromBufferAttribute(V,k),T[B+F+8]=i.x,T[B+F+9]=i.y,T[B+F+10]=i.z,T[B+F+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:y,size:new ne(E,w)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Hv(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Wv={[np]:"LINEAR_TONE_MAPPING",[ip]:"REINHARD_TONE_MAPPING",[sp]:"CINEON_TONE_MAPPING",[rp]:"ACES_FILMIC_TONE_MAPPING",[op]:"AGX_TONE_MAPPING",[lp]:"NEUTRAL_TONE_MAPPING",[ap]:"CUSTOM_TONE_MAPPING"};function Xv(r,e,t,n,i){const s=new Qn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Qn(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new ot;o.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new We([0,2,0,0,2,0],2));const l=new Hp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mt(o,l),h=new gs(-1,1,1,-1,0,1);let u=null,d=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,M){s.setSize(x,M),a.setSize(x,M);for(let v=0;v<m.length;v++){const E=m[v];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const M=s.width,v=s.height;for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(M,v)}},this.begin=function(x,M){if(f||x.toneMapping===Zn&&m.length===0)return!1;if(_=M,M!==null){const v=M.width,E=M.height;(s.width!==v||s.height!==E)&&this.setSize(v,E)}return g===!1&&x.setRenderTarget(s),p=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return g},this.end=function(x,M){x.toneMapping=p,f=!0;let v=s,E=a;for(let w=0;w<m.length;w++){const T=m[w];if(T.enabled!==!1&&(T.render(x,E,v,M),T.needsSwap!==!1)){const y=v;v=E,E=y}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},st.getTransfer(u)===ft&&(l.defines.SRGB_TRANSFER="");const w=Wv[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const rm=new Nt,Ah=new Zr(1,1),am=new Sp,om=new Jg,lm=new iu,rf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function mr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rf[i];if(s===void 0&&(s=new Float32Array(i),rf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sl(r,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function $v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Kv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;cf.set(n),r.uniformMatrix2fv(this.addr,!1,cf),Dt(t,n)}}function Zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;lf.set(n),r.uniformMatrix3fv(this.addr,!1,lf),Dt(t,n)}}function Qv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Ut(t,n))return;of.set(n),r.uniformMatrix4fv(this.addr,!1,of),Dt(t,n)}}function jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function iM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function oM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ah.compareFunction=t.isReversedDepthBuffer()?qh:Xh,s=Ah):s=rm,t.setTexture2D(e||s,i)}function lM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||om,i)}function cM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||lm,i)}function hM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||am,i)}function uM(r){switch(r){case 5126:return qv;case 35664:return Jv;case 35665:return Yv;case 35666:return $v;case 35674:return Kv;case 35675:return Zv;case 35676:return Qv;case 5124:case 35670:return jv;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(r,e){r.uniform1fv(this.addr,e)}function fM(r,e){const t=mr(e,this.size,2);r.uniform2fv(this.addr,t)}function pM(r,e){const t=mr(e,this.size,3);r.uniform3fv(this.addr,t)}function mM(r,e){const t=mr(e,this.size,4);r.uniform4fv(this.addr,t)}function gM(r,e){const t=mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _M(r,e){const t=mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yM(r,e){const t=mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xM(r,e){r.uniform1iv(this.addr,e)}function vM(r,e){r.uniform2iv(this.addr,e)}function MM(r,e){r.uniform3iv(this.addr,e)}function SM(r,e){r.uniform4iv(this.addr,e)}function bM(r,e){r.uniform1uiv(this.addr,e)}function wM(r,e){r.uniform2uiv(this.addr,e)}function EM(r,e){r.uniform3uiv(this.addr,e)}function TM(r,e){r.uniform4uiv(this.addr,e)}function AM(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Ah:a=rm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function CM(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||om,s[a])}function RM(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||lm,s[a])}function PM(r,e,t){const n=this.cache,i=e.length,s=Sl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||am,s[a])}function IM(r){switch(r){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return yM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return MM;case 35669:case 35673:return SM;case 5125:return bM;case 36294:return wM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}class LM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class NM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function hf(r,e){r.seq.push(e),r.map[e.id]=e}function DM(r,e,t){const n=r.name,i=n.length;for(uc.lastIndex=0;;){const s=uc.exec(n),a=uc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hf(t,c===void 0?new LM(o,r,e):new NM(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new UM(o),hf(t,u)),t=u}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);DM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function uf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const OM=37297;let FM=0;function BM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const df=new Ke;function zM(r){st._getMatrix(df,st.workingColorSpace,r);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Ko:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ff(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+BM(r.getShaderSource(e),o)}else return s}function kM(r,e){const t=zM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const VM={[np]:"Linear",[ip]:"Reinhard",[sp]:"Cineon",[rp]:"ACESFilmic",[op]:"AgX",[lp]:"Neutral",[ap]:"Custom"};function GM(r,e){const t=VM[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new I;function HM(){st.getLuminanceCoefficients(Co);const r=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function XM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zr(r){return r!==""}function pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(r){return r.replace(JM,$M)}const YM=new Map;function $M(r,e){let t=$e[e];if(t===void 0){const n=YM.get(e);if(n!==void 0)t=$e[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ch(t)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(r){return r.replace(KM,ZM)}function ZM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _f(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QM={[Bo]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function jM(r){return QM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eS={[Oi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function tS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nS={[os]:"ENVMAP_MODE_REFRACTION"};function iS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sS={[fl]:"ENVMAP_BLENDING_MULTIPLY",[sg]:"ENVMAP_BLENDING_MIX",[rg]:"ENVMAP_BLENDING_ADD"};function rS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":sS[r.combine]||"ENVMAP_BLENDING_NONE"}function aS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function oS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jM(t),c=tS(t),h=iS(t),u=rS(t),d=aS(t),f=WM(t),p=XM(s),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),g.length>0&&(g+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),g=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Zn?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),HM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Ch(a),a=pf(a,t),a=mf(a,t),o=Ch(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+m+a,v=x+g+o,E=uf(i,i.VERTEX_SHADER,M),w=uf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(E)||"",V=i.getShaderInfoLog(w)||"",B=N.trim(),k=U.trim(),F=V.trim();let ie=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const ce=ff(i,E,"vertex"),de=ff(i,w,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ce+`
`+de)}else B!==""?Se("WebGLProgram: Program Info Log:",B):(k===""||F==="")&&(Z=!1);Z&&(R.diagnostics={runnable:ie,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:g}})}i.deleteShader(E),i.deleteShader(w),y=new Xo(i,_),S=qM(i,_)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,OM)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let lS=0;class cS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hS(e),t.set(e,n)),n}}class hS{constructor(e){this.id=lS++,this.code=e,this.usedTimes=0}}function uS(r,e,t,n,i,s){const a=new ss,o=new cS,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,S,L,R,N){const U=R.fog,V=N.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||B,k),ie=F&&F.mapping===Na?F.image.height:null,Z=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Se("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ce!==void 0?ce.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let Ue,et,tt,J;if(Z){const dt=Jn[Z];Ue=dt.vertexShader,et=dt.fragmentShader}else Ue=y.vertexShader,et=y.fragmentShader,o.update(y),tt=o.getVertexShaderID(y),J=o.getFragmentShaderID(y);const te=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,Ge=!!y.map,rt=!!y.matcap,Xe=!!F,K=!!y.aoMap,se=!!y.lightMap,j=!!y.bumpMap,me=!!y.normalMap,P=!!y.displacementMap,De=!!y.emissiveMap,_e=!!y.metalnessMap,Oe=!!y.roughnessMap,oe=y.anisotropy>0,C=y.clearcoat>0,b=y.dispersion>0,D=y.iridescence>0,X=y.sheen>0,$=y.transmission>0,q=oe&&!!y.anisotropyMap,ve=C&&!!y.clearcoatMap,ee=C&&!!y.clearcoatNormalMap,Be=C&&!!y.clearcoatRoughnessMap,He=D&&!!y.iridescenceMap,re=D&&!!y.iridescenceThicknessMap,he=X&&!!y.sheenColorMap,Ce=X&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Me=!!y.specularColorMap,Qe=!!y.specularIntensityMap,O=$&&!!y.transmissionMap,fe=$&&!!y.thicknessMap,ue=!!y.gradientMap,we=!!y.alphaMap,ae=y.alphaTest>0,Y=!!y.alphaHash,Re=!!y.extensions;let qe=Zn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=r.toneMapping);const vt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:et,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:an,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:rt,envMap:Xe,envMapMode:Xe&&F.mapping,envMapCubeUVHeight:ie,aoMap:K,lightMap:se,bumpMap:j,normalMap:me,displacementMap:P,emissiveMap:De,normalMapObjectSpace:me&&y.normalMapType===dg,normalMapTangentSpace:me&&y.normalMapType===ds,metalnessMap:_e,roughnessMap:Oe,anisotropy:oe,anisotropyMap:q,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:ee,clearcoatRoughnessMap:Be,dispersion:b,iridescence:D,iridescenceMap:He,iridescenceThicknessMap:re,sheen:X,sheenColorMap:he,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:Me,specularIntensityMap:Qe,transmission:$,transmissionMap:O,thicknessMap:fe,gradientMap:ue,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:Y,combine:y.combine,mapUv:Ge&&p(y.map.channel),aoMapUv:K&&p(y.aoMap.channel),lightMapUv:se&&p(y.lightMap.channel),bumpMapUv:j&&p(y.bumpMap.channel),normalMapUv:me&&p(y.normalMap.channel),displacementMapUv:P&&p(y.displacementMap.channel),emissiveMapUv:De&&p(y.emissiveMap.channel),metalnessMapUv:_e&&p(y.metalnessMap.channel),roughnessMapUv:Oe&&p(y.roughnessMap.channel),anisotropyMapUv:q&&p(y.anisotropyMap.channel),clearcoatMapUv:ve&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(y.sheenRoughnessMap.channel),specularMapUv:Pe&&p(y.specularMap.channel),specularColorMapUv:Me&&p(y.specularColorMap.channel),specularIntensityMapUv:Qe&&p(y.specularIntensityMap.channel),transmissionMapUv:O&&p(y.transmissionMap.channel),thicknessMapUv:fe&&p(y.thicknessMap.channel),alphaMapUv:we&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ge||we),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:De&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(S,y),x(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function g(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const S=f[y.type];let L;if(S){const R=Jn[S];L=iy.clone(R.uniforms)}else L=y.uniforms;return L}function v(y,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new oS(r,S,y,i),c.push(L),h.set(S,L)),L}function E(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function dS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function yf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let x=r[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},r[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),e++,x}function l(d,f,p,_,m,g){const x=o(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(d,f,p,_,m,g){const x=o(d,f,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||fS),n.length>1&&n.sort(f||yf),i.length>1&&i.sort(f||yf)}function u(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function pS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new xf,r.set(n,[a])):i>=s.length?(a=new xf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function mS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function gS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _S=0;function yS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xS(r){const e=new mS,t=gS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Je,a=new Je;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,M=0,v=0,E=0,w=0,T=0;c.sort(yS);for(let S=0,L=c.length;S<L;S++){const R=c[S],N=R.color,U=R.intensity,V=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Zs?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],U);T++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,ie=t.get(R);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(U),k.distance=V,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const F=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,F.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,R.castShadow){const ie=t.get(R);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=B,v++}_++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(N).multiplyScalar(U),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const F=R.shadow,ie=t.get(R);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,ie.shadowCameraNear=F.camera.near,ie.shadowCameraFar=F.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=k,p++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(U),k.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[g]=k,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==v||y.numSpotMaps!==E||y.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=v,y.numSpotMaps=E,y.numLightProbes=T,n.version=_S++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function vf(r){const e=new xS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new vf(r),e.set(i,[o])):s>=a.length?(o=new vf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const MS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],wS=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Mf=new Je,Ir=new I,dc=new I;function ES(r,e,t){let n=new Da;const i=new ne,s=new ne,a=new St,o=new Wp,l=new Xp,c={},h=t.maxTextureSize,u={[pi]:rn,[rn]:pi,[wn]:wn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:MS,fragmentShader:SS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ot;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let g=this.type;this.render=function(w,T,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===zm&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bo);const S=r.getRenderTarget(),L=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=g!==this.type;U&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(B=>B.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,B=w.length;V<B;V++){const k=w[V],F=k.shadow;if(F===void 0){Se("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const ie=F.getFrameExtents();i.multiply(ie),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,F.mapSize.y=s.y));const Z=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Fr){if(k.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Qn(i.x,i.y,{format:Zs,type:gi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Zr(i.x,i.y,cn),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=_i,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=It,F.map.depthTexture.magFilter=It}else k.isPointLight?(F.map=new sm(i.x),F.map.depthTexture=new x_(i.x,On)):(F.map=new Qn(i.x,i.y),F.map.depthTexture=new Zr(i.x,i.y,On)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=_i,this.type===Bo?(F.map.depthTexture.compareFunction=Z?qh:Xh,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=It,F.map.depthTexture.magFilter=It);F.camera.updateProjectionMatrix()}const ce=F.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ce;de++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,de),r.clear();else{de===0&&(r.setRenderTarget(F.map),r.clear());const pe=F.getViewport(de);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),N.viewport(a)}if(k.isPointLight){const pe=F.camera,Ue=F.matrix,et=k.distance||pe.far;et!==pe.far&&(pe.far=et,pe.updateProjectionMatrix()),Ir.setFromMatrixPosition(k.matrixWorld),pe.position.copy(Ir),dc.copy(pe.position),dc.add(bS[de]),pe.up.copy(wS[de]),pe.lookAt(dc),pe.updateMatrixWorld(),Ue.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Mf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Mf,pe.coordinateSystem,pe.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),v(T,y,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Fr&&x(F,y),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(S,L,R)};function x(w,T){const y=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(i.x,i.y,{format:Zs,type:gi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,y,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,y,f,_,null)}function M(w,T,y,S){let L=null;const R=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)L=R;else if(L=y.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=L.uuid,U=T.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let B=V[U];B===void 0&&(B=L.clone(),V[U]=B,T.addEventListener("dispose",E)),L=B}if(L.visible=T.visible,L.wireframe=T.wireframe,S===Fr?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:u[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=r.properties.get(L);N.light=y}return L}function v(w,T,y,S,L){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Fr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const U=e.update(w),V=w.material;if(Array.isArray(V)){const B=U.groups;for(let k=0,F=B.length;k<F;k++){const ie=B[k],Z=V[ie.materialIndex];if(Z&&Z.visible){const ce=M(w,Z,S,L);w.onBeforeShadow(r,w,T,y,U,ce,ie),r.renderBufferDirect(y,null,U,ce,w,ie),w.onAfterShadow(r,w,T,y,U,ce,ie)}}}else if(V.visible){const B=M(w,V,S,L);w.onBeforeShadow(r,w,T,y,U,B,null),r.renderBufferDirect(y,null,U,B,w,null),w.onAfterShadow(r,w,T,y,U,B,null)}}const N=w.children;for(let U=0,V=N.length;U<V;U++)v(N[U],T,y,S,L)}function E(w){w.target.removeEventListener("dispose",E);for(const y in c){const S=c[y],L=w.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function TS(r,e){function t(){let O=!1;const fe=new St;let ue=null;const we=new St(0,0,0,0);return{setMask:function(ae){ue!==ae&&!O&&(r.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){O=ae},setClear:function(ae,Y,Re,qe,vt){vt===!0&&(ae*=qe,Y*=qe,Re*=qe),fe.set(ae,Y,Re,qe),we.equals(fe)===!1&&(r.clearColor(ae,Y,Re,qe),we.copy(fe))},reset:function(){O=!1,ue=null,we.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,ue=null,we=null,ae=null;return{setReversed:function(Y){if(fe!==Y){const Re=e.get("EXT_clip_control");Y?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=Y;const qe=ae;ae=null,this.setClear(qe)}},getReversed:function(){return fe},setTest:function(Y){Y?te(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(Y){ue!==Y&&!O&&(r.depthMask(Y),ue=Y)},setFunc:function(Y){if(fe&&(Y=wg[Y]),we!==Y){switch(Y){case Uc:r.depthFunc(r.NEVER);break;case Dc:r.depthFunc(r.ALWAYS);break;case Oc:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Fc:r.depthFunc(r.EQUAL);break;case Bc:r.depthFunc(r.GEQUAL);break;case zc:r.depthFunc(r.GREATER);break;case kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Y}},setLocked:function(Y){O=Y},setClear:function(Y){ae!==Y&&(ae=Y,fe&&(Y=1-Y),r.clearDepth(Y))},reset:function(){O=!1,ue=null,we=null,ae=null,fe=!1}}}function i(){let O=!1,fe=null,ue=null,we=null,ae=null,Y=null,Re=null,qe=null,vt=null;return{setTest:function(dt){O||(dt?te(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(dt){fe!==dt&&!O&&(r.stencilMask(dt),fe=dt)},setFunc:function(dt,ti,ni){(ue!==dt||we!==ti||ae!==ni)&&(r.stencilFunc(dt,ti,ni),ue=dt,we=ti,ae=ni)},setOp:function(dt,ti,ni){(Y!==dt||Re!==ti||qe!==ni)&&(r.stencilOp(dt,ti,ni),Y=dt,Re=ti,qe=ni)},setLocked:function(dt){O=dt},setClear:function(dt){vt!==dt&&(r.clearStencil(dt),vt=dt)},reset:function(){O=!1,fe=null,ue=null,we=null,ae=null,Y=null,Re=null,qe=null,vt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,M=null,v=null,E=null,w=null,T=new Te(0,0,0),y=0,S=!1,L=null,R=null,N=null,U=null,V=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ie)[1]),k=F>=1):ie.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),k=F>=2);let Z=null,ce={};const de=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Ue=new St().fromArray(de),et=new St().fromArray(pe);function tt(O,fe,ue,we){const ae=new Uint8Array(4),Y=r.createTexture();r.bindTexture(O,Y),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<ue;Re++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(fe+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Y}const J={};J[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(Ks),j(!1),me(qu),te(r.CULL_FACE),K(ui);function te(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function le(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function ke(O,fe){return u[O]!==fe?(r.bindFramebuffer(O,fe),u[O]=fe,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=fe),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(O,fe){let ue=f,we=!1;if(O){ue=d.get(fe),ue===void 0&&(ue=[],d.set(fe,ue));const ae=O.textures;if(ue.length!==ae.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,Re=ae.length;Y<Re;Y++)ue[Y]=r.COLOR_ATTACHMENT0+Y;ue.length=ae.length,we=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,we=!0);we&&r.drawBuffers(ue)}function Ge(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const rt={[Zi]:r.FUNC_ADD,[Vm]:r.FUNC_SUBTRACT,[Gm]:r.FUNC_REVERSE_SUBTRACT};rt[Hm]=r.MIN,rt[Wm]=r.MAX;const Xe={[Xm]:r.ZERO,[qm]:r.ONE,[Jm]:r.SRC_COLOR,[Lc]:r.SRC_ALPHA,[jm]:r.SRC_ALPHA_SATURATE,[Zm]:r.DST_COLOR,[$m]:r.DST_ALPHA,[Ym]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[Qm]:r.ONE_MINUS_DST_COLOR,[Km]:r.ONE_MINUS_DST_ALPHA,[eg]:r.CONSTANT_COLOR,[tg]:r.ONE_MINUS_CONSTANT_COLOR,[ng]:r.CONSTANT_ALPHA,[ig]:r.ONE_MINUS_CONSTANT_ALPHA};function K(O,fe,ue,we,ae,Y,Re,qe,vt,dt){if(O===ui){_===!0&&(le(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),O!==km){if(O!==m||dt!==S){if((g!==Zi||v!==Zi)&&(r.blendEquation(r.FUNC_ADD),g=Zi,v=Zi),dt)switch(O){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yo:r.blendFunc(r.ONE,r.ONE);break;case Ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",O);break}else switch(O){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ju:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",O);break}x=null,M=null,E=null,w=null,T.set(0,0,0),y=0,m=O,S=dt}return}ae=ae||fe,Y=Y||ue,Re=Re||we,(fe!==g||ae!==v)&&(r.blendEquationSeparate(rt[fe],rt[ae]),g=fe,v=ae),(ue!==x||we!==M||Y!==E||Re!==w)&&(r.blendFuncSeparate(Xe[ue],Xe[we],Xe[Y],Xe[Re]),x=ue,M=we,E=Y,w=Re),(qe.equals(T)===!1||vt!==y)&&(r.blendColor(qe.r,qe.g,qe.b,vt),T.copy(qe),y=vt),m=O,S=!1}function se(O,fe){O.side===wn?le(r.CULL_FACE):te(r.CULL_FACE);let ue=O.side===rn;fe&&(ue=!ue),j(ue),O.blending===qs&&O.transparent===!1?K(ui):K(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const we=O.stencilWrite;o.setTest(we),we&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){L!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),L=O)}function me(O){O!==Fm?(te(r.CULL_FACE),O!==R&&(O===qu?r.cullFace(r.BACK):O===Bm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),R=O}function P(O){O!==N&&(k&&r.lineWidth(O),N=O)}function De(O,fe,ue){O?(te(r.POLYGON_OFFSET_FILL),(U!==fe||V!==ue)&&(U=fe,V=ue,a.getReversed()&&(fe=-fe),r.polygonOffset(fe,ue))):le(r.POLYGON_OFFSET_FILL)}function _e(O){O?te(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function Oe(O){O===void 0&&(O=r.TEXTURE0+B-1),Z!==O&&(r.activeTexture(O),Z=O)}function oe(O,fe,ue){ue===void 0&&(Z===null?ue=r.TEXTURE0+B-1:ue=Z);let we=ce[ue];we===void 0&&(we={type:void 0,texture:void 0},ce[ue]=we),(we.type!==O||we.texture!==fe)&&(Z!==ue&&(r.activeTexture(ue),Z=ue),r.bindTexture(O,fe||J[O]),we.type=O,we.texture=fe)}function C(){const O=ce[Z];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function X(){try{r.texSubImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function $(){try{r.texSubImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function ee(){try{r.texStorage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function Be(){try{r.texStorage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function He(){try{r.texImage2D(...arguments)}catch(O){Ve("WebGLState:",O)}}function re(){try{r.texImage3D(...arguments)}catch(O){Ve("WebGLState:",O)}}function he(O){Ue.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ue.copy(O))}function Ce(O){et.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Pe(O,fe){let ue=c.get(fe);ue===void 0&&(ue=new WeakMap,c.set(fe,ue));let we=ue.get(O);we===void 0&&(we=r.getUniformBlockIndex(fe,O.name),ue.set(O,we))}function Me(O,fe){const we=c.get(fe).get(O);l.get(fe)!==we&&(r.uniformBlockBinding(fe,we,O.__bindingPointIndex),l.set(fe,we))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,ce={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,M=null,v=null,E=null,w=null,T=new Te(0,0,0),y=0,S=!1,L=null,R=null,N=null,U=null,V=null,Ue.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:le,bindFramebuffer:ke,drawBuffers:Ne,useProgram:Ge,setBlending:K,setMaterial:se,setFlipSided:j,setCullFace:me,setLineWidth:P,setPolygonOffset:De,setScissorTest:_e,activeTexture:Oe,bindTexture:oe,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:D,texImage2D:He,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:Me,texStorage2D:ee,texStorage3D:Be,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:he,viewport:Ce,reset:Qe}}function AS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return f?new OffscreenCanvas(C,b):Kr("canvas")}function _(C,b,D){let X=1;const $=oe(C);if(($.width>D||$.height>D)&&(X=D/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(X*$.width),ve=Math.floor(X*$.height);u===void 0&&(u=p(q,ve));const ee=b?p(q,ve):u;return ee.width=q,ee.height=ve,ee.getContext("2d").drawImage(C,0,0,q,ve),Se("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ve+")."),ee}else return"data"in C&&Se("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,b,D,X,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=b;if(b===r.RED&&(D===r.FLOAT&&(q=r.R32F),D===r.HALF_FLOAT&&(q=r.R16F),D===r.UNSIGNED_BYTE&&(q=r.R8)),b===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(q=r.R8UI),D===r.UNSIGNED_SHORT&&(q=r.R16UI),D===r.UNSIGNED_INT&&(q=r.R32UI),D===r.BYTE&&(q=r.R8I),D===r.SHORT&&(q=r.R16I),D===r.INT&&(q=r.R32I)),b===r.RG&&(D===r.FLOAT&&(q=r.RG32F),D===r.HALF_FLOAT&&(q=r.RG16F),D===r.UNSIGNED_BYTE&&(q=r.RG8)),b===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(q=r.RG8UI),D===r.UNSIGNED_SHORT&&(q=r.RG16UI),D===r.UNSIGNED_INT&&(q=r.RG32UI),D===r.BYTE&&(q=r.RG8I),D===r.SHORT&&(q=r.RG16I),D===r.INT&&(q=r.RG32I)),b===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(q=r.RGB8UI),D===r.UNSIGNED_SHORT&&(q=r.RGB16UI),D===r.UNSIGNED_INT&&(q=r.RGB32UI),D===r.BYTE&&(q=r.RGB8I),D===r.SHORT&&(q=r.RGB16I),D===r.INT&&(q=r.RGB32I)),b===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),D===r.UNSIGNED_INT&&(q=r.RGBA32UI),D===r.BYTE&&(q=r.RGBA8I),D===r.SHORT&&(q=r.RGBA16I),D===r.INT&&(q=r.RGBA32I)),b===r.RGB&&(D===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),b===r.RGBA){const ve=$?Ko:st.getTransfer(X);D===r.FLOAT&&(q=r.RGBA32F),D===r.HALF_FLOAT&&(q=r.RGBA16F),D===r.UNSIGNED_BYTE&&(q=ve===ft?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(C,b){let D;return C?b===null||b===On||b===qr?D=r.DEPTH24_STENCIL8:b===cn?D=r.DEPTH32F_STENCIL8:b===Xr&&(D=r.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===On||b===qr?D=r.DEPTH_COMPONENT24:b===cn?D=r.DEPTH_COMPONENT32F:b===Xr&&(D=r.DEPTH_COMPONENT16),D}function E(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Lt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),y(b),b.isVideoTexture&&h.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),L(b)}function y(C){const b=n.get(C);if(b.__webglInit===void 0)return;const D=C.source,X=d.get(D);if(X){const $=X[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(C),Object.keys(X).length===0&&d.delete(D)}n.remove(C)}function S(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const D=C.source,X=d.get(D);delete X[b.__cacheKey],a.memory.textures--}function L(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let $=0;$<b.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(b.__webglFramebuffer[X][$]);else r.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)r.deleteFramebuffer(b.__webglFramebuffer[X]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const D=C.textures;for(let X=0,$=D.length;X<$;X++){const q=n.get(D[X]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(C)}let R=0;function N(){R=0}function U(){const C=R;return C>=i.maxTextures&&Se("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function B(C,b){const D=n.get(C);if(C.isVideoTexture&&_e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&D.__version!==C.version){const X=C.image;if(X===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{J(D,C,b);return}}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+b)}function k(C,b){const D=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){J(D,C,b);return}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+b)}function F(C,b){const D=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){J(D,C,b);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+b)}function ie(C,b){const D=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&D.__version!==C.version){te(D,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+b)}const Z={[mi]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Wr]:r.MIRRORED_REPEAT},ce={[It]:r.NEAREST,[Fh]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[kr]:r.LINEAR_MIPMAP_NEAREST,[$n]:r.LINEAR_MIPMAP_LINEAR},de={[fg]:r.NEVER,[yg]:r.ALWAYS,[pg]:r.LESS,[Xh]:r.LEQUAL,[mg]:r.EQUAL,[qh]:r.GEQUAL,[gg]:r.GREATER,[_g]:r.NOTEQUAL};function pe(C,b){if(b.type===cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Lt||b.magFilter===kr||b.magFilter===ks||b.magFilter===$n||b.minFilter===Lt||b.minFilter===kr||b.minFilter===ks||b.minFilter===$n)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Z[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ce[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===It||b.minFilter!==ks&&b.minFilter!==$n||b.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(C,b){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const X=b.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const q=V(b);if(q!==C.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[q].usedTimes++;const ve=$[C.__cacheKey];ve!==void 0&&($[C.__cacheKey].usedTimes--,ve.usedTimes===0&&S(b)),C.__cacheKey=q,C.__webglTexture=$[q].texture}return D}function et(C,b,D){return Math.floor(Math.floor(C/D)/b)}function tt(C,b,D,X){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,D,X,b.data);else{q.sort((re,he)=>re.start-he.start);let ve=0;for(let re=1;re<q.length;re++){const he=q[ve],Ce=q[re],Pe=he.start+he.count,Me=et(Ce.start,b.width,4),Qe=et(he.start,b.width,4);Ce.start<=Pe+1&&Me===Qe&&et(Ce.start+Ce.count-1,b.width,4)===Me?he.count=Math.max(he.count,Ce.start+Ce.count-he.start):(++ve,q[ve]=Ce)}q.length=ve+1;const ee=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),He=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let re=0,he=q.length;re<he;re++){const Ce=q[re],Pe=Math.floor(Ce.start/4),Me=Math.ceil(Ce.count/4),Qe=Pe%b.width,O=Math.floor(Pe/b.width),fe=Me,ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Qe,O,fe,ue,D,X,b.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,He)}}function J(C,b,D){let X=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=r.TEXTURE_3D);const $=Ue(C,b),q=b.source;t.bindTexture(X,C.__webglTexture,r.TEXTURE0+D);const ve=n.get(q);if(q.version!==ve.__version||$===!0){t.activeTexture(r.TEXTURE0+D);const ee=st.getPrimaries(st.workingColorSpace),Be=b.colorSpace===Li?null:st.getPrimaries(b.colorSpace),He=b.colorSpace===Li||ee===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let re=_(b.image,!1,i.maxTextureSize);re=Oe(b,re);const he=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type);let Pe=M(b.internalFormat,he,Ce,b.colorSpace,b.isVideoTexture);pe(X,b);let Me;const Qe=b.mipmaps,O=b.isVideoTexture!==!0,fe=ve.__version===void 0||$===!0,ue=q.dataReady,we=E(b,re);if(b.isDepthTexture)Pe=v(b.format===ts,b.type),fe&&(O?t.texStorage2D(r.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,he,Ce,null));else if(b.isDataTexture)if(Qe.length>0){O&&fe&&t.texStorage2D(r.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let ae=0,Y=Qe.length;ae<Y;ae++)Me=Qe[ae],O?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Me.width,Me.height,he,Ce,Me.data):t.texImage2D(r.TEXTURE_2D,ae,Pe,Me.width,Me.height,0,he,Ce,Me.data);b.generateMipmaps=!1}else O?(fe&&t.texStorage2D(r.TEXTURE_2D,we,Pe,re.width,re.height),ue&&tt(b,re,he,Ce)):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,he,Ce,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Pe,Qe[0].width,Qe[0].height,re.depth);for(let ae=0,Y=Qe.length;ae<Y;ae++)if(Me=Qe[ae],b.format!==hn)if(he!==null)if(O){if(ue)if(b.layerUpdates.size>0){const Re=Zd(Me.width,Me.height,b.format,b.type);for(const qe of b.layerUpdates){const vt=Me.data.subarray(qe*Re/Me.data.BYTES_PER_ELEMENT,(qe+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,qe,Me.width,Me.height,1,he,vt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,he,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Pe,Me.width,Me.height,re.depth,0,Me.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,he,Ce,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Pe,Me.width,Me.height,re.depth,0,he,Ce,Me.data)}else{O&&fe&&t.texStorage2D(r.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let ae=0,Y=Qe.length;ae<Y;ae++)Me=Qe[ae],b.format!==hn?he!==null?O?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Me.width,Me.height,he,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Pe,Me.width,Me.height,0,Me.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Me.width,Me.height,he,Ce,Me.data):t.texImage2D(r.TEXTURE_2D,ae,Pe,Me.width,Me.height,0,he,Ce,Me.data)}else if(b.isDataArrayTexture)if(O){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Pe,re.width,re.height,re.depth),ue)if(b.layerUpdates.size>0){const ae=Zd(re.width,re.height,b.format,b.type);for(const Y of b.layerUpdates){const Re=re.data.subarray(Y*ae/re.data.BYTES_PER_ELEMENT,(Y+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,re.width,re.height,1,he,Ce,Re)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Ce,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,he,Ce,re.data);else if(b.isData3DTexture)O?(fe&&t.texStorage3D(r.TEXTURE_3D,we,Pe,re.width,re.height,re.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Ce,re.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,he,Ce,re.data);else if(b.isFramebufferTexture){if(fe)if(O)t.texStorage2D(r.TEXTURE_2D,we,Pe,re.width,re.height);else{let ae=re.width,Y=re.height;for(let Re=0;Re<we;Re++)t.texImage2D(r.TEXTURE_2D,Re,Pe,ae,Y,0,he,Ce,null),ae>>=1,Y>>=1}}else if(Qe.length>0){if(O&&fe){const ae=oe(Qe[0]);t.texStorage2D(r.TEXTURE_2D,we,Pe,ae.width,ae.height)}for(let ae=0,Y=Qe.length;ae<Y;ae++)Me=Qe[ae],O?ue&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,he,Ce,Me):t.texImage2D(r.TEXTURE_2D,ae,Pe,he,Ce,Me);b.generateMipmaps=!1}else if(O){if(fe){const ae=oe(re);t.texStorage2D(r.TEXTURE_2D,we,Pe,ae.width,ae.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Ce,re)}else t.texImage2D(r.TEXTURE_2D,0,Pe,he,Ce,re);m(b)&&g(X),ve.__version=q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function te(C,b,D){if(b.image.length!==6)return;const X=Ue(C,b),$=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+D);const q=n.get($);if($.version!==q.__version||X===!0){t.activeTexture(r.TEXTURE0+D);const ve=st.getPrimaries(st.workingColorSpace),ee=b.colorSpace===Li?null:st.getPrimaries(b.colorSpace),Be=b.colorSpace===Li||ve===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!He&&!re?he[Y]=_(b.image[Y],!0,i.maxCubemapSize):he[Y]=re?b.image[Y].image:b.image[Y],he[Y]=Oe(b,he[Y]);const Ce=he[0],Pe=s.convert(b.format,b.colorSpace),Me=s.convert(b.type),Qe=M(b.internalFormat,Pe,Me,b.colorSpace),O=b.isVideoTexture!==!0,fe=q.__version===void 0||X===!0,ue=$.dataReady;let we=E(b,Ce);pe(r.TEXTURE_CUBE_MAP,b);let ae;if(He){O&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Qe,Ce.width,Ce.height);for(let Y=0;Y<6;Y++){ae=he[Y].mipmaps;for(let Re=0;Re<ae.length;Re++){const qe=ae[Re];b.format!==hn?Pe!==null?O?ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,Qe,qe.width,qe.height,0,qe.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,qe.width,qe.height,Pe,Me,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,Qe,qe.width,qe.height,0,Pe,Me,qe.data)}}}else{if(ae=b.mipmaps,O&&fe){ae.length>0&&we++;const Y=oe(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Qe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(re){O?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Pe,Me,he[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Qe,he[Y].width,he[Y].height,0,Pe,Me,he[Y].data);for(let Re=0;Re<ae.length;Re++){const vt=ae[Re].image[Y].image;O?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,vt.width,vt.height,Pe,Me,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,Qe,vt.width,vt.height,0,Pe,Me,vt.data)}}else{O?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Me,he[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Qe,Pe,Me,he[Y]);for(let Re=0;Re<ae.length;Re++){const qe=ae[Re];O?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,Pe,Me,qe.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,Qe,Pe,Me,qe.image[Y])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),q.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function le(C,b,D,X,$,q){const ve=s.convert(D.format,D.colorSpace),ee=s.convert(D.type),Be=M(D.internalFormat,ve,ee,D.colorSpace),He=n.get(b),re=n.get(D);if(re.__renderTarget=b,!He.__hasExternalTextures){const he=Math.max(1,b.width>>q),Ce=Math.max(1,b.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,q,Be,he,Ce,b.depth,0,ve,ee,null):t.texImage2D($,q,Be,he,Ce,0,ve,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),De(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,re.__webglTexture,0,P(b)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,re.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(C,b,D){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const X=b.depthTexture,$=X&&X.isDepthTexture?X.type:null,q=v(b.stencilBuffer,$),ve=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;De(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(b),q,b.width,b.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(b),q,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,q,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const X=b.textures;for(let $=0;$<X.length;$++){const q=X[$],ve=s.convert(q.format,q.colorSpace),ee=s.convert(q.type),Be=M(q.internalFormat,ve,ee,q.colorSpace);De(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(b),Be,b.width,b.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(b),Be,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Be,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(C,b,D){const X=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),pe(r.TEXTURE_CUBE_MAP,b.depthTexture);const He=s.convert(b.depthTexture.format),re=s.convert(b.depthTexture.type);let he;b.depthTexture.format===_i?he=r.DEPTH_COMPONENT24:b.depthTexture.format===ts&&(he=r.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,he,b.width,b.height,0,He,re,null)}}else B(b.depthTexture,0);const q=$.__webglTexture,ve=P(b),ee=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+D:r.TEXTURE_2D,Be=b.depthTexture.format===ts?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===_i)De(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,ee,q,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Be,ee,q,0);else if(b.depthTexture.format===ts)De(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,ee,q,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Be,ee,q,0);else throw new Error("Unknown depthTexture format")}function Ge(C){const b=n.get(C),D=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=X}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)Ne(b.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Ne(b.__webglFramebuffer[0],C,0):Ne(b.__webglFramebuffer,C,0)}else if(D){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=r.createRenderbuffer(),ke(b.__webglDepthbuffer[X],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,b,D){const X=n.get(C);b!==void 0&&le(X.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Ge(C)}function Xe(C){const b=C.texture,D=n.get(C),X=n.get(b);C.addEventListener("dispose",T);const $=C.textures,q=C.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=b.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer[ee]=[];for(let Be=0;Be<b.mipmaps.length;Be++)D.__webglFramebuffer[ee][Be]=r.createFramebuffer()}else D.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)D.__webglFramebuffer[ee]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(ve)for(let ee=0,Be=$.length;ee<Be;ee++){const He=n.get($[ee]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&De(C)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){const Be=$[ee];D.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[ee]);const He=s.convert(Be.format,Be.colorSpace),re=s.convert(Be.type),he=M(Be.internalFormat,He,re,Be.colorSpace,C.isXRRenderTarget===!0),Ce=P(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,he,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,D.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(D.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),pe(r.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)le(D.__webglFramebuffer[ee][Be],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Be);else le(D.__webglFramebuffer[ee],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,Be=$.length;ee<Be;ee++){const He=$[ee],re=n.get(He);let he=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),pe(he,He),le(D.__webglFramebuffer,C,He,r.COLOR_ATTACHMENT0+ee,he,0),m(He)&&g(he)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,X.__webglTexture),pe(ee,b),b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)le(D.__webglFramebuffer[Be],C,b,r.COLOR_ATTACHMENT0,ee,Be);else le(D.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ee,0);m(b)&&g(ee),t.unbindTexture()}C.depthBuffer&&Ge(C)}function K(C){const b=C.textures;for(let D=0,X=b.length;D<X;D++){const $=b[D];if(m($)){const q=x(C),ve=n.get($).__webglTexture;t.bindTexture(q,ve),g(q),t.unbindTexture()}}}const se=[],j=[];function me(C){if(C.samples>0){if(De(C)===!1){const b=C.textures,D=C.width,X=C.height;let $=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),ee=b.length>1;if(ee)for(let He=0;He<b.length;He++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Be=C.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let He=0;He<b.length;He++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[He]);const re=n.get(b[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,D,X,0,0,D,X,$,r.NEAREST),l===!0&&(se.length=0,j.length=0,se.push(r.COLOR_ATTACHMENT0+He),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(q),j.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let He=0;He<b.length;He++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,ve.__webglColorRenderbuffer[He]);const re=n.get(b[He]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function P(C){return Math.min(i.maxSamples,C.samples)}function De(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Oe(C,b){const D=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==an&&D!==Li&&(st.getTransfer(D)===ft?(X!==hn||$!==vn)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",D)),b}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=ie,this.rebindTextures=rt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function CS(r,e){function t(n,i=Li){let s;const a=st.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===cp)return r.BYTE;if(n===hp)return r.SHORT;if(n===Xr)return r.UNSIGNED_SHORT;if(n===Bh)return r.INT;if(n===On)return r.UNSIGNED_INT;if(n===cn)return r.FLOAT;if(n===gi)return r.HALF_FLOAT;if(n===fp)return r.ALPHA;if(n===pp)return r.RGB;if(n===hn)return r.RGBA;if(n===_i)return r.DEPTH_COMPONENT;if(n===ts)return r.DEPTH_STENCIL;if(n===Vh)return r.RED;if(n===pl)return r.RED_INTEGER;if(n===Zs)return r.RG;if(n===Gh)return r.RG_INTEGER;if(n===Hh)return r.RGBA_INTEGER;if(n===Vo||n===Go||n===Ho||n===Wo)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Gc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Jc||n===Yc||n===$c||n===Kc||n===Zc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xc||n===qc)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yc)return s.COMPRESSED_R11_EAC;if(n===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Kc)return s.COMPRESSED_RG11_EAC;if(n===Zc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qc||n===jc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dh||n===fh||n===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dh)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===_h||n===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_h)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PS=`
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

}`;class IS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:RS,fragmentShader:PS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LS extends fs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new IS,g={},x=t.getContextAttributes();let M=null,v=null;const E=[],w=[],T=new ne;let y=null;const S=new Zt;S.viewport=new St;const L=new Zt;L.viewport=new St;const R=[S,L],N=new Ry;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=E[J];return te===void 0&&(te=new Ll,E[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=E[J];return te===void 0&&(te=new Ll,E[J]=te),te.getGripSpace()},this.getHand=function(J){let te=E[J];return te===void 0&&(te=new Ll,E[J]=te),te.getHandSpace()};function B(J){const te=w.indexOf(J.inputSource);if(te===-1)return;const le=E[te];le!==void 0&&(le.update(J.inputSource,J.frame,c||a),le.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let J=0;J<E.length;J++){const te=w[J];te!==null&&(w[J]=null,E[J].disconnect(te))}U=null,V=null,m.reset();for(const J in g)delete g[J];e.setRenderTarget(M),f=null,d=null,u=null,i=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ke=null,Ne=null;x.depth&&(Ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?ts:_i,ke=x.stencil?qr:On);const Ge={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Qn(d.textureWidth,d.textureHeight,{format:hn,type:vn,depthTexture:new Zr(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(J){for(let te=0;te<J.removed.length;te++){const le=J.removed[te],ke=w.indexOf(le);ke>=0&&(w[ke]=null,E[ke].disconnect(le))}for(let te=0;te<J.added.length;te++){const le=J.added[te];let ke=w.indexOf(le);if(ke===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=w.length){w.push(le),ke=Ge;break}else if(w[Ge]===null){w[Ge]=le,ke=Ge;break}if(ke===-1)break}const Ne=E[ke];Ne&&Ne.connect(le)}}const ie=new I,Z=new I;function ce(J,te,le){ie.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const ke=ie.distanceTo(Z),Ne=te.projectionMatrix.elements,Ge=le.projectionMatrix.elements,rt=Ne[14]/(Ne[10]-1),Xe=Ne[14]/(Ne[10]+1),K=(Ne[9]+1)/Ne[5],se=(Ne[9]-1)/Ne[5],j=(Ne[8]-1)/Ne[0],me=(Ge[8]+1)/Ge[0],P=rt*j,De=rt*me,_e=ke/(-j+me),Oe=_e*-j;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Oe),J.translateZ(_e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const oe=rt+_e,C=Xe+_e,b=P-Oe,D=De+(ke-Oe),X=K*Xe/C*oe,$=se*Xe/C*oe;J.projectionMatrix.makePerspective(b,D,X,$,oe,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,le=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(le=m.depthFar)),N.near=L.near=S.near=te,N.far=L.far=S.far=le,(U!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,V=N.far),N.layers.mask=J.layers.mask|6,S.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const ke=J.parent,Ne=N.cameras;de(N,ke);for(let Ge=0;Ge<Ne.length;Ge++)de(Ne[Ge],ke);Ne.length===2?ce(N,S,L):N.projectionMatrix.copy(S.projectionMatrix),pe(J,N,ke)};function pe(J,te,le){le===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return g[J]};let Ue=null;function et(J,te){if(h=te.getViewerPose(c||a),p=te,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ke=!1;le.length!==N.cameras.length&&(N.cameras.length=0,ke=!0);for(let Xe=0;Xe<le.length;Xe++){const K=le[Xe];let se=null;if(f!==null)se=f.getViewport(K);else{const me=u.getViewSubImage(d,K);se=me.viewport,Xe===0&&(e.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(v))}let j=R[Xe];j===void 0&&(j=new Zt,j.layers.enable(Xe),j.viewport=new St,R[Xe]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(se.x,se.y,se.width,se.height),Xe===0&&(N.matrix.copy(j.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ke===!0&&N.cameras.push(j)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Xe=u.getDepthInformation(le[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Ne&&Ne.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<le.length;Xe++){const K=le[Xe].camera;if(K){let se=g[K];se||(se=new Lp,g[K]=se);const j=u.getCameraImage(K);se.sourceTexture=j}}}}for(let le=0;le<E.length;le++){const ke=w[le],Ne=E[le];ke!==null&&Ne!==void 0&&Ne.update(ke,te,c||a)}Ue&&Ue(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const tt=new im;tt.setAnimationLoop(et),this.setAnimationLoop=function(J){Ue=J},this.dispose=function(){}}}const Ji=new jn,NS=new Je;function US(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Gp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,M,v){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ji.copy(v),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Ji)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const v=r.createBuffer(),E=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,T=v.length;w<T;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,L=y.length;S<L;S++){const R=y[S];if(f(R,w,S,E)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let B=0;B<U.length;B++){const k=U[B],F=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,N+V,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,M,v,E){const w=x.value,T=M+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const y=E[T];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return E[T]=w,!0}else if(y.equals(w)===!1)return y.copy(w),!0}return!1}function p(x){const M=x.uniforms;let v=0;const E=16;for(let T=0,y=M.length;T<y;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,R=S.length;L<R;L++){const N=S[L],U=Array.isArray(N.value)?N.value:[N.value];for(let V=0,B=U.length;V<B;V++){const k=U[V],F=_(k),ie=v%E,Z=ie%F.boundary,ce=ie+Z;v+=Z,ce!==0&&E-ce<F.storage&&(v+=E-ce),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=F.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Se("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}const OS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function FS(){return Hn===null&&(Hn=new fi(OS,16,16,Zs,gi),Hn.name="DFG_LUT",Hn.minFilter=Lt,Hn.magFilter=Lt,Hn.wrapS=Un,Hn.wrapT=Un,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class BS{constructor(e={}){const{canvas:t=Sg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([Hh,Gh,pl]),g=new Set([vn,On,Xr,qr,zh,kh]),x=new Uint32Array(4),M=new Int32Array(4);let v=null,E=null;const w=[],T=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let L=!1;this._outputColorSpace=Xt;let R=0,N=0,U=null,V=-1,B=null;const k=new St,F=new St;let ie=null;const Z=new Te(0);let ce=0,de=t.width,pe=t.height,Ue=1,et=null,tt=null;const J=new St(0,0,de,pe),te=new St(0,0,de,pe);let le=!1;const ke=new Da;let Ne=!1,Ge=!1;const rt=new Je,Xe=new I,K=new St,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function me(){return U===null?Ue:1}let P=n;function De(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",vt,!1),P===null){const z="webgl2";if(P=De(z,A),P===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ve("WebGLRenderer: "+A.message),A}let _e,Oe,oe,C,b,D,X,$,q,ve,ee,Be,He,re,he,Ce,Pe,Me,Qe,O,fe,ue,we;function ae(){_e=new Bv(P),_e.init(),fe=new CS(P,_e),Oe=new Pv(P,_e,e,fe),oe=new TS(P,_e),Oe.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),C=new Vv(P),b=new dS,D=new AS(P,_e,oe,b,Oe,fe,C),X=new Fv(S),$=new qy(P),ue=new Cv(P,$),q=new zv(P,$,C,ue),ve=new Hv(P,q,$,ue,C),Me=new Gv(P,Oe,D),he=new Iv(b),ee=new uS(S,X,_e,Oe,ue,he),Be=new US(S,b),He=new pS,re=new vS(_e),Pe=new Av(S,X,oe,ve,p,l),Ce=new ES(S,ve,Oe),we=new DS(P,C,Oe,oe),Qe=new Rv(P,_e,C),O=new kv(P,_e,C),C.programs=ee.programs,S.capabilities=Oe,S.extensions=_e,S.properties=b,S.renderLists=He,S.shadowMap=Ce,S.state=oe,S.info=C}ae(),_!==vn&&(y=new Xv(_,t.width,t.height,i,s));const Y=new LS(S,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(A){A!==void 0&&(Ue=A,this.setSize(de,pe,!1))},this.getSize=function(A){return A.set(de,pe)},this.setSize=function(A,z,W=!0){if(Y.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,pe=z,t.width=Math.floor(A*Ue),t.height=Math.floor(z*Ue),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(de*Ue,pe*Ue).floor()},this.setDrawingBufferSize=function(A,z,W){de=A,pe=z,Ue=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,z,W,H){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,W,H),oe.viewport(k.copy(J).multiplyScalar(Ue).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,z,W,H){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,z,W,H),oe.scissor(F.copy(te).multiplyScalar(Ue).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){oe.setScissorTest(le=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,W=!0){let H=0;if(A){let G=!1;if(U!==null){const ye=U.texture.format;G=m.has(ye)}if(G){const ye=U.texture.type,be=g.has(ye),xe=Pe.getClearColor(),Ie=Pe.getClearAlpha(),Fe=xe.r,Ye=xe.g,je=xe.b;be?(x[0]=Fe,x[1]=Ye,x[2]=je,x[3]=Ie,P.clearBufferuiv(P.COLOR,0,x)):(M[0]=Fe,M[1]=Ye,M[2]=je,M[3]=Ie,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}z&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Pe.dispose(),He.dispose(),re.dispose(),b.dispose(),X.dispose(),ve.dispose(),ue.dispose(),we.dispose(),ee.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Bu),Y.removeEventListener("sessionend",zu),Bi.stop()};function Re(A){A.preventDefault(),Zo("WebGLRenderer: Context Lost."),L=!0}function qe(){Zo("WebGLRenderer: Context Restored."),L=!1;const A=C.autoReset,z=Ce.enabled,W=Ce.autoUpdate,H=Ce.needsUpdate,G=Ce.type;ae(),C.autoReset=A,Ce.enabled=z,Ce.autoUpdate=W,Ce.needsUpdate=H,Ce.type=G}function vt(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function dt(A){const z=A.target;z.removeEventListener("dispose",dt),ti(z)}function ti(A){ni(A),b.remove(A)}function ni(A){const z=b.get(A).programs;z!==void 0&&(z.forEach(function(W){ee.releaseProgram(W)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,H,G,ye){z===null&&(z=se);const be=G.isMesh&&G.matrixWorld.determinant()<0,xe=Rm(A,z,W,H,G);oe.setMaterial(H,be);let Ie=W.index,Fe=1;if(H.wireframe===!0){if(Ie=q.getWireframeAttribute(W),Ie===void 0)return;Fe=2}const Ye=W.drawRange,je=W.attributes.position;let ze=Ye.start*Fe,mt=(Ye.start+Ye.count)*Fe;ye!==null&&(ze=Math.max(ze,ye.start*Fe),mt=Math.min(mt,(ye.start+ye.count)*Fe)),Ie!==null?(ze=Math.max(ze,0),mt=Math.min(mt,Ie.count)):je!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,je.count));const Tt=mt-ze;if(Tt<0||Tt===1/0)return;ue.setup(G,H,xe,W,Ie);let Et,gt=Qe;if(Ie!==null&&(Et=$.get(Ie),gt=O,gt.setIndex(Et)),G.isMesh)H.wireframe===!0?(oe.setLineWidth(H.wireframeLinewidth*me()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(G.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),oe.setLineWidth(qt*me()),G.isLineSegments?gt.setMode(P.LINES):G.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else G.isPoints?gt.setMode(P.POINTS):G.isSprite&&gt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qt=G._multiDrawStarts,Le=G._multiDrawCounts,fn=G._multiDrawCount,at=Ie?$.get(Ie).bytesPerElement:1,Cn=b.get(H).currentProgram.getUniforms();for(let zn=0;zn<fn;zn++)Cn.setValue(P,"_gl_DrawID",zn),gt.render(qt[zn]/at,Le[zn])}else if(G.isInstancedMesh)gt.renderInstances(ze,Tt,G.count);else if(W.isInstancedBufferGeometry){const qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Le=Math.min(W.instanceCount,qt);gt.renderInstances(ze,Tt,Le)}else gt.render(ze,Tt)};function Fu(A,z,W){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Va(A,z,W),A.side=pi,A.needsUpdate=!0,Va(A,z,W),A.side=wn):Va(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),E=re.get(W),E.init(z),T.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),A!==W&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const H=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let be=0;be<ye.length;be++){const xe=ye[be];Fu(xe,W,G),H.add(xe)}else Fu(ye,W,G),H.add(ye)}),E=T.pop(),H},this.compileAsync=function(A,z,W=null){const H=this.compile(A,z,W);return new Promise(G=>{function ye(){if(H.forEach(function(be){b.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){G(A);return}setTimeout(ye,10)}_e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let wl=null;function Cm(A){wl&&wl(A)}function Bu(){Bi.stop()}function zu(){Bi.start()}const Bi=new im;Bi.setAnimationLoop(Cm),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){wl=A,Y.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},Y.addEventListener("sessionstart",Bu),Y.addEventListener("sessionend",zu),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,H=y!==null&&(U===null||W)&&y.begin(S,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,z,U),E=re.get(A,T.length),E.init(z),T.push(E),rt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ke.setFromProjectionMatrix(rt,Dn,z.reversedDepth),Ge=this.localClippingEnabled,Ne=he.init(this.clippingPlanes,Ge),v=He.get(A,w.length),v.init(),w.push(v),Y.enabled===!0&&Y.isPresenting===!0){const be=S.xr.getDepthSensingMesh();be!==null&&El(be,z,-1/0,S.sortObjects)}El(A,z,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(et,tt),j=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,j&&Pe.addToRenderList(v,A),this.info.render.frame++,Ne===!0&&he.beginShadows();const G=E.state.shadowsArray;if(Ce.render(G,A,z),Ne===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&y.hasRenderPass())===!1){const be=v.opaque,xe=v.transmissive;if(E.setupLights(),z.isArrayCamera){const Ie=z.cameras;if(xe.length>0)for(let Fe=0,Ye=Ie.length;Fe<Ye;Fe++){const je=Ie[Fe];Vu(be,xe,A,je)}j&&Pe.render(A);for(let Fe=0,Ye=Ie.length;Fe<Ye;Fe++){const je=Ie[Fe];ku(v,A,je,je.viewport)}}else xe.length>0&&Vu(be,xe,A,z),j&&Pe.render(A),ku(v,A,z)}U!==null&&N===0&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),H&&y.end(S),A.isScene===!0&&A.onAfterRender(S,A,z),ue.resetDefaultState(),V=-1,B=null,T.pop(),T.length>0?(E=T[T.length-1],Ne===!0&&he.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function El(A,z,W,H){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){H&&K.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const be=ve.update(A),xe=A.material;xe.visible&&v.push(A,be,xe,W,K.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const be=ve.update(A),xe=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),K.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),K.copy(be.boundingSphere.center)),K.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(xe)){const Ie=be.groups;for(let Fe=0,Ye=Ie.length;Fe<Ye;Fe++){const je=Ie[Fe],ze=xe[je.materialIndex];ze&&ze.visible&&v.push(A,be,ze,W,K.z,je)}}else xe.visible&&v.push(A,be,xe,W,K.z,null)}}const ye=A.children;for(let be=0,xe=ye.length;be<xe;be++)El(ye[be],z,W,H)}function ku(A,z,W,H){const{opaque:G,transmissive:ye,transparent:be}=A;E.setupLightsView(W),Ne===!0&&he.setGlobalState(S.clippingPlanes,W),H&&oe.viewport(k.copy(H)),G.length>0&&ka(G,z,W),ye.length>0&&ka(ye,z,W),be.length>0&&ka(be,z,W),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Vu(A,z,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const ze=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Qn(1,1,{generateMipmaps:!0,type:ze?gi:vn,minFilter:$n,samples:Math.max(4,Oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const ye=E.state.transmissionRenderTarget[H.id],be=H.viewport||k;ye.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const xe=S.getRenderTarget(),Ie=S.getActiveCubeFace(),Fe=S.getActiveMipmapLevel();S.setRenderTarget(ye),S.getClearColor(Z),ce=S.getClearAlpha(),ce<1&&S.setClearColor(16777215,.5),S.clear(),j&&Pe.render(W);const Ye=S.toneMapping;S.toneMapping=Zn;const je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Ne===!0&&he.setGlobalState(S.clippingPlanes,H),ka(A,W,H),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,Tt=z.length;mt<Tt;mt++){const Et=z[mt],{object:gt,geometry:qt,material:Le,group:fn}=Et;if(Le.side===wn&&gt.layers.test(H.layers)){const at=Le.side;Le.side=rn,Le.needsUpdate=!0,Gu(gt,W,H,qt,Le,fn),Le.side=at,Le.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}S.setRenderTarget(xe,Ie,Fe),S.setClearColor(Z,ce),je!==void 0&&(H.viewport=je),S.toneMapping=Ye}function ka(A,z,W){const H=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ye=A.length;G<ye;G++){const be=A[G],{object:xe,geometry:Ie,group:Fe}=be;let Ye=be.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),xe.layers.test(W.layers)&&Gu(xe,z,W,Ie,Ye,Fe)}}function Gu(A,z,W,H,G,ye){A.onBeforeRender(S,z,W,H,G,ye),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(S,z,W,H,A,ye),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,S.renderBufferDirect(W,z,H,G,A,ye),G.side=pi,G.needsUpdate=!0,S.renderBufferDirect(W,z,H,G,A,ye),G.side=wn):S.renderBufferDirect(W,z,H,G,A,ye),A.onAfterRender(S,z,W,H,G,ye)}function Va(A,z,W){z.isScene!==!0&&(z=se);const H=b.get(A),G=E.state.lights,ye=E.state.shadowsArray,be=G.state.version,xe=ee.getParameters(A,G.state,ye,z,W),Ie=ee.getProgramCacheKey(xe);let Fe=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,H.fog=z.fog;const Ye=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=X.get(A.envMap||H.environment,Ye),H.envMapRotation=H.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",dt),Fe=new Map,H.programs=Fe);let je=Fe.get(Ie);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===be)return Wu(A,xe),je}else xe.uniforms=ee.getUniforms(A),A.onBeforeCompile(xe,S),je=ee.acquireProgram(xe,Ie),Fe.set(Ie,je),H.uniforms=xe.uniforms;const ze=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=he.uniform),Wu(A,xe),H.needsLights=Im(A),H.lightsStateVersion=be,H.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=je,H.uniformsList=null,je}function Hu(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Xo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Wu(A,z){const W=b.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Rm(A,z,W,H,G){z.isScene!==!0&&(z=se),D.resetTextureUnits();const ye=z.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?z.environment:null,xe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:an,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=X.get(H.envMap||be,Ie),Ye=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let Et=Zn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=S.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qt=gt!==void 0?gt.length:0,Le=b.get(H),fn=E.state.lights;if(Ne===!0&&(Ge===!0||A!==B)){const Ot=A===B&&H.id===V;he.setState(H,A,Ot)}let at=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==fn.state.version||Le.outputColorSpace!==xe||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Fe||H.fog===!0&&Le.fog!==ye||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==Ye||Le.vertexTangents!==je||Le.morphTargets!==ze||Le.morphNormals!==mt||Le.morphColors!==Tt||Le.toneMapping!==Et||Le.morphTargetsCount!==qt)&&(at=!0):(at=!0,Le.__version=H.version);let Cn=Le.currentProgram;at===!0&&(Cn=Va(H,z,G));let zn=!1,zi=!1,_s=!1;const yt=Cn.getUniforms(),Gt=Le.uniforms;if(oe.useProgram(Cn.program)&&(zn=!0,zi=!0,_s=!0),H.id!==V&&(V=H.id,zi=!0),zn||B!==A){oe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(P,"projectionMatrix",A.projectionMatrix),yt.setValue(P,"viewMatrix",A.matrixWorldInverse);const vi=yt.map.cameraPosition;vi!==void 0&&vi.setValue(P,Xe.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,zi=!0,_s=!0)}if(Le.needsLights&&(fn.state.directionalShadowMap.length>0&&yt.setValue(P,"directionalShadowMap",fn.state.directionalShadowMap,D),fn.state.spotShadowMap.length>0&&yt.setValue(P,"spotShadowMap",fn.state.spotShadowMap,D),fn.state.pointShadowMap.length>0&&yt.setValue(P,"pointShadowMap",fn.state.pointShadowMap,D)),G.isSkinnedMesh){yt.setOptional(P,G,"bindMatrix"),yt.setOptional(P,G,"bindMatrixInverse");const Ot=G.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),yt.setValue(P,"boneTexture",Ot.boneTexture,D))}G.isBatchedMesh&&(yt.setOptional(P,G,"batchingTexture"),yt.setValue(P,"batchingTexture",G._matricesTexture,D),yt.setOptional(P,G,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",G._indirectTexture,D),yt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",G._colorsTexture,D));const xi=W.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Me.update(G,W,Cn),(zi||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,yt.setValue(P,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&z.environment!==null&&(Gt.envMapIntensity.value=z.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=FS()),zi&&(yt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&Pm(Gt,_s),ye&&H.fog===!0&&Be.refreshFogUniforms(Gt,ye),Be.refreshMaterialUniforms(Gt,H,Ue,pe,E.state.transmissionRenderTarget[A.id]),Xo.upload(P,Hu(Le),Gt,D)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xo.upload(P,Hu(Le),Gt,D),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(P,"center",G.center),yt.setValue(P,"modelViewMatrix",G.modelViewMatrix),yt.setValue(P,"normalMatrix",G.normalMatrix),yt.setValue(P,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ot=H.uniformsGroups;for(let vi=0,ys=Ot.length;vi<ys;vi++){const Xu=Ot[vi];we.update(Xu,Cn),we.bind(Xu,Cn)}}return Cn}function Pm(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Im(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,z,W){const H=b.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=z,b.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const W=b.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Lm=P.createFramebuffer();this.setRenderTarget=function(A,z=0,W=0){U=A,R=z,N=W;let H=null,G=!1,ye=!1;if(A){const xe=b.get(A);if(xe.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),k.copy(A.viewport),F.copy(A.scissor),ie=A.scissorTest,oe.viewport(k),oe.scissor(F),oe.setScissorTest(ie),V=-1;return}else if(xe.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(xe.__hasExternalTextures)D.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(xe.__boundDepthTexture!==Ye){if(Ye!==null&&b.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Fe=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?H=Fe[z][W]:H=Fe[z],G=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?H=b.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[W]:H=Fe,k.copy(A.viewport),F.copy(A.scissor),ie=A.scissorTest}else k.copy(J).multiplyScalar(Ue).floor(),F.copy(te).multiplyScalar(Ue).floor(),ie=le;if(W!==0&&(H=Lm),oe.bindFramebuffer(P.FRAMEBUFFER,H)&&oe.drawBuffers(A,H),oe.viewport(k),oe.scissor(F),oe.setScissorTest(ie),G){const xe=b.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,W)}else if(ye){const xe=z;for(let Ie=0;Ie<A.textures.length;Ie++){const Fe=b.get(A.textures[Ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,W,xe)}}else if(A!==null&&W!==0){const xe=b.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(A,z,W,H,G,ye,be,xe=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){oe.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Fe=A.textures[xe],Ye=Fe.format,je=Fe.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!Oe.textureFormatReadable(Ye)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-H&&W>=0&&W<=A.height-G&&P.readPixels(z,W,H,G,fe.convert(Ye),fe.convert(je),ye)}finally{const Fe=U!==null?b.get(U).__webglFramebuffer:null;oe.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,H,G,ye,be,xe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie)if(z>=0&&z<=A.width-H&&W>=0&&W<=A.height-G){oe.bindFramebuffer(P.FRAMEBUFFER,Ie);const Fe=A.textures[xe],Ye=Fe.format,je=Fe.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!Oe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,ye.byteLength,P.STREAM_READ),P.readPixels(z,W,H,G,fe.convert(Ye),fe.convert(je),0);const mt=U!==null?b.get(U).__webglFramebuffer:null;oe.bindFramebuffer(P.FRAMEBUFFER,mt);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bg(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ye),P.deleteBuffer(ze),P.deleteSync(Tt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,W=0){const H=Math.pow(2,-W),G=Math.floor(A.image.width*H),ye=Math.floor(A.image.height*H),be=z!==null?z.x:0,xe=z!==null?z.y:0;D.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,be,xe,G,ye),oe.unbindTexture()};const Nm=P.createFramebuffer(),Um=P.createFramebuffer();this.copyTextureToTexture=function(A,z,W=null,H=null,G=0,ye=0){let be,xe,Ie,Fe,Ye,je,ze,mt,Tt;const Et=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(W!==null)be=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ie=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Ye=W.min.y,je=W.isBox3?W.min.z:0;else{const Gt=Math.pow(2,-G);be=Math.floor(Et.width*Gt),xe=Math.floor(Et.height*Gt),A.isDataArrayTexture?Ie=Et.depth:A.isData3DTexture?Ie=Math.floor(Et.depth*Gt):Ie=1,Fe=0,Ye=0,je=0}H!==null?(ze=H.x,mt=H.y,Tt=H.z):(ze=0,mt=0,Tt=0);const gt=fe.convert(z.format),qt=fe.convert(z.type);let Le;z.isData3DTexture?(D.setTexture3D(z,0),Le=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),Le=P.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),Le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const fn=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Cn=P.getParameter(P.UNPACK_SKIP_PIXELS),zn=P.getParameter(P.UNPACK_SKIP_ROWS),zi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,je);const _s=A.isDataArrayTexture||A.isData3DTexture,yt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Gt=b.get(A),xi=b.get(z),Ot=b.get(Gt.__renderTarget),vi=b.get(xi.__renderTarget);oe.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let ys=0;ys<Ie;ys++)_s&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(A).__webglTexture,G,je+ys),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(z).__webglTexture,ye,Tt+ys)),P.blitFramebuffer(Fe,Ye,be,xe,ze,mt,be,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);oe.bindFramebuffer(P.READ_FRAMEBUFFER,null),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||b.has(A)){const Gt=b.get(A),xi=b.get(z);oe.bindFramebuffer(P.READ_FRAMEBUFFER,Nm),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Um);for(let Ot=0;Ot<Ie;Ot++)_s?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,G,je+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,G),yt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xi.__webglTexture,ye,Tt+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xi.__webglTexture,ye),G!==0?P.blitFramebuffer(Fe,Ye,be,xe,ze,mt,be,xe,P.COLOR_BUFFER_BIT,P.NEAREST):yt?P.copyTexSubImage3D(Le,ye,ze,mt,Tt+Ot,Fe,Ye,be,xe):P.copyTexSubImage2D(Le,ye,ze,mt,Fe,Ye,be,xe);oe.bindFramebuffer(P.READ_FRAMEBUFFER,null),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Le,ye,ze,mt,Tt,be,xe,Ie,gt,qt,Et.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,ye,ze,mt,Tt,be,xe,Ie,gt,Et.data):P.texSubImage3D(Le,ye,ze,mt,Tt,be,xe,Ie,gt,qt,Et):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ye,ze,mt,be,xe,gt,qt,Et.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ye,ze,mt,Et.width,Et.height,gt,Et.data):P.texSubImage2D(P.TEXTURE_2D,ye,ze,mt,be,xe,gt,qt,Et);P.pixelStorei(P.UNPACK_ROW_LENGTH,fn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,zn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zi),ye===0&&z.generateMipmaps&&P.generateMipmap(Le),oe.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),oe.unbindTexture()},this.resetState=function(){R=0,N=0,U=null,oe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class xt extends Error{constructor(e,t){super(e),this.context=t,this.name="GameError"}}const Pt=1.2,zS=.02,kS=1.5,VS=500,fc=-.4,Sf=.18,Ro=.6,GS=600,HS=800,WS=3,XS=1,pc=-.5,bf=1e3,wf=50,qS=.5,mc=2,Po=.2,Ef=.3,Tf=.4,Lr=3,Io=3,JS=12,YS=.1,Nr=.3,Af=.85,$S=600,KS=600,ZS=1.06,Ur=.15,Cf=.5,QS=.05,jS=1,eb=.45;class tb{constructor(){Q(this,"webgl_",null);Q(this,"scene_",null);Q(this,"camera_",null);Q(this,"animId_",0);Q(this,"initialised_",!1);Q(this,"onTick",null)}async init(){this.webgl_=new BS({antialias:!0}),this.webgl_.setPixelRatio(window.devicePixelRatio??1),this.webgl_.setSize(window.innerWidth,window.innerHeight),this.webgl_.setClearColor(5160),document.body.appendChild(this.webgl_.domElement),this.scene_=new Yh;const e=window.innerWidth/window.innerHeight;this.camera_=nb(8,e),this.initialised_=!0,this.startLoop()}get scene(){return this.requireInit("scene").scene_}get camera(){return this.requireInit("camera").camera_}get canvas(){return this.requireInit("canvas").webgl_.domElement}get width(){return this.requireInit("width").webgl_.domElement.clientWidth}get height(){return this.requireInit("height").webgl_.domElement.clientHeight}fitBoard(e,t){const n=this.requireInit("fitBoard").camera_,i=(e-1)/2*Pt,s=(t-1)/2*Pt,a=Math.max(e,t)*Pt*2;n.position.set(i+a,a,s+a),n.lookAt(i,0,s),this.updateFrustum(e,t,window.innerWidth,window.innerHeight)}updateSize(e,t){this.requireInit("updateSize").webgl_.setSize(e,t);const i=this.requireInit("updateSize").camera_,{boardW:s,boardH:a}=i.userData;s!==void 0&&a!==void 0&&this.updateFrustum(s,a,e,t)}destroy(){cancelAnimationFrame(this.animId_),this.webgl_!==null&&(this.webgl_.dispose(),this.webgl_.domElement.remove()),this.webgl_=null,this.scene_=null,this.camera_=null,this.initialised_=!1}startLoop(){const e=t=>{var i;this.animId_=requestAnimationFrame(e);const n=t*.001;(i=this.onTick)==null||i.call(this,n),this.webgl_!==null&&this.scene_!==null&&this.camera_!==null&&this.webgl_.render(this.scene_,this.camera_)};requestAnimationFrame(e)}updateFrustum(e,t,n,i){const s=this.camera_,a=n/i,o=(e-1+(t-1))*Pt/2,l=o/Math.sqrt(6)*Rf,c=o/Math.sqrt(2)/a*Rf,h=Math.max(l,c);s.left=-h*a,s.right=h*a,s.top=h,s.bottom=-h,s.updateProjectionMatrix(),s.userData={boardW:e,boardH:t}}requireInit(e){if(!this.initialised_)throw new xt(`Renderer.${e} accessed before init()`);return this}}const Rf=1.1;function nb(r,e){return new gs(-r*e,r*e,r,-r,.1,2e3)}const es=class es{constructor(){Q(this,"queue",[])}static easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}static lerp(e,t,n){return e+(t-e)*n}static calculateProgress(e,t){return Math.max(0,Math.min(1,e/t))}static interpolatePosition(e,t,n){const i=this.easeInOutSine(n);return{x:this.lerp(e.x,t.x,i),y:this.lerp(e.y,t.y,i)}}static interpolateRotation(e,t,n){return this.lerp(e,t,n)}isAnimationComplete(e,t){return e>=t}queueTurnAnimation(e,t){this.queue.push({type:"turn",from:e,to:t,elapsed:0,duration:es.SHIP_TURN_DURATION_MS,progress:0})}queueMoveAnimation(e,t){this.queue.push({type:"move",from:e,to:t,elapsed:0,duration:es.SHIP_MOVE_DURATION_MS,progress:0})}hasQueuedAnimations(){return this.queue.length>0}getPendingAnimations(){return this.queue}clearQueue(){this.queue=[]}tickAnimation(e,t){e.elapsed+=t,e.progress=es.calculateProgress(e.elapsed,e.duration),e.progress=Math.max(0,Math.min(1,e.progress))}};Q(es,"SHIP_TURN_DURATION_MS",400),Q(es,"SHIP_MOVE_DURATION_MS",500);let bt=es;function Pf(r,e){if(e===hg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===xh||e===gp){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===xh)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function ib(r){const e=new Map,t=new Map,n=r.clone();return cm(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function cm(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)cm(r.children[n],e.children[n],t)}class sb extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new If(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new If(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sb(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=rs.extractUrlBase(e);a=rs.resolveURL(c,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hm){try{a[nt.KHR_BINARY_GLTF]=new bb(e)}catch(u){i&&i(u);return}s=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ob(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new ob;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new wb(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new Eb;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new Tb;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function rb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function At(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ab{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],an);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Eu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wu(h),c.distance=u;break;case"spot":c=new bu(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ob{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(i)}}class lb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class cb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(s,s)}return Promise.all(i)}}class hb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class ub{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class db{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],an)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class fb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class pb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(s[0],s[1],s[2],an),Promise.all(i)}}class mb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class gb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(s[0],s[1],s[2],an),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(i)}}class _b{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class yb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class xb{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class vb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Mb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class If{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Sb{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new Je,m=new I,g=new un,x=new I(1,1,1),M=new Zh(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,_.compose(m,g,x));for(const v in l)if(v==="_COLOR_0"){const E=l[v];M.instanceColor=new sn(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);ct.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const hm="glTF",Dr=12,Lf={JSON:1313821514,BIN:5130562};class bb{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Dr,s=new DataView(e,Dr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Lf.JSON){const c=new Uint8Array(e,Dr+a,o);this.content=n.decode(c)}else if(l===Lf.BIN){const c=Dr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Rh[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Rh[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=$s[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(f)},o,c,an,d)})})}}class Eb{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tb{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class um extends dr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,x=1-m,M=g-d+u;for(let v=0;v!==o;v++){const E=a[_+v+o],w=a[_+v+l]*h,T=a[p+v+o],y=a[p+v]*h;s[v]=x*E+M*w+m*T+g*y}return s}}const Ab=new un;class Cb extends um{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Ab.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:It,9729:Lt,9984:Fh,9985:kr,9986:ks,9987:$n},Uf={33071:Un,33648:Wr,10497:mi},gc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rb={CUBICSPLINE:void 0,LINEAR:Yr,STEP:Jr},_c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ur({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function Yi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Lb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nb(r){let e;const t=r.extensions&&r.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yc(t.attributes):e=r.indices+":"+yc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+yc(r.targets[n]);return e}function yc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ph(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ub(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Db=new Je;class Ob{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Kp(this.options.manager):this.textureLoader=new Ay(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Yi(s,o,i),qn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(rs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=gc[i.type],o=$s[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new _t(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=gc[i.type],c=$s[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(x);M||(_=new c(o,g*f,i.count*f/h),M=new $h(_,f/h),t.cache.add(x,M)),m=new ls(M,l,d%f/h,p)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new _t(_,l,p);if(i.sparse!==void 0){const g=gc.SCALAR,x=$s[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new x(a[1],M,i.sparse.count*g),w=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,y=E.length;T<y;T++){const S=E[T];if(m.setX(S,w[T*l]),l>=2&&m.setY(S,w[T*l+1]),l>=3&&m.setZ(S,w[T*l+2]),l>=4&&m.setW(S,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Nf[d.magFilter]||Lt,h.minFilter=Nf[d.minFilter]||$n,h.wrapS=Uf[d.wrapS]||mi,h.wrapT=Uf[d.wrapT]||mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new Nt(_);m.needsUpdate=!0,d(m)}),t.load(rs.resolveURL(u,s.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),qn(u,a),u.userData.mimeType=a.mimeType||Ub(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new tu,Vt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new xl,Vt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ur}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const u=i[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=wn);const h=s.alphaMode||_c.OPAQUE;if(h===_c.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_c.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ne(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==zt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==zt){const u=s.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],an)}return s.emissiveTexture!==void 0&&a!==zt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),qn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Yi(i,u,s),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Df(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Nb(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Df(new ot,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Pb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=a[f];let g;const x=c[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new Kh(_,x):new Mt(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?g.geometry=Pf(g.geometry,gp):m.mode===bn.TRIANGLE_FAN&&(g.geometry=Pf(g.geometry,xh));else if(m.mode===bn.LINES)g=new jh(_,x);else if(m.mode===bn.LINE_STRIP)g=new Oa(_,x);else if(m.mode===bn.LINE_LOOP)g=new eu(_,x);else if(m.mode===bn.POINTS)g=new nu(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Lb(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),qn(g,s),m.extensions&&Yi(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Yi(i,u[0],s),u[0];const d=new En;s.extensions&&Yi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Vg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let M=0,v=d.length;M<v;M++){const E=d[M],w=f[M],T=p[M],y=_[M],S=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const L=n._createAnimationTracks(E,w,T,y,S);if(L)for(let R=0;R<L.length;R++)g.push(L[R])}const x=new nl(s,void 0,g);return qn(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Db)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new _l:c.length>1?h=new En:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),qn(h,s),s.extensions&&Yi(n,h,s),s.matrix!==void 0){const u=new Je;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new En;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&Yi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?s.add(ib(d)):s.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Vt||d instanceof Nt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ai[s.path]===Ai.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ai[s.path]){case Ai.weights:c=tr;break;case Ai.rotation:c=nr;break;case Ai.translation:case Ai.scale:c=ir;break;default:switch(n.itemSize){case 1:c=tr;break;case 2:case 3:default:c=ir;break}break}const h=i.interpolation!==void 0?Rb[i.interpolation]:Yr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+Ai[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ph(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?Cb:um;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fb(r,e,t){const n=e.attributes,i=new jt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Ph($s[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Ph($s[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new kt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Df(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Rh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return st.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),qn(r,e),Fb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ib(r,e.targets,t):r})}const Ht="/",$i={player:`${Ht}assets/models/ships/player.glb`,draugr:`${Ht}assets/models/ships/draugr.glb`,berserker:`${Ht}assets/models/ships/berserker.glb`,jarl:`${Ht}assets/models/ships/jarl.glb`,naglfar:`${Ht}assets/models/ships/naglfar.glb`,wreck:`${Ht}assets/models/props/wreck.glb`,arrow_volley:`${Ht}assets/models/props/arrow_volley.glb`,rune_stone:`${Ht}assets/models/terrain/rock_grass.glb`,skull_rock:`${Ht}assets/models/props/skull_rock_ice.glb`,ice_floe:`${Ht}assets/models/terrain/rock_ice.glb`,water_fjords:`${Ht}assets/sprites/tiles/water_fjords.jpg`,water_open_norse_sea:`${Ht}assets/sprites/tiles/water_fjords.jpg`,water_midgard_shores:`${Ht}assets/sprites/tiles/water_fjords.jpg`,water_helheim_waters:`${Ht}assets/sprites/tiles/water_fjords.jpg`,water_ragnarok_waters:`${Ht}assets/sprites/tiles/water_fjords.jpg`,maelstrom:`${Ht}assets/sprites/tiles/vortex.png`,kraken_tentacle:`${Ht}assets/models/ships/kraken_tentacle.glb`};class Pu{constructor(e,t){Q(this,"textureCache",new Map);Q(this,"gltfCache",new Map);this.textureLoader=e,this.gltfLoader=t}static create(){return new Pu(new Kp,new sb)}async getTexture(e){const t=this.textureCache.get(e);if(t!==void 0)return t;try{const n=await this.textureLoader.loadAsync(e);return this.textureCache.set(e,n),n}catch(n){throw new xt(`Failed to load texture: ${e}`,{path:e,cause:String(n)})}}async getGLTF(e){const t=this.gltfCache.get(e);if(t!==void 0)return t;try{const n=await this.gltfLoader.loadAsync(e);return this.gltfCache.set(e,n),n}catch(n){throw new xt(`Failed to load GLTF: ${e}`,{path:e,cause:String(n)})}}destroy(){for(const e of this.textureCache.values())e.dispose();this.textureCache.clear(),this.gltfCache.clear()}}function Ci(r){return new I(r.x*Pt,0,r.y*Pt)}function Ki(r){return zb[r]}const Bb={N:{dx:0,dy:-1},NE:{dx:1,dy:-1},E:{dx:1,dy:0},SE:{dx:1,dy:1},S:{dx:0,dy:1},SW:{dx:-1,dy:1},W:{dx:-1,dy:0},NW:{dx:-1,dy:-1}},zb={S:0,SW:-Math.PI/4,W:-Math.PI/2,NW:-Math.PI*3/4,N:-Math.PI,NE:-Math.PI*5/4,E:-Math.PI*3/2,SE:-Math.PI*7/4},kb={fjords:"water_fjords",open_norse_sea:"water_open_norse_sea",midgard_shores:"water_midgard_shores",helheim_waters:"water_helheim_waters",ragnarok_waters:"water_ragnarok_waters"},Vb=new Set(["maelstrom"]),Gb=new Set(["player","draugr","berserker","jarl","naglfar","wreck","rune_stone","skull_rock"]),Hb={player:1,draugr:.9,berserker:1.1,jarl:1,naglfar:1.3,wreck:.8,rune_stone:1,skull_rock:1};class Wb{constructor(e,t){Q(this,"boardGroup",new En);Q(this,"entityGroup",new En);Q(this,"shipObjects",new Map);Q(this,"shipPositions",new Map);Q(this,"floatPhases",new Map);Q(this,"floatSuspended",new Set);Q(this,"naglfarMaterials",new Map);Q(this,"naglfarGlowMaterials",new Map);Q(this,"naglfarPulseSuspended",new Set);Q(this,"vortexTexture",null);this.scene=e,this.models=t,e.add(this.boardGroup),e.add(this.entityGroup)}async placeShipAt(e,t,n,i){const s=await this.makeEntityObject(t),a=Ci(i);s.position.x=a.x,s.position.z=a.z,s.rotation.y=Ki(n),this.entityGroup.add(s),this.shipObjects.set(e,s),this.shipPositions.set(e,i),this.floatPhases.has(e)||this.floatPhases.set(e,Math.random()*Math.PI*2),t==="naglfar"&&this.applyNaglfarEffect(e,s)}animateMove(e,t,n,i=bt.SHIP_MOVE_DURATION_MS){return new Promise(s=>{const a=this.shipObjects.get(e);if(a===void 0){s();return}const o=Ci(t),l=Ci(n),c=performance.now(),h=i;a.position.x=o.x,a.position.z=o.z;const u=d=>{const f=d-c,p=bt.calculateProgress(f,h),_=bt.easeInOutSine(p);a.position.x=o.x+(l.x-o.x)*_,a.position.z=o.z+(l.z-o.z)*_,p>=1?(this.shipPositions.set(e,n),s()):requestAnimationFrame(u)};requestAnimationFrame(u)})}animateTurn(e,t,n,i,s=bt.SHIP_TURN_DURATION_MS){return new Promise(a=>{const o=this.shipObjects.get(e);if(o===void 0){a();return}const l=Ki(n);let h=Ki(i)-l;h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2);const u=performance.now(),d=s,f=p=>{const _=p-u,m=bt.calculateProgress(_,d),g=bt.easeInOutSine(m);o.rotation.y=l+h*g,m>=1?(o.rotation.y=l+h,a()):requestAnimationFrame(f)};requestAnimationFrame(f)})}async animateArrowVolley(e,t,n){const i=Ci(e),{dx:s,dy:a}=Bb[t],o=[{wx:i.x+a*n*Pt,wz:i.z-s*n*Pt},{wx:i.x-a*n*Pt,wz:i.z+s*n*Pt}],l=await this.models.getGLTF($i.arrow_volley),c=bf+wf*n,h=Ef*n,u=new un,d=new I(0,0,1),f=new I,p=o.map(_=>{const m=l.scene.clone(!0);return this.applyUnlitMaterial(m),m.scale.setScalar(Tf),m.position.set(i.x,Po,i.z),this.entityGroup.add(m),{obj:m,target:_}});await Promise.all(p.map(({obj:_,target:m})=>new Promise(g=>{const x=performance.now(),M=m.wx-i.x,v=m.wz-i.z,E=w=>{const T=bt.calculateProgress(w-x,c),y=bt.easeInOutSine(T);_.position.x=i.x+M*y,_.position.y=Po+h*Math.sin(y*Math.PI),_.position.z=i.z+v*y;const S=h*Math.PI*Math.cos(y*Math.PI);f.set(M,S,v).normalize(),u.setFromUnitVectors(d,f),_.quaternion.copy(u),T>=1?(this.entityGroup.remove(_),g()):requestAnimationFrame(E)};requestAnimationFrame(E)})))}async animateDirectArrow(e,t){const n=Ci(e),i=Ci(t),s=t.x-e.x,a=t.y-e.y,o=Math.max(Math.abs(s),Math.abs(a)),c=(await this.models.getGLTF($i.arrow_volley)).scene.clone(!0);this.applyUnlitMaterial(c),c.scale.setScalar(Tf),c.position.set(n.x,Po,n.z),this.entityGroup.add(c);const h=bf+wf*o,u=Ef*o,d=i.x-n.x,f=i.z-n.z,p=new un,_=new I(0,0,1),m=new I;return new Promise(g=>{const x=performance.now(),M=v=>{const E=bt.calculateProgress(v-x,h),w=bt.easeInOutSine(E);c.position.x=n.x+d*w,c.position.y=Po+u*Math.sin(w*Math.PI),c.position.z=n.z+f*w;const T=u*Math.PI*Math.cos(w*Math.PI);m.set(d,T,f).normalize(),p.setFromUnitVectors(_,m),c.quaternion.copy(p),E>=1?(this.entityGroup.remove(c),g()):requestAnimationFrame(M)};requestAnimationFrame(M)})}clearEntities(){for(const e of this.shipObjects.values())this.entityGroup.remove(e);this.shipObjects.clear(),this.shipPositions.clear(),this.naglfarMaterials.clear();for(const e of this.naglfarGlowMaterials.values())for(const t of e)t.dispose();this.naglfarGlowMaterials.clear(),this.naglfarPulseSuspended.clear()}removeShipsAt(e){for(const[t,n]of this.shipPositions)if(n.x===e.x&&n.y===e.y){const i=this.shipObjects.get(t);i!==void 0&&this.entityGroup.remove(i),this.shipObjects.delete(t),this.shipPositions.delete(t),this.floatPhases.delete(t),this.naglfarMaterials.delete(t);const s=this.naglfarGlowMaterials.get(t);if(s!==void 0){for(const a of s)a.dispose();this.naglfarGlowMaterials.delete(t)}this.naglfarPulseSuspended.delete(t)}}async placeWreck(e){const t=await this.makeEntityObject("wreck"),n=Ci(e);t.position.x=n.x,t.position.z=n.z,this.entityGroup.add(t)}async commit(e,t,n){this.boardGroup.clear(),this.entityGroup.clear(),this.shipObjects.clear(),this.shipPositions.clear(),this.naglfarMaterials.clear();for(const a of this.naglfarGlowMaterials.values())for(const o of a)o.dispose();this.naglfarGlowMaterials.clear(),this.naglfarPulseSuspended.clear(),this.vortexTexture=null;const i=new Map(n.map(a=>[a.id,a])),s=kb[e.region];for(let a=0;a<e.height;a++)for(let o=0;o<e.width;o++){const l=e.getCell({x:o,y:a}),c=Ci({x:o,y:a}),h=await this.models.getTexture($i[s]),u=Of(h);if(u.position.copy(c),u.position.y=0,this.boardGroup.add(u),l.terrain!==null)if(l.terrain==="maelstrom"){const d=await this.models.getTexture($i.maelstrom);this.vortexTexture===null&&(d.repeat.set(1/Lr,1/Io),d.wrapS=mi,d.wrapT=mi,d.needsUpdate=!0,this.vortexTexture=d);const f=new zt({map:d,transparent:!0,depthWrite:!1}),p=new Mt(qo(),f);p.position.copy(c),p.position.y=.001,this.boardGroup.add(p)}else{const d=await this.makeTerrainObject(l.terrain);d.position.copy(c),this.entityGroup.add(d)}if(l.entity!==null){const d=await this.makeEntityObject(l.entity);if(d.position.x=c.x,d.position.z=c.z,l.entity==="player")d.rotation.y=Ki(t.facingDirection),this.shipObjects.set(t.id,d),this.shipPositions.set(t.id,{x:o,y:a}),this.floatPhases.has(t.id)||this.floatPhases.set(t.id,Math.random()*Math.PI*2);else if(l.entity!=="wreck"){const f=i.get(l.entityId??"");if(f===void 0)throw new Error(`Enemy not found: ${l.entityId} (type: ${l.entity})`);d.rotation.y=Ki(f.facingDirection),this.shipObjects.set(f.id,d),this.shipPositions.set(f.id,{x:o,y:a}),this.floatPhases.has(f.id)||this.floatPhases.set(f.id,Math.random()*Math.PI*2),l.entity==="naglfar"&&this.applyNaglfarEffect(f.id,d)}this.entityGroup.add(d)}}}animateMaelstromEnter(e){return new Promise(t=>{const n=this.shipObjects.get(e);if(n===void 0){t();return}this.floatSuspended.add(e);const i=n.rotation.y,s=n.scale.x,a=performance.now(),o=l=>{const c=bt.calculateProgress(l-a,GS),h=bt.easeInOutSine(c);n.rotation.y=i-h*WS*Math.PI*2,n.position.y=-h*Math.abs(pc),n.scale.setScalar(s*(1-h)),c>=1?(n.visible=!1,this.floatSuspended.delete(e),t()):requestAnimationFrame(o)};requestAnimationFrame(o)})}animateMaelstromExit(e,t){return new Promise(n=>{const i=this.shipObjects.get(e);if(i===void 0){n();return}this.floatSuspended.add(e),i.visible=!0,i.position.y=pc,i.scale.setScalar(0);const s=Ki(t)-XS*Math.PI*2,a=Ki(t),o=performance.now(),l=c=>{const h=bt.calculateProgress(c-o,HS),u=bt.easeInOutSine(h);i.rotation.y=s+(a-s)*u,i.position.y=pc*(1-u),i.scale.setScalar(u),h>=1?(i.rotation.y=a,i.position.y=0,i.scale.setScalar(1),this.floatSuspended.delete(e),n()):requestAnimationFrame(l)};requestAnimationFrame(l)})}animatePopIn(e){return new Promise(t=>{const n=this.shipObjects.get(e);if(n===void 0){t();return}this.floatSuspended.add(e),n.position.y=fc;const i=performance.now(),s=a=>{const o=bt.calculateProgress(a-i,VS);if(o<=Ro){const l=o/Ro,c=1-Math.pow(1-l,2);n.position.y=fc+(Sf-fc)*c}else{const l=(o-Ro)/(1-Ro),c=bt.easeInOutSine(l);n.position.y=Sf*(1-c)}o>=1?(n.position.y=0,this.floatSuspended.delete(e),t()):requestAnimationFrame(s)};requestAnimationFrame(s)})}async animateAllPop(){await Promise.all([...this.shipObjects.keys()].map(e=>this.animatePopIn(e)))}tick(e){for(const[t,n]of this.shipObjects){if(this.floatSuspended.has(t))continue;const i=this.floatPhases.get(t)??0,a=this.shipPositions.get(t)!==void 0?0:n.position.y;n.position.y=a+Math.sin(e*kS+i)*zS}if(this.naglfarMaterials.size>0){const t=.5+.5*Math.sin(2*Math.PI*YS*e-Math.PI/2),n=Nr+(Af-Nr)*t,i=.05+t*.1,s=.6+t*.4,a=.25+t*.15,o=Ur+(Cf-Ur)*t;for(const[l,c]of this.naglfarMaterials){if(this.naglfarPulseSuspended.has(l))continue;for(const u of c)u.opacity=n,u.color.setRGB(i,s,a);const h=this.naglfarGlowMaterials.get(l);if(h!==void 0)for(const u of h)u.opacity=o}}if(this.vortexTexture!==null){const t=Lr*Io,n=Math.floor(e*JS)%t,i=n%Lr,s=Math.floor(n/Lr);this.vortexTexture.offset.set(i/Lr,(Io-1-s)/Io)}}animateNaglfarDematerialize(e){return new Promise(t=>{const n=this.naglfarMaterials.get(e),i=this.naglfarGlowMaterials.get(e);if(n===void 0){t();return}this.naglfarPulseSuspended.add(e);const s=performance.now(),a=o=>{const l=bt.calculateProgress(o-s,$S),c=bt.easeInOutSine(l),h=Af*(1-c),u=.05+c*.1,d=.6+c*.4,f=.25+c*.15;for(const p of n)p.opacity=h,p.color.setRGB(u,d,f);if(i!==void 0)for(const p of i)p.opacity=Cf*(1-c);l>=1?(this.naglfarPulseSuspended.delete(e),t()):requestAnimationFrame(a)};requestAnimationFrame(a)})}animateNaglfarMaterialize(e){return new Promise(t=>{const n=this.naglfarMaterials.get(e),i=this.naglfarGlowMaterials.get(e);if(n===void 0){t();return}this.naglfarPulseSuspended.add(e);const s=performance.now();for(const o of n)o.opacity=0,o.color.setRGB(.05,1,.4);if(i!==void 0)for(const o of i)o.opacity=0;const a=o=>{const l=bt.calculateProgress(o-s,KS),c=1-Math.pow(1-l,2),h=Nr*c,u=.05,d=1-c*.4,f=.4-c*.15;for(const p of n)p.opacity=h,p.color.setRGB(u,d,f);if(i!==void 0)for(const p of i)p.opacity=Ur*c;if(l>=1){for(const p of n)p.opacity=Nr,p.color.setRGB(.05,.6,.25);if(i!==void 0)for(const p of i)p.opacity=Ur;this.naglfarPulseSuspended.delete(e),t()}else requestAnimationFrame(a)};requestAnimationFrame(a)})}applyNaglfarEffect(e,t){const n=[],i=[],s=[];t.traverse(a=>{a instanceof Mt&&a.material instanceof zt&&(a.material.transparent=!0,a.material.depthWrite=!1,a.material.opacity=Nr,a.material.color.setRGB(.05,.6,.25),n.push(a.material),s.push(a))});for(const a of s){const o=new zt({color:new Te(QS,jS,eb),transparent:!0,opacity:Ur,depthWrite:!1,side:rn}),l=new Mt(a.geometry,o);l.scale.setScalar(ZS),a.add(l),i.push(o)}this.naglfarMaterials.set(e,n),this.naglfarGlowMaterials.set(e,i)}applyUnlitMaterial(e){e.traverse(t=>{if(t instanceof Mt&&t.material instanceof ur){const n=t.material;t.material=new zt({map:n.map,color:n.color,transparent:n.transparent,opacity:n.opacity}),n.dispose()}})}async makeEntityObject(e){if(Gb.has(e)){const i=$i[e];if(i===void 0)throw new Error(`No model path for entity type: ${e}`);const a=(await this.models.getGLTF(i)).scene.clone(!0);this.applyUnlitMaterial(a);const o=Hb[e]??1;return a.scale.setScalar(o),a}const t=new zt({color:16711935,transparent:!0,opacity:.6});return new Mt(qo(),t)}async makeTerrainObject(e){const t=e,n=$i[t];if(n===void 0){const s=new zt({color:16711935,transparent:!0,opacity:.4});return new Mt(qo(),s)}if(t in $i&&!Vb.has(t)){const a=(await this.models.getGLTF(n)).scene.clone(!0);return this.applyUnlitMaterial(a),a}const i=await this.models.getTexture(n);return Of(i)}}function qo(){let r;return r=new Fi(Pt,Pt),r.rotateX(-Math.PI/2),r}function Of(r){const e=new zt({map:r,transparent:!0});return new Mt(qo(),e)}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ff=1234567;const dm=Math.PI/180,fm=180/Math.PI;function Xb(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Yn(r,e,t){return Math.max(e,Math.min(t,r))}function pm(r,e){return(r%e+e)%e}function qb(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Jb(r,e,t){return r!==e?(t-r)/(e-r):0}function mm(r,e,t){return(1-t)*r+t*e}function Yb(r,e,t,n){return mm(r,e,1-Math.exp(-t*n))}function $b(r,e=1){return e-Math.abs(pm(r,e*2)-e)}function Kb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jb(r,e){return r+Math.random()*(e-r)}function ew(r){return r*(.5-Math.random())}function tw(r){r!==void 0&&(Ff=r);let e=Ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nw(r){return r*dm}function iw(r){return r*fm}function sw(r){return(r&r-1)===0&&r!==0}function rw(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function aw(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ow(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:console.warn("../math.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function lw(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function cw(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gr={DEG2RAD:dm,RAD2DEG:fm,generateUUID:Xb,clamp:Yn,euclideanModulo:pm,mapLinear:qb,inverseLerp:Jb,lerp:mm,damp:Yb,pingpong:$b,smoothstep:Kb,smootherstep:Zb,randInt:Qb,randFloat:jb,randFloatSpread:ew,seededRandom:tw,degToRad:nw,radToDeg:iw,isPowerOfTwo:sw,ceilPowerOfTwo:rw,floorPowerOfTwo:aw,setQuaternionFromProperEuler:ow,normalize:cw,denormalize:lw};class lt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let m=1-o;const g=l*d+c*f+h*p+u*_,x=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const E=Math.sqrt(M),w=Math.atan2(E,g*x);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const v=o*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+p*v,u=u*m+_*v,m===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new lt(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("../math.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Ae{constructor(e=0,t=0,n=0){this.isVector3=!0,Ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new Ae(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this.z=Math.abs(this.z),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new Ae,Bf=new lt,Lo=2e3,zf=2001;class Fn{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m){this.isMatrix4=!0,Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m)}extractPosition(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)}multiplyToArray(e,t,n){return console.error("THREE.Matrix4: .multiplyToArray() has been removed."),this}setRotationFromQuaternion(e){return this.makeRotationFromQuaternion(e)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hw,e,uw)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ri.crossVectors(n,gn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ri.crossVectors(n,gn)),Ri.normalize(),No.crossVectors(gn,Ri),i[0]=Ri.x,i[4]=No.x,i[8]=gn.x,i[1]=Ri.y,i[5]=No.y,i[9]=gn.y,i[2]=Ri.z,i[6]=No.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],v=n[11],E=n[15],w=i[0],T=i[4],y=i[8],S=i[12],L=i[1],R=i[5],N=i[9],U=i[13],V=i[2],B=i[6],k=i[10],F=i[14],ie=i[3],Z=i[7],ce=i[11],de=i[15];return s[0]=a*w+o*L+l*V+c*ie,s[4]=a*T+o*R+l*B+c*Z,s[8]=a*y+o*N+l*k+c*ce,s[12]=a*S+o*U+l*F+c*de,s[1]=h*w+u*L+d*V+f*ie,s[5]=h*T+u*R+d*B+f*Z,s[9]=h*y+u*N+d*k+f*ce,s[13]=h*S+u*U+d*F+f*de,s[2]=p*w+_*L+m*V+g*ie,s[6]=p*T+_*R+m*B+g*Z,s[10]=p*y+_*N+m*k+g*ce,s[14]=p*S+_*U+m*F+g*de,s[3]=x*w+M*L+v*V+E*ie,s[7]=x*T+M*R+v*B+E*Z,s[11]=x*y+M*N+v*k+E*ce,s[15]=x*S+M*U+v*F+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=u*m*c-_*d*c+_*l*f-o*m*f-u*l*g+o*d*g,M=p*d*c-h*m*c-p*l*f+a*m*f+h*l*g-a*d*g,v=h*_*c-p*u*c+p*o*f-a*_*f-h*o*g+a*u*g,E=p*u*l-h*_*l-p*o*d+a*_*d+h*o*m-a*u*m,w=t*x+n*M+i*v+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*g-n*d*g)*T,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*g+n*l*g)*T,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=M*T,e[5]=(h*m*s-p*d*s+p*i*f-t*m*f-h*i*g+t*d*g)*T,e[6]=(p*l*s-a*m*s-p*i*c+t*m*c+a*i*g-t*l*g)*T,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=v*T,e[9]=(p*u*s-h*_*s-p*n*f+t*_*f+h*n*g-t*u*g)*T,e[10]=(a*_*s-p*o*s+p*n*c-t*_*c-a*n*g+t*o*g)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,_=a*h,m=a*u,g=o*u,x=l*c,M=l*h,v=l*u,E=n.x,w=n.y,T=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+v)*E,i[2]=(p-M)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+g))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(p+M)*T,i[9]=(m-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=zs.set(i[0],i[1],i[2]).length();const a=zs.set(i[4],i[5],i[6]).length(),o=zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const c=1/s,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Lo){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(o===Lo)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===zf)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Lo){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h;let p,_;if(o===Lo)p=(a+s)*u,_=-2*u;else if(o===zf)p=s*u,_=-1*u;else throw new Error("../math.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new Ae,Ln=new Fn,hw=new Ae(0,0,0),uw=new Ae(1,1,1),Ri=new Ae,No=new Ae,gn=new Ae,kf=new Fn,Vf=new lt;class ta{constructor(e=0,t=0,n=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new ta(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("../math.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(e){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class rr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new rr(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}rr.isVector2=!0;class Mn{constructor(e=0,t=0,n=0,i=1){Mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new Mn(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,E=(g+1)/2,w=(h+d)/4,T=(u+_)/4,y=(p+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=T/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=y/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kn{constructor(e,t,n,i,s,a,o,l,c){Kn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],M=i[4],v=i[7],E=i[2],w=i[5],T=i[8];return s[0]=a*_+o*x+l*E,s[3]=a*m+o*M+l*w,s[6]=a*g+o*v+l*T,s[1]=c*_+h*x+u*E,s[4]=c*m+h*M+u*w,s[7]=c*g+h*v+u*T,s[2]=d*_+f*x+p*E,s[5]=d*m+f*M+p*w,s[8]=d*g+f*v+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new Kn().fromArray(this.elements)}}const vc=new Kn;var Qt;(function(r){r[r.Random=0]="Random",r[r.Loop=1]="Loop",r[r.PingPong=2]="PingPong",r[r.Burst=3]="Burst"})(Qt||(Qt={}));function _r(r,e,t,n){let i;switch(Qt.Random===r?e=Math.random():Qt.Burst===r&&n.isBursting&&(e=n.burstParticleIndex/n.burstParticleCount),t>0?i=Math.floor(e/t)*t:i=e,r){case Qt.Loop:i=i%1;break;case Qt.PingPong:i=Math.abs(i%2-1);break}return i}class is{constructor(e,t,n,i){this.p=[e,t,n,i]}genValue(e){const t=e*e,n=e*e*e,i=1-e,s=i*i,a=s*i;return this.p[0]*a+this.p[1]*s*e*3+this.p[2]*i*t*3+this.p[3]*n}derivativeCoefficients(e){const t=[];for(let n=e,i=n.length-1;i>0;i--){const s=[];for(let a=0;a<i;a++){const o=i*(n[a+1]-n[a]);s.push(o)}t.push(s),n=s}return t}getSlope(e){const t=this.derivativeCoefficients(this.p)[0],n=1-e,i=n*n,s=n*e*2,a=e*e;return i*t[0]+s*t[1]+a*t[2]}controlCurve(e,t){this.p[1]=e/3+this.p[0],this.p[2]=this.p[3]-t/3}hull(e){let t=this.p,n=[],i,s=0,a=0,o=0;const l=[];for(l[s++]=t[0],l[s++]=t[1],l[s++]=t[2],l[s++]=t[3];t.length>1;){for(n=[],a=0,o=t.length-1;a<o;a++)i=e*t[a]+(1-e)*t[a+1],l[s++]=i,n.push(i);t=n}return l}split(e){const t=this.hull(e);return{left:new is(t[0],t[4],t[7],t[9]),right:new is(t[9],t[8],t[6],t[3]),span:t}}clone(){return new is(this.p[0],this.p[1],this.p[2],this.p[3])}toJSON(){return{p0:this.p[0],p1:this.p[1],p2:this.p[2],p3:this.p[3]}}static fromJSON(e){return new is(e.p0,e.p1,e.p2,e.p3)}}const na=r=>({r:r.x,g:r.y,b:r.z,a:r.w}),ia=r=>new Mn(r.r,r.g,r.b,r.a),dw=(r,e)=>{switch(e){case"Vector3":return new Ae(r.x,r.y,r.z);case"Vector4":return new Mn(r.x,r.y,r.z,r.w);case"Color":return new Ae(r.r,r.g,r.b);case"Number":return r;default:return r}},fw=(r,e)=>{switch(e){case"Vector3":return{x:r.x,y:r.y,z:r.z};case"Vector4":return{x:r.x,y:r.y,z:r.z,w:r.w};case"Color":return{r:r.x,g:r.y,b:r.z};case"Number":return r;default:return r}};class il{constructor(e,t){this.a=e,this.b=t,this.type="value"}startGen(e){}genColor(e,t){const n=Math.random();return t.copy(this.a).lerp(this.b,n)}toJSON(){return{type:"RandomColor",a:na(this.a),b:na(this.b)}}static fromJSON(e){return new il(ia(e.a),ia(e.b))}clone(){return new il(this.a.clone(),this.b.clone())}}class ar{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t){return this.indexCount===-1&&this.startGen(e),t.copy(this.a).lerp(this.b,e[this.indexCount])}toJSON(){return{type:"ColorRange",a:na(this.a),b:na(this.b)}}static fromJSON(e){return new ar(ia(e.a),ia(e.b))}clone(){return new ar(this.a.clone(),this.b.clone())}}class Ui{constructor(e,t){this.subType=t,this.type="function",this.keys=e}findKey(e){let t=0,n=0,i=this.keys.length-1;for(;n+1<i;)if(t=Math.floor((n+i)/2),e<this.getStartX(t))i=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let s=n;s<=i;s++)if(e>=this.getStartX(s)&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.keys[e][1]}getEndX(e){return e+1<this.keys.length?this.keys[e+1][1]:1}genValue(e,t){const n=this.findKey(t);return this.subType==="Number"?n===-1?this.keys[0][0]:n+1>=this.keys.length?this.keys[this.keys.length-1][0]:(this.keys[n+1][0]-this.keys[n][0])*((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))+this.keys[n][0]:n===-1?e.copy(this.keys[0][0]):n+1>=this.keys.length?e.copy(this.keys[this.keys.length-1][0]):e.copy(this.keys[n][0]).lerp(this.keys[n+1][0],(t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toJSON(){return this.keys[0][0].constructor.name,{type:"CLinearFunction",subType:this.subType,keys:this.keys.map(([e,t])=>({value:fw(e,this.subType),pos:t}))}}static fromJSON(e){return new Ui(e.keys.map(t=>[dw(t.value,e.subType),t.pos]),e.subType)}clone(){return this.subType==="Number"?new Ui(this.keys.map(([e,t])=>[e,t]),this.subType):new Ui(this.keys.map(([e,t])=>[e.clone(),t]),this.subType)}}const Uo=new Ae;class as{constructor(e=[[new Ae(0,0,0),0],[new Ae(1,1,1),0]],t=[[1,0],[1,1]]){this.type="function",this.color=new Ui(e,"Color"),this.alpha=new Ui(t,"Number")}genColor(e,t,n){return this.color.genValue(Uo,n),t.set(Uo.x,Uo.y,Uo.z,this.alpha.genValue(1,n))}toJSON(){return{type:"Gradient",color:this.color.toJSON(),alpha:this.alpha.toJSON()}}static fromJSON(e){if(e.functions){const t=e.functions.map(n=>[ar.fromJSON(n.function).a,n.start]);return e.functions.length>0&&t.push([ar.fromJSON(e.functions[e.functions.length-1].function).b,1]),new as(t.map(n=>[new Ae(n[0].x,n[0].y,n[0].z),n[1]]),t.map(n=>[n[0].w,n[1]]))}else{const t=new as;return t.alpha=Ui.fromJSON(e.alpha),t.color=Ui.fromJSON(e.color),t}}clone(){const e=new as;return e.alpha=this.alpha.clone(),e.color=this.color.clone(),e}startGen(e){}}const Mc=new Mn;class sl{constructor(e,t){this.indexCount=0,this.type="function",this.gradient1=e,this.gradient2=t}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t,n){return this.gradient1.genColor(e,t,n),this.gradient2.genColor(e,Mc,n),e&&e[this.indexCount]!==void 0?t.lerp(Mc,e[this.indexCount]):t.lerp(Mc,Math.random()),t}toJSON(){return{type:"RandomColorBetweenGradient",gradient1:this.gradient1.toJSON(),gradient2:this.gradient2.toJSON()}}static fromJSON(e){return new sl(as.fromJSON(e.gradient1),as.fromJSON(e.gradient2))}clone(){return new sl(this.gradient1.clone(),this.gradient2.clone())}}class or{constructor(e){this.color=e,this.type="value"}startGen(e){}genColor(e,t){return t.copy(this.color)}toJSON(){return{type:"ConstantColor",color:na(this.color)}}static fromJSON(e){return new or(ia(e.color))}clone(){return new or(this.color.clone())}}function Iu(r){switch(r.type){case"ConstantColor":return or.fromJSON(r);case"ColorRange":return ar.fromJSON(r);case"RandomColor":return il.fromJSON(r);case"Gradient":return as.fromJSON(r);case"RandomColorBetweenGradient":return sl.fromJSON(r);default:return new or(new Mn(1,1,1,1))}}class ut{constructor(e){this.value=e,this.type="value"}startGen(e){}genValue(e){return this.value}toJSON(){return{type:"ConstantValue",value:this.value}}static fromJSON(e){return new ut(e.value)}clone(){return new ut(this.value)}}class hs{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genValue(e){return this.indexCount===-1&&this.startGen(e),gr.lerp(this.a,this.b,e[this.indexCount])}toJSON(){return{type:"IntervalValue",a:this.a,b:this.b}}static fromJSON(e){return new hs(e.a,e.b)}clone(){return new hs(this.a,this.b)}}class pw{constructor(){this.functions=new Array}findFunction(e){let t=0,n=0,i=this.functions.length-1;for(;n+1<i;)if(t=Math.floor((n+i)/2),e<this.getStartX(t))i=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let s=n;s<=i;s++)if(e>=this.functions[s][1]&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.functions[e][1]}setStartX(e,t){e>0&&(this.functions[e][1]=t)}getEndX(e){return e+1<this.functions.length?this.functions[e+1][1]:1}setEndX(e,t){e+1<this.functions.length&&(this.functions[e+1][1]=t)}insertFunction(e,t){const n=this.findFunction(e);this.functions.splice(n+1,0,[t,e])}removeFunction(e){return this.functions.splice(e,1)[0][0]}getFunction(e){return this.functions[e][0]}setFunction(e,t){this.functions[e][0]=t}get numOfFunctions(){return this.functions.length}}class sa extends pw{constructor(e=[[new is(0,1/3,1/3*2,1),0]]){super(),this.type="function",this.functions=e}genValue(e,t=0){const n=this.findFunction(t);return n===-1?0:this.functions[n][0].genValue((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toSVG(e,t){if(t<1)return"";let n=["M",0,this.functions[0][0].p[0]].join(" ");for(let i=1/t;i<=1;i+=1/t)n=[n,"L",i*e,this.genValue(void 0,i)].join(" ");return n}toJSON(){return{type:"PiecewiseBezier",functions:this.functions.map(([e,t])=>({function:e.toJSON(),start:t}))}}static fromJSON(e){return new sa(e.functions.map(t=>[is.fromJSON(t.function),t.start]))}clone(){return new sa(this.functions.map(([e,t])=>[e.clone(),t]))}startGen(e){}}function it(r){switch(r.type){case"ConstantValue":return ut.fromJSON(r);case"IntervalValue":return hs.fromJSON(r);case"PiecewiseBezier":return sa.fromJSON(r);default:return new ut(0)}}class ra{constructor(){this.indexCount=0,this.type="rotation"}startGen(e){this.indexCount=e.length,e.push(new lt);let t,n,i,s,a,o;do t=Math.random()*2-1,n=Math.random()*2-1,i=t*t+n*n;while(i>1);do s=Math.random()*2-1,a=Math.random()*2-1,o=s*s+a*a;while(o>1);const l=Math.sqrt((1-i)/o);e[this.indexCount].set(t,n,l*s,l*a)}genValue(e,t,n,i){return this.indexCount===-1&&this.startGen(e),t.copy(e[this.indexCount]),t}toJSON(){return{type:"RandomQuat"}}static fromJSON(e){return new ra}clone(){return new ra}}class aa{constructor(e,t){this.axis=e,this.angle=t,this.type="rotation"}startGen(e){this.angle.startGen(e)}genValue(e,t,n,i){return t.setFromAxisAngle(this.axis,this.angle.genValue(e,i)*n)}toJSON(){return{type:"AxisAngle",axis:{x:this.axis.x,y:this.axis.y,z:this.axis.z},angle:this.angle.toJSON()}}static fromJSON(e){return new aa(new Ae(e.axis.x,e.axis.y,e.axis.z),it(e.angle))}clone(){return new aa(this.axis.clone(),this.angle.clone())}}class rl{constructor(e,t,n,i){this.angleX=e,this.angleY=t,this.angleZ=n,this.type="rotation",this.eular=new ta(0,0,0,i)}startGen(e){this.angleX.startGen(e),this.angleY.startGen(e),this.angleZ.startGen(e)}genValue(e,t,n,i){return this.eular.set(this.angleX.genValue(e,i)*n,this.angleY.genValue(e,i)*n,this.angleZ.genValue(e,i)*n),t.setFromEuler(this.eular)}toJSON(){return{type:"Euler",angleX:this.angleX.toJSON(),angleY:this.angleY.toJSON(),angleZ:this.angleZ.toJSON(),eulerOrder:this.eular.order}}static fromJSON(e){return new rl(it(e.angleX),it(e.angleY),it(e.angleZ),e.eulerOrder)}clone(){return new rl(this.angleX,this.angleY,this.angleZ,this.eular.order)}}function gm(r){switch(r.type){case"AxisAngle":return aa.fromJSON(r);case"Euler":return rl.fromJSON(r);case"RandomQuat":return ra.fromJSON(r);default:return new ra}}class us{constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type="vec3function"}startGen(e){this.x.startGen(e),this.y.startGen(e),this.z.startGen(e)}genValue(e,t,n){return t.set(this.x.genValue(e,n),this.y.genValue(e,n),this.z.genValue(e,n))}toJSON(){return{type:"Vector3Function",x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new us(it(e.x),it(e.y),it(e.z))}clone(){return new us(this.x,this.y,this.z)}}function mw(r){switch(r.type){case"Vector3Function":return us.fromJSON(r);default:return new us(new ut(0),new ut(0),new ut(0))}}function al(r){switch(r.type){case"ConstantValue":case"IntervalValue":case"PiecewiseBezier":return it(r);case"AxisAngle":case"RandomQuat":case"Euler":return gm(r);case"Vector3Function":return mw(r);default:return new ut(0)}}class oa{constructor(e={}){this.type="cone",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.angle=e.angle??Math.PI/6,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[]}update(e,t){Qt.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=gr.lerp(1-this.thickness,1,Math.random()),s=n*this.arc,a=Math.sqrt(i),o=Math.sin(s),l=Math.cos(s);e.position.x=a*l,e.position.y=a*o,e.position.z=0;const c=this.angle*a;e.velocity.set(0,0,Math.cos(c)).addScaledVector(e.position,Math.sin(c)).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius)}toJSON(){return{type:"cone",radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new oa({radius:e.radius,arc:e.arc,thickness:e.thickness,angle:e.angle,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new oa({radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class la{constructor(e={}){this.type="circle",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[]}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=gr.lerp(1-this.thickness,1,Math.random()),s=n*this.arc;e.position.x=Math.cos(s),e.position.y=Math.sin(s),e.position.z=0,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*i)}toJSON(){return{type:"circle",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new la({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new la({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}function Do(r,e){return Math.floor(Math.random()*(e-r))+r}const Fa=new Ae(0,1,0),Ba=new Ae(0,0,0),gw=new Ae(1,1,1),Gf=new Ae(0,0,1);class ca{constructor(e={}){this.type="donut",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.donutRadius=e.donutRadius??this.radius*.2,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[],this._m1=new Fn}update(e,t){Qt.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=gr.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=i*Math.PI*2,l=Math.sin(a),c=Math.cos(a);e.position.x=this.radius*c,e.position.y=this.radius*l,e.position.z=0,e.velocity.z=this.donutRadius*s*Math.sin(o),e.velocity.x=this.donutRadius*s*Math.cos(o)*c,e.velocity.y=this.donutRadius*s*Math.cos(o)*l,e.position.add(e.velocity),e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof lt&&(this._m1.lookAt(Ba,e.velocity,Fa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"donut",radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new ca({radius:e.radius,arc:e.arc,thickness:e.thickness,donutRadius:e.donutRadius,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new ca({radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class ha{constructor(){this.type="point",this._m1=new Fn}update(e,t){}initialize(e){const t=Math.random(),n=Math.random(),i=t*Math.PI*2,s=Math.acos(2*n-1),a=Math.cbrt(Math.random()),o=Math.sin(i),l=Math.cos(i),c=Math.sin(s),h=Math.cos(s);e.velocity.x=a*c*l,e.velocity.y=a*c*o,e.velocity.z=a*h,e.velocity.multiplyScalar(e.startSpeed),e.position.setScalar(0),e.rotation instanceof lt&&(this._m1.lookAt(Ba,e.position,Fa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"point"}}static fromJSON(e){return new ha}clone(){return new ha}}class lr{constructor(e={}){this.type="sphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[],this._m1=new Fn}update(e,t){Qt.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=gr.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(2*i-1),l=Math.sin(a),c=Math.cos(a),h=Math.sin(o),u=Math.cos(o);e.position.x=h*c,e.position.y=h*l,e.position.z=u,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof lt&&(this._m1.lookAt(Ba,e.position,Fa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"sphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new lr({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new lr({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class ua{constructor(e={}){this.type="hemisphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[],this._m1=new Fn}update(e,t){Qt.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=Math.random(),s=gr.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(i),l=Math.sin(a),c=Math.cos(a),h=Math.sin(o),u=Math.cos(o);e.position.x=h*c,e.position.y=h*l,e.position.z=u,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof lt&&(this._m1.lookAt(Ba,e.position,Fa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"hemisphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new ua({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new ua({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class da{constructor(e={}){this.type="grid",this.width=e.width??1,this.height=e.height??1,this.column=e.column??10,this.row=e.row??10}initialize(e){const t=Math.floor(Math.random()*this.row),n=Math.floor(Math.random()*this.column);e.position.x=n*this.width/this.column-this.width/2,e.position.y=t*this.height/this.row-this.height/2,e.position.z=0,e.velocity.set(0,0,e.startSpeed)}toJSON(){return{type:"grid",width:this.width,height:this.height,column:this.column,row:this.row}}static fromJSON(e){return new da(e)}clone(){return new da({width:this.width,height:this.height,column:this.column,row:this.row})}update(e,t){}}class fa{constructor(e={}){this.type="rectangle",this.currentValue=0,this.width=e.width??10,this.height=e.height??10,this.thickness=e.thickness??1,this.mode=e.mode??Qt.Random,this.spread=e.spread??0,this.speed=e.speed??new ut(1),this.memory=[],this._m1=new Fn}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const n=_r(this.mode,this.currentValue,this.spread,t),i=2*(this.width+this.height),s=n*i;let a,o;s<this.width?(a=s-this.width/2,o=-this.height/2):s<this.width+this.height?(a=this.width/2,o=s-this.width-this.height/2):s<2*this.width+this.height?(a=this.width/2-(s-this.width-this.height),o=this.height/2):(a=-this.width/2,o=this.height/2-(s-2*this.width-this.height));const l=Math.random(),c=1-this.thickness*l;e.position.x=a*c,e.position.y=o*c,e.position.z=0,e.velocity.x=a,e.velocity.y=o,e.velocity.z=0,e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof lt&&(this._m1.lookAt(Ba,e.velocity,Fa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"rectangle",width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new fa({width:e.width,height:e.height,thickness:e.thickness,mode:e.mode,speed:e.speed?it(e.speed):void 0,spread:e.spread})}clone(){return new fa({width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}const Ih={circle:{type:"circle",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:la,loadJSON:la.fromJSON},cone:{type:"cone",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:oa,loadJSON:oa.fromJSON},donut:{type:"donut",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["donutRadius",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:ca,loadJSON:ca.fromJSON},point:{type:"point",params:[],constructor:ha,loadJSON:ha.fromJSON},sphere:{type:"sphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:lr,loadJSON:lr.fromJSON},hemisphere:{type:"hemisphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:ua,loadJSON:ua.fromJSON},grid:{type:"grid",params:[["width",["number"]],["height",["number"]],["rows",["number"]],["column",["number"]]],constructor:da,loadJSON:da.fromJSON},rectangle:{type:"rectangle",params:[["width",["number"]],["height",["number"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:fa,loadJSON:fa.fromJSON}};function _w(r,e){return Ih[r.type].loadJSON(r,e)}class pa{constructor(e){this.color=e,this.type="ColorOverLife"}initialize(e){this.color.startGen(e.memory)}update(e,t){this.color.genColor(e.memory,e.color,e.age/e.life),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON()}}static fromJSON(e){return new pa(Iu(e.color))}clone(){return new pa(this.color.clone())}reset(){}}class ma{constructor(e){this.angularVelocity=e,this.type="RotationOverLife"}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){typeof e.rotation=="number"&&(e.rotation+=t*this.angularVelocity.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new ma(it(e.angularVelocity))}frameUpdate(e){}clone(){return new ma(this.angularVelocity.clone())}reset(){}}class ga{constructor(e){this.angularVelocity=e,this.type="Rotation3DOverLife",this.tempQuat=new lt,this.tempQuat2=new lt}initialize(e){e.rotation instanceof lt&&(e.angularVelocity=new lt,this.angularVelocity.startGen(e.memory))}update(e,t){e.rotation instanceof lt&&(this.angularVelocity.genValue(e.memory,this.tempQuat,t,e.age/e.life),e.rotation.multiply(this.tempQuat))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new ga(gm(e.angularVelocity))}frameUpdate(e){}clone(){return new ga(this.angularVelocity.clone())}reset(){}}class _a{initialize(e,t){this.ps=t,this.x.startGen(e.memory),this.y.startGen(e.memory),this.z.startGen(e.memory)}constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type="ForceOverLife",this._temp=new Ae,this._tempScale=new Ae,this._tempQ=new lt}update(e,t){this._temp.set(this.x.genValue(e.memory,e.age/e.life),this.y.genValue(e.memory,e.age/e.life),this.z.genValue(e.memory,e.age/e.life)),this.ps.worldSpace?e.velocity.addScaledVector(this._temp,t):(this._temp.multiply(this._tempScale).applyQuaternion(this._tempQ),e.velocity.addScaledVector(this._temp,t))}toJSON(){return{type:this.type,x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new _a(it(e.x),it(e.y),it(e.z))}frameUpdate(e){if(this.ps&&!this.ps.worldSpace){const t=this._temp,n=this._tempQ,i=this._tempScale;this.ps.emitter.matrixWorld.decompose(t,n,i),n.invert(),i.set(1/i.x,1/i.y,1/i.z)}}clone(){return new _a(this.x.clone(),this.y.clone(),this.z.clone())}reset(){}}class ya{initialize(e){this.size.startGen(e.memory)}constructor(e){this.size=e,this.type="SizeOverLife"}update(e){this.size instanceof us?this.size.genValue(e.memory,e.size,e.age/e.life).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,size:this.size.toJSON()}}static fromJSON(e){return new ya(al(e.size))}frameUpdate(e){}clone(){return new ya(this.size.clone())}reset(){}}class xa{initialize(e){this.speed.startGen(e.memory)}constructor(e){this.speed=e,this.type="SpeedOverLife"}update(e){e.speedModifier=this.speed.genValue(e.memory,e.age/e.life)}toJSON(){return{type:this.type,speed:this.speed.toJSON()}}static fromJSON(e){return new xa(it(e.speed))}frameUpdate(e){}clone(){return new xa(this.speed.clone())}reset(){}}class va{constructor(e){this.frame=e,this.type="FrameOverLife"}initialize(e){this.frame.startGen(e.memory)}update(e,t){this.frame instanceof sa&&(e.uvTile=this.frame.genValue(e.memory,e.age/e.life))}frameUpdate(e){}toJSON(){return{type:this.type,frame:this.frame.toJSON()}}static fromJSON(e){return new va(it(e.frame))}clone(){return new va(this.frame.clone())}reset(){}}class Ma{constructor(e,t=new Ae(0,1,0)){this.orbitSpeed=e,this.axis=t,this.type="OrbitOverLife",this.temp=new Ae,this.rotation=new lt}initialize(e){this.orbitSpeed.startGen(e.memory)}update(e,t){this.temp.copy(e.position).projectOnVector(this.axis),this.rotation.setFromAxisAngle(this.axis,this.orbitSpeed.genValue(e.memory,e.age/e.life)*t),e.position.sub(this.temp),e.position.applyQuaternion(this.rotation),e.position.add(this.temp)}frameUpdate(e){}toJSON(){return{type:this.type,orbitSpeed:this.orbitSpeed.toJSON(),axis:[this.axis.x,this.axis.y,this.axis.z]}}static fromJSON(e){return new Ma(it(e.orbitSpeed),e.axis?new Ae(e.axis[0],e.axis[1],e.axis[2]):void 0)}clone(){return new Ma(this.orbitSpeed.clone())}reset(){}}class Sc{constructor(e){this.data=e,this.next=null,this.prev=null}hasPrev(){return this.prev!==null}hasNext(){return this.next!==null}}class yw{constructor(){this.length=0,this.head=this.tail=null}isEmpty(){return this.head===null}clear(){this.length=0,this.head=this.tail=null}front(){return this.head===null?null:this.head.data}back(){return this.tail===null?null:this.tail.data}dequeue(){if(this.head){const e=this.head.data;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}}pop(){if(this.tail){const e=this.tail.data;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}}queue(e){const t=new Sc(e);this.tail||(this.tail=t),this.head&&(this.head.prev=t,t.next=this.head),this.head=t,this.length++}push(e){const t=new Sc(e);this.head||(this.head=t),this.tail&&(this.tail.next=t,t.prev=this.tail),this.tail=t,this.length++}insertBefore(e,t){const n=new Sc(t);n.next=e,n.prev=e.prev,n.prev!==null&&(n.prev.next=n),n.next.prev=n,e==this.head&&(this.head=n),this.length++}remove(e){if(this.head===null||this.tail===null)return;let t=this.head;for(e===this.head.data&&(this.head=this.head.next),e===this.tail.data&&(this.tail=this.tail.prev);t.next!==null&&t.data!==e;)t=t.next;t.data===e&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.length--)}*values(){let e=this.head;for(;e!==null;)yield e.data,e=e.next}}class xw{constructor(){this.startSpeed=0,this.startColor=new Mn,this.startSize=new Ae(1,1,1),this.position=new Ae,this.velocity=new Ae,this.age=0,this.life=1,this.size=new Ae(1,1,1),this.speedModifier=1,this.rotation=0,this.color=new Mn,this.uvTile=0,this.memory=[]}get died(){return this.age>=this.life}reset(){this.memory.length=0}}class vw{constructor(e,t,n){this.position=e,this.size=t,this.color=n}}class Lh{constructor(){this.startSpeed=0,this.startColor=new Mn,this.startSize=new Ae(1,1,1),this.position=new Ae,this.velocity=new Ae,this.age=0,this.life=1,this.size=new Ae(1,1,1),this.length=100,this.speedModifier=1,this.color=new Mn,this.previous=new yw,this.uvTile=0,this.memory=[]}update(){for(this.age<=this.life?this.previous.push(new vw(this.position.clone(),this.size.x,this.color.clone())):this.previous.length>0&&this.previous.dequeue();this.previous.length>this.length;)this.previous.dequeue()}get died(){return this.age>=this.life}reset(){this.memory.length=0,this.previous.clear()}}class Sa{initialize(e){this.width.startGen(e.memory)}constructor(e){this.width=e,this.type="WidthOverLength"}update(e){if(e instanceof Lh){const t=e.previous.values();for(let n=0;n<e.previous.length;n++){const i=t.next();i.value.size=this.width.genValue(e.memory,(e.previous.length-n)/e.length)}}}frameUpdate(e){}toJSON(){return{type:this.type,width:this.width.toJSON()}}static fromJSON(e){return new Sa(it(e.width))}clone(){return new Sa(this.width.clone())}reset(){}}class ba{constructor(e,t){this.direction=e,this.magnitude=t,this.type="ApplyForce",this.memory={data:[],dataCount:0},this.magnitudeValue=this.magnitude.genValue(this.memory)}initialize(e){}update(e,t){e.velocity.addScaledVector(this.direction,this.magnitudeValue*t)}frameUpdate(e){this.magnitudeValue=this.magnitude.genValue(this.memory)}toJSON(){return{type:this.type,direction:[this.direction.x,this.direction.y,this.direction.z],magnitude:this.magnitude.toJSON()}}static fromJSON(e){return new ba(new Ae(e.direction[0],e.direction[1],e.direction[2]),it(e.magnitude??e.force))}clone(){return new ba(this.direction.clone(),this.magnitude.clone())}reset(){}}class wa{constructor(e,t){this.center=e,this.magnitude=t,this.type="GravityForce",this.temp=new Ae}initialize(e){}update(e,t){this.temp.copy(this.center).sub(e.position).normalize(),e.velocity.addScaledVector(this.temp,this.magnitude/e.position.distanceToSquared(this.center)*t)}frameUpdate(e){}toJSON(){return{type:this.type,center:[this.center.x,this.center.y,this.center.z],magnitude:this.magnitude}}static fromJSON(e){return new wa(new Ae(e.center[0],e.center[1],e.center[2]),e.magnitude)}clone(){return new wa(this.center.clone(),this.magnitude)}reset(){}}class Ea{constructor(e){this.angle=e,this.type="ChangeEmitDirection",this._temp=new Ae,this._q=new lt,this.memory={data:[],dataCount:0}}initialize(e){const t=e.velocity.length();t!=0&&(e.velocity.normalize(),e.velocity.x===0&&e.velocity.y===0?this._temp.set(0,e.velocity.z,0):this._temp.set(-e.velocity.y,e.velocity.x,0),this.angle.startGen(this.memory),this._q.setFromAxisAngle(this._temp.normalize(),this.angle.genValue(this.memory)),this._temp.copy(e.velocity),e.velocity.applyQuaternion(this._q),this._q.setFromAxisAngle(this._temp,Math.random()*Math.PI*2),e.velocity.applyQuaternion(this._q),e.velocity.setLength(t))}update(e,t){}frameUpdate(e){}toJSON(){return{type:this.type,angle:this.angle.toJSON()}}static fromJSON(e){return new Ea(it(e.angle))}clone(){return new Ea(this.angle)}reset(){}}var Ws;(function(r){r[r.Death=0]="Death",r[r.Birth=1]="Birth",r[r.Frame=2]="Frame"})(Ws||(Ws={}));class cr{constructor(e,t,n,i=Ws.Frame,s=1){this.particleSystem=e,this.useVelocityAsBasis=t,this.subParticleSystem=n,this.mode=i,this.emitProbability=s,this.type="EmitSubParticleSystem",this.q_=new lt,this.v_=new Ae,this.v2_=new Ae,this.subEmissions=new Array,this.subParticleSystem&&this.subParticleSystem.system&&(this.subParticleSystem.system.onlyUsedByOther=!0)}initialize(e){}update(e,t){this.mode===Ws.Frame?this.emit(e,t):this.mode===Ws.Birth&&e.age===0?this.emit(e,t):this.mode===Ws.Death&&e.age+t>=e.life&&this.emit(e,t)}emit(e,t){if(!this.subParticleSystem||Math.random()>this.emitProbability)return;const n=new Fn;this.setMatrixFromParticle(n,e),this.subEmissions.push({burstParticleCount:0,burstParticleIndex:0,isBursting:!1,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,matrix:n,travelDistance:0,particle:e})}frameUpdate(e){if(this.subParticleSystem)for(let t=0;t<this.subEmissions.length;t++)if(this.subEmissions[t].time>=this.subParticleSystem.system.duration)this.subEmissions[t]=this.subEmissions[this.subEmissions.length-1],this.subEmissions.length=this.subEmissions.length-1,t--;else{const n=this.subEmissions[t];n.particle&&n.particle.age<n.particle.life?this.setMatrixFromParticle(n.matrix,n.particle):n.particle=void 0,this.subParticleSystem.system.emit(e,n,n.matrix)}}toJSON(){return{type:this.type,subParticleSystem:this.subParticleSystem?this.subParticleSystem.uuid:"",useVelocityAsBasis:this.useVelocityAsBasis,mode:this.mode,emitProbability:this.emitProbability}}static fromJSON(e,t){return new cr(t,e.useVelocityAsBasis,e.subParticleSystem,e.mode,e.emitProbability)}clone(){return new cr(this.particleSystem,this.useVelocityAsBasis,this.subParticleSystem,this.mode,this.emitProbability)}reset(){}setMatrixFromParticle(e,t){let n;if(t.rotation===void 0||this.useVelocityAsBasis)if(t.velocity.x===0&&t.velocity.y===0&&(t.velocity.z===1||t.velocity.z===0))e.set(1,0,0,t.position.x,0,1,0,t.position.y,0,0,1,t.position.z,0,0,0,1);else{this.v_.copy(Gf).cross(t.velocity),this.v2_.copy(t.velocity).cross(this.v_);const i=this.v_.length(),s=this.v2_.length();e.set(this.v_.x/i,this.v2_.x/s,t.velocity.x,t.position.x,this.v_.y/i,this.v2_.y/s,t.velocity.y,t.position.y,this.v_.z/i,this.v2_.z/s,t.velocity.z,t.position.z,0,0,0,1)}else t.rotation instanceof lt?n=t.rotation:(this.q_.setFromAxisAngle(Gf,t.rotation),n=this.q_),e.compose(t.position,n,gw);this.particleSystem.worldSpace||e.multiplyMatrices(this.particleSystem.emitter.matrixWorld,e)}}const Mw=.5*(Math.sqrt(3)-1),Or=(3-Math.sqrt(3))/6,Sw=1/3,Wn=1/6,bw=(Math.sqrt(5)-1)/4,Wt=(5-Math.sqrt(5))/20,Bt=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Rt=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class _m{constructor(e=Math.random){const t=typeof e=="function"?e:Ew(e);this.p=ww(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let n=0;n<512;n++)this.perm[n]=this.p[n&255],this.permMod12[n]=this.perm[n]%12}noise2D(e,t){const n=this.permMod12,i=this.perm;let s=0,a=0,o=0;const l=(e+t)*Mw,c=Math.floor(e+l),h=Math.floor(t+l),u=(c+h)*Or,d=c-u,f=h-u,p=e-d,_=t-f;let m,g;p>_?(m=1,g=0):(m=0,g=1);const x=p-m+Or,M=_-g+Or,v=p-1+2*Or,E=_-1+2*Or,w=c&255,T=h&255;let y=.5-p*p-_*_;if(y>=0){const R=n[w+i[T]]*3;y*=y,s=y*y*(Bt[R]*p+Bt[R+1]*_)}let S=.5-x*x-M*M;if(S>=0){const R=n[w+m+i[T+g]]*3;S*=S,a=S*S*(Bt[R]*x+Bt[R+1]*M)}let L=.5-v*v-E*E;if(L>=0){const R=n[w+1+i[T+1]]*3;L*=L,o=L*L*(Bt[R]*v+Bt[R+1]*E)}return 70*(s+a+o)}noise3D(e,t,n){const i=this.permMod12,s=this.perm;let a,o,l,c;const h=(e+t+n)*Sw,u=Math.floor(e+h),d=Math.floor(t+h),f=Math.floor(n+h),p=(u+d+f)*Wn,_=u-p,m=d-p,g=f-p,x=e-_,M=t-m,v=n-g;let E,w,T,y,S,L;x>=M?M>=v?(E=1,w=0,T=0,y=1,S=1,L=0):x>=v?(E=1,w=0,T=0,y=1,S=0,L=1):(E=0,w=0,T=1,y=1,S=0,L=1):M<v?(E=0,w=0,T=1,y=0,S=1,L=1):x<v?(E=0,w=1,T=0,y=0,S=1,L=1):(E=0,w=1,T=0,y=1,S=1,L=0);const R=x-E+Wn,N=M-w+Wn,U=v-T+Wn,V=x-y+2*Wn,B=M-S+2*Wn,k=v-L+2*Wn,F=x-1+3*Wn,ie=M-1+3*Wn,Z=v-1+3*Wn,ce=u&255,de=d&255,pe=f&255;let Ue=.6-x*x-M*M-v*v;if(Ue<0)a=0;else{const te=i[ce+s[de+s[pe]]]*3;Ue*=Ue,a=Ue*Ue*(Bt[te]*x+Bt[te+1]*M+Bt[te+2]*v)}let et=.6-R*R-N*N-U*U;if(et<0)o=0;else{const te=i[ce+E+s[de+w+s[pe+T]]]*3;et*=et,o=et*et*(Bt[te]*R+Bt[te+1]*N+Bt[te+2]*U)}let tt=.6-V*V-B*B-k*k;if(tt<0)l=0;else{const te=i[ce+y+s[de+S+s[pe+L]]]*3;tt*=tt,l=tt*tt*(Bt[te]*V+Bt[te+1]*B+Bt[te+2]*k)}let J=.6-F*F-ie*ie-Z*Z;if(J<0)c=0;else{const te=i[ce+1+s[de+1+s[pe+1]]]*3;J*=J,c=J*J*(Bt[te]*F+Bt[te+1]*ie+Bt[te+2]*Z)}return 32*(a+o+l+c)}noise4D(e,t,n,i){const s=this.perm;let a,o,l,c,h;const u=(e+t+n+i)*bw,d=Math.floor(e+u),f=Math.floor(t+u),p=Math.floor(n+u),_=Math.floor(i+u),m=(d+f+p+_)*Wt,g=d-m,x=f-m,M=p-m,v=_-m,E=e-g,w=t-x,T=n-M,y=i-v;let S=0,L=0,R=0,N=0;E>w?S++:L++,E>T?S++:R++,E>y?S++:N++,w>T?L++:R++,w>y?L++:N++,T>y?R++:N++;const U=S>=3?1:0,V=L>=3?1:0,B=R>=3?1:0,k=N>=3?1:0,F=S>=2?1:0,ie=L>=2?1:0,Z=R>=2?1:0,ce=N>=2?1:0,de=S>=1?1:0,pe=L>=1?1:0,Ue=R>=1?1:0,et=N>=1?1:0,tt=E-U+Wt,J=w-V+Wt,te=T-B+Wt,le=y-k+Wt,ke=E-F+2*Wt,Ne=w-ie+2*Wt,Ge=T-Z+2*Wt,rt=y-ce+2*Wt,Xe=E-de+3*Wt,K=w-pe+3*Wt,se=T-Ue+3*Wt,j=y-et+3*Wt,me=E-1+4*Wt,P=w-1+4*Wt,De=T-1+4*Wt,_e=y-1+4*Wt,Oe=d&255,oe=f&255,C=p&255,b=_&255;let D=.6-E*E-w*w-T*T-y*y;if(D<0)a=0;else{const ee=s[Oe+s[oe+s[C+s[b]]]]%32*4;D*=D,a=D*D*(Rt[ee]*E+Rt[ee+1]*w+Rt[ee+2]*T+Rt[ee+3]*y)}let X=.6-tt*tt-J*J-te*te-le*le;if(X<0)o=0;else{const ee=s[Oe+U+s[oe+V+s[C+B+s[b+k]]]]%32*4;X*=X,o=X*X*(Rt[ee]*tt+Rt[ee+1]*J+Rt[ee+2]*te+Rt[ee+3]*le)}let $=.6-ke*ke-Ne*Ne-Ge*Ge-rt*rt;if($<0)l=0;else{const ee=s[Oe+F+s[oe+ie+s[C+Z+s[b+ce]]]]%32*4;$*=$,l=$*$*(Rt[ee]*ke+Rt[ee+1]*Ne+Rt[ee+2]*Ge+Rt[ee+3]*rt)}let q=.6-Xe*Xe-K*K-se*se-j*j;if(q<0)c=0;else{const ee=s[Oe+de+s[oe+pe+s[C+Ue+s[b+et]]]]%32*4;q*=q,c=q*q*(Rt[ee]*Xe+Rt[ee+1]*K+Rt[ee+2]*se+Rt[ee+3]*j)}let ve=.6-me*me-P*P-De*De-_e*_e;if(ve<0)h=0;else{const ee=s[Oe+1+s[oe+1+s[C+1+s[b+1]]]]%32*4;ve*=ve,h=ve*ve*(Rt[ee]*me+Rt[ee+1]*P+Rt[ee+2]*De+Rt[ee+3]*_e)}return 27*(a+o+l+c+h)}}function ww(r){const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=0;t<255;t++){const n=t+~~(r()*(256-t)),i=e[t];e[t]=e[n],e[n]=i}return e}function Ew(r){let e=0,t=0,n=0,i=1;const s=Tw();return e=s(" "),t=s(" "),n=s(" "),e-=s(r),e<0&&(e+=1),t-=s(r),t<0&&(t+=1),n-=s(r),n<0&&(n+=1),function(){const a=2091639*e+i*23283064365386963e-26;return e=t,t=n,n=a-(i=a|0)}}function Tw(){let r=4022871197;return function(e){e=e.toString();for(let t=0;t<e.length;t++){r+=e.charCodeAt(t);let n=.02519603282416938*r;r=n>>>0,n-=r,n*=r,r=n>>>0,n-=r,r+=n*4294967296}return(r>>>0)*23283064365386963e-26}}class Ta{constructor(e,t,n,i){this.scale=e,this.octaves=t,this.velocityMultiplier=n,this.timeScale=i,this.type="TurbulenceField",this.generator=new _m,this.timeOffset=new Ae,this.temp=new Ae,this.temp2=new Ae,this.timeOffset.x=Math.random()/this.scale.x*this.timeScale.x,this.timeOffset.y=Math.random()/this.scale.y*this.timeScale.y,this.timeOffset.z=Math.random()/this.scale.z*this.timeScale.z}initialize(e){}update(e,t){const n=e.position.x/this.scale.x,i=e.position.y/this.scale.y,s=e.position.z/this.scale.z;this.temp.set(0,0,0);let a=1;for(let o=0;o<this.octaves;o++)this.temp2.set(this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.x*a)/a,this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.y*a)/a,this.generator.noise4D(n*a,i*a,s*a,this.timeOffset.z*a)/a),this.temp.add(this.temp2),a*=2;this.temp.multiply(this.velocityMultiplier),e.velocity.addScaledVector(this.temp,t)}toJSON(){return{type:this.type,scale:[this.scale.x,this.scale.y,this.scale.z],octaves:this.octaves,velocityMultiplier:[this.velocityMultiplier.x,this.velocityMultiplier.y,this.velocityMultiplier.z],timeScale:[this.timeScale.x,this.timeScale.y,this.timeScale.z]}}frameUpdate(e){this.timeOffset.x+=e*this.timeScale.x,this.timeOffset.y+=e*this.timeScale.y,this.timeOffset.z+=e*this.timeScale.z}static fromJSON(e){return new Ta(new Ae(e.scale[0],e.scale[1],e.scale[2]),e.octaves,new Ae(e.velocityMultiplier[0],e.velocityMultiplier[1],e.velocityMultiplier[2]),new Ae(e.timeScale[0],e.timeScale[1],e.timeScale[2]))}clone(){return new Ta(this.scale.clone(),this.octaves,this.velocityMultiplier.clone(),this.timeScale.clone())}reset(){}}const Xn=[],bc=new Ae,wc=new lt;class Aa{constructor(e,t,n=new ut(1),i=new ut(0)){if(this.frequency=e,this.power=t,this.positionAmount=n,this.rotationAmount=i,this.type="Noise",this.duration=0,Xn.length===0)for(let s=0;s<100;s++)Xn.push(new _m)}initialize(e){e.lastPosNoise=new Ae,typeof e.rotation=="number"?e.lastRotNoise=0:e.lastRotNoise=new lt,e.generatorIndex=[Do(0,100),Do(0,100),Do(0,100),Do(0,100)],this.positionAmount.startGen(e.memory),this.rotationAmount.startGen(e.memory),this.frequency.startGen(e.memory),this.power.startGen(e.memory)}update(e,t){let n=this.frequency.genValue(e.memory,e.age/e.life),i=this.power.genValue(e.memory,e.age/e.life),s=this.positionAmount.genValue(e.memory,e.age/e.life),a=this.rotationAmount.genValue(e.memory,e.age/e.life);s>0&&e.lastPosNoise!==void 0&&(e.position.sub(e.lastPosNoise),bc.set(Xn[e.generatorIndex[0]].noise2D(0,e.age*n)*i*s,Xn[e.generatorIndex[1]].noise2D(0,e.age*n)*i*s,Xn[e.generatorIndex[2]].noise2D(0,e.age*n)*i*s),e.position.add(bc),e.lastPosNoise.copy(bc)),a>0&&e.lastRotNoise!==void 0&&(typeof e.rotation=="number"?(e.rotation-=e.lastRotNoise,e.rotation+=Xn[e.generatorIndex[3]].noise2D(0,e.age*n)*Math.PI*i*a):(e.lastRotNoise.invert(),e.rotation.multiply(e.lastRotNoise),wc.set(Xn[e.generatorIndex[0]].noise2D(0,e.age*n)*i*a,Xn[e.generatorIndex[1]].noise2D(0,e.age*n)*i*a,Xn[e.generatorIndex[2]].noise2D(0,e.age*n)*i*a,Xn[e.generatorIndex[3]].noise2D(0,e.age*n)*i*a).normalize(),e.rotation.multiply(wc),e.lastRotNoise.copy(wc)))}toJSON(){return{type:this.type,frequency:this.frequency.toJSON(),power:this.power.toJSON(),positionAmount:this.positionAmount.toJSON(),rotationAmount:this.rotationAmount.toJSON()}}frameUpdate(e){this.duration+=e}static fromJSON(e){return new Aa(it(e.frequency),it(e.power),it(e.positionAmount),it(e.rotationAmount))}clone(){return new Aa(this.frequency.clone(),this.power.clone(),this.positionAmount.clone(),this.rotationAmount.clone())}reset(){}}class Ca{constructor(e,t){this.color=e,this.speedRange=t,this.type="ColorBySpeed"}initialize(e){this.color.startGen(e.memory)}update(e,t){const n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.color.genColor(e.memory,e.color,n),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new Ca(Iu(e.color),hs.fromJSON(e.speedRange))}clone(){return new Ca(this.color.clone(),this.speedRange.clone())}reset(){}}class Ra{initialize(e){this.size.startGen(e.memory)}constructor(e,t){this.size=e,this.speedRange=t,this.type="SizeBySpeed"}update(e){const t=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.size instanceof us?this.size.genValue(e.memory,e.size,t).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,t))}toJSON(){return{type:this.type,size:this.size.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new Ra(al(e.size),hs.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new Ra(this.size.clone(),this.speedRange.clone())}reset(){}}class Pa{constructor(e,t){this.angularVelocity=e,this.speedRange=t,this.type="RotationBySpeed",this.tempQuat=new lt}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){if(typeof e.rotation=="number"){const n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);e.rotation+=t*this.angularVelocity.genValue(e.memory,n)}}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new Pa(it(e.angularVelocity),hs.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new Pa(this.angularVelocity.clone(),this.speedRange.clone())}reset(){}}class Ia{initialize(e){this.speed.startGen(e.memory)}constructor(e,t){this.speed=e,this.dampen=t,this.type="LimitSpeedOverLife"}update(e,t){let n=e.velocity.length(),i=this.speed.genValue(e.memory,e.age/e.life);if(n>i){const s=(n-i)/n;e.velocity.multiplyScalar(1-s*this.dampen*t*20)}}toJSON(){return{type:this.type,speed:this.speed.toJSON(),dampen:this.dampen}}static fromJSON(e){return new Ia(it(e.speed),e.dampen)}frameUpdate(e){}clone(){return new Ia(this.speed.clone(),this.dampen)}reset(){}}const ol={ApplyForce:{type:"ApplyForce",constructor:ba,params:[["direction",["vec3"]],["magnitude",["value"]]],loadJSON:ba.fromJSON},Noise:{type:"Noise",constructor:Aa,params:[["frequency",["value"]],["power",["value"]],["positionAmount",["value"]],["rotationAmount",["value"]]],loadJSON:Aa.fromJSON},TurbulenceField:{type:"TurbulenceField",constructor:Ta,params:[["scale",["vec3"]],["octaves",["number"]],["velocityMultiplier",["vec3"]],["timeScale",["vec3"]]],loadJSON:Ta.fromJSON},GravityForce:{type:"GravityForce",constructor:wa,params:[["center",["vec3"]],["magnitude",["number"]]],loadJSON:wa.fromJSON},ColorOverLife:{type:"ColorOverLife",constructor:pa,params:[["color",["colorFunc"]]],loadJSON:pa.fromJSON},RotationOverLife:{type:"RotationOverLife",constructor:ma,params:[["angularVelocity",["value","valueFunc"]]],loadJSON:ma.fromJSON},Rotation3DOverLife:{type:"Rotation3DOverLife",constructor:ga,params:[["angularVelocity",["rotationFunc"]]],loadJSON:ga.fromJSON},SizeOverLife:{type:"SizeOverLife",constructor:ya,params:[["size",["value","valueFunc","vec3Func"]]],loadJSON:ya.fromJSON},ColorBySpeed:{type:"ColorBySpeed",constructor:Ca,params:[["color",["colorFunc"]],["speedRange",["range"]]],loadJSON:Ca.fromJSON},RotationBySpeed:{type:"RotationBySpeed",constructor:Pa,params:[["angularVelocity",["value","valueFunc"]],["speedRange",["range"]]],loadJSON:Pa.fromJSON},SizeBySpeed:{type:"SizeBySpeed",constructor:Ra,params:[["size",["value","valueFunc","vec3Func"]],["speedRange",["range"]]],loadJSON:Ra.fromJSON},SpeedOverLife:{type:"SpeedOverLife",constructor:xa,params:[["speed",["value","valueFunc"]]],loadJSON:xa.fromJSON},FrameOverLife:{type:"FrameOverLife",constructor:va,params:[["frame",["value","valueFunc"]]],loadJSON:va.fromJSON},ForceOverLife:{type:"ForceOverLife",constructor:_a,params:[["x",["value","valueFunc"]],["y",["value","valueFunc"]],["z",["value","valueFunc"]]],loadJSON:_a.fromJSON},OrbitOverLife:{type:"OrbitOverLife",constructor:Ma,params:[["orbitSpeed",["value","valueFunc"]],["axis",["vec3"]]],loadJSON:Ma.fromJSON},WidthOverLength:{type:"WidthOverLength",constructor:Sa,params:[["width",["value","valueFunc"]]],loadJSON:Sa.fromJSON},ChangeEmitDirection:{type:"ChangeEmitDirection",constructor:Ea,params:[["angle",["value"]]],loadJSON:Ea.fromJSON},EmitSubParticleSystem:{type:"EmitSubParticleSystem",constructor:cr,params:[["particleSystem",["self"]],["useVelocityAsBasis",["boolean"]],["subParticleSystem",["particleSystem"]],["mode",["number"]],["emitProbability",["number"]]],loadJSON:cr.fromJSON},LimitSpeedOverLife:{type:"LimitSpeedOverLife",constructor:Ia,params:[["speed",["value","valueFunc"]],["dampen",["number"]]],loadJSON:Ia.fromJSON}};function Aw(r,e){return ol[r.type]?ol[r.type].loadJSON(r,e):null}const Cw=[];function Rw(r){if(!Cw.find(t=>t.id===r.id)){for(const t of r.emitterShapes)Ih[t.type]||(Ih[t.type]=t);for(const t of r.behaviors)ol[t.type]||(ol[t.type]=t)}}class La{get geometry(){return this._geometry}set geometry(e){if(this._geometry=e,e===void 0||typeof e=="string")return;const t=new ln;this._triangleIndexToArea.length=0;let n=0;if(!e.getIndex())return;const i=e.getIndex().array,s=i.length/3;this._triangleIndexToArea.push(0);for(let a=0;a<s;a++)t.setFromAttributeAndIndices(e.getAttribute("position"),i[a*3],i[a*3+1],i[a*3+2]),n+=t.getArea(),this._triangleIndexToArea.push(n);e.userData.triangleIndexToArea=this._triangleIndexToArea}constructor(e){this.type="mesh_surface",this._triangleIndexToArea=[],this._tempA=new I,this._tempB=new I,this._tempC=new I,e&&(this.geometry=e)}initialize(e){const t=this._geometry;if(!t||t.getIndex()===null){e.position.set(0,0,0),e.velocity.set(0,0,1).multiplyScalar(e.startSpeed);return}const n=this._triangleIndexToArea.length-1;let i=0,s=n;const a=Math.random()*this._triangleIndexToArea[n];for(;i+1<s;){const f=Math.floor((i+s)/2);a<this._triangleIndexToArea[f]?s=f:i=f}let o=Math.random(),l=Math.random();o+l>1&&(o=1-o,l=1-l);const c=t.getIndex().array[i*3],h=t.getIndex().array[i*3+1],u=t.getIndex().array[i*3+2],d=t.getAttribute("position");this._tempA.fromBufferAttribute(d,c),this._tempB.fromBufferAttribute(d,h),this._tempC.fromBufferAttribute(d,u),this._tempB.sub(this._tempA),this._tempC.sub(this._tempA),this._tempA.addScaledVector(this._tempB,o).addScaledVector(this._tempC,l),e.position.copy(this._tempA),this._tempA.copy(this._tempB).cross(this._tempC).normalize(),e.velocity.copy(this._tempA).normalize().multiplyScalar(e.startSpeed)}toJSON(){return{type:"mesh_surface",mesh:this._geometry?this._geometry.uuid:""}}static fromJSON(e,t){return new La(t.geometries[e.geometry])}clone(){return new La(this._geometry)}update(e,t){}}const Pw={id:"three.quarks",emitterShapes:[{type:"mesh_surface",params:[["geometry",["geometry"]]],constructor:La,loadJSON:La.fromJSON}],behaviors:[]};var Iw=`
#ifdef SOFT_PARTICLES

    /* #ifdef LOGDEPTH
    float distSample = linearize_depth_log(sampleDepth, near, far);
    #else
    float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);
    #endif */

    vec2 p2 = projPosition.xy / projPosition.w;
    
    p2 = 0.5 * p2 + 0.5;

    float readDepth = texture2D(depthTexture, p2.xy).r;
    float viewDepth = linearize_depth(readDepth);

    float softParticlesFade = saturate(SOFT_INV_FADE_DISTANCE * ((viewDepth - SOFT_NEAR_FADE) - linearDepth));
    
    gl_FragColor *= softParticlesFade;

    //gl_FragColor = vec4(softParticlesFade , 0, 0, 1);
#endif
`,Lw=`
#ifdef SOFT_PARTICLES

    uniform sampler2D depthTexture;
    uniform vec4 projParams;
    uniform vec2 softParams;

    varying vec4 projPosition;
    varying float linearDepth;

    #define SOFT_NEAR_FADE softParams.x
    #define SOFT_INV_FADE_DISTANCE softParams.y

    #define zNear projParams.x
    #define zFar projParams.y

    float linearize_depth(float d)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }

#endif
`,Nw=`
#ifdef SOFT_PARTICLES
    varying vec4 projPosition;
    varying float linearDepth;
#endif
`,Uw=`
#ifdef SOFT_PARTICLES
    projPosition = gl_Position;
    linearDepth = -mvPosition.z;
#endif
`,Dw=`
#ifdef USE_MAP
    vec4 texelColor = texture2D( map, vUv);
    #ifdef TILE_BLEND
        texelColor = mix( texelColor, texture2D( map, vUvNext ), vUvBlend );
    #endif
    diffuseColor *= texelColor;
#endif
`,Ow=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

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

#endif
`,Fw=`
#ifdef UV_TILE
    attribute float uvTile;
    uniform vec2 tileCount;
    
    mat3 makeTileTransform(float uvTile) {
        float col = mod(uvTile, tileCount.x);
        float row = (tileCount.y - floor(uvTile / tileCount.x) - 1.0);
        
        return mat3(
          1.0 / tileCount.x, 0.0, 0.0,
          0.0, 1.0 / tileCount.y, 0.0, 
          col / tileCount.x, row / tileCount.y, 1.0);
    }
#else
    mat3 makeTileTransform(float uvTile) {
        return mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
    }
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

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

#endif
`,Bw=`
#ifdef UV_TILE
    mat3 tileTransform = makeTileTransform(floor(uvTile));
    #ifdef TILE_BLEND
        mat3 nextTileTransform = makeTileTransform(ceil(uvTile));
        vUvBlend = fract(uvTile);
    #endif
#else
    mat3 tileTransform = makeTileTransform(0.0);
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

vUv = (tileTransform *vec3( uv, 1 )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vUvNext = (nextTileTransform *vec3( uv, 1 )).xy;
#endif

#endif
#ifdef USE_MAP

vMapUv = ( tileTransform * (mapTransform * vec3( MAP_UV, 1 ) )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vMapUvNext = (nextTileTransform * (mapTransform * vec3( MAP_UV, 1 ))).xy;
#endif

#endif
#ifdef USE_ALPHAMAP

vAlphaMapUv = ( tileTransform * (alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) )).xy;
    
#endif
#ifdef USE_LIGHTMAP

vLightMapUv = ( tileTransform * (lightMapTransform * vec3( LIGHTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_AOMAP

vAoMapUv = ( tileTransform * (aoMapTransform * vec3( AOMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_BUMPMAP

vBumpMapUv = ( tileTransform * (bumpMapTransform * vec3( BUMPMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_NORMALMAP

vNormalMapUv = ( tileTransform * (normalMapTransform * vec3( NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

vDisplacementMapUv = ( tileTransform * (displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_EMISSIVEMAP

vEmissiveMapUv = ( tileTransform * (emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_METALNESSMAP

vMetalnessMapUv = ( tileTransform * (metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ROUGHNESSMAP

vRoughnessMapUv = ( tileTransform * (roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ANISOTROPYMAP

vAnisotropyMapUv = ( tileTransform * (anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOATMAP

vClearcoatMapUv = ( tileTransform * (clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

vClearcoatNormalMapUv = ( tileTransform * (clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

vClearcoatRoughnessMapUv = ( tileTransform * (clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

vIridescenceMapUv = ( tileTransform * (iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

vIridescenceThicknessMapUv = ( tileTransform * (iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

vSheenColorMapUv = ( tileTransform * (sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

vSheenRoughnessMapUv = ( tileTransform * (sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULARMAP

vSpecularMapUv = ( tileTransform * (specularMapTransform * vec3( SPECULARMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

vSpecularColorMapUv = ( tileTransform * (specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

vSpecularIntensityMapUv = ( tileTransform * (specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

vTransmissionMapUv = ( tileTransform * transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_THICKNESSMAP

vThicknessMapUv = ( tileTransform * thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) )).xy;

#endif

`;const Pi=$e;function zw(){Pi.tile_pars_vertex=Fw,Pi.tile_vertex=Bw,Pi.tile_pars_fragment=Ow,Pi.tile_fragment=Dw,Pi.soft_pars_vertex=Nw,Pi.soft_vertex=Uw,Pi.soft_pars_fragment=Lw,Pi.soft_fragment=Iw}class Nh extends ct{constructor(e){super(),this.type="ParticleEmitter",this.system=e}clone(){const e=this.system.clone();return e.emitter.copy(this,!0),e.emitter}dispose(){}extractFromCache(e){const t=[];for(const n in e){const i=e[n];delete i.metadata,t.push(i)}return t}toJSON(e,t={}){const n=this.children;this.children=this.children.filter(s=>s.type!=="ParticleSystemPreview");const i=super.toJSON(e);return this.children=n,this.system!==null&&(i.object.ps=this.system.toJSON(e,t)),i}}var Ee;(function(r){r[r.BillBoard=0]="BillBoard",r[r.StretchedBillBoard=1]="StretchedBillBoard",r[r.Mesh=2]="Mesh",r[r.Trail=3]="Trail",r[r.HorizontalBillBoard=4]="HorizontalBillBoard",r[r.VerticalBillBoard=5]="VerticalBillBoard"})(Ee||(Ee={}));class ym extends Mt{constructor(e){super(),this.type="VFXBatch",this.maxParticles=1e3,this.systems=new Set;const t=new ss;t.mask=e.layers.mask;const n=e.material.clone();n.defines={},Object.assign(n.defines,e.material.defines),this.settings={instancingGeometry:e.instancingGeometry,renderMode:e.renderMode,renderOrder:e.renderOrder,material:n,uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softNearFade:e.softNearFade,softFarFade:e.softFarFade,layers:t},this.frustumCulled=!1,this.renderOrder=this.settings.renderOrder}addSystem(e){this.systems.add(e)}removeSystem(e){this.systems.delete(e)}applyDepthTexture(e){const t=this.material.uniforms.depthTexture;t&&t.value!==e&&(t.value=e,this.material.needsUpdate=!0)}getVisibleSystems(){return Array.from(this.systems).filter(e=>e.emitter.visible)}}const kw=new Ae(0,0,1),Ec=new lt,Vw=new Ae,Gw=new Ae;new Ae;const Hf=60,Oo=new Fi(1,1,1,1);class ll{set time(e){this.emissionState.time=e}get time(){return this.emissionState.time}get layers(){return this.rendererSettings.layers}get texture(){return this.rendererSettings.material.map}set texture(e){this.rendererSettings.material.map=e,this.neededToUpdateRender=!0}get material(){return this.rendererSettings.material}set material(e){this.rendererSettings.material=e,this.neededToUpdateRender=!0}get uTileCount(){return this.rendererSettings.uTileCount}set uTileCount(e){this.rendererSettings.uTileCount=e,this.neededToUpdateRender=!0}get vTileCount(){return this.rendererSettings.vTileCount}set vTileCount(e){this.rendererSettings.vTileCount=e,this.neededToUpdateRender=!0}get blendTiles(){return this.rendererSettings.blendTiles}set blendTiles(e){this.rendererSettings.blendTiles=e,this.neededToUpdateRender=!0}get softParticles(){return this.rendererSettings.softParticles}set softParticles(e){this.rendererSettings.softParticles=e,this.neededToUpdateRender=!0}get softNearFade(){return this.rendererSettings.softNearFade}set softNearFade(e){this.rendererSettings.softNearFade=e,this.neededToUpdateRender=!0}get softFarFade(){return this.rendererSettings.softFarFade}set softFarFade(e){this.rendererSettings.softFarFade=e,this.neededToUpdateRender=!0}get instancingGeometry(){return this.rendererSettings.instancingGeometry}set instancingGeometry(e){this.restart(),this.particles.length=0,this.rendererSettings.instancingGeometry=e,this.neededToUpdateRender=!0}get renderMode(){return this.rendererSettings.renderMode}set renderMode(e){if(this.rendererSettings.renderMode!==e){let t=!1;switch(this.rendererSettings.renderMode===Ee.Trail&&(t=!0),this.rendererSettings.renderMode===Ee.Mesh&&(this.startRotation=new ut(0)),e){case Ee.Trail:this.rendererEmitterSettings={startLength:new ut(30),followLocalOrigin:!1},t=!0;break;case Ee.Mesh:this.rendererEmitterSettings={geometry:Oo},this.startRotation=new aa(new Ae(0,1,0),new ut(0));break;case Ee.StretchedBillBoard:this.rendererEmitterSettings={speedFactor:0,lengthFactor:2},this.rendererSettings.instancingGeometry=Oo;break;case Ee.BillBoard:case Ee.VerticalBillBoard:case Ee.HorizontalBillBoard:this.rendererEmitterSettings={},this.rendererSettings.instancingGeometry=Oo;break}this.rendererSettings.renderMode=e,t&&(this.restart(),this.particles.length=0),this.neededToUpdateRender=!0}}get renderOrder(){return this.rendererSettings.renderOrder}set renderOrder(e){this.rendererSettings.renderOrder=e,this.neededToUpdateRender=!0}get blending(){return this.rendererSettings.material.blending}set blending(e){this.rendererSettings.material.blending=e,this.neededToUpdateRender=!0}constructor(e){if(this.temp=new Ae,this.travelDistance=0,this.normalMatrix=new Kn,this.memory=[],this.listeners={},this.firstTimeUpdate=!0,this.autoDestroy=e.autoDestroy===void 0?!1:e.autoDestroy,this.duration=e.duration??1,this.looping=e.looping===void 0?!0:e.looping,this.prewarm=e.prewarm===void 0?!1:e.prewarm,this.startLife=e.startLife??new ut(5),this.startSpeed=e.startSpeed??new ut(0),this.startRotation=e.startRotation??new ut(0),this.startSize=e.startSize??new ut(1),this.startColor=e.startColor??new or(new Mn(1,1,1,1)),this.emissionOverTime=e.emissionOverTime??new ut(10),this.emissionOverDistance=e.emissionOverDistance??new ut(0),this.emissionBursts=e.emissionBursts??[],this.onlyUsedByOther=e.onlyUsedByOther??!1,this.emitterShape=e.shape??new lr,this.behaviors=e.behaviors??new Array,this.worldSpace=e.worldSpace??!1,this.rendererEmitterSettings=e.rendererEmitterSettings??{},e.renderMode===Ee.StretchedBillBoard){const t=this.rendererEmitterSettings;e.speedFactor!==void 0&&(t.speedFactor=e.speedFactor),t.speedFactor=t.speedFactor??0,t.lengthFactor=t.lengthFactor??0}this.rendererSettings={instancingGeometry:e.instancingGeometry??Oo,renderMode:e.renderMode??Ee.BillBoard,renderOrder:e.renderOrder??0,material:e.material,uTileCount:e.uTileCount??1,vTileCount:e.vTileCount??1,blendTiles:e.blendTiles??!1,softParticles:e.softParticles??!1,softNearFade:e.softNearFade??0,softFarFade:e.softFarFade??0,layers:e.layers??new ss},this.neededToUpdateRender=!0,this.particles=new Array,this.startTileIndex=e.startTileIndex||new ut(0),this.emitter=new Nh(this),this.paused=!1,this.particleNum=0,this.emissionState={isBursting:!1,burstParticleIndex:0,burstParticleCount:0,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,travelDistance:0},this.emissionBursts.forEach(t=>t.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1}pause(){this.paused=!0}play(){this.paused=!1}stop(){this.restart(),this.pause()}spawn(e,t,n){Ec.setFromRotationMatrix(n);const i=Vw,s=Ec,a=Gw;n.decompose(i,s,a);for(let o=0;o<e;o++){for(t.burstParticleIndex=o,this.particleNum++;this.particles.length<this.particleNum;)this.rendererSettings.renderMode===Ee.Trail?this.particles.push(new Lh):this.particles.push(new xw);const l=this.particles[this.particleNum-1];if(l.reset(),l.speedModifier=1,this.startColor.startGen(l.memory),this.startColor.genColor(l.memory,l.startColor,this.emissionState.time),l.color.copy(l.startColor),this.startSpeed.startGen(l.memory),l.startSpeed=this.startSpeed.genValue(l.memory,t.time/this.duration),this.startLife.startGen(l.memory),l.life=this.startLife.genValue(l.memory,t.time/this.duration),l.age=0,this.startSize.startGen(l.memory),this.startSize.type==="vec3function")this.startSize.genValue(l.memory,l.startSize,t.time/this.duration);else{const c=this.startSize.genValue(l.memory,t.time/this.duration);l.startSize.set(c,c,c)}if(this.startTileIndex.startGen(l.memory),l.uvTile=this.startTileIndex.genValue(l.memory),l.size.copy(l.startSize),this.rendererSettings.renderMode===Ee.Mesh||this.rendererSettings.renderMode===Ee.BillBoard||this.rendererSettings.renderMode===Ee.VerticalBillBoard||this.rendererSettings.renderMode===Ee.HorizontalBillBoard||this.rendererSettings.renderMode===Ee.StretchedBillBoard){const c=l;this.startRotation.startGen(l.memory),this.rendererSettings.renderMode===Ee.Mesh?(c.rotation instanceof lt||(c.rotation=new lt),this.startRotation.type==="rotation"?this.startRotation.genValue(l.memory,c.rotation,1,t.time/this.duration):c.rotation.setFromAxisAngle(kw,this.startRotation.genValue(c.memory,t.time/this.duration))):this.startRotation.type==="rotation"?c.rotation=0:c.rotation=this.startRotation.genValue(c.memory,t.time/this.duration)}else if(this.rendererSettings.renderMode===Ee.Trail){const c=l;this.rendererEmitterSettings.startLength.startGen(c.memory),c.length=this.rendererEmitterSettings.startLength.genValue(c.memory,t.time/this.duration)}if(this.emitterShape.initialize(l,t),this.rendererSettings.renderMode===Ee.Trail&&this.rendererEmitterSettings.followLocalOrigin){const c=l;c.localPosition=new Ae().copy(c.position)}this.worldSpace?(l.position.applyMatrix4(n),l.startSize.multiply(a).abs(),l.size.copy(l.startSize),l.velocity.multiply(a).applyMatrix3(this.normalMatrix),l.rotation&&l.rotation instanceof lt&&l.rotation.multiplyQuaternions(Ec,l.rotation)):this.onlyUsedByOther&&(l.parentMatrix=n);for(let c=0;c<this.behaviors.length;c++)this.behaviors[c].initialize(l,this)}}endEmit(){this.emitEnded=!0,this.autoDestroy&&(this.markForDestroy=!0),this.fire({type:"emitEnd",particleSystem:this})}dispose(){this._renderer&&this._renderer.deleteSystem(this),this.emitter.dispose(),this.emitter.parent&&this.emitter.parent.remove(this.emitter),this.fire({type:"destroy",particleSystem:this})}restart(){this.memory.length=0,this.paused=!1,this.particleNum=0,this.emissionState.isBursting=!1,this.emissionState.burstIndex=0,this.emissionState.burstWaveIndex=0,this.emissionState.time=0,this.emissionState.waitEmiting=0,this.behaviors.forEach(e=>{e.reset()}),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1,this.emissionBursts.forEach(e=>e.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory)}update(e){if(this.paused)return;let t=this.emitter;for(;t.parent;)t=t.parent;if(t.type!=="Scene"){this.dispose();return}if(this.firstTimeUpdate&&(this.firstTimeUpdate=!1,this.emitter.updateWorldMatrix(!0,!1)),this.emitEnded&&this.particleNum===0){this.markForDestroy&&this.emitter.parent&&this.dispose();return}if(this.looping&&this.prewarm&&!this.prewarmed){this.prewarmed=!0;for(let n=0;n<this.duration*Hf;n++)this.update(1/Hf)}e>.1&&(e=.1),this.neededToUpdateRender&&(this._renderer&&this._renderer.updateSystem(this),this.neededToUpdateRender=!1),this.onlyUsedByOther||this.emit(e,this.emissionState,this.emitter.matrixWorld),this.emitterShape.update(this,e);for(let n=0;n<this.behaviors.length;n++){this.behaviors[n].frameUpdate(e);for(let i=0;i<this.particleNum;i++)this.particles[i].died||this.behaviors[n].update(this.particles[i],e)}for(let n=0;n<this.particleNum;n++)this.rendererEmitterSettings.followLocalOrigin&&this.particles[n].localPosition?(this.particles[n].position.copy(this.particles[n].localPosition),this.particles[n].parentMatrix?this.particles[n].position.applyMatrix4(this.particles[n].parentMatrix):this.particles[n].position.applyMatrix4(this.emitter.matrixWorld)):this.particles[n].position.addScaledVector(this.particles[n].velocity,e*this.particles[n].speedModifier),this.particles[n].age+=e;if(this.rendererSettings.renderMode===Ee.Trail)for(let n=0;n<this.particleNum;n++)this.particles[n].update();for(let n=0;n<this.particleNum;n++){const i=this.particles[n];i.died&&(!(i instanceof Lh)||i.previous.length===0)&&(this.particles[n]=this.particles[this.particleNum-1],this.particles[this.particleNum-1]=i,this.particleNum--,n--,this.fire({type:"particleDied",particleSystem:this,particle:i}))}}emit(e,t,n){t.time>this.duration&&(this.looping?(t.time-=this.duration,t.burstIndex=0,this.behaviors.forEach(s=>{s.reset()})):!this.emitEnded&&!this.onlyUsedByOther&&this.endEmit()),this.normalMatrix.getNormalMatrix(n);const i=Math.ceil(t.waitEmiting);for(this.spawn(i,t,n),t.waitEmiting-=i;t.burstIndex<this.emissionBursts.length&&this.emissionBursts[t.burstIndex].time<=t.time;){if(Math.random()<this.emissionBursts[t.burstIndex].probability){const s=this.emissionBursts[t.burstIndex].count.genValue(this.memory,this.time);t.isBursting=!0,t.burstParticleCount=s,this.spawn(s,t,n),t.isBursting=!1}t.burstIndex++}if(!this.emitEnded&&(t.waitEmiting+=e*this.emissionOverTime.genValue(this.memory,t.time/this.duration),t.previousWorldPos!=null)){this.temp.set(n.elements[12],n.elements[13],n.elements[14]),t.travelDistance+=t.previousWorldPos.distanceTo(this.temp);const s=this.emissionOverDistance.genValue(this.memory,t.time/this.duration);if(t.travelDistance*s>0){const a=Math.floor(t.travelDistance*s);t.travelDistance-=a/s,t.waitEmiting+=a}}t.previousWorldPos===void 0&&(t.previousWorldPos=new Ae),t.previousWorldPos.set(n.elements[12],n.elements[13],n.elements[14]),t.time+=e}toJSON(e,t={}){var a;if((e===void 0||typeof e=="string")&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}}),e.materials[this.rendererSettings.material.uuid]=this.rendererSettings.material.toJSON(e),t.useUrlForImage&&((a=this.texture)==null?void 0:a.source)!==void 0){const o=this.texture.source;e.images[o.uuid]={uuid:o.uuid,url:this.texture.image.url}}let i;this.renderMode===Ee.Trail?i={startLength:this.rendererEmitterSettings.startLength.toJSON(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===Ee.Mesh?i={}:this.renderMode===Ee.StretchedBillBoard?i={speedFactor:this.rendererEmitterSettings.speedFactor,lengthFactor:this.rendererEmitterSettings.lengthFactor}:i={};const s=this.rendererSettings.instancingGeometry;return e.geometries&&!e.geometries[s.uuid]&&(e.geometries[s.uuid]=s.toJSON()),{version:"3.0",autoDestroy:this.autoDestroy,looping:this.looping,prewarm:this.prewarm,duration:this.duration,shape:this.emitterShape.toJSON(),startLife:this.startLife.toJSON(),startSpeed:this.startSpeed.toJSON(),startRotation:this.startRotation.toJSON(),startSize:this.startSize.toJSON(),startColor:this.startColor.toJSON(),emissionOverTime:this.emissionOverTime.toJSON(),emissionOverDistance:this.emissionOverDistance.toJSON(),emissionBursts:this.emissionBursts.map(o=>({time:o.time,count:o.count.toJSON(),probability:o.probability,interval:o.interval,cycle:o.cycle})),onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry.uuid,renderOrder:this.renderOrder,renderMode:this.renderMode,rendererEmitterSettings:i,material:this.rendererSettings.material.uuid,layers:this.layers.mask,startTileIndex:this.startTileIndex.toJSON(),uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.rendererSettings.softParticles,softFarFade:this.rendererSettings.softFarFade,softNearFade:this.rendererSettings.softNearFade,behaviors:this.behaviors.map(o=>o.toJSON()),worldSpace:this.worldSpace}}static fromJSON(e,t,n){var l;const i=_w(e.shape,t);let s;if(e.renderMode===Ee.Trail){const c=e.rendererEmitterSettings;s={startLength:c.startLength!=null?it(c.startLength):new ut(30),followLocalOrigin:c.followLocalOrigin}}else e.renderMode===Ee.Mesh?s={}:e.renderMode===Ee.StretchedBillBoard?(s=e.rendererEmitterSettings,e.speedFactor!=null&&(s.speedFactor=e.speedFactor)):s={};const a=new ss;e.layers&&(a.mask=e.layers);const o=new ll({autoDestroy:e.autoDestroy,looping:e.looping,prewarm:e.prewarm,duration:e.duration,shape:i,startLife:it(e.startLife),startSpeed:it(e.startSpeed),startRotation:al(e.startRotation),startSize:al(e.startSize),startColor:Iu(e.startColor),emissionOverTime:it(e.emissionOverTime),emissionOverDistance:it(e.emissionOverDistance),emissionBursts:(l=e.emissionBursts)==null?void 0:l.map(c=>({time:c.time,count:typeof c.count=="number"?new ut(c.count):it(c.count),probability:c.probability??1,interval:c.interval??.1,cycle:c.cycle??1})),onlyUsedByOther:e.onlyUsedByOther,instancingGeometry:t.geometries[e.instancingGeometry],renderMode:e.renderMode,rendererEmitterSettings:s,renderOrder:e.renderOrder,layers:a,material:e.material?t.materials[e.material]:e.texture?new zt({map:t.textures[e.texture],transparent:e.transparent??!0,blending:e.blending,side:wn}):new zt({color:16777215,transparent:!0,blending:Yo,side:wn}),startTileIndex:typeof e.startTileIndex=="number"?new ut(e.startTileIndex):it(e.startTileIndex),uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softFarFade:e.softFarFade,softNearFade:e.softNearFade,behaviors:[],worldSpace:e.worldSpace});return o.behaviors=e.behaviors.map(c=>{const h=Aw(c,o);return h&&h.type==="EmitSubParticleSystem"&&(n[c.subParticleSystem]=h),h}).filter(c=>c!==null),o}addBehavior(e){this.behaviors.push(e)}getRendererSettings(){return this.rendererSettings}addEventListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}removeAllEventListeners(e){this.listeners[e]&&(this.listeners[e]=[])}removeEventListener(e,t){if(this.listeners[e]){const n=this.listeners[e].indexOf(t);n!==-1&&this.listeners[e].splice(n,1)}}fire(e){this.listeners[e.type]&&this.listeners[e.type].forEach(t=>t(e))}clone(){const e=[];for(const s of this.emissionBursts){const a={};Object.assign(a,s),e.push(a)}const t=[];for(const s of this.behaviors)t.push(s.clone());let n;this.renderMode===Ee.Trail?n={startLength:this.rendererEmitterSettings.startLength.clone(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===Ee.StretchedBillBoard?n={lengthFactor:this.rendererEmitterSettings.lengthFactor,speedFactor:this.rendererEmitterSettings.speedFactor}:n={};const i=new ss;return i.mask=this.layers.mask,new ll({autoDestroy:this.autoDestroy,looping:this.looping,duration:this.duration,shape:this.emitterShape.clone(),startLife:this.startLife.clone(),startSpeed:this.startSpeed.clone(),startRotation:this.startRotation.clone(),startSize:this.startSize.clone(),startColor:this.startColor.clone(),emissionOverTime:this.emissionOverTime.clone(),emissionOverDistance:this.emissionOverDistance.clone(),emissionBursts:e,onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry,renderMode:this.renderMode,renderOrder:this.renderOrder,rendererEmitterSettings:n,material:this.rendererSettings.material,startTileIndex:this.startTileIndex,uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.softParticles,softFarFade:this.softFarFade,softNearFade:this.softNearFade,behaviors:t,worldSpace:this.worldSpace,layers:i})}}var Tc=`

#include <common>
#include <color_pars_fragment>
#include <map_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <alphatest_pars_fragment>

#include <tile_pars_fragment>
#include <soft_pars_fragment>

void main() {

    #include <clipping_planes_fragment>
    
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vColor;
    
    #include <logdepthbuf_fragment>
    
    #include <tile_fragment>
    #include <alphatest_fragment>

    outgoingLight = diffuseColor.rgb;
    
    #ifdef USE_COLOR_AS_ALPHA
    gl_FragColor = vec4( outgoingLight, diffuseColor.r );
    #else
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #endif
    
    #include <soft_fragment>
    #include <tonemapping_fragment>
}
`,Lu=`
#define STANDARD

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

// accumulation
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>

// modulation
#include <aomap_fragment>

vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

#include <transmission_fragment>

vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

#ifdef USE_SHEEN

// Sheen energy compensation approximation calculation can be found at the end of
// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
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
}`,Hw=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;

void main() {
	
    vec2 alignedPosition = position.xy * size.xy;
    
    vec2 rotatedPosition;
    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
#ifdef HORIZONTAL
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.x += rotatedPosition.x;
    mvPosition.z -= rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
#elif defined(VERTICAL)
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.y += rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
    mvPosition.x += rotatedPosition.x;
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    mvPosition.xy += rotatedPosition;
#endif

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>

	#include <clipping_planes_vertex>

	#include <tile_vertex>
	#include <soft_vertex>
}
`,Ww=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
// attribute vec4 color;

void main() {

    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;
    
    mat4 matrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);
    
    vec4 mvPosition = modelViewMatrix * (matrix * vec4( position, 1.0 ));

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
    #include <tile_vertex>
    #include <soft_vertex>
}
`,Nu=`
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
#include <tile_pars_vertex>
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

    #include <tile_vertex>
    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;

    mat4 particleMatrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);

#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>

#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>

	// replace defaultnormal_vertex
	vec3 transformedNormal = objectNormal;
    mat3 m = mat3( particleMatrix );
    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    transformedNormal = m * transformedNormal;
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
        transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
        vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
        #ifdef FLIP_SIDED
        transformedTangent = - transformedTangent;
        #endif
    #endif

	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	// replace include <project_vertex>
  vec4 mvPosition = vec4( transformed, 1.0 );
  mvPosition = modelViewMatrix * (particleMatrix * mvPosition);
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
	vViewPosition = - mvPosition.xyz;
	
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
#endif
}
`,Xw=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;
attribute vec4 velocity;

uniform float speedFactor;

void main() {
    float lengthFactor = velocity.w;
    float avgSize = (size.x + size.y) * 0.5;
#ifdef USE_SKEW
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;

    vec3 scaledPos = vec3(position.xy * size.xy, position.z);
    float vlength = length(viewVelocity);
    vec3 projVelocity =  dot(scaledPos, viewVelocity) * viewVelocity / vlength;
    mvPosition.xyz += scaledPos + projVelocity * (speedFactor / avgSize + lengthFactor / vlength);
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;
    float vlength = length(viewVelocity); 
    mvPosition.xyz += position.y * normalize(cross(mvPosition.xyz, viewVelocity)) * avgSize; // switch the cross to  match unity implementation
    mvPosition.xyz -= (position.x + 0.5) * viewVelocity * (1.0 + lengthFactor / vlength) * avgSize; // minus position.x to match unity implementation
#endif
	vColor = color;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <tile_vertex>
	#include <soft_vertex>
}
`;function Uh(r){return r===0?"uv":`uv${r}`}class qw extends ur{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=Nu,e.fragmentShader=Lu}}class Jw extends An{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=Nu,e.fragmentShader=Lu}}class Yw extends ym{constructor(e){super(e),this.vector_=new Ae,this.vector2_=new Ae,this.vector3_=new Ae,this.quaternion_=new lt,this.quaternion2_=new lt,this.quaternion3_=new lt,this.rotationMat_=new Kn,this.rotationMat2_=new Kn,this.maxParticles=1e3,this.setupBuffers(),this.rebuildMaterial()}buildExpandableBuffers(){this.offsetBuffer=new sn(new Float32Array(this.maxParticles*3),3),this.offsetBuffer.setUsage(nn),this.geometry.setAttribute("offset",this.offsetBuffer),this.colorBuffer=new sn(new Float32Array(this.maxParticles*4),4),this.colorBuffer.setUsage(nn),this.geometry.setAttribute("color",this.colorBuffer),this.settings.renderMode===Ee.Mesh?(this.rotationBuffer=new sn(new Float32Array(this.maxParticles*4),4),this.rotationBuffer.setUsage(nn),this.geometry.setAttribute("rotation",this.rotationBuffer)):(this.settings.renderMode===Ee.BillBoard||this.settings.renderMode===Ee.HorizontalBillBoard||this.settings.renderMode===Ee.VerticalBillBoard||this.settings.renderMode===Ee.StretchedBillBoard)&&(this.rotationBuffer=new sn(new Float32Array(this.maxParticles),1),this.rotationBuffer.setUsage(nn),this.geometry.setAttribute("rotation",this.rotationBuffer)),this.sizeBuffer=new sn(new Float32Array(this.maxParticles*3),3),this.sizeBuffer.setUsage(nn),this.geometry.setAttribute("size",this.sizeBuffer),this.uvTileBuffer=new sn(new Float32Array(this.maxParticles),1),this.uvTileBuffer.setUsage(nn),this.geometry.setAttribute("uvTile",this.uvTileBuffer),this.settings.renderMode===Ee.StretchedBillBoard&&(this.velocityBuffer=new sn(new Float32Array(this.maxParticles*4),4),this.velocityBuffer.setUsage(nn),this.geometry.setAttribute("velocity",this.velocityBuffer))}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new nm,this.geometry.setIndex(this.settings.instancingGeometry.getIndex()),this.settings.instancingGeometry.hasAttribute("normal")&&this.geometry.setAttribute("normal",this.settings.instancingGeometry.getAttribute("normal")),this.geometry.setAttribute("position",this.settings.instancingGeometry.getAttribute("position")),this.settings.instancingGeometry.hasAttribute("uv")&&this.geometry.setAttribute("uv",this.settings.instancingGeometry.getAttribute("uv")),this.buildExpandableBuffers()}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={},t={};this.settings.material.type!=="MeshStandardMaterial"&&this.settings.material.type!=="MeshPhysicalMaterial"&&(e.map=new xn(this.settings.material.map)),this.settings.material.alphaTest&&(t.USE_ALPHATEST="",e.alphaTest=new xn(this.settings.material.alphaTest)),t.USE_UV="";const n=this.settings.uTileCount,i=this.settings.vTileCount;(n>1||i>1)&&(t.UV_TILE="",e.tileCount=new xn(new rr(n,i))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.material.normalMap&&(t.USE_NORMALMAP="",t.NORMALMAP_UV=Uh(this.settings.material.normalMap.channel),e.normalMapTransform=new xn(new Kn().copy(this.settings.material.normalMap.matrix))),this.settings.material.map&&(t.USE_MAP="",this.settings.blendTiles&&(t.TILE_BLEND=""),t.MAP_UV=Uh(this.settings.material.map.channel),e.mapTransform=new xn(new Kn().copy(this.settings.material.map.matrix))),t.USE_COLOR_ALPHA="";let s;if(this.settings.softParticles){t.SOFT_PARTICLES="";const o=this.settings.softNearFade,l=1/(this.settings.softFarFade-this.settings.softNearFade);e.softParams=new xn(new rr(o,l)),e.depthTexture=new xn(null);const c=e.projParams=new xn(new Mn);s=(h,u,d)=>{c.value.set(d.near,d.far,0,0)}}let a=!1;if(this.settings.renderMode===Ee.BillBoard||this.settings.renderMode===Ee.VerticalBillBoard||this.settings.renderMode===Ee.HorizontalBillBoard||this.settings.renderMode===Ee.Mesh){let o,l;this.settings.renderMode===Ee.Mesh?this.settings.material.type==="MeshStandardMaterial"||this.settings.material.type==="MeshPhysicalMaterial"?(t.USE_COLOR="",o=Nu,l=Lu,a=!0):(o=Ww,l=Tc):(o=Hw,l=Tc),this.settings.renderMode===Ee.VerticalBillBoard?t.VERTICAL="":this.settings.renderMode===Ee.HorizontalBillBoard&&(t.HORIZONTAL="");let c=!1;this.settings.renderMode===Ee.Mesh&&(this.settings.material.type==="MeshStandardMaterial"?(this.material=new qw({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0):this.settings.material.type==="MeshPhysicalMaterial"&&(this.material=new Jw({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0)),c||(this.material=new dn({uniforms:e,defines:t,vertexShader:o,fragmentShader:l,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest,lights:a}))}else if(this.settings.renderMode===Ee.StretchedBillBoard)e.speedFactor=new xn(1),this.material=new dn({uniforms:e,defines:t,vertexShader:Xw,fragmentShader:Tc,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest});else throw new Error("render mode unavailable");this.material&&s&&(this.material.onBeforeRender=s)}update(){let e=0,t=0;const n=this.getVisibleSystems();for(const i of n)t+=i.particleNum;t>this.maxParticles&&this.expandBuffers(t);for(const i of n){i.emitter.updateMatrixWorld&&(i.emitter.updateWorldMatrix(!0,!1),i.emitter.updateMatrixWorld(!0));const s=i.particles,a=i.particleNum,o=this.quaternion2_,l=this.vector2_,c=this.vector3_;i.emitter.matrixWorld.decompose(l,o,c),this.rotationMat_.setFromMatrix4(i.emitter.matrixWorld);for(let h=0;h<a;h++,e++){const u=s[h];if(this.settings.renderMode===Ee.Mesh){let f;if(i.worldSpace)f=u.rotation;else{let p;u.parentMatrix?p=this.quaternion3_.setFromRotationMatrix(u.parentMatrix):p=o,f=this.quaternion_,f.copy(p).multiply(u.rotation)}this.rotationBuffer.setXYZW(e,f.x,f.y,f.z,f.w)}else(this.settings.renderMode===Ee.StretchedBillBoard||this.settings.renderMode===Ee.VerticalBillBoard||this.settings.renderMode===Ee.HorizontalBillBoard||this.settings.renderMode===Ee.BillBoard)&&this.rotationBuffer.setX(e,u.rotation);let d;if(i.worldSpace?d=u.position:(d=this.vector_,u.parentMatrix?d.copy(u.position).applyMatrix4(u.parentMatrix):d.copy(u.position).applyMatrix4(i.emitter.matrixWorld)),this.offsetBuffer.setXYZ(e,d.x,d.y,d.z),this.colorBuffer.setXYZW(e,u.color.x,u.color.y,u.color.z,u.color.w),i.worldSpace?this.sizeBuffer.setXYZ(e,u.size.x,u.size.y,u.size.z):u.parentMatrix?this.sizeBuffer.setXYZ(e,u.size.x,u.size.y,u.size.z):this.sizeBuffer.setXYZ(e,u.size.x*Math.abs(c.x),u.size.y*Math.abs(c.y),u.size.z*Math.abs(c.z)),this.uvTileBuffer.setX(e,u.uvTile),this.settings.renderMode===Ee.StretchedBillBoard&&this.velocityBuffer){let f=i.rendererEmitterSettings.speedFactor;f===0&&(f=.001);const p=i.rendererEmitterSettings.lengthFactor;let _;i.worldSpace?_=u.velocity:(_=this.vector_,u.parentMatrix?(this.rotationMat2_.setFromMatrix4(u.parentMatrix),_.copy(u.velocity).applyMatrix3(this.rotationMat2_)):_.copy(u.velocity).applyMatrix3(this.rotationMat_)),this.velocityBuffer.setXYZW(e,_.x*f,_.y*f,_.z*f,p)}}}this.geometry.instanceCount=e,e>0&&(this.offsetBuffer.clearUpdateRanges(),this.offsetBuffer.addUpdateRange(0,e*3),this.offsetBuffer.needsUpdate=!0,this.sizeBuffer.clearUpdateRanges(),this.sizeBuffer.addUpdateRange(0,e*3),this.sizeBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.uvTileBuffer.clearUpdateRanges(),this.uvTileBuffer.addUpdateRange(0,e),this.uvTileBuffer.needsUpdate=!0,this.settings.renderMode===Ee.StretchedBillBoard&&this.velocityBuffer&&(this.velocityBuffer.clearUpdateRanges(),this.velocityBuffer.addUpdateRange(0,e*4),this.velocityBuffer.needsUpdate=!0),this.settings.renderMode===Ee.Mesh?(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e*4),this.rotationBuffer.needsUpdate=!0):(this.settings.renderMode===Ee.StretchedBillBoard||this.settings.renderMode===Ee.HorizontalBillBoard||this.settings.renderMode===Ee.VerticalBillBoard||this.settings.renderMode===Ee.BillBoard)&&(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e),this.rotationBuffer.needsUpdate=!0))}dispose(){this.geometry.dispose()}}var $w=`

#include <common>
#include <tile_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform sampler2D alphaMap;
uniform float useAlphaMap;
uniform float visibility;
uniform float alphaTest;

varying vec4 vColor;
    
void main() {
    #include <clipping_planes_fragment>
    #include <logdepthbuf_fragment>

    vec4 diffuseColor = vColor;
    
    #ifdef USE_MAP
    #include <tile_fragment>
    #ifndef USE_COLOR_AS_ALPHA
    #endif
    #endif
    if( useAlphaMap == 1. ) diffuseColor.a *= texture2D( alphaMap, vUv).a;
    if( diffuseColor.a < alphaTest ) discard;
    gl_FragColor = diffuseColor;

    #include <fog_fragment>
    #include <tonemapping_fragment>
}`,Kw=`
#include <common>
#include <tile_pars_vertex>
#include <color_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <fog_pars_vertex>

attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;

uniform vec2 resolution;
uniform float lineWidth;
uniform float sizeAttenuation;
    
vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
}
    
void main() {

    #include <tile_vertex>
    
    float aspect = resolution.x / resolution.y;

    vColor = color;

    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4( position, 1.0 );
    vec4 prevPos = m * vec4( previous, 1.0 );
    vec4 nextPos = m * vec4( next, 1.0 );

    vec2 currentP = fix( finalPosition, aspect );
    vec2 prevP = fix( prevPos, aspect );
    vec2 nextP = fix( nextPos, aspect );

    float w = lineWidth * width;

    vec2 dir;
    if( nextP == currentP ) dir = normalize( currentP - prevP );
    else if( prevP == currentP ) dir = normalize( nextP - currentP );
    else {
        vec2 dir1 = normalize( currentP - prevP );
        vec2 dir2 = normalize( nextP - currentP );
        dir = normalize( dir1 + dir2 );

        vec2 perp = vec2( -dir1.y, dir1.x );
        vec2 miter = vec2( -dir.y, dir.x );
        //w = clamp( w / dot( miter, perp ), 0., 4., * lineWidth * width );

    }

    //vec2 normal = ( cross( vec3( dir, 0. ) vec3( 0., 0., 1. ) ) ).xy;
    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
    normal.xy *= .5 * w;
    normal *= projectionMatrix;
    if( sizeAttenuation == 0. ) {
        normal.xy *= finalPosition.w;
        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
    }

    finalPosition.xy += normal.xy * side;

    gl_Position = finalPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    
	#include <fog_vertex>
}`;class Zw extends ym{constructor(e){super(e),this.vector_=new Ae,this.vector2_=new Ae,this.vector3_=new Ae,this.quaternion_=new lt,this.maxParticles=1e4,this.setupBuffers(),this.rebuildMaterial()}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new ot,this.indexBuffer=new _t(new Uint32Array(this.maxParticles*6),1),this.indexBuffer.setUsage(nn),this.geometry.setIndex(this.indexBuffer),this.positionBuffer=new _t(new Float32Array(this.maxParticles*6),3),this.positionBuffer.setUsage(nn),this.geometry.setAttribute("position",this.positionBuffer),this.previousBuffer=new _t(new Float32Array(this.maxParticles*6),3),this.previousBuffer.setUsage(nn),this.geometry.setAttribute("previous",this.previousBuffer),this.nextBuffer=new _t(new Float32Array(this.maxParticles*6),3),this.nextBuffer.setUsage(nn),this.geometry.setAttribute("next",this.nextBuffer),this.widthBuffer=new _t(new Float32Array(this.maxParticles*2),1),this.widthBuffer.setUsage(nn),this.geometry.setAttribute("width",this.widthBuffer),this.sideBuffer=new _t(new Float32Array(this.maxParticles*2),1),this.sideBuffer.setUsage(nn),this.geometry.setAttribute("side",this.sideBuffer),this.uvBuffer=new _t(new Float32Array(this.maxParticles*4),2),this.uvBuffer.setUsage(nn),this.geometry.setAttribute("uv",this.uvBuffer),this.colorBuffer=new _t(new Float32Array(this.maxParticles*8),4),this.colorBuffer.setUsage(nn),this.geometry.setAttribute("color",this.colorBuffer)}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},resolution:{value:new rr(1,1)},sizeAttenuation:{value:1},visibility:{value:1},alphaTest:{value:0}},t={};if(t.USE_UV="",t.USE_COLOR_ALPHA="",this.settings.material.map&&(t.USE_MAP="",t.MAP_UV=Uh(this.settings.material.map.channel),e.map=new xn(this.settings.material.map),e.mapTransform=new xn(new Kn().copy(this.settings.material.map.matrix))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.renderMode===Ee.Trail)this.material=new dn({uniforms:e,defines:t,vertexShader:Kw,fragmentShader:$w,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,side:this.settings.material.side,blending:this.settings.material.blending||Yo,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha});else throw new Error("render mode unavailable")}update(){let e=0,t=0,n=0;const i=this.getVisibleSystems();for(const s of i)for(let a=0;a<s.particleNum;a++)n+=s.particles[a].previous.length*2;n>this.maxParticles&&this.expandBuffers(n);for(const s of i){s.emitter.updateMatrixWorld&&(s.emitter.updateWorldMatrix(!0,!1),s.emitter.updateMatrixWorld(!0));const a=this.quaternion_,o=this.vector2_,l=this.vector3_;s.emitter.matrixWorld.decompose(o,a,l);const c=s.particles,h=s.particleNum,u=this.settings.uTileCount,d=this.settings.vTileCount,f=1/u,p=1/d;for(let _=0;_<h;_++){const m=c[_],g=m.uvTile%d,x=Math.floor(m.uvTile/d+.001),M=m.previous.values();let v=M.next(),E=v.value,w=E;v.done||(v=M.next());let T;v.value!==void 0?T=v.value:T=w;for(let y=0;y<m.previous.length;y++,e+=2){if(this.positionBuffer.setXYZ(e,w.position.x,w.position.y,w.position.z),this.positionBuffer.setXYZ(e+1,w.position.x,w.position.y,w.position.z),s.worldSpace?(this.positionBuffer.setXYZ(e,w.position.x,w.position.y,w.position.z),this.positionBuffer.setXYZ(e+1,w.position.x,w.position.y,w.position.z)):(m.parentMatrix?this.vector_.copy(w.position).applyMatrix4(m.parentMatrix):this.vector_.copy(w.position).applyMatrix4(s.emitter.matrixWorld),this.positionBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.positionBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.previousBuffer.setXYZ(e,E.position.x,E.position.y,E.position.z),this.previousBuffer.setXYZ(e+1,E.position.x,E.position.y,E.position.z)):(m.parentMatrix?this.vector_.copy(E.position).applyMatrix4(m.parentMatrix):this.vector_.copy(E.position).applyMatrix4(s.emitter.matrixWorld),this.previousBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.previousBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.nextBuffer.setXYZ(e,T.position.x,T.position.y,T.position.z),this.nextBuffer.setXYZ(e+1,T.position.x,T.position.y,T.position.z)):(m.parentMatrix?this.vector_.copy(T.position).applyMatrix4(m.parentMatrix):this.vector_.copy(T.position).applyMatrix4(s.emitter.matrixWorld),this.nextBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.nextBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),this.sideBuffer.setX(e,1),this.sideBuffer.setX(e+1,-1),s.worldSpace)this.widthBuffer.setX(e,w.size),this.widthBuffer.setX(e+1,w.size);else if(m.parentMatrix)this.widthBuffer.setX(e,w.size),this.widthBuffer.setX(e+1,w.size);else{const S=(Math.abs(l.x)+Math.abs(l.y)+Math.abs(l.z))/3;this.widthBuffer.setX(e,w.size*S),this.widthBuffer.setX(e+1,w.size*S)}this.uvBuffer.setXY(e,(y/m.previous.length+g)*f,(d-x-1)*p),this.uvBuffer.setXY(e+1,(y/m.previous.length+g)*f,(d-x)*p),this.colorBuffer.setXYZW(e,w.color.x,w.color.y,w.color.z,w.color.w),this.colorBuffer.setXYZW(e+1,w.color.x,w.color.y,w.color.z,w.color.w),y+1<m.previous.length&&(this.indexBuffer.setX(t*3,e),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+2),t++,this.indexBuffer.setX(t*3,e+2),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+3),t++),E=w,w=T,v.done||(v=M.next(),v.value!==void 0&&(T=v.value))}}}this.positionBuffer.clearUpdateRanges(),this.positionBuffer.addUpdateRange(0,e*3),this.positionBuffer.needsUpdate=!0,this.previousBuffer.clearUpdateRanges(),this.previousBuffer.addUpdateRange(0,e*3),this.previousBuffer.needsUpdate=!0,this.nextBuffer.clearUpdateRanges(),this.nextBuffer.addUpdateRange(0,e*3),this.nextBuffer.needsUpdate=!0,this.sideBuffer.clearUpdateRanges(),this.sideBuffer.addUpdateRange(0,e),this.sideBuffer.needsUpdate=!0,this.widthBuffer.clearUpdateRanges(),this.widthBuffer.addUpdateRange(0,e),this.widthBuffer.needsUpdate=!0,this.uvBuffer.clearUpdateRanges(),this.uvBuffer.addUpdateRange(0,e*2),this.uvBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.indexBuffer.clearUpdateRanges(),this.indexBuffer.addUpdateRange(0,t*3),this.indexBuffer.needsUpdate=!0,this.geometry.setDrawRange(0,t*3)}dispose(){this.geometry.dispose()}}class Uu extends ct{constructor(){super(),this.batches=[],this.systemToBatchIndex=new Map,this.type="BatchedRenderer",this.depthTexture=null}static equals(e,t){return e.material.side===t.material.side&&e.material.blending===t.material.blending&&e.material.blendSrc===t.material.blendSrc&&e.material.blendDst===t.material.blendDst&&e.material.blendEquation===t.material.blendEquation&&e.material.premultipliedAlpha===t.material.premultipliedAlpha&&e.material.transparent===t.material.transparent&&e.material.depthTest===t.material.depthTest&&e.material.type===t.material.type&&e.material.alphaTest===t.material.alphaTest&&e.material.map===t.material.map&&e.renderMode===t.renderMode&&e.blendTiles===t.blendTiles&&e.softParticles===t.softParticles&&e.softFarFade===t.softFarFade&&e.softNearFade===t.softNearFade&&e.uTileCount===t.uTileCount&&e.vTileCount===t.vTileCount&&e.instancingGeometry===t.instancingGeometry&&e.renderOrder===t.renderOrder&&e.layers.mask===t.layers.mask}addSystem(e){e._renderer=this;const t=e.getRendererSettings();for(let i=0;i<this.batches.length;i++)if(Uu.equals(this.batches[i].settings,t)){this.batches[i].addSystem(e),this.systemToBatchIndex.set(e,i);return}let n;switch(t.renderMode){case Ee.Trail:n=new Zw(t);break;case Ee.Mesh:case Ee.BillBoard:case Ee.VerticalBillBoard:case Ee.HorizontalBillBoard:case Ee.StretchedBillBoard:n=new Yw(t);break}this.depthTexture&&n.applyDepthTexture(this.depthTexture),n.addSystem(e),this.batches.push(n),this.systemToBatchIndex.set(e,this.batches.length-1),this.add(n)}deleteSystem(e){const t=this.systemToBatchIndex.get(e);t!=null&&(this.batches[t].removeSystem(e),this.systemToBatchIndex.delete(e))}setDepthTexture(e){this.depthTexture=e;for(const t of this.batches)t.applyDepthTexture(e)}updateSystem(e){this.deleteSystem(e),this.addSystem(e)}update(e){this.systemToBatchIndex.forEach((t,n)=>{n.update(e)});for(let t=0;t<this.batches.length;t++)this.batches[t].update()}}const Qw=Uu;class Du extends En{constructor(){super(),this.type="QuarksPrefab",this.animationData=[],this.isPlaying=!1,this.currentTime=-1e-5,this.timeScale=1,this.duration=0,this._mixers=new Map,this._tempAnimationJSON=[],this._clock=new Wy(!0)}registerBatchedRenderer(e){this._batchedRenderer=e}getOrCreateMixer(e){if(!this._mixers.has(e)){const t=new Gy(e);this._mixers.set(e,t)}return this._mixers.get(e)}addThreeAnimation(e,t,n=0,i=t.duration,s=!1){const a=this.getOrCreateMixer(e),o=a.clipAction(t);s||(o.setLoop(mp,1),o.clampWhenFinished=!0);const l={startTime:n,duration:i,type:"three",loop:s,target:e,clip:t,mixer:a,action:o};return this.animationData.push(l),this.updateDuration(),l}addParticleSystemAnimation(e,t=0,n=0,i=!1){n<=0&&(n=e.system.duration);const s={startTime:t,duration:n,type:"ps",loop:i,target:e};return this.animationData.push(s),this.pause(),this.updateDuration(),s}removeAnimation(e){this.animationData.splice(e,1),this.updateDuration()}play(){this.isPlaying||(this.isPlaying=!0)}pause(){this.isPlaying&&(this.isPlaying=!1,this.animationData.forEach(e=>{e.target&&(e.type==="ps"&&!e.target.system.paused?e.target.system.pause():e.type==="three"&&e.action&&e.action.isRunning()&&(e.action.paused=!0))}))}stop(){this.pause(),this.currentTime=-1e-5,this.animationData.forEach(e=>{e.type==="ps"&&e.target?e.target.system.stop():e.type==="three"&&e.mixer&&e.action&&e.action.reset()})}update(e){if(!this.isPlaying)return;const t=e!==void 0?e:this._clock.getDelta();this.currentTime+=t*this.timeScale,this.currentTime>this.duration&&this.stop();const n=new Set;this.animationData.forEach(i=>{const{startTime:s,duration:a,type:o,loop:l,target:c,action:h,mixer:u}=i,d=s+a,f=this.currentTime>=s,p=this.currentTime>d,_=Math.abs(this.currentTime-s)<t;o==="three"&&h&&u?f&&!p?(_?(h.reset(),h.play()):h.paused&&(h.paused=!1,h.play()),this.currentTime-s,n.add(u)):p&&(h.paused=!0):o==="ps"&&c&&(f&&!p?_&&i.target.system.restart():p&&i.target.system.endEmit())}),n.forEach(i=>{i.update(t)})}setTime(e){const t=this.currentTime;this.currentTime=e,this.animationData.forEach(n=>{const{startTime:i,duration:s,type:a,target:o,action:l,mixer:c}=n;if(a==="three"&&l&&c){if(l.reset(),e>=i&&e<i+s){const h=e-i;l.time=h,l.play(),c.update(0),l.paused=!this.isPlaying}}else a==="ps"&&o&&(e>=i&&e<i+s?(t<i||t>=i+s)&&o.system.restart():o.system.endEmit())})}getDuration(){return this.duration}updateDuration(){let e=0;this.animationData.forEach(t=>{const n=t.startTime+t.duration;n>e&&(e=n)}),this.duration=e}resolveReferences(e){this._tempAnimationJSON.forEach(t=>{let n;if(e.traverse(i=>{i.uuid===t.targetUUID&&(n=i)}),n)if(t.type==="three"&&t.clipUUID){let i;n.animations&&(i=n.animations.find(s=>s.uuid===t.clipUUID)),i&&this.addThreeAnimation(n,i,t.startTime,t.duration,t.loop)}else t.type==="ps"&&this.addParticleSystemAnimation(n,t.startTime,t.duration,t.loop)}),this.updateDuration(),this._tempAnimationJSON=[]}toJSON(){const e=super.toJSON();return e.object.animationData=this.animationData.map(t=>{var n;return{startTime:t.startTime,duration:t.duration,type:t.type,targetUUID:t.target.uuid,clipUUID:(n=t.clip)==null?void 0:n.uuid,loop:t.loop}}),e}static fromJSON(e){const t=new Du;return e.animationData&&(t._tempAnimationJSON=e.animationData),t}}class jw extends Ey{constructor(e){super(e)}linkReference(e){const t={};e.traverse(function(n){t[n.uuid]=n}),e.traverse(function(n){if(n.type==="ParticleEmitter"){const i=n.system;i.emitterShape;for(let s=0;s<i.behaviors.length;s++)i.behaviors[s]instanceof cr&&(i.behaviors[s].subParticleSystem=t[i.behaviors[s].subParticleSystem])}})}parse(e,t){const n=super.parse(e,t);return this.linkReference(n),n}parseObject(e,t,n,i,s){let a;function o(p){return t[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",p),t[p]}function l(p){if(p!==void 0){if(Array.isArray(p)){const _=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),_.push(n[x])}return _}return n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),n[p]}}function c(p){return i[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",p),i[p]}let h,u;const d={textures:i,geometries:t,materials:n},f={};switch(e.type){case"QuarksPrefab":a=Du.fromJSON(e);break;case"ParticleEmitter":a=ll.fromJSON(e.ps,d,f).emitter;break;case"Scene":a=new Yh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Te(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new gl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ml(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Zt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new gs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new jp(e.color,e.intensity);break;case"DirectionalLight":a=new Eu(e.color,e.intensity);break;case"PointLight":a=new wu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new em(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new bu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Zp(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new tm,e.sh!==void 0&&(a.sh=new Tu().fromArray(e.sh));break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Kh(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Mt(h,u);break;case"InstancedMesh":{h=o(e.geometry),u=l(e.material);const p=e.count,_=e.instanceMatrix,m=e.instanceColor;a=new Zh(h,u,p),a.instanceMatrix=new sn(new Float32Array(_.array),16),m!==void 0&&(a.instanceColor=new sn(new Float32Array(m.array),m.itemSize));break}case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Ip(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(p=>{const _=new jt;_.min.fromArray(p.boxMin),_.max.fromArray(p.boxMax);const m=new kt;return m.radius=p.sphereRadius,m.center.fromArray(p.sphereCenter),{boxInitialized:p.boxInitialized,box:_,sphereInitialized:p.sphereInitialized,sphere:m}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new Pp;break;case"Line":a=new Oa(o(e.geometry),l(e.material));break;case"LineLoop":a=new eu(o(e.geometry),l(e.material));break;case"LineSegments":a=new jh(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new nu(o(e.geometry),l(e.material));break;case"Sprite":a=new Rp(l(e.material));break;case"Group":a=new En;break;case"Bone":a=new _l;break;default:a=new ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&(a.matrix.decompose(a.position,a.quaternion,a.scale),isNaN(a.quaternion.x)&&a.quaternion.set(0,0,0,1))):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const p=e.children;for(let _=0;_<p.length;_++)a.add(this.parseObject(p[_],t,n,i,s))}if(e.animations!==void 0){const p=e.animations;for(let _=0;_<p.length;_++){const m=p[_];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const p=e.levels;for(let _=0;_<p.length;_++){const m=p[_],g=a.getObjectByProperty("uuid",m.object);g!==void 0&&a.addLevel(g,m.distance)}}else e.type==="QuarksPrefab"&&a.resolveReferences(a);return a}}zw();Rw(Pw);console.log("%c Particle system powered by three.quarks. https://quarks.art/","font-size: 14px; font-weight: bold;");const Wf="/",e1={explosion:`${Wf}assets/vfx/explosion.json`,bubble:`${Wf}assets/vfx/bubble.json`};class t1{constructor(e){Q(this,"batchRenderer");Q(this,"loader");Q(this,"cache",new Map);this.scene=e,this.batchRenderer=new Qw,this.batchRenderer.renderOrder=mc,e.add(this.batchRenderer),this.loader=new jw}async preload(e){await Promise.all(e.map(t=>this.load(t)));for(const t of e)this.warmUp(t)}play(e,t){if(this.cache.get(e)===void 0){this.load(e).then(()=>this.playImmediate(e,t)).catch(()=>console.warn(`VFXSystem: failed to load effect "${e}"`));return}this.playImmediate(e,t)}tick(e){this.batchRenderer.update(e)}destroy(){this.scene.remove(this.batchRenderer)}warmUp(e){const t=this.cache.get(e);if(t===void 0)return;const n=t.clone(!0);n.position.set(0,-1e4,0),n.traverse(i=>{i instanceof Nh&&this.batchRenderer.addSystem(i.system)}),this.batchRenderer.traverse(i=>{i.renderOrder=mc}),this.scene.add(n)}load(e){if(this.cache.has(e))return Promise.resolve();const t=e1[e];return new Promise((n,i)=>{this.loader.load(t,s=>{this.cache.set(e,s),n()},void 0,i)})}playImmediate(e,t){const n=this.cache.get(e);if(n===void 0)return;const i=n.clone(!0);i.position.set(t.x*Pt,qS,t.y*Pt),i.traverse(s=>{s instanceof Nh&&this.batchRenderer.addSystem(s.system)}),this.batchRenderer.traverse(s=>{s.renderOrder=mc}),this.scene.add(i)}}const xm=3,Xs=30,Xf="S",n1=10,i1=15,s1=12,r1=3,a1=.35,vm=3,o1=1,Ou=2;class l1{constructor(e,t){Q(this,"element");Q(this,"livesRow");Q(this,"levelLabel");Q(this,"completedPanel");Q(this,"gameOverPanel");Q(this,"nextLevelBtn");Q(this,"retryBtn");Q(this,"waveCounter");Q(this,"phaseBadge");Q(this,"endlessGameOver");Q(this,"playAgainBtn");Q(this,"onNextLevel",null);Q(this,"onRetry",null);Q(this,"onPlayAgain",null);this.player=e,this.gameState=t,this.element=document.createElement("div"),yn(this.element,c1),this.livesRow=document.createElement("div"),this.levelLabel=document.createElement("div"),yn(this.livesRow,h1),yn(this.levelLabel,u1);for(let n=0;n<xm;n++){const i=document.createElement("div");i.dataset.lifeIcon="active",yn(i,d1),this.livesRow.appendChild(i)}this.element.appendChild(this.livesRow),this.element.appendChild(this.levelLabel),this.completedPanel=Ac("level_complete","LEVEL COMPLETE"),this.nextLevelBtn=Fo("next_level","[NEXT LEVEL]"),this.completedPanel.appendChild(this.nextLevelBtn),this.nextLevelBtn.addEventListener("click",()=>{var n;return(n=this.onNextLevel)==null?void 0:n.call(this)}),this.element.appendChild(this.completedPanel),this.gameOverPanel=Ac("game_over","GAME OVER"),this.retryBtn=Fo("retry","[RETRY]"),this.gameOverPanel.appendChild(this.retryBtn),this.retryBtn.addEventListener("click",()=>{var n;return(n=this.onRetry)==null?void 0:n.call(this)}),this.element.appendChild(this.gameOverPanel),this.waveCounter=document.createElement("div"),this.waveCounter.dataset.wave="",yn(this.waveCounter,g1),this.waveCounter.style.display="none",this.element.appendChild(this.waveCounter),this.phaseBadge=document.createElement("div"),this.phaseBadge.dataset.phaseBadge="",yn(this.phaseBadge,_1),this.phaseBadge.style.display="none",this.element.appendChild(this.phaseBadge),this.endlessGameOver=Ac("endless_game_over","VOYAGE ENDED"),this.playAgainBtn=Fo("play_again","[PLAY AGAIN]"),this.endlessGameOver.appendChild(this.playAgainBtn),this.playAgainBtn.addEventListener("click",()=>{var n;return(n=this.onPlayAgain)==null?void 0:n.call(this)}),this.element.appendChild(this.endlessGameOver),document.body.appendChild(this.element),this.update()}update(){this.refreshLives(),this.refreshLevelLabel(),this.completedPanel.style.display=this.gameState.phase==="level_complete"?"flex":"none",this.gameOverPanel.style.display=this.gameState.phase==="game_over"?"flex":"none"}setEndlessInfo(e,t){this.waveCounter.textContent=`Wave ${e}`,this.waveCounter.style.display="",this.phaseBadge.textContent=`Phase ${t}`,this.phaseBadge.style.display=t>=2?"":"none"}showEndlessGameOver(e,t){let n=this.endlessGameOver.querySelector("[data-endless-stats]");n===null&&(n=document.createElement("p"),n.dataset.endlessStats="",yn(n,y1),this.endlessGameOver.insertBefore(n,this.playAgainBtn)),n.textContent=`You reached Wave ${e} in ${t} moves`,this.endlessGameOver.style.display="flex"}showBlockingHint(e){return new Promise(t=>{const n=document.createElement("div");yn(n,x1);const i=document.createElement("div");yn(i,v1);const s=document.createElement("p");s.textContent=e,yn(s,M1);const a=Fo("dismiss_hint","[OK]");i.appendChild(s),i.appendChild(a),n.appendChild(i),this.element.appendChild(n);const o=()=>{n.remove(),t()};a.addEventListener("click",o)})}setDimensions(e,t){}destroy(){this.element.remove()}refreshLives(){this.livesRow.querySelectorAll("[data-life-icon]").forEach((t,n)=>{const i=n<this.player.lives;t.dataset.lifeIcon=i?"active":"inactive",t.style.backgroundColor=i?"#ffcc00":"#444444"})}refreshLevelLabel(){const t={1:"Fjords",2:"Fjords",3:"Open Norse Sea",4:"Midgard Shores",5:"Helheim Waters"}[this.gameState.currentLevel]??"Unknown";this.levelLabel.textContent=`${t} — Level ${this.gameState.currentLevel}`}}function yn(r,e){Object.assign(r.style,e)}function Ac(r,e){const t=document.createElement("div");t.dataset.overlay=r,yn(t,f1),t.style.display="none";const n=document.createElement("h1");return n.textContent=e,yn(n,p1),t.appendChild(n),t}function Fo(r,e){const t=document.createElement("button");return t.dataset.action=r,t.textContent=e,yn(t,m1),t}const c1={position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"10",fontFamily:"monospace"},h1={position:"absolute",top:"16px",left:"16px",display:"flex",gap:"8px"},u1={position:"absolute",top:"48px",left:"16px",color:"#ffffff",fontSize:"14px"},d1={width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#ffcc00"},f1={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.8)",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"all"},p1={color:"#ffffff",fontSize:"48px",fontWeight:"bold",marginBottom:"40px"},m1={background:"transparent",border:"2px solid #ffffff",color:"#ffffff",fontSize:"20px",fontFamily:"monospace",padding:"12px 24px",cursor:"pointer",pointerEvents:"all"},g1={position:"absolute",top:"16px",right:"16px",color:"#ffffff",fontSize:"18px"},_1={position:"absolute",top:"44px",right:"16px",color:"#ffcc00",fontSize:"14px",backgroundColor:"rgba(0,0,0,0.5)",padding:"2px 8px"},y1={color:"#cccccc",fontSize:"20px",marginBottom:"24px",textAlign:"center"},x1={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.55)",pointerEvents:"all",display:"flex",alignItems:"center",justifyContent:"center"},v1={backgroundColor:"rgba(20,20,20,0.95)",border:"1px solid #888888",padding:"32px 40px",display:"flex",flexDirection:"column",alignItems:"center",gap:"24px",maxWidth:"480px",width:"90%",pointerEvents:"all",marginTop:"25%"},M1={color:"#ffffff",fontSize:"16px",lineHeight:"1.5",textAlign:"center",margin:"0"},S1=new Set(["draugr","jarl","berserker"]);function b1(r,e,t){switch(r){case"N":case"S":return t===0;case"E":case"W":return e===0;case"NE":case"SW":return e===t;case"NW":case"SE":return e+t===0}}function w1(r,e,t,n){const i=e.position.x-r.position.x,s=e.position.y-r.position.y,a=Math.max(Math.abs(i),Math.abs(s));if(!b1(r.facingDirection,i,s)||a===0||a>n)return null;const l=Math.sign(i),c=Math.sign(s),h=[];for(let u=1;u<=a;u++){const d={x:r.position.x+l*u,y:r.position.y+c*u};t.isValidCell(d)&&h.push(d)}return{targetCells:h,playerHit:!0}}function E1(r,e){const[t,n]=r.getBroadsideCells(),i=[t,n].filter(o=>e.isValidCell(o)),s=i,a=[];for(const o of i){const l=e.getCell(o);l.entity!==null&&S1.has(l.entity)&&a.push(o)}return{broadsideCells:s,hits:a}}const T1={isPassableByPlayer:!1,isPassableByEnemy:!1,isPassableByNaglfar:!0},A1={isPassableByPlayer:!0,isPassableByEnemy:!0,isPassableByNaglfar:!0};class Di{static placeWreck(e,t){e.clearEntity(t),e.setEntity(t,"wreck",`wreck-${t.x}-${t.y}`),e.setCellPassability(t,T1)}static removeWreck(e,t){e.clearEntity(t),e.setCellPassability(t,A1)}static isWreck(e,t){return e.getCell(t).entity==="wreck"}}function qf(r,e,t,n,i,s,a,o){const l=r.position,c=`${l.x},${l.y}`;if(a.has(c))return Di.placeWreck(e,l),o.aftermath.push({type:"ship_destroyed",at:{...l}}),{attackerDestroyed:!0,otherDeadId:null};if(l.x===t.position.x&&l.y===t.position.y){const h={...l};return r.type==="naglfar"?(o.aftermath.push({type:"ship_destroyed",at:h}),t.loseLife(e),o.aftermath.push({type:"player_respawn",from:h,to:{...t.position},facingDirection:t.facingDirection,cause:"enemy_collision",respawning:t.lives>0}),o.aftermath.push({type:"life_lost"}),{attackerDestroyed:!1,otherDeadId:null}):(t.loseLife(e),Di.placeWreck(e,h),a.add(c),o.aftermath.push({type:"wreck",at:h}),o.aftermath.push({type:"player_respawn",from:h,to:{...t.position},facingDirection:t.facingDirection,cause:"enemy_collision",respawning:t.lives>0}),o.aftermath.push({type:"life_lost"}),{attackerDestroyed:!0,otherDeadId:null})}if(n!==null&&l.x===n.position.x&&l.y===n.position.y)return e.setEntity(n.position,"naglfar",n.id),o.aftermath.push({type:"ship_destroyed",at:{...l}}),{attackerDestroyed:!0,otherDeadId:null};for(const h of i)if(h.id!==r.id&&!s.has(h.id)&&h.position.x===l.x&&h.position.y===l.y){const u={...l};Di.placeWreck(e,u),a.add(c);const d=o.moves.find(f=>f.shipId===h.id);return d!==void 0&&(d.endsInCollision=!0),o.aftermath.push({type:"wreck",at:u}),{attackerDestroyed:!0,otherDeadId:h.id}}return null}const C1=new Set(["rune_stone","ice_floe","skull_rock"]),R1=new Set(["naglfar","kraken_body","kraken_tentacle"]);class P1{static resolveHazardContacts(e,t,n){e.getCell(t.position).terrain==="skull_rock"&&t.loseLife(e);const s=[];for(const a of n){if(R1.has(a.type))continue;const o=e.getCell(a.position);o.terrain!==null&&C1.has(o.terrain)&&(e.clearEntity(a.position),s.push({...a.position}))}return s}}const Mm=[{dx:0,dy:-1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1},{dx:0,dy:1},{dx:-1,dy:1},{dx:-1,dy:0},{dx:-1,dy:-1}];function Jf(r,e){return I1(r,[e],t=>r.isPassableBy(t,"enemy"))}function Yf(r){const e=[];for(let t=0;t<r.height;t++)for(let n=0;n<r.width;n++)r.getCell({x:n,y:t}).entity==="wreck"&&e.push({x:n,y:t});return L1(r,e,t=>r.isPassableBy(t,"naglfar"))}function I1(r,e,t){const n=Array.from({length:r.height},()=>new Array(r.width).fill(1/0)),i=[];for(const a of e){if(!r.isValidCell(a))continue;const o=n[a.y];o!==void 0&&(o[a.x]=0,i.push({pos:a,cost:0}))}let s=0;for(;s<i.length;){const a=i[s++];if(a===void 0)continue;const{pos:o,cost:l}=a;for(const{dx:c,dy:h}of Mm){const u={x:o.x+c,y:o.y+h};if(!r.isValidCell(u)||!t(u))continue;const d=n[u.y];if(d===void 0)continue;const f=d[u.x];f===void 0||f<=l+1||(d[u.x]=l+1,i.push({pos:u,cost:l+1}))}}return n}function L1(r,e,t){var a,o;const n=Array.from({length:r.height},()=>new Array(r.width).fill(1/0)),i=r.width+r.height,s=Array.from({length:i+1},()=>[]);for(const l of e){if(!r.isValidCell(l))continue;const c=n[l.y];c!==void 0&&(c[l.x]=0,(a=s[0])==null||a.push(l))}for(let l=0;l<=i;l++){const c=s[l];if(c!==void 0)for(let h=0;h<c.length;h++){const u=c[h];if(u===void 0)continue;const d=n[u.y];if(d!==void 0&&!((d[u.x]??1/0)<l))for(const{dx:f,dy:p}of Mm){const _={x:u.x+f,y:u.y+p};if(!r.isValidCell(_)||!t(_))continue;const g=l+(f!==0&&p!==0?2:1);if(g>i)continue;const x=n[_.y];if(x===void 0)continue;const M=x[_.x];M!==void 0&&M<=g||(x[_.x]=g,(o=s[g])==null||o.push(_))}}}return n}const cl=[{dx:0,dy:-1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1},{dx:0,dy:1},{dx:-1,dy:1},{dx:-1,dy:0},{dx:-1,dy:-1}],N1=["N","NE","E","SE","S","SW","W","NW"];function U1(r){const{board:e,self:t}=r,n=[];for(const{dx:i,dy:s}of cl){const a={x:t.position.x+i,y:t.position.y+s};if(!e.isValidCell(a))continue;const o=e.getCell(a).entity;o!==null&&o!=="player"&&t.aiTier==="smart"&&!(t.type==="naglfar"&&o==="wreck")||n.push(a)}return n}function za(r){const{board:e,self:t}=r,n=t.type==="naglfar"?"naglfar":"enemy",i=[];for(const{dx:s,dy:a}of cl){const o={x:t.position.x+s,y:t.position.y+a};if(!e.isValidCell(o)||!e.isPassableBy(o,n))continue;const l=e.getCell(o).entity;l!==null&&l!=="player"&&t.aiTier==="smart"&&!(t.type==="naglfar"&&l==="wreck")||i.push(o)}return i}function yr(r,e){const t=e.x-r.self.position.x,n=e.y-r.self.position.y;for(let i=0;i<cl.length;i++){const s=cl[i];if(s.dx===t&&s.dy===n){r.self.facingDirection=N1[i];break}}r.board.clearEntity(r.self.position),r.self.position=e,r.board.setEntity(e,r.self.type,r.self.id)}function D1(r,e,t){switch(r){case"N":case"S":return t===0;case"E":case"W":return e===0;case"NE":case"SW":return e===t;case"NW":case"SE":return e+t===0}}class O1{constructor(e){Q(this,"range");this.range=e}tick(e){const t=e.player.position.x-e.self.position.x,n=e.player.position.y-e.self.position.y,i=Math.max(Math.abs(t),Math.abs(n));return i===0||i>this.range||!D1(e.self.facingDirection,t,n)?"FAILURE":"SUCCESS"}}class F1{constructor(e){Q(this,"sensorRange");this.sensorRange=e}tick(e){const t=e.wreckMap[e.self.position.y];if(t===void 0)return"FAILURE";const n=t[e.self.position.x];return n===void 0?"FAILURE":n<=this.sensorRange?"SUCCESS":"FAILURE"}}class B1{constructor(e){Q(this,"probability");this.probability=e}tick(e){return Math.random()<this.probability?"SUCCESS":"FAILURE"}}class z1{tick(e){const t=U1(e);if(t.length===0)return"FAILURE";const n=e.playerStartPos.x,i=e.playerStartPos.y;let s=null,a=1/0;for(const o of t){const l=Math.max(Math.abs(o.x-n),Math.abs(o.y-i));l<a?(a=l,s=o):l===a&&s!==null&&(o.x===n||o.y===i)&&(s=o)}return s===null?"FAILURE":(yr(e,s),"SUCCESS")}}class k1{tick(e){const t=za(e);if(t.length===0)return"FAILURE";const n=e.player.position.x,i=e.player.position.y;let s=null,a=1/0;for(const o of t){const l=Math.max(Math.abs(o.x-n),Math.abs(o.y-i));l<a&&(a=l,s=o)}return s===null?"FAILURE":(yr(e,s),"SUCCESS")}}class V1{tick(e){const t=za(e);if(t.length===0)return"FAILURE";const n=e.distanceMap[e.self.position.y],i=n!==void 0?n[e.self.position.x]??1/0:1/0;let s=null,a=i;for(const o of t){const l=e.distanceMap[o.y];if(l===void 0)continue;const c=l[o.x]??1/0;c<a&&(a=c,s=o)}return s===null?"FAILURE":(yr(e,s),"SUCCESS")}}function G1(r){const[e,t]=r.player.getBroadsideCells(),n=new Set;return r.board.isValidCell(e)&&n.add(`${e.x},${e.y}`),r.board.isValidCell(t)&&n.add(`${t.x},${t.y}`),n}class H1{tick(e){const t=za(e);if(t.length===0)return"FAILURE";const n=G1(e),i=t.filter(c=>!n.has(`${c.x},${c.y}`));if(i.length===0)return"FAILURE";const s=e.distanceMap[e.self.position.y],a=s!==void 0?s[e.self.position.x]??1/0:1/0;let o=null,l=a;for(const c of i){const h=e.distanceMap[c.y];if(h===void 0)continue;const u=h[c.x]??1/0;u<l&&(l=u,o=c)}return o===null?"FAILURE":(yr(e,o),"SUCCESS")}}class W1{tick(e){const t=za(e);if(t.length===0)return"FAILURE";let n=null,i=1/0;for(const s of t){const a=e.wreckMap[s.y];if(a===void 0)continue;const o=a[s.x]??1/0;o<i&&(i=o,n=s)}return n===null||i===1/0?"FAILURE":(yr(e,n),"SUCCESS")}}class Sm{tick(e){const t=za(e);if(t.length===0)return"FAILURE";const n=t[Math.floor(Math.random()*t.length)];return n===void 0?"FAILURE":(yr(e,n),"SUCCESS")}}class hl{tick(e){return"SUCCESS"}}class X1{tick(e){return e.board.clearEntity(e.self.position),"SUCCESS"}}class bl{constructor(e){Q(this,"children");this.children=e}tick(e){for(const t of this.children)if(t.tick(e)==="SUCCESS")return"SUCCESS";return"FAILURE"}}class q1{constructor(){Q(this,"bt");this.bt=new bl([new z1,new hl])}tick(e){return this.bt.tick(e)}}class J1{constructor(){Q(this,"bt");this.bt=new bl([new H1,new V1,new Sm])}tick(e){return this.bt.tick(e)}}class bm{constructor(e){Q(this,"children");this.children=e}tick(e){for(const t of this.children)if(t.tick(e)==="FAILURE")return"FAILURE";return"SUCCESS"}}class Y1{constructor(){Q(this,"bt");this.bt=new bl([new bm([new O1(Ou),new hl]),new k1,new hl])}tick(e){return this.bt.tick(e)}}const $1=3,K1=.25;class Z1{constructor(){Q(this,"inner",new W1)}tick(e){const t=this.findBestTarget(e),n=this.inner.tick(e);if(n==="SUCCESS"&&t){const i=e.self.position;e.board.setCellPassability(i,{isPassableByPlayer:!0,isPassableByEnemy:!0,isPassableByNaglfar:!0})}return n}findBestTarget(e){const t=[{dx:0,dy:-1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1},{dx:0,dy:1},{dx:-1,dy:1},{dx:-1,dy:0},{dx:-1,dy:-1}];let n=1/0,i=!1;for(const{dx:s,dy:a}of t){const o=e.self.position.x+s,l=e.self.position.y+a;if(!e.board.isValidCell({x:o,y:l})||!e.board.isPassableBy({x:o,y:l},"naglfar"))continue;const c=e.wreckMap[l];if(c===void 0)continue;const h=c[o]??1/0;h<n&&(n=h,i=Di.isWreck(e.board,{x:o,y:l}))}return i}}class wm{constructor(e=K1){Q(this,"tree");this.tree=new bl([new bm([new F1($1),new B1(e),new X1]),new Z1,new Sm])}tick(e){return this.tree.tick(e)}}class Q1{constructor(){Q(this,"state_","dormant");Q(this,"tentacleCount_",0);Q(this,"activeCells",[])}get state(){return this.state_}activate(e){this.state_="warning",this.tentacleCount_=e,this.activeCells=[]}tick(e,t,n,i){switch(this.state_){case"dormant":return;case"warning":this.tickWarning(i);break;case"bubbles":this.tickBubbles(e,i);break;case"striking":this.tickStriking(e,t,n,i);break;case"retreating":this.tickRetreating(e,i);break}}tickWarning(e){e.beforemath.push({type:"kraken_warn"}),this.state_="bubbles"}tickBubbles(e,t){const n=j1(e,this.tentacleCount_);for(const i of n)e.setTerrain(i,"kraken_bubble");this.activeCells=n,t.beforemath.push({type:"kraken_bubbles",cells:[...n]}),this.state_="striking"}tickStriking(e,t,n,i){const s=$f(e,"kraken_bubble");for(const a of s){e.clearTerrain(a),e.setTerrain(a,"kraken_tentacle");const o=e.getCell(a);if(o.entity!=="naglfar"){if(o.entity==="player"){const l={...a};e.clearEntity(a);const c=e.findRandomSafeCell()??e.findRandomCellWithoutPlayerHazards()??e.findRandomValidCell();t.position={...c},e.setEntity(t.position,"player",t.id),t.loseLife(e),i.aftermath.push({type:"player_respawn",from:l,to:{...t.position},facingDirection:t.facingDirection,cause:"kraken_tentacle",respawning:t.lives>0}),i.aftermath.push({type:"life_lost"});continue}o.entity!==null&&(Di.placeWreck(e,a),i.aftermath.push({type:"wreck",at:a}))}}this.activeCells=s,i.beforemath.push({type:"kraken_tentacles",cells:[...s]}),this.state_="retreating"}tickRetreating(e,t){const n=$f(e,"kraken_tentacle");for(const i of n)e.clearTerrain(i);t.beforemath.push({type:"kraken_retreat",cells:[...n]}),this.activeCells=[],this.state_="dormant"}}function j1(r,e){const t=[];for(let n=0;n<r.height;n++)for(let i=0;i<r.width;i++)r.getCell({x:i,y:n}).terrain===null&&t.push({x:i,y:n});for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1)),s=t[n],a=t[i];s!==void 0&&a!==void 0&&(t[n]=a,t[i]=s)}return t.slice(0,e)}function $f(r,e){const t=[];for(let n=0;n<r.height;n++)for(let i=0;i<r.width;i++)r.getCell({x:i,y:n}).terrain===e&&t.push({x:i,y:n});return t}const eE=new Set(["draugr","jarl","berserker"]);class tE{constructor(e,t,n=[],i=null,s=null,a=null,o=null){Q(this,"board");Q(this,"player");Q(this,"liveEnemies");Q(this,"enemyBTs");Q(this,"naglfar");Q(this,"naglfaBT");Q(this,"kraken");Q(this,"hints");Q(this,"distanceMap_");Q(this,"wreckMap_");this.board=e,this.player=t,this.liveEnemies=[...n],this.naglfar=i,this.naglfaBT=i!==null?s??new wm:null,this.kraken=a??new Q1,this.hints=o;const l=new Map;for(const c of n)l.set(c.id,Zf(c.type));this.enemyBTs=l,this.distanceMap_=Jf(e,t.position),this.wreckMap_=Yf(e)}get distanceMap(){return this.distanceMap_}get enemyCount(){return this.countEnemies()}addEnemies(e){for(const t of e)this.liveEnemies.push(t),this.enemyBTs.set(t.id,Zf(t.type))}activateKraken(e){this.kraken.activate(e)}processTurn(e){var a,o;const t={beforemath:[],attack:null,enemyAttacks:[],directionChanges:[],moves:[],aftermath:[]};if(e.type==="move"){const l=Kf(this.player.position,e.direction);if(this.board.isValidCell(l)){const c=this.board.getCell(l).entity;if(c==="draugr"||c==="jarl"||c==="berserker"||c==="naglfar")return{result:this.stepWinLossCheck(),transition:t}}}if((a=this.hints)==null||a.beginTurn(t,e),this.kraken.tick(this.board,this.player,this.liveEnemies,t),this.pruneDeadEnemies(),e.type==="move"){const l=this.player.facingDirection,c={...this.player.position};this.stepPlayerMove(e.direction);const h={...this.player.position};l!==this.player.facingDirection&&t.directionChanges.push({shipId:this.player.id,shipType:"player",at:c,from:l,to:this.player.facingDirection}),(c.x!==h.x||c.y!==h.y)&&t.moves.push({shipId:this.player.id,shipType:"player",facingDirection:this.player.facingDirection,from:c,to:h,endsInCollision:!1,consumedWreck:!1}),this.stepPlayerMaelstromContact(t)}else this.stepArrowFire(t);this.pruneDeadEnemies(),this.stepRebuildMaps(),this.stepEnemiesMove(t),this.stepBerserkerFire(t);const n={...this.player.position},i=this.board.getCell(n).terrain==="skull_rock",s=P1.resolveHazardContacts(this.board,this.player,[...this.liveEnemies]);for(const l of s)t.aftermath.push({type:"ship_destroyed",at:l});return i&&(t.aftermath.push({type:"ship_destroyed",at:n}),t.aftermath.push({type:"player_respawn",from:n,to:{...this.player.position},facingDirection:this.player.facingDirection,cause:"skull_rock",respawning:this.player.lives>0}),this.player.lives===0&&this.board.getCell(n).entityId===this.player.id&&this.board.clearEntity(n),t.aftermath.push({type:"life_lost"})),this.pruneDeadEnemies(),(o=this.hints)==null||o.endTurn(t,this.board,this.player),{result:this.stepWinLossCheck(),transition:t}}stepPlayerMove(e){this.player.facingDirection=e;const t=this.player.position,n=Kf(t,e);this.board.isValidCell(n)&&this.board.isPassableBy(n,"player")&&(this.board.clearEntity(t),this.player.position=n,this.board.setEntity(n,"player",this.player.id))}stepPlayerMaelstromContact(e){if(this.board.getCell(this.player.position).terrain==="maelstrom"){const n={...this.player.position};this.board.clearEntity(this.player.position);const i=this.board.findRandomSafeCell(vm)??this.board.findRandomSafeCell()??this.board.findRandomCellWithoutPlayerHazards()??this.board.findRandomValidCell();this.player.position={...i},this.board.setEntity(this.player.position,"player",this.player.id),e.aftermath.push({type:"maelstrom_teleport",from:n,to:{...this.player.position},facingDirection:this.player.facingDirection})}}stepArrowFire(e){const{hits:t,broadsideCells:n}=E1(this.player,this.board);e.attack={attackType:"arrow_broadside",attacker:{shipId:this.player.id,at:{...this.player.position}},targets:n,hits:[...t]};for(const i of t)Di.placeWreck(this.board,i),e.aftermath.push({type:"wreck",at:i})}pruneDeadEnemies(){this.liveEnemies=this.liveEnemies.filter(e=>{const t=this.board.getCell(e.position);return t.entity===e.type&&t.entityId===e.id})}stepRebuildMaps(){this.distanceMap_=Jf(this.board,this.player.position),this.wreckMap_=Yf(this.board)}stepEnemiesMove(e){const t={...this.player.position},n=[...this.liveEnemies].sort((o,l)=>{const c=Math.max(Math.abs(o.position.x-t.x),Math.abs(o.position.y-t.y)),h=Math.max(Math.abs(l.position.x-t.x),Math.abs(l.position.y-t.y));return c-h}),i=new Map(this.liveEnemies.map(o=>[o.id,{...o.position}])),s=new Set;for(let o=0;o<this.board.height;o++)for(let l=0;l<this.board.width;l++)Di.isWreck(this.board,{x:l,y:o})&&s.add(`${l},${o}`);const a=new Set;if(this.naglfar!==null&&this.naglfaBT!==null){const o=this.naglfar,l=o.facingDirection,c={...o.position},h=this.board.getCell(c).entity==="naglfar"&&this.board.getCell(c).entityId===o.id,u={board:this.board,player:this.player,playerStartPos:t,self:o,distanceMap:this.distanceMap_,wreckMap:this.wreckMap_};this.naglfaBT.tick(u);const d=c.x!==o.position.x||c.y!==o.position.y,f=this.board.getCell(o.position).entity==="naglfar"&&this.board.getCell(o.position).entityId===o.id;if(h&&!d&&!f?e.aftermath.push({type:"naglfar_vanish",at:{...c}}):!h&&f&&e.aftermath.push({type:"naglfar_appear",to:{...o.position},facingDirection:o.facingDirection}),d){const p=`${o.position.x},${o.position.y}`,_=s.has(p);_&&s.delete(p);const m=qf(o,this.board,this.player,null,this.liveEnemies,a,s,e);l!==o.facingDirection&&e.directionChanges.push({shipId:o.id,shipType:"naglfar",at:c,from:l,to:o.facingDirection}),e.moves.push({shipId:o.id,shipType:"naglfar",facingDirection:o.facingDirection,from:c,to:{...o.position},endsInCollision:m!==null,consumedWreck:_})}}for(const o of n){if(a.has(o.id))continue;const l=this.enemyBTs.get(o.id);if(l===void 0)continue;const c=o.facingDirection,h={board:this.board,player:this.player,playerStartPos:t,self:o,distanceMap:this.distanceMap_,wreckMap:this.wreckMap_};l.tick(h);const u=i.get(o.id);u!==void 0&&c!==o.facingDirection&&e.directionChanges.push({shipId:o.id,shipType:o.type,at:u,from:c,to:o.facingDirection});let d=null;if(u!==void 0&&(u.x!==o.position.x||u.y!==o.position.y)&&(d={shipId:o.id,shipType:o.type,facingDirection:o.facingDirection,from:u,to:{...o.position},endsInCollision:!1,consumedWreck:!1}),d!==null){const f=qf(o,this.board,this.player,this.naglfar,n,a,s,e);if(f!==null){d.endsInCollision=!0,f.attackerDestroyed&&a.add(o.id),f.otherDeadId!==null&&a.add(f.otherDeadId),e.moves.push(d);continue}}d!==null&&e.moves.push(d)}this.liveEnemies=this.liveEnemies.filter(o=>!a.has(o.id))}stepBerserkerFire(e){for(const t of this.liveEnemies){if(t.type!=="berserker")continue;const n=w1(t,this.player,this.board,Ou);if(n===null)continue;e.enemyAttacks.push({attackType:"arrow_broadside",attacker:{shipId:t.id,at:{...t.position}},targets:n.targetCells,hits:[{...this.player.position}]});const i={...this.player.position};this.player.loseLife(this.board),e.aftermath.push({type:"player_respawn",from:i,to:{...this.player.position},facingDirection:this.player.facingDirection,cause:"berserker_fire",respawning:this.player.lives>0}),this.player.lives===0&&this.board.getCell(i).entityId===this.player.id&&this.board.clearEntity(i),e.aftermath.push({type:"life_lost"})}}stepWinLossCheck(){return this.player.lives<=0?"GAME_OVER":this.countEnemies()===0?"LEVEL_COMPLETE":"PLAYING"}countEnemies(){let e=0;for(let t=0;t<this.board.height;t++)for(let n=0;n<this.board.width;n++){const i=this.board.getCell({x:n,y:t});i.entity!==null&&eE.has(i.entity)&&e++}return e}}const nE={N:{dx:0,dy:-1},NE:{dx:1,dy:-1},E:{dx:1,dy:0},SE:{dx:1,dy:1},S:{dx:0,dy:1},SW:{dx:-1,dy:1},W:{dx:-1,dy:0},NW:{dx:-1,dy:-1}};function Kf(r,e){const{dx:t,dy:n}=nE[e];return{x:r.x+t,y:r.y+n}}function Zf(r){switch(r){case"draugr":return new q1;case"jarl":return new J1;case"berserker":return new Y1;default:return new hl}}class iE{constructor(e){Q(this,"hints");Q(this,"fired");Q(this,"pending");this.hints=e,this.fired=new Set,this.pending=[];const t=this.hints.filter(n=>n.trigger==="level_start");if(t.length>0){for(const n of t)this.pending.push(n.text);this.fired.add("level_start")}}drainPending(){const e=[...this.pending];return this.pending.length=0,e}beginTurn(e,t){for(const n of this.pending)e.beforemath.push({type:"tutorial_prompt",message:n});if(this.pending.length=0,!this.fired.has("first_move")&&t.type==="move"){this.fired.add("first_move");for(const n of this.hints)n.trigger==="first_move"&&e.beforemath.push({type:"tutorial_prompt",message:n.text})}if(!this.fired.has("first_fire")&&t.type==="fire"){this.fired.add("first_fire");for(const n of this.hints)n.trigger==="first_fire"&&e.beforemath.push({type:"tutorial_prompt",message:n.text})}}endTurn(e,t,n){if(!this.fired.has("player_hit")&&e.aftermath.some(i=>i.type==="life_lost")){this.fired.add("player_hit");for(const i of this.hints)i.trigger==="player_hit"&&this.pending.push(i.text)}if(!this.fired.has("first_maelstrom_step")&&e.aftermath.some(i=>i.type==="maelstrom_teleport")){this.fired.add("first_maelstrom_step");for(const i of this.hints)i.trigger==="first_maelstrom_step"&&this.pending.push(i.text)}if(!this.fired.has("first_enemy_killed")&&e.aftermath.some(i=>i.type==="wreck"||i.type==="ship_destroyed")){this.fired.add("first_enemy_killed");for(const i of this.hints)i.trigger==="first_enemy_killed"&&this.pending.push(i.text)}if(!this.fired.has("first_wreck_consumed")&&e.moves.some(i=>i.consumedWreck)){this.fired.add("first_wreck_consumed");for(const i of this.hints)i.trigger==="first_wreck_consumed"&&this.pending.push(i.text)}if(!this.fired.has("first_enemy_adjacent")&&this.isEnemyAdjacent(t,n)){this.fired.add("first_enemy_adjacent");for(const i of this.hints)i.trigger==="first_enemy_adjacent"&&this.pending.push(i.text)}}onLevelEnd(){if(!this.fired.has("level_end")){this.fired.add("level_end");for(const e of this.hints)e.trigger==="level_end"&&this.pending.push(e.text)}}isEnemyAdjacent(e,t){const{x:n,y:i}=t.position;for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++){if(a===0&&s===0)continue;const o=n+a,l=i+s;if(!e.isValidCell({x:o,y:l}))continue;const h=e.getCell({x:o,y:l}).entity;if(h!==null&&h!=="player"&&h!=="wreck"&&h!=="rune_stone"&&h!=="maelstrom"&&h!=="ice_floe"&&h!=="skull_rock"&&h!=="kraken_bubble")return!0}return!1}}class sE{constructor(e){Q(this,"config");Q(this,"wave_");Q(this,"totalMoves_");Q(this,"movesSinceLastWave_");Q(this,"krakenAppearances_");this.config=e,this.wave_=1,this.totalMoves_=0,this.movesSinceLastWave_=0,this.krakenAppearances_=0}get wave(){return this.wave_}get totalMoves(){return this.totalMoves_}get movesSinceLastWave(){return this.movesSinceLastWave_}get phase(){return this.wave_>=this.config.phase2StartWave?2:1}afterTurn(e){e.didPlayerMove&&(this.totalMoves_++,this.movesSinceLastWave_++);const t=this.shouldAdvanceWave(e.enemyCount)?this.advanceWave():null,n=this.checkKrakenSchedule();return{waveComplete:t!==null,spawn:t,krakenActivation:n}}shouldAdvanceWave(e){return this.phase===1?e===0:this.movesSinceLastWave_>=this.movesForWave(this.wave_)}advanceWave(){return this.wave_++,this.movesSinceLastWave_=0,{wave:this.wave_,requests:this.compositionForWave(this.wave_)}}checkKrakenSchedule(){const e=this.config.krakenInterval??10;if(e<=0||this.wave_%e!==0)return null;const t=this.config.krakenInitialTentacles??3;return this.krakenAppearances_++,{tentacleCount:t+(this.krakenAppearances_-1)}}movesForWave(e){return this.config.movesPerWave}compositionForWave(e){const t=2+Math.floor(e/3),n=Math.floor(e/4),i=Math.floor(e/7);return rE([{type:"draugr",count:t},{type:"berserker",count:n},{type:"jarl",count:i}],this.config.maxEnemiesOnBoard)}}function rE(r,e){let t=e;const n=[];for(const i of r){if(t<=0)break;const s=Math.min(i.count,t);s>0&&(n.push({type:i.type,count:s}),t-=s)}return n}class Jo{constructor(e,t,n,i="S",s="dumb"){Q(this,"id");Q(this,"type");Q(this,"aiTier");Q(this,"position");Q(this,"facingDirection");this.id=e,this.type=t,this.aiTier=s,this.position=n,this.facingDirection=i}}const aE={draugr:"dumb",jarl:"smart",berserker:"smart"};class oE{static spawn(e,t,n,i,s){const a=lE(e,t.position,i),o=[];let l=0,c=s;for(const h of n)for(let u=0;u<h.count;u++){if(a.length===0){l++;continue}const d=Math.floor(Math.random()*a.length),f=a[d];if(f===void 0){l++;continue}a.splice(d,1);const p=`${h.type}-${c++}`,_=aE[h.type],m=new Jo(p,h.type,f,"S",_);e.setEntity(f,h.type,p),o.push(m)}return{spawned:o,failed:l}}}function lE(r,e,t){const n=[];for(let i=0;i<r.height;i++)for(let s=0;s<r.width;s++){const a={x:s,y:i},o=r.getCell(a);!o.isPassableByEnemy||o.entity!==null||Math.max(Math.abs(s-e.x),Math.abs(i-e.y))<t||n.push(a)}return n}class cE{constructor(e,t=Math.random){this.flickerRate=e,this.rng=t}flicker(e){const t=[];for(let i=0;i<e.height;i++)for(let s=0;s<e.width;s++)e.getCell({x:s,y:i}).terrain==="maelstrom"&&this.rng()<this.flickerRate&&(e.clearTerrain({x:s,y:i}),t.push({x:s,y:i}));let n=!1;return()=>{if(!n){n=!0;for(const i of t)e.setTerrain(i,"maelstrom")}}}}const hE={"0,-1":"N","1,-1":"NE","1,0":"E","1,1":"SE","0,1":"S","-1,1":"SW","-1,0":"W","-1,-1":"NW"},uE=65484,dE=16755200,fE=16720418,pE=.02,Cc=.1,mE=.5,gE=.75,_E={N:[{dx:1,dy:0},{dx:-1,dy:0}],S:[{dx:1,dy:0},{dx:-1,dy:0}],E:[{dx:0,dy:1},{dx:0,dy:-1}],W:[{dx:0,dy:1},{dx:0,dy:-1}],NE:[{dx:1,dy:1},{dx:-1,dy:-1}],SW:[{dx:1,dy:1},{dx:-1,dy:-1}],NW:[{dx:1,dy:-1},{dx:-1,dy:1}],SE:[{dx:1,dy:-1},{dx:-1,dy:1}]},Qf=new Hy,yE=new Ii(new I(0,1,0),0);class xE{constructor(e,t,n,i,s,a){Q(this,"manager");Q(this,"player");Q(this,"board");Q(this,"enemies");Q(this,"scene");Q(this,"getCamera");Q(this,"isLocked");Q(this,"hoveredCell");Q(this,"hoverMesh");Q(this,"dangerMeshes");Q(this,"pulseMaterials");Q(this,"pulseFrameId");Q(this,"pulseStart");Q(this,"handleMouseMove",e=>{if(this.isLocked){this.clearHover();return}const t=this.mouseEventToCell(e),n=t!==null&&t.x===this.player.position.x&&t.y===this.player.position.y,i=t!==null&&this.board.isValidCell(t)&&this.board.isPassableBy(t,"player")&&this.isAdjacentToPlayer(t);if(!n&&!i){this.clearHover();return}this.hoveredCell!==null&&t!==null&&this.hoveredCell.x===t.x&&this.hoveredCell.y===t.y||(this.hoveredCell=t,this.drawHover(t,n?dE:uE))});Q(this,"handleClick",e=>{if(this.isLocked)return;const t=this.mouseEventToCell(e);if(t===null||!this.board.isValidCell(t))return;const n=this.cellToIntent(t);n!==null&&(this.clearHover(),this.manager.onMove(n))});Q(this,"handleMouseLeave",()=>{this.clearHover()});this.manager=e,this.player=t,this.board=n,this.enemies=i,this.scene=s,this.getCamera=a,this.isLocked=!1,this.hoveredCell=null,this.hoverMesh=null,this.dangerMeshes=[],this.pulseMaterials=[],this.pulseFrameId=null,this.pulseStart=0}attach(e){e.addEventListener("mousemove",this.handleMouseMove),e.addEventListener("click",this.handleClick),e.addEventListener("mouseleave",this.handleMouseLeave)}detach(e){e.removeEventListener("mousemove",this.handleMouseMove),e.removeEventListener("click",this.handleClick),e.removeEventListener("mouseleave",this.handleMouseLeave),this.clearHover()}mouseEventToCell(e){const n=e.target.getBoundingClientRect(),i=(e.clientX-n.left)/n.width*2-1,s=-((e.clientY-n.top)/n.height)*2+1;Qf.setFromCamera(new ne(i,s),this.getCamera());const a=new I;if(!Qf.ray.intersectPlane(yE,a))return null;const l=Math.round(a.x/Pt),c=Math.round(a.z/Pt);return this.board.isValidCell({x:l,y:c})?{x:l,y:c}:null}cellToIntent(e){if(e.x===this.player.position.x&&e.y===this.player.position.y)return{type:"fire"};if(!this.board.isPassableBy(e,"player")||!this.isAdjacentToPlayer(e))return null;const n=e.x-this.player.position.x,i=e.y-this.player.position.y,s=hE[`${n},${i}`];return s===void 0?null:{type:"move",direction:s}}isAdjacentToPlayer(e){const t=Math.abs(e.x-this.player.position.x),n=Math.abs(e.y-this.player.position.y);return t<=1&&n<=1&&!(t===0&&n===0)}drawHover(e,t){this.clearHover(),this.hoverMesh=this.makeTileMesh(e,t),this.scene.add(this.hoverMesh),this.pulseMaterials.push(this.hoverMesh.material);for(const n of this.berserkerDangerCells()){const i=this.makeTileMesh(n,fE);this.scene.add(i),this.dangerMeshes.push(i),this.pulseMaterials.push(i.material)}this.startPulse()}clearHover(){this.stopPulse(),this.hoverMesh!==null&&(this.scene.remove(this.hoverMesh),this.hoverMesh=null);for(const e of this.dangerMeshes)this.scene.remove(e);this.dangerMeshes=[],this.pulseMaterials=[],this.hoveredCell=null}makeTileMesh(e,t){const n=new Fi(Pt*.95,Pt*.95);n.rotateX(-Math.PI/2);const i=new zt({color:t,transparent:!0,opacity:Cc}),s=new Mt(n,i);return s.position.set(e.x*Pt,pE,e.y*Pt),s}startPulse(){this.pulseStart=performance.now();const e=()=>{const t=(performance.now()-this.pulseStart)/1e3,n=.5+.5*Math.sin(2*Math.PI*gE*t-Math.PI/2),i=Cc+(mE-Cc)*n;for(const s of this.pulseMaterials)s.opacity=i;this.pulseFrameId=requestAnimationFrame(e)};this.pulseFrameId=requestAnimationFrame(e)}stopPulse(){this.pulseFrameId!==null&&(cancelAnimationFrame(this.pulseFrameId),this.pulseFrameId=null)}berserkerDangerCells(){const e=[];for(const t of this.enemies){if(t.type!=="berserker")continue;const n=this.board.getCell(t.position);if(n.entity!=="berserker"||n.entityId!==t.id)continue;const i=_E[t.facingDirection];for(const s of i)for(let a=1;a<=Ou;a++){const o={x:t.position.x+s.dx*a,y:t.position.y+s.dy*a};this.board.isValidCell(o)&&e.push(o)}}return e}}const vE=[{label:"↖",direction:"NW"},{label:"↑",direction:"N"},{label:"↗",direction:"NE"},{label:"←",direction:"W"},{label:"→",direction:"E"},{label:"↙",direction:"SW"},{label:"↓",direction:"S"},{label:"↘",direction:"SE"}];class ME{constructor(e){Q(this,"manager");Q(this,"container");Q(this,"isLocked");this.manager=e,this.container=null,this.isLocked=!1}attach(){const e=document.createElement("div");e.style.cssText=["position:fixed","bottom:24px","left:50%","transform:translateX(-50%)","display:grid","grid-template-columns:repeat(3,56px)","grid-template-rows:repeat(3,56px)","gap:4px","z-index:1000","touch-action:none"].join(";");const t={NW:[1,1],N:[1,2],NE:[1,3],W:[2,1],E:[2,3],SW:[3,1],S:[3,2],SE:[3,3]};for(const{label:i,direction:s}of vE){const a=document.createElement("button");a.textContent=i,a.setAttribute("aria-label",s);const[o,l]=t[s];a.style.cssText=[`grid-row:${o}`,`grid-column:${l}`,"width:56px","height:56px","font-size:20px","background:rgba(255,255,255,0.15)","border:1px solid rgba(255,255,255,0.3)","border-radius:8px","color:#fff","cursor:pointer","user-select:none","-webkit-tap-highlight-color:transparent"].join(";"),a.addEventListener("touchstart",c=>{c.preventDefault(),this.isLocked||this.manager.onMove({type:"move",direction:s})},{passive:!1}),e.appendChild(a)}const n=document.createElement("button");n.textContent="🔥",n.setAttribute("aria-label","Fire"),n.style.cssText=["grid-row:2","grid-column:2","width:56px","height:56px","font-size:20px","background:rgba(255,170,0,0.25)","border:1px solid rgba(255,170,0,0.6)","border-radius:8px","color:#fff","cursor:pointer","user-select:none","-webkit-tap-highlight-color:transparent"].join(";"),n.addEventListener("touchstart",i=>{i.preventDefault(),this.isLocked||this.manager.onMove({type:"fire"})},{passive:!1}),e.appendChild(n),document.body.appendChild(e),this.container=e}detach(){var e;(e=this.container)==null||e.remove(),this.container=null}}class SE{constructor(){Q(this,"onMove");Q(this,"desktop");Q(this,"mobile");this.onMove=()=>{},this.desktop=null,this.mobile=null}init(e,t,n,i,s,a=[]){window.matchMedia("(pointer: coarse)").matches?(this.mobile=new ME(this),this.mobile.attach()):(this.desktop=new xE(this,t,n,a,i,s),this.desktop.attach(e))}lock(){this.desktop!==null&&(this.desktop.isLocked=!0),this.mobile!==null&&(this.mobile.isLocked=!0)}unlock(){this.desktop!==null&&(this.desktop.isLocked=!1),this.mobile!==null&&(this.mobile.isLocked=!1)}}const bE=[{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0},{x:-1,y:-1}];function wE(r,e){return{position:{x:r,y:e},entity:null,entityId:null,terrain:null,isPassableByPlayer:!0,isPassableByEnemy:!0,isPassableByNaglfar:!0}}class jf{constructor(e,t,n){Q(this,"grid");Q(this,"width");Q(this,"height");Q(this,"region");this.width=e,this.height=t,this.region=n,this.grid=Array.from({length:t},(i,s)=>Array.from({length:e},(a,o)=>wE(o,s)))}getCell(e){if(!this.isValidCell(e))throw new xt("Position out of bounds",{pos:e,width:this.width,height:this.height});const t=this.grid[e.y];if(t===void 0)throw new xt("Grid row missing",{pos:e});const n=t[e.x];if(n===void 0)throw new xt("Grid cell missing",{pos:e});return n}getCellsInRow(e){if(e<0||e>=this.height)throw new xt("Row index out of bounds",{y:e,height:this.height});const t=this.grid[e];if(t===void 0)throw new xt("Grid row missing",{y:e});return t}getNeighbors(e){const t=[];for(const n of bE){const i={x:e.x+n.x,y:e.y+n.y};this.isValidCell(i)&&t.push(this.getCell(i))}return t}isValidCell(e){return e.x>=0&&e.x<this.width&&e.y>=0&&e.y<this.height}isPassableBy(e,t){const n=this.getCell(e);switch(t){case"player":return n.isPassableByPlayer;case"enemy":return n.isPassableByEnemy;case"naglfar":return n.isPassableByNaglfar}}isSafeCell(e){if(!this.isValidCell(e))return!1;const t=this.getCell(e);return t.entity===null&&t.terrain===null&&t.isPassableByPlayer}setEntity(e,t,n){const i=this.getCell(e);i.entity=t,i.entityId=n}clearEntity(e){const t=this.getCell(e);t.entity=null,t.entityId=null}setTerrain(e,t){const n=this.getCell(e);n.terrain=t}clearTerrain(e){const t=this.getCell(e);t.terrain=null}setCellPassability(e,t){const n=this.getCell(e);n.isPassableByPlayer=t.isPassableByPlayer,n.isPassableByEnemy=t.isPassableByEnemy,n.isPassableByNaglfar=t.isPassableByNaglfar}findRandomSafeCell(e=0){const t=[];if(e>0)for(let s=0;s<this.height;s++)for(let a=0;a<this.width;a++){const o=this.grid[s],l=o==null?void 0:o[a];l!==void 0&&l.entity!==null&&t.push({x:a,y:s})}const n=[];for(let s=0;s<this.height;s++)for(let a=0;a<this.width;a++){const o={x:a,y:s};this.isSafeCell(o)&&(e>0&&t.some(c=>Math.max(Math.abs(a-c.x),Math.abs(s-c.y))<e)||n.push(o))}if(n.length===0)return null;const i=Math.floor(Math.random()*n.length);return n[i]??null}findRandomCellWithoutPlayerHazards(){const e=[];for(let n=0;n<this.height;n++)for(let i=0;i<this.width;i++){const s={x:i,y:n},a=this.getCell(s);a.terrain!=="skull_rock"&&a.isPassableByPlayer&&e.push(s)}if(e.length===0)return null;const t=Math.floor(Math.random()*e.length);return e[t]??null}findRandomValidCell(){const e=Math.floor(Math.random()*this.width),t=Math.floor(Math.random()*this.height);return{x:e,y:t}}}const EE={N:{dx:0,dy:-1},NE:{dx:1,dy:-1},E:{dx:1,dy:0},SE:{dx:1,dy:1},S:{dx:0,dy:1},SW:{dx:-1,dy:1},W:{dx:-1,dy:0},NW:{dx:-1,dy:-1}};class ep{constructor(e,t,n){Q(this,"id");Q(this,"type","player");Q(this,"position");Q(this,"facingDirection");Q(this,"lives");this.id=e,this.position={...t},this.facingDirection=n,this.lives=xm}getBroadsideCells(){const{dx:e,dy:t}=EE[this.facingDirection],{x:n,y:i}=this.position;return[{x:n+t,y:i-e},{x:n-t,y:i+e}]}loseLife(e){this.lives>0&&(this.lives-=1),this.lives>0&&this.respawn(e)}respawn(e){const t=this.position;e.getCell(t).entityId===this.id&&e.clearEntity(t);const n=e.findRandomSafeCell(vm)??e.findRandomSafeCell()??e.findRandomValidCell();if(!e.isValidCell(n))throw new xt("Respawn target is invalid after findRandomValidCell",{target:n});e.getCell(n).entity!==null&&e.clearEntity(n),this.position={...n},e.setEntity(this.position,"player",this.id)}}const Em=1,Tm=2,TE=3,AE=4,CE=5,RE=6,PE=7,Am=8,IE=9,tp=9,LE=[{dx:0,dy:-1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1},{dx:0,dy:1},{dx:-1,dy:1},{dx:-1,dy:0},{dx:-1,dy:-1}];class ul{static generate(e){if(e.layout!==void 0)return ul.fromLayout(e,e.layout);for(let t=0;t<e.maxRetries;t++){const n=ul.tryGenerate(e);if(n!==null)return n}throw new xt("LevelGenerator exhausted all retries",{maxRetries:e.maxRetries,config:e})}static fromLayout(e,t){const n=new jf(e.width,e.height,e.region),i=[],s={x:Math.floor(e.width/2),y:Math.floor(e.height/2)};for(let o=0;o<e.height;o++)for(let l=0;l<e.width;l++){if(l===s.x&&o===s.y)continue;const c=t[o];if(c===void 0)continue;const h=c[l]??0;switch(h){case AE:n.setTerrain({x:l,y:o},"rune_stone"),n.setCellPassability({x:l,y:o},{isPassableByPlayer:!1,isPassableByEnemy:!1,isPassableByNaglfar:!1});break;case CE:n.setTerrain({x:l,y:o},"maelstrom");break;case RE:n.setTerrain({x:l,y:o},"ice_floe"),n.setCellPassability({x:l,y:o},{isPassableByPlayer:!1,isPassableByEnemy:!1,isPassableByNaglfar:!1});break;case PE:n.setTerrain({x:l,y:o},"skull_rock"),n.setCellPassability({x:l,y:o},{isPassableByPlayer:!0,isPassableByEnemy:!1,isPassableByNaglfar:!1});break;case IE:Di.placeWreck(n,{x:l,y:o});break;case Am:case Em:case Tm:case TE:{const u=OE(h),d=u==="draugr"?"dumb":"smart",f=`${u}-${i.length}`,p=new Jo(f,u,{x:l,y:o},Rc({x:l,y:o},s),d);n.setEntity({x:l,y:o},u,f),i.push(p);break}}}const a=new ep("player-0",s,Xf);return n.setEntity(s,"player",a.id),{board:n,player:a,enemies:i}}static tryGenerate(e){const t=new jf(e.width,e.height,e.region),n={x:Math.floor(e.width/2),y:Math.floor(e.height/2)};e.hasMaelstrom&&NE(t);const i=[{type:"rune_stone",count:e.runeStoneCount,blockPlayer:!0,blockEnemy:!0},{type:"ice_floe",count:e.iceFloeCount,blockPlayer:!0,blockEnemy:!0},{type:"skull_rock",count:e.skullRockCount,blockPlayer:!1,blockEnemy:!0}];for(const{type:u,count:d,blockPlayer:f,blockEnemy:p}of i){let _=0,m=0;const g=e.width*e.height*4;for(;_<d&&m<g;){m++;const x=UE(t);x.x===n.x&&x.y===n.y||t.getCell(x).terrain===null&&(t.setTerrain(x,u),(f||p)&&t.setCellPassability(x,{isPassableByPlayer:!f,isPassableByEnemy:!p,isPassableByNaglfar:!1}),_++)}if(_<d)return null}const s=n,a=new ep("player-0",s,Xf);t.setEntity(s,"player",a.id);const o=DE(t,s);if(o.size<e.minReachableCells)return null;const l=FE(e),c=[],h=new Set;h.add(ji(s));for(const u of l){const d=[...o].filter(m=>h.has(ji(m))||t.getCell(m).terrain!==null||e.hasMaelstrom&&(m.x===0&&m.y===0||m.x===t.width-1&&m.y===0||m.x===0&&m.y===t.height-1||m.x===t.width-1&&m.y===t.height-1)?!1:Math.max(Math.abs(m.x-s.x),Math.abs(m.y-s.y))>=e.minEnemyDistance);if(d.length===0)return null;const f=d[Math.floor(Math.random()*d.length)];if(f===void 0)return null;const p=`${u.type}-${c.length}`,_=new Jo(p,u.type,f,Rc(f,s),u.aiTier);t.setEntity(f,u.type,p),c.push(_),h.add(ji(f))}if(e.naglfarEnabled){const u=[...o].filter(p=>h.has(ji(p))||t.getCell(p).terrain!==null||e.hasMaelstrom&&(p.x===0&&p.y===0||p.x===t.width-1&&p.y===0||p.x===0&&p.y===t.height-1||p.x===t.width-1&&p.y===t.height-1)?!1:Math.max(Math.abs(p.x-s.x),Math.abs(p.y-s.y))>=e.minEnemyDistance);if(u.length===0)return null;const d=u[Math.floor(Math.random()*u.length)];if(d===void 0)return null;const f=new Jo("naglfar-0","naglfar",d,Rc(d,s),"smart");t.setEntity(d,"naglfar","naglfar-0"),c.push(f),h.add(ji(d))}return{board:t,player:a,enemies:c}}}function NE(r){const e=[{x:0,y:0},{x:r.width-1,y:0},{x:0,y:r.height-1},{x:r.width-1,y:r.height-1}];for(const t of e)r.setTerrain(t,"maelstrom")}function UE(r){return{x:Math.floor(Math.random()*r.width),y:Math.floor(Math.random()*r.height)}}function Rc(r,e){const t=Math.sign(e.x-r.x),n=Math.sign(e.y-r.y);return t===0&&n===-1?"N":t===1&&n===-1?"NE":t===1&&n===0?"E":t===1&&n===1?"SE":t===0&&n===1?"S":t===-1&&n===1?"SW":t===-1&&n===0?"W":t===-1&&n===-1?"NW":"S"}function DE(r,e){const t=new Set,n=new Set,i=[e];n.add(ji(e)),t.add(e);let s=0;for(;s<i.length;){const a=i[s++];if(a!==void 0)for(const{dx:o,dy:l}of LE){const c={x:a.x+o,y:a.y+l},h=ji(c);n.has(h)||r.isValidCell(c)&&r.isPassableBy(c,"player")&&(n.add(h),t.add(c),i.push(c))}}return t}function ji(r){return`${r.x},${r.y}`}function OE(r){return r===Em?"draugr":r===Tm?"jarl":r===Am?"naglfar":"berserker"}function FE(r){const e=[];for(let t=0;t<r.draugrCount;t++)e.push({type:"draugr",aiTier:"dumb"});for(let t=0;t<r.jarlCount;t++)e.push({type:"jarl",aiTier:"smart"});for(let t=0;t<r.berserkerCount;t++)e.push({type:"berserker",aiTier:"smart"});return e}const BE=["fjords","open_norse_sea","midgard_shores","helheim_waters","ragnarok_waters"],zE=["draugr","jarl","berserker"],kE=["level_start","first_move","first_fire","first_enemy_adjacent","first_enemy_killed","first_wreck_consumed","player_hit","first_maelstrom_step","level_end"];function _n(r,e){if(typeof r!="number")throw new xt(`Level file missing or invalid field: ${e}`,{field:e,value:r});return r}function Pc(r,e){if(typeof r!="boolean")throw new xt(`Level file missing or invalid field: ${e}`,{field:e,value:r});return r}function dl(r,e){if(typeof r!="string")throw new xt(`Level file missing or invalid field: ${e}`,{field:e,value:r});return r}function VE(r){return BE.includes(r)}function GE(r){return zE.includes(r)}function HE(r){return kE.includes(r)}function WE(r){if(!Array.isArray(r))throw new xt('Level file field "enemies" must be an array',{enemies:r});return r.map((e,t)=>{if(typeof e!="object"||e===null)throw new xt(`Level file enemies[${t}] is not an object`,{entry:e});const n=e,i=dl(n.type,`enemies[${t}].type`),s=_n(n.count,`enemies[${t}].count`);if(!GE(i))throw new xt(`Level file enemies[${t}].type is not a valid enemy type`,{type:i});return{type:i,count:s}})}function XE(r,e,t){if(r!==void 0){if(!Array.isArray(r))throw new xt('Level file field "layout" must be an array of rows',{layout:r});if(r.length!==t)throw new xt('Level file "layout" row count does not match height',{expected:t,actual:r.length});return r.map((n,i)=>{if(!Array.isArray(n))throw new xt(`Level file layout[${i}] is not an array`,{row:n});if(n.length!==e)throw new xt(`Level file layout[${i}] length does not match width`,{expected:e,actual:n.length});return n.map((s,a)=>{if(typeof s!="number"||!Number.isInteger(s)||s<0||s>tp)throw new xt(`Level file layout[${i}][${a}] is not a valid cell code (0–${tp})`,{cell:s});return s})})}}function qE(r){if(r===void 0)return[];if(!Array.isArray(r))throw new xt('Level file field "hints" must be an array',{hints:r});return r.map((e,t)=>{if(typeof e!="object"||e===null)throw new xt(`Level file hints[${t}] is not an object`,{entry:e});const n=e,i=dl(n.trigger,`hints[${t}].trigger`),s=dl(n.text,`hints[${t}].text`);if(!HE(i))throw new xt(`Level file hints[${t}].trigger is not a valid HintTrigger`,{trigger:i});return{trigger:i,text:s}})}function JE(r){if(typeof r!="object"||r===null)throw new xt("Level file is not a JSON object");const e=r,t=dl(e.theme,"theme");if(!VE(t))throw new xt('Level file "theme" is not a valid Region',{theme:t});return{theme:t,width:_n(e.width,"width"),height:_n(e.height,"height"),wavesCount:_n(e.wavesCount,"wavesCount"),enemies:WE(e.enemies),runeStoneCount:_n(e.runeStoneCount,"runeStoneCount"),iceFloeCount:_n(e.iceFloeCount,"iceFloeCount"),skullRockCount:_n(e.skullRockCount,"skullRockCount"),flickerMaelstrom:Pc(e.flickerMaelstrom,"flickerMaelstrom"),hasMaelstrom:e.hasMaelstrom!==void 0?Pc(e.hasMaelstrom,"hasMaelstrom"):!0,naglfarEnabled:Pc(e.naglfarEnabled,"naglfarEnabled"),hints:qE(e.hints),layout:XE(e.layout,_n(e.width,"width"),_n(e.height,"height")),minReachableCells:_n(e.minReachableCells,"minReachableCells"),minEnemyDistance:_n(e.minEnemyDistance,"minEnemyDistance"),maxRetries:_n(e.maxRetries,"maxRetries"),naglfarVanishProbability:e.naglfarVanishProbability!==void 0?_n(e.naglfarVanishProbability,"naglfarVanishProbability"):void 0}}function Ic(r,e){const t=r.find(n=>n.type===e);return t!==void 0?t.count:0}function YE(r){return{width:r.width,height:r.height,region:r.theme,draugrCount:Ic(r.enemies,"draugr"),jarlCount:Ic(r.enemies,"jarl"),berserkerCount:Ic(r.enemies,"berserker"),runeStoneCount:r.runeStoneCount,iceFloeCount:r.iceFloeCount,skullRockCount:r.skullRockCount,minReachableCells:r.minReachableCells,minEnemyDistance:r.minEnemyDistance,maxRetries:r.maxRetries,wavesCount:r.wavesCount,flickerMaelstrom:r.flickerMaelstrom,hasMaelstrom:r.hasMaelstrom,naglfarEnabled:r.naglfarEnabled,hints:r.hints,...r.layout!==void 0&&{layout:r.layout},...r.naglfarVanishProbability!==void 0&&{naglfarVanishProbability:r.naglfarVanishProbability}}}async function $E(r){const e=`/levels/level-${r}.json`,t=await fetch(e);if(!t.ok)throw new xt(`Failed to load level ${r}`,{url:e,status:t.status});const n=await t.json(),i=JE(n);return YE(i)}class KE{constructor(){Q(this,"currentLevel_");Q(this,"unlockedLevels_");Q(this,"phase_");this.currentLevel_=1,this.unlockedLevels_=new Set([1]),this.phase_="menu"}get currentLevel(){return this.currentLevel_}set currentLevel(e){if(e<1||e>Xs)throw new Error(`Invalid level: ${e}. Must be 1-${Xs}.`);this.currentLevel_=e}get phase(){return this.phase_}set phase(e){this.phase_=e}get unlockedLevels(){return this.unlockedLevels_}canPlayLevel(e){return this.unlockedLevels_.has(e)}unlockNext(){this.currentLevel_<Xs&&this.unlockedLevels_.add(this.currentLevel_+1)}completeLevel(){this.unlockNext(),this.currentLevel_<Xs&&(this.currentLevel_+=1),this.phase_="level_complete"}gameOver(){this.phase_="game_over"}toMenu(){this.phase_="menu"}startLevel(e){if(!this.canPlayLevel(e))throw new Error(`Level ${e} is not unlocked.`);this.currentLevel_=e,this.phase_="playing"}setUnlockedLevels(e){this.unlockedLevels_=new Set(e)}getUnlockedLevelsAsArray(){return Array.from(this.unlockedLevels_).sort((e,t)=>e-t)}}async function ZE(r,e,t,n,i,s,a,o){var T;e.clearEntities();const l=new Map(r.directionChanges.map(y=>[y.shipId,y])),c=new Set(r.moves.map(y=>y.shipId)),h=new Set((((T=r.attack)==null?void 0:T.hits)??[]).map(y=>`${y.x},${y.y}`)),u=r.aftermath.find(y=>y.type==="naglfar_vanish"),d=r.aftermath.find(y=>y.type==="naglfar_appear");if(!c.has(n.id)){const y=r.aftermath.find(L=>L.type==="player_respawn"),S=y!==void 0?y.from:n.position;await e.placeShipAt(n.id,"player",n.facingDirection,S)}for(const y of s){if(c.has(y.id))continue;if(i!==null&&y.id===i.id&&u!==void 0){await e.placeShipAt(y.id,y.type,y.facingDirection,u.at);continue}const S=a.getCell(y.position),L=S.entity===y.type&&S.entityId===y.id,R=h.has(`${y.position.x},${y.position.y}`);(L||R)&&await e.placeShipAt(y.id,y.type,y.facingDirection,y.position)}for(const y of r.moves){if(i!==null&&y.shipId===i.id&&d!==void 0)continue;const S=l.get(y.shipId),L=S?S.from:y.facingDirection;await e.placeShipAt(y.shipId,y.shipType,L,y.from)}for(const y of r.beforemath)y.type==="tutorial_prompt"&&await o.showBlockingHint(y.message);if(r.attack!==null)await e.animateArrowVolley(r.attack.attacker.at,n.facingDirection,o1);else{const y=l.get(n.id),S=r.moves.find(U=>U.shipId===n.id);y!==void 0&&await e.animateTurn(y.shipId,y.at,y.from,y.to),S!==void 0&&await e.animateMove(S.shipId,S.from,S.to);const L=r.aftermath.find(U=>U.type==="maelstrom_teleport");L!==void 0&&L.type==="maelstrom_teleport"&&(await e.animateMaelstromEnter(n.id),e.removeShipsAt(L.from),await e.placeShipAt(n.id,"player",L.facingDirection,L.to),await e.animateMaelstromExit(n.id,L.facingDirection));const N=r.aftermath.filter(U=>U.type==="player_respawn").find(U=>U.type==="player_respawn"&&U.cause==="skull_rock");N!==void 0&&N.type==="player_respawn"&&(t.play("explosion",N.from),e.removeShipsAt(N.from))}if(r.attack!==null&&r.attack.hits.length>0){const y=new Set(r.attack.hits.map(S=>`${S.x},${S.y}`));await Promise.all(r.aftermath.filter(S=>S.type==="wreck"||S.type==="ship_destroyed").filter(S=>y.has(`${S.at.x},${S.at.y}`)).map(async S=>{t.play("explosion",S.at),e.removeShipsAt(S.at),S.type==="wreck"&&await e.placeWreck(S.at)}))}const f=(()=>{const y=r.aftermath.find(S=>S.type==="player_respawn"&&S.cause==="skull_rock");return y!==void 0&&y.type==="player_respawn"?`${y.from.x},${y.from.y}`:null})(),p=new Set,_=r.moves.filter(y=>y.shipId!==n.id),m=bt.SHIP_TURN_DURATION_MS,g=bt.SHIP_MOVE_DURATION_MS,x=g,M=Math.round(x*m/(m+g)),v=x-M;await Promise.all(_.map(async y=>{const S=l.get(y.shipId);S!==void 0&&await e.animateTurn(S.shipId,S.at,S.from,S.to,M);const L=S!==void 0?v:g;await e.animateMove(y.shipId,y.from,y.to,L);const R=`${y.to.x},${y.to.y}`;y.endsInCollision?p.has(R)||(p.add(R),t.play("explosion",y.to),e.removeShipsAt(y.to),r.aftermath.some(U=>U.type==="wreck"&&U.at.x===y.to.x&&U.at.y===y.to.y)&&await e.placeWreck(y.to)):y.consumedWreck||!h.has(R)&&R!==f&&r.aftermath.some(U=>U.type==="ship_destroyed"&&U.at.x===y.to.x&&U.at.y===y.to.y)&&(t.play("explosion",y.to),e.removeShipsAt(y.to))})),u!==void 0&&i!==null&&await e.animateNaglfarDematerialize(i.id),d!==void 0&&i!==null&&(await e.placeShipAt(i.id,"naglfar",d.facingDirection,d.to),await e.animateNaglfarMaterialize(i.id));for(const y of r.enemyAttacks)if(y.attackType==="arrow_broadside"&&y.targets.length>0){const S=y.targets[y.targets.length-1];S!==void 0&&await e.animateDirectArrow(y.attacker.at,S)}const E=r.aftermath.find(y=>y.type==="player_respawn"&&y.cause==="berserker_fire");E!==void 0&&E.type==="player_respawn"&&(t.play("explosion",E.from),e.removeShipsAt(E.from));const w=r.aftermath.filter(y=>y.type==="player_respawn");for(const y of w)y.type==="player_respawn"&&(y.respawning&&(await e.placeShipAt(n.id,"player",y.facingDirection,y.to),await e.animatePopIn(n.id)),o.update());await e.commit(a,n,s)}async function QE(){const r=parseInt(localStorage.getItem("voyages_currentLevel")??"1",10),e=Math.max(1,Math.min(Xs,r)),t=await $E(e),{board:n,player:i,enemies:s}=ul.generate(t),a=s.find(y=>y.type==="naglfar")??null,o=a!==null?s.filter(y=>y.type!=="naglfar"):s,l=new tb;await l.init(),l.fitBoard(n.width,n.height);const c=Pu.create(),h=new Wb(l.scene,c),u=new t1(l.scene);await u.preload(["explosion"]);const d=new KE,f=localStorage.getItem("voyages_unlockedLevels");if(f)try{const y=JSON.parse(f);d.setUnlockedLevels(y)}catch{}d.startLevel(e);const p=new l1(i,d);p.update(),p.onNextLevel=()=>{const y=d.currentLevel+1;y<=Xs&&(localStorage.setItem("voyages_currentLevel",String(y)),localStorage.setItem("voyages_unlockedLevels",JSON.stringify(d.getUnlockedLevelsAsArray()))),window.location.reload()},p.onRetry=()=>{localStorage.setItem("voyages_currentLevel",String(d.currentLevel)),localStorage.setItem("voyages_unlockedLevels",JSON.stringify(d.getUnlockedLevelsAsArray())),window.location.reload()};const _=t.hints.length>0?new iE([...t.hints]):null,m=a!==null&&t.naglfarVanishProbability!==void 0?new wm(t.naglfarVanishProbability):null,g=new tE(n,i,o,a,m,null,_),M=t.wavesCount<=0?new sE({phase2StartWave:n1,movesPerWave:i1,maxEnemiesOnBoard:s1}):null;let v=s.length;const E=t.flickerMaelstrom?new cE(a1):null,w=new SE;w.onMove=async y=>{w.lock();const S=E!==null&&M!==null&&M.phase===2?E.flicker(n):null,{result:L,transition:R}=g.processTurn(y);if(S==null||S(),await ZE(R,h,u,i,a,s,n,p),_!==null)for(const N of _.drainPending())await p.showBlockingHint(N);if(M!==null){const N=y.type==="move",U=M.afterTurn({enemyCount:g.enemyCount,didPlayerMove:N});if(U.krakenActivation!==null&&g.activateKraken(U.krakenActivation.tentacleCount),U.spawn!==null){const V=oE.spawn(n,i,U.spawn.requests,r1,v);v+=V.spawned.length+V.failed,g.addEnemies(V.spawned),s.push(...V.spawned),await h.commit(n,i,s),await Promise.all(V.spawned.map(B=>h.animatePopIn(B.id)))}p.setEndlessInfo(M.wave,M.phase),L==="GAME_OVER"&&(p.showEndlessGameOver(M.wave,M.totalMoves),p.onPlayAgain=()=>{localStorage.setItem("voyages_currentLevel",String(d.currentLevel)),window.location.reload()})}else{if(L==="LEVEL_COMPLETE"){if(_!==null){_.onLevelEnd();for(const N of _.drainPending())await p.showBlockingHint(N)}d.phase="level_complete",d.unlockNext(),localStorage.setItem("voyages_unlockedLevels",JSON.stringify(d.getUnlockedLevelsAsArray()))}else L==="GAME_OVER"&&(d.phase="game_over");p.update()}w.unlock()},w.init(l.canvas,i,n,l.scene,()=>l.camera,s);let T=0;if(l.onTick=y=>{const S=y-T;T=y,h.tick(y),u.tick(S)},await h.commit(n,i,s),await h.animateAllPop(),M!==null&&p.setEndlessInfo(M.wave,M.phase),_!==null)for(const y of _.drainPending())await p.showBlockingHint(y);window.addEventListener("resize",()=>{l.updateSize(window.innerWidth,window.innerHeight)}),window.addEventListener("beforeunload",()=>{c.destroy(),l.destroy(),p.destroy()})}QE().catch(console.error);
