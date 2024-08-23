"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[84178],{84178:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>z,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>$,clip:()=>y,contains:()=>h,convexHull:()=>b,crosses:()=>g,cut:()=>w,densify:()=>W,difference:()=>k,disjoint:()=>x,distance:()=>m,equals:()=>v,extendedSpatialReferenceInfo:()=>p,flipHorizontal:()=>q,flipVertical:()=>B,generalize:()=>G,geodesicArea:()=>Q,geodesicBuffer:()=>C,geodesicDensify:()=>F,geodesicLength:()=>U,intersect:()=>T,intersectLinesToPoints:()=>X,intersects:()=>S,isSimple:()=>J,nearestCoordinate:()=>H,nearestVertex:()=>I,nearestVertices:()=>P,offset:()=>E,overlaps:()=>O,planarArea:()=>K,planarLength:()=>M,relate:()=>D,rotate:()=>j,simplify:()=>N,symmetricDifference:()=>L,touches:()=>A,union:()=>V,within:()=>R});t(59486);var r=t(70431),i=t(848),a=t(77981);function c(n){var e;return Array.isArray(n)?null===(e=n[0])||void 0===e?void 0:e.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function u(n){return Array.isArray(n)?n.map((n=>(0,a.im)(n))):(0,a.im)(n)}let s;async function f(){return s||(s=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),s}async function l(n,e){return(await f()).invoke("executeGEOperation",{operation:n,parameters:o(e)})}async function d(n,e){const t=await f();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:o(e)}))}function p(n){return l("extendedSpatialReferenceInfo",[n])}async function y(n,e){return u(await l("clip",[c(n),n,e]))}async function w(n,e){return u(await l("cut",[c(n),n,e]))}function h(n,e){return l("contains",[c(n),n,e])}function g(n,e){return l("crosses",[c(n),n,e])}function m(n,e,t){return l("distance",[c(n),n,e,t])}function v(n,e){return l("equals",[c(n),n,e])}function S(n,e){return l("intersects",[c(n),n,e])}function A(n,e){return l("touches",[c(n),n,e])}function R(n,e){return l("within",[c(n),n,e])}function x(n,e){return l("disjoint",[c(n),n,e])}function O(n,e){return l("overlaps",[c(n),n,e])}function D(n,e,t){return l("relate",[c(n),n,e,t])}function J(n){return l("isSimple",[c(n),n])}async function N(n){return u(await l("simplify",[c(n),n]))}async function b(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u(await l("convexHull",[c(n),n,e]))}async function k(n,e){return u(await l("difference",[c(n),n,e]))}async function L(n,e){return u(await l("symmetricDifference",[c(n),n,e]))}async function T(n,e){return u(await l("intersect",[c(n),n,e]))}async function V(n){const e=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return u(await l("union",[c(e),e]))}async function E(n,e,t,r,i,a){return u(await l("offset",[c(n),n,e,t,r,i,a]))}async function z(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=[c(n),n,e,t,r];return u(await l("buffer",i))}async function C(n,e,t,r,i,a){const o=[c(n),n,e,t,r,i,a];return u(await l("geodesicBuffer",o))}async function H(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await l("nearestCoordinate",[c(n),n,e,t]);return{...r,coordinate:i.Z.fromJSON(r.coordinate)}}async function I(n,e){const t=await l("nearestVertex",[c(n),n,e]);return{...t,coordinate:i.Z.fromJSON(t.coordinate)}}async function P(n,e,t,r){return(await l("nearestVertices",[c(n),n,e,t,r])).map((n=>({...n,coordinate:i.Z.fromJSON(n.coordinate)})))}function Z(n){var e;return"xmin"in n?n.center:"x"in n?n:null===(e=n.extent)||void 0===e?void 0:e.center}async function j(n,e,t){var r;if(null==n)throw new _;const i=n.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:Z(n)))throw new _;const a=n.constructor.fromJSON(await l("rotate",[i,n,e,t]));return a.spatialReference=i,a}async function q(n,e){var t;if(null==n)throw new _;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:Z(n)))throw new _;const i=n.constructor.fromJSON(await l("flipHorizontal",[r,n,e]));return i.spatialReference=r,i}async function B(n,e){var t;if(null==n)throw new _;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:Z(n)))throw new _;const i=n.constructor.fromJSON(await l("flipVertical",[r,n,e]));return i.spatialReference=r,i}async function G(n,e,t,r){return u(await l("generalize",[c(n),n,e,t,r]))}async function W(n,e,t){return u(await l("densify",[c(n),n,e,t]))}async function F(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return u(await l("geodesicDensify",[c(n),n,e,t,r]))}function K(n,e){return l("planarArea",[c(n),n,e])}function M(n,e){return l("planarLength",[c(n),n,e])}function Q(n,e,t){return l("geodesicArea",[c(n),n,e,t])}function U(n,e,t){return l("geodesicLength",[c(n),n,e,t])}async function X(n,e){return u(await l("intersectLinesToPoints",[c(n),n,e]))}async function Y(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function $(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class _ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=84178.24cb2a00.chunk.js.map