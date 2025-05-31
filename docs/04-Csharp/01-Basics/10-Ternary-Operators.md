---
created: 2025-02-23, 10:25
title: 'Ternary Operators'
description: ""
sidebar_position: 10
language: C#
tags:
  - throw
---
### with throw

```csharp
string currentColor = farbe;
Console.WriteLine(
(currentColor == "Rot") ? "Anhalten" :
(currentColor == "Gelb" ? "Warten" :
(currentColor == "Grün") ? "Fahren" :

throw new InvalidOperationException("Ungültige Farbe")));
```

---
### with ReadLine

```csharp
static void PwAbfrage()
{
  Console.Write("Eingabe PW: ");
  Console.WriteLine(
  Console.ReadLine() == "1234"
      ? "Zugriff erlaubt"
      : "Zugriff verweigert");
}
```

---

### with formatted String

```csharp
int num = 5;
Console.WriteLine("Die Zahl ist {0} als 10", (num < 10) ? "kleiner" : "größer");
```