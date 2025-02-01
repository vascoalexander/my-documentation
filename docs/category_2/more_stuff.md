# Code Blocks

```python title="Code Example"
class CustomList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        return self.data[index]

custom_list = CustomList([1, 2, 3])
print(custom_list[1]) 
```
