---
sidebar_position: 6
description: ""
draft: false
title: "Aggregat-Funktionen I"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu lösen:


-- ===========
-- Gruppierung
-- ===========

-- Aufgabe 4.1
--
-- Welche verschiedenen Aufgaben üben die Mitarbeiter 
-- der Firma aus? Nutzen Sie eine Gruppierung.
--
--      aufgabe
--      NULL
--      Gruppenleiter
--      Projektleiter
--      Sachbearbeiter

SELECT aufgabe
FROM Arbeit
GROUP BY aufgabe;

-- Aufgabe 4.2
-- 
-- Ändern Sie Ihre Lösung aus 4.1 und verwenden Sie DISTINCT 
-- in Ihrer Abfrage. Welche Unterschiede sehen Sie?
--
--      aufgabe
--      NULL
--      Gruppenleiter
--      Projektleiter
--      Sachbearbeiter

SELECT DISTINCT aufgabe
FROM Arbeit;

-- ==================
-- Aggregatfunktionen
-- ==================

-- Aufgabe 4.3
--
-- Nennen Sie die kleinste Personalnummer der Mitarbeiter.
--
--      minimum
--      2581

SELECT MIN(mit_id)
FROM Arbeit;

-- Aufgabe 4.4
--
-- Berechnen Sie die Summe der finanziellen Mittel aller Projekte.
--
--      summe
--      655000,00

SELECT SUM(mittel) AS gesamt
FROM Projekt;

-- Aufgabe 4.5
--
-- Berechnen Sie den arithmetischen Mittelwert der Geldbeträge, 
-- die höher als 92336,10 Euro sind.
--
--      durchschnitt
--      141625,00

SELECT mittel
FROM Projekt
WHERE mittel > 92000;


SELECT AVG(mittel) AS durchschnitt
FROM Projekt
WHERE mittel > 92336.1;

-- Aufgabe 4.6
--
-- Ermitteln Sie den höchsten Umsatz, der an einem Tag erzielt wurde.
--
--      umsatz
--      150000,00

SELECT MAX(umsatz) AS maximum
FROM Umsatz
```