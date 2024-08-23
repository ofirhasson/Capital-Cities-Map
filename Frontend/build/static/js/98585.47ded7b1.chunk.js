"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[98585],{38566:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var i=r(27366),s=(r(59486),r(44055)),o=(r(94931),r(15126),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(97642),a=r(18202),l=r(35995),p=r(49861),u=r(25243),d=(r(84936),r(93169)),c=r(69912),h=r(31201),y=r(27823),m=r(30651),g=r(10064),f=r(54472),v=r(32718),w=r(66978),b=r(70431),C=r(63543),F=r(45927),_=r(49818),S=r(6701),O=r(53866);let x=class extends f.Z{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=(0,C.MS)(!1,!1),this.type="wfs",this.refresh=(0,w.Ds)((async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await this.queryFeaturesJSON(e,t);return _.Z.fromJSON(r)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return{count:r.count,extent:O.Z.fromJSON(r.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._workerHandler.querySnapping(e,t)}async _createLoadOptions(e){var t,r,i;const{url:s,customParameters:o,name:n,namespaceUri:a,fields:l,geometryType:p,maxRecordCount:u,maxPageCount:d,maxTotalRecordCount:c,swapXY:h}=this.layer,m="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!s)throw new g.Z("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,F.FU)(s,{customParameters:o,...e}));const f=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),v=f?await(0,F.be)(this.wfsCapabilities,n,a,{spatialReference:m,customParameters:o,signal:null===e||void 0===e?void 0:e.signal}):{...(0,F.eB)(null!==l&&void 0!==l?l:[]),geometryType:p,name:n,namespaceUri:a,spatialReference:m,swapXY:h},w=(0,F.ft)(this.wfsCapabilities.readFeatureTypes(),v.name,v.namespaceUri),b=y.M.toJSON(v.geometryType),{operations:C}=this.wfsCapabilities,_=C.GetFeature.url,S=C.GetFeature.outputFormat;return{customParameters:o,featureType:w,fields:null!==(t=null===(r=v.fields)||void 0===r?void 0:r.map((e=>e.toJSON())))&&void 0!==t?t:[],geometryField:v.geometryField,geometryType:b,getFeatureUrl:_,getFeatureOutputFormat:S,maxRecordCount:u,maxPageCount:d,maxTotalRecordCount:c,objectIdField:v.objectIdField,spatialReference:null===(i=v.spatialReference)||void 0===i?void 0:i.toJSON(),swapXY:!!v.swapXY}}async _startWorker(e){const[t,r]=await(0,w.as)([this._createLoadOptions(e),(0,b.bA)("WFSSourceWorker",{...e,strategy:(0,d.Z)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),i=t.error||r.error||null,s=r.value||null;if(i)throw s&&s.close(),i;const o=t.value;this._connection=r.value,this._workerHandler=this._connection.createInvokeProxy();const n=await this._workerHandler.load(o,e);for(const l of n.warnings){var a;v.Z.getLogger(this.layer).warn("#load()","".concat(l.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(a=this.layer.id)&&void 0!==a?a:"no id","')"),{warning:l})}this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:S.pt},extent:n.extent,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,C.bU)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:o.maxRecordCount,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,i._)([(0,p.Cb)()],x.prototype,"capabilities",void 0),(0,i._)([(0,p.Cb)({constructOnly:!0})],x.prototype,"layer",void 0),(0,i._)([(0,p.Cb)()],x.prototype,"sourceJSON",void 0),(0,i._)([(0,p.Cb)()],x.prototype,"type",void 0),(0,i._)([(0,p.Cb)()],x.prototype,"wfsCapabilities",void 0),x=(0,i._)([(0,c.j)("esri.layers.graphics.sources.WFSSource")],x);var R,I=r(6693),T=r(46671),P=r(7632),j=r(49661),q=r(6061),N=r(9855),U=r(29598),Z=r(71684),E=r(56811),k=r(99063),A=r(70361),D=r(83040),J=r(25610),Q=r(37270),Y=r(77748),H=r(85116),M=r(21149),X=r(81085),W=r(78952);const z=(0,J.v)();let B=R=class extends((0,N.c)((0,T.N)((0,j.M)((0,P.b)((0,I.h7)((0,k.n)((0,Z.Q)((0,E.M)((0,q.q)((0,U.I)((0,n.R)(m.Z)))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d}=e;return new R({customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=W.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,Q.YN)(this.renderer,this.fieldsIndex),(0,Q.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const i=e.filter((e=>e.name!==F.u2));this.geometryField&&i.unshift(new D.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,a.RB)(r,i.map((e=>e.toJSON())),t)}get parsedUrl(){return(0,l.mN)(this.url)}set renderer(e){(0,Q.YN)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return null===(e=this.source)||void 0===e?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return(0,X.eZ)(this,e)}createQuery(){const e=new M.Z({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null===(r=this.getField(e))||void 0===r?void 0:r.domain}getField(e){var t;return null===(t=this.fieldsIndex)||void 0===t?void 0:t.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(M.Z.from(e)||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(M.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(M.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(M.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh();return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,i._)([(0,p.Cb)({readOnly:!0})],B.prototype,"capabilities",null),(0,i._)([(0,p.Cb)({type:String})],B.prototype,"copyright",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],B.prototype,"createQueryVersion",null),(0,i._)([(0,p.Cb)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],B.prototype,"customParameters",void 0),(0,i._)([(0,p.Cb)((0,S.mi)("dateFieldsTimeReference"))],B.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,i._)([(0,p.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,i._)([(0,p.Cb)({type:String})],B.prototype,"displayField",void 0),(0,i._)([(0,p.Cb)(A.PV)],B.prototype,"elevationInfo",void 0),(0,i._)([(0,p.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"featureUrl",void 0),(0,i._)([(0,p.Cb)({type:[D.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),(0,i._)([(0,h.c)("fields")],B.prototype,"writeFields",null),(0,i._)([(0,p.Cb)(z.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,i._)([(0,p.Cb)({type:O.Z,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),(0,i._)([(0,p.Cb)()],B.prototype,"geometryField",void 0),(0,i._)([(0,p.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:y.M.read},write:{target:"layerDefinition.geometryType",writer:y.M.write,ignoreOrigin:!0},origins:{service:{read:y.M.read}}}})],B.prototype,"geometryType",void 0),(0,i._)([(0,p.Cb)({type:String})],B.prototype,"id",void 0),(0,i._)([(0,p.Cb)(A.iR)],B.prototype,"labelsVisible",void 0),(0,i._)([(0,p.Cb)({type:[Y.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H.r},write:!0}})],B.prototype,"labelingInfo",void 0),(0,i._)([(0,p.Cb)(A.rn)],B.prototype,"legendEnabled",void 0),(0,i._)([(0,p.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,i._)([(0,p.Cb)({type:String})],B.prototype,"objectIdField",void 0),(0,i._)([(0,p.Cb)({type:["WFS"]})],B.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.Cb)({type:u.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"maxRecordCount",void 0),(0,i._)([(0,p.Cb)({type:u.z8})],B.prototype,"maxPageCount",void 0),(0,i._)([(0,p.Cb)({type:u.z8})],B.prototype,"maxTotalRecordCount",void 0),(0,i._)([(0,p.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],B.prototype,"mode",void 0),(0,i._)([(0,p.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"name",void 0),(0,i._)([(0,p.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"namespaceUri",void 0),(0,i._)([(0,p.Cb)(A.bT)],B.prototype,"opacity",void 0),(0,i._)([(0,p.Cb)(z.outFields)],B.prototype,"outFields",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,i._)([(0,p.Cb)(A.C_)],B.prototype,"popupEnabled",void 0),(0,i._)([(0,p.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,i._)([(0,p.Cb)({types:o.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],B.prototype,"renderer",null),(0,i._)([(0,p.Cb)(A.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],B.prototype,"source",void 0),(0,i._)([(0,p.Cb)({type:W.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],B.prototype,"spatialReference",void 0),(0,i._)([(0,p.Cb)({readOnly:!0,type:[u.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"spatialReferences",void 0),(0,i._)([(0,p.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"swapXY",void 0),(0,i._)([(0,p.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],B.prototype,"title",void 0),(0,i._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),(0,i._)([(0,p.Cb)(A.HQ)],B.prototype,"url",void 0),(0,i._)([(0,p.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],B.prototype,"version",void 0),(0,i._)([(0,p.Cb)()],B.prototype,"wfsCapabilities",null),B=R=(0,i._)([(0,c.j)("esri.layers.WFSLayer")],B);const G=B},3182:(e,t,r)=>{r.d(t,{S6:()=>o,u_:()=>s});var i=r(80457);class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(e,t){const r=e.geometry?i.Z.fromJSON(e.geometry):null,o=e.centroid?i.Z.fromJSON(e.centroid):null,n=e.attributes[t];return new s(r,e.attributes,o,n)}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){var e,t;const r=null===(e=this.geometry)||void 0===e?void 0:e.clone(),i=new s(r,{...this.attributes},null===(t=this.centroid)||void 0===t?void 0:t.clone(),this.objectId);return i.displayId=this.displayId,i.geohashX=this.geohashX,i.geohashY=this.geohashY,i}}function o(e){var t;return!(null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)}},80457:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=r}static fromJSON(e){return new i(e.lengths,e.coords,e.hasIndeterminateRingOrder)}static fromRect(e){const[t,r,s,o]=e,n=s-t,a=o-r;return new i([5],[t,r,n,0,0,a,-n,0,0,-a])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const i=this.lengths[r];for(let r=0;r<i;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=i}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let i=0;for(const s of r){for(let e=1;e<s;e++)t[2*(i+e)]+=t[2*(i+e)-2],t[2*(i+e)+1]+=t[2*(i+e)-1];i+=s}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new i(this.lengths,e,this.hasIndeterminateRingOrder)):new i(Array.from(this.lengths),Array.from(r),this.hasIndeterminateRingOrder)}}},60480:(e,t,r)=>{r.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>h,bU:()=>a});var i=r(93169),s=r(84652),o=r(60480),n=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function u(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r="this".concat(d(t)," = null;");for(const t in e)r+="this".concat(d(t)," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new i}catch(r){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?".".concat(e):'["'.concat(e,'"]')}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=98585.47ded7b1.chunk.js.map