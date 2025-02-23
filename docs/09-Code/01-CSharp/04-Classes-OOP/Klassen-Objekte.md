---
created: 2025-02-23, 11:33
title: "Klassen & Objekte"
language: C#
description: ""
tags: []
---
### Person Class with Full Name Property

```c
public class Person  
{  
    public string FirstName { get; set; }  
    public string LastName { get; set; }  
  
    public string FullName =>   
        $"{FirstName ?? "Unknown"} {LastName ?? "Unknown"}";  
}
```