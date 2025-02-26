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

## Add Items

```c
var linkedList = new LinkedList<string>();

linkedList.AddFirst("Clara");     // Element am Anfang hinzufügen
linkedList.AddLast("Anna");       // Element am Ende hinzufügen
```

## Knoten mit bestimmten Wert suchen

```c
LinkedListNode<string> nodeBernd = linkedList.Find("Bernd");
if (nodeBernd != null)
{
	// Hinzufügen eines Elements nach einem bekannten Knoten
	linkedList.AddAfter(nodeBernd, "Dieter");

	// Hinzufügen eines Elements vor einem bekannten Knoten
	linkedList.AddBefore(nodeBernd, "Eva");
}
```

## Elemente entfernen

```c
// Entfernen eines Elements per Wert
linkedList.Remove("Clara");

// Entfernen des ersten und letzten Knotens
linkedList.RemoveFirst();
linkedList.RemoveLast();
```

## Anzahl der Elemente

```c
Console.WriteLine($"\nAnzahl der Elemente: {linkedList.Count}");
```

## Iteration mittels Knotenreferenz

```c
Console.WriteLine("\nIteration mit LinkedListNode<T>:");
for (LinkedListNode<string> node = linkedList.First; node != null; node = node.Next)
{
	Console.WriteLine(node.Value);
}
```
