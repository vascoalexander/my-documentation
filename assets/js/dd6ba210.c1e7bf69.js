"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[3597],{76970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Code/CSharp/Basics/Ternary Operator","title":"Ternary Operator","description":"","source":"@site/docs/09-Code/01-CSharp/01-Basics/Ternary Operator.md","sourceDirName":"09-Code/01-CSharp/01-Basics","slug":"/Code/CSharp/Basics/Ternary Operator","permalink":"/my-documentation/docs/Code/CSharp/Basics/Ternary Operator","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/09-Code/01-CSharp/01-Basics/Ternary Operator.md","tags":[{"inline":true,"label":"throw","permalink":"/my-documentation/docs/tags/throw"}],"version":"current","frontMatter":{"created":"2025-02-23, 10:25","language":"C#","description":"","tags":["throw"]},"sidebar":"codeSidebar","previous":{"title":"Switch expression","permalink":"/my-documentation/docs/Code/CSharp/Basics/Switch expression"},"next":{"title":"Tuples","permalink":"/my-documentation/docs/Code/CSharp/Basics/Tuples"}}');var o=r(74848),i=r(28453);const a={created:"2025-02-23, 10:25",language:"C#",description:"",tags:["throw"]},s=void 0,c={},d=[{value:"with throw",id:"with-throw",level:3},{value:"with ReadLine",id:"with-readline",level:3},{value:"with formatted String",id:"with-formatted-string",level:3}];function l(e){const n={code:"code",h3:"h3",hr:"hr",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"with-throw",children:"with throw"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'string currentColor = farbe;  \nConsole.WriteLine(  \n    (currentColor == "Rot") ? "Anhalten" :   \n    (currentColor == "Gelb" ? "Warten" : \n    (currentColor == "Gr\xfcn") ? "Fahren" :\n    throw new InvalidOperationException("Ung\xfcltige Farbe")));\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"with-readline",children:"with ReadLine"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'static void PwAbfrage()\n{\n Console.Write("Eingabe PW: ");\n Console.WriteLine(\n  Console.ReadLine() == "1234"\n  ? "Zugriff erlaubt"\n  : "Zugriff verweigert");\n}\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"with-formatted-string",children:"with formatted String"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'int num = 5;  \nConsole.WriteLine("Die Zahl ist {0} als 10", (num < 10) ? "kleiner" : "gr\xf6\xdfer");\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);