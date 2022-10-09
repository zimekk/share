(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{9082:(e,s,t)=>{"use strict";t.d(s,{L:()=>o,V:()=>a});var n=t(6647),r=t(9385);const o=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),a=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},310:(e,s,t)=>{"use strict";t.d(s,{Yg:()=>A,zO:()=>v,y_:()=>q,VT:()=>w,RY:()=>M});var n=t(2784),r=t(6647),o=t(7598),a=t(9082);class l{client=a.L;subscriptions=a.V}const i=r.gql`
  query {
    files {
      name
    }
  }
`,u=r.gql`
  query {
    hello
  }
`;var c=t(3919);const d=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,g=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,f=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,m=r.gql`
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
`,p=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends l{hello(){return(0,o.D)(this.client.request(u))}};function v(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends l{getMessages(){return(0,o.D)(this.client.request(d))}sendMessage(e){return(0,o.D)(this.client.request(f,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:g},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const y=new class extends l{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[y.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const x=new class extends l{sendSignal(e){return(0,o.D)(this.client.request(p,{signal:e}))}onSignal(){return new c.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[x.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>x.sendSignal(e)}]}const E=new class extends l{files(){return(0,o.D)(this.client.request(i))}};function A(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[E.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(3115),o=t.n(r),a=t(310),l=t(4544);function i(){const[e,{sendSignal:s}]=(0,a.RY)(),[t,r]=(0,n.useState)(void 0),[i,u]=(0,n.useState)(null),c=(0,n.useRef)(null),d=(0,n.useRef)(null),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&c.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),c.current.signal(e.signal)}}),[e,c,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{u(e);const n=new(o())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(g.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));c.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(i){const e=i.getVideoTracks();return console.log({stream:i,videoTracks:e}),Object.assign(d.current,{srcObject:i}),()=>{i.getTracks().forEach((e=>e.stop()))}}}),[i]),n.createElement("div",{className:l.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),a.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const l=a},4544:(e,s,t)=>{"use strict";t.d(s,{Z:()=>q});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),l=t(6793),i=t.n(l),u=t(7892),c=t.n(u),d=t(1173),g=t.n(d),f=t(2464),m=t.n(f),b=t(3540),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=g();var h=r()(b.default,p);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,S=v?b:b.default.locals;e.hot.accept(3540,(s=>{b=t(3540),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,v?b:b.default.locals,v)?(S=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=b.default&&b.default.locals?b.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map