(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[299],{1422:(e,s,t)=>{"use strict";t.d(s,{zO:()=>v,y_:()=>M,RY:()=>w});var n=t(2784),r=t(6647),a=t(4489),o=t(9385);const l=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=l;subscriptions=i}const u=r.gql`
  query {
    hello
  }
`;var d=t(8141);const g=r.gql`
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
`,m=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,p=r.gql`
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
`,b=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,h=new class extends c{hello(){return(0,a.D)(this.client.request(u))}};function v(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class extends c{getMessages(){return(0,a.D)(this.client.request(g))}sendMessage(e){return(0,a.D)(this.client.request(m,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[S.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),S.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>S.sendMessage(e)}]}const y=new class extends c{sendSignal(e){return(0,a.D)(this.client.request(b,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[y.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>y.sendSignal(e)}]}},7080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(3115),a=t.n(r),o=t(1422),l=t(4544);function i(){const[e,{sendSignal:s}]=(0,o.RY)(),[t,r]=(0,n.useState)(void 0),[i,c]=(0,n.useState)(null),u=(0,n.useRef)(null),d=(0,n.useRef)(null),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&u.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),u.current.signal(e.signal)}}),[e,u,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{c(e);const n=new(a())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(g.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));u.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(i){const e=i.getVideoTracks();return console.log({stream:i,videoTracks:e}),Object.assign(d.current,{srcObject:i}),()=>{i.getTracks().forEach((e=>e.stop()))}}}),[i]),n.createElement("div",{className:l.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0}))}},3540:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(272),r=t.n(n),a=t(2609),o=t.n(a)()(r());o.push([e.id,".QdhvmFxvbTAbWlV0dLxJ{color:green}","",{version:3,sources:["webpack://./../web/src/containers/Video.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".Video {\n  color: green;\n}\n"],sourceRoot:""}]),o.locals={Video:"QdhvmFxvbTAbWlV0dLxJ"};const l=o},4544:(e,s,t)=>{"use strict";t.d(s,{Z:()=>M});var n=t(6062),r=t.n(n),a=t(4036),o=t.n(a),l=t(6793),i=t.n(l),c=t(7892),u=t.n(c),d=t(1173),g=t.n(d),f=t(2464),m=t.n(f),p=t(3540),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=g();var h=r()(p.default,b);if(!p.default.locals||e.hot.invalidate){var v=!p.default.locals,S=v?p:p.default.locals;e.hot.accept(3540,(s=>{p=t(3540),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(S,v?p:p.default.locals,v)?(S=v?p:p.default.locals,h(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const M=p.default&&p.default.locals?p.default.locals:void 0},4854:()=>{},6602:()=>{}}]);
//# sourceMappingURL=299.js.map