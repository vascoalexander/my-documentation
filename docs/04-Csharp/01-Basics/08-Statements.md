---
title: 'Statements'
description: ""
sidebar_position: 8
toc_max_heading_level: 4
---
## if-Statements

```c title="if...else if...else"
int time = 22;

if (time < 10)
{
  Console.WriteLine("Good morning.");
}
else if (time < 20)
{
  Console.WriteLine("Good day.");
}
else
{
  Console.WriteLine("Good evening.");
}
```

```c title="Ternary Operators"
// A simple if/else can be written as follows
// <condition> ? <true> : <false>
int toCompare = 17;
string isTrue = toCompare == 17 ? "True" : "False";
```
## switch case

```c
// A switch works with the byte, short, char, and int data types.
// It also works with enumerated types (discussed in Enum Types),
// the String class, and a few special classes that wrap
// primitive types: Character, Byte, Short, and Integer.
int month = 3;
string monthString;
switch (month)
{
    case 1:
        monthString = "January";
        break;
    case 2:
        monthString = "February";
        break;
    case 3:
        monthString = "March";
        break;
    // You can assign more than one case to an action
    // But you can't add an action without a break before another case
    // (if you want to do this, you would have to explicitly add a goto case x
    case 6:
    case 7:
    case 8:
        monthString = "Summer time!!";
        break;
    default:
        monthString = "Some other month";
        break;
}
```

## while, do...while

```c title="While loop"
int fooWhile = 0;

while (fooWhile < 100)
{
    // Iterated 100 times, fooWhile 0->99
    fooWhile++;
}
```

```c title="Do...While loop"
// Do While Loop
int fooDoWhile = 0;

do
{
    // Start iteration 100 times, fooDoWhile 0->99
    if (false)
    {
        continue; // skip the current iteration
    }

    fooDoWhile++;

    if (fooDoWhile == 50)
    {
        break; // breaks from the loop completely
    }

} while (fooDoWhile < 100);
```
## for-loop

```c title="For loop"
for (int i = 0; i < 10; i++)
{
   Console.WriteLine($"value of i: {i}");
}
```

```c title="Nested loops"
for (int i = 0; i < 10; i++)
{
   for (int j = 0; j < 10; j++) 
   {
      Console.WriteLine($"i: {i}, j: {j}");
   }
}
```
## foreach-loop

```c title="Foreach, in"
ArrayList numbers = new ArrayList();
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);

Console.WriteLine($"Count: {numbers.Count}");

foreach (int number in numbers)
{
   Console.Write(number + " ");
}
```
## return Statement

```c
static int Add(int a, int b)
{
    return a + b;
}

static void Main(string[] args)
{
    Console.WriteLine(Add(1, 2));
    return;
}
```
## yield Statement
Das yield-Schlüsselwort in C# wird in Iteratoren verwendet und ermöglicht die schrittweise Bereitstellung von Werten, ohne dass eine gesamte Sammlung im Speicher gehalten werden muss. Es vereinfacht die Implementierung von Enumeratoren und verbessert die Speicher- sowie Performance-Effizienz.

**Es gibt zwei Varianten:**
1. **yield return** – Gibt einen einzelnen Wert zurück und pausiert die Methode, bis der nächste Wert angefordert wird.
2. **yield break**  – Beendet die Iteration vorzeitig.

```c 
static IEnumerable<int> Range(int from, int to)
{
    for (int i = from; i < to; i++)
    {
        yield return i;
    }
    yield break;
}

static void Main(string[] args)
{
    foreach (int x in Range(-10,10))
    {
        Console.WriteLine(x);
    }
}
```

yield ist besonders nützlich für große Datenmengen, Streaming-Verarbeitung und Lazy Computation.

## checked / unchecked

```c
static void Main(string[] args)
{
    int i = int.MaxValue;
    checked
    {
        Console.WriteLine(i + 1);
    }
    // System.OverflowException 
    unchecked
    {
        Console.WriteLine(i + 1);
    }
    // Overflow - dies ist das default Verhalten: 
    // auch ohne das unchecked Statement würde es zum Overflow kommen
}
```
## lock Statement
Das lock-Statement in C# wird verwendet, um **Datenraces** und **Konkurrenzprobleme** bei der parallelen Ausführung von Threads zu vermeiden. 
Es sorgt dafür, dass nur ein Thread gleichzeitig auf einen kritischen Abschnitt des Codes zugreifen kann, und verhindert so Konflikte.

**Das lock-Objekt**  
Das lock-Statement verwendet ein **Schlüsselobjekt**, das von jedem Thread verwendet wird, um zu synchronisieren, 
wann ein Thread den Zugriff auf einen kritischen Abschnitt des Codes erlangen kann.
Solange das lock-Objekt von einem Thread verwendet wird, kann kein andere Thread der dasselbe lock-Objekt nutzt fortfahren, sondern
muss warten bis das Objekt wieder freigegben wurde.

```c title="Beispiel"
class Counter
{
    private int _count = 0;
    private readonly object _lockObj = new object();  // Lock-Objekt

    public void Increment()
    {
        lock (_lockObj)
        {
            _count++;  // Nur ein Thread kann diesen Abschnitt gleichzeitig betreten
        }
    }

    public int GetCount()
    {
        return _count;
    }
}
```
## using Statement
Das using-Statement in C# wird verwendet, um Ressourcen wie **Datenbankverbindungen**, **Dateihandles** oder **Netzwerkverbindungen** zu verwalten 
und sie nach Gebrauch **automatisch freizugeben**, sobald sie nicht mehr benötigt werden.

`using` stellt sicher, dass Ressourcen nach ihrer Verwendung automatisch freigegeben werden, ohne dass man explizit eine Dispose()-Methode aufrufen musst.

```c
using (StreamReader reader = new StreamReader("datei.txt"))
{
    string line = reader.ReadLine();
    Console.WriteLine(line);
}
// Sobald der Block verlassen wird, wird 'reader.Dispose()' aufgerufen und die Datei wird automatisch geschlossen.
```
**using-Direktive (Namespace)**
Neben dem using-Statement gibt es auch die using-Direktive, mit der du Namespaces importierst, 
um den Code leserlicher zu machen und die Notwendigkeit zu vermeiden, lange Namespace-Pfade zu schreiben.

## Exception Handling

```c
static double Divide(double x, double y)
{
    if (y == 0)
    {
      throw new DivideByZeroException();
    }
    return x / y;
}

static void Main(string[] args)
{
    try
    {
        if (args.Length != 2)
        {
            throw new Exception("Two numbers are required");
        }
        double x = double.Parse(args[0]);
        double y = double.Parse(args[1]);
        Console.WriteLine(Divide(x, y));
    }

    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }

    finally
    {
        Console.WriteLine("Terminating!");
    }
}
```

## Related Links
[**Microsoft Docs - Statements**](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements)  