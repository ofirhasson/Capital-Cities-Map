/*! For license information please see 91033.eac508de.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[91033],{91033:(i,e,t)=>{t.r(e),t.d(e,{arcgis_scene:()=>l});var s=t(62042),a=t(53466),r=t(34872),n=t(62153),h=t(14285);const o=(0,r.m)(n.a0),c=(0,r.m)(n.a1),l=class{constructor(i){var e=this;(0,s.r)(this,i),this.arcgisViewReadyChange=(0,s.c)(this,"arcgisViewReadyChange",7),this.arcgisViewChange=(0,s.c)(this,"arcgisViewChange",7),this.arcgisViewClick=(0,s.c)(this,"arcgisViewClick",7),this.arcgisViewDoubleClick=(0,s.c)(this,"arcgisViewDoubleClick",7),this.arcgisViewDrag=(0,s.c)(this,"arcgisViewDrag",7),this.arcgisViewHold=(0,s.c)(this,"arcgisViewHold",7),this.arcgisViewImmediateClick=(0,s.c)(this,"arcgisViewImmediateClick",7),this.arcgisViewImmediateDoubleClick=(0,s.c)(this,"arcgisViewImmediateDoubleClick",7),this.arcgisViewKeyDown=(0,s.c)(this,"arcgisViewKeyDown",7),this.arcgisViewKeyUp=(0,s.c)(this,"arcgisViewKeyUp",7),this.arcgisViewLayerviewCreate=(0,s.c)(this,"arcgisViewLayerviewCreate",7),this.arcgisViewLayerviewCreateError=(0,s.c)(this,"arcgisViewLayerviewCreateError",7),this.arcgisViewLayerviewDestroy=(0,s.c)(this,"arcgisViewLayerviewDestroy",7),this.arcgisViewMouseWheel=(0,s.c)(this,"arcgisViewMouseWheel",7),this.arcgisViewPointerDown=(0,s.c)(this,"arcgisViewPointerDown",7),this.arcgisViewPointerEnter=(0,s.c)(this,"arcgisViewPointerEnter",7),this.arcgisViewPointerLeave=(0,s.c)(this,"arcgisViewPointerLeave",7),this.arcgisViewPointerMove=(0,s.c)(this,"arcgisViewPointerMove",7),this.arcgisViewPointerUp=(0,s.c)(this,"arcgisViewPointerUp",7),this.manager=(0,r.u)(this),this.reactiveUtils=(0,a.l)(n.i),this._map=o(this,{editConstructorProperties:this._editMapProperties}),this._setChildElement=i=>{this.el.childElem=i},this.autoDestroyDisabled=!1,this.view=this.manager.readonly(c(this,{editConstructorProperties:this._editViewProperties})),this.map=this.view.map,this.allLayerViews=this.view.allLayerViews,this.alphaCompositingEnabled=this.view.alphaCompositingEnabled,this.analyses=this.view.analyses,this.basemapView=this.view.basemapView,this.basemap=this._map.basemap,this.camera=this.manager.getSet(void 0,{get:()=>this.view.camera,set:(i,e)=>(0,h.c)(e,i)?i:e}),this.center=this.manager.getSet(void 0,{get:i=>{var e;return null!==(e=this.view.center)&&void 0!==e?e:i},set:i=>{const e=(0,h.p)(i,this.ready?this.view:void 0);return this.ready?(this.view.center=e,this.view.center):e}}),this.clippingArea=this.manager.getSet(this.view.clippingArea,{set:(i,e)=>null!==e&&void 0!==e&&e.equals(i)?e:i}),this.constraints=this.view.constraints,this.environment=this.manager.getSet(this.view.environment,{set:(i,e)=>(0,h.e)(e,i)?i:e}),this.extent=this.manager.getSet(void 0,{get:i=>{var e;return null!==(e=this.view.extent)&&void 0!==e?e:i},set:(i,e)=>this.view.ready?(!i||null!==e&&void 0!==e&&e.equals(i)||(this.view.extent=i),this.view.extent):i}),this.fatalError=this.view.fatalError,this.floors=this.view.floors,this.gamepad=this.manager.getSet(void 0,{get:()=>this.ready?this.view.input.gamepad:void 0,set:"ignore"}),this.graphics=this.view.graphics,this.ground=this._map.ground,this.groundView=this.view.groundView,this.highlightOptions=this.view.highlightOptions,this.interacting=this.manager.getSet(!1,{get:()=>this.view.interacting,set:"ignore"}),this.itemId=this.manager.getSet(void 0,{get:i=>{var e,t;return null!==(e=null===(t=this._map.portalItem)||void 0===t?void 0:t.id)&&void 0!==e?e:i},set:i=>(this.ready&&r.a.reCreate(this._map,this).then((()=>{this.view.map=this._map})).catch(console.error),i)}),this.layerViews=this.view.layerViews,this.magnifier=this.view.magnifier,this.navigating=this.manager.getSet(!1,{get:()=>this.view.navigating,set:"ignore"}),this.navigation=this.view.navigation,this.padding=this.view.padding,this.performanceInfo=this.manager.getSet(void 0,{get:()=>this.view.performanceInfo,set:"ignore"}),this.popup=this.view.popup,this.popupDisabled=this.view.popupEnabled,this.qualityProfile=this.view.qualityProfile,this.ready=this.view.ready,this.resolution=this.manager.getSet(void 0,{get:()=>this.view.resolution,set:"ignore"}),this.scale=this.manager.getSet(void 0,{get:i=>{var e;return null!==(e=this.view.scale)&&void 0!==e?e:i},set:i=>(this.ready&&(this.view.scale=i),i)}),this.spatialReference=this.manager.getSet(this.view.spatialReference,{set:(i,e)=>null!==e&&void 0!==e&&e.equals(i)?e:i}),this.stationary=this.manager.getSet(!0,{get:()=>this.view.stationary,set:"ignore"}),this.suspended=this.view.suspended,this.theme=this.view.theme,this.timeExtent=this.view.timeExtent,this.toMap=this.manager.readonly((function(){return e.view.toMap(...arguments)})),this.toScreen=this.manager.readonly((function(){return e.view.toScreen(...arguments)})),this.updating=this.view.updating,this.viewingMode=this.view.viewingMode,this.viewpoint=this.manager.getSet(void 0,{get:()=>this.view.viewpoint,set:(i,e)=>(0,h.i)(e,i)?i:e}),this.zoom=this.manager.getSet(void 0,{get:i=>{var e;return null!==(e=this.view.zoom)&&void 0!==e?e:i},set:i=>(this.ready&&(this.view.zoom=i),i)})}async addLayer(i,e){var t;null===(t=this.map)||void 0===t||t.add(i,e)}async addLayers(i,e){var t;null===(t=this.map)||void 0===t||t.addMany(i,e)}async closePopup(){var i;null===(i=this.view)||void 0===i||i.closePopup()}async destroy(){await this.manager.destroy()}async goTo(i,e){var t;return await(null===(t=this.view)||void 0===t?void 0:t.goTo(i,e))}async hitTest(i,e){var t;return await(null===(t=this.view)||void 0===t?void 0:t.hitTest(i,e))}async openPopup(i){var e;await(null===(e=this.view)||void 0===e?void 0:e.openPopup(i))}async takeScreenshot(i){var e;return await(null===(e=this.view)||void 0===e?void 0:e.takeScreenshot(i))}async tryFatalErrorRecovery(){var i;null===(i=this.view)||void 0===i||i.tryFatalErrorRecovery()}async whenAnalysisView(i){var e;return await(null===(e=this.view)||void 0===e?void 0:e.whenAnalysisView(i))}async whenLayerView(i){var e;return await(null===(e=this.view)||void 0===e?void 0:e.whenLayerView(i))}componentDidLoad(){var i,e;null!==(i=(e=this.view).container)&&void 0!==i||(e.container=this.el.childElem);const{watch:t}=this.reactiveUtils;this.manager.onLifecycle((()=>[t((()=>this.view.stationary),(()=>{this.arcgisViewChange.emit()}),{initial:!0}),t((()=>this.view.ready),(()=>this.arcgisViewReadyChange.emit()),{initial:this.view.ready})])),r.a.reEmitAccessorEvents(this.manager,this.view,this.reactiveUtils,"arcgisView")}render(){return(0,s.h)("div",{key:"6ba77135d59e49e02877423619ed7dad7cd01d19",class:"arcgis-scene",ref:this._setChildElement})}_editMapProperties(i){this.map&&(this._map=this.map),this.itemId?i.portalItem={id:this.itemId}:this.basemap||(i.basemap="topo-vector"),this.ground||(i.ground="world-elevation");const{basemap:e,...t}=i;return e||(i=t),i}_editViewProperties(i){var e;this.view.ui||(i.ui={components:["attribution"]}),null!==(e=i.map)&&void 0!==e||(i.map=this._map);const t=(0,h.p)(this.center,void 0);return t&&(i.center=t),this.viewpoint&&(i.viewpoint=this.viewpoint),void 0!==this.scale&&(i.scale=this.scale),this.extent&&(i.extent=this.extent),this.camera&&(i.camera=this.camera),void 0!==this.zoom&&(i.zoom=this.zoom),i}get el(){return(0,s.g)(this)}};l.style=".arcgis-scene{padding:0;margin:0;height:100%;width:100%}"},53466:(i,e,t)=>{t.d(e,{l:()=>r,m:()=>n,u:()=>h});var s=t(34872),a=t(62153),r=i=>(0,s.b)(i),n=i=>function(){let{blocking:e=!1,name:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.b)(((s,r)=>{if(r.onLifecycle((()=>(0,a.s)(s.el,i("./assets"),(i=>{var e;let{t9nLocale:t,t9nStrings:a,lang:n}=i;r.exports={...a,_lang:n,_t9nLocale:t};const h=null!==(e=a.componentLabel)&&void 0!==e?e:a.widgetLabel;var o;"string"===typeof h&&"label"in s&&null==s.label&&(null!==(o=s.label)&&void 0!==o||(s.label=h))}),t))),e)return r.ready;const n=(0,a.g)(s.el);return{_lang:n.lang,_t9nLocale:n.t9nLocale}}))},h=i=>c,o="arcgisPropertyChange",c=function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return(0,s.b)(((i,t)=>{const s=i;i.manager.isLit&&(s[o]={emit:e=>{const t=new CustomEvent(o,{detail:e,cancelable:!0});return i.el.dispatchEvent(t),t}});const a=s[o];return t.onLoad((()=>t.onLifecycle((()=>e.map((e=>i.manager.watch(e,(()=>a.emit({name:e}))))))))),a}))}}}]);
//# sourceMappingURL=91033.eac508de.chunk.js.map