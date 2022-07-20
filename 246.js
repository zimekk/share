"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{3088:(e,s,n)=>{n.d(s,{Yg:()=>x,zO:()=>M,y_:()=>w,RY:()=>y});var t=n(2784),a=n(6647),r=n(4489),l=n(9385);const u=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class o{client=u;subscriptions=i}const c=a.gql`
  query {
    files {
      name
    }
  }
`,d=a.gql`
  query {
    hello
  }
`;var g=n(8141);const p=a.gql`
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
`,m=a.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,b=a.gql`
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
`,q=new class extends o{hello(){return(0,r.D)(this.client.request(d))}};function M(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[q.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends o{getMessages(){return(0,r.D)(this.client.request(p))}sendMessage(e){return(0,r.D)(this.client.request(m,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const v=new class extends o{sendSignal(e){return(0,r.D)(this.client.request(h,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function y(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>v.sendSignal(e)}]}const A=new class extends o{files(){return(0,r.D)(this.client.request(c))}};function x(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[A.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});var t=n(2784),a=n(3088),r=n(5098);function l(){const[{files:e}]=(0,a.Yg)();return null===e?"Loading...":t.createElement("section",{className:r.Z.Browser},e.map((({name:e},s)=>t.createElement("div",{key:s},e))))}},5393:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),a=n.n(t),r=n(2609),l=n.n(r)()(a());l.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const u=l},5098:(e,s,n)=>{n.d(s,{Z:()=>S});var t=n(6062),a=n.n(t),r=n(4036),l=n.n(r),u=n(6793),i=n.n(u),o=n(7892),c=n.n(o),d=n(1173),g=n.n(d),p=n(2464),f=n.n(p),m=n(5393),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g();var h=a()(m.default,b);if(!m.default.locals||e.hot.invalidate){var q=!m.default.locals,M=q?m:m.default.locals;e.hot.accept(5393,(s=>{m=n(5393),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(M,q?m:m.default.locals,q)?(M=q?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=m.default&&m.default.locals?m.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map