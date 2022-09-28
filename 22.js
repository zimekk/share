"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[22],{1828:(e,t,n)=>{n.d(t,{K2:()=>D,Yg:()=>I,zO:()=>E,y_:()=>R,VT:()=>k,RY:()=>L});var s=n(2784),r=n(6647),o=n(4489),a=n(9385);const c=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class l{client=c;subscriptions=i}const u=r.gql`
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
`,b=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,f=r.gql`
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
`,v=r.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,M=r.gql`
  query RemoteTvQuery($key: String) {
    remoteRcu(key: $key) {
      data
    }
  }
`,y=r.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,q=r.gql`
  query RemoteVcrQuery($action: String) {
    remoteVcr(action: $action) {
      data
    }
  }
`,C=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,A=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class D extends l{getMessages(){return(0,o.D)(this.client.request(v))}getRemoteRcu(e){return(0,o.D)(this.client.request(M,{key:e}))}getRemoteTv(e){return(0,o.D)(this.client.request(y,{action:e}))}getRemoteVcr(e){return(0,o.D)(this.client.request(q,{action:e}))}sendMessage(e){return(0,o.D)(this.client.request(A,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:C},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const w=new class extends l{hello(){return(0,o.D)(this.client.request(g))}};function E(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[w.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const T=new class extends l{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(f,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function R(){const[{messages:e},t]=(0,s.useState)((()=>({messages:null})));return(0,s.useEffect)((()=>{const e=[T.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),T.onMessage().subscribe((({message:e})=>t((({messages:t,...n})=>({...n,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>T.sendMessage(e)}]}const x=new class extends l{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function k(){const[{values:e},t]=(0,s.useState)((()=>({values:null})));return(0,s.useEffect)((()=>{const e=[x.onSensor().subscribe((({sensor:e})=>t((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const $=new class extends l{sendSignal(e){return(0,o.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:S},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function L(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[$.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>$.sendSignal(e)}]}const F=new class extends l{files(){return(0,o.D)(this.client.request(u))}};function I(){const[e,t]=(0,s.useState)({files:null});return(0,s.useEffect)((()=>{const e=[F.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(2784),r=n(1828),o=n(2401);const a=console.log,c=a,i=a;function l(e){console.error(e)}function u(){console.log("Disconnected.")}let g,d,m,b,f,p,S,h,v=null;function M(){v.gatt.connect().then((e=>(c("Found GATT server"),b=e,b.getPrimaryService("00010203-0405-0607-0809-0a0b0c0d1912")))).then((e=>(c("Found service"),f=e,f.getCharacteristic("00010203-0405-0607-0809-0a0b0c0d2b12")))).then((e=>{c("Found write characteristic"),p=e,b.getPrimaryServices().then((e=>{S=!1,h=!1;for(var t=0;t<e.length;t++)console.log("Services: "+e[t].uuid),"ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6"==e[t].uuid&&(S=!0),"00001f10-0000-1000-8000-00805f9b34fb"==e[t].uuid&&(h=!0);S?(a("Detected Mi Thermometer"),i("Detected Mi Thermometer"),b.getPrimaryService("ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6").then((e=>(c("Found Main service"),g=e,g.getCharacteristic("ebe0ccd8-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((e=>(c("Found Write characteristic Speed"),d=e,g.getCharacteristic("ebe0ccc1-7a0a-4b0c-8a1a-6ff2997da3a6")))).then((e=>(c("Found Temp characteristic"),m=e,m.startNotifications().then((()=>{m.addEventListener("characteristicvaluechanged",(e=>{var t=e.target.value;console.log({value:t});var n=128&t.getUint8(1),s=(127&t.getUint8(1))<<8|t.getUint8(0);n&&(s-=32767);var r="Temp/Humi: "+(s/=100)+"°C / "+t.getUint8(2)+"%";document.getElementById("tempHumiData").innerHTML=r,c(r)}))}))))).catch(l)):h?(a("Detected custom Firmware"),i("Detected custom Firmware")):(a("Connected"),i("Connected"))})).catch(l)})).catch(l)}function y(){const[{values:e}]=(0,r.VT)();console.log({values:e}),(0,s.useEffect)((()=>{}),[]);const t=(0,s.useCallback)((e=>{null!==v&&v.gatt.disconnect(),a("Reconnect"),M()}),[]),n=(0,s.useCallback)((e=>{const t={filters:[{name:"LYWSD03MMC"},{services:[65173]}],optionalServices:["00010203-0405-0607-0809-0a0b0c0d1912","ebe0ccb0-7a0a-4b0c-8a1a-6ff2997da3a6",65173,7952]};navigator.bluetooth.getAvailability().then((e=>{e&&navigator.bluetooth.requestDevice(t).then((e=>{console.log({device:e}),v=e,function(e){const t=new AbortController;e.addEventListener("advertisementreceived",(n=>{console.log('Received advertisement from "'+e.name+'"...'),n.serviceData.forEach((t=>{const s=new Uint8Array(t.buffer);console.log(s,e,n),"LYWSD03MMC"==e.name&&(console.log("LYWSD03MMC MAC:",s[10].toString(16),s[9].toString(16),s[8].toString(16),s[7].toString(16),s[6].toString(16),s[5].toString(16)),document.getElementById("MAC").innerHTML="LYWSD03MMC MAC: "+s[10].toString(16)+s[9].toString(16)+s[8].toString(16)+s[7].toString(16)+s[6].toString(16)+s[5].toString(16)),e.name.startsWith("ATC")?(console.log("ATC MAC:",s[0].toString(16),s[1].toString(16),s[2].toString(16),s[3].toString(16),s[4].toString(16),s[5].toString(16)),document.getElementById("MAC").innerHTML="ATC MAC: "+s[0].toString(16)+s[1].toString(16)+s[2].toString(16)+s[3].toString(16)+s[4].toString(16)+s[5].toString(16)):console.log("only LYWSD03MMC/ATC supported")})),t.abort()}),{once:!0})}(e),v.addEventListener("gattserverdisconnected",u),a("Connecting to: "+v.name),M()})).catch(l)}))}),[]);return s.createElement("section",{className:o.Z.Section},s.createElement("span",null,"LYWSD03MMC"),s.createElement("button",{onClick:n},"Connect"),s.createElement("button",{onClick:t},"Reconnect"),s.createElement("span",{id:"tempHumiData"}),s.createElement("span",{id:"MAC"}),null===e?s.createElement("div",null,"Loading..."):e.map(((e,t)=>s.createElement("div",{key:t},JSON.stringify(e)))))}},1408:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(272),r=n.n(s),o=n(2609),a=n.n(o)()(r());a.push([e.id,".BUVMpFXG9cmk5ZtAw0Oh{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Sensor/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),a.locals={Section:"BUVMpFXG9cmk5ZtAw0Oh"};const c=a},2401:(e,t,n)=>{n.d(t,{Z:()=>M});var s=n(6062),r=n.n(s),o=n(4036),a=n.n(o),c=n(6793),i=n.n(c),l=n(7892),u=n.n(l),g=n(1173),d=n.n(g),m=n(2464),b=n.n(m),f=n(1408),p={};p.styleTagTransform=b(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=d();var S=r()(f.default,p);if(!f.default.locals||e.hot.invalidate){var h=!f.default.locals,v=h?f:f.default.locals;e.hot.accept(1408,(t=>{f=n(1408),function(e,t,n){if(!e&&t||e&&!t)return!1;var s;for(s in e)if((!n||"default"!==s)&&e[s]!==t[s])return!1;for(s in t)if(!(n&&"default"===s||e[s]))return!1;return!0}(v,h?f:f.default.locals,h)?(v=h?f:f.default.locals,S(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){S()}));const M=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=22.js.map