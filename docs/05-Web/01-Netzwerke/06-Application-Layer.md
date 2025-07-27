---
description: ""
title: "Application Layer"
---
## Protokolle

### Namenssystem
- **DNS** – Domain Name System. Konvertiert Domänennamen wie `http://example.com/` in IP-Adressen.

### Hostkonfiguration
- **DHCPv4** – Dynamic Host Configuration Protocol für IPv4. Ein DHCPv4-Server weist DHCPv4-Clients beim Start dynamisch IPv4-Adressinformationen zu und ermöglicht die Wiederverwendung der Adressen, wenn diese nicht mehr benötigt werden.
- **DHCPv6** – Dynamic Host Configuration Protocol für IPv6. DHCPv6 ähnelt DHCPv4. Ein DHCPv6-Server weist DHCPv6-Clients beim Start dynamisch IPv6-Adressinformationen zu.
- **SLAAC** – Stateless Address Autoconfiguration. Eine Methode, die es einem Gerät ermöglicht, seine IPv6-Adressinformationen ohne DHCPv6-Server abzurufen.

### E-Mail
- **SMTP** – Simple Mail Transfer Protocol. Ermöglicht Clients das Senden von E-Mails an einen Mailserver und Servern das Senden von E-Mails an andere Server.
- **POP3** – Post Office Protocol Version 3. Ermöglicht Clients das Abrufen von E-Mails von einem Mailserver und das Herunterladen in die lokale Mail-Anwendung des Clients.
- **IMAP** – Internet Message Access Protocol. Ermöglicht Clients den Zugriff auf auf einem Mailserver gespeicherte E-Mails sowie deren Verwaltung.

### Dateiübertragung
- **FTP** – File Transfer Protocol. Legt die Regeln fest, die es einem Benutzer auf einem Host ermöglichen, über ein Netzwerk auf Dateien von und zu einem anderen Host zuzugreifen und diese zu übertragen. FTP ist ein zuverlässiges, verbindungsorientiertes und anerkanntes Dateiübermittlungsprotokoll.
- **SFTP** – SSH File Transfer Protocol. Als Erweiterung des Secure Shell (SSH)-Protokolls kann SFTP verwendet werden, um eine sichere Dateiübertragungssitzung einzurichten, in der die Dateiübertragung verschlüsselt ist. SSH ist eine Methode zur sicheren Remote-Anmeldung, die typischerweise für den Zugriff auf die Befehlszeile eines Geräts verwendet wird.
- **TFTP** – Trivial File Transfer Protocol. Ein einfaches, verbindungsloses Dateiübertragungsprotokoll mit Best-Effort- und unbestätigter Dateiübermittlung. Es benötigt weniger Overhead als FTP.

### Web und Webservice
- **HTTP** – Hypertext Transfer Protocol. Ein Regelwerk für den Austausch von Text, Grafiken, Ton, Video und anderen Multimediadateien im World Wide Web.
- **HTTPS** – HTTP Secure. Eine sichere Form von HTTP, die die im World Wide Web ausgetauschten Daten verschlüsselt.
- **REST** – Representational State Transfer. Ein Webservice, der Anwendungsprogrammierschnittstellen (APIs) und HTTP-Anfragen zur Erstellung von Webanwendungen nutzt.