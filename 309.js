"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[309],{6309:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(2784),a=n(1422),l=n(9606);function r(){const[{messages:e},{sendMessage:s}]=(0,a.y_)(),[n,r]=(0,t.useState)(""),u=()=>{r(""),s({uuid:null,text:n})};return t.createElement("div",{className:l.Z.Messages},t.createElement("span",null,null),t.createElement("input",{value:n,onChange:e=>{const{value:s}=e.target;r(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),u())}),t.createElement("button",{onClick:u},"send"),e&&t.createElement("div",null,t.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function u(){return t.createElement(r,null)}},1422:(e,s,n)=>{n.d(s,{zO:()=>M,y_:()=>v,RY:()=>q});var t=n(2784),a=n(6647),l=n(4489),r=n(9385);const u=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=o}const c=a.gql`
  query {
    hello
  }
`;var g=n(8141);const d=a.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,m=a.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,p=a.gql`
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
`,b=a.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends i{hello(){return(0,l.D)(this.client.request(c))}};function M(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends i{getMessages(){return(0,l.D)(this.client.request(d))}sendMessage(e){return(0,l.D)(this.client.request(p,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function v(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const y=new class extends i{sendSignal(e){return(0,l.D)(this.client.request(b,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[y.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>y.sendSignal(e)}]}},5201:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),a=n.n(t),l=n(2609),r=n.n(l)()(a());r.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),r.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const u=r},9606:(e,s,n)=>{n.d(s,{Z:()=>v});var t=n(6062),a=n.n(t),l=n(4036),r=n.n(l),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),g=n(1173),d=n.n(g),m=n(2464),p=n.n(m),f=n(5201),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=o().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d();var h=a()(f.default,b);if(!f.default.locals||e.hot.invalidate){var M=!f.default.locals,S=M?f:f.default.locals;e.hot.accept(5201,(s=>{f=n(5201),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(S,M?f:f.default.locals,M)?(S=M?f:f.default.locals,h(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map