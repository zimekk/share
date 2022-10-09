"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{9082:(e,s,t)=>{t.d(s,{L:()=>o,V:()=>a});var n=t(6647),r=t(9385);const o=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),a=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},1828:(e,s,t)=>{t.d(s,{K2:()=>x,Yg:()=>T,zO:()=>A,y_:()=>k,VT:()=>Q,RY:()=>V});var n=t(2784),r=t(6647),o=t(7598),a=t(9082);class i{client=a.L;subscriptions=a.V}const l=r.gql`
  query {
    files {
      name
    }
  }
`,u=r.gql`
  query {
    hello
  }
`;var c=t(8141);const d=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,g=r.gql`
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
`,p=r.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,b=r.gql`
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
`;var h=t(7984);const q=r.gql`
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
`,M=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,w=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class x extends i{getDevices(){return(0,o.D)(this.client.request(q)).pipe((0,h.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(v,{location:e})).pipe((0,h.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,o.D)(this.client.request(S,{location:e,key:s}))}getRemoteTv(e,s){return(0,o.D)(this.client.request(y,{location:e,action:s}))}getRemoteVcr(e,s){return(0,o.D)(this.client.request($,{location:e,action:s}))}sendMessage(e){return(0,o.D)(this.client.request(w,{data:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:M},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const R=new class extends i{hello(){return(0,o.D)(this.client.request(u))}};function A(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[R.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const D=new class extends i{getMessages(){return(0,o.D)(this.client.request(d))}sendMessage(e){return(0,o.D)(this.client.request(m,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:g},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function k(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[D.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),D.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>D.sendMessage(e)}]}const E=new class extends i{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[E.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const U=new class extends i{sendSignal(e){return(0,o.D)(this.client.request(f,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function V(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[U.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>U.sendSignal(e)}]}const I=new class extends i{files(){return(0,o.D)(this.client.request(l))}};function T(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(1828),o=t(5098);function a(){const[{files:e}]=(0,r.Yg)();return n.createElement("section",{className:o.Z.Browser},null===e?n.createElement("div",null,"Loading..."):e.map((({name:e},s)=>n.createElement("div",{key:s},e))))}},5393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),a.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const i=a},7984:(e,s,t)=>{t.d(s,{U:()=>o});var n=t(1118),r=t(7394);function o(e,s){return(0,n.e)((function(t,n){var o=0;t.subscribe((0,r.x)(n,(function(t){n.next(e.call(s,t,o++))})))}))}},5098:(e,s,t)=>{t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),i=t(6793),l=t.n(i),u=t(7892),c=t.n(u),d=t(1173),g=t.n(d),m=t(2464),p=t.n(m),b=t(5393),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=g();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,v=q?b:b.default.locals;e.hot.accept(5393,(s=>{b=t(5393),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(v,q?b:b.default.locals,q)?(v=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map