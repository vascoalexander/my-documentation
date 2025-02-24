---
created: 2025-02-23, 11:36
title: "Dictionaries"
description: ""
sidebar_position: 5
language: C#
tags: []
---
A dictionary is a collection of unique key/value pairs where a key is used to access the corresponding value. Dictionaries are used in database indexing, cache implementations, and so on.
The C# generic collection `Dictionary<K, V>` class requires all key/value pairs be of the same type K, V. Duplicate keys are not permitted to ensure that every key/value pair is unique.

**SortedList vs Dictonary**

- Verwenden Sie eine **SortedList**, wenn:
    - Sie häufig auf Elemente über den Index zugreifen müssen.
- Verwenden Sie ein **Dictionary**, wenn:
    - Sie hauptsächlich über den Schlüssel auf Elemente zugreifen.
    - Performance beim Einfügen und Entfernen wichtig ist.

### Dictionary Initialization

```c
var capitals = new Dictionary<string, string>
{
    ["USA"] = "Washington, D.C.",
    ["Japan"] = "Tokyo",
    ["France"] = "Paris"
};
```
---
### Dictionary aus Tuplen
bei einem named tuple wird Item1 oder Item2 entsprechend durch die Name ersetzt

```c
Dictionary<string, (string, string)> meinDict = new()
{
	{"key1", ("wert1", "wert2")},
	{"key2", ("wert1", "wert2")}
};
string elementOfDict = meinDict["key1"].Item1;
Console.WriteLine(elementOfDict);
```
---
```c
using System;
using System.Collections.Generic;

namespace DictionaryBeispiel
{
    class Program
    {
        static void Main(string[] args)
        {
            // Erstellen eines Dictionaries
            // Schlüssel: int, Wert: string
            Dictionary<int, string> dict = new Dictionary<int, string>();

            // Elemente hinzufügen:
            dict.Add(1, "Eins");
            dict.Add(2, "Zwei");
            // Alternativ kann man den Indexer verwenden (fügt hinzu oder aktualisiert vorhandene Keys):
            dict[3] = "Drei";

            // Zugriff und Überprüfung
            // Direkter Zugriff (Achtung: KeyNotFoundException wenn Key nicht existiert)
            Console.WriteLine("Element mit Key 1: " + dict[1]);

            // Überprüfen, ob ein Key existiert:
            if (dict.ContainsKey(2))
            {
                Console.WriteLine("Key 2 existiert im Dictionary.");
            }

            // Sicherer Zugriff mit TryGetValue:
            if (dict.TryGetValue(3, out string wert))
            {
                Console.WriteLine("Element mit Key 3: " + wert);
            }

            // Aktualisieren eines Elements
            dict[1] = "Eins Aktualisiert";
            Console.WriteLine("Aktualisiertes Element mit Key 1: " + dict[1]);

            // Entfernen eines Elements
            dict.Remove(2);
            Console.WriteLine("Nach dem Entfernen von Key 2, enthält dict Key 2: " + dict.ContainsKey(2));

            // Iterieren über das Dictionary
            // Über Key-Value-Paare:
            Console.WriteLine("\nAlle Elemente im Dictionary:");
            foreach (var kvp in dict)
            {
                Console.WriteLine($"Key: {kvp.Key}, Value: {kvp.Value}");
            }

            // Nur über die Schlüssel:
            Console.WriteLine("\nAlle Schlüssel:");
            foreach (var key in dict.Keys)
            {
                Console.WriteLine(key);
            }

            // Nur über die Werte:
            Console.WriteLine("\nAlle Werte:");
            foreach (var value in dict.Values)
            {
                Console.WriteLine(value);
            }

            // Anzahl der Elemente:
            Console.WriteLine($"\nAnzahl der Elemente im Dictionary: {dict.Count}");

            // Alle Elemente löschen
            dict.Clear();
            Console.WriteLine("Nach Clear, Anzahl der Elemente: " + dict.Count);

            // Erstellen eines Dictionaries mit Initialisierer
            var fruits = new Dictionary<string, int>
            {
                { "Apfel", 3 },
                { "Banane", 5 },
                { "Kirsche", 10 }
            };

            // Iterieren über das initialisierte Dictionary:
            Console.WriteLine("\nFrüchte im Initialisierer-Dictionary:");
            foreach (var item in fruits)
            {
                Console.WriteLine($"Frucht: {item.Key}, Anzahl: {item.Value}");
            }
        }
    }
}
```
