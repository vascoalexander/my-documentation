---
description: ""
sidebar_label: 'Paradigmen'
sidebar_position: 2
title: "Paradigmen der Programmierung"
---
# Paradigmen der Programmierung

## Einteilung

| Imperativ    | Deklarativ           |
| :----------- | :------------------- |
| Strukturiert | Funktional           |
| Prozedural   | Logisch              |
| OOP          | Datenflussorientiert |

### Kombinationen von Paradigmen
Viele moderne Programmiersprachen unterstützen mehrere Paradigmen, sodass Entwickler die Stärken verschiedener Ansätze kombinieren können. Beispielsweise kann Python sowohl prozedural als auch objektorientiert und funktional verwendet werden.

Die Wahl des Paradigmas hängt oft von der Natur des Projekts, den Präferenzen der Entwickler und den spezifischen Anforderungen der Anwendung ab.


## Imperative Programmierung
**"Wie" wird etwas gemacht?**
- **Prinzip**: Beschreibt Schritt für Schritt, wie eine Berechnung durchgeführt wird.
- **Merkmal**: Zustandsänderungen (Seiteneffekte) sind üblich.
- **Denkweise**: Programmieren wie ein Kochrezept – jeder Schritt verändert den Zustand.

**Merkmale imperativer Programmierung:**
- **Befehlsfolgen**: Ein Programm besteht aus einer Sequenz von Befehlen (Anweisungen), die den Zustand des Programms schrittweise ändern.
- **Veränderung von Variablen**: Variablen werden direkt verändert, und diese Veränderungen steuern den Ablauf des Programms.
- **Zustandsverwaltung**: Der Zustand des Programms wird explizit verwaltet, oft durch Zuweisung von Werten zu Variablen.

**Praktische Auswirkungen von Zustandsänderungen**
1. **Fehleranfälligkeit**:  
Zustandsänderungen erhöhen das Risiko von Fehlern, da der Programmierer genau verfolgen muss, wann und wie der Zustand verändert wird. Ein Fehler bei der Zustandsänderung (z. B. durch unabsichtliches Überschreiben von Variablen oder unsachgemäße Modifikation von Objekten) kann dazu führen, dass der Code nicht wie erwartet funktioniert.

2. **Nebenläufigkeit (Concurrency)**:  
Ein häufiges Problem bei der imperativen Programmierung sind Nebenläufigkeitsfehler. Wenn mehrere Threads oder Prozesse gleichzeitig auf denselben Zustand zugreifen und ihn verändern, kann dies zu Race Conditions oder anderen unvorhersehbaren Fehlern führen.

```c title="Beispiel: Summer einer Liste"
int Sum(int[] zahlen)
{
    int summe = 0;   // Initialisierung des Zustands
    foreach (int zahl in zahlen)
    {
        summe += zahl;  // Zustand (summe) wird verändert
    }
    return summe;      // Endergebnis
}
```
  - Typische **Anwendungsgebiete**: GUI-Programmierung, Spieleentwicklung.
  - Typische **Programmiersprachen**: JavaScript, C#, Java (für GUI-Anwendungen).

### Prozedurales Programmieren

**Beschreibung:** Prozedurales Programmieren ist ein Paradigma, bei dem der Code in Prozeduren oder Funktionen organisiert ist. Diese Funktionen enthalten Anweisungen, die sequentiell ausgeführt werden.

**Merkmale:**
  - Verwendung von Funktionen oder Prozeduren.
  - Fokus auf die Ausführung von Befehlen und Kontrollstrukturen wie Schleifen und Verzweigungen.
  - Typische **Programmiersprachen**: C, Pascal, BASIC

