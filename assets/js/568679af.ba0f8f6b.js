"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[8153],{4144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"grundlagen/hardware/raid","title":"RAID Systeme","description":"","source":"@site/docs/01-grundlagen/hardware/raid.md","sourceDirName":"01-grundlagen/hardware","slug":"/grundlagen/hardware/raid","permalink":"/my-documentation/docs/grundlagen/hardware/raid","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/01-grundlagen/hardware/raid.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"","sidebar_position":1,"title":"RAID Systeme","draft":false},"sidebar":"grundlagenSidebar","previous":{"title":"Hardware","permalink":"/my-documentation/docs/category/hardware"},"next":{"title":"Sonstiges","permalink":"/my-documentation/docs/category/sonstiges"}}');var l=n(4848),r=n(8453);const s={description:"",sidebar_position:1,title:"RAID Systeme",draft:!1},d=void 0,c={},a=[{value:"Raid 0",id:"raid-0",level:3},{value:"Raid 1",id:"raid-1",level:3},{value:"Raid 5",id:"raid-5",level:3},{value:"Raid 6",id:"raid-6",level:3},{value:"Raid 10",id:"raid-10",level:3},{value:"Zusammenfassung",id:"zusammenfassung",level:3}];function h(e){const t={h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"RAID"})," = ",(0,l.jsx)(t.strong,{children:"R"}),"edundant ",(0,l.jsx)(t.strong,{children:"A"}),"rray of ",(0,l.jsx)(t.strong,{children:"I"}),"ndependent ",(0,l.jsx)(t.strong,{children:"D"}),"isks"]}),"\n",(0,l.jsx)(t.h3,{id:"raid-0",children:"Raid 0"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:'kein "echter" RAID'}),"\n",(0,l.jsxs)(t.li,{children:["Verteilung der Daten auf 2 Festplatten durch ",(0,l.jsx)(t.strong,{children:"Striping"})]}),"\n",(0,l.jsx)(t.li,{children:"erh\xf6hte Lese- und Schreibgeschwindigkeit"}),"\n",(0,l.jsx)(t.li,{children:"Keine Redundanz, keine Datenausfallsicherheit"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Raid 0",src:n(6790).A+"",width:"570",height:"383"})}),"\n",(0,l.jsx)(t.h3,{id:"raid-1",children:"Raid 1"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Mirroring"})," spiegelt Daten auf mehrere Festplatten"]}),"\n",(0,l.jsx)(t.li,{children:"Alle Platten enthalten dieselben Daten"}),"\n",(0,l.jsx)(t.li,{children:"Alle Platten bis auf eine d\xfcrfen ausfallen"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Raid 1",src:n(5807).A+"",width:"369",height:"414"})}),"\n",(0,l.jsx)(t.h3,{id:"raid-5",children:"Raid 5"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Daten werden per ",(0,l.jsx)(t.strong,{children:"Striping"})," auf mehrere Platten verteilt"]}),"\n",(0,l.jsxs)(t.li,{children:["Aus der Gesamtheit der Daten werden ",(0,l.jsx)(t.strong,{children:"Parit\xe4tsdaten"})," gebildet die wiederum auf die Platten verteilt werden"]}),"\n",(0,l.jsx)(t.li,{children:"Mindestens 3 Festplatten: Solange 2 Intakt sind lassen sich die verlorenen Daten wieder herstellen"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Parit\xe4t",src:n(7825).A+"",width:"869",height:"380"})}),"\n",(0,l.jsx)(t.h3,{id:"raid-6",children:"Raid 6"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Verteilung der Daten auf mehrere Platten per ",(0,l.jsx)(t.strong,{children:"Striping"})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Parit\xe4tsdaten"})," werden ",(0,l.jsx)(t.strong,{children:"doppelt erzeugt"})]}),"\n",(0,l.jsx)(t.li,{children:"Mindestens 4 Platten werden ben\xf6tigt"}),"\n",(0,l.jsx)(t.li,{children:"Hohe Ausfallsicherheit (2 Platten d\xfcrfen ausfallen)"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"raid-10",children:"Raid 10"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Kombination aus Raid 1 und Raid 0"}),"\n",(0,l.jsx)(t.li,{children:'Letzte Zahl bildet das "Dach"'}),"\n",(0,l.jsx)(t.li,{children:"Maximal 2 Platten d\xfcrfen ausfallen (aber die richtigen..)"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Raid 10",src:n(5487).A+"",width:"619",height:"364"})}),"\n",(0,l.jsx)(t.h3,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Merkmal"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 0"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 1"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 5"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 6"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 10"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"RAID 61"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Mindestanzahl an Festplatten"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Technik"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Striping"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mirroring"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Striping mit Parit\xe4t"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Striping mit doppelter Parit\xe4t"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mirroring + Striping"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mirroring + RAID 6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Netto-Kapazit\xe4t"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"100%"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"50%"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"(n-1)/n"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"(n-2)/n"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"50%"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"(n-2)/2n"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Maximal m\xf6gliche Ausf\xe4lle"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1 pro Spiegel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1 pro Spiegel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2 pro RAID 6-Array"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Kosten"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Niedrig"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mittel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Sehr hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Extrem hoch"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Lesegeschwindigkeit"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Sehr hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Sehr hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Schreibgeschwindigkeit"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Sehr hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mittel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Mittel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Niedrig"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Hoch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Niedrig"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"n = Anzahl der Festplatten im Verbund:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Zum Beispiel:"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"RAID 5 mit 4 Festplatten"})," \u2192 Netto-Kapazit\xe4t = 4\u22121 / 4 = 75%"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"RAID 6 mit 6 Festplatten"})," \u2192 Netto-Kapazit\xe4t = 6\u22122 / 6 = 66,7%"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"RAID 10 mit 4 Festplatten"})," \u2192 Netto-Kapazit\xe4t = ",(0,l.jsx)(t.strong,{children:"50%"}),", weil immer zwei Festplatten gespiegelt werden"]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7825:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/paritaet-80330d09a9fff253b77911891f3cf564.png"},6790:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/raid-0-9384d95d7a079fa90ad0ad9b291a50de.png"},5807:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/raid-1-ff1f6dc889aab6e48866f039e914b9c9.png"},5487:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/raid-10-851ace1878aea803bc7d14a1fa44477b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(6540);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);