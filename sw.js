if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(t.map((e=>o[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f1c8abb3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/capture.png",revision:"cd37136558a2c55dd3240da140d4ccd7"},{url:"assets/images/photo_2023-02-24_09-51-19.jpg",revision:"069fb53f01b031e014ed23a59c32f339"},{url:"assets/images/run.png",revision:"44abaffb238a5060a9a368706c33d676"},{url:"assets/images/start.png",revision:"8ab92ceb512ac265e6276a76c07f2507"},{url:"assets/js/app.js",revision:"15c71829c3287d1547fb78302c1955a8"},{url:"assets/js/constant.js",revision:"e041d54774c501de00e0de6270ebadaf"},{url:"index.html",revision:"68378da2fbc027843097b8c730e13479"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
