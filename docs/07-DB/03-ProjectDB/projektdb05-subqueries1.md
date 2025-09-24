---
sidebar_position: 9
description: ""
draft: false
title: "Sub-Queries I"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- ======================
-- Einfache Unterabfragen
-- ======================

-- Aufgabe 5.1
--
-- Nennen Sie Personalnummer und Name des Mitarbeiters 
-- mit der kleinsten Personalnummer. Nutzen Sie eine 
-- einfache Unterabfrage.
--
--      id    nachname
--      2581  Kaufmann

SELECT id, nachname
FROM Mitarbeiter
WHERE id = (SELECT MIN(id) FROM Mitarbeiter);
		

-- Aufgabe 5.2
--
-- Nennen Sie die Abteilungsnummern der Mitarbeiter, die 
-- in Projekt p3 arbeiten. Nutzen Sie eine einfache 
-- Unterabfrage.
--
--      abt_id
--      a2
--      a2
--      a3
--      a5

SELECT abt_id
FROM Mitarbeiter
WHERE id IN (
	SELECT mit_id FROM Arbeit
	WHERE pro_id = 'p3')

-- Aufgabe 5.3
--
-- Erstellen Sie eine Liste der Ids aller Mitarbeiter, 
-- deren Gehalt über dem  Durchschnitt liegt. Nutzen 
-- Sie eine einfache Unterabfrage.
--
--      mit_id
--      5765
--      9031
--      17000
--      22222
--      28559
--      29346

SELECT mit_id
FROM Gehalt
WHERE mit_id IN (
	SELECT mit_id FROM Gehalt 
	WHERE gehalt > (SELECT AVG(gehalt) FROM Gehalt));

SELECT mit_id
FROM Gehalt
WHERE gehalt > (SELECT AVG(gehalt) FROM Gehalt);

-- Aufgabe 5.4
--
-- Nennen Sie die Nummern aller Projekte, in denen Mitarbeiter
-- arbeiten, deren Personalnummer kleiner als die Nummer des 
-- Mitarbeiters namens Müller ist. Nutzen Sie eine einfache 
-- Unterabfrage.
--
--      pro_id
--      p1
--      p3
--      p4
--      p5

SELECT * FROM Abteilung;

SELECT DISTINCT pro_id FROM Arbeit
WHERE mit_id IN(
	SELECT id FROM Mitarbeiter
	WHERE id < (SELECT id FROM Mitarbeiter WHERE nachname = 'Müller')
);

SELECT DISTINCT pro_id FROM Arbeit
WHERE mit_id < (SELECT id FROM Mitarbeiter
				WHERE nachname = 'Müller');

-- Aufgabe 5.5
--
-- Nennen Sie die Namen aller Mitarbeiter, die in einer 
-- Abteilung in Ulm arbeiten. Nutzen Sie eine einfache 
-- Unterabfrage.
--
--      nachname  vorname
--      Krüger    Martin
--      Schubert  Rolf
--      Albrecht  Lena

SELECT nachname, vorname
FROM Mitarbeiter
WHERE abt_id = (
	SELECT id FROM Abteilung
	WHERE stadt = 'Ulm')

-- Aufgabe 5.6
--
-- Finden Sie die Personalnummer des Projektleiters, 
-- der in dieser Position als letzter einstellt wurde.
-- Nutzen Sie eine einfache Unterabfrage.
--
--      mit_id
--      2581

SELECT mit_id
FROM Arbeit
WHERE einst_dat = (
	SELECT MAX(einst_dat) FROM Arbeit
	WHERE aufgabe = 'Projektleiter');

-- Aufgabe 5.7
--
-- Nennen Sie die Namen aller Mitarbeiter, die im Projekt "Apollo" 
-- arbeiten. Nutzen Sie zwei verschachtelte Unterabfragen.
--
--      nachname
--      Meier
--      Huber
--      Krüger
--      Mozer
--      Probst

SELECT * FROM Abteilung

SELECT nachname
FROM Mitarbeiter
WHERE id IN (
	SELECT mit_id FROM Arbeit
	WHERE pro_id = (
		SELECT id FROM Projekt
		WHERE bezeichnung = 'Apollo')
	);

-- Aufgabe 5.8
--
-- Zeigen Sie Abteilungsnummer und den Namen der Abteilungen 
-- für die Mitarbeiter an, die am Projekt "Apollo" mitarbeiten. 
-- Nutzen Sie drei verschachtelte Unterabfragen.
--
--      id  bezeichnung
--      a1  Beratung
--      a2  Diagnose
--      a3  Freigabe
--      a5  Verkauf


SELECT DISTINCT abt_id, (SELECT bezeichnung FROM Abteilung WHERE id = Mitarbeiter.abt_id) as bezeichnung
FROM Mitarbeiter
WHERE id IN (
	SELECT mit_id FROM Arbeit
	WHERE pro_id = (
		SELECT id FROM Projekt
		WHERE bezeichnung = 'Apollo')
	);
```