(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{1828:(e,s,t)=>{"use strict";t.d(s,{K2:()=>x,Yg:()=>V,zO:()=>E,y_:()=>T,VT:()=>$,RY:()=>D});var n=t(2784),r=t(6647),o=t(4489),a=t(9385);const i=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),l=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=i;subscriptions=l}const c=r.gql`
  query {
    files {
      name
    }
  }
`,d=r.gql`
  query {
    hello
  }
`;var g=t(8141);const m=r.gql`
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
`,b=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,p=r.gql`
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
`,q=r.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,S=r.gql`
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
`;class x extends u{getMessages(){return(0,o.D)(this.client.request(q))}getRemoteTv(e){return(0,o.D)(this.client.request(S,{action:e}))}sendMessage(e){return(0,o.D)(this.client.request(M,{data:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:y},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s.remote),error:s=>e.error(s),complete:()=>e.complete()})))}}const w=new class extends u{hello(){return(0,o.D)(this.client.request(d))}};function E(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[w.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const R=new class extends u{getMessages(){return(0,o.D)(this.client.request(m))}sendMessage(e){return(0,o.D)(this.client.request(b,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function T(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[R.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),R.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>R.sendMessage(e)}]}const A=new class extends u{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function $(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[A.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const k=new class extends u{sendSignal(e){return(0,o.D)(this.client.request(v,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function D(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[k.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>k.sendSignal(e)}]}const I=new class extends u{files(){return(0,o.D)(this.client.request(c))}};function V(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[I.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(2784),r=t(3115),o=t.n(r),a=t(1828),i=t(4544);function l(){const[e,{sendSignal:s}]=(0,a.RY)(),[t,r]=(0,n.useState)(void 0),[l,u]=(0,n.useState)(null),c=(0,n.useRef)(null),d=(0,n.useRef)(null),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&c.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),c.current.signal(e.signal)}}),[e,c,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{u(e);const n=new(o())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(g.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));c.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(l){const e=l.getVideoTracks();return console.log({stream:l,videoTracks:e}),Object.assign(d.current,{srcObject:l}),()=>{l.getTracks().forEach((e=>e.stop()))}}}),[l]),n.createElement("div",{className:i.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),a.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const i=a},4544:(e,s,t)=>{"use strict";t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),i=t(6793),l=t.n(i),u=t(7892),c=t.n(u),d=t(1173),g=t.n(d),m=t(2464),f=t.n(m),b=t(3540),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=l().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=g();var h=r()(b.default,p);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,q=v?b:b.default.locals;e.hot.accept(3540,(s=>{b=t(3540),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(q,v?b:b.default.locals,v)?(q=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map