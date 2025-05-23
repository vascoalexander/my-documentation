---
sidebar_position: 10
description: ""
draft: false
title: "Sub-Queries II"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- =========================
-- Korrelierte Unterabfragen
-- =========================

-- Aufgabe 5.9
--
-- Geben Sie eine Liste der Projekt-Ids und Aufgaben aus und 
-- nennen Sie dazu den Namen des Mitarbeiters. Soertieren Sie
-- die Ausgabe nach Projekt-Id und Aufgabe. Nutzen Sie eine
-- korrelierte Unterabnfrage im SELECT.
--
--      pro_id  aufgabe         nachname
--      p1      NULL            Krüger
--      p1      NULL            Mozer
--      p1      Gruppenleiter   Meier
--      p1      Projektleiter   Huber
--      p1      Sachbearbeiter  Probst
--      p2      NULL            Probst

SELECT TOP 6 pro_id, aufgabe, (
	SELECT nachname FROM Mitarbeiter 
	WHERE Arbeit.mit_id = Mitarbeiter.id) as nachname
FROM Arbeit
ORDER BY pro_id, aufgabe

-- Aufgabe 5.10
--
-- Erweitern Sie die Abfrage aus Aufgabe 5.9 und geben Sie
-- zusätzlich auch den Projektnamen aus. Nutzen Sie zwei
-- korrelierte Unterabfragen im SELECT.
--
--      pro_id  bezeichnung  aufgabe         nachname
--      p1      Apollo       NULL            Krüger
--      p1      Apollo       NULL            Mozer
--      p1      Apollo       Gruppenleiter   Meier
--      p1      Apollo       Projektleiter   Huber
--      p1      Apollo       Sachbearbeiter  Probst
--      p2      Gemini       NULL            Probst

SELECT TOP 6 pro_id, aufgabe, (
	SELECT nachname FROM Mitarbeiter 
	WHERE Arbeit.mit_id = Mitarbeiter.id) as nachname, 
	(SELECT bezeichnung FROM Projekt WHERE Arbeit.pro_id = Projekt.id) as bezeichnung
FROM Arbeit
ORDER BY pro_id, aufgabe

-- Aufgabe 5.11
--
-- Geben Sie eine Liste aller Abteilngsnamen aus. Geben 
-- Sie dazu aus, wie viele Mitarbeiter in der Abteilung 
-- arbeiten. Nutzen Sie eine korrelierte Unterabfrage 
-- im SELECT.
--
--      bezeichnung  anzahl
--      Beratung     2
--      Diagnose     3
--      Freigabe     3
--      Einkauf      4
--      Verkauf      3

SELECT DISTINCT bezeichnung, (
	SELECT COUNT(id) FROM Mitarbeiter 
	WHERE Abteilung.id = Mitarbeiter.abt_id) as anzahl
FROM Abteilung;

-- Aufgabe 5.12
--
-- Geben Sie eine Liste aller Mitarbeiter-Ids mit Gehalt aus.
-- Geben Sie dazu auch den Namen des Mitarbeiters aus. Nutzen
-- Sie eine korrelierte Unterabfrage im SELECT.
--
--      mit_id  nachname  gehalt
--      2581    Kaufmann  3000,00
--      5765    Schäfer   4500,00
--      9031    Meier     4000,00
--      9912    Wolf      3500,00
--      10102   Huber     3500,00
--      12121   Richter   3000,00

SELECT TOP 6 id as mit_id, nachname, (
	SELECT gehalt FROM Gehalt WHERE m.id = mit_id) as gehalt
FROM Mitarbeiter m

-- Aufgabe 5.13
--
-- Erweitern Sie die Abfrage aus Aufgabe 5.12 und geben
-- Sie zusätzlich noch das Durschnitts-Gehalt aller 
-- Mitarbeiter aus. Zeigen Sie anschließend noch die
-- Differenz des Mitarbeiters zum Durchschnitt an.
--
--      mit_id  nachname  gehalt   durchschnitt  differenz
--      2581    Kaufmann  3000,00  3633,3333     -633,3333
--      5765    Schäfer   4500,00  3633,3333     866,6667
--      9031    Meier     4000,00  3633,3333     366,6667
--      9912    Wolf      3500,00  3633,3333     -133,3333
--      10102   Huber     3500,00  3633,3333     -133,3333
--      12121   Richter   3000,00  3633,3333     -633,3333

SELECT TOP 6 mit_id, (SELECT nachname FROM Mitarbeiter WHERE id = Gehalt.mit_id), gehalt, 
	(SELECT AVG(gehalt) FROM Gehalt) as durchschnitt,
	gehalt - (SELECT AVG(gehalt) FROM Gehalt) as differenz
FROM Gehalt

-- Aufgabe 5.14
--
-- Zeigen Sie die Mitarbeiternamen und Abteilungsnamen der 
-- Mitarbeiter an, die im Projekt "Apollo" arbeiten. Nutzen 
-- Sie zwei verschachtelte Unterabfragen und eine korrelierte
-- Unterabfrage im SELECT.
--
--      nachname  abteilung
--      Meier     Diagnose
--      Huber     Freigabe
--      Krüger    Verkauf
--      Mozer     Beratung
--      Probst    Diagnose

SELECT * FROM Projekt

SELECT nachname, (SELECT bezeichnung FROM Abteilung WHERE Mitarbeiter.abt_id = id) as abteilung
FROM Mitarbeiter
WHERE id IN (
	SELECT mit_id FROM Arbeit 
	WHERE pro_id = (
		SELECT id FROM Projekt 
		WHERE bezeichnung = 'Apollo')
	);
```