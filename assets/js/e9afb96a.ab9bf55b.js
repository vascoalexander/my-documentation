"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[7800],{62194:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"DSA/Sortieren/Bubblesort","title":"Bubblesort","description":"","source":"@site/docs/02-DSA/03-Sortieren/01-Bubblesort.mdx","sourceDirName":"02-DSA/03-Sortieren","slug":"/DSA/Sortieren/Bubblesort","permalink":"/my-documentation/docs/DSA/Sortieren/Bubblesort","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/02-DSA/03-Sortieren/01-Bubblesort.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"","sidebar_position":1,"title":"Bubblesort"},"sidebar":"dsaSidebar","previous":{"title":"Sortieren","permalink":"/my-documentation/docs/category/sortieren"},"next":{"title":"Insertion-Sort","permalink":"/my-documentation/docs/DSA/Sortieren/Insertion-sort"}}');var a=n(74848),s=n(28453),o=n(65537),i=n(79329);const l={description:"",sidebar_position:1,title:"Bubblesort"},u=void 0,c={},d=[];function b(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"in-Place Verfahren"}),": f\xfcr die Sortierung wird kein weiterer Speicher ben\xf6tigt"]}),"\n",(0,a.jsx)(r.li,{children:"das Maximum steigt wie eine Luftblase nach oben"}),"\n",(0,a.jsx)(r.li,{children:"stabiler Sortieralgorithmus"}),"\n",(0,a.jsx)(r.li,{children:"wenig effizient, daher eher von akademischem Interesse"}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Laufzeitkomplexit\xe4t:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Best: O(n)"}),"\n",(0,a.jsx)(r.li,{children:"Average: O(n\xb2)"}),"\n",(0,a.jsx)(r.li,{children:"Worst: O(n\xb2)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-pseudo",metastring:'title="Pseudocode"',children:"Funktion BubbleSort(array)\nFOR i := 1 bis L\xe4nge[array] DO\n    FOR j := 0 bis L\xe4nge[array] - 1 DO\n        IF array[j] > array[j + 1] THEN\n            vertausche array[j] <-> array[j + 1]\nErgebnis := array\n"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"python-bubble-sort",label:"Python",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def bubblesort(array):\n    for i in range(1,len(array)):\n        for j in range(0,len(array)-1):\n            if array[j] > array[j+1]:\n                temp = array[j]\n                array[j] = array[j+1]\n                array[j+1] = temp\n    return array\n"})})}),(0,a.jsx)(i.A,{value:"csharp-bubble-sort",label:"C#",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:"    static void BubbleSort(int[] array)\n    {\n        for (int i = 1; i < array.Length; i++)\n        {\n            for (int j = 0; j < array.Length - i; j++)\n            {\n                if (array[j] > array[j + 1])\n                {\n                    int temp = array[j];\n                    array[j] = array[j + 1];\n                    array[j + 1] = temp; \n                }\n            }\n        }\n    }\n"})})})]}),"\n",(0,a.jsx)(r.admonition,{title:"Links",type:"info",children:(0,a.jsxs)(r.p,{children:[(0,a.jsxs)(r.a,{href:"https://www.geeksforgeeks.org/bubble-sort-algorithm/",children:[(0,a.jsx)(r.strong,{children:"GfG"}),": Bubble Sort Algorithm"]}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsxs)(r.a,{href:"https://www.youtube.com/watch?v=Dv4qLJcxus8&list=PLZPZq0r_RZON1eaqfafTnEexRzuHbfZX8&index=12&t=7s&pp=iAQB",children:[(0,a.jsx)(r.strong,{children:"BroCode [YT]"}),": Bubblesort"]}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"https://visualgo.net/en/sorting",children:(0,a.jsx)(r.strong,{children:"visualgo - sorting"})})]})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},79329:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:n,children:r})}},65537:(e,r,n)=>{n.d(r,{A:()=>S});var t=n(96540),a=n(34164),s=n(65627),o=n(56347),i=n(50372),l=n(30604),u=n(11861),c=n(78749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=b(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[m,p]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function y(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(u(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function x(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...r,...e}),(0,j.jsx)(x,{...r,...e})]})}function S(e){const r=(0,p.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);