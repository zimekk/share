"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{1828:(e,s,t)=>{t.d(s,{K2:()=>w,Yg:()=>B,zO:()=>A,y_:()=>R,VT:()=>D,RY:()=>I});var n=t(2784),r=t(6647),a=t(4489),o=t(9385);const u=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=l}const c=r.gql`
  query {
    files {
      name
    }
  }
`,d=r.gql`
  query {
    hello
  }
`;var g=t(8141);const m=r.gql`
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
`,S=r.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,v=r.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,y=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,M=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class w extends i{getMessages(){return(0,a.D)(this.client.request(S))}getRemoteTv(e){return(0,a.D)(this.client.request(v,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request(M,{data:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:y},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const x=new class extends i{hello(){return(0,a.D)(this.client.request(d))}};function A(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[x.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const $=new class extends i{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function R(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[$.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),$.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>$.sendMessage(e)}]}const E=new class extends i{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function D(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[E.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const k=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(q,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function I(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>k.sendSignal(e)}]}const T=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function B(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[T.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(2784),r=t(1828),a=t(5098);function o(){const[{files:e}]=(0,r.Yg)();return n.createElement("section",{className:a.Z.Browser},null===e?n.createElement("div",null,"Loading..."):e.map((({name:e},s)=>n.createElement("div",{key:s},e))))}},5393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var n=t(272),r=t.n(n),a=t(2609),o=t.n(a)()(r());o.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),o.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const u=o},5098:(e,s,t)=>{t.d(s,{Z:()=>v});var n=t(6062),r=t.n(n),a=t(4036),o=t.n(a),u=t(6793),l=t.n(u),i=t(7892),c=t.n(i),d=t(1173),g=t.n(d),m=t(2464),p=t.n(m),b=t(5393),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=g();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,S=q?b:b.default.locals;e.hot.accept(5393,(s=>{b=t(5393),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?b:b.default.locals,q)?(S=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map