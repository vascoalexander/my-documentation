---
created: 2025-02-25, 18:26
title: User Input
description: ""
sidebar_position: 3
draft: false
tags:
    - Console
    - TryParse
---
## Console Abfrage

```c
static void PwAbfrage()
{
	Console.Write("Eingabe PW: ");
	Console.WriteLine(
	Console.ReadLine() == "1234"
		? "Zugriff erlaubt"
		: "Zugriff verweigert");
}
```
---  

## Console Menu

```c
static void Menu()  
{  
    Console.WriteLine("Option wählen:");  
    Console.WriteLine("1) Option1");  
    Console.WriteLine("2) Option2");  
    Console.WriteLine("3) Option3");  
    Console.Write("Ihre Eingabe: ");  
}
```

---
## Menu Choice

```c
static int MenuChoice()  
{  
    var choice = 0;  
    while ((!int.TryParse(Console.ReadLine(), out choice) && choice < 1) || choice > 3)  
    {        
	    Console.Clear();  
        Console.WriteLine("Ungültige Eingabe!");  
        Menu();  
    }    
    return choice;  
}
```
---

## TryParse (Loop)

```c
Console.Write("Enter a number: ");
string input = Console.ReadLine()!;  
bool isNumber = int.TryParse(input, out int result);

if (isNumber)  
    Console.WriteLine("The number is: " + input);
else
	Console.WriteLine("Thats not a number, IDIOT!");
```

```c
string input = "";  
do  
{  
	Console.Write("Enter a number: ");  
	input = Console.ReadLine()!;
} while (!int.TryParse(input, out int number));  

Console.WriteLine("The number is: " + input);  
```

---
## WaitForKeyPress

```c
private static void WaitForKeyPress()  
{  
    Console.WriteLine("Any key to continue...");  
    Console.ReadKey();  
}
```
---

## String with Default Fallback

```c
// person class mit feld FirstName vorausgesetzt
string firstName = person?.FirstName ?? "Unknown";
Console.WriteLine(firstName);
```

---
## string.isNullOrEmpty

```c
string input = Console.ReadLine()!;
char guess = !string.IsNullOrEmpty(input) ? input[0] : '_';
// outputs first char of input or _ if input is null
```