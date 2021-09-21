(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[805],{2986:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(2784),l=n(5228),r=n(3501),s=n(2357),o=n(3115),i=n.n(o),c=n(9467);const u=l.Ps`
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
`,d=l.Ps`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`;function f(){const[e]=(0,r.D)(d),[t,n]=(0,a.useState)(void 0),[l,o]=(0,a.useState)(null),f=(0,a.useRef)(null),g=(0,a.useRef)(null),v=(0,a.useRef)(null),{data:m,error:p,loading:h}=(0,s.m)(u,{variables:{}});return(0,a.useEffect)((()=>{if(m&&f.current){const{type:e}=m.signal;if("offer"===e&&t)return;if("answer"===e&&!t)return;console.log(["peer.signal"],m.signal),f.current.signal(m.signal)}}),[m,f,t]),(0,a.useEffect)((()=>{void 0!==t&&(console.log({initiator:t}),Promise.resolve().then((()=>t?navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}):Promise.resolve(null))).then((n=>{o(n);const a=new(i())({initiator:t,stream:n,trickle:!1,reconnectTimer:1e3,iceTransportPolicy:"relay",config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"}]}}).on("signal",(n=>{console.log(["signal",t],{data:n}),e({variables:{signal:n}}).then((e=>{console.log(["connectUser"],{data:e})})).catch(console.error)})).on("stream",(e=>{console.log(["stream",t],{stream:e}),Object.assign(v.current,{srcObject:e})})).on("error",(function(e){console.log(["error",t],{error:e})}));f.current=a})).catch(console.error))}),[t]),(0,a.useEffect)((()=>{if(l){const e=l.getVideoTracks();return console.log({stream:l,videoTracks:e}),Object.assign(g.current,{srcObject:l}),()=>{l.getTracks().forEach((e=>e.stop()))}}}),[l]),a.createElement("div",{className:c.Z.Video},a.createElement("button",{onClick:()=>n(!0)},"setInitiator(true)"),a.createElement("button",{onClick:()=>n(!1)},"setInitiator(false)"),a.createElement("video",{ref:g,width:"200",autoPlay:!0,muted:!0,playsInline:!0}),a.createElement("video",{ref:v,width:"200",autoPlay:!0,muted:!0}))}},1162:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(9601),l=n.n(a),r=n(2609),s=n.n(r)()(l());s.push([e.id,"._quOIW4Vd6H1Cll80jFW{color:green}",""]),s.locals={Video:"_quOIW4Vd6H1Cll80jFW"};const o=s},9467:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(6062),l=n.n(a),r=n(4036),s=n.n(r),o=n(6793),i=n.n(o),c=n(7892),u=n.n(c),d=n(1173),f=n.n(d),g=n(2464),v=n.n(g),m=n(1162),p={};p.styleTagTransform=v(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=f();var h=l()(m.default,p);if(!m.default.locals||e.hot.invalidate){var b=!m.default.locals,k=b?m:m.default.locals;e.hot.accept(1162,(t=>{m=n(1162),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(k,b?m:m.default.locals,b)?(k=b?m:m.default.locals,h(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const E=m.default&&m.default.locals?m.default.locals:void 0},4854:()=>{},6602:()=>{}}]);