"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[83134],{38461:(t,e,n)=>{n.d(e,{AA:()=>o,XO:()=>_,YI:()=>i,xx:()=>E});var r=n(18722);function E(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.c8?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function i(t){return(0,r.kJ)(t)?t.length<r.c8?t:new Float32Array(t):t.length<r.c8?Array.from(t):t}function _(t){return((0,r.kJ)(t)?t.length:t.byteLength/8)<=r.c8?Array.from(t):new Float32Array(t)}function o(t,e,n){return Array.isArray(t)?t.slice(e,e+n):t.subarray(e,e+n)}},39406:(t,e,n)=>{n.d(e,{$z:()=>i,KF:()=>A,LE:()=>c,X9:()=>_,mi:()=>E});var r=n(18722);function E(t){if((0,r.kJ)(t)){if(t.length<r.c8)return t}else if(t.length<r.c8)return Array.from(t);let e=!0,n=!0;return t.some(((t,r)=>(e=e&&0===t,n=n&&t===r,!e&&!n))),e?c(t.length):n?A(t.length):(0,r.kJ)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,r.kJ)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function i(t){return t<=r.c8?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}function _(t){return t<=r.c8?new Array(t):new Uint32Array(t)}let o=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const s=[0],T=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function A(t){if(1===t)return s;if(t<r.c8)return Array.from(new Uint16Array(T.buffer,0,t));if(t<T.length)return new Uint16Array(T.buffer,0,t);if(t>o.length){const e=Math.max(2*o.length,t);o=new Uint32Array(e);for(let t=0;t<o.length;t++)o[t]=t}return new Uint32Array(o.buffer,0,t)}let R=new Uint8Array(65536);function c(t){if(1===t)return s;if(t<r.c8)return new Array(t).fill(0);if(t>R.length){const e=Math.max(2*R.length,t);R=new Uint8Array(e)}return new Uint8Array(R.buffer,0,t)}},48734:(t,e,n)=>{function r(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}n.d(e,{n1:()=>r})},85981:(t,e,n)=>{n.d(e,{AR:()=>I,Gr:()=>S,JG:()=>A,Jk:()=>N,KU:()=>u,Ue:()=>s,al:()=>R,ct:()=>O,nF:()=>a,re:()=>T,zk:()=>c});var r=n(16889),E=n(21530),i=n(32035),_=n(12400),o=n(51378);function s(t){return t?{origin:(0,_.d9)(t.origin),vector:(0,_.d9)(t.vector)}:{origin:(0,_.Ue)(),vector:(0,_.Ue)()}}function T(t,e){const n=l.get();return n.origin=t,n.vector=e,n}function A(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return R(t.origin,t.vector,e)}function R(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.c)(n.vector,e),n}function c(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(n.origin,t),(0,i.f)(n.vector,e,t),n}function N(t,e){const n=(0,i.f)(o.WM.get(),e,t.origin),E=(0,i.m)(t.vector,n),_=(0,i.m)(t.vector,t.vector),s=(0,r.uZ)(E/_,0,1),T=(0,i.f)(o.WM.get(),(0,i.j)(o.WM.get(),t.vector,s),n);return(0,i.m)(T,T)}function a(t,e,n){return O(t,e,0,1,n)}function u(t,e,n){return(0,i.g)(n,t.origin,(0,i.j)(n,t.vector,e))}function O(t,e,n,E,_){const{vector:s,origin:T}=t,A=(0,i.f)(o.WM.get(),e,T),R=(0,i.m)(s,A)/(0,i.q)(s);return(0,i.j)(_,s,(0,r.uZ)(R,n,E)),(0,i.g)(_,_,t.origin)}function S(t,e){if(f(t,T(e.origin,e.direction),!1,C)){const{tA:e,pB:n,distance2:r}=C;if(e>=0&&e<=1)return r;if(e<0)return(0,i.a)(t.origin,n);if(e>1)return(0,i.a)((0,i.g)(o.WM.get(),t.origin,t.vector),n)}return null}function I(t,e,n){return!!f(t,e,!0,C)&&((0,i.c)(n,C.pA),!0)}function f(t,e,n,E){const _=1e-6,s=t.origin,T=(0,i.g)(o.WM.get(),s,t.vector),A=e.origin,R=(0,i.g)(o.WM.get(),A,e.vector),c=o.WM.get(),N=o.WM.get();if(c[0]=s[0]-A[0],c[1]=s[1]-A[1],c[2]=s[2]-A[2],N[0]=R[0]-A[0],N[1]=R[1]-A[1],N[2]=R[2]-A[2],Math.abs(N[0])<_&&Math.abs(N[1])<_&&Math.abs(N[2])<_)return!1;const a=o.WM.get();if(a[0]=T[0]-s[0],a[1]=T[1]-s[1],a[2]=T[2]-s[2],Math.abs(a[0])<_&&Math.abs(a[1])<_&&Math.abs(a[2])<_)return!1;const u=c[0]*N[0]+c[1]*N[1]+c[2]*N[2],O=N[0]*a[0]+N[1]*a[1]+N[2]*a[2],S=c[0]*a[0]+c[1]*a[1]+c[2]*a[2],I=N[0]*N[0]+N[1]*N[1]+N[2]*N[2],f=(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])*I-O*O;if(Math.abs(f)<_)return!1;let C=(u*O-S*I)/f,l=(u+O*C)/I;n&&(C=(0,r.uZ)(C,0,1),l=(0,r.uZ)(l,0,1));const d=o.WM.get(),h=o.WM.get();return d[0]=s[0]+C*a[0],d[1]=s[1]+C*a[1],d[2]=s[2]+C*a[2],h[0]=A[0]+l*N[0],h[1]=A[1]+l*N[1],h[2]=A[2]+l*N[2],E.tA=C,E.tB=l,E.pA=d,E.pB=h,E.distance2=(0,i.a)(d,h),!0}const C={tA:0,tB:0,pA:(0,_.Ue)(),pB:(0,_.Ue)(),distance2:0},l=new E.x((()=>s()))},35888:(t,e,n)=>{n.d(e,{d:()=>i});var r=n(16889),E=n(39406);function i(t,e,n){var i;const A=Array.isArray(t),R=A?t.length/e:t.byteLength/(4*e),c=A?t:new Uint32Array(t,0,R*e),N=null!==(i=null===n||void 0===n?void 0:n.minReduction)&&void 0!==i?i:0,a=(null===n||void 0===n?void 0:n.originalIndices)||null,u=a?a.length:0,O=(null===n||void 0===n?void 0:n.componentOffsets)||null;let S=0;if(O)for(let r=0;r<O.length-1;r++){const t=O[r+1]-O[r];t>S&&(S=t)}else S=R;const I=Math.floor(1.1*S)+1;(null==T||T.length<2*I)&&(T=new Uint32Array((0,r.Sf)(2*I)));for(let r=0;r<2*I;r++)T[r]=0;let f=0;const C=!!O&&!!a,l=C?u:R;let d=(0,E.$z)(R);const h=new Uint32Array(u),M=1.96;let L=0!==N?Math.ceil(4*M*M/(N*N)*N*(1-N)):l,U=1,D=O?O[1]:l;for(let r=0;r<l;r++){if(r===L){const t=1-f/r;if(t+M*Math.sqrt(t*(1-t)/r)<N)return null;L*=2}if(r===D){for(let t=0;t<2*I;t++)T[t]=0;if(a)for(let t=O[U-1];t<O[U];t++)h[t]=d[a[t]];D=O[++U]}const t=C?a[r]:r,n=t*e,E=s(c,n,e);let i=E%I,o=f;for(;0!==T[2*i+1];){if(T[2*i]===E){const t=T[2*i+1]-1;if(_(c,n,t*e,e)){o=d[t];break}}i++,i>=I&&(i-=I)}o===f&&(T[2*i]=E,T[2*i+1]=t+1,f++),d[t]=o}if(0!==N&&1-f/R<N)return null;if(C){for(let t=O[U-1];t<h.length;t++)h[t]=d[a[t]];d=(0,E.mi)(h)}const P=A?new Array(f):new Uint32Array(f*e);f=0;for(let r=0;r<l;r++)d[r]===f&&(o(c,(C?a[r]:r)*e,P,f*e,e),f++);if(a&&!C){const t=new Uint32Array(u);for(let e=0;e<t.length;e++)t[e]=d[a[e]];d=(0,E.mi)(t)}return{buffer:Array.isArray(P)?P:P.buffer,indices:d,uniqueCount:f}}function _(t,e,n,r){for(let E=0;E<r;E++)if(t[e+E]!==t[n+E])return!1;return!0}function o(t,e,n,r,E){for(let i=0;i<E;i++)n[r+i]=t[e+i]}function s(t,e,n){let r=0;for(let E=0;E<n;E++)r=t[e+E]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let T=null},55158:(t,e,n)=>{n.d(e,{Gw:()=>T,U$:()=>s,pV:()=>o});var r=n(25158),E=n(48734),i=n(97731);class _{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const n of t.fields.keys()){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const n=this[t];return n&&n.elementCount===e.ElementCount&&n.elementType===e.ElementType?n:null}slice(t,e){return new _(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.count;const E=this.stride;if(E%4==0){const i=new Uint32Array(t.buffer,e*E,r*E/4);new Uint32Array(this.buffer,n*E,r*E/4).set(i)}else{const i=new Uint8Array(t.buffer,e*E,r*E);new Uint8Array(this.buffer,n*E,r*E).set(i)}return this}get usedMemory(){return this.byteLength}dispose(){}}class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:c(t[1].constructor)}))))}freeze(){return this}vec2f(t,e){return this._appendField(t,r.Eu,e),this}vec2f64(t,e){return this._appendField(t,r.q6,e),this}vec3f(t,e){return this._appendField(t,r.ct,e),this}vec3f64(t,e){return this._appendField(t,r.fP,e),this}vec4f(t,e){return this._appendField(t,r.ek,e),this}vec4f64(t,e){return this._appendField(t,r.Cd,e),this}mat3f(t,e){return this._appendField(t,r.gK,e),this}mat3f64(t,e){return this._appendField(t,r.ey,e),this}mat4f(t,e){return this._appendField(t,r.bj,e),this}mat4f64(t,e){return this._appendField(t,r.O1,e),this}vec4u8(t,e){return this._appendField(t,r.mc,e),this}f32(t,e){return this._appendField(t,r.ly,e),this}f64(t,e){return this._appendField(t,r.oS,e),this}u8(t,e){return this._appendField(t,r.D_,e),this}u16(t,e){return this._appendField(t,r.av,e),this}i8(t,e){return this._appendField(t,r.Hz,e),this}vec2i8(t,e){return this._appendField(t,r.Vs,e),this}vec2i16(t,e){return this._appendField(t,r.or,e),this}vec2u8(t,e){return this._appendField(t,r.xA,e),this}vec4u16(t,e){return this._appendField(t,r.v6,e),this}u32(t,e){return this._appendField(t,r.Nu,e),this}_appendField(t,e,n){if(this._fields.has(t))return void(0,i.hu)(!1,"".concat(t," already added to vertex buffer layout"));const r=e.ElementCount*(0,E.n1)(e.ElementType),_=this._stride;this._stride+=r,this._fields.set(t,{size:r,constructor:e,offset:_,optional:n})}createBuffer(t){return new _(this,t)}createView(t){return new _(this,t)}clone(){const t=new o;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,n)=>t._fields.set(n,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,E.n1)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function s(){return new o}class T{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const n={...t,constructor:R(t.constructor)};this.fields.push([e,n])})),this.stride=t.stride}}const A=[r.ly,r.Eu,r.ct,r.ek,r.gK,r.bj,r.oS,r.q6,r.fP,r.Cd,r.ey,r.O1,r.D_,r.xA,r.ne,r.mc,r.av,r.TS,r.mw,r.v6,r.Nu,r.qt,r.G5,r.hu,r.Hz,r.Vs,r.P_,r.ir,r.o7,r.or,r.n1,r.zO,r.Jj,r.wA,r.PP,r.TN];function R(t){return"".concat(t.ElementType,"_").concat(t.ElementCount)}function c(t){return N.get(t)}const N=new Map;A.forEach((t=>N.set(R(t),t)))},52920:(t,e,n)=>{n.d(e,{Pj:()=>s,hd:()=>_,nG:()=>o,rc:()=>T});var r=n(16889),E=n(32035),i=n(12400);n(38461);function _(t,e,n,r,E){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2;const _=1/(Math.abs(n)+Math.abs(r)+Math.abs(E)),o=n*_,s=r*_,T=E<=0?(o>=0?1:-1)*(1-Math.abs(s)):o,R=E<=0?(s>=0?1:-1)*(1-Math.abs(o)):s,c=e*i;t[c]=A(T),t[c+1]=A(R)}function o(t){const e=t.length/3,n=new Int16Array(2*e);let r=0;for(let E=0;E<e;++E)_(n,E,t[r++],t[r++],t[r++]);return n}function s(t,e){const n=t.length/3,r=new Int16Array(2*n);let o=0;const s=(0,i.Ue)();for(let i=0;i<n;++i)s[0]=t[o++],s[1]=t[o++],s[2]=t[o++],(0,E.t)(s,s,e),_(r,i,s[0],s[1],s[2]);return r}function T(t,e,n){const r=n*(arguments.length>3&&void 0!==arguments[3]?arguments[3]:2),i=R(e[r]),_=R(e[r+1]),o=1-Math.abs(i)-Math.abs(_);t[2]=o,o<0?(t[0]=(i>=0?1:-1)*(1-Math.abs(_)),t[1]=(_>=0?1:-1)*(1-Math.abs(i))):(t[0]=i,t[1]=_),(0,E.n)(t,t)}function A(t){return(0,r.uZ)(Math.round(32767*t),-32767,32767)}function R(t){return(0,r.uZ)(t/32767,-1,1)}},97731:(t,e,n)=>{n.d(e,{E6:()=>c,T:()=>s,ep:()=>A,hu:()=>o,iV:()=>R,kG:()=>a,u_:()=>N,yK:()=>T});var r=n(6644),E=n(19093);const i=(0,n(86361).Ue)();class _{constructor(t){this.message=t}toString(){return"AssertException: ".concat(this.message)}}function o(t,e){if(!t){e=e||"Assertion";const t=new Error(e).stack;throw new _("".concat(e," at ").concat(t))}}function s(t,e){t||(e=e||"",console.warn("Verify failed: "+e+"\n"+new Error("verify").stack))}function T(t,e,n,r){let E,i=(n[0]-t[0])/e[0],_=(r[0]-t[0])/e[0];i>_&&(E=i,i=_,_=E);let o=(n[1]-t[1])/e[1],s=(r[1]-t[1])/e[1];if(o>s&&(E=o,o=s,s=E),i>s||o>_)return!1;o>i&&(i=o),s<_&&(_=s);let T=(n[2]-t[2])/e[2],A=(r[2]-t[2])/e[2];return T>A&&(E=T,T=A,A=E),!(i>A||T>_)&&(A<_&&(_=A),!(_<0))}function A(t,e,n,E,i){let _=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,r.Ue)();const o=(E[i]-n[i])*(e[0]-t[0])-(E[0]-n[0])*(e[i]-t[i]),s=(E[0]-n[0])*(t[i]-n[i])-(E[i]-n[i])*(t[0]-n[0]);if(0===o)return!1;const T=s/o;return _[0]=t[0]+T*(e[0]-t[0]),_[1]=t[i]+T*(e[i]-t[i]),!0}function R(t,e,n,r,_){i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1,(0,E.t)(i,i,e),_.length>2&&(_[2]=-i[2]),(0,E.t)(i,i,n),o(0!==i[3]),_[0]=i[0]/i[3],_[1]=i[1]/i[3],_[2]=i[2]/i[3],_[0]=(.5*_[0]+.5)*r[2]+r[0],_[1]=(.5*_[1]+.5)*r[3]+r[1]}function c(t,e){return Math.log(t)/Math.log(e)}function N(t,e,n,r){t[12]=e,t[13]=n,t[14]=r}function a(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}},4760:(t,e,n)=>{var r;function E(t){return t===r.POSITION}n.d(e,{T:()=>r,j:()=>E}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},67009:(t,e,n)=>{n.d(e,{Hr:()=>A,dG:()=>T,dx:()=>s,rD:()=>o,so:()=>R,tf:()=>_});var r=n(50256),E=n(55158),i=n(4760);const _=(0,E.U$)().vec3f(i.T.POSITION).u16(i.T.COMPONENTINDEX).freeze(),o=(0,E.U$)().vec2u8(i.T.SIDENESS).freeze(),s=(0,r.K)(o),T=(0,E.U$)().vec3f(i.T.POSITION0).vec3f(i.T.POSITION1).vec2i16(i.T.NORMALCOMPRESSED).u16(i.T.COMPONENTINDEX).u8(i.T.VARIANTOFFSET,{glNormalized:!0}).u8(i.T.VARIANTSTROKE).u8(i.T.VARIANTEXTENSION,{glNormalized:!0}).freeze(),A=(0,E.U$)().vec3f(i.T.POSITION0).vec3f(i.T.POSITION1).vec2i16(i.T.NORMALCOMPRESSED).vec2i16(i.T.NORMAL2COMPRESSED).u16(i.T.COMPONENTINDEX).u8(i.T.VARIANTOFFSET,{glNormalized:!0}).u8(i.T.VARIANTSTROKE).u8(i.T.VARIANTEXTENSION,{glNormalized:!0}).freeze(),R=new Map([[i.T.POSITION0,0],[i.T.POSITION1,1],[i.T.COMPONENTINDEX,2],[i.T.VARIANTOFFSET,3],[i.T.VARIANTSTROKE,4],[i.T.VARIANTEXTENSION,5],[i.T.NORMALCOMPRESSED,6],[i.T.NORMAL2COMPRESSED,7],[i.T.SIDENESS,8]])},41371:(t,e,n)=>{n.d(e,{D:()=>S,q:()=>I});var r=n(84936),E=n(32035),i=n(12400),_=n(50256),o=n(52920),s=n(67009);class T{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?a:N}write(t,e,n){C.seed=this._edgeHashFunction(n);const r=C.getIntRange(0,255),E=C.getIntRange(0,this.settings.variants-1),i=C.getFloat(),_=255*(.5*function(t,e){return Math.abs(t)**e*Math.sign(t)}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,E),t.variantExtension.set(e,_)}}const A=new Float32Array(6),R=new Uint32Array(A.buffer),c=new Uint32Array(1);function N(t){return A[0]=t.position0[0],A[1]=t.position0[1],A[2]=t.position0[2],A[3]=t.position1[0],A[4]=t.position1[1],A[5]=t.position1[2],c[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],c[0]}function a(t){const e=A;e[0]=O(t.position0[0]),e[1]=O(t.position0[1]),e[2]=O(t.position0[2]),e[3]=O(t.position1[0]),e[4]=O(t.position1[1]),e[5]=O(t.position1[2]),c[0]=5381;for(let n=0;n<R.length;n++)c[0]=31*c[0]+R[n];return c[0]}const u=1e4;function O(t){return Math.round(t*u)/u}class S{constructor(){this._commonWriter=new T}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.dG.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,E.g)(f,n.faceNormal0,n.faceNormal1),(0,E.n)(f,f);const{typedBuffer:r,typedBufferStride:i}=t.normalCompressed;(0,o.hd)(r,e,f[0],f[1],f[2],i)}}S.Layout=s.dG,S.glLayout=(0,_.K)(s.dG,1);class I{constructor(){this._commonWriter=new T}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return s.Hr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n);{const{typedBuffer:r,typedBufferStride:E}=t.normalCompressed;(0,o.hd)(r,e,n.faceNormal0[0],n.faceNormal0[1],n.faceNormal0[2],E)}{const{typedBuffer:r,typedBufferStride:E}=t.normal2Compressed;(0,o.hd)(r,e,n.faceNormal1[0],n.faceNormal1[1],n.faceNormal1[2],E)}}}I.Layout=s.Hr,I.glLayout=(0,_.K)(s.Hr,1);const f=(0,i.Ue)(),C=new r.Z},32666:(t,e,n)=>{n.d(e,{n:()=>s});var r=n(16889),E=n(27546),i=n(32035),_=n(12400);const o=-1;function s(t,e,n){const r=t.vertices.position,E=t.vertices.componentIndex,_=u.position0,s=u.position1,R=u.faceNormal0,N=u.faceNormal1,{edges:a,normals:O}=A(t),S=a.length/4,I=e.allocate(S);let f=0;const C=S,h=null===n||void 0===n?void 0:n.allocate(C);let L=0,U=0,D=0;c.length=0;for(let o=0;o<S;++o){const t=4*o;r.getVec(a.data[t],_),r.getVec(a.data[t+1],s);const e=c.pushNew();e.index=4*o,e.length=(0,i.p)(_,s)}c.sort(((t,e)=>e.length-t.length));const P=new Array,F=new Array;c.forAll((t=>{let{length:A,index:c}=t;const S=a.data[c],C=a.data[c+1],g=a.data[c+2],G=a.data[c+3],B=G===o;if(r.getVec(S,_),r.getVec(C,s),B){const t=3*g;(0,i.s)(R,O.data[t],O.data[t+1],O.data[t+2]),(0,i.c)(N,R),u.componentIndex=E.get(S),u.cosAngle=(0,i.m)(R,N)}else{let t=3*g;if((0,i.s)(R,O.data[t],O.data[t+1],O.data[t+2]),t=3*G,(0,i.s)(N,O.data[t],O.data[t+1],O.data[t+2]),u.componentIndex=E.get(S),u.cosAngle=(0,i.m)(R,N),function(t,e){return t.cosAngle>e}(u,d))return;u.cosAngle<-.9999&&(0,i.c)(N,R)}U+=A,D++,B||function(t,e){return t.cosAngle<e}(u,M)?(e.write(I,f++,u),P.push(A)):T(u,l)&&(h&&n&&n.write(h,L++,u),F.push(A))}));const g=new Float32Array(P.reverse()),G=new Float32Array(F.reverse()),B=h&&n?{instancesData:h.slice(0,L),lodInfo:{lengths:G}}:void 0;return{regular:{instancesData:I.slice(0,f),lodInfo:{lengths:g}},silhouette:B,averageEdgeLength:U/D}}function T(t,e){const n=(0,r.ZF)(t.cosAngle);return(0,i.E)(S,t.position1,t.position0),n*((0,i.m)((0,i.b)(O,t.faceNormal0,t.faceNormal1),S)>0?-1:1)>e}function A(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors,E=t.vertices.position;N.length=a.length=0;for(let _=0;_<e;_++){const t=3*_,e=r[t],s=r[t+1],T=r[t+2],A=n[t],R=n[t+1],c=n[t+2];E.getVec(A,I),E.getVec(R,f),E.getVec(c,C),(0,i.f)(f,f,I),(0,i.f)(C,C,I),(0,i.b)(I,f,C),(0,i.n)(I,I),a.pushArray(I),(e===o||A<R)&&(N.push(A),N.push(R),N.push(_),N.push(e)),(s===o||R<c)&&(N.push(R),N.push(c),N.push(_),N.push(s)),(T===o||c<A)&&(N.push(c),N.push(A),N.push(_),N.push(T))}return{edges:N,normals:a}}class R{constructor(){this.index=0,this.length=0}}const c=new E.Z({allocator:t=>t||new R,deallocator:null}),N=new E.Z({deallocator:null}),a=new E.Z({deallocator:null}),u=new class{constructor(){this.position0=(0,_.Ue)(),this.position1=(0,_.Ue)(),this.faceNormal0=(0,_.Ue)(),this.faceNormal1=(0,_.Ue)(),this.componentIndex=0,this.cosAngle=0}},O=(0,_.Ue)(),S=(0,_.Ue)(),I=(0,_.Ue)(),f=(0,_.Ue)(),C=(0,_.Ue)(),l=(0,r.Vl)(4),d=Math.cos(l),h=(0,r.Vl)(35),M=Math.cos(h)},79762:(t,e,n)=>{n.d(e,{Kl:()=>A,n_:()=>O,kY:()=>R,Yr:()=>u});var r=n(35888);function E(t,e,n){const r=e/3,E=new Uint32Array(n+1),i=new Uint32Array(n+1),_=(t,e)=>{t<e?E[t+1]++:i[e+1]++};for(let S=0;S<r;S++){const e=t[3*S],n=t[3*S+1],r=t[3*S+2];_(e,n),_(n,r),_(r,e)}let o=0,s=0;for(let S=0;S<n;S++){const t=E[S+1],e=i[S+1];E[S+1]=o,i[S+1]=s,o+=t,s+=e}const T=new Uint32Array(6*r),A=E[n],R=(t,e,n)=>{if(t<e){const r=E[t+1]++;T[2*r]=e,T[2*r+1]=n}else{const r=i[e+1]++;T[2*A+2*r]=t,T[2*A+2*r+1]=n}};for(let S=0;S<r;S++){const e=t[3*S],n=t[3*S+1],r=t[3*S+2];R(e,n,S),R(n,r,S),R(r,e,S)}const c=(t,e)=>{const n=2*t,r=e-t;for(let E=1;E<r;E++){const t=T[n+2*E],e=T[n+2*E+1];let r=E-1;for(;r>=0&&T[n+2*r]>t;r--)T[n+2*r+2]=T[n+2*r],T[n+2*r+3]=T[n+2*r+1];T[n+2*r+2]=t,T[n+2*r+3]=e}};for(let S=0;S<n;S++)c(E[S],E[S+1]),c(A+i[S],A+i[S+1]);const N=new Int32Array(3*r),a=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,u=(t,e)=>{const n=a(t,e);N[3*e+n]=-1},O=(t,e,n,r)=>{const E=a(t,e);N[3*e+E]=r;const i=a(n,r);N[3*r+i]=e};for(let S=0;S<n;S++){let t=E[S];const e=E[S+1];let n=i[S];const r=i[S+1];for(;t<e&&n<r;){const e=T[2*t],r=T[2*A+2*n];e===r?(O(S,T[2*t+1],r,T[2*A+2*n+1]),t++,n++):e<r?(u(S,T[2*t+1]),t++):(u(r,T[2*A+2*n+1]),n++)}for(;t<e;)u(S,T[2*t+1]),t++;for(;n<r;)u(T[2*A+2*n],T[2*A+2*n+1]),n++}return N}var i=n(55158),_=n(4760),o=n(67009),s=n(41371),T=n(32666);function A(t){const e=R(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return N.updateSettings(t.writerSettings),a.updateSettings(t.writerSettings),(0,T.n)(e,N,a)}function R(t,e,n,i){if(e){const e=E(n,i,t.count);return new c(n,i,e,t)}const _=(0,r.d)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:i}),s=E(_.indices,i,_.uniqueCount);return{faces:_.indices,facesLength:_.indices.length,neighbors:s,vertices:o.tf.createView(_.buffer)}}class c{constructor(t,e,n,r){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=r}}const N=new s.D,a=new s.q,u=(0,i.U$)().vec3f(_.T.POSITION0).vec3f(_.T.POSITION1),O=(0,i.U$)().vec3f(_.T.POSITION0).vec3f(_.T.POSITION1).u16(_.T.COMPONENTINDEX)},50319:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(27366),E=n(66978),i=(n(32718),n(93169),n(84936),n(10064),n(69912)),_=n(32035),o=n(12400),s=n(85981),T=n(23470),A=n(78329),R=n(79762);function c(t,e,n){const r=(0,T.c)(),E=(0,T.g)(r);return(0,_.r)(E,E,t,.5),(0,_.r)(E,E,e,.5),r[3]=(0,_.p)(E,t),(0,_.g)(E,E,n),r}let N=class{constructor(){this._idToComponent=new Map,this._components=new A.Z((t=>t.bounds)),this._edges=new A.Z((t=>t.bounds)),this._tmpLineSegment=(0,s.Ue)(),this._tmpP1=(0,o.Ue)(),this._tmpP2=(0,o.Ue)(),this._tmpP3=(0,o.Ue)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,E.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:r}=t;n.push({id:e,uid:r})}return!0}),t.bounds),!n.length)return;const r={components:n},E=await this.remoteClient.invoke("fetchAllEdgeLocations",r,null!==e&&void 0!==e?e:{});for(const i of E.components)this._setFetchEdgeLocations(i)}async add(t){const e=new O(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=R.n_.createView(t.locations),r=new Array(n.count),E=(0,o.Ue)(),i=(0,o.Ue)();for(let o=0;o<n.count;o++){n.position0.getVec(o,E),n.position1.getVec(o,i);const _=c(E,i,t.origin),s=new S(e,o,_);r[o]=s}this._edges.add(r);const{objectIds:_,origin:s}=t;e.info={locations:n,objectIds:_,origin:s}}_addCandidates(t,e,n){const{info:r}=e.component,{origin:E,objectIds:i}=r,o=r.locations,s=o.position0.getVec(e.index,this._tmpP1),T=o.position1.getVec(e.index,this._tmpP2);(0,_.g)(s,s,E),(0,_.g)(T,T,E);const A=i[o.componentIndex.get(e.index)];this._addEdgeCandidate(t,A,s,T,n),u(t,A,s,n),u(t,A,T,n)}_addEdgeCandidate(t,e,n,r,E){if(!t.returnEdge)return;const i=(0,T.g)(t.bounds),A=(0,s.zk)(n,r,this._tmpLineSegment),R=(0,s.nF)(A,i,this._tmpP3);(0,T.n)(t.bounds,R)&&E.push({type:"edge",objectId:e,target:(0,o.d9)(R),distance:(0,_.p)(i,R),start:(0,o.d9)(n),end:(0,o.d9)(r)})}};N=(0,r._)([(0,i.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],N);const a=N;function u(t,e,n,r){if(!t.returnVertex||!(0,T.n)(t.bounds,n))return;const E=(0,T.g)(t.bounds);r.push({type:"vertex",objectId:e,target:(0,o.d9)(n),distance:(0,_.p)(E,n)})}class O{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++O.uid}}O.uid=0;class S{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}},61109:(t,e,n)=>{n.d(e,{G:()=>r});class r{constructor(t,e,n,r,E){let i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],_=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=r,this.stride=E,this.normalized=i,this.divisor=_}}},8548:(t,e,n)=>{var r,E,i,_,o,s,T,A,R,c,N,a,u,O,S,I,f,C,l,d;n.d(e,{Br:()=>I,Ho:()=>l,LR:()=>s,Lu:()=>D,MX:()=>E,No:()=>u,Se:()=>F,Tg:()=>f,V1:()=>h,V7:()=>p,VI:()=>O,VY:()=>L,Wf:()=>T,Xg:()=>U,Y5:()=>B,_g:()=>M,cw:()=>N,db:()=>_,e8:()=>a,g:()=>A,l1:()=>C,lP:()=>S,lk:()=>r,q_:()=>P,qi:()=>d,w0:()=>o,wb:()=>R,xS:()=>c,zi:()=>i}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(i||(i={})),function(t){t[t.ADD=32774]="ADD",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(_||(_={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(o||(o={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(s||(s={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(T||(T={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.HALF_FLOAT=5131]="HALF_FLOAT"}(A||(A={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(R||(R={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(c||(c={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(N||(N={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(a||(a={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(u||(u={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(O||(O={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(S||(S={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(I||(I={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(f||(f={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(C||(C={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(d||(d={}));const h=33984;var M,L,U;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.TransformFeedback=7]="TransformFeedback",t[t.Sync=8]="Sync",t[t.UNCOUNTED=9]="UNCOUNTED",t[t.LinesOfCode=9]="LinesOfCode",t[t.Uniform=10]="Uniform",t[t.COUNT=11]="COUNT"}(M||(M={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.BACK=1029]="BACK"}(U||(U={}));const D=33306;var P,F,g,G,B,p,m;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(P||(P={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(F||(F={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(g||(g={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(G||(G={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(B||(B={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(p||(p={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);
//# sourceMappingURL=83134.8c045043.chunk.js.map