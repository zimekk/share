"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[931],{1828:(e,t,n)=>{n.d(t,{K2:()=>q,Yg:()=>$,zO:()=>R,y_:()=>x,VT:()=>A,RY:()=>T});var s=n(2784),o=n(6647),a=n(4489),l=n(9385);const r=new o.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=r;subscriptions=u}const i=o.gql`
  query {
    files {
      name
    }
  }
`,m=o.gql`
  query {
    hello
  }
`;var d=n(8141);const b=o.gql`
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
`,k=o.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=o.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,y=o.gql`
  query RemoteTvQuery($key: String) {
    remoteRcu(key: $key) {
      data
    }
  }
`,S=o.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,E=o.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,v=o.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class q extends c{getMessages(){return(0,a.D)(this.client.request(h))}getRemoteRcu(e){return(0,a.D)(this.client.request(y,{key:e}))}getRemoteTv(e){return(0,a.D)(this.client.request(S,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request(v,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:E},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const M=new class extends c{hello(){return(0,a.D)(this.client.request(m))}};function R(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[M.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const w=new class extends c{getMessages(){return(0,a.D)(this.client.request(b))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:g},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function x(){const[{messages:e},t]=(0,s.useState)((()=>({messages:null})));return(0,s.useEffect)((()=>{const e=[w.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),w.onMessage().subscribe((({message:e})=>t((({messages:t,...n})=>({...n,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>w.sendMessage(e)}]}const G=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function A(){const[{values:e},t]=(0,s.useState)((()=>({values:null})));return(0,s.useEffect)((()=>{const e=[G.onSensor().subscribe((({sensor:e})=>t((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const D=new class extends c{sendSignal(e){return(0,a.D)(this.client.request(k,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:C},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function T(){const[e,t]=(0,s.useState)({hello:null});return(0,s.useEffect)((()=>{const e=[D.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>D.sendSignal(e)}]}const I=new class extends c{files(){return(0,a.D)(this.client.request(i))}};function $(){const[e,t]=(0,s.useState)({files:null});return(0,s.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(2784),o=n(1828);async function a(e="KeyStandBy"){return await fetch("http://192.168.2.101:8080/control/rcu",{method:"POST",mode:"no-cors",body:`Keypress=${e}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>e.text())).then(console.log)}function l({remoteRcu:e,status:t}){const n=(0,s.useCallback)((e=>t()),[]),o=(0,s.useCallback)((e=>a("KeyStandBy")),[]),l=(0,s.useCallback)((e=>a("KeyVolumeDown")),[]),r=(0,s.useCallback)((t=>e("KeyVolumeUp")),[]);return s.createElement("div",null,s.createElement("button",{onClick:n},"Version"),s.createElement("button",{onClick:o},"StandBy"),s.createElement("button",{onClick:l},"Volume -"),s.createElement("button",{onClick:r},"Volume +"))}function r({remoteTv:e}){const t=(0,s.useCallback)((t=>e("GetVolume")),[]),n=(0,s.useCallback)((t=>e("SetVolume")),[]),o=(0,s.useCallback)((t=>e("GetMute")),[]),a=(0,s.useCallback)((t=>e("ListPresets")),[]),l=(0,s.useCallback)((t=>e("SetMute")),[]),r=(0,s.useCallback)((t=>e("X_SendKey")),[]),u=(0,s.useCallback)((t=>e("X_LaunchApp")),[]),c=(0,s.useCallback)((t=>e("X_DisplayPinCode")),[]),i=(0,s.useCallback)((t=>e("X_RequestAuth")),[]),m=(0,s.useCallback)((t=>e("X_GetAudioList")),[]),d=(0,s.useCallback)((t=>e("X_GetCurrentAudioID")),[]),b=(0,s.useCallback)((t=>e("GetCurrentConnectionIDs")),[]),g=(0,s.useCallback)((t=>e("GetMediaInfo")),[]),p=(0,s.useCallback)((t=>e("GetProtocolInfo")),[]);return s.createElement("div",null,s.createElement("button",{onClick:t},"GetVolume"),s.createElement("button",{onClick:n},"SetVolume"),s.createElement("button",{onClick:o},"GetMute"),s.createElement("button",{onClick:l},"SetMute"),s.createElement("button",{onClick:a},"ListPresets"),s.createElement("button",{onClick:r},"SendKey"),s.createElement("button",{onClick:u},"AppType"),s.createElement("button",{onClick:c},"PinCode"),s.createElement("button",{onClick:i},"RequestAuth"),s.createElement("button",{onClick:m},"GetAudioList"),s.createElement("button",{onClick:d},"GetCurrentAudioID"),s.createElement("button",{onClick:b},"GetCurrentConnectionIDs"),s.createElement("button",{onClick:g},"GetMediaInfo"),s.createElement("button",{onClick:p},"GetProtocolInfo"))}async function u(e){return fetch(`http://192.168.0.103/YamahaExtendedControl/v1/${e}`,{method:"GET",mode:"no-cors"}).then((e=>e.text())).then(console.log)}function c(){const e=(0,s.useCallback)((e=>u("system/getDeviceInfo")),[]),t=(0,s.useCallback)((e=>u("system/getFeatures")),[]),n=(0,s.useCallback)((e=>u("main/getStatus")),[]),o=(0,s.useCallback)((e=>u("main/setVolume?volume=70")),[]),a=(0,s.useCallback)((e=>u("main/setVolume?volume=90")),[]);return s.createElement("div",null,s.createElement("button",{onClick:e},"GetDeviceInfo"),s.createElement("button",{onClick:t},"GetFeatures"),s.createElement("button",{onClick:n},"GetStatus"),s.createElement("button",{onClick:o},"SetVolume 70%"),s.createElement("button",{onClick:a},"SetVolume 90%"))}var i=n(4371);const m=new o.K2;function d(){const[{data:e},{remoteRcu:t,remoteTv:n,status:o}]=function(){const[{data:e},t]=(0,s.useState)((()=>({data:null})));return(0,s.useEffect)((()=>{const e=[m.onMessage().subscribe((({data:e})=>t({data:e})))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{data:e},{remoteRcu:e=>m.getRemoteRcu(e),remoteTv:e=>m.getRemoteTv(e),status:()=>m.getMessages(),sendMessage:e=>m.sendMessage(e)}]}();return console.log({data:e}),s.createElement("section",{className:i.Z.Section},s.createElement(l,{remoteRcu:t,status:o}),s.createElement(c,null),s.createElement(r,{remoteTv:n}),null===e?s.createElement("div",null,"Loading..."):s.createElement("pre",null,JSON.stringify(e,null,2)))}},5071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(272),o=n.n(s),a=n(2609),l=n.n(a)()(o());l.push([e.id,".DeTwnNnGKuydH91RohQA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Section:"DeTwnNnGKuydH91RohQA"};const r=l},4371:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(6062),o=n.n(s),a=n(4036),l=n.n(a),r=n(6793),u=n.n(r),c=n(7892),i=n.n(c),m=n(1173),d=n.n(m),b=n(2464),g=n.n(b),p=n(5071),f={};f.styleTagTransform=g(),f.setAttributes=i(),f.insert=u().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=d();var C=o()(p.default,f);if(!p.default.locals||e.hot.invalidate){var k=!p.default.locals,h=k?p:p.default.locals;e.hot.accept(5071,(t=>{p=n(5071),function(e,t,n){if(!e&&t||e&&!t)return!1;var s;for(s in e)if((!n||"default"!==s)&&e[s]!==t[s])return!1;for(s in t)if(!(n&&"default"===s||e[s]))return!1;return!0}(h,k?p:p.default.locals,k)?(h=k?p:p.default.locals,C(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){C()}));const y=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=931.js.map