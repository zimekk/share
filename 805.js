(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[805],{2618:(e,s,t)=>{"use strict";t.d(s,{zO:()=>w,y_:()=>h,RY:()=>M});var n=t(2784),r=t(6647),o=t(9385),i=t(4489);const l=r.gql`
  query {
    hello
  }
`;var a=t(8141);const c=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,u=r.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,g=r.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,d=r.gql`
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
`,b=(0,o.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`}),m=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),p=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}getMessages(){return(0,i.D)(this.client.request(c))}sendMessage(e){return(0,i.D)(this.client.request(g,{message:e}))}onMessage(){return new a.y((e=>this.subscriptions.subscribe({query:u},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:m,subscriptions:b});function h(){const[e,s]=(0,n.useState)({messages:null});return(0,n.useEffect)((()=>{const e=[p.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e})))),console.error),p.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendMessage:e=>p.sendMessage(e)}]}const v=new class{constructor({client:e}){Object.assign(this,{client:e})}hello(){return(0,i.D)(this.client.request(l))}}({client:m});function w(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[v.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const S=new class{constructor({client:e,subscriptions:s}){Object.assign(this,{client:e,subscriptions:s})}sendSignal(e){return(0,i.D)(this.client.request(f,{signal:e}))}onSignal(){return new a.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}}({client:m,subscriptions:b});function M(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[S.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))),console.error)];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>S.sendSignal(e)}]}},2986:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var n=t(2784),r=t(3115),o=t.n(r),i=t(2618),l=t(9467);function a(){const[e,{sendSignal:s}]=(0,i.RY)(),[t,r]=(0,n.useState)(void 0),[a,c]=(0,n.useState)(null),u=(0,n.useRef)(null),g=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&u.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),u.current.signal(e.signal)}}),[e,u,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{c(e);const n=new(o())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(d.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));u.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(a){const e=a.getVideoTracks();return console.log({stream:a,videoTracks:e}),Object.assign(g.current,{srcObject:a}),()=>{a.getTracks().forEach((e=>e.stop()))}}}),[a]),n.createElement("div",{className:l.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0}))}},1162:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var n=t(9601),r=t.n(n),o=t(2609),i=t.n(o)()(r());i.push([e.id,".aNueg_AqlOwwPHH2gvtw{color:green}",""]),i.locals={Video:"aNueg_AqlOwwPHH2gvtw"};const l=i},9467:(e,s,t)=>{"use strict";t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),o=t(4036),i=t.n(o),l=t(6793),a=t.n(l),c=t(7892),u=t.n(c),g=t(1173),d=t.n(g),f=t(2464),b=t.n(f),m=t(1162),p={};p.styleTagTransform=b(),p.setAttributes=u(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=d();var h=r()(m.default,p);if(!m.default.locals||e.hot.invalidate){var v=!m.default.locals,w=v?m:m.default.locals;e.hot.accept(1162,(s=>{m=t(1162),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(w,v?m:m.default.locals,v)?(w=v?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=m.default&&m.default.locals?m.default.locals:void 0},4854:()=>{},6602:()=>{}}]);