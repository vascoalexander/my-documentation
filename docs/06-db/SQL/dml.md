---
sidebar_position: 2
description: ""
draft: false
title: "DML"
---
## INSERT INTO

Fügt neue Datensätze in eine Tabelle ein.

```sql
INSERT INTO customers (name, email, phone)
VALUES ('Max Mustermann', 'max@example.com', '+491234567890');
```

## INSERT INTO (Mehrere Zeilen)

Fügt mehrere Datensätze auf einmal ein.

```sql
INSERT INTO customers (name, email, phone) VALUES
    ('Erika Musterfrau', 'erika@example.com', '+491234567891'),
    ('John Doe', 'john@example.com', '+491234567892');
```

## SELECT (Einfache Abfrage)

Ruft Daten aus einer Tabelle ab.

```sql
SELECT name, email FROM customers;
```

## SELECT mit WHERE

Filtert Daten basierend auf Bedingungen.

```sql
SELECT * FROM customers WHERE email = 'max@example.com';
```

## SELECT mit ORDER BY

Sortiert die Ergebnisse auf- oder absteigend.

```sql
SELECT * FROM customers ORDER BY name ASC;
```

## SELECT mit LIMIT

Begrenzt die Anzahl der zurückgegebenen Zeilen.

```sql
SELECT * FROM customers LIMIT 5;
```

## UPDATE

Ändert vorhandene Datensätze.

```sql
UPDATE customers
SET phone = '+491234567899'
WHERE email = 'max@example.com';
```

## DELETE

Löscht Datensätze aus einer Tabelle.

```sql
DELETE FROM customers WHERE email = 'max@example.com';
```

## DELETE mit TRUNCATE Unterschied

`DELETE` löscht bestimmte Datensätze, während `TRUNCATE` die gesamte Tabelle leert.

```sql
TRUNCATE TABLE customers;
```

## INSERT INTO mit RETURNING

Gibt eingefügte Werte direkt zurück (z. B. für IDs).

```sql
INSERT INTO customers (name, email, phone)
VALUES ('Anna Schmidt', 'anna@example.com', '+491234567893')
RETURNING id;
```

## SELECT mit JOIN

Verknüpft Tabellen für komplexe Abfragen.

```sql
SELECT orders.id, customers.name, orders.total_amount
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

## SELECT mit GROUP BY

Gruppiert Datensätze und aggregiert Werte.

```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;
```

## SELECT mit HAVING

Filtert Gruppenergebnisse.

```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 2;
```

## SELECT mit CASE

Erzeugt bedingte Werte.

```sql
SELECT name,
    CASE
        WHEN total_amount > 100 THEN 'VIP'
        ELSE 'Regular'
    END AS customer_status
FROM orders;
```