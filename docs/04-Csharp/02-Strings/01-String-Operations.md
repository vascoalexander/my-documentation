---
created: "2025-02-24, 06:54"
title: "String Operations"
description: ""
sidebar_position: 1
language: C#
tags: []
draft: false
---

```c
string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs)";
Console.WriteLine(fooString);

// You can access each character of the string with an indexer:
char charFromString = fooString[1]; // => 'e'

// Strings are immutable: you can't do fooString[1] = 'X';

// Compare strings with current culture, ignoring case
string.Compare(fooString, "x", StringComparison.CurrentCultureIgnoreCase);

// Formatting, based on sprintf
string fooFs = string.Format("Check Check, {0} {1}, {0} {1:0.0}", 1, 2);

// Dates & Formatting
DateTime fooDate = DateTime.Now;
Console.WriteLine(fooDate.ToString("hh:mm, dd MMM yyyy"));

// String Interpolation
string myName = "Jane Doe";
Console.WriteLine($"My name is: {myName}. It is great to be here!");

// String Builder
StringBuilder sb = new StringBuilder();
sb.Append("Hello ");
sb.AppendLine("World!");
Console.WriteLine(sb);

// Verbatim String
// You can use the @ symbol before a string literal to escape all characters in the string
string path = "C:\\Users\\User\\Desktop";
string verbatimPath = @"C:\Users\User\Desktop";
Console.WriteLine(path == verbatimPath);  // => true

// You can split a string over two lines with the @ symbol. To escape " use ""
string bazString = @"Here's some stuff
on a new line! ""Wow!"", the masses cried";

// Popular String Methods & Properties
string myText = "some text";

Console.WriteLine(myText.IndexOf('t')); // Outputs => 5

myText = myText.Insert(0, "This is ");
Console.WriteLine(myText); // Outputs => "This is some text"

myText = myText.Replace("This is", "Here is");
Console.WriteLine(myText); // Outputs => "Here is some text"

if(myText.Contains("some"))
Console.WriteLine("found"); // Outputs "found"

myText = myText.Remove(4);
Console.WriteLine(myText); // Outputs "Here"

myText = myText.Substring(2, 3);
Console.WriteLine(myText); // Outputs "re"
```