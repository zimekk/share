"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[771],{1422:(e,s,n)=>{n.d(s,{zO:()=>q,y_:()=>M,RY:()=>w});var t=n(2784),a=n(6647),l=n(4489),r=n(9385);const o=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=o;subscriptions=u}const c=a.gql`
  query {
    hello
  }
`;var d=n(8141);const g=a.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,p=a.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,b=a.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,f=a.gql`
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
`,m=a.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends i{hello(){return(0,l.D)(this.client.request(c))}};function q(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends i{getMessages(){return(0,l.D)(this.client.request(g))}sendMessage(e){return(0,l.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const v=new class extends i{sendSignal(e){return(0,l.D)(this.client.request(m,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>v.sendSignal(e)}]}},2771:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var t=n(2784),a=n(1422),l=n(3549);function r(){const[{hello:e}]=(0,a.zO)();return null===e?"Loading...":t.createElement("h2",{className:l.Z.Hello},e)}},1051:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});var t=n(272),a=n.n(t),l=n(2609),r=n.n(l)()(a());r.push([e.id,".lGY8gAIYqYxyZoz2si1t{color:blue}","",{version:3,sources:["webpack://./src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),r.locals={Hello:"lGY8gAIYqYxyZoz2si1t"};const o=r},3549:(e,s,n)=>{n.d(s,{Z:()=>M});var t=n(6062),a=n.n(t),l=n(4036),r=n.n(l),o=n(6793),u=n.n(o),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),p=n(2464),b=n.n(p),f=n(1051),m={};m.styleTagTransform=b(),m.setAttributes=c(),m.insert=u().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=g();var h=a()(f.default,m);if(!f.default.locals||e.hot.invalidate){var q=!f.default.locals,S=q?f:f.default.locals;e.hot.accept(1051,(s=>{f=n(1051),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(S,q?f:f.default.locals,q)?(S=q?f:f.default.locals,h(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const M=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=771.js.map