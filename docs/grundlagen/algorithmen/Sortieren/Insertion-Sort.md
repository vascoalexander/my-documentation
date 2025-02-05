- einfach, stabil
- effizient bei kleinen oder vorsortierten Datenmengen
- vgl. Spielkarten sortieren

```pseudo title="Pseudocode"
FOR i = 1 bis Länge(A)
    DO temp = A[i]
    j = i - 1
    WHILE j >= 0 und A[j] > temp
        DO A[j + 1] = A[j]
        j = j - 1
    A[j+1] = temp
```

```python title="Insertion-Sort in Python"
for i in range(1,len(A)):
    temp = A[i]
    j = i - 1
    while (j >= 0 and A[j] > temp):
        A[j + 1] = A[j]
        j -= 1
    A[j+1] = temp
```

### Links
**BroCode [YT]**: [Insertion-Sort](https://www.youtube.com/watch?v=8mJ-OhcfpYg&list=PLZPZq0r_RZON1eaqfafTnEexRzuHbfZX8&index=14&pp=iAQB)

