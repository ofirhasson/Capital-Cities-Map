/*! For license information please see 1869.8fea946e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[1869],{1869:(e,i,s)=>{s.r(i),s.d(i,{arcgis_version_management_service_item:()=>a,arcgis_version_management_version_properties:()=>r});var t=s(62042);const a=class{constructor(e){(0,t.r)(this,e),this.arcgisFlowItemBack=(0,t.c)(this,"arcgisFlowItemBack",7),this.arcgisFlowItemClose=(0,t.c)(this,"arcgisFlowItemClose",7),this.arcgisGetVersions=(0,t.c)(this,"arcgisGetVersions",7),this.arcgisManageVersion=(0,t.c)(this,"arcgisManageVersion",7),this.arcgisNewVersion=(0,t.c)(this,"arcgisNewVersion",7),this._versionListEventListeners=new Map,this._arcgisGetVersions=e=>{this.arcgisGetVersions.emit(e.detail)},this._arcgisManageVersion=e=>{this.arcgisManageVersion.emit(e.detail)},this._arcgisNewVersion=e=>{this.arcgisNewVersion.emit(e.detail)},this.serviceItemElementProps=void 0}disconnectedCallback(){this._versionList&&this._removeVersionListEventListeners(this._versionList)}render(){const{serviceItemElementProps:{allowEditing:e,closable:i,currentUser:s,executionError:a,currentVersionIdentifier:r,flowElement:n,hasAdvEditingUte:c,heading:o,isVersioningApiAvailable:l,pageSize:d,serviceName:h,serviceUrl:m,state:v,strings:g,versionInfos:b}}=this;let{_versionList:f}=this;const p=(0,t.h)("calcite-combobox",{key:"e80f4924dbd00f2a29140b91ee53369dff826d39",clearDisabled:!0,label:h,maxItems:5,overlayPositioning:"fixed",selectionMode:"single-persist",onCalciteComboboxChange:e=>{const i=e.target,s=b.find((e=>e.versionIdentifier.guid===i.value));this.arcgisManageVersion.emit({actionType:"changeVersion",serviceUrl:m,versionInfo:s})}},b?b.map((e=>(0,t.h)("calcite-combobox-item",{selected:r.guid===e.versionIdentifier.guid&&r.name===e.versionIdentifier.name,textLabel:e.versionIdentifier.name,value:e.versionIdentifier.guid}))):void 0);let u,V;return e&&(u=(0,t.h)("calcite-action",{key:"fc6779c583aa81cf1f12584bda094b7d0d25dd06",id:"actionManageVersions_".concat(h),icon:"list",scale:"s",slot:"control",text:"",onClick:async()=>{f=document.createElement("arcgis-version-management-version-list"),f.versionListElementProps={closable:i,currentUser:s,currentVersionIdentifier:r,executionError:a,hasAdvEditingUte:c,heading:o,isVersioningApiAvailable:l,pageSize:d,serviceName:h,serviceUrl:m,state:v,strings:g,versionInfos:b},f.addEventListener("calciteFlowItemBack",(e=>{e.preventDefault(),this.arcgisFlowItemBack.emit()})),f.addEventListener("calciteFlowItemClose",(()=>{this.arcgisFlowItemClose.emit()})),this._addVersionListEventListeners(f),n.append(f)}}),V=(0,t.h)("calcite-tooltip",{key:"5d9377d1bec63e4c3d310a3941c0ad693e81f48b",overlayPositioning:"fixed",referenceElement:"actionManageVersions_".concat(h)},(0,t.h)("span",{key:"ce2e9fc08127e075738fb2cc59fa5387343eda50"},g.headers.manageVersions))),(0,t.h)("calcite-block",{key:"357a2c3e708f61505efa5e1a8f82a7c8ab4ac8dd",open:!0,heading:h},p,u,V)}_addVersionListEventListeners(e){e.addEventListener("arcgisGetVersions",this._arcgisGetVersions),this._versionListEventListeners.set("arcgisGetVersions",this._arcgisGetVersions),e.addEventListener("arcgisManageVersion",this._arcgisManageVersion),this._versionListEventListeners.set("arcgisManageVersion",this._arcgisManageVersion),e.addEventListener("arcgisNewVersion",this._arcgisNewVersion),this._versionListEventListeners.set("arcgisNewVersion",this._arcgisNewVersion)}_removeVersionListEventListeners(e){for(const[i,s]of this._versionListEventListeners)e.removeEventListener(i,s)}get el(){return(0,t.g)(this)}},r=class{constructor(e){(0,t.r)(this,e),this.arcgisAlterVersion=(0,t.c)(this,"arcgisAlterVersion",7),this.arcgisCreateVersion=(0,t.c)(this,"arcgisCreateVersion",7),this.arcgisFlowItemBack=(0,t.c)(this,"arcgisFlowItemBack",7),this.arcgisFlowItemClose=(0,t.c)(this,"arcgisFlowItemClose",7),this._switchToVersion=!0,this._handleCancel=()=>{this.arcgisFlowItemBack.emit()},this._handleChange=e=>{const{_mode:i,_ownerName:s,_versionName:t,versionPropertiesElementProps:{currentUser:a,serviceUrl:r,versionInfo:n}}=this;let{_alterVersionParameters:c,_createVersionParameters:o}=this;switch("create"===i&&(o||(o={access:"public",description:"",featureServerUrl:r,ownerName:a.toUpperCase(),versionName:""})),"edit"===i&&(c||(c={featureServerUrl:r,versionIdentifier:n.versionIdentifier,ownerName:s,versionName:t,access:n.access,description:n.description})),e.type){case"calciteChipGroupSelect":{const s=e.target.label,t=e.target.selectedItems[0].value;"create"===i&&(o={...o,[s]:t}),"edit"===i&&(c={...c,[s]:t});break}case"calciteInputTextInput":{const s=e.target.name,t=e.target.value;"create"===i&&(o={...o,[s]:t}),"edit"===i&&(c={...c,[s]:t});break}case"calciteTextAreaInput":{const s=e.target.name,t=e.target.value;"create"===i&&(o={...o,[s]:t}),"edit"===i&&(c={...c,[s]:t});break}}var l;"create"===i&&("public"!==o.access&&a.toUpperCase()!==(null===(l=o.ownerName)||void 0===l?void 0:l.toUpperCase())?(this.switchToVersionCheckboxElement.checked=!1,this.switchToVersionCheckboxElement.disabled=!0):this.switchToVersionCheckboxElement.disabled=!1,this._createVersionParameters=o);"edit"===i&&(this._alterVersionParameters=c)},this._handleClose=()=>{this.arcgisFlowItemClose.emit()},this._handleSave=()=>{const{_alterVersionParameters:e,_createVersionParameters:i,_mode:s,_switchToVersion:t}=this;"create"===s&&this.arcgisCreateVersion.emit({createVersionParameters:i,switchToVersion:t}),"edit"===s&&this.arcgisAlterVersion.emit({alterVersionParameters:e})},this._handleSwitchToVersionChange=e=>{this._switchToVersion=e.target.checked},this.versionPropertiesElementProps=void 0}async componentWillLoad(){const{versionPropertiesElementProps:{versionInfo:e}}=this;e?(this._mode="edit",this._fullVersionName=e.versionIdentifier.name,this._ownerName=this._fullVersionName.substring(0,this._fullVersionName.lastIndexOf(".")).toUpperCase(),this._versionName=this._fullVersionName.substring(this._fullVersionName.lastIndexOf(".")+1)):this._mode="create"}componentDidRender(){var e;"create"===this._mode&&(null===(e=this.versionNameInputElement)||void 0===e||e.setFocus())}render(){const{versionPropertiesElementProps:{closable:e,currentUser:i,hasAdvEditingUte:s,state:a,strings:r,versionInfo:n},_mode:c,_ownerName:o,_versionName:l}=this,d=(0,t.h)("div",{key:"135d4141e995bbf31123c16d900a1e274575aafb"},(0,t.h)("calcite-button",{key:"44a78143d595fe108d1d312da6ba1bf340be77b8",appearance:"outline",slot:"footer",width:"half",onClick:this._handleCancel},r.actions.cancelSave),(0,t.h)("calcite-button",{key:"30b32b985a16d7841a444e638309b914cac1b406",slot:"footer",width:"half",onClick:this._handleSave},r.actions.saveVersion)),h=(0,t.h)("calcite-label",{key:"fb496917361a78043ca219cdb438f30414dd5acd"},r.input.versionAccess,(0,t.h)("calcite-chip-group",{key:"f81920bbcdc1bd18187b8107d039cd2a61b8e4dc",label:"access",onCalciteChipGroupSelect:this._handleChange,selectionMode:"single-persist"},(0,t.h)("calcite-chip",{key:"9e55255b9114d1d239a17248ccd200fd097af5f2",selected:"edit"===c&&"public"===n.access||"create"===c,value:"public"},r.accessLevels.public),(0,t.h)("calcite-chip",{key:"03374352be5cfff98f80bb915fe75be762078258",selected:"edit"===c&&"protected"===n.access,value:"protected"},r.accessLevels.protected),(0,t.h)("calcite-chip",{key:"452499aeb04c69b51101b774d91c0479753cf43b",selected:"edit"===c&&"private"===n.access,value:"private"},r.accessLevels.private))),m=(0,t.h)("calcite-label",{key:"11c04b89dfd8d85b68d322d552ece3bf5cc35567"},r.input.versionDescription,(0,t.h)("calcite-text-area",{key:"469568f5e6f902076338f1e7a99332d724ff54da",name:"description",onCalciteTextAreaInput:this._handleChange,resize:"vertical",value:"edit"===c?n.description:""})),v=(0,t.h)("calcite-label",{key:"14b2dabc65093f576b8ebca98cec745210353c0b"},r.input.versionName,(0,t.h)("calcite-input-text",{key:"04c0d47377ea59031fa88c38b996203b0d7c9175",ref:e=>{this.versionNameInputElement=e},name:"versionName",onCalciteInputTextInput:this._handleChange,maxLength:62,value:"edit"===c?l:""})),g=(0,t.h)("calcite-label",{key:"b1773ab9fd4183852b522f465a6ba5347934c358"},r.input.versionOwner,(0,t.h)("calcite-input-text",{key:"e62366ef2e7c143e9f63be1ae177a6b1a3639bce",name:"ownerName",onCalciteInputTextInput:this._handleChange,disabled:!s,value:"edit"===c?o:i.toUpperCase()})),b="create"===c?(0,t.h)("calcite-label",{layout:"inline"},(0,t.h)("calcite-checkbox",{ref:e=>{this.switchToVersionCheckboxElement=e},checked:!0,name:"switchToVersion",onCalciteCheckboxChange:this._handleSwitchToVersionChange}),r.actions.switchToVersion):void 0;return(0,t.h)("calcite-flow-item",{key:"79059091093b6a5c977b43c2530db56f86c98133",closable:e,description:n?n.versionIdentifier.name:"",heading:n?r.actions.editVersion:r.actions.newVersion,onCalciteFlowItemClose:this._handleClose},(0,t.h)("calcite-panel",{key:"0eecfe1d97445089ef205e3c4dc569a23edc863c",loading:"executing"===a},(0,t.h)("calcite-block",{key:"ae61afab2e9d622c41d4b2e0f833057ceba024e0",heading:"",open:!0},v,m,h,g,b,d)))}get el(){return(0,t.g)(this)}}}}]);
//# sourceMappingURL=1869.8fea946e.chunk.js.map