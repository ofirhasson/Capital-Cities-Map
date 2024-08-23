"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[41779],{41779:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Je});var r=i(27366),o=i(19545),n=i(60762),s=i(36721),a=i(63780),l=i(80987),p=i(10064),u=i(54472),c=i(93002),d=i(32718),h=i(92026),y=i(97642),g=i(67426),w=i(66978),m=i(94172),v=i(35995),b=i(49861),f=(i(93169),i(38511)),_=i(69912),A=i(31201),S=i(92562),I=i(78952),x=i(69518),V=i(98995),j=i(73117),C=i(1674),R=i(11582),P=i(46784),O=(i(84936),i(27135)),N=i(43404);let Z=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.expression=null,this.returnType="string",this.title=null}};(0,r._)([(0,b.Cb)({type:String,json:{write:{isRequired:!0}}})],Z.prototype,"expression",void 0),(0,r._)([(0,b.Cb)({type:["number","string"],json:{write:!0}})],Z.prototype,"returnType",void 0),(0,r._)([(0,b.Cb)({type:String,json:{write:!0}})],Z.prototype,"title",void 0),Z=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.ExpressionInfo")],Z);const E=Z,U=new N.X({deviceLocation:"device-location"});let L=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.filterExpression=null,this.type="device-location"}};(0,r._)([(0,b.Cb)({type:E,json:{write:!0}})],L.prototype,"filterExpression",void 0),(0,r._)([(0,b.Cb)({type:U.apiValues,readOnly:!0,json:{type:U.jsonValues,read:U.read,write:U.write}})],L.prototype,"type",void 0),L=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],L);const F=L;var J=i(59486),k=i(77981);let T=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.geometry=null,this.where=null}};(0,r._)([(0,b.Cb)({types:J.qM,json:{read:k.im,write:!0}})],T.prototype,"geometry",void 0),(0,r._)([(0,b.Cb)({type:String,json:{write:!0}})],T.prototype,"where",void 0),T=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.FeatureFilter")],T);const q=T;let G=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.layerId=null,this.layerUrl=null,this.type="feature-layer"}};(0,r._)([(0,b.Cb)({type:String,json:{write:{overridePolicy(){return{isRequired:null===this.layerUrl}}}}})],G.prototype,"layerId",void 0),(0,r._)([(0,b.Cb)({type:String,json:{write:{overridePolicy(){return{isRequired:null===this.layerId}}}}})],G.prototype,"layerUrl",void 0),(0,r._)([(0,O.J)({featureLayer:"feature-layer"},{readOnly:!0})],G.prototype,"type",void 0),G=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.FeatureLayerSource")],G);const B=G;let M=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.fenceSource=null,this.filter=null,this.bufferDistance=null,this.type="features"}};(0,r._)([(0,b.Cb)({type:B,json:{write:{isRequired:!0}}})],M.prototype,"fenceSource",void 0),(0,r._)([(0,b.Cb)({type:q,json:{write:!0}})],M.prototype,"filter",void 0),(0,r._)([(0,b.Cb)({type:Number,json:{write:!0}})],M.prototype,"bufferDistance",void 0),(0,r._)([(0,O.J)({features:"features"},{readOnly:!0})],M.prototype,"type",void 0),M=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.FeatureFenceParameters")],M);const D=M;let W=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.type="fence"}};(0,r._)([(0,O.J)({fence:"fence"},{readOnly:!0})],W.prototype,"type",void 0),W=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.Geotrigger")],W);const z=W;let X=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.expressionInfo=null,this.requestedActions=null}};(0,r._)([(0,b.Cb)({type:E,json:{write:!0}})],X.prototype,"expressionInfo",void 0),(0,r._)([(0,b.Cb)({type:[String],json:{write:!0}})],X.prototype,"requestedActions",void 0),X=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.GeotriggerNotificationOptions")],X);const $=X,H=new N.X({enterContainsAndExitDoesNotContain:"enter-contains-and-exit-does-not-contain",enterContainsAndExitDoesNotIntersect:"enter-contains-and-exit-does-not-intersect",enterIntersectsAndExitDoesNotIntersect:"enter-intersects-and-exit-does-not-intersect"}),K=new N.X({useGeometry:"use-geometry",useGeometryWithAccuracy:"use-geometry-with-accuracy"}),Q=new N.X({enter:"enter",enterOrExit:"enter-or-exit",exit:"exit"});let Y=class extends z{constructor(e){super(e),this.enterExitRule="enter-contains-and-exit-does-not-intersect",this.feed=null,this.feedAccuracyMode="use-geometry",this.fenceNotificationRule=null,this.fenceParameters=null,this.name=null,this.notificationOptions=null,this.type="fence"}};(0,r._)([(0,O.J)(H)],Y.prototype,"enterExitRule",void 0),(0,r._)([(0,b.Cb)({type:F,json:{write:{isRequired:!0}}})],Y.prototype,"feed",void 0),(0,r._)([(0,O.J)(K)],Y.prototype,"feedAccuracyMode",void 0),(0,r._)([(0,b.Cb)({type:Q.apiValues,json:{type:Q.jsonValues,read:Q.read,write:{writer:Q.write,isRequired:!0}}})],Y.prototype,"fenceNotificationRule",void 0),(0,r._)([(0,b.Cb)({type:D,json:{write:{isRequired:!0}}})],Y.prototype,"fenceParameters",void 0),(0,r._)([(0,b.Cb)({type:String,json:{write:!0}})],Y.prototype,"name",void 0),(0,r._)([(0,b.Cb)({type:$,json:{write:!0}})],Y.prototype,"notificationOptions",void 0),(0,r._)([(0,O.J)({fence:"fence"},{readOnly:!0})],Y.prototype,"type",void 0),Y=(0,r._)([(0,_.j)("esri.webdoc.geotriggersInfo.FenceGeotrigger")],Y);const ee={base:z,key:"type",typeMap:{fence:Y}};let te=class extends((0,R.J)(P.wq)){constructor(e){super(e),this.geotriggers=null}};(0,r._)([(0,b.Cb)({types:[ee],json:{write:{isRequired:!0}}})],te.prototype,"geotriggers",void 0),te=(0,r._)([(0,_.j)("esri.webdoc.GeotriggersInfo")],te);const ie=te;var re,oe=i(84933),ne=i(84652);let se=re=class extends P.wq{constructor(e){super(e),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new re((0,ne.d9)({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};(0,r._)([(0,b.Cb)({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],se.prototype,"activeRange",void 0),(0,r._)([(0,b.Cb)({type:[Number],json:{write:!0}})],se.prototype,"currentRangeExtent",void 0),(0,r._)([(0,b.Cb)({type:[Number],json:{write:!0}})],se.prototype,"fullRangeExtent",void 0),se=re=(0,r._)([(0,_.j)("esri.webdoc.RangeInfo")],se);const ae=se;var le=i(15946),pe=i(41537),ue=i(81753),ce=i(7575),de=i(32698),he=i(45362),ye=i(81943);function ge(e,t){var r;return t.resourceInfo?we(t,t.resourceInfo,{origin:e.origin}):null!==(r=t.portalItem)&&void 0!==r&&r.id?async function(e,t,r){if(await r.load().catch((t=>{throw new p.Z("".concat(e.name,":load-portal-item"),"Failed to load portal item",{error:t})})),r.type!==e.itemType)throw new p.Z("".concat(e.name,":invalid-portal-item"),"Invalid portal item type '".concat(r.type,"', expected '").concat(e.itemType,"'"),{type:r.type});const o=await r.fetchData();t.resourceInfo=o;const n=(0,de.h)(r,e.origin);await function(e,t,i,r){const o=function(e,t){const i=e.parseVersion(t.version||"",e.name);return e.currentVersion.validate(i),t.version="".concat(i.major,".").concat(i.minor),t}(e,i);return t.read(o,r),we(t,o,r)}(e,t,o,n),t.resourceReferences={portalItem:r,paths:n.readResourcePaths};const a=await async function(e,t,r){var o;const n=null===e||void 0===e||null===(o=e.viewpoint)||void 0===o?void 0:o.targetGeometry;if(n)return null;const a=await async function(e,t,r){const o=null===e||void 0===e?void 0:e.spatialReference,n=null===t||void 0===t?void 0:t.extent;if(!o||!n)return null;if(o.isWGS84)return n.clone();if(o.isWebMercator)return(0,ue.$)(n);const{getGeometryServiceURL:s}=await i.e(67387).then(i.bind(i,67387));try{const e=await s(t),i=new ye.Z({geometries:[n],outSpatialReference:o});return(await(0,he.i)(e,i))[0]}catch(we){r.error("Error projecting item's extent:",we)}return null}(e,t,r);return a?new s.Z({targetGeometry:a}):null}(t.initialViewProperties,r,d.Z.getLogger(t));if(a){var l,u;const i=null!==(l=null===(u=t.initialViewProperties)||void 0===u?void 0:u.clone())&&void 0!==l?l:e.createInitialViewProperties();i.viewpoint=a,t.initialViewProperties=i}}(e,t,t.portalItem):Promise.resolve()}function we(e,t,r){const o={context:{...r,layerContainerType:"operational-layers"}};return e.portalItem&&(o.context.portal=e.portalItem.portal||ce.Z.getDefault()),Promise.all([i.e(43139),i.e(20519)]).then(i.bind(i,20519)).then((i=>{let{populateOperationalLayers:r}=i;const n=[],s=t.operationalLayers;(null===s||void 0===s?void 0:s.length)&&n.push(r(e.layers,s,o));const a={...o,context:{...o.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},l=t.tables;return null!==l&&void 0!==l&&l.length&&n.push(r(e.tables,l,a)),Promise.allSettled(n).then((()=>{}))}))}var me,ve=i(41190),be=i(48193);let fe=me=class extends P.wq{constructor(e){super(e),this.editing=null,this.offline=null,this.viewing=null}clone(){return new me((0,ne.d9)({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};(0,r._)([(0,b.Cb)({json:{write:!0}})],fe.prototype,"editing",void 0),(0,r._)([(0,b.Cb)({json:{write:!0}})],fe.prototype,"offline",void 0),(0,r._)([(0,b.Cb)({type:be.Z,json:{write:!0}})],fe.prototype,"viewing",void 0),fe=me=(0,r._)([(0,_.j)("esri.webmap.ApplicationProperties")],fe);const _e=fe;var Ae=i(2284),Se=i(7138),Ie=i(6701),xe=i(53042);let Ve=class extends((0,R.J)(Se.default)){constructor(e){super(e),this.background=null,this.rangeInfo=null,this.spatialReference=null,this.timeZone=Ie.By,this.viewpoint=null}};(0,r._)([(0,b.Cb)({type:xe.Z})],Ve.prototype,"background",void 0),(0,r._)([(0,b.Cb)({type:ae})],Ve.prototype,"rangeInfo",void 0),(0,r._)([(0,b.Cb)({type:I.Z})],Ve.prototype,"spatialReference",void 0),(0,r._)([(0,b.Cb)({nonNullable:!0})],Ve.prototype,"timeZone",void 0),(0,r._)([(0,b.Cb)({type:s.Z})],Ve.prototype,"viewpoint",void 0),Ve=(0,r._)([(0,_.j)("esri.webmap.InitialViewProperties")],Ve);const je=Ve;var Ce=i(49901);class Re extends Ce.G{constructor(e,t){super(e,t,"webmap")}}const Pe=new Re(2,31),Oe="web-map",Ne=l.Z.ofType(Ae.Z),Ze=l.Z.ofType(x.default),Ee=new Map([["image/jpeg","jpeg"],["image/jpg","jpg"],["image/png","png"],["image/gif","gif"]]),Ue=j.hz.JSAPI,Le={currentVersion:Pe,createInitialViewProperties:()=>new je,parseVersion:Re.parse,itemType:"Web Map",name:"webmap",origin:Oe};let Fe=class extends((0,y.R)(u.Z.LoadableMixin((0,g.v)(n.Z)))){constructor(e){super(e),this._isAuthoringAppSetByUser=!1,this._isAuthoringAppVersionSetByUser=!1,this._thumbnailFilename=null,this._updateFromPromise=null,this.resourceReferences={portalItem:null,paths:[]},this.applicationProperties=null,this.bookmarks=new Ne,this.floorInfo=null,this.geotriggersInfo=null,this.initialViewProperties=new je,this.ipsInfo=null,this.portalItem=null,this.presentation=null,this.sourceVersion=null,this.widgets=null,this.utilityNetworks=null,this._debouncedSaveOperations=(0,w.Ds)((async(e,t,r)=>{const{save:o,saveAs:n}=await i.e(9127).then(i.bind(i,9127));switch(e){case oe.x.SAVE:return o(Le,this,t);case oe.x.SAVE_AS:return n(Le,this,r,t)}})),this.authoringApp=this.authoringAppVersion=null,this._isAuthoringAppSetByUser=this._isAuthoringAppVersionSetByUser=!1}destroy(){if(this.portalItem=(0,h.SC)(this.portalItem),this.utilityNetworks){const e=this.utilityNetworks.removeAll();for(const t of e)t.destroy();this.utilityNetworks.destroy()}}initialize(){if(this.when().catch((e=>{d.Z.getLogger(this).error("#load()","Failed to load web map",e)})),this.resourceInfo){let t;try{t=this._validateJSON(this.resourceInfo)}catch(e){return void this.addResolvingPromise(Promise.reject(e))}this.read(t)}}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp=Ue}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=o.i8}readInitialViewProperties(e,t){var i;const r=new je;t.background&&(r.background=xe.Z.fromJSON(t.background));const o=null===(i=t.initialState)||void 0===i?void 0:i.viewpoint;return o&&(o.rotation&&Re.parse(t.version||"","webmap").lessThan(2,20)&&"ArcGIS Pro"===t.authoringApp&&(o.rotation*=-1),r.viewpoint=s.Z.fromJSON(o)),t.mapRangeInfo&&(r.rangeInfo=ae.fromJSON(t.mapRangeInfo)),t.spatialReference&&(r.spatialReference=I.Z.fromJSON(t.spatialReference)),t.timeZone&&(r.timeZone=t.timeZone),r}writeInitialViewProperties(e,t,i,r){var o;e&&(null!==(o=e.background)&&void 0!==o&&o.color&&(t.background=e.background.write({},r)),e.viewpoint&&(t.initialState={viewpoint:e.viewpoint.write({},r)}),e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(r)),e.spatialReference&&(t.spatialReference=e.spatialReference.write({},r)),t.timeZone=e.timeZone)}writeLayers(e,t,i,r){t[i]=this._writeLayers(e,r,"operational-layers")}readSourceVersion(e,t){const[i,r]=t.version.split(".");return new Re(parseInt(i,10),parseInt(r,10))}writeSourceVersion(e,t,i){t[i]="".concat(Pe.major,".").concat(Pe.minor)}writeTables(e,t,i,r){const o=this._writeLayers(e,r,"tables");o.length&&(t[i]=o)}get thumbnailUrl(){var e;return(null===(e=this.portalItem)||void 0===e?void 0:e.thumbnailUrl)||null}set thumbnailUrl(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}get updatingFromView(){return!!this._updateFromPromise}load(e){return this.addResolvingPromise(ge(Le,this)),Promise.resolve(this)}loadAll(){return(0,c.G)(this,(e=>{e(this.ground,this.basemap,this.layers,this.tables)}))}read(e,t){t={...t,origin:Oe};const i=this._getAuthoringPropsState();(0,S.$)(this,e,(t=>super.read(e,t)),t),this._restoreAuthoringPropsFromState(i)}write(e,t){if("loaded"!==this.loadStatus){const e=new p.Z("webmap:not-loaded","Web map must be loaded before it can be serialized");throw d.Z.getLogger(this).error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),e}return this._removeDanglingLayerRefs(),t={...t,origin:Oe,restrictedWebMapWriting:!0,webmap:this},super.write(e,t)}async save(e){return this._debouncedSaveOperations(oe.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(oe.x.SAVE_AS,t,e)}async updateFrom(e,t){const i=this._updateFromInternal(e,t);this._updateFromPromise=i,await i,i===this._updateFromPromise&&(this._updateFromPromise=null)}getLayerJSONFromResourceInfo(e){var t,i;const r=this.resourceInfo;return this._collectAllLayersJSON([...(null===r||void 0===r||null===(t=r.baseMap)||void 0===t?void 0:t.baseMapLayers)||[],...(null===r||void 0===r?void 0:r.operationalLayers)||[],...(null===(i=this.basemap)||void 0===i||null===(i=i.resourceInfo)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.baseMapLayers)||[]]).find((t=>t.id===e.id))}async updateItemThumbnail(){var e;this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await(null===(e=this.portalItem)||void 0===e?void 0:e.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename})),this._clearThumbnailOverride())}getThumbnailState(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:(0,v.ZN)(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}}restoreThumbnailFromState(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename}_collectAllLayersJSON(e){return e.reduce(((e,t)=>(e.push(t),"GroupLayer"===t.layerType&&(e=e.concat(this._collectAllLayersJSON(t.layers||[]))),e)),[])}_writeLayers(e,t,i){return t={...t,layerContainerType:i},e.map((e=>(0,ve.Nw)(e,"tables"===i?null:this.getLayerJSONFromResourceInfo(e),t))).filter(a.pC).toArray()}_validateJSON(e){const t=Re.parse(e.version||"","webmap");return Pe.validate(t),e.version="".concat(t.major,".").concat(t.minor),e}_removeDanglingLayerRefs(){var e,t;const i=this.applicationProperties,r=null===i||void 0===i||null===(e=i.viewing)||void 0===e?void 0:e.search,o=e=>this.allLayers.some((t=>t.id===e));if(null!==r&&void 0!==r&&r.layers&&(r.layers=r.layers.filter((e=>o(e.id)))),null!==r&&void 0!==r&&r.tables&&(r.tables=r.tables.filter((e=>this.tables.some((t=>t.id===e.id))))),i){var n;const e=null===(n=i.editing)||void 0===n?void 0:n.locationTracking;(null===e||void 0===e?void 0:e.info)&&!o(e.info.layerId)&&(i.editing=null)}const s=null===(t=this.presentation)||void 0===t?void 0:t.slides;s&&s.forEach((e=>{e.visibleLayers&&(e.visibleLayers=e.visibleLayers.filter((e=>o(e.id))))}))}async _updateFromInternal(e,t){var i;if(null!==(i=t)&&void 0!==i||(t={}),await(0,m.whenOnce)((()=>e.ready)),this._updateInitialViewProperties(e,t),e.map===this)for(const r of e.allLayerViews)"visible"in r&&"visible"in r.layer&&r._isOverridden("visible")&&(r.layer.visible=r.visible),"featureEffect"in r&&"featureEffect"in r.layer&&r._isOverridden("featureEffect")&&(r.layer.featureEffect=r.featureEffect);await this._updateThumbnailUrl(e,t)}_updateInitialViewProperties(e,t){var i,r;if(t.backgroundExcluded||(this.initialViewProperties.background=null===(i=e.background)||void 0===i?void 0:i.clone()),this.initialViewProperties.spatialReference=null===(r=e.spatialReference)||void 0===r?void 0:r.clone(),this.initialViewProperties.timeZone=e.timeZone,t.viewpointExcluded||(this.initialViewProperties.viewpoint=new s.Z({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const o of e.persistableViewModels)o.updateWebDocument(this)}_getViewExtent(e){const t=e.center.clone().normalize(),i=e.extent.clone(),r=i.width/2;return i.xmin=t.x-r,i.xmax=t.x+r,i}async _updateThumbnailUrl(e,t){if(t.thumbnailExcluded)return;const i=(0,pe.w)(e,t.thumbnailSize),r=await e.takeScreenshot({format:"png",width:i.width,height:i.height});this._setAutoGeneratedThumbnail(r.dataUrl)}_setAutoGeneratedThumbnail(e){this.thumbnailUrl=e,this._thumbnailFilename=null}_clearThumbnailOverride(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null}_generateCustomThumbnailFilename(e){if((0,v.HK)(e)){const t=(0,v.sJ)(e),i=null===t||void 0===t?void 0:t.mediaType,r=i&&Ee.get(i.toLowerCase())||null,o="thumbnail".concat(Date.now());return r?"".concat(o,".").concat(r):o}return null}_getAuthoringPropsState(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}}_restoreAuthoringPropsFromState(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1}static fromJSON(e){const t=e;if(!t)throw new p.Z("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:t})}};Fe.VERSION=Pe,(0,r._)([(0,b.Cb)()],Fe.prototype,"_updateFromPromise",void 0),(0,r._)([(0,b.Cb)({type:_e,json:{write:!0}})],Fe.prototype,"applicationProperties",void 0),(0,r._)([(0,b.Cb)({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],Fe.prototype,"authoringApp",null),(0,r._)([(0,A.c)("authoringApp")],Fe.prototype,"writeAuthoringApp",null),(0,r._)([(0,b.Cb)({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],Fe.prototype,"authoringAppVersion",null),(0,r._)([(0,A.c)("authoringAppVersion")],Fe.prototype,"writeAuthoringAppVersion",null),(0,r._)([(0,b.Cb)({type:Ne,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],Fe.prototype,"bookmarks",void 0),(0,r._)([(0,b.Cb)({type:C.Z,json:{name:"mapFloorInfo",write:!0}})],Fe.prototype,"floorInfo",void 0),(0,r._)([(0,b.Cb)({type:ie,json:{write:!0}})],Fe.prototype,"geotriggersInfo",void 0),(0,r._)([(0,b.Cb)({type:je,nonNullable:!0,json:{read:{source:["background","initialState.viewpoint","mapRangeInfo","spatialReference","timeZone"]},write:{ignoreOrigin:!0,target:{background:{type:xe.Z},"initialState.viewpoint":{type:s.Z},mapRangeInfo:{type:ae},spatialReference:{type:I.Z},"timeZone:":{type:String}}}}})],Fe.prototype,"initialViewProperties",void 0),(0,r._)([(0,f.r)("initialViewProperties")],Fe.prototype,"readInitialViewProperties",null),(0,r._)([(0,A.c)("initialViewProperties")],Fe.prototype,"writeInitialViewProperties",null),(0,r._)([(0,b.Cb)({json:{write:!0,name:"mapIPSInfo"}})],Fe.prototype,"ipsInfo",void 0),(0,r._)([(0,b.Cb)({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],Fe.prototype,"layers",void 0),(0,r._)([(0,A.c)("layers")],Fe.prototype,"writeLayers",null),(0,r._)([(0,b.Cb)({type:V.default})],Fe.prototype,"portalItem",void 0),(0,r._)([(0,b.Cb)({json:{write:!0}})],Fe.prototype,"presentation",void 0),(0,r._)([(0,b.Cb)()],Fe.prototype,"resourceInfo",void 0),(0,r._)([(0,b.Cb)({readOnly:!0,type:Re,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],Fe.prototype,"sourceVersion",void 0),(0,r._)([(0,f.r)("sourceVersion")],Fe.prototype,"readSourceVersion",null),(0,r._)([(0,A.c)("sourceVersion")],Fe.prototype,"writeSourceVersion",null),(0,r._)([(0,b.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],Fe.prototype,"tables",void 0),(0,r._)([(0,A.c)("tables")],Fe.prototype,"writeTables",null),(0,r._)([(0,b.Cb)()],Fe.prototype,"thumbnailUrl",null),(0,r._)([(0,b.Cb)()],Fe.prototype,"updatingFromView",null),(0,r._)([(0,b.Cb)({type:le.Z,json:{write:!0}})],Fe.prototype,"widgets",void 0),(0,r._)([(0,b.Cb)({type:Ze,json:{read:!0,write:!0}})],Fe.prototype,"utilityNetworks",void 0),Fe=(0,r._)([(0,_.j)("esri.WebMap")],Fe);const Je=Fe},2284:(e,t,i)=>{i.d(t,{Z:()=>f});var r,o=i(27366),n=i(36721),s=i(10064),a=i(79056),l=i(46784),p=i(84652),u=i(32718),c=i(49861),d=i(89125),h=i(38511),y=i(69912),g=i(31201),w=i(25243),m=i(26838),v=i(39328);let b=r=class extends((0,a.IG)(l.wq)){constructor(e){super(e),this.name=null,this.thumbnail=new m.A,this.timeExtent=null}castThumbnail(e){return"string"==typeof e?new m.A({url:e}):(0,w.se)(m.A,e)}set viewpoint(e){const{targetGeometry:t,scale:i}=e;null!=t&&"point"===t.type&&null==i&&u.Z.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",e),this._set("viewpoint",e)}readViewpoint(e,t){const{extent:i,viewpoint:r}=t;return n.Z.fromJSON(r||{targetGeometry:i})}writeViewpoint(e,t,i,r){if(!e)return;const{targetGeometry:o}=e;if(null==o||"extent"===o.type)null!=o&&(t.extent=o.toJSON()),t[i]=e.toJSON();else{const e="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";null!==r&&void 0!==r&&r.messages?r.messages.push(new s.Z("property:unsupported",e)):u.Z.getLogger(this).error(e)}}clone(){return new r((0,p.d9)({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};(0,o._)([(0,c.Cb)({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"name",void 0),(0,o._)([(0,c.Cb)({type:m.A,json:{write:{overridePolicy:e=>({enabled:!(!e||!e.url)})}}})],b.prototype,"thumbnail",void 0),(0,o._)([(0,d.p)("thumbnail")],b.prototype,"castThumbnail",null),(0,o._)([(0,c.Cb)(v.v)],b.prototype,"timeExtent",void 0),(0,o._)([(0,c.Cb)({type:n.Z,nonNullable:!0,json:{write:!0}})],b.prototype,"viewpoint",null),(0,o._)([(0,h.r)("viewpoint",["extent","viewpoint"])],b.prototype,"readViewpoint",null),(0,o._)([(0,g.c)("viewpoint")],b.prototype,"writeViewpoint",null),b=r=(0,o._)([(0,y.j)("esri.webmap.Bookmark")],b);const f=b}}]);
//# sourceMappingURL=41779.cb6322a6.chunk.js.map