"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2512],{5660:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>A,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"db/grundlagen/datenbankmodelle","title":"Datenbankmodelle","description":"","source":"@site/docs/06-db/grundlagen/datenbankmodelle.mdx","sourceDirName":"06-db/grundlagen","slug":"/db/grundlagen/datenbankmodelle","permalink":"/my-documentation/docs/db/grundlagen/datenbankmodelle","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-db/grundlagen/datenbankmodelle.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"","draft":false,"title":"Datenbankmodelle"},"sidebar":"dbSidebar","previous":{"title":"Grundlagen","permalink":"/my-documentation/docs/category/grundlagen"},"next":{"title":"Relationale Datenbanken","permalink":"/my-documentation/docs/db/grundlagen/relationale-datenbanken"}}');var l=a(4848),o=a(8453);const d="data:image/png;base64,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",r="data:image/png;base64,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",i={sidebar_position:1,description:"",draft:!1,title:"Datenbankmodelle"},s=void 0,A={},u=[{value:"Was ist eine Datenbank?",id:"was-ist-eine-datenbank",level:3},{value:"<strong>Klassische Datenbankmodelle</strong>",id:"klassische-datenbankmodelle",level:2},{value:"Hierarchisches Datenbankmodell:",id:"hierarchisches-datenbankmodell",level:3},{value:"Netzwerkdatenbankmodell:",id:"netzwerkdatenbankmodell",level:3},{value:"Relationales Datenbankmodell",id:"relationales-datenbankmodell",level:3},{value:"Objektorientiertes Datenbankmodell",id:"objektorientiertes-datenbankmodell",level:3}];function g(e){const n={br:"br",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"was-ist-eine-datenbank",children:"Was ist eine Datenbank?"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Datenbasis (DB)"})," = die eigentlichen Daten",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.strong,{children:"Datenbankmanagementsystem (DBMS)"})," = Software zur Verwaltung der Daten"]}),"\n",(0,l.jsx)(n.h2,{id:"klassische-datenbankmodelle",children:(0,l.jsx)(n.strong,{children:"Klassische Datenbankmodelle"})}),"\n",(0,l.jsx)(n.h3,{id:"hierarchisches-datenbankmodell",children:"Hierarchisches Datenbankmodell:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Speicherung in hierarchischer Baumstruktur"}),"\n",(0,l.jsx)(n.li,{children:"Jeder Knoten hat maximal einen Vorg\xe4nger, aber beliebig viele Nachfolger"}),"\n",(0,l.jsx)(n.li,{children:"schnell aber unflexibel"}),"\n",(0,l.jsx)(n.li,{children:"Zugriff nur \xfcber die Wurzel"}),"\n"]}),"\n",(0,l.jsx)("img",{src:d,class:"img-400",alt:"teilmenge"}),"\n",(0,l.jsx)(n.h3,{id:"netzwerkdatenbankmodell",children:"Netzwerkdatenbankmodell:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Weiterentwicklung des hierarchischen Modells"}),"\n",(0,l.jsx)(n.li,{children:"Auch Querverbindungen und mehrere \xfcbergeordnete Knoten"}),"\n"]}),"\n",(0,l.jsx)("img",{src:r,class:"img-400",alt:"teilmenge"}),"\n",(0,l.jsx)(n.h3,{id:"relationales-datenbankmodell",children:"Relationales Datenbankmodell"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"einfache Handhabung, weite Verbreitung"}),"\n",(0,l.jsx)(n.li,{children:"Manipulation und Abfrage der Daten mittels SQL"}),"\n",(0,l.jsx)(n.li,{children:"Aufteilung der Daten auf Tabellen durch Normalisierung (Vermeidung von Redundanzen)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"objektorientiertes-datenbankmodell",children:"Objektorientiertes Datenbankmodell"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Speicherung in Form von Objekten"}),"\n",(0,l.jsx)(n.li,{children:"Beziehungen zwischen Objekten bleiben erhalten"}),"\n",(0,l.jsx)(n.li,{children:"komplexer Aufbau und Wartung"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>r});var t=a(6540);const l={},o=t.createContext(l);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);