"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{9082:(e,s,n)=>{n.d(s,{L:()=>a,V:()=>l});var t=n(6647),r=n(9385);const a=new t.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},310:(e,s,n)=>{n.d(s,{Yg:()=>E,zO:()=>S,y_:()=>q,VT:()=>M,RY:()=>x});var t=n(2784),r=n(6647),a=n(7598),l=n(9082);class u{client=l.L;subscriptions=l.V}const o=r.gql`
  query {
    files {
      name
    }
  }
`,i=r.gql`
  query {
    hello
  }
`;var c=n(3919);const d=r.gql`
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
`,m=r.gql`
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
`,b=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends u{hello(){return(0,a.D)(this.client.request(i))}};function S(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const v=new class extends u{getMessages(){return(0,a.D)(this.client.request(d))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:g},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[v.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),v.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>v.sendMessage(e)}]}const w=new class extends u{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[w.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const y=new class extends u{sendSignal(e){return(0,a.D)(this.client.request(b,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function x(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[y.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>y.sendSignal(e)}]}const A=new class extends u{files(){return(0,a.D)(this.client.request(o))}};function E(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[A.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});var t=n(2784),r=n(310),a=n(5098);function l(){const[{files:e}]=(0,r.Yg)();return t.createElement("section",{className:a.Z.Browser},null===e?t.createElement("div",null,"Loading..."):e.map((({name:e},s)=>t.createElement("div",{key:s},e))))}},5393:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),r=n.n(t),a=n(2609),l=n.n(a)()(r());l.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const u=l},5098:(e,s,n)=>{n.d(s,{Z:()=>q});var t=n(6062),r=n.n(t),a=n(4036),l=n.n(a),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),p=n(2464),f=n.n(p),m=n(5393),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=o().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g();var h=r()(m.default,b);if(!m.default.locals||e.hot.invalidate){var S=!m.default.locals,v=S?m:m.default.locals;e.hot.accept(5393,(s=>{m=n(5393),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(v,S?m:m.default.locals,S)?(v=S?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=m.default&&m.default.locals?m.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map