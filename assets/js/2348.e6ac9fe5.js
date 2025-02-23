"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2348],{61096:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(71021);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var l=t(74848);function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,l.jsx)("div",{className:r.tableOfContentsInline,children:(0,l.jsx)(a.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},71021:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(96540),r=t(53115);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):a.push(r)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function u(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,a.useRef)(void 0),t=i();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let r=n;r<=t;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=u(s,{anchorTopOffset:t.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var d=t(56289),m=t(74848);function f(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:i,maxHeadingLevel:d,...f}=e;const h=(0,r.p)(),b=i??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:b,maxHeadingLevel:p});return c((0,a.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:p}}),[s,u,b,p])),(0,m.jsx)(v,{toc:g,className:t,linkClassName:s,...f})}},79329:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>C});var a=t(96540),r=t(34164),l=t(65627),o=t(56347),s=t(50372),u=t(30604),i=t(11861),c=t(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=m(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,d]=v({queryString:t,groupId:r}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),p=(()=>{const e=i??h;return f({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{p&&u(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(9136);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),r=s[t].value;r!==a&&(i(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function L(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",p.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(L,{...n,...e})]})}function C(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);