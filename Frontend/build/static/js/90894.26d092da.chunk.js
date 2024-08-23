/*! For license information please see 90894.26d092da.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[90894],{90894:(e,t,i)=>{i.r(t),i.d(t,{arcgis_time_slider:()=>h});var s=i(62042),o=i(62153),n=i(53466),l=i(34872),r=i(20077);i(14285);const a=(0,r.m)(o.aa),h=class{constructor(e){(0,s.r)(this,e),this.arcgisReady=(0,s.c)(this,"arcgisReady",7),this.arcgisPropertyChange=(0,s.c)(this,"arcgisPropertyChange",7),this.widgetTriggerAction=(0,s.c)(this,"arcgisTriggerAction",7),this.manager=(0,l.u)(this),this.widget=a(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=(0,n.u)()("effectiveStops","fullTimeExtent","timeExtent","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.actions=this.widget.actions,this.disabled=this.widget.disabled,this.effectiveStops=this.widget.effectiveStops,this.fullTimeExtent=this.widget.fullTimeExtent,this.icon=this.widget.icon,this.label=this.widget.label,this.layout=this.widget.layout,this.loop=this.widget.loop,this.mode=this.widget.mode,this.playRate=this.widget.playRate,this.stops=this.widget.stops,this.tickConfigs=this.widget.tickConfigs,this.timeExtent=this.widget.timeExtent,this.timeVisible=this.widget.timeVisible,this.timeZone=this.widget.timeZone,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}async applyTimeSliderSettings(e){Object.assign(this,e)}async next(){var e;null===(e=this.widget)||void 0===e||e.next()}async play(){var e;null===(e=this.widget)||void 0===e||e.play()}async previous(){var e;null===(e=this.widget)||void 0===e||e.previous()}async stop(){var e;null===(e=this.widget)||void 0===e||e.stop()}async updateWebDocument(e){var t;null===(t=this.widget)||void 0===t||t.updateWebDocument(e)}get el(){return(0,s.g)(this)}};h.style="arcgis-time-slider{}"},53466:(e,t,i)=>{i.d(t,{l:()=>n,m:()=>l,u:()=>r});var s=i(34872),o=i(62153),n=e=>(0,s.b)(e),l=e=>function(){let{blocking:t=!1,name:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.b)(((s,n)=>{if(n.onLifecycle((()=>(0,o.s)(s.el,e("./assets"),(e=>{var t;let{t9nLocale:i,t9nStrings:o,lang:l}=e;n.exports={...o,_lang:l,_t9nLocale:i};const r=null!==(t=o.componentLabel)&&void 0!==t?t:o.widgetLabel;var a;"string"===typeof r&&"label"in s&&null==s.label&&(null!==(a=s.label)&&void 0!==a||(s.label=r))}),i))),t)return n.ready;const l=(0,o.g)(s.el);return{_lang:l.lang,_t9nLocale:l.t9nLocale}}))},r=e=>h,a="arcgisPropertyChange",h=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,s.b)(((e,i)=>{const s=e;e.manager.isLit&&(s[a]={emit:t=>{const i=new CustomEvent(a,{detail:t,cancelable:!0});return e.el.dispatchEvent(i),i}});const o=s[a];return i.onLoad((()=>i.onLifecycle((()=>t.map((t=>e.manager.watch(t,(()=>o.emit({name:t}))))))))),o}))}},20077:(e,t,i)=>{i.d(t,{m:()=>n});var s=i(34872),o=(i(62153),i(14285));const n=(e,t)=>(t,i)=>r(t,e,i);class l extends s.A{constructor(e,t,i){super(e,t,i),this._watchedViewModelProperties=new Map,this._watchedVisibleElementsProperties={},this._isBindingViewModel={value:!0},Object.defineProperty(this.exports,"viewModel",{value:s.a.makeGetterProxy(e,this._watchedViewModelProperties,this._isBindingViewModel)}),Object.defineProperty(this.exports,"visibleElements",{value:this._makeVisibleElementsBinder()})}hostConnected(){super.hostConnected(),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,o.a)(this.component)}async hostLoad(){if(this._watchedProperties.delete("viewModel"),await super.hostLoad(),this.component.manager.destroyed)return;this._watchMetaProperties(),s.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((()=>this.reactiveUtils.watch((()=>this._instance.viewModel),(e=>{this.component.viewModel=e}),{initial:!0})));const e=this._instance.viewModel;if("object"===typeof e)s.a.reEmitAccessorEvents(this,e,this.reactiveUtils,"viewModel"),s.a.watchComponentUpdates(this,e,this._watchedViewModelProperties),s.a.watchAccessorUpdates(this,e,this._watchedViewModelProperties);else if(this._watchedViewModelProperties.size>0)throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));const t=Object.entries(this._watchedVisibleElementsProperties);t.length>0&&this.onLifecycle((()=>t.map((e=>{var t;let i,[s,o]=e,n=null!==(t=this._instance.visibleElements)&&void 0!==t?t:{};for(const h of o.slice(0,-1)){if("object"!==typeof n[h]||null===n[h]){i=Boolean(n[h]);break}n=n[h]}var l;void 0===i&&(i=Boolean(null===(l=n[o.slice(-1)[0]])||void 0===l||l));s.startsWith("hide");const r=s.startsWith("hide")||s.startsWith("show")?s.startsWith("hide"):i,a=this.component;return"boolean"===typeof a[s]?this._updateWidgetVisibleElement(o,a[s],r):a[s]=!1,this.watch(s,(e=>this._updateWidgetVisibleElement(o,e,r)))}))))}_updateWidgetVisibleElement(e,t,i){var s;let o=null!==(s=this._instance.visibleElements)&&void 0!==s?s:{};for(const l of e.slice(0,-1))"object"===typeof o[l]&&null!==o[l]||(o[l]={}),o=o[l];const n=Boolean(i?!t:t);o[e.at(-1)]=n}hostLoaded(){var e;const{el:t}=this.component;null!==(e=t.childElem)&&void 0!==e||(t.childElem=document.createElement("div")),this._instance.container=t.childElem;let i=!1;const s=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:()=>{var e,t;return null!==(e=this._instance.view)&&void 0!==e?e:null===(t=this._instance.viewModel)||void 0===t?void 0:t.view},set:e=>{"view"in this._instance||"object"!==typeof this._instance.viewModel?this._instance.view=e:this._instance.viewModel.view=e,this._watchViewDestroy(),i||(i=!0,this.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),s&&(this._instance.view=s),this.component.el.isConnected&&((0,o.a)(this.component),this._watchViewDestroy())}hostDisconnected(){var e;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(e=e.ui)||void 0===e||e.remove(this.component.el.childElem))}hostDestroy(){var e;super.hostDestroy(),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}_watchMetaProperties(){this.watch("position",(e=>{null!=this.component.el.childElem&&"string"===typeof e&&(0,o.a)(this.component)})),this.watch("referenceElement",(()=>(0,o.a)(this.component)))}_makeVisibleElementsBinder(){return new Proxy({},{has:(e,t)=>"string"===typeof t||Reflect.has(e,t),get:(e,t)=>{if("symbol"===typeof t||t in Promise.prototype)return Reflect.get(e,t);const i=[t],s=this._makeRecursiveProxy(i);return this.component.manager.trackPropKey((e=>{if(void 0===e)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");this.component[e]=!1,this._watchedVisibleElementsProperties[e]=i}),s)}})}_makeRecursiveProxy(e){const t=new Proxy({},{get:(i,s)=>{const o=Reflect.get(i,s);return"symbol"===typeof s||s in Promise.prototype?o:(e.push(s),t)}});return t}_watchViewDestroy(){var e;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((()=>{var e;return!0===(null===(e=this.component.el.view)||void 0===e?void 0:e.destroyed)}),(()=>{this.component.destroy().catch(console.error)}),{sync:!0})}}const r=(0,s.p)(l)}}]);
//# sourceMappingURL=90894.26d092da.chunk.js.map