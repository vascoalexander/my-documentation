---
created: 2025-02-24, 17:14
title: Numeric Types
description: ''
sidebar_position: 4
draft: false
---
### Ganzzahlige Datentypen

```csharp
byte myUnsignedByte = 8; // Size: 8 bits | Range: 0 to 255
sbyte mySignedByte = -8; // Size: 8 bits | Range: -128 to +127
```

```csharp
ushort myUnsignedShort = 16; // Size: 16 bits | Range: 0 to 65535
uint myUnsignedInt = 32; // Size: 32 bits | Range: 0 to 2^32-1
ulong myUnsignedLong = 64; // Size: 64 bits | Range: 0 to 2^64-1
```

```csharp
short mySignedShort = 16; // Size: 16 bits | Range: -32768 to +32767
int mySignedInt = 32; // Size: 32 bits | Range: -2^31 to +2^31-1
long mySignedLong = -64; // Size: 64 bits | Range: -2^63 to +2^63-1
```

### Gleitkommazahlen

```csharp title="Floating-Point Types"
float myFloat = 3.14F; // Size: 32 bits | Range: 7 digits of precision
double myDouble = 3.14D; // Size: 64 bits | Range: 15-16 digits of precision
decimal myDecimal = 3.14M; // Size: 128 bits | Range: 28-29 digits of precision
```

- **float** ist schnell, aber weniger genau.
- **double** ist der Standard für wissenschaftliche Berechnungen.
- **decimal** ist ideal für Geldbeträge, weil es präziser ist.

### Related Links
[**Docs Microsoft - Value Types**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
[**Microsoft Docs - Integral numeric Types**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)
[**Microsoft Docs - Floating Point numeric Types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)
