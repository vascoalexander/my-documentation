---
created: 2025-02-24, 07:03
title: "Format Specifiers"
description: ""
sidebar_position: 3
language: C#
tags: []
draft: false
---
## Standard Numeric Formats

| **Char** | **Name**    | **Beschreibung**                                    | **Usage**       | **Ausgabe** |
| -------- | ----------- | --------------------------------------------------- | --------------- | ----------- |
| C        | Currency    | Währungsformat (z. B. Euro)                         | `{1234.56:C}`   | 1.234,56 €  |
| D        | Decimal     | Ganzzahldarstellung mit führenden Nullen (optional) | `{123:D5}`      | 00123       |
| E        | Exponential | Wissenschaftliche Notation                          | `{1234.56:E2}`  | 1,23E+003   |
| F        | Fixed-Point | Feste Anzahl an Dezimalstellen                      | `{1234.56:F2}`  | 1234,56     |
| G        | General     | Kürzeste Darstellung (Festkomma oder Exponential)   | `{1234.56:G}`   | 1234,56     |
| N        | Number      | Nummernformat mit Tausendergruppierung              | `{1234.56:N2}`  | 1.234,56    |
| P        | Percent     | Prozentformat (Wert wird mit 100 multipliziert)     | `{0.1234:P1}`   | 12,3 %      |
| R        | Round-Trip  | Präzise Formatierung für verlustfreie Umwandlung    | `{3.1415926:R}` | 3,14159265  |
| X        | Hexadecimal | Ganze Zahl in hexadezimaler Darstellung             | `{123:X}`       | 7B          |

---

## Custom Numeric Formats

| **Char**           | **Name**               | **Kurze Beschreibung**                                                                 | **Usage**         | **Ausgabe**                     |
| ------------------ | ---------------------- | -------------------------------------------------------------------------------------- | ----------------- | ------------------------------- |
| 0                  | Null-Platzhalter       | Erzwingt Ziffer; fehlt eine Ziffer, wird „0“ eingesetzt                                | `{23:0000}`       | 0023                            |
| #                  | Ziffern-Platzhalter    | Zeigt vorhandene Ziffern an; nicht vorhandene Stellen bleiben leer                     | `{5:##}`          | 5                               |
| ?                  | Platzhalter            | Zeigt Ziffer an oder ein Leerzeichen, wenn keine Ziffer vorhanden (zur Ausrichtung)    | `{5:??}`          | _5 (mit führendem Leerzeichen)_ |
| .                  | Dezimalpunkt           | Legt die Position des Dezimaltrennzeichens fest                                        | `{12.3:0.00}`     | 12,30                           |
| ,                  | Tausender-trennzeichen | Gruppiert Ziffern oder skaliert den Wert (bei mehrfacher Verwendung)                   | `{1234:#,##0}`    | 1.234                           |
| %                  | Prozent                | Multipliziert den Wert mit 100 und hängt ein Prozentzeichen an                         | `{0.123:0%}`      | 12 %                            |
| ‰                  | Promille               | Multipliziert den Wert mit 1000 und zeigt das Promillezeichen an                       | `{0.123:0‰}`      | 123‰                            |
| 'Text' oder "Text" | Literaltext            | Fügt wörtlichen Text in die Ausgabe ein (Text in Anführungszeichen bleibt unverändert) | `{1234:# 'Euro'}` | 1234 Euro                       |

_Hinweis:_ Die Ausgabe kann je nach Kultur- bzw. Ländereinstellungen variieren (hier orientiert an deutscher Formatierung).

---

```csharp
DateTime date = new DateTime(2025, 2, 24, 15, 09, 26);
Console.WriteLine($"{date:d}");
// 24.02.2025
Console.WriteLine(date.ToString("MMMM dd, yyyy")); 
// Februar 24, 2025
Console.WriteLine($"{date:dddd}, {date:dd}. {date:MMM} {date:yyyy}"); 
// Montag, 24. Feb 2025
```

## Standard DateTime Formats

|**Char**|**Name**|**Kurze Beschreibung**|**Usage**|**Ausgabe**|
|---|---|---|---|---|
|d|Short Date|Kurzformat, nur Datum|`{date:d}`|25.02.2025|
|D|Long Date|Langes Datumsformat|`{date:D}`|Dienstag, 25. Februar 2025|
|t|Short Time|Kurze Zeitangabe|`{date:t}`|15:09|
|T|Long Time|Lange Zeitangabe|`{date:T}`|15:09:26|
|f|Full (Short Time)|Langes Datum, kurze Zeit|`{date:f}`|Dienstag, 25. Februar 2025 15:09|
|F|Full (Long Time)|Langes Datum, lange Zeit|`{date:F}`|Dienstag, 25. Februar 2025 15:09:26|
|g|General (Short)|Kompakte Darstellung (Datum + kurze Zeit)|`{date:g}`|25.02.2025 15:09|
|G|General (Long)|Kompakte Darstellung (Datum + lange Zeit)|`{date:G}`|25.02.2025 15:09:26|
|M / m|Month Day|Zeigt Monat und Tag an|`{date:M}`|25. Februar|
|O / o|Round-trip|ISO 8601 Format, exakte Rundtrip-Darstellung|`{date:O}`|2025-02-25T15:09:26.0000000|

---

## Custom DateTime Formats

|**Char**|**Name**|**Kurze Beschreibung**|**Usage**|**Ausgabe**|
|---|---|---|---|---|
|yyyy|Jahr (4-stellig)|Vierstellige Jahreszahl|`{date:yyyy}`|2025|
|yy|Jahr (2-stellig)|Zweistellige Jahreszahl|`{date:yy}`|25|
|MM|Monat (2-stellig)|Monat als Zahl, zweistellig|`{date:MM}`|02|
|MMM|Monat (abgekürzt)|Abgekürzter Monatsname|`{date:MMM}`|Feb|
|MMMM|Monat (voll)|Voll ausgeschriebener Monatsname|`{date:MMMM}`|Februar|
|dd|Tag (2-stellig)|Tag des Monats, zweistellig|`{date:dd}`|25|
|ddd|Wochentag (abgekürzt)|Abgekürzter Wochentag|`{date:ddd}`|Di|
|dddd|Wochentag (voll)|Voll ausgeschriebener Wochentag|`{date:dddd}`|Dienstag|
|HH|Stunde (24h)|Stunden im 24-Stunden-Format|`{date:HH}`|15|
|hh|Stunde (12h)|Stunden im 12-Stunden-Format|`{date:hh}`|03|
|mm|Minuten|Minuten, zweistellig|`{date:mm}`|09|
|ss|Sekunden|Sekunden, zweistellig|`{date:ss}`|26|
|tt|AM/PM Designator|AM/PM Kennzeichnung (je nach Kultur z. B. "nachm.")|`{date:tt}`|nachm.|

_Hinweis: Die tatsächliche Ausgabe kann je nach Kultur- bzw. Ländereinstellungen variieren._
