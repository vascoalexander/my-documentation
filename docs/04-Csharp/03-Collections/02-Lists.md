---
title: "Lists"
description: ""
sidebar_position: 2
language: C#
tags: []
draft: false
---
A list is similar to an array, but the elements in a list can be inserted and removed dynamically. The C# generic 
collection `List<T>` class requires all elements be of the same type T.

```c
using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        // Erstellen einer Liste vom Typ string
        List<string> namen = new List<string>();

        // Hinzufügen von Elementen
        namen.Add("Anna");
        namen.Add("Bernd");
        namen.Add("Clara");

        // Einfügen eines Elements an einem bestimmten Index (Index 1)
        namen.Insert(1, "Dieter");

        // Überprüfen, ob ein bestimmter Wert existiert
        bool enthältClara = namen.Contains("Clara");
        Console.WriteLine($"Enthält Clara? {enthältClara}");

        // Entfernen eines Elements per Wert
        namen.Remove("Bernd");

        // Entfernen eines Elements per Index (erstes Element)
        namen.RemoveAt(0);

        // Iteration über die Liste
        Console.WriteLine("Aktuelle Liste:");
        foreach (string name in namen)
        {
            Console.WriteLine(name);
        }

        // Sortieren der Liste
        namen.Sort();
        Console.WriteLine("Sortierte Liste:");
        namen.ForEach(Console.WriteLine);

        // Liste umkehren
        namen.Reverse();
        Console.WriteLine("Umgekehrte Liste:");
        namen.ForEach(Console.WriteLine);

        // Zugriff auf ein Element per Index (Beispiel: erstes Element, falls vorhanden)
        if (namen.Count > 0)
        {
            Console.WriteLine($"Erstes Element: {namen[0]}");
        }

        // Suchen eines Elements (erstes Element, das mit 'C' beginnt)
        string nameMitC = namen.Find(name => name.StartsWith("C"));
        Console.WriteLine($"Erster Name, der mit 'C' beginnt: {nameMitC}");

        // Finden aller Elemente, die einer Bedingung entsprechen (z.B. Länge > 4)
        List<string> langeNamen = namen.FindAll(name => name.Length > 4);
        Console.WriteLine("Namen mit mehr als 4 Zeichen:");
        langeNamen.ForEach(Console.WriteLine);

        // Umwandeln der Liste in ein Array
        string[] namenArray = namen.ToArray();
        Console.WriteLine("Array-Ausgabe:");
        foreach (var n in namenArray)
        {
            Console.WriteLine(n);
        }

        // Leeren der Liste
        namen.Clear();
        Console.WriteLine($"Anzahl der Elemente nach Clear: {namen.Count}");
    }
}
```