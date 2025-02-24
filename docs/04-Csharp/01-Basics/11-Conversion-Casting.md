---
created: 2025-02-23, 10:25
title: 'Conversion & Casting'
description: ""
sidebar_position: 11
language: C#
tags: []
---

## Type Conversion

```c
Convert.ToBoolean(x);    // Converts a type to a Boolean value
Convert.ToByte(x);       // Converts a type to a byte
Convert.ToChar(x);       // Converts a type to a single Unicode character
Convert.ToDateTime(x);   // Converts a type (integer or string type) to date-time structures
Convert.ToDecimal(x);    // Converts a floating point or integer type to a decimal type
Convert.ToDouble(x);     // Converts a type to a double type
Convert.ToInt16(x);      // Converts a type to a 16-bit integer
Convert.ToInt32(x);      // Converts a type to a 32-bit integer
Convert.ToInt64(x);      // Converts a type to a 64-bit integer
Convert.ToSbyte(x);      // Converts a type to a signed byte type
Convert.ToSingle(x);     // Converts a type to a small floating point number
Convert.ToString(x);     // Converts a type to a string
Convert.ToType(x);       // Converts a type to a specified type
Convert.ToUInt16(x);     // Converts a type to an unsigned int type
Convert.ToUInt32(x);     // Converts a type to an unsigned long type
Convert.ToUInt64(x);     // Converts a type to an unsigned big integer
```

## Type Casting
**Implizite Konvertierung (automatisch)**  
Eine Umwandlung, die automatisch erfolgt, weil sie sicher ist (d. h. es geht keine Information verloren).

> **converting a smaller type to a larger type size**  
> char -> int -> long -> float -> double

```c
int zahl = 42;
double d = zahl;  
// int -> double: implizite Umwandlung (widening conversion)
```

**Explizite Konvertierung (manuell)**  
Eine Umwandlung, bei der der Programmierer ausdrücklich angibt, dass ein Typ in einen anderen umgewandelt werden soll.
Dies ist oft erforderlich, wenn Daten verloren gehen können oder die Konvertierung nicht automatisch durchgeführt wird (narrowing conversion).

> **converting a larger type to a smaller size type:**  
> double -> float -> long -> int -> char

```c
double pi = 3.14159;
int ganzZahl = (int)pi;  
// double -> int: explizite Umwandlung, Nachkommabereich geht verloren
```

## Type Testoperatoren

### `is` Operator
Prüft, ob ein Objekt zu einem bestimmten Typ kompatibel ist.

```c
if (obj is string)
{
    Console.WriteLine("obj ist ein String.");
}
```

### `as` Operator
Versucht, ein Objekt in einen bestimmten Typ zu konvertieren, und gibt dabei null zurück, falls die Konvertierung nicht möglich ist.

```c
SomeType x = y as SomeType;
if (x != null)
{
  // Do something
}
```

## Related Links
[**Microsoft Docs - Casting and Type Conversions**](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions)   
[Microsoft C# Spezifikationen - Explizite Konvertierung](https://learn.microsoft.com/de-de/dotnet/csharp/language-reference/language-specification/conversions#103-explicit-conversions) 