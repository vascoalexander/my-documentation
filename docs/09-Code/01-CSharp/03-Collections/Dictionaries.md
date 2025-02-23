---
created: 2025-02-23, 11:36
language: C#
description: ""
tags:
    - tuple
---
### Dictionary Initialization

```c
var capitals = new Dictionary<string, string>
{
    ["USA"] = "Washington, D.C.",
    ["Japan"] = "Tokyo",
    ["France"] = "Paris"
};
```
---
### Dictionary aus Tuplen
bei einem named tuple wird Item1 oder Item2 entsprechend durch die Name ersetzt

```c
Dictionary<string, (string, string)> meinDict = new()
{
	{"key1", ("wert1", "wert2")},
	{"key2", ("wert1", "wert2")}
};
string elementOfDict = meinDict["key1"].Item1;
Console.WriteLine(elementOfDict);
```