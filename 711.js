"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[711],{6711:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(2784),l=n(5127);const o=[0,1e3,2e3,5e3,1e4,2e4,5e4],r=e=>new Date(e).toISOString().split("T").pop();function s(){const e=(0,a.useRef)(),[t,n]=(0,a.useState)((()=>Date.now())),[s,c]=(0,a.useState)((()=>5e3)),u=(0,a.useCallback)((t=>{const n=e.current;n&&(n.value=`${t}\n${n.value}`)}),[e]),i=(0,a.useCallback)((e=>{const t=Date.now();return u(`${r(t)} <-- req`),fetch("longpoll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:e,delay:s})}).then((()=>{const e=Date.now();u(`${r(e)} --\x3e res | ${e-t}`)}))}),[s]);return(0,a.useEffect)((()=>{let e;u("----");let n=!1;const a=t=>{if(n)return;const l=Date.now();u(`${r(l)} | ${r(t)} | ${l-t}`),e=setTimeout((()=>{i(t).then((()=>a(t+1e3))).catch((e=>{const t=Date.now();u(`${r(t)} --\x3e error [${e.message}]`),console.error(e)}))}),1e3)};return a(t),()=>{n=!0,clearTimeout(e)}}),[t]),a.createElement("section",{className:l.Z.Section},a.createElement("h2",null,"Async",a.createElement("button",{onClick:(0,a.useCallback)((t=>(t.preventDefault(),e.current.value="")),[])},"clear"),a.createElement("button",{onClick:(0,a.useCallback)((e=>(e.preventDefault(),n(Date.now()))),[])},"reset"),a.createElement("a",{href:"https://google.com/maps/dir/?api=1&destination=52.226943,20.9899221",target:"_blank",rel:"noopener noreferrer"},"maps"),a.createElement("select",{value:s,onChange:(0,a.useCallback)((({target:e})=>c(Number(e.value))),[])},o.map((e=>a.createElement("option",{key:e,value:e},e))))),a.createElement("textarea",{ref:e,readOnly:!0,className:l.Z.Console}))}},7636:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(272),l=n.n(a),o=n(2609),r=n.n(o)()(l());r.push([e.id,".BgL2MfklFFLzG1wvEecz{color:blue}.v8LKKZGPtXxU52z1859M{width:75vh;height:75vh}","",{version:3,sources:["webpack://./../web/src/containers/Async.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CAEF,sBACE,UAAA,CACA,WAAA",sourcesContent:[".Section {\n  color: blue;\n}\n.Console {\n  width: 75vh;\n  height: 75vh;\n}\n"],sourceRoot:""}]),r.locals={Section:"BgL2MfklFFLzG1wvEecz",Console:"v8LKKZGPtXxU52z1859M"};const s=r},5127:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(6062),l=n.n(a),o=n(4036),r=n.n(o),s=n(6793),c=n.n(s),u=n(7892),i=n.n(u),f=n(1173),d=n.n(f),h=n(2464),p=n.n(h),v=n(7636),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d();var A=l()(v.default,m);if(!v.default.locals||e.hot.invalidate){var C=!v.default.locals,b=C?v:v.default.locals;e.hot.accept(7636,(t=>{v=n(7636),function(e,t,n){if(!e&&t||e&&!t)return!1;var a;for(a in e)if((!n||"default"!==a)&&e[a]!==t[a])return!1;for(a in t)if(!(n&&"default"===a||e[a]))return!1;return!0}(b,C?v:v.default.locals,C)?(b=C?v:v.default.locals,A(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){A()}));const k=v.default&&v.default.locals?v.default.locals:void 0}}]);
//# sourceMappingURL=711.js.map