/*! For license information please see 89524.60b368e8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[89524],{89524:(e,t,n)=>{n.d(t,{P:()=>K,S:()=>N,d:()=>U});var a=n(70524),i=n(92358),o=n(13160),s=n(47242),l=n(72021),c=n(49865),r=n(8703),d=n(46895),h=n(52655),g=n(65138),f=n(57601),p=n(91438),m=n(2654),u=n(69874);const v="action-bar-container",b="container",C="content-bottom",x="content-top",S="header",y="header-container",k="header-container--border-end",z="heading",w="description",A="header-content",E="header-actions",H="header-actions--end",F="header-actions--start",L="content-wrapper",M="fab-container",B="footer",P="footer-content",O="footer-actions",T="footer-start",D="footer-end",I="x",_="ellipsis",j="chevron-down",R="chevron-up",N={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},K=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,a.yM)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.yM)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.yM)(this,"calcitePanelScroll",6),this.resizeObserver=(0,l.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"===typeof e.scrollHeight&&"number"===typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{var e;const t=null!==(e=this.beforeClose)&&void 0!==e?e:()=>Promise.resolve();try{await t()}catch(n){return void requestAnimationFrame((()=>{this.closed=!1}))}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,i.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,i.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,i.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,i.s)(e).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,i.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,i.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,i.d)(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=(0,i.d)(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=(0,i.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,i.d)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,i.d)(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,i.d)(e)},this.setPanelScrollEl=e=>{var t,n;(this.panelScrollEl=e,null===(t=this.resizeObserver)||void 0===t||t.disconnect(),e)&&(null===(n=this.resizeObserver)||void 0===n||n.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{var t;null===(t=(0,i.s)(e))||void 0===t||t.map((e=>{"CALCITE-ALERT"===e.nodeName&&(e.embedded=!0)}))},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,d.c)(this),(0,h.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,h.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){var e;(0,o.d)(this),(0,d.d)(this),(0,h.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,i.f)(this.containerEl)}async scrollContentTo(e){var t;null===(t=this.panelScrollEl)||void 0===t||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:i}=this,o=e?(0,a.h)(r.H,{class:z,level:t},e):null,s=n?(0,a.h)("span",{class:w},n):null;return i||!o&&!s?null:(0,a.h)("div",{class:A,key:"header-content"},o,s)}renderActionBar(){return(0,a.h)("div",{class:v,hidden:!this.hasActionBar},(0,a.h)("slot",{name:N.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:A,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:N.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[F]:!0,[E]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:N.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:n,collapsed:o,collapseDirection:s,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,g=[j,R];"up"===s&&g.reverse();const f=l?(0,a.h)("calcite-action",{"aria-expanded":(0,i.t)(!o),"aria-label":r,"data-test":"collapse",icon:o?g[0]:g[1],onClick:this.collapse,scale:this.scale,text:r,title:o?d:r}):null,p=n?(0,a.h)("calcite-action",{"aria-label":h,"data-test":"close",icon:I,onClick:this.handleUserClose,scale:this.scale,text:h,title:h}):null,m=(0,a.h)("slot",{name:N.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),u=e||f||p||c;return(0,a.h)("div",{class:{[H]:!0,[E]:!0},hidden:!u,key:"header-actions-end"},m,this.renderMenu(),f,p)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:_,scale:this.scale,slot:c.S.trigger,text:t.options}),(0,a.h)("slot",{name:N.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:i,collapsible:o,hasMenuItems:s,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||n||o||i||s;return this.showHeaderContent=r,(0,a.h)("header",{class:S,hidden:!(r||l)},(0,a.h)("div",{class:{[y]:!0,[k]:l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:t,hasFooterContent:n,hasFooterActions:i}=this,o=t||e||n||i;return(0,a.h)("footer",{class:B,hidden:!o},(0,a.h)("div",{class:P,hidden:!n},(0,a.h)("slot",{name:N.footer,onSlotchange:this.handleFooterSlotChange})),(0,a.h)("div",{class:T,hidden:n||!t},(0,a.h)("slot",{name:N.footerStart,onSlotchange:this.handleFooterStartSlotChange})),(0,a.h)("div",{class:D,hidden:n||!e},(0,a.h)("slot",{name:N.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),(0,a.h)("div",{class:O,hidden:n||!i},(0,a.h)("slot",{key:"footer-actions-slot",name:N.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return(0,a.h)("div",{class:L,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderContentBottom(){return(0,a.h)("div",{class:C,hidden:!this.hasContentBottom},(0,a.h)("slot",{name:N.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return(0,a.h)("div",{class:x,hidden:!this.hasContentTop},(0,a.h)("slot",{name:N.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return(0,a.h)("div",{class:M,hidden:!this.hasFab},(0,a.h)("slot",{name:N.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:n,isClosed:s,closable:l}=this,c=(0,a.h)("article",{key:"25995bcd854feaf5afc8b2e102a174888dc8d2ef","aria-busy":(0,i.t)(t),class:b,hidden:s,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),(0,a.h)("slot",{key:"alerts",name:N.alerts,onSlotchange:this.handleAlertsSlotChange}));return(0,a.h)(a.AA,{key:"e7e752bb4e0b2fff709c1eb09825d0a213603480",onKeyDown:n},(0,a.h)(o.I,{key:"6b3d4ffd41ddc7c36a02ff692e7c8e16808ef001",disabled:e},t?(0,a.h)("calcite-scrim",{loading:t}):null,c))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function U(){if("undefined"===typeof customElements)return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,K);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,c.d)();break;case"calcite-icon":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,u.d)()}}))}U()},69874:(e,t,n)=>{n.d(t,{S:()=>f,d:()=>p});var a=n(70524),i=n(46895),o=n(52655),s=n(72021),l=n(92358),c=n(91438);const r="scrim",d="content",h=72,g=480,f=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,s.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,l.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,i.c)(this),(0,o.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){var e;(0,i.d)(this),(0,o.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}render(){const{hasContent:e,loading:t,messages:n}=this;return(0,a.h)("div",{key:"8a78d64b0efe56e14f45b20f762872bfa92e4b55",class:r},t?(0,a.h)("calcite-loader",{label:n.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,(0,a.h)("div",{key:"6602698fbbf1ff03c92ee28c8d59f7a023a84498",class:d,hidden:!e},(0,a.h)("slot",{key:"dff9d95e751fec33ea9e68c12dca129050689a61",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=g?"l":"m"}handleResize(){var e;const{loaderEl:t,el:n}=this;t&&(this.loaderScale=this.getScale(null!==(e=Math.min(n.clientHeight,n.clientWidth))&&void 0!==e?e:0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function p(){if("undefined"===typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,f);break;case"calcite-loader":customElements.get(e)||(0,c.d)()}}))}p()}}]);
//# sourceMappingURL=89524.60b368e8.chunk.js.map