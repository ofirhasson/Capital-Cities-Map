"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[15421],{42069:(e,t,i)=>{i.d(t,{A:()=>h});var l=i(27366),r=i(42537),a=i(66978),n=i(94172),s=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),d=i(5354);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.kB)((()=>e.abort()))),await(0,n.whenOnce)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,a.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,l._)([(0,s.Cb)()],t.prototype,"view",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,l._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},77385:(e,t,i)=>{i.d(t,{r:()=>c});var l=i(27366),r=i(10064),a=i(94172),n=i(49861),s=(i(93169),i(32718),i(84936),i(69912)),o=i(20488),d=i(58890),h=i(53379),u=i(69787);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.hasMixedImageFormats=!0}get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get visibleAtCurrentScale(){if(!(0,u.Av)(this.layer.minScale,this.layer.maxScale)||!this.view.terrainScale)return!0;const e=Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.terrainScale));return e>=this.displayLevelRange.minLevel&&e<=this.displayLevelRange.maxLevel}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:l}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(l).scale}return{minScale:t,maxScale:i}}canResume(){var e,t,i;const l=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,u.Cy)(l)&&this.visibleAtCurrentTimeExtent||!1}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.W(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e){return this.layer.getTileUrl(e[0],e[1],e[2])}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new r.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));this.addResolvingPromise((0,a.whenOnce)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{var e;const t=this.view.basemapTerrain.tilingScheme,i="tilemapCache"in this.layer?null===(e=this.layer.tilemapCache)||void 0===e?void 0:e.effectiveMaxLOD:void 0,l=this._getTileInfoCompatibilityError(this.tileInfo,t,i);if(l)throw l})))}_getTileInfoSupportError(e,t){var i;const l=(0,h.er)(e,t,this.view.spatialReference,this.view.state.viewingMode,"tilemapCache"in this.layer?null===(i=this.layer.tilemapCache)||void 0===i?void 0:i.effectiveMaxLOD:void 0);if(!l)return;const a={layer:this.layer,error:l};switch(l.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":return new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);default:return new r.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}}_getTileInfoCompatibilityError(e,t,i){return null!=e&&t.compatibleWith(e,i)?null:new r.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},l=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!l)return i;const r=l.levels[0],a=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,a(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,a(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,l._)([(0,n.Cb)(d.q)],t.prototype,"updatingProgress",void 0),(0,l._)([(0,n.Cb)(d.V)],t.prototype,"updatingProgressValue",void 0),(0,l._)([(0,n.Cb)()],t.prototype,"hasMixedImageFormats",void 0),(0,l._)([(0,n.Cb)()],t.prototype,"fullExtent",null),(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),(0,l._)([(0,n.Cb)()],t.prototype,"dataScaleRange",null),(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,l._)([(0,n.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,l._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,l._)([(0,s.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},15421:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var l=i(27366),r=i(80987),a=i(32718),n=i(94172),s=i(49861),o=(i(93169),i(84936),i(69912)),d=i(37933),h=i(42069),u=i(77385),c=i(56667),p=i(67581),v=i(13107);let y=class extends((0,v.Z)((0,u.r)((0,h.A)(p.Z)))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)));const e=(0,n.whenOnce)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)));null!=e&&(null!==e.id&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)}));this.addResolvingPromise(e),this.when((()=>this._postInitialize()))}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return null!=e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async fetchTile(e,t){return(0,c.h)(this,e,t)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e||null===(e=e.activeLayer)||void 0===e?void 0:e.styleId}),(()=>this.refresh())),this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.activeLayer}),(e=>{const t=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)),!0);t&&null!=t.id&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileInfoMatrixSet(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=(0,d.mt)(this.layer);if(null!=i){if(r.Z.isCollection(i)){return i.find((i=>{const l=e(i);return null!=l&&(t?a.Z.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),null==l}))}const l=e(i);return null!=l&&(t?a.Z.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),i}return null}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};(0,l._)([(0,s.Cb)()],y.prototype,"layer",void 0),(0,l._)([(0,s.Cb)()],y.prototype,"suspended",void 0),(0,l._)([(0,s.Cb)()],y.prototype,"tileInfo",void 0),y=(0,l._)([(0,o.j)("esri.views.3d.layers.WMTSLayerView3D")],y);const g=y},56667:(e,t,i)=>{i.d(t,{h:()=>s});var l=i(32718),r=i(66978),a=i(71684),n=i(53379);async function s(e,t,i){const s=e.layer;if((0,n.FZ)(s)){const a=await s.fetchTile(t[0],t[1],t[2],i);if((0,r.Hc)(i))throw l.Z.getLogger(e).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),(0,r.zE)();return a}let o=e.getTileUrl(t);(0,a.d)(s)&&s.refreshTimestamp&&(o+="".concat(o.includes("?")?"&":"?","_ts=").concat(s.refreshTimestamp));const d=e.hasMixedImageFormats?"image+type":"image";return i.requester.request(o,d,i)}},67581:(e,t,i)=>{i.d(t,{Z:()=>y});var l=i(27366),r=i(7138),a=i(91505),n=i(79056),s=i(32718),o=i(92026),d=i(67426),h=i(49861),u=(i(93169),i(84936),i(69912)),c=i(46634),p=i(69787);let v=class extends((0,n.IG)((0,d.v)(a.Z.EventedMixin(r.default)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",l=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";s.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(l,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,l;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(l=this.parent)||void 0===l?void 0:l.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const l=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,p.Cy)(l)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const l=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.Cy)(l)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,l._)([(0,h.Cb)()],v.prototype,"view",void 0),(0,l._)([(0,h.Cb)()],v.prototype,"fullOpacity",null),(0,l._)([(0,h.Cb)()],v.prototype,"layer",void 0),(0,l._)([(0,h.Cb)()],v.prototype,"parent",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"suspended",null),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,l._)([(0,h.Cb)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,l._)([(0,h.Cb)()],v.prototype,"updateSuspended",null),(0,l._)([(0,h.Cb)()],v.prototype,"visible",null),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"visibleAtCurrentTimeExtent",null),v=(0,l._)([(0,u.j)("esri.views.layers.LayerView")],v);const y=v},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var l=i(27366),r=i(32718),a=i(66978),n=i(94172),s=(i(93169),i(84936),i(10064),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,l._)([(0,s.j)("esri.views.layers.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=15421.7d8ec6af.chunk.js.map