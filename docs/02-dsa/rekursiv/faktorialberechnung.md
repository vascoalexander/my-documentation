---
description: ""
sidebar_position: 2
title: "Faktorialberechnung"
---
```python
def faktorial(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return n * faktorial(n - 1)
```