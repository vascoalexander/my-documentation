---
title: "Stacks"
description: ""
sidebar_position: 6
language: C#
tags: []
draft: false
---
A stack is a Last In, First Out (**LIFO**) collection of elements where the last element that goes into the stack will be the first element that comes out.  

Inserting an element onto a stack is called pushing. Deleting an element from a stack is called popping. 
Pushing and popping can be performed only at the top of the stack.  

Stacks can be used to create undo-redo functionalities, parsing expressions (infix to postfix/prefix conversion), and much more.
The C# generic collection `Stack<T>` class requires all elements to be of the same type T.

## Add (push) to Stack

```csharp
var stack = new Stack<int>();

// Hinzufügen von Elementen (Push)
stack.Push(10);
stack.Push(20);
stack.Push(30);
```

---
## Anzahl Elemente im Stack

```csharp
Console.WriteLine($"Anzahl der Elemente: {stack.Count}");
```

---
## Zugriff auf Elemente (peek, pop)

```csharp
// Zugriff auf das oberste Element ohne es zu entfernen (Peek)
Console.WriteLine($"Oberstes Element (Peek): {stack.Peek()}");

// Entfernen des obersten Elements (Pop)
Console.WriteLine($"Entferntes Element (Pop): {stack.Pop()}");
```

---
### TryPeek und TryPop

```csharp
if (stack.TryPeek(out int topElement))
{
	Console.WriteLine($"\nOberstes Element (TryPeek): {topElement}");
}

if (stack.TryPop(out int poppedElement))
{
	Console.WriteLine($"Entferntes Element (TryPop): {poppedElement}");
}
```

---
## Stack leeren

```csharp
stack.Clear();
Console.WriteLine($"\nAnzahl der Elemente nach Clear: {stack.Count}");
```