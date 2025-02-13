---
sidebar_position: 3
description: ""
draft: false
title: "WHERE Klause II"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- =====
-- WHERE
-- =====

-- Aufgabe 1.8
--
-- Finden Sie alle Mitarbeiter, deren Personalnummer 
-- entweder 29346, 28559 oder 25348 ist.
--
--      id     nachname  vorname  abt_id  stadt
--      25348  Keller    Hans     a3      München
--      28559  Mozer     Sibille  a1      Ulm
--      29346  Probst    Andreas  a2      Augsburg

SELECT * FROM Mitarbeiter

SELECT *
FROM Mitarbeiter
WHERE id = 29346 OR id = 28559 OR id = 25348

-- Aufgabe 1.9
--
-- Nennen Sie alle Mitarbeiter, deren Wohnort 
-- weder München noch Ulm ist.
--
--      id     nachname  vorname   abt_id  stadt
--      5765   Schäfer   Sabine    a3      Landshut
--      9912   Wolf      Klaus     a4      Heidenheim
--      10102  Huber     Petra     a3      Landshut
--      18316  Müller    Gabriele  a1      Rosenheim
--      20204  Fuchs     Dirk      a4      Fürth
--      29346  Probst    Andreas   a2      Augsburg

SELECT *
FROM Mitarbeiter
WHERE (stadt <> 'München') AND (stadt <> 'Ulm');

-- Aufgabe 1.10
--
-- Nennen Sie Namen und Mittel aller Projekte, deren 
-- finanzielle Mittel zwischen 95.000 und 120.000 EURO liegen.
--
--      bezeichnung  mittel
--      Apollo       120000,00
--      Gemini       95000,00

SELECT bezeichnung, mittel
FROM Projekt
WHERE mittel BETWEEN 95000 AND 120000;

-- Aufgabe 1.11
--
-- Nennen Sie die Id der Mitarbeiter, die Projektleiter sind 
-- und vor oder nach 2018 in ihren Projekten eingestellt wurden.
--
--      mit_id
--      2581
--      22222

SELECT * FROM Arbeit

SELECT mit_id
FROM Arbeit
WHERE aufgabe = 'Projektleiter' AND (einst_dat <= '20171231' OR einst_dat >= '20190101')
-- alternative
-- WHERE aufgabe = 'Projektleiter' YEAR(einst_dat) <> 2018;

-- Aufgabe 1.12
--
-- Finden Sie die Personal- und Projektnummer aller Mitarbeiter, 
-- die in den Projekten p1 oder p5 arbeiten und deren Aufgabe noch 
-- nicht festgelegt ist.
--
--      mit_id  pro_id
--      17000   p1
--      17000   p5
--      28559   p1

SELECT mit_id, pro_id
FROM Arbeit
WHERE (pro_id = 'p1' OR pro_id = 'p5') AND aufgabe IS NULL

-- Aufgabe 1.13
--
-- Finden Sie die Id und die Aufgabe aller Mitarbeiter,
-- die im Projekt p5 arbeiten, aber nicht Sachbearbeiter sind.
--
--      mit_id  aufgabe
--      17000   NULL
--      22222   Projektleiter

SELECT mit_id, aufgabe
FROM Arbeit
WHERE (pro_id = 'p5' AND aufgabe <> 'Sachbearbeiter') OR (pro_id = 'p5' AND aufgabe IS NULL); 
```