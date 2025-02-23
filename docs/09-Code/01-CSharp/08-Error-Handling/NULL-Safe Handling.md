---
created: 2025-02-23, 11:19
language: C#
description: ""
tags: []
---
### string with Default Fallback

```c
string firstName = person?.FirstName ?? "Unknown";
Console.WriteLine(firstName);
```