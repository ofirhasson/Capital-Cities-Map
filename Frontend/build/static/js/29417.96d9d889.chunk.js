"use strict";(self.webpackChunknorthwind=self.webpackChunknorthwind||[]).push([[29417],{40653:(t,e,i)=>{i.d(e,{Z:()=>c});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(69912)),y=i(29909),m=i(49022);let b=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.directionLineType=null,this.directionPointId=null,this.distance=null,this.duration=null,this.fromLevel=null,this.geometry=null,this.objectId=null,this.popupTemplate=null,this.symbol=null,this.toLevel=null,this.type="direction-line"}static fromGraphic(t){var e,i,s;return new r({directionLineType:m.td.fromJSON(t.attributes.DirectionLineType),directionPointId:t.attributes.DirectionPointID,distance:t.attributes.Meters,duration:t.attributes.Minutes,fromLevel:null!==(e=t.attributes.FromLevel)&&void 0!==e?e:null,geometry:t.geometry,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,symbol:t.symbol,toLevel:null!==(s=t.attributes.ToLevel)&&void 0!==s?s:null})}toGraphic(){const t={ObjectID:this.objectId,DirectionLineType:null!=this.directionLineType?m.td.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return null!=this.fromLevel&&(t.FromLevel=this.fromLevel),null!=this.toLevel&&(t.ToLevel=this.toLevel),new o.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};b.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger"},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger"},{name:"FromLevel",alias:"From Level",type:"esriFieldTypeInteger"},{name:"Meters",alias:"Meters",type:"esriFieldTypeDouble"},{name:"Minutes",alias:"Minutes",type:"esriFieldTypeDouble"},{name:"ToLevel",alias:"To Level",type:"esriFieldTypeInteger"}],(0,s._)([(0,p.Cb)({type:m.td.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:m.td.read}}})],b.prototype,"directionLineType",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.DirectionPointID"}}})],b.prototype,"directionPointId",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Meters"}}})],b.prototype,"distance",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Minutes"}}})],b.prototype,"duration",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.FromLevel"}}})],b.prototype,"fromLevel",void 0),(0,s._)([(0,p.Cb)({type:y.Z})],b.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ObjectID"}}})],b.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],b.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],b.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ToLevel"}}})],b.prototype,"toLevel",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),b=r=(0,s._)([(0,d.j)("esri.rest.support.DirectionLine")],b);const c=b},54889:(t,e,i)=>{i.d(e,{Z:()=>T});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(38511)),y=i(69912),m=i(848),b=i(49022);let c=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.alternateName=null,this.arrivalTime=null,this.arrivalTimeOffset=null,this.azimuth=null,this.branchName=null,this.directionPointType=null,this.displayText=null,this.exitName=null,this.geometry=null,this.intersectingName=null,this.level=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sequence=null,this.shortVoiceInstruction=null,this.stopId=null,this.symbol=null,this.towardName=null,this.type="direction-point",this.voiceInstruction=null}readArrivalTime(t,e){return null!=e.attributes.ArrivalTime?new Date(e.attributes.ArrivalTime):null}static fromGraphic(t){var e,i,s,o,a,l,n,u,p,d,y,m,c,T;return new r({alternateName:null!==(e=t.attributes.AlternateName)&&void 0!==e?e:null,arrivalTime:null!=t.attributes.ArrivalTime?new Date(t.attributes.ArrivalTime):null,arrivalTimeOffset:null!==(i=t.attributes.ArrivalUTCOffset)&&void 0!==i?i:null,azimuth:null!==(s=t.attributes.Azimuth)&&void 0!==s?s:null,branchName:null!==(o=t.attributes.BranchName)&&void 0!==o?o:null,directionPointType:b.cW.fromJSON(t.attributes.DirectionPointType),displayText:null!==(a=t.attributes.DisplayText)&&void 0!==a?a:null,exitName:null!==(l=t.attributes.ExitName)&&void 0!==l?l:null,geometry:t.geometry,intersectingName:null!==(n=t.attributes.IntersectingName)&&void 0!==n?n:null,level:null!==(u=t.attributes.Level)&&void 0!==u?u:null,name:null!==(p=t.attributes.Name)&&void 0!==p?p:null,objectId:null!==(d=t.attributes.ObjectID)&&void 0!==d?d:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,sequence:t.attributes.Sequence,shortVoiceInstruction:null!==(y=t.attributes.ShortVoiceInstruction)&&void 0!==y?y:null,stopId:null!==(m=t.attributes.StopID)&&void 0!==m?m:null,symbol:t.symbol,towardName:null!==(c=t.attributes.TowardName)&&void 0!==c?c:null,voiceInstruction:null!==(T=t.attributes.VoiceInstruction)&&void 0!==T?T:null})}toGraphic(){const t={ObjectID:this.objectId,DirectionPointType:null!=this.directionPointType?b.cW.toJSON(this.directionPointType):null,Sequence:this.sequence,StopID:this.stopId};return null!=this.alternateName&&(t.AlternateName=this.alternateName),null!=this.arrivalTime&&(t.ArrivalTime=this.arrivalTime.getTime()),null!=this.arrivalTimeOffset&&(t.ArrivalUTCOffset=this.arrivalTimeOffset),null!=this.azimuth&&(t.Azimuth=this.azimuth),null!=this.branchName&&(t.BranchName=this.branchName),null!=this.displayText&&(t.DisplayText=this.displayText),null!=this.exitName&&(t.ExitName=this.exitName),null!=this.intersectingName&&(t.IntersectingName=this.intersectingName),null!=this.level&&(t.Level=this.level),null!=this.name&&(t.Name=this.name),null!=this.shortVoiceInstruction&&(t.ShortVoiceInstruction=this.shortVoiceInstruction),null!=this.towardName&&(t.TowardName=this.towardName),null!=this.voiceInstruction&&(t.VoiceInstruction=this.voiceInstruction),new o.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};c.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AlternateName",alias:"Alternative Name",type:"esriFieldTypeString"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time Offset",type:"esriFieldTypeInteger"},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble"},{name:"BranchName",alias:"Branch Name",type:"esriFieldTypeString"},{name:"DirectionPointType",alias:"Directions Point Type",type:"esriFieldTypeInteger"},{name:"DisplayText",alias:"Display Text",type:"esriFieldTypeString"},{name:"ExitName",alias:"Exit Name",type:"esriFieldTypeString"},{name:"IntersectingName",alias:"Intersecting Name",type:"esriFieldTypeString"},{name:"Level",alias:"Level",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ShortVoiceInstruction",alias:"Short Voice Instruction",type:"esriFieldTypeString"},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger"},{name:"TowardName",alias:"Toward Name",type:"esriFieldTypeString"},{name:"VoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString"}],(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.AlternateName"}}})],c.prototype,"alternateName",void 0),(0,s._)([(0,p.Cb)()],c.prototype,"arrivalTime",void 0),(0,s._)([(0,d.r)("arrivalTime",["attributes.ArrivalTime"])],c.prototype,"readArrivalTime",null),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],c.prototype,"arrivalTimeOffset",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Azimuth"}}})],c.prototype,"azimuth",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.BranchName"}}})],c.prototype,"branchName",void 0),(0,s._)([(0,p.Cb)({type:b.cW.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:b.cW.read}}})],c.prototype,"directionPointType",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.DisplayText"}}})],c.prototype,"displayText",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ExitName"}}})],c.prototype,"exitName",void 0),(0,s._)([(0,p.Cb)({type:m.Z})],c.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.IntersectingName"}}})],c.prototype,"intersectingName",void 0),(0,s._)([(0,p.Cb)()],c.prototype,"level",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Name"}}})],c.prototype,"name",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ObjectID"}}})],c.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],c.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Sequence"}}})],c.prototype,"sequence",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ShortVoiceInstruction"}}})],c.prototype,"shortVoiceInstruction",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.StopID"}}})],c.prototype,"stopId",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],c.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.TowardName"}}})],c.prototype,"towardName",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.VoiceInstruction"}}})],c.prototype,"voiceInstruction",void 0),c=r=(0,s._)([(0,y.j)("esri.rest.support.DirectionPoint")],c);const T=c},16406:(t,e,i)=>{i.d(e,{Z:()=>v});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(38511)),y=i(69912),m=i(31201),b=i(848),c=i(3321),T=i(49022);let h=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.addedCost=null,this.barrierType=null,this.costs=null,this.curbApproach=null,this.fullEdge=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sideOfEdge=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.type="point-barrier"}readCosts(t,e){return(0,c.DE)(e.attributes,"Attr_")}writeCosts(t,e){(0,c.nY)(t,e,"Attr_")}static fromGraphic(t){var e,i,s;return new r({addedCost:null!==(e=t.attributes.AddedCost)&&void 0!==e?e:null,barrierType:null!=t.attributes.BarrierType?T.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,c.EQ)(JSON.parse(t.attributes.Costs)):null,curbApproach:null!=t.attributes.CurbApproach?T.W7.fromJSON(t.attributes.CurbApproach):null,fullEdge:null!=t.attributes.FullEdge?T.Dd.fromJSON(t.attributes.FullEdge):null,geometry:t.geometry,name:null!==(i=t.attributes.Name)&&void 0!==i?i:null,objectId:null!==(s=t.attributes.ObjectID)&&void 0!==s?s:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,status:null!=t.attributes.Status?T.SS.fromJSON(t.attributes.Status):null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,AddedCost:this.addedCost,BarrierType:null!=this.barrierType?T.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,c.co)(this.costs)):null,CurbApproach:null!=this.curbApproach?T.W7.toJSON(this.curbApproach):null,FullEdge:null!=this.fullEdge?T.Dd.toJSON(this.fullEdge):null,Name:this.name,Status:null!=this.status?T.SS.toJSON(this.status):null};return new o.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};h.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"}],(0,s._)([(0,p.Cb)()],h.prototype,"addedCost",void 0),(0,s._)([(0,p.Cb)({type:T.oi.apiValues,json:{name:"attributes.BarrierType",read:{reader:T.oi.read},write:{writer:T.oi.write}}})],h.prototype,"barrierType",void 0),(0,s._)([(0,p.Cb)()],h.prototype,"costs",void 0),(0,s._)([(0,d.r)("costs",["attributes"])],h.prototype,"readCosts",null),(0,s._)([(0,m.c)("costs")],h.prototype,"writeCosts",null),(0,s._)([(0,p.Cb)({constructOnly:!0,type:T.W7.apiValues,json:{read:{source:"attributes.CurbApproach",reader:T.W7.read}}})],h.prototype,"curbApproach",void 0),(0,s._)([(0,p.Cb)({type:T.Dd.apiValues,json:{name:"attributes.FullEdge",read:{reader:T.Dd.read},write:{writer:T.Dd.write}}})],h.prototype,"fullEdge",void 0),(0,s._)([(0,p.Cb)({type:b.Z,json:{write:!0}})],h.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.Name"}})],h.prototype,"name",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.ObjectID"}})],h.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],h.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)({type:T.BW.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:T.BW.read}}})],h.prototype,"sideOfEdge",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.SourceID"}}})],h.prototype,"sourceId",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.SourceOID"}}})],h.prototype,"sourceOid",void 0),(0,s._)([(0,p.Cb)({type:T.SS.apiValues,json:{read:{source:"attributes.Status",reader:T.SS.read}}})],h.prototype,"status",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],h.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),h=r=(0,s._)([(0,y.j)("esri.rest.support.PointBarrier")],h);const v=h},44745:(t,e,i)=>{i.d(e,{Z:()=>v});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(38511)),y=i(69912),m=i(31201),b=i(80885),c=i(3321),T=i(49022);let h=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polygon-barrier"}readCosts(t,e){return(0,c.DE)(e.attributes,"Attr_")}writeCosts(t,e){(0,c.nY)(t,e,"Attr_")}static fromGraphic(t){var e,i,s;return new r({barrierType:null!=t.attributes.BarrierType?T.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,c.EQ)(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:null!==(e=t.attributes.Name)&&void 0!==e?e:null,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:null!==(s=t.attributes.ScaleFactor)&&void 0!==s?s:null,symbol:t.symbol})}toGraphic(){var t,e;const i={ObjectID:this.objectId,BarrierType:null!=this.barrierType?T.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,c.co)(this.costs)):null,Name:null!==(t=this.name)&&void 0!==t?t:null,ScaleFactor:null!==(e=this.scaleFactor)&&void 0!==e?e:null};return new o.Z({geometry:this.geometry,attributes:i,symbol:this.symbol,popupTemplate:this.popupTemplate})}};h.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],(0,s._)([(0,p.Cb)({type:T.oi.apiValues,json:{name:"attributes.BarrierType",read:{reader:T.oi.read},write:{writer:T.oi.write}}})],h.prototype,"barrierType",void 0),(0,s._)([(0,p.Cb)()],h.prototype,"costs",void 0),(0,s._)([(0,d.r)("costs",["attributes"])],h.prototype,"readCosts",null),(0,s._)([(0,m.c)("costs")],h.prototype,"writeCosts",null),(0,s._)([(0,p.Cb)({type:b.Z,json:{write:!0}})],h.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.Name"}})],h.prototype,"name",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.ObjectID"}})],h.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],h.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)()],h.prototype,"scaleFactor",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],h.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),h=r=(0,s._)([(0,y.j)("esri.rest.support.PolygonBarrier")],h);const v=h},21604:(t,e,i)=>{i.d(e,{Z:()=>h});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(38511)),y=i(69912),m=i(29909),b=i(3321),c=i(49022);let T=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polyline-barrier"}readCosts(t,e){return(0,b.DE)(e.attributes,"Attr_")}static fromGraphic(t){var e,i,s;return new r({barrierType:null!=t.attributes.BarrierType?c.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,b.EQ)(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:null!==(e=t.attributes.Name)&&void 0!==e?e:null,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:null!==(s=t.attributes.ScaleFactor)&&void 0!==s?s:null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:null!=this.barrierType?c.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,b.co)(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new o.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};T.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],(0,s._)([(0,p.Cb)({type:c.oi.apiValues,json:{read:{source:"attributes.BarrierType",reader:c.oi.read}}})],T.prototype,"barrierType",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"costs",void 0),(0,s._)([(0,d.r)("costs",["attributes"])],T.prototype,"readCosts",null),(0,s._)([(0,p.Cb)({type:m.Z,json:{write:!0}})],T.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.Name"}})],T.prototype,"name",void 0),(0,s._)([(0,p.Cb)({json:{name:"attributes.ObjectID"}})],T.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],T.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"scaleFactor",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],T.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=r=(0,s._)([(0,y.j)("esri.rest.support.PolylineBarrier")],T);const h=T},99821:(t,e,i)=>{i.d(e,{Z:()=>h});var r,s=i(27366),o=i(52639),a=i(44055),l=i(51508),n=i(11582),u=i(46784),p=i(49861),d=(i(93169),i(32718),i(84936),i(38511)),y=i(69912),m=i(29909),b=i(3321),c=i(37321);let T=r=class extends((0,n.J)(u.wq)){constructor(t){super(t),this.analysisSettings=null,this.endTime=null,this.endTimeOffset=null,this.firstStopId=null,this.geometry=null,this.lastStopId=null,this.messages=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.startTime=null,this.startTimeOffset=null,this.stopCount=null,this.symbol=null,this.totalCosts=null,this.totalDistance=null,this.totalDuration=null,this.totalLateDuration=null,this.totalViolations=null,this.totalWait=null,this.totalWaitDuration=null,this.type="route-info",this.version="1.0.0"}readEndTime(t,e){return null!=e.attributes.EndTimeUTC?new Date(e.attributes.EndTimeUTC):null}readEndTimeOffset(t,e){return(0,b.pQ)(e.attributes.EndTime,e.attributes.EndTimeUTC)}readStartTime(t,e){return null!=e.attributes.StartTimeUTC?new Date(e.attributes.StartTimeUTC):null}readStartTimeOffset(t,e){return(0,b.pQ)(e.attributes.StartTime,e.attributes.StartTimeUTC)}readTotalCosts(t,e){return(0,b.DE)(e.attributes,"Total_")}readTotalViolations(t,e){return(0,b.DE)(e.attributes,"TotalViolation_")}readTotalWait(t,e){return(0,b.DE)(e.attributes,"TotalWait_")}static fromGraphic(t){var e,i,s,o,a,l,n;return new r({analysisSettings:null!=t.attributes.AnalysisSettings?c.Z.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:null!=t.attributes.EndTime?new Date(t.attributes.EndTime):null,endTimeOffset:null!==(e=t.attributes.EndUTCOffset)&&void 0!==e?e:null,geometry:t.geometry,messages:null!=t.attributes.Messages?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:null!=t.attributes.StartTime?new Date(t.attributes.StartTime):null,startTimeOffset:null!==(s=t.attributes.StartUTCOffset)&&void 0!==s?s:null,symbol:t.symbol,totalCosts:null!=t.attributes.TotalCosts?(0,b.EQ)(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:null!==(o=t.attributes.TotalMeters)&&void 0!==o?o:null,totalDuration:null!==(a=t.attributes.TotalMinutes)&&void 0!==a?a:null,totalLateDuration:null!==(l=t.attributes.TotalLateMinutes)&&void 0!==l?l:null,totalWaitDuration:null!==(n=t.attributes.TotalWaitMinutes)&&void 0!==n?n:null,version:t.attributes.Version})}toGraphic(){const t={ObjectID:this.objectId,AnalysisSettings:null!=this.analysisSettings?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:null!=this.endTime?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:null!=this.messages?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:null!=this.startTime?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:null!=this.totalCosts?JSON.stringify((0,b.co)(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new o.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};T.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString"},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate"},{name:"EndUTCOffset",alias:"End Time Offset",type:"esriFieldTypeInteger"},{name:"Messages",alias:"Messages",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate"},{name:"StartUTCOffset",alias:"Start Time Offset",type:"esriFieldTypeInteger"},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString"},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble"},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble"},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble"},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble"},{name:"Version",alias:"Version",type:"esriFieldTypeString"}],(0,s._)([(0,p.Cb)()],T.prototype,"analysisSettings",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"endTime",void 0),(0,s._)([(0,d.r)("endTime",["attributes.EndTimeUTC"])],T.prototype,"readEndTime",null),(0,s._)([(0,p.Cb)()],T.prototype,"endTimeOffset",void 0),(0,s._)([(0,d.r)("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],T.prototype,"readEndTimeOffset",null),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.FirstStopID"}}})],T.prototype,"firstStopId",void 0),(0,s._)([(0,p.Cb)({type:m.Z})],T.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.LastStopID"}}})],T.prototype,"lastStopId",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"messages",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.Name"}}})],T.prototype,"name",void 0),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.ObjectID"}}})],T.prototype,"objectId",void 0),(0,s._)([(0,p.Cb)({type:a.Z})],T.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"startTime",void 0),(0,s._)([(0,d.r)("startTime",["attributes.StartTimeUTC"])],T.prototype,"readStartTime",null),(0,s._)([(0,p.Cb)()],T.prototype,"startTimeOffset",void 0),(0,s._)([(0,d.r)("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],T.prototype,"readStartTimeOffset",null),(0,s._)([(0,p.Cb)({json:{read:{source:"attributes.StopCount"}}})],T.prototype,"stopCount",void 0),(0,s._)([(0,p.Cb)({types:l.LB})],T.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"totalCosts",void 0),(0,s._)([(0,d.r)("totalCosts",["attributes"])],T.prototype,"readTotalCosts",null),(0,s._)([(0,p.Cb)()],T.prototype,"totalDistance",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"totalDuration",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"totalLateDuration",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"totalViolations",void 0),(0,s._)([(0,d.r)("totalViolations",["attributes"])],T.prototype,"readTotalViolations",null),(0,s._)([(0,p.Cb)()],T.prototype,"totalWait",void 0),(0,s._)([(0,d.r)("totalWait",["attributes"])],T.prototype,"readTotalWait",null),(0,s._)([(0,p.Cb)()],T.prototype,"totalWaitDuration",void 0),(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"version",void 0),T=r=(0,s._)([(0,y.j)("esri.rest.support.RouteInfo")],T);const h=T},37321:(t,e,i)=>{i.d(e,{Z:()=>y});var r=i(27366),s=i(46784),o=i(49861),a=(i(93169),i(32718),i(84936),i(38511)),l=i(69912),n=i(31201),u=i(49022),p=i(77279);let d=class extends s.wq{constructor(t){super(t),this.accumulateAttributes=null,this.directionsLanguage=null,this.findBestSequence=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.startTimeIsUTC=null,this.timeWindowsAreUTC=null,this.travelMode=null}readAccumulateAttributes(t){return null==t?null:t.map((t=>u.Ul.fromJSON(t)))}writeAccumulateAttributes(t,e,i){(null===t||void 0===t?void 0:t.length)&&(e[i]=t.map((t=>u.Ul.toJSON(t))))}};(0,r._)([(0,o.Cb)({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],d.prototype,"accumulateAttributes",void 0),(0,r._)([(0,a.r)("accumulateAttributes")],d.prototype,"readAccumulateAttributes",null),(0,r._)([(0,n.c)("accumulateAttributes")],d.prototype,"writeAccumulateAttributes",null),(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"directionsLanguage",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"findBestSequence",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"preserveFirstStop",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"preserveLastStop",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"startTimeIsUTC",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"timeWindowsAreUTC",void 0),(0,r._)([(0,o.Cb)({type:p.Z,json:{write:!0}})],d.prototype,"travelMode",void 0),d=(0,r._)([(0,l.j)("esri.rest.support.RouteSettings")],d);const y=d}}]);
//# sourceMappingURL=29417.96d9d889.chunk.js.map