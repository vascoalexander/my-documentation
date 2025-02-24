---
created: "2025-02-23, 11:26"
title: "LINQ to Objects"
language: C#
description: ""
sidebar_position: 1
tags: []
---
## Enumerable Range

```c
foreach (var number in Enumerable.Range(1, 10))
{
	 Console.WriteLine(number);
}
```
---
## Filter Array

```c
var scores = new int[] { 90, 100, 82, 89, 92 };

var highScores = from score in scores
                 where score >= 90
                 select score;

foreach (var score in highScores)
{
    Console.WriteLine(score);
}
```

## Related Links