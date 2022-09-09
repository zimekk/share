"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[22],{310:(e,t,n)=>{n.d(t,{Yg:()=>T,zO:()=>M,y_:()=>A,VT:()=>E,RY:()=>q});var s=n(2784),r=n(6647),a=n(4489),o=n(9385);const c=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class l{client=c;subscriptions=i}const u=r.gql`
  query {
    files {
      name
    }
  }
`,g=r.gql`
  query {
    hello
  }
`;var d=n(8141);const m=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,f=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,b=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,p=r.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,S=r.gql`
  subscription SignalSubscription {
    signal {
      sdp
      type
      candidate {
        candidate
        sdpMLineIndex
        sdpMid
      }
    }
  }
`,h=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,v=new class extends l{hello(){return(0,a.D)(this.client.request(g))}};function M(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[v.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const C=new class extends l{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function A(){const[{messages:e},t]=(0,s.useState)((()=>({messages:null})));return(0,s.useEffect)((()=>{const e=[C.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),C.onMessage().subscribe((({message:e})=>t((({messages:t,...n})=>({...n,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>C.sendMessage(e)}]}const y=new class extends l{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function E(){const[{values:e},t]=(0,s.useState)((()=>({values:null})));return(0,s.useEffect)((()=>{const e=[y.onSensor().subscribe((({sensor:e})=>t((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const w=new class extends l{sendSignal(e){return(0,a.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:S},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function q(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[w.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>w.sendSignal(e)}]}const D=new class extends l{files(){return(0,a.D)(this.client.request(u))}};function T(){const[e,t]=(0,s.useState)({files:null});return(0,s.useEffect)((()=>{const e=[D.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var s=n(2784),r=n(310),a=n(2401);const o=console.log,c=o,i=o;function l(e){console.error(e)}function u(){console.log("Disconnected.")}let g,d,m,f,b,p,S,h,v=null;function M(){v.gatt.connect().then((e=>(c("Found GATT server"),f=e,f.getPrimaryService("00010203-0405-0607-0809-0a0b0c0d1912")))).then((e=>(c("Found service"),b=e,b.getCharacteristic("00010203-0405-0607-0809-0a0b0c0d2b12")))).then((e=>{c("Found write characteristic"),p=e,f.getPrimaryServices().then((e=>{S=!1,h=!1;for(var t=0;t<e.length;t++)console.log("Services: "+e[t].uuid),"ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6"==e[t].uuid&&(S=!0),"00001f10-0000-1000-8000-00805f9b34fb"==e[t].uuid&&(h=!0);S?(o("Detected Mi Thermometer"),i("Detected Mi Thermometer"),f.getPrimaryService("ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6").then((e=>(c("Found Main service"),g=e,g.getCharacteristic("ebe0ccd8-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((e=>(c("Found Write characteristic Speed"),d=e,g.getCharacteristic("ebe0ccc1-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((e=>(c("Found Temp characteristic"),m=e,m.startNotifications().then((()=>{m.addEventListener("characteristicvaluechanged",(e=>{var t=e.target.value;console.log({value:t});var n=128&t.getUint8(1),s=(127&t.getUint8(1))<<8|t.getUint8(0);n&&(s-=32767);var r="Temp/Humi: "+(s/=100)+"°C / "+t.getUint8(2)+"%";document.getElementById("tempHumiData").innerHTML=r,c(r)}))}))))).catch(l)):h?(o("Detected custom Firmware"),i("Detected custom Firmware")):(o("Connected"),i("Connected"))})).catch(l)})).catch(l)}function C(){const[{values:e}]=(0,r.VT)();console.log({values:e}),(0,s.useEffect)((()=>{}),[]);const t=(0,s.useCallback)((e=>{null!==v&&v.gatt.disconnect(),o("Reconnect"),M()}),[]),n=(0,s.useCallback)((e=>{const t={filters:[{name:"LYWSD03MMC"},{services:[65173]}]};navigator.bluetooth.getAvailability().then((e=>{e&&navigator.bluetooth.requestDevice(t).then((e=>{console.log({device:e}),v=e,function(e){const t=new AbortController;e.addEventListener("advertisementreceived",(n=>{console.log('Received advertisement from "'+e.name+'"...'),n.serviceData.forEach((t=>{const s=new Uint8Array(t.buffer);console.log(s,e,n),"LYWSD03MMC"==e.name&&(console.log("LYWSD03MMC MAC:",s[10].toString(16),s[9].toString(16),s[8].toString(16),s[7].toString(16),s[6].toString(16),s[5].toString(16)),document.getElementById("MAC").innerHTML="LYWSD03MMC MAC: "+s[10].toString(16)+s[9].toString(16)+s[8].toString(16)+s[7].toString(16)+s[6].toString(16)+s[5].toString(16)),e.name.startsWith("ATC")?(console.log("ATC MAC:",s[0].toString(16),s[1].toString(16),s[2].toString(16),s[3].toString(16),s[4].toString(16),s[5].toString(16)),document.getElementById("MAC").innerHTML="ATC MAC: "+s[0].toString(16)+s[1].toString(16)+s[2].toString(16)+s[3].toString(16)+s[4].toString(16)+s[5].toString(16)):console.log("only LYWSD03MMC/ATC supported")})),t.abort()}),{once:!0})}(e),v.addEventListener("gattserverdisconnected",u),o("Connecting to: "+v.name),M()})).catch(l)}))}),[]);return s.createElement("section",{className:a.Z.Section},s.createElement("span",null,"LYWSD03MMC"),s.createElement("button",{onClick:n},"Connect"),s.createElement("button",{onClick:t},"Reconnect"),s.createElement("span",{id:"tempHumiData"}),s.createElement("span",{id:"MAC"}),null===e?s.createElement("div",null,"Loading..."):e.map(((e,t)=>s.createElement("div",{key:t},JSON.stringify(e)))))}},1408:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(272),r=n.n(s),a=n(2609),o=n.n(a)()(r());o.push([e.id,".BUVMpFXG9cmk5ZtAw0Oh{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Sensor/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),o.locals={Section:"BUVMpFXG9cmk5ZtAw0Oh"};const c=o},2401:(e,t,n)=>{n.d(t,{Z:()=>M});var s=n(6062),r=n.n(s),a=n(4036),o=n.n(a),c=n(6793),i=n.n(c),l=n(7892),u=n.n(l),g=n(1173),d=n.n(g),m=n(2464),f=n.n(m),b=n(1408),p={};p.styleTagTransform=f(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d();var S=r()(b.default,p);if(!b.default.locals||e.hot.invalidate){var h=!b.default.locals,v=h?b:b.default.locals;e.hot.accept(1408,(t=>{b=n(1408),function(e,t,n){if(!e&&t||e&&!t)return!1;var s;for(s in e)if((!n||"default"!==s)&&e[s]!==t[s])return!1;for(s in t)if(!(n&&"default"===s||e[s]))return!1;return!0}(v,h?b:b.default.locals,h)?(v=h?b:b.default.locals,S(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){S()}));const M=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=22.js.map