"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[20462],{20462:(t,i,e)=>{e.r(i),e.d(i,{default:()=>g});var o=e(27366),n=e(36721),l=e(10064),s=e(91505),r=e(49861),h=(e(93169),e(32718),e(84936),e(69912)),a=e(99505);let w=class extends((0,a._)(s.Z.EventedAccessor)){constructor(t){super(t),this._initialViewpoint=null,this._goingHomeController=null,this.go=this.go.bind(this)}destroy(){this._cancelGo(),this.view=null}get state(){var t;return null!==(t=this.view)&&void 0!==t&&t.ready?this._goingHomeController?"going-home":"ready":"disabled"}set view(t){this._initialViewpoint=null,this._set("view",t),t&&t.when().then((()=>{this.view===t&&(this._initialViewpoint=t.viewpoint.clone(),this.notifyChange("viewpoint"))}))}get viewpoint(){return this._get("viewpoint")||this._initialViewpoint}set viewpoint(t){this._set("viewpoint",t)}async go(){var t;if(null===(t=this.view)||void 0===t||!t.ready)throw new l.Z("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go");const i=new AbortController;this._goingHomeController=i;try{var e;await(null===(e=this.view)||void 0===e?void 0:e.when()),await this.callGoTo({target:this.viewpoint,options:{signal:i.signal}})}catch(o){}this._goingHomeController=null}cancelGo(){this._cancelGo()}_cancelGo(){const{_goingHomeController:t}=this;t&&t.abort(),this._goingHomeController=null}};(0,o._)([(0,r.Cb)()],w.prototype,"_goingHomeController",void 0),(0,o._)([(0,r.Cb)({readOnly:!0})],w.prototype,"state",null),(0,o._)([(0,r.Cb)()],w.prototype,"view",null),(0,o._)([(0,r.Cb)({type:n.Z})],w.prototype,"viewpoint",null),(0,o._)([(0,r.Cb)()],w.prototype,"go",null),(0,o._)([(0,r.Cb)()],w.prototype,"cancelGo",null),w=(0,o._)([(0,h.j)("esri.widgets.Home.HomeViewModel")],w);const g=w}}]);
//# sourceMappingURL=20462.62f3a2d2.chunk.js.map