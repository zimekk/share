"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{1828:(e,s,t)=>{t.d(s,{K2:()=>A,Yg:()=>G,zO:()=>k,y_:()=>Q,VT:()=>T,RY:()=>B});var n=t(2784),r=t(6647),o=t(7598),a=t(9385);const i=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=i;subscriptions=l}const c=r.gql`
  query {
    files {
      name
    }
  }
`,g=r.gql`
  query {
    hello
  }
`;var d=t(8141);const m=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,p=r.gql`
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
`,f=r.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,h=r.gql`
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
`,q=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;var S=t(7984);const y=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,v=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,$=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,M=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,w=r.gql`
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
`,R=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class A extends u{getDevices(){return(0,o.D)(this.client.request(y)).pipe((0,S.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(v,{location:e})).pipe((0,S.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,o.D)(this.client.request($,{location:e,key:s}))}getRemoteTv(e,s){return(0,o.D)(this.client.request(M,{location:e,action:s}))}getRemoteVcr(e,s){return(0,o.D)(this.client.request(w,{location:e,action:s}))}sendMessage(e){return(0,o.D)(this.client.request(R,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:x},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const D=new class extends u{hello(){return(0,o.D)(this.client.request(g))}};function k(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[D.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const E=new class extends u{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[E.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),E.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>E.sendMessage(e)}]}const I=new class extends u{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function T(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[I.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const U=new class extends u{sendSignal(e){return(0,o.D)(this.client.request(q,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function B(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[U.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>U.sendSignal(e)}]}const C=new class extends u{files(){return(0,o.D)(this.client.request(c))}};function G(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[C.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(1828),o=t(5098);function a(){const[{files:e}]=(0,r.Yg)();return n.createElement("section",{className:o.Z.Browser},null===e?n.createElement("div",null,"Loading..."):e.map((({name:e},s)=>n.createElement("div",{key:s},e))))}},5393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),a.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const i=a},5098:(e,s,t)=>{t.d(s,{Z:()=>y});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),i=t(6793),l=t.n(i),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),m=t(2464),p=t.n(m),b=t(5393),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,S=q?b:b.default.locals;e.hot.accept(5393,(s=>{b=t(5393),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?b:b.default.locals,q)?(S=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map