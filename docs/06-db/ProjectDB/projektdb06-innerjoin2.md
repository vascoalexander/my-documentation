---
sidebar_position: 13
description: ""
draft: false
title: "INNER JOIN II"
---
```sql
-- Nutzen Sie die ProjektDB-Datenbank, um die folgenden
-- Aufgaben zu lösen


-- Aufgabe 6.9
--
-- Nennen Sie einmalig die Namen der Projekte, in denen die 
-- Mitarbeiter arbeiten, die ein Gehalt von mindestens 
-- 5.000 € beziehen.
--
--      pr_name
--      Apollo
--      Ariane
--      Gemini

SELECT DISTINCT bezeichnung
FROM Projekt p
INNER JOIN Arbeit a ON p.id = a.pro_id
INNER JOIN Mitarbeiter m ON m.id = a.mit_id
INNER JOIN Gehalt g ON m.id = g.mit_id
WHERE g.gehalt >= 5000;

-- Aufgabe 6.10
--
-- Erstellen Sie das Kartesische Produkt auf Mitarbeiter- und Abteilungs-Tabelle
--
--      id     nachname  vorname   abt_id  stadt       id  bezeichnung  stadt
--      2581   Kaufmann  Brigitte  a2      NULL        a1  Beratung     München
--      5765   Schäfer   Sabine    a3      Landshut    a1  Beratung     München
--      9031   Meier     Rainer    a2      NULL        a1  Beratung     München
--      9912   Wolf      Klaus     a4      Heidenheim  a1  Beratung     München
--      10102  Huber     Petra     a3      Landshut    a1  Beratung     München
--      12121  Richter   Ursula    a4      München     a1  Beratung     München
--      ...
--      (75 Zeilen)

SELECT *
FROM Mitarbeiter m, Abteilung a

-- Aufgabe 6.11
--
-- Finden Sie alle Mitarbeiter und dazu alle Abteilungen, in denen 
-- diese Mitarbeiter NICHT arbeiten.
--
--      id     nachname  vorname   abt_id  stadt       id  bezeichnung  stadt
--      2581   Kaufmann  Brigitte  a2      NULL        a1  Beratung     München
--      5765   Schäfer   Sabine    a3      Landshut    a1  Beratung     München
--      9031   Meier     Rainer    a2      NULL        a1  Beratung     München
--      9912   Wolf      Klaus     a4      Heidenheim  a1  Beratung     München
--      10102  Huber     Petra     a3      Landshut    a1  Beratung     München
--      12121  Richter   Ursula    a4      München     a1  Beratung     München
--      ...
--      (60 Zeilen)

SELECT *
FROM Mitarbeiter m, Abteilung a
WHERE m.abt_id <> a.id;

-- Aufgabe 6.12
--
-- Nennen Sie die Abteilungsnamen der Mitarbeiter, die 
-- am 01.01.2019 eingestellt wurden.
--
--		bezeichnung
--		Freigabe
--		Einkauf

SELECT bezeichnung
FROM Abteilung a
INNER JOIN Mitarbeiter m ON m.abt_id = a.id
INNER JOIN Arbeit ab ON ab.mit_id = m.id
WHERE ab.einst_dat = '20190101';

-- Aufgabe 6.13
--
-- Nennen Sie Namen und Vornamen aller Projektleiter, deren 
-- Abteilung den Standort Stuttgart hat.
--
--      nachname  vorname
--      Schäfer   Sabine
--      Huber     Petra

SELECT m.nachname, m.vorname
FROM Mitarbeiter m
INNER JOIN Arbeit a ON m.id = a.mit_id
INNER JOIN Abteilung ab ON m.abt_id = ab.id
WHERE a.aufgabe = 'Projektleiter' AND ab.stadt = 'Stuttgart';

-- Aufgabe 6.14
--
-- Nennen Sie einmalig die Namen der Projekte, in denen 
-- Mitarbeiter arbeiten, die zur Abteilung Beratung gehören.
--
--      bezeichnung
--      Apollo
--      Gemini

SELECT DISTINCT p.bezeichnung
FROM Projekt p
INNER JOIN Arbeit a ON a.pro_id = p.id
INNER JOIN Mitarbeiter m ON m.id = a.mit_id
INNER JOIN Abteilung ab ON ab.id = m.abt_id
WHERE ab.bezeichnung = 'Beratung';

-- Aufgabe 6.15
--
-- Nennen Sie die Kunden, an deren Projekten Mitarbeiter
-- arbeiten, die mindestens 5.000 € Gehalt bekommen. Nennen
-- Sie zu den Kunden auch die Anzahl dieser Mitarbeiter.
--
--      firma                    mitarbeiter
--      Finanzamt Ulm            2
--      Frankreich-Reisen GmbH   2
--      Technische Produkte oHG  1

SELECT k.firma, COUNT(m.id) as mitarbeiter
FROM Kunde k
INNER JOIN Projekt p ON p.kd_id = k.id
INNER JOIN Arbeit a ON a.pro_id = p.id
INNER JOIN Mitarbeiter m ON m.id = a.mit_id
INNER JOIN Gehalt g ON g.mit_id = m.id
WHERE g.gehalt >= 5000
GROUP BY firma
```