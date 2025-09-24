---
title: "COBOL"
---

## Divisionen

### Identification Division
| **Klausel**    | **Verwendung**                         | **Beispiel**                |
| -------------- | -------------------------------------- | --------------------------- |
| `PROGRAM-ID`   | Definiert den Programmnamen (Pflicht). | `PROGRAM-ID. DEMO.`         |
| `AUTHOR`       | Dokumentiert den Autor.                | `AUTHOR. MAX MUSTERMANN`    |
| `DATE-WRITTEN` | Dokumentiert Erstellungsdatum.         | `DATE-WRITTEN. 2025-09-18.` |
| `INSTALLATION` | Installation/Umgebung beschreiben.     | `INSTALLATION. MAINFRAME.`  |

### Environment Division
|**Klausel**|**Verwendung**|**Beispiel**|
|---|---|---|
|`CONFIGURATION SECTION`|Hardware/Software-Umgebung beschreiben.|`SOURCE-COMPUTER. IBM-370.`|
|`INPUT-OUTPUT SECTION`|Dateizugriffe deklarieren.|`FILE-CONTROL.`|
|`SELECT`|Definiert logische Datei.|`SELECT CUSTOMER-FILE ASSIGN TO "cust.dat".`|
|`ASSIGN`|Verknüpft logische Datei mit physischer Datei.|`ASSIGN TO "data.txt".`|
|`ORGANIZATION`|Dateiorganisation festlegen (z. B. SEQUENTIAL, INDEXED).|`ORGANIZATION IS SEQUENTIAL.`|
|`ACCESS MODE`|Zugriffsart (SEQUENTIAL, RANDOM, DYNAMIC).|`ACCESS MODE IS RANDOM.`|

### Data Division
|**Klausel**|**Verwendung**|**Beispiel**|
|---|---|---|
|`FILE SECTION`|Dateibeschreibungen.|`FD CUSTOMER-FILE.`|
|`WORKING-STORAGE SECTION`|Temporäre Variablen.|`01 TOTAL PIC 9(5).`|
|`LINKAGE SECTION`|Übergabeparameter (z. B. von anderen Programmen).|`01 ARGUMENT PIC X(20).`|
|`PIC` (PICTURE)|Datentyp und Länge definieren.|`PIC 9(5)V99.`|
|`VALUE`|Anfangswert zuweisen.|`VALUE "Y".`|
|`OCCURS`|Arrays/Tabellen definieren.|`OCCURS 10 TIMES.`|
|`REDEFINES`|Gleichen Speicherbereich mehrfach verwenden.|`REDEFINES DATE-STR.`|
|`RENAMES`|Mehrere Felder logisch zusammenfassen.|`66 GROUP-NAME RENAMES FIELD-1 THRU FIELD-3.`|
|`USAGE`|Speicherformat festlegen (z. B. DISPLAY, COMP, COMP-3).|`USAGE COMP.`|
|`INDEXED BY`|Index für eine Tabelle.|`OCCURS 100 TIMES INDEXED BY IDX.`|
|`JUSTIFIED`|Ausrichtung (links/rechts) für Strings.|`JUSTIFIED RIGHT.`|
|`SIGN`|Vorzeichenformat bei numerischen Feldern.|`PIC S9(5) SIGN TRAILING.`|
|`LEVEL-88`|Condition Names (boolesche Konstanten).|`88 VALID-FLAG VALUE "Y".`|
|`COPY`|Copybooks einbinden.|`COPY CUSTOMER-REC.`|

### Procedure Division
| **Klausel**      | **Verwendung**                                                              | **Beispiel**                                                     |
| ---------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `PERFORM`        | Ausführen von Paragraphen/Sections (ähnlich Funktionsaufruf oder Schleife). | `PERFORM MAIN-PARA.` `PERFORM UNTIL FLAG = "Y" ... END-PERFORM.` |
| `MOVE`           | Wertzuweisung.                                                              | `MOVE 100 TO TOTAL.`                                             |
| `DISPLAY`        | Ausgabe auf Konsole.                                                        | `DISPLAY "HELLO".`                                               |
| `ACCEPT`         | Eingabe vom Benutzer/System.                                                | `ACCEPT USER-NAME.`                                              |
| `IF / ELSE`      | Bedingte Anweisungen.                                                       | `IF TOTAL > 0 DISPLAY "OK" ELSE DISPLAY "ERR".`                  |
| `EVALUATE`       | Mehrfachverzweigung (ähnlich `switch`).                                     | `EVALUATE TRUE WHEN A > 0 DISPLAY "POSITIVE".`                   |
| `INITIALIZE`     | Variablen zurücksetzen.                                                     | `INITIALIZE CUSTOMER-REC.`                                       |
| `READ`           | Datensatz aus Datei lesen.                                                  | `READ CUSTOMER-FILE INTO WS-CUST.`                               |
| `WRITE`          | Datensatz in Datei schreiben.                                               | `WRITE OUT-REC.`                                                 |
| `OPEN` / `CLOSE` | Dateien öffnen/schließen.                                                   | `OPEN INPUT CUSTOMER-FILE.`                                      |
| `STOP RUN`       | Programm beenden.                                                           | `STOP RUN.`                                                      |