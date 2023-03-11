"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[552],{9082:(e,t,n)=>{n.d(t,{L:()=>s,V:()=>o});var a=n(6145),r=n(9385);const s=new a.g6(`${location.pathname}graphql`,{headers:{}}),o=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},3552:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var a=n(2784),r=n(6145),s=n(7598),o=n(3919),c=n(7984),l=n(9082);const i=r.Ps`
  mutation AddMeasurement($measurement: MeasurementInput!) {
    addMeasurement(measurement: $measurement)
  }
`,u=r.Ps`
  mutation RemoveMeasurements($ids: [ID!]) {
    removeMeasurements(ids: $ids)
  }
`,m=r.Ps`
  query GetMeasurements {
    getMeasurements {
      date
      temperature
      humidity
    }
  }
`,d=r.Ps`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,f=new class extends class{client=l.L;subscriptions=l.V}{addMeasurement(e){return(0,s.D)(this.client.request(i,{measurement:e}))}removeMeasurements(e){return(0,s.D)(this.client.request(u,{ids:e}))}getMeasurements(){return(0,s.D)(this.client.request(m)).pipe((0,c.U)((({getMeasurements:e})=>e)))}onSensor(){return new o.y((e=>this.subscriptions.subscribe({query:d},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};var g=n(5068),v=n(2855);function h({removeMeasurements:e,measurements:t}){const[n,r]=(0,a.useState)((()=>[]));return a.createElement("section",{className:v.Z.Measurements},a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,a.createElement("input",{type:"checkbox",checked:n.length===t.length,onChange:(0,a.useCallback)((({target:e})=>r(e.checked?t.map((({id:e})=>e)):[])),[])})),a.createElement("th",null,"Date"),a.createElement("th",null,"Temperature"),a.createElement("th",null,"Humidity")),t.map(((e,t)=>[a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("input",{type:"checkbox",checked:n.includes(e.id),onChange:(0,a.useCallback)((({target:t})=>r((n=>t.checked?n.concat(e.id):n.filter((t=>t!==e.id))))),[])})),a.createElement("td",null,(0,g.Z)(Number(e.date),"yyyy-MM-dd, HH:mm:ss")),a.createElement("td",{align:"right"},`${new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.temperature)}°C`),a.createElement("td",{align:"right"},`${new Intl.NumberFormat("pl-PL",{minimumFractionDigits:2}).format(e.humidity)}%`))])))),a.createElement("button",{disabled:0===n.length,onClick:(0,a.useCallback)((()=>e(n)),[n])},"removeMeasurements"))}function b({addMeasurement:e,removeMeasurements:t,measurements:n}){const r=(0,a.useMemo)((()=>n&&n.map((e=>({id:e.date,date:Number(e.date),...e}))).sort(((e,t)=>t.date-e.date))),[n]);return a.createElement("section",null,a.createElement("span",null,"Measurements"),a.createElement("button",{onClick:(0,a.useCallback)((()=>e({date:Date.now(),temperature:22,humidity:60})),[])},"addMeasurement"),null===n?a.createElement("div",null,"Loading..."):a.createElement(h,{removeMeasurements:t,measurements:r}))}var p=n(2401);const A=console.log,M=A,C=A;function E(e){console.error(e)}function S(){console.log("Disconnected.")}let y,k,w,B,D,L,P,T,N=null;function F(e){N.gatt.connect().then((e=>(M("Found GATT server"),B=e,B.getPrimaryService("00010203-0405-0607-0809-0a0b0c0d1912")))).then((e=>(M("Found service"),D=e,D.getCharacteristic("00010203-0405-0607-0809-0a0b0c0d2b12")))).then((t=>{M("Found write characteristic"),L=t,function(e){B.getPrimaryServices().then((t=>{P=!1,T=!1;for(var n=0;n<t.length;n++)console.log("Services: "+t[n].uuid),"ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6"==t[n].uuid&&(P=!0),"00001f10-0000-1000-8000-00805f9b34fb"==t[n].uuid&&(T=!0);P?(A("Detected Mi Thermometer"),C("Detected Mi Thermometer"),function(e){B.getPrimaryService("ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6").then((e=>(M("Found Main service"),y=e,y.getCharacteristic("ebe0ccd8-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((e=>(M("Found Write characteristic Speed"),k=e,y.getCharacteristic("ebe0ccc1-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((t=>(M("Found Temp characteristic"),w=t,w.startNotifications().then((()=>{w.addEventListener("characteristicvaluechanged",(t=>{var n=t.target.value;console.log({value:n});var a=128&n.getUint8(1),r=(127&n.getUint8(1))<<8|n.getUint8(0);a&&(r-=32767),r/=100;var s=n.getUint8(2),o="Temp/Humi: "+r+"°C / "+s+"%";document.getElementById("tempHumiData").innerHTML=o,M(o),e({date:Date.now(),temperature:r,humidity:s})}))}))))).catch(E)}(e)):T?(A("Detected custom Firmware"),C("Detected custom Firmware")):(A("Connected"),C("Connected"))})).catch(E)}(e)})).catch(E)}function Y(){const[{measurements:e,values:t},{addMeasurement:n,removeMeasurements:r}]=function(){const[{measurements:e,values:t},n]=(0,a.useState)((()=>({measurements:null,values:null})));return(0,a.useEffect)((()=>{const e=[f.onSensor().subscribe((({sensor:e})=>n((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return f.getMeasurements().subscribe((e=>n((t=>({...t,measurements:e}))))),()=>{e.map((e=>e.unsubscribe()))}}),[]),[{measurements:e,values:t},{addMeasurement:e=>f.addMeasurement(e),removeMeasurements:e=>f.removeMeasurements(e)}]}();console.log({measurements:e,values:t}),(0,a.useEffect)((()=>{}),[]);const s=(0,a.useCallback)((e=>{null!==N&&N.gatt.disconnect(),A("Reconnect"),F(n)}),[n]),o=(0,a.useCallback)((e=>{const t={filters:[{name:"LYWSD03MMC"},{services:[65173]}],optionalServices:["00010203-0405-0607-0809-0a0b0c0d1912","ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6",65173,7952]};navigator.bluetooth.getAvailability().then((e=>{e&&navigator.bluetooth.requestDevice(t).then((e=>{console.log({device:e}),N=e,function(e){const t=new AbortController;e.addEventListener("advertisementreceived",(n=>{console.log('Received advertisement from "'+e.name+'"...'),n.serviceData.forEach((t=>{const a=new Uint8Array(t.buffer);console.log(a,e,n),"LYWSD03MMC"==e.name&&(console.log("LYWSD03MMC MAC:",a[10].toString(16),a[9].toString(16),a[8].toString(16),a[7].toString(16),a[6].toString(16),a[5].toString(16)),document.getElementById("MAC").innerHTML="LYWSD03MMC MAC: "+a[10].toString(16)+a[9].toString(16)+a[8].toString(16)+a[7].toString(16)+a[6].toString(16)+a[5].toString(16)),e.name.startsWith("ATC")?(console.log("ATC MAC:",a[0].toString(16),a[1].toString(16),a[2].toString(16),a[3].toString(16),a[4].toString(16),a[5].toString(16)),document.getElementById("MAC").innerHTML="ATC MAC: "+a[0].toString(16)+a[1].toString(16)+a[2].toString(16)+a[3].toString(16)+a[4].toString(16)+a[5].toString(16)):console.log("only LYWSD03MMC/ATC supported")})),t.abort()}),{once:!0})}(e),N.addEventListener("gattserverdisconnected",S),A("Connecting to: "+N.name),F(n)})).catch(E)}))}),[n]);return a.createElement("section",{className:p.Z.Section},a.createElement("span",null,"LYWSD03MMC"),a.createElement("button",{onClick:o},"Connect"),a.createElement("button",{onClick:s},"Reconnect"),a.createElement(b,{addMeasurement:n,removeMeasurements:r,measurements:e}),a.createElement("span",{id:"tempHumiData"}),a.createElement("span",{id:"MAC"}),null===t?a.createElement("div",null,"Loading..."):t.map(((e,t)=>a.createElement("div",{key:t},JSON.stringify(e)))))}},2148:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(272),r=n.n(a),s=n(2609),o=n.n(s)()(r());o.push([e.id,".zVsfBLYd_QBXGtNvyP3i{font-family:Arial,Helvetica,sans-serif;font-size:.7em}.zVsfBLYd_QBXGtNvyP3i table{border-collapse:collapse}.zVsfBLYd_QBXGtNvyP3i table tr:hover{background-color:#e0e0e0}.zVsfBLYd_QBXGtNvyP3i tr:nth-child(even){background-color:#f7f7f7}.zVsfBLYd_QBXGtNvyP3i th,.zVsfBLYd_QBXGtNvyP3i td{padding:.25em}","",{version:3,sources:["webpack://./../web/src/containers/Sensor/Measurements/styles.module.scss"],names:[],mappings:"AAAA,sBACE,sCAAA,CACA,cAAA,CACA,4BACE,wBAAA,CAEE,qCACE,wBAAA,CAKJ,yCACE,wBAAA,CAGJ,kDAEE,aAAA",sourcesContent:[".Measurements {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.7em;\n  table {\n    border-collapse: collapse;\n    tr {\n      &:hover {\n        background-color: #e0e0e0;\n      }\n    }\n  }\n  tr {\n    &:nth-child(even) {\n      background-color: #f7f7f7;\n    }\n  }\n  th,\n  td {\n    padding: 0.25em;\n  }\n}\n"],sourceRoot:""}]),o.locals={Measurements:"zVsfBLYd_QBXGtNvyP3i"};const c=o},1408:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(272),r=n.n(a),s=n(2609),o=n.n(s)()(r());o.push([e.id,".BUVMpFXG9cmk5ZtAw0Oh{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Sensor/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),o.locals={Section:"BUVMpFXG9cmk5ZtAw0Oh"};const c=o},2855:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(6062),r=n.n(a),s=n(4036),o=n.n(s),c=n(6793),l=n.n(c),i=n(7892),u=n.n(i),m=n(1173),d=n.n(m),f=n(2464),g=n.n(f),v=n(2148),h={};h.styleTagTransform=g(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d();var b=r()(v.default,h);if(!v.default.locals||e.hot.invalidate){var p=!v.default.locals,A=p?v:v.default.locals;e.hot.accept(2148,(t=>{v=n(2148),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(A,p?v:v.default.locals,p)?(A=p?v:v.default.locals,b(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const M=v.default&&v.default.locals?v.default.locals:void 0},2401:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(6062),r=n.n(a),s=n(4036),o=n.n(s),c=n(6793),l=n.n(c),i=n(7892),u=n.n(i),m=n(1173),d=n.n(m),f=n(2464),g=n.n(f),v=n(1408),h={};h.styleTagTransform=g(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d();var b=r()(v.default,h);if(!v.default.locals||e.hot.invalidate){var p=!v.default.locals,A=p?v:v.default.locals;e.hot.accept(1408,(t=>{v=n(1408),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(A,p?v:v.default.locals,p)?(A=p?v:v.default.locals,b(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const M=v.default&&v.default.locals?v.default.locals:void 0}}]);
//# sourceMappingURL=552.js.map