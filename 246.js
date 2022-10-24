"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{9082:(e,s,t)=>{t.d(s,{L:()=>r,V:()=>l});var n=t(6647),a=t(9385);const r=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},5265:(e,s,t)=>{t.d(s,{Y:()=>b,y:()=>g});var n=t(2784),a=t(6647),r=t(7598),l=t(9082);class o{client=l.L;subscriptions=l.V}const u=a.gql`
  query {
    files {
      name
    }
  }
`;var c=t(3919);const i=a.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=a.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,f=a.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,m=new class extends o{getMessages(){return(0,r.D)(this.client.request(i))}sendMessage(e){return(0,r.D)(this.client.request(f,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function g(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[m.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),m.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>m.sendMessage(e)}]}const p=new class extends o{files(){return(0,r.D)(this.client.request(u))}};function b(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[p.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(2784),a=t(5265),r=t(5098);function l(){const[{files:e}]=(0,a.Y)();return n.createElement("section",{className:r.Z.Browser},null===e?n.createElement("div",null,"Loading..."):e.map((({name:e},s)=>n.createElement("div",{key:s},e))))}},5393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(272),a=t.n(n),r=t(2609),l=t.n(r)()(a());l.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const o=l},5098:(e,s,t)=>{t.d(s,{Z:()=>w});var n=t(6062),a=t.n(n),r=t(4036),l=t.n(r),o=t(6793),u=t.n(o),c=t(7892),i=t.n(c),d=t(1173),f=t.n(d),m=t(2464),g=t.n(m),p=t(5393),b={};b.styleTagTransform=g(),b.setAttributes=i(),b.insert=u().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f();var h=a()(p.default,b);if(!p.default.locals||e.hot.invalidate){var v=!p.default.locals,M=v?p:p.default.locals;e.hot.accept(5393,(s=>{p=t(5393),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(M,v?p:p.default.locals,v)?(M=v?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const w=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map