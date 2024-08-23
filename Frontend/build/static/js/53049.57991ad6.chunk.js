/*! For license information please see 53049.57991ad6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[53049],{53049:(t,e,i)=>{i.r(e),i.d(e,{CalciteFlow:()=>h,defineCustomElement:()=>u});var o=i(70524),n=i(72021),s=i(47242);const r="frame",a="frame--advancing",c="frame--retreating",l=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=(0,n.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,o=Array.from(e.querySelectorAll("calcite-flow-item".concat(t?",".concat(t):""))).filter((t=>t.closest("calcite-flow")===e)),n=i.length,s=o.length,r=o[s-1],a=o[s-2];if(s&&r&&o.forEach((t=>{t.showBackButton=t===r&&s>1,t.hidden=t!==r})),a&&(a.menuOpen=!1),this.items=o,n!==s){const t=this.getFlowDirection(n,s);this.itemCount=s,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(o){return}return e.remove(),e}async setFocus(){await(0,s.c)(this);const{items:t}=this,e=t[t.length-1];return null===e||void 0===e?void 0:e.setFocus()}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,s.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[r]:!0,[a]:"advancing"===t,[c]:"retreating"===t};return(0,o.h)("div",{key:"3d91e0e8d0ffb94e3e8d563e3b34b47b23b3987b",class:e},(0,o.h)("slot",{key:"fb32070e340ba86196b5150d2bcc884ac2d94901"}))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-flow"].forEach((t=>{if("calcite-flow"===t)customElements.get(t)||customElements.define(t,l)}))}d();const h=l,u=d},47242:(t,e,i)=>{i.d(e,{a:()=>c,b:()=>l,c:()=>d,s:()=>a});var o=i(70524),n=i(42482);const s=new WeakMap,r=new WeakMap;function a(t){r.set(t,new Promise((e=>s.set(t,e))))}function c(t){s.get(t)()}function l(t){return r.get(t)}async function d(t){if(await l(t),(0,n.i)())return(0,o.xE)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},72021:(t,e,i)=>{i.d(e,{c:()=>n});var o=i(42482);function n(t,e,i){if(!(0,o.i)())return;const n=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new n(e,i)}}}]);
//# sourceMappingURL=53049.57991ad6.chunk.js.map