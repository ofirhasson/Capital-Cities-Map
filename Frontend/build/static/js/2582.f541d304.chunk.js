"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[2582],{2582:(e,t,n)=>{n.r(t),n.d(t,{ManipulatedObject3DMediaElement:()=>j});var o=n(27366),i=n(91505),r=n(42537),s=n(94172),l=n(49861),a=(n(93169),n(32718),n(84936),n(69912)),d=(n(59486),n(7138)),p=n(63780),c=n(46634),h=n(79803),u=n(17877),_=n(80885),y=n(848);let v=class extends d.default{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new c.R}initialize(){this.addHandles([(0,r.ed)(this._updatingHandles),this._updatingHandles.add((()=>{const e=this.element.georeference;return"control-points"===(null===e||void 0===e?void 0:e.type)?e.controlPoints:null}),(e=>this._elementControlPointsChanged(e)),s.initial)])}_elementControlPointsChanged(e){if(this._updatedElementControlPoints===e)return;const t=null===e||void 0===e?void 0:e.map((e=>{let{mapPoint:t}=e;return t})).filter(p.pC),n=this.view.spatialReference;this._updatingHandles.addPromise(this._whenProjected(t,n,(e=>{if(!e)return void this._replaceOperations(null);const{_operations:t}=this,o=new _.Z({rings:[e.map((e=>{let{x:t,y:n}=e;return[t,n]}))],spatialReference:n});null!==t&&void 0!==t&&t.trySetGeometry(o)?this.onModifiedExternally():this._replaceOperations(u.c.fromGeometry(o,this.view.state.viewingMode))})))}_operationsGeometryChanged(){var e;const{element:{georeference:t},_operations:n}=this;if(!n||!t||"control-points"!==t.type||!t.controlPoints)return;const o=n.data.geometry,i=t.controlPoints.map((e=>{let{mapPoint:t}=e;return t})).filter(p.pC);if((null===(e=o.rings[0])||void 0===e?void 0:e.length)!==i.length)return void this._updateElementControlPoints(null);const r=o.rings[0].map((e=>{let[t,n]=e;return new y.Z({x:t,y:n,spatialReference:o.spatialReference})})),s=i.map((e=>{let{spatialReference:t}=e;return t}));this._updatingHandles.addPromise(this._whenProjected(r,s,(e=>this._updateElementControlPoints(e))))}_updateElementControlPoints(e){var t;const{georeference:n}=this.element;if(!n||!e||"control-points"!==n.type||(null===(t=n.controlPoints)||void 0===t?void 0:t.length)!==(null===e||void 0===e?void 0:e.length))return;e||(n.controlPoints=null);const o=n.controlPoints;if((null===o||void 0===o?void 0:o.length)===e.length)for(let i=0;i<o.length;i++)o[i].mapPoint=e[i]}async _whenProjected(e,t,n){if(!e)return void n(e);const{_operations:o,element:{georeference:i}}=this,r=e.map((e=>{let{spatialReference:t}=e;return t})),s=Array.isArray(t)?t:new Array(r.length).fill(t);await(0,h.initializeProjection)(Array.from(r).map(((e,t)=>({source:e,dest:s[t]}))));const l=e.map(((e,t)=>(0,h.project)(e,s[t])));o===this._operations&&i===this.element.georeference&&n(l)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",(()=>this._operationsGeometryChanged())),e)}};(0,o._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"view",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"layer",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"element",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"onModifiedExternally",void 0),(0,o._)([(0,l.Cb)()],v.prototype,"_operations",void 0),(0,o._)([(0,l.Cb)()],v.prototype,"operations",null),(0,o._)([(0,l.Cb)()],v.prototype,"updating",null),v=(0,o._)([(0,a.j)("esri.views.3d.interactive.editingTools.media.MediaElementControllerControlPoints")],v);let m=class extends d.default{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new c.R}initialize(){this.addHandles([(0,r.ed)(this._updatingHandles),this._updatingHandles.add((()=>{var e;return null===(e=this.element.georeference)||void 0===e?void 0:e.coords}),(e=>this._elementCoordinatesChanged(e)),s.initial)])}_elementCoordinatesChanged(e){this._updatedElementCoordinates!==e&&this._updatingHandles.addPromise(this._whenProjected(e,this.view.spatialReference,(e=>{if(!e)return void this._replaceOperations(null);const{_operations:t}=this;null!==t&&void 0!==t&&t.trySetGeometry(e)?this.onModifiedExternally():this._replaceOperations(u.c.fromGeometry(e,this.view.state.viewingMode))})))}_operationsGeometryChanged(){const{element:{georeference:e},_operations:t}=this;if(!t||!e)return;const n=t.data.geometry;if(!e.coords)return void this._updateElementCoordinates(n);const o=e.coords.spatialReference;this._updatingHandles.addPromise(this._whenProjected(n,o,(e=>this._updateElementCoordinates(e))))}_updateElementCoordinates(e){const{georeference:t}=this.element;t&&(t.coords=e,this._updatedElementCoordinates=t.coords)}async _whenProjected(e,t,n){if(!e)return void n(e);const{_operations:o,element:{georeference:i}}=this,r=await(0,h.projectWithZConversion)(e,t);o===this._operations&&i===this.element.georeference&&n(r)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",(()=>this._operationsGeometryChanged())),e),this.onModifiedExternally()}};(0,o._)([(0,l.Cb)({constructOnly:!0})],m.prototype,"view",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],m.prototype,"layer",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],m.prototype,"element",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],m.prototype,"onModifiedExternally",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"_operations",void 0),(0,o._)([(0,l.Cb)()],m.prototype,"operations",null),(0,o._)([(0,l.Cb)()],m.prototype,"updating",null),m=(0,o._)([(0,a.j)("esri.views.3d.interactive.editingTools.media.MediaElementControllerShape")],m);var g=n(32035),C=n(12400),f=n(68859),b=n(17672),w=n(22136);function E(e,t,n){return P(e.allLayerViews.find((e=>e.layer===t)),n)}function P(e,t){if(!e||"media-3d"!==e.type||e.suspended)return!1;const n=e.layer.source;return!!n&&(n instanceof b.Z||n instanceof w.Z?n===t:"hasElement"in n&&n.hasElement(t))}let H=class extends d.default{grabbableForEvent(){return!0}constructor(e){super(e),this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.grabbing=!1,this.dragging=!1,this.hovering=!0,this.selected=!1,this.cursor=null,this.consumesClicks=!0,this.events=new i.Z.EventEmitter,this.addHandles((0,s.watch)((()=>this.selected),(e=>this.events.emit("select-changed",{action:e?"select":"deselect"})),s.sync))}destroy(){this._set("view",null)}intersectionDistance(e){const{view:t,layer:n,element:o}=this;if(!E(t,n,o))return null;const i=t.toMap(e,{include:{layer:n,element:o}});return i&&(0,f.K)(i,O,t.renderSpatialReference)?(0,g.p)(O,t.state.camera.eye):null}onElevationChange(){}onViewChange(){}};(0,o._)([(0,l.Cb)({constructOnly:!0,nonNullable:!0})],H.prototype,"element",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0,nonNullable:!0})],H.prototype,"layer",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0,nonNullable:!0})],H.prototype,"view",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"interactive",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"selectable",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"grabbable",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"grabbing",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"dragging",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"hovering",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"selected",void 0),(0,o._)([(0,l.Cb)()],H.prototype,"cursor",void 0),H=(0,o._)([(0,a.j)("esri.views.3d.interactive.editingTools.media.MediaElementManipulator3D")],H);const O=(0,C.Ue)(),M=Symbol();let j=class extends i.Z.EventedAccessor{get operations(){var e;return null===(e=this._controller)||void 0===e?void 0:e.operations}get elevationInfo(){return{mode:"on-the-ground",offset:0}}get _layerView(){const e=this.view.allLayerViews.find((e=>e.layer===this.layer));return"media-3d"===(null===e||void 0===e?void 0:e.type)?e:null}get visible(){return P(this._layerView,this.element)}get isDraped(){return!0}get origin(){return null}get updating(){var e;return!(null===(e=this._controller)||void 0===e||!e.updating)}get _controllerClass(){var e;return"transform"===this.tool||"control-points"!==(null===(e=this.element.georeference)||void 0===e?void 0:e.type)?m:v}constructor(e){super(e),this.tool="transform"}initialize(){this.addHandles([(0,s.watch)((()=>this._controllerClass),(e=>this._updateController(e)),s.syncAndInitial),(0,s.on)((()=>this._layerView),"element-render-changed",(e=>{let{element:t}=e;this.element===t&&this.emit("committed")}))])}toMap(e){const{layer:t,element:n}=this;return this.view.toMap(e,{include:{layer:t,element:n}})}createManipulator(e){const{view:t,layer:n,element:o}=this;return new H({view:t,layer:n,element:o,...e})}_updateController(e){if(this._controller&&this._controller instanceof e)return;this.removeHandles(M);const{view:t,layer:n,element:o}=this,i=()=>{this.emit("modified-externally")};this._controller=new e({view:t,layer:n,element:o,onModifiedExternally:i}),i(),this.addHandles((0,r.ed)(this._controller),M)}};(0,o._)([(0,l.Cb)({constructOnly:!0})],j.prototype,"view",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],j.prototype,"layer",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],j.prototype,"element",void 0),(0,o._)([(0,l.Cb)()],j.prototype,"tool",void 0),(0,o._)([(0,l.Cb)()],j.prototype,"_controller",void 0),(0,o._)([(0,l.Cb)()],j.prototype,"elevationInfo",null),(0,o._)([(0,l.Cb)()],j.prototype,"_layerView",null),(0,o._)([(0,l.Cb)()],j.prototype,"visible",null),(0,o._)([(0,l.Cb)()],j.prototype,"updating",null),(0,o._)([(0,l.Cb)()],j.prototype,"_controllerClass",null),j=(0,o._)([(0,a.j)("esri.views.3d.interactive.editingTools.ManipulatedObject3DMediaElement")],j)}}]);
//# sourceMappingURL=2582.f541d304.chunk.js.map