"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[13838],{13838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var s,i=r(27366),l=(r(59486),r(80987)),o=r(77178),n=r(97642),a=r(66978),u=r(94172),y=r(35995),d=r(49861),p=(r(93169),r(32718),r(84936),r(38511)),h=r(69912),f=r(31201),c=r(78952),b=r(30651),v=r(6693),m=r(6061),g=r(29598),S=r(71684),w=r(56811),_=r(70361),C=r(91505),k=r(46784),x=r(54472),E=r(643),I=r(25243),O=r(21857),G=r(53866);let P=s=class extends(C.Z.EventedMixin((0,k.eC)(x.Z))){constructor(){super(...arguments),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,u.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),u.sync),(0,u.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),u.sync),(0,u.watch)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),u.sync),(0,u.watch)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),u.sync)])}initialize(){(0,u.whenOnce)((()=>this.networkLink)).then((()=>(0,u.whenOnce)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const i=null!=e?e.signal:null,o=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",i).then((e=>{var t;const r=(0,O.lm)(e.sublayers);this.fullExtent=G.Z.fromJSON(r),this.sourceJSON=e;const i=(0,I.se)(l.Z.ofType(s),(0,O.j5)(s,e));this.sublayers?this.sublayers.addMany(i):this.sublayers=i,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(o),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return(0,O.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,O.Cw)(e.data)))}};(0,i._)([(0,d.Cb)()],P.prototype,"description",void 0),(0,i._)([(0,d.Cb)({type:G.Z})],P.prototype,"fullExtent",void 0),(0,i._)([(0,d.Cb)()],P.prototype,"id",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,value:null})],P.prototype,"networkLink",void 0),(0,i._)([(0,d.Cb)({json:{write:{allowNull:!0}}})],P.prototype,"parent",void 0),(0,i._)([(0,d.Cb)({type:l.Z.ofType(P),json:{write:{allowNull:!0}}})],P.prototype,"sublayers",void 0),(0,i._)([(0,d.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,E.Cb)(e)}}})],P.prototype,"title",void 0),(0,i._)([(0,d.Cb)({value:!0})],P.prototype,"visible",null),(0,i._)([(0,p.r)("visible",["visibility"])],P.prototype,"readVisible",null),(0,i._)([(0,d.Cb)()],P.prototype,"sourceJSON",void 0),(0,i._)([(0,d.Cb)()],P.prototype,"layer",void 0),P=s=(0,i._)([(0,h.j)("esri.layers.support.KMLSublayer")],P);const L=P,F=["kml","xml"];let M=class extends((0,v.h7)((0,S.Q)((0,w.M)((0,m.q)((0,g.I)((0,n.R)(b.Z))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=c.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,u.watch)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),u.sync),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,O.j5)(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.vt)(this.url,F)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,O.CS)(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)})),r=(0,O.Cw)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,i._)([(0,d.Cb)({readOnly:!0})],M.prototype,"allSublayers",void 0),(0,i._)([(0,d.Cb)({type:c.Z})],M.prototype,"outSpatialReference",void 0),(0,i._)([(0,d.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:!1}})],M.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:["KML"]})],M.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({})],M.prototype,"resourceInfo",void 0),(0,i._)([(0,d.Cb)({type:l.Z.ofType(L),json:{write:{ignoreOrigin:!0}}})],M.prototype,"sublayers",void 0),(0,i._)([(0,p.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],M.prototype,"readSublayersFromItemOrWebMap",null),(0,i._)([(0,p.r)("service","sublayers",["sublayers"])],M.prototype,"readSublayers",null),(0,i._)([(0,f.c)("sublayers")],M.prototype,"writeSublayers",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),(0,i._)([(0,d.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],M.prototype,"title",null),(0,i._)([(0,d.Cb)(_.HQ)],M.prototype,"url",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],M.prototype,"visibleSublayers",null),(0,i._)([(0,d.Cb)({type:G.Z})],M.prototype,"extent",void 0),(0,i._)([(0,d.Cb)()],M.prototype,"fullExtent",null),M=(0,i._)([(0,h.j)("esri.layers.KMLLayer")],M);const Z=M},21857:(e,t,r)=>{r.d(t,{CS:()=>b,Cw:()=>c,Yu:()=>g,j5:()=>v,lm:()=>S});var s=r(42265),i=r(19545),l=r(44055),o=r(76200),n=r(84652),a=r(35995),u=r(78952),y=r(41414),d=r(376),p=r(9014),h=r(49818);const f={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function c(e){var t;const r=e.folders||[],s=r.slice(),i=new Map,l=new Map,o=new Map,a=new Map,u=new Map,y={esriGeometryPoint:l,esriGeometryPolyline:o,esriGeometryPolygon:a};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,n.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;i.set(r,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(l,s,e.featureSet.features):"esriGeometryPolyline"===r?m(o,s,e.featureSet.features):"esriGeometryPolygon"===r&&m(a,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{u.set(e.id,e)})),r.forEach((t=>{t.networkLinkIds.forEach((r=>{const i=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(r,t.id,e.networkLinks);i&&s.push(i)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,n.d9)(i.get("esriGeometryPoint")),e.polylines=(0,n.d9)(i.get("esriGeometryPolyline")),e.polygons=(0,n.d9)(i.get("esriGeometryPolygon")),e.mapImages=[];for(const r of e.featureInfos)switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=y[r.type].get(r.id);s&&(null===(t=e[f[r.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=u.get(r.id);t&&e.mapImages.push(t);break}}e.fullExtent=S([e])}}));const d=S(s);return{folders:r,sublayers:s,extent:d}}function b(e,t,r,l){const n=null===i.id||void 0===i.id?void 0:i.id.findCredential(e);e=(0,a.fl)(e,{token:null===n||void 0===n?void 0:n.token});const u=s.default.kmlServiceUrl;return(0,o.Z)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:l})}function v(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const i=[],l={},o=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return o.forEach((t=>{const o=new e;if(r?o.read(t,r):o.read(t),s.length&&n.has(o.id)&&(o.visible=s.includes(o.id)),l[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var a;const e=l[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(a=e.sublayers)||void 0===a||a.unshift(o)}else i.unshift(o)})),i}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=h.Z.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,p.i)(r.drawingInfo.renderer),i=l.Z.fromJSON(e.popupInfo),o=[];for(const l of t){const e=await s.getSymbolAsync(l);l.symbol=e,l.popupTemplate=i,l.visible=!0,o.push(l)}return o}function S(e){const t=(0,y.Ue)(y.G_),r=(0,y.Ue)(y.G_);for(const o of e){var s,i,l;if(null!==(s=o.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of o.polygons.featureSet.features)(0,d.Yg)(t,e.geometry),(0,y.TC)(r,t);if(null!==(i=o.polylines)&&void 0!==i&&null!==(i=i.featureSet)&&void 0!==i&&i.features)for(const e of o.polylines.featureSet.features)(0,d.Yg)(t,e.geometry),(0,y.TC)(r,t);if(null!==(l=o.points)&&void 0!==l&&null!==(l=l.featureSet)&&void 0!==l&&l.features)for(const e of o.points.featureSet.features)(0,d.Yg)(t,e.geometry),(0,y.TC)(r,t);if(o.mapImages)for(const e of o.mapImages)(0,d.Yg)(t,e.extent),(0,y.TC)(r,t)}return(0,y.fS)(r,y.G_)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.Z.WGS84}}}}]);
//# sourceMappingURL=13838.c020d716.chunk.js.map