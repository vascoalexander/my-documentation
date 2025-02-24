"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[677],{95526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Csharp/Classes-OOP/Delegates","title":"Delegates","description":"","source":"@site/docs/04-Csharp/04-Classes-OOP/04-Delegates.md","sourceDirName":"04-Csharp/04-Classes-OOP","slug":"/Csharp/Classes-OOP/Delegates","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Delegates","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/04-Classes-OOP/04-Delegates.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"created":"2025-02-23, 11:33","title":"Delegates","description":"","sidebar_position":4,"language":"C#","tags":[]},"sidebar":"csharpSidebar","previous":{"title":"Interfaces","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Inferfaces"},"next":{"title":"IO-Operationen","permalink":"/my-documentation/docs/category/io-operationen"}}');var a=t(74848),i=t(28453);const r={created:"2025-02-23, 11:33",title:"Delegates",description:"",sidebar_position:4,language:"C#",tags:[]},o=void 0,c={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Ein Delegate ist ein typisierter Verweis auf eine oder mehrere Methoden. Er erm\xf6glicht es, Methoden als Objekte zu behandeln."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// Delegate-Definition:\npublic delegate int Operation(int a, int b);\n\npublic class Rechner\n{\n    public int Addieren(int a, int b) => a + b;\n    public int Multiplizieren(int a, int b) => a * b;\n}\n\n// Anwendung:\nvar rechner = new Rechner();\n\n// Zuweisung der Methode an den Delegate:\nOperation op = rechner.Addieren;\nConsole.WriteLine(op(3, 4));  // Ausgabe: 7\n\n// Delegate neu zuweisen:\nop = rechner.Multiplizieren;\nConsole.WriteLine(op(3, 4));  // Ausgabe: 12\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);