---
title: "Sorted Lists"
description: ""
sidebar_position: 4
language: C#
tags: []
draft: false
---
A sorted list is a collection of key/value pairs that are automatically sorted by key. A key can be used to access its corresponding value in the sorted list.
The C# generic collection `SortedList<K, V>` class requires all element key/value pairs to be of the same type K, V. 
Duplicate keys are not permitted, which ensures that every key/value pair is unique.

## Elemente hinzufügen

```c
var sortedList = new SortedList<string, int>();

// Hinzufügen von Schlüssel-Wert-Paaren
sortedList.Add("Clara", 30);
sortedList.Add("Anna", 25);

// Zugriff per Schlüssel
Console.WriteLine($"Anna ist {sortedList["Anna"]} Jahre alt.");
```

---
## Iteration mit KeyValuePair

```c
Console.WriteLine("\nSortedList Einträge:");
foreach (KeyValuePair<string, int> pair in sortedList)
{
	Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

---
## Remove Element
```c
sortedList.Remove("Bernd");
```

---
## ContainsKey
```c
if (sortedList.ContainsKey("Clara"))
{
	Console.WriteLine("\nClara ist in der SortedList vorhanden.");
}
```

---
## Wert aktualisieren
```c
sortedList["Anna"] = 26;
```

---
## Keys, Values
```c
IList<string> keys = sortedList.Keys;
IList<int> values = sortedList.Values;

Console.WriteLine("\nSchlüssel:");
foreach (var key in keys)
{
	Console.WriteLine(key);
}

Console.WriteLine("\nWerte:");
foreach (var value in values)
{
	Console.WriteLine(value);
}
```

---
## SortedList Count
```c
Console.WriteLine($"\nAnzahl der Elemente: {sortedList.Count}");
```

---
## Clear SortedList
```c
sortedList.Clear();
Console.WriteLine($"\nAnzahl der Elemente nach Clear: {sortedList.Count}");
```
