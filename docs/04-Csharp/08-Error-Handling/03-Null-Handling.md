---
created: 2025-03-07, 19:39
title: Null-Handling
description: ""
sidebar_position: 3
draft: false
---
## Einfacher Eigenschaften Zugriff mit Null-Konditionaloperator

```c
Person person = null; 
string name = person?.Name; 
Console.WriteLine(name); 
// Ausgabe: nichts (name ist null, keine Exception)
```

---
## Verschachtelter Zugriff mit Null-Konditionaloperator
Da `Wohnort` null ist, führt `person?.Wohnort?.Stadt` nicht zu einer Exception, sondern gibt null zurück.

```c
class Adresse {
    public string Stadt { get; set; }
}

class Person {
    public Adresse Wohnort { get; set; }
}

Person person = new Person(); // Wohnort ist standardmäßig null
string stadt = person?.Wohnort?.Stadt;
Console.WriteLine(stadt); // Ausgabe: nichts (stadt ist null)
```

---
## Null Prüfung & Zuweisung
- Prüft ob `obj` nicht null ist.
- Castet `obj` gleichzeitig in die Variable `participant` – praktisch, wenn man anschließend mit dem Objekt arbeiten will.

```c
if (obj is { } thing)
{
	// do something with thing
}
```

---
## Methodenzugriff mit Null-Prüfung
Hier verhindert der ?. Operator, dass versucht wird, die Methode `Addiere` aufzurufen, wenn `rechner` null ist.

```c
class Rechner {
    public int? Addiere(int a, int b) => a + b;
}

Rechner rechner = null;
int? ergebnis = rechner?.Addiere(3, 4);
Console.WriteLine(ergebnis); // Ausgabe: nichts (ergebnis ist null)
```

---
## Sicherer Zugriff auf Array
Der Zugriff auf das erste Element wird nur durchgeführt, wenn namen nicht null ist. Da namen null ist, wird der gesamte Ausdruck zu null.

```c
string[] namen = null;
int? laenge = namen?[0]?.Length;
Console.WriteLine(laenge); 
// Ausgabe: nichts (laenge ist null)
// -> Keine Null-Reference Exception
```

---
## Obj-Zugriff mit Default Fallback
Zuerst wird mit dem Null-Konditionaloperator geprüft, ob `person` (und damit `person.Name`) null ist. Falls ja, liefert der Ausdruck null und der ??-Operator (Null-Koaleszensoperator) liefert den Fallback-Wert "Unbekannt".

```c
Person person = null; 
string name = person?.Name ?? "Unbekannt"; 
Console.WriteLine(name);
```

---
## Array mit Null zu Liste ohne Null (LinQ)

```c
var listeOhneNull = arrayMitNull.Where(a => a != null).ToList();
```