"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[942],{310:(e,s,n)=>{n.d(s,{Yg:()=>C,zO:()=>v,y_:()=>q,VT:()=>M,RY:()=>E});var t=n(2784),r=n(6647),o=n(4489),a=n(9385);const l=new r.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=l;subscriptions=u}const i=r.gql`
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
`,m=r.gql`
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
`,b=r.gql`
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
`,S=r.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,y=new class extends c{hello(){return(0,o.D)(this.client.request(d))}};function v(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[y.hello().subscribe((({hello:e})=>s((s=>({...s,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const w=new class extends c{getMessages(){return(0,o.D)(this.client.request(p))}sendMessage(e){return(0,o.D)(this.client.request(f,{message:e}))}onMessage(){return new g.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function q(){const[{messages:e},s]=(0,t.useState)((()=>({messages:null})));return(0,t.useEffect)((()=>{const e=[w.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),w.onMessage().subscribe((({message:e})=>s((({messages:s,...n})=>({...n,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>w.sendMessage(e)}]}const x=new class extends c{onSensor(){return new g.y((e=>this.subscriptions.subscribe({query:b},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function M(){const[{values:e},s]=(0,t.useState)((()=>({values:null})));return(0,t.useEffect)((()=>{const e=[x.onSensor().subscribe((({sensor:e})=>s((({values:s,...n})=>({...n,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const A=new class extends c{sendSignal(e){return(0,o.D)(this.client.request(S,{signal:e}))}onSignal(){return new g.y((e=>this.subscriptions.subscribe({query:h},{next:({data:s,errors:n})=>n?e.error(n[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function E(){const[e,s]=(0,t.useState)({hello:null});return(0,t.useEffect)((()=>{const e=[A.onSignal().subscribe((({signal:e})=>s((s=>({...s,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>A.sendSignal(e)}]}const k=new class extends c{files(){return(0,o.D)(this.client.request(i))}};function C(){const[e,s]=(0,t.useState)({files:null});return(0,t.useEffect)((()=>{const e=[k.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},3942:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u,schema:()=>l});var t=n(2784),r=n(310),o=n(4371);async function a(e="KeyStandBy"){await fetch("http://192.168.2.101:8080/control/rcu",{method:"POST",mode:"no-cors",body:`Keypress=${e}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>Boolean(console.log({status:e.status,headers:[...e.headers.entries()]}))?null:e.text())).then((e=>console.log(e)))}const l=()=>{console.log(["schema"])};function u(){const[{values:e}]=(0,r.VT)();console.log({values:e});const s=(0,t.useCallback)((e=>{a("KeyVolumeDown")}),[]),n=(0,t.useCallback)((e=>{a("KeyVolumeUp")}),[]);return t.createElement("section",{className:o.Z.Section},t.createElement("button",{onClick:s},"Volume -"),t.createElement("button",{onClick:n},"Volume +"),null===e?t.createElement("div",null,"Loading..."):e.map(((e,s)=>t.createElement("div",{key:s},JSON.stringify(e)))))}console.log},5071:(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});var t=n(272),r=n.n(t),o=n(2609),a=n.n(o)()(r());a.push([e.id,".DeTwnNnGKuydH91RohQA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),a.locals={Section:"DeTwnNnGKuydH91RohQA"};const l=a},4371:(e,s,n)=>{n.d(s,{Z:()=>v});var t=n(6062),r=n.n(t),o=n(4036),a=n.n(o),l=n(6793),u=n.n(l),c=n(7892),i=n.n(c),d=n(1173),g=n.n(d),p=n(2464),m=n.n(p),f=n(5071),b={};b.styleTagTransform=m(),b.setAttributes=i(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=g();var h=r()(f.default,b);if(!f.default.locals||e.hot.invalidate){var S=!f.default.locals,y=S?f:f.default.locals;e.hot.accept(5071,(s=>{f=n(5071),function(e,s,n){if(!e&&s||e&&!s)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==s[t])return!1;for(t in s)if(!(n&&"default"===t||e[t]))return!1;return!0}(y,S?f:f.default.locals,S)?(y=S?f:f.default.locals,h(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const v=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=942.js.map