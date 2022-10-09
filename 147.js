"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{9082:(e,t,s)=>{s.d(t,{L:()=>o,V:()=>a});var n=s(6647),r=s(9385);const o=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),a=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},1828:(e,t,s)=>{s.d(t,{K2:()=>w,Yg:()=>U,zO:()=>R,y_:()=>A,VT:()=>T,RY:()=>V});var n=s(2784),r=s(6647),o=s(7598),a=s(9082);class l{client=a.L;subscriptions=a.V}const i=r.gql`
  query {
    files {
      name
    }
  }
`,u=r.gql`
  query {
    hello
  }
`;var c=s(8141);const g=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,m=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,b=r.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,p=r.gql`
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
`,f=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;var h=s(7984);const q=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,v=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,S=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,y=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,$=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,x=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,M=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class w extends l{getDevices(){return(0,o.D)(this.client.request(q)).pipe((0,h.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(v,{location:e})).pipe((0,h.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,o.D)(this.client.request(S,{location:e,key:t}))}getRemoteTv(e,t){return(0,o.D)(this.client.request(y,{location:e,action:t}))}getRemoteVcr(e,t){return(0,o.D)(this.client.request($,{location:e,action:t}))}sendMessage(e){return(0,o.D)(this.client.request(M,{data:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:x},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const k=new class extends l{hello(){return(0,o.D)(this.client.request(u))}};function R(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const D=new class extends l{getMessages(){return(0,o.D)(this.client.request(g))}sendMessage(e){return(0,o.D)(this.client.request(m,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:d},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function A(){const[{messages:e},t]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[D.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),D.onMessage().subscribe((({message:e})=>t((({messages:t,...s})=>({...s,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>D.sendMessage(e)}]}const E=new class extends l{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:b},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function T(){const[{values:e},t]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[E.onSensor().subscribe((({sensor:e})=>t((({values:t,...s})=>({...s,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const Q=new class extends l{sendSignal(e){return(0,o.D)(this.client.request(f,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function V(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[Q.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>Q.sendSignal(e)}]}const I=new class extends l{files(){return(0,o.D)(this.client.request(i))}};function U(){const[e,t]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var n=s(2784),r=s(1828),o=s(6994);function a(){const[{hello:e}]=(0,r.zO)();return n.createElement("section",null,null===e?n.createElement("div",null,"Loading..."):n.createElement("h2",{className:o.Z.Hello},e))}},1758:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s(272),r=s.n(n),o=s(2609),a=s.n(o)()(r());a.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),a.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const l=a},7984:(e,t,s)=>{s.d(t,{U:()=>o});var n=s(1118),r=s(7394);function o(e,t){return(0,n.e)((function(s,n){var o=0;s.subscribe((0,r.x)(n,(function(s){n.next(e.call(t,s,o++))})))}))}},6994:(e,t,s)=>{s.d(t,{Z:()=>S});var n=s(6062),r=s.n(n),o=s(4036),a=s.n(o),l=s(6793),i=s.n(l),u=s(7892),c=s.n(u),g=s(1173),d=s.n(g),m=s(2464),b=s.n(m),p=s(1758),f={};f.styleTagTransform=b(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d();var h=r()(p.default,f);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,v=q?p:p.default.locals;e.hot.accept(1758,(t=>{p=s(1758),function(e,t,s){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!s||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(s&&"default"===n||e[n]))return!1;return!0}(v,q?p:p.default.locals,q)?(v=q?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map