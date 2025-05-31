---
created: 2025-02-23, 11:45
language: C#
title: "Arrays"
description: ""
sidebar_position: 1
tags:
  - sort
  - search
  - reverse
  - ForEach
  - LINQ
  - jaggedArray
---
An array is a data structure that contains a number of variables that are accessed through computed indices. 
The variables contained in an array, also called the elements of the array, are all of the same type, and this type is called the element type of the array.

Array types are reference types, and the declaration of an array variable simply sets aside space for a reference to an array instance. 
Actual array instances are created dynamically at run-time using the new operator. The new operation specifies the length of the new array instance, 
which is then fixed for the lifetime of the instance. The indices of the elements of an array range from 0 to Length - 1. 
The new operator automatically initializes the elements of an array to their default value, which, 
for example, is zero for all numeric types and null for all reference types.

## Jagged Array Deklaration

```csharp
int[][] anotherJaggedArray = new int[][]
{  
	new int[] {1,8,2,7,9},  
	new int[] {2,4,6},  
	new int[] {33,42}  
};  
  
int x = anotherJaggedArray[2][1];  
Console.WriteLine(x); // Outputs => 42
```
---

## Looping over Jagged Array

```csharp
for (int i = 0; i <= array.Length - 1; i++)
{
    for (int j = 0; j <= array[i].Length - 1; j++)
    {
        Console.Write($"{array[i][j]} ");
    }
    Console.WriteLine();
}
```

---
## LINQ Array Methods
The Array class implements the IEnumerable interface, so you can LINQ extension methods such as Max(), Min(), Sum(), Average() and many others.

```csharp
public static void Main(string[] args)
{
	int[] integersArray = new int[5]{80, 20, 35, 18, 9};

	Console.WriteLine(integersArray.Max());
	Console.WriteLine(integersArray.Min());
	Console.WriteLine(integersArray.Sum());
	Console.WriteLine(integersArray.Average());
}
```

---
## Sort, Reverse or Search (with ForEach())

```csharp
int[] integersArray = {20, 9, 16, 50, 3};

// SORT
Array.Sort(integersArray);  
Array.ForEach<int>(integersArray, n => Console.WriteLine(n));

// REVERSE
Array.Reverse(integersArray);  
Array.ForEach<int>(integersArray, n => Console.WriteLine(n));

// SEARCH
Console.WriteLine(Array.BinarySearch(integersArray, 9));
```

---
## Slicing eines Arrays

- **Index**: Mit `^` kannst Du vom Ende her indexieren (z. B. `^1` für das letzte Element).
- **Range**: Mit `..` definierst Du einen Bereich. Dabei ist das Ende exklusiv.

```csharp
int[] zahlen = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Teilausschnitt von Index 2 bis 4 (5 ist exklusive)
int[] slice1 = zahlen[2..5]; // Enthält {2, 3, 4}

// Teilausschnitt vom Index 5 bis zum Ende
int[] slice2 = zahlen[5..];  // Enthält {5, 6, 7, 8, 9}

// Letztes Element des Arrays
int letztesElement = zahlen[^1];  // ^1 bedeutet "1. von hinten", also 9

// Teilausschnitt der letzten 3 Elemente
int[] slice3 = zahlen[^3..]; // Enthält {7, 8, 9}
```

---
## Duplikate entfernen

```csharp
Console.Write("Wörter eingeben: ");  
string[] text = Console.ReadLine().Split(" ");

string[] textOhneDuplikate = text.Distinct().ToArray();
```

---
## Vorkommen zählen

```csharp
static int CountOccurrences(int[,] array, int target)  
{  
    int count = 0;  
    foreach (int value in array)  
    {        
	    if (value == target)  
            count++;  
    }    
    return count;  
}
```

---
## Print 2D Array to console

```csharp
static void PrintArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
            Console.Write($"{array[i, j]} ");
        Console.WriteLine();
    }
}
```

---
## Fill 2D Array with Random Numbers

```csharp
static void FillArray(int[,] array, int rows, int cols)
{
    Random rnd = new Random();
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            array[i, j] = rnd.Next(1, 10); 
}
```

---
## Merge Arrays

```csharp
// Array copy: copies a range from a source array to a destination array with
// optional start and end indices
static int[] MergeArray(int[] array1, int[] array2)
{
    int[] arrayMerged = new int[array1.Length + array2.Length];
    Array.Copy(array1, arrayMerged, array1.Length);
    Array.Copy(array2, 0, arrayMerged, array1.Length, array2.Length);
    Array.Sort(arrayMerged);
    return arrayMerged;
}
```

```csharp
// lange variante ohne Array.Copy
// Arrays müssen vorsortiert sein
static int[] MergeArray(int[] array1, int[] array2)
{
    int[] arrayMerged = new int[array1.Length + array2.Length];
    int indexMerged = 0;
    int indexArray1 = 0;
    int indexArray2 = 0;

    while (indexArray1 < array1.Length && indexArray2 < array2.Length)
        // solange keines der beiden arrays komplett durchlaufen wurde
    {
        if (array1[indexArray1] < array2[indexArray2])
            arrayMerged[indexMerged++] = array1[indexArray1++];
        else
            arrayMerged[indexMerged++] = array2[indexArray2++];
    }

    // schreibe das array dessen index nicht bis zum ende durchlaufen wurde
    while (indexArray1 < array1.Length)
        arrayMerged[indexMerged++] = array1[indexArray1++];

    while (indexArray2 < array2.Length)
        arrayMerged[indexMerged++] = array2[indexArray2++];

    return arrayMerged;
}
```
---

## Array of Objects

```csharp
Car[] garage = new Car[3];

Car car1 = new Car("Volvo");
Car car2 = new Car("Ford");
Car car3 = new Car("Opel");

garage[0] = car1;
garage[1] = car2;
garage[2] = car3;

Console.WriteLine(garage[1].model);
// output Ford
```
---

## Array of Anonymous Objects

```csharp
Car[] garage = { new Car("Volvo"), new Car("Ford"), new Car("Opel") };

foreach (Car car in garage)
{
	Console.Write($"{car.model} ");
}
// output: Volvo Ford Opel 
```

## Related Links
[**Microsoft Docs - Array Class**](https://learn.microsoft.com/en-us/dotnet/api/system.array?view=net-9.0)  