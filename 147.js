"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{9082:(e,s,n)=>{n.d(s,{L:()=>l,V:()=>a});var t=n(6647),r=n(9385);const l=new t.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),a=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},310:(e,s,n)=>{n.d(s,{Yg:()=>A,zO:()=>S,y_:()=>q,VT:()=>M,RY:()=>y});var t=n(2784),r=n(6647),l=n(7598),a=n(9082);class u{client=a.L;subscriptions=a.V}const o=r.gql`
  query {
    files {
      name
    }
  }
`,i=r.gql`
  query {
    hello
  }
`;var c=n(8141);const d=r.gql`
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
`,m=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends u{hello(){return(0,l.D)(this.client.request(i))}};function S(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const v=new class extends u{getMessages(){return(0,l.D)(this.client.request(d))}sendMessage(e){return(0,l.D)(this.client.request(b,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:g},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[v.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),v.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>v.sendMessage(e)}]}const x=new class extends u{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[x.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const w=new class extends u{sendSignal(e){return(0,l.D)(this.client.request(m,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function y(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[w.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>w.sendSignal(e)}]}const k=new class extends u{files(){return(0,l.D)(this.client.request(o))}};function A(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[k.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});var t=n(2784),r=n(310),l=n(6994);function a(){const[{hello:e}]=(0,r.zO)();return t.createElement("section",null,null===e?t.createElement("div",null,"Loading..."):t.createElement("h2",{className:l.Z.Hello},e))}},1758:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),r=n.n(t),l=n(2609),a=n.n(l)()(r());a.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),a.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const u=a},6994:(e,s,n)=>{n.d(s,{Z:()=>q});var t=n(6062),r=n.n(t),l=n(4036),a=n.n(l),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),b=n(2464),f=n.n(b),p=n(1758),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=g();var h=r()(p.default,m);if(!p.default.locals||e.hot.invalidate){var S=!p.default.locals,v=S?p:p.default.locals;e.hot.accept(1758,(s=>{p=n(1758),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(v,S?p:p.default.locals,S)?(v=S?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map