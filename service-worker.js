if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-e178a4ac"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"index.html",revision:"6a7b1b480a3eeb98fa9c356c8c22269e"},{url:"main.bbdb5591c89b1dd70561.js",revision:"037602e99a057dab5784ac78513b2ee6"},{url:"runtime.d943a51f72c6a4214716.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors~main.5d09dce2391916079cf9.js",revision:"61720143b5cbbbe09875debd0a873050"}],{}),e.registerRoute(/stockfish.js/,new e.CacheFirst,"GET")}));
