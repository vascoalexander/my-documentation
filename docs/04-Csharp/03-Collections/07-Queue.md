---
title: "Queues"
description: ""
sidebar_position: 7
language: C#
tags: []
draft: false
---
A queue is a First In, First Out (**FIFO**) collection of elements where the first element that goes into a queue is also the first element that comes out.  

Inserting an element into a queue is referred to as Enqueue. Deleting an element from a queue is referred to as Dequeue. 
Queues are used whenever we need to manage objects in order starting with the first one in.  

The C# generic collection `Queue<T>` class requires that all elements be of the same type T.

## Elemente hinzufügen

```csharp
Queue<int> queue = new Queue<int>();

// Hinzufügen von Elementen (Enqueue)
queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);
```

---
## Anzahl von Elementen

```csharp
Console.WriteLine($"Anzahl der Elemente: {queue.Count}");
```

---
## Zugriff mit Peek

```csharp
// Zugriff auf das vorderste Element ohne es zu entfernen (Peek)
Console.WriteLine($"Vorderstes Element (Peek): {queue.Peek()}");
```

---
## Element entfernen mit Dequeue

```csharp
// Entfernen des vordersten Elements (Dequeue)
Console.WriteLine($"Entferntes Element (Dequeue): {queue.Dequeue()}");
```

---
## TryPeek und TryDequeue

```csharp
if (queue.TryPeek(out int frontElement))
{
	Console.WriteLine($"\nVorderstes Element (TryPeek): {frontElement}");
}

if (queue.TryDequeue(out int dequeuedElement))
{
	Console.WriteLine($"Entferntes Element (TryDequeue): {dequeuedElement}");
}
```

---
## Queue leeren

```csharp
queue.Clear();
Console.WriteLine($"\nAnzahl der Elemente nach Clear: {queue.Count}");
```