"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[59154],{59154:(t,s,r)=>{r.r(s),r.d(s,{queryNamedTraceConfigurations:()=>d});var e=r(76200),n=r(23084),a=r(27366),o=r(46784),i=r(49861),c=(r(93169),r(32718),r(84936),r(69912)),g=r(12484);let u=class extends o.wq{constructor(t){super(t),this.namedTraceConfigurations=[]}};(0,a._)([(0,i.Cb)({type:[g.Z],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],u.prototype,"namedTraceConfigurations",void 0),u=(0,a._)([(0,c.j)("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],u);const l=u;async function d(t,s,r){const a=(0,n.en)(t),o=s.toJSON();s.globalIds&&s.globalIds.length>0&&(o.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(o.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(o.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(o.names=JSON.stringify(s.names));const i={...o,f:"json"},c=(0,n.cv)({...a.query,...i}),g=(0,n.lA)(c,{...r,method:"post"}),u="".concat(a.path,"/traceConfigurations/query"),{data:d}=await(0,e.Z)(u,g);return l.fromJSON(d)}}}]);
//# sourceMappingURL=59154.e1597164.chunk.js.map