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

## Defining and Initialising strings

```csharp
string string1;
string string2 = null;
string string3 = String.Empty;
string string4 = "C:\\Development\\Projects";
string string5 = @"C:\Development\Projects";
String string6 = "Latest string";
var string7 = "Implicit string";
const string string8 = "This text cannot be changed at runtime.";

char[] charArray = new char[] { 'H', 'e', 'l', 'l', 'o' };
string string9 = new string(charArray);
```

## Char from String
You can access each character of the string with an indexer

```csharp
char charFromString = fooString[1]; // => 'e'
// Strings are immutable: you can't do fooString[1] = 'X';
```

---
## String to Char-Array

```csharp
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

```csharp
string text = "Hallo";
char[] charArray = text.Select(c => c).ToArray();  // Alternativ mit LINQ

Console.WriteLine(new string(charArray)); // Ausgabe: Hallo
```

---
## StringBuilder AppendLine

```csharp
StringBuilder sb = new StringBuilder();
sb.Append("Hello ");
sb.AppendLine("World!");
Console.WriteLine(sb);
// Ausgabe: Hello World!
```

---
## Verbatim String
You can use the @ symbol before a string literal to escape all characters in the string

```csharp
string path = "C:\\Users\\User\\Desktop";
string verbatimPath = @"C:\Users\User\Desktop";
Console.WriteLine(path == verbatimPath);  // => true

// You can split a string over two lines with the @ symbol. To escape " use ""
string bazString = @"Here's some stuff
on a new line! ""Wow!"", the masses cried";
```

---
## String IndexOf

```csharp
string myText = "some text";
Console.WriteLine(myText.IndexOf('t')); // Outputs => 5
```

---
## String Insert

```csharp
string myText = "some text";
myText = myText.Insert(0, "This is ");
Console.WriteLine(myText);
// Outputs => "This is some text"
```

---
## String Replace

```csharp
string myText = "This is some text"
myText = myText.Replace("This is", "Here is");
Console.WriteLine(myText);
// Outputs => "Here is some text"
```

---
## String Contains
```csharp
string myText = "This is some text"
if(myText.Contains("some"))
	Console.WriteLine("found");
// Outputs "found"
```

---
## String Remove
```csharp
string myText = "This is some text"
myText = myText.Remove(4);
Console.WriteLine(myText);
// Outputs "This"
```

---
## String Substring

```csharp
string myText = "This is some text"
myText = myText.Substring(2, 3);
Console.WriteLine(myText);
// Outputs "is"
```

---
## String Slicing

- **Index**: Mit `^` kannst Du vom Ende her indexieren (z. B. `^1` für das letzte Element).
- **Range**: Mit `..` definierst Du einen Bereich. Dabei ist das Ende exklusiv.

```csharp
string text = "Hallo Welt";

// Teilausschnitt ab Index 6 bis zum Ende
string teilText1 = text[6..]; // "Welt"

// Teilausschnitt von Index 0 bis 5
string teilText2 = text[..5]; // "Hallo"
```

## Quick-Reference: String Methoden

| Method         | Code                                                  | Comments                                                                                              |
| :------------- | :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| Clone()        | firstName.Clone()                                     | Make clone of string                                                                                  |
| CompareTo()    | firstName.CompareTo(lastname)                         | Compare two strings and returns integer value as output. It returns 0 for true and 1 for false        |
| Contains       | firstName.Contains("Dav")                             | The Contains method checks whether specified character or string is exists or not in the string value |
| EndsWith()     | firstName.EndsWith("n")                               | This EndsWith Method checks whether specified character is the last character of string or not        |
| Equals()       | firstnName.Equals(lastname)                           | The Equals Method in C# compares two string and returns Boolean value as output                       |
| GetHashCode()  | firstName.GetHashCode()                               | This method returns HashValue of specified string                                                     |
| GetType()      | firstName.GetType()                                   | Returns the System.Type of current instance                                                           |
| IndexOf()      | firstName.IndexOf("e")                                | Returns the index position of first occurrence of specified character                                 |
| ToLower()      | firstName.ToLower()                                   | Converts String into lower case based on rules of the current culture                                 |
| ToUpper()      | firstName.ToUper()                                    | Converts String into upper case based on rules of the current culture                                 |
| Insert()       | firstName.Insert(0, "Hello")                          | Insert the string or character in the string at the specified position                                |
| IsNormalized() | firstName.IsNormalized()                              | This method checks whether this string is in Unicode normalization form C                             |
| LastIndexOf()  | firsName.LastIndexOf("e")                             | This method checks whether this string is in Unicode normalization form C                             |
| Length         | firstName.Length                                      | It is a string property that returns length of string                                                 |
| Remove()       | firstName.Remove(5)                                   | This method deletes all the characters from beginning to specified index position                     |
| Replace()      | firstName.Replace('e','i')                            | This method replaces the character                                                                    |
| Split()        | string[] split = firstname.Split(new char[] { 'e' }); | This method splits the string based on specified value                                                |
| StartsWith()   | firstName.StartsWith("S")                             | It checks whether the first character of string is same as specified character                        |
| Substring()    | firstName.Substring(2,5)                              | This method returns substring                                                                         |
| ToCharArray()  | firstnName.ToCharArray()                              | Converts string into char array                                                                       |
| Trim()         | firstnName.Trim()                                     | It removes extra whitespaces from beginning and ending of string                                      |
