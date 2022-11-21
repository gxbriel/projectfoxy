"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{2623:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=s(1799),r=s(5893),c=s(7294),i=s(654),l=function(e){var t=e.stories,s=e.selectedTopic,n=e.topicList,l=(0,c.useState)("news"),o=l[0],a=l[1];(0,c.useEffect)((function(){s&&a(s)}),[s]);var x=(0,c.useMemo)((function(){return t.filter((function(e){return e.topic===o})).sort((function(e,t){return new Date(t.date)-new Date(e.date)}))}),[t,o]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"py-[24px] sm:flex items-center gap-[12px] border-y text-[12px] hidden",children:[(0,r.jsx)("span",{className:"text-[16px]",children:"Topics:"}),n.map((function(e){return(0,r.jsx)("p",{className:"".concat("border border-black rounded-full uppercase py-[5px] px-[14px] hover:bg-forest-green2 hover:text-white hover:border-forest-green2 cursor-pointer"," ").concat(o===e&&"bg-forest-green border-forest-green text-white"),onClick:function(){return a(e)},children:e},e)}))]}),(0,r.jsx)("div",{children:x.length>0?x.map((function(e,t){return(0,r.jsx)("div",{className:"py-3 sm:py-6 sm:border-b",children:(0,r.jsx)(i.Z,{newsDetails:e})},e.date+t)})):(0,r.jsx)("p",{className:"my-[176px] text-center",children:"No stories available"})})]})},o=s(1526),a="sm:mb-[25px] mb-[20px] sm:text-[24px] text-[22px] leading-[26.4px] uppercase text-forest-green font-bold",x=function(e){var t=e.items,s=(0,c.useState)("news"),n=s[0],x=s[1],u=(0,c.useState)([]),p=u[0],m=u[1],f=(0,c.useState)([]),h=f[0],b=f[1],j=(0,c.useState)(!1),g=j[0],v=j[1],N=(0,c.useState)(!0),w=N[0],y=N[1],C=function(){return v(!g)};return(0,c.useEffect)((function(){var e=[];t&&t.forEach((function(t){var s=t.topic;!e.includes(s)&&e.push(s)})),m(e),b(t.filter((function(e){return e["is-trending"]})))}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full flex justify-between items-center px-7 mt-[103px] bg-[#f1f2f2] h-[52px] visible sm:hidden",onClick:C,children:[(0,r.jsx)("p",{className:"capitalize font-medium",children:n}),(0,r.jsx)("div",{className:"h-[23px] w-[23px] p-1 ".concat(g&&"rotate-180"),children:(0,r.jsx)(o.pL,{fill:"#000000"})})]}),g&&(0,r.jsx)("div",{className:"absolute py-7 z-10 bg-white w-full border",children:p.map((function(e,t){return(0,r.jsx)("p",{className:"capitalize px-10 py-1 ".concat(e===n&&"text-forest-green2 font-semibold"),onClick:function(){x(e),C()},children:e},e+t)}))}),(0,r.jsxs)("section",{className:"max-w-[1080px] mx-auto md:py-[80px]   \n        ".concat(0!==h.length&&"mt-[52px] sm:mt-[96px] lg:mt-[130px]","\n        px-[24px]"),children:[h.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:a,children:"TRENDING COMPANY STORIES"}),(0,r.jsxs)("div",{className:"sm:border-b",children:[(0,r.jsx)("div",{className:"border-t py-6",children:(0,r.jsx)(i.Z,{newsDetails:h[0]})}),(0,r.jsx)("div",{className:"".concat(h.length<=3?"":"sm:grid sm:grid-cols-3 sm:border-t sm:pb-6"," "),children:h.slice(1).map((function(e,t){return(0,r.jsx)("div",{className:"".concat(t%3!==1?"border-none":t+2===h.length?"sm:border-l":"sm:border-x"," ").concat(h.length<=3?"sm:border-none sm:py-6":"sm:px-4 mt-6"),style:{borderTop:h.length<=3?"1px solid #e5e7eb":""},children:(0,r.jsx)(i.Z,{isSmall:!(h.length<=3),newsDetails:e})},e.date+t)}))})]})]}),(0,r.jsxs)("div",{className:"sm:mt-[119px] mt-[50px]",children:[(0,r.jsx)(d,{title:"All Company Stories",isCurrent:w,onCurrentClick:function(){return y(!0)},onArchiveClick:function(){return y(!1)}}),p&&(0,r.jsx)(l,{stories:t.filter((function(e){return e.archive!==w})),selectedTopic:n,topicList:p})]})]})]})},d=function(e){var t=e.title,s=e.isCurrent,n=e.onCurrentClick,c=e.onArchiveClick,i=function(e){var t=e.onClick,s=e.label,n=e.classStyle;return(0,r.jsx)("button",{onClick:t,className:"text-forest-green ".concat(n," border-[2px] border-forest-green2 font-bold rounded-full text-sm px-5 py-1 sm:py-2.5 text-center mr-2 mb-2"),children:s})};return(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between border-b",children:[(0,r.jsx)("h2",{className:a,children:t}),(0,r.jsxs)("div",{className:"flex sm:items-center",children:[(0,r.jsx)(i,{onClick:n,label:"Current",classStyle:s?"bg-forest-green2 text-white":""}),(0,r.jsx)(i,{onClick:c,label:"Archive",classStyle:s?"":"bg-forest-green2 text-white"})]})]})},u=function(e){var t=e.data;return(0,r.jsx)(x,(0,n.Z)({},t))}}}]);