### Objektorientiertes Programmieren (OOP)
 **Beschreibung:** Objektorientiertes Programmieren organisiert den Code um Objekte, die Instanzen von Klassen sind. Klassen definieren das Verhalten und die Eigenschaften von Objekten. Primär imperativ - kann aber deklarative Anteile haben.

 **Merkmale:**
  - **Kapselung:** Daten und Methoden sind in Klassen gebündelt.
  - **Vererbung:** Klassen können Eigenschaften und Methoden von anderen Klassen erben.
  - **Polymorphismus:** Objekte können auf verschiedene Weise auf die gleiche Schnittstelle reagieren.
  - **Abstraktion:** Komplexität wird durch Abstraktion reduziert.
  
 Typische **Programmiersprachen:** Java, C++, Python, C#.

## Deklarative Programmierung

**Beschreibung:** Deklaratives Programmieren ist ein Paradigma, bei dem die Logik der Berechnung ohne explizite Kontrollflussanweisungen beschrieben wird. Es sagt, **was** das Programm tun soll, statt **wie** es dies tun soll.

**Merkmale:**
  - Fokus auf das **Was** statt auf das **Wie**.
  - Beschreibungen von gewünschten Ergebnissen und nicht der Prozeduren.
  - Typische **Programmiersprachen**: SQL, HTML

### Funktionale Programmierung
**"Was" soll berechnet werden?**  
- **Prinzip**: Beschreibt was berechnet werden soll, ohne explizite Zustandsänderungen.
- **Merkmal**: Keine Seiteneffekte, keine veränderbaren Variablen.
- **Denkweise**: Programmieren wie in der Mathematik – eine Funktion hat immer denselben Rückgabewert für die gleichen Eingaben.

Die besonderen Eigenschaften der funktionalen Programmierung ermöglichen es, auf die, in der imperativen Programmierung benötigten, inneren Zustände eines Berechnungsprozesses ebenso zu verzichten, wie auf die zugehörigen Zustandsänderungen, die auch Seiteneffekte genannt werden.

Die funktionale Programmierung ist durch **folgende Eigenschaften** gekennzeichnet:

1. Computerprogramme werden als Funktionen verstanden, die für eine Eingabe eine Ausgabe liefern, die nur von dieser abhängig ist.  
2. Funktionen werden nicht als Abfolge von Anweisungen dargestellt, sondern als ineinander verschachtelte Funktionsaufrufe.  
3. Funktionen sind gegenüber allen anderen Datenobjekten gleichberechtigt. Das bedeutet, dass sie als Parameter in Funktionen eingehen dürfen und ebenso als Berechnungsergebnisse aus Funktionen hervorgehen können. Insbesondere können Funktionen wie andere Datenobjekte zur Laufzeit erstellt werden oder entfallen.

```c title="Summenberechnung C# lambda Schreibweise"
int Sum(int[] zahlen) => zahlen.Sum();
```
**Warum eine Funktion innerhalb einer Funktion aufrufen die dasselbe Ergebnis liefert?**  
Denn `Sum(zahlen)` gibt letztlich den gleichen Wert zurück wie `zahlen.Sum()`.  

- **Abstraktion**: Versteckt die Details der Implementierung.
- **Lesbarkeit**: Macht den Code klarer und verständlicher.
- **Wiederverwendbarkeit**: Erleichtert die Nutzung der Funktion an verschiedenen Stellen.
- **Flexibilität**: Erlaubt dir, später zusätzliche Logik hinzuzufügen (wie Validierung oder Fehlerbehandlung).
- **Einfacher zu ändern**: Falls du später die Summenberechnung anpassen möchtest, kannst du das an einem Ort tun, ohne den gesamten Code ändern zu müssen.  

Typische **Programmiersprachen**: Haskell, Lisp, Erlang, Scala.

### Logisches Programmieren

**Beschreibung:** Logisches Programmieren ist ein Paradigma, bei dem Programme als eine Menge von logischen Aussagen und Regeln beschrieben werden. Die Programmausführung erfolgt durch logisches Schließen.

**Merkmale:**
  - Verwendung von logischen Klauseln und Prädikaten.
  - Fokus auf Deklarationen und Regeln statt auf Anweisungen.
  - Typische **Programmiersprachen**: Prolog