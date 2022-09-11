"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[309],{6309:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(2784),r=t(1828),a=t(9606);function u(){const[{messages:e},{sendMessage:s}]=(0,r.y_)(),[t,u]=(0,n.useState)(""),o=()=>{u(""),s({uuid:null,text:t})};return n.createElement("div",{className:a.Z.Messages},n.createElement("span",null,null),n.createElement("input",{value:t,onChange:e=>{const{value:s}=e.target;u(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),o())}),n.createElement("button",{onClick:o},"send"),e&&n.createElement("div",null,n.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function o(){return n.createElement(u,null)}},1828:(e,s,t)=>{t.d(s,{K2:()=>x,Yg:()=>I,zO:()=>w,y_:()=>A,VT:()=>R,RY:()=>T});var n=t(2784),r=t(6647),a=t(4489),u=t(9385);const o=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,u.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=o;subscriptions=l}const c=r.gql`
  query {
    files {
      name
    }
  }
`,g=r.gql`
  query {
    hello
  }
`;var d=t(8141);const m=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,p=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,b=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,f=r.gql`
  subscription SensorSubscription {
    sensor {
      data
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
`,q=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,S=r.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,v=r.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,y=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,M=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class x extends i{getMessages(){return(0,a.D)(this.client.request(S))}getRemoteTv(e){return(0,a.D)(this.client.request(v,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request(M,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:y},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const E=new class extends i{hello(){return(0,a.D)(this.client.request(g))}};function w(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[E.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const $=new class extends i{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function A(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[$.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),$.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>$.sendMessage(e)}]}const D=new class extends i{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function R(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[D.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const k=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(q,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function T(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>k.sendSignal(e)}]}const C=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function I(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[C.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5201:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(272),r=t.n(n),a=t(2609),u=t.n(a)()(r());u.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),u.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const o=u},9606:(e,s,t)=>{t.d(s,{Z:()=>v});var n=t(6062),r=t.n(n),a=t(4036),u=t.n(a),o=t(6793),l=t.n(o),i=t(7892),c=t.n(i),g=t(1173),d=t.n(g),m=t(2464),p=t.n(m),b=t(5201),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=u(),f.insertStyleElement=d();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,S=q?b:b.default.locals;e.hot.accept(5201,(s=>{b=t(5201),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,q?b:b.default.locals,q)?(S=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map