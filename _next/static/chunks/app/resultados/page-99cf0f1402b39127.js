(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{9399:function(e,n,t){Promise.resolve().then(t.bind(t,7469))},3827:function(e,n,t){"use strict";t.d(n,{U:function(){return u},q:function(){return l}});var r=t(9268),i=t(6394),o=t.n(i),c={src:"/_next/static/media/gear.e8c434a8.svg",height:24,width:24,blurWidth:0,blurHeight:0},s={src:"/_next/static/media/times.1a5ee3f7.svg",height:24,width:24,blurWidth:0,blurHeight:0};let u=()=>(0,r.jsx)(o(),{priority:!0,src:c,alt:"\xcdcone de configura\xe7\xf5es"}),l=()=>(0,r.jsx)(o(),{priority:!0,src:s,alt:"\xcdcone de fechar/retornar"})},9242:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return E},default:function(){return U}});var r=t(2805),i=t(9268),o=t(5732),c=t(6006),s=t(5846),u=t.n(s),l=t(4378),a=t(2456);function d(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]);return d=function(){return e},e}function f(){let e=(0,r._)(["\n  ","\n  gap: ",";\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  ","\n  padding: ",";\n  ","\n  width: 1.25em;\n  height: 1.75em;\n  background-color: #434343;\n  border-bottom: 1px solid darkgrey;\n  color: whitesmoke;\n\n  ","\n"]);return h=function(){return e},e}let g=o.ZP.div(d()),p=o.ZP.div(f(),l._7,l.ge),x=o.ZP.div(h(),l._7,l.YW,l.eP,e=>{let{disabled:n}=e;return n?"opacity: .6;":""}),m=["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"].map(e=>e.split("").map(e=>({key:e,element:e})));function j(e){let{onClick:n,ignoredLetters:t}=e;return(0,c.useEffect)(()=>{let e=function(e){console.log({event:e});let r=e.key.toUpperCase();"QWERTYUIOPASDFGHJKLZXCVBNM\xc7".includes(r)&&!t.includes(r)?n(r):"ENTER"===r?n("enter"):"BACKSPACE"===r&&n("backspace")};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),(0,i.jsx)(g,{children:m.map((e,r)=>(0,i.jsx)(p,{children:e.map(e=>{let{key:r,element:o}=e;return(0,i.jsx)(x,{onClick:()=>!t.includes(r)&&n(r),disabled:t.includes(r),children:o},r)})},r))})}function v(){let e=(0,r._)(["\n  ",";\n  gap: ",";\n  flex-grow: 1;\n  padding-bottom: 5vh;\n\n  .spacer {\n    flex-grow: 1;\n  }\n"]);return v=function(){return e},e}m[2]=[{key:"enter",element:">"},...m[2],{key:"backspace",element:"<-"}];let b=o.ZP.div(v(),l.$F,l.ge),w=["","","","","",""].map(e=>({word:e,submitted:!1}));function y(e){let{onUpdate:n,initialState:t,wordObj:r}=e,[o,s]=(0,c.useReducer)((e,n)=>({...e,...n}),{tries:[{word:"",correct:!1,submitted:!1}],word:r.word,ignoredLetters:[],...t||{}}),u=e=>{let t=o.tries,i=t[t.length-1],{cleanWord:c}=r,u=i.word.length===c.length,l=o.tries.length===w.length,a=i.word===c;"backspace"===e?i.word=i.word.slice(0,i.word.length-1):"enter"===e&&u?(i.submitted=!0,i.correct=a,i.word.split("").forEach(e=>{c.includes(e)||o.ignoredLetters.push(e)}),o.status=i.correct?"success":l?"fail":"in progress","in progress"===o.status&&o.tries.push({word:"",submitted:!1}),n(o)):i.word.length<c.length&&1===e.length&&(i.word+=e),s(e=>({...e}))},l=o.tries.concat(w).slice(0,w.length);return(0,i.jsxs)(b,{children:[l.map((e,n)=>(0,i.jsx)(a.Z,{word:r.word,guess:e.word,submitted:e.submitted},e.word+n)),(0,i.jsx)("div",{className:"spacer"}),(0,i.jsx)(j,{onClick:u,ignoredLetters:o.ignoredLetters})]})}let _=["oxente","cabra","macho","lampi\xe3o","cuscuz","milho","quadrilha","forr\xf3","fogueira","pamonha","canjica","campina","caruaru","palha","quadriculado"].map(e=>e.toUpperCase()).map(e=>({word:e,cleanWord:e.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ç/g,"c")}));var k=t(3827),P=t(9161);function W(){let e=(0,r._)(["\n  ","\n  align-items: center;\n  gap: ",";\n"]);return W=function(){return e},e}function Z(){let e=(0,r._)(["\n  margin: unset;\n  margin-top: 30px;\n  position: relative;\n  text-align: center;\n\n  a {\n    position: absolute;\n    margin-left: 40px;\n    margin-top: 4px;\n    \n    img {\n      height: 1em;\n      width: 1em;\n    }\n  }\n"]);return Z=function(){return e},e}function O(){let e=(0,r._)(["\n  ",";\n  gap: ",";\n  margin-bottom: 30px;\n  font-size: ",";\n"]);return O=function(){return e},e}function S(){let e=(0,r._)(["\n  ",";\n  position: relative;\n\n  .configs-button {\n    position: absolute;\n    right: -50px;\n    top: calc(50% - 6px);\n  }\n\n  a {\n    text-decoration: none;\n    color: unset;\n  }\n"]);return S=function(){return e},e}let C=o.ZP.div(W(),l.i3,l.xG),E=o.ZP.h1(Z()),N=o.ZP.div(O(),l._7,l.We,l.gn),I=o.ZP.div(S(),l.$F);function U(){let e=_.slice(0,3),{write:n,readTodayState:t,reset:r}=(0,P.Z)(),[o,s]=(0,c.useReducer)((e,t)=>{let r={...e,...t};return n(r),r},t()),l=e=>{let n="success"===e.status,t=n||"fail"===e.status;o.history[o.currentWord]?o.history[o.currentWord]=e:o.history.push(e),s({success:n?o.success+1:o.success,afterWord:t})};return(0,i.jsxs)(C,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(E,{onClick:()=>r(),children:"Palavriado"}),(0,i.jsxs)(N,{children:[(0,i.jsx)(u(),{href:"/como-jogar",children:"Como jogar?"}),(0,i.jsx)(u(),{href:"/resultados",children:"Resultados"})]}),(0,i.jsx)(u(),{href:"/configuracoes",className:"configs-button",children:(0,i.jsx)(k.U,{})})]}),(0,i.jsxs)("span",{children:[o.success,"/",e.length," conseguidas"]}),o.afterWord&&(0,i.jsx)("button",{onClick:()=>s({afterWord:!1,currentWord:o.currentWord+1}),children:"Pr\xf3xima Palavra"}),(0,i.jsx)(y,{wordObj:e[o.currentWord],initialState:o.history[o.currentWord],onUpdate:l},e[o.currentWord].word)]})}},7469:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(2805),i=t(9268),o=t(5846),c=t.n(o),s=t(5732),u=t(4378),l=t(3827),a=t(9242),d=t(9161);function f(){let e=(0,r._)(["\n  ","\n  gap: ",";\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  ",";\n  flex-wrap: wrap;\n  gap: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return h=function(){return e},e}function g(){let e=(0,r._)(["\n  ",";\n  justify-content: flex-start;\n  width: 8ch;\n\n  .value {\n    ",";\n    font-weight: bold;\n  }\n\n  .title {\n    ",";\n    text-align: center;\n  }\n"]);return g=function(){return e},e}let p=s.ZP.div(f(),u.i3,u.xG),x=s.ZP.div(h(),u._7,u.c8,u.We,u.MU),m=s.ZP.div(g(),u.$F,u.dO,u.aj);function j(e){let{title:n,value:t}=e;return(0,i.jsxs)(m,{children:[(0,i.jsx)("span",{className:"value",children:t}),(0,i.jsx)("span",{className:"title",children:n})]})}function v(){let{games:e,wons:n,words:t,sequence:r,bestSequence:o}=function(){let{read:e}=(0,d.Z)(),n=e(),t=n.history.length,r=n.history.reduce((e,n)=>e+n.success,0),i=n.history.filter(e=>e.success>0).length,o=n.history.map(e=>e.success?1:0),c=o.reduce((e,n)=>(0===n?e.push(0):e[e.length-1]+=1,e),[0]),s=c[0],u=c.reduce((e,n)=>e>n?e:n);return{games:t,words:r,wons:i,sequence:s,bestSequence:u}}();return(0,i.jsxs)(p,{children:[(0,i.jsxs)(a.Header,{children:["Resultados",(0,i.jsx)(c(),{href:"/",children:(0,i.jsx)(l.q,{})})]}),(0,i.jsx)("span",{children:"Suas estat\xedsticas"}),(0,i.jsxs)(x,{children:[(0,i.jsx)(j,{title:"jogos",value:e}),(0,i.jsx)(j,{title:"vit\xf3rias",value:n}),(0,i.jsx)(j,{title:"palavras",value:t}),(0,i.jsx)(j,{title:"sequ\xeancia de vit\xf3rias",value:r}),(0,i.jsx)(j,{title:"melhor sequ\xeancia",value:o})]}),(0,i.jsx)("span",{children:"Hist\xf3rico"})]})}},2456:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(2805),i=t(9268);t(6006);var o=t(5732),c=t(4378);function s(){let e=(0,r._)(["\n  ","\n  gap: ",";\n"]);return s=function(){return e},e}function u(){let e=(0,r._)(["\n  ",";\n  width: 1.5em;\n  height: 1.75em;\n  ",";\n  ",";\n\n  background-color: #D9D9D9;\n  ","\n  ","\n"]);return u=function(){return e},e}let l=o.ZP.div(s(),c.xI,c.ge),a=o.ZP.div(u(),c._7,c.GT,c.eP,e=>{let{correct:n}=e;return n?"background-color: #80d780;":""},e=>{let{misplaced:n}=e;return n?"background-color: #e1e14b;":""});function d(e){let{word:n,guess:t,submitted:r}=e;return(0,i.jsx)(l,{children:function(e,n,t){let r=e.split("");return n.split("").forEach((n,t)=>e[t]===n&&r.splice(t,1)),Array(e.length).fill("").map((o,c)=>{let s=n[c]||"";if(!t)return(0,i.jsx)(a,{children:s},c);let u=e[c]===s,l=!u&&r.includes(s);return l&&r.splice(r.indexOf(s),1),(0,i.jsx)(a,{correct:u,misplaced:l,children:s},c)})}(n,t,r)})}},4378:function(e,n,t){"use strict";t.d(n,{$F:function(){return c},GT:function(){return l},MU:function(){return x},We:function(){return p},YW:function(){return f},_7:function(){return o},aj:function(){return d},c8:function(){return m},dO:function(){return u},eP:function(){return s},ge:function(){return h},gn:function(){return a},i3:function(){return i},xG:function(){return g},xI:function(){return r}});let r="display: flex;",i="".concat(r,"; flex-direction: column;"),o="".concat(r,"; justify-content: center; align-items: center;"),c="".concat(i,"; justify-content: center; align-items: center;"),s="border-radius: 4px;",u="font-size: 1.75em;",l="font-size: 1.5em;",a="font-size: 0.875em;",d="font-size: 0.75em;",f=".25em",h=".5em",g=".75em",p="1em",x="1.5em",m="2em"},9161:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return h}});let i="palavriado_state",o={note:"Oi, aqui voc\xea consegue _hackear_ seus stats de jogo. Altere com modera\xe7\xe3o :D",history:[]},c=()=>({currentWord:0,success:0,history:[],afterWord:!1,date:new Date().toISOString()}),s=e=>{let{date:n}=e;return n.split("T")[0]},u=e=>{try{return JSON.parse(e)}catch(e){return{}}},l=()=>null==r?void 0:r.localStorage.removeItem(i),a=()=>{var e;let n=(null==r?void 0:r.localStorage.getItem(i))||"",t=u(n);return(t.note!==o.note||(null===(e=t.history)||void 0===e?void 0:e.length)===void 0)&&Object.assign(t,o),t},d=()=>{let e=s({date:new Date().toISOString()}),n=a(),t=n.history.filter(n=>n.key===e)[0];return t||c()},f=e=>{console.log({state:e});let n=s(e);e.key=n;let t=a(),{history:o}=t,c=0===o.length||o[o.length-1].key!==n;c||o.pop(),o.push(e),null==r||r.localStorage.setItem(i,JSON.stringify(t))};function h(){return{read:a,write:f,readTodayState:d,reset:l}}}},function(e){e.O(0,[534,667,139,744],function(){return e(e.s=9399)}),_N_E=e.O()}]);