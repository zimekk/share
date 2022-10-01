"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{1828:(e,s,t)=>{t.d(s,{K2:()=>k,Yg:()=>H,zO:()=>D,y_:()=>E,VT:()=>Q,RY:()=>C});var n=t(2784),r=t(6647),a=t(4489),o=t(9385);const l=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=l;subscriptions=u}const c=r.gql`
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
`,y=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,S=r.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,v=r.gql`
  query RemoteTvQuery($key: String) {
    remoteRcu(key: $key) {
      data
    }
  }
`,M=r.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,x=r.gql`
  query RemoteVcrQuery($action: String) {
    remoteVcr(action: $action) {
      data
    }
  }
`,w=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,$=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class k extends i{getDevices(){return(0,a.D)(this.client.request(y))}getMessages(){return(0,a.D)(this.client.request(S))}getRemoteRcu(e){return(0,a.D)(this.client.request(v,{key:e}))}getRemoteTv(e){return(0,a.D)(this.client.request(M,{action:e}))}getRemoteVcr(e){return(0,a.D)(this.client.request(x,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request($,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:w},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const R=new class extends i{hello(){return(0,a.D)(this.client.request(g))}};function D(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[R.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const A=new class extends i{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function E(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[A.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),A.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>A.sendMessage(e)}]}const T=new class extends i{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[T.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const I=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(q,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function C(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[I.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>I.sendSignal(e)}]}const _=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function H(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[_.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(2784),r=t(1828),a=t(6994);function o(){const[{hello:e}]=(0,r.zO)();return n.createElement("section",null,null===e?n.createElement("div",null,"Loading..."):n.createElement("h2",{className:a.Z.Hello},e))}},1758:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(272),r=t.n(n),a=t(2609),o=t.n(a)()(r());o.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),o.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const l=o},6994:(e,s,t)=>{t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),a=t(4036),o=t.n(a),l=t(6793),u=t.n(l),i=t(7892),c=t.n(i),g=t(1173),d=t.n(g),m=t(2464),b=t.n(m),p=t(1758),f={};f.styleTagTransform=b(),f.setAttributes=c(),f.insert=u().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d();var h=r()(p.default,f);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,y=q?p:p.default.locals;e.hot.accept(1758,(s=>{p=t(1758),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(y,q?p:p.default.locals,q)?(y=q?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map