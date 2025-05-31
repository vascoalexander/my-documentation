---
created: 2025-03-02, 08:58
title: Konsolenausgabe
description: ""
sidebar_position: 4
draft: false
---
## Farbiger Text

```csharp
public static void PrintColor(string text, ConsoleColor color, bool newline = true)  
{  
    Console.ForegroundColor = color;  
    if (newline)  
        Console.WriteLine(text);  
    else  
        Console.Write(text);  
    Console.ResetColor();  
}

// return string
public static string FormatColor(string text, ConsoleColor color)  
{  
    return $"\u001b[38;5;{(int)color}m" + text + "\u001b[0m";  
}
```

---

## Bold / Italic Text

```csharp
public static string FormatItalic(string text)  
{  
    return "\u001b[3m" + text + "\u001b[0m";  
}

public static string FormatBold(string text)  
{  
    return "\u001b[1m" + text + "\u001b[0m"; }
```