"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[82186],{65457:(e,t,i)=>{i.d(t,{y:()=>b});var s=i(27366),r=i(80987),n=i(60354),a=i(10064),l=i(94172),o=i(49861),h=(i(93169),i(32718),i(84936),i(69912)),d=i(33624),p=i(64634),c=i(97816),u=i(20921),y=i(33109);let g=class extends y.Z{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],g.prototype,"path",void 0),g=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],g);const v=g;var w=i(69787);const f=r.Z.ofType({key:"type",base:null,typeMap:{rect:c.Z,path:v,geometry:u.Z}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.watch)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.syncAndInitial),(0,l.watch)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.syncAndInitial),(0,l.watch)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.syncAndInitial),(0,l.watch)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.syncAndInitial),(0,l.watch)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.syncAndInitial),(0,l.watch)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.syncAndInitial),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.syncAndInitial),(0,l.watch)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,w.GB)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),l.syncAndInitial)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:f,set(e){const t=(0,n.Z)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},82186:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(27366),r=i(52639),n=i(63780),a=i(80987),l=i(42537),o=i(94172),h=(i(32718),i(93169),i(10064),i(69912)),d=i(8841),p=i(65457),c=i(75391),u=i(85992),y=i(67581);const g="sublayers",v="layerView";let w=class extends((0,p.y)(y.Z)){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){var t;let i;"number"==typeof e?i=[e]:e instanceof r.Z?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.Z.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray());const s=null===(t=i)||void 0===t?void 0:t.filter(n.pC);return null!==s&&void 0!==s&&s.length?(this._addHighlight(s),(0,l.kB)((()=>this._removeHighlight(s)))):(0,l.kB)()}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if(null!=i&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new c.Z(this.view.featuresTilingScheme),r=new u.Z({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([(0,o.watch)((()=>s.visible),(e=>r.container.visible=e),o.initial),(0,o.watch)((()=>r.updating),(()=>this.notifyChange("updating")),o.initial)],v)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,o.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),g)}detach(){this._destroyGraphicsViews(),this.removeHandles(g)}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(v);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new c.Z(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const n=new u.Z({view:t,graphics:s.graphics,requestUpdateCallback:i,container:r});this.addHandles([s.on("graphic-update",n.graphicUpdateHandler),(0,o.watch)((()=>s.visible),(e=>n.container.visible=e),o.initial),(0,o.watch)((()=>n.updating),(()=>this.notifyChange("updating")),o.initial)],v),this.container.addChild(n.container),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=(0,d.ck)("highlight");for(const i of this.graphicsViews())i.setHighlight(e.map((e=>({objectId:e,highlightFlags:t}))))}};w=(0,s._)([(0,h.j)("esri.views.2d.layers.MapNotesLayerView2D")],w);const f=w},75391:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(80613),r=i(39444),n=i(39594);class a extends r.K{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.jx.MAP:this._renderChildren(e,s.Xq.All);break;case s.jx.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.P9)(e,!1,(e=>{this._renderChildren(e,s.Xq.Highlight)}))}}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(27366),r=i(7138),n=i(91505),a=i(79056),l=i(32718),o=i(92026),h=i(67426),d=i(49861),p=(i(93169),i(84936),i(69912)),c=i(46634),u=i(69787);let y=class extends((0,a.IG)((0,h.v)(n.Z.EventedMixin(r.default)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,u.Cy)(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,u.Cy)(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],y.prototype,"view",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],y.prototype,"updateSuspended",null),(0,s._)([(0,d.Cb)()],y.prototype,"visible",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],y);const g=y},33109:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(27366),r=i(46784),n=i(49861),a=(i(93169),i(32718),i(84936),i(69912));let l=class extends r.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.Cb)({readOnly:!0})],l.prototype,"version",null),l=(0,s._)([(0,a.j)("esri.views.layers.support.ClipArea")],l);const o=l},97816:(e,t,i)=>{i.d(t,{Z:()=>h});var s,r=i(27366),n=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),l=i(33109);let o=s=class extends l.Z{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,n.Cb)({type:[Number,String],json:{write:!0}})],o.prototype,"left",void 0),(0,r._)([(0,n.Cb)({type:[Number,String],json:{write:!0}})],o.prototype,"right",void 0),(0,r._)([(0,n.Cb)({type:[Number,String],json:{write:!0}})],o.prototype,"top",void 0),(0,r._)([(0,n.Cb)({type:[Number,String],json:{write:!0}})],o.prototype,"bottom",void 0),o=s=(0,r._)([(0,a.j)("esri.views.layers.support.ClipRect")],o);const h=o},20921:(e,t,i)=>{i.d(t,{Z:()=>y});var s,r=i(27366),n=(i(59486),i(49861)),a=(i(93169),i(32718),i(84936),i(69912)),l=i(32238),o=i(77981),h=i(33109),d=i(53866),p=i(80885);const c={base:l.Z,key:"type",typeMap:{extent:d.Z,polygon:p.Z}};let u=s=class extends h.Z{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.Cb)({types:c,json:{read:o.im,write:!0}})],u.prototype,"geometry",void 0),u=s=(0,r._)([(0,a.j)("esri.views.layers.support.Geometry")],u);const y=u}}]);
//# sourceMappingURL=82186.e6bccce0.chunk.js.map