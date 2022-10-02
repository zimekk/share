(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{1828:(e,t,s)=>{"use strict";s.d(t,{K2:()=>E,Yg:()=>O,zO:()=>D,y_:()=>T,VT:()=>I,RY:()=>C});var n=s(2784),r=s(6647),o=s(7598),i=s(9385);const a=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,i.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=a;subscriptions=l}const u=r.gql`
  query {
    files {
      name
    }
  }
`,g=r.gql`
  query {
    hello
  }
`;var d=s(8141);const m=r.gql`
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
`,p=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,b=r.gql`
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
`,v=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;var q=s(7984);const S=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,y=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,$=r.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,x=r.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,M=r.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,w=r.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,R=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class E extends c{getDevices(){return(0,o.D)(this.client.request(S)).pipe((0,q.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(y,{location:e})).pipe((0,q.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,o.D)(this.client.request($,{location:e,key:t}))}getRemoteTv(e,t){return(0,o.D)(this.client.request(x,{location:e,action:t}))}getRemoteVcr(e,t){return(0,o.D)(this.client.request(M,{location:e,action:t}))}sendMessage(e){return(0,o.D)(this.client.request(R,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:w},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const k=new class extends c{hello(){return(0,o.D)(this.client.request(g))}};function D(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const A=new class extends c{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function T(){const[{messages:e},t]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[A.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),A.onMessage().subscribe((({message:e})=>t((({messages:t,...s})=>({...s,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>A.sendMessage(e)}]}const V=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function I(){const[{values:e},t]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[V.onSensor().subscribe((({sensor:e})=>t((({values:t,...s})=>({...s,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const Q=new class extends c{sendSignal(e){return(0,o.D)(this.client.request(v,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function C(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[Q.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>Q.sendSignal(e)}]}const P=new class extends c{files(){return(0,o.D)(this.client.request(u))}};function O(){const[e,t]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[P.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(2784),r=s(3115),o=s.n(r),i=s(1828),a=s(4544);function l(){const[e,{sendSignal:t}]=(0,i.RY)(),[s,r]=(0,n.useState)(void 0),[l,c]=(0,n.useState)(null),u=(0,n.useRef)(null),g=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&u.current){const{type:t}=e.signal;if("offer"===t&&s)return;if("answer"===t&&!s)return;console.log(["peer.signal"],e.signal),u.current.signal(e.signal)}}),[e,u,s]),(0,n.useEffect)((()=>{void 0!==s&&(console.log({initiator:s}),Promise.resolve().then((()=>s?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{c(e);const n=new(o())({initiator:s,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",s],{data:e}),t(e)})).on("stream",(e=>{console.log(["stream",s],{stream:e}),Object.assign(d.current,{srcObject:e})})).on("error",(function(e){console.log(["error",s],{error:e})}));u.current=n})).catch(console.error))}),[s]),(0,n.useEffect)((()=>{if(l){const e=l.getVideoTracks();return console.log({stream:l,videoTracks:e}),Object.assign(g.current,{srcObject:l}),()=>{l.getTracks().forEach((e=>e.stop()))}}}),[l]),n.createElement("div",{className:a.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var n=s(272),r=s.n(n),o=s(2609),i=s.n(o)()(r());i.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),i.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const a=i},4544:(e,t,s)=>{"use strict";s.d(t,{Z:()=>S});var n=s(6062),r=s.n(n),o=s(4036),i=s.n(o),a=s(6793),l=s.n(a),c=s(7892),u=s.n(c),g=s(1173),d=s.n(g),m=s(2464),f=s.n(m),p=s(3540),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d();var h=r()(p.default,b);if(!p.default.locals||e.hot.invalidate){var v=!p.default.locals,q=v?p:p.default.locals;e.hot.accept(3540,(t=>{p=s(3540),function(e,t,s){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!s||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(s&&"default"===n||e[n]))return!1;return!0}(q,v?p:p.default.locals,v)?(q=v?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=p.default&&p.default.locals?p.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map