"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[23344,45739],{50863:(e,t,n)=>{n.d(t,{h:()=>l});var i=n(45739);function l(e,t,n){if(null==(null===e||void 0===e?void 0:e.timeInfo))return null;const{datesInUnknownTimezone:l=!1,timeOffset:r,useViewTime:o}=e;let s=e.timeExtent;l&&(s=(0,i.Jb)(s));let u=o?t&&s?t.intersection(s):t||s:s;return!u||u.isEmpty||u.isAllTime?u:(r&&(u=u.offset(-r.value,r.unit)),l&&(u=(0,i.b3)(u)),u.equals(n)?n:u)}},83217:(e,t,n)=>{n.d(t,{x:()=>i});const i=Symbol("WebScene")},45739:(e,t,n)=>{n.d(t,{getTimeSliderSettingsFromWebDocument:()=>v,Jb:()=>f,b3:()=>c});var i=n(62044),l=n(63780),r=(n(44927),n(84652)),o=(n(32718),n(86710)),s=n(38675),u=n(83217);function a(e){return void 0!==e.timeInfo}async function m(e,t){var n,r;return null!==(n=null===(r=e.widgets)||void 0===r||null===(r=r.timeSlider)||void 0===r?void 0:r.fullTimeExtent)&&void 0!==n?n:async function(e,t){if(0===e.length)return i.Z.allTime;await Promise.all(e.map((e=>e.load({signal:t}))));const n=e.filter(a),r=e.filter((e=>!a(e)&&null!=e.visibilityTimeExtent));if(0===n.length&&0===r.length)return i.Z.allTime;const o=[],s=[];for(const i of n){var u;"feature"!==(null===i||void 0===i?void 0:i.type)&&"map-image"!==(null===i||void 0===i?void 0:i.type)||null===(u=i.timeInfo)||void 0===u||!u.hasLiveData?s.push(i):o.push(i)}const m=e=>null==e||e.isAllTime,d=[...s.map((e=>{var t,n;const i=null===(t=e.timeInfo)||void 0===t?void 0:t.fullTimeExtent,{visibilityTimeExtent:l}=e;return null!==(n=null===i||void 0===i?void 0:i.intersection(l))&&void 0!==n?n:l})),...r.map((e=>e.visibilityTimeExtent))];if(d.some(m))return i.Z.allTime;const p=o.map((async e=>{var n,i,l,r;const o=null!==(n=null===(i=await e.fetchRecomputedExtents({signal:t}))||void 0===i?void 0:i.timeExtent)&&void 0!==n?n:null===(l=e.timeInfo)||void 0===l?void 0:l.fullTimeExtent,{visibilityTimeExtent:s}=e;return null!==(r=null===o||void 0===o?void 0:o.intersection(s))&&void 0!==r?r:s})),v=(await Promise.allSettled(p)).map((e=>"fulfilled"===e.status?e.value:null));if(v.some(m))return i.Z.allTime;const c=[...v,...d].filter(l.pC);return 0===c.length?i.Z.allTime:c.reduce(((e,t)=>e.union(t)))}(e.allLayers,t)}function d(e){const{numStops:t,stopInterval:n,stops:i}=e;return i?{dates:(0,r.d9)(i)}:n?{interval:n.clone()}:{count:null!==t&&void 0!==t?t:5}}function p(e,t){var n;const l=e.currentTimeExtent;if(!l)return null;const{start:r,end:o}=l,s=null!==(n=null!==r&&void 0!==r?r:o)&&void 0!==n?n:null;switch(t){case"time-window":return new i.Z({start:r,end:o});case"cumulative-from-start":return new i.Z({start:null,end:s});case"cumulative-from-end":return new i.Z({start:s,end:null});case"instant":return new i.Z({start:s,end:s})}}async function v(e,t){var n,i;if(!(0,s.s)(e)&&!function(e){return null!=e&&"object"==typeof e&&u.x in e}(e))return null;await e.load({signal:t});const l=null===e||void 0===e||null===(n=e.widgets)||void 0===n?void 0:n.timeSlider;if(!l)return null;const r=await m(e,t),o=l.loop,a=function(e){var t;const n=null!==(t=e.numThumbs)&&void 0!==t?t:2,i=e.currentTimeExtent;if(i){const{start:e,end:t}=i;return null!=e&&null!=t&&e.getTime()===t.getTime()?"instant":2===n?"time-window":null==e||0===e.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===n?"time-window":"cumulative-from-start"}(l);return{fullTimeExtent:r,loop:o,mode:a,playRate:null!==(i=l.stopDelay)&&void 0!==i?i:2e3,stops:d(l),timeExtent:p(l,a)}}function c(e){if(!e)return e;const{start:t,end:n}=e;return new i.Z({start:null!=t?(0,o.Nm)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=n?(0,o.Nm)(n,-n.getTimezoneOffset(),"minutes"):n})}function f(e){if(!e)return e;const{start:t,end:n}=e;return new i.Z({start:null!=t?(0,o.Nm)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=n?(0,o.Nm)(n,n.getTimezoneOffset(),"minutes"):n})}},23344:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(27366),l=(n(32718),n(93169),n(84936),n(10064),n(69912)),r=n(69229),o=n(21881),s=n(32645),u=n(45008);let a=class extends((0,o.Z)(r.Z)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add((()=>this.exportImageVersion),(()=>this._updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new s.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,u.K)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){var e;null===(e=this._popupHighlightHelper)||void 0===e||e.destroy()}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};a=(0,i._)([(0,l.j)("esri.views.3d.layers.MapImageLayerView3D")],a);const m=a},21881:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(27366),l=n(49861),r=(n(93169),n(32718),n(84936),n(69912)),o=n(44041),s=n(50863);const u=e=>{let t=class extends e{initialize(){this.exportImageParameters=new o.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return(0,s.h)(this.layer,null===(e=this.view)||void 0===e?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,i._)([(0,l.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,l.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,i._)([(0,r.j)("esri.views.layers.MapImageLayerView")],t),t}}}]);
//# sourceMappingURL=23344.35118de0.chunk.js.map