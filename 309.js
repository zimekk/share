"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[309],{9082:(e,t,s)=>{s.d(t,{L:()=>a,V:()=>o});var n=s(6647),r=s(9385);const a=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},6309:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s(2784),r=s(1828),a=s(9606);function o(){const[{messages:e},{sendMessage:t}]=(0,r.y_)(),[s,o]=(0,n.useState)(""),i=()=>{o(""),t({uuid:null,text:s})};return n.createElement("div",{className:a.Z.Messages},n.createElement("span",null,null),n.createElement("input",{value:s,onChange:e=>{const{value:t}=e.target;o(t)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),i())}),n.createElement("button",{onClick:i},"send"),e&&n.createElement("div",null,n.createElement("pre",null,e.map((({uuid:e,text:t})=>`[${e}] ${t}`)).join("\n"))))}function i(){return n.createElement(o,null)}},1828:(e,t,s)=>{s.d(t,{K2:()=>E,Yg:()=>I,zO:()=>D,y_:()=>k,VT:()=>Q,RY:()=>C});var n=s(2784),r=s(6647),a=s(7598),o=s(9082);class i{client=o.L;subscriptions=o.V}const l=r.gql`
  query {
    files {
      name
    }
  }
`,u=r.gql`
  query {
    hello
  }
`;var c=s(8141);const g=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=r.gql`
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
`,p=r.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,b=r.gql`
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
`,f=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;var h=s(7984);const q=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,v=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,y=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,S=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,$=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,M=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,x=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class E extends i{getDevices(){return(0,a.D)(this.client.request(q)).pipe((0,h.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,a.D)(this.client.request(v,{location:e})).pipe((0,h.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,a.D)(this.client.request(y,{location:e,key:t}))}getRemoteTv(e,t){return(0,a.D)(this.client.request(S,{location:e,action:t}))}getRemoteVcr(e,t){return(0,a.D)(this.client.request($,{location:e,action:t}))}sendMessage(e){return(0,a.D)(this.client.request(x,{data:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:M},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const w=new class extends i{hello(){return(0,a.D)(this.client.request(u))}};function D(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[w.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const R=new class extends i{getMessages(){return(0,a.D)(this.client.request(g))}sendMessage(e){return(0,a.D)(this.client.request(m,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:d},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function k(){const[{messages:e},t]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[R.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),R.onMessage().subscribe((({message:e})=>t((({messages:t,...s})=>({...s,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>R.sendMessage(e)}]}const A=new class extends i{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function Q(){const[{values:e},t]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[A.onSensor().subscribe((({sensor:e})=>t((({values:t,...s})=>({...s,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const T=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(f,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:b},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function C(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[T.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>T.sendSignal(e)}]}const V=new class extends i{files(){return(0,a.D)(this.client.request(l))}};function I(){const[e,t]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[V.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5201:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s(272),r=s.n(n),a=s(2609),o=s.n(a)()(r());o.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),o.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const i=o},7984:(e,t,s)=>{s.d(t,{U:()=>a});var n=s(1118),r=s(7394);function a(e,t){return(0,n.e)((function(s,n){var a=0;s.subscribe((0,r.x)(n,(function(s){n.next(e.call(t,s,a++))})))}))}},9606:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(6062),r=s.n(n),a=s(4036),o=s.n(a),i=s(6793),l=s.n(i),u=s(7892),c=s.n(u),g=s(1173),d=s.n(g),m=s(2464),p=s.n(m),b=s(5201),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d();var h=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var q=!b.default.locals,v=q?b:b.default.locals;e.hot.accept(5201,(t=>{b=s(5201),function(e,t,s){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!s||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(s&&"default"===n||e[n]))return!1;return!0}(v,q?b:b.default.locals,q)?(v=q?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map