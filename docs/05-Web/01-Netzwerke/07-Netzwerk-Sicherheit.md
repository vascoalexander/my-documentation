---
description: ""
title: "Netzwerk Sicherheit"
---
## Firewalls

Eine **Firewall** ist eine sicherheitsrelevante Netzwerktechnologie, die den ein- und ausgehenden Datenverkehr in einem Netzwerk überwacht und kontrolliert. Sie arbeitet nach vordefinierten Sicherheitsrichtlinien, um unerlaubte Zugriffe oder gefährliche Datenpakete zu blockieren und so Netzwerke und Geräte zu schützen.

### Grundkonzept
- Eine Firewall sitzt typischerweise zwischen zwei Netzwerken, z. B. zwischen dem internen Netzwerk eines Unternehmens und dem Internet.
- Sie überwacht den gesamten Datenverkehr, der von einem Netzwerk ins andere gelangt, und trifft Entscheidungen darüber, welche Verbindungen oder Datenpakete zugelassen oder blockiert werden. Diese Entscheidungen basieren auf vordefinierten Regeln oder dynamischen Sicherheitspolicies.

### Firewall-Typen
Es gibt verschiedene Arten von Firewalls, die auf unterschiedlichen Ebenen des OSI-Modells arbeiten. Die wichtigsten Typen sind:

#### Paketfilter-Firewall (Packet Filtering Firewall)
- Diese Firewall arbeitet auf der **Netzwerkschicht (Layer 3)** und **Transportschicht (Layer 4)** des OSI-Modells.
- Sie untersucht die Kopfzeilen jedes Datenpakets und trifft Entscheidungen basierend auf bestimmten Kriterien wie:
    - **IP-Adressen**: Herkunft und Ziel des Pakets (Quell- und Ziel-IP-Adresse).
    - **Ports**: Verwendete Quell- und Ziel-Ports (z. B. Port 80 für HTTP).
    - **Protokoll**: Das verwendete Netzwerkprotokoll (z. B. TCP, UDP, ICMP).
- Sie ist recht einfach und blockiert oder lässt Pakete auf Basis statischer Regeln durch, ohne die Inhalte der Pakete zu analysieren.
- **Beispiel**: Ein Paket von einer unbekannten IP-Adresse könnte abgelehnt werden, oder nur Pakete, die über den HTTP-Port 80 kommen, werden zugelassen.

#### Stateful Inspection Firewall
- Diese Firewall erweitert die Paketfilterung, indem sie den **Zustand der Verbindung** verfolgt. Sie arbeitet ebenfalls auf Layer 3 und Layer 4, aber intelligenter.
- Sie verfolgt aktive Verbindungen und kann erkennen, ob ein Paket Teil einer bestehenden, autorisierten Sitzung ist. Nur Pakete, die zu einer erlaubten Sitzung gehören, werden zugelassen.
- **Beispiel**: Wenn du eine Webseite besuchst, verfolgt die Firewall deine ausgehende Anforderung und lässt nur die Antwort von dieser Webseite zu. Unerwünschte oder unerwartete Antworten von anderen Quellen werden blockiert.

#### Proxy-Firewall (Application-Level Firewall)
- Diese Firewall arbeitet auf der **Anwendungsschicht (Layer 7)** und fungiert als Vermittler zwischen dem internen Netzwerk und externen Servern.
- Sie analysiert nicht nur den Paket-Header, sondern auch den **Inhalt der Pakete**, um Entscheidungen zu treffen. Sie kann bösartigen Datenverkehr auf Protokollebene erkennen, z. B. wenn jemand versucht, ein Sicherheitsloch in einer Webanwendung auszunutzen.
- Ein Proxy-Server nimmt Datenanforderungen entgegen und sendet sie im Namen des Benutzers an die entsprechenden Server. Die Antwort des Servers wird ebenfalls durch den Proxy geleitet.
- **Beispiel**: Eine Proxy-Firewall könnte den Inhalt eines HTTP-Datenpakets analysieren und verdächtige Zeichenfolgen, wie SQL-Injections, herausfiltern, bevor sie den internen Server erreichen.

#### Next-Generation Firewall (NGFW)
- Diese modernen Firewalls kombinieren die Funktionen der oben genannten Typen und bieten zusätzliche Features wie:
    - **Deep Packet Inspection (DPI)**: Sie analysieren nicht nur die Header, sondern den gesamten Inhalt des Pakets.
    - **Intrusion Detection and Prevention Systems (IDPS)**: Sie erkennen und verhindern Angriffe auf das Netzwerk.
    - **Application Awareness**: Sie erkennen, welche Anwendungen hinter dem Netzwerkverkehr stehen (z. B. YouTube, Facebook) und können basierend darauf Regeln anwenden.
- **Beispiel**: Eine NGFW könnte spezifische Regeln für Social-Media-Apps auf mobilen Geräten in einem Firmennetzwerk durchsetzen, während andere Datenströme wie Videokonferenzen bevorzugt behandelt werden.

### Funktionsweise im Detail

