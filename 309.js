"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[309],{6309:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(2784),r=n(310),a=n(9606);function l(){const[{messages:e},{sendMessage:s}]=(0,r.y_)(),[n,l]=(0,t.useState)(""),u=()=>{l(""),s({uuid:null,text:n})};return t.createElement("div",{className:a.Z.Messages},t.createElement("span",null,null),t.createElement("input",{value:n,onChange:e=>{const{value:s}=e.target;l(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),u())}),t.createElement("button",{onClick:u},"send"),e&&t.createElement("div",null,t.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function u(){return t.createElement(l,null)}},310:(e,s,n)=>{n.d(s,{Yg:()=>k,zO:()=>M,y_:()=>y,VT:()=>x,RY:()=>A});var t=n(2784),r=n(6647),a=n(4489),l=n(9385);const u=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=o}const c=r.gql`
  query {
    files {
      name
    }
  }
`,g=r.gql`
  query {
    hello
  }
`;var d=n(8141);const p=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,f=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,m=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,b=r.gql`
  subscription SensorSubscription {
    sensor {
      value
    }
  }
`,h=r.gql`
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
`,S=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,v=new class extends i{hello(){return(0,a.D)(this.client.request(g))}};function M(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const q=new class extends i{getMessages(){return(0,a.D)(this.client.request(p))}sendMessage(e){return(0,a.D)(this.client.request(m,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function y(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[q.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),q.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>q.sendMessage(e)}]}const E=new class extends i{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function x(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[E.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const w=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(S,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function A(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[w.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>w.sendSignal(e)}]}const $=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function k(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[$.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5201:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),r=n.n(t),a=n(2609),l=n.n(a)()(r());l.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),l.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const u=l},9606:(e,s,n)=>{n.d(s,{Z:()=>M});var t=n(6062),r=n.n(t),a=n(4036),l=n.n(a),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),g=n(1173),d=n.n(g),p=n(2464),f=n.n(p),m=n(5201),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=o().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d();var h=r()(m.default,b);if(!m.default.locals||e.hot.invalidate){var S=!m.default.locals,v=S?m:m.default.locals;e.hot.accept(5201,(s=>{m=n(5201),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(v,S?m:m.default.locals,S)?(v=S?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const M=m.default&&m.default.locals?m.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map