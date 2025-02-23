---
created: 2025-02-23, 11:33
title: "Klassen & Objekte"
language: C#
description: ""
tags: []
---
### Simple Class with Constructor

```c
public class Person 
{
    public string Name {get, private set};
    public int Age {get, private set};

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
### Person Class with Full Name Property

```c
public class Person  
{  
    public string FirstName { get; set; }  
    public string LastName { get; set; }  
  
    public string FullName =>   
        $"{FirstName ?? "Unknown"} {LastName ?? "Unknown"}";  
}
```