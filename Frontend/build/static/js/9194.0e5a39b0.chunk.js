"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[9194],{47898:(e,t,n)=>{n.d(t,{Fp:()=>c,GJ:()=>l,M1:()=>i,MQ:()=>h,Ww:()=>f,bA:()=>d,hw:()=>v,mE:()=>a,ne:()=>s,nn:()=>u,qF:()=>m,yG:()=>r,yP:()=>p});var o=n(68860);function i(e){return{value:e}}function r(e,t){return{type:(0,o.UF)(t),value:e,unit:t}}function s(e,t){return{type:(0,o.UF)(t),value:e,unit:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"arithmetic";return{type:(0,o.UF)(t),value:e,unit:t,rotationType:n}}function u(e,t){const n=a(e,t);return"angle"===e.type?l(n,t,e.rotationType):function(e,t){return{type:(0,o.UF)(t),value:e,unit:t}}(n,t)}function a(e,t){return(0,o.En)(e.value,e.unit,t)}function c(e,t){return null==e?t:null==t||e.value>(0,o.En)(t.value,t.unit,e.unit)?e:t}function d(e,t){return null==e?null:{...e,value:e.value*t}}function v(e,t,n){if(t===n)return e;switch(n){case"arithmetic":case"geographic":return 90-e}}const p=r(0,"meters"),h=s(0,"square-meters"),f=(l(0,"radians"),l(0,"degrees")),m=l(0,"degrees","geographic")},68859:(e,t,n)=>{n.d(t,{K:()=>s,U:()=>l});var o=n(12400),i=n(79803),r=n(50628);function s(e,t,n,o){var s,l;if((0,i.canProjectWithoutEngine)(e.spatialReference,n)){var a;u[0]=e.x,u[1]=e.y;const i=e.z;return u[2]=null!==(a=null!==i&&void 0!==i?i:o)&&void 0!==a?a:0,(0,r.projectBuffer)(u,e.spatialReference,0,t,n,0,1)}const c=(0,i.tryProjectWithZConversion)(e,n);return!!c&&(t[0]=null===c||void 0===c?void 0:c.x,t[1]=null===c||void 0===c?void 0:c.y,t[2]=null!==(s=null!==(l=null===c||void 0===c?void 0:c.z)&&void 0!==l?l:o)&&void 0!==s?s:0,!0)}async function l(e,t,n,o,r){return await(0,i.initializeProjection)(e.spatialReference,n,null,r),s(e,t,n,o)}const u=(0,o.Ue)()},5986:(e,t,n)=>{n.d(t,{S:()=>r});n(79803);var o=n(78952),i=n(68859);function r(e,t,n,o,r){return!(null==t||null==o||e.length<2)&&(s.x=e[0],s.y=e[1],s.z=e[2],s.spatialReference=t,(0,i.K)(s,n,o,r))}const s=(0,n(55946).T)(0,0,0,o.Z.WGS84)},55946:(e,t,n)=>{function o(e,t,n,o){return{x:e,y:t,z:n,hasZ:null!=n,hasM:!1,spatialReference:o,type:"point"}}function i(e,t,n,o,i){e.x=t,e.y=n,e.z=o,e.hasZ=null!=o,e.spatialReference=i}n.d(t,{T:()=>o,y:()=>i})},74509:(e,t,n)=>{n.d(t,{AA:()=>h,Jn:()=>a,LR:()=>Z,Lt:()=>v,O3:()=>w,Ou:()=>y,RL:()=>d,Uy:()=>x,VW:()=>u,W_:()=>E,Wb:()=>I,XH:()=>f,Zz:()=>s,ap:()=>g,fl:()=>p,fm:()=>k,jG:()=>U,kf:()=>M,mF:()=>l,tR:()=>T,tq:()=>C,vQ:()=>_,vu:()=>c,zx:()=>b});var o=n(68860),i=n(88152);function r(e){return e?U:T}function s(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}function l(e,t){return null!=t?t:r(e)}function u(e,t){return s(null!=e&&e.hasZ,t)}function a(e,t){return l(null!=e&&!!e.hasZ,t)}function c(e){const t=m(e);return u(e.geometry,t)}function d(e){const t=m(e),n=u(e.geometry,t);return{mode:n,offset:null!=t&&"on-the-ground"!==n?k(t):0,featureExpressionInfo:null===t||void 0===t?void 0:t.featureExpressionInfo}}function v(e){return f(d(e))}function p(e){return f(e)||h(e)}function h(e){var t;return"0"===(null===e||void 0===e||null===(t=e.featureExpressionInfo)||void 0===t?void 0:t.expression)}function f(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=null!==e&&void 0!==e&&e.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function m(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(null===e||void 0===e||!e.offset)return 0;const{offset:n,unit:i}=e;if("decimal-degrees"===i)return 0;const r="unknown"!==i&&i?i:"meters",s=(0,o.y)(t);return s?(0,o.En)(n,r,s):0}function y(e,t,n){var o,i;if(null===n||void 0===n||!n.mode)return;const r=e.hasZ?e.z:0,s=g(n,e.spatialReference);switch(n.mode){case"absolute-height":return r-s;case"on-the-ground":return 0;case"relative-to-ground":return r-((null!==(o=t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground"))&&void 0!==o?o:0)+s);case"relative-to-scene":return r-((null!==(i=t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene"))&&void 0!==i?i:0)+s)}}function _(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,o)}function b(e,t,n,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return w(e,t[0],t[1],t.length>2?t[2]:0,n,o,i)}function w(e,t,n,o,i,r){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==r)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:u}=C(t,n,o,i,e,r);return function(e,t,n,o,i,r,s,l){var u,a;const c=g(s,i);switch(l){case"absolute-height":return e-c;case"relative-to-ground":return e-((null!==(u=r.elevationProvider.getElevation(t,n,o,i,"ground"))&&void 0!==u?u:0)+c);case"relative-to-scene":return e-((null!==(a=r.elevationProvider.getElevation(t,n,o,i,"scene"))&&void 0!==a?a:0)+c)}}(u,t,n,o,i,e,s,l)}function C(e,t,n,o,i,r){const s=g(r,o);switch(r.mode){case"absolute-height":return{absoluteZ:n+s,elevation:0};case"on-the-ground":{var l;const n=null!==(l=i.elevationProvider.getElevation(e,t,0,o,"ground"))&&void 0!==l?l:0;return{absoluteZ:n,elevation:n}}case"relative-to-ground":{var u;const r=null!==(u=i.elevationProvider.getElevation(e,t,n,o,"ground"))&&void 0!==u?u:0;return{absoluteZ:n+r+s,elevation:r}}case"relative-to-scene":{var a;const r=null!==(a=i.elevationProvider.getElevation(e,t,n,o,"scene"))&&void 0!==a?a:0;return{absoluteZ:n+r+s,elevation:r}}}}function E(e,t){if(null==t)return!1;const{mode:n}=t;return null!=n&&("scene"===e&&"relative-to-scene"===n||"ground"===e&&"absolute-height"!==n)}function x(e,t,n){return n&&n.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function I(e,t,n){return(null===n||void 0===n?void 0:n.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function M(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function Z(e,t){t&&e.warn(".elevationInfo=",t)}function k(e){var t;return(null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t?t:0)*(0,i.Z7)(null===e||void 0===e?void 0:e.unit)}const U={mode:"absolute-height",offset:0},T={mode:"on-the-ground",offset:null}},44270:(e,t,n)=>{n.d(t,{u:()=>p});var o=n(42537),i=n(70758),r=n(80987),s=n(94172),l=n(22006),u=n(76014),a=n(98173);var c=n(27357),d=n(38856);const v=new Map;function p(e){if(!v.has(e)){const t=function(e,t){var n,o;const i=new a.Z({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:null!==(n=null===t||void 0===t?void 0:t.distance)&&void 0!==n?n:u.c.distance,touchSensitivityMultiplier:null!==(o=null===t||void 0===t?void 0:t.touchSensitivityMultiplier)&&void 0!==o?o:u.c.touchSensitivityMultiplier});return{...(0,s.watch)((()=>{var t,n;return null!==(t=null===(n=e.map)||void 0===n||null===(n=n.allLayers)||void 0===n?void 0:n.toArray())&&void 0!==t?t:[]}),(e=>{i.featureSources=new r.Z(e.map((e=>new l.Z({layer:e}))))}),s.initial),options:i}}(e,{distance:10}),n=function(e,t){return new d.N({view:e,options:t,snappingEnginesFactory:(t,n)=>[new c.U({view:e,spatialReference:e.spatialReference,options:n})]})}(e,t.options);v.set(e,{referenceCount:0,snappingManager:n,remove:()=>{t.remove(),n.destroy()}})}const t=v.get(e);t.referenceCount++;const n=(0,o.kB)((()=>function(e,t){t.referenceCount--,t.referenceCount>0||(0,i.Y)((()=>{0===t.referenceCount&&(t.remove(),v.delete(e))}))}(e,t)));return{snappingManager:t.snappingManager,...n}}},38561:(e,t,n)=>{n.d(t,{a:()=>a});var o=n(42537),i=n(90609),r=n(53397),s=n(5916),l=n(61309),u=n(41216);class a{draw(e,t){const n=function(e){const t=[];for(const n of e){let e=!0;for(const o of t)if(n.equals(o)){e=!1;break}e&&t.push(n)}return t}(e),a=this.sortUniqueHints(n),c=[];for(const o of a)o instanceof i.w&&c.push(this.visualizeIntersectionPoint(o,t)),o instanceof r.w&&c.push(this.visualizeLine(o,t)),o instanceof s.L&&c.push(this.visualizeParallelSign(o,t)),o instanceof u.y&&c.push(this.visualizeRightAngleQuad(o,t)),o instanceof l.n&&c.push(this.visualizePoint(o,t));return(0,o.AL)(c)}sortUniqueHints(e){return e}}},61309:(e,t,n)=>{n.d(t,{n:()=>r});var o=n(32035),i=n(55054);class r extends i.r{constructor(e,t,n){super(t,n),this.point=e}equals(e){return e instanceof r&&(0,o.e)(this.point,e.point)}}},32845:(e,t,n)=>{n.d(t,{V:()=>a});var o=n(27366),i=n(7138),r=n(32718),s=n(94172),l=n(49861),u=(n(93169),n(84936),n(69912));let a=class extends i.default{constructor(e){super(e),this.tool=null,this._loggedUnsupportedErrorOnce=!1,null!=(null===e||void 0===e?void 0:e.visible)&&(this.visible=e.visible)}initialize(){this.addHandles((0,s.watch)((()=>({ready:null!=this.view&&this.view.ready,supported:this.supported})),(e=>{let{ready:t,supported:n}=e;!t||n||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)}),s.syncAndInitial))}destroy(){this.removeTool(),this.view=null}get active(){return null!=this.tool&&this.tool.active}get disabled(){return null==this.view||!this.view.ready||!this.supported}get supported(){return null==this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this.removeHandles(t),null!=e&&this.addHandles(e.tools.on("after-remove",(e=>{e.item===this.tool&&this._set("tool",null)})),t)}set visible(e){this._set("visible",e),null!=this.tool&&(this.tool.visible=e)}createTool(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interactive:!1};if(this.removeTool(),null==this.view||!this.view.ready||!this.supported)return;const t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),(0,s.when)((()=>t.created),(()=>{t.active&&null!=this.view&&(this.view.activeTool=null)}),{initial:!0,once:!0})):t.destroy()}removeTool(){var e;const t=this.tool;if(null==t)return;const n=null===(e=this.view)||void 0===e?void 0:e.tools;null!=n?n.remove(t):t.destroy(),this._set("tool",null)}logError(){r.Z.getLogger(this).error(...arguments)}};(0,o._)([(0,l.Cb)({constructOnly:!0})],a.prototype,"tool",void 0),(0,o._)([(0,l.Cb)()],a.prototype,"active",null),(0,o._)([(0,l.Cb)()],a.prototype,"disabled",null),(0,o._)([(0,l.Cb)()],a.prototype,"supported",null),(0,o._)([(0,l.Cb)({value:null})],a.prototype,"view",null),(0,o._)([(0,l.Cb)({type:Boolean,value:!0})],a.prototype,"visible",null),a=(0,o._)([(0,u.j)("esri.widgets.support.InteractiveToolViewModel")],a)},15142:(e,t,n)=>{n.d(t,{s:()=>v});var o=n(27366),i=n(49861),r=(n(93169),n(32718),n(84936),n(69912)),s=n(33565),l=n(8905),u=n(10498),a=(n(80975),n(67005));const c="esri-measurement-widget-content",d={base:c,actions:"".concat(c,"__actions"),error:"".concat(c,"__error"),hint:"".concat(c,"__hint"),hintText:"".concat(c,"__hint-text"),panelError:"".concat(c,"__panel--error"),settings:"".concat(c,"__settings"),measurement:"".concat(c,"__measurement"),measurementItem:"".concat(c,"__measurement-item"),measurementItemDisabled:"".concat(c,"__measurement-item--disabled"),measurementItemTitle:"".concat(c,"__measurement-item__title"),measurementItemValue:"".concat(c,"__measurement-item__value")};let v=class extends s.Z{constructor(e,t){super(e,t)}loadDependencies(){return(0,l.h)({button:()=>Promise.all([n.e(92358),n.e(46895),n.e(54438),n.e(14105),n.e(32275)]).then(n.bind(n,32275))})}render(){return(0,a.u)("div",{class:d.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:n}=this;switch(n){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return(0,a.u)("section",{class:d.error,key:"unsupported"},(0,a.u)("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return(0,a.u)("section",{class:d.hint,key:"hint"},(0,a.u)("p",{class:d.hintText},e.hint))}_renderSettings(){return(0,a.u)("div",{class:d.settings,key:"settings"},(0,a.u)(u.m,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return(0,a.u)("section",{class:d.measurement,key:"measurement"},this.measurementItems.map((e=>this._renderMeasurementItem(e))))}_renderMeasurementItem(e){let{key:t,title:n,value:o}=e;return(0,a.u)("div",{class:this.classes(d.measurementItem,null==o&&d.measurementItemDisabled),key:t},(0,a.u)("span",{class:d.measurementItemTitle},n),(0,a.u)("span",{"aria-live":"polite",class:d.measurementItemValue},null!==o&&void 0!==o?o:this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return(0,a.u)("div",{class:d.actions},(0,a.u)("calcite-button",{class:this.newMeasurementButtonClass,disabled:"disabled"===this.state,onclick:this.onNewMeasurementClick},e.newMeasurement))}};(0,o._)([(0,i.Cb)()],v.prototype,"active",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"measurementItems",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"messages",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"newMeasurementButtonClass",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"onNewMeasurementClick",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"onUnitChange",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"state",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"supported",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"unit",void 0),(0,o._)([(0,i.Cb)()],v.prototype,"unitOptions",void 0),v=(0,o._)([(0,r.j)("esri.widgets.support.MeasurementWidgetContent")],v)},10498:(e,t,n)=>{n.d(t,{m:()=>p});var o=n(27366),i=n(68860),r=n(49861),s=(n(93169),n(32718),n(84936),n(69912)),l=n(33565),u=n(8905),a=(n(80975),n(80532)),c=n(67005);const d="esri-unit-select",v={base:d,label:"".concat(d,"__label"),select:"".concat(d,"__select")};let p=class extends l.Z{constructor(e,t){super(e,t),this._onSelectChange=e=>{this.onChange(e.target.value)}}loadDependencies(){return(0,u.h)({label:()=>Promise.all([n.e(92358),n.e(35738)]).then(n.bind(n,35738)),option:()=>n.e(19790).then(n.bind(n,19790)),select:()=>Promise.all([n.e(92358),n.e(54438),n.e(26369)]).then(n.bind(n,26369))})}render(){const{messages:e,options:t,selectLabel:n,value:o,_onSelectChange:r}=this;return(0,c.u)("div",{class:v.base,key:"units"},(0,c.u)("calcite-label",{class:v.label},n,(0,c.u)("calcite-select",{class:v.select,label:n,onCalciteSelectChange:r},t.map((t=>{var n;return(0,c.u)("calcite-option",{key:t,selected:t===o,value:t},(0,i.ZO)(t)?e.systems[t]:null===(n=e.units[t])||void 0===n?void 0:n.pluralCapitalized)})))))}};(0,o._)([(0,r.Cb)()],p.prototype,"options",void 0),(0,o._)([(0,r.Cb)()],p.prototype,"onChange",void 0),(0,o._)([(0,r.Cb)()],p.prototype,"selectLabel",void 0),(0,o._)([(0,r.Cb)()],p.prototype,"value",void 0),(0,o._)([(0,r.Cb)(),(0,a.H)("esri/core/t9n/Units")],p.prototype,"messages",void 0),p=(0,o._)([(0,s.j)("esri.widgets.support.UnitSelect")],p)}}]);
//# sourceMappingURL=9194.0e5a39b0.chunk.js.map