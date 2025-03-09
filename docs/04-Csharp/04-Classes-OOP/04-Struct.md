---
created: 2025-02-23, 11:33
title: "Struct"
description: ""
language: C#
sidebar_position: 4
tags: []
---
Ein struct ist ein Werttyp in C#, der ähnlich wie eine Klasse (class) funktioniert, aber in vielen Fällen effizienter ist.

**Wann struct statt class?**

- Klein & einfach → struct
- Mutable & komplex → class
- Vererbung notwendig? → class
- Häufige Änderungen der Daten? → class
- Performance-kritisch? → struct

## 2D Koordinaten

```c
// Punkt speichert zwei Werte direkt im Stack → schneller als eine Klasse.
// Strukturen sind perfekt für einfache Datencontainer.

struct Punkt
{
	public int X;
	public int Y;

	public Punkt(int x, int y)
	{
		X = x;
		Y = y;
	}

	public void Anzeigen()
	{
		Console.WriteLine($"Punkt: ({X}, {Y})");
	}
}

class Program
{
	static void Main()
	{
		Punkt p1 = new Punkt(10, 20);
		p1.Anzeigen(); // Ausgabe: Punkt: (10, 20)
	}
}
```
---
## Farbe (mit Auto-Properties)

```c
// Farbe ist ein idealer Kandidat für struct, da es nur Daten speichert.
// Auto-Properties ({ get; }) machen es unveränderlich (immutable), was in vielen Szenarien nützlich ist.

struct Farbe
{
	public byte Rot { get; }
	public byte Grün { get; }
	public byte Blau { get; }

	public Farbe(byte rot, byte grün, byte blau)
	{
		Rot = rot;
		Grün = grün;
		Blau = blau;
	}

	public override string ToString()
	{
		return $"RGB({Rot}, {Grün}, {Blau})";
	}
}

class Program
{
	static void Main()
	{
		Farbe rot = new Farbe(255, 0, 0);
		Console.WriteLine(rot); // Ausgabe: RGB(255, 0, 0)
	}
}
```

## Related Links
[**Microsoft Docs - Structure Types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)  