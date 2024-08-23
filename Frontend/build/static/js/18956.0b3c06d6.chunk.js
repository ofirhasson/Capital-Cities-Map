"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[18956],{97942:(e,t,n)=>{function o(e){let t,n,o=[],r=!1;return function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return r&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(s,o)||(n=e.apply(this,s),t=this,o=s,r=!0),n}}n.d(t,{H:()=>o})},90868:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(27366),i=n(46784),s=n(49861),l=(n(93169),n(32718),n(84936),n(27135)),a=n(69912);let d=o=class extends i.wq{constructor(e){super(e),this.type="cloudy",this.cloudCover=.5}clone(){return new o({cloudCover:this.cloudCover})}};(0,r._)([(0,l.J)({cloudy:"cloudy"})],d.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),d=o=(0,r._)([(0,a.j)("esri.views.3d.environment.CloudyWeather")],d);const c=d},89110:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(27366),i=n(46784),s=n(49861),l=(n(93169),n(32718),n(84936),n(27135)),a=n(69912);let d=o=class extends i.wq{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new o({fogStrength:this.fogStrength})}};(0,r._)([(0,l.J)({foggy:"foggy"})],d.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"fogStrength",void 0),d=o=(0,r._)([(0,a.j)("esri.views.3d.environment.FoggyWeather")],d);const c=d},61052:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(27366),i=n(46784),s=n(49861),l=(n(93169),n(32718),n(84936),n(27135)),a=n(69912);let d=o=class extends i.wq{constructor(e){super(e),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new o({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,r._)([(0,l.J)({rainy:"rainy"})],d.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"precipitation",void 0),d=o=(0,r._)([(0,a.j)("esri.views.3d.environment.RainyWeather")],d);const c=d},37063:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(27366),i=n(46784),s=n(49861),l=(n(93169),n(32718),n(84936),n(27135)),a=n(69912);let d=o=class extends i.wq{constructor(e){super(e),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new o({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,r._)([(0,l.J)({snowy:"snowy"})],d.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"precipitation",void 0),(0,r._)([(0,s.Cb)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],d.prototype,"snowCover",void 0),d=o=(0,r._)([(0,a.j)("esri.views.3d.environment.SnowyWeather")],d);const c=d},3389:(e,t,n)=>{n.d(t,{Z:()=>c});var o,r=n(27366),i=n(46784),s=n(49861),l=(n(93169),n(32718),n(84936),n(27135)),a=n(69912);let d=o=class extends i.wq{constructor(e){super(e),this.type="sunny",this.cloudCover=.5}clone(){return new o({cloudCover:this.cloudCover})}};(0,r._)([(0,l.J)({sunny:"sunny"})],d.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],d.prototype,"cloudCover",void 0),d=o=(0,r._)([(0,a.j)("esri.views.3d.environment.SunnyWeather")],d);const c=d},50902:(e,t,n)=>{n.d(t,{$T:()=>h,Hr:()=>a,T$:()=>d,b8:()=>c,nq:()=>u});var o=n(90868),r=n(89110),i=n(61052),s=n(37063),l=n(3389);const a={key:"type",base:l.Z,typeMap:{sunny:l.Z,cloudy:o.Z,rainy:i.Z,snowy:s.Z,foggy:r.Z}},d=Object.keys(a.typeMap);function c(e,t){return!!d.includes(e)||(t.error('"'.concat(e,'" is not a valid weather type')),!1)}const u=1e4,h=1e5},18956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var o=n(27366),r=n(97942),i=n(49861),s=(n(93169),n(32718)),l=(n(84936),n(69912)),a=n(50902),d=n(33565),c=n(8905),u=n(7021),h=n(96919),p=n(80975),y=n(80532),v=n(67005);const b="esri-weather",g={base:b,content:"".concat(b,"__content"),hasError:"".concat(b,"__content--has-error"),selector:"".concat(b,"__selector"),options:"".concat(b,"__options"),optionsHidden:"".concat(b,"__options--hidden"),error:"".concat(b,"__error"),warning:"".concat(b,"__warning")},w={base:"".concat("".concat(b,"__labeled-slider"))};var C,_;!function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"}(C||(C={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.NoAtmosphere="no-atmosphere",e.UnsupportedView="unsupported-view"}(_||(_={}));let m=class extends d.Z{constructor(e){super(e),this._onChange=e=>{this.onChange(e.target.value)}}render(){const{label:e}=this;return(0,v.u)("div",{class:w.base},(0,v.u)("calcite-label",{scale:"s"},e,(0,v.u)("calcite-slider",{"aria-label":e,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderChange:this._onChange,onCalciteSliderInput:this._onChange})))}loadDependencies(){return(0,c.h)({label:()=>Promise.all([n.e(92358),n.e(35738)]).then(n.bind(n,35738)),slider:()=>Promise.all([n.e(92358),n.e(46895),n.e(54438),n.e(69008)]).then(n.bind(n,69008))})}};(0,o._)([(0,i.Cb)()],m.prototype,"value",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"onChange",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"disabled",void 0),m=(0,o._)([(0,l.j)("esri.widgets.Weather.LabeledSlider")],m);var f=n(7138);let k=class extends f.default{constructor(e){super(e),this.header=!0}};(0,o._)([(0,i.Cb)({type:Boolean,nonNullable:!0})],k.prototype,"header",void 0),k=(0,o._)([(0,l.j)("esri.widgets.Weather.VisibleElements")],k);const S=k;var N=n(94172),M=n(90868),W=n(89110),x=n(61052),j=n(37063),T=n(3389);let Z=class extends f.default{constructor(e){super(e),this.view=null,this._weatherByType={sunny:new T.Z,cloudy:new M.Z,rainy:new x.Z,snowy:new j.Z,foggy:new W.Z},this._settingWeather=!1}initialize(){this.addHandles([(0,N.watch)((()=>this.current),(e=>{this._settingWeather||null==e||(this._weatherByType={...this._weatherByType,[e.type]:e})}),N.syncAndInitial)])}get state(){const e=this.view;return null!=e&&e.ready?null!=this.error?this.error===_.NotVisible?C.Ready:C.Error:C.Ready:C.Disabled}get weatherByType(){return this._weatherByType}get error(){const e=this.view;return null!=e&&e.ready?"3d"!==e.type?_.UnsupportedView:"local"===e.viewingMode?_.LocalScene:e.environment.atmosphereEnabled?e.environmentManager.weatherVisible?null:_.NotVisible:_.NoAtmosphere:null}get current(){var e,t;return null!==(e=null===(t=this._environment)||void 0===t?void 0:t.weather)&&void 0!==e?e:this._weatherByType.sunny}set current(e){const t=this._environment;t&&(t.weather=e)}get _environment(){const e=this.view;return null!=e&&"3d"===e.type?e.environment:null}setWeatherByType(e){if(!(0,a.b8)(e,s.Z.getLogger(this)))return;const t=this._environment;null!=t&&(this._settingWeather=!0,t.weather=this._weatherByType[e],this._settingWeather=!1)}setSnowCoverEnabled(e){const t=this.current;"snowCover"in t&&(t.snowCover=e?"enabled":"disabled")}};(0,o._)([(0,i.Cb)()],Z.prototype,"view",void 0),(0,o._)([(0,i.Cb)()],Z.prototype,"state",null),(0,o._)([(0,i.Cb)()],Z.prototype,"_weatherByType",void 0),(0,o._)([(0,i.Cb)()],Z.prototype,"weatherByType",null),(0,o._)([(0,i.Cb)()],Z.prototype,"error",null),(0,o._)([(0,i.Cb)()],Z.prototype,"current",null),(0,o._)([(0,i.Cb)()],Z.prototype,"_environment",null),Z=(0,o._)([(0,l.j)("esri.widgets.Weather.WeatherViewModel")],Z);const B=Z,E={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};let D=class extends d.Z{constructor(e){super(e),this.viewModel=new B,this.headingLevel=4,this.visibleElements=new S,this._renderWeatherTypeButton=e=>{const t=this.viewModel,n=this.messages[e].label,o=t.state===C.Disabled,r=!o&&t.current.type===e;return(0,v.u)("calcite-button",{appearance:r?"solid":"outline","aria-checked":r?"true":"false",disabled:o,iconStart:E[e],key:"".concat(e,"-type-button"),kind:r?"brand":"neutral",label:n,onclick:()=>{r||t.setWeatherByType(e)},scale:"l",title:n})},this._memoizedCallbacks=(0,r.H)((e=>({onCloudCoverChange:t=>{"cloudCover"in e&&(e.cloudCover=t)},onPrecipitationChange:t=>{"precipitation"in e&&(e.precipitation=t)},onFogStrengthChange:t=>{"fogStrength"in e&&(e.fogStrength=t)},onSnowCoverChange:e=>{this.viewModel.setSnowCoverEnabled(e.target.checked)}})))}render(){const e=this.viewModel.state===C.Disabled;return(0,v.u)("div",{"aria-label":this.messages.widgetLabelAccessible,class:this.classes(g.base,u.z.widget,e&&u.z.widgetDisabled),role:"region"},this._renderContent())}loadDependencies(){return(0,c.h)({button:()=>Promise.all([n.e(92358),n.e(46895),n.e(54438),n.e(14105),n.e(32275)]).then(n.bind(n,32275)),checkbox:()=>Promise.all([n.e(92358),n.e(54438),n.e(12424)]).then(n.bind(n,12424)),icon:()=>Promise.all([n.e(92358),n.e(87474)]).then(n.bind(n,87474)),label:()=>Promise.all([n.e(92358),n.e(35738)]).then(n.bind(n,35738))})}get view(){var e;return null===(e=this.viewModel)||void 0===e?void 0:e.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get icon(){return"partly-cloudy"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get _errorMessage(){const e=this.messages.error;switch(this.viewModel.error){case _.LocalScene:return e.localScene;case _.NoAtmosphere:return e.noAtmosphere;case _.UnsupportedView:return e.unsupported;default:return null}}get _warningMessage(){var e;return this.viewModel.error===_.NotVisible&&null!=this.view&&"3d"===(null===(e=this.view)||void 0===e?void 0:e.type)&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null}_renderContent(){const{headingLevel:e,messages:t,viewModel:n,visibleElements:o}=this,r=this._warningMessage,i=n.current,s=n.state===C.Error;return(0,v.u)(v.D,null,o.header?(0,v.u)(h.X,{level:e},t.widgetLabel):null,s?(0,v.u)("div",{class:g.error,key:"error"},this._errorMessage):null,(0,v.u)("div",{class:(0,p.Sh)({[g.content]:!0,[g.hasError]:s}),key:"content"},(0,v.u)("div",{"aria-label":t.weatherType,class:g.selector,key:"type-selector",role:"radiogroup"},a.T$.map(this._renderWeatherTypeButton)),Object.values(n.weatherByType).map((e=>(0,v.u)("div",{class:(0,p.Sh)({[g.options]:!0,[g.optionsHidden]:e.type!==(null===i||void 0===i?void 0:i.type)}),key:"options-container"},this._renderOptions(e)))),null!=r?this._renderWarning(r):null))}_renderOptions(e){const{viewModel:t,messages:n}=this,o=t.state===C.Disabled,r=this._memoizedCallbacks(e);switch(e.type){case"sunny":return(0,v.u)(m,{disabled:o,key:"sunny-cover",label:n.sunny.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange});case"cloudy":return(0,v.u)(m,{disabled:o,key:"cloudy-cover",label:n.cloudy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange});case"rainy":return(0,v.u)(v.D,null,(0,v.u)(m,{disabled:o,key:"rainy-cover",label:n.rainy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange}),(0,v.u)(m,{disabled:o,key:"rainy-precipitation",label:n.rainy.precipitation,value:e.precipitation,onChange:r.onPrecipitationChange}));case"snowy":return(0,v.u)(v.D,null,(0,v.u)(m,{disabled:o,key:"snowy-cloud-cover",label:n.snowy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange}),(0,v.u)(m,{disabled:o,key:"snowy-precipitation",label:n.snowy.precipitation,value:e.precipitation,onChange:r.onPrecipitationChange}),(0,v.u)("calcite-label",{key:"snow-cover",layout:"inline",scale:"s",title:n.snowy.snowCoverTooltip},(0,v.u)("calcite-checkbox",{checked:"enabled"===e.snowCover,disabled:o,onCalciteCheckboxChange:r.onSnowCoverChange}),n.snowy.snowCover));case"foggy":return(0,v.u)(m,{disabled:o,key:"foggy-cover",label:n.foggy.fogStrength,value:e.fogStrength,onChange:r.onFogStrengthChange})}}_renderWarning(e){return(0,v.u)("div",{class:g.warning,key:"warning"},(0,v.u)("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),e)}};(0,o._)([(0,i.Cb)()],D.prototype,"viewModel",void 0),(0,o._)([(0,i.Cb)()],D.prototype,"view",null),(0,o._)([(0,i.Cb)()],D.prototype,"headingLevel",void 0),(0,o._)([(0,i.Cb)({type:S,nonNullable:!0})],D.prototype,"visibleElements",void 0),(0,o._)([(0,i.Cb)()],D.prototype,"icon",null),(0,o._)([(0,i.Cb)()],D.prototype,"label",null),(0,o._)([(0,i.Cb)(),(0,y.H)("esri/widgets/Weather/t9n/Weather")],D.prototype,"messages",void 0),(0,o._)([(0,i.Cb)()],D.prototype,"_errorMessage",null),(0,o._)([(0,i.Cb)()],D.prototype,"_warningMessage",null),D=(0,o._)([(0,l.j)("esri.widgets.Weather")],D);const L=D}}]);
//# sourceMappingURL=18956.0b3c06d6.chunk.js.map