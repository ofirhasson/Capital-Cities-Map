"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[5508],{5629:(T,_,R)=>{R.d(_,{A:()=>r,f:()=>t});var O=R(12400),n=R(79803),e=R(5986);function t(T,_,R){return!!(0,e.S)(T,_,A,R.spatialReference)&&(R.x=A[0],R.y=A[1],R.z=A[2],!0)}async function r(T,_,R,O){return await(0,n.initializeProjection)(_,R.spatialReference,null,O),t(T,_,R)}const A=(0,O.Ue)()},70444:(T,_,R)=>{R.d(_,{S$:()=>F,Ue:()=>t,Ws:()=>E,_k:()=>A,iL:()=>r});var O=R(21530),n=R(32035),e=R(40885);function t(T){return T?{ray:(0,e.Ue)(T.ray),c0:T.c0,c1:T.c1}:{ray:(0,e.Ue)(),c0:0,c1:Number.MAX_VALUE}}function r(T){let _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t();return(0,e.JG)(T,_.ray),_.c0=0,_.c1=Number.MAX_VALUE,_}function A(T,_){let R=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t();const O=(0,n.l)(T.vector);return(0,e.al)(T.origin,_,R.ray),R.c0=0,R.c1=O,R}function E(T,_){return u(T,T.c0,_)}function F(T,_){return u(T,T.c1,_)}function u(T,_,R){return(0,n.g)(R,T.ray.origin,(0,n.j)(R,T.ray.direction,_))}new O.x((()=>t()))},95773:(T,_,R)=>{R.d(_,{Hf:()=>N,JG:()=>M,Jp:()=>H,N9:()=>s,NQ:()=>n,Nu:()=>O,Ue:()=>f,Zr:()=>B,g8:()=>a,hr:()=>L,q_:()=>G,rN:()=>P,xu:()=>U,zq:()=>I});var O,n,e,t=R(21530),r=R(29134),A=R(32035),E=R(12400),F=R(19093),u=R(86361),o=R(70444),c=R(55652),i=R(51378);function f(T){return T?[(0,c.Ue)(T[0]),(0,c.Ue)(T[1]),(0,c.Ue)(T[2]),(0,c.Ue)(T[3]),(0,c.Ue)(T[4]),(0,c.Ue)(T[5])]:[(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)(),(0,c.Ue)()]}function N(){return[(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)(),(0,E.Ue)()]}function M(T,_){for(let R=0;R<s;R++)(0,c.JG)(T[R],_[R]);return T}function G(T,_,R){let O=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;const n=(0,r.Jp)(i.MP.get(),_,T);(0,r.U_)(n,n);for(let e=0;e<g;++e){const T=(0,F.t)(i.o6.get(),k[e],n);(0,A.s)(O[e],T[0]/T[3],T[1]/T[3],T[2]/T[3])}H(R,O)}function H(T,_){(0,c.zk)(_[n.FAR_BOTTOM_LEFT],_[n.NEAR_BOTTOM_LEFT],_[n.NEAR_TOP_LEFT],T[O.LEFT]),(0,c.zk)(_[n.NEAR_BOTTOM_RIGHT],_[n.FAR_BOTTOM_RIGHT],_[n.FAR_TOP_RIGHT],T[O.RIGHT]),(0,c.zk)(_[n.FAR_BOTTOM_LEFT],_[n.FAR_BOTTOM_RIGHT],_[n.NEAR_BOTTOM_RIGHT],T[O.BOTTOM]),(0,c.zk)(_[n.NEAR_TOP_LEFT],_[n.NEAR_TOP_RIGHT],_[n.FAR_TOP_RIGHT],T[O.TOP]),(0,c.zk)(_[n.NEAR_BOTTOM_LEFT],_[n.NEAR_BOTTOM_RIGHT],_[n.NEAR_TOP_RIGHT],T[O.NEAR]),(0,c.zk)(_[n.FAR_BOTTOM_RIGHT],_[n.FAR_BOTTOM_LEFT],_[n.FAR_TOP_LEFT],T[O.FAR])}function L(T,_){for(let R=0;R<s;R++){const O=T[R];if(O[0]*_[0]+O[1]*_[1]+O[2]*_[2]+O[3]>=_[3])return!1}return!0}function B(T,_){return l(T,(0,o.iL)(_,h.get()))}function I(T,_){for(let R=0;R<s;R++){const O=T[R];if(!(0,c.Er)(O,_))return!1}return!0}function P(T,_,R){return l(T,(0,o._k)(_,R,h.get()))}function a(T,_){for(let R=0;R<s;R++)if((0,c.jH)(T[R],_)>0)return!1;return!0}function l(T,_){for(let R=0;R<s;R++)if(!(0,c.oq)(T[R],_))return!1;return!0}(e=O||(O={}))[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.TOP=3]="TOP",e[e.NEAR=4]="NEAR",e[e.FAR=5]="FAR",function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(n||(n={}));const U={bottom:[n.FAR_BOTTOM_RIGHT,n.NEAR_BOTTOM_RIGHT,n.NEAR_BOTTOM_LEFT,n.FAR_BOTTOM_LEFT],near:[n.NEAR_BOTTOM_LEFT,n.NEAR_BOTTOM_RIGHT,n.NEAR_TOP_RIGHT,n.NEAR_TOP_LEFT],far:[n.FAR_BOTTOM_RIGHT,n.FAR_BOTTOM_LEFT,n.FAR_TOP_LEFT,n.FAR_TOP_RIGHT],right:[n.NEAR_BOTTOM_RIGHT,n.FAR_BOTTOM_RIGHT,n.FAR_TOP_RIGHT,n.NEAR_TOP_RIGHT],left:[n.FAR_BOTTOM_LEFT,n.NEAR_BOTTOM_LEFT,n.NEAR_TOP_LEFT,n.FAR_TOP_LEFT],top:[n.FAR_TOP_LEFT,n.NEAR_TOP_LEFT,n.NEAR_TOP_RIGHT,n.FAR_TOP_RIGHT]},s=6,g=8,k=[(0,u.al)(-1,-1,-1,1),(0,u.al)(1,-1,-1,1),(0,u.al)(1,1,-1,1),(0,u.al)(-1,1,-1,1),(0,u.al)(-1,-1,1,1),(0,u.al)(1,-1,1,1),(0,u.al)(1,1,1,1),(0,u.al)(-1,1,1,1)],h=new t.x(o.Ue),d=N()}}]);
//# sourceMappingURL=5508.a20b9e3c.chunk.js.map