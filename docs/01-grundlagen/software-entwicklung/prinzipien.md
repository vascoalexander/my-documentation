---
description: ""
sidebar_position: 3
title: "Prinzipien"
---
### DRY
Das **DRY-Prinzip** (Don't Repeat Yourself) ist ein fundamentales Konzept der Softwareentwicklung, das besagt, dass Redundanz vermieden werden sollte. Jede Information oder Logik sollte nur einmal existieren, um Wartung, Erweiterbarkeit und Lesbarkeit zu verbessern.

**Warum ist DRY wichtig?**
- **Vermeidung von Inkonsistenzen** – Mehrere Kopien derselben Logik führen zu Fehlern, wenn nur eine Stelle aktualisiert wird.
- **Erhöhte Wartbarkeit** – Änderungen müssen nur an einer Stelle vorgenommen werden.
- **Kürzerer und verständlicher Code** – Weniger Wiederholungen bedeuten besseren Überblick.

## KISS
Das **KISS-Prinzip** (Keep It Simple, Stupid) ist ein Designgrundsatz, der besagt, dass Systeme, Code oder Prozesse so einfach wie möglich gehalten werden sollten. Es stammt aus der Softwareentwicklung, wird aber auch in anderen Bereichen wie Ingenieurwesen, Design und Projektmanagement angewendet.

#### Kernidee  
Komplexität erhöht die Fehleranfälligkeit, Wartungskosten und die Einarbeitungszeit. Eine einfache Lösung ist oft effektiver und langlebiger als eine übermäßig komplizierte.

#### Anwendung in der Softwareentwicklung  
**Lesbarkeit:** Einfacher Code ist leichter zu verstehen und zu debuggen.  
**Wartbarkeit:** Weniger Abhängigkeiten und verschachtelte Strukturen erleichtern Änderungen.  
**Effizienz:** Komplexität kann unnötige Ressourcen beanspruchen.  
**Fehlerminimierung:** Je einfacher der Code, desto weniger Fehlerquellen gibt es.  

#### Beispiel
```c title="Schlecht (zu kompliziert)"
string ReverseString(string input) {
    char[] array = input.ToCharArray();
    Array.Reverse(array);
    return new string(array);
}
```
```c title="Einfacher (KISS)"
string ReverseString(string input) => new string(input.Reverse().ToArray());
```
Das zweite Beispiel ist prägnanter, verständlicher und nutzt eingebaute Funktionen.
## SOLID

### 1. Single Responsibility Principle (SRP)
 -> **Eine Klasse, eine Aufgabe**

> _"Eine Klasse sollte nur einen einzigen Grund zur Änderung haben."_  
> Jede Klasse sollte genau **eine Verantwortung** haben, damit sie leicht verständlich und wartbar bleibt.

<details>
<summary>Beispiel</summary>

```c title="Schlecht"
class Report {
    public void GenerateReport() { /* Report generieren */ }
    public void SaveToFile() { /* Datei speichern */ }
}
```
```c title="Besser"
class Report {
    public void Generate() { /* Report generieren */ }
}

class ReportSaver {
    public void SaveToFile(Report report) { /* Datei speichern */ }
}

```
**Trennung von Berichtserstellung und Speichern.**  
</details>

### 2. Open/Closed Principle (OCP)
-> **Offen für Erweiterung, geschlossen für Modifikation**

> _"Software-Entitäten sollten erweiterbar, aber nicht durch Änderungen modifizierbar sein."_  
> Statt Code zu ändern, sollten neue Funktionalitäten durch **Erweiterung** hinzugefügt werden.

<details>
<summary>Beispiel</summary>

```c title="Schlecht"
class PaymentProcessor {
    public void ProcessPayment(string type) {
        if (type == "CreditCard") { /* Kreditkarte */ }
        else if (type == "PayPal") { /* PayPal */ }
    }
}
```
```c title="Besser"
interface IPaymentMethod {
    void Pay();
}

class CreditCardPayment : IPaymentMethod {
    public void Pay() { /* Kreditkarte */ }
}

class PayPalPayment : IPaymentMethod {
    public void Pay() { /* PayPal */ }
}

class PaymentProcessor {
    public void ProcessPayment(IPaymentMethod payment) {
        payment.Pay();
    }
}
```
**Leicht erweiterbar ohne bestehende Code-Änderungen.**  
</details>

### 3. Liskov Substitution Principle (LSP)
-> **Ersetzbarkeit von Unterklassen**

> _"Eine Unterklasse muss sich wie ihre Oberklasse verhalten können."_  
> Eine Unterklasse sollte sich **ohne Seiteneffekte** anstelle der Oberklasse einsetzen lassen.

<details>
<summary>Beispiel</summary>

```c title="Schlecht"
class Bird {
    public virtual void Fly() { }
}

class Penguin : Bird {
    public override void Fly() {
        throw new NotImplementedException(); // ❌ Pinguine können nicht fliegen!
    }
}
```
```c title="Besser"
abstract class Bird { }
interface IFlyable { void Fly(); }

class Sparrow : Bird, IFlyable {
    public void Fly() { /* Fliegen */ }
}

class Penguin : Bird { /* Kein Fly() notwendig */ }
```
**Pinguine müssen nicht fliegen können.**  
</details>

### 4. Interface Segregation Principle (ISP)
-> **Spezialisierte Schnittstellen statt einer großen**

> _"Clients sollten nicht von Interfaces abhängig sein, die sie nicht nutzen."_  
> Statt eine riesige Schnittstelle zu haben, sollten mehrere kleine, spezialisierte Interfaces verwendet werden.

<details>
<summary>Beispiel</summary>

```c title="Schlecht"
interface IWorker {
    void Work();
    void Eat();
}

class Robot : IWorker {
    public void Work() { /* Arbeiten */ }
    public void Eat() { throw new NotImplementedException(); } // Roboter essen nicht!
}

```

```c title="Besser"
interface IWorkable { void Work(); }
interface IEatable { void Eat(); }

class Human : IWorkable, IEatable {
    public void Work() { /* Arbeiten */ }
    public void Eat() { /* Essen */ }
}

class Robot : IWorkable {
    public void Work() { /* Arbeiten */ }
}
```
**Kein unnötiger Code für Roboter.**  
</details>

### 5. Dependency Inversion Principle (DIP)
-> **Abhängigkeiten von Abstraktionen statt konkreten Implementierungen**

> _"Module höherer Ebenen sollten nicht von Modulen niedriger Ebenen abhängen. Beide sollten von Abstraktionen abhängen."_  
> Statt konkrete Klassen zu verwenden, sollte mit Schnittstellen oder Abstraktionen gearbeitet werden.

<details>
<summary>Beispiel</summary>

```c title="Schlecht"
class LightBulb {
    public void TurnOn() { /* Licht an */ }
}

class Switch {
    private LightBulb bulb = new LightBulb();
    
    public void Operate() {
        bulb.TurnOn();
    }
}
```
```c title="Besser"
interface ISwitchable {
    void TurnOn();
}

class LightBulb : ISwitchable {
    public void TurnOn() { /* Licht an */ }
}

class Switch {
    private ISwitchable device;
    
    public Switch(ISwitchable device) {
        this.device = device;
    }

    public void Operate() {
        device.TurnOn();
    }
}
```
**Flexibel für andere Geräte, nicht nur Glühbirnen.**  
</details>

### Zusammenfassung

| Prinzip                         | Bedeutung                                               | Vorteil                        |
| ------------------------------- | ------------------------------------------------------- | ------------------------------ |
| **SRP** (Single Responsibility) | Eine Klasse, eine Aufgabe                               | Erhöht Wartbarkeit             |
| **OCP** (Open/Closed)           | Offen für Erweiterung, geschlossen für Modifikation     | Bessere Erweiterbarkeit        |
| **LSP** (Liskov Substitution)   | Unterklassen müssen sich wie Oberklassen verhalten      | Keine unerwarteten Fehler      |
| **ISP** (Interface Segregation) | Spezialisierte Schnittstellen statt riesiger Interfaces | Keine unnötigen Abhängigkeiten |
| **DIP** (Dependency Inversion)  | Abhängig von Abstraktionen, nicht von Implementierungen | Flexibler und testbarer Code   |
