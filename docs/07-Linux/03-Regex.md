---
title: "Regex"
sidebar_position: 3
description: ""
draft: false
---
Tool zum Testen von Regex-Mustern:  
[**regex101.com**](https://regex101.com/)

## Regex Quickreference

```bash
## Grundlagen
.       - Beliebiges Zeichen außer Zeilenumbruch
^       - Anfang der Zeile
$       - Ende der Zeile
*       - 0 oder mehr Wiederholungen
+       - 1 oder mehr Wiederholungen
?       - 0 oder 1 Wiederholung
{n}     - Genau n Wiederholungen
{n,}    - Mindestens n Wiederholungen
{n,m}   - Zwischen n und m Wiederholungen
|       - Oder (z.B. `a|b` matcht "a" oder "b")
()      - Gruppierung (subpatterns)
[]      - Zeichenklasse (z.B. `[a-z]` für Kleinbuchstaben)

## Häufig verwendete Zeichenklassen
\d      - Ziffern (0-9)
\D      - Keine Ziffern
\w      - Wortzeichen (a-z, A-Z, 0-9, _)
\W      - Kein Wortzeichen
\s      - Leerraum (Leerzeichen, Tab, Zeilenumbruch)
\S      - Kein Leerraum
```
## Basic Regex

| Basic Regex           | Operator    | Meaning                                                                                                                                                                                                                  |
| :-------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Period operator       | `.`         | Matches any one single character.                                                                                                                                                                                        |
| List operator         | `[ ][^ ]` | Defines a list or range of literal characters that can match one character. If the first character is the negation `^` operator, it matches any character that is not in the list.                                       |
| Asterisk operator     | `*`         | Matches zero or more instances of the previous character.                                                                                                                                                                |
| Front anchor operator | `^`         | If `^` is the first character in the pattern, then the entire pattern must be present at the beginning of the line to match. If `^` is not the first character, then it is treated as an ordinary literal `^` character. |
| Back anchor operator  | `$`         | If `$` is the last character in the pattern, then the pattern must be at the end of the line to match, otherwise, it is treated as a literal `$` character.                                                              |

## Extended Regex

| Extended Regex         | Operators | Meaning                                                                               |
| :--------------------- | :-------- | :------------------------------------------------------------------------------------ |
| Grouping operator      | `( )`     | Groups characters together to form a subpattern.                                      |
| Asterisk operator      | `*`       | Previous character (or subpattern) is present zero or more times.                     |
| Plus operator          | `+`       | Previous character (or subpattern) is present at least one or more times.             |
| Question mark operator | `?`       | Previous character (or subpattern) is present zero or one time (but not more).        |
| Curly brace operator   | `{,}`     | Specify minimum, maximum, or exact matches of the previous character (or subpattern). |
| Alternation operator   | `\|`      | Logical OR of choices. For example, `abc\|def\|xyz` matches `abc` or `def` or `xyz`.  |

## Subpatterns ()

| Pattern  | Meaning                                                              |
| :------- | :------------------------------------------------------------------- |
| `xyz+`   | Matches the `xy` string followed by one or more of the `z` character |
| `(xyz)+` | Matches one or more copies of the `xyz` string                       |
| `xyz?`   | Matches the `xy` string followed by zero or one of the `z` character |
| `x(yz)?` | Matches the `x` character followed by zero or one of the `yz` string |

## OR |

| Pattern                 | Meaning                                                           |
| :---------------------- | :---------------------------------------------------------------- |
| `abc\|xyz`              | Matches the `abc` string or the `xyz` string                      |
| `ab(c\|d\|e) / ab[cde]` | Matches the `ab` string followed by a `c` or `d` or `e` character |

## Character Classes

| Character | Legend                                                                      | Example        | Sample Match                                                                                           |
| :-------- | :-------------------------------------------------------------------------- | :------------- | :----------------------------------------------------------------------------------------------------- |
| [ … ]     | One of the characters in the brackets                                       | [AEIOU]        | One uppercase vowel                                                                                    |
| [ … ]     | One of the characters in the brackets                                       | T[ao]p         | _Tap_ or _Top_                                                                                         |
| -         | Range indicator                                                             | [a-z]          | One lowercase letter                                                                                   |
| [x-y]     | One of the characters in the range from x to y                              | [A-Z]+         | GREAT                                                                                                  |
| [ … ]     | One of the characters in the brackets                                       | [AB1-5w-z]     | One of either: A,B,1,2,3,4,5,w,x,y,z                                                                   |
| [x-y]     | One of the characters in the range from x to y                              | [ -~]+         | Characters in the printable section of the [ASCII table](http://www.asciitable.com/).                  |
| [^x]      | One character that is not x                                                 | [^a-z]{3}      | A1!                                                                                                    |
| [^x-y]    | One of the characters **not** in the range from x to y                      | [^ -~]+        | Characters that are **not** in the printable section of the [ASCII table](http://www.asciitable.com/). |
| [\d\D]    | One character that is a digit or a non-digit                                | [\d\D]+        | Any characters, including new lines, which the regular dot doesn't match                               |
| [\x41]    | Matches the character at hexadecimal position 41 in the ASCII table, i.e. A | [\x41-\x45]{3} | ABE                                                                                                    |

## Characters

| Character | Legend                                                                                   | Example    | Sample Match |
| :-------- | :--------------------------------------------------------------------------------------- | :--------- | :----------- |
| \d        | Most engines: one digit from 0 to 9                                                      | file_\d\d  | file_25      |
| \d        | .NET, Python 3: one Unicode digit in any script                                          | file_\d\d  | file_9੩      |
| \w        | Most engines: "word character": ASCII letter, digit or underscore                        | \w-\w\w\w  | A-b_1        |
| \w        | .Python 3: "word character": Unicode letter, ideogram, digit, or underscore              | \w-\w\w\w  | 字-ま_۳        |
| \w        | .NET: "word character": Unicode letter, ideogram, digit, or connector                    | \w-\w\w\w  | 字-ま‿۳        |
| \s        | Most engines: "whitespace character": space, tab, newline, carriage return, vertical tab | a\sb\sc    | a b c        |
| \s        | .NET, Python 3, JavaScript: "whitespace character": any Unicode separator                | a\sb\sc    | a b c        |
| \D        | One character that is not a _digit_ as defined by your engine's _\d_                     | \D\D\D     | ABC          |
| \W        | One character that is not a _word character_ as defined by your engine's _\w_            | \W\W\W\W\W | *-+=)        |
| \S        | One character that is not a _whitespace character_ as defined by your engine's _\s_      | \S\S\S\S   | Yoyo         |

## Quantifiers

| Quantifier | Legend              | Example        | Sample Match   |
| :--------- | :------------------ | :------------- | :------------- |
| +          | One or more         | Version \w-\w+ | Version A-b1_1 |
| `{3}`      | Exactly three times | `\D{3}`        | ABC            |
| `{2,4}`    | Two to four times   | `\d{2,4}`      | 156            |
| `{3,}`     | Three or more times | `\w{3,}`       | regex_tutorial |
| *          | Zero or more times  | A*B*C*         | AAACC          |
| ?          | Once or none        | plurals?       | plu            |


## Häufig verwendete Muster

```bash
### 1. Email-Adresse
`[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`  
✅ `test.email@domain.com`  
❌ `test.email@domain,com`  

### 2. URL
`https?://[^\s/$.?#].[^\s]*`  
✅ `https://example.com`  
✅ `http://sub.domain.net/path?query=1`  

### 3. Dateipfad (Windows)
`[a-zA-Z]:\\(?:[^<>:"/\\|?*]+\\)*[^<>:"/\\|?*]*`  
✅ `C:\Users\Name\file.txt`  
❌ `C:/Users/Name/file.txt`  

### 4. Dateipfad (Linux/Mac)
`(/[^/\0]+)+/?`  
✅ `/home/user/file.txt`  
❌ `home/user/file.txt`  

### 5. IPv4-Adresse
`\b(?:\d{1,3}\.){3}\d{1,3}\b`  
✅ `192.168.1.1`  
❌ `999.999.999.999`  

### 6. Telefonnummer (DE)
`(?:\+49|0)[1-9][0-9]{9,10}`  
✅ `+4917612345678`  
✅ `017612345678`  

### 7. Postleitzahl (DE)
`\b\d{5}\b`  
✅ `10115`  
❌ `1234`  

### 8. JSON-Formatierung prüfen
`\{(?:[^{}]|(?R))*\}`  
✅ `{"key": "value"}`  
❌ `{"key": "value"` 
(fehlt `}`)  

### 9. HTML-Tags entfernen
`<[^>]+>` → Ersetzen durch `""`  
✅ `<p>Hello</p>` → `Hello`  

### 10. Leerzeilen entfernen
`^\s*$` → Ersetzen durch `""`  
```

## Anwendungsbeispiele

### Email-Adresse prüfen (Python)
```python
import re

email = "test.email@domain.com"
pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"

if re.match(pattern, email):
    print("✅ Gültige Email")
else:
    print("❌ Ungültige Email")
```
### URL aus einem Text extrahieren (Python)
```python
import re

text = "Besuche meine Seite: https://example.com und http://test.de"
pattern = r"https?://[^\s/$.?#].[^\s]*"

urls = re.findall(pattern, text)
print("Gefundene URLs:", urls)
```
### Windows Dateipfad prüfen (Bash)
```bash
echo "C:\Users\Name\file.txt" | grep -E "^[a-zA-Z]:\\(?:[^<>:\"/\\|?*]+\\)*[^<>:\"/\\|?*]*$"
```
### Linux Dateipfad prüfen (Bash)
```bash
echo "/home/user/file.txt" | grep -E "^(/[^/\0]+)+/?$"
```
### IPv4-Adresse validieren (JavaScript)
```javascript
const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
const ip = "192.168.1.1";

if (ipPattern.test(ip)) {
    console.log("✅ Gültige IP");
} else {
    console.log("❌ Ungültige IP");
}
```
### Telefonnummer bereinigen (DE - Python)
```python
import re

number = "Meine Nummer ist +49 176 12345678"
pattern = r"(?:\+49|0)[1-9][0-9]{9,10}"
match = re.search(pattern, number)

if match:
    print("Gefundene Nummer:", match.group())
```
### Postleitzahlen filtern (Bash)
```bash
echo "Berlin 10115" | grep -Eo "\b\d{5}\b"
```
### JSON-String validieren (Python)
```python
import json

data = '{"name": "Max", "age": 25}'
try:
    json.loads(data)
    print("✅ Gültiges JSON")
except json.JSONDecodeError:
    print("❌ Ungültiges JSON")
```
### HTML-Tags entfernen (Python)
```python
import re

html = "<p>Hello <b>World</b></p>"
clean_text = re.sub(r"<[^>]+>", "", html)
print(clean_text)  # Output: Hello World
```
### Leerzeilen aus Datei entfernen (Bash)
```bash
sed '/^\s*$/d' input.txt > output.txt
```

🔥 **Zusätzliche Tipps:**  

**Python**: re.search() gibt das erste Vorkommen zurück, re.findall() alle Treffer.  
**JavaScript**: .match() gibt Treffer zurück, .replace() kann direkt ersetzen.  
**Bash**: grep -E für erweiterte Regex, sed für Ersetzungen.  