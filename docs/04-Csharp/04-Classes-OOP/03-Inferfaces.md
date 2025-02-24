---
created: 2025-02-23, 11:33
title: "Interfaces"
description: ""
sidebar_position: 3
language: C#
tags: []
---
Ein Interface definiert einen Vertrag (Methoden, Eigenschaften etc.), den implementierende Klassen erfüllen müssen. Es ermöglicht lose Kopplung.

```c
public interface IBeweglich
{
    void Bewege();
}

public class Auto : IBeweglich
{
    public void Bewege()
    {
        Console.WriteLine("Das Auto fährt.");
    }
}

public class Fahrrad : IBeweglich
{
    public void Bewege()
    {
        Console.WriteLine("Das Fahrrad rollt.");
    }
}

// Anwendung:
IBeweglich fahrzeug = new Auto();
fahrzeug.Bewege();  // Ausgabe: Das Auto fährt.

fahrzeug = new Fahrrad();
fahrzeug.Bewege();  // Ausgabe: Das Fahrrad rollt.
```