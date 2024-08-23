/*! For license information please see 69763.c94bf9be.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[69763],{69763:(e,t,i)=>{i.r(t),i.d(t,{arcgis_daylight:()=>r});var s=i(62042),o=i(62153),n=i(34872),h=i(20077);i(14285);const l=(0,h.m)(o.x),r=class{constructor(e){(0,s.r)(this,e),this.arcgisReady=(0,s.c)(this,"arcgisReady",7),this.manager=(0,n.u)(this),this.widget=l(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.currentSeason=this.viewModel.currentSeason,this.dayPlaying=this.viewModel.dayPlaying,this.yearPlaying=this.viewModel.yearPlaying,this.dateOrSeason=this.widget.dateOrSeason,this.icon=this.widget.icon,this.label=this.widget.label,this.headingLevel=this.widget.headingLevel,this.playSpeedMultiplier=this.widget.playSpeedMultiplier,this.timeSliderSteps=this.widget.timeSliderSteps,this.hideHeader=this.widget.visibleElements.header,this.hidePlayButtons=this.widget.visibleElements.playButtons,this.hideDatePicker=this.widget.visibleElements.datePicker,this.hideTimezone=this.widget.visibleElements.timezone,this.hideSunLightingToggle=this.widget.visibleElements.sunLightingToggle,this.hideShadowsToggle=this.widget.visibleElements.shadowsToggle,this.position="bottom-left"}async destroy(){await this.manager.destroy()}get el(){return(0,s.g)(this)}};r.style=""},20077:(e,t,i)=>{i.d(t,{m:()=>n});var s=i(34872),o=(i(62153),i(14285));const n=(e,t)=>(t,i)=>l(t,e,i);class h extends s.A{constructor(e,t,i){super(e,t,i),this._watchedViewModelProperties=new Map,this._watchedVisibleElementsProperties={},this._isBindingViewModel={value:!0},Object.defineProperty(this.exports,"viewModel",{value:s.a.makeGetterProxy(e,this._watchedViewModelProperties,this._isBindingViewModel)}),Object.defineProperty(this.exports,"visibleElements",{value:this._makeVisibleElementsBinder()})}hostConnected(){super.hostConnected(),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,o.a)(this.component)}async hostLoad(){if(this._watchedProperties.delete("viewModel"),await super.hostLoad(),this.component.manager.destroyed)return;this._watchMetaProperties(),s.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((()=>this.reactiveUtils.watch((()=>this._instance.viewModel),(e=>{this.component.viewModel=e}),{initial:!0})));const e=this._instance.viewModel;if("object"===typeof e)s.a.reEmitAccessorEvents(this,e,this.reactiveUtils,"viewModel"),s.a.watchComponentUpdates(this,e,this._watchedViewModelProperties),s.a.watchAccessorUpdates(this,e,this._watchedViewModelProperties);else if(this._watchedViewModelProperties.size>0)throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));const t=Object.entries(this._watchedVisibleElementsProperties);t.length>0&&this.onLifecycle((()=>t.map((e=>{var t;let i,[s,o]=e,n=null!==(t=this._instance.visibleElements)&&void 0!==t?t:{};for(const a of o.slice(0,-1)){if("object"!==typeof n[a]||null===n[a]){i=Boolean(n[a]);break}n=n[a]}var h;void 0===i&&(i=Boolean(null===(h=n[o.slice(-1)[0]])||void 0===h||h));s.startsWith("hide");const l=s.startsWith("hide")||s.startsWith("show")?s.startsWith("hide"):i,r=this.component;return"boolean"===typeof r[s]?this._updateWidgetVisibleElement(o,r[s],l):r[s]=!1,this.watch(s,(e=>this._updateWidgetVisibleElement(o,e,l)))}))))}_updateWidgetVisibleElement(e,t,i){var s;let o=null!==(s=this._instance.visibleElements)&&void 0!==s?s:{};for(const h of e.slice(0,-1))"object"===typeof o[h]&&null!==o[h]||(o[h]={}),o=o[h];const n=Boolean(i?!t:t);o[e.at(-1)]=n}hostLoaded(){var e;const{el:t}=this.component;null!==(e=t.childElem)&&void 0!==e||(t.childElem=document.createElement("div")),this._instance.container=t.childElem;let i=!1;const s=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:()=>{var e,t;return null!==(e=this._instance.view)&&void 0!==e?e:null===(t=this._instance.viewModel)||void 0===t?void 0:t.view},set:e=>{"view"in this._instance||"object"!==typeof this._instance.viewModel?this._instance.view=e:this._instance.viewModel.view=e,this._watchViewDestroy(),i||(i=!0,this.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),s&&(this._instance.view=s),this.component.el.isConnected&&((0,o.a)(this.component),this._watchViewDestroy())}hostDisconnected(){var e;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(e=e.ui)||void 0===e||e.remove(this.component.el.childElem))}hostDestroy(){var e;super.hostDestroy(),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}_watchMetaProperties(){this.watch("position",(e=>{null!=this.component.el.childElem&&"string"===typeof e&&(0,o.a)(this.component)})),this.watch("referenceElement",(()=>(0,o.a)(this.component)))}_makeVisibleElementsBinder(){return new Proxy({},{has:(e,t)=>"string"===typeof t||Reflect.has(e,t),get:(e,t)=>{if("symbol"===typeof t||t in Promise.prototype)return Reflect.get(e,t);const i=[t],s=this._makeRecursiveProxy(i);return this.component.manager.trackPropKey((e=>{if(void 0===e)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");this.component[e]=!1,this._watchedVisibleElementsProperties[e]=i}),s)}})}_makeRecursiveProxy(e){const t=new Proxy({},{get:(i,s)=>{const o=Reflect.get(i,s);return"symbol"===typeof s||s in Promise.prototype?o:(e.push(s),t)}});return t}_watchViewDestroy(){var e;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((()=>{var e;return!0===(null===(e=this.component.el.view)||void 0===e?void 0:e.destroyed)}),(()=>{this.component.destroy().catch(console.error)}),{sync:!0})}}const l=(0,s.p)(h)}}]);
//# sourceMappingURL=69763.c94bf9be.chunk.js.map