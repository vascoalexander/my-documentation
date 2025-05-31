---
created: 2025-02-24, 07:00
title: Concatenating
description: ""
sidebar_position: 4
language: C#
tags: []
draft: false
---
To concatenate string variables, you can use the **+** or **+=** operators, **string interpolation** or **the String.Format, String.Concat, String.Join** or **StringBuilder.Append** methods.


```csharp
string fullName = firstName + " " + lastName; 
// + operator
string fullName = string.Format("{0} {1}", firstName, lastName); 
// .Format method
string fullName = $"My name is {firstName} and my last name is {lastName}."; 
// Interpolation

```

## String Concat

```csharp
string[] words = { "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog." };
string unreadablePhrase = string.Concat(words);
Console.WriteLine(unreadablePhrase); 
//The output is " Thequickbrownfoxjumpsoverthelazydog. "

```

## String Join

```csharp
string[] words = { "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog." };
string readablePhrase = string.Join(" ", words);
Console.WriteLine(readablePhrase); 
// output: " The quick brown fox jumps over the lazy dog. "
```

## Combine Strings in a Loop

```csharp
var sb = new System.Text.StringBuilder();
for (int i = 0; i < 20; i++)
{
    sb.AppendLine(i.ToString());
}
Console.WriteLine(sb.ToString());
```