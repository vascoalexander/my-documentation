---
description: ""
sidebar_position: 3
title: "Fibonacci-Zahlen"
---
```pseudocode title="Pseudocode"
Funktion Fibonacci(n)
    IF n <= 0 THEN
        Ergebnis := 0
    ELSE IF n = 1 THEN
        Ergebnis := 1
    ELSE
        Ergebnis := Fibonacci(n - 1) + Fibonacci(n - 2)
```

```python title="Python"
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

```