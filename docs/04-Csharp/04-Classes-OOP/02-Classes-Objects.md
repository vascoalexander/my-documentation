---
created: 2025-02-23, 11:33
title: Classes & Objects
description: ""
sidebar_position: 2
language: C#
tags:
  - Konstruktor
  - getter
  - setter
  - properties
---
## Simple Class with Constructor

```c
public class Person 
{
    public string Name {get, private set};
    public int Age {get, private set};

	// Einfacher Konstruktor
    public Person(string name, int age) 
    {
        Name = name;
        Age = age;
    }
    
	public void Greet() 
	{  
	    Console.WriteLine($"Hallo, mein Name ist {Name} " +  
	                      $"und ich bin {Age} Jahre alt.");  
	}
}

class Program 
{
    static void Main() 
    {
        Person p = new Person("Max", 30);
        p.Greet();
    }
}
```

---
## Person Class with Full Name Property

```c
public class Person  
{  
    public string FirstName { get; set; }  
    public string LastName { get; set; }  
  
    public string FullName =>   
        $"{FirstName ?? "Unknown"} {LastName ?? "Unknown"}";  
}
```

---
## Explizite Getter und Setter

```c
public class Person
{
    private string name;

    // Getter-Methode
    public string GetName()
    {
        return name;
    }

    // Setter-Methode
    public void SetName(string value)
    {
        // Hier könnte man auch Validierungen einbauen
        name = value;
    }
}

// Nutzung:
var person = new Person();
person.SetName("Max");
Console.WriteLine(person.GetName()); // Ausgabe: Max
```

---
## Properties (ausführliche Schreibweise)
Properties kapseln intern oft ein privates Feld (Backing Field) und bieten einen direkten Zugriff über eine kompakte Syntax.

```c
public class Person
{
    private string _name;

    public string Name
    {
        get { return _name; }
        set { _name = value; }  // Hier können auch Prüfungen eingebaut werden
    }
}

// Nutzung:
var person = new Person();
person.Name = "Max";
Console.WriteLine(person.Name); // Ausgabe: Max
```

---
## Expression-bodied Properties

```c
public class Papier  
{  
    private double _laenge;  
    private double _breite;  
  
    public double Laenge  
    {  
        get => _laenge;  
        set => _laenge = value;  
    }  
    public double Breite  
    {  
        get => _breite;  
        set => _breite = value;  
    }
}
```

---
## Properties (Auto-Properties)
Bei Auto-Properties übernimmt der Compiler die Erstellung eines versteckten Backing Fields

```c
public class Person 
{ 
	public string Name { get; set; } 
} 
// Nutzung: 
var person = new Person { Name = "Max" }; Console.WriteLine(person.Name); 
// Ausgabe: Max
```

---
## Konstruktor mit Überladung

```c
// man kann mehrere Konstruktoren mit verschiedenen Parametern
// definieren (Konstruktor Überladung)
class Person {
    public string Name;
    public int Age;

    // Konstruktor 1
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }

    // Konstruktor 2 (Standardwerte)
    public Person() {
        Name = "Unbekannt";
        Age = 0;
    }
}

class Program {
    static void Main() {
        Person p1 = new Person("Anna", 25);
        Person p2 = new Person();  // Standardwerte werden gesetzt

        Console.WriteLine($"{p1.Name}, {p1.Age} Jahre");
        Console.WriteLine($"{p2.Name}, {p2.Age} Jahre");
    }
}
```

---
## Konstruktor Aufruf mit this

```c
class Beispiel
{
    // Konstruktor ohne Parameter, der den anderen Konstruktor 
    // mit this(..., ...) aufruft
    public Beispiel() : this("Heute ist der ", DateTime.Today)
    {
    }
    
    // Konstruktor mit zwei Parametern
    public Beispiel(string text, DateTime datum)
    {
        Console.WriteLine(text + datum.ToShortDateString());
    }
    
    // Hauptmethode
    public static void Main(string[] args)
    {
	    Beispiel beispiel1 = new Beispiel("Morgen ist der ", DateTime.Today.AddDays(1));
        // Aufruf des ersten Konstruktors
        // Ausgabe: Morgen ist der {dd.MM.yyyy}
        
        Beispiel beispiel2 = new Beispiel();
        // Aufruf des zweiten Konstruktors
        // Ausgabe: Heute ist der {dd.MM.yyyy}
    }
}
```
---

## Method Overriding
Provides a new version of a method inherited from a parent class. Inherited method must be: virutal, abstract or already overriden.

```c
class Animal
{
	public virtual void Speak()
	{
		Console.WriteLine("The animal goes *brrr*")
	}
}
class Dog : Animal 
{
	public override void Speak()
	{
		Console.WriteLine("The dog goes *wooff*")
	}
}
```

---
## String Representation with ToString

```c
public override string ToString()
{
	return "Hello my name is " + this.name + " and I am " + this.age + " years old.";
}

// Aufruf in Main
var aPerson = new Person("Horst", 45);
Console.WriteLine(aPerson);
// output: Hello my name is Horst and I am 45 years old.
```