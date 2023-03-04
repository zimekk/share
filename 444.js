"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[444],{9082:(e,t,n)=>{n.d(t,{L:()=>r,V:()=>o});var l=n(6145),a=n(9385);const r=new l.g6(`${location.pathname}graphql`,{headers:{}}),o=(0,a.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},2444:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(2784),a=n(6145),r=n(7598),o=n(7984),s=n(3919),c=n(9082);class u{client=c.L;subscriptions=c.V}const i=a.Ps`
  query GetDevicesQuery {
    devices {
      data
    }
  }
`,m=a.Ps`
  query GetVersionQuery($location: String) {
    version(location: $location)
  }
`,d=a.Ps`
  query RemoteRcuQuery($location: String, $key: String) {
    remoteRcu(location: $location, key: $key) {
      data
    }
  }
`,b=a.Ps`
  query RemoteTvQuery($location: String, $action: String) {
    remoteTv(location: $location, action: $action) {
      data
    }
  }
`,f=a.Ps`
  query RemoteVcrQuery($location: String, $action: String) {
    remoteVcr(location: $location, action: $action) {
      data
    }
  }
`,g=a.Ps`
  subscription RemoteSubscription {
    remote {
      data
    }
  }
`,p=a.Ps`
  mutation SendRemoteMutation($remote: RemoteInput) {
    sendRemote(remote: $remote)
  }
`,k=a.Ps`
  query GetDevicesQuery {
    lights {
      devices {
        address
      }
    }
  }
`,E=a.Ps`
  query GetStatusQuery($address: String) {
    lights {
      status(address: $address) {
        mac
        state
      }
    }
  }
`,C=a.Ps`
  query ToggleStateQuery($address: String) {
    lights {
      toggle(address: $address)
    }
  }
`,v=a.Ps`
  query BrightnessQuery($address: String, $brightness: Int) {
    lights {
      brightness(address: $address, brightness: $brightness)
    }
  }
