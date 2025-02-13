---
sidebar_position: 11
description: ""
draft: false
title: "Sub-Queries III"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- ==================
-- ANY / ALL / EXISTS
-- ==================

-- Aufgabe 5.15
--
-- Finden Sie Personalnummer, Projektnummer und Aufgabe 
-- der Mitarbeiter, deren Projekt-Eintrittsdatum nicht 
-- das letzte ist. Nutzen Sie den ANY-Operator.
--
--      mit_id  aufgabe         einst_dat
--      29346   NULL            2017-12-15
--      20204   Sachbearbeiter  2017-12-20
--      28559   Sachbearbeiter  2018-02-01
--      25348   Sachbearbeiter  2018-02-15
--      28559   NULL            2018-04-15
--      5765    Projektleiter   2018-07-20
--      ...
--      (18 Zeilen)

SELECT mit_id, aufgabe, einst_dat
FROM Arbeit
WHERE einst_dat < ANY (SELECT einst_dat FROM Arbeit)

-- Aufgabe 5.16
--
-- Nennen Sie die Aufgabe des Mitarbeiters, der die kleinste 
-- Personalnummer hat. Nutzen Sie den ALL-Operator.
--
--      aufgabe
--      Projektleiter

SELECT aufgabe
FROM Arbeit
WHERE mit_id <= ALL (SELECT mit_id FROM Arbeit)

-- Aufgabe 5.17
--
-- Nennen Sie die Ids und das Gehalt der Mitarbeiter, 
-- deren Gehalt nicht das niedrigste ist. Nutzen Sie 
-- den ANY-Operator.
--
--      mit_id  gehalt
--      2581    3000,00
--      5765    4500,00
--      9031    4000,00
--      9912    3500,00
--      10102   3500,00
--      12121   3000,00
--      ...
--      (14 Zeilen)

SELECT mit_id, gehalt
FROM Gehalt
WHERE gehalt > ANY (SELECT gehalt FROM Gehalt)

-- Aufgabe 5.18
--
-- Nennen Sie Id und Gehalt des Mitarbeiters mit dem
-- höchsten Gehalt. Nutzen Sie den ALL-Operator.
--
--      mit_id  gehalt
--      28559   6000,00

SELECT mit_id, gehalt
FROM Gehalt
WHERE gehalt >= ALL (SELECT gehalt FROM Gehalt)


-- Aufgabe 5.19
--
-- Nennen Sie den Namen des Mitarbeiters mit der kleinsten 
-- Id. Verwenden Sie eine korrelierte Unterabfrage und den 
-- Operator NOT EXISTS.
--
--      nachname
--      Kaufmann

SELECT nachname
FROM Mitarbeiter m1
WHERE NOT EXISTS (
	SELECT 1 FROM Mitarbeiter m2
	WHERE m2.id < m1.id);

-- Aufgabe 5.20
--
-- Finden Sie die Städte, die sowohl die Wohnorte der 
-- Mitarbeiter als auch die Standorte der Abteilungen 
-- sind. Verwenden Sie eine korrelierte Unterabfrage 
-- und den Operator EXISTS.
--
--      stadt
--      München
--      Ulm

SELECT DISTINCT stadt
FROM Mitarbeiter m
WHERE EXISTS (
	SELECT 1 FROM Abteilung a
	WHERE m.stadt = a.stadt);
```