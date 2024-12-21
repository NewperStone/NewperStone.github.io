"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4163],{2207:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"models/mlmodel/clustering/knn","title":"K-NN","description":"k-nearest neighbor \uc54c\uace0\ub9ac\uc998, k-nn \uc54c\uace0\ub9ac\uc998\uc740 \ub300\ud45c\uc801\uc778 non-parametric supervised clusetring \uae30\ubc95\uc774\ub2e4.","source":"@site/docs/models/mlmodel/clustering/k-nn.md","sourceDirName":"models/mlmodel/clustering","slug":"/models/mlmodel/clustering/knn","permalink":"/docs/models/mlmodel/clustering/knn","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/models/mlmodel/clustering/k-nn.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"knn","sidebar_position":1},"sidebar":"MLModelSidebar","previous":{"title":"Clustering","permalink":"/docs/models/mlmodel/clustering/intro"},"next":{"title":"K-Means","permalink":"/docs/models/mlmodel/clustering/kmeans"}}');var l=s(4848),r=s(8453);const t={id:"knn",sidebar_position:1},c="K-NN",o={},d=[{value:"Pros &amp; Cons",id:"pros--cons",level:2}];function a(n){const e={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"k-nn",children:"K-NN"})}),"\n",(0,l.jsx)(e.p,{children:"k-nearest neighbor \uc54c\uace0\ub9ac\uc998, k-nn \uc54c\uace0\ub9ac\uc998\uc740 \ub300\ud45c\uc801\uc778 non-parametric supervised clusetring \uae30\ubc95\uc774\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"k-nn \uc54c\uace0\ub9ac\uc998\uc740,"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ud310\ubcc4\ud558\uace0 \ud558\ub294 \ud14c\uc2a4\ud2b8 \uc0d8\ud50c\uacfc \uac00\uae4c\uc6b4 k \uac1c\uc758 \ud6c8\ub828 \uc0d8\ud50c\uc758 \ub77c\ubca8\uc744 \ud655\uc778"}),"\n",(0,l.jsx)(e.li,{children:"k \uac1c\uc758 \ud6c8\ub828 \uc0d8\ud50c\uc5d0 \ub300\ud574 \ub354 \ub9ce\uc740 class \ub97c \ud14c\uc2a4\ud2b8 \uc0d8\ud50c\uc5d0 \ud560\ub2f9."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"1-nn \uc54c\uace0\ub9ac\uc998\uc740 \ud14c\uc2a4\ud2b8 \uc0d8\ud50c\uc5d0 \ub300\ud574 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ud6c8\ub828 \uc0d8\ud50c\uc758 \ub77c\ubca8\uc744 \ud560\ub2f9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsx)(e.h2,{id:"pros--cons",children:"Pros & Cons"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\uc7a5\uc810","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ub9e4\uc6b0 \ub2e8\uc21c\ud558\uba70 \uc9c1\uad00\uc801\uc785\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(e.li,{children:["feature extraction  \uc774 \uc774\ub8e8\uc5b4\uc84c\ub2e4\uba74, \ubd84\ub958\uc640 \ud68c\uadc0 \ubb38\uc81c \ubaa8\ub450\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ubd84\ub958 : \uac01\uac01\uc758 \ud14c\uc2a4\ud2b8 \uc0d8\ud50c\uc5d0 \ub300\ud574 k-nn \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574 \ub77c\ubca8 \ud560\ub2f9."}),"\n",(0,l.jsx)(e.li,{children:"\ud68c\uadc0 : k-nn \uc744 \uae30\uc900\uc73c\ub85c feature space \ub97c \uac01 label \ub85c \ud560\ub2f9 \uac00\ub2a5."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"non-parametric, non-training"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\ub2e8\uc810","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["feature extraction \uc774 \ud544\uc694.","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"feature extraction \uc774 \uc774\ub8e8\uc5b4\uc838\uc57c\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ub370\uc774\ud130\ub97c \uac70\ub9ac \uacc4\uc0b0\uc774 \uac00\ub2a5\ud55c vector \ub85c \ud45c\ud604\uc774 \uac00\ub2a5\ud574\uc57c \ud558\uba70, vector quality \uc5d0 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\ub294\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\ub192\uc740 \uacc4\uc0b0 \ube44\uc6a9"}),"\n",(0,l.jsxs)(e.li,{children:["\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \ub9ce\uc74c","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ubaa8\ub4e0 \ub370\uc774\ud130 \uc911 \uac00\uc7a5 \uac00\uae4c\uc6b4 k \uac1c\uc758 \ub370\uc774\ud130\ub97c \ucc3e\ub294 \uac83\uc740 \ub9e4\uc6b0 \uacc4\uc0b0\ub7c9\uc774 \ub192\uc740 \ubb38\uc81c."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\ucc28\uc6d0\uc758 \uc800\uc8fc"}),"\n",(0,l.jsx)(e.li,{children:"\ud6c8\ub828 \ub370\uc774\ud130\uc758 \ub178\uc774\uc988\uac00 \ub9e4\uc6b0 \uc9c1\uc811\uc801\uc73c\ub85c \uc601\ud5a5\uc744 \ubbf8\uce68"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\ud65c\uc6a9","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ub370\uc774\ud130 \uc801\uace0, \ub2e8\uc21c\ud55c \ubb38\uc81c"}),"\n",(0,l.jsx)(e.li,{children:"\ubc30\uce58\uc131 \uc791\uc5c5"}),"\n",(0,l.jsx)(e.li,{children:"outlier, noise \uac00 \uc801\uc740 \ud6c8\ub828 \uc0d8\ud50c"}),"\n",(0,l.jsx)(e.li,{children:"\ubaa8\ub378 \ud559\uc2b5\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\uac00 \ubd80\uc871\ud560 \ub54c"}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(6540);const l={},r=i.createContext(l);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);