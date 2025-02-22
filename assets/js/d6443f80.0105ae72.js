"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[8330],{1184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Linux/Dateisystem/Links","title":"Links","description":"","source":"@site/docs/07-Linux/01-Dateisystem/03-Links.md","sourceDirName":"07-Linux/01-Dateisystem","slug":"/Linux/Dateisystem/Links","permalink":"/my-documentation/docs/Linux/Dateisystem/Links","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/07-Linux/01-Dateisystem/03-Links.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Links","description":"","sidebar_position":3,"draft":false},"sidebar":"linuxSidebar","previous":{"title":"LVM","permalink":"/my-documentation/docs/Linux/Dateisystem/LVM"},"next":{"title":"Package Management","permalink":"/my-documentation/docs/Linux/Package-Management"}}');var s=t(4848),l=t(8453);const r={title:"Links",description:"",sidebar_position:3,draft:!1},d=void 0,a={},c=[{value:"Symlinks",id:"symlinks",level:3},{value:"Hardlinks",id:"hardlinks",level:3},{value:"Zusammenfassung",id:"zusammenfassung",level:3},{value:"Symlink Script",id:"symlink-script",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"symlinks",children:"Symlinks"}),"\n",(0,s.jsx)(n.p,{children:"Symlinks sind wie Verkn\xfcpfungen: Sie verweisen auf eine Datei oder ein Verzeichnis, aber enthalten nicht die eigentlichen Daten."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ln -s <source> <destination/mein_link>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"hardlinks",children:"Hardlinks"}),"\n",(0,s.jsxs)(n.p,{children:["Hardlinks sind ",(0,s.jsx)(n.strong,{children:"alternative Namen f\xfcr dieselbe Datei"})," im gleichen Dateisystem. Sie zeigen direkt auf die ",(0,s.jsx)(n.strong,{children:"gleichen Datenbl\xf6cke"})," wie die Originaldatei."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ln <source> <destination/mein_link>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Anzahl der Hardlinks pr\xfcfen"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l /home/user/datei.txt /tmp/mein_hardlink   # Die zweite Spalte zeigt die Anzahl der Hardlinks zur Datei.\nstat /home/user/datei.txt                       # Zeigt die Anzahl der Hardlinks (Links:).\n"})}),"\n",(0,s.jsx)(n.h3,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Feature"}),(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["Symbolischer Link (",(0,s.jsx)(n.code,{children:"ln -s"}),")"]}),(0,s.jsxs)(n.th,{style:{textAlign:"left"},children:["Hardlink (",(0,s.jsx)(n.code,{children:"ln"}),")"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Verweist auf"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Datei oder Verzeichnis"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Direkt auf Datenbl\xf6cke"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"G\xfcltig nach L\xf6schen der Originaldatei?"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u274c Nein"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u2705 Ja"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Kann auf anderes Dateisystem zeigen?"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u2705 Ja"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u274c Nein"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Unterst\xfctzt Verzeichnisse?"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u2705 Ja"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u274c Nein"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"symlink-script",children:"Symlink Script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nif [ "$#" -ne 2 ]; then\n    echo "Usage: $0 target destination"\n    exit 1\nfi\n\nTARGET=$1\nDESTINATION=$2\n\nfor dir in "$TARGET"/*/; do\n  ln -s "$dir" "$DESTINATION"\ndone\n\necho "Symbolic links created from $TARGET to $DESTINATION"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);