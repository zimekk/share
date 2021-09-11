(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[805],{2986:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(2784),s=n(5228),l=n(3501),a=n(2357),o=n(3115),i=n.n(o),c=n(9467);const u=s.Ps`
  subscription {
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
`,d=s.Ps`
  mutation sendSignal($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;function f(){const[e]=(0,l.D)(d),[t,n]=(0,r.useState)(void 0),[s,o]=(0,r.useState)(null),f=(0,r.useRef)(null),g=(0,r.useRef)(null),v=(0,r.useRef)(null),{data:m,error:h,loading:p}=(0,a.m)(u,{variables:{}});return(0,r.useEffect)((()=>{if(m&&f.current){const{type:e}=m.signal;if("offer"===e&&t)return;if("answer"===e&&!t)return;console.log(["peer.signal"],m.signal),f.current.signal(m.signal)}}),[m,f,t]),(0,r.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((n=>{o(n);const r=new(i())({initiator:t,stream:n,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(n=>{console.log(["signal",t],{data:n}),e({variables:{signal:n}}).then((e=>{console.log(["connectUser"],{data:e})})).catch(console.error)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(v.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));f.current=r})).catch(console.error))}),[t]),(0,r.useEffect)((()=>{if(s){const e=s.getVideoTracks();return console.log({stream:s,videoTracks:e}),Object.assign(g.current,{srcObject:s}),()=>{s.getTracks().forEach((e=>e.stop()))}}}),[s]),r.createElement("div",{className:c.Z.Video},r.createElement("button",{onClick:()=>n(!0)},"setInitiator(true)"),r.createElement("button",{onClick:()=>n(!1)},"setInitiator(false)"),r.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),r.createElement("video",{ref:v,width:"200",autoPlay:!0,muted:!0}))}},1162:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(2609),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,"._quOIW4Vd6H1Cll80jFW{color:green}",""]),s.locals={Video:"_quOIW4Vd6H1Cll80jFW"};const l=s},9467:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(6062),s=n.n(r),l=n(4036),a=n.n(l),o=n(6793),i=n.n(o),c=n(7892),u=n.n(c),d=n(1173),f=n.n(d),g=n(2464),v=n.n(g),m=n(1162),h={};h.styleTagTransform=v(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f();var p=s()(m.default,h);if(!m.default.locals||e.hot.invalidate){var b=!m.default.locals,k=b?m:m.default.locals;e.hot.accept(1162,(t=>{m=n(1162),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(k,b?m:m.default.locals,b)?(k=b?m:m.default.locals,p(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){p()}));const E=m.default&&m.default.locals?m.default.locals:void 0},4854:()=>{},6602:()=>{}}]);