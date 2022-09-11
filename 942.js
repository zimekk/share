"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[942],{1828:(e,t,s)=>{s.d(t,{K2:()=>E,Yg:()=>R,zO:()=>M,y_:()=>T,VT:()=>G,RY:()=>D});var n=s(2784),o=s(6647),a=s(4489),l=s(9385);const r=new o.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=r;subscriptions=u}const i=o.gql`
  query {
    files {
      name
    }
  }
`,m=o.gql`
  query {
    hello
  }
`;var d=s(8141);const b=o.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,g=o.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,p=o.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,f=o.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,C=o.gql`
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
`,h=o.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,k=o.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,S=o.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,y=o.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,v=o.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class E extends c{getMessages(){return(0,a.D)(this.client.request(k))}getRemoteTv(e){return(0,a.D)(this.client.request(S,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request(v,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:y},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const q=new class extends c{hello(){return(0,a.D)(this.client.request(m))}};function M(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[q.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const w=new class extends c{getMessages(){return(0,a.D)(this.client.request(b))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:g},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function T(){const[{messages:e},t]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[w.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),w.onMessage().subscribe((({message:e})=>t((({messages:t,...s})=>({...s,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>w.sendMessage(e)}]}const x=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function G(){const[{values:e},t]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[x.onSensor().subscribe((({sensor:e})=>t((({values:t,...s})=>({...s,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const A=new class extends c{sendSignal(e){return(0,a.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:C},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function D(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[A.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>A.sendSignal(e)}]}const I=new class extends c{files(){return(0,a.D)(this.client.request(i))}};function R(){const[e,t]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3942:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i,schema:()=>c});var n=s(2784),o=s(1828),a=s(4371);const l=new o.K2;async function r(e="KeyStandBy"){await fetch("http://192.168.2.101:8080/control/rcu",{method:"POST",mode:"no-cors",body:`Keypress=${e}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>e.text())).then(console.log)}async function u(e){fetch(`http://192.168.0.103/YamahaExtendedControl/v1/${e}`,{method:"GET",mode:"no-cors"}).then((e=>e.text())).then(console.log)}const c=()=>{console.log(["schema"])};function i(){const[{data:e},{remoteTv:t,status:s}]=function(){const[{data:e},t]=(0,n.useState)((()=>({data:null})));return(0,n.useEffect)((()=>{const e=[l.onMessage().subscribe((({data:e})=>t({data:e})))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{data:e},{remoteTv:e=>l.getRemoteTv(e),status:()=>l.getMessages(),sendMessage:e=>l.sendMessage(e)}]}();console.log({data:e}),(0,n.useEffect)((()=>{}),[]);const o=(0,n.useCallback)((e=>s()),[]),c=(0,n.useCallback)((e=>r("KeyStandBy")),[]),i=(0,n.useCallback)((e=>r("KeyVolumeDown")),[]),m=(0,n.useCallback)((e=>r("KeyVolumeUp")),[]),d=(0,n.useCallback)((e=>u("system/getDeviceInfo")),[]),b=(0,n.useCallback)((e=>u("system/getFeatures")),[]),g=(0,n.useCallback)((e=>u("main/getStatus")),[]),p=(0,n.useCallback)((e=>u("main/setVolume?volume=70")),[]),f=(0,n.useCallback)((e=>u("main/setVolume?volume=90")),[]),C=(0,n.useCallback)((e=>t("GetVolume")),[]),h=(0,n.useCallback)((e=>t("SetVolume")),[]),k=(0,n.useCallback)((e=>t("GetMute")),[]),S=(0,n.useCallback)((e=>t("ListPresets")),[]),y=(0,n.useCallback)((e=>t("SetMute")),[]),v=(0,n.useCallback)((e=>t("X_SendKey")),[]),E=(0,n.useCallback)((e=>t("X_LaunchApp")),[]),q=(0,n.useCallback)((e=>t("X_DisplayPinCode")),[]),M=(0,n.useCallback)((e=>t("X_RequestAuth")),[]),w=(0,n.useCallback)((e=>t("X_GetAudioList")),[]),T=(0,n.useCallback)((e=>t("X_GetCurrentAudioID")),[]),x=(0,n.useCallback)((e=>t("GetCurrentConnectionIDs")),[]),G=(0,n.useCallback)((e=>t("GetMediaInfo")),[]),A=(0,n.useCallback)((e=>t("GetProtocolInfo")),[]);return n.createElement("section",{className:a.Z.Section},n.createElement("button",{onClick:o},"Version"),n.createElement("button",{onClick:c},"StandBy"),n.createElement("button",{onClick:i},"Volume -"),n.createElement("button",{onClick:m},"Volume +"),n.createElement("button",{onClick:d},"GetDeviceInfo"),n.createElement("button",{onClick:b},"GetFeatures"),n.createElement("button",{onClick:g},"GetStatus"),n.createElement("button",{onClick:p},"SetVolume 70%"),n.createElement("button",{onClick:f},"SetVolume 90%"),n.createElement("button",{onClick:C},"GetVolume"),n.createElement("button",{onClick:h},"SetVolumeTv"),n.createElement("button",{onClick:k},"GetMuteTv"),n.createElement("button",{onClick:y},"SetMuteTv"),n.createElement("button",{onClick:S},"ListPresetsTv"),n.createElement("button",{onClick:v},"SendKeyTv"),n.createElement("button",{onClick:E},"AppTypeTv"),n.createElement("button",{onClick:q},"PinCodeTv"),n.createElement("button",{onClick:M},"RequestAuthTv"),n.createElement("button",{onClick:w},"GetAudioList"),n.createElement("button",{onClick:T},"GetCurrentAudioID"),n.createElement("button",{onClick:x},"GetCurrentConnectionIDs"),n.createElement("button",{onClick:G},"GetMediaInfo"),n.createElement("button",{onClick:A},"GetProtocolInfo"),null===e?n.createElement("div",null,"Loading..."):n.createElement("pre",null,JSON.stringify(e,null,2)))}},5071:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(272),o=s.n(n),a=s(2609),l=s.n(a)()(o());l.push([e.id,".DeTwnNnGKuydH91RohQA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Section:"DeTwnNnGKuydH91RohQA"};const r=l},4371:(e,t,s)=>{s.d(t,{Z:()=>S});var n=s(6062),o=s.n(n),a=s(4036),l=s.n(a),r=s(6793),u=s.n(r),c=s(7892),i=s.n(c),m=s(1173),d=s.n(m),b=s(2464),g=s.n(b),p=s(5071),f={};f.styleTagTransform=g(),f.setAttributes=i(),f.insert=u().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=d();var C=o()(p.default,f);if(!p.default.locals||e.hot.invalidate){var h=!p.default.locals,k=h?p:p.default.locals;e.hot.accept(5071,(t=>{p=s(5071),function(e,t,s){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!s||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(s&&"default"===n||e[n]))return!1;return!0}(k,h?p:p.default.locals,h)?(k=h?p:p.default.locals,C(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){C()}));const S=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=942.js.map