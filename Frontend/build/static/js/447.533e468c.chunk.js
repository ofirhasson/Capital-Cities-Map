/*! For license information please see 447.533e468c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[447],{61580:(e,n,t)=>{t.r(n),t.d(n,{CalcitePopover:()=>o,defineCustomElement:()=>r});var i=t(2654);const o=i.P,r=i.d},64044:(e,n,t)=>{function i(e){return"l"===e?"m":"s"}async function o(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}t.d(n,{c:()=>o,g:()=>i})},13160:(e,n,t)=>{t.d(n,{I:()=>k,c:()=>w,d:()=>g,u:()=>f});var i=t(70524),o=t(42482);const r=/firefox/i.test((0,o.g)()),c=r?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){const n=e.target;if(r&&!c.get(n))return;const{disabled:t}=n;t&&e.preventDefault()}const l=["mousedown","mouseup","click"];function u(e){const n=e.target;r&&!c.get(n)||n.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function f(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void m(e);v(e),e.el.removeAttribute("aria-disabled")}function m(e){if(e.el.click=a,r){const n=function(e){return e.el.parentElement||e.el}(e),t=c.get(e.el);return t!==n&&(b(t),c.set(e.el,n)),void p(c.get(e.el))}p(e.el)}function p(e){e&&(e.addEventListener("pointerdown",s,d),l.forEach((n=>e.addEventListener(n,u,d))))}function v(e){if(delete e.el.click,r){const n=c.get(e.el);let t=!1;if(null!==n&&void 0!==n&&n.children)for(const i of n.children)if("disabled"in i&&i.disabled&&i!==e.el){t=!0;break}return t||b(n),void c.delete(e.el)}b(e.el)}function b(e){e&&(e.removeEventListener("pointerdown",s,d),l.forEach((n=>e.removeEventListener(n,u,d))))}function w(e){e.disabled&&r&&m(e)}function g(e){r&&v(e)}const h={container:"interaction-container"};function k(e,n){let{disabled:t}=e;return(0,i.h)("div",{class:h.container,inert:t},...n)}},47242:(e,n,t)=>{t.d(n,{a:()=>s,b:()=>l,c:()=>u,s:()=>a});var i=t(70524),o=t(42482);const r=new WeakMap,c=new WeakMap;function a(e){c.set(e,new Promise((n=>r.set(e,n))))}function s(e){r.get(e)()}function l(e){return c.get(e)}async function u(e){if(await l(e),(0,o.i)())return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=447.533e468c.chunk.js.map