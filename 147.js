"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{1828:(e,s,t)=>{t.d(s,{K2:()=>x,Yg:()=>C,zO:()=>$,y_:()=>A,VT:()=>R,RY:()=>T});var n=t(2784),r=t(6647),a=t(4489),l=t(9385);const o=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=o;subscriptions=u}const c=r.gql`
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
`;class x extends i{getMessages(){return(0,a.D)(this.client.request(S))}getRemoteTv(e){return(0,a.D)(this.client.request(v,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request(M,{data:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:y},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const w=new class extends i{hello(){return(0,a.D)(this.client.request(d))}};function $(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[w.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const k=new class extends i{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function A(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[k.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),k.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>k.sendMessage(e)}]}const E=new class extends i{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function R(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[E.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const D=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(q,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function T(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[D.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>D.sendSignal(e)}]}const I=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function C(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(2784),r=t(1828),a=t(6994);function l(){const[{hello:e}]=(0,r.zO)();return n.createElement("section",null,null===e?n.createElement("div",null,"Loading..."):n.createElement("h2",{className:a.Z.Hello},e))}},1758:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(272),r=t.n(n),a=t(2609),l=t.n(a)()(r());l.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),l.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const o=l},6994:(e,s,t)=>{t.d(s,{Z:()=>v});var n=t(6062),r=t.n(n),a=t(4036),l=t.n(a),o=t(6793),u=t.n(o),i=t(7892),c=t.n(i),d=t(1173),g=t.n(d),m=t(2464),b=t.n(m),p=t(1758),f={};f.styleTagTransform=b(),f.setAttributes=c(),f.insert=u().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=g();var h=r()(p.default,f);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,S=q?p:p.default.locals;e.hot.accept(1758,(s=>{p=t(1758),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?p:p.default.locals,q)?(S=q?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map