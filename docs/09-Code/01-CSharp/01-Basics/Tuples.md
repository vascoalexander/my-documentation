---
created: 2025-02-23, 20:10
description: ""
language: C#
tags: []
---
### List with named Tuples

```c
var list = new List<(int num, string name)>();
list.Add((1, "str1"));
list.Add((3, "str2"));

foreach ((int num, string name) in list)
{
    Console.WriteLine(name + ": " + num);    
}
```