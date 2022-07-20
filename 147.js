"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[147],{3088:(e,s,n)=>{n.d(s,{Yg:()=>k,zO:()=>S,y_:()=>v,RY:()=>x});var t=n(2784),l=n(6647),a=n(4489),r=n(9385);const u=new l.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=o}const c=l.gql`
  query {
    files {
      name
    }
  }
`,d=l.gql`
  query {
    hello
  }
`;var g=n(8141);const f=l.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,b=l.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,p=l.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,m=l.gql`
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
`,h=l.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,q=new class extends i{hello(){return(0,a.D)(this.client.request(d))}};function S(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[q.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const M=new class extends i{getMessages(){return(0,a.D)(this.client.request(f))}sendMessage(e){return(0,a.D)(this.client.request(p,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function v(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[M.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),M.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>M.sendMessage(e)}]}const w=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(h,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function x(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[w.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>w.sendSignal(e)}]}const y=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function k(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[y.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3147:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var t=n(2784),l=n(3088),a=n(6994);function r(){const[{hello:e}]=(0,l.zO)();return null===e?"Loading...":t.createElement("h2",{className:a.Z.Hello},e)}},1758:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),l=n.n(t),a=n(2609),r=n.n(a)()(l());r.push([e.id,".aJ2bxgXUhlWNlbrakkkT{color:blue}","",{version:3,sources:["webpack://./../web/src/containers/Hello.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA",sourcesContent:[".Hello {\n  color: blue;\n}\n"],sourceRoot:""}]),r.locals={Hello:"aJ2bxgXUhlWNlbrakkkT"};const u=r},6994:(e,s,n)=>{n.d(s,{Z:()=>M});var t=n(6062),l=n.n(t),a=n(4036),r=n.n(a),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),f=n(2464),b=n.n(f),p=n(1758),m={};m.styleTagTransform=b(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=g();var h=l()(p.default,m);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,S=q?p:p.default.locals;e.hot.accept(1758,(s=>{p=n(1758),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(S,q?p:p.default.locals,q)?(S=q?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const M=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=147.js.map