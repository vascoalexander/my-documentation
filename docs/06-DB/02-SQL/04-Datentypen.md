---
sidebar_position: 4
description: ""
draft: false
title: "Datentypen"
---

### SQL Server

```sql
-- Numerische Datentypen:
DECLARE @intExample INT = 123;                              -- Ganze Zahlen (4 Byte)
DECLARE @bigIntExample BIGINT = 1234567890123;              -- Große ganze Zahlen (8 Byte)
DECLARE @smallIntExample SMALLINT = 12345;                  -- Kleinere ganze Zahlen (2 Byte)
DECLARE @tinyIntExample TINYINT = 255;                      -- Sehr kleine ganze Zahlen (1 Byte)
DECLARE @decimalExample DECIMAL(10,2) = 12345.67;           -- Exakte Werte, (Präzision, Skala)
DECLARE @floatExample FLOAT = 123.456;                      -- Gleitkommazahlen (approx.)

-- Geldwerte:
DECLARE @moneyExample MONEY = 12345.67;                     -- Währungswerte
DECLARE @smallMoneyExample SMALLMONEY = 1234.56;            -- Kleinere Geldwerte

-- Zeichenketten:
DECLARE @charExample CHAR(10) = 'Hallo';                    -- Feste Länge
DECLARE @varCharExample VARCHAR(50) = 'Hallo Welt';         -- Variable Länge
DECLARE @nVarCharExample NVARCHAR(50) = N'Hallo Unicode';   -- Unicode, variable Länge
DECLARE @textExample VARCHAR(MAX) = 'Langer Text...';       -- Für große Texte (statt TEXT)

-- Datum und Zeit:
DECLARE @dateExample DATE = '2025-02-13';                   -- Nur Datum
DECLARE @timeExample TIME = '14:30:00';                     -- Nur Zeit
DECLARE @dateTimeExample DATETIME = '2025-02-13 14:30:00';  -- Datum + Zeit

-- Boolean:
DECLARE @bitExample BIT = 1;                                -- 0 oder 1 (false/true)

-- Binäre Datentypen:
DECLARE @binaryExample BINARY(4) = 0x12345678;              -- Feste Binärlänge
DECLARE @varBinaryExample VARBINARY(50) = 0x1234567890;     -- Variable Binärlänge
DECLARE @varBinaryMaxExample VARBINARY(MAX) = 0xABCDEF;     -- Große Binärdaten

-- Sonstige:
DECLARE @guidExample UNIQUEIDENTIFIER = NEWID();            -- Globally Unique Identifier (GUID)
```