`;function h({discover:e}){return l.createElement("div",null,l.createElement("h3",null,"UPNP"),l.createElement("button",{onClick:(0,l.useCallback)((t=>e()),[])},"Discover"))}var y=n(9141);function S({url:e,width:t,height:n,title:a}){return l.createElement("img",{className:y.Z.Icon,src:e,width:t,height:n,title:a})}function $({children:e}){const[t,n]=(0,l.useState)(!1);return l.createElement("pre",null,t?JSON.stringify(e,null,2):l.createElement(l.Fragment,null,"[",l.createElement("a",{href:"#",onClick:e=>(e.preventDefault(),n(!0))},"..."),"]"))}async function P(e="http://192.168.2.101:8080",t="KeyStandBy"){return await fetch(`${new URL(e).origin}/control/rcu`,{method:"POST",mode:"no-cors",body:`Keypress=${t}`,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>e.text())).then(console.log)}function A({deviceAdb:e=[],remoteRcu:t,status:n}){const[a,r]=(0,l.useState)((()=>({}))),[o]=e,s=(0,l.useCallback)((e=>n(o).subscribe(r)),[o]),c=(0,l.useCallback)((e=>P(o,"KeyStandBy")),[o]),u=(0,l.useCallback)((e=>P(o,"KeyVolumeDown")),[o]),i=(0,l.useCallback)((e=>t(o,"KeyVolumeUp")),[o]);return l.createElement("div",null,l.createElement("h3",null,"ADB"),l.createElement($,null,e),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:s},"Version"),l.createElement("pre",null,JSON.stringify(a,null,2))),l.createElement("fieldset",null,l.createElement("legend",null,"Power"),l.createElement("button",{onClick:c},"StandBy")),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:u},"Volume -"),l.createElement("button",{onClick:i},"Volume +")),l.createElement("fieldset",null,l.createElement("legend",null,"Playback"),l.createElement("button",{onClick:(0,l.useCallback)((e=>P(o,"KeyPause")),[o])},"Pause"),l.createElement("button",{onClick:i},"Volume +")))}function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function R({deviceBox:e=[],remoteBox:t}){const[n,a]=e;return l.createElement("div",null,a&&a.icons.length&&l.createElement(S,w({},a.icons[1],{title:`${a.modelName} / ${a.modelDescription}`})),l.createElement("h3",null,"BOX"),l.createElement($,null,e),l.createElement("fieldset",null,l.createElement("legend",null,"Power"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"KeyPause")),[n])},"Toggle")))}function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function V({deviceTv:e=[],remoteTv:t}){const[n,a]=e,r=(0,l.useCallback)((e=>t(n,"GetVolume")),[n]),o=(0,l.useCallback)((e=>t(n,"SetVolume")),[n]),s=(0,l.useCallback)((e=>t(n,"GetMute")),[n]),c=(0,l.useCallback)((e=>t(n,"ListPresets")),[n]),u=(0,l.useCallback)((e=>t(n,"SetMute")),[n]),i=(0,l.useCallback)((e=>t(n,"X_SendKey")),[n]),m=(0,l.useCallback)((e=>t(n,"X_LaunchApp")),[n]),d=(0,l.useCallback)((e=>t(n,"X_DisplayPinCode")),[n]),b=(0,l.useCallback)((e=>t(n,"X_RequestAuth")),[n]),f=(0,l.useCallback)((e=>t(n,"X_GetAudioList")),[n]),g=(0,l.useCallback)((e=>t(n,"X_GetCurrentAudioID")),[n]),p=(0,l.useCallback)((e=>t(n,"GetCurrentConnectionIDs")),[n]),k=(0,l.useCallback)((e=>t(n,"GetMediaInfo")),[n]),E=(0,l.useCallback)((e=>t(n,"GetProtocolInfo")),[n]);return l.createElement("div",null,a&&a.icons.length&&l.createElement(S,D({},a.icons[0],{title:`${a.modelName} / ${a.modelNumber}`})),l.createElement("h3",null,"TV"),l.createElement($,null,e),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),l.createElement("button",{onClick:r},"GetVolume"),l.createElement("button",{onClick:o},"SetVolume"),l.createElement("button",{onClick:s},"GetMute"),l.createElement("button",{onClick:u},"SetMute")),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:c},"ListPresets"),l.createElement("button",{onClick:i},"SendKey"),l.createElement("button",{onClick:m},"AppType"),l.createElement("button",{onClick:d},"PinCode"),l.createElement("button",{onClick:b},"RequestAuth"),l.createElement("button",{onClick:f},"GetAudioList"),l.createElement("button",{onClick:g},"GetCurrentAudioID"),l.createElement("button",{onClick:p},"GetCurrentConnectionIDs"),l.createElement("button",{onClick:k},"GetMediaInfo"),l.createElement("button",{onClick:E},"GetProtocolInfo")))}function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}async function I(e="http://192.168.2.100:49154/MediaRenderer/desc.xml",t){return await fetch(`http://${new URL(e).hostname}/YamahaExtendedControl/v1/${t}`,{method:"GET",mode:"no-cors"}).then((e=>e.text())).then(console.log)}function M({deviceVcr:e=[],remoteVcr:t}){const[n,a]=e;return l.createElement("div",null,a&&a.icons.length&&l.createElement(S,T({},a.icons[0],{title:`${a.modelName} / ${a.modelDescription}`})),l.createElement("h3",null,"VCR"),l.createElement($,null,e),l.createElement("fieldset",null,l.createElement("legend",null,"Information"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getDeviceInfo")),[n])},"Device"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getFeatures")),[n])},"Features"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getNetworkStatus")),[n])},"NetworkStatus"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getFuncStatus")),[n])},"FuncStatus"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"system/getLocationInfo")),[n])},"LocationInfo"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"main/getStatus")),[n])},"Status"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"main/getSoundProgramList")),[n])},"SoundProgramList")),l.createElement("fieldset",null,l.createElement("legend",null,"Input"),["airplay","bluetooth","net_radio","optical1","tuner"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>I(n,`main/setInput?input=${e}`)),[n])},e)))),l.createElement("fieldset",null,l.createElement("legend",null,"Volume"),[50,70,90,110,130,150].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>I(n,`main/setVolume?volume=${e}`)),[n])},`Set ${e}%`))),["up","down"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>I(n,`main/setVolume?volume=${e}`)),[n])},`Volume ${e}`))),[!0,!1].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`main/setMute?enable=${e}`)),[n])},"Mute "+(e?"On":"Off"))))),l.createElement("fieldset",null,l.createElement("legend",null,"Power Functions"),[!0,!1].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`system/setAutoPowerStandby?enable=${e}`)),[n])},"AutoPowerStandby "+(e?"On":"Off")))),["on","standby","toggle"].map(((e,t)=>l.createElement("button",{key:t,onClick:(0,l.useCallback)((t=>I(n,`main/setPower?power=${e}`)),[n])},`Power ${e}`)))),l.createElement("fieldset",null,l.createElement("legend",null,"Sleep Timer"),[60,30,0].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`main/setSleep?sleep=${e}`)),[n])},`Sleep ${e} min`)))),l.createElement("fieldset",null,l.createElement("legend",null,"AM/FM/DAB Tuner Commands"),[1,2,3,4].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`tuner/recallPreset?zone=main&band=fm&num=${e}`)),[n])},`Preset ${e}`))),["next","previous"].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`tuner/switchPreset?dir=${e}`)),[n])},`Preset ${e}`))),[87500,105200].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`tuner/setSleep?band=fm&tuning=direct&num=${e}`)),[n])},`${new Intl.NumberFormat("pl-PL",{maximumFractionDigits:2}).format(e/1e3)} MHz`))),[5,6,7,8].map(((e,a)=>l.createElement("button",{key:a,onClick:(0,l.useCallback)((l=>t(n,`tuner/storePreset?num=${e}`)),[n])},`Store ${e}`))),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"tuner/getPresetInfo?band=fm")),[n])},"PresetInfo"),l.createElement("button",{onClick:(0,l.useCallback)((e=>t(n,"tuner/getPlayInfo")),[n])},"PlayInfo")))}const O=new class extends u{getDevices(){return(0,r.D)(this.client.request(k)).pipe((0,o.U)((({lights:e})=>e)))}getStatus(e){return(0,r.D)(this.client.request(E,{address:e})).pipe((0,o.U)((({lights:e})=>e)))}toggle(e){return(0,r.D)(this.client.request(C,{address:e})).pipe((0,o.U)((({lights:e})=>e)))}setBrightness(e,t){return(0,r.D)(this.client.request(v,{address:e,brightness:t})).pipe((0,o.U)((({lights:e})=>e)))}};function q({address:e}){const{status:t,getStatus:n,toggle:a,setBrightness:r}=function(e){const[t,n]=(0,l.useState)((()=>({})));return{status:t,getStatus:(0,l.useCallback)((()=>O.getStatus(e).subscribe((({status:e})=>n(e)))),[e]),toggle:(0,l.useCallback)((()=>O.toggle(e).subscribe(console.info)),[e]),setBrightness:(0,l.useCallback)((t=>O.setBrightness(e,t).subscribe(console.info)),[e])}}(e);return l.createElement("div",null,l.createElement("fieldset",null,l.createElement("legend",null,"Bulb ",e),l.createElement("button",{onClick:(0,l.useCallback)((()=>n()),[])},"Status"),l.createElement("button",{onClick:(0,l.useCallback)((()=>a()),[])},"Toggle"),[10,20,80,100].map((e=>l.createElement("button",{key:e,onClick:(0,l.useCallback)((()=>r(e)),[])},"Brightness ",`${e}%`))),l.createElement($,null,t)))}function x(){const{devices:e,discover:t}=function(){const[e,t]=(0,l.useState)((()=>[])),n=(0,l.useCallback)((()=>O.getDevices().subscribe((({devices:e})=>t(e)))),[]);return(0,l.useEffect)((()=>{n()}),[]),{devices:e,discover:n}}();return l.createElement("div",null,l.createElement("h3",null,"WiZ"),l.createElement("fieldset",null,l.createElement("legend",null,"Bulbs"),l.createElement("button",{onClick:(0,l.useCallback)((()=>t()),[])},"discover"),l.createElement($,null,e)),e.map((({address:e})=>l.createElement(q,{key:e,address:e}))))}var B=n(1823);const G=new class extends u{getDevices(){return(0,r.D)(this.client.request(i)).pipe((0,o.U)((({devices:e})=>e)))}getStatusAdb(e){return(0,r.D)(this.client.request(m,{location:e})).pipe((0,o.U)((({version:e})=>e)))}getRemoteRcu(e,t){return(0,r.D)(this.client.request(d,{location:e,key:t})).pipe((0,o.U)((({remoteRcu:e})=>e)))}getRemoteTv(e,t){return(0,r.D)(this.client.request(b,{location:e,action:t}))}getRemoteVcr(e,t){return(0,r.D)(this.client.request(f,{location:e,action:t}))}sendMessage(e){return(0,r.D)(this.client.request(p,{data:e}))}onMessage(){return new s.y((e=>this.subscriptions.subscribe({query:g},{next:({data:t,errors:n})=>n?e.error(n[0]):e.next(t.remote),error:t=>e.error(t),complete:()=>e.complete()})))}};function L(){const[{data:e,devices:t},{discover:n,remoteRcu:a,remoteTv:r,remoteVcr:o,status:s}]=function(){const[{data:e},t]=(0,l.useState)((()=>({data:null}))),[n,a]=(0,l.useState)((()=>({}))),r=(0,l.useCallback)((()=>G.getDevices().subscribe((({data:e})=>a(e)))),[]);return(0,l.useEffect)((()=>{const e=[G.onMessage().subscribe((({data:e})=>t({data:e})))];return r(),()=>{e.map((e=>e.unsubscribe()))}}),[]),[{data:e,devices:n},{discover:r,remoteRcu:(e,n)=>G.getRemoteRcu(e,n).subscribe(t),remoteTv:(e,t)=>G.getRemoteTv(e,t),remoteVcr:(e,t)=>G.getRemoteVcr(e,t),status:e=>G.getStatusAdb(e),sendMessage:e=>G.sendMessage(e)}]}();console.log({data:e});const c=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t}])=>"urn:schemas-upnp-org:device:MediaServer:3"===t))),[t]),u=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t,manufacturer:n}])=>"urn:schemas-upnp-org:device:MediaRenderer:1"===t&&"Microsoft Corporation"===n))),[t]),i=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t,manufacturer:n}])=>"urn:schemas-upnp-org:device:MediaRenderer:1"===t&&"Panasonic"===n))),[t]),m=(0,l.useMemo)((()=>Object.entries(t).find((([e,{deviceType:t,manufacturer:n}])=>"urn:schemas-upnp-org:device:MediaRenderer:1"===t&&"Yamaha Corporation"===n))),[t]);return l.createElement("section",{className:B.Z.Section},l.createElement("h2",null,"Remote"),l.createElement(h,{discover:n}),l.createElement(x,null),l.createElement(A,{deviceAdb:c,remoteRcu:a,status:s}),l.createElement(M,{deviceVcr:m,remoteVcr:o}),l.createElement(V,{deviceTv:i,remoteTv:r}),l.createElement(R,{deviceBox:u,remoteBox:a}),null===e?l.createElement("div",null,"Loading..."):l.createElement("pre",null,JSON.stringify(e,null,2)))}},3631:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(272),a=n.n(l),r=n(2609),o=n.n(r)()(a());o.push([e.id,".CdxyLKYUi3_vDJV_Mm7A{float:right;margin:1em}","",{version:3,sources:["webpack://./../remote/src/components/styles.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA,CACA,UAAA",sourcesContent:[".Icon {\n  float: right;\n  margin: 1em;\n}\n"],sourceRoot:""}]),o.locals={Icon:"CdxyLKYUi3_vDJV_Mm7A"};const s=o},3910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(272),a=n.n(l),r=n(2609),o=n.n(r)()(a());o.push([e.id,".O2YxmgfWTY2Spk1FgUmv{color:purple}","",{version:3,sources:["webpack://./../remote/src/containers/Remote/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),o.locals={Section:"O2YxmgfWTY2Spk1FgUmv"};const s=o},7984:(e,t,n)=>{n.d(t,{U:()=>r});var l=n(1118),a=n(7394);function r(e,t){return(0,l.e)((function(n,l){var r=0;n.subscribe((0,a.x)(l,(function(n){l.next(e.call(t,n,r++))})))}))}},9141:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(6062),a=n.n(l),r=n(4036),o=n.n(r),s=n(6793),c=n.n(s),u=n(7892),i=n.n(u),m=n(1173),d=n.n(m),b=n(2464),f=n.n(b),g=n(3631),p={};p.styleTagTransform=f(),p.setAttributes=i(),p.insert=c().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d();var k=a()(g.default,p);if(!g.default.locals||e.hot.invalidate){var E=!g.default.locals,C=E?g:g.default.locals;e.hot.accept(3631,(t=>{g=n(3631),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(C,E?g:g.default.locals,E)?(C=E?g:g.default.locals,k(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){k()}));const v=g.default&&g.default.locals?g.default.locals:void 0},1823:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(6062),a=n.n(l),r=n(4036),o=n.n(r),s=n(6793),c=n.n(s),u=n(7892),i=n.n(u),m=n(1173),d=n.n(m),b=n(2464),f=n.n(b),g=n(3910),p={};p.styleTagTransform=f(),p.setAttributes=i(),p.insert=c().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d();var k=a()(g.default,p);if(!g.default.locals||e.hot.invalidate){var E=!g.default.locals,C=E?g:g.default.locals;e.hot.accept(3910,(t=>{g=n(3910),function(e,t,n){if(!e&&t||e&&!t)return!1;var l;for(l in e)if((!n||"default"!==l)&&e[l]!==t[l])return!1;for(l in t)if(!(n&&"default"===l||e[l]))return!1;return!0}(C,E?g:g.default.locals,E)?(C=E?g:g.default.locals,k(g.default)):e.hot.invalidate()}))}e.hot.dispose((function(){k()}));const v=g.default&&g.default.locals?g.default.locals:void 0}}]);
//# sourceMappingURL=444.js.map