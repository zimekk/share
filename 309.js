"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[309],{6309:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(2784),a=n(1422),l=n(9606);function r(){const[{messages:e},{sendMessage:s}]=(0,a.y_)(),[n,r]=(0,t.useState)(""),u=()=>{r(""),s({uuid:null,text:n})};return t.createElement("div",{className:l.Z.Messages},t.createElement("span",null,null),t.createElement("input",{value:n,onChange:e=>{const{value:s}=e.target;r(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),u())}),t.createElement("button",{onClick:u},"send"),e&&t.createElement("div",null,t.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function u(){return t.createElement(r,null)}},1422:(e,s,n)=>{n.d(s,{zO:()=>S,y_:()=>v,RY:()=>q});var t=n(2784),a=n(6647),l=n(4489),r=n(9385);const u=new a.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class o{client=u;subscriptions=i}const c=a.gql`
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
`,m=a.gql`
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
`,b=a.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends o{hello(){return(0,l.D)(this.client.request(c))}};function S(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const M=new class extends o{getMessages(){return(0,l.D)(this.client.request(g))}sendMessage(e){return(0,l.D)(this.client.request(f,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function v(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[M.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),M.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>M.sendMessage(e)}]}const y=new class extends o{sendSignal(e){return(0,l.D)(this.client.request(b,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[y.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>y.sendSignal(e)}]}},5201:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(9601),a=n.n(t),l=n(2609),r=n.n(l)()(a());r.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}",""]),r.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const u=r},9606:(e,s,n)=>{n.d(s,{Z:()=>v});var t=n(6062),a=n.n(t),l=n(4036),r=n.n(l),u=n(6793),i=n.n(u),o=n(7892),c=n.n(o),d=n(1173),g=n.n(d),m=n(2464),f=n.n(m),p=n(5201),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=g();var h=a()(p.default,b);if(!p.default.locals||e.hot.invalidate){var S=!p.default.locals,M=S?p:p.default.locals;e.hot.accept(5201,(s=>{p=n(5201),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(M,S?p:p.default.locals,S)?(M=S?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=p.default&&p.default.locals?p.default.locals:void 0}}]);