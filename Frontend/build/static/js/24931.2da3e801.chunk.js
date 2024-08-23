"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[24931],{22052:(e,t,s)=>{s.d(t,{l:()=>o});const o={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}}},46939:(e,t,s)=>{s.d(t,{QH:()=>u,T$:()=>d,Xm:()=>n,iE:()=>p});var o=s(42537),r=s(93169),i=s(77427),l=s(38499);function n(e){return new a(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},s=arguments.length>2?arguments[2]:void 0;if(this.onProgress=t,this.taskName=s,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let t=0;t<e;t++){const s=t,o=1/e;this._weights[s]=o,this._progressMap.set(s,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[o,r]of this._progressMap.entries())e+=r*this._weights[o];if(1===e&&(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){var t;const e=Math.round(performance.now()-(null!==(t=this._startTime)&&void 0!==t?t:0))/1e3;console.log("".concat(this.taskName," done in ").concat(e," sec"));for(const[t,o]of this._timingsMap){var s;const r=Math.round(o.end-o.start)/1e3,i=Math.round(r/e*100);console.log(null!==(s=this.taskName)&&void 0!==s?s:"Task",{stepKey:t,stepTime:r,relativeTime:i})}}this.onProgress(e)}setProgress(e,t){if(this._progressMap.set(e,t),(0,r.Z)("enable-feature:esri-3dofl-upload-timings")){var s;const o=performance.now();null!==(s=this._startTime)&&void 0!==s||(this._startTime=o);const r=(0,i.s1)(this._timingsMap,e,(()=>({start:o,end:0})));1===t&&(r.end=o)}this.emitProgress()}simulate(e,t){return u((t=>this.setProgress(e,t)),t)}makeOnProgress(e){return t=>this.setProgress(e,t)}}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;const s=performance.now();e(0);const r=setInterval((()=>{const o=performance.now()-s,r=1-Math.exp(-o/t);e(r)}),f);return(0,o.kB)((()=>{clearInterval(r),e(1)}))}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return(0,l.up)((0,l._H)(e*g/t))}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return(0,l.up)((0,l._H)(e*g/t))}const h=10,c=10,g=8e-6,f=(0,l.HA)(50),v=(0,l.HA)(1e3)},85079:(e,t,s)=>{s.d(t,{Upload:()=>f});var o=s(27366),r=s(7138),i=s(14921),l=s(10064),n=s(98928),a=s(66978),u=s(49861),d=(s(93169),s(32718),s(84936),s(69912)),p=s(848),h=s(22052),c=s(18277),g=s(46939);let f=class extends r.default{constructor(){super({}),this.files=[],this.progress=0,this._uploadTask=null,this._layer=null}destroy(){this.cancel(),this.files=[],this._layer=null,this._uploadTask=null}get state(){const e=this._uploadTask;return e&&0!==this.files.length?e.finished?e.error?"error":"success":"pending":"default"}get result(){var e,t;return null!==(e=null===(t=this._uploadTask)||void 0===t?void 0:t.value)&&void 0!==e?e:null}get error(){var e,t;return null!==(e=null===(t=this._uploadTask)||void 0===t?void 0:t.error)&&void 0!==e?e:null}uploadTo(e){this.cancel(),this.files=[],this._layer=e,this._uploadTask=(0,i.vr)((async t=>{const s=await async function(e){const{resolve:t,promise:s}=(0,a.hh)(),o=document.createElement("input");o.type="file",o.multiple=!1,o.accept=[...(0,c.ir)(e.infoFor3D),".zip"].join(","),o.style.display="none",document.body.appendChild(o);const r=(0,n.on)(o,"change",(()=>t(o.files?Array.from(o.files):[])));return v?v(o):o.click(),s.finally((()=>{r.remove(),o.remove()}))}(e);(0,a.k_)(t),this.progress=0,this.files=s;const o=(0,g.Xm)(h.l.upload,(e=>{this.progress=e}),"Upload.uploadTo");if(0===s.length)return null;(0,a.k_)(t);const r=await e.extractAndFilterFiles(s);(0,a.k_)(t),r.length>0&&(this.files=r);const i=new p.Z({x:0,y:0,z:0,spatialReference:e.spatialReference}),u=await e.convertMesh(r,{location:i,signal:t,onProgress:o.makeOnProgress("createFromFiles")});if((0,a.k_)(t),!u)throw new l.Z("editor:upload","could not upload or convert model");const d=r.reduce(((e,t)=>e+t.size),0),f=o.simulate("loadMesh",(0,g.T$)(d));try{await u.load()}finally{f.remove()}return u}))}retry(){this._layer&&this.uploadTo(this._layer)}cancel(){var e;null===(e=this._uploadTask)||void 0===e||e.abort()}};(0,o._)([(0,u.Cb)()],f.prototype,"files",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"progress",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"state",null),(0,o._)([(0,u.Cb)()],f.prototype,"result",null),(0,o._)([(0,u.Cb)()],f.prototype,"error",null),(0,o._)([(0,u.Cb)()],f.prototype,"_uploadTask",void 0),(0,o._)([(0,u.Cb)()],f.prototype,"_layer",void 0),f=(0,o._)([(0,d.j)("esri.widgets.Editor.Upload")],f);let v=null}}]);
//# sourceMappingURL=24931.2da3e801.chunk.js.map