---
sidebar_position: 5
description: ""
draft: false
title: "LIKE Operator"
---
```sql
-- Nutzen Sie die Datenbank ProjektDB, 
-- um die folgenden Aufgaben zu l�sen


-- Aufgabe 3.1
--
-- Finden Sie Namen und Personalnummer aller Mitarbeiter, 
-- deren Name mit dem Buchstaben "K" beginnt.
--
--      nachname  id
--      Kaufmann  2581
--      Kr�ger    17000
--      Keller    25348

SELECT nachname, id
FROM Mitarbeiter
WHERE nachname LIKE '[K]%';

-- Aufgabe 3.2
--
-- Nennen Sie Namen, Vornamen und Id aller Mitarbeiter, 
-- deren Vorname als zweiten Buchstaben ein "a" hat.
--
--      nachname  vorname   id
--      Sch�fer   Sabine    5765
--      Meier     Rainer    9031
--      Kr�ger    Martin    17000
--      M�ller    Gabriele  18316
--      Keller    Hans      25348

SELECT nachname, vorname, id
FROM Mitarbeiter
WHERE vorname LIKE '_[a]%';

-- Aufgabe 3.3
--
-- Finden Sie Abteilungs-Id und Standort aller Abteilungen, die 
-- sich in den Orten befinden, die mit einem Buchstaben zwischen 
-- "N" und "Z" beginnen.
--
--      id  stadt
--      a3  Stuttgart
--      a5  Ulm

SELECT id, stadt
FROM Abteilung
WHERE stadt LIKE '[N-Z]%';

-- Aufgabe 3.4
--
-- Finden Sie Id, Nachnamen und Vornamen aller Mitarbeiter, deren 
-- Namen nicht mit den Buchstaben K, L, M, N, O und P beginnen,
-- und deren Vornamen nicht mit dem Buchstaben U beginnen.
--
--      id     nachname  vorname
--      5765   Sch�fer   Sabine
--      9912   Wolf      Klaus
--      10102  Huber     Petra
--      20204  Fuchs     Dirk
--      22222  Vogel     Anke
--      24321  Schubert  Rolf
--      27365  Albrecht  Lena

SELECT id, nachname, vorname
FROM Mitarbeiter
WHERE nachname LIKE '[^K-P]%' AND vorname LIKE '[^U]%';

-- Aufgabe 3.5
--
-- Nennen Sie Vor- und Nachname aller Mitarbeiter, deren Name 
-- nicht mit "er" endet.
--
--      vorname   nachname
--      Brigitte  Kaufmann
--      Klaus     Wolf
--      Dirk      Fuchs
--      Anke      Vogel
--      Rolf      Schubert
--      Lena      Albrecht
--      Andreas   Probst

SELECT nachname, vorname
FROM Mitarbeiter
WHERE nachname NOT LIKE '%er';

SELECT nachname, vorname
FROM Mitarbeiter
WHERE nachname LIKE '%[^e]_' AND nachname LIKE '%[^r]';

-- Aufgabe 3.6
--
-- Wie kann man nach dem Unterstrich (_) oder dem Prozentzeichen (%)
-- mit LIKE suchen? Finden Sie alle Kunden, in deren Datensatz ein 
-- solches Sonderzeichen vorkommt.
--
--      firma                  stadt
--      100% Sonderzeichen AG  Baden_Baden

SELECT firma, stadt
FROM Kunde
WHERE firma LIKE '%[%_]%';

SELECT firma, stadt
FROM Kunde
WHERE firma LIKE '%\%%' ESCAPE '\\';

-- Aufgabe 3.7
--
-- Nennen Sie alle Mitarbeiter, deren Vorname mindestens 
-- drei Vokale enth�lt.
--
--      id     nachname  vorname   abt_id  stadt
--      2581   Kaufmann  Brigitte  a2      NULL
--      5765   Sch�fer   Sabine    a3      Landshut
--      9031   Meier     Rainer    a2      NULL
--      12121  Richter   Ursula    a4      M�nchen
--      18316  M�ller    Gabriele  a1      Rosenheim
--      28559  Mozer     Sibille   a1      Ulm
--      29346  Probst    Andreas   a2      Augsburg

SELECT *
FROM Mitarbeiter
WHERE vorname LIKE '%[aeuio]%[aeuio]%[aeuio]%';

-- Aufgabe 3.8
-- 
-- Finden Sie alle Mitarbeiter, deren Vorname aus genau sieben
-- Buchstaben besteht.
--
--      id     nachname  vorname  abt_id  stadt
--      28559  Mozer     Sibille  a1      Ulm
--      29346  Probst    Andreas  a2      Augsburg

SELECT *
FROM Mitarbeiter
WHERE vorname LIKE '_______';

SELECT *
FROM Mitarbeiter
WHERE LEN(vorname) = 7;

-- Aufgabe 3.9
--
-- Finden Sie alle Mitarbeiter, deren Vorname aus genau sechs
-- Buchstaben besteht und deren Vorname nicht mit einem Vokal endet.
--
--      id     nachname  vorname  abt_id  stadt
--      9031   Meier     Rainer   a2      NULL
--      17000  Kr�ger    Martin   a5      Ulm

SELECT *
FROM Mitarbeiter
WHERE vorname LIKE '______' AND vorname LIKE '%[^aueio]';

SELECT *
FROM Mitarbeiter
WHERE vorname LIKE '_____[^aueio]';

-- Aufgabe 3.10
--
-- Finden Sie alle Mitarbeiter, bei deren Vorname der vorletzte
-- Buchstabe ein Vokal ist.
--
--      id     nachname  vorname  abt_id  stadt
--      9031   Meier     Rainer   a2      NULL
--      9912   Wolf      Klaus    a4      Heidenheim
--      17000  Kr�ger    Martin   a5      Ulm
--      29346  Probst    Andreas  a2      Augsburg

SELECT *
FROM Mitarbeiter
WHERE vorname LIKE '%[aueio]_';
```