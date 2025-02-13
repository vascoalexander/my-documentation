---
sidebar_position: 2
description: ""
draft: false
title: "WHERE Klausel I"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:

USE ProjektDB;

-- =====
-- WHERE
-- =====

-- Aufgabe 1.1
--
-- Finden Sie die Namen und Id aller Abteilungen, 
-- die in München ihren Sitz haben.
--
--      bezeichnung  id
--      Beratung     a1
--      Diagnose     a2
--      Einkauf      a4

SELECT bezeichnung, id
FROM Abteilung
WHERE stadt = 'München' OR stadt IS NULL;

-- Aufgabe 1.2
--
-- Nennen Sie die Vor- und Nachnamen aller Mitarbeiter,
-- deren Personalnummer größer oder gleich 20000 ist.
--
--      vorname  nachname
--      Dirk     Fuchs
--      Anke     Vogel
--      Rolf     Schubert
--      Hans     Keller
--      Lena     Albrecht
--      Sibille  Mozer
--      Andreas  Probst

SELECT vorname, nachname
FROM Mitarbeiter
WHERE id >= 20000;

-- Aufgabe 1.3
--
-- Finden Sie alle Projekte, deren Finanzmittel mehr als 
-- 110.803,32 $ betragen. Der fiktive Umrechnungskurs soll 
-- bei 1.083 $ für 1 Euro liegen.
--
--      id  bezeichnung  mittel     kd_id
--      p1  Apollo       120000,00  3
--      p3  Merkur       186500,00  1
--      p5  Ariane       165000,00  2

SELECT * FROM Projekt
SELECT *
FROM Projekt
WHERE mittel * 1.083 >= 110803.32;

-- Aufgabe 1.4
--
-- Gesucht werden Mitarbeiter-Id, Projektnummer und Aufgabe 
-- der Mitarbeiter, die im Projekt p2 Sachbearbeiter sind.
--
--      mit_id  pro_id  aufgabe
--      25348   p2      Sachbearbeiter
--      28559   p2      Sachbearbeiter

SELECT * FROM Mitarbeiter
SELECT * FROM Projekt
SELECT * FROM Abteilung
SELECT * FROM Arbeit;

SELECT mit_id, pro_id, aufgabe
FROM Arbeit
WHERE aufgabe = 'Sachbearbeiter'

-- Aufgabe 1.5
--
-- Finden Sie die Id, den Umsatz und das Datum für alle 
-- Mitarbeiter, die im Jahr 2018 Umsätze von mindestens 
-- 5000 € hatten.
--
--      mit_id  umsatz    datum
--      10102   5000,00   2018-11-01
--      10102   5000,00   2018-12-23
--      25348   15000,00  2018-05-02
--      25348   15000,00  2018-10-11
--      17000   5000,00   2018-03-03
--      17000   5000,00   2018-03-04
--      17000   5000,00   2018-03-05
--      17000   5000,00   2018-03-06

SELECT * FROM Umsatz
SELECT mit_id, umsatz, datum
FROM Umsatz
WHERE umsatz >= 5000 AND (datum BETWEEN '20180101' AND '20181231');

-- Alternative
-- WHERE umsatz >= 5000 AND YEAR(datum) = 2018;

-- Aufgabe 1.6
--
-- Gesucht wird einmalig die Personalnummer der Mitarbeiter, 
-- die entweder im Projekt p1 oder p5 oder in beiden arbeiten.
--
--      mit_id
--      9031
--      9912
--      10102
--      17000
--      22222
--      28559
--      29346

SELECT DISTINCT mit_id
FROM Arbeit
WHERE pro_id = 'p1' OR pro_id = 'p5'

-- Aufgabe 1.7
--
-- Nennen Sie Personalnummer und Nachnamen der Mitarbeiter, 
-- die nicht in den Abteilungen a2, a3 und a4 arbeiten.
--
--      id     nachname
--      17000  Krüger
--      18316  Müller
--      24321  Schubert
--      27365  Albrecht
--      28559  Mozer

SELECT id, nachname
FROM Mitarbeiter
WHERE abt_id NOT IN ('a2', 'a3', 'a4')
```