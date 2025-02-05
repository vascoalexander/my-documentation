"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[8226],{8913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"grundlagen/algorithmen/Suchen/BinarySearch","title":"Bin\xe4re Suche","description":"- Funktioniert nur mit einem vorsortierten Array","source":"@site/docs/grundlagen/algorithmen/Suchen/01-BinarySearch.mdx","sourceDirName":"grundlagen/algorithmen/Suchen","slug":"/grundlagen/algorithmen/Suchen/BinarySearch","permalink":"/my-documentation/docs/grundlagen/algorithmen/Suchen/BinarySearch","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/grundlagen/algorithmen/Suchen/01-BinarySearch.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Bin\xe4re Suche"},"sidebar":"grundlagenSidebar","previous":{"title":"Suchen","permalink":"/my-documentation/docs/category/suchen"},"next":{"title":"Datenstrukturen","permalink":"/my-documentation/docs/category/datenstrukturen"}}');var a=t(4848),i=t(8453),l=t(5537),s=t(9329);const u={title:"Bin\xe4re Suche"},o=void 0,c={},d=[{value:"Links",id:"links",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Funktioniert nur mit einem vorsortierten Array"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Laufzeitkomplexit\xe4t:"})," O(log n)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-pseudo",metastring:'title="Pseudocode"',children:"Funktion BinarySearch(Array, ziel)\n    links := 0\n    rechts := L\xe4nge(array) - 1\n\n    WHILE links <= rechts\n        mitte := (links + rechts) / 2\n        IF array[mitte] = ziel\n            return mitte\n        ELSE IF array[mitte] < ziel\n            links := mitte + 1\n        ELSE\n            rechts := mitte - 1\n"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(s.A,{value:"python-binary-search",label:"Python",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def binary_search(array, ziel):\n    links = 0\n    rechts = len(array) - 1\n\n    while links <= rechts:\n        mitte = (links + rechts) // 2\n        if array[mitte] == ziel:\n            return mitte\n        elif array[mitte] < ziel:\n            links = mitte + 1\n        else:\n            rechts = mitte - 1\n    return -1 # ziel kein element von array\n"})})}),(0,a.jsx)(s.A,{value:"csharp-binary-search",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"static int BinarySearch(int[] array, int ziel)\n{\n    int links = 0;\n    int rechts = array.Length - 1;\n\n    while (links <= rechts)\n    {\n        int mitte = (links + rechts) / 2;\n        if (ziel == array[mitte])\n            return mitte;\n        if (ziel < array[mitte])\n            links = mitte + 1;\n        else\n            rechts = mitte - 1;\n    }\n    return -1; // ziel kein element von array\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GfG:"})," ",(0,a.jsx)(n.a,{href:"https://www.geeksforgeeks.org/binary-search/?ref=outind",children:"Binary Search Algorithm"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"BroCode [YT]:"})," ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=xrMppTpoqdw&list=PLZPZq0r_RZON1eaqfafTnEexRzuHbfZX8&index=10&pp=iAQB",children:"Binary Search"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(6540),a=t(4164),i=t(5627),l=t(6347),s=t(372),u=t(604),o=t(1861),c=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,d]=f({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=p(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function S(e){const n=(0,b.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);