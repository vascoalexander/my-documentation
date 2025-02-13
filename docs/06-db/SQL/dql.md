---
sidebar_position: 3
description: ""
draft: false
title: "DQL"
---
## Überblick
- **SELECT** Selektieren von Daten aus einer Tabelle
- **JOINs:** Verknüpfen Daten aus mehreren Tabellen basierend auf gemeinsamen Schlüsseln. Wichtige Typen: INNER, LEFT, RIGHT, FULL und CROSS.
- **Subselects (Subqueries):** Ermöglichen verschachtelte Abfragen zur Filterung, Aggregation oder Berechnung.
- **UNION:** Kombiniert Ergebnisse aus mehreren Abfragen (entfernt Duplikate, `UNION ALL` behält sie).
- **INTERSECT:** Gibt nur die gemeinsamen Zeilen aus zwei Abfragen zurück.
- **EXCEPT:** Gibt Zeilen aus der ersten Abfrage zurück, die in der zweiten nicht vorkommen.

## SELECT

Ruft Daten aus einer Tabelle ab.

```sql
SELECT name, email 
FROM customers;

-- Selektieren mit alias (AS)
SELECT e.*
FROM DimEmployee AS e
ORDER BY LastName;
```
**Reihenfolge der Syntax vs Ausführung:**

|  Syntax  | Ausführung |
| :------: | :--------: |
|  **SELECT**  |    FROM    |
|   FROM   |   WHERE    |
|  WHERE   |  GROUP BY  |
| GROUP BY |   HAVING   |
|  HAVING  |   **SELECT**   |
| ORDER BY |  ORDER BY  |

### SELECT mit WHERE
Filtert Daten basierend auf Bedingungen.

```sql title="Beispiel 1"
SELECT * FROM customers WHERE email = 'max@example.com';

-- einzelne Bedingung
SELECT * FROM employees 
WHERE age > 30;
-- mehrere Bedingungen
SELECT * FROM employees 
WHERE age > 30 AND department = 'HR';
```
```sql title="Beispiel 2"
SELECT FirstName,
       LastName,
       StartDate AS FirstDay
FROM DimEmployee
WHERE EndDate IS NOT NULL
      AND MaritalStatus = 'M'
ORDER BY LastName;
```
The following **operators** can be used in the `WHERE` clause:

| Operator | Description                                                                     |
| :------- | :------------------------------------------------------------------------------ |
| `=`      | Equal                                                                           |
| `>`      | Greater than                                                                    |
| `<`      | Less than                                                                       |
| `>=`     | Greater than or equal                                                           |
| `<=`     | Less than or equal                                                              |
| `<>`     | Not equal. **Note:** In some versions of SQL this operator may be written as != |
| BETWEEN  | Between a certain range                                                         |
| LIKE     | Search for a pattern                                                            |
| IN       | To specify multiple possible values for a column                                |

### DISTINCT with SELECT
The following example uses DISTINCT to generate a list of all unique titles in the DimEmployee table.
```sql
SELECT DISTINCT Title
FROM DimEmployee
ORDER BY Title;
```
### SELECT mit GROUP BY
The following example finds the total amount for all sales on each day.
```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;

SELECT OrderDateKey,
       SUM(SalesAmount) AS TotalSales
FROM FactInternetSales
GROUP BY OrderDateKey
ORDER BY OrderDateKey;

-- with multiple Groups
SELECT OrderDateKey,
       PromotionKey,
       AVG(SalesAmount) AS AvgSales,
       SUM(SalesAmount) AS TotalSales
FROM FactInternetSales
GROUP BY OrderDateKey, PromotionKey
ORDER BY OrderDateKey;

-- GROUP BY and WHERE
SELECT OrderDateKey,
       SUM(SalesAmount) AS TotalSales
FROM FactInternetSales
WHERE OrderDateKey > '20020801'
GROUP BY OrderDateKey
ORDER BY OrderDateKey;
```
### SELECT mit HAVING
Wenn Daten aggregiert wurden müssen wir HAVING anstelle von WHERE zum filtern verwenden.
```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 2;

USE AdventureWorks2022;  
GO  
SELECT SalesOrderID, SUM(LineTotal) AS SubTotal  
FROM Sales.SalesOrderDetail  
GROUP BY SalesOrderID  
HAVING SUM(LineTotal) > 100000.00  
ORDER BY SalesOrderID ;
```
### SELECT mit ORDER BY
Sortiert die Ergebnisse auf- oder absteigend.
```sql
SELECT * FROM customers 
ORDER BY name ASC;
```
### SELECT mit CASE
Erzeugt bedingte Werte.
```sql
SELECT name,
    CASE
        WHEN total_amount > 100 THEN 'VIP'
        ELSE 'Regular'
    END AS customer_status
FROM orders;
```

