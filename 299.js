(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{310:(e,s,t)=>{"use strict";t.d(s,{Yg:()=>T,zO:()=>q,y_:()=>w,VT:()=>M,RY:()=>A});var n=t(2784),r=t(6647),o=t(4489),a=t(9385);const l=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=l;subscriptions=i}const c=r.gql`
  query {
    files {
      name
    }
  }
`,d=r.gql`
  query {
    hello
  }
`;var g=t(8141);const f=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,m=r.gql`
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
`,v=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,S=new class extends u{hello(){return(0,o.D)(this.client.request(d))}};function q(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[S.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const y=new class extends u{getMessages(){return(0,o.D)(this.client.request(f))}sendMessage(e){return(0,o.D)(this.client.request(b,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[y.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),y.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>y.sendMessage(e)}]}const x=new class extends u{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[x.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const E=new class extends u{sendSignal(e){return(0,o.D)(this.client.request(v,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function A(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[E.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>E.sendSignal(e)}]}const k=new class extends u{files(){return(0,o.D)(this.client.request(c))}};function T(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[k.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},7080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(3115),o=t.n(r),a=t(310),l=t(4544);function i(){const[e,{sendSignal:s}]=(0,a.RY)(),[t,r]=(0,n.useState)(void 0),[i,u]=(0,n.useState)(null),c=(0,n.useRef)(null),d=(0,n.useRef)(null),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&c.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),c.current.signal(e.signal)}}),[e,c,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{u(e);const n=new(o())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(g.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));c.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(i){const e=i.getVideoTracks();return console.log({stream:i,videoTracks:e}),Object.assign(d.current,{srcObject:i}),()=>{i.getTracks().forEach((e=>e.stop()))}}}),[i]),n.createElement("div",{className:l.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(272),r=t.n(n),o=t(2609),a=t.n(o)()(r());a.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),a.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const l=a},4544:(e,s,t)=>{"use strict";t.d(s,{Z:()=>q});var n=t(6062),r=t.n(n),o=t(4036),a=t.n(o),l=t(6793),i=t.n(l),u=t(7892),c=t.n(u),d=t(1173),g=t.n(d),f=t(2464),m=t.n(f),b=t(3540),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=g();var h=r()(b.default,p);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,S=v?b:b.default.locals;e.hot.accept(3540,(s=>{b=t(3540),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,v?b:b.default.locals,v)?(S=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=b.default&&b.default.locals?b.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map