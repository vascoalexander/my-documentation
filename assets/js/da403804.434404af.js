"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[9759],{2553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"db/grundlagen/erm","title":"Entity Relationship Model","description":"","source":"@site/docs/06-db/grundlagen/erm.mdx","sourceDirName":"06-db/grundlagen","slug":"/db/grundlagen/erm","permalink":"/my-documentation/docs/db/grundlagen/erm","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-db/grundlagen/erm.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Entity Relationship Model","sidebar_position":3,"description":"","draft":false},"sidebar":"dbSidebar","previous":{"title":"Relationale Datenbanken","permalink":"/my-documentation/docs/db/grundlagen/relationale-datenbanken"},"next":{"title":"SQL","permalink":"/my-documentation/docs/category/sql"}}');var s=i(4848),r=i(8453);const l=i.p+"assets/images/crows_foot_notation-3dbff179a56bcbe4486b3405ecac2010.png",d=i.p+"assets/images/ERM_1-3bb85d5c118c9ba1863ad25b029b4d1e.png",a={title:"Entity Relationship Model",sidebar_position:3,description:"",draft:!1},o=void 0,c={},h=[{value:"Entit\xe4t",id:"entit\xe4t",level:3},{value:"Attribut",id:"attribut",level:3},{value:"Relation",id:"relation",level:3},{value:"Kardinalit\xe4t",id:"kardinalit\xe4t",level:3},{value:"Martin-/Crow&#39;s-Foot-Notation",id:"martin-crows-foot-notation",level:3},{value:"ER-Diagramme",id:"er-diagramme",level:3},{value:"Links",id:"links",level:3}];function u(e){const n={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Publiziert in 1976 von Dr. Peter Chen"}),"\n",(0,s.jsx)(n.li,{children:"Hilfsmittel zum Entwurf komplexer Datenbanken"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"entit\xe4t",children:"Entit\xe4t"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eine ",(0,s.jsx)(n.strong,{children:"Entit\xe4t"})," repr\xe4sentiert ein reales Objekt oder Konzept, das in der Datenbank modelliert werden soll."]}),"\n",(0,s.jsx)(n.li,{children:"Beispiel: Ein Kunde, ein Produkt, ein Kurs."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Entit\xe4tstyp:"})," Eine Klasse oder Kategorie von Entit\xe4ten (z. B. \u201eKunde\u201c oder \u201eProdukt\u201c)."]}),"\n",(0,s.jsx)(n.li,{children:"Zwischen zwei Entit\xe4tstypen kann es auch mehr als eine Beziehung geben"}),"\n",(0,s.jsx)(n.li,{children:"Rekursive Beziehungen sind ebenso m\xf6glich (Entit\xe4tstyp hat Beziehung mit sich selbst)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Entit\xe4tsinstanz:"})," Ein konkretes Objekt innerhalb eines Entit\xe4tstyps (z. B. \u201eKunde 123\u201c)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attribut",children:"Attribut"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ein ",(0,s.jsx)(n.strong,{children:"Attribut"})," beschreibt eine Eigenschaft oder ein Merkmal einer Entit\xe4t."]}),"\n",(0,s.jsx)(n.li,{children:"Beispiel: Ein \u201eKunde\u201c hat die Attribute \u201eName\u201c, \u201eAdresse\u201c, \u201eTelefonnummer\u201c."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Schl\xfcsselattribut"}),": Eindeutiges Attribut, das jede Entit\xe4t unterscheidet (zb Kundennummer)"]}),"\n",(0,s.jsxs)(n.li,{children:["Attribute k\xf6nnen auch an den Beziehungstypen h\xe4ngen (h\xe4ufig bei N",":M"," Beziehungen)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"relation",children:"Relation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Eine ",(0,s.jsx)(n.strong,{children:"Beziehung"})," verbindet zwei oder mehr Entit\xe4ten miteinander"]}),"\n",(0,s.jsx)(n.li,{children:'"Hat" funktioniert f\xfcr die meisten Beziehungen als Beziehungstyp'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"kardinalit\xe4t",children:"Kardinalit\xe4t"}),"\n",(0,s.jsx)(n.p,{children:"Kardinalit\xe4ten beschreiben, wie viele Entit\xe4ten eines Entit\xe4tstypen mit wie vielen Entit\xe4ten eines anderen Entit\xe4tstypen\nin einer Beziehung miteinander verbunden sein k\xf6nnen."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"1:1 (Eins zu Eins)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["1",":N"," (Eins zu Viele)"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["M",":N"," (Viele zu Viele)"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Modifizierte Chen Notation:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1: genau 1"}),"\n",(0,s.jsx)(n.li,{children:"c: 0 oder 1"}),"\n",(0,s.jsx)(n.li,{children:"m: mindestens 1"}),"\n",(0,s.jsx)(n.li,{children:"mc: beliebig viele"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"martin-crows-foot-notation",children:"Martin-/Crow's-Foot-Notation"}),"\n",(0,s.jsx)("img",{src:l,class:"img-800",alt:"teilmenge"}),"\n",(0,s.jsx)(n.h3,{id:"er-diagramme",children:"ER-Diagramme"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Rechtecke: ",(0,s.jsx)(n.strong,{children:"Entit\xe4ten"})]}),"\n",(0,s.jsxs)(n.li,{children:["Ellipsen: ",(0,s.jsx)(n.strong,{children:"Attribute"})]}),"\n",(0,s.jsxs)(n.li,{children:["Rauten: ",(0,s.jsx)(n.strong,{children:"Beziehungen"})]}),"\n",(0,s.jsx)(n.li,{children:"Linien: Verkn\xfcpfen Entit\xe4ten und Beziehungen"}),"\n"]}),"\n",(0,s.jsx)("img",{src:d,class:"img-800",alt:"teilmenge"}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",children:(0,s.jsx)(n.strong,{children:"Wikipedia - Entity-relationsship model"})})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);