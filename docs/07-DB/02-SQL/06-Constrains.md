---
sidebar_position: 6
description: ""
draft: false
title: "Constraints"
---
**SQL Constraints** sind Regeln, die auf Tabellen und Spalten in einer Datenbank angewendet werden, um die Integrität und Konsistenz der Daten sicherzustellen.

The following constraints are commonly used in SQL:

| Constraint       | Funktions                                                                                 |
| :--------------- | :---------------------------------------------------------------------------------------- |
| **NOT NULL**     | Stellt sicher das keine NULL Werte in der Tabelle vorkommen                               |
| **UNIQUE**       | Stellt sicher das alle Werte verschieden (einzigartig) sind                               |
| **PRIMARY KEY**  | Kombinaton von NOT NULL und UNIQUE. Eindeutig Identifizierung der Zeilen in einer Tabelle |
| **FOREIGN KEY**  | Verhindert Aktionen die Relationen zwischen Tabellen zerstören würden                     |
| **CHECK**        | Stellt sicher das Werte in einer Spalte bestimmte Bedingungen erfüllen                    |
| **DEFAULT**      | Setzt einen default Wert in einer Spalte, falls kein anderer Wert spezifiziert wurde      |
| **CREATE INDEX** | Wird genutzt um den Datenfluss zu beschleunigen                                           |

### Beispiele
```sql
-- unbenannter Primary Key
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);
-- benannten Primary Key und Foreign Key definieren
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    CONSTRAINT pk_employees (employee_id)
    CONSTRAINT fk_employees_otherTable
	    FOREIGN KEY (department_id) 
	    REFERENCES departments(department_id)
);
-- später einen Primär Key hinzufügen
ALTER TABLE employees 
ADD PRIMARY KEY (employee_id);
-- CHECK constraint hinzufügen
ALTER TABLE employees
ADD CONSTRAINT check_salary 
	CHECK (salary > 1000);
```