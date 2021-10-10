"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[771],{1422:(e,s,t)=>{t.d(s,{zO:()=>q,y_:()=>M,RY:()=>y});var n=t(2784),a=t(6647),l=t(4489),r=t(9385);const u=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class o{client=u;subscriptions=i}const c=a.gql`
  query {
    hello
  }
`;var d=t(8141);const g=a.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,f=a.gql`
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
`,p=a.gql`
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
`,m=new class extends o{hello(){return(0,l.D)(this.client.request(c))}};function q(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[m.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends o{getMessages(){return(0,l.D)(this.client.request(g))}sendMessage(e){return(0,l.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const v=new class extends o{sendSignal(e){return(0,l.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function y(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[v.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>v.sendSignal(e)}]}},2771:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var n=t(2784),a=t(1422),l=t(3549);function r(){const[{hello:e}]=(0,a.zO)();return null===e?"Loading...":n.createElement("h2",{className:l.Z.Hello},e)}},1051:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var n=t(9601),a=t.n(n),l=t(2609),r=t.n(l)()(a());r.push([e.id,".lGY8gAIYqYxyZoz2si1t{color:blue}",""]),r.locals={Hello:"lGY8gAIYqYxyZoz2si1t"};const u=r},3549:(e,s,t)=>{t.d(s,{Z:()=>M});var n=t(6062),a=t.n(n),l=t(4036),r=t.n(l),u=t(6793),i=t.n(u),o=t(7892),c=t.n(o),d=t(1173),g=t.n(d),f=t(2464),b=t.n(f),p=t(1051),h={};h.styleTagTransform=b(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=g();var m=a()(p.default,h);if(!p.default.locals||e.hot.invalidate){var q=!p.default.locals,S=q?p:p.default.locals;e.hot.accept(1051,(s=>{p=t(1051),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?p:p.default.locals,q)?(S=q?p:p.default.locals,m(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()}));const M=p.default&&p.default.locals?p.default.locals:void 0}}]);