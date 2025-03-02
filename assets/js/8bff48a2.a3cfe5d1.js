"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[548],{58641:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Csharp/Error-Handling/Try-and-Catch","title":"Try and Catch","description":"","source":"@site/docs/04-Csharp/08-Error-Handling/02.Try-and-Catch.md","sourceDirName":"04-Csharp/08-Error-Handling","slug":"/Csharp/Error-Handling/Try-and-Catch","permalink":"/my-documentation/docs/Csharp/Error-Handling/Try-and-Catch","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/08-Error-Handling/02.Try-and-Catch.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"created":"2025-02-26, 20:07","title":"Try and Catch","description":"","sidebar_position":2,"draft":false},"sidebar":"csharpSidebar","previous":{"title":"Exceptions","permalink":"/my-documentation/docs/Csharp/Error-Handling/Exceptions"},"next":{"title":"Async","permalink":"/my-documentation/docs/category/async"}}');var i=t(74848),o=t(28453);const s={created:"2025-02-26, 20:07",title:"Try and Catch",description:"",sidebar_position:2,draft:!1},a=void 0,c={},l=[{value:"Division durch Null",id:"division-durch-null",level:2},{value:"Convert String to Integer",id:"convert-string-to-integer",level:2},{value:"Datei lesen",id:"datei-lesen",level:2}];function d(n){const e={code:"code",h2:"h2",hr:"hr",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"division-durch-null",children:"Division durch Null"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'try\n{\n\tint a = 10;\n\tint b = 0;\n\tint result = a / b;\n\tConsole.WriteLine("Ergebnis: " + result);\n}\ncatch (DivideByZeroException ex)\n{\n\tConsole.WriteLine("Division durch Null ist nicht erlaubt: " + ex.Message);\n}\n'})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"convert-string-to-integer",children:"Convert String to Integer"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'bool loopint = true;\n\nwhile(looping)\n{\n\ttry\n\t{\n\t\tConsole.Write("Enter a number: ")\n\t\tint num = Convert.ToInt32(Console.ReadLine());\n\t\tConsole.WriteLine("The number is: " + num);\n\n\t\tloopint = false;\n\t}\n\tcatch (OverflowException)\n\t{\n\t\tConsole.WriteLine("Please only numbers less than 2 Billion!")\n\t}\n\tcatch (FormatException)\n\t{\n\t\tConsole.WriteLine("Please enter only numbers!");\n\t}\n\tcatch (Exception e)\n\t{\n\t\tConsole.WriteLine("Error: " + e.Message);\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"datei-lesen",children:"Datei lesen"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'try\n{\n\tstring text = File.ReadAllText("datei.txt");\n\tConsole.WriteLine(text);\n}\ncatch (FileNotFoundException ex)\n{\n\tConsole.WriteLine("Datei nicht gefunden: " + ex.Message);\n}\ncatch (IOException ex)\n{\n\tConsole.WriteLine("Ein Fehler ist beim Lesen der Datei aufgetreten: " + ex.Message);\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);