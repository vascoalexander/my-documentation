- **in-Place Verfahren**: für die Sortierung wird kein weiterer Speicher benötigt
- das Maximum steigt wie eine Luftblase nach oben

```pseudo title="Pseudocode"
FOR i = 1 bis Länge[A]
    DO FOR j = 0 bis Länge[A] - 1
        DO IF A[j] > A[j + 1]
            vertausche A[j] <-> A[j + 1]
```

```python title="Bubblesort in Python"
for i in range(1,len(A)):
    for j in range(0,len(A)-1):
        if A[j] > A[j+1]:
            temp = A[j]
            A[j] = A[j+1]
            A[j+1] = temp
```