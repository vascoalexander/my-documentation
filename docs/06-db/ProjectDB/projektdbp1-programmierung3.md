---
sidebar_position: 22
description: ""
draft: false
title: "Programmierung III"
---
```sql
--	Nutzen Sie die Datenbank ProjektDB zur 
--	Lösung dieser Aufgabe
USE ProjektDB;
GO

--	Aufgabe P1.5
--
--	Schreiben Sie ein User Defined Function, die Ihnen die Summe
--	aller Gehälter zurückgibt.

CREATE OR ALTER FUNCTION Programming.udf_SumGehälter()
RETURNS Money
AS
BEGIN
	RETURN
		(SELECT SUM(gehalt) FROM Gehalt)
END
GO

PRINT Programming.udf_SumGehälter();
GO

--	Aufgabe P1.6
--
--	Erweitern Sie die Function aus Aufgabe P1.5, so dass man der
--	Function eine Abteilungs-ID übergeben kann, zu der die Summe
--	der Gehälter zurückgegeben wird.

CREATE OR ALTER FUNCTION Programming.udf_SumGehälter
(@abt_id char(2))
RETURNS Money
AS
BEGIN
	RETURN
		(SELECT SUM(gehalt) FROM Gehalt g
		JOIN Mitarbeiter m ON g.mit_id = m.id
		WHERE @abt_id = m.abt_id)
END
GO

PRINT Programming.udf_SumGehälter('a1');
GO

SELECT * FROM Mitarbeiter;
GO

--	Aufgabe P1.7
--
--	Schreiben Sie eine User Defined Function, die Ihnen zu einem
--	übergebenen Datum die lange Version zurückgibt.
--
--	Beispiel:	13.01.2025	=>	Montag, der 13. Januar 2025

CREATE OR ALTER FUNCTION Programming.udf_ConvertDate
(@datum DATE)
RETURNS VARCHAR(50)
AS
BEGIN
	RETURN CONCAT(DATENAME(dw, @datum), ', der ', DATENAME(day, @datum), '. ', DATENAME(month, @datum),' ', YEAR(@datum))
END
GO

PRINT Programming.udf_ConvertDate('13.01.2025')
```