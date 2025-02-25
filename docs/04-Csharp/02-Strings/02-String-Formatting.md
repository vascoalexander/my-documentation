---
created: 2025-02-24, 06:54
title: String Formatting
description: ""
sidebar_position: 2
language: C#
tags:
  - stringBuilder
draft: false
---
## String.Format

```c
// {index der variablen die eingesetzt wird:FORMAT}
// C - Currency; U - Universal full date/time
// Ausgabe: 150,00 € Samstag, 8. Februar 2025 18:25:11
String.Format("{index[,alignment][:formatString]}", object);

string formatted = string.Format("{0:C} {1:U}", 150, thisDate); 
Console.WriteLine(formatted);
```

---
## Interpolated String Formatting

```c
var DateTime thisDate = DateTime.Now;
Console.WriteLine("{0:C} {1:U}", 150, thisDate);
```

---
## StringBuilder.AppendFormat()

```c
using System.Text;

decimal num = 34.53567325m; 
var builder = new StringBuilder(); 
builder.AppendFormat("Format Decimal: {0:n2}", num);
```

---
## String Interpolation

```c
var DateTime thisDate = DateTime.Now;
Console.WriteLine($"{150:C} {thisDate:U}");
```

---
## Format a Table structure
```c
string headers = $"{"First Name", -20}{"Last Name", -20}{"Value", -20}{"Time", -20}";
string line	= $"{"Luiz", -20}{"Parente", -20}{20, -20:C}{DateTime.Now, -20:d}";

Console.WriteLine(headers);
Console.WriteLine(line);

/*
This code example produces the following results:

First Name           Last Name            Value                Time             
Luiz                 Parente              $20.00               2/9/2020   
*/
```

## Related Links
[String Formatting CheatSheet (Github)](https://gist.github.com/luizcentennial/c6353c2ae21815420e616a6db3897b4c)  
[C# String Format Examples](https://dzone.com/articles/c-string-format-examples)  