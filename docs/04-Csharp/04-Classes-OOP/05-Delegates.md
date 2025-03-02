---
created: 2025-02-23, 11:33
title: "Delegates"
description: ""
sidebar_position: 5
language: C#
tags: []
---
Ein Delegate ist ein typisierter Verweis auf eine oder mehrere Methoden. Er ermöglicht es, Methoden als Objekte zu behandeln.

```c
// Delegate-Definition:
public delegate int Operation(int a, int b);

public class Rechner
{
    public int Addieren(int a, int b) => a + b;
    public int Multiplizieren(int a, int b) => a * b;
}

// Anwendung:
var rechner = new Rechner();

// Zuweisung der Methode an den Delegate:
Operation op = rechner.Addieren;
Console.WriteLine(op(3, 4));  // Ausgabe: 7

// Delegate neu zuweisen:
op = rechner.Multiplizieren;
Console.WriteLine(op(3, 4));  // Ausgabe: 12
```