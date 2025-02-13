---
sidebar_position: 1
description: ""
draft: false
title: "DDL"
---
## CREATE DATABASE

```sql
CREATE DATABASE shop_db;
```

## CREATE TABLE

```sql
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
```sql title="Beispiel mit Constraints"
CREATE TABLE Projekt (
	id 		    CHAR(2) 	NOT NULL,
	bezeichnung	    VARCHAR(30)	NOT NULL,
	mittel 		    MONEY	NULL,
	kd_id		    INT		NULL,
	CONSTRAINT pk_projekt 
		PRIMARY KEY (id),
	CONSTRAINT fk_projekt_kunde 
		FOREIGN KEY (kd_id) REFERENCES Kunde (id)
);
GO
```
## ALTER TABLE

Ändert eine bestehende Tabelle (z. B. Spalte hinzufügen).

```sql
ALTER TABLE table_name 
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE table_name
MODIFY column_definition;

ALTER TABLE table_name
DROP CONSTRAINT key_name;

ALTER TABLE
ADD CONSTRAINT key_name
	FOREIGN KEY column_name
	REFERENCES ref_table_name (ref_column_name)
	ON DELETE CASCADE;
```
```sql title="Beispiele"
-- Spalte hinzufügen
ALTER TABLE Customers  
ADD Email varchar(255);
-- Spalte löschen
ALTER TABLE Customers  
DROP COLUMN Email;
-- Spalte verändern
ALTER TABLE employees
MODIFY name VARCHAR(100);
```

## DROP TABLE

```sql
-- Datenbank löschen
DROP DATABASE databasename IF EXISTS
-- Tabelle löschen
DROP TABLE tablename IF EXISTS

```

## TRUNCATE TABLE

Löscht alle Daten aus einer Tabelle, behält aber die Struktur bei. Im Gegensatz zu DELETE ist TRUNCATE schneller und setzt Zählerwerte zurück.

```sql
TRUNCATE TABLE customers;
```

## CREATE INDEX

Erstellt einen Index zur Optimierung der Abfragen.

```sql
CREATE INDEX idx_customers_email ON customers(email);
```

## DROP INDEX

Löscht einen bestehenden Index.

```sql
DROP INDEX IF EXISTS idx_customers_email;
```

## CREATE VIEW

Erstellt eine virtuelle Tabelle basierend auf einer Abfrage.

```sql
CREATE VIEW active_customers AS
SELECT id, name, email FROM customers WHERE active = TRUE;
```

## DROP VIEW

Löscht eine bestehende View.

```sql
DROP VIEW IF EXISTS active_customers;
```

## CREATE SCHEMA

Erstellt ein neues Schema zur Strukturierung von Datenbanken.

```sql
CREATE SCHEMA sales;
```

## DROP SCHEMA

Löscht ein Schema und optional alle enthaltenen Objekte.

```sql
DROP SCHEMA IF EXISTS sales CASCADE;
```