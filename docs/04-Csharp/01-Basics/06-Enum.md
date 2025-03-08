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

## Enums und Flags

```c
namespace Enums;

[Flags] 
public enum Month
{               // In Binary
    Jan = 1,    // 000000000001
    Feb = 2,    // 000000000010
    Mar = 4,    // 000000000100
    Apr = 8,    // 000000001000
    May = 16,   // 000000010000
    Jun = 32,   // 000000100000
    Jul = 64,   // 000001000000
    Aug = 128,  // 000010000000
    Sep = 256,  // 000100000000
    Oct = 512,  // 001000000000
    Nov = 1024, // 010000000000
    Dec = 2048  // 100000000000
}

public enum ReportType
{
    Sum,
    Average,
    Min,
    Max
}
class Program
{
    static void Main()
    {
        decimal[] data = new decimal[12];
        PopulateMonthlyExpenditureData(data);

        Month months = Month.Apr | Month.Aug;
        // bitwise OR => 10001000 => flags für April und August gesetzt = 136 als int
        
        decimal[] reportData = GetReportData(months, data);

        OutputReport(ReportType.Sum, months, reportData);
        OutputReport(ReportType.Average, months, reportData);
        OutputReport(ReportType.Min, months, reportData);
        OutputReport(ReportType.Max, months, reportData);
        
        Console.ReadKey();
    }
    
    public static void OutputReport(ReportType reportType, Month includedMonths, decimal[] reportData)
    {
        switch (reportType)
        {
            case ReportType.Sum:
                Console.WriteLine($"Total expenditure for months, {includedMonths} is {reportData.Sum()}");
                break;
            case ReportType.Average:
                Console.WriteLine($"Average expenditure for months, {includedMonths} is {reportData.Average()}");
                break;
            case ReportType.Min:
                Console.WriteLine($"Min expenditure for months, {includedMonths} is {reportData.Min()}");
                break;
            case ReportType.Max:
                Console.WriteLine($"Max expenditure for months, {includedMonths} is {reportData.Max()}");
                break;
            default:
                throw new Exception("Invalid report type!");
        }
    }

    public static decimal[] GetReportData(Month months, decimal[] data)
    {
        int count = 0;
        int testMonthInclusion = 0;

        int reportDataLength = CountBits((int)months);

        decimal[] reportData = new decimal[reportDataLength];

        int index = 0;

        foreach (var item in Enum.GetValues(typeof(Month)))
        {
            testMonthInclusion = (int)months & (int)item;

            if (testMonthInclusion > 0)
            {
                index = (int)Math.Round(Math.Log((int)item, 2));

                reportData[count] = data[index];

                count++;
            }
        }

        return reportData;
    }
    public static int CountBits(int value)
    {
        // Brian Kernighans's Algorithm
        // Counts the number of set bits
        
        int count = 0;

        while (value != 0)
        {
            count++;
            value &= value - 1;
            // 10001000 & (136)
            // 10000111   (135)
            // 10000000   (128)
        }

        return count;
    }

    public static void PopulateMonthlyExpenditureData(decimal[] data)
    {
        data[0] = 5000;
        data[1] = 3000.50m;
        data[2] = 4000.30m;
        data[3] = 2000;
        data[4] = 3500;
        data[5] = 4000.20m;
        data[6] = 1000.50m;
        data[7] = 500;
        data[8] = 600;
        data[9] = 6000;
        data[10] = 3000;
        data[11] = 10000;
    }
}
```

## Related Links
[**Microsoft Docs - Enumeration Types**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)  
