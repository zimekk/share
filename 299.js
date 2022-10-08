(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{4281:(e,t,s)=>{"use strict";s.d(t,{IE:()=>y,K2:()=>D,Yg:()=>j,zO:()=>T,y_:()=>I,VT:()=>C,RY:()=>O});var n=s(2784),r=s(6647),o=s(7598),i=s(9385);const a=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,i.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=a;subscriptions=l}const u=r.gql`
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
`,v=r.gql`
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
`,q=r.gql`
  query {
    movies
  }
`;class y extends c{getMovies(){return(0,o.D)(this.client.request(q))}}var S=s(7984);const $=r.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,x=r.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,M=r.gql`
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
`,R=r.gql`
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
`,k=r.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class D extends c{getDevices(){return(0,o.D)(this.client.request($)).pipe((0,S.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,o.D)(this.client.request(x,{location:e})).pipe((0,S.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,o.D)(this.client.request(M,{location:e,key:t}))}getRemoteTv(e,t){return(0,o.D)(this.client.request(w,{location:e,action:t}))}getRemoteVcr(e,t){return(0,o.D)(this.client.request(R,{location:e,action:t}))}sendMessage(e){return(0,o.D)(this.client.request(k,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:E},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const A=new class extends c{hello(){return(0,o.D)(this.client.request(g))}};function T(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[A.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const V=new class extends c{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(p,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function I(){const[{messages:e},t]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[V.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),V.onMessage().subscribe((({message:e})=>t((({messages:t,...s})=>({...s,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>V.sendMessage(e)}]}const Q=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:b},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function C(){const[{values:e},t]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[Q.onSensor().subscribe((({sensor:e})=>t((({values:t,...s})=>({...s,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const P=new class extends c{sendSignal(e){return(0,o.D)(this.client.request(h,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:v},{next:({data:t,errors:s})=>s?e.error(s[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function O(){const[e,t]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[P.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>P.sendSignal(e)}]}const _=new class extends c{files(){return(0,o.D)(this.client.request(u))}};function j(){const[e,t]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[_.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(2784),r=s(3115),o=s.n(r),i=s(4281),a=s(4544);function l(){const[e,{sendSignal:t}]=(0,i.RY)(),[s,r]=(0,n.useState)(void 0),[l,c]=(0,n.useState)(null),u=(0,n.useRef)(null),g=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&u.current){const{type:t}=e.signal;if("offer"===t&&s)return;if("answer"===t&&!s)return;console.log(["peer.signal"],e.signal),u.current.signal(e.signal)}}),[e,u,s]),(0,n.useEffect)((()=>{void 0!==s&&(console.log({initiator:s}),Promise.resolve().then((()=>s?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{c(e);const n=new(o())({initiator:s,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",s],{data:e}),t(e)})).on("stream",(e=>{console.log(["stream",s],{stream:e}),Object.assign(d.current,{srcObject:e})})).on("error",(function(e){console.log(["error",s],{error:e})}));u.current=n})).catch(console.error))}),[s]),(0,n.useEffect)((()=>{if(l){const e=l.getVideoTracks();return console.log({stream:l,videoTracks:e}),Object.assign(g.current,{srcObject:l}),()=>{l.getTracks().forEach((e=>e.stop()))}}}),[l]),n.createElement("div",{className:a.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var n=s(272),r=s.n(n),o=s(2609),i=s.n(o)()(r());i.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),i.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const a=i},4544:(e,t,s)=>{"use strict";s.d(t,{Z:()=>y});var n=s(6062),r=s.n(n),o=s(4036),i=s.n(o),a=s(6793),l=s.n(a),c=s(7892),u=s.n(c),g=s(1173),d=s.n(g),m=s(2464),f=s.n(m),p=s(3540),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d();var v=r()(p.default,b);if(!p.default.locals||e.hot.invalidate){var h=!p.default.locals,q=h?p:p.default.locals;e.hot.accept(3540,(t=>{p=s(3540),function(e,t,s){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!s||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(s&&"default"===n||e[n]))return!1;return!0}(q,h?p:p.default.locals,h)?(q=h?p:p.default.locals,v(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){v()}));const y=p.default&&p.default.locals?p.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map