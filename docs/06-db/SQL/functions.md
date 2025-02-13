---
sidebar_position: 7
description: ""
draft: false
title: "Functions"
---
### Aggregat Funktionen

An aggregate function is a function that performs a calculation on a set of values, and returns a single value.

Aggregate functions are often used with the **GROUP BY** clause of the **SELECT** statement. 
The GROUP BY clause splits the result-set into groups of values and the aggregate function can be used to return a single value for each group.

**The most commonly used SQL aggregate functions are:**

**MIN()** - returns the smallest value within the selected column  
**MAX()** - returns the largest value within the selected column  
**COUNT()** - returns the number of rows in a set  
**SUM()** - returns the total sum of a numerical column  
**AVG()** - returns the average value of a numerical column  

Aggregate functions ignore null values (except for COUNT()).

:::warning[Regel]
Spalten, die in der SELECT-Klausel verwendet werden, **müssen** entweder als Gruppierungsmerkmal in die GROUP BY-Klausel aufgenommen werden, oder es muss eine Aggregatfunktion darauf angewendet werden.
:::

```sql
-- Annahme: Tabelle 'Verkäufe' mit Spalte 'Betrag'
SELECT 
    SUM(Betrag) AS GesamtVerkauf,
    AVG(Betrag) AS Durchschnitt,
    MIN(Betrag) AS Minimal,
    MAX(Betrag) AS Maximal,
    COUNT(*) AS AnzahlVerkäufe
FROM Verkäufe;
```

### String Funktionen

```sql
DECLARE @text NVARCHAR(50) = 'SQL Server Funktionen';
SELECT 
    UPPER(@text) AS Großbuchstaben,             -- Konvertiert zu Großbuchstaben
    LOWER(@text) AS Kleinbuchstaben,            -- Konvertiert zu Kleinbuchstaben
    LEFT(@text, 3) AS Erste3Zeichen,            -- Gibt die ersten 3 Zeichen zurück
    RIGHT(@text, 8) AS Letzte8Zeichen,          -- Gibt die letzten 8 Zeichen zurück
    SUBSTRING(@text, 5, 6) AS Teilstring,       -- Extrahiert 6 Zeichen ab Position 5
    LEN(@text) AS Länge,                        -- Gibt die Länge des Strings zurück
    REPLACE(@text, 'Server', 'DB') AS Ersetzt,  -- Ersetzt 'Server' mit 'DB'
    CONCAT(@text, ' Beispiel') AS Verkettet;    -- Verkettet zwei Strings
```

### Numerische Funktionen

```sql
DECLARE @zahl DECIMAL(10,2) = -123.456;
SELECT 
    ABS(@zahl) AS Absolutwert,         -- Absolutwert (Betrag)
    ROUND(@zahl, 1) AS Gerundet,       -- Rundet auf 1 Dezimalstelle
    CEILING(@zahl) AS Aufrunden,       -- Rundet auf die nächste ganze Zahl nach oben
    FLOOR(@zahl) AS Abrunden,          -- Rundet auf die nächste ganze Zahl nach unten
    POWER(2, 3) AS Potenz;             -- 2^3 = 8
```

### Datumsfunktionen

```sql
DECLARE @heute DATETIME = GETDATE();
DECLARE @heute2 DATETIME2 = SYSDATETIME();

SELECT 
    @heute AS AktuellesDatum,                            -- Aktuelles Datum (DATETIME) via GETDATE()
    @heute2 AS AktuellesDatum2,                          -- Aktuelles Datum (DATETIME2) via SYSDATETIME()
    DATEADD(day, 7, @heute) AS DatumPlus7Tage,           -- Fügt 7 Tage zum aktuellen Datum hinzu
    DATEDIFF(day, '2025-01-01', @heute) AS TageSeit,     -- Differenz in Tagen seit dem 01.01.2025
    FORMAT(@heute, 'dd.MM.yyyy') AS FormatiertesDatum,   -- Formatiert das Datum im Format TT.MM.JJJJ
    DAY(@heute) AS Tag,                                  -- Extrahiert den Tag aus dem Datum
    MONTH(@heute) AS Monat,                              -- Extrahiert den Monat aus dem Datum
    YEAR(@heute) AS Jahr,                                -- Extrahiert das Jahr aus dem Datum
    DATEPART(hour, @heute) AS Stunde,                    -- Extrahiert die Stunde aus dem Datum
    DATENAME(weekday, @heute) AS Wochentag;              -- Gibt den Namen des Wochentags zurück
```

### Konvertierungs- und Nullbehandlungsfunktionen

```sql
DECLARE @wert VARCHAR(10) = '123';
SELECT 
    CAST(@wert AS INT) AS UmgewandeltInInt,                       -- CAST zum Konvertieren
    CONVERT(DATE, '2025-02-13', 23) AS KonvertiertesDatum,        -- CONVERT mit Stil (23: yyyy-mm-dd)
    ISNULL(NULL, 'Standardwert') AS ISNULL_Beispiel,              -- Ersetzt NULL mit 'Standardwert'
    COALESCE(NULL, '', 'Erster Nicht-NULL') AS COALESCE_Beispiel; -- Gibt den ersten Nicht-NULL-Wert zurück
```