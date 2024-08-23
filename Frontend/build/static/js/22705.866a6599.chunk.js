"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[22705],{22705:(e,t,i)=>{i.d(t,{default:()=>w});i(59486);var a=i(52639),o=i(63780),r=i(66978),n=i(25243),l=i(63899),s=i(79803),c=i(27474),u=i(64248),d=i(8835),v=i(28429),p=i(848);class w{constructor(e){this.viewModel=e,this.createFootprints=async e=>{const{coverageFrustums:t,currentBestFeature:i,isAdditionalCoverageVisible:n,view:d}=this.viewModel,p=t.filter(o.pC);for(const o of p){let t=o.clone();if(!d.spatialReference.equals(t.spatialReference)){const{components:i,spatialReference:a,origin:o,vertexAttributes:n,vertexSpace:v}=t;if("local"===v.type){const i=await(0,s.projectWithZConversion)(o,d.spatialReference,e);(0,r.k_)(e),t.centerAt(i)}else{const o=n.position,s=Float64Array.from(await(0,u.DC)([...o],a.clone(),d.spatialReference.clone(),e));(0,r.k_)(e),t=new l.Z({vertexAttributes:new c.Q({position:s}),components:i,spatialReference:d.spatialReference.clone()})}}o.imageID===i.attributes.objectId?this.viewModel.bestFeatureFootprint=new a.Z({attributes:{imageID:o.imageID},geometry:t,symbol:v.RS.clone(),visible:!1}):this.viewModel.additionalFootprints.push(new a.Z({attributes:{imageID:o.imageID},geometry:t,symbol:v.TU.clone(),visible:n}))}},this.updateFootprint=async(e,t)=>{const{currentBestFeature:i,imagePointsInView:c,activeViewer:w,footprintExtent:m,view:f}=this.viewModel,h=(0,n.se)(l.Z,this.viewModel.getCurrentBestFeaturePolygon().geometry),g=null===w||void 0===w?void 0:w.imageSize;if(!(i&&h&&c&&g&&m))return;const{cameraHeight:y,location:b,cameraPitch:R,horizontalFieldOfView:F,verticalFieldOfView:C,cameraRoll:M,imageRotation:V}=i.attributes,k=b.toArray(),{vertexAttributes:{position:A},spatialReference:I}=h,P=await async function(e,t,i,a){return Float64Array.from((await Promise.all(e.reduce(((e,t,i)=>{var a;const o=Math.floor(i/3);return e[o]=null!==(a=e[o])&&void 0!==a?a:[],e[o].push(t),e}),new Array).map((async e=>(await(0,s.projectWithZConversion)(new p.Z(e,t),i,a)).toArray())))).flat())}(A,I,b.spatialReference),Z=await(0,d.y)(e,{feature:i,imageProperties:{width:g[0],height:g[1]},options:t,footprintExtent:m});(0,r.k_)(t);let z=Z.filter(o.pC);if(!z.length)return;z[0].spatialReference.equals(b.spatialReference)||(z=await Promise.all(z.map((async e=>{const i=await(0,s.projectWithZConversion)(e,b.spatialReference,t);return(0,r.k_)(t),i}))));const S=await(0,u.Ff)(c.slice(0,4).map((e=>{let{x:t,y:i}=e;return[t,i]})),z.slice(0,4).map((e=>e.toArray())),{cameraHeight:y,cameraLocation:k,cameraPitch:R,frustumVertices:P,horizontalFieldOfView:F,imageHeight:g[1],imageWidth:g[0],inSRS:{wkid:b.spatialReference.wkid},outSRS:{wkid:f.spatialReference.wkid},verticalFieldOfView:C,cameraRoll:null!==M&&void 0!==M?M:0,imageRotation:null!==V&&void 0!==V?V:0,options:t});this.viewModel.updateCurrentCoveragePolygon(new a.Z({attributes:{imageID:i.attributes.objectId},geometry:S,symbol:v.RS.clone(),visible:this.viewModel.currentCoverageVisible}))},this.updateFootprintPanorama=async(e,t)=>{var i;await(0,r.Yn)(t);const{horizontalFieldOfView:o,pitch:n,verticalFieldOfView:l,yaw:s}=e,c=null===(i=this.viewModel.currentBestFeature)||void 0===i?void 0:i.clone();if(!c)return;const{attributes:d}=c;d.orientedImageryType=null,d.cameraHeading=(s+d.cameraHeading)%360,d.cameraPitch=n,d.horizontalFieldOfView=o,d.verticalFieldOfView=l,d.cameraRoll=0;const{frustum:p}=(0,u.QX)(d);p&&this.viewModel.updateCurrentCoveragePolygon(new a.Z({attributes:{imageID:d.objectId},geometry:p,symbol:v.RS.clone(),visible:this.viewModel.currentCoverageVisible}))}}updateGroundElevation(e,t){const{geometry:i}=this.viewModel.currentBestFeature,a=t.queryElevation(i);e.forEach((e=>{var t,i;const{geometry:o}=e;switch(null===o||void 0===o?void 0:o.type){case"mesh":{const{vertexAttributes:{position:e}}=o,t=Math.floor(e.length/3);for(let i=0;i<t;i+=1){var r;e[3*i+2]+=null!==(r=null===a||void 0===a?void 0:a.z)&&void 0!==r?r:0}break}case"point":o.z=(null!==(t=o.z)&&void 0!==t?t:0)+(null!==(i=null===a||void 0===a?void 0:a.z)&&void 0!==i?i:0)}}))}}}}]);
//# sourceMappingURL=22705.866a6599.chunk.js.map