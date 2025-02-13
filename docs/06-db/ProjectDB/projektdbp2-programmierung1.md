---
sidebar_position: 23
description: ""
draft: false
title: "Programmierung IV"
---
```sql
--	Nutzen Sie die Datenbank ProjektDB zur 
--	Lösung dieser Aufgabe


--	Aufgabe P2.1
--
--	Erstellen Sie eine View v_MitarbeiterMünchen, die nur
--	die Mitarbeiter aus München anzeigt.

USE ProjektDB;
GO

CREATE OR ALTER VIEW v_MitarbeiterMünchen
AS
SELECT m.*
FROM Mitarbeiter m
WHERE stadt = 'München'
GO

SELECT * FROM v_MitarbeiterMünchen;
GO

--	Aufgabe P2.2
--
--	Erstellen Sie eine View v_MitarbeiterAbteilung, die
--	alle Daten der Mitarbeiter, Gehälter und Abteilungen
--	anzeigt. Die IDs sollen dabei nicht angezeigt werden.

CREATE OR ALTER VIEW v_MitarbeiterAbteilung
AS
SELECT m.nachname, m.vorname, m.stadt, g.gehalt, a.bezeichnung
FROM Mitarbeiter m
LEFT JOIN Abteilung a ON m.abt_id = a.id
LEFT JOIN Gehalt g ON m.id = g.mit_id;
GO

SELECT * FROM v_MitarbeiterAbteilung;
GO


```