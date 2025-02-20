"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[5652],{464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"DB/ProjectDB/projektdb05-subqueries3","title":"Sub-Queries III","description":"","source":"@site/docs/06-DB/04-ProjectDB/projektdb05-subqueries3.md","sourceDirName":"06-DB/04-ProjectDB","slug":"/DB/ProjectDB/projektdb05-subqueries3","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb05-subqueries3","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-DB/04-ProjectDB/projektdb05-subqueries3.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"description":"","draft":false,"title":"Sub-Queries III"},"sidebar":"dbSidebar","previous":{"title":"Sub-Queries II","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb05-subqueries2"},"next":{"title":"INNER JOIN I","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb06-innerjoin1"}}');var r=t(4848),a=t(8453);const d={sidebar_position:11,description:"",draft:!1,title:"Sub-Queries III"},o=void 0,s={},u=[];function c(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Nutzen Sie die Datenbank ProjektDB, \n-- um die folgenden Aufgaben zu l\xf6sen:\n\n\n-- ==================\n-- ANY / ALL / EXISTS\n-- ==================\n\n-- Aufgabe 5.15\n--\n-- Finden Sie Personalnummer, Projektnummer und Aufgabe \n-- der Mitarbeiter, deren Projekt-Eintrittsdatum nicht \n-- das letzte ist. Nutzen Sie den ANY-Operator.\n--\n--      mit_id  aufgabe         einst_dat\n--      29346   NULL            2017-12-15\n--      20204   Sachbearbeiter  2017-12-20\n--      28559   Sachbearbeiter  2018-02-01\n--      25348   Sachbearbeiter  2018-02-15\n--      28559   NULL            2018-04-15\n--      5765    Projektleiter   2018-07-20\n--      ...\n--      (18 Zeilen)\n\nSELECT mit_id, aufgabe, einst_dat\nFROM Arbeit\nWHERE einst_dat < ANY (SELECT einst_dat FROM Arbeit)\n\n-- Aufgabe 5.16\n--\n-- Nennen Sie die Aufgabe des Mitarbeiters, der die kleinste \n-- Personalnummer hat. Nutzen Sie den ALL-Operator.\n--\n--      aufgabe\n--      Projektleiter\n\nSELECT aufgabe\nFROM Arbeit\nWHERE mit_id <= ALL (SELECT mit_id FROM Arbeit)\n\n-- Aufgabe 5.17\n--\n-- Nennen Sie die Ids und das Gehalt der Mitarbeiter, \n-- deren Gehalt nicht das niedrigste ist. Nutzen Sie \n-- den ANY-Operator.\n--\n--      mit_id  gehalt\n--      2581    3000,00\n--      5765    4500,00\n--      9031    4000,00\n--      9912    3500,00\n--      10102   3500,00\n--      12121   3000,00\n--      ...\n--      (14 Zeilen)\n\nSELECT mit_id, gehalt\nFROM Gehalt\nWHERE gehalt > ANY (SELECT gehalt FROM Gehalt)\n\n-- Aufgabe 5.18\n--\n-- Nennen Sie Id und Gehalt des Mitarbeiters mit dem\n-- h\xf6chsten Gehalt. Nutzen Sie den ALL-Operator.\n--\n--      mit_id  gehalt\n--      28559   6000,00\n\nSELECT mit_id, gehalt\nFROM Gehalt\nWHERE gehalt >= ALL (SELECT gehalt FROM Gehalt)\n\n\n-- Aufgabe 5.19\n--\n-- Nennen Sie den Namen des Mitarbeiters mit der kleinsten \n-- Id. Verwenden Sie eine korrelierte Unterabfrage und den \n-- Operator NOT EXISTS.\n--\n--      nachname\n--      Kaufmann\n\nSELECT nachname\nFROM Mitarbeiter m1\nWHERE NOT EXISTS (\n\tSELECT 1 FROM Mitarbeiter m2\n\tWHERE m2.id < m1.id);\n\n-- Aufgabe 5.20\n--\n-- Finden Sie die St\xe4dte, die sowohl die Wohnorte der \n-- Mitarbeiter als auch die Standorte der Abteilungen \n-- sind. Verwenden Sie eine korrelierte Unterabfrage \n-- und den Operator EXISTS.\n--\n--      stadt\n--      M\xfcnchen\n--      Ulm\n\nSELECT DISTINCT stadt\nFROM Mitarbeiter m\nWHERE EXISTS (\n\tSELECT 1 FROM Abteilung a\n\tWHERE m.stadt = a.stadt);\n"})})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);