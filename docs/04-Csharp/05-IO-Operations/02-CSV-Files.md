---
created: 2025-02-23, 11:05
title: "CSV Files"
language: C#
description: ""
sidebar_position: 2
tags:
  - csv
  - dictionary
---
## CSV File to Dictionary

```c
static List<Dictionary<string, string>> ReadCsvFile(string filePath)
{
	var records = new List<Dictionary<string, string>>();
	try
	{
		using (var reader = new StreamReader(filePath))
		{
			// Read the header line
			string headerLine = reader.ReadLine();
			if (headerLine == null) return records;

			var headers = headerLine.Split(',');

			// Read the remaining lines
			while (!reader.EndOfStream)
			{
				var line = reader.ReadLine();
				if (line == null) continue;

				var values = line.Split(',');
				var record = new Dictionary<string, string>();

				// Map each header to its corresponding value
				for (int i = 0; i < headers.Length && i < values.Length; i++)
				{
					record[headers[i]] = values[i];
				}
				records.Add(record);
			}
		}
	}
	catch (Exception ex)
	{
		Console.WriteLine("Error reading CSV file: " + ex.Message);
	}
	return records;
}

static void Main()
{
	string filePath = "data.csv";
	var records = ReadCsvFile(filePath);

	// Output the read records
	foreach (var record in records)
	{
		foreach (var kvp in record)
		{
			Console.Write($"{kvp.Key}: {kvp.Value}  ");
		}
		Console.WriteLine();
	}
}
```
---
## Append to CSV File

```c
static void AppendCsvRow(string filePath, Dictionary<string, string> record, List<string> fieldOrder)
{
	try
	{
		// Öffne die Datei im Append-Modus
		using (var writer = new StreamWriter(filePath, append: true))
		{
			// Erzeuge eine CSV-Zeile in der definierten Reihenfolge
			string line = string.Join(",", fieldOrder.Select(field => record.ContainsKey(field) ? record[field] : ""));
			writer.WriteLine(line);
		}
	}
	catch (Exception ex)
	{
		Console.WriteLine("Fehler beim Schreiben in die CSV-Datei: " + ex.Message);
	}
}

static void Main()
{
	string filePath = "data.csv";
	var newRecord = new Dictionary<string, string>()
	{
		{"Name", "John Doe"},
		{"Alter", "30"},
		{"Stadt", "Berlin"}
	};

	// Definiere die Reihenfolge der Felder wie in der CSV-Header-Zeile
	List<string> fieldOrder = new List<string> { "Name", "Alter", "Stadt" };

	AppendCsvRow(filePath, newRecord, fieldOrder);
	Console.WriteLine("Neuer Datensatz wurde hinzugefügt.");
}
```

## Related Links