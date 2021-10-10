(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[805],{1422:(e,s,t)=>{"use strict";t.d(s,{zO:()=>v,y_:()=>S,RY:()=>q});var n=t(2784),r=t(6647),a=t(4489),l=t(9385);const o=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),i=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class u{client=o;subscriptions=i}const c=r.gql`
  query {
    hello
  }
`;var g=t(8141);const d=r.gql`
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
`,h=new class extends u{hello(){return(0,a.D)(this.client.request(c))}};function v(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[h.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const w=new class extends u{getMessages(){return(0,a.D)(this.client.request(d))}sendMessage(e){return(0,a.D)(this.client.request(m,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function S(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[w.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),w.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>w.sendMessage(e)}]}const M=new class extends u{sendSignal(e){return(0,a.D)(this.client.request(p,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[e,s]=(0,n.useState)({hello:null});return(0,n.useEffect)((()=>{const e=[M.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>M.sendSignal(e)}]}},2986:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t(2784),r=t(3115),a=t.n(r),l=t(1422),o=t(9467);function i(){const[e,{sendSignal:s}]=(0,l.RY)(),[t,r]=(0,n.useState)(void 0),[i,u]=(0,n.useState)(null),c=(0,n.useRef)(null),g=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(e&&c.current){const{type:s}=e.signal;if("offer"===s&&t)return;if("answer"===s&&!t)return;console.log(["peer.signal"],e.signal),c.current.signal(e.signal)}}),[e,c,t]),(0,n.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((e=>{u(e);const n=new(a())({initiator:t,stream:e,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(e=>{console.log(["signal",t],{data:e}),s(e)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(d.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));c.current=n})).catch(console.error))}),[t]),(0,n.useEffect)((()=>{if(i){const e=i.getVideoTracks();return console.log({stream:i,videoTracks:e}),Object.assign(g.current,{srcObject:i}),()=>{i.getTracks().forEach((e=>e.stop()))}}}),[i]),n.createElement("div",{className:o.Z.Video},n.createElement("button",{onClick:()=>r(!0)},"setInitiator(true)"),n.createElement("button",{onClick:()=>r(!1)},"setInitiator(false)"),n.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),n.createElement("video",{ref:d,width:"200",autoPlay:!0,muted:!0}))}},1162:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var n=t(9601),r=t.n(n),a=t(2609),l=t.n(a)()(r());l.push([e.id,".aNueg_AqlOwwPHH2gvtw{color:green}",""]),l.locals={Video:"aNueg_AqlOwwPHH2gvtw"};const o=l},9467:(e,s,t)=>{"use strict";t.d(s,{Z:()=>S});var n=t(6062),r=t.n(n),a=t(4036),l=t.n(a),o=t(6793),i=t.n(o),u=t(7892),c=t.n(u),g=t(1173),d=t.n(g),f=t(2464),m=t.n(f),b=t(1162),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=l(),p.insertStyleElement=d();var h=r()(b.default,p);if(!b.default.locals||e.hot.invalidate){var v=!b.default.locals,w=v?b:b.default.locals;e.hot.accept(1162,(s=>{b=t(1162),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(w,v?b:b.default.locals,v)?(w=v?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const S=b.default&&b.default.locals?b.default.locals:void 0},4854:()=>{},6602:()=>{}}]);