"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[63899],{63899:(e,t,n)=>{n.d(t,{Z:()=>Le});var r=n(27366),o=n(44927),i=n(10064),s=n(54472),a=n(32718),l=n(67426),c=n(66978),u=n(94172),p=n(49861),f=(n(93169),n(84936),n(69912)),h=n(12400),d=n(53866),v=n(32238),m=n(848),g=n(80885),y=n(45238),x=n(64995);const w="Expected location to be a Point instance";class b extends i.Z{constructor(){super("invalid-input:location",w)}}var A=n(8623),S=n(50250),R=n(76046),U=n(27474),_=n(69048),Z=n(91320),F=n(41414),M=n(11700);let C=null;function T(e){if(0===e.length)return F.bM;const t=(0,F.Ue)([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return(0,F.G1)(t,e),t}function I(e,t){const[n,r,o,i,s,a]=T(e);return new d.Z({xmin:n,ymin:r,zmin:o,xmax:i,ymax:s,zmax:a,spatialReference:t})}var N=n(32035),O=n(68859);function E(e,t,n,r){if(void 0!==r){(0,o.x9)(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const i="local"===t.type;if(!(0,_.zZ)(t)||r===i)return n.isGeographic||n.isWebMercator&&r;e().warnOnce("Specifying the 'geographic' parameter (".concat(r,') for a Mesh vertex space of type "').concat(t.type,'" is not supported. This parameter will be ignored.'))}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}var G=n(66149);const P=()=>a.Z.getLogger("esri.geometry.support.meshUtils.centerAt");function k(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:i}=e,s=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,a=E(P,i,s.spatialReference,null===n||void 0===n?void 0:n.geographic);(0,_.zZ)(i)?function(e,t,n){const{vertexSpace:r}=e;if(!(0,_.zZ)(r))return;const o=L,i=z;if(!(0,O.K)(t,i,e.spatialReference))return void(0,M.pn)(P(),t.spatialReference,e.spatialReference,M.Gi);if(!(0,O.K)(n,o,e.spatialReference)){const t=e.origin;return o[0]=t.x,o[1]=t.y,o[2]=t.z,void(0,M.pn)(P(),n.spatialReference,e.spatialReference,M.Gi)}const s=(0,N.f)(B,i,o);r.origin=(0,N.g)((0,h.Ue)(),r.origin,s)}(e,t,s):a?function(e,t,n){var r,o;const i=(0,h.al)(n.x,n.y,null!==(r=n.z)&&void 0!==r?r:0),s=(0,G.qk)(e,new S.Z({origin:i}));if(!s)return;const a=(0,h.al)(t.x,t.y,null!==(o=t.z)&&void 0!==o?o:0),l=(0,G.qk)({vertexAttributes:s,spatialReference:e.spatialReference,vertexSpace:new S.Z({origin:a})},new A.Z);if(!l)return;const{position:c,normal:u,tangent:p}=l;e.vertexAttributes.position=c,e.vertexAttributes.normal=u,e.vertexAttributes.tangent=p,e.vertexAttributesChanged()}(e,t,s):function(e,t,n){const r=L,o=z;if((0,O.K)(t,o,e.spatialReference)){if(!(0,O.K)(n,r,e.spatialReference)){const t=e.origin;return r[0]=t.x,r[1]=t.y,r[2]=t.z,void(0,M.pn)(P(),n.spatialReference,e.spatialReference,M.Gi)}(function(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]})(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else(0,M.pn)(P(),t.spatialReference,e.spatialReference,M.Gi)}(e,t,s)}const z=(0,h.Ue)(),L=(0,h.Ue)(),B=(0,h.Ue)();var j=n(35995);function q(e){const t=(0,j.Yd)(e.url);return n=>{var r;const o=(0,j.PF)(n,t,t),i=o?o.replace(/^ *\.\//,""):null;return null!==(r=i?e.files.get(i):null)&&void 0!==r?r:n}}async function V(e,t){if(Array.isArray(e)){if(!e.length)throw new i.Z("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Q(e.map((e=>({name:e.name,mimeType:e.type,source:K(e)})))):async function(e,t){const n=await(0,c.OT)(e.map((async e=>{const n=await async function(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(1===n.length)return new J(n[0].partUrl);const i=await e.toBlob(t);return(0,c.k_)(t),J.fromBlob(i,$(o,r))}(e);return(0,c.k_)(t),{name:e.assetName,mimeType:e.assetMimeType,source:n}})));if((0,c.Hc)(t))throw n.forEach((e=>e.source.dispose())),(0,c.zE)();return Q(n)}(e,t)}return K(e)}function K(e){return J.fromBlob(e,$(e.name,e.type))}const D=/^model\/gltf\+json$/,H=/^model\/gltf-binary$/,Y=/\.gltf$/i,W=/\.glb$/i;function Q(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:i,source:s}of e)null===r&&(D.test(i)||Y.test(o)?(r=s.url,n="gltf"):(H.test(i)||W.test(o))&&(r=s.url,n="glb")),t.set(o,s.url),s.files.forEach(((e,n)=>t.set(n,e)));if(null==r)throw new i.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new J(r,(()=>e.forEach((e=>{let{source:t}=e;return t.dispose()}))),t,n)}class J{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map,r=arguments.length>3?arguments[3]:void 0;this.url=e,this.dispose=t,this.files=n,this.type=r}static fromBlob(e,t){const n=URL.createObjectURL(e);return new J(n,(()=>URL.revokeObjectURL(n)),void 0,t)}}function $(e,t){return D.test(t)||Y.test(e)?"gltf":H.test(t)||Y.test(e)?"glb":void 0}var X=n(11582),ee=n(80987),te=n(17493);let ne=class extends X.j{constructor(e){super(e),this.externalSources=new ee.Z,this._explicitDisplaySource=null,this.addHandles((0,u.on)((()=>this.externalSources),"after-remove",(e=>{let{item:t}=e;t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){var e;return null!==(e=this._explicitDisplaySource)&&void 0!==e?e:this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,te.NZ)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!(0,te.fV)(t,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((t=>(0,te.JG)(t,e)))}get _implicitDisplaySource(){return this.externalSources.find(te.NZ)}};(0,r._)([(0,p.Cb)()],ne.prototype,"externalSources",void 0),(0,r._)([(0,p.Cb)()],ne.prototype,"displaySource",null),(0,r._)([(0,p.Cb)()],ne.prototype,"_implicitDisplaySource",null),(0,r._)([(0,p.Cb)()],ne.prototype,"_explicitDisplaySource",void 0),ne=(0,r._)([(0,f.j)("esri.geometry.support.meshUtils.Metadata")],ne);var re=n(21389);const oe={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function ie(e,t,n){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null!=t){ce[0]=t[0],ce[4]=t[1],ce[8]=t[2];for(let t=0;t<e.position.length;t+=3){for(let n=0;n<3;n++)le[n]=e.position[t+n];(0,N.t)(le,le,ce);for(let n=0;n<3;n++)e.position[t+n]=le[n]}if(t[0]!==t[1]||t[1]!==t[2]){ce[0]=1/t[0],ce[4]=1/t[1],ce[8]=1/t[2];for(let t=0;t<e.normal.length;t+=3){for(let n=0;n<3;n++)le[n]=e.normal[t+n];(0,N.t)(le,le,ce),(0,N.n)(le,le);for(let n=0;n<3;n++)e.normal[t+n]=le[n]}}}}(e,function(e,t,n){const r=(0,G.ur)(t,n);if(null==e&&1===r)return null;if(null==e)return[r,r,r];if("number"==typeof e){const t=e*r;return[t,t,t]}return[null!=e.width?e.width*r:r,null!=e.depth?e.depth*r:r,null!=e.height?e.height*r:r]}(null===n||void 0===n?void 0:n.size,null===n||void 0===n?void 0:n.unit,t.spatialReference));const r=(0,_.G7)(t,n),o=t.spatialReference.isGeographic?(0,_.G7)(t):r,i=(0,G.qk)({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new U.Q({...i,uv:e.uv}),vertexSpace:r,components:[new x.Z({faces:e.faces,material:(null===n||void 0===n?void 0:n.material)||null})],spatialReference:t.spatialReference}}const se={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},ae={south:0,east:1,north:2,west:3,up:4,down:5},le=(0,h.Ue)(),ce=(0,re.Ue)();var ue=n(29303),pe=n(29134),fe=n(7025),he=n(68700),de=n(50894),ve=n(29691),me=n(37998);const ge=()=>a.Z.getLogger("esri.geometry.support.meshUtils.rotate");function ye(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position||0===t[3])return;const{spatialReference:i,vertexSpace:s}=e,a=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,l=null===n||void 0===n?void 0:n.geographic,c=E(ge,s,i,l);(0,_.QK)(e)?function(e,t,n){var r;null!==(r=e.transform)&&void 0!==r||(e.transform=new R.Z);const{vertexSpace:o,transform:i,spatialReference:s}=e,[a,l,c]=o.origin,u=new m.Z({x:a,y:l,z:c,spatialReference:s}),p=we;if(u.equals(n))(0,N.s)(p,0,0,0);else if(!(0,G.x1)(p,n,e))return void(0,M.pn)(ge(),n.spatialReference,s,M.Gi);(0,he.yY)(_e,(0,y.ZZ)(t),(0,y.WH)(t));const f=(0,pe.PS)(be,_e,h.AG,h.hq,p),{localMatrix:d}=i,v=(0,pe.Jp)(be,f,d);i.scale=(0,pe.Q$)((0,h.Ue)(),v),(0,pe.bA)(v,v,(0,N.i)(we,i.scale));const g=i.rotationAxis;i.rotation=(0,y.q_)(v),0===i.rotationAngle&&(i.rotationAxis=g),i.translation=(0,pe.i0)((0,h.Ue)(),v)}(e,t,a):c?function(e,t,n){const r=e.spatialReference,o=(0,ve.rS)(r),i=Ue;if(!(0,O.K)(n,i,o)&&((0,M.pn)(ge(),n.spatialReference,o,"Falling back to mesh origin"),!(0,O.K)(e.origin,i,o)))return void(0,M.pn)(ge(),e.origin.spatialReference,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;(0,me.B)(o,i,Se,o),(0,ue.xO)(Re,Se);const f=Ae;(0,N.t)((0,y.ZZ)(Ae),(0,y.ZZ)(t),Re),f[3]=t[3],!(0,M.XO)(s,r,c)||null!=a&&null!=u&&!(0,M.Iz)(a,s,c,r,u)||null!=l&&null!=p&&!(0,M.wi)(l,s,c,r,p)?(0,M.pn)(ge(),r,o):(xe(c,f,3,i),!(0,M.To)(c,s,r)||null!=a&&null!=u&&(xe(u,f,3),!(0,M.Yk)(u,s,c,r,a))||null!=l&&null!=p&&(xe(p,f,4),!(0,M.M2)(p,s,c,r,l))?(0,M.pn)(ge(),o,r):e.vertexAttributesChanged())}(e,t,a):function(e,t,n){const r=Ue;if(!(0,O.K)(n,r,e.spatialReference)){const t=e.origin;return r[0]=t.x,r[1]=t.y,r[2]=t.z,void(0,M.pn)(ge(),n.spatialReference,e.spatialReference,M.Gi)}xe(e.vertexAttributes.position,t,3,r),xe(e.vertexAttributes.normal,t,3),xe(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,a)}function xe(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h.AG;if(null!=e){(0,pe.Us)(Se,(0,y.WH)(t),(0,y.ZZ)(t));for(let t=0;t<e.length;t+=n){for(let n=0;n<3;n++)we[n]=e[t+n]-r[n];(0,N.h)(we,we,Se);for(let n=0;n<3;n++)e[t+n]=we[n]+r[n]}}}const we=(0,h.Ue)(),be=(0,fe.Ue)(),Ae=(0,y.Ue)(),Se=(0,fe.Ue)(),Re=(0,re.Ue)(),Ue=(0,h.Ue)(),_e=(0,de.Ue)(),Ze=()=>a.Z.getLogger("esri.geometry.support.meshUtils.scale");function Fe(e,t,n){var r,o;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:i,spatialReference:s}=e,a=null!==(o=null===n||void 0===n?void 0:n.origin)&&void 0!==o?o:e.anchor,l=null===n||void 0===n?void 0:n.geographic,c=E(Ze,i,s,l);(0,_.QK)(e)?function(e,t,n){var r;null!==(r=e.transform)&&void 0!==r||(e.transform=new R.Z);const{vertexSpace:o,transform:i,spatialReference:s}=e,[a,l,c]=o.origin,u=new m.Z({x:a,y:l,z:c,spatialReference:s}),p=Ce;if(u.equals(n))(0,N.s)(p,0,0,0);else if(!(0,G.x1)(p,n,e))return void(0,M.pn)(Ze(),n.spatialReference,s,M.Gi);const f=(0,N.s)(Te,t,t,t),d=(0,pe.PS)(Ie,de.Wd,h.AG,f,p),{localMatrix:v}=i,g=(0,pe.Jp)(Ie,d,v);i.scale=(0,pe.Q$)((0,h.Ue)(),g),(0,pe.bA)(g,g,(0,N.i)(Ce,i.scale));const x=i.rotationAxis;i.rotation=(0,y.q_)(g),0===i.rotationAngle&&(i.rotationAxis=x),i.translation=(0,pe.i0)((0,h.Ue)(),g)}(e,t,a):c?function(e,t,n){const r=e.spatialReference,o=(0,ve.rS)(r),i=Ne;if(!(0,O.K)(n,i,o)&&((0,M.pn)(Ze(),n.spatialReference,o,"Falling back to mesh origin"),!(0,O.K)(e.origin,i,o)))return void(0,M.pn)(Ze(),e.origin.spatialReference,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;!(0,M.XO)(s,r,c)||null!=a&&null!=u&&!(0,M.Iz)(a,s,c,r,u)||null!=l&&null!=p&&!(0,M.wi)(l,s,c,r,p)?(0,M.pn)(Ze(),r,o):(Me(c,t,i),!(0,M.To)(c,s,r)||null!=a&&null!=u&&!(0,M.Yk)(u,s,c,r,a)||null!=l&&null!=p&&!(0,M.M2)(p,s,c,r,l)?(0,M.pn)(Ze(),o,r):e.vertexAttributesChanged())}(e,t,a):function(e,t,n){const r=Ne;if(!(0,O.K)(n,r,e.spatialReference)){const t=e.origin;return r[0]=t.x,r[1]=t.y,r[2]=t.z,void(0,M.pn)(Ze(),n.spatialReference,e.spatialReference,M.Gi)}Me(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}(e,t,a)}function Me(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.AG;if(e)for(let r=0;r<e.length;r+=3){for(let t=0;t<3;t++)Ce[t]=e[r+t]-n[t];(0,N.j)(Ce,Ce,t);for(let t=0;t<3;t++)e[r+t]=Ce[t]+n[t]}}const Ce=(0,h.Ue)(),Te=(0,h.Ue)(),Ie=(0,fe.Ue)(),Ne=(0,h.Ue)();var Oe;const Ee="esri.geometry.Mesh";function Ge(){return a.Z.getLogger(Ee)}const Pe={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:A.Z,local:S.Z}};let ke=Oe=class extends(s.Z.LoadableMixin((0,l.v)(v.Z))){constructor(e){super(e),this.components=null,this.vertexSpace=new A.Z,this.transform=null,this.metadata=new ne,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new U.Q,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,u.watch)((()=>{var e;return{vertexAttributes:this.vertexAttributes,components:null===(e=this.components)||void 0===e?void 0:e.map((e=>e.clone()))}}),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=(null===(e=this.metadata.displaySource)||void 0===e?void 0:e.extent)}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(0===o.length||e&&0===e.length)return new d.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if((0,_.zZ)(r)){const{_untransformedBounds:e,transform:n}=this;return function(e,t,n,r){var o;let[i,s,a,l,c,u]=e;null!==(o=C)&&void 0!==o||(C=new Float64Array(24));const p=C;return p[0]=i,p[1]=s,p[2]=a,p[3]=i,p[4]=c,p[5]=a,p[6]=l,p[7]=c,p[8]=a,p[9]=l,p[10]=s,p[11]=a,p[12]=i,p[13]=s,p[14]=u,p[15]=i,p[16]=c,p[17]=u,p[18]=l,p[19]=c,p[20]=u,p[21]=l,p[22]=s,p[23]=u,(0,M.project)({positions:p,transform:t,vertexSpace:n,inSpatialReference:r,outSpatialReference:r,outPositions:p}),I(p,r)}(e,n,r,t)}return I(o,t)}get _untransformedBounds(){return T(this.vertexAttributes.position)}get anchor(){const e=(0,_.rU)(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:n}=this._transformedExtent;return new m.Z({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=(0,_.rU)(this.vertexSpace,this.spatialReference);return null!=e?e:this._transformedExtent.center}get extent(){var e;return this.loaded||null==(null===(e=this.metadata)||void 0===e||null===(e=e.displaySource)||void 0===e?void 0:e.extent)?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(x.Z.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Ge().error("removeComponent()","Provided component is not part of the list of components")}}rotate(e,t,n,r){return(0,y.qw)(e,t,n,ze),ye(this,ze,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,i=null===o||void 0===o?void 0:o.position;if(!i)return this;if((0,_.zZ)(r)){const[o,i,s]=r.origin;r.origin=(0,h.al)(o+e,i+t,s+n)}else{for(let r=0;r<i.length;r+=3)i[r]+=e,i[r+1]+=t,i[r+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Fe(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(k(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(async function(e,t,r){const{source:o}=t,{loadGLTFMesh:i}=await(0,c.Hl)(Promise.all([n.e(58322),n.e(15010)]).then(n.bind(n,58883)),r),s=await V(o,r);(0,c.k_)(r);const a=i(new m.Z({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:q(s),signal:null===r||void 0===r?void 0:r.signal,expectedType:s.type});a.then((()=>s.dispose()),(()=>s.dispose()));const{vertexAttributes:l,components:u}=await a;e.vertexAttributes=l,e.components=u}(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone())}cloneAndModifyVertexAttributes(e,t){var n,r;let o=null;if(this.components){const e=new Map,t=new Map;o=this.components.map((n=>n.cloneWithDeduplication(e,t)))}const i={components:o,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:null!==(n=null===(r=this.transform)||void 0===r?void 0:r.clone())&&void 0!==n?n:null,metadata:this.metadata.clone()};return new Oe(i)}cloneShallow(){return new Oe({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([n.e(95477).then(n.bind(n,95477)),this.load(e)]);return(0,c.k_)(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(Ge().error(e,"Mesh must be loaded before applying operations"),!1)}static createBox(e,t){if(!(e instanceof m.Z))return Ge().error(".createBox()",w),null;const n=new Oe(ie(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=se,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,p=0;for(let f=0;f<e.length;f++){const r=e[f],h=l/3;for(const e of t)a[p++]=h+e;const d=r.corners;for(let e=0;e<4;e++){const t=d[e];let a=0;s[u++]=.25*n[e][0]+r.uvOrigin[0],s[u++]=r.uvOrigin[1]-.25*n[e][1];for(let e=0;e<3;e++)0!==r.axis[e]?(o[l++]=.5*r.axis[e],i[c++]=r.axis[e]):(o[l++]=.5*t[a++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}(),e,t));return null!==t&&void 0!==t&&t.imageFace&&"all"!==t.imageFace?function(e,t){const n=e.components[0],r=n.faces,o=ae[t],i=6*o,s=new Array(6),a=new Array(r.length-6);let l=0,c=0;for(let u=0;u<r.length;u++)u>=i&&u<i+6?s[l++]=r[u]:a[c++]=r[u];if(null!=e.vertexAttributes.uv){const t=new Float32Array(e.vertexAttributes.uv),n=4*o*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new x.Z({faces:s,material:n.material}),new x.Z({faces:a})],e}(n,t.imageFace):n}static createSphere(e,t){return e instanceof m.Z?new Oe(ie(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array((t-1)*n*2*3);let l=0,c=0,u=0,p=0;for(let f=0;f<=t;f++){const e=f/t*Math.PI+.5*Math.PI,r=Math.cos(e),h=Math.sin(e);le[2]=h;const d=0===f||f===t,v=d?n-1:n;for(let m=0;m<=v;m++){const e=m/v*2*Math.PI;le[0]=-Math.sin(e)*r,le[1]=Math.cos(e)*r;for(let t=0;t<3;t++)o[l]=.5*le[t],i[l]=le[t],++l;s[c++]=(m+(d?.5:0))/n,s[c++]=f/t,0!==f&&m!==n&&(f!==t&&(a[u++]=p,a[u++]=p+1,a[u++]=p-n),1!==f&&(a[u++]=p,a[u++]=p-n,a[u++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(Ge().error(".createSphere()",w),null)}static createCylinder(e,t){return e instanceof m.Z?new Oe(ie(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array(4*t*3);let a=0,l=0,c=0,u=0,p=0;for(let f=0;f<=5;f++){const e=0===f||5===f,n=f<=1||f>=4,h=2===f||4===f,d=e?t-1:t;for(let v=0;v<=d;v++){const m=v/d*2*Math.PI,g=e?0:.5;le[0]=g*Math.sin(m),le[1]=g*-Math.cos(m),le[2]=f<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=le[e],o[l++]=n?2===e?f<=1?1:-1:0:2===e?0:le[e]/g;i[c++]=(v+(e?.5:0))/t,i[c++]=f<=1?1*f/3:f<=3?1*(f-2)/3+1/3:1*(f-4)/3+2/3,h||0===f||v===t||(5!==f&&(s[u++]=p,s[u++]=p+1,s[u++]=p-t),1!==f&&(s[u++]=p,s[u++]=p-t,s[u++]=p-t-1)),p++}}return{position:r,normal:o,uv:i,faces:s}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(Ge().error(".createCylinder()",w),null)}static createPlane(e,t){var n;if(!(e instanceof m.Z))return Ge().error(".createPlane()",w),null;const r=null!==(n=null===t||void 0===t?void 0:t.facing)&&void 0!==n?n:"up",o=function(e,t){const n="number"==typeof t?t:null!=t?t.width:1,r="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(r,null===t||void 0===t?void 0:t.size);return new Oe(ie(function(e){const t=oe.facingAxisOrderSwap[e],n=oe.position,r=oe.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let a=0;a<4;a++){const e=s;for(let a=0;a<3;a++){const l=t[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=n[e+c]*u,i[s]=r[e+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(oe.uv),faces:new Uint32Array(oe.faces),isPlane:!0}}(r),e,{...t,size:o}))}static createFromPolygon(e,t){var n;if(!(e instanceof g.Z))return Ge().error(".createFromPolygon()","Expected polygon to be a Polygon instance"),null;const r=(0,Z.bT)(e);return new Oe({vertexAttributes:new U.Q({position:r.position}),components:[new x.Z({faces:r.faces,shading:"flat",material:null!==(n=null===t||void 0===t?void 0:t.material)&&void 0!==n?n:null})],spatialReference:e.spatialReference,vertexSpace:new A.Z})}static async createFromGLTF(e,t,r){if(!(e instanceof m.Z)){const e=new b;throw Ge().error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:o}=await(0,c.Hl)(Promise.all([n.e(58322),n.e(15010)]).then(n.bind(n,58883)),r);return new Oe(await o(e,t,r))}static async createFromFiles(e,t,n){(0,o.XV)(Ge(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});if(!(e instanceof m.Z)){const e=new b;throw(e=>{Ge().error(".createFromFiles()",e.message)})(e),e}if(null===n||void 0===n||!n.layer)throw new i.Z("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var r,o,i;const s=null!==(r=null===n||void 0===n?void 0:n.extent)&&void 0!==r?r:null,{spatialReference:a}=e,l=null!==(o=null===n||void 0===n||null===(i=n.transform)||void 0===i?void 0:i.clone())&&void 0!==o?o:new R.Z,c=(0,_.G7)(e,n),u={source:t,extent:s},p=new ne;return p.externalSources.push(u),new Oe({metadata:p,transform:l,vertexSpace:c,spatialReference:a})}static createIncomplete(e,t){var n,r;const{spatialReference:o}=e,s=null!==(n=null===t||void 0===t||null===(r=t.transform)||void 0===r?void 0:r.clone())&&void 0!==n?n:new R.Z,a=(0,_.G7)(e,t),l=new Oe({transform:s,vertexSpace:a,spatialReference:o});return l.addResolvingPromise(Promise.reject(new i.Z("mesh-incomplete","Mesh resources are not complete"))),l}};(0,r._)([(0,p.Cb)({type:[x.Z],json:{write:!0}})],ke.prototype,"components",void 0),(0,r._)([(0,p.Cb)({nonNullable:!0,types:Pe,constructOnly:!0,json:{write:!0}})],ke.prototype,"vertexSpace",void 0),(0,r._)([(0,p.Cb)({type:R.Z,json:{write:!0}})],ke.prototype,"transform",void 0),(0,r._)([(0,p.Cb)({constructOnly:!0})],ke.prototype,"metadata",void 0),(0,r._)([(0,p.Cb)()],ke.prototype,"hasExtent",null),(0,r._)([(0,p.Cb)()],ke.prototype,"_transformedExtent",null),(0,r._)([(0,p.Cb)()],ke.prototype,"_untransformedBounds",null),(0,r._)([(0,p.Cb)()],ke.prototype,"anchor",null),(0,r._)([(0,p.Cb)()],ke.prototype,"origin",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],ke.prototype,"extent",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],ke.prototype,"hasZ",void 0),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],ke.prototype,"hasM",void 0),(0,r._)([(0,p.Cb)({type:U.Q,nonNullable:!0,json:{write:!0}})],ke.prototype,"vertexAttributes",void 0),ke=Oe=(0,r._)([(0,f.j)(Ee)],ke);const ze=(0,y.Ue)(),Le=ke},76046:(e,t,n)=>{n.d(t,{Z:()=>m});var r,o=n(27366),i=n(46784),s=n(49861),a=(n(93169),n(32718),n(84936),n(69912)),l=n(29134),c=n(7025),u=n(68700),p=n(50894),f=n(12400),h=n(45238);let d=r=class extends i.wq{constructor(e){super(e),this.translation=(0,f.Ue)(),this.rotationAxis=(0,f.nI)(h.up),this.rotationAngle=0,this.scale=(0,f.al)(1,1,1)}get rotation(){return(0,h.uT)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,f.d9)((0,h.ZZ)(e)),this.rotationAngle=(0,h.EU)(e)}get localMatrix(){const e=(0,c.Ue)();return(0,u.yY)(v,(0,h.ZZ)(this.rotation),(0,h.WH)(this.rotation)),(0,l.Iw)(e,v,this.translation,this.scale),e}get localMatrixInverse(){return(0,l.U_)((0,c.Ue)(),this.localMatrix)}equals(e){return this===e||null!=e&&(0,l.I6)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,f.d9)(this.translation),rotationAxis:(0,f.d9)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,f.d9)(this.scale)};return new r(e)}};(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,o._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,o._)([(0,s.Cb)()],d.prototype,"rotation",null),(0,o._)([(0,s.Cb)()],d.prototype,"localMatrix",null),(0,o._)([(0,s.Cb)()],d.prototype,"localMatrixInverse",null),d=r=(0,o._)([(0,a.j)("esri.geometry.support.MeshTransform")],d);const v=(0,p.Ue)(),m=d},17493:(e,t,n)=>{n.d(t,{CP:()=>a,JG:()=>d,LL:()=>l,NZ:()=>c,fV:()=>v,vj:()=>g,yT:()=>x,zE:()=>y});var r=n(76200),o=n(63780),i=n(66978),s=n(18277);class a{constructor(e,t,n){this.assetName=e,this.assetMimeType=t,this.parts=n}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,o.fS)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const n=await Promise.all(t.map((t=>t.toBlob(e))));return(0,i.k_)(e),new Blob(n)}}class l{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}async toBlob(e){const{data:t}=await(0,r.Z)(this.partUrl,{responseType:"blob"});return(0,i.k_)(e),t}}function c(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(h);return h(e)}(null===e||void 0===e?void 0:e.source)}function u(e){return!!Array.isArray(e)&&e.every((e=>e instanceof a))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:n}=e;return p.test(t)||f.test(n)}return p.test(e.assetMimeType)||f.test(e.assetName)}function d(e,t){if(!e)return!1;const{source:n}=e;return function(e,t){if(Array.isArray(e)){const n=e;return n.length>0&&n.every((e=>m(e,t)))}return m(e,t)}(n,t)}function v(e,t){if(e===t)return!0;const{source:n}=e,{source:r}=t;if(n===r)return!0;if(u(n)&&u(r)){if(n.length!==r.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...n].sort(e),o=[...r].sort(e);for(let n=0;n<t.length;++n)if(!t[n].equals(o[n]))return!1;return!0}return!1}function m(e,t){return e instanceof a&&e.isOnService(t)}function g(e,t){var n;return e instanceof File?(0,s.dm)(e,t):null!==(n=(0,s.S0)(e.assetMimeType,t))&&void 0!==n?n:(0,s.Ow)(e.assetName,t)}function y(e){return Array.isArray(e)?e:[e]}function x(e){return!!e.original}},66149:(e,t,n)=>{n.d(t,{qk:()=>w,ur:()=>R,x1:()=>x});var r=n(32718),o=n(16889),i=n(68860),s=n(29303),a=n(21389),l=n(29134),c=n(7025),u=n(32035),p=n(12400),f=n(29691),h=n(37998),d=n(68859),v=n(69048),m=n(11186),g=n(11700);const y=()=>r.Z.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function x(e,t,n){let{vertexSpace:r,spatialReference:o}=n;if("georeferenced"===r.type){const n=e;if(!(0,d.K)(t,n,o))return!1;const{origin:i}=r;return(0,u.f)(e,n,i),!0}const i=(0,f.rS)(o),s=e;if(!(0,d.K)(t,s,i))return!1;const{origin:a}=r,c=M;if(!(0,h.B)(o,a,c,i))return!1;const p=(0,l.U_)(M,c);return null!=p&&((0,u.h)(e,s,p),!0)}function w(e,t,n){const{vertexSpace:r,transform:i,vertexAttributes:a}=e,p=S(e.spatialReference,n,C.SOURCE|C.TARGET);if((0,v.vI)(r,t)&&(!i||(0,l.I6)(i.localMatrix,c.Wd))&&(0,o.Po)(p,1)){const{position:e,normal:t,tangent:r}=a,o=null===n||void 0===n?void 0:n.allowBufferReuse;return{position:o?e:e.slice(),normal:o?t:null===t||void 0===t?void 0:t.slice(),tangent:o?r:null===r||void 0===r?void 0:r.slice()}}switch(e.vertexSpace.type){case"local":return"local"===t.type?function(e,t,n,r){let{vertexAttributes:o,spatialReference:i,transform:s}=e,{origin:a}=t;const c=(0,f.rS)(i);if(!(0,h.B)(i,a,U,c))return(0,g.pn)(y(),i,c),null;if(s&&(0,l.Jp)(U,U,s.localMatrix),!(0,h.B)(i,n,_,c))return(0,g.pn)(y(),c,i),null;(0,l.U_)(_,_);const u=(0,l.Jp)(U,_,U);return A(u,i,r,C.SOURCE|C.TARGET),b(o,u)}(e,e.vertexSpace,t.origin,n):function(e,t,n,r){let{spatialReference:o,vertexAttributes:i,transform:s}=e,{origin:a}=t;const c=(0,f.rS)(o);if(!(0,h.B)(o,a,U,c))return(0,g.pn)(y(),o,c),null;s&&(0,l.Jp)(U,U,s.localMatrix),A(U,o,r,C.SOURCE);const p=new Float64Array(i.position.length),d=function(e,t,n,r){(0,m.a)(r,e,t);const o=new Float64Array(e.length);return(0,g.To)(r,o,n)?o:((0,g.pn)(y(),(0,f.rS)(n),n),null)}(i.position,U,o,p);if(!d)return null;const v=function(e,t,n,r,o){if(null==n)return null;const i=new Float32Array(n.length);return(0,g.w9)(n,i,r),(0,g.Yk)(i,e,t,o,i)?i:((0,g.pn)(y(),(0,f.rS)(o),o),null)}(d,p,i.normal,U,o);if(i.normal&&!v)return null;const x=function(e,t,n,r,o){if(null==n)return null;const i=new Float32Array(n.length);return(0,g.VS)(n,i,r),(0,g.M2)(i,e,t,o,i)?i:((0,g.pn)(y(),(0,f.rS)(o),o),null)}(d,p,i.tangent,U,o);if(i.tangent&&!x)return null;if(n){const e=(0,u.k)(F,n);(0,m.b)(d,d,e)}return{position:d,normal:v,tangent:x}}(e,e.vertexSpace,t.origin,n);case"georeferenced":return"local"===t.type?function(e,t,n,r){let{vertexAttributes:o,spatialReference:i,transform:a}=e,{origin:c}=t;const u=(0,f.rS)(i);if(!(0,h.B)(i,n,U,u))return(0,g.pn)(y(),i,u),null;const p=1/S(i,r,C.TARGET);(0,l.bA)(U,U,[p,p,p]);const d=(0,l.U_)(_,U),{position:v,normal:x,tangent:w}=function(e,t,n){if(!t)return e;if(!n){const{position:n,normal:r,tangent:o}=e;return{position:(0,m.b)(new Float64Array(n.length),n,t),tangent:o,normal:r}}const r=b(e,n.localMatrix);return(0,m.b)(r.position,r.position,t),r}(o,c,a),A=new Float64Array(v.length),R=function(e,t,n,r){const o=(0,g.XO)(e,t,r);if(!o)return(0,g.pn)(y(),t,(0,f.rS)(t)),null;const i=new Float64Array(o.length);return(0,m.a)(i,o,n),i}(v,i,d,A);if(!R)return null;const F=(0,s.XL)(Z,d),M=function(e,t,n,r,o,i){if(null==e)return null;const s=null!==i&&void 0!==i?i:new Float32Array(e.length);return(0,g.Iz)(e,t,n,r,s)?((0,m.t)(s,s,o),s):((0,g.pn)(y(),r,(0,f.rS)(r)),null)}(x,v,A,i,F,x!==o.normal?x:void 0);if(!M&&x)return null;const T=function(e,t,n,r,o,i){if(null==e)return null;const s=null!==i&&void 0!==i?i:new Float32Array(e.length);return(0,g.wi)(e,t,n,r,s)?((0,m.t)(s,s,o,4),s):((0,g.pn)(y(),r,(0,f.rS)(r)),null)}(w,v,A,i,F,w!==o.tangent?w:void 0);return!T&&w?null:{position:R,normal:M,tangent:T}}(e,e.vertexSpace,t.origin,n):function(e,t,n,r){let{vertexAttributes:o,transform:i,spatialReference:s}=e,{origin:a}=t;const{position:l,normal:c,tangent:p}=i?b(o,i.localMatrix):o,f=new Float64Array(l.length);let h=l;if(a&&(h=(0,m.b)(f,h,a)),n){const e=(0,u.k)(F,n);h=(0,m.b)(f,h,e)}S(s,r,C.NONE);const d=null===r||void 0===r?void 0:r.allowBufferReuse;return{position:h!==o.position||d?h:h.slice(),normal:c!==o.normal||d?c:null===c||void 0===c?void 0:c.slice(),tangent:p!==o.tangent||d?p:null===p||void 0===p?void 0:p.slice()}}(e,e.vertexSpace,t.origin,n)}}function b(e,t){const n=new Float64Array(e.position.length);(0,m.a)(n,e.position,t);const r=e.normal?new Float32Array(e.normal.length):null,o=e.tangent?new Float32Array(e.tangent.length):null;return r&&e.normal&&(0,g.w9)(e.normal,r,t),o&&e.tangent&&(0,g.VS)(e.tangent,o,t),{position:n,normal:r,tangent:o}}function A(e,t,n,r){const o=S(t,n,r);1!==o&&(0,l.bA)(e,e,[o,o,o])}function S(e,t,n){const r=!!(n&C.SOURCE),o=!!(n&C.TARGET),i=null===t||void 0===t?void 0:t.sourceUnit,s=null===t||void 0===t?void 0:t.targetUnit;if(!i&&!s)return 1;let a=R(i,e);!r&&i&&1!==a&&(y().warn("source unit conversion not supported"),a=1);let l=1/R(s,e);return!o&&s&&1!==l&&(y().warn("target unit conversion not supported"),l=1),a*l}function R(e,t){if(null==e)return 1;const n=(0,i.r6)(t);return 1/(0,i.En)(n,"meters",e)}const U=(0,c.Ue)(),_=(0,c.Ue)(),Z=(0,a.Ue)(),F=(0,p.Ue)(),M=(0,c.Ue)();var C,T;(T=C||(C={}))[T.NONE=0]="NONE",T[T.SOURCE=1]="SOURCE",T[T.TARGET=2]="TARGET"}}]);
//# sourceMappingURL=63899.b939c997.chunk.js.map