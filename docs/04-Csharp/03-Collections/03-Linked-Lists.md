---
title: "Linked Lists"
description: ""
sidebar_position: 3
language: C#
tags: []
draft: false
---
Eine Linked List ist eine lineare Datensammlung, bei der die Elemente (Knoten) nicht zusammenhängend im Speicher abgelegt sind. 
Jeder Knoten enthält einen Wert und einen Verweis auf den nächsten Knoten in der Liste. Dies unterscheidet sie von Arrays, 
bei denen die Elemente direkt aufeinander folgen.  

**Vorteile**
- **Flexibilität bei der Größe:** Linked Lists können dynamisch wachsen oder schrumpfen, da Knoten bei Bedarf hinzugefügt oder 
entfernt werden können.
- **Effizientes Einfügen und Entfernen:** Das Einfügen oder Entfernen von Elementen an beliebiger Stelle ist in der Regel schneller als bei Arrays, da keine Elemente verschoben werden müssen.  

**Nachteile**  
- **Zugriffszeit:** Der Zugriff auf ein Element an einer bestimmten Position kann länger dauern als bei Arrays, da die Liste vom Anfang bis zum gewünschten Element durchlaufen werden muss.
- **Zusätzlicher Speicherbedarf:** Jeder Knoten benötigt zusätzlichen Speicher für den Verweis auf den nächsten Knoten.

```c
using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        // Erstellen einer LinkedList vom Typ string
        LinkedList<string> linkedList = new LinkedList<string>();

        // Hinzufügen von Elementen
        linkedList.AddLast("Anna");       // Element am Ende hinzufügen
        linkedList.AddLast("Bernd");
        linkedList.AddFirst("Clara");     // Element am Anfang hinzufügen

        // Ausgabe der initialen LinkedList
        Console.WriteLine("Initiale LinkedList:");
        foreach (string item in linkedList)
        {
            Console.WriteLine(item);
        }

        // Suchen eines Knotens mit einem bestimmten Wert
        LinkedListNode<string> nodeBernd = linkedList.Find("Bernd");
        if (nodeBernd != null)
        {
            // Hinzufügen eines Elements nach einem bekannten Knoten
            linkedList.AddAfter(nodeBernd, "Dieter");

            // Hinzufügen eines Elements vor einem bekannten Knoten
            linkedList.AddBefore(nodeBernd, "Eva");
        }

        // Entfernen eines Elements per Wert
        linkedList.Remove("Clara");

        // Entfernen des ersten und letzten Knotens
        linkedList.RemoveFirst();
        linkedList.RemoveLast();

        // Ausgabe der LinkedList nach Änderungen
        Console.WriteLine("\nLinkedList nach Änderungen:");
        foreach (string item in linkedList)
        {
            Console.WriteLine(item);
        }

        // Ausgabe der Anzahl der Elemente
        Console.WriteLine($"\nAnzahl der Elemente: {linkedList.Count}");

        // Iteration über die LinkedList mittels Knotenreferenzen
        Console.WriteLine("\nIteration mit LinkedListNode<T>:");
        for (LinkedListNode<string> node = linkedList.First; node != null; node = node.Next)
        {
            Console.WriteLine(node.Value);
        }
    }
}
```
