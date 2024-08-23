"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[63275],{15909:(e,t,r)=>{r.d(t,{D:()=>o});var a=r(80292);function o(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,a.l)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},80292:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>a})},63275:(e,t,r)=>{r.d(t,{save:()=>m,saveAs:()=>y});var a=r(65286),o=r(73117);const n="Image Service",i="imagery-layer-save",l="imagery-layer-save-as",s="imagery-tile-layer-save",u="imagery-tile-layer-save-as";function p(e){var t;if("imagery"===e.type)return{isValid:!0};const{raster:r}=e,a="Function"===(null===r||void 0===r?void 0:r.datasetFormat)?null===(t=r.primaryRasters)||void 0===t?void 0:t.rasters[0]:r;return{isValid:"RasterTileServer"===(null===a||void 0===a?void 0:a.datasetFormat)&&("Raster"===a.tileType||"Map"===a.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function d(e,t){const{parsedUrl:r,title:a,fullExtent:n}=e;t.url=r.path,t.title||(t.title=a);try{t.extent=await(0,o.$o)(n)}catch{t.extent=void 0}(0,o.ck)(t,o.hz.METADATA),"imagery-tile"===e.type&&(0,o.qj)(t,o.hz.TILED_IMAGERY)}async function m(e,t){const r="imagery"===e.type?i:s;return(0,a.a1)({layer:e,itemType:n,validateLayer:p,createItemData:c,errorNamePrefix:r},t)}async function y(e,t,r){const o="imagery"===e.type?l:u;return(0,a.po)({layer:e,itemType:n,validateLayer:p,createItemData:c,errorNamePrefix:o,newItem:t,setItemProperties:d},r)}},65286:(e,t,r)=>{r.d(t,{a1:()=>h,po:()=>I});var a=r(10064),o=r(15909),n=r(7575),i=r(98995),l=r(32698),s=r(73117),u=r(76926),p=r(9634);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.Z("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,r,o)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function m(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:n}=e;if((0,u.w)(t),function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:n,layer:i}=e,l=[r];if(o&&l.push(o),!l.includes(t.type)){const e=l.map((e=>"'".concat(e,"'"))).join(", ");throw new a.Z("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:i})}}(e),n){const e=n(t);if(!e.isValid)throw new a.Z("".concat(r,":invalid-parameters"),e.errorMessage,{layer:o})}}function y(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.Z("".concat(r,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.Z("".concat(r,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:o})}function f(e){var t,r,a,o;const{newItem:l,itemType:s}=e;let u=i.default.from(l);return u.id&&(u=u.clone(),u.id=null),null!==(r=(t=u).type)&&void 0!==r||(t.type=s),null!==(o=(a=u).portal)&&void 0!==o||(a.portal=n.Z.getDefault()),m({...e,item:u}),u}function v(e){return(0,l.Y)(e,"portal-item")}async function w(e,t,r){var a,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(a=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==a?a:[]),(0,p.z)(t,{errorName:"layer-write:unsupported"},r),n}function g(e){(0,s.qj)(e,s.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:i,saveResources:l,supplementalUnsupportedErrors:s}=e;await c(e),y(e);const u=r.portalItem,p=n?n(u):v(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:s}),m=await a({layer:r,layerJSON:d},u);return await(null===i||void 0===i?void 0:i(r,u)),g(u),await u.update({data:m}),(0,o.D)(p),await(null===l||void 0===l?void 0:l(u,p)),u}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:i,saveResources:l,supplementalUnsupportedErrors:s}=e;await c(e);const u=f(e),p=n?n(u):v(u),d=await w(r,p,{...t,supplementalUnsupportedErrors:s}),m=await a({layer:r,layerJSON:d},u);return await i(r,u),g(u),await async function(e,t,r){var a;const o=e.portal;await o.signIn(),await(null===(a=o.user)||void 0===a?void 0:a.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder}))}(u,m,t),r.portalItem=u,(0,o.D)(p),await(null===l||void 0===l?void 0:l(u,p)),u}},32698:(e,t,r)=>{r.d(t,{Y:()=>i,h:()=>n});var a=r(35995),o=r(7575);function n(e,t){return{...l(e,t),readResourcePaths:[]}}function i(e,t,r){const o=(0,a.mN)(e.itemUrl);return{...l(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,t){return{origin:t,url:(0,a.mN)(e.itemUrl),portal:e.portal||o.Z.getDefault(),portalItem:e}}},76926:(e,t,r)=>{r.d(t,{w:()=>i});var a=r(42265),o=r(10064),n=r(66660);function i(e){if(a.default.apiKey&&(0,n.r)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}},9634:(e,t,r)=>{r.d(t,{P:()=>o,z:()=>i});var a=r(10064);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const n=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){var o;let i=(null!==(o=e.messages)&&void 0!==o?o:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:o}=e;return new a.Z(t,r,o)}));if(e.blockedRelativeUrls&&(i=i.concat(e.blockedRelativeUrls.map((e=>new a.Z("url:unsupported","Relative url '".concat(e,"' is not supported")))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(i=i.filter((e=>{let{name:r}=e;return!(n.has(r)||t.includes(r))}))),a&&(i=i.filter((e=>"web-document-write:property-required"!==e.name)))}if(i.length>0)throw new a.Z(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}}}]);
//# sourceMappingURL=63275.ad475941.chunk.js.map