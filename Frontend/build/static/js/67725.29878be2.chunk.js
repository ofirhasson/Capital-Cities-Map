"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[67725],{15946:(t,e,i)=>{i.d(e,{Z:()=>g});var n,s=i(27366),o=i(46784),l=i(84652),r=i(49861),a=(i(93169),i(32718),i(69912)),u=i(28158),m=i(43404),d=i(25243);i(84936);const c=new m.X({slider:"slider",picker:"picker"});let p=n=class extends o.wq{constructor(t){super(t),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new n({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};(0,s._)([(0,r.Cb)({type:c.apiValues,nonNullable:!0,json:{type:c.jsonValues,default:null,read:{reader:c.read},write:{isRequired:!0,writer:c.write}}})],p.prototype,"interactionMode",void 0),(0,s._)([(0,r.Cb)({type:d.z8,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const t=null!=this.stopInterval;return{enabled:!t,isRequired:!t}}}}})],p.prototype,"numStops",void 0),(0,s._)([(0,r.Cb)({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],p.prototype,"stopInterval",void 0),p=n=(0,s._)([(0,a.j)("esri.webdoc.widgets.Range")],p);const h=p;var v,y=i(64850);let _=v=class extends o.wq{constructor(t){super(t),this.range=null,this.timeSlider=null,this.floorFilter=null}clone(){return new v((0,l.d9)({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))}};(0,s._)([(0,r.Cb)({type:h,json:{write:!0}})],_.prototype,"range",void 0),(0,s._)([(0,r.Cb)({type:y.Z,json:{write:!0}})],_.prototype,"timeSlider",void 0),(0,s._)([(0,r.Cb)({type:u.Z,json:{write:!0}})],_.prototype,"floorFilter",void 0),_=v=(0,s._)([(0,a.j)("esri.webdoc.Widgets")],_);const g=_},28158:(t,e,i)=>{i.d(e,{Z:()=>m});var n,s=i(27366),o=i(46784),l=i(84652),r=i(49861),a=(i(93169),i(32718),i(69912));let u=n=class extends o.wq{constructor(t){super(t),this.enabled=!1,this.longNames=!1,this.minimized=!1,this.pinnedLevels=!1,this.site=null,this.facility=null,this.level=null}clone(){return new n((0,l.d9)({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))}};(0,s._)([(0,r.Cb)({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],u.prototype,"enabled",void 0),(0,s._)([(0,r.Cb)({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],u.prototype,"longNames",void 0),(0,s._)([(0,r.Cb)({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],u.prototype,"minimized",void 0),(0,s._)([(0,r.Cb)({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],u.prototype,"pinnedLevels",void 0),(0,s._)([(0,r.Cb)({type:String,json:{read:{source:"site"},write:{target:"site"}}})],u.prototype,"site",void 0),(0,s._)([(0,r.Cb)({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],u.prototype,"facility",void 0),(0,s._)([(0,r.Cb)({type:String,json:{read:{source:"level"},write:{target:"level"}}})],u.prototype,"level",void 0),u=n=(0,s._)([(0,a.j)("esri.webdoc.widgets.FloorFilter")],u);const m=u},64850:(t,e,i)=>{i.d(e,{Z:()=>_});var n,s=i(27366),o=i(62044),l=i(12355),r=i(46784),a=i(84652),u=i(18202),m=i(49861),d=i(25243),c=i(38511),p=i(69912),h=i(31201),v=i(58359);let y=n=class extends r.wq{constructor(t){super(t),this.currentTimeExtent=null,this.fullTimeExtent=null,this.loop=!1,this.numStops=null,this.numThumbs=null,this.stopDelay=null,this.stopInterval=null,this.stops=null}readCurrentTimeExtent(t){if(!t)return;const e=null!=t[0]?new Date(t[0]):null,i=null!=t[1]?new Date(t[1]):null;return new o.Z({start:e,end:i})}writeCurrentTimeExtent(t,e,i){t&&(0,u.RB)(i,[null!=t.start?t.start.getTime():null,null!=t.end?t.end.getTime():null],e)}readFullTimeExtent(t,e){const i=e.properties;if(!i)return;const n=null!=i.endTime?new Date(i.endTime):null,s=null!=i.startTime?new Date(i.startTime):null;return new o.Z({start:s,end:n})}writeFullTimeExtent(t,e){if(!t)return;const i=e.properties=e.properties||{},n=t.end,s=t.start;n&&(i.endTime=null!=n?n.getTime():null),s&&(i.startTime=null!=s?s.getTime():null)}readStopInterval(t,e,i){return t?l.Z.fromJSON({value:t.interval,unit:t.units},i):null}writeStopInterval(t,e,i,n){if(!t)return;const s=t.toJSON(n);(0,u.RB)("properties.timeStopInterval",{interval:s.value,units:s.unit},e)}readStops(t){return null!==t&&void 0!==t&&t.length?t.map((t=>new Date(t))):null}writeStops(t,e,i){(null===t||void 0===t?void 0:t.length)&&(0,u.RB)(i,t.map((t=>t.getTime())),e)}clone(){return new n((0,a.d9)({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))}};(0,s._)([(0,m.Cb)({type:o.Z,json:{type:[[d.z8,d.p2]],read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],y.prototype,"currentTimeExtent",void 0),(0,s._)([(0,c.r)("currentTimeExtent")],y.prototype,"readCurrentTimeExtent",null),(0,s._)([(0,h.c)("currentTimeExtent")],y.prototype,"writeCurrentTimeExtent",null),(0,s._)([(0,m.Cb)({type:o.Z,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],y.prototype,"fullTimeExtent",void 0),(0,s._)([(0,c.r)("fullTimeExtent")],y.prototype,"readFullTimeExtent",null),(0,s._)([(0,h.c)("fullTimeExtent")],y.prototype,"writeFullTimeExtent",null),(0,s._)([(0,m.Cb)({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],y.prototype,"loop",void 0),(0,s._)([(0,m.Cb)({type:d.z8,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var t;const e=!!this.stopInterval,i=!(null===(t=this.stops)||void 0===t||!t.length),n=!(e||i);return{enabled:n,isRequired:n}}}}})],y.prototype,"numStops",void 0),(0,s._)([(0,m.Cb)({type:[1,2],nonNullable:!0,json:{type:d.z8,read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],y.prototype,"numThumbs",void 0),(0,s._)([(0,m.Cb)({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],y.prototype,"stopDelay",void 0),(0,s._)([(0,m.Cb)({type:l.Z,json:{read:{source:"properties.timeStopInterval"},write:{target:{"properties.timeStopInterval.interval":{type:Number},"properties.timeStopInterval.units":{type:v.v.jsonValues.filter((t=>"esriTimeUnitsUnknown"!==t))}},overridePolicy(){var t;const e=null!=this.numStops,i=!(null===(t=this.stops)||void 0===t||!t.length);return{enabled:!i,isRequired:!(e||i)}}}}})],y.prototype,"stopInterval",void 0),(0,s._)([(0,c.r)("stopInterval")],y.prototype,"readStopInterval",null),(0,s._)([(0,h.c)("stopInterval")],y.prototype,"writeStopInterval",null),(0,s._)([(0,m.Cb)({type:[Date],json:{type:[d.z8],read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],y.prototype,"stops",void 0),(0,s._)([(0,c.r)("stops")],y.prototype,"readStops",null),(0,s._)([(0,h.c)("stops")],y.prototype,"writeStops",null),y=n=(0,s._)([(0,p.j)("esri.webdoc.widgets.TimeSlider")],y);const _=y},67725:(t,e,i)=>{i.r(e),i.d(e,{default:()=>A});var n=i(27366),s=i(12355),o=i(63780),l=i(41644),r=i(44927),a=i(32718),u=i(94172),m=i(86710),d=i(49861),c=i(69912),p=i(76969),h=i(6701),v=i(88350),y=i(33565),_=i(8905),g=i(7021),b=i(33095),w=i(78088),f=i(80532),x=i(28907),T=i(67005),E=i(80975),C=i(37384);const S="esri-time-slider",k={timeSlider:"".concat(S),timeSliderOutOfBounds:"".concat(S,"--out-of-bounds"),timeSliderMode:"".concat(S,"__mode--"),timeSliderLayout:"".concat(S,"__layout--"),timeSliderRow:"".concat(S,"__row"),animation:"".concat(S,"__animation"),animationButton:"".concat(S,"__animation-button"),timeExtent:"".concat(S,"__time-extent"),timeExtentGroup:"".concat(S,"__time-extent-group"),timeExtentDate:"".concat(S,"__time-extent-date"),timeExtentTime:"".concat(S,"__time-extent-time"),timeExtentSeparator:"".concat(S,"__time-extent-separator"),playbackControls:"".concat(S,"__playback-controls"),min:"".concat(S,"__min"),minDate:"".concat(S,"__min-date"),minTime:"".concat(S,"__min-time"),slider:"".concat(S,"__slider"),sliderMajorTick:"majorTick",sliderMinorTick:"minorTick",max:"".concat(S,"__max"),maxDate:"".concat(S,"__max-date"),maxTime:"".concat(S,"__max-time"),previous:"".concat(S,"__previous"),previousButton:"".concat(S,"__previous-button"),next:"".concat(S,"__next"),nextButton:"".concat(S,"__next-button"),warning:"".concat(S,"__warning"),warningText:"".concat(S,"__warning-text"),hasActions:"".concat(S,"--has-actions"),actions:"".concat(S,"__actions"),actionsButton:"".concat(S,"__actions-button")};var j=i(62044),M=i(80987),F=i(91505),D=i(66978),Z=i(25243),I=(i(84936),i(93169),i(15946)),R=i(64850);function W(t){return null!=t&&void 0!==t.count}function B(t){return null!=t&&void 0!==t.interval}function N(t){return null!=t&&void 0!==t.dates}let z=class extends F.Z.EventedAccessor{constructor(t){super(t),this._animationController=null,this._isViewTimeExtentInitialized=!1,this._timerId=null,this.actions=new M.Z,this.fullTimeExtent=null,this.loop=!1,this.mode="time-window",this.stops={count:10},this.timeExtent=null,this.view=null}initialize(){this.addHandles([(0,u.watch)((()=>this.effectiveStops),(()=>{null==this.timeExtent&&(this.timeExtent=this._getDefaultTimeExtent())}),u.initial),(0,u.watch)((()=>this.view),((t,e)=>{this._unregisterWidget(e),this._registerWidget(t)}),u.syncAndInitial),(0,u.watch)((()=>this.timeExtent),(t=>{if(null==this.view)return;const e=this.view.timeExtent;(null!=t&&!t.isAllTime||null!=e&&!e.isAllTime)&&(null!=t&&null!=e&&t.equals(e)||(this.view.timeExtent=t))}),u.initial),(0,u.watch)((()=>{var t;return null===(t=this.view)||void 0===t?void 0:t.timeExtent}),(t=>{this._isViewTimeExtentInitialized?(null!=t&&!t.isAllTime||null!=this.timeExtent&&!this.timeExtent.isAllTime)&&(null!=t&&null!=this.timeExtent&&t.equals(this.timeExtent)||(this.timeExtent=t)):this._isViewTimeExtentInitialized=!0}))])}destroy(){null!=this._timerId&&(clearInterval(this._timerId),this._timerId=null),this._unregisterWidget(this.view),this.view=null,null!=this._animationController&&(this._animationController.abort(),this._animationController=null)}get effectiveStops(){const{fullTimeExtent:t,stops:e}=this;if(N(e)){const{dates:i}=e;if(null==i||0===i.length)return null;const n=i.sort(((t,e)=>t.getTime()-e.getTime()));if(null==t)return n;const{start:s,end:o}=t;return null==s||null==o?n:n.filter((t=>!(t.getTime()<s.getTime()||t.getTime()>o.getTime())))}if(W(e)){var i;const n=null!==(i=e.timeExtent)&&void 0!==i?i:t;return this._divideTimeExtentByCount(n,e.count)}if(B(e)){var n;const i=null!==(n=e.timeExtent)&&void 0!==n?n:t;return this._divideTimeExtentByInterval(i,e.interval)}return[]}set playRate(t){t<=0||t>36e5||("playing"===this.state&&this._startAnimation(),this._set("playRate",t))}get state(){return null==this.fullTimeExtent?"disabled":null!=this._animationController?"playing":"ready"}get timeExtentValues(){const{mode:t,timeExtent:e}=this;if(null==e||e.isAllTime||e.isEmpty)return null;const{start:i,end:n}=e;switch(t){case"cumulative-from-end":case"instant":return null!=i?[i.getTime()]:null;case"cumulative-from-start":return null!=n?[n.getTime()]:null;case"time-window":return null!=i&&null!=n?[i.getTime(),n.getTime()]:null}}static async getPropertiesFromWebMap(t,e){(0,r.XV)(a.Z.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel"),"`TimeSliderViewModel.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0});const{getTimeSliderSettingsFromWebDocument:n}=await i.e(45739).then(i.bind(i,45739));return n(t,e)}next(){this._step({forward:!0,allowRestart:!1})}play(){this._startAnimation()}previous(){this._step({forward:!1,allowRestart:!1})}stop(){this._stopAnimation()}triggerAction(t){this.emit("trigger-action",{action:t})}updateWebDocument(t){const e=new R.Z({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:W(this.stops)?this.stops.count:null,numThumbs:"time-window"===this.mode?2:1,stopDelay:this.playRate,stopInterval:B(this.stops)?this.stops.interval:null,stops:N(this.stops)?this.stops.dates:null});t.widgets?t.widgets.timeSlider=e:t.widgets=new I.Z({timeSlider:e})}valuesToTimeExtent(t){if(null==t)return null;const e=t.sort(((t,e)=>t-e)).map((t=>new Date(t))),i=e.length>0?e[0]:null,n=e.length>1?e[1]:null;switch(this.mode){case"time-window":return new j.Z({start:i,end:n});case"instant":return new j.Z({start:i,end:i});case"cumulative-from-start":return new j.Z({start:null,end:i});case"cumulative-from-end":return new j.Z({start:i,end:null});default:return j.Z.allTime}}async _animate(){try{var t;const e=this.view,i=null===(t=this._animationController)||void 0===t?void 0:t.signal;await Promise.all([(0,D.e4)(this.playRate,null,i),null!=e&&(0,u.whenOnce)((()=>!1===e.updating),i)])}catch(S){return(0,D.D_)(S)||a.Z.getLogger(this).error(S),void(this._animationController=null)}this._step({forward:!0,allowRestart:!1}),null!=this._animationController&&this._animate()}_divideTimeExtentByCount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(!t||!e)return[];const{start:i,end:n}=t;if(null==i||null==n)return[];if(e>1e4)return this._divideTimeExtentByCount(t);const s=[],o=i.getTime(),l=n.getTime()-o;for(let r=0;r<=e;r++)s.push(new Date(o+r/e*l));return s}_divideTimeExtentByInterval(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;if(!t||!e)return[];const{start:n,end:s}=t;if(null==n||null==s)return[];const o=s.getTime()-n.getTime(),l=e.toMilliseconds();if(l<=0||o/l>i)return this._divideTimeExtentByCount(t);const r=[],{value:a,unit:u}=e;let d=n;for(;d.getTime()<=s.getTime();)r.push(new Date(d.getTime())),d=(0,m.Nm)(d,a,u);return r}_getDefaultTimeExtent(){const{effectiveStops:t,mode:e}=this;if(null==t||!e)return null;switch(e){case"time-window":return t.length>1?new j.Z({start:t[0],end:t[1]}):null;case"cumulative-from-start":return t.length>0?new j.Z({start:null,end:t[0]}):null;case"cumulative-from-end":return t.length>0?new j.Z({start:t[0],end:null}):null;case"instant":return t.length>0?new j.Z({start:t[0],end:t[0]}):null;default:return null}}_registerWidget(t){null!=t&&(t.persistableViewModels.includes(this)||t.persistableViewModels.add(this))}_startAnimation(){this._stopAnimation(),this._animationController=new AbortController,this._step({forward:!0,allowRestart:!0}),this._animate()}_step(t){const{forward:e,allowRestart:i}=t,{effectiveStops:n}=this;if(null==this.timeExtentValues||null==n)return;const s=n.map((t=>t.getTime())),o=this.timeExtentValues.map((t=>{const e=s.indexOf(t);if(-1!==e)return e;const i=s.reduce(((e,i)=>Math.abs(i-t)<Math.abs(e-t)?i:e));return s.indexOf(i)})),l=o.map((t=>t+(e?1:-1))),r=l.some((t=>t<0||t>s.length-1)),{loop:a,state:u}=this;if(r)if(a||i){const t=Math.min(...o),i=Math.max(...o),n=(e?o.map((e=>e-t)):o.map((t=>t+(s.length-1-i)))).map((t=>s[t]));this.timeExtent=this.valuesToTimeExtent(n)}else"playing"===u&&this.stop();else{const t=l.map((t=>s[t]));this.timeExtent=this.valuesToTimeExtent(t)}}_stopAnimation(){null!=this._animationController&&(this._animationController.abort(),this._animationController=null)}_unregisterWidget(t){null!=t&&t.persistableViewModels.remove(this)}};(0,n._)([(0,d.Cb)()],z.prototype,"_animationController",void 0),(0,n._)([(0,d.Cb)({type:M.Z})],z.prototype,"actions",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],z.prototype,"effectiveStops",null),(0,n._)([(0,d.Cb)({type:j.Z})],z.prototype,"fullTimeExtent",void 0),(0,n._)([(0,d.Cb)({nonNullable:!0})],z.prototype,"loop",void 0),(0,n._)([(0,d.Cb)({nonNullable:!0})],z.prototype,"mode",void 0),(0,n._)([(0,d.Cb)({nonNullable:!0,value:1e3})],z.prototype,"playRate",null),(0,n._)([(0,d.Cb)({readOnly:!0})],z.prototype,"state",null),(0,n._)([(0,d.Cb)({cast:t=>null==t?null:(B(t)&&(t.interval=(0,Z.se)(s.Z,t.interval)),(B(t)||W(t))&&(t.timeExtent=(0,Z.se)(j.Z,t.timeExtent)),t)})],z.prototype,"stops",void 0),(0,n._)([(0,d.Cb)({type:j.Z})],z.prototype,"timeExtent",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],z.prototype,"timeExtentValues",null),(0,n._)([(0,d.Cb)()],z.prototype,"view",void 0),(0,n._)([(0,d.Cb)()],z.prototype,"next",null),(0,n._)([(0,d.Cb)()],z.prototype,"play",null),(0,n._)([(0,d.Cb)()],z.prototype,"previous",null),(0,n._)([(0,d.Cb)()],z.prototype,"stop",null),(0,n._)([(0,d.Cb)()],z.prototype,"updateWebDocument",null),z=(0,n._)([(0,c.j)("esri.widgets.TimeSlider.TimeSliderViewModel")],z);const O=z,L=[{minor:{value:100,unit:"milliseconds"},major:{value:1,unit:"seconds"},format:{second:"numeric"}},{minor:{value:500,unit:"milliseconds"},major:{value:5,unit:"seconds"},format:{second:"numeric"}},{minor:{value:1,unit:"seconds"},major:{value:20,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:2,unit:"seconds"},major:{value:30,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:10,unit:"seconds"},major:{value:1,unit:"minutes"},format:{minute:"numeric"}},{minor:{value:15,unit:"seconds"},major:{value:5,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"minutes"},major:{value:20,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:5,unit:"minutes"},major:{value:2,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:15,unit:"minutes"},major:{value:6,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"hours"},major:{value:1,unit:"days"},format:{day:"numeric",month:"short"}},{minor:{value:6,unit:"hours"},major:{value:1,unit:"weeks"},format:{day:"numeric",month:"short"}},{minor:{value:1,unit:"days"},major:{value:1,unit:"months"},format:{month:"long"}},{minor:{value:2,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:3,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:4,unit:"days"},major:{value:3,unit:"months"},format:{month:"short",year:"numeric"}},{minor:{value:1,unit:"weeks"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"months"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:2,unit:"months"},major:{value:2,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"years"},major:{value:1,unit:"decades"},format:{year:"numeric"}},{minor:{value:2,unit:"years"},major:{value:5,unit:"decades"},format:{year:"numeric"}},{minor:{value:5,unit:"decades"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1,unit:"centuries"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:2,unit:"centuries"},major:{value:20,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:5,unit:"centuries"},major:{value:50,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:10,unit:"centuries"},major:{value:100,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:20,unit:"centuries"},major:{value:200,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:50,unit:"centuries"},major:{value:500,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:100,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:200,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:500,unit:"centuries"},major:{value:5e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1e3,unit:"centuries"},major:{value:1e4,unit:"centuries"},format:{era:"short",year:"numeric"}}];let V=class extends y.Z{constructor(t,e){super(t,e),this._ignoreNextSliderUpdate=!1,this._slider=new v.default({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1}),this._tickFormat=null,this.disabled=!1,this.labelFormatFunction=null,this.messages=null,this.messagesCommon=null,this.tickConfigs=null,this.timeVisible=!1,this.viewModel=new O}initialize(){this.addHandles([(0,u.watch)((()=>this._slider.values),(t=>{if(this._ignoreNextSliderUpdate)return void(this._ignoreNextSliderUpdate=!1);const e=this.viewModel.valuesToTimeExtent(t);null!=this.timeExtent?null!=e?this.timeExtent.equals(e)||(this.timeExtent=e):this.timeExtent=null:null!=e&&(this.timeExtent=e)})),(0,u.watch)((()=>this.effectiveStops),(()=>this._updateSliderSteps()),u.initial)])}loadDependencies(){return(0,_.h)({action:()=>Promise.all([i.e(92358),i.e(46895),i.e(65138),i.e(91741)]).then(i.bind(i,6814)),"action-menu":()=>Promise.all([i.e(92358),i.e(46895),i.e(89219),i.e(63839),i.e(65138),i.e(2654),i.e(23635),i.e(24745)]).then(i.bind(i,24745))})}destroy(){this._slider.destroy(),this._tickFormat=null}get _dateFormat(){return this._getIntlOptions("short-date")}get _timeFormat(){return this._getIntlOptions("long-time")}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get effectiveStops(){return this.viewModel.effectiveStops}get fullTimeExtent(){return this.viewModel.fullTimeExtent}set fullTimeExtent(t){this.viewModel.fullTimeExtent=t}get icon(){return"clock"}set icon(t){this._overrideIfSome("icon",t)}get interactive(){return!(this.disabled||"disabled"===this.viewModel.state||this.timeZone===h._4)}get label(){var t,e;return null!==(t=null===(e=this.messages)||void 0===e?void 0:e.widgetLabel)&&void 0!==t?t:""}set label(t){this._overrideIfSome("label",t)}set layout(t){["auto","compact","wide"].includes(t)||(t="auto"),this._set("layout",t)}get loop(){return this.viewModel.loop}set loop(t){this.viewModel.loop=t}get mode(){return this.viewModel.mode}set mode(t){this.viewModel.mode=t}get playRate(){return this.viewModel.playRate}set playRate(t){this.viewModel.playRate=t}get stops(){return this.viewModel.stops}set stops(t){this.viewModel.stops=t}get tickFormats(){const{timeZone:t}=this;return L.map((e=>{let{minor:i,major:n,format:o}=e;return{minor:new s.Z(i),major:new s.Z(n),format:{...o,timeZone:t}}}))}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(t){this.viewModel.timeExtent=t}get timeZone(){var t,e;return null!==(t=null===(e=this.viewModel.view)||void 0===e?void 0:e.timeZone)&&void 0!==t?t:h.By}set timeZone(t){this._overrideIfSome("timeZone",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}static async getPropertiesFromWebMap(t,e){return(0,r.XV)(a.Z.getLogger("esri.widgets.TimeSlider"),"`TimeSlider.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0}),O.getPropertiesFromWebMap(t,e)}next(){return this.viewModel.next()}play(){return this.viewModel.play()}previous(){return this.viewModel.previous()}stop(){return this.viewModel.stop()}render(){var t;const{_slider:e,actions:i,domNode:n,effectiveStops:s,fullTimeExtent:l,interactive:r,messages:a,messagesCommon:u,mode:m,tickConfigs:d,timeExtent:c,timeVisible:h,viewModel:{state:v,timeExtentValues:y}}=this;if(null!=l){const{start:t,end:i}=l;if(null!=t&&null!=i){const n=t.getTime(),s=i.getTime(),o=e.min!==n||e.max!==s;if(o&&(e.min=n,e.max=s),null!=d)e.tickConfigs!==d&&(e.tickConfigs=d);else{var _,w;const t=(s-n)/((null===(_=e.trackElement)||void 0===_?void 0:_.offsetWidth)||400),i=null!==(w=this.tickFormats.find((e=>e.minor.toMilliseconds()>3*t)))&&void 0!==w?w:this.tickFormats.at(-1),l=this._tickFormat!==i&&null!=i;if(l&&(this._tickFormat=i),o||l){const t={mode:"position",values:this._getTickPositions(i.minor),labelsVisible:!1,tickCreatedFunction:(t,e)=>{null===e||void 0===e||e.classList.add(k.sliderMinorTick)}},n={mode:"position",values:this._getTickPositions(i.major),labelsVisible:!0,tickCreatedFunction:(t,e)=>{null===e||void 0===e||e.classList.add(k.sliderMajorTick)},labelFormatFunction:t=>(0,p.p6)(t,i.format)};e.tickConfigs=[t,n]}}}}const f=null==(null===(t=this.fullTimeExtent)||void 0===t?void 0:t.start)||null==this.fullTimeExtent.end||null==this.timeExtent||this.timeExtent.isAllTime||this.timeExtent.isEmpty||null!=this.timeExtent.start&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||null!=this.timeExtent.end&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start);if(f)switch(this._ignoreNextSliderUpdate=!0,m){case"time-window":e.values=[e.min,e.max];break;case"instant":case"cumulative-from-end":e.values=[e.min];break;case"cumulative-from-start":e.values=[e.max]}else null!=y?(0,o.fS)(e.values,y)||(e.values=y):e.values=null;e.disabled=!r;const x="ready"===v,S="playing"===v,j=f||!r||null==s||0===s.length,M="auto"===this.layout?n.clientWidth<858?"compact":"wide":this.layout,F=(0,T.u)("div",{class:k.animation},(0,T.u)("button",{"aria-disabled":j?"true":"false","aria-label":S?u.control.stop:u.control.play,bind:this,class:this.classes(g.z.widgetButton,k.animationButton,j&&g.z.buttonDisabled),disabled:j,onclick:this._playOrStopClick,title:S?u.control.stop:u.control.play,type:"button"},(0,T.u)("div",{class:this.classes((x||j)&&b.W.play,S&&b.W.pause)}))),D=null!=this.labelFormatFunction?(0,T.u)("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:k.timeExtentDate,"data-date":c?[c.start,c.end]:null,"data-layout":M,"data-type":"extent",key:"extent"}):null==c||null!=c&&c.isAllTime?[(0,T.u)("div",{class:this.classes(k.warning,b.W.noticeTriangle)}),(0,T.u)("div",{class:k.warningText,key:"warning-text"},a.noTimeExtent)]:c.isEmpty?[(0,T.u)("div",{class:this.classes(k.warning,b.W.noticeTriangle)}),(0,T.u)("div",{class:k.warningText,key:"warning-text"},a.emptyTimeExtent)]:[null!=c.start&&(0,T.u)("div",{class:k.timeExtentGroup,key:"start-date-group"},(0,T.u)("div",{class:k.timeExtentDate,key:"start-date"},this._formatDate(c.start)),h?(0,T.u)("div",{class:k.timeExtentTime,key:"start-time"},this._formatTime(c.start)):null),null!=c.start&&null!=c.end&&c.start.getTime()!==c.end.getTime()&&(0,T.u)("div",{class:k.timeExtentSeparator,key:"separator"},"\u2013"),null!=c.end&&(null==c.start||c.start.getTime()!==c.end.getTime())&&(0,T.u)("div",{class:k.timeExtentGroup,key:"end-date-group"},(0,T.u)("div",{class:k.timeExtentDate,key:"end-date"},this._formatDate(c.end)),h?(0,T.u)("div",{class:k.timeExtentTime,key:"end-time"},this._formatTime(c.end)):null)],Z=(0,T.u)("div",{class:this.classes(k.timeExtent,!r&&g.z.buttonDisabled)},[D]),I=null!=this.labelFormatFunction?(0,T.u)("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:k.minDate,"data-date":null===l||void 0===l?void 0:l.start,"data-layout":M,"data-type":"min",key:"min-date"}):null!=(null===l||void 0===l?void 0:l.start)&&[(0,T.u)("div",{class:k.minDate,key:"min-date"},this._formatDate(l.start)),h&&(0,T.u)("div",{class:k.minTime,key:"min-time"},this._formatTime(l.start))],R=(0,T.u)("div",{class:this.classes(k.min,!r&&g.z.buttonDisabled)},[I]),W=(0,T.u)("div",{class:k.slider},e.render()),B=null!=this.labelFormatFunction?(0,T.u)("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:k.maxDate,"data-date":null===l||void 0===l?void 0:l.end,"data-layout":M,"data-type":"max",key:"max-date"}):null!=(null===l||void 0===l?void 0:l.end)&&[(0,T.u)("div",{class:k.maxDate,key:"max-date"},this._formatDate(l.end)),h&&(0,T.u)("div",{class:k.maxTime,key:"max-time"},this._formatTime(l.end))],N=(0,T.u)("div",{class:this.classes(k.max,!r&&g.z.buttonDisabled)},[B]),z=(0,T.u)("div",{class:k.previous},(0,T.u)("button",{"aria-disabled":j?"true":"false","aria-label":u.pagination.previous,bind:this,class:this.classes(g.z.widgetButton,k.previousButton,(S||j)&&g.z.buttonDisabled),disabled:j,onclick:this._previousClick,title:u.pagination.previous,type:"button"},(0,T.u)("div",{class:b.W.reverse}))),O=(0,T.u)("div",{class:k.next},(0,T.u)("button",{"aria-disabled":j?"true":"false","aria-label":u.pagination.next,bind:this,class:this.classes(g.z.widgetButton,k.nextButton,(S||j)&&g.z.buttonDisabled),disabled:j,onclick:this._nextClick,title:u.pagination.next,type:"button"},(0,T.u)("div",{class:b.W.forward}))),L=(null===i||void 0===i?void 0:i.length)>0,V=L&&(0,T.u)("div",{class:k.actions,title:u.options},(0,T.u)("calcite-action-menu",{class:k.actionsButton,label:u.options},i.toArray().map((t=>(0,T.u)("calcite-action",{bind:this,icon:t.icon,id:t.id,onclick:()=>this.viewModel.triggerAction(t),text:t.title,textEnabled:!0,title:t.title})))));return(0,T.u)("div",{afterCreate:t=>{this.addHandles((0,E.ib)(t,(()=>this.scheduleRender())))},"aria-label":a.widgetLabel,class:this.classes(k.timeSlider,g.z.widget,"".concat(k.timeSliderMode).concat(m),"".concat(k.timeSliderLayout).concat(M),!r&&g.z.disabled,f&&k.timeSliderOutOfBounds,L&&k.hasActions,(0,C.rk)())},"wide"===M&&(0,T.u)("div",{class:k.timeSliderRow},(0,T.u)("div",{class:k.playbackControls},[F,Z,R,W,N,z,O]),V),"compact"===M&&[(0,T.u)("div",{class:k.timeSliderRow,key:"time-slider-row-1"},[Z,V]),(0,T.u)("div",{class:k.timeSliderRow,key:"time-slider-row-2"},[W]),(0,T.u)("div",{class:k.timeSliderRow,key:"time-slider-row-3"},[R,z,F,O,N])])}updateWebDocument(t){var e;null===(e=this.viewModel)||void 0===e||e.updateWebDocument(t)}_createLabel(t){if(null==this.labelFormatFunction)return;const e=t.getAttribute("data-type"),i=t.getAttribute("data-layout"),n=t["data-date"];this.labelFormatFunction(n,e,t,i)}_formatDate(t){return(0,p.p6)(t,this._dateFormat)}_formatTime(t){return(0,p.p6)(t,this._timeFormat)}_getIntlOptions(t){const{timeZone:e}=this;return{...(0,p.Ze)(t),timeZone:e}}_getTickPositions(t){const{fullTimeExtent:e}=this;if(null==(null===e||void 0===e?void 0:e.start)||null==e.end)return[];const{start:i,end:n}=e,s=[],{value:o,unit:l}=t;let r=(0,m.JE)(i,l,this.timeZone);for(;r.getTime()<=n.getTime();)r.getTime()>=i.getTime()&&s.push(r.getTime()),r=(0,m.Nm)(r,o,l,this.timeZone);return s}_updateSliderSteps(){this._slider.steps=null!=this.effectiveStops&&this.effectiveStops.length>0?this.effectiveStops.map((t=>t.getTime())):null}_playOrStopClick(){switch(this.viewModel.state){case"ready":this.viewModel.play();break;case"playing":this.viewModel.stop();break;case"disabled":break;default:(0,l.Bg)(this.viewModel.state)}}_previousClick(){this.viewModel.previous()}_nextClick(){this.viewModel.next()}};(0,n._)([(0,d.Cb)()],V.prototype,"_dateFormat",null),(0,n._)([(0,d.Cb)()],V.prototype,"_timeFormat",null),(0,n._)([(0,d.Cb)()],V.prototype,"actions",null),(0,n._)([(0,d.Cb)()],V.prototype,"disabled",void 0),(0,n._)([(0,d.Cb)()],V.prototype,"effectiveStops",null),(0,n._)([(0,d.Cb)()],V.prototype,"fullTimeExtent",null),(0,n._)([(0,d.Cb)()],V.prototype,"icon",null),(0,n._)([(0,d.Cb)({readOnly:!0})],V.prototype,"interactive",null),(0,n._)([(0,d.Cb)()],V.prototype,"label",null),(0,n._)([(0,d.Cb)()],V.prototype,"labelFormatFunction",void 0),(0,n._)([(0,d.Cb)({value:"auto"})],V.prototype,"layout",null),(0,n._)([(0,d.Cb)()],V.prototype,"loop",null),(0,n._)([(0,d.Cb)(),(0,f.H)("esri/widgets/TimeSlider/t9n/TimeSlider")],V.prototype,"messages",void 0),(0,n._)([(0,d.Cb)(),(0,f.H)("esri/t9n/common")],V.prototype,"messagesCommon",void 0),(0,n._)([(0,d.Cb)()],V.prototype,"mode",null),(0,n._)([(0,d.Cb)()],V.prototype,"playRate",null),(0,n._)([(0,d.Cb)()],V.prototype,"stops",null),(0,n._)([(0,d.Cb)()],V.prototype,"tickConfigs",void 0),(0,n._)([(0,d.Cb)()],V.prototype,"tickFormats",null),(0,n._)([(0,d.Cb)()],V.prototype,"timeExtent",null),(0,n._)([(0,d.Cb)({nonNullable:!0})],V.prototype,"timeVisible",void 0),(0,n._)([(0,d.Cb)()],V.prototype,"timeZone",null),(0,n._)([(0,d.Cb)()],V.prototype,"view",null),(0,n._)([(0,d.Cb)({type:O}),(0,x.s)("trigger-action")],V.prototype,"viewModel",void 0),(0,n._)([(0,w.h)()],V.prototype,"_playOrStopClick",null),(0,n._)([(0,w.h)()],V.prototype,"_previousClick",null),(0,n._)([(0,w.h)()],V.prototype,"_nextClick",null),V=(0,n._)([(0,c.j)("esri.widgets.TimeSlider")],V);const A=V}}]);
//# sourceMappingURL=67725.29878be2.chunk.js.map