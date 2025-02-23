"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[9892],{28192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Grundlagen/Software-Entwicklung/Datentypen-und-Variablen","title":"Datentypen und Variablen","description":"","source":"@site/docs/01-Grundlagen/02-Software-Entwicklung/02-Datentypen-und-Variablen.md","sourceDirName":"01-Grundlagen/02-Software-Entwicklung","slug":"/Grundlagen/Software-Entwicklung/Datentypen-und-Variablen","permalink":"/my-documentation/docs/Grundlagen/Software-Entwicklung/Datentypen-und-Variablen","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/01-Grundlagen/02-Software-Entwicklung/02-Datentypen-und-Variablen.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"","sidebar_position":2,"title":"Datentypen und Variablen"},"sidebar":"grundlagenSidebar","previous":{"title":"Grundbegriffe","permalink":"/my-documentation/docs/Grundlagen/Software-Entwicklung/Grundbegriffe"},"next":{"title":"Paradigmen","permalink":"/my-documentation/docs/Grundlagen/Software-Entwicklung/Paradigmen"}}');var i=t(74848),l=t(28453);const s={description:"",sidebar_position:2,title:"Datentypen und Variablen"},d=void 0,a={},c=[{value:"Ver\xe4nderbare Typen (Mutable Types)",id:"ver\xe4nderbare-typen-mutable-types",level:2},{value:"C# - Referenz Typen (Reference Types)",id:"c---referenz-typen-reference-types",level:3},{value:"Unver\xe4nderbare Typen (Immutable Types)",id:"unver\xe4nderbare-typen-immutable-types",level:2},{value:"C# - Werttypen (Value Types)",id:"c---werttypen-value-types",level:3},{value:"Stack und Heap",id:"stack-und-heap",level:2},{value:"Vergleich Stack vs. Heap",id:"vergleich-stack-vs-heap",level:3},{value:"Historischer Vergleich",id:"historischer-vergleich",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"ver\xe4nderbare-typen-mutable-types",children:"Ver\xe4nderbare Typen (Mutable Types)"}),"\n",(0,i.jsx)(n.p,{children:"Ver\xe4nderbare Typen sind Objekte, deren Inhalt nach ihrer Erstellung ge\xe4ndert werden kann. \xc4nderungen k\xf6nnen durch Hinzuf\xfcgen, Entfernen oder \xc4ndern von Elementen innerhalb des Objekts erfolgen."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Beispiel: Set (Menge)"})}),"\n",(0,i.jsx)(n.p,{children:"Ein Set in Python ist eine Sammlung eindeutiger, ungeordneter Elemente. Sets sind ver\xe4nderbar, was bedeutet, dass du Elemente hinzuf\xfcgen oder entfernen kannst."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Variable speichert eine Referenz auf das Objekt."}),"\n",(0,i.jsx)(n.li,{children:"Wenn eine andere Variable darauf zeigt, beeinflussen \xc4nderungen beide."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Referenzierung im Speicher bei Mutable Types"})}),"\n",(0,i.jsx)("div",{class:"img-600",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Mutable Types",src:t(34406).A+"",width:"1147",height:"462"})})}),"\n",(0,i.jsx)(n.h3,{id:"c---referenz-typen-reference-types",children:"C# - Referenz Typen (Reference Types)"}),"\n",(0,i.jsx)(n.p,{children:"-> Mutable Verhalten"}),"\n",(0,i.jsx)(n.p,{children:"Referenztypen werden auf dem Heap gespeichert, w\xe4hrend die Variable selbst auf dem Stack eine Referenz auf den Heap-Speicher enth\xe4lt.\nDazu geh\xf6ren Klassen (class), Arrays und string."}),"\n",(0,i.jsx)(n.h2,{id:"unver\xe4nderbare-typen-immutable-types",children:"Unver\xe4nderbare Typen (Immutable Types)"}),"\n",(0,i.jsx)(n.p,{children:"Unver\xe4nderbare Typen sind Objekte, deren Inhalt nach ihrer Erstellung nicht ge\xe4ndert werden kann. Wenn du versuchst, den Inhalt eines unver\xe4nderbaren Typs zu \xe4ndern, musst du ein neues Objekt erstellen."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Beispiel: Tuple (Tupel)"})}),"\n",(0,i.jsx)(n.p,{children:"Ein Tupel in Python ist eine geordnete Sammlung von Elementen. Tupel sind unver\xe4nderbar, was bedeutet, dass du ihre Elemente nach der Erstellung nicht \xe4ndern kannst."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\xc4nderungen erzeugen ein neues Objekt im Speicher."}),"\n",(0,i.jsx)(n.li,{children:"Die urspr\xfcngliche Variable bleibt unber\xfchrt."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Refrenzierung im Speicher bei Immutable Types"})}),"\n",(0,i.jsx)("div",{class:"img-600",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Immutable Types",src:t(16748).A+"",width:"1115",height:"510"})})}),"\n",(0,i.jsx)(n.h3,{id:"c---werttypen-value-types",children:"C# - Werttypen (Value Types)"}),"\n",(0,i.jsx)(n.p,{children:"-> Immutable Verhalten"}),"\n",(0,i.jsx)(n.p,{children:"Werttypen werden auf dem Stack gespeichert und kopiert, wenn sie einer neuen Variable zugewiesen werden.\nDazu geh\xf6ren primitive Datentypen wie int, double, bool, aber auch Strukturen (struct)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Wann sollte man immutable Typen verwenden?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Thread-Sicherheit:"})," Immutable Typen sind automatisch thread-safe."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Datenintegrit\xe4t:"})," Unver\xe4nderbare Objekte vermeiden ungewollte Seiteneffekte."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Value Objects (DDD):"})," Gut f\xfcr Konzepte wie Geld (",(0,i.jsx)(n.code,{children:"Money"}),") oder Punkte (",(0,i.jsx)(n.code,{children:"Point"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"(DDD = Domain Driven Design)"}),"\n",(0,i.jsx)(n.h2,{id:"stack-und-heap",children:"Stack und Heap"}),"\n",(0,i.jsx)(n.p,{children:"Die Begriffe Stack und Heap stammen aus der Informatikgeschichte und haben ihre Wurzeln in der fr\xfchen Speicherverwaltung von Computern. Ihre Konzepte wurden \xfcber Jahrzehnte hinweg entwickelt und sind heute fundamentale Bestandteile moderner Programmiersprachen."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mutable oder immutable hat nichts mit Stack oder Heap zu tun!"}),"\n",(0,i.jsx)(n.li,{children:"sind nicht physisch getrennt, sondern werden logisch organisiert"}),"\n",(0,i.jsx)(n.li,{children:"Die Speicherverwaltung erfolgt gr\xf6\xdftenteils automatisch"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vergleich-stack-vs-heap",children:"Vergleich Stack vs. Heap"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Eigenschaft"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Stack"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Heap"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Geschwindigkeit"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Sehr schnell"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Langsam"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Speicherort"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Lokale Variablen, Methodenaufrufe"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Objekte, Referenztypen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Speicherfreigabe"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Automatisch (LIFO)"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Garbage Collector"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Speicherung von"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Werttypen"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Referenztypen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Lebensdauer"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Bis Methode endet"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Unbekannt (bis GC es entfernt)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Wer verwaltet Stack und Heap in .NET?"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Stack"}),": Wird durch den Thread-Speicher verwaltet."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jeder Thread hat seinen eigenen Stack."}),"\n",(0,i.jsx)(n.li,{children:"Die Verwaltung erfolgt automatisch durch die CLR."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Heap"}),": Wird durch den Garbage Collector (GC) verwaltet."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Objekte im Heap bleiben bestehen, bis der GC sie entfernt."}),"\n",(0,i.jsx)(n.li,{children:"Die Speicherverwaltung erfolgt automatisch durch die CLR."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"historischer-vergleich",children:"Historischer Vergleich"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Konzept"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Ursprung"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Erste Implementierung"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Zweck"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Stack"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Fr\xfche CPU-Architektur, Assembler"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Burroughs B5000 (1961)"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Schnelle, automatische Speicherverwaltung f\xfcr Funktionsaufrufe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Heap"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Dynamische Speicherverwaltung, fr\xfche Hochsprachen"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"LISP (1959), C (1970er)"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Flexibler Speicher f\xfcr Objekte mit unbestimmter Lebensdauer"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},16748:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/referencing_immutable_types-596247156d56dc286a925915fa4ad6fd.png"},34406:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/referencing_mutable_types-d0de6651968d8e616599798b564db8ca.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);