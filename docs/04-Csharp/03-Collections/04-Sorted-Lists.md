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

```c
using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        // Erstellen einer SortedList (sortiert nach Schlüsseln)
        SortedList<string, int> sortedList = new SortedList<string, int>();

        // Hinzufügen von Schlüssel-Wert-Paaren
        sortedList.Add("Clara", 30);
        sortedList.Add("Anna", 25);
        sortedList.Add("Bernd", 35);

        // Zugriff auf ein Element per Schlüssel
        Console.WriteLine($"Anna ist {sortedList["Anna"]} Jahre alt.");

        // Iteration über die SortedList (automatisch sortiert nach Schlüssel)
        Console.WriteLine("\nSortedList Einträge:");
        foreach (KeyValuePair<string, int> pair in sortedList)
        {
            Console.WriteLine($"{pair.Key}: {pair.Value}");
        }

        // Entfernen eines Elements per Schlüssel
        sortedList.Remove("Bernd");

        // Überprüfen, ob ein Schlüssel existiert
        if (sortedList.ContainsKey("Clara"))
        {
            Console.WriteLine("\nClara ist in der SortedList vorhanden.");
        }

        // Aktualisieren eines Wertes
        sortedList["Anna"] = 26;

        // Zugriff auf Schlüssel und Werte als separate Sammlungen
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

        // Anzahl der Elemente in der SortedList
        Console.WriteLine($"\nAnzahl der Elemente: {sortedList.Count}");

        // Löschen aller Einträge
        sortedList.Clear();
        Console.WriteLine($"\nAnzahl der Elemente nach Clear: {sortedList.Count}");
    }
}
```