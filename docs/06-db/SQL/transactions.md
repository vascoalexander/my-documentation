---
sidebar_position: 8
description: ""
draft: false
title: "Transactions"
---
## Was sind Transactions?

Transactions sind atomare Operationseinheiten in einer Datenbank, die entweder ganz oder gar nicht ausgeführt werden (ACID-Prinzip).

## ACID-Prinzip

- **Atomicity (Atomarität):** Alles oder nichts wird ausgeführt.
- **Consistency (Konsistenz):** Daten bleiben in einem gültigen Zustand.
- **Isolation (Isolation):** Gleichzeitige Transaktionen beeinflussen sich nicht.
- **Durability (Dauerhaftigkeit):** Nach Bestätigung bleiben Änderungen erhalten.

## SQL Transactions

### MySQL / PostgreSQL

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Änderungen bestätigen
```

Rollback bei Fehler:

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- Fehler tritt auf
ROLLBACK; -- Änderungen verwerfen
```

### SQLite

```sql
BEGIN TRANSACTION;
INSERT INTO orders (customer_id, total) VALUES (1, 50);
SAVEPOINT sp1;
UPDATE inventory SET stock = stock - 1 WHERE product_id = 10;
ROLLBACK TO sp1; -- Rückgängig machen bis zum Savepoint
COMMIT;
```

### SQL Server

```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
IF @@ERROR <> 0
    ROLLBACK TRANSACTION;
ELSE
    COMMIT TRANSACTION;
```

## Transactions in Code

### Python mit SQLite

```python
import sqlite3
conn = sqlite3.connect('database.db')
cursor = conn.cursor()
try:
    cursor.execute("BEGIN TRANSACTION;")
    cursor.execute("UPDATE accounts SET balance = balance - 100 WHERE id = 1;")
    cursor.execute("UPDATE accounts SET balance = balance + 100 WHERE id = 2;")
    conn.commit()  # Änderungen bestätigen
except Exception:
    conn.rollback()  # Änderungen zurücksetzen
finally:
    conn.close()
```

### C# mit Entity Framework

```c
using (var context = new MyDbContext())
{
    using (var transaction = context.Database.BeginTransaction())
    {
        try
        {
            var acc1 = context.Accounts.Find(1);
            var acc2 = context.Accounts.Find(2);
            acc1.Balance -= 100;
            acc2.Balance += 100;
            context.SaveChanges();
            transaction.Commit();
        }
        catch
        {
            transaction.Rollback();
        }
    }
}
```
## Isolation Levels

### SQL Isolation Levels (von niedrig zu hoch)

1. **Read Uncommitted** – Kann nicht bestätigte Änderungen lesen
2. **Read Committed** – Liest nur bestätigte Daten
3. **Repeatable Read** – Gleiche Abfrage liefert immer dieselben Werte
4. **Serializable** – Maximale Isolation, vollständige Sperren

**Setzen eines Isolation Levels:**

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

## Best Practices

- Verwende **transaktionssichere Tabellen** (z. B. InnoDB in MySQL)  
- **Nutze explizite Transaktionen**, wenn mehrere Operationen zusammengehören  
- **Behandle Fehler** und implementiere Rollbacks  
- Setze **passende Isolation Levels** für Performance und Datenintegrität  
- **Schließe Transaktionen schnell ab**, um Sperren zu minimieren  