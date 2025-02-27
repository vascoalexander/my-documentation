---
created: 2025-02-27, 19:22
title: Generics
description: ""
sidebar_position: 12
draft: false
---
Generics are not specific to a particular data type. Add `<T>` to: classes, methods, fields, etc.
Allows for code reusability for different data types.

```c
int[] intArray = { 1, 2, 3 };
double[] doubleArray = { 1.0, 2.0, 3.0 };
string[] stringArray = { "1", "2", "3" };

DisplayElements(inArray);
DisplayElements(doubleArray);
DisplayElements(stringArray);

public static void DisplayElements<T>(T[] array)
{
	foreach (T item in array)
	{
		Console.WriteLine(item + " ");
	}
}
```