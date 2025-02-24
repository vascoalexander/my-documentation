---
created: "2025-02-24, 06:54"
title: "String Formatting"
description: ""
sidebar_position: 2
language: C#
tags: []
draft: false
---

```c
// {index der variablen die eingesetzt wird:FORMAT}
// C - Currency; U - Universal full date/time
// Ausgabe: 150,00 € Samstag, 8. Februar 2025 18:25:11
static DateTime thisDate = DateTime.Now;
Console.WriteLine("{0:C} {1:U}", 150, thisDate);
```
---

## Format a Table structure
```c
using System;

class Program {
    static void Main(string[] args) {
        string headers = $"{"First Name", -20} {"Last Name", -20} {"Value", -20} {"Time", -20}";
        string line	= $"{"Luiz", -20} {"Parente", -20} {20, -20:C} {DateTime.Now, -20:d}";

        Console.WriteLine(headers);
        Console.WriteLine(line);
    }
}

/*
This code example produces the following results:

First Name           Last Name            Value                Time                
Luiz                 Parente              $20.00               2/9/2020            
*/
```

## Related Links
[String Formatting CheatSheet (Github)](https://gist.github.com/luizcentennial/c6353c2ae21815420e616a6db3897b4c)