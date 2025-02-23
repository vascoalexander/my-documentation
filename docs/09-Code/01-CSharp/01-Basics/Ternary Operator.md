---
created: 2025-02-23, 10:25
language: C#
description: ""
tags:
  - throw
---
### with throw

```c
string currentColor = farbe;  
Console.WriteLine(  
    (currentColor == "Rot") ? "Anhalten" :   
    (currentColor == "Gelb" ? "Warten" : 
    (currentColor == "Grün") ? "Fahren" :
    throw new InvalidOperationException("Ungültige Farbe")));
```

### with ReadLine

```c
static void PwAbfrage()
{
 Console.Write("Eingabe PW: ");
 Console.WriteLine(
  Console.ReadLine() == "1234"
  ? "Zugriff erlaubt"
  : "Zugriff verweigert");
}
```