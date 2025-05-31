---
title: Lists
description: ""
sidebar_position: 2
language: C#
tags:
  - contains
  - ForEach
  - FindAll
draft: false
---
A list is similar to an array, but the elements in a list can be inserted and removed dynamically. The C# generic 
collection `List<T>` class requires all elements be of the same type T.

## Add Items

```csharp
var namen = new List<string>();
// Hinzufügen von Elementen
namen.Add("Anna");
namen.Add("Bernd");
// Einfügen eines Elements an einem bestimmten Index (Index 1)
namen.Insert(1, "Dieter");
```

---
## List Contains

```csharp
bool enthältClara = namen.Contains("Clara");
Console.WriteLine($"Enthält Clara? {enthältClara}");
```

---
## List Remove, RemoveAt

```csharp
// per Wert
namen.Remove("Bernd");
// per Index
namen.RemoveAt(0);
```

---
## Liste Sortieren

```csharp
namen.Sort();
Console.WriteLine("Sortierte Liste:");
namen.ForEach(Console.WriteLine);
```

---
## List Reverse

```csharp
namen.Reverse();
Console.WriteLine("Umgekehrte Liste:");
namen.ForEach(Console.WriteLine);
```

---
## Ein Element suchen (erster Treffer)

```csharp
string nameMitC = namen.Find(name => name.StartsWith("C"));
Console.WriteLine($"Erster Name, der mit 'C' beginnt: {nameMitC}");
```

---
## Suchen Aller Elemente die ...

```csharp
List<string> langeNamen = namen.FindAll(name => name.Length > 4);
Console.WriteLine("Namen mit mehr als 4 Zeichen:");
langeNamen.ForEach(Console.WriteLine);
```

---
## List to Array

```csharp
string[] namenArray = namen.ToArray();
Console.WriteLine("Array-Ausgabe:");
foreach (var n in namenArray)
{
	Console.WriteLine(n);
}
```

---
## Liste leeren

```csharp
namen.Clear();
Console.WriteLine($"Anzahl der Elemente nach Clear: {namen.Count}");
```

---
## List of Objects

```csharp
var players = new List<Player>();

var player1 = new Player("Chad");
var player2 = new Player("Steve");
var player3 = new Player("Karen");

players.Add(player1);
players.Add(player2);
players.Add(player3);

foreach (Player player in players)
{
	Console.WriteLine(player.username);
}
```

---
## List of Anonymous Objects

```csharp
var players = new List<Player>();

players.Add(new Player("Chad"));
players.Add(new Player("Steve"));
players.Add(new Player("Karen"));
```

## Related Links