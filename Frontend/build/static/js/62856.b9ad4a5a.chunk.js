"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[62856],{62856:(s,t,i)=>{i.d(t,{stopEditing:()=>c});var n=i(76200),e=i(10064),o=i(23084);async function c(s,t,i,c,a){if(!t)throw new e.Z("stop-editing:missing-guid","guid for version is missing");const r=(0,o.en)(s),d=(0,o.lA)(r.query,{query:(0,o.cv)({sessionId:i,saveEdits:c,f:"json"}),...a,method:"post"});t.startsWith("{")&&(t=t.slice(1,-1));const u="".concat(r.path,"/versions/").concat(t,"/stopEditing"),{data:h}=await(0,n.Z)(u,d);return h||{success:!1}}}}]);
//# sourceMappingURL=62856.b9ad4a5a.chunk.js.map