---
created: 2025-02-23, 11:45
language: C#
description: ""
tags: []
---
### Print 2D Array to console

```c
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

### Fill 2D Array with Random Numbers

```c
static void FillArray(int[,] array, int rows, int cols)
{
    Random rnd = new Random();
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            array[i, j] = rnd.Next(1, 10); 
}
```

### Merge Arrays

```c
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

```c
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