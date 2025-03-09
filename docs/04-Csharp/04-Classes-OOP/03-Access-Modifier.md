---
created: 2025-03-09, 11:33
title: Access Modifiers
description: ""
sidebar_position: 3
draft: false
---
**Definition Assembly**

Eine Assembly ist in der .NET-Welt die kleinste zusammenhängende Einheit, die vom Laufzeitsystem (CLR) verwaltet wird. Sie entsteht durch den Kompilierungsprozess und wird in Form einer ausführbaren Datei (.exe) oder einer dynamischen Linkbibliothek (.dll) bereitgestellt. Eine Assembly enthält:

- **Den kompilierten Code** in Intermediate Language (IL), der von der CLR zur Ausführung in nativen Maschinencode umgewandelt wird.
- **Ein Manifest**, das Metadaten über die Assembly bereitstellt – dazu gehören Versionierung, Kultur, Abhängigkeiten zu anderen Assemblies und eine Übersicht der enthaltenen Typen.
- **Optionale Ressourcen** wie Bilder, Texte oder andere Dateien, die innerhalb der Assembly eingebettet sind.

**Access Modifier**

- **public**  
    Auf Mitglieder, die als _public_ deklariert sind, kann **von überall** zugegriffen werden – also aus derselben Assembly sowie aus anderen Projekten, die auf diese Assembly verweisen.
    
- **private**  
    Mitglieder, die als _private_ markiert sind, sind **ausschließlich innerhalb der eigenen Klasse** oder Struktur sichtbar. Das ist die restriktivste Zugriffsebene und die Standardeinstellung, wenn kein Modifizierer angegeben wird.
    
- **internal**  
    Mit _internal_ deklarierte Mitglieder sind **nur innerhalb der gleichen Assembly** zugänglich. Dadurch bleibt der Zugriff auf den Code auf das aktuelle Projekt beschränkt, während er für externe Assemblies unsichtbar bleibt.
    
- **protected**  
    _Protected_-Mitglieder sind innerhalb der eigenen Klasse sowie in allen Klassen, die davon erben (**abgeleitete Klassen**), zugänglich – auch wenn diese in einer anderen Assembly definiert sind.
    
- **protected internal**  
    Dieser Modifizierer kombiniert _protected_ und _internal_: Ein Mitglied kann entweder innerhalb derselben Assembly (wie bei _internal_) oder in abgeleiteten Klassen (wie bei _protected_) verwendet werden. Es gilt also eine ODER-Bedingung.
    
- **private protected**  
    Mit _private protected_ wird der Zugriff weiter eingeschränkt: Das Mitglied ist nur in der eigenen Klasse und in abgeleiteten Klassen verfügbar, jedoch nur innerhalb derselben Assembly. Somit verhindert dieser Modifizierer den Zugriff aus abgeleiteten Klassen in anderen Assemblies.
    

Diese Zugriffsmodifizierer helfen dabei, die Sichtbarkeit von Klassen und deren Mitgliedern gezielt zu steuern und so eine saubere Kapselung und Strukturierung des Codes zu erreichen.