---
description: ""
sidebar_position: 1
title: "Prinzipien"
---
Rekursive Programmierung ist ein mächtiges Konzept in der Informatik und basiert auf der Idee, dass eine Funktion sich selbst aufruft, um ein Problem zu lösen.

### Prinzipien der Rekursiven Programmierung

1. **Basisfall (Terminationsbedingung)**  
Jede rekursive Funktion muss einen Basisfall haben, der die Rekursion stoppt. Dieser Fall gibt das Ergebnis direkt zurück, ohne einen weiteren Funktionsaufruf.
    
2. **Rekursiver Fall**  
Hier wird das Problem in kleinere Teilprobleme zerlegt, die sich der ursprünglichen Struktur des Problems ähneln. Die Funktion ruft sich selbst mit diesen kleineren Teilproblemen auf.
    
3. **Zerlegung und Wiederzusammensetzung**  
Das Problem wird in kleinere, einfachere Teilprobleme zerlegt. Nach der Lösung der Teilprobleme werden die Teilergebnisse kombiniert, um die Lösung des ursprünglichen Problems zu bilden.