### SELECT mit LIMIT
Begrenzt die Anzahl der zurückgegebenen Zeilen.
```sql
SELECT * FROM customers 
LIMIT 5;
```
### SELECT TOP
Begrenzt die Anzahl der zurückgegebenen Zeilen.
```sql
-- Select the first 3 records of the Customers table
SELECT TOP 3 * FROM Customers;
-- the first 50% of the records from the "Customers" table
SELECT TOP 50 PERCENT * FROM Customers;
```

## JOIN
JOINs ermöglichen es, Daten aus zwei oder mehr Tabellen anhand einer gemeinsamen Spalte zu verknüpfen.

### INNER JOIN 
Zeige alle Kunden, die mindestens eine Bestellung haben.

```sql
SELECT k.Name, b.Bestelldatum
FROM Kunden k
INNER JOIN Bestellungen b ON k.KundenID = b.KundenID;
```

_Ergebnis:_ Nur Kunden, für die es einen passenden Eintrag in `Bestellungen` gibt, werden angezeigt.

### LEFT JOIN
*(oder LEFT OUTER JOIN)*
Zeige alle Kunden – auch jene ohne Bestellung. Für Kunden ohne Bestellung wird der Bestellwert `NULL` sein.

```sql
SELECT k.Name, b.Bestelldatum
FROM Kunden k
LEFT JOIN Bestellungen b ON k.KundenID = b.KundenID;
```
### RIGHT JOIN
Zeige alle Bestellungen und die zugehörigen Kundendaten. Falls es eine Bestellung ohne zugeordneten Kunden gibt (selten), werden Kundendaten als `NULL` angezeigt.

```sql
SELECT k.Name, b.Bestelldatum
FROM Kunden k
RIGHT JOIN Bestellungen b ON k.KundenID = b.KundenID;
```
### FULL JOIN
Zeige alle Kunden und alle Bestellungen, auch wenn keine direkte Übereinstimmung vorliegt.

```sql
SELECT k.Name, b.Bestelldatum
FROM Kunden k
FULL OUTER JOIN Bestellungen b ON k.KundenID = b.KundenID;
```

_Hinweis:_ `FULL OUTER JOIN` wird nicht von allen Datenbanken unterstützt (z. B. MySQL nicht standardmäßig).
### CROSS JOIN
Erzeuge das kartesische Produkt zweier Tabellen. Dies liefert jede Kombination von Zeilen aus beiden Tabellen.

```sql
SELECT k.Name, p.Produktname
FROM Kunden k
CROSS JOIN Produkte p;
```

_Ergebnis:_ Jeder Kunde wird mit jedem Produkt kombiniert – nützlich für bestimmte analytische Aufgaben.
## Subselects
Subqueries sind verschachtelte Abfragen, die innerhalb einer äußeren (Haupt‑)Abfrage verwendet werden. Sie können in der `SELECT`-, `FROM`- oder `WHERE`-Klausel vorkommen.

**Selbständige Unterabfragen:**  
Die Unterabfrage ist von der äußeren, sie umgebenden Anweisung unabhängig. Sie kann auch separat ausgeführt werden.  
**Korrelierte Unterabfragen:**  
Die Unterabfrage bezieht sich auf einen oder mehrere Werte der äußeren, sie umgebenden Anweisung. Sie kann nicht separat ausgeführt werden.  

**Unterscheidung nach Ergebnis:**  
- **skalar** => liefert genau einen einzelnen Wert zurück
- **mehrwertig** => liefert eine Liste von einzelnen Werten zurück
- **tabellenwertig** => liefert eine Tabelle zurück

### Subquery in der WHERE-Klausel
Finde alle Kunden, deren Stadt in der Liste der Städte aus der Tabelle `Filialen` (z. B. in Deutschland) vorkommt.

```sql
SELECT *
FROM Kunden
WHERE Stadt IN (
    SELECT Stadt
    FROM Filialen
    WHERE Land = 'DE'
);
```
### Korrelierte Subquery in der SELECT-Klausel
Zeige den Namen jedes Kunden sowie die Anzahl seiner Bestellungen.  
Angenommen, `Kunden` hat die Spalte `KundenID` und `Bestellungen` hat ebenfalls eine Spalte `KundenID`.

```sql
SELECT 
    k.Name,
    (
        SELECT COUNT(*)
        FROM Bestellungen b
        WHERE b.KundenID = k.KundenID
    ) AS Bestellanzahl
FROM Kunden k;
```

### Subquery im FROM-Teil (Derived Table)
Ermittle Kunden, die mehr als 5 Bestellungen haben, indem Du zuerst die Bestellanzahl pro Kunde aggregierst.

```sql
SELECT t.KundenID, t.Bestellanzahl
FROM (
    SELECT KundenID, COUNT(*) AS Bestellanzahl
    FROM Bestellungen
    GROUP BY KundenID
) t
WHERE t.Bestellanzahl > 5;
```

### Subquery in einem INSERT INTO
```sql
INSERT INTO Bestellungen (KundeID, ProduktID, Bestelldatum)
SELECT KundeID, 101, GETDATE()
FROM Kunden
WHERE Land = 'Deutschland';
```

## UNION
Mit `UNION` werden die Ergebnisse von zwei (oder mehr) `SELECT`-Abfragen kombiniert. Dabei müssen alle Abfragen die gleiche Anzahl und kompatible Datentypen von Spalten zurückgeben.

- **Hinweis:** Standardmäßig entfernt `UNION` Duplikate. Möchtest Du alle Zeilen (inklusive Duplikate), verwende `UNION ALL`.

**Beispiel:**  
Stell Dir vor, Du hast zwei Tabellen: `Kunden` und `Lieferanten`. Beide haben Spalten `Name` und `Stadt`.

```sql
-- Alle Namen und Städte aus beiden Tabellen (ohne Duplikate)
SELECT Name, Stadt
FROM Kunden
UNION
SELECT Name, Stadt
FROM Lieferanten;
```

```sql
-- Mit Duplikaten, falls diese wichtig sind
SELECT Name, Stadt
FROM Kunden
UNION ALL
SELECT Name, Stadt
FROM Lieferanten;
```

## INTERSECT
Mit `INTERSECT` erhältst Du nur die Zeilen, die in **beiden** Abfragen vorkommen.

- **Wichtig:** Nicht alle Datenbanksysteme unterstützen `INTERSECT` (z. B. MySQL unterstützt es nicht nativ).

**Beispiel:**  
Finde die Personen, die sowohl in der `Kunden`- als auch in der `Lieferanten`-Tabelle vorkommen.

```sql
SELECT Name, Stadt
FROM Kunden
INTERSECT
SELECT Name, Stadt
FROM Lieferanten;
```

_Hinweis:_ Nur die Datensätze, die in beiden Abfragen identisch sind, werden zurückgegeben.

## EXCEPT
Mit `EXCEPT` (in einigen Systemen auch als `MINUS` bekannt) erhältst Du die Zeilen aus der ersten Abfrage, die **nicht** in der zweiten vorkommen.

- **Hinweis:** Auch `EXCEPT` wird nicht in allen Datenbanksystemen unterstützt.

**Beispiel:**  
Finde alle Kunden, die **keine** Lieferanten sind.

```sql
SELECT Name, Stadt
FROM Kunden
EXCEPT
SELECT Name, Stadt
FROM Lieferanten;
```

_Ergebnis:_ Es werden alle Zeilen aus `Kunden` angezeigt, die nicht exakt in `Lieferanten` vorkommen.