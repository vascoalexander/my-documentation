---
description: ""
sidebar_position: 5
toc_max_heading_level: 4
title: "C#"
---
[**C# Quick-Reference [Github]**](https://github.com/andredarcie/csharp-quick-reference-guide?tab=readme-ov-file)

## **Types**

[**Microsoft Language Specification - Types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/types)  

The following table lists the C# built-in [value](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types) types:

|C# type keyword|.NET type|
|---|---|
|[`bool`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool)|[System.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)|
|[`byte`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.Byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte)|
|[`sbyte`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.SByte](https://learn.microsoft.com/en-us/dotnet/api/system.sbyte)|
|[`char`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/char)|[System.Char](https://learn.microsoft.com/en-us/dotnet/api/system.char)|
|[`decimal`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)|[System.Decimal](https://learn.microsoft.com/en-us/dotnet/api/system.decimal)|
|[`double`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)|[System.Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)|
|[`float`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)|[System.Single](https://learn.microsoft.com/en-us/dotnet/api/system.single)|
|[`int`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)|
|[`uint`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.UInt32](https://learn.microsoft.com/en-us/dotnet/api/system.uint32)|
|[`nint`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.IntPtr](https://learn.microsoft.com/en-us/dotnet/api/system.intptr)|
|[`nuint`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.UIntPtr](https://learn.microsoft.com/en-us/dotnet/api/system.uintptr)|
|[`long`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64)|
|[`ulong`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.UInt64](https://learn.microsoft.com/en-us/dotnet/api/system.uint64)|
|[`short`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.Int16](https://learn.microsoft.com/en-us/dotnet/api/system.int16)|
|[`ushort`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)|[System.UInt16](https://learn.microsoft.com/en-us/dotnet/api/system.uint16)|

The following table lists the C# built-in [reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types) types:

|C# type keyword|.NET type|
|---|---|
|[`object`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type)|[System.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)|
|[`string`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type)|[System.String](https://learn.microsoft.com/en-us/dotnet/api/system.string)|
|[`dynamic`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-dynamic-type)|[System.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)|

### Type Conversion

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

### Typtestoperatoren

#### `is` Operator
Prüft, ob ein Objekt zu einem bestimmten Typ kompatibel ist.
```c
if (obj is string)
{
    Console.WriteLine("obj ist ein String.");
}
```
#### `as` Operator
Versucht, ein Objekt in einen bestimmten Typ zu konvertieren, und gibt dabei null zurück, falls die Konvertierung nicht möglich ist.
```c
SomeType x = y as SomeType;
if (x != null)
{
  // Do something
}
```

### Typecasting
**Implizite Konvertierung**
Eine Umwandlung, die automatisch erfolgt, weil sie sicher ist (d. h. es geht keine Information verloren).
```c
int zahl = 42;
double d = zahl;  // int -> double: implizite Umwandlung (widening conversion)
```
**Explizite Konvertierung**
Eine Umwandlung, bei der der Programmierer ausdrücklich angibt, dass ein Typ in einen anderen umgewandelt werden soll.
Dies ist oft erforderlich, wenn Daten verloren gehen können oder die Konvertierung nicht automatisch durchgeführt wird (narrowing conversion).
```c
double pi = 3.14159;
int ganzZahl = (int)pi;  // double -> int: explizite Umwandlung, Nachkommabereich geht verloren
```
[Microsoft C# Spezifikationen - Explizite Konvertierung](https://learn.microsoft.com/de-de/dotnet/csharp/language-reference/language-specification/conversions#103-explicit-conversions)

## **Operatoren**

[**Microsoft Language Specification - Operators and Expressions**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)  

### Arithmetische Operatoren
```c
x + y   // Adds two operands
x - y   // Subtracts second operand from the first
x * y   // Multiplies both operands
x / y   // Divides numerator by de-numerator
x % y   // Modulus Operator and remainder of after an integer division
x++     // Increment operator increases integer value by one
x--     // Decrement operator decreases integer value by one
```
### Vergleichsoperatoren
```c
(x == y)   // Checks if the values of two operands are equal
(x != y)   // Checks if the values of two operands are equal or not
(x > y)    // Checks if the value of left operand is greater than the value of right operand
(x < y)    // Checks if the value of left operand is less than the value of right operand
(x >= y)   // Checks if the value of left operand is greater than or equal to the value of right operand
(x <= y)   // Checks if the value of left operand is less than or equal to the value of right operand
```
### Logische Operatoren
```c
(x && y)   // Logical AND operator
(x || y)   // Logical OR Operator
!(x || y)  // Logical NOT Operator
```

## **Kontrollstrukturen**

### if-Statements

### switch case

### Loops

## **Datenstrukturen**

### Arrays

### Lists

### Linked Lists

### Dictionary

### Structures

### Enums

## **Classes & Methods**

