"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[63893],{63893:(e,r,t)=>{t.r(r),t.d(r,{reconcile:()=>h,serverVersionCacheMap:()=>d});var n=t(76200),s=t(10064),o=t(23084),i=t(3231),a=t(27366),c=t(46784),l=t(49861),u=(t(93169),t(32718),t(84936),t(69912));let p=class extends c.wq{constructor(e){super(e),this.hasConflicts=!1,this.moment=null,this.didPost=!1,this.success=!1}};(0,a._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],p.prototype,"hasConflicts",void 0),(0,a._)([(0,l.Cb)({type:Date,json:{type:Number,write:{writer:(e,r)=>{r.moment=e?e.getTime():null}}}})],p.prototype,"moment",void 0),(0,a._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],p.prototype,"didPost",void 0),(0,a._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],p.prototype,"success",void 0),p=(0,a._)([(0,u.j)("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")],p);const v=p,d=new Map;async function h(e,r,t,a){var c;d.has(e)||await(0,i.P)(d,e);const l=d.get(e);if((null!==(c=null===l||void 0===l?void 0:l.serverVersion)&&void 0!==c?c:0)<=11.1)throw new s.Z("reconcile:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!r)throw new s.Z("reconcile:missing-guid","guid for version is missing");const u=(0,o.en)(e),p=t.toJSON(),h=(0,o.lA)(u.query,{query:(0,o.cv)({...p,f:"json"}),...a,method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const w="".concat(u.path,"/versions/").concat(r,"/reconcile"),{data:m}=await(0,n.Z)(w,h);return v.fromJSON(m)}},3231:(e,r,t)=>{t.d(r,{P:()=>s});var n=t(76200);async function s(e,r){let t=null;const s="string"==typeof r?r:r.path;if(!e.has(s)){const o=await(0,n.Z)(s.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});t={serverVersion:Number(o.data.currentVersion),featureServerUrl:s.replace(/\/VersionManagementServer/i,"/FeatureServer")},e.set(r,t)}}}}]);
//# sourceMappingURL=63893.e1283252.chunk.js.map