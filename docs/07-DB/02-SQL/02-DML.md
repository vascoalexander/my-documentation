---
sidebar_position: 2
description: ""
draft: false
title: "DML"
---
### INSERT INTO
Fügt neue Datensätze in eine Tabelle ein.
```sql
INSERT INTO customers (name, email, phone)
VALUES ('Max Mustermann', 'max@example.com', '+491234567890');
```

### INSERT INTO (Mehrere Zeilen)
Fügt mehrere Datensätze auf einmal ein.
```sql
INSERT INTO customers (name, email, phone) VALUES
    ('Erika Musterfrau', 'erika@example.com', '+491234567891'),
    ('John Doe', 'john@example.com', '+491234567892');
```

### INSERT INTO mit RETURNING
Gibt eingefügte Werte direkt zurück (z. B. für IDs).
```sql
INSERT INTO customers (name, email, phone)
VALUES ('Anna Schmidt', 'anna@example.com', '+491234567893')
RETURNING id;
```
### SELECT INTO
Mit SELECT INTO kannst Du eine neue Tabelle erstellen und gleichzeitig Daten aus einer bestehenden Tabelle in diese kopieren.
**Wichtig:** Die neue Tabelle übernimmt keine Indizes, Schlüssel oder Constraints der Originaltabelle – diese müssen ggf. separat definiert werden.
```sql
SELECT *
INTO Kunden_backup
FROM Kunden;
```

### SELECT INTO mit WHERE
Die neue Tabelle HighValueOrders wird nur die angegebenen Spalten enthalten und nur die Bestellungen, 
bei denen Gesamtbetrag größer als 1000 ist.
```sql
SELECT BestellungID, KundenID, Bestelldatum, Gesamtbetrag
INTO HighValueOrders
FROM Bestellungen
WHERE Gesamtbetrag > 1000;
```

### UPDATE
Ändert vorhandene Datensätze.
```sql
UPDATE customers
SET phone = '+491234567899'
WHERE email = 'max@example.com';

-- spezifische Zeile updaten
UPDATE employees 
SET department = 'IT' 
WHERE id = 1;
-- alle Zeilen updaten
UPDATE employees 
SET department = 'General';
```

### DELETE
Löscht Datensätze aus einer Tabelle.
```sql
DELETE FROM customers WHERE email = 'max@example.com';
```

### DELETE mit TRUNCATE Unterschied
`DELETE` löscht bestimmte Datensätze, während `TRUNCATE` die gesamte Tabelle leert.
```sql
TRUNCATE TABLE customers;
```


| DELETE                                                                                                                          | TRUNCATE                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| Eine Filterung der zu löschenden Datensätze kann mit der WHERE-Klausel erfolgen.                                                | mit der WHERE-Klausel erfolgen. Eine Filterung der Datensätze ist nicht möglich, es werden immer alle Datensätze gelöscht.         |
| Bei großen Datenmengen sehr langsam, da sehr viele Daten ins Transaktionsprotokoll geschrieben werden.                          | Auch bei großen Datenmengen schnell, da nur einige wenige Metadaten ins Transaktions- protokoll geschrieben werden.                |
| Eine evtl. vorhandene IDENTITY-Spalte wird nicht zurückgesetzt. Bei einem erneuten INSERT wird also einfach weiter gezählt.     | Eine evtl. vorhandene IDENTITY-Spalte wird zurückgesetzt. Bei einem erneuten INSERT beginnen die Werte wieder am Anfang.           |
| Ist auch möglich, wenn auf die Tabelle ein Fremdschlüssel verweist, sofern keine Fremdschlüsselwerte von DELETE betroffen sind. | Ist in Tabellen, auf die ein Fremdschlüssel verweist, grundsätzlich nicht möglich, selbst wenn der Fremdschlüssel deaktiviert ist. |

