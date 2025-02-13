---
sidebar_position: 7
description: ""
draft: false
title: "Aggregat-Funktionen II"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- ==================================
-- Aggregatfunktionen mit Gruppierung
-- ==================================

-- Aufgabe 4.7
--
-- Finden Sie heraus, wie viele verschiedene Aufgaben in jedem 
-- Projekt ausgeübt werden. Nullwerte sollen nicht gezählt werden!
--
--      pro_id  anzahl
--      p1      3
--      p2      1
--      p3      3
--      p4      3
--      p5      2

SELECT *
FROM Arbeit

SELECT pro_id, COUNT(DISTINCT aufgabe) as anzahl
FROM Arbeit
GROUP BY pro_id;

-- Aufgabe 4.8
--
-- Finden Sie heraus, wieviele Mitarbeiter in jedem Projekt arbeiten.
--
--      pro_id  anzahl
--      p1      5
--      p2      4
--      p3      4
--      p4      4
--      p5      3

SELECT pro_id, COUNT(DISTINCT mit_id) AS anzahl
FROM Arbeit
GROUP BY pro_id;

-- Aufgabe 4.9
--
-- Gruppieren Sie die Reihen der Tabelle “Arbeit“ nach den 
-- vorhandenen Aufgaben und zählen Sie die Anzahl der Mitarbeiter 
-- abhängig von der jeweiligen Aufgabe.
--
--      aufgabe         anzahl
--      NULL            5
--      Gruppenleiter   3
--      Projektleiter   4
--      Sachbearbeiter  7

SELECT aufgabe, 
	COUNT(DISTINCT mit_id) AS anzahl
FROM Arbeit
GROUP BY aufgabe;

-- Aufgabe 4.10
--
-- Wie viele "echte" Aufgaben nehmen die Mitarbeiter wahr,
-- deren Id größer als 20000 ist?
--
--      mit_id  anzahl
--      20204   1
--      22222   1
--      24321   0
--      25348   1
--      27365   1
--      28559   1
--      29346   1

SELECT mit_id, COUNT(aufgabe) AS anzahl
FROM Arbeit
WHERE mit_id > 20000
GROUP BY mit_id;

-- Aufgabe 4.11
--
-- Zählen Sie, wie viele Mitarbeiter in jedem Jahr für ein Projekt 
-- eingestellt wurden.
--
--      Jahr  Anzahl
--      2017  2
--      2018  8
--      2019  8

SELECT YEAR(einst_dat), COUNT(DISTINCT mit_id) AS anzahl
FROM Arbeit
GROUP BY YEAR(einst_dat);

```