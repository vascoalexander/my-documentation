---
created: 2025-02-24, 06:54
title: String Operations
description: ""
sidebar_position: 1
language: C#
tags:
  - stringBuilder
  - Char-Array
  - LINQ
  - Verbatim-String
draft: false
---
## Char from String
You can access each character of the string with an indexer

```c
char charFromString = fooString[1]; // => 'e'
// Strings are immutable: you can't do fooString[1] = 'X';
```

---
## String to Char-Array

```c
string text = "Hallo";
char[] charArray = text.ToCharArray();

// Ausgabe jedes Zeichens
foreach (char c in charArray)
{
    Console.WriteLine(c);
}
```

---
## String to Char-Array mit LINQ

```c
string text = "Hallo";
char[] charArray = text.Select(c => c).ToArray();  // Alternativ mit LINQ

Console.WriteLine(new string(charArray)); // Ausgabe: Hallo
```

---
## StringBuilder AppendLine

```c
StringBuilder sb = new StringBuilder();
sb.Append("Hello ");
sb.AppendLine("World!");
Console.WriteLine(sb);
// Ausgabe: Hello World!
```

---
## Verbatim String
You can use the @ symbol before a string literal to escape all characters in the string

```c
string path = "C:\\Users\\User\\Desktop";
string verbatimPath = @"C:\Users\User\Desktop";
Console.WriteLine(path == verbatimPath);  // => true

// You can split a string over two lines with the @ symbol. To escape " use ""
string bazString = @"Here's some stuff
on a new line! ""Wow!"", the masses cried";
```

---
## String IndexOf

```c
string myText = "some text";
Console.WriteLine(myText.IndexOf('t')); // Outputs => 5
```

---
## String Insert

```c
string myText = "some text";
myText = myText.Insert(0, "This is ");
Console.WriteLine(myText);
// Outputs => "This is some text"
```

---
## String Replace

```c
string myText = "This is some text"
myText = myText.Replace("This is", "Here is");
Console.WriteLine(myText);
// Outputs => "Here is some text"
```

---
## String Contains
```c
string myText = "This is some text"
if(myText.Contains("some"))
	Console.WriteLine("found");
// Outputs "found"
```

---
## String Remove
```c
string myText = "This is some text"
myText = myText.Remove(4);
Console.WriteLine(myText);
// Outputs "This"
```

---
## String Substring

```c
string myText = "This is some text"
myText = myText.Substring(2, 3);
Console.WriteLine(myText);
// Outputs "is"
```

---
## String Slicing

- **Index**: Mit `^` kannst Du vom Ende her indexieren (z. B. `^1` für das letzte Element).
- **Range**: Mit `..` definierst Du einen Bereich. Dabei ist das Ende exklusiv.

```c
string text = "Hallo Welt";

// Teilausschnitt ab Index 6 bis zum Ende
string teilText1 = text[6..]; // "Welt"

// Teilausschnitt von Index 0 bis 5
string teilText2 = text[..5]; // "Hallo"
```