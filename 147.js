"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{310:(e,s,n)=>{n.d(s,{Yg:()=>$,zO:()=>q,y_:()=>M,VT:()=>y,RY:()=>A});var t=n(2784),r=n(6647),l=n(4489),a=n(9385);const u=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=o}const c=r.gql`
  query {
    files {
      name
    }
  }
`,d=r.gql`
  query {
    hello
  }
`;var g=n(8141);const b=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,f=r.gql`
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
`,m=r.gql`
  subscription SensorSubscription {
    sensor {
      value
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
`,S=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,v=new class extends i{hello(){return(0,l.D)(this.client.request(d))}};function q(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const x=new class extends i{getMessages(){return(0,l.D)(this.client.request(b))}sendMessage(e){return(0,l.D)(this.client.request(p,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[x.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),x.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>x.sendMessage(e)}]}const w=new class extends i{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function y(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[w.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const k=new class extends i{sendSignal(e){return(0,l.D)(this.client.request(S,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function A(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[k.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>k.sendSignal(e)}]}const E=new class extends i{files(){return(0,l.D)(this.client.request(c))}};function $(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[E.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});var t=n(2784),r=n(310),l=n(6994);function a(){const[{hello:e}]=(0,r.zO)();return t.createElement("section",null,null===e?t.createElement("div",null,"Loading..."):t.createElement("h2",{className:l.Z.Hello},e))}},1758:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),r=n.n(t),l=n(2609),a=n.n(l)()(r());a.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),a.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const u=a},6994:(e,s,n)=>{n.d(s,{Z:()=>q});var t=n(6062),r=n.n(t),l=n(4036),a=n.n(l),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),b=n(2464),f=n.n(b),p=n(1758),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=g();var h=r()(p.default,m);if(!p.default.locals||e.hot.invalidate){var S=!p.default.locals,v=S?p:p.default.locals;e.hot.accept(1758,(s=>{p=n(1758),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(v,S?p:p.default.locals,S)?(v=S?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map