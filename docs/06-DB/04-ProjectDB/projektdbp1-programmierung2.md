---
sidebar_position: 21
description: ""
draft: false
title: "Programmierung II"
---
```sql
--	Nutzen Sie die Datenbank ProjektDB zur 
--	L�sung dieser Aufgabe

USE ProjektDB;
GO

CREATE SCHEMA Programming;
GO

--	Aufgabe P1.3
--
--	Erstellen Sie eine gespeicherte Prozedur "sp_FilterMitarbeiter2",
--	die eine Liste der Mitarbeiter ausgibt, die in einer bestimmten
--	Gehalts-Range liegen. Die Prozedur soll die beiden Parameter
--	@MinGehalt und @MaxGehalt entgegennehmen. Wenn es keine passenden
--	Mitarbeiter gibt, soll eine entsprechende Meldung ausgegeben werden.

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter4
	@MinGehalt INT,
	@MaxGehalt INT
AS
BEGIN
IF EXISTS (SELECT mit_id FROM Gehalt WHERE gehalt BETWEEN @MinGehalt AND @MaxGehalt)
	SELECT m.nachname, m.vorname, g.gehalt
	FROM Mitarbeiter m
	JOIN Gehalt g ON g.mit_id = m.id
	WHERE g.gehalt BETWEEN @MinGehalt AND @MaxGehalt
ELSE
	PRINT 'Keine Mitarbeiter mit einem Gehalt von ' + CAST(@MinGehalt AS VARCHAR(10)) + ' bis ' + 
	CAST(@MaxGehalt AS VARCHAR(10)) + ' gefunden.'
END
GO

Programming.sp_FilterMitarbeiter4 '10000', '50000'
GO

--	Aufgabe P1.4
--
--	Erstellen Sie eine Prozedur, die ein neues Projekt anlegt. Der
--	Prozedur sollen die Werte f�r die Projekt-Id, die Bezeichnung
--	und die Mittel �bergeben werden. Das Projekt darf nur angelegt
--	werden, wenn es keinen Konflikt bei Id und Bezeichnung gibt.

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter5
	@id char(2),
	@bezeichnung varchar(20),
	@mittel money
AS
BEGIN
IF NOT EXISTS (SELECT * FROM Projekt WHERE @bezeichnung = bezeichnung OR @id = id)
	INSERT INTO Projekt (id, bezeichnung, mittel)
	VALUES (@id, @bezeichnung, @mittel)
ELSE
	PRINT 'Ung�ltige Parameter: id oder Bezeichnunt schon existent!'
END
GO

Programming.sp_FilterMitarbeiter5 'p7', 'Pluto', '85000'
GO

-- Alternative L�sung

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter5
	@id char(2),
	@bezeichnung varchar(20),
	@mittel money
AS
BEGIN
	IF @id IN (SELECT id FROM Projekt)
		PRINT 'Invalid Parameter: id existiert bereits'
	ELSE IF @bezeichnung IN (SELECT bezeichnung FROM Projekt)
		PRINT 'Invalid Parameter: bezeichnung existiert bereits'
	ELSE
		INSERT INTO Projekt (id, bezeichnung, mittel)
		VALUES (@id, @bezeichnung, @mittel)
END
GO

Programming.sp_FilterMitarbeiter5 'p1', 'Galactica', '85000'
GO

SELECT * FROM Projekt;
GO

-- multiple procedure l�sung / funktioniert nicht

CREATE OR ALTER PROCEDURE Programming.sp_ValidateProjekt
	@id char(2),
	@bezeichnung varchar(20)
AS
BEGIN
	IF @id IN (SELECT id FROM Projekt)
		PRINT 'Invalid Parameter: id existiert bereits'
	ELSE IF @bezeichnung IN (SELECT bezeichnung FROM Projekt)
		PRINT 'Invalid Parameter: bezeichnung existiert bereits'
	ELSE
		RETURN '0'
END
GO

CREATE OR ALTER PROCEDURE Programming.sp_InsertProjekt
	@id char(2),
	@bezeichnung varchar(20),
	@mittel money
AS
BEGIN
	DECLARE @error varchar(50)
	EXEC Programming.sp_ValidateProjekt @id, @bezeichnung = @error;
	IF @error = '0'
		INSERT INTO Projekt (id, bezeichnung, mittel)
		VALUES (@id, @bezeichnung, @mittel);
	ELSE
		Print @error;
END
GO

Programming.sp_InsertProjekt 'p7', 'Galactica', '45000'
GO

SELECT * FROM Projekt
```