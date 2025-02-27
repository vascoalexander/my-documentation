"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2043],{64013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Csharp/Classes-OOP/Inferfaces","title":"Interfaces","description":"","source":"@site/docs/04-Csharp/04-Classes-OOP/03-Inferfaces.md","sourceDirName":"04-Csharp/04-Classes-OOP","slug":"/Csharp/Classes-OOP/Inferfaces","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Inferfaces","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/04-Classes-OOP/03-Inferfaces.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"created":"2025-02-23, 11:33","title":"Interfaces","description":"","sidebar_position":3,"language":"C#","tags":[]},"sidebar":"csharpSidebar","previous":{"title":"Struct","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Struct"},"next":{"title":"Delegates","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Delegates"}}');var r=t(74848),a=t(28453);const o={created:"2025-02-23, 11:33",title:"Interfaces",description:"",sidebar_position:3,language:"C#",tags:[]},i=void 0,c={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:['Defines a "contract" that all the classes inheriting from should follow. An interface declares "what the class should have". An inheriting class defines "how it should do it".\n',(0,r.jsx)(n.strong,{children:"Benefit:"}),' security + multiple inheritance + "plug and play"']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'inferface IPrey\n{\n\tvoid Flee();\n}\ninterface IPredator\n{\n\tvoid Hunt();\n}\nclass Rabbit : IPrey\n{\n\tpublic void Flee()\n\t{\n\t\tConsole.WriteLine("The Rabbit flees!");\n\t}\n}\nclass Hawk : IPredator\n{\n\tpublic void Hunt()\n\t{\n\t\tConsole.WriteLine("The Hawk is searching for food!");\n\t}\n}\nclass Fish : IPrey, IPredator\n{\n\tpublic void Flee()\n\t{\n\t\tConsole.WriteLine("The Fish flees!");\n\t}\n\tpublic void Hunt()\n\t{\n\t\tConsole.WriteLine("The Fish searches for smaller food!");\n\t}\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);