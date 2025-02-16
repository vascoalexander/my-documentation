"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[7383],{2586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"dsa/verschiedenes/euklidischer-algorithmus","title":"Euklidischer Algorithmus","description":"","source":"@site/docs/02-dsa/verschiedenes/euklidischer-algorithmus.mdx","sourceDirName":"02-dsa/verschiedenes","slug":"/dsa/verschiedenes/euklidischer-algorithmus","permalink":"/my-documentation/docs/dsa/verschiedenes/euklidischer-algorithmus","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/02-dsa/verschiedenes/euklidischer-algorithmus.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"","sidebar_position":1,"title":"Euklidischer Algorithmus"},"sidebar":"dsaSidebar","previous":{"title":"Verschiedenes","permalink":"/my-documentation/docs/category/verschiedenes"},"next":{"title":"Collatz-Folge","permalink":"/my-documentation/docs/dsa/verschiedenes/collatz-folge"}}');var s=r(4848),a=r(8453),i=r(5537),l=r(9329);const u={description:"",sidebar_position:1,title:"Euklidischer Algorithmus"},c=void 0,o={},d=[{value:"Referenz",id:"referenz",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Suche nach dem gr\xf6\xdften gemeinsamen Teiler (",(0,s.jsx)(n.strong,{children:"GGT"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Euklidischer Algorithmus",src:r(8180).A+"",width:"398",height:"362"})}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"euklid-old",label:"Euklid (klassisch)",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pseudocode",metastring:'title="Pseudocode"',children:"Funktion EuklidKlassisch(a, b)\nIF a := 0 THEN\n    Ergebnis := b\nELSE\n    WHILE b ungleich 0 DO\n        IF a > b THEN\n            a := a - b\n        ELSE\n            b := b - a\n    Ergebnis := a\n"})})}),(0,s.jsx)(l.A,{value:"euklid-old-recursive",label:"Euklid (klassisch-rekursiv)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pseudocode",metastring:'title="Pseudocode"',children:"Funktion EuklidKlassischRekursiv(a,b)\nIF b := 0 THEN\n    Ergebnis := a\nELSE\n    IF a := 0 THEN\n        Ergebnis := b\n    ELSE\n        IF a > b THEN\n            Ergebnis := EuklidKlassischRekursiv(a - b, b)\n        ELSE\n            Ergebnis := EuklidKlassischRekursiv(a, b - a)\n"})})}),(0,s.jsx)(l.A,{value:"banana",label:"Euklid (modern-rekursiv)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pseudocode",metastring:'title="Pseudocode"',children:"Funktion EuklidModern(a,b)\nIF b := 0 THEN\n    Ergebnis := a\nELSE\n    Ergebnis := EuklidModern(b, a % b)\n"})})})]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"euklid-old",label:"Euklid (klassisch)",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="C#"',children:"static int EuklidKlassisch(int a, int b)\n{\n    if (a == 0)\n        return b;\n    else\n    {\n        while (b != 0)\n        {\n            if (a > b)\n                a = a - b;\n            else\n                b = b - a;\n        }\n    }\n    return a;\n}\n"})})}),(0,s.jsx)(l.A,{value:"euklid-old-recursive",label:"Euklid (klassisch-rekursiv)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="C#"',children:"static int EuklidKlassischRekursiv(int a, int b)\n{\n    if (b == 0)\n        return a;\n    else\n    {\n        if (a == 0)\n            return b;\n        else\n        {\n            if (a > b)\n                return EuklidKlassischRekursiv(a - b, b);\n            else\n                return EuklidKlassischRekursiv(a, b - a);\n        }\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"euklid-modern",label:"Euklid (modern-rekursiv)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="C#"',children:"static int EuklidModern(int a, int b)\n{\n    if (b == 0)\n    {\n        return a;\n    }\n    else return EuklidModern(b, a % b);\n}\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"referenz",children:"Referenz"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://de.wikipedia.org/wiki/Euklidischer_Algorithmus",children:(0,s.jsx)(n.strong,{children:"Wikipedia: Euklidischer Algorithmus"})})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),s=r(4164),a=r(5627),i=r(6347),l=r(372),u=r(604),c=r(1861),o=r(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),g=(()=>{const e=c??p;return b({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function A(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const n=e.currentTarget,r=u.indexOf(n),s=l[r].value;s!==t&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:o,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function E(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(A,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,v.jsx)(E,{...e,children:d(e.children)},String(n))}},8180:(e,n,r)=>{r.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4AAAFqBAMAAAD//6DbAAAAElBMVEUAAADAwMD/AAAA/wAAAP////91k2mrAAAE60lEQVR42uzdUY6bTBAE4FKiOkLef+UEkXKGfa+H1P2v8svpbEbBRGF2zZiZrTYgjI3jTwwwkXun4TUijjjiOMMh28LsjiLQvJJD6AzaVk1xnOD49PXrfz0zXYJ1HFzDIa/h4BoOeQ0H7TWuu4s4AKSf+HjHjzjiiOMW2xsx5j4E+sMhTBZcyCHZ5p+Oz9+/f5tppm3KluO4iEOWzfkdLMn0DgAUgLkd+/dBYbJY0JH/f1wgXuKII4444ogjjjjiiCOOOOKII4444ogjjjjiiGN9h9AZjONER3++44McnsHRn5/4/uh1vKkd0rbmd4i24VN/P+919H7+Sg7SlvocODn6HZZps9dxsehwDG0nb3DQtHwxR//9RiXZOJ59HX2DA4ABcG7H/X3wCv0MPcjx46M40BkjHBXXcqAzOhwDYrzjxReLOO6DtjvOhO4dZFs43QHaso4z+nYoAs0Bx6OmY9G/g2qK47jDvQ73OTzMIXc65D4Hz3QIsNnxz/TuALAcGnPdlTuicwfVPkMc7HWwzyEPccidDrnPwTEO9jrY55DHODq66L07lANA+olxxBFHHHHEEUccccQRRxxxxBFHHHHEEUcccczgOBrC5R06kpdCcwWHbPl60ZcvupDDNJdwCM7xyPlxhiPX3dwHT+iXZPzEOOJIHazUwUr9qNTBSh2s1MFKHazUwUodrNTB+ujj0L/EEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccH8dxJI/sS/LIPnr+VfLIkkc2wnGsXdViCQev7Tj091I1T+2YJY/soEOe3DFJHpkOOCboJ67jwD8ijvw9zlscL3HEMcABLuGQtYSDNuNIu8p5vuMAmPM8jjhyvUo/MY444ogjjjjiiCOOOOKII44LjvvB2Rza/f1PcVwlv4S2zXc6BHDbQFnLkQ75vQ5b3sacDvP5Dj7GIdg0YAntOYc55Me0K5qmbIpuD49zAHj/eV4Y6pXFWo687j7keCziMAWgzo8S1POp+iXlqA+qNbXn0+T7NIc2Dk3g6LhezeMA6GH3j3IMCC0yfrsWGU9fi9Q3UOpNpI5J6sqkHkscqSuTujKpPxhHHHHEEUccccQRRxxxPN4hgPubgaPl8/h7qe3QLxzm+FtKhI4Pe9QSK7DZXSMdPuywarqio2bQqm9CWlAbwYX1GjYO2qyt4O8EEdWnCRRQG4c66sFapWm4OfS60bWxOUSz7VjvrTVZ9cahjvYdaqU1HrXX1Bxsb6yX7xyewSHvOOrQbBwc7QCw6zB57+COQ78kZcfr2hOOh4865D0HAANgO+Nq40gH/9quLN85uHHs3Qf1pPugLMv316sC6Zer+eqNry9uHRztaP2SatHb+0ctweZojQUsh8GtQ2A7SHpSP7GdK0/LZ5jToXPG81FZ5nZU0wY80nGf5/ewiOPfDh9xCPPlt3fk807lmPX381Uc/7d3xygAwkAQRbfZ+00z97+KpbhioSA64U8nafLAJRuIsUZS36uZ1DpPPScz6+HifAmOn9wjvIojtT7a56ic6oj/fhAH/9Xn3locOHDccmgMK9RRczjTIfkQKdPRY96N40uHrFHlmY4e8+5Mx9y6yomOKu0d+/7MOogDB/0uDhw4cOC47zAOHC84VGs42r2CQ7Zw4MCBAweOJ+sgfQl9Ig4cf88GimaQx7B78icAAAAASUVORK5CYII="},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);