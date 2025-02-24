---
title: "Queues"
description: ""
sidebar_position: 7
language: C#
tags: []
draft: false
---
A queue is a First In, First Out (FIFO) collection of elements where the first element that goes into a queue is also the first element that comes out.  

Inserting an element into a queue is referred to as Enqueue. Deleting an element from a queue is referred to as Dequeue. 
Queues are used whenever we need to manage objects in order starting with the first one in.  

The C# generic collection `Queue<T>` class requires that all elements be of the same type T.

```c
using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        // Erstellen einer Queue vom Typ int
        Queue<int> queue = new Queue<int>();

        // Hinzufügen von Elementen (Enqueue)
        queue.Enqueue(10);
        queue.Enqueue(20);
        queue.Enqueue(30);

        // Ausgabe der Anzahl der Elemente
        Console.WriteLine($"Anzahl der Elemente: {queue.Count}");

        // Zugriff auf das vorderste Element ohne es zu entfernen (Peek)
        Console.WriteLine($"Vorderstes Element (Peek): {queue.Peek()}");

        // Entfernen des vordersten Elements (Dequeue)
        Console.WriteLine($"Entferntes Element (Dequeue): {queue.Dequeue()}");

        // Ausgabe des aktuellen Queue-Inhalts
        Console.WriteLine("\nQueue-Inhalt nach Dequeue:");
        foreach (int item in queue)
        {
            Console.WriteLine(item);
        }

        // Verwenden von TryPeek und TryDequeue
        if (queue.TryPeek(out int frontElement))
        {
            Console.WriteLine($"\nVorderstes Element (TryPeek): {frontElement}");
        }

        if (queue.TryDequeue(out int dequeuedElement))
        {
            Console.WriteLine($"Entferntes Element (TryDequeue): {dequeuedElement}");
        }

        // Queue leeren
        queue.Clear();
        Console.WriteLine($"\nAnzahl der Elemente nach Clear: {queue.Count}");
    }
}
```