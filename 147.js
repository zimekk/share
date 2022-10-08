"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{4281:(e,s,t)=>{t.d(s,{IE:()=>v,K2:()=>A,Yg:()=>G,zO:()=>T,y_:()=>Q,VT:()=>U,RY:()=>_});var n=t(2784),r=t(6647),o=t(7598),a=t(9385);const l=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=l;subscriptions=i}const c=r.gql`
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
`,b=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,p=r.gql`
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
`,S=r.gql`
  query {
    movies
  }
`;class v extends u{getMovies(){return(0,o.D)(this.client.request(S))}}var y=t(7984);const $=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,x=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,M=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,w=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,k=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,R=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,D=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class A extends u{getDevices(){return(0,o.D)(this.client.request($)).pipe((0,y.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(x,{location:e})).pipe((0,y.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,o.D)(this.client.request(M,{location:e,key:s}))}getRemoteTv(e,s){return(0,o.D)(this.client.request(w,{location:e,action:s}))}getRemoteVcr(e,s){return(0,o.D)(this.client.request(k,{location:e,action:s}))}sendMessage(e){return(0,o.D)(this.client.request(D,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:R},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const E=new class extends u{hello(){return(0,o.D)(this.client.request(g))}};function T(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[E.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const I=new class extends u{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[I.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),I.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>I.sendMessage(e)}]}const C=new class extends u{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function U(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[C.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const V=new class extends u{sendSignal(e){return(0,o.D)(this.client.request(q,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function _(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[V.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>V.sendSignal(e)}]}const H=new class extends u{files(){return(0,o.D)(this.client.request(c))}};function G(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[H.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(4281),o=t(6994);function a(){const[{hello:e}]=(0,r.zO)();return n.createElement("section",null,null===e?n.createElement("div",null,"Loading..."):n.createElement("h2",{className:o.Z.Hello},e))}},1758:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),a.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const l=a},6994:(e,s,t)=>{t.d(s,{Z:()=>v});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),l=t(6793),i=t.n(l),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),m=t(2464),b=t.n(m),p=t(1758),f={};f.styleTagTransform=b(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d();var h=r()(p.default,f);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,S=q?p:p.default.locals;e.hot.accept(1758,(s=>{p=t(1758),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?p:p.default.locals,q)?(S=q?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map