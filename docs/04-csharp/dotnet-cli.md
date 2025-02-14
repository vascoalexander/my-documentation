---
description: ""
sidebar_position: 2
title: ".NET CLI"
---
## Arbeiten mit Projekten
```
# .NET SDK Version prüfen
dotnet --version

# Neues Projekt erstellen
dotnet new console -o MeinProjekt
cd MeinProjekt

# Projekt ausführen
dotnet run

# Lösung (Solution) erstellen und Projekt hinzufügen
dotnet new sln -n MeineLoesung
dotnet sln MeineLoesung.sln add MeinProjekt/MeinProjekt.csproj
```
## Abhängigkeiten verwalten
```
# Abhängigkeiten verwalten (NuGet)
dotnet add package Newtonsoft.Json            # Paket hinzufügen
dotnet remove package Newtonsoft.Json         # Paket entfernen
dotnet list package                           # Installierte Pakete auflisten
dotnet restore                                # Alle Abhängigkeiten neu installieren

# NuGet Feed konfigurieren
dotnet nuget add source "https://api.nuget.org/v3/index.json" --name nuget.org
dotnet nuget list source                      # Verfügbare Quellen anzeigen
dotnet nuget remove source nuget.org          # Quelle entfernen

# NuGet Cache verwalten
dotnet nuget locals all --clear               # Cache leeren
dotnet nuget locals http-cache --clear        # Nur HTTP-Cache leeren
dotnet nuget locals global-packages --list    # Installierte Pakete anzeigen

# Paket aus einer lokalen NuGet-Sammlung installieren
dotnet add package MeinPaket --source ./mein-nuget-feed

# Paket veröffentlichen
dotnet nuget push MeinPaket.nupkg -k API_KEY -s https://api.nuget.org/v3/index.json
```
## Arbeiten mit dem Code
```
# Build-Prozess
dotnet build                                  # Kompiliert das Projekt
dotnet build --configuration Release          # Für eine Release-Version

# Tests ausführen
dotnet test

# Projekt veröffentlichen
dotnet publish -c Release -r win-x64 --self-contained false

# Globale Tools installieren und verwalten
dotnet tool install -g dotnet-ef
dotnet tool update -g dotnet-ef
dotnet tool list -g

# Entity Framework Core Migrationen (falls EF installiert ist)
dotnet ef migrations add InitialCreate
dotnet ef database update

# Code-Analyse und Formatierung
dotnet format
dotnet clean

# Performance-Analyse
dotnet watch run   # Beobachtet Änderungen und startet neu
dotnet trace collect --process-id <PID>  # Traced laufende App

# Infos zu installierten SDKs und Laufzeiten
dotnet --list-sdks
dotnet --list-runtimes
```