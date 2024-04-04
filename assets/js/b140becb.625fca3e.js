"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[3556],{8742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(4848),o=n(8453);const i={},s="LLM finetuning",c={permalink:"/blog/2024/04/04/",editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/blog/2024-04-04.md",source:"@site/blog/2024-04-04.md",title:"LLM finetuning",description:"LLM finetuning\uc744 \uacfc\uc81c\uc5d0\uc11c \uc9c4\ud589\ud574\uc57c \ud574\uc11c \uc218\ud589\ud574\ubd24\ub2e4. \ubb3c\ub860 \ud300\uc6d0\ubd84\ub4e4\uc774 \uc9dc\uc8fc\uc2e0 \ucf54\ub4dc\uac00 \uc788\uc5c8\uc9c0\ub9cc \uadf8\ub798\ub3c4 \uc0dd\uac01\ubcf4\ub2e4 \uc5c4\uccad \uc27d\uac8c \ub3cc\uc544\uac00\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \uc798 \uc791\uc131\ub418\uc5b4 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc774 \uc2e0\uae30\ud588\ub2e4. \uc608\uc804\uc5d0 \uacf5\ubd80\ud558\uace0 \uc0ac\uc6a9\uc740 \uc548 \ud588\ub358 deepspeed\ub3c4 \ubcf8\uaca9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ud604\uc0c1\ub3c4 \ubd24\ub2e4.",date:"2024-04-04T00:00:00.000Z",formattedDate:"April 4, 2024",tags:[],readingTime:1.295,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"MatPlotlib \ud55c\uae00 \uc124\uc815 \uac04\ud3b8\ud558\uac8c \ud558\uae30",permalink:"/blog/2024/02/14/"}},a={authorsImageUrls:[]},p=[];function l(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"LLM finetuning\uc744 \uacfc\uc81c\uc5d0\uc11c \uc9c4\ud589\ud574\uc57c \ud574\uc11c \uc218\ud589\ud574\ubd24\ub2e4. \ubb3c\ub860 \ud300\uc6d0\ubd84\ub4e4\uc774 \uc9dc\uc8fc\uc2e0 \ucf54\ub4dc\uac00 \uc788\uc5c8\uc9c0\ub9cc \uadf8\ub798\ub3c4 \uc0dd\uac01\ubcf4\ub2e4 \uc5c4\uccad \uc27d\uac8c \ub3cc\uc544\uac00\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \uc798 \uc791\uc131\ub418\uc5b4 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc774 \uc2e0\uae30\ud588\ub2e4. \uc608\uc804\uc5d0 \uacf5\ubd80\ud558\uace0 \uc0ac\uc6a9\uc740 \uc548 \ud588\ub358 deepspeed\ub3c4 \ubcf8\uaca9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ud604\uc0c1\ub3c4 \ubd24\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"LORA, peft, deepspeed, SFT \ub4f1\uc758 \uae30\uc220\uc744 \uc0ac\uc6a9\ud588\ub294\ub370 \uae09\ud558\uac8c \uc9c4\ud589\ud55c\ub2e4\uace0 \uae30\uc220 \ub0b4\uc6a9\uae4c\uc9c0\ub294 \uc0c1\uc138\ud788 \ubabb\ubd24\ub2e4. \ub610 LLM \ub17c\ubb38\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 metrics\ub3c4 \uc774\ud574\uac00 \uc798 \uc548\ub410\uace0, \ub9c8\uce58 \ucc98\uc74c DeepLearning\uc744 \uacf5\ubd80\ud558\ub358 \uc2dc\uc808\ub85c \ub3cc\uc544\uac04 \uac83 \uac19\uc558\ub2e4. \uc544\uc9c1 Deep learning \ubd84\uc57c\uc5d0\uc11c\ub3c4 \uacf5\ubd80\ud574\uc57c\ud560 \uac83\ub4e4\uc774 \ub9ce\uc740\ub370 LLM \ucabd \uae30\uc220 \uacf5\ubd80\ub97c \ub530\ub77c\uc7a1\uc544\uc57c\ud55c\ub2e4\ub294 \uc0dd\uac01\uc774 \uac15\ud558\uac8c \ub4e4\uc5c8\ub2e4."}),"\n",(0,r.jsxs)(t.p,{children:["GPT technical Report \uac00 \uc815\uc11d\uac19\uc740 \ucc45\uc774\uc9c0\ub9cc ",(0,r.jsx)(t.a,{href:"https://arxiv.org/pdf/2404.01954.pdf",children:"HCX Technical Reprot"})," \uba3c\uc800 \ucb49 \uc77d\uc73c\uba70 \uacf5\ubd80\ub97c \uc8fc\ub9d0\ubd80\ud130 \ubcf8\uaca9\uc801\uc73c\ub85c \uc2dc\uc791\ud574\ubcf4\ub824 \ud55c\ub2e4."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);