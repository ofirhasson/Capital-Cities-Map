/*! For license information please see 69008.93fa48e2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[69008],{69008:(t,e,a)=>{a.r(e),a.d(e,{CalciteSlider:()=>Z,defineCustomElement:()=>K});var i=a(70524),s=a(14387),n=a(92358),l=a(85955),r=a(13160),o=a(19579),c=a(61773),h=a(47242),d=a(46895),u=a(52073),m=a(72021);function g(t,e,a){const i=e[0]-t[0],s=e[1]-t[1];return i?(3*s/i-a)/2:a}function b(t,e,a,i,s){const[n,l]=t,[r,o]=e,c=(r-n)/3,h=s([n+c,l+c*a]).join(","),d=s([r-c,o-c*i]).join(","),u=s([r,o]).join(",");return"C ".concat(h," ").concat(d," ").concat(u)}function p(t){let{data:e,min:a,max:i,t:s}=t;if(0===e.length)return"";const[n,l]=s(e[0]),[r,o]=s(a),[c]=s(i);let h,d,u;const m=e.reduce(((t,a,i)=>{if(d=e[i-2],u=e[i-1],i>1){const e=function(t,e,a){const i=e[0]-t[0],s=a[0]-e[0],n=(e[1]-t[1])/(i||s<0&&0),l=(a[1]-e[1])/(s||i<0&&0),r=(n*s+l*i)/(i+s);return(Math.sign(n)+Math.sign(l))*Math.min(Math.abs(n),Math.abs(l),.5*Math.abs(r))||0}(d,u,a),i=void 0===h?g(d,u,e):h,n=b(d,u,i,e,s);return h=e,"".concat(t," ").concat(n)}return t}),"M ".concat(r,",").concat(o," L ").concat(r,",").concat(l," L ").concat(n,",").concat(l)),p=e[e.length-1],f=b(u,p,h,g(u,p,h),s);return"".concat(m," ").concat(f," L ").concat(c,",").concat(o," Z")}const f=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.graphId="calcite-graph-".concat((0,s.g)()),this.resizeObserver=(0,m.c)("resize",(()=>(0,i.xE)(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const{data:t,colorStops:e,el:a,highlightMax:s,highlightMin:n,min:l,max:r}=this,o=this.graphId,{clientHeight:c,clientWidth:h}=a;if(!t||0===t.length)return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:c,preserveAspectRatio:"none",viewBox:"0 0 ".concat(h," ").concat(c),width:h});const{min:d,max:u}=function(t){const[e,a]=t[0],i=[e,a],s=[e,a];return t.reduce(((t,e)=>{let{min:a,max:i}=t,[s,n]=e;return{min:[Math.min(a[0],s),Math.min(a[1],n)],max:[Math.max(i[0],s),Math.max(i[1],n)]}}),{min:i,max:s})}(t);let m=d,g=u;(l<d[0]||l>d[0])&&(m=[l,0]),(r>u[0]||r<u[0])&&(g=[r,u[1]]);const b=function(t){let{width:e,height:a,min:i,max:s}=t;const n=s[0]-i[0],l=s[1]-i[1];return t=>[(t[0]-i[0])/n*e,a-t[1]/l*a]}({min:m,max:g,width:h,height:c}),[f]=b([n,g[1]]),[v]=b([s,g[1]]),x=p({data:t,min:d,max:u,t:b}),k=e?"url(#linear-gradient-".concat(o,")"):void 0;return(0,i.h)("svg",{"aria-hidden":"true",class:"svg",height:c,preserveAspectRatio:"none",viewBox:"0 0 ".concat(h," ").concat(c),width:h},e?(0,i.h)("defs",null,(0,i.h)("linearGradient",{id:"linear-gradient-".concat(o),x1:"0",x2:"1",y1:"0",y2:"0"},e.map((t=>{let{offset:e,color:a,opacity:s}=t;return(0,i.h)("stop",{offset:"".concat(100*e,"%"),"stop-color":a,"stop-opacity":s})})))):null,void 0!==n?[(0,i.h)("mask",{height:"100%",id:"".concat(o,"1"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M 0,0\n            L ".concat(f-1,",0\n            L ").concat(f-1,",").concat(c,"\n            L 0,").concat(c,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(o,"2"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n            M ".concat(f+1,",0\n            L ").concat(v-1,",0\n            L ").concat(v-1,",").concat(c,"\n            L ").concat(f+1,", ").concat(c,"\n            Z\n          "),fill:"white"})),(0,i.h)("mask",{height:"100%",id:"".concat(o,"3"),width:"100%",x:"0%",y:"0%"},(0,i.h)("path",{d:"\n                M ".concat(v+1,",0\n                L ").concat(h,",0\n                L ").concat(h,",").concat(c,"\n                L ").concat(v+1,", ").concat(c,"\n                Z\n              "),fill:"white"})),(0,i.h)("path",{class:"graph-path",d:x,fill:k,mask:"url(#".concat(o,"1)")}),(0,i.h)("path",{class:"graph-path--highlight",d:x,fill:k,mask:"url(#".concat(o,"2)")}),(0,i.h)("path",{class:"graph-path",d:x,fill:k,mask:"url(#".concat(o,"3)")})]:(0,i.h)("path",{class:"graph-path",d:x,fill:k}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-color-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);function v(){if("undefined"===typeof customElements)return;["calcite-graph"].forEach((t=>{if("calcite-graph"===t)customElements.get(t)||customElements.define(t,f)}))}v();const x="container",k="container--range",y="graph",V="handle",_="handle-extension",w="handle__label",M="handle__label--minValue",H="handle__label--value",L="hyphen",R="hyphen--wrap",S="static",D="thumb",z="thumb--active",T="thumb-container",C="thumb--minValue",P="thumb--precise",F="thumb--value",E="tick",O="tick--active",B="tick__label",X="tick__label--max",I="tick__label--min",A="ticks",q="track",U="track__range",W="transformed";function j(t){return Array.isArray(t)}const G=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSliderInput=(0,i.yM)(this,"calciteSliderInput",6),this.calciteSliderChange=(0,i.yM)(this,"calciteSliderChange",6),this.handleKeyDown=t=>{const e=this.shouldMirror(),{activeProp:a,max:i,min:s,pageStep:n,step:l}=this,r=this[a],{key:c}=t;if((0,o.i)(c))return void t.preventDefault();let h;if("ArrowUp"===c||"ArrowRight"===c){h=r+l*(e&&"ArrowRight"===c?-1:1)}else if("ArrowDown"===c||"ArrowLeft"===c){h=r-l*(e&&"ArrowLeft"===c?-1:1)}else"PageUp"===c?n&&(h=r+n):"PageDown"===c?n&&(h=r-n):"Home"===c?h=s:"End"===c&&(h=i);if(isNaN(h))return;t.preventDefault();const d=Number(h.toFixed((0,u.d)(l)));this.setValue({[a]:this.clamp(d,a)})},this.activeProp="value",this.guid="calcite-slider-".concat((0,s.g)()),this.onThumbBlur=()=>{this.activeProp=null},this.onThumbFocus=t=>{const e=t.currentTarget;this.activeProp=e.getAttribute("data-value-prop")},this.onThumbPointerDown=t=>{const e=t.currentTarget;this.pointerDownDragStart(t,e.getAttribute("data-value-prop"))},this.onTrackPointerDown=t=>{this.pointerDownDragStart(t,"minMaxValue")},this.dragUpdate=t=>{if(!this.disabled&&(t.preventDefault(),this.dragProp)){const e=this.translate(t.clientX||t.pageX);if(j(this.value)&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=e-this.minValueDragRange,a=e+this.maxValueDragRange;a<=this.max&&t>=this.min&&a-t===this.minMaxValueRange&&this.setValue({minValue:this.clamp(t,"minValue"),maxValue:this.clamp(a,"maxValue")})}else this.minValueDragRange=e-this.minValue,this.maxValueDragRange=this.maxValue-e,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue({[this.dragProp]:this.clamp(e,this.dragProp)})}},this.pointerUpDragEnd=t=>{!this.disabled&&(0,n.y)(t)&&this.dragEnd(t)},this.dragEnd=t=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(t.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null)},this.storeTrackRef=t=>{this.trackEl=t},this.storeThumbRef=t=>{if(!t)return;"minValue"===t.getAttribute("data-value-prop")?this.minHandle=t:this.maxHandle=t},this.formatValue=t=>(d.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},d.n.localize(t.toString())),this.disabled=!1,this.fillPlacement="start",this.form=void 0,this.groupSeparator=!1,this.hasHistogram=!1,this.histogram=void 0,this.histogramStops=void 0,this.labelHandles=!1,this.labelFormatter=void 0,this.labelTicks=!1,this.max=100,this.maxLabel=void 0,this.maxValue=void 0,this.min=0,this.minLabel=void 0,this.minValue=void 0,this.mirrored=!1,this.name=void 0,this.numberingSystem=void 0,this.pageStep=void 0,this.precise=!1,this.required=!1,this.snap=!1,this.step=1,this.ticks=void 0,this.value=0,this.scale="m",this.effectiveLocale="",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.tickValues=[]}histogramWatcher(t){this.hasHistogram=!!t}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){(0,r.c)(this),(0,d.c)(this),this.setMinMaxFromValue(),this.setValueFromMinMax(),(0,c.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,r.d)(this),(0,c.d)(this),(0,l.d)(this),(0,d.d)(this),this.removeDragListeners()}componentWillLoad(){(0,h.s)(this),j(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value)),this.ticksWatcher(),this.histogramWatcher(this.histogram),(0,l.a)(this,this.value)}componentDidLoad(){(0,h.a)(this)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),j(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels(),(0,r.u)(this)}render(){const t=this.el.id||this.guid,e=j(this.value)?this.maxValue:this.value,a=this.minValue||this.min,s=this.shouldUseMinValue(),n=100*this.getUnitInterval(s?this.minValue:a),o=100*this.getUnitInterval(e),h=this.shouldMirror(),d=j(this.value),u=this.buildThumbType("max"),m=this.renderThumb({type:u,thumbPlacement:u.includes("histogram")?"below":"above",maxInterval:o,minInterval:n,mirror:h}),g=this.buildThumbType("min"),b=d&&this.renderThumb({type:g,thumbPlacement:g.includes("histogram")||g.includes("precise")?"below":"above",maxInterval:o,minInterval:n,mirror:h}),p=d?"start":this.fillPlacement,f="none"===p?{left:"unset",right:"unset"}:"end"===p?{left:"".concat(h?n:o,"%"),right:"".concat(h?o:n,"%")}:{left:"".concat(h?100-o:n,"%"),right:"".concat(h?n:100-o,"%")};return(0,i.h)(i.AA,{key:"345553b84f2336fe5a98bb2b3050d137130c41ef",id:t,onKeyDown:this.handleKeyDown,onTouchStart:this.handleTouchStart},(0,i.h)(r.I,{key:"0d9db31db94152095071d9ff40dbf3cf8ba685d6",disabled:this.disabled},(0,i.h)("div",{key:"767ab1401000b02717013231c935fe1747def1b3","aria-label":(0,c.g)(this),class:{[x]:!0,[k]:d,["scale--".concat(this.scale)]:!0}},this.renderGraph(),(0,i.h)("div",{key:"1a104ad97079f71d37efea9d933f364520d49397",class:q,ref:this.storeTrackRef},(0,i.h)("div",{key:"84f8033505dc0f373a0d19a641886e49ca4fe732",class:U,onPointerDown:this.onTrackPointerDown,style:f}),(0,i.h)("div",{key:"79f89b93a6acbb05ffce09bd2aa34ef134b3e219",class:A},this.tickValues.map((t=>{const n="".concat(100*this.getUnitInterval(t),"%");let l=!1;if("start"===p||"end"===p)if(s)l=t>=this.minValue&&t<=this.maxValue;else{const i="start"===p?a:e,s="start"===p?e:this.max;l=t>=i&&t<=s}return(0,i.h)("span",{class:{[E]:!0,[O]:l},style:{left:h?"":n,right:h?n:""}},this.renderTickLabel(t))})))),(0,i.h)("div",{key:"9bc6ea406e2036adb87da4a6053533283434864d",class:T},b,m,(0,i.h)(l.H,{key:"c13236898b527a1ffc058914fe87e6004b93aaf5",component:this})))))}renderThumb(t){let{type:e,mirror:a,thumbPlacement:s,minInterval:n,maxInterval:l}=t;const r=e.includes("labeled"),o=e.includes("precise"),c=e.includes("min"),h=j(this.value),d=c?this.minValue:h?this.maxValue:this.value,u=c?"minValue":h?"maxValue":"value",m=c?this.minLabel:h?this.maxLabel:this.minLabel,g=c?this.minValue:d,b="minValue"===u?this.internalLabelFormatter(this.minValue,"min"):"maxValue"===u?this.internalLabelFormatter(this.maxValue,"max"):this.internalLabelFormatter(d,"value"),p=c?{left:"".concat(a?100-n:n,"%")}:{right:"".concat(a?l:100-l,"%")},f="".concat(w," ").concat(c?M:H),v=[...r?[(0,i.h)("span",{"aria-hidden":"true",class:f},b),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(f," ").concat(S)},b),(0,i.h)("span",{"aria-hidden":"true",class:"".concat(f," ").concat(W)},b)]:[],(0,i.h)("div",{class:V}),o&&(0,i.h)("div",{class:_})];return"below"===s&&v.reverse(),(0,i.h)("div",{"aria-disabled":this.disabled,"aria-label":m,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":g,class:{[D]:!0,[F]:!c,[z]:"minMaxValue"!==this.lastDragProp&&this.dragProp===u,[P]:o,[C]:c},"data-value-prop":u,key:e,onBlur:this.onThumbBlur,onFocus:this.onThumbFocus,onPointerDown:this.onThumbPointerDown,ref:this.storeThumbRef,role:"slider",style:p,tabIndex:0},v)}renderGraph(){return this.histogram?(0,i.h)("calcite-graph",{class:y,colorStops:this.histogramStops,data:this.histogram,highlightMax:j(this.value)?this.maxValue:this.value,highlightMin:j(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(t){const{hasHistogram:e,labelHandles:a,labelTicks:s,max:n,min:l,precise:r,value:o}=this,c=j(o),h=t===l,d=t===n,u=h||d;return s&&(!e&&(u||!r||!c)||e&&(u||!r&&!a))?(0,i.h)("span",{class:{[B]:!0,[I]:h,[X]:d}},this.internalLabelFormatter(t,"tick")):null}pointerDownHandler(t){if(this.disabled||!(0,n.y)(t))return;const e=t.clientX||t.pageX,a=this.translate(e);let i="value";if(j(this.value)){if(a>=this.minValue&&a<=this.maxValue&&"minMaxValue"===this.lastDragProp)i="minMaxValue";else{i=Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)||a>=this.maxValue?"maxValue":"minValue"}}this.lastDragPropValue=this[i],this.dragStart(i);this.el.shadowRoot.querySelector(".".concat(D,":active"))||this.setValue({[i]:this.clamp(a,i)}),this.focusActiveHandle(e)}handleTouchStart(t){t.preventDefault()}async setFocus(){await(0,h.c)(this);const t=this.minHandle?this.minHandle:this.maxHandle;null===t||void 0===t||t.focus()}buildThumbType(t){const e=[t];return this.labelHandles&&e.push("labeled"),this.precise&&e.push("precise"),this.hasHistogram&&e.push("histogram"),e.join("-")}setValueFromMinMax(){const{minValue:t,maxValue:e}=this;"number"===typeof t&&"number"===typeof e&&(this.value=[t,e])}setMinMaxFromValue(){const{value:t}=this;j(t)&&(this.minValue=t[0],this.maxValue=t[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return!!j(this.value)&&(this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue)}getTickDensity(){const t=(this.max-this.min)/this.ticks/250;return t<1?1:t}generateTickValues(){var t;const e=null!==(t=this.ticks)&&void 0!==t?t:0;if(e<=0)return[];const a=[this.min],i=e*this.getTickDensity();let s=this.min;for(;s<this.max;)s+=i,a.push(Math.min(s,this.max));return a.includes(this.max)||a.push(this.max),a}pointerDownDragStart(t,e){(0,n.y)(t)&&this.dragStart(e)}dragStart(t){this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,window.addEventListener("pointermove",this.dragUpdate),window.addEventListener("pointerup",this.pointerUpDragEnd),window.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){"minValue"===this.dragProp?this.minHandle.focus():"maxValue"===this.dragProp||"value"===this.dragProp?this.maxHandle.focus():"minMaxValue"===this.dragProp&&this.getClosestHandle(t).focus()}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){window.removeEventListener("pointermove",this.dragUpdate),window.removeEventListener("pointerup",this.pointerUpDragEnd),window.removeEventListener("pointercancel",this.dragEnd)}setValue(t){let e;if(Object.keys(t).forEach((a=>{const i=t[a];if(!e){const t=this[a];e=t!==i}this[a]=i})),!e)return;this.dragProp||this.emitChange(),this.emitInput()}clamp(t,e){return t=(0,u.c)(t,this.min,this.max),"maxValue"===e&&(t=Math.max(t,this.minValue)),"minValue"===e&&(t=Math.min(t,this.maxValue)),t}translate(t){const e=this.max-this.min,{left:a,width:i}=this.trackEl.getBoundingClientRect(),s=(t-a)/i,n=this.shouldMirror(),l=this.clamp(this.min+e*(n?1-s:s)),r=Number(l.toFixed((0,u.d)(this.step)));return this.snap&&this.step?this.getClosestStep(r):r}getClosestStep(t){const{max:e,min:a,step:i}=this;let s=Math.floor((t-a)/i)*i+a;return s=Math.min(Math.max(s,a),e),s>e&&(s-=i),s}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,e){return Math.abs(t.getBoundingClientRect().left-e)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){t=this.clamp(t);const e=this.max-this.min;return(t-this.min)/e}adjustHostObscuredHandleLabel(t){const e=this.el.shadowRoot.querySelector(".handle__label--".concat(t)),a=this.el.shadowRoot.querySelector(".handle__label--".concat(t,".static")),i=this.el.shadowRoot.querySelector(".handle__label--".concat(t,".transformed")),s=a.getBoundingClientRect(),n=this.getHostOffset(s.left,s.right);e.style.transform="translateX(".concat(n,"px)"),i.style.transform="translateX(".concat(n,"px)")}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el,e=this.shouldMirror(),a=e?"value":"minValue",i=e?"minValue":"value",s=t.querySelector(".handle__label--".concat(a)),n=t.querySelector(".handle__label--".concat(a,".static")),l=t.querySelector(".handle__label--".concat(a,".transformed")),r=this.getHostOffset(n.getBoundingClientRect().left,n.getBoundingClientRect().right),o=t.querySelector(".handle__label--".concat(i)),c=t.querySelector(".handle__label--".concat(i,".static")),h=t.querySelector(".handle__label--".concat(i,".transformed")),d=this.getHostOffset(c.getBoundingClientRect().left,c.getBoundingClientRect().right),u=this.getFontSizeForElement(s),m=this.getRangeLabelOverlap(l,h),g=s,b=u/2;if(m>0){if(g.classList.add(L,R),0===d&&0===r){let t=m/2-b;t=-1===Math.sign(t)?Math.abs(t):-t;const e=this.getHostOffset(l.getBoundingClientRect().left+t-b,l.getBoundingClientRect().right+t-b);let a=m/2;const i=this.getHostOffset(h.getBoundingClientRect().left+a,h.getBoundingClientRect().right+a);0!==e&&(t+=e,a+=e),0!==i&&(t+=i,a+=i),s.style.transform="translateX(".concat(t,"px)"),l.style.transform="translateX(".concat(t-b,"px)"),o.style.transform="translateX(".concat(a,"px)"),h.style.transform="translateX(".concat(a,"px)")}else if(r>0||d>0)s.style.transform="translateX(".concat(r+b,"px)"),o.style.transform="translateX(".concat(m+d,"px)"),h.style.transform="translateX(".concat(m+d,"px)");else if(r<0||d<0){let t=Math.abs(r)+m-b;t=-1===Math.sign(t)?Math.abs(t):-t,s.style.transform="translateX(".concat(t,"px)"),l.style.transform="translateX(".concat(t-b,"px)")}}else g.classList.remove(L,R),s.style.transform="translateX(".concat(r,"px)"),l.style.transform="translateX(".concat(r,"px)"),o.style.transform="translateX(".concat(d,"px)"),h.style.transform="translateX(".concat(d,"px)")}hideObscuredBoundingTickLabels(){const t=j(this.value);if(!this.hasHistogram&&!t&&!this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!t&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!t&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!t&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&t&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const e=this.el.shadowRoot.querySelector(".".concat(C)),a=this.el.shadowRoot.querySelector(".".concat(F)),i=this.el.shadowRoot.querySelector(".".concat(I)),s=this.el.shadowRoot.querySelector(".".concat(X));!e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,a)?"0":"1"),e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,e)||this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,e)||this.isMaxTickLabelObscured(s,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,e){const a=this.el.getBoundingClientRect();return t+7<a.left?a.left-t-7:e-7>a.right?7-(e-a.right):0}getRangeLabelOverlap(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=this.getFontSizeForElement(t),n=a.right+s-i.left;return Math.max(n,0)}isMinTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return(0,n.F)(a,i)}isMaxTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return(0,n.F)(a,i)}internalLabelFormatter(t,e){const a=this.labelFormatter;if(!a)return this.formatValue(t);const i=a(t,e,this.formatValue);return null==i?this.formatValue(t):i}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-color-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-color-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-color-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-color-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-color-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-color-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise::after,.thumb:focus.thumb--precise::after,.thumb--active.thumb--precise::after{background-color:var(--calcite-color-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-color-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-color-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range::after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-color-border-input);border-color:var(--calcite-color-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-color-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.graph{color:var(--calcite-color-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-slider",{disabled:[516],fillPlacement:[513,"fill-placement"],form:[513],groupSeparator:[516,"group-separator"],hasHistogram:[1540,"has-histogram"],histogram:[16],histogramStops:[16],labelHandles:[516,"label-handles"],labelFormatter:[16],labelTicks:[516,"label-ticks"],max:[514],maxLabel:[1,"max-label"],maxValue:[1026,"max-value"],min:[514],minLabel:[1,"min-label"],minValue:[1026,"min-value"],mirrored:[516],name:[513],numberingSystem:[1,"numbering-system"],pageStep:[514,"page-step"],precise:[516],required:[516],snap:[516],step:[514],ticks:[514],value:[1538],scale:[513],effectiveLocale:[32],minMaxValueRange:[32],minValueDragRange:[32],maxValueDragRange:[32],tickValues:[32],setFocus:[64]},[[1,"pointerdown","pointerDownHandler"]],{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}]);function N(){if("undefined"===typeof customElements)return;["calcite-slider","calcite-graph"].forEach((t=>{switch(t){case"calcite-slider":customElements.get(t)||customElements.define(t,G);break;case"calcite-graph":customElements.get(t)||v()}}))}N();const Z=G,K=N},52073:(t,e,a)=>{a.d(e,{a:()=>o,c:()=>i,d:()=>n,g:()=>l,r:()=>r});const i=(t,e,a)=>Math.max(e,Math.min(t,a)),s=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),n=t=>{const e=(""+t).match(s);return e&&0!==parseInt(e[1])?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0};function l(t){return n(t)>0&&t>0?parseFloat("0.".concat(t.toString().split(".")[1])):t}function r(t,e,a,i,s){return(t-e)*(s-i)/(a-e)+i}function o(t,e,a){return t<a?-1:t>e-a?1:0}}}]);
//# sourceMappingURL=69008.93fa48e2.chunk.js.map