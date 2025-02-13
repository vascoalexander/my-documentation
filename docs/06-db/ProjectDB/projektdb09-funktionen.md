---
sidebar_position: 18
description: ""
draft: false
title: "FUNKTIONEN"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:
USE ProjektDB;
SET LANGUAGE german;

-- ==========
-- Funktionen
-- ==========

-- Aufgabe 9.6
--
-- Geben Sie den Vor- und Nachnamen der Mitarbeiter
-- in einer Spalte aus. Nutzen Sie die Funktionen
-- CONCAT() und ggf. TRIM().
--
--      name
--      Brigitte Kaufmann
--      Sabine Schäfer
--      Rainer Meier
--      Klaus Wolf
--      Petra Huber
--      Ursula Richter
--      ...
--      (15 Zeilen)

SELECT CONCAT(vorname, ' ', nachname) as name
FROM Mitarbeiter;

SELECT vorname + ' ' + nachname AS name
FROM Mitarbeiter;

-- Aufgabe 9.7
--
-- Geben Sie den Vor- und Nachnamen der Mitarbeiter,
-- gefolgt vom Wohnort in einer Spalte aus. Wenn kein
-- Wohnort vorhanden ist, soll der Text 'unbekannt'
-- erscheinen.
--
--      mitarbeiter
--      Brigitte Kaufmann, unbekannt
--      Sabine Schäfer, Landshut
--      Rainer Meier, unbekannt
--      Klaus Wolf, Heidenheim
--      Petra Huber, Landshut
--      Ursula Richter, München
--      ...
--      (15 Zeilen)

SELECT CONCAT(vorname, ' ', nachname, ', ', ISNULL(stadt, 'unbekannt')) as mitarbeiter
FROM Mitarbeiter;

SELECT vorname + ' ' + nachname + ', ' + ISNULL(stadt, 'unbekannt') AS mitarbeiter
FROM Mitarbeiter;

-- Aufgabe 9.8
--
-- Geben Sie die Kurzform des Mitarbeiternamens
-- in einer Spalte aus. Das erste Zeichen eines
-- Textes können Sie mit LEFT() oder SUBSTRING()
-- ermitteln.
--
--      name
--      B. Kaufmann
--      S. Schäfer
--      R. Meier
--      K. Wolf
--      P. Huber
--      U. Richter
--      ...
--      (15 Zeilen)

SELECT CONCAT(LEFT(vorname, 1), '. ', nachname) as name
FROM Mitarbeiter

-- Aufgabe 9.9
--
-- Geben Sie die Nachnamen der Mitarbeiter aus und sortieren
-- Sie die Ausgabe nach der Länge der Namen aufsteigend. Bei
-- gleicher Länge des Namens soll alphabetisch absteigend
-- sortiert werden.
--
--      nachname
--      Wolf
--      Vogel
--      Mozer
--      Meier
--      Huber
--      Fuchs
--      ...
--      (15 Zeilen)

SELECT nachname
FROM Mitarbeiter
ORDER BY LEN(nachname)

-- Aufgabe 9.10
--
-- Zeigen Sie die Namen aller Mitarbeiter an und geben Sie
-- dazu die Position des ersten Vokals an. Nutzen Sie die
-- Funktion PATINDEX() um den Vokal zu finden.
--
--      nachname  erster_vokal
--      Kaufmann  2
--      Schäfer   4
--      Meier     2
--      Wolf      2
--      Huber     2
--      Richter   2
--      ...
--      (15 Zeilen)

SELECT nachname, PATINDEX('%[aeiuo]%', nachname) as erster_vokal
FROM Mitarbeiter

-- Aufgabe 9.11
--
-- Berechnen Sie die Anzahl der Tage (brutto), die Sie bereits
-- in diesem Modul verbringen durften (oder mussten). Nutzen Sie
-- die Funktionen DATEDIFF() und GETDATE().
--
--      tage_in_modul
--      23

SELECT DATEDIFF(DAY, '20241206', GETDATE()) as tage_in_modul;

-- Aufgabe 9.12
--
-- Schreiben Sie eine Abfrage, die das heutige Datum formatiert
-- ausgibt. Nutzen Sie dazu die Datumsfunktionen DATENAME(),
-- DATEPART() und GETDATE() sowie die Funktion CONCAT().
--
--      datum_formatiert
--      Heute ist Freitag, der 16. August des Jahres 2024 in der 33. Kalenderwoche

SELECT CONCAT('Heute ist ', DATENAME(dw, GETDATE()), ', der ', DATENAME(day, GETDATE()), '. ' , DATENAME(m, GETDATE()),
	'des Jahres ', DATENAME(year, GETDATE()), 'in der ', DATENAME(week, GETDATE()), '. Kalendarwoche') AS datum_formatiert;

-- Aufgabe 9.13
--
-- Der wievielte Tag des Jahres ist heute?
--
--      datum       tag_des_jahres
--      2024-08-16  229

SELECT CONVERT(date, GETDATE()) as datum, DATEDIFF(day, '20241231', GETDATE()) AS tag_des_jahres;

-- Aufgabe 9.14
--
-- Kategorisieren Sie Ihre Mitarbeiter. Mitarbeiter, die ein
-- Gehalt unter 4000 bekommen sind Kategorie A, die anderen
-- sind Kategorie B. Versuchen Sie IIF() statt CASE zu verwenden.
--
--      mit_id  gehalt   kategorie
--      2581    3000,00  A
--      5765    4500,00  B
--      9031    4000,00  B
--      9912    3500,00  A
--      10102   3500,00  A
--      12121   3000,00  A

SELECT mit_id, gehalt, IIF(gehalt < 4000, 'A', 'B') as kategorie
FROM Gehalt;
```