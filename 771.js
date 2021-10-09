"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[771],{2618:(e,s,t)=>{t.d(s,{zO:()=>S,y_:()=>m,RY:()=>v});var n=t(2784),r=t(6647),l=t(9385),a=t(4489);const i=r.gql`
  query {
    hello
  }
`;var o=t(8141);const u=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,c=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,g=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,d=r.gql`
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
`,p=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`}),f=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),h=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}getMessages(){return(0,a.D)(this.client.request(u))}sendMessage(e){return(0,a.D)(this.client.request(g,{message:e}))}onMessage(){return new o.y((e=>this.subscriptions.subscribe({query:c},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:f,subscriptions:p});function m(){const[e,s]=(0,n.useState)({messages:null});return(0,n.useEffect)((()=>{const e=[h.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e})))),console.error),h.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendMessage:e=>h.sendMessage(e)}]}const q=new class{constructor({client:e}){Object.assign(this,{client:e})}hello(){return(0,a.D)(this.client.request(i))}}({client:f});function S(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[q.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const M=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}sendSignal(e){return(0,a.D)(this.client.request(b,{signal:e}))}onSignal(){return new o.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:f,subscriptions:p});function v(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[M.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>M.sendSignal(e)}]}},2771:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(2618),l=t(3549);function a(){const[{hello:e}]=(0,r.zO)();return null===e?"Loading...":n.createElement("h2",{className:l.Z.Hello},e)}},1051:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(9601),r=t.n(n),l=t(2609),a=t.n(l)()(r());a.push([e.id,".lGY8gAIYqYxyZoz2si1t{color:blue}",""]),a.locals={Hello:"lGY8gAIYqYxyZoz2si1t"};const i=a},3549:(e,s,t)=>{t.d(s,{Z:()=>M});var n=t(6062),r=t.n(n),l=t(4036),a=t.n(l),i=t(6793),o=t.n(i),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),b=t(2464),p=t.n(b),f=t(1051),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d();var m=r()(f.default,h);if(!f.default.locals||e.hot.invalidate){var q=!f.default.locals,S=q?f:f.default.locals;e.hot.accept(1051,(s=>{f=t(1051),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?f:f.default.locals,q)?(S=q?f:f.default.locals,m(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()}));const M=f.default&&f.default.locals?f.default.locals:void 0}}]);