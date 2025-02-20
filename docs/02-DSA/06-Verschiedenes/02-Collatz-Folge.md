---
description: ""
sidebar_position: 2
title: "Collatz-Folge"
---
- eigentlich kein Algorithmus, sondern ein mathematisches Problem
- Falls n gerade ist → Teile durch 2
- Falls n ungerade ist → Multipliziere mit 3 und addiere 1
- Wiederhole, bis n = 1

```
Funktion Collatz(n)
WHILE n ungleich 0
    IF n gerade THEN
        n := n / 2
    ELSE
        n := 3 * n + 1
```

**Die Collatz-Vermutung lautet nun:**

Die Zahlenfolge mündet immer in den Zyklus 4, 2, 1, egal, mit welcher positiven natürlichen Zahl man beginnt.
Diese Vermutung wurde bislang weder bewiesen noch widerlegt.

### Referenz
[**Wikipedia: Collatz-Problem**](https://de.wikipedia.org/wiki/Collatz-Problem)
