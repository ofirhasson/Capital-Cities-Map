"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[9714],{42069:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(27366),a=s(42537),l=s(66978),r=s(94172),n=s(49861),o=(s(93169),s(32718),s(84936),s(69912)),d=s(5354);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,a.kB)((()=>e.abort()))),await(0,r.whenOnce)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,l.k_)(t);const s=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(s)throw s}};return(0,i._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,i._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},9714:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var i,a,l=s(27366),r=(s(59486),s(10064)),n=s(32718),o=s(94172),d=s(49861),h=(s(93169),s(84936),s(69912)),u=s(32035),c=s(12400),p=s(5986),y=s(41414),v=s(92975),b=s(42069),w=s(39261),m=s(20488),g=s(23224),_=s(67581),f=s(69787),S=s(78952);(a=i||(i={}))[a.API=1]="API",a[a.VerboseAPI=2]="VerboseAPI",a[a.Error=3]="Error";const V=(0,c.Ue)(),L=(0,c.Ue)();let W=class extends((0,g.i)((0,b.A)(_.Z))){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e,t;return null!==(e=null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:""}get wasmLayerId(){return this._wasmLayerId}initialize(){var e;if(this._dbgFlags.add(i.Error),"local"!==this.view.viewingMode)throw new r.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(null===(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||void 0===e||!e.textureFloat)throw new r.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const t=this.layer.spatialReference;if(!(0,v.fS)(t,this.view.spatialReference))throw new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,a=this.layer.getVolume(s),l=this.layer.getVariable(s);if(null!=a&&null!=l){const e=a.dimensions[0],t=a.dimensions[1],s=a.zDimension;if(s>1){const i=a.dimensions[s],r=e.size*t.size*i.size;let n=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":n=2;break;case"Int32":case"UInt32":case"Float32":n=4}this._futureMemory=n*r}}const n=(0,w.JF)(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=(0,o.watch)((()=>this.suspended),(e=>{const t=(0,w.$L)(this.view);t&&t.setEnabled(this,!e)}),o.initial),this.addHandles([(0,o.watch)((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),(0,o.watch)((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),(0,o.watch)((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),(0,o.watch)((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),(0,o.watch)((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),(0,o.watch)((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),(0,o.watch)((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),(0,o.watch)((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),(0,o.watch)((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e))),(0,o.watch)((()=>[this.layer.timeOffset,this.layer.timeExtent,this.layer.useViewTime]),(()=>this._updateLayerTimeProperties())),(0,o.watch)((()=>this.slicePlaneEnabled),(e=>this._pushAnalysisSliceToWasm(e,this.view.slicePlane))),(0,o.watch)((()=>this.view.slicePlane),(e=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,e)))])})).catch((e=>{if((0,w.mq)(this),this._wasmLayerId=-1,-1===e)throw new r.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new r.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(n)}destroy(){(0,w.mq)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=(0,w.$L)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new m.W(this.usedMemory)}get visibleAtCurrentScale(){return(0,f.GB)(this.layer.effectiveScaleRange,this.view.terrainScale)}whenGraphicBounds(e,t){const s=e.attributes["Voxel.WorldPosition"];if(s){const e=(0,y.cS)(),t=JSON.parse(s);if((0,p.S)(t,this.view.renderSpatialReference,L,this.view.spatialReference||S.Z.WGS84))return(0,y.pp)(e,L),Promise.resolve({boundingBox:e,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=(0,w.$L)(this.view);null===e||void 0===e||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=(0,w.$L)(this.view);null===e||void 0===e||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){var e;const t=(0,w.$L)(this.view);return null!==(e=null===t||void 0===t?void 0:t.getLayerTimes(this))&&void 0!==e?e:[]}getCurrentLayerTimeIndex(){var e;const t=(0,w.$L)(this.view);return null!==(e=null===t||void 0===t?void 0:t.getCurrentLayerTimeIndex(this))&&void 0!==e?e:0}_pushRenderModeToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setRenderMode(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setStaticSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setCurrentVariable(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setVariableStyles(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,t){const s=null!=t?t:this.layer.enableSlices;for(let i=0;i<e.length;++i){const t=e[i];for(const e of t.slices)e.enabled=e.enabled&&s}}_pushVolumeStylesToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),t&&(this._accountForEnableSlices(e,null),t.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,t){const s=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(s?"have WASM":"don't have WASM!!!"));let a=!1;if(s){if(t){const i=t.origin;(0,u.b)(V,t.basis1,t.basis2),(0,u.n)(V,V),a=s.setAnalysisSlice(this,e,i,V)}else(0,u.s)(V,0,0,1),a=s.setAnalysisSlice(this,!1,V,V);a||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_updateLayerTimeProperties(){const e=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._updateLayerTimeProperties() called, "+(e?"have WASM":"don't have WASM!!!")),e&&e.updateLayerTimeProperties(this)}_pushEnableDynamicSectionsToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableDynamicSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const t=(0,w.$L)(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),t){const s=this.layer.getVolumeStyles();this._accountForEnableSlices(s,e),t.setVolumeStyles(this,s)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableIsosurfaces(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const t=(0,w.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,t){return e}_dbg(e,t){this._dbgFlags.has(e)&&(e===i.Error?n.Z.getLogger(this).error(t):n.Z.getLogger(this).warn(t))}};(0,l._)([(0,d.Cb)()],W.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],W.prototype,"baseUrl",null),(0,l._)([(0,d.Cb)({type:Boolean})],W.prototype,"slicePlaneEnabled",void 0),(0,l._)([(0,d.Cb)({readOnly:!0})],W.prototype,"visibleAtCurrentScale",null),W=(0,l._)([(0,h.j)("esri.views.3d.layers.VoxelLayerView3D")],W);const I=W},23224:(e,t,s)=>{s.d(t,{i:()=>o});var i=s(27366),a=s(10064),l=(s(32718),s(93169),s(84936),s(69912)),r=s(37270),n=s(24405);const o=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:s}=t;if(!s)throw new a.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,n.V5)(t,e))throw new a.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeaturesFromGraphics(e,t){if(this._validateFetchPopupFeatures(t),0===e.length)return[];const s="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=(0,r.Lk)(this.layer.fieldsIndex,await(0,n.e7)(s,(0,n.V5)(this.layer,t)))),await this.prepareFetchPopupFeatures(i);const a=new Set,l=[],o=[];for(const n of e)(0,r.Gm)(i,n,a)?o.push(n):l.push(n);if(0===o.length)return l;const d=new Map;for(let r=0;r<e.length;r++){var h;d.set(null!==(h=e[r].getObjectId())&&void 0!==h?h:0,r)}const u=await this.whenGraphicAttributes(o,[...a]).catch((()=>o)).then((e=>l.concat(e)));return u.sort(((e,t)=>{var s,i,a,l;const r=null!==(s=e.getObjectId())&&void 0!==s?s:0,n=null!==(i=d.get(r))&&void 0!==i?i:0,o=null!==(a=t.getObjectId())&&void 0!==a?a:0;return n-(null!==(l=d.get(o))&&void 0!==l?l:0)})),u}};return t=(0,i._)([(0,l.j)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},67581:(e,t,s)=>{s.d(t,{Z:()=>v});var i=s(27366),a=s(7138),l=s(91505),r=s(79056),n=s(32718),o=s(92026),d=s(67426),h=s(49861),u=(s(93169),s(84936),s(69912)),c=s(46634),p=s(69787);let y=class extends((0,r.IG)((0,d.v)(l.Z.EventedMixin(a.default)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const s=this.layer&&this.layer.id||"no id",i=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";n.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(s,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,s,i;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(s=null===(i=this.parent)||void 0===i?void 0:i.fullOpacity)&&void 0!==s?s:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,s=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!s||!t.intersection(s).isEmpty}canResume(){var e,t,s;const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(s=this.view)||void 0===s?void 0:s.ready)&&(0,p.Cy)(i)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const s=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0);const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.Cy)(i)&&this.visibleAtCurrentScale||(s.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(s.outsideVisibilityTimeExtent=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,i._)([(0,h.Cb)()],y.prototype,"view",void 0),(0,i._)([(0,h.Cb)()],y.prototype,"fullOpacity",null),(0,i._)([(0,h.Cb)()],y.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],y.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,i._)([(0,h.Cb)()],y.prototype,"updateSuspended",null),(0,i._)([(0,h.Cb)()],y.prototype,"visible",null),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,i._)([(0,h.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,i._)([(0,u.j)("esri.views.layers.LayerView")],y);const v=y},24405:(e,t,s)=>{s.d(t,{V5:()=>l,e7:()=>a,zc:()=>r});var i=s(37270);async function a(e){var t,s;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==a)return[];const l=await a.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=a,{objectIdField:n,typeIdField:o,globalIdField:d,relationships:h}=e;if(l.includes("*"))return["*"];const u=r?(0,i.CH)(e):[],c=(0,i.Q0)(e.fieldsIndex,[...l,...u]);return o&&c.push(o),c&&n&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(n)&&!c.includes(n)&&c.push(n),c&&d&&null!==(s=e.fieldsIndex)&&void 0!==s&&s.has(d)&&!c.includes(d)&&c.push(d),h&&h.forEach((t=>{var s;const{keyField:i}=t;c&&i&&(null===(s=e.fieldsIndex)||void 0===s?void 0:s.has(i))&&!c.includes(i)&&c.push(i)})),c}function l(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function r(e,t){return null!=l(e,{defaultPopupTemplateEnabled:t})}}}]);
//# sourceMappingURL=9714.d2c037f5.chunk.js.map