---
sidebar_position: 24
description: ""
draft: false
title: "Programmierung V"
---
```sql
USE ProjektDB;
GO

--	Nutzen Sie die Datenbank ProjektDB zur 
--	Lösung dieser Aufgabe


--	Aufgabe P2.3
--
--	Schreiben Sie einen zusätzlichen Trigger für die Tabelle
--	Mitarbeiter, der bei einem DELETE die gelöschten Datensätze
--	in der Tabelle MitarbeiterHistorie mit den entsprechenden
--	Zusatz-Informationen anlegt.

CREATE OR ALTER TRIGGER tr_MitarbeiterDelete
ON Mitarbeiter
AFTER DELETE
AS
BEGIN
	INSERT INTO MitarbeiterHistorie
	SELECT *, 'DELETE', GETDATE(), SYSTEM_USER
	FROM deleted;
END;
GO

SELECT * FROM Mitarbeiter

DELETE FROM Arbeit
WHERE mit_id = (SELECT m.id FROM Mitarbeiter m
				JOIN Arbeit a ON a.mit_id = m.id
				WHERE m.nachname = 'Probst')

DELETE FROM Mitarbeiter
WHERE nachname = 'Probst'

--	Aufgabe P2.4
--
--	Erweitern Sie die Tabelle Mitarbeiter um zwei Felder:
--		aenderUser VARCHAR(50),
--		aenderDatum DATETIME
--	Erstellen Sie dann einen Trigger, der nach einer Änderung
--	den User (SYSTEM_USER) und den aktuellen Zeitstempel in
--	den Datensatz schreibt.

ALTER TABLE Mitarbeiter
ADD aenderUser VARCHAR(50), aenderDatum DATETIME;
GO


CREATE OR ALTER TRIGGER tr_MitarbeiterAlter
ON Mitarbeiter
AFTER UPDATE
AS
BEGIN
	UPDATE Mitarbeiter
	SET aenderUser = SYSTEM_USER, aenderDatum = GETDATE()
	WHERE id = (SELECT id FROM inserted)
END;
GO

SELECT * FROM Mitarbeiter;
GO

UPDATE Mitarbeiter
SET vorname = 'Tina'
WHERE vorname = 'Brigitte';
GO

SELECT * FROM Gehalt;
GO

ALTER TABLE Mitarbeiter
DROP COLUMN aenderUser, aenderDatum;
GO

--	Aufgabe P2.5
--
--	Erstellen Sie eine Log-Tabelle (Logging):
--		id INT IDENTITY,
--		mit_id INT,
--		datumzeit DATETIME,
--		benutzer VARCHAR(50),
--		ereignis VARCHAR(100)
--	Erstellen Sie dann einen Trigger für die Tabelle Gehalt,
--	der eine Änderung der Daten verhindert und statt dessen
--	den Versuch mit einem entsprechenden Eintrag in der 
--	Log-Tabelle speichert.

CREATE TABLE Logging (
	id INT IDENTITY PRIMARY KEY,
	mit_id INT,
	datumzeit DATETIME,
	benutzer VARCHAR(50),
	ereignis VARCHAR(100)
);
GO

CREATE OR ALTER TRIGGER tr_GehaltLog
ON Gehalt
INSTEAD OF DELETE, INSERT, UPDATE
AS
BEGIN
	IF EXISTS (SELECt 1 FROM deleted) AND NOT EXISTS (SELECT 1 FROM inserted)
		INSERT INTO Logging
		SELECT mit_id, GETDATE(), SYSTEM_USER, 'DELETE'
		FROM deleted;
	ELSE IF EXISTS (SELECT 1 FROM inserted) AND NOT EXISTS (SELECT 1 FROM deleted)
		INSERT INTO Logging
		SELECT mit_id, GETDATE(), SYSTEM_USER, 'INSERT'
		FROM inserted;
	ELSE IF EXISTS (SELECT 1 FROM inserted) AND EXISTS (SELECT 1 FROM deleted)
		INSERT INTO Logging
		SELECT mit_id, GETDATE(), SYSTEM_USER, 'UPDATE'
		FROM deleted;
END;
GO

SELECT * FROM Gehalt;
GO

UPDATE Gehalt
SET gehalt = 7000
WHERE mit_id BETWEEN 3000 AND 10000;
GO

SELECT * FROM Logging;

-- Klausur 
-- aufg. 1
SELECT id, nachname
FROM Mitarbeiter
WHERE abt_id = 'a2';

-- aufg. 2
SELECT mit_id, umsatz, datum
FROM Umsatz
WHERE umsatz >= 5000;

-- aufg. 3
SELECT nachname, vorname, id
FROM Mitarbeiter
WHERE vorname LIKE '%l_';

-- aufg. 4
SELECT vorname, nachname, stadt
FROM Mitarbeiter
WHERE vorname LIKE '[aeiuo]%[aeiuo]'

-- aufg. 5
SELECT COUNT(mit_id) AS anzahl
FROM Gehalt
WHERE gehalt = 4000;

-- aufg. 6
SELECT abt_id, COUNT(id) AS anzahl
FROM Mitarbeiter
GROUP BY abt_id;

-- aufg. 7
SELECT stadt, COUNT(id) AS anzahl
FROM Mitarbeiter
GROUP BY stadt
HAVING COUNT(id) = 1;

-- aufg. 8
SELECT p.bezeichnung, m.abt_id, m.vorname, m.nachname
FROM Mitarbeiter m
JOIN Arbeit a ON m.id = a.mit_id
JOIN Projekt p ON p.id = a.pro_id
WHERE p.bezeichnung = 'Merkur'
ORDER BY m.abt_id ASC, m.nachname DESC;

-- aufg. 9
SELECT m.id, m.nachname, ISNULL(SUM(u.umsatz), 0) AS umsatz
FROM Mitarbeiter m
LEFT JOIN Umsatz u ON m.id = u.mit_id
GROUP BY m.id, m.nachname;
```