---
created: "2025-02-23, 19:50"
title: "Math"
description: ""
language: C#
sidebar_position: 1
tags: []
---
### Quersumme

```csharp
static int Checksum(int num)  
{  
    int sum = 0;  
    while (num > 0)  
    {        
	    sum += num % 10;  
        num /= 10;  
    }  
    return sum;  
}
```
---
### GGT

```csharp
static int GetGreatestCommonDivisor(int a, int b)
{
    if (b == 0)
        return a;
    else return GetGreatestCommonDivisor(b, a % b);
}
```
---
### Gaußsche Summenformel

```csharp
static int GaussianSum(int n)
{
	result = (n * (n + 1)) / 2;
}
```
---
### Fibonacci Zahlen

```csharp
static int Fibonacci(int n)
{
	if (n <= 0)
		return 0;
	else if (n == 1)
		return 1;
	else
		return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```
---
### Faktorial-Berechnung

```csharp
static int Factorial(int n):
    if (n == 0)
        return 0;
    elif (n == 1)
        return 1;
    else
        return n * Factorial(n - 1);
```
---
### Primzahl bestimmen

```csharp
static bool IsPrime(int number) 
{ 
	if (number < 2) return false; 
	if (number == 2 || number == 3) return true; 
	if (number % 2 == 0 || number % 3 == 0) return false;
		
	for (int i = 5; i * i <= number; i += 6) 
	{ 
		if (number % i == 0 || number % (i + 2) == 0) 
			return false; 
	} 
	return true; 
}
```