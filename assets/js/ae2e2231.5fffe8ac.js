"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[8438],{83788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"DB/SQL/Functions","title":"Functions","description":"","source":"@site/docs/06-DB/02-SQL/07-Functions.md","sourceDirName":"06-DB/02-SQL","slug":"/DB/SQL/Functions","permalink":"/my-documentation/docs/DB/SQL/Functions","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-DB/02-SQL/07-Functions.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"description":"","draft":false,"title":"Functions"},"sidebar":"dbSidebar","previous":{"title":"Constraints","permalink":"/my-documentation/docs/DB/SQL/Constrains"},"next":{"title":"Transactions","permalink":"/my-documentation/docs/DB/SQL/Transactions"}}');var s=t(74848),i=t(28453);const a={sidebar_position:7,description:"",draft:!1,title:"Functions"},u=void 0,o={},l=[{value:"Aggregat Funktionen",id:"aggregat-funktionen",level:3},{value:"String Funktionen",id:"string-funktionen",level:3},{value:"Numerische Funktionen",id:"numerische-funktionen",level:3},{value:"Datumsfunktionen",id:"datumsfunktionen",level:3},{value:"Konvertierungs- und Nullbehandlungsfunktionen",id:"konvertierungs--und-nullbehandlungsfunktionen",level:3}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"aggregat-funktionen",children:"Aggregat Funktionen"}),"\n",(0,s.jsx)(n.p,{children:"An aggregate function is a function that performs a calculation on a set of values, and returns a single value."}),"\n",(0,s.jsxs)(n.p,{children:["Aggregate functions are often used with the ",(0,s.jsx)(n.strong,{children:"GROUP BY"})," clause of the ",(0,s.jsx)(n.strong,{children:"SELECT"})," statement.\nThe GROUP BY clause splits the result-set into groups of values and the aggregate function can be used to return a single value for each group."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The most commonly used SQL aggregate functions are:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MIN()"})," - returns the smallest value within the selected column",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"MAX()"})," - returns the largest value within the selected column",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"COUNT()"})," - returns the number of rows in a set",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"SUM()"})," - returns the total sum of a numerical column",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"AVG()"})," - returns the average value of a numerical column"]}),"\n",(0,s.jsx)(n.p,{children:"Aggregate functions ignore null values (except for COUNT())."}),"\n",(0,s.jsx)(n.admonition,{title:"Regel",type:"warning",children:(0,s.jsxs)(n.p,{children:["Spalten, die in der SELECT-Klausel verwendet werden, ",(0,s.jsx)(n.strong,{children:"m\xfcssen"})," entweder als Gruppierungsmerkmal in die GROUP BY-Klausel aufgenommen werden, oder es muss eine Aggregatfunktion darauf angewendet werden."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Annahme: Tabelle 'Verk\xe4ufe' mit Spalte 'Betrag'\nSELECT \n    SUM(Betrag) AS GesamtVerkauf,\n    AVG(Betrag) AS Durchschnitt,\n    MIN(Betrag) AS Minimal,\n    MAX(Betrag) AS Maximal,\n    COUNT(*) AS AnzahlVerk\xe4ufe\nFROM Verk\xe4ufe;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"string-funktionen",children:"String Funktionen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DECLARE @text NVARCHAR(50) = 'SQL Server Funktionen';\nSELECT \n    UPPER(@text) AS Gro\xdfbuchstaben,             -- Konvertiert zu Gro\xdfbuchstaben\n    LOWER(@text) AS Kleinbuchstaben,            -- Konvertiert zu Kleinbuchstaben\n    LEFT(@text, 3) AS Erste3Zeichen,            -- Gibt die ersten 3 Zeichen zur\xfcck\n    RIGHT(@text, 8) AS Letzte8Zeichen,          -- Gibt die letzten 8 Zeichen zur\xfcck\n    SUBSTRING(@text, 5, 6) AS Teilstring,       -- Extrahiert 6 Zeichen ab Position 5\n    LEN(@text) AS L\xe4nge,                        -- Gibt die L\xe4nge des Strings zur\xfcck\n    REPLACE(@text, 'Server', 'DB') AS Ersetzt,  -- Ersetzt 'Server' mit 'DB'\n    CONCAT(@text, ' Beispiel') AS Verkettet;    -- Verkettet zwei Strings\n"})}),"\n",(0,s.jsx)(n.h3,{id:"numerische-funktionen",children:"Numerische Funktionen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DECLARE @zahl DECIMAL(10,2) = -123.456;\nSELECT \n    ABS(@zahl) AS Absolutwert,         -- Absolutwert (Betrag)\n    ROUND(@zahl, 1) AS Gerundet,       -- Rundet auf 1 Dezimalstelle\n    CEILING(@zahl) AS Aufrunden,       -- Rundet auf die n\xe4chste ganze Zahl nach oben\n    FLOOR(@zahl) AS Abrunden,          -- Rundet auf die n\xe4chste ganze Zahl nach unten\n    POWER(2, 3) AS Potenz;             -- 2^3 = 8\n"})}),"\n",(0,s.jsx)(n.h3,{id:"datumsfunktionen",children:"Datumsfunktionen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DECLARE @heute DATETIME = GETDATE();\nDECLARE @heute2 DATETIME2 = SYSDATETIME();\n\nSELECT \n    @heute AS AktuellesDatum,                            -- Aktuelles Datum (DATETIME) via GETDATE()\n    @heute2 AS AktuellesDatum2,                          -- Aktuelles Datum (DATETIME2) via SYSDATETIME()\n    DATEADD(day, 7, @heute) AS DatumPlus7Tage,           -- F\xfcgt 7 Tage zum aktuellen Datum hinzu\n    DATEDIFF(day, '2025-01-01', @heute) AS TageSeit,     -- Differenz in Tagen seit dem 01.01.2025\n    FORMAT(@heute, 'dd.MM.yyyy') AS FormatiertesDatum,   -- Formatiert das Datum im Format TT.MM.JJJJ\n    DAY(@heute) AS Tag,                                  -- Extrahiert den Tag aus dem Datum\n    MONTH(@heute) AS Monat,                              -- Extrahiert den Monat aus dem Datum\n    YEAR(@heute) AS Jahr,                                -- Extrahiert das Jahr aus dem Datum\n    DATEPART(hour, @heute) AS Stunde,                    -- Extrahiert die Stunde aus dem Datum\n    DATENAME(weekday, @heute) AS Wochentag;              -- Gibt den Namen des Wochentags zur\xfcck\n"})}),"\n",(0,s.jsx)(n.h3,{id:"konvertierungs--und-nullbehandlungsfunktionen",children:"Konvertierungs- und Nullbehandlungsfunktionen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DECLARE @wert VARCHAR(10) = '123';\nSELECT \n    CAST(@wert AS INT) AS UmgewandeltInInt,                       -- CAST zum Konvertieren\n    CONVERT(DATE, '2025-02-13', 23) AS KonvertiertesDatum,        -- CONVERT mit Stil (23: yyyy-mm-dd)\n    ISNULL(NULL, 'Standardwert') AS ISNULL_Beispiel,              -- Ersetzt NULL mit 'Standardwert'\n    COALESCE(NULL, '', 'Erster Nicht-NULL') AS COALESCE_Beispiel; -- Gibt den ersten Nicht-NULL-Wert zur\xfcck\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>u});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);