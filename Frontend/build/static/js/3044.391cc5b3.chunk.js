"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[3044],{3044:(e,t,i)=>{i.d(t,{default:()=>d});i(59486);var o=i(52639),r=i(63780),n=i(32718),a=i(66978),s=i(8835),l=i(46426),u=i(28429),c=i(80885);class d{constructor(e){this.viewModel=e,this.createFootprints=async e=>{await(0,a.Yn)(e);const{coveragePolygons:t,currentBestFeature:i,isAdditionalCoverageVisible:r}=this.viewModel;for(const n of t)(null===n||void 0===n?void 0:n.imageID)===i.attributes.objectId?this.viewModel.bestFeatureFootprint=new o.Z({attributes:{imageID:null===n||void 0===n?void 0:n.imageID},geometry:n,symbol:u.ao,visible:!1}):this.viewModel.additionalFootprints.push(new o.Z({attributes:{imageID:null===n||void 0===n?void 0:n.imageID},geometry:n,symbol:u.Gu.clone(),visible:r}))},this.updateFootprint=async(e,t)=>{const{activeViewer:i,currentBestFeature:l,currentCoverageVisible:d,footprintExtent:p}=this.viewModel,v=null===i||void 0===i?void 0:i.imageSize;if(l&&v&&p)try{const i=await(0,s.y)(e,{feature:l,imageProperties:{width:v[0],height:v[1]},options:t,footprintExtent:p});(0,a.k_)(t);const n=i.filter(r.pC);if(!n.length)return;const h=[n.map((e=>{let{x:t,y:i}=e;return[t,i,1]}))];h[0].push(h[0][0]);const g=new c.Z({rings:h,spatialReference:n[0].spatialReference});this.viewModel.updateCurrentCoveragePolygon(new o.Z({geometry:g,attributes:{imageID:l.attributes.objectId},symbol:u.ao,visible:d}))}catch(h){(0,a.D_)(h)||n.Z.getLogger(this.viewModel).error("update-footprint",h)}},this.updateFootprintPanorama=async(e,t)=>{const{horizontalFieldOfView:i,pitch:r,verticalFieldOfView:n,yaw:d}=e,{activeViewer:p,currentBestFeature:v,currentCoverageVisible:h,footprintExtent:g}=this.viewModel,w=null===p||void 0===p?void 0:p.imageSize;if(!v||!w||!g)return;const{cameraPitch:f,objectId:b}=v.attributes;if(r+f-n/2>180)return void this.viewModel.updateCurrentCoveragePolygon(null);let m=[];if(r+f+n/2<180)m=[[-i/2,n/2],[i/2,n/2],...r-n/2<0?[[-i/2,-n/2],[i/2,-n/2]]:[[i/2,-n/2],[-i/2,-n/2]]];else if(r+f-n/2<180&&r+f+n/2>180){m=[[-i/2,-n/2]];const e=Math.floor(i/6),t=i/e;for(let o=0;o<=e;o++)m.push([o*t-i/2,90-r]);m.push([i/2,-n/2])}const y=m.map((e=>{let[t,i]=e;return(0,l.cZ)(d+t,r+i,w[0],w[1])})),C=await(0,s.y)(y,{feature:v,imageProperties:{width:w[0],height:w[1]},options:t,footprintExtent:g});(0,a.k_)(t);const F=[C.map((e=>{let{x:t,y:i}=e;return[t,i,1]}))];F[0].push(F[0][0]);const M=new c.Z({rings:F,spatialReference:C[0].spatialReference});this.viewModel.updateCurrentCoveragePolygon(new o.Z({geometry:M,attributes:{imageID:b},symbol:u.ao.clone(),visible:h}))}}}}}]);
//# sourceMappingURL=3044.391cc5b3.chunk.js.map