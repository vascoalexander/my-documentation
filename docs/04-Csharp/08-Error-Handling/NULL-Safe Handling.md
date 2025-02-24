---
created: 2025-02-23, 11:19
title: "NULL-Safe Handling"
language: C#
description: ""
sidebar_position: 1
tags: []
---
## string with Default Fallback

```c
string firstName = person?.FirstName ?? "Unknown";
Console.WriteLine(firstName);
```
---
## string.isNullOrEmpty

```c
string input = Console.ReadLine()!;
char guess = !string.IsNullOrEmpty(input) ? input[0] : '_';
```

## Related Links