"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[309],{6309:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(1828),a=t(9606);function o(){const[{messages:e},{sendMessage:s}]=(0,r.y_)(),[t,o]=(0,n.useState)(""),i=()=>{o(""),s({uuid:null,text:t})};return n.createElement("div",{className:a.Z.Messages},n.createElement("span",null,null),n.createElement("input",{value:t,onChange:e=>{const{value:s}=e.target;o(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),i())}),n.createElement("button",{onClick:i},"send"),e&&n.createElement("div",null,n.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function i(){return n.createElement(o,null)}},1828:(e,s,t)=>{t.d(s,{K2:()=>D,Yg:()=>Y,zO:()=>k,y_:()=>Q,VT:()=>C,RY:()=>_});var n=t(2784),r=t(6647),a=t(7598),o=t(9385);const i=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=i;subscriptions=l}const c=r.gql`
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
`;var y=t(7984);const S=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,v=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,$=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,M=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,x=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,E=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,w=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class D extends u{getDevices(){return(0,a.D)(this.client.request(S)).pipe((0,y.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,a.D)(this.client.request(v,{location:e})).pipe((0,y.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,a.D)(this.client.request($,{location:e,key:s}))}getRemoteTv(e,s){return(0,a.D)(this.client.request(M,{location:e,action:s}))}getRemoteVcr(e,s){return(0,a.D)(this.client.request(x,{location:e,action:s}))}sendMessage(e){return(0,a.D)(this.client.request(w,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:E},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const R=new class extends u{hello(){return(0,a.D)(this.client.request(g))}};function k(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[R.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const A=new class extends u{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[A.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),A.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>A.sendMessage(e)}]}const T=new class extends u{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function C(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[T.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const I=new class extends u{sendSignal(e){return(0,a.D)(this.client.request(q,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function _(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[I.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>I.sendSignal(e)}]}const V=new class extends u{files(){return(0,a.D)(this.client.request(c))}};function Y(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[V.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5201:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var n=t(272),r=t.n(n),a=t(2609),o=t.n(a)()(r());o.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),o.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const i=o},9606:(e,s,t)=>{t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),a=t(4036),o=t.n(a),i=t(6793),l=t.n(i),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),m=t(2464),p=t.n(m),b=t(5201),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,y=q?b:b.default.locals;e.hot.accept(5201,(s=>{b=t(5201),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(y,q?b:b.default.locals,q)?(y=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map