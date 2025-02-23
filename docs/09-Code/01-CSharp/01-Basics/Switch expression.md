---
created: 2025-02-23, 10:35
language: C#
description: ""
tags:
  - property
  - tuple
  - switch
  - when
---
### Switch Expression

```c
string currentColor = Console.ReadLine();
string action = currentColor switch
{
    "Rot" => "Anhalten",
    "Gelb" => "Warten",
    "Grün" => "Fahren",
    _ => throw new InvalidOperationException("Ungültige Farbe")
};
Console.WriteLine(action);
```

### Property Pattern
Eigenschaften von Objekten direkt im `case`-Ausdruck überprüfen

```c
public class Punkt
{
    public int X { get; set; }
    public int Y { get; set; }
}

Punkt p = new Punkt { X = 1, Y = 2 };
string beschreibung = p switch
{
    { X: 0, Y: 0 } => "Ursprung",
    { X: 0, Y: var y } => $"Y-Achse, Y={y}",
    { X: var x, Y: 0 } => $"X-Achse, X={x}",
    { X: var x, Y: var y } => $"Punkt ({x}, {y})"
};
Console.WriteLine(beschreibung); // Ausgabe: Punkt (1, 2)
```

### Tuple Pattern
mehrere Werte gleichzeitig in einem Tupel überprüfen

```c
(int x, int y) = (1, 2);
string position = (x, y) switch
{
    (0, 0) => "Ursprung",
    (0, _) => "Y-Achse",
    (_, 0) => "X-Achse",
    (_, _) => "Andere"
};
Console.WriteLine(position); // Ausgabe: Andere
```

### When-Klausel
zusätzliche Bedingungen mit `when` hinzufügen

```c
int zahl = 5;
string beschreibung = zahl switch
{
    var n when n > 0 && n < 10 => "Einstellige positive Zahl",
    var n when n >= 10 && n < 100 => "Zweistellige positive Zahl",
    _ => "Andere Zahl"
};
Console.WriteLine(beschreibung); // Ausgabe: Einstellige positive Zahl
```