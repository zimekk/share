"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[309],{9082:(e,s,t)=>{t.d(s,{L:()=>r,V:()=>u});var n=t(6647),a=t(9385);const r=new n.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},6309:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(2784),a=t(8934),r=t(9606);function u(){const[{messages:e},{sendMessage:s}]=(0,a.y_)(),[t,u]=(0,n.useState)(""),l=()=>{u(""),s({uuid:null,text:t})};return n.createElement("div",{className:r.Z.Messages},n.createElement("span",null,null),n.createElement("input",{value:t,onChange:e=>{const{value:s}=e.target;u(s)},onKeyDown:e=>"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),l())}),n.createElement("button",{onClick:l},"send"),e&&n.createElement("div",null,n.createElement("pre",null,e.map((({uuid:e,text:s})=>`[${e}] ${s}`)).join("\n"))))}function l(){return n.createElement(u,null)}},8934:(e,s,t)=>{t.d(s,{Yg:()=>M,y_:()=>p,VT:()=>v});var n=t(2784),a=t(6647),r=t(7598),u=t(9082);class l{client=u.L;subscriptions=u.V}const o=a.gql`
  query {
    files {
      name
    }
  }
`;var c=t(3919);const i=a.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=a.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,g=a.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,m=a.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,f=new class extends l{getMessages(){return(0,r.D)(this.client.request(i))}sendMessage(e){return(0,r.D)(this.client.request(g,{message:e}))}onMessage(){return new c.y((e=>this.subscriptions.subscribe({query:d},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function p(){const[{messages:e},s]=(0,n.useState)((()=>({messages:null})));return(0,n.useEffect)((()=>{const e=[f.getMessages().subscribe((({messages:e})=>s((s=>({...s,messages:e}))))),f.onMessage().subscribe((({message:e})=>s((({messages:s,...t})=>({...t,messages:s.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>f.sendMessage(e)}]}const b=new class extends l{onSensor(){return new c.y((e=>this.subscriptions.subscribe({query:m},{next:({data:s,errors:t})=>t?e.error(t[0]):e.next(s),error:s=>e.error(s),complete:()=>e.complete()})))}};function v(){const[{values:e},s]=(0,n.useState)((()=>({values:null})));return(0,n.useEffect)((()=>{const e=[b.onSensor().subscribe((({sensor:e})=>s((({values:s,...t})=>({...t,values:(s||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const h=new class extends l{files(){return(0,r.D)(this.client.request(o))}};function M(){const[e,s]=(0,n.useState)({files:null});return(0,n.useEffect)((()=>{const e=[h.files().subscribe((({files:e})=>s((s=>({...s,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},5201:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var n=t(272),a=t.n(n),r=t(2609),u=t.n(r)()(a());u.push([e.id,".m68TYmnEHWUbsyOJQ9lS{color:orange}","",{version:3,sources:["webpack://./../talks/src/containers/Messages.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Messages {\n  color: orange;\n}\n"],sourceRoot:""}]),u.locals={Messages:"m68TYmnEHWUbsyOJQ9lS"};const l=u},9606:(e,s,t)=>{t.d(s,{Z:()=>y});var n=t(6062),a=t.n(n),r=t(4036),u=t.n(r),l=t(6793),o=t.n(l),c=t(7892),i=t.n(c),d=t(1173),g=t.n(d),m=t(2464),f=t.n(m),p=t(5201),b={};b.styleTagTransform=f(),b.setAttributes=i(),b.insert=o().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=g();var v=a()(p.default,b);if(!p.default.locals||e.hot.invalidate){var h=!p.default.locals,M=h?p:p.default.locals;e.hot.accept(5201,(s=>{p=t(5201),function(e,s,t){if(!e&&s||e&&!s)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==s[n])return!1;for(n in s)if(!(t&&"default"===n||e[n]))return!1;return!0}(M,h?p:p.default.locals,h)?(M=h?p:p.default.locals,v(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){v()}));const y=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=309.js.map