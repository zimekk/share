"use strict";(self.webpackChunk_dev_app=self.webpackChunk_dev_app||[]).push([[585],{9082:(e,t,n)=>{n.d(t,{L:()=>a,V:()=>s});var o=n(6647),l=n(9385);const a=new o.GraphQLClient(`${location.pathname}graphql`,{headers:{}}),s=(0,l.eI)({url:`${{"https:":"wss:"}[location.protocol]||"ws:"}//${location.host}${location.pathname}subscriptions`})},3585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(2784),l=n(7598),a=n(6647),s=n(9082),r=n(6899);const i=a.gql`
  query {
    movies
  }
`,c=new class extends class{client=s.L;subscriptions=s.V}{getMovies(){return(0,l.D)(this.client.request(i))}};function u(){const[{movies:e}]=function(){const[e,t]=(0,o.useState)((()=>null));return(0,o.useEffect)((()=>{c.getMovies().subscribe((e=>t(e)))}),[]),[{movies:e}]}();return console.log({movies:e}),o.createElement("section",{className:r.Z.Section},o.createElement("h2",null,"Movies"),o.createElement("pre",null,JSON.stringify(e,null,2)),o.createElement("a",{href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html",rel:"noopener noreferrer",target:"_blank"},"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"))}},9484:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(272),l=n.n(o),a=n(2609),s=n.n(a)()(l());s.push([e.id,".BJTU_JjKaLdFKfqPjVe8{color:purple}","",{version:3,sources:["webpack://./../movies/src/styles.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA",sourcesContent:[".Section {\n  color: purple;\n}\n"],sourceRoot:""}]),s.locals={Section:"BJTU_JjKaLdFKfqPjVe8"};const r=s},6899:(e,t,n)=>{n.d(t,{Z:()=>S});var o=n(6062),l=n.n(o),a=n(4036),s=n.n(a),r=n(6793),i=n.n(r),c=n(7892),u=n.n(c),d=n(1173),p=n.n(d),f=n(2464),h=n.n(f),v=n(9484),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p();var A=l()(v.default,m);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,g=b?v:v.default.locals;e.hot.accept(9484,(t=>{v=n(9484),function(e,t,n){if(!e&&t||e&&!t)return!1;var o;for(o in e)if((!n||"default"!==o)&&e[o]!==t[o])return!1;for(o in t)if(!(n&&"default"===o||e[o]))return!1;return!0}(g,b?v:v.default.locals,b)?(g=b?v:v.default.locals,A(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){A()}));const S=v.default&&v.default.locals?v.default.locals:void 0}}]);
//# sourceMappingURL=585.js.map