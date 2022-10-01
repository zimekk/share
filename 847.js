"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[847],{1828:(e,t,n)=>{n.d(t,{K2:()=>w,Yg:()=>G,zO:()=>R,y_:()=>P,VT:()=>V,RY:()=>x});var l=n(2784),s=n(6647),a=n(4489),r=n(9385);const o=new s.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),u=(0,r.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`});class c{client=o;subscriptions=u}const i=s.gql`
  query {
    files {
      name
    }
  }
`,m=s.gql`
  query {
    hello
  }
`;var d=n(8141);const b=s.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,g=s.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,k=s.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,p=s.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,C=s.gql`
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
`,f=s.gql`
  mutation SendSignalMutation($signal: SignalInput) {
    sendSignal(signal: $signal)
  }
`,E=s.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,y=s.gql`
  query RemoteQuery {
    remote {
      data
    }
  }
`,h=s.gql`
  query RemoteTvQuery($key: String) {
    remoteRcu(key: $key) {
      data
    }
  }
`,S=s.gql`
  query RemoteTvQuery($action: String) {
    remoteTv(action: $action) {
      data
    }
  }
`,v=s.gql`
  query RemoteVcrQuery($action: String) {
    remoteVcr(action: $action) {
      data
    }
  }
`,q=s.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,$=s.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class w extends c{getDevices(){return(0,a.D)(this.client.request(E))}getMessages(){return(0,a.D)(this.client.request(y))}getRemoteRcu(e){return(0,a.D)(this.client.request(h,{key:e}))}getRemoteTv(e){return(0,a.D)(this.client.request(S,{action:e}))}getRemoteVcr(e){return(0,a.D)(this.client.request(v,{action:e}))}sendMessage(e){return(0,a.D)(this.client.request($,{data:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:q},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const M=new class extends c{hello(){return(0,a.D)(this.client.request(m))}};function R(){const[e,t]=(0,l.useState)({hello:null});return(0,l.useEffect)((()=>{const e=[M.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const D=new class extends c{getMessages(){return(0,a.D)(this.client.request(b))}sendMessage(e){return(0,a.D)(this.client.request(k,{message:e}))}onMessage(){return new d.y((e=>this.subscriptions.subscribe({query:g},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function P(){const[{messages:e},t]=(0,l.useState)((()=>({messages:null})));return(0,l.useEffect)((()=>{const e=[D.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),D.onMessage().subscribe((({message:e})=>t((({messages:t,...n})=>({...n,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>D.sendMessage(e)}]}const I=new class extends c{onSensor(){return new d.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function V(){const[{values:e},t]=(0,l.useState)((()=>({values:null})));return(0,l.useEffect)((()=>{const e=[I.onSensor().subscribe((({sensor:e})=>t((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const A=new class extends c{sendSignal(e){return(0,a.D)(this.client.request(f,{signal:e}))}onSignal(){return new d.y((e=>this.subscriptions.subscribe({query:C},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function x(){const[e,t]=(0,l.useState)({hello:null});return(0,l.useEffect)((()=>{const e=[A.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>A.sendSignal(e)}]}const T=new class extends c{files(){return(0,a.D)(this.client.request(i))}};function G(){const[e,t]=(0,l.useState)({files:null});return(0,l.useEffect)((()=>{const e=[T.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},9847:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var l=n(2784),s=n(1828);function a({discover:e}){return l.createElement("div",null,l.createElement("h3",null,"UPNP"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e()),[])},"Discover"))}async function r(e="KeyStandBy"){return await fetch("http://192.168.2.101:8080/control/rcu",{method:"POST",mode:"no-cors",body:`Keypress=${e}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>e.text())).then(console.log)}function o({remoteRcu:e,status:t}){const n=(0,l.useCallback)((e=>t()),[]),s=(0,l.useCallback)((e=>r("KeyStandBy")),[]),a=(0,l.useCallback)((e=>r("KeyVolumeDown")),[]),o=(0,l.useCallback)((t=>e("KeyVolumeUp")),[]);return l.createElement("div",null,l.createElement("h3",null,"ADB"),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:n},"Version")),l.createElement("fieldset",null,l.createElement("legend",null,"Power"),l.createElement("button",{onClick:s},"StandBy")),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:a},"Volume -"),l.createElement("button",{onClick:o},"Volume +")))}function u({remoteTv:e}){const t=(0,l.useCallback)((t=>e("GetVolume")),[]),n=(0,l.useCallback)((t=>e("SetVolume")),[]),s=(0,l.useCallback)((t=>e("GetMute")),[]),a=(0,l.useCallback)((t=>e("ListPresets")),[]),r=(0,l.useCallback)((t=>e("SetMute")),[]),o=(0,l.useCallback)((t=>e("X_SendKey")),[]),u=(0,l.useCallback)((t=>e("X_LaunchApp")),[]),c=(0,l.useCallback)((t=>e("X_DisplayPinCode")),[]),i=(0,l.useCallback)((t=>e("X_RequestAuth")),[]),m=(0,l.useCallback)((t=>e("X_GetAudioList")),[]),d=(0,l.useCallback)((t=>e("X_GetCurrentAudioID")),[]),b=(0,l.useCallback)((t=>e("GetCurrentConnectionIDs")),[]),g=(0,l.useCallback)((t=>e("GetMediaInfo")),[]),k=(0,l.useCallback)((t=>e("GetProtocolInfo")),[]);return l.createElement("div",null,l.createElement("h3",null,"TV"),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:t},"GetVolume"),l.createElement("button",{onClick:n},"SetVolume"),l.createElement("button",{onClick:s},"GetMute"),l.createElement("button",{onClick:r},"SetMute")),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:a},"ListPresets"),l.createElement("button",{onClick:o},"SendKey"),l.createElement("button",{onClick:u},"AppType"),l.createElement("button",{onClick:c},"PinCode"),l.createElement("button",{onClick:i},"RequestAuth"),l.createElement("button",{onClick:m},"GetAudioList"),l.createElement("button",{onClick:d},"GetCurrentAudioID"),l.createElement("button",{onClick:b},"GetCurrentConnectionIDs"),l.createElement("button",{onClick:g},"GetMediaInfo"),l.createElement("button",{onClick:k},"GetProtocolInfo")))}async function c(e){return fetch(`http://192.168.2.103/YamahaExtendedControl/v1/${e}`,{method:"GET",mode:"no-cors"}).then((e=>e.text())).then(console.log)}function i({remoteVcr:e}){return l.createElement("div",null,l.createElement("h3",null,"VCR"),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("system/getDeviceInfo")),[])},"Device"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("system/getFeatures")),[])},"Features"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("system/getNetworkStatus")),[])},"NetworkStatus"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("system/getFuncStatus")),[])},"FuncStatus"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("system/getLocationInfo")),[])},"LocationInfo"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("main/getStatus")),[])},"Status"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("main/getSoundProgramList")),[])},"SoundProgramList")),l.createElement("fieldset",null,l.createElement("legend",null,"Input"),["airplay","bluetooth","net_radio","optical1","tuner"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>c(`main/setInput?input=${e}`)),[])},e)))),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),[50,70,90,110,130,150].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>c(`main/setVolume?volume=${e}`)),[])},`Set ${e}%`))),["up","down"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>c(`main/setVolume?volume=${e}`)),[])},`Volume ${e}`))),[!0,!1].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`main/setMute?enable=${t}`)),[])},"Mute "+(t?"On":"Off"))))),l.createElement("fieldset",null,l.createElement("legend",null,"Power Functions"),[!0,!1].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`system/setAutoPowerStandby?enable=${t}`)),[])},"AutoPowerStandby "+(t?"On":"Off")))),["on","standby","toggle"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>c(`main/setPower?power=${e}`)),[])},`Power ${e}`)))),l.createElement("fieldset",null,l.createElement("legend",null,"Sleep Timer"),[60,30,0].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`main/setSleep?sleep=${t}`)),[])},`Sleep ${t} min`)))),l.createElement("fieldset",null,l.createElement("legend",null,"AM/FM/DAB Tuner Commands"),[1,2,3,4].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`tuner/recallPreset?zone=main&band=fm&num=${t}`)),[])},`Preset ${t}`))),["next","previous"].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`tuner/switchPreset?dir=${t}`)),[])},`Preset ${t}`))),[87500,105200].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`tuner/setSleep?band=fm&tuning=direct&num=${t}`)),[])},`${new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(t/1e3)} MHz`))),[5,6,7,8].map(((t,n)=>l.createElement("button",{key:n,onClick:(0,l.useCallback)((n=>e(`tuner/storePreset?num=${t}`)),[])},`Store ${t}`))),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("tuner/getPresetInfo?band=fm")),[])},"PresetInfo"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e("tuner/getPlayInfo")),[])},"PlayInfo")))}var m=n(4371);const d=new s.K2;function b(){const[{data:e},{discover:t,remoteRcu:n,remoteTv:s,remoteVcr:r,status:c}]=function(){const[{data:e},t]=(0,l.useState)((()=>({data:null})));return(0,l.useEffect)((()=>{const e=[d.onMessage().subscribe((({data:e})=>t({data:e})))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{data:e},{discover:()=>d.getDevices(),remoteRcu:e=>d.getRemoteRcu(e),remoteTv:e=>d.getRemoteTv(e),remoteVcr:e=>d.getRemoteVcr(e),status:()=>d.getMessages(),sendMessage:e=>d.sendMessage(e)}]}();return console.log({data:e}),l.createElement("section",{className:m.Z.Section},l.createElement("h2",null,"Remote"),l.createElement(a,{discover:t}),l.createElement(o,{remoteRcu:n,status:c}),l.createElement(i,{remoteVcr:r}),l.createElement(u,{remoteTv:s}),null===e?l.createElement("div",null,"Loading..."):l.createElement("pre",null,JSON.stringify(e,null,2)))}},5071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(272),s=n.n(l),a=n(2609),r=n.n(a)()(s());r.push([e.id,".DeTwnNnGKuydH91RohQA{color:purple}","",{version:3,sources:["webpack://./../web/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),r.locals={Section:"DeTwnNnGKuydH91RohQA"};const o=r},4371:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),s=n.n(l),a=n(4036),r=n.n(a),o=n(6793),u=n.n(o),c=n(7892),i=n.n(c),m=n(1173),d=n.n(m),b=n(2464),g=n.n(b),k=n(5071),p={};p.styleTagTransform=g(),p.setAttributes=i(),p.insert=u().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d();var C=s()(k.default,p);if(!k.default.locals||e.hot.invalidate){var f=!k.default.locals,E=f?k:k.default.locals;e.hot.accept(5071,(t=>{k=n(5071),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(E,f?k:k.default.locals,f)?(E=f?k:k.default.locals,C(k.default)):e.hot.invalidate()}))}e.hot.dispose((function(){C()}));const y=k.default&&k.default.locals?k.default.locals:void 0}}]);
//# sourceMappingURL=847.js.map