"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[22],{310:(e,s,n)=>{n.d(s,{Yg:()=>$,zO:()=>q,y_:()=>w,VT:()=>x,RY:()=>E});var t=n(2784),r=n(6647),a=n(4489),l=n(9385);const u=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class i{client=u;subscriptions=o}const c=r.gql`
  query {
    files {
      name
    }
  }
`,d=r.gql`
  query {
    hello
  }
`;var g=n(8141);const p=r.gql`
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
`,m=r.gql`
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
`,S=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,v=new class extends i{hello(){return(0,a.D)(this.client.request(d))}};function q(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[v.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const M=new class extends i{getMessages(){return(0,a.D)(this.client.request(p))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:f},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function w(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[M.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),M.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>M.sendMessage(e)}]}const y=new class extends i{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function x(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[y.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const A=new class extends i{sendSignal(e){return(0,a.D)(this.client.request(S,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function E(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[A.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>A.sendSignal(e)}]}const k=new class extends i{files(){return(0,a.D)(this.client.request(c))}};function $(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[k.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5022:(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});var t=n(2784),r=n(310),a=n(2401);function l(){const[{values:e}]=(0,r.VT)();return console.log({values:e}),t.createElement("section",{className:a.Z.Section},null===e?t.createElement("div",null,"Loading..."):e.map(((e,s)=>t.createElement("div",{key:s},JSON.stringify(e)))))}},1408:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var t=n(272),r=n.n(t),a=n(2609),l=n.n(a)()(r());l.push([e.id,".BUVMpFXG9cmk5ZtAw0Oh{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Sensor/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),l.locals={Section:"BUVMpFXG9cmk5ZtAw0Oh"};const u=l},2401:(e,s,n)=>{n.d(s,{Z:()=>q});var t=n(6062),r=n.n(t),a=n(4036),l=n.n(a),u=n(6793),o=n.n(u),i=n(7892),c=n.n(i),d=n(1173),g=n.n(d),p=n(2464),f=n.n(p),b=n(1408),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=g();var h=r()(b.default,m);if(!b.default.locals||e.hot.invalidate){var S=!b.default.locals,v=S?b:b.default.locals;e.hot.accept(1408,(s=>{b=n(1408),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(v,S?b:b.default.locals,S)?(v=S?b:b.default.locals,h(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const q=b.default&&b.default.locals?b.default.locals:void 0}}]);
//# sourceMappingURL=22.js.map