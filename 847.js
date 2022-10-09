"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[847],{9082:(e,t,n)=>{n.d(t,{L:()=>a,V:()=>r});var l=n(6647),s=n(9385);const a=new l.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),r=(0,s.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},1828:(e,t,n)=>{n.d(t,{K2:()=>q,Yg:()=>T,zO:()=>M,y_:()=>R,VT:()=>V,RY:()=>D});var l=n(2784),s=n(6647),a=n(7598),r=n(9082);class o{client=r.L;subscriptions=r.V}const c=s.gql`
  query {
    files {
      name
    }
  }
`,u=s.gql`
  query {
    hello
  }
`;var i=n(8141);const m=s.gql`
  query MessagesQuery {
    messages {
      uuid
      text
    }
  }
`,d=s.gql`
  subscription MessageSubscription {
    message {
      uuid
      text
    }
  }
`,b=s.gql`
  mutation SendMessageMutation($message: MessageInput) {
    sendMessage(message: $message)
  }
`,g=s.gql`
  subscription SensorSubscription {
    sensor {
      data
    }
  }
`,p=s.gql`
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
`;var C=n(7984);const k=s.gql`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,E=s.gql`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,y=s.gql`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,h=s.gql`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,v=s.gql`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,S=s.gql`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,$=s.gql`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`;class q extends o{getDevices(){return(0,a.D)(this.client.request(k)).pipe((0,C.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,a.D)(this.client.request(E,{location:e})).pipe((0,C.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,a.D)(this.client.request(y,{location:e,key:t}))}getRemoteTv(e,t){return(0,a.D)(this.client.request(h,{location:e,action:t}))}getRemoteVcr(e,t){return(0,a.D)(this.client.request(v,{location:e,action:t}))}sendMessage(e){return(0,a.D)(this.client.request($,{data:e}))}onMessage(){return new i.y((e=>this.subscriptions.subscribe({query:S},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}}const w=new class extends o{hello(){return(0,a.D)(this.client.request(u))}};function M(){const[e,t]=(0,l.useState)({hello:null});return(0,l.useEffect)((()=>{const e=[w.hello().subscribe((({hello:e})=>t((t=>({...t,hello:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}const A=new class extends o{getMessages(){return(0,a.D)(this.client.request(m))}sendMessage(e){return(0,a.D)(this.client.request(b,{message:e}))}onMessage(){return new i.y((e=>this.subscriptions.subscribe({query:d},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function R(){const[{messages:e},t]=(0,l.useState)((()=>({messages:null})));return(0,l.useEffect)((()=>{const e=[A.getMessages().subscribe((({messages:e})=>t((t=>({...t,messages:e}))))),A.onMessage().subscribe((({message:e})=>t((({messages:t,...n})=>({...n,messages:t.concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{messages:e},{sendMessage:e=>A.sendMessage(e)}]}const P=new class extends o{onSensor(){return new i.y((e=>this.subscriptions.subscribe({query:g},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function V(){const[{values:e},t]=(0,l.useState)((()=>({values:null})));return(0,l.useEffect)((()=>{const e=[P.onSensor().subscribe((({sensor:e})=>t((({values:t,...n})=>({...n,values:(t||[]).concat([e])})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{values:e},{}]}const I=new class extends o{sendSignal(e){return(0,a.D)(this.client.request(f,{signal:e}))}onSignal(){return new i.y((e=>this.subscriptions.subscribe({query:p},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t),error:t=>e.error(t),complete:()=>e.complete()})))}};function D(){const[e,t]=(0,l.useState)({hello:null});return(0,l.useEffect)((()=>{const e=[I.onSignal().subscribe((({signal:e})=>t((t=>({...t,signal:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e,{sendSignal:e=>I.sendSignal(e)}]}const x=new class extends o{files(){return(0,a.D)(this.client.request(c))}};function T(){const[e,t]=(0,l.useState)({files:null});return(0,l.useEffect)((()=>{const e=[x.files().subscribe((({files:e})=>t((t=>({...t,files:e})))))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[e]}},9847:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var l=n(2784),s=n(1828);function a({discover:e}){return l.createElement("div",null,l.createElement("h3",null,"UPNP"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e()),[])},"Discover"))}async function r(e="http://192.168.2.101:8080",t="KeyStandBy"){return await fetch(`${new URL(e).origin}/control/rcu`,{method:"POST",mode:"no-cors",body:`Keypress=${t}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>e.text())).then(console.log)}function o({deviceAdb:e=[],remoteRcu:t,status:n}){const[s,a]=(0,l.useState)((()=>({}))),[o]=e,c=(0,l.useCallback)((e=>n(o).subscribe(a)),[o]),u=(0,l.useCallback)((e=>r(o,"KeyStandBy")),[o]),i=(0,l.useCallback)((e=>r(o,"KeyVolumeDown")),[o]),m=(0,l.useCallback)((e=>t(o,"KeyVolumeUp")),[o]);return l.createElement("div",null,l.createElement("h3",null,"ADB"),l.createElement("pre",null,JSON.stringify(e,null,2)),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:c},"Version"),l.createElement("pre",null,JSON.stringify(s,null,2))),l.createElement("fieldset",null,l.createElement("legend",null,"Power"),l.createElement("button",{onClick:u},"StandBy")),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:i},"Volume -"),l.createElement("button",{onClick:m},"Volume +")),l.createElement("fieldset",null,l.createElement("legend",null,"Playback"),l.createElement("button",{onClick:(0,l.useCallback)((e=>r(o,"KeyPause")),[o])},"Pause"),l.createElement("button",{onClick:m},"Volume +")))}var c=n(4371);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function i({url:e,width:t,height:n,title:s}){return l.createElement("img",{className:c.Z.Icon,src:e,width:t,height:n,title:s})}function m({deviceTv:e=[],remoteTv:t}){const[n,s]=e,a=(0,l.useCallback)((e=>t(n,"GetVolume")),[n]),r=(0,l.useCallback)((e=>t(n,"SetVolume")),[n]),o=(0,l.useCallback)((e=>t(n,"GetMute")),[n]),c=(0,l.useCallback)((e=>t(n,"ListPresets")),[n]),m=(0,l.useCallback)((e=>t(n,"SetMute")),[n]),d=(0,l.useCallback)((e=>t(n,"X_SendKey")),[n]),b=(0,l.useCallback)((e=>t(n,"X_LaunchApp")),[n]),g=(0,l.useCallback)((e=>t(n,"X_DisplayPinCode")),[n]),p=(0,l.useCallback)((e=>t(n,"X_RequestAuth")),[n]),f=(0,l.useCallback)((e=>t(n,"X_GetAudioList")),[n]),C=(0,l.useCallback)((e=>t(n,"X_GetCurrentAudioID")),[n]),k=(0,l.useCallback)((e=>t(n,"GetCurrentConnectionIDs")),[n]),E=(0,l.useCallback)((e=>t(n,"GetMediaInfo")),[n]),y=(0,l.useCallback)((e=>t(n,"GetProtocolInfo")),[n]);return l.createElement("div",null,s&&s.icons.length&&l.createElement(i,u({},s.icons[0],{title:`${s.modelName} / ${s.modelNumber}`})),l.createElement("h3",null,"TV"),l.createElement("pre",null,JSON.stringify(e,null,2)),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:a},"GetVolume"),l.createElement("button",{onClick:r},"SetVolume"),l.createElement("button",{onClick:o},"GetMute"),l.createElement("button",{onClick:m},"SetMute")),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:c},"ListPresets"),l.createElement("button",{onClick:d},"SendKey"),l.createElement("button",{onClick:b},"AppType"),l.createElement("button",{onClick:g},"PinCode"),l.createElement("button",{onClick:p},"RequestAuth"),l.createElement("button",{onClick:f},"GetAudioList"),l.createElement("button",{onClick:C},"GetCurrentAudioID"),l.createElement("button",{onClick:k},"GetCurrentConnectionIDs"),l.createElement("button",{onClick:E},"GetMediaInfo"),l.createElement("button",{onClick:y},"GetProtocolInfo")))}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}async function b(e="http://192.168.2.100:49154/MediaRenderer/desc.xml",t){return await fetch(`http://${new URL(e).hostname}/YamahaExtendedControl/v1/${t}`,{method:"GET",mode:"no-cors"}).then((e=>e.text())).then(console.log)}function g({deviceVcr:e=[],remoteVcr:t}){const[n,s]=e;return l.createElement("div",null,s&&s.icons.length&&l.createElement(i,d({},s.icons[0],{title:`${s.modelName} / ${s.modelDescription}`})),l.createElement("h3",null,"VCR"),l.createElement("pre",null,JSON.stringify(e,null,2)),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getDeviceInfo")),[n])},"Device"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getFeatures")),[n])},"Features"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getNetworkStatus")),[n])},"NetworkStatus"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getFuncStatus")),[n])},"FuncStatus"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getLocationInfo")),[n])},"LocationInfo"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"main/getStatus")),[n])},"Status"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"main/getSoundProgramList")),[n])},"SoundProgramList")),l.createElement("fieldset",null,l.createElement("legend",null,"Input"),["airplay","bluetooth","net_radio","optical1","tuner"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>b(n,`main/setInput?input=${e}`)),[n])},e)))),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),[50,70,90,110,130,150].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>b(n,`main/setVolume?volume=${e}`)),[n])},`Set ${e}%`))),["up","down"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>b(n,`main/setVolume?volume=${e}`)),[n])},`Volume ${e}`))),[!0,!1].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`main/setMute?enable=${e}`)),[n])},"Mute "+(e?"On":"Off"))))),l.createElement("fieldset",null,l.createElement("legend",null,"Power Functions"),[!0,!1].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`system/setAutoPowerStandby?enable=${e}`)),[n])},"AutoPowerStandby "+(e?"On":"Off")))),["on","standby","toggle"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>b(n,`main/setPower?power=${e}`)),[n])},`Power ${e}`)))),l.createElement("fieldset",null,l.createElement("legend",null,"Sleep Timer"),[60,30,0].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`main/setSleep?sleep=${e}`)),[n])},`Sleep ${e} min`)))),l.createElement("fieldset",null,l.createElement("legend",null,"AM/FM/DAB Tuner Commands"),[1,2,3,4].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`tuner/recallPreset?zone=main&band=fm&num=${e}`)),[n])},`Preset ${e}`))),["next","previous"].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`tuner/switchPreset?dir=${e}`)),[n])},`Preset ${e}`))),[87500,105200].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`tuner/setSleep?band=fm&tuning=direct&num=${e}`)),[n])},`${new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(e/1e3)} MHz`))),[5,6,7,8].map(((e,s)=>l.createElement("button",{key:s,onClick:(0,l.useCallback)((l=>t(n,`tuner/storePreset?num=${e}`)),[n])},`Store ${e}`))),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"tuner/getPresetInfo?band=fm")),[n])},"PresetInfo"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"tuner/getPlayInfo")),[n])},"PlayInfo")))}const p=new s.K2;function f(){const[{data:e,devices:t},{discover:n,remoteRcu:s,remoteTv:r,remoteVcr:u,status:i}]=function(){const[{data:e},t]=(0,l.useState)((()=>({data:null}))),[n,s]=(0,l.useState)((()=>({})));return(0,l.useEffect)((()=>{const e=[p.onMessage().subscribe((({data:e})=>t({data:e})))];return()=>{e.map((e=>e.unsubscribe()))}}),[]),[{data:e,devices:n},{discover:()=>p.getDevices().subscribe((({data:e})=>s(e))),remoteRcu:(e,t)=>p.getRemoteRcu(e,t),remoteTv:(e,t)=>p.getRemoteTv(e,t),remoteVcr:(e,t)=>p.getRemoteVcr(e,t),status:e=>p.getStatusAdb(e),sendMessage:e=>p.sendMessage(e)}]}();console.log({data:e,devices:t});const d=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t}])=>"urn:schemas-upnp-org:device:MediaServer:3"===t))),[t]),b=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t,manufacturer:n}])=>"urn:schemas-upnp-org:device:MediaRenderer:1"===t&&"Panasonic"===n))),[t]),f=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t,manufacturer:n}])=>"urn:schemas-upnp-org:device:MediaRenderer:1"===t&&"Yamaha Corporation"===n))),[t]);return l.createElement("section",{className:c.Z.Section},l.createElement("h2",null,"Remote"),l.createElement(a,{discover:n}),l.createElement(o,{deviceAdb:d,remoteRcu:s,status:i}),l.createElement(g,{deviceVcr:f,remoteVcr:u}),l.createElement(m,{deviceTv:b,remoteTv:r}),null===e?l.createElement("div",null,"Loading..."):l.createElement("pre",null,JSON.stringify(e,null,2)))}},5071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(272),s=n.n(l),a=n(2609),r=n.n(a)()(s());r.push([e.id,".DeTwnNnGKuydH91RohQA{color:purple}.SYX0OCrHUmkg91C1SqCq{float:right;margin:1em}","",{version:3,sources:["webpack://./../web/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAEF,sBACE,WAAA,CACA,UAAA",sourcesContent:[".Section {\n  color: purple;\n}\n.Icon {\n  float: right;\n  margin: 1em;\n}\n"],sourceRoot:""}]),r.locals={Section:"DeTwnNnGKuydH91RohQA",Icon:"SYX0OCrHUmkg91C1SqCq"};const o=r},7984:(e,t,n)=>{n.d(t,{U:()=>a});var l=n(1118),s=n(7394);function a(e,t){return(0,l.e)((function(n,l){var a=0;n.subscribe((0,s.x)(l,(function(n){l.next(e.call(t,n,a++))})))}))}},4371:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(6062),s=n.n(l),a=n(4036),r=n.n(a),o=n(6793),c=n.n(o),u=n(7892),i=n.n(u),m=n(1173),d=n.n(m),b=n(2464),g=n.n(b),p=n(5071),f={};f.styleTagTransform=g(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d();var C=s()(p.default,f);if(!p.default.locals||e.hot.invalidate){var k=!p.default.locals,E=k?p:p.default.locals;e.hot.accept(5071,(t=>{p=n(5071),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(E,k?p:p.default.locals,k)?(E=k?p:p.default.locals,C(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){C()}));const y=p.default&&p.default.locals?p.default.locals:void 0}}]);
//# sourceMappingURL=847.js.map