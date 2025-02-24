---
created: 2025-02-23, 14:37
title: 'Enums'
description: ""
sidebar_position: 6
language: C#
tags:
  - menu
  - switch
  - enum
---
Enums in C# sind eine Gruppe zusammengehöriger Konstanten.

## Enum.GetName()
```c
public enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 3
}

string name = Enum.GetName(typeof(Color), 2);
Console.WriteLine(name); // Ausgabe: GREEN
```
---
## Cast zu numerischen Typen
In C# sind Enums im Grunde genommen benannte numerische Konstanten.
```c
enum Wochentage { Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag }

Wochentage heute = Wochentage.Dienstag;
int tagesnummer = (int)heute; // tagesnummer ist 1
```
---
## Numerische Typen zu Enums
```c
Wochentage tag = (Wochentage)2; // tag ist Wochentage.Mittwoch
```
---
## Enum.Parse
C# bietet die `Enum.Parse()`- und `Enum.TryParse()`-Methoden, um Strings in Enum-Werte zu konvertieren.

```c
Wochentage tag = (Wochentage)Enum.Parse(typeof(Wochentage), "Freitag");
```
---
## Iterieren über ein enum
Die `Enum.GetValues()`-Methode gibt ein Array mit den Werten der konstanten Elemente eines angegebenen Enumerationstyps zurück.
```c
enum Wochentage { Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag }

Array wochentage = Enum.GetValues(typeof(Wochentage));
foreach (Wochentage tag in wochentage)
{
    Console.WriteLine(tag);
}
```
---
## Enum mit Extensionklasse
```c
public enum Color
{
    Red,
    Green,
    Blue
}

public static class ColorExtensions
{
    public static string Description(this Color color)
    {
        switch (color)
        {
            case Color.Red:
                return "This is red";
            case Color.Green:
                return "This is green";
            case Color.Blue:
                return "This is blue";
            default:
                return "Unknown color";
        }
    }
}

// Verwendung:
Color myColor = Color.Green;
string description = myColor.Description();
Console.WriteLine(description); // Ausgabe: This is green
```
---
## Enum mit switch case

```c
enum MenuOptionen  
{  
	NeueDatei,  
	DateiÖffnen,  
	DateiSpeichern,  
	Beenden  
}

static void Main()  
{        
	switch (GetMenuChoice())  
	{            
		case MenuOptionen.NeueDatei:  
			Console.WriteLine("Neue Datei wird erstellt...");  
			break;  
		case MenuOptionen.DateiÖffnen:  
			Console.WriteLine("Datei wird geöffnet...");  
			break;  
		case MenuOptionen.DateiSpeichern:  
			Console.WriteLine("Datei wird gespeichert...");  
			break;  
		case MenuOptionen.Beenden:  
			Console.WriteLine("Anwendung wird beendet...");  
			Environment.Exit(0);  
			break;  
		default:  
			Console.WriteLine("Ungültige Option.");  
			break;  
	}    
}

static MenuOptionen GetMenuChoice()  
{        
	Console.WriteLine("Bitte wählen Sie eine Option:");  
	Console.WriteLine("1. Neue Datei");  
	Console.WriteLine("2. Datei öffnen");  
	Console.WriteLine("3. Datei speichern");  
	Console.WriteLine("4. Beenden");  

	int choice;  
	while (!int.TryParse(Console.ReadLine(), out choice))  
		Console.WriteLine("Ungültige Eingabe.");  
	return (MenuOptionen)(choice - 1);  
}
```
---
```c
public enum VerbindungsStatus
{
	Getrennt,
	Verbindet,
	Verbunden,
	Fehler
}

public void VerbindungsStatusVerarbeiten(VerbindungsStatus status)
{
	switch (status)
	{
		case VerbindungsStatus.Getrennt:
			// Logik zum Herstellen einer Verbindung
			break;
		case VerbindungsStatus.Verbindet:
			// Logik, während der Verbindungsvorgang läuft
			break;
		case VerbindungsStatus.Verbunden:
			// Logik für eine aktive Verbindung
			break;
		case VerbindungsStatus.Fehler:
			// Fehlerbehandlungslogik
			break;
		default:
			break;
	}
}
```
---
```c
public enum BenutzerRolle
{
	Administrator,
	Moderator,
	Benutzer,
	Gast
}

public bool HatZugriff(BenutzerRolle rolle, string ressource)
{
	switch (rolle)
	{
		case BenutzerRolle.Administrator:
			return true;
		case BenutzerRolle.Moderator:
			return ressource != "Admin-Bereich";
		case BenutzerRolle.Benutzer:
			return ressource == "Benutzer-Bereich";
		case BenutzerRolle.Gast:
			return false;
		default:
			return false;
	}
}
```

## Related Links
[**Microsoft Docs - Enumeration Types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)  
