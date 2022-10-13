"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[246],{9082:(e,s,t)=>{t.d(s,{L:()=>a,V:()=>o});var n=t(6647),r=t(9385);const a=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),o=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},8934:(e,s,t)=>{t.d(s,{Yg:()=>w,y_:()=>g,VT:()=>h});var n=t(2784),r=t(6647),a=t(7598),o=t(9082);class u{client=o.L;subscriptions=o.V}const l=r.gql`
  query {
    files {
      name
    }
  }
`;var c=t(3919);const i=r.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=r.gql`
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
`,p=new class extends u{getMessages(){return(0,a.D)(this.client.request(i))}sendMessage(e){return(0,a.D)(this.client.request(f,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function g(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[p.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),p.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>p.sendMessage(e)}]}const b=new class extends u{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function h(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[b.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const v=new class extends u{files(){return(0,a.D)(this.client.request(l))}};function w(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[v.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},2246:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(2784),r=t(8934),a=t(5098);function o(){const[{files:e}]=(0,r.Yg)();return n.createElement("section",{className:a.Z.Browser},null===e?n.createElement("div",null,"Loading..."):e.map((({name:e},s)=>n.createElement("div",{key:s},e))))}},5393:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var n=t(272),r=t.n(n),a=t(2609),o=t.n(a)()(r());o.push([e.id,".PhiGUjmUXa9MRAmc3aNA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Browser/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Browser {\n  color: purple;\n}\n"],sourceRoot:""}]),o.locals={Browser:"PhiGUjmUXa9MRAmc3aNA"};const u=o},5098:(e,s,t)=>{t.d(s,{Z:()=>M});var n=t(6062),r=t.n(n),a=t(4036),o=t.n(a),u=t(6793),l=t.n(u),c=t(7892),i=t.n(c),d=t(1173),f=t.n(d),m=t(2464),p=t.n(m),g=t(5393),b={};b.styleTagTransform=p(),b.setAttributes=i(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=f();var h=r()(g.default,b);if(!g.default.locals||e.hot.invalidate){var v=!g.default.locals,w=v?g:g.default.locals;e.hot.accept(5393,(s=>{g=t(5393),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(w,v?g:g.default.locals,v)?(w=v?g:g.default.locals,h(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){h()}));const M=g.default&&g.default.locals?g.default.locals:void 0}}]);
//# sourceMappingURL=246.js.map