---
sidebar_position: 14
description: ""
draft: false
title: "SELF JOIN"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:

USE ProjektDB;

-- Aufgabe 7.1
--
-- Finden Sie alle Abteilungen, an deren Standorten 
-- sich weitere Abteilungen befinden. Geben Sie jeweils
-- die Ids, Namen und Städte der Abteilungen aus.
--
--      id  bezeichnung  stadt    id  bezeichnung  stadt
--      a1  Beratung     München  a1  Beratung     München
--      a2  Diagnose     München  a1  Beratung     München
--      a4  Einkauf      München  a1  Beratung     München
--      a1  Beratung     München  a2  Diagnose     München
--      a2  Diagnose     München  a2  Diagnose     München
--      a4  Einkauf      München  a2  Diagnose     München
--      ...
--      (11 Zeilen)

SELECT *
FROM Abteilung a1
INNER JOIN Abteilung a2 ON a1.stadt = a2.stadt

-- Aufgabe 7.2
--
-- Überarbeiten Sie die Abfrage aus Aufgabe 7.1.
-- Diesmal sollen nur Zeilen ins Ergebnis übernommen 
-- werden, bei denen die Abteilungen sich unterscheiden.
--
--      id  bezeichnung  stadt    id  bezeichnung  stadt
--      a1  Beratung     München  a2  Diagnose     München
--      a1  Beratung     München  a4  Einkauf      München
--      a2  Diagnose     München  a1  Beratung     München
--      a2  Diagnose     München  a4  Einkauf      München
--      a4  Einkauf      München  a1  Beratung     München
--      a4  Einkauf      München  a2  Diagnose     München

SELECT *
FROM Abteilung a1
INNER JOIN Abteilung a2 ON a1.stadt = a2.stadt
WHERE a1.id <> a2.id;

-- Aufgabe 7.3
--
-- Überarbeiten Sie die Abfrage aus Aufgabe 7.2.
-- Diesmal soll jede Kombination nur einmal angezeigt 
-- werden. D.h. A-B ist das gleiche wie B-A.
--
--      id  bezeichnung  stadt    id  bezeichnung  stadt
--      a2  Diagnose     München  a1  Beratung     München
--      a4  Einkauf      München  a1  Beratung     München
--      a4  Einkauf      München  a2  Diagnose     München

SELECT *
FROM Abteilung a1
INNER JOIN Abteilung a2 ON a1.stadt = a2.stadt AND a1.bezeichnung <> a2.bezeichnung
WHERE a1.id < a2.id

-- Aufgabe 7.4
--
-- Finden Sie heraus, ob es Mitarbeiter gibt, die einen 
-- Kollegen oder eine Kollegin aus derselben Abteilung 
-- in ihrem Wohnort haben (Stichwort Fahrgemeinschaft).
--
--      id     abt_id  nachname  stadt
--      5765   a3      Schäfer   Landshut
--      10102  a3      Huber     Landshut
--      12121  a4      Richter   München
--      22222  a4      Vogel     München

SELECT m1.*
FROM Mitarbeiter m1
INNER JOIN Mitarbeiter m2 ON m1.stadt = m2.stadt
WHERE m1.id <> m2.id AND m1.abt_id = m2.abt_id

-- Aufgabe 7.5
--
-- Geben Sie die Mitarbeiter-Id, die Projektnummer und 
-- die Aufgabe der Mitarbeiter aus, die im gleichen 
-- Projekt die gleiche Aufgabe ausführen. Sortieren Sie
-- die Ausgabe ggf. sinnvoll.
--
--      mit_id  pro_id  aufgabe
--      25348   p2      Sachbearbeiter
--      28559   p2      Sachbearbeiter
--      20204   p4      Sachbearbeiter
--      27365   p4      Sachbearbeiter

SELECT a1.*
FROM Arbeit a1
INNER JOIN Arbeit a2 ON a1.pro_id = a2.pro_id AND a1.aufgabe = a2.aufgabe
WHERE a1.mit_id <> a2.mit_id
ORDER BY pro_id DESC
```