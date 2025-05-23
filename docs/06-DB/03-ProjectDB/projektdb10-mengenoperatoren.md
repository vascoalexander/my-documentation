---
sidebar_position: 19
description: ""
draft: false
title: "Mengen-Operatoren"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- Aufgabe 10.1
--
-- Erstellen Sie eine Liste mit allen Städten, in
-- denen entweder ein Mitarbeiter wohnt oder aber
-- eine Abteilung ihren Sitz hat. Jede Stadt soll
-- nur einmal angezeigt werden.
--
--      stadt
--      NULL
--      Augsburg
--      Fürth
--      Heidenheim
--      Landshut
--      München
--      ...
--      (9 Zeilen)

SELECT stadt
FROM Mitarbeiter

UNION

SELECT stadt
FROM Abteilung;


-- Aufgabe 10.2
--
-- Erstellen Sie eine Liste mit allen Städten, in
-- denen entweder Mitarbeiter wohnen oder Kunden
-- Ihren Sitz haben. Doppelte Einträge sollen nicht
-- weggefiltert werden.
--
--      stadt
--      NULL
--      Landshut
--      NULL
--      Heidenheim
--      Landshut
--      München
--      ...
--      (21 Zeilen)

SELECT stadt
FROM Mitarbeiter

UNION ALL

SELECT stadt
FROM Kunde;

-- Aufgabe 10.3
--
-- Geben Sie die Liste aus Aufgabe 10.2 jetzt sortiert
-- nach dem Städtenamen aus.
--
--      stadt
--      NULL
--      NULL
--      NULL
--      Augsburg
--      Baden_Baden
--      Fürth
--      ...
--      (21 Zeilen)

SELECT stadt
FROM Mitarbeiter

UNION ALL

SELECT stadt
FROM Kunde
ORDER BY stadt;

-- Aufgabe 10.4
--
-- Finden Sie die Ids der Mitarbeiter, die entweder 
-- der Abteilung a1 angehören oder nach dem 1.1.2019 
-- in ihr Projekt eingetreten sind. Die Ids sollen 
-- aufsteigend sortiert ausgegeben werden.
--
--      id
--      2581
--      9031
--      9912
--      17000
--      18316
--      28559
--      29346

SELECT id
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
WHERE abt_id = 'a1' OR a.einst_dat > '20190101';

-- Aufgabe 10.5
--
-- Die Wohnorte der Mitarbeiter und die Standorte 
-- der Abteilungen sollen ausgewertet werden:
--
-- a) Zeigen Sie, an welchen Orten entweder
--    Mitarbeiter wohnen oder Abteilungen sind.
-- b) Zeigen Sie, an welchen Orten sowohl Mitarbeiter
--    als auch Abteilungen sind.
-- c) Zeigen Sie, an welchen Orten Mitarbeiter
--    wohnen, aber keine Abteilungen sind
-- d) Zeigen Sie, an welchen Orten Abteilungen sind,
--    aber keine Mitarbeiter wohnen.
--
--  a) stadt       b) stadt    c) stadt       d) stadt
--     NULL           München     NULL           Stuttgart
--     Augsburg       Ulm         Augsburg
--     Fürth                      Fürth
--     Heidenheim                 Heidenheim
--     Landshut                   Landshut
--     München                    Rosenheim
--     Rosenheim
--     Stuttgart
--     Ulm

-- a)
SELECT stadt
FROM Mitarbeiter
UNION
SELECT stadt
FROM Abteilung;

-- b)
SELECT stadt
FROM Mitarbeiter
INTERSECT
SELECT stadt
FROM Abteilung;

-- c)
SELECT stadt
FROM Mitarbeiter
EXCEPT
SELECT stadt
FROM Abteilung;

-- d)
SELECT stadt
FROM Abteilung
EXCEPT
SELECT stadt
FROM Mitarbeiter;

-- Aufgabe 10.6
--
-- Erstellen Sie eine Liste der Mitarbeiter, die
-- sowohl im Projekt "p1" als auch im Projekt "p3"
-- arbeiten.
--
--      vorname  nachname
--      Petra    Huber
--      Rainer   Meier

SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
WHERE a.pro_id = 'p1'

INTERSECT

SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
WHERE a.pro_id = 'p3';

-- Aufgabe 10.7
--
-- Erstellen Sie eine Liste der Mitarbeiter, die in den
-- Projekten "p4" und "p5" arbeiten und weniger als 4000
-- verdienen.
--  a)  Nutzen Sie den INTERSECT-Operator
--  b)  Nutzen Sie den EXCEPT-Operator
--
--      vorname  nachname
--      Dirk     Fuchs
--      Klaus    Wolf
--      Lena     Albrecht
--      Ursula   Richter

-- a)
SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
WHERE a.pro_id = 'p4' OR a.pro_id = 'p5'

INTERSECT

SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Gehalt g ON g.mit_id = m.id
WHERE gehalt < 4000;

-- b)
SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
WHERE a.pro_id = 'p4' OR a.pro_id = 'p5'

EXCEPT

SELECT vorname, nachname
FROM Mitarbeiter m
JOIN Gehalt g ON g.mit_id = m.id
WHERE gehalt >= 4000;

-- Aufgabe 10.8
--
-- Erstellen Sie eine Liste aller Mitarbeiter, kombiniert
-- mit einer Liste aller Kunden. Geben Sie Firma bzw. Namen
-- und die Stadt aus.
--
--      firma                  stadt
--      100% Sonderzeichen AG  Baden_Baden
--      Andreas Probst         Augsburg
--      Anke Vogel             München
--      Brigitte Kaufmann      NULL
--      Dirk Fuchs             Fürth
--      Finanzamt Ulm          Fürth
--      ...
--      (21 Zeilen)

SELECT firma, stadt
FROM Kunde
UNION
SELECT CONCAT(vorname, ' ', nachname), stadt
FROM Mitarbeiter;

-- Aufgabe 10.9
--
-- Erweitern Sie die Abfrage aus Aufgabe 10.8 und geben
-- Sie auch noch die Abteilungen mit Bezeichnung und
-- Stadt in der Liste aus.
--
--      bezeichnung            stadt
--      100% Sonderzeichen AG  Baden_Baden
--      Andreas Probst         Augsburg
--      Anke Vogel             München
--      Beratung               München
--      Brigitte Kaufmann      NULL
--      Diagnose               München
--      ...
--      (26 Zeilen)

SELECT firma AS bezeichnung, stadt
FROM Kunde
UNION
SELECT CONCAT(vorname, ' ', nachname), stadt
FROM Mitarbeiter
UNION
SELECT bezeichnung, stadt
FROM Abteilung;

-- Aufgabe 10.10
--
-- Um die Übersichtlichkeit zu erhöhen, soll in der
-- Liste markiert werden, ob es sich um eine Abteilung,
-- einen Mitarbeiter oder einen Kunden handelt.
--
--      bezeichnung            stadt        kategorie
--      100% Sonderzeichen AG  Baden_Baden  Kunde
--      Andreas Probst         Augsburg     Mitarbeiter
--      Anke Vogel             München      Mitarbeiter
--      Beratung               München      Abteilung
--      Brigitte Kaufmann      NULL         Mitarbeiter
--      Diagnose               München      Abteilung
--      ...
--      (26 Zeilen)

SELECT firma AS bezeichnung, stadt, 'Kunde' AS kategorie
FROM Kunde
UNION
SELECT CONCAT(vorname, ' ', nachname), stadt, 'Mitarbeiter'
FROM Mitarbeiter
UNION
SELECT bezeichnung, stadt, 'Abteilung'
```