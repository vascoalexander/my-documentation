---
title: "Package Management"
sidebar_position: 2
description: ""
draft: false
---
**Package Naming Convention**
```
package-name_version-release_architecture.deb
```
**RPM und dpkg**  
Grundlegende Werkzeuge zur Verwaltung einzelner Pakete ohne erweiterte Funktionen wie automatische Abhängigkeitsauflösung.
**DNF und APT**  
Darauf aufbauende, benutzerfreundliche High-Level-Tools, die diese Funktionen bereitstellen und die Paketverwaltung im täglichen Einsatz erheblich erleichtern.

### YUM 
*für ältere RHEL, CentOS*
```bash
yum update                                      # Systemaktualisierung
yum install [paket]                             # Paket installieren
yum remove [paket]                              # Paket deinstallieren
yum search [paket]                              # Nach einem Paket suchen
yum list installed                              # Installierte Pakete anzeigen
yum clean all                                   # Paket-Cache bereinigen
```
### DNF 
*Nachfolger von YUM, für RHEL, Fedora, CentOS*
```bash
dnf update                                      # Systemaktualisierung
dnf install [paket]                             # Paket installieren
dnf remove [paket]                              # Paket deinstallieren
dnf search [paket]                              # Nach einem Paket suchen
dnf list --installed                            # Installierte Pakete anzeigen
dnf list --available                            # List availabe Packages
dnf clean all                                   # Paket-Cache bereinigen

# Package Groups
dnf grouplist                                   # List available groups
dnf groupinfo [group]                           # Infos about a group
dnf groupinstall [group]                        # Install specified group
dnf groupremove [group]                         # Remove group
```
### RPM
```bash
rpm -i [package.rpm]                            # Installiert ein .rpm-Paket
rpm -U [package.rpm]                            # Upgradet oder installiert ein .rpm-Paket
rpm -e [package]                                # Entfernt ein installiertes Paket
rpm -q [package]                                # Zeigt Informationen zu einem Paket an
rpm -qa                                         # Listet alle installierten Pakete auf
rpm -V [package]                                # Verifiziert ein installiertes Paket
rpm -qf /path/to/file                           # Find installed package containing file
rpm -qf $(which [exe])                          # Get package that installed the executable
rpm -ql [package]                               # List files in package
```
### APT 
*für Debian, Ubuntu, Linux Mint*
```bash
apt update                                      # Paketlisten aktualisieren
apt upgrade                                     # Systemaktualisierung
apt update && sudo apt upgrade -y               # Update repositories and install updates -yes to all
apt install [paket]                             # Paket installieren
apt remove [paket]                              # Paket deinstallieren
apt search [paket]                              # Nach einem Paket suchen
apt list --installed                            # Installierte Pakete anzeigen
apt autoremove                                  # Nicht mehr benötigte Pakete entfernen
apt clean                                       # Paket-Cache bereinigen
```
### DPKG
```bash
dpkg -i [package.deb]                           # Installiert ein .deb-Paket
dpkg -r [package]                               # Entfernt ein installiertes Paket
dpkg -P [package]                               # Entfernt ein Paket samt Konfigurationsdateien (Purge)
dpkg -l                                         # Listet alle installierten Pakete auf
dpkg -L [package]                               # Zeigt alle Dateien, die von einem Paket installiert wurden
dpkg -s [package]                               # Zeigt Statusinformationen zu einem Paket an
```
### PACMAN 
*für Arch Linux, Manjaro*
```bash
pacman -Syu                                     # Systemaktualisierung
pacman -S [paket]                               # Paket installieren
pacman -R [paket]                               # Paket deinstallieren
pacman -Ss [paket]                              # Nach einem Paket suchen
pacman -Q                                       # Installierte Pakete anzeigen
pacman -Sc                                      # Paket-Cache bereinigen
pacman -Rns [paket]                             # Paket und Abhängigkeiten entfernen
```

### FLATPAK
```bash
flatpak install [paket]                         # Paket installieren
flatpak update                                  # alle installierten Anwendungen und Laufzeitumgebungen updaten
flatpak run [paket]                             # anwendung starten
flatpak list                                    # auflistung aller installierten pakete und laufzeitumgebungen
flatpak uninstall [paket]                       # Paket deinstallieren
flatpak repair                                  # fix inconsistencies with your local installation
flatpak search [string]                         # suche nach paketen
```

### SNAP

```bash
snap list                                       # Zeigt alle installierten Snap-Pakete an
snap find [name]                                # Sucht nach einem Snap-Paket im Snap Store
snap install [name]                             # Installiert ein Snap-Paket
snap remove [name]                              # Deinstalliert ein Snap-Paket
snap refresh                                    # Aktualisiert alle installierten Snap-Pakete
snap refresh [name]                             # Aktualisiert ein bestimmtes Snap-Paket
snap revert [name]                              # Setzt ein Snap-Paket auf die vorherige Version zurück
snap info [name]                                # Zeigt Informationen zu einem Snap-Paket an
snap enable [name]                              # Aktiviert ein deaktiviertes Snap-Paket
snap disable [name]                             # Deaktiviert ein Snap-Paket (ohne Deinstallation)
snap services                                   # Listet die Dienste von Snap-Paketen auf
snap start [name]                               # Startet einen Snap-Dienst
snap stop [name]                                # Stoppt einen Snap-Dienst
snap restart [name]                             # Startet einen Snap-Dienst neu
snap changes                                    # Zeigt eine Liste der letzten Änderungen durch Snap an
snap revert [name]                              # Setzt ein Snap-Paket auf eine vorherige Version zurück
snap connections                                # Zeigt die aktuellen Verbindungen der Snap-Pakete
snap interface [name]                           # Zeigt Informationen über eine bestimmte Schnittstelle
```

#### Snap installieren
```bash
# Ubuntu / Debian
sudo apt update
sudo apt install snapd
sudo systemctl enable --now snapd
```

*From Linux Mint 20 onwards, a file called nosnap.pref needs to be either moved or removed from /etc/apt/preferences.d/ before Snap can be installed.*

```bash
sudo mv /etc/apt/preferences.d/nosnap.pref ~/Documents/nosnap.backup
```

<div class="img-center">
    ![Package-Management](./img/package_managing.png)
</div>