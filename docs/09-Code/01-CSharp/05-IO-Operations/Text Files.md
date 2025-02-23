---
created: 2025-02-23, 11:05
language: C#
description: ""
tags:
  - using
  - txt
  - streamreader
  - readalltext
---
### ReadAllText()

```c
string filePath = "beispiel.txt";
try
{
	// Liest den gesamten Inhalt der Datei als String ein
	string content = File.ReadAllText(filePath);
	Console.WriteLine(content);
}
catch (Exception ex)
{
	Console.WriteLine("Fehler beim Lesen der Datei: " + ex.Message);
}
```

### Using + Streamreader

```c
// besser geeignet als File.ReadAllText() bei großen dateien
using (var streamReader = new StreamReader(@"C:\file.txt"))
{
    string content = streamReader.ReadToEnd();
    Console.WriteLine(content);
}
```

### Write to new File

```c
static void Main()
{
	string filePath = "neue_datei.txt";
	string sourceText = "Das ist der Quelltext, der gespeichert werden soll.";
	
	try
	{
		// Öffnet die Datei im Schreibmodus (überschreibt bestehende Datei)
		// und schreibt den Text hinein
		using (StreamWriter writer = new StreamWriter(filePath, false))
		{
			writer.Write(sourceText);
		}
		Console.WriteLine("Text wurde in die Datei geschrieben.");
	}
	catch (Exception ex)
	{
		Console.WriteLine("Fehler beim Schreiben in die Datei: " + ex.Message);
	}
}
```