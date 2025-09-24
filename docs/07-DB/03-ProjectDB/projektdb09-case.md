---
sidebar_position: 17
description: ""
draft: false
title: "CASE"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:
USE ProjektDB;
SET LANGUAGE german;

-- ==============
-- CASE-Ausdrücke
-- ==============

-- Aufgabe 9.1
--
-- Geben Sie eine Liste aller Projekte aus, in der 
-- Sie diese nach den verfügbaren Mitteln in 
-- Kategorien einteilen:
--  weniger als  90.000 => Kategorie 1
--  weniger als 135.000 => Kategorie 2
--  weniger als 170.000 => Kategorie 3
--  ab 170.000          => Kategorie 4
--
--      bezeichnung  kategorie
--      Apollo       2
--      Gemini       2
--      Merkur       4
--      Pluto        1
--      Ariane       3

SELECT bezeichnung, 
	CASE WHEN mittel < 90000 THEN 1 
		WHEN mittel < 135000 THEN 2 
		WHEN mittel < 170000 THEN 3 
		ELSE 4 END AS kategorie
FROM Projekt;

-- Aufgabe 9.2
--
-- Kategorisieren Sie Ihre Mitarbeiter. Mitarbeiter, 
-- die in der Abteilung 'Einkauf' arbeiten, kommen 
-- in Kategorie A. Mitarbeiter aus anderen Abteilungen 
-- kommen in Kategorie B. Aber wer in Landshut oder 
-- Rosenheim wohnt (also auf dem Land), der kommt auf 
-- jeden Fall in Kategorie F.
--
--      id     nachname  stadt       bezeichnung  kategorie
--      2581   Kaufmann  NULL        Diagnose     B
--      5765   Schäfer   Landshut    Freigabe     F
--      9031   Meier     NULL        Diagnose     B
--      9912   Wolf      Heidenheim  Einkauf      A
--      10102  Huber     Landshut    Freigabe     F
--      12121  Richter   München     Einkauf      A
--      ...
--      (15 Zeilen)

SELECT m.id, m.nachname, m.stadt, bezeichnung,
	CASE WHEN bezeichnung = 'Einkauf' THEN 'A'
		WHEN m.stadt IN ('Landshut', 'Rosenheim') THEN 'F'
		ELSE 'B' END AS  kategorie
FROM Mitarbeiter m
JOIN Abteilung a ON m.abt_id = a.id;

-- Aufgabe 9.3
--
-- Erweitern Sie die Abfrage aus Aufgabe 9.2. Mitarbeiter 
-- aus der Kategorie b sollen noch feiner unterteilt werden: 
-- Wenn Sie an einem Projekt mit mehr als 100.000 Mitteln 
-- arbeiten, sollen sie in Kategorie B1 fallen, sonst in 
-- Kategorie B2.
--
--      id     nachname  stadt       bezeichnung  kategorie
--      2581   Kaufmann  NULL        Diagnose     B1
--      5765   Schäfer   Landshut    Freigabe     F
--      9031   Meier     NULL        Diagnose     B1
--      9912   Wolf      Heidenheim  Einkauf      A
--      10102  Huber     Landshut    Freigabe     F
--      12121  Richter   München     Einkauf      A
--      ...
--      (15 Zeilen)

SELECT DISTINCT m.id, m.nachname, m.stadt, a.bezeichnung,
	CASE WHEN a.bezeichnung = 'Einkauf' THEN 'A'
		WHEN m.stadt IN ('Landshut', 'Rosenheim') THEN 'F'
		WHEN m.id IN (
			SELECT mit_id FROM Arbeit ab
			JOIN Projekt p ON ab.pro_id = p.id
			WHERE p.mittel > 100000) THEN 'B1'
		ELSE 'B2'
	END AS kategorie
FROM Mitarbeiter m
JOIN Abteilung a ON m.abt_id = a.id

-- Aufgabe 9.4
-- 
-- Kategorisieren Sie Arbeiter in Ihren Projekten. Wer am
-- Wochenende in ein Projekt eingetreten ist, ist ein
-- Arbeitstier, wer am Montag oder Dienstag angefangen hat 
-- ist fleissig, und der Rest ist ein Faulenzer. Benutzen
-- Sie diesmal CASE.
--
--      einst_dat   wochentag   kategorie
--      2019-10-15  Dienstag    Fleissig
--      2018-07-20  Freitag     Faulenzer
--      2019-04-15  Montag      Fleissig
--      2018-11-15  Donnerstag  Faulenzer
--      2019-01-17  Donnerstag  Faulenzer
--      2018-10-01  Montag      Fleissig
--      ...
--      (20 Zeilen)

SELECT a.einst_dat, DATENAME(dw, a.einst_dat) as wochentag,
	CASE WHEN DATENAME(dw, a.einst_dat) IN ('Samstag', 'Sontag') THEN 'Arbeitstier'
		WHEN DATENAME(dw, a.einst_dat) IN ('Montag', 'Dienstag') THEN 'Fleissig'
		ELSE 'Faulenzer' END AS kategorie
FROM Arbeit a


-- Aufgabe 9.5
--
-- Generieren Sie Codes für Ihre Mitarbeiter. Der Code soll
-- bestehen aus:
--      - Erster Buchstabe Nachname
--      - Vierter Buchstabe Nachname (groß)
--      - Letzter Buchstabe Vorname (groß)
--      - Abteilungsnummer rückwärts (a1 => 1a)
--
--      nachname  vorname   abt_id  code
--      Kaufmann  Brigitte  a2      KFE2a
--      Schäfer   Sabine    a3      SÄE3a
--      Meier     Rainer    a2      MER2a
--      Wolf      Klaus     a4      WFS4a
--      Huber     Petra     a3      HEA3a
--      Richter   Ursula    a4      RHA4a

SELECT nachname, vorname, abt_id,
	LEFT(nachname, 1) + UPPER(SUBSTRING(nachname, 4, 1) + UPPER(SUBSTRING(vorname, LEN(vorname), 1)))
	+ REVERSE(abt_id)
FROM Mitarbeiter
```