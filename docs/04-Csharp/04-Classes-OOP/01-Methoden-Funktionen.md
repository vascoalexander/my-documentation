---
created: 2025-03-02, 09:10
title: Methoden & Funktionen
description: ""
sidebar_position: 1
draft: false
---
## Named Parameters
Namentliche Parameter Zuweisung beim Function-Call. Die Reihenfolge der Parameter spielt in dem Fall keine Rolle mehr.

```csharp
static void Main()
{
	string nameInput = "MyName";
	int ageInput = "MyAge";
	string addressInput = "MyAddress";
	
	PrintDetails(age: ageInput, name: nameInput, address: addressInput)
}
static void PrintDetails(string name, int age, string address)
{
	Console.WriteLine($"Name: {name}; Age: {age}; Address: {address}")
}
```
---

## Out Parameters

```csharp
static void Main()
{
	var shoppingList = new List<string> {"Coffee", "Milk"};
	Console.Write("Enter an item to search: ");
	string search = Console.ReadLine();
	
	Console.WriteLine((FindInList(search, shoppingList, out int index)) ?  
	    $"Found {search} at index {index}" :   
	    $"{search} not Found");
}

static bool FindInList(string s, List<string> list, out int index)
{
	index = -1;
	for (int i = 0; i < list.Count; i++)
	{
		if (list[i].ToLower().Equals(s.ToLower()))
			index = i;
	}
	return index > -1;
}
```

---
## Ref Parameters
Assigns a Parameter by its Reference (reference to the location in memory)
```csharp
string name = "John";
Console.Write("Enter your new name: ");
string newName = Console.ReadLine();

if (ChangeName(ref name, newName))
	Console.WriteLine($"Your new name is {name}!");
else
	Console.WriteLine($"New name cannot be empty or null!");

static bool ChangeName(ref string name, string newName)
{
	if (!string.IsNullOrEmpty(newName))
	{
		name = newName;
		return true;
	}
	return false;
}
```

---
## Generische Parametern
Generics are not specific to a particular data type. Add `<T>` to: classes, methods, fields, etc.
Allows for code reusability for different data types.

```csharp
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

---
## Generischer Rückgabewert
Bei generischen Methoden definierst du einen Typparameter in der Methodensignatur. So kann der Aufrufer den Typ bestimmen, der zurückgegeben werden soll.

```csharp
public T GetValue<T>(object input) 
{ 
	(T)Convert.ChangeType(input, typeof(T)); 
}

// Aufruf
int result = GetValue<int>("123");   // result hat den Typ int
string text = GetValue<string>(456); // text hat den Typ string
```

---
## Dynamischer Rückgabewert
Mit dem Schlüsselwort `dynamic` wird der Rückgabetyp zur Laufzeit bestimmt, und der Compiler führt keine statische Typprüfung durch. **Flexibel, Weniger Typsicherheit.**

```csharp
public dynamic GetDynamicValue(object input)
{
    // Hier wird input einfach als dynamic zurückgegeben.
    return input;
}

// Aufruf; Der Typ von value wird zur Laufzeit bestimmt.
dynamic value = GetDynamicValue("Hallo Welt");
```