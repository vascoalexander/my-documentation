---
created: 2025-02-23, 20:10
title: 'Tuples'
description: ""
sidebar_position: 5
language: C#
tags: []
---
Available in C# 7.0 and later, the tuples feature provides concise syntax to group multiple data elements in a lightweight data structure.

### Deklaration und Initialisierung

```csharp
(double, int) t1 = (4.5, 3);
Console.WriteLine($"Tuple with elements {t1.Item1} and {t1.Item2}.");

// Named Tuples
(double num1, int num2) t2 = (4.5, 3);  
Console.WriteLine($"First Number: {t2.num1}\nSecond Number: {t2.num2}");
```
---
### List with named Tuples

```csharp
var list = new List<(int num, string name)>();
list.Add((1, "str1"));
list.Add((3, "str2"));

foreach ((int num, string name) in list)
{
    Console.WriteLine(name + ": " + num);    
}
```

### Related Links
[**Microsoft Docs - Tuple types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)