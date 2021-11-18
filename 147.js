"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{1422:(e,s,n)=>{n.d(s,{zO:()=>S,y_:()=>q,RY:()=>w});var t=n(2784),a=n(6647),l=n(4489),r=n(9385);const o=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=o;subscriptions=u}const c=a.gql`
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
`,h=a.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,m=new class extends i{hello(){return(0,l.D)(this.client.request(c))}};function S(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[m.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const M=new class extends i{getMessages(){return(0,l.D)(this.client.request(g))}sendMessage(e){return(0,l.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[M.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),M.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>M.sendMessage(e)}]}const v=new class extends i{sendSignal(e){return(0,l.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>v.sendSignal(e)}]}},3147:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var t=n(2784),a=n(1422),l=n(6994);function r(){const[{hello:e}]=(0,a.zO)();return null===e?"Loading...":t.createElement("h2",{className:l.Z.Hello},e)}},1758:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});var t=n(272),a=n.n(t),l=n(2609),r=n.n(l)()(a());r.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),r.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const o=r},6994:(e,s,n)=>{n.d(s,{Z:()=>q});var t=n(6062),a=n.n(t),l=n(4036),r=n.n(l),o=n(6793),u=n.n(o),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),p=n(2464),b=n.n(p),f=n(1758),h={};h.styleTagTransform=b(),h.setAttributes=c(),h.insert=u().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=g();var m=a()(f.default,h);if(!f.default.locals||e.hot.invalidate){var S=!f.default.locals,M=S?f:f.default.locals;e.hot.accept(1758,(s=>{f=n(1758),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(M,S?f:f.default.locals,S)?(M=S?f:f.default.locals,m(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()}));const q=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map