---
sidebar_position: 20
description: ""
draft: false
title: "Programmierung I"
---
```sql
--	Nutzen Sie die Datenbank ProjektDB zur 
--	L�sung dieser Aufgabe

USE ProjektDB;
GO

CREATE SCHEMA Programming;
GO
--	Aufgabe P1.1
--
--	Erstellen Sie eine gespeicherte Prozedur "sp_FilterMitarbeiter1",
--	die eine Liste der Mitarbeiter ausgibt, die in einer bestimmten
--	Abteilung arbeiten. Die Prozedur soll den Parameter @Abteilung
--	f�r die Bezeichnung der Abteilung entgegennehmen.
--
--	Beispiel: EXEC sp_FilterMitarbeiter1 'Einkauf'
--	
--	id     vorname  nachname  abt_id  bezeichnung
--	-----  -------  --------  ------  -----------
--	9912   Klaus    Wolf      a4      Einkauf
--	12121  Ursula   Richter   a4      Einkauf
--	20204  Dirk     Fuchs     a4      Einkauf
--	22222  Anke     Vogel     a4      Einkauf

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter1
	@Abteilung varchar(20)
AS
BEGIN
	SELECT m.id, m.vorname, m.nachname, m.abt_id, a.bezeichnung
	FROM Mitarbeiter m
	JOIN Abteilung a ON m.abt_id = a.id
	WHERE a.bezeichnung = @Abteilung
END
GO

Programming.sp_FilterMitarbeiter1 'Einkauf'
GO

--	Aufgabe P1.2
--
--	Ver�ndern Sie die Prozedur aus Aufgabe P1.1:
--	Wenn keine Mitarbeiter zur angeforderten Abteilung gefunden
--	werden, soll der Text 'Abteilung ung�ltig: <Bezeichnung>'
--	angezeigt werden. Entweder im Meldungs-Fenster oder im Grid.
--
--	Beispiel: EXEC sp_FilterMitarbeiter1 'Produktion'
--
--	Fehlermeldung
--	------------------------------
--	Abteilung ung�ltig: Produktion

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter2
	@Abteilung varchar(20)
AS
IF @Abteilung NOT IN (SELECT bezeichnung FROM  Abteilung)
	BEGIN
		PRINT 'Abteilung ung�ltig: ' + @Abteilung;
	END
ELSE
BEGIN
	SELECT m.id, m.vorname, m.nachname, m.abt_id, a.bezeichnung
	FROM Mitarbeiter m
	JOIN Abteilung a ON m.abt_id = a.id
	WHERE a.bezeichnung = @Abteilung
END
GO

Programming.sp_FilterMitarbeiter2 'Produktion'
GO

-- Alternative L�sung

CREATE OR ALTER PROCEDURE Programming.sp_FilterMitarbeiter3
	@Abteilung varchar(20)
AS
IF EXISTS (SELECT m.abt_id FROM Mitarbeiter m
			JOIN Abteilung a ON m.abt_id = a.id
			WHERE a.bezeichnung = @Abteilung)
BEGIN
	SELECT m.id, m.vorname, m.nachname, m.abt_id, a.bezeichnung
	FROM Mitarbeiter m
	JOIN Abteilung a ON m.abt_id = a.id
	WHERE a.bezeichnung = @Abteilung
END
ELSE
BEGIN
	PRINT 'Abteilung ung�ltig: ' + @Abteilung;
END
GO

Programming.sp_FilterMitarbeiter3 'Produktion'
GO
```