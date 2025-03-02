---
created: 2025-03-02, 09:10
title: Methoden & Funktionen
description: ""
sidebar_position: 1
draft: false
---
## Named Parameters
Namentliche Parameter Zuweisung beim Function-Call. Die Reihenfolge der Parameter spielt in dem Fall keine Rolle mehr.

```c
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

```c
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