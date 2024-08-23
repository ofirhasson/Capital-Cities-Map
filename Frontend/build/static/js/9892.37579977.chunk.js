"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[9892],{99894:(e,t,a)=>{function i(){return new Float32Array(4)}function n(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function r(e,t,a,i){const n=new Float32Array(4);return n[0]=e,n[1]=t,n[2]=a,n[3]=i,n}function o(){return i()}function s(){return r(1,1,1,1)}function l(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function u(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}a.d(t,{al:()=>r,d9:()=>n});const d=o(),p=s(),g=l(),y=c(),_=u(),m=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:p,UNIT_W:m,UNIT_X:g,UNIT_Y:y,UNIT_Z:_,ZEROS:d,clone:n,create:i,createView:function(e,t){return new Float32Array(e,t,4)},fromValues:r,ones:s,unitW:f,unitX:l,unitY:c,unitZ:u,zeros:o},Symbol.toStringTag,{value:"Module"}))},13200:(e,t,a)=>{a.d(t,{k3:()=>s,s5:()=>o});Math.PI;const i=256/360,n=1/Math.LN2;function r(e,t){return(e%=t)>=0?e:e+t}function o(e){return r(e*i,256)}function s(e){return Math.log(e)*n}},3886:(e,t,a)=>{a.d(t,{Z:()=>i});class i{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,a){}drawMany(e,t,a){for(const i of t)i.visible&&this.draw(e,i,a)}}},17538:(e,t,a)=>{a.d(t,{J:()=>f});var i=a(16889),n=a(8768),r=a(99894),o=a(94109),s=a(3886),l=a(44070),c=a(8548),u=a(45412);class f extends s.Z{constructor(){super(...arguments),this._color=(0,r.al)(1,0,0,1),this._patternMatrix=(0,n.Ue)(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:a,painter:n,requestRender:r,allowDelayedRender:s}=e;this._loadWGLResources(e);const l=e.displayLevel,u=e.styleLayer,f=u.backgroundMaterial,d=n.vectorTilesMaterialManager,p=u.getPaintValue("background-color",l),g=u.getPaintValue("background-opacity",l),y=u.getPaintValue("background-pattern",l),_=void 0!==y,m=1|window.devicePixelRatio,M=e.spriteMosaic;let h,v;const U=m>o.Vo?2:1,E=this._programOptions;E.pattern=_;const P=d.getMaterialProgram(a,f,E);if(!s||null==r||P.compiled){if(a.bindVAO(this._vao),a.useProgram(P),_){const e=M.getMosaicItemPosition(y,!0);if(null!=e){const{tl:t,br:i,page:n}=e;h=i[0]-t[0],v=i[1]-t[1];const r=M.getPageSize(n);null!=r&&(M.bind(a,c.cw.LINEAR,n,o.dD),P.setUniform4f("u_tlbr",t[0],t[1],i[0],i[1]),P.setUniform2fv("u_mosaicSize",r),P.setUniform1i("u_texture",o.dD))}P.setUniform1f("u_opacity",g)}else{const e=p[3]*g;this._color[0]=e*p[0],this._color[1]=e*p[1],this._color[2]=e*p[2],this._color[3]=e,P.setUniform4fv("u_color",this._color)}P.setUniform1f("u_depth",u.z||0);for(const e of t){if(P.setUniform1f("u_coord_range",e.rangeX),P.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3),_){const t=Math.max(2**(Math.round(l)-e.key.level),1),a=U*e.width*t,n=a/(0,i.fp)(h),r=a/(0,i.fp)(v);this._patternMatrix[0]=n,this._patternMatrix[4]=r,P.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}a.setStencilFunction(c.wb.EQUAL,0,255),a.drawArrays(c.MX.TRIANGLE_STRIP,0,4)}}else r()}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:a}=e,i=a.backgroundMaterial,n=new Int8Array([0,0,1,0,0,1,1,1]),r=l.f.createVertex(t,c.l1.STATIC_DRAW,n),o=new u.U(t,i.getAttributeLocations(),i.getLayoutInfo(),{geometry:r});this._vao=o}}},5562:(e,t,a)=>{a.d(t,{j:()=>o});var i=a(21391),n=a(3886),r=a(8548);class o extends n.Z{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:a,displayLevel:n,requiredLevel:o,state:s,painter:l,spriteMosaic:c,styleLayerUID:u,requestRender:f,allowDelayedRender:d}=e;if(!t.some((e=>{var t,a;return null!==(t=null===(a=e.layerData.get(u))||void 0===a?void 0:a.circleIndexCount)&&void 0!==t&&t})))return;const p=e.styleLayer,g=p.circleMaterial,y=l.vectorTilesMaterialManager,_=p.getPaintValue("circle-translate",n),m=p.getPaintValue("circle-translate-anchor",n),M=this._programOptions,h=y.getMaterialProgram(a,g,M);if(d&&null!=f&&!h.compiled)return void f();a.useProgram(h),h.setUniformMatrix3fv("u_displayMat3",m===i.fD.VIEWPORT?s.displayMat3:s.displayViewMat3),h.setUniform2fv("u_circleTranslation",_),h.setUniform1f("u_depth",p.z),h.setUniform1f("u_antialiasingWidth",1.2);let v=-1;for(const i of t){if(!i.layerData.has(u))continue;i.key.level!==v&&(v=i.key.level,g.setDataUniforms(h,n,p,v,c));const e=i.layerData.get(u);if(!e.circleIndexCount)continue;e.prepareForRendering(a);const t=e.vao;null!=t&&(a.bindVAO(t),h.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),o!==i.key.level?a.setStencilFunction(r.wb.EQUAL,i.stencilRef,255):a.setStencilFunction(r.wb.GREATER,255,255),a.drawElements(r.MX.TRIANGLES,e.circleIndexCount,r.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e.circleIndexStart),i.triangleCount+=e.circleIndexCount/3)}}}},54410:(e,t,a)=>{a.d(t,{R:()=>l});var i=a(21391),n=a(94109),r=a(3886),o=a(8548);const s=1/65536;class l extends r.Z{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:a,renderPass:i,spriteMosaic:n,styleLayerUID:r}=e;let o=!1;for(const M of t)if(M.layerData.has(r)){const e=M.layerData.get(r);if(e.fillIndexCount>0||e.outlineIndexCount>0){o=!0;break}}if(!o)return;const s=e.styleLayer,l=s.getPaintProperty("fill-pattern"),c=void 0!==l,u=c&&l.isDataDriven;let f;if(c&&!u){const e=l.getValue(a);f=n.getMosaicItemPosition(e,!0)}const d=!c&&s.getPaintValue("fill-antialias",a);let p=!0,g=1;if(!c){const e=s.getPaintProperty("fill-color"),t=s.getPaintProperty("fill-opacity");if((null===e||void 0===e||!e.isDataDriven)&&(null===t||void 0===t||!t.isDataDriven)){const e=s.getPaintValue("fill-color",a);g=s.getPaintValue("fill-opacity",a)*e[3],g>=1&&(p=!1)}}if(p&&"opaque"===i)return;const y=s.getPaintValue("fill-translate",a),_=s.getPaintValue("fill-translate-anchor",a);(p||"translucent"!==i)&&this._drawFill(e,r,s,t,y,_,c,f,u);const m=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&g<1;d&&"opaque"!==i&&!m&&this._drawOutline(e,r,s,t,y,_)}_drawFill(e,t,a,r,l,c,u,f,d){if(u&&!d&&null==f)return;const{context:p,displayLevel:g,state:y,painter:_,pixelRatio:m,spriteMosaic:M,requestRender:h,allowDelayedRender:v}=e,U=a.fillMaterial,E=_.vectorTilesMaterialManager,P=m>n.Vo?2:1,x=this._fillProgramOptions;x.pattern=u;const w=E.getMaterialProgram(p,U,x);if(v&&null!=h&&!w.compiled)return void h();if(p.useProgram(w),null!=f){const{page:e}=f,t=M.getPageSize(e);null!=t&&(M.bind(p,o.cw.LINEAR,e,n.dD),w.setUniform2fv("u_mosaicSize",t),w.setUniform1i("u_texture",n.dD))}w.setUniformMatrix3fv("u_displayMat3",c===i.fD.VIEWPORT?y.displayMat3:y.displayViewMat3),w.setUniform2fv("u_fillTranslation",l),w.setUniform1f("u_depth",a.z+s);let D=-1;for(const i of r){if(!i.layerData.has(t))continue;i.key.level!==D&&(D=i.key.level,U.setDataUniforms(w,g,a,D,M));const e=i.layerData.get(t);if(!e.fillIndexCount)continue;e.prepareForRendering(p);const r=e.fillVAO;if(null!=r){if(p.bindVAO(r),w.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),p.setStencilFunction(o.wb.EQUAL,i.stencilRef,255),u){const e=Math.max(2**(Math.round(g)-i.key.level),1),t=i.rangeX/(P*i.width*e);w.setUniform1f("u_patternFactor",t)}if(d){const t=e.patternMap;if(!t)continue;for(const[e,a]of t){const t=M.getPageSize(e);null!=t&&(M.bind(p,o.cw.LINEAR,e,n.dD),w.setUniform2fv("u_mosaicSize",t),w.setUniform1i("u_texture",n.dD),p.drawElements(o.MX.TRIANGLES,a[1],o.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]))}}else p.drawElements(o.MX.TRIANGLES,e.fillIndexCount,o.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e.fillIndexStart);i.triangleCount+=e.fillIndexCount/3}}}_drawOutline(e,t,a,n,r,l){const{context:c,displayLevel:u,state:f,painter:d,pixelRatio:p,spriteMosaic:g,requestRender:y,allowDelayedRender:_}=e,m=a.outlineMaterial,M=d.vectorTilesMaterialManager,h=.75/p,v=this._outlineProgramOptions,U=M.getMaterialProgram(c,m,v);if(_&&null!=y&&!U.compiled)return void y();c.useProgram(U),U.setUniformMatrix3fv("u_displayMat3",l===i.fD.VIEWPORT?f.displayMat3:f.displayViewMat3),U.setUniform2fv("u_fillTranslation",r),U.setUniform1f("u_depth",a.z+s),U.setUniform1f("u_outline_width",h);let E=-1;for(const i of n){if(!i.layerData.has(t))continue;i.key.level!==E&&(E=i.key.level,m.setDataUniforms(U,u,a,E,g));const e=i.layerData.get(t);if(e.prepareForRendering(c),!e.outlineIndexCount)continue;const n=e.outlineVAO;null!=n&&(c.bindVAO(n),U.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),c.setStencilFunction(o.wb.EQUAL,i.stencilRef,255),c.drawElements(o.MX.TRIANGLES,e.outlineIndexCount,o.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e.outlineIndexStart),i.triangleCount+=e.outlineIndexCount/3)}}}},93509:(e,t,a)=>{a.d(t,{z:()=>s});var i=a(21391),n=a(94109),r=a(3886),o=a(8548);class s extends r.Z{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:a,displayLevel:r,state:s,painter:l,pixelRatio:c,spriteMosaic:u,styleLayerUID:f,requestRender:d,allowDelayedRender:p}=e;if(!t.some((e=>{var t,a;return null!==(t=null===(a=e.layerData.get(f))||void 0===a?void 0:a.lineIndexCount)&&void 0!==t&&t})))return;const g=e.styleLayer,y=g.lineMaterial,_=l.vectorTilesMaterialManager,m=g.getPaintValue("line-translate",r),M=g.getPaintValue("line-translate-anchor",r),h=g.getPaintProperty("line-pattern"),v=void 0!==h,U=v&&h.isDataDriven;let E,P;if(v&&!U){const e=h.getValue(r);E=u.getMosaicItemPosition(e)}let x=!1;if(!v){const e=g.getPaintProperty("line-dasharray");if(P=void 0!==e,x=P&&e.isDataDriven,P&&!x){const t=e.getValue(r),a=g.getDashKey(t,g.getLayoutValue("line-cap",r));E=u.getMosaicItemPosition(a)}}const w=1/c,D=this._programOptions;D.pattern=v,D.sdf=P;const I=_.getMaterialProgram(a,y,D);if(p&&null!=d&&!I.compiled)return void d();if(a.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",s.displayViewMat3),I.setUniformMatrix3fv("u_displayMat3",M===i.fD.VIEWPORT?s.displayMat3:s.displayViewMat3),I.setUniform2fv("u_lineTranslation",m),I.setUniform1f("u_depth",g.z),I.setUniform1f("u_antialiasing",w),E&&null!=E){const{page:e}=E,t=u.getPageSize(e);null!=t&&(u.bind(a,o.cw.LINEAR,e,n.dD),I.setUniform2fv("u_mosaicSize",t),I.setUniform1i("u_texture",n.dD))}let S=-1;for(const i of t){if(!i.layerData.has(f))continue;i.key.level!==S&&(S=i.key.level,y.setDataUniforms(I,r,g,S,u));const e=2**(r-S)/c;I.setUniform1f("u_zoomFactor",e);const t=i.layerData.get(f);if(!t.lineIndexCount)continue;t.prepareForRendering(a);const s=t.vao;if(null!=s){if(a.bindVAO(s),I.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),a.setStencilFunction(o.wb.EQUAL,i.stencilRef,255),U||x){const e=t.patternMap;if(!e)continue;for(const[t,i]of e){const e=u.getPageSize(t);null!=e&&(u.bind(a,o.cw.LINEAR,t,n.dD),I.setUniform2fv("u_mosaicSize",e),I.setUniform1i("u_texture",n.dD),a.drawElements(o.MX.TRIANGLES,i[1],o.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]))}}else a.drawElements(o.MX.TRIANGLES,t.lineIndexCount,o.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t.lineIndexStart);i.triangleCount+=t.lineIndexCount/3}}}}},11640:(e,t,a)=>{a.d(t,{e:()=>u});var i=a(30932),n=a(46618),r=a(21391),o=a(94109),s=a(13200),l=a(3886),c=a(8548);class u extends l.Z{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=(0,i.Ue)()}dispose(){}drawMany(e,t){const a=e.styleLayer;this._drawIcons(e,a,t),this._drawText(e,a,t)}_drawIcons(e,t,a){const{context:i,displayLevel:l,painter:c,spriteMosaic:u,state:f,styleLayerUID:d,requestRender:p,allowDelayedRender:g}=e,y=t.iconMaterial,_=c.vectorTilesMaterialManager;let m,M=!1;for(const n of a)if(n.layerData.has(d)&&(m=n.layerData.get(d),m.iconPerPageElementsMap.size>0)){M=!0;break}if(!M)return;const h=t.getPaintValue("icon-translate",l),v=t.getPaintValue("icon-translate-anchor",l);let U=t.getLayoutValue("icon-rotation-alignment",l);U===r.aF.AUTO&&(U=t.getLayoutValue("symbol-placement",l)===r.R.POINT?r.aF.VIEWPORT:r.aF.MAP);const E=U===r.aF.MAP,P=t.getLayoutValue("icon-keep-upright",l)&&E,x=m.isIconSDF,w=this._iconProgramOptions;w.sdf=x;const D=_.getMaterialProgram(i,y,w);if(g&&null!=p&&!D.compiled)return void p();i.useProgram(D),D.setUniformMatrix3fv("u_displayViewMat3",U===r.aF.MAP?f.displayViewMat3:f.displayMat3),D.setUniformMatrix3fv("u_displayMat3",v===r.fD.VIEWPORT?f.displayMat3:f.displayViewMat3),D.setUniform2fv("u_iconTranslation",h),D.setUniform1f("u_depth",t.z),D.setUniform1f("u_mapRotation",(0,s.s5)(f.rotation)),D.setUniform1f("u_keepUpright",P?1:0),D.setUniform1f("u_level",10*l),D.setUniform1i("u_texture",o.dD),D.setUniform1f("u_fadeDuration",n.v7/1e3);let I=-1;for(const n of a){if(!n.layerData.has(d))continue;if(n.key.level!==I&&(I=n.key.level,y.setDataUniforms(D,l,t,I,u)),m=n.layerData.get(d),0===m.iconPerPageElementsMap.size)continue;m.prepareForRendering(i),m.updateOpacityInfo();const a=m.iconVAO;if(null!=a){i.bindVAO(a),D.setUniformMatrix3fv("u_dvsMat3",n.transforms.displayViewScreenMat3),D.setUniform1f("u_time",(performance.now()-m.lastOpacityUpdate)/1e3);for(const[t,a]of m.iconPerPageElementsMap)this._renderIconRange(e,D,a,t,n)}}}_renderIconRange(e,t,a,i,n){const{context:r,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(i)/4,this._spritesTextureSize[1]=s.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(r,c.cw.LINEAR,i,o.dD),this._setStencilState(e,n),r.drawElements(c.MX.TRIANGLES,a[1],c.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]),n.triangleCount+=a[1]/3}_drawText(e,t,a){const{context:l,displayLevel:c,glyphMosaic:u,painter:f,pixelRatio:d,spriteMosaic:p,state:g,styleLayerUID:y,requestRender:_,allowDelayedRender:m}=e,M=t.textMaterial,h=f.vectorTilesMaterialManager;let v,U=!1;for(const i of a)if(i.layerData.has(y)&&(v=i.layerData.get(y),v.glyphPerPageElementsMap.size>0)){U=!0;break}if(!U)return;const E=t.getPaintProperty("text-opacity");if(E&&!E.isDataDriven&&0===E.getValue(c))return;const P=t.getPaintProperty("text-color"),x=!P||P.isDataDriven||P.getValue(c)[3]>0,w=t.getPaintProperty("text-halo-width"),D=t.getPaintProperty("text-halo-color"),I=(!w||w.isDataDriven||w.getValue(c)>0)&&(!D||D.isDataDriven||D.getValue(c)[3]>0);if(!x&&!I)return;let S=t.getLayoutValue("text-rotation-alignment",c);S===r.aF.AUTO&&(S=t.getLayoutValue("symbol-placement",c)===r.R.POINT?r.aF.VIEWPORT:r.aF.MAP);const R=S===r.aF.MAP,T=t.getLayoutValue("text-keep-upright",c)&&R,V=.8*3/d;this._glyphTextureSize||(this._glyphTextureSize=(0,i.al)(u.width/4,u.height/4));const L=t.getPaintValue("text-translate",c),A=t.getPaintValue("text-translate-anchor",c),N=this._sdfProgramOptions,O=h.getMaterialProgram(l,M,N);if(m&&null!=_&&!O.compiled)return void _();l.useProgram(O),O.setUniformMatrix3fv("u_displayViewMat3",S===r.aF.MAP?g.displayViewMat3:g.displayMat3),O.setUniformMatrix3fv("u_displayMat3",A===r.fD.VIEWPORT?g.displayMat3:g.displayViewMat3),O.setUniform2fv("u_textTranslation",L),O.setUniform1f("u_depth",t.z+152587890625e-16),O.setUniform2fv("u_mosaicSize",this._glyphTextureSize),O.setUniform1f("u_mapRotation",(0,s.s5)(g.rotation)),O.setUniform1f("u_keepUpright",T?1:0),O.setUniform1f("u_level",10*c),O.setUniform1i("u_texture",o._E),O.setUniform1f("u_antialiasingWidth",V),O.setUniform1f("u_fadeDuration",n.v7/1e3);let b=-1;for(const i of a){if(!i.layerData.has(y))continue;if(i.key.level!==b&&(b=i.key.level,M.setDataUniforms(O,c,t,b,p)),v=i.layerData.get(y),0===v.glyphPerPageElementsMap.size)continue;v.prepareForRendering(l),v.updateOpacityInfo();const a=v.textVAO;if(null==a)continue;l.bindVAO(a),O.setUniformMatrix3fv("u_dvsMat3",i.transforms.displayViewScreenMat3),this._setStencilState(e,i);const n=(performance.now()-v.lastOpacityUpdate)/1e3;O.setUniform1f("u_time",n),v.glyphPerPageElementsMap.forEach(((e,t)=>{this._renderGlyphRange(l,e,t,u,O,I,x,i)}))}}_renderGlyphRange(e,t,a,i,n,r,s,l){i.bind(e,c.cw.LINEAR,a,o._E),r&&(n.setUniform1f("u_halo",1),e.drawElements(c.MX.TRIANGLES,t[1],c.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3),s&&(n.setUniform1f("u_halo",0),e.drawElements(c.MX.TRIANGLES,t[1],c.g.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3)}_setStencilState(e,t){const{context:a,is3D:i,stencilSymbols:n}=e;if(a.setStencilTestEnabled(!0),n)return a.setStencilWriteMask(255),void a.setStencilFunction(c.wb.ALWAYS,t.stencilRef,255);a.setStencilWriteMask(0),i?a.setStencilFunction(c.wb.EQUAL,t.stencilRef,255):a.setStencilFunction(c.wb.GREATER,255,255)}}},56648:(e,t,a)=>{a.d(t,{B:()=>i});class i{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(t.has(e))return t.get(e);const a=this._read(e);if(!a)throw new Error("cannot find shader file ".concat(e));const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=i.exec(a);const r=[];for(;null!=n;)r.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(a);let o=0,s="";return r.forEach((e=>{s+=a.slice(o,e.start),s+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),s+=a.slice(o),t.set(e,s),s}_read(e){return this._readFile(e)}}}}]);
//# sourceMappingURL=9892.37579977.chunk.js.map