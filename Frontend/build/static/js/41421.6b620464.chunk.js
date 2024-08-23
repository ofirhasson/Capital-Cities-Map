"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[41421],{41421:(e,t,i)=>{i.r(t),i.d(t,{default:()=>oe});var s=i(27366),r=i(66978),n=i(49861),a=(i(93169),i(32718)),o=(i(84936),i(69912)),l=i(33565),u=i(44927),c=i(94172),h=i(68860),p=i(79803),m=i(77671),d=(i(59486),i(52639)),v=(i(59166),i(51508),i(86950)),g=i(92026),_=i(5163),y=i(46634),w=i(2170),f=i(15559),b=i(93655),C=i(50951),L=i(85577),M=i(9843),S=i(14813),A=i(74229),G=i(2346),D=i(45900),O=i(84954),j=i(17877),k=i(34019),T=i(80151),x=i(44270),q=i(64674),Z=i(41201),R=i(36257),U=i(848),H=i(61459),z=i(14404),V=i(58009),W=i(73268),E=i(16072),I=i(29909),N=i(78952),J=i(80885);const B=1e5;let Y=class extends D.m{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new b.default({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new b.default({internal:!0,listMode:"hide",visible:!1}),this._snappingLayer=new b.default({internal:!0,listMode:"hide",visible:!1}),this._updatingHandles=new y.R,this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){(0,Z.ME)("esri/core/t9n/Units").then((e=>{this.messages=e}));const e=this.view;this._draw=new M.Z({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),e.focus(),this._snappingManagerResult=(0,x.u)(e),this.addHandles([(0,R.qe)((async()=>{this.messages=await(0,Z.ME)("esri/core/t9n/Units")})),(0,c.watch)((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updateGraphics()}),c.initial),(0,c.watch)((()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor]),(()=>{if(!this._vertices.length)return;const e=this._vertices.map((e=>{let{coord:t}=e;return t}));for(const{handle:t}of this._vertices)t.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(e)})),(0,c.watch)((()=>this.snappingOptions.featureSources),(e=>{for(const t of e)t.layer!==this._measurementLayer&&t.layer!==this._manipulatorLayer||(t.enabled=!1)}),c.initial),this._snappingManagerResult]),(0,q.Ob)(this)}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=(0,g.SC)(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=(0,g.SC)(this._measurementLayer),this._manipulatorLayer=(0,g.SC)(this._manipulatorLayer),this._snappingLayer=(0,g.SC)(this._snappingLayer),this._updatingHandles=(0,g.SC)(this._updatingHandles),this._resetVertices()}get _snappingManager(){return this._snappingManagerResult.snappingManager}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}get snappingOptions(){return this._snappingManager.options}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0,this._snappingLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1,this._snappingLayer.visible=!1}reset(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1}_getSnappingContext(e){return new k.N({elevationInfo:{mode:"on-the-ground",offset:0},pointer:e,editGeometryOperations:new j.c(new O.XE("point",(0,S.Y6)(!1,!1,this.view.spatialReference)),C.JY.Local),visualizer:new L.r(this._snappingLayer)})}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._snappingManager,t=this._draw.create("polyline",{mode:"click",snappingManager:e});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),t.on("draw-complete",(()=>this._stopSketch()))}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const t=this.view.spatialReference;if(t&&(!K(t)||(0,p.isLoaded)())){for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let i=this._vertices.length;i<e.length;i++){const[s,r]=e[i],n=new U.Z({x:s,y:r,spatialReference:t}),a=X(n,this.view,this._manipulatorLayer);this.manipulators.add(a);const o=j.c.fromGeometry(n,C.JY.Local);o.on("vertex-update",(e=>{const t=e.vertices.at(0);t&&(this._vertices[i].coord=[t.pos[0],t.pos[1]],this._updateGraphics())}));const l=(0,A.Xd)(a,((e,t,i,s)=>{const r=this._getSnappingContext(s),n=this._snappingManager,a=this._updatingHandles,{snappingStep:l}=(0,T.W)({snappingContext:r,snappingManager:n,updatingHandles:a});t.next((0,A.Cf)(this.view)).next((t=>{if("start"===t.action){const i=new U.Z(t.mapStart);e.graphic.geometry=i,o.trySetGeometry(i)}return t})).next(...l).next((0,A.$Q)({operations:o})).next((()=>{e.graphic.geometry=o.data.geometry}))}));this._vertices.push({manipulator:a,coord:[s,r],handle:l})}if(this._vertices.length){const i=this._vertices.length-1,s=this._vertices[i],[r,n]=e[i];s.coord[0]===r&&s.coord[1]===n||(s.coord=[r,n],s.manipulator.graphic.geometry=new U.Z({x:r,y:n,spatialReference:t}));const a=this._drawActive?this._vertices[i].manipulator:null;this.manipulators.forEach((e=>{let{manipulator:t}=e;t.interactive=null==a||t!==a}))}this._updateGraphics()}}_updateGraphics(){var e;if(this._vertices.length<2)return void this._measurementLayer.removeAll();const t=function(e,t,i){if(2===e.length){const s=new I.Z({paths:e,spatialReference:t});let r;if(null!==t&&void 0!==t&&t.isGeographic)if((0,f.Gb)(t))r=(0,f.j2)(s,B);else{const e=(0,p.project)(s,N.Z.WGS84),i=(0,f.j2)(e,B);r=(0,p.project)(i,t)}else if(null!==t&&void 0!==t&&t.isWebMercator)r=(0,w.geodesicDensify)(s,B,"meters");else if((0,w.planarLength)(s,"meters")>=Q(i)){const e=(0,p.project)(s,N.Z.WGS84),i=(0,f.j2)(e,B);r=(0,p.project)(i,t)}else r=s;return{measurement:null,fillGeometry:null,outlineGeometry:r}}e.push(e[0]);const s=new I.Z({paths:[e],spatialReference:t}),r=new J.Z({rings:[e],spatialReference:t});let n,a,o=null,l=null;if(null!==t&&void 0!==t&&t.isGeographic)if((0,f.Gb)(t)){if(o=(0,f.j2)(s,B),l=(0,f.j2)(r,B),l=(0,w.simplify)(l),!l)return null;n=(0,f.Jf)([s],"meters")[0],a=(0,f.p8)([l],"square-meters")[0]}else{const e=N.Z.WGS84,i=(0,p.project)(s,e),u=(0,p.project)(r,e);if(o=(0,f.j2)(i,B),l=(0,f.j2)(u,B),l=(0,w.simplify)(l),!l)return null;n=(0,f.Jf)([i],"meters")[0],a=(0,f.p8)([l],"square-meters")[0],o=(0,p.project)(o,t),l=(0,p.project)(l,t)}else if(null!==t&&void 0!==t&&t.isWebMercator){if(o=(0,w.geodesicDensify)(s,B,"meters"),l=(0,w.geodesicDensify)(r,B,"meters"),l=(0,w.simplify)(l),!l)return null;n=(0,w.geodesicLength)(s,"meters"),a=(0,w.geodesicArea)(l,"square-meters")}else{const e=(0,w.planarLength)(s,"meters");if(e>=Q(i)){const e=N.Z.WGS84,i=(0,p.project)(s,e),u=(0,p.project)(r,e);if(o=(0,f.j2)(i,B),l=(0,f.j2)(u,B),l=(0,w.simplify)(l),!l)return null;n=(0,f.Jf)([i],"meters")[0],a=(0,f.p8)([l],"square-meters")[0],o=(0,p.project)(o,t),l=(0,p.project)(l,t)}else{if(o=s,l=(0,w.simplify)(r),!l)return null;n=e,a=(0,w.planarArea)(l,"square-meters")}}return{measurement:{geometry:l,area:a,perimeter:n},fillGeometry:l,outlineGeometry:o}}(this._vertices.map((e=>{let{coord:t}=e;return t})),this.view.spatialReference,this.geodesicDistanceThreshold);if(!t)return;const{measurement:i,fillGeometry:s,outlineGeometry:r}=t;this._set("measurement",i);const n=i?function(e,t,i){if(!t||!e)return null;const s={area:null,perimeter:null},{area:r,perimeter:n}=t;switch(i){case"metric":s.area=(0,_.ld)(e,r,"square-meters");break;case"imperial":s.area=(0,_.yc)(e,r,"square-meters");break;default:{const t=(0,h.En)(r,"square-meters",i);s.area=(0,_.VG)(e,t,i);break}}const a=function(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(i);if(a)switch(a){case"metric":s.perimeter=(0,_.Rd)(e,n,"meters");break;case"imperial":s.perimeter=(0,_.Ud)(e,n,"meters");break;default:{const t=(0,h.En)(n,"meters",a);s.perimeter=(0,_.VG)(e,t,a);break}}else s.perimeter="";return s}(this.messages,i,this.unit):null;if(this._set("measurementLabel",n),!s&&!r)return;let a,o,l;const{graphics:u}=this._measurementLayer,c=3===u.length,{effectiveTheme:m}=this.view;c?(a=u.at(0),o=u.at(1),l=u.at(2)):(a=new d.Z({symbol:new H.default({color:(0,v.G)(m.accentColor,.3),outline:null})}),o=new d.Z({symbol:new z.default({color:m.accentColor,width:2})}),l=new d.Z({symbol:new V.Z({color:m.textColor,font:new W.Z({size:14,family:"sans-serif"}),haloColor:(0,v.G)((0,v.mj)(m.textColor,v.K6.Low),.5),haloSize:2})}),u.removeAll(),u.addMany([a,o,l])),a.geometry=s,o.geometry=r,l.geometry=null===s||void 0===s?void 0:s.centroid,l.symbol.text=null!==(e=null===n||void 0===n?void 0:n.area)&&void 0!==e?e:""}};function X(e,t,i){const s={style:"circle",color:(0,v.G)(t.effectiveTheme.accentColor,.5),outline:{type:"simple-line",width:0}},r=new E.default({...s,size:8}),n=new E.default({...s,size:12}),a=new d.Z({geometry:e,symbol:r});return new G.L({view:t,layer:i,graphic:a,focusedSymbol:n})}function K(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:s}=e;return t&&!s&&!(0,f.Gb)(e)||!t&&!i}function Q(e){return null!==e&&void 0!==e?e:1/0}(0,s._)([(0,n.Cb)()],Y.prototype,"_drawActive",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],Y.prototype,"cursor",null),(0,s._)([(0,n.Cb)({value:!0})],Y.prototype,"editable",null),(0,s._)([(0,n.Cb)({type:Number})],Y.prototype,"geodesicDistanceThreshold",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],Y.prototype,"measurement",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],Y.prototype,"measurementLabel",void 0),(0,s._)([(0,n.Cb)()],Y.prototype,"messages",void 0),(0,s._)([(0,n.Cb)()],Y.prototype,"unit",void 0),(0,s._)([(0,n.Cb)()],Y.prototype,"updating",null),(0,s._)([(0,n.Cb)({constructOnly:!0})],Y.prototype,"view",void 0),Y=(0,s._)([(0,o.j)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],Y);var $=i(32845);let F=class extends $.V{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([(0,c.watch)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.spatialReference}),(()=>this.clear())),(0,c.watch)((()=>this.unit),(e=>{null!=this.tool&&(this.tool.unit=e)}),c.initial),(0,c.watch)((()=>this.geodesicDistanceThreshold),(e=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=e)}),c.initial)])}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(e){(0,u.Mr)(a.Z.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",e)}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){var e;return this.disabled||null==this.view||null==this.view.spatialReference?"disabled":null!==(e=this.tool)&&void 0!==e&&e.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return h.fN}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;null!=e&&(await(0,c.whenOnce)((()=>e.ready)),K(e.spatialReference)&&await(0,p.load)()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new Y({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:i}=this;return null!=e&&t.includes(e)?e:t.includes(i)?i:t.length>0?t[0]:i}_validateUnits(e){if(null==e)return[];const t=e.filter((e=>h.fN.includes(e)));return 0===t.length?h.fN.slice():t}};(0,s._)([(0,n.Cb)(m.Y)],F.prototype,"defaultUnit",void 0),(0,s._)([(0,n.Cb)()],F.prototype,"geodesicDistanceThreshold",null),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"measurement",null),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"measurementLabel",null),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"state",null),(0,s._)([(0,n.Cb)({type:String})],F.prototype,"unit",null),(0,s._)([(0,n.Cb)({type:[String]})],F.prototype,"unitOptions",null),F=(0,s._)([(0,o.j)("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],F);const P=F;var ee=i(7021),te=i(15142),ie=(i(80975),i(80532)),se=i(67005);const re="esri-area-measurement-2d",ne={base:re,newMeasurementButton:"".concat(re,"__clear-button")};let ae=class extends l.Z{constructor(e,t){super(e,t),this.messages=null,this.messagesUnits=null,this.messagesCommon=null,this.viewModel=new P}get active(){return this.viewModel.active}get icon(){return"measure-area"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,messagesUnits:i,unit:s,unitOptions:n,viewModel:a,visible:o}=this,{active:l,measurementLabel:u,state:c,supported:h}=a;return(0,se.u)("div",{"aria-label":e.widgetLabel,class:this.classes(ne.base,ee.z.widget,ee.z.panel),key:this,role:"presentation"},o?(0,se.u)(te.s,{active:l,measurementItems:[{key:"area",title:null===i||void 0===i?void 0:i.measures.area,value:null===u||void 0===u?void 0:u.area},{key:"perimeter",title:e.perimeter,value:null===u||void 0===u?void 0:u.perimeter}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:ne.newMeasurementButton,state:c,supported:h,unit:s,unitOptions:n,onNewMeasurementClick:()=>{(0,r.R8)(a.start())},onUnitChange:e=>{this.unit=e}}):null)}};(0,s._)([(0,n.Cb)({readOnly:!0})],ae.prototype,"active",null),(0,s._)([(0,n.Cb)()],ae.prototype,"icon",null),(0,s._)([(0,n.Cb)()],ae.prototype,"label",null),(0,s._)([(0,n.Cb)(),(0,ie.H)("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],ae.prototype,"messages",void 0),(0,s._)([(0,n.Cb)(),(0,ie.H)("esri/core/t9n/Units")],ae.prototype,"messagesUnits",void 0),(0,s._)([(0,n.Cb)(),(0,ie.H)("esri/t9n/common")],ae.prototype,"messagesCommon",void 0),(0,s._)([(0,n.Cb)()],ae.prototype,"uiStrings",void 0),(0,s._)([(0,n.Cb)()],ae.prototype,"unit",null),(0,s._)([(0,n.Cb)()],ae.prototype,"unitOptions",null),(0,s._)([(0,n.Cb)()],ae.prototype,"view",null),(0,s._)([(0,n.Cb)({type:P})],ae.prototype,"viewModel",void 0),(0,s._)([(0,n.Cb)({type:Boolean})],ae.prototype,"visible",null),ae=(0,s._)([(0,o.j)("esri.widgets.AreaMeasurement2D")],ae);const oe=ae}}]);
//# sourceMappingURL=41421.6b620464.chunk.js.map