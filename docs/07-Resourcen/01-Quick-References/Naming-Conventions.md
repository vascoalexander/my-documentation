---
title: "Naming Conventions"
sidebar_position: 2
description: ""
---
### Schreibweisen

| Bezeichnung   | Beispiel                     | Alternative Bezeichnung     |
| :------------ | :--------------------------- | :-------------------------- |
| camelCase     | firstName, myVariableName    | lowerCamelCase, mixedCase   |
| snake_case    | first_name, my_variable_name | lower_case_with_underscores |
| PascalCase    | FirstName, MyVariableName    | UpperCamelCase, CapWords    |
| kebab-case    | first-name, my-variable-name |                             |
| CONSTANT_CASE | MAX_VALUE, API_KEY           | SCREAMING_SNAKE_CASE        |
| train-case    | First-Name, My-Variable-Name |                             |

### Python
[**PEP 8 - Style Guide for Python Code**](https://peps.python.org/pep-0008/)

| Was                            | Wie                                            | Beispiel          |
| :----------------------------- | :--------------------------------------------- | :---------------- |
| **Module**                     | snake_case                                     | mein_modul.py     |
| **Pakete**                     | lowercase (ohne Underscores)                   | meinpaket         |
| **Klassen**                    | PascalCase                                     | MeineKlasse       |
| **Exception**                  | PascalCase (enden mit Error)                   | DateiError        |
| **Funktionen**                 | snake_case                                     | meine_funktion    |
| **Methoden**                   | snake_case                                     | meine_methode     |
| **Variablen**                  | snake_case                                     | mein_wert         |
| **Konstanten**                 | SCREAMING_SNAKE_CASE                           | MAX_WERT          |
| **Private (geschützte) Namen** | vorangestellter Unterstrich                    | _interne_Variable |
| **Magic Methods**              | zwei Unterstriche am Anfang und Ende           | `__init__`        |
| **Name Mangling**\*            | zwei Unterstriche am Anfang (class Attributes) | `__foobar`        |

*zur Vermeidung von Namenskonflikten in Unterklassen

### C#

[**Microsoft-Learn - C# Identifier Names**](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names)

| Was                           | Wie                       | Beispiel            |
| :---------------------------- | :------------------------ | :------------------ |
| **Klasse**                    | PascalCase                | MeineKlasse         |
| **Struktur**                  | PascalCase                | MeineStruktur       |
| **Schnittstelle (Interface)** | PascalCase mit "I"-Präfix | IMeineSchnittstelle |
| **Methode**                   | PascalCase                | BerechneWert        |
| **Eigenschaft (Property)**    | PascalCase                | MeinWert            |
| **Ereignis (Event)**          | PascalCase                | WertGeaendert       |
| **Feld (privat)**             | _camelCase                | _meinFeld           |
| **Parameter**                 | camelCase                 | parameterName       |
| **Lokale Variable**           | camelCase                 | lokaleVariable      |
| **Konstante**                 | PascalCase                | MaxWert             |
| **Enumeration**               | PascalCase                | Wochentag           |
| **Enum-Mitglied**             | PascalCase                | Montag              |
| **Namespace**                 | PascalCase                | MeinProjekt         |
| **Delegat**                   | PascalCase                | MeinDelegate        |
