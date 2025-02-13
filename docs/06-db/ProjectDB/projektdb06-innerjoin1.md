---
sidebar_position: 12
description: ""
draft: false
title: "INNER JOIN I"
---
```sql
-- Nutzen Sie die ProjektDB-Datenbank, um die folgenden
-- Aufgaben zu lösen


-- Aufgabe 6.1
--
-- Schreiben Sie eine Abfrage, die alle Mitarbeiter aus der 
-- Abteilung a4 ausgibt. Geben Sie die Felder vorname, nachname
-- und Abteilungsname aus.
--
--      vorname  nachname  bezeichnung
--      Klaus    Wolf      Einkauf
--      Ursula   Richter   Einkauf
--      Dirk     Fuchs     Einkauf
--      Anke     Vogel     Einkauf

SELECT m.vorname, m.nachname, a.bezeichnung 
FROM Mitarbeiter m
INNER JOIN Abteilung a ON m.abt_id = a.id
WHERE a.id = 'a4';

-- Aufgabe 6.2
--
-- Schreiben Sie eine Abfrage, die alle Projekte mit den 
-- zugehörigen Projektleitern ausgibt. Geben Sie alle Daten 
-- aus der Projekt-Tabelle und zusätzlich Id und Einstell-
-- Datum aus der Arbeit-Tabelle aus. Sortieren Sie das
-- Ergebnis nach der Projekt-ID.
--
--      id  bezeichnung  mittel     kd_id  mit_id  einst_dat
--      p1  Apollo       120000,00  3      10102   2018-10-01
--      p3  Merkur       186500,00  1      2581    2019-10-15
--      p4  Pluto        88500,00   4      5765    2018-07-20
--      p5  Ariane       165000,00  2      22222   2019-01-01

SELECT DISTINCT p.*, a.mit_id, a.einst_dat
FROM Projekt p
INNER JOIN Arbeit a ON p.id = a.pro_id
WHERE a.aufgabe = 'Projektleiter'
ORDER BY p.id

-- Aufgabe 6.3
--
-- Verändern Sie die Abfrage aus Aufgabe 6.2, indem Sie statt der
-- Mitarbeiter-Id den Nachnamen des Mitarbeiters in das Ergebnis 
-- einbauen.
--
--      id  bezeichnung  mittel     kd_id  nachname  einst_dat
--      p1  Apollo       120000,00  3      Huber     2018-10-01
--      p3  Merkur       186500,00  1      Kaufmann  2019-10-15
--      p4  Pluto        88500,00   4      Schäfer   2018-07-20
--      p5  Ariane       165000,00  2      Vogel     2019-01-01

SELECT DISTINCT p.*, m.nachname, a.einst_dat
FROM Projekt p
INNER JOIN Arbeit a ON p.id = a.pro_id
INNER JOIN Mitarbeiter m ON a.mit_id = m.id
WHERE a.aufgabe = 'Projektleiter'
ORDER BY p.id

-- Aufgabe 6.4
--
-- Erweitern Sie die Abfrage aus Aufgabe 6.3, indem Sie zusätzlich
-- die Bezeichnung der Abteilung in das Ergebnis einbauen.
--
--      id  bezeichnung  mittel     kd_id  nachname  einst_dat   bezeichnung
--      p1  Apollo       120000,00  3      Huber     2018-10-01  Freigabe
--      p3  Merkur       186500,00  1      Kaufmann  2019-10-15  Diagnose
--      p4  Pluto        88500,00   4      Schäfer   2018-07-20  Freigabe
--      p5  Ariane       165000,00  2      Vogel     2019-01-01  Einkauf

SELECT DISTINCT p.*, m.nachname, a.einst_dat, ab.bezeichnung
FROM Projekt p
INNER JOIN Arbeit a ON p.id = a.pro_id
INNER JOIN Mitarbeiter m ON a.mit_id = m.id
INNER JOIN Abteilung ab ON m.abt_id = ab.id
WHERE a.aufgabe = 'Projektleiter'
ORDER BY p.id;

-- Aufgabe 6.5
--
-- Erstellen Sie eine Abfrage, die die Mitarbeiter mit allen
-- zusätzlichen Informationen zu Abteilung, Gehalt, Arbeit und 
-- Projekt ausgibt. Geben Sie dabei keine Spalten doppelt im 
-- Ergebnis aus.
--
--      id     nachname  vorname   abt_id  stadt       bezeichnung  stadt      gehalt   aufgabe         einst_dat   bezeichnung  kd_id
--      2581   Kaufmann  Brigitte  a2      NULL        Diagnose     München    3000,00  Projektleiter   2019-10-15  Merkur       1
--      5765   Schäfer   Sabine    a3      Landshut    Freigabe     Stuttgart  4500,00  Projektleiter   2018-07-20  Pluto        4
--      9031   Meier     Rainer    a2      NULL        Diagnose     München    4000,00  Gruppenleiter   2019-04-15  Apollo       3
--      9031   Meier     Rainer    a2      NULL        Diagnose     München    4000,00  Sachbearbeiter  2018-11-15  Merkur       1
--      9912   Wolf      Klaus     a4      Heidenheim  Einkauf      München    3500,00  Sachbearbeiter  2019-01-17  Ariane       2
--      10102  Huber     Petra     a3      Landshut    Freigabe     Stuttgart  3500,00  Projektleiter   2018-10-01  Apollo       3
--      ...
--      (20 Zeilen)

SELECT m.*, ab.bezeichnung, ab.stadt, g.gehalt, a.aufgabe, a.einst_dat, p.bezeichnung, p.kd_id
FROM Mitarbeiter m
INNER JOIN Abteilung ab ON m.abt_id = ab.id
INNER JOIN Gehalt g ON m.id = g.mit_id
INNER JOIN Arbeit a ON m.id = a.mit_id
INNER JOIN Projekt p ON a.pro_id = p.id

-- Aufgabe 6.6
--
-- Geben Sie für die Projekte die mit "A" beginnen die unten
-- gezeigten Informationen aus. Sortieren Sie die Ausgabe 
-- nach dem Projektnamen aufsteigend und der Mitarbeiter-Id 
-- absteigend.
--
--      bezeichnung  firma                    mit_id  aufgabe
--      Apollo       Frankreich-Reisen GmbH   29346   Sachbearbeiter
--      Apollo       Frankreich-Reisen GmbH   28559   NULL
--      Apollo       Frankreich-Reisen GmbH   17000   NULL
--      Apollo       Frankreich-Reisen GmbH   10102   Projektleiter
--      Apollo       Frankreich-Reisen GmbH   9031    Gruppenleiter
--      Ariane       Technische Produkte oHG  22222   Projektleiter
--      Ariane       Technische Produkte oHG  17000   NULL
--      Ariane       Technische Produkte oHG  9912    Sachbearbeiter 

SELECT p.bezeichnung, k.firma, a.mit_id, a.aufgabe
FROM Projekt p
INNER JOIN Kunde k ON p.kd_id = k.id
INNER JOIN Arbeit a ON a.pro_id = p.id
WHERE p.bezeichnung LIKE 'A%'
ORDER BY p.bezeichnung ASC, a.mit_id DESC;

-- Aufgabe 6.7
--
-- Finden Sie Namen und Vornamen aller Mitarbeiter, 
-- die im Projekt Merkur arbeiten.
--
--      nachname  vorname
--      Kaufmann  Brigitte            
--      Meier     Rainer              
--      Huber     Petra 
--      Schubert  Rolf

	SELECT nachname, vorname
	FROM Mitarbeiter m
	INNER JOIN Arbeit a ON m.id = a.mit_id
	INNER JOIN Projekt p ON p.id = a.pro_id
	WHERE p.bezeichnung = 'Merkur';

-- Aufgabe 6.8
--
-- Nennen Sie Namen und Vornamen aller Projektleiter, deren 
-- Abteilung den Standort München hat.
--
--      nachname  vorname
--      Kaufmann  Brigitte
--      Vogel     Anke

SELECT nachname, vorname
FROM Mitarbeiter m
INNER JOIN Arbeit a ON m.id = a.mit_id
INNER JOIN Abteilung ab ON m.abt_id = ab.id
WHERE ab.stadt = 'München' AND a.aufgabe = 'Projektleiter';
```