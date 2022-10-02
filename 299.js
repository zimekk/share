(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{1828:(e,s,t)=>{"use strict";t.d(s,{K2:()=>E,Yg:()=>O,zO:()=>D,y_:()=>T,VT:()=>I,RY:()=>C});var n=t(2784),r=t(6647),o=t(7598),i=t(9385);const a=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,i.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=a;subscriptions=l}const u=r.gql`
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
`;var q=t(7984);const y=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,S=r.gql`
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
  query RemoteVcrQuery($action: String) {
    remoteVcr(action: $action) {
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
`;class E extends c{getDevices(){return(0,o.D)(this.client.request(y)).pipe((0,q.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(S,{location:e})).pipe((0,q.U)((({version:e})=>e)))}getRemoteRcu(e,s){return(0,o.D)(this.client.request($,{location:e,key:s}))}getRemoteTv(e,s){return(0,o.D)(this.client.request(x,{location:e,action:s}))}getRemoteVcr(e){return(0,o.D)(this.client.request(M,{action:e}))}sendMessage(e){return(0,o.D)(this.client.request(R,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:w},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const k=new class extends c{hello(){return(0,o.D)(this.client.request(g))}};function D(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const A=new class extends c{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function T(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[A.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),A.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>A.sendMessage(e)}]}const V=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function I(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[V.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const Q=new class extends c{sendSignal(e){return(0,o.D)(this.client.request(v,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function C(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[Q.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>Q.sendSignal(e)}]}const P=new class extends c{files(){return(0,o.D)(this.client.request(u))}};function O(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[P.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(2784),r=t(3115),o=t.n(r),i=t(1828),a=t(4544);function l(){const[e,{sendSignal:s}]=(0,i.RY)(),[t,r]=(0,n.useState)(void 0),[l,c]=(0,n.useState)(null),u=(0,n.useRef)(null),g=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&u.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),u.current.signal(e.signal)}}),[e,u,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{c(e);const n=new(o())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(d.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));u.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(l){const e=l.getVideoTracks();return console.log({stream:l,videoTracks:e}),Object.assign(g.current,{srcObject:l}),()=>{l.getTracks().forEach((e=>e.stop()))}}}),[l]),n.createElement("div",{className:a.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var n=t(272),r=t.n(n),o=t(2609),i=t.n(o)()(r());i.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),i.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const a=i},4544:(e,s,t)=>{"use strict";t.d(s,{Z:()=>y});var n=t(6062),r=t.n(n),o=t(4036),i=t.n(o),a=t(6793),l=t.n(a),c=t(7892),u=t.n(c),g=t(1173),d=t.n(g),m=t(2464),f=t.n(m),p=t(3540),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d();var h=r()(p.default,b);if(!p.default.locals||e.hot.invalidate){var v=!p.default.locals,q=v?p:p.default.locals;e.hot.accept(3540,(s=>{p=t(3540),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(q,v?p:p.default.locals,v)?(q=v?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const y=p.default&&p.default.locals?p.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map