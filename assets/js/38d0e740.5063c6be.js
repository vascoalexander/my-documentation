"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[7838],{5408:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"DB/ProjectDB/projektdb04-gruppierungundaggregatfunktionen2","title":"Aggregat-Funktionen II","description":"","source":"@site/docs/06-DB/04-ProjectDB/projektdb04-gruppierungundaggregatfunktionen2.md","sourceDirName":"06-DB/04-ProjectDB","slug":"/DB/ProjectDB/projektdb04-gruppierungundaggregatfunktionen2","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb04-gruppierungundaggregatfunktionen2","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-DB/04-ProjectDB/projektdb04-gruppierungundaggregatfunktionen2.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"","draft":false,"title":"Aggregat-Funktionen II"},"sidebar":"dbSidebar","previous":{"title":"Aggregat-Funktionen I","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb04-gruppierungundaggregatfunktionen1"},"next":{"title":"Aggregat-Funktionen III","permalink":"/my-documentation/docs/DB/ProjectDB/projektdb04-gruppierungundaggregatfunktionen3"}}');var r=t(4848),a=t(8453);const o={sidebar_position:7,description:"",draft:!1,title:"Aggregat-Funktionen II"},u=void 0,d={},g=[];function s(n){const e={code:"code",pre:"pre",...(0,a.R)(),...n.components};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'-- Nutzen Sie die Datenbank ProjektDB, \n-- um die folgenden Aufgaben zu l\xf6sen:\n\n\n-- ==================================\n-- Aggregatfunktionen mit Gruppierung\n-- ==================================\n\n-- Aufgabe 4.7\n--\n-- Finden Sie heraus, wie viele verschiedene Aufgaben in jedem \n-- Projekt ausge\xfcbt werden. Nullwerte sollen nicht gez\xe4hlt werden!\n--\n--      pro_id  anzahl\n--      p1      3\n--      p2      1\n--      p3      3\n--      p4      3\n--      p5      2\n\nSELECT *\nFROM Arbeit\n\nSELECT pro_id, COUNT(DISTINCT aufgabe) as anzahl\nFROM Arbeit\nGROUP BY pro_id;\n\n-- Aufgabe 4.8\n--\n-- Finden Sie heraus, wieviele Mitarbeiter in jedem Projekt arbeiten.\n--\n--      pro_id  anzahl\n--      p1      5\n--      p2      4\n--      p3      4\n--      p4      4\n--      p5      3\n\nSELECT pro_id, COUNT(DISTINCT mit_id) AS anzahl\nFROM Arbeit\nGROUP BY pro_id;\n\n-- Aufgabe 4.9\n--\n-- Gruppieren Sie die Reihen der Tabelle \u201cArbeit\u201c nach den \n-- vorhandenen Aufgaben und z\xe4hlen Sie die Anzahl der Mitarbeiter \n-- abh\xe4ngig von der jeweiligen Aufgabe.\n--\n--      aufgabe         anzahl\n--      NULL            5\n--      Gruppenleiter   3\n--      Projektleiter   4\n--      Sachbearbeiter  7\n\nSELECT aufgabe, \n\tCOUNT(DISTINCT mit_id) AS anzahl\nFROM Arbeit\nGROUP BY aufgabe;\n\n-- Aufgabe 4.10\n--\n-- Wie viele "echte" Aufgaben nehmen die Mitarbeiter wahr,\n-- deren Id gr\xf6\xdfer als 20000 ist?\n--\n--      mit_id  anzahl\n--      20204   1\n--      22222   1\n--      24321   0\n--      25348   1\n--      27365   1\n--      28559   1\n--      29346   1\n\nSELECT mit_id, COUNT(aufgabe) AS anzahl\nFROM Arbeit\nWHERE mit_id > 20000\nGROUP BY mit_id;\n\n-- Aufgabe 4.11\n--\n-- Z\xe4hlen Sie, wie viele Mitarbeiter in jedem Jahr f\xfcr ein Projekt \n-- eingestellt wurden.\n--\n--      Jahr  Anzahl\n--      2017  2\n--      2018  8\n--      2019  8\n\nSELECT YEAR(einst_dat), COUNT(DISTINCT mit_id) AS anzahl\nFROM Arbeit\nGROUP BY YEAR(einst_dat);\n\n'})})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(s,{...n})}):s(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>u});var i=t(6540);const r={},a=i.createContext(r);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);