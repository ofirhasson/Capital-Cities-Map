/*! For license information please see 70635.4f11077e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[70635],{70635:(e,t,l)=>{l.r(t),l.d(t,{CalciteTableRow:()=>p,defineCustomElement:()=>w});var i=l(70524),o=l(92358),n=l(19579),s=l(13160),a=l(64044),c=l(57601),r=l(62216),d=l(34592);const h="last-visible-row",u=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableRowSelect=(0,i.yM)(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=(0,i.yM)(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.keyDownHandler=e=>{if("interactive"!==this.interactionMode)return;const t=e.target,l=e.key,i=e.ctrlKey,n=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(l){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":(0,o.v)(n,t,"previous",!1),e.preventDefault();break;case"ArrowRight":(0,o.v)(n,t,"next",!1),e.preventDefault();break;case"Home":i?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):((0,o.v)(n,t,"first",!1),e.preventDefault());break;case"End":var s;if(i)this.emitTableRowFocusRequest(null===(s=this.rowCells)||void 0===s?void 0:s.length,this.positionAll,"last",!0),e.preventDefault();else(0,o.v)(n,t,"last",!1),e.preventDefault()}},this.emitTableRowFocusRequest=(e,t,l,i)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:l,lastCell:i})},this.updateCells=()=>{var e,t,l;const i=this.alignment?this.alignment:"head"!==this.rowType?"center":"start",o=null===(e=this.tableRowSlotEl)||void 0===e||null===(e=e.assignedElements({flatten:!0}))||void 0===e?void 0:e.filter((e=>e.matches("calcite-table-cell")||e.matches("calcite-table-header"))),n=null===(t=Array.from(null===(l=this.tableRowEl)||void 0===l?void 0:l.querySelectorAll("calcite-table-header, calcite-table-cell")))||void 0===t?void 0:t.filter((e=>e.numberCell||e.selectionCell)),s=n?n.concat(o):o;s.length>0&&(null===s||void 0===s||s.forEach(((e,t)=>{e.interactionMode=this.interactionMode,e.lastCell=t===s.length-1,e.parentRowAlignment=i,e.parentRowIsSelected=this.selected,e.parentRowType=this.rowType,e.positionInRow=t+1,e.scale=this.scale,"CALCITE-TABLE-CELL"===e.nodeName&&(e.readCellContentsToAT=this.readCellContentsToAT,e.disabled=this.disabled)}))),this.rowCells=s||[],this.cellCount=null===s||void 0===s?void 0:s.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{(0,n.i)(e.key)&&(" "===e.key&&e.preventDefault(),this.handleSelectionOfRow())},this.alignment=void 0,this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.interactionMode="interactive",this.lastVisibleRow=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame((()=>this.updateCells()))}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){(0,s.c)(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,s.d)(this)}calciteInternalTableRowFocusChangeHandler(e){if(e.target.contains(this.el)){const l=e.detail.cellPosition,i=e.detail.rowPosition,o=e.detail.destination,n=e.detail.lastCell;if(i===this.positionAll){var t;if(this.disabled){const e="last"===o?"previous":"first"===o?"next":o;return void this.emitTableRowFocusRequest(l,this.positionAll,e)}const e=n?this.rowCells[this.rowCells.length-1]:null===(t=this.rowCells)||void 0===t?void 0:t.find(((e,t)=>t+1===l));e&&e.setFocus()}}}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?"check-square-f":"multiple"===this.selectionMode?"square":this.selected?"circle-f":"circle";return(0,i.h)("calcite-icon",{icon:e,scale:(0,a.g)(this.scale)})}renderSelectableCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:"multiple"===this.selectionMode&&this.handleSelectionOfRow,onKeyDown:"multiple"===this.selectionMode&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):(0,i.h)("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:!0})}renderNumberedCell(){return"head"===this.rowType?(0,i.h)("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0,parentRowAlignment:this.alignment}):"body"===this.rowType?(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0,parentRowAlignment:this.alignment},this.positionSectionLocalized):(0,i.h)("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0,parentRowAlignment:this.alignment})}render(){return(0,i.h)(i.AA,{key:"185bf9700be4b1095871b2504f25212df83561b0"},(0,i.h)(s.I,{key:"d06ab2d2bd334c8eb6c87e788f6078bf2e6a0340",disabled:this.disabled},(0,i.h)("tr",{key:"e8d2091f1d498dfd8a618643d838d2978659057f","aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,class:{[h]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),"none"!==this.selectionMode&&this.renderSelectableCell(),(0,i.h)("slot",{key:"d7b53de55a8ee6cdd0a6289dea9a386bf977a565",onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e}))))}get el(){return this}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}"}},[1,"calcite-table-row",{alignment:[513],disabled:[516],selected:[516],cellCount:[1026,"cell-count"],interactionMode:[1,"interaction-mode"],lastVisibleRow:[4,"last-visible-row"],rowType:[1,"row-type"],numbered:[4],positionSection:[2,"position-section"],positionSectionLocalized:[1,"position-section-localized"],positionAll:[2,"position-all"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionMode:[1,"selection-mode"],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],bodyRowCount:[2,"body-row-count"],effectiveLocale:[32]},[[4,"calciteInternalTableRowFocusChange","calciteInternalTableRowFocusChangeHandler"]],{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}]);function b(){if("undefined"===typeof customElements)return;["calcite-table-row","calcite-icon","calcite-table-cell","calcite-table-header"].forEach((e=>{switch(e){case"calcite-table-row":customElements.get(e)||customElements.define(e,u);break;case"calcite-icon":customElements.get(e)||(0,c.d)();break;case"calcite-table-cell":customElements.get(e)||(0,r.d)();break;case"calcite-table-header":customElements.get(e)||(0,d.d)()}}))}b();const p=u,w=b},13160:(e,t,l)=>{l.d(t,{I:()=>C,c:()=>f,d:()=>m,u:()=>u});var i=l(70524),o=l(42482);const n=/firefox/i.test((0,o.g)()),s=n?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(n&&!s.get(t))return;const{disabled:l}=t;l&&e.preventDefault()}const r=["mousedown","mouseup","click"];function d(e){const t=e.target;n&&!s.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void b(e);w(e),e.el.removeAttribute("aria-disabled")}function b(e){if(e.el.click=a,n){const t=function(e){return e.el.parentElement||e.el}(e),l=s.get(e.el);return l!==t&&(v(l),s.set(e.el,t)),void p(s.get(e.el))}p(e.el)}function p(e){e&&(e.addEventListener("pointerdown",c,h),r.forEach((t=>e.addEventListener(t,d,h))))}function w(e){if(delete e.el.click,n){const t=s.get(e.el);let l=!1;if(null!==t&&void 0!==t&&t.children)for(const i of t.children)if("disabled"in i&&i.disabled&&i!==e.el){l=!0;break}return l||v(t),void s.delete(e.el)}v(e.el)}function v(e){e&&(e.removeEventListener("pointerdown",c,h),r.forEach((t=>e.removeEventListener(t,d,h))))}function f(e){e.disabled&&n&&b(e)}function m(e){n&&w(e)}const g={container:"interaction-container"};function C(e,t){let{disabled:l}=e;return(0,i.h)("div",{class:g.container,inert:l},...t)}},62216:(e,t,l)=>{l.d(t,{T:()=>m,d:()=>g});var i=l(70524),o=l(47242),n=l(52655),s=l(13160),a=l(46895),c=l(92358),r=l(40120);const d="content-cell",h="number-cell",u="footer-cell",b="selection-cell",p="selected-cell",w="assistive-text",v="last-cell",f="static-cell",m=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowAlignment="start",this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,o.s)(this),await(0,n.s)(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){(0,o.a)(this)}connectedCallback(){(0,a.c)(this),(0,n.c)(this),(0,s.c)(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,a.d)(this),(0,n.d)(this),(0,s.d)(this)}async setFocus(){await(0,o.c)(this),this.containerEl.focus()}updateScreenReaderSelectionText(){var e,t,l,i,o,n;const s="".concat(null===(e=this.messages)||void 0===e?void 0:e.row," ").concat(this.parentRowPositionLocalized," ").concat(null===(t=this.messages)||void 0===t?void 0:t.selected," ").concat(null===(l=this.messages)||void 0===l?void 0:l.keyboardDeselect),a="".concat(null===(i=this.messages)||void 0===i?void 0:i.row," ").concat(this.parentRowPositionLocalized," ").concat(null===(o=this.messages)||void 0===o?void 0:o.unselected," ").concat(null===(n=this.messages)||void 0===n?void 0:n.keyboardSelect);this.selectionText=this.parentRowIsSelected?s:a}render(){const e=(0,c.a)(this.el),t=this.disabled||"static"===this.interactionMode&&(!this.selectionCell||this.selectionCell&&"foot"===this.parentRowType);return(0,i.h)(i.AA,{key:"7827c1a5f297e7436e89e33e8bdab1701095c6a4"},(0,i.h)(s.I,{key:"42ffde1bd750dddbaefbe2b7ec29b16a6da83ad0",disabled:this.disabled},(0,i.h)("td",{key:"3719c428fec09f9237174091d933f05aa1f68136","aria-disabled":this.disabled,class:{[u]:"foot"===this.parentRowType,[d]:!this.numberCell&&!this.selectionCell,[h]:this.numberCell,[b]:this.selectionCell,[p]:this.parentRowIsSelected,[v]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[r.C.rtl]:"rtl"===e,[f]:t,[this.parentRowAlignment]:"start"===this.parentRowAlignment||"end"===this.parentRowAlignment},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:e=>this.containerEl=e,role:"interactive"===this.interactionMode?"gridcell":"cell",rowSpan:this.rowSpan,tabIndex:t?-1:0},(this.selectionCell||this.readCellContentsToAT)&&(0,i.h)("span",{key:"70593b5f249e4f3678a9f858b97e23104a6185f4","aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:w},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),(0,i.h)("slot",{key:"82258001661931991431268a11fa28a320b08777",onSlotchange:this.updateScreenReaderContentsText}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background:var(--calcite-table-cell-background, transparent);display:contents}:host([alignment=center]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment=end]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background:var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"}},[1,"calcite-table-cell",{alignment:[513],colSpan:[514,"col-span"],rowSpan:[514,"row-span"],disabled:[4],interactionMode:[1,"interaction-mode"],lastCell:[4,"last-cell"],numberCell:[4,"number-cell"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowAlignment:[1,"parent-row-alignment"],parentRowPositionLocalized:[1,"parent-row-position-localized"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionCell:[4,"selection-cell"],messages:[1040],messageOverrides:[1040],contentsText:[32],defaultMessages:[32],focused:[32],selectionText:[32],effectiveLocale:[32],setFocus:[64]},void 0,{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function g(){if("undefined"===typeof customElements)return;["calcite-table-cell"].forEach((e=>{if("calcite-table-cell"===e)customElements.get(e)||customElements.define(e,m)}))}g()}}]);
//# sourceMappingURL=70635.4f11077e.chunk.js.map