"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573,670],{3027:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(1799),a=r(9396);function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=r(5893),l=(r(7294),r(1664)),i=r.n(l),u=r(6136),o=function(e){var t=e.label,r=e.link,l=e.anchorClasses,o=s(e,["label","link","anchorClasses"]),f=r.href.startsWith("https://#")?r.href.split("//")[1]:r.href,x=r.href.startsWith("https://#");return(0,c.jsx)(c.Fragment,{children:x?(0,c.jsx)("span",(0,a.Z)((0,n.Z)({className:"".concat(l," cursor-pointer"),onClick:function(){return(0,u.kI)("newsletter")}},o),{children:t})):(0,c.jsx)(i(),{href:f,children:(0,c.jsx)("a",(0,a.Z)((0,n.Z)({className:l,target:r.target},o),{children:t}))})})}},1170:function(e,t,r){var n=r(5893),a=r(6722),s=r(3027);t.Z=function(e){var t=e.items;return(0,n.jsx)(n.Fragment,{children:t.map((function(e,t){var r=(0,a.k)(e.link);return(0,n.jsx)("li",{className:"px-4 my-5 md:my-0",children:(0,n.jsx)(s.Z,{label:e.label,link:r,anchorClasses:"font-bold underline-link"})},"".concat(e.label,"-").concat(t))}))})}},196:function(e,t,r){var n=r(5893),a=(r(7294),r(5833));t.Z=function(e){var t=e.style,r=e.className,s=e.text;return(0,n.jsx)("div",{style:t,className:r,children:a.RichText.render(s)})}},4706:function(e,t,r){var n=r(5893),a=(r(7294),r(5833));t.Z=function(e){var t=e.style,r=e.className,s=e.text;return(0,n.jsx)("div",{style:t,className:r,children:a.RichText.asText(s)})}},8670:function(e,t,r){r.d(t,{Ho:function(){return s.Z},Sw:function(){return n.Z},xU:function(){return a.Z}});var n=r(1170),a=r(196),s=r(4706)},1573:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(1799),a=r(5893),s=r(7294),c=r(8670),l=function(e){var t=e.items,r=e.primary,n=(0,a.jsx)("div",{className:"w-[4px] h-8 bg-sawa-dark-green mx-auto"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"max-w-[940px] m-auto mt-[4.438rem] px-4",children:[(0,a.jsx)(c.xU,{text:r.title1,className:"text-[27px] text-sawa-dark-green font-medium"}),(0,a.jsx)(c.xU,{text:r.sub_title,className:"text-[20px] text-sawa-dark-green"}),(0,a.jsx)("div",{className:"mx-auto flex flex-wrap place-content-evenly mt-5",children:t.map((function(e,t){var r=e.image,s=e.description;return(0,a.jsxs)("div",{className:"block w-full sm:w-[245px] lg:w-[300px] p-3",children:[(0,a.jsx)("div",{className:"p-[4px] rounded-full h-[220px] w-[220px] mx-auto bg-gradient-to-r from-natures-vault-green to-cyan-300",children:(0,a.jsx)("img",{className:"object-cover h-full w-full rounded-full",src:r.url,alt:r.alt||"",width:176,height:176})}),n,(0,a.jsx)(c.xU,{text:s,className:"text-center text-[14px] my-2"})]},"intro-image".concat(t))}))}),(0,a.jsxs)("div",{className:"hidden sm:block",children:[(0,a.jsx)("div",{className:"flex justify-between",children:[1,2,3].map((function(e){return(0,a.jsx)(s.Fragment,{children:n},"h-line".concat(e))}))}),(0,a.jsx)("div",{className:"sm:max-w-[495px] lg:max-w-[609px] h-[4px] bg-sawa-dark-green mx-auto"}),n]})]}),(0,a.jsx)("section",{className:"bg-[#f4f4f4]",children:(0,a.jsx)("div",{className:"max-w-[940px] m-auto",children:(0,a.jsx)("img",{className:"object-cover h-full w-full",src:r.image.url,alt:r.image.alt||""})})})]})},i=function(e){var t=e.data;return(0,a.jsx)(l,(0,n.Z)({},t))}},6722:function(e,t,r){r.d(t,{k:function(){return n}});var n=function(e){try{if(e)switch(e.link_type){case"Web":return{href:e.url||"#",target:e.target||"_self"};case"Document":return{href:"home"===e.uid?"/":e.uid?"/".concat(e.uid):"/",target:"_self"};case"Media":return{href:e.url||"#",target:"_blank"};default:return null}}catch(t){return}}},9396:function(e,t,r){function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})}}]);