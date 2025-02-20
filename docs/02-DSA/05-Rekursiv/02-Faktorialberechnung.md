---
description: ""
sidebar_position: 2
title: "Faktorialberechnung"
---
```pseudocode title="Pseudocode"
Funktion Faktorial(n)
    IF n := 0 THEN
        Ergebnis := 0
    ELSE IF n := 1 THEN
        Ergebnis := 1
    ELSE
        Ergebnis := n * Faktorial(n - 1)
```

```python title="Python"
def faktorial(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return n * faktorial(n - 1)
```