"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[740],{4281:(e,s,t)=>{t.d(s,{IE:()=>S,K2:()=>A,Yg:()=>P,zO:()=>k,y_:()=>Q,VT:()=>_,RY:()=>G});var n=t(2784),r=t(6647),o=t(7598),i=t(9385);const a=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,i.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=a;subscriptions=l}const c=r.gql`
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
`,q=r.gql`
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
`,h=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,v=r.gql`
  query {
    movies
  }
`;class S extends u{getMovies(){return(0,o.D)(this.client.request(v))}}var y=t(7984);const $=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,M=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,x=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,w=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,E=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,R=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,D=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class A extends u{getDevices(){return(0,o.D)(this.client.request($)).pipe((0,y.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(M,{location:e})).pipe((0,y.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,o.D)(this.client.request(x,{location:e,key:s}))}getRemoteTv(e,s){return(0,o.D)(this.client.request(w,{location:e,action:s}))}getRemoteVcr(e,s){return(0,o.D)(this.client.request(E,{location:e,action:s}))}sendMessage(e){return(0,o.D)(this.client.request(D,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:R},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const I=new class extends u{hello(){return(0,o.D)(this.client.request(g))}};function k(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[I.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const T=new class extends u{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(b,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function Q(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[T.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),T.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>T.sendMessage(e)}]}const V=new class extends u{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function _(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[V.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const C=new class extends u{sendSignal(e){return(0,o.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:q},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function G(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[C.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>C.sendSignal(e)}]}const z=new class extends u{files(){return(0,o.D)(this.client.request(c))}};function P(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[z.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},4740:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(4281),o=t(2341);const i=new r.IE;function a({version:e="v1"}){const[{movies:s}]=function(){const[e,s]=(0,n.useState)((()=>null));return(0,n.useEffect)((()=>{i.getMovies().subscribe((e=>s(e)))}),[]),[{movies:e}]}();return console.log({movies:s}),n.createElement("section",{className:o.Z.Section},n.createElement("h2",null,"Movies"),n.createElement("pre",null,JSON.stringify(s,null,2)))}},4027:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(272),r=t.n(n),o=t(2609),i=t.n(o)()(r());i.push([e.id,".oTg30aEz7GPX6prIqdV_{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Movies/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),i.locals={Section:"oTg30aEz7GPX6prIqdV_"};const a=i},2341:(e,s,t)=>{t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),o=t(4036),i=t.n(o),a=t(6793),l=t.n(a),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),m=t(2464),p=t.n(m),b=t(4027),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d();var q=r()(b.default,f);if(!b.default.locals||e.hot.invalidate){var h=!b.default.locals,v=h?b:b.default.locals;e.hot.accept(4027,(s=>{b=t(4027),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(v,h?b:b.default.locals,h)?(v=h?b:b.default.locals,q(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){q()}));const S=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=740.js.map