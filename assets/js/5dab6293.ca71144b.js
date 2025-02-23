"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6461],{58094:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Csharp/Coding-Standards","title":"Coding Standards","description":"","source":"@site/docs/04-Csharp/13-Coding-Standards.md","sourceDirName":"04-Csharp","slug":"/Csharp/Coding-Standards","permalink":"/my-documentation/docs/Csharp/Coding-Standards","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/13-Coding-Standards.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"description":"","sidebar_position":13,"title":"Coding Standards","draft":false},"sidebar":"csharpSidebar","previous":{"title":"Statements","permalink":"/my-documentation/docs/Csharp/Statements"},"next":{"title":"Documentation","permalink":"/my-documentation/docs/Csharp/Documentation"}}');var l=n(74848),i=n(28453);const r={description:"",sidebar_position:13,title:"Coding Standards",draft:!1},d=void 0,a={},c=[{value:"<strong>Naming Conventions</strong>",id:"naming-conventions",level:2}];function x(t){const e={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"naming-conventions",children:(0,l.jsx)(e.strong,{children:"Naming Conventions"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names",children:(0,l.jsx)(e.strong,{children:"Microsoft-Learn - C# Identifier Names"})})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"Was"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"Wie"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"Beispiel"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Klasse"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MeineKlasse"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Struktur"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MeineStruktur"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Schnittstelle (Interface)"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:'PascalCase mit "I"-Pr\xe4fix'}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"IMeineSchnittstelle"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Methode"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"BerechneWert"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Eigenschaft (Property)"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MeinWert"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Ereignis (Event)"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"WertGeaendert"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Feld (privat)"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"_camelCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"_meinFeld"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Parameter"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"camelCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"parameterName"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Lokale Variable"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"camelCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"lokaleVariable"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Konstante"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MaxWert"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Enumeration"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Wochentag"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Enum-Mitglied"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Montag"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Namespace"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MeinProjekt"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Delegat"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"PascalCase"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"MeinDelegate"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(x,{...t})}):x(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var s=n(96540);const l={},i=s.createContext(l);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);