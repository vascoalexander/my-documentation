---
sidebar_position: 5
description: ""
draft: false
title: "Operators"
---
### ARITHMETIC OPERATORS 
```sql
SELECT 5 + 3      AS Addition, 
       5 - 3      AS Subtraction, 
       5 * 3      AS Multiplication, 
       5 / 3.0    AS Division, 
       5 % 3      AS Modulus;
```

### COMPARISON OPERATORS
`=, <>, >, <, >=, <=`

```sql
SELECT * 
FROM Employees 
WHERE Salary >= 50000;
```

### LOGICAL OPERATORS
```sql
SELECT * 
FROM Employees 
WHERE Salary > 50000 AND Department = 'IT';

SELECT * 
FROM Employees 
WHERE Salary > 50000 OR Department = 'HR';

SELECT * 
FROM Employees 
WHERE NOT (Department = 'IT');
```

### BETWEEN
Werte innerhalb eines Bereichs
```sql
SELECT * 
FROM Orders 
WHERE OrderDate BETWEEN '2025-01-01' AND '2025-01-31';
```

### IN 
Übereinstimmung mit einer Liste von Werten
```sql
SELECT * 
FROM Orders 
WHERE Status IN ('Pending', 'Processing');
```

### LIKE
```sql
SELECT * 
FROM Customers 
WHERE Name LIKE 'A%';
```

**Pattern Matching mit LIKE**

| Jokerzeichen | Bedeutung                                              | Beispiel                              | Erklärung                                                                                        |
| :----------- | :----------------------------------------------------- | :------------------------------------ | :----------------------------------------------------------------------------------------------- |
| `%`          | Beliebige Anzahl von Zeichen (auch kein Zeichen)       | 'M%'`                                 | Findet alle Namen, die mit "M" beginnen (z. B. "Max", "Maria", "Michael")                        |
| `_`          | Genau ein beliebiges Zeichen                           | 'J_n'`                                | Findet Namen mit genau drei Zeichen, die mit "J" beginnen und auf "n" enden (z. B. "Jan", "Jon") |
| `[ ]`        | Bestimmte Zeichen an einer Position                    | 'T[ae]m'`                             | Findet "Tam" oder "Tem", aber nicht "Tim"                                                        |
| `[^ ]`       | Ausschluss bestimmter Zeichen                          | 'T[^a]m'`                             | Findet "Tim" oder "Tom", aber nicht "Tam"                                                        |
| `[ - ]`      | Zeichenbereich                                         | 'C[a-c]t'`                            | Findet "Cat", "Cbt" oder "Cct"                                                                   |
| `ESCAPE`     | Ermöglicht die Suche nach Sonderzeichen (`%` oder `_`) | `WHERE Name LIKE '50\\%' ESCAPE '\\'` | Findet "50%" statt "50irgendwas"                                                                 |


### IS: NULL-Prüfung
```sql
SELECT * 
FROM Products 
WHERE Discontinued IS NULL;
```

### BITWISE OPERATORS
```sql
DECLARE @a INT = 5, @b INT = 3;
SELECT @a & @b AS BitwiseAND, 
       @a | @b AS BitwiseOR, 
       @a ^ @b AS BitwiseXOR;
```

### STRING-KONKATENATION
```sql
SELECT 'Hello, ' + 'World!' AS Greeting;
```

### CASE
```sql
SELECT Name,
       CASE 
         WHEN Salary > 70000 THEN 'High'
         WHEN Salary BETWEEN 50000 AND 70000 THEN 'Medium'
         ELSE 'Low'
       END AS SalaryLevel
FROM Employees;
```

### COALESCE & ISNULL (NULL-Behandlung) 
```sql
SELECT Name, COALESCE(Phone, 'No Phone') AS PhoneNumber FROM Employees;
SELECT Name, ISNULL(Phone, 'No Phone')    AS PhoneNumber FROM Employees;
```

### ALL
Vergleicht einen Wert mit *allen* Werten in einer Unterabfrage.
**Beispiel:** Finde alle Produkte, deren Preis höher ist als der Preis *aller* Produkte in der Kategorie 'Elektronik'.
```sql
SELECT Produktname
FROM Produkte
WHERE Preis > ALL (SELECT Preis FROM Produkte WHERE Kategorie = 'Elektronik');
```

### ANY
Vergleicht einen Wert mit *mindestens einem* Wert in einer Unterabfrage.
**Beispiel**: Finde alle Produkte, deren Preis höher ist als der Preis *irgendeines* Produkts in der Kategorie 'Elektronik'.
```sql
SELECT Produktname
FROM Produkte
WHERE Preis > ANY (SELECT Preis FROM Produkte WHERE Kategorie = 'Elektronik');
```

### EXISTS
Prüft, ob eine Unterabfrage *mindestens eine Zeile* zurückgibt.
**Beispiel**: Finde alle Kunden, die mindestens eine Bestellung aufgegeben haben.
```sql
SELECT Kundenname
FROM Kunden
WHERE EXISTS (SELECT 1 FROM Bestellungen WHERE KundenID = Kunden.KundenID);
```