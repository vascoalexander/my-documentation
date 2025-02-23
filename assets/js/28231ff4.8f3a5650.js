"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2315],{11609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"DB/ProjectDB/projektdbp1-programmierung2","title":"Programmierung II","description":"","source":"@site/docs/06-DB/04-ProjectDB/projektdbp1-programmierung2.md","sourceDirName":"06-DB/04-ProjectDB","slug":"/DB/ProjectDB/projektdbp1-programmierung2","permalink":"/my-documentation/docs/DB/ProjectDB/projektdbp1-programmierung2","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-DB/04-ProjectDB/projektdbp1-programmierung2.md","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21,"description":"","draft":false,"title":"Programmierung II"},"sidebar":"dbSidebar","previous":{"title":"Programmierung I","permalink":"/my-documentation/docs/DB/ProjectDB/projektdbp1-programmierung1"},"next":{"title":"Programmierung III","permalink":"/my-documentation/docs/DB/ProjectDB/projektdbp1-programmierung3"}}');var i=t(74848),a=t(28453);const o={sidebar_position:21,description:"",draft:!1,title:"Programmierung II"},d=void 0,m={},s=[];function g(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"--\tNutzen Sie die Datenbank ProjektDB zur \n--\tL\ufffdsung dieser Aufgabe\n\nUSE ProjektDB;\nGO\n\nCREATE SCHEMA Programming;\nGO\n\n--\tAufgabe P1.3\n--\n--\tErstellen Sie eine gespeicherte Prozedur \"sp_FilterMitarbeiter2\",\n--\tdie eine Liste der Mitarbeiter ausgibt, die in einer bestimmten\n--\tGehalts-Range liegen. Die Prozedur soll die beiden Parameter\n--\t@MinGehalt und @MaxGehalt entgegennehmen. Wenn es keine passenden\n--\tMitarbeiter gibt, soll eine entsprechende Meldung ausgegeben werden.\n\nCREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter4\n\t@MinGehalt INT,\n\t@MaxGehalt INT\nAS\nBEGIN\nIF EXISTS (SELECT mit_id FROM Gehalt WHERE gehalt BETWEEN @MinGehalt AND @MaxGehalt)\n\tSELECT m.nachname, m.vorname, g.gehalt\n\tFROM Mitarbeiter m\n\tJOIN Gehalt g ON g.mit_id = m.id\n\tWHERE g.gehalt BETWEEN @MinGehalt AND @MaxGehalt\nELSE\n\tPRINT 'Keine Mitarbeiter mit einem Gehalt von ' + CAST(@MinGehalt AS VARCHAR(10)) + ' bis ' + \n\tCAST(@MaxGehalt AS VARCHAR(10)) + ' gefunden.'\nEND\nGO\n\nProgramming.sp_FilterMitarbeiter4 '10000', '50000'\nGO\n\n--\tAufgabe P1.4\n--\n--\tErstellen Sie eine Prozedur, die ein neues Projekt anlegt. Der\n--\tProzedur sollen die Werte f\ufffdr die Projekt-Id, die Bezeichnung\n--\tund die Mittel \ufffdbergeben werden. Das Projekt darf nur angelegt\n--\twerden, wenn es keinen Konflikt bei Id und Bezeichnung gibt.\n\nCREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter5\n\t@id char(2),\n\t@bezeichnung varchar(20),\n\t@mittel money\nAS\nBEGIN\nIF NOT EXISTS (SELECT * FROM Projekt WHERE @bezeichnung = bezeichnung OR @id = id)\n\tINSERT INTO Projekt (id, bezeichnung, mittel)\n\tVALUES (@id, @bezeichnung, @mittel)\nELSE\n\tPRINT 'Ung\ufffdltige Parameter: id oder Bezeichnunt schon existent!'\nEND\nGO\n\nProgramming.sp_FilterMitarbeiter5 'p7', 'Pluto', '85000'\nGO\n\n-- Alternative L\ufffdsung\n\nCREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter5\n\t@id char(2),\n\t@bezeichnung varchar(20),\n\t@mittel money\nAS\nBEGIN\n\tIF @id IN (SELECT id FROM Projekt)\n\t\tPRINT 'Invalid Parameter: id existiert bereits'\n\tELSE IF @bezeichnung IN (SELECT bezeichnung FROM Projekt)\n\t\tPRINT 'Invalid Parameter: bezeichnung existiert bereits'\n\tELSE\n\t\tINSERT INTO Projekt (id, bezeichnung, mittel)\n\t\tVALUES (@id, @bezeichnung, @mittel)\nEND\nGO\n\nProgramming.sp_FilterMitarbeiter5 'p1', 'Galactica', '85000'\nGO\n\nSELECT * FROM Projekt;\nGO\n\n-- multiple procedure l\ufffdsung / funktioniert nicht\n\nCREATE OR ALTER PROCEDURE Programming.sp_ValidateProjekt\n\t@id char(2),\n\t@bezeichnung varchar(20)\nAS\nBEGIN\n\tIF @id IN (SELECT id FROM Projekt)\n\t\tPRINT 'Invalid Parameter: id existiert bereits'\n\tELSE IF @bezeichnung IN (SELECT bezeichnung FROM Projekt)\n\t\tPRINT 'Invalid Parameter: bezeichnung existiert bereits'\n\tELSE\n\t\tRETURN '0'\nEND\nGO\n\nCREATE OR ALTER PROCEDURE Programming.sp_InsertProjekt\n\t@id char(2),\n\t@bezeichnung varchar(20),\n\t@mittel money\nAS\nBEGIN\n\tDECLARE @error varchar(50)\n\tEXEC Programming.sp_ValidateProjekt @id, @bezeichnung = @error;\n\tIF @error = '0'\n\t\tINSERT INTO Projekt (id, bezeichnung, mittel)\n\t\tVALUES (@id, @bezeichnung, @mittel);\n\tELSE\n\t\tPrint @error;\nEND\nGO\n\nProgramming.sp_InsertProjekt 'p7', 'Galactica', '45000'\nGO\n\nSELECT * FROM Projekt\n"})})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(96540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);