#### Paketfilterung
- Die Firewall prüft jedes Datenpaket, das das Netzwerk durchquert, basierend auf vordefinierten Regeln (wie Quell-IP, Ziel-IP, Portnummer, Protokoll).
- Wenn ein Paket die Kriterien erfüllt, wird es weitergeleitet, ansonsten verworfen.

#### Stateful Inspection
- Die Firewall führt eine **Verbindungstabelle**, in der alle aktiven Verbindungen aufgelistet sind. Sie überprüft nicht nur die Pakete selbst, sondern auch, ob sie zu einer legitimen Sitzung gehören.
- Pakete, die zu bestehenden Verbindungen gehören, dürfen passieren, während unangeforderte Pakete blockiert werden.

#### Deep Packet Inspection (DPI)
- Bei DPI untersucht die Firewall den gesamten Inhalt der Datenpakete. Sie kann so tief in die Datenströme blicken, dass sie schädliche Inhalte wie Viren, Würmer, Trojaner oder andere schadhafte Muster erkennt.
- Dies ermöglicht es, bösartigen Verkehr zu blockieren, auch wenn dieser über erlaubte Verbindungen oder Protokolle gesendet wird.

#### Zugriffskontrolllisten (ACLs)
- Firewalls nutzen ACLs, um festzulegen, welche Arten von Netzwerkverkehr zugelassen oder blockiert werden sollen.
- **Beispiel**: Eine Regel könnte alle eingehenden Anfragen auf Port 80 (HTTP) zulassen, aber eingehenden Datenverkehr auf Port 23 (Telnet) blockieren, da Telnet unsicher ist.

#### Weitere Funktionen moderner Firewalls
- **VPN-Unterstützung**: Firewalls können auch als Endpunkte für Virtual Private Networks (VPNs) fungieren, indem sie den VPN-Datenverkehr verschlüsseln und entschlüsseln.
- **NAT (Network Address Translation)**: Firewalls bieten oft NAT-Funktionen, um private IP-Adressen in öffentliche IP-Adressen zu übersetzen und so die Anzahl der öffentlich sichtbaren IP-Adressen zu reduzieren.
- **Logging und Überwachung**: Firewalls protokollieren alle Aktivitäten und Vorfälle, sodass Netzwerkadministratoren potenzielle Sicherheitsprobleme erkennen und analysieren können.
- **Intrusion Detection und Prevention**: Moderne Firewalls können auch als **Intrusion Detection Systems (IDS)** oder **Intrusion Prevention Systems (IPS)** fungieren, um verdächtige Aktivitäten zu erkennen und Angriffe aktiv zu verhindern.
### Fazit:
Eine Firewall schützt Netzwerke, indem sie den Datenverkehr kontrolliert und überwacht, unerwünschten Datenverkehr blockiert und potenzielle Angriffe erkennt. Sie funktioniert auf verschiedenen Ebenen des OSI-Modells und kann sowohl einfache als auch hochkomplexe Prüfungen des Netzwerkverkehrs durchführen, je nach Typ und Funktionalität der Firewall. Moderne Firewalls bieten umfassende Funktionen wie DPI, Intrusion Prevention und Anwendungsfilterung, um fortschrittliche Bedrohungen abzuwehren.

### Access Control Lists (ACLs)

**ACLs** sind eine Technik zur Umsetzung von Zugriffsregeln in Firewalls (insbesondere in Routern oder Layer-3-Switches). Sie definieren, welcher Verkehr erlaubt oder blockiert wird.

#### Eigenschaften:

Listen aus Regeln, die der Firewall/Routing-Engine sagen:
- *Was* (Protokoll, IP-Adresse, Port)
- *Wohin* (Zieladresse, Zielport)
- *Wie* (zulassen oder blockieren)

Die Reihenfolge ist **entscheidend** – die erste passende Regel wird angewendet („first match wins“). 
Können sowohl für **eingehenden** als auch **ausgehenden** Verkehr definiert werden.

#### ACL-Typen:

| Typ              | Beschreibung                                         |
|------------------|------------------------------------------------------|
| **Standard ACL** | Filtert nur nach Quell-IP                            |
| **Extended ACL** | Filtert nach Quell-IP, Ziel-IP, Protokoll, Port etc. |
| **Named ACL**    | ACLs mit Namen statt nur Nummern                     |

---

#### Vorteile von ACLs

* Sehr **performant** (da auf niedriger Ebene geprüft)
* Gut geeignet für **grundlegende Zugriffskontrollen**
* **Einfach zu implementieren** bei kleinen Netzwerken

#### Nachteile

* Keine Analyse des **Zustands** von Verbindungen (außer in Kombination mit stateful Mechanismen)
* Wartung kann bei großen Regeln komplex werden
* Nicht ausreichend für moderne Bedrohungen (DPI, Malware)

**ACLs** sind ein grundlegendes Mittel zur Netzwerksegmentierung und Zugriffskontrolle in Firewalls und Routern. In modernen Umgebungen sind sie oft Teil eines umfassenderen Sicherheitskonzepts, z. B. in Kombination mit Stateful Firewalls, IDS/IPS oder Next-Gen-Firewalls.
