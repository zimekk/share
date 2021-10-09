"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[309],{6309:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(2618),l=t(9606);function a(){const[{messages:e},{sendMessage:s}]=(0,r.y_)(),[t,a]=(0,n.useState)("");return n.createElement("div",{className:l.Z.Messages},n.createElement("span",null,null),n.createElement("input",{value:t,onChange:e=>{const{value:s}=e.target;a(s)}}),n.createElement("button",{onClick:()=>{a(""),s({uuid:null,text:t})}},"send"),e&&n.createElement("div",null,n.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function i(){return n.createElement(a,null)}},2618:(e,s,t)=>{t.d(s,{zO:()=>M,y_:()=>h,RY:()=>q});var n=t(2784),r=t(6647),l=t(9385),a=t(4489);const i=r.gql`
  query {
    hello
  }
`;var u=t(8141);const o=r.gql`
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
`,p=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`}),m=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),f=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}getMessages(){return(0,a.D)(this.client.request(o))}sendMessage(e){return(0,a.D)(this.client.request(g,{message:e}))}onMessage(){return new u.y((e=>this.subscriptions.subscribe({query:c},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:m,subscriptions:p});function h(){const[e,s]=(0,n.useState)({messages:null});return(0,n.useEffect)((()=>{const e=[f.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e})))),console.error),f.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendMessage:e=>f.sendMessage(e)}]}const S=new class{constructor({client:e}){Object.assign(this,{client:e})}hello(){return(0,a.D)(this.client.request(i))}}({client:m});function M(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[S.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const v=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}sendSignal(e){return(0,a.D)(this.client.request(b,{signal:e}))}onSignal(){return new u.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:m,subscriptions:p});function q(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[v.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>v.sendSignal(e)}]}},5201:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(9601),r=t.n(n),l=t(2609),a=t.n(l)()(r());a.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}",""]),a.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const i=a},9606:(e,s,t)=>{t.d(s,{Z:()=>v});var n=t(6062),r=t.n(n),l=t(4036),a=t.n(l),i=t(6793),u=t.n(i),o=t(7892),c=t.n(o),g=t(1173),d=t.n(g),b=t(2464),p=t.n(b),m=t(5201),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=u().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d();var h=r()(m.default,f);if(!m.default.locals||e.hot.invalidate){var S=!m.default.locals,M=S?m:m.default.locals;e.hot.accept(5201,(s=>{m=t(5201),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(M,S?m:m.default.locals,S)?(M=S?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=m.default&&m.default.locals?m.default.locals:void 0}}]);