---
title: "SSH"
sidebar_position: 4
description: ""
draft: false
---
## SSH einrichten für Github
1. [**Check for existing Key**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
```bash
ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```
2. [**Generate new Key**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH-Agent in Background:
eval "$(ssh-agent -s)"

# Add Key to ssh-agent:
ssh-add ~/.ssh/id_ed25519
```
3. [**Add new Key to Account**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
```bash
$ cat ~/.ssh/id_ed25519.pub
# Then select and copy the contents of the id_ed25519.pub file
# displayed in the terminal to your clipboard
# Github -> Settings -> SSH and GPG keys -> New/Add SSH key
```
4. [**Test Connection**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)
```bash
ssh -T git@github.com
# Attempts to ssh to GitHub
```

## SSH Cheat Sheet

### Verbindung zu einem Server herstellen
```bash
ssh user@remote-host                   # Standardverbindung (Port 22)
ssh -p 2222 user@remote-host           # Verbindung über einen anderen Port
ssh -i ~/.ssh/id_rsa user@remote-host  # Verbindung mit einem bestimmten Schlüssel
```
### SSH mit Passwortloser Anmeldung 
*(Key-basierte Authentifizierung)*
```bash
ssh-keygen -t rsa -b 4096              # SSH-Schlüsselpaar erstellen
ssh-copy-id user@remote-host           # Öffentlichen Schlüssel zum Server kopieren (Linux/macOS)
```
### SSH-Config für einfachere Verbindungen 
*(Linux/macOS: ~/.ssh/config)*
```bash
nano ~/.ssh/config
# Beispiel:
Host myserver
    HostName remote-host
    User user
    Port 2222
    IdentityFile ~/.ssh/id_rsa

ssh myserver  # Verbindung per Alias
```
### Dateien mit SCP übertragen
*(Secure Copy Protocol)*
```bash
scp file.txt user@remote-host:/home/user/             # Datei hochladen
scp -r myfolder user@remote-host:/home/user/          # Ordner hochladen
scp user@remote-host:/home/user/file.txt .            # Datei vom Server herunterladen
```
### Dateien mit rsync 
*(Effiziente Dateiübertragung)*
```bash
rsync -avz file.txt user@remote-host:/home/user/      # Datei synchronisieren
rsync -avz --progress user@remote-host:/home/user/ .  # Datei/Ordner mit Fortschritt herunterladen
```
### Remote-Befehle über SSH ausführen
```bash
ssh user@remote-host "ls -lah /var/www"               # Dateien auf dem Server auflisten
ssh user@remote-host "df -h"                          # Speicherplatz prüfen
```
### SSH-Tunnel für Portweiterleitung 
*(Lokale Weiterleitung)*
```bash
ssh -L 8080:localhost:80 user@remote-host             # Port 8080 lokal auf Port 80 des Remote-Hosts umleiten
# Danach im Browser: http://localhost:8080
```
### SSH Reverse-Tunnel 
*(Fernzugriff auf lokalen Rechner)*
```bash
ssh -R 9000:localhost:22 user@remote-host              # Remote-Host kann auf lokalen SSH-Port zugreifen
# Auf dem Remote-Host dann: ssh -p 9000 user@localhost
```
### SSH-Multiplexing 
*(Schnellere Verbindungen)*
```bash
nano ~/.ssh/config
# Beispiel:
Host *
    ControlMaster auto
    ControlPath ~/.ssh/master-%r@%h:%p
    ControlPersist 10m
```
### SSH für Windows 
*(PowerShell & WSL)*
```bash
ssh user@remote-host                             # Funktioniert direkt in PowerShell
scp file.txt user@remote-host:/home/user/        # Datei kopieren (wie unter Linux)
wsl ssh user@remote-host                         # SSH über Windows Subsystem für Linux (WSL)
```
### SSH-Debugging & Fehlersuche
```bash
ssh -v user@remote-host                          # Verbindung mit Debug-Informationen
ssh -vvv user@remote-host                        # Noch detailliertere Debug-Ausgabe
```
### SSH-Server auf eigenem Rechner aktivieren
```bash
sudo systemctl start ssh                         # SSH-Server starten (Linux)
sudo systemctl enable ssh                        # SSH-Server beim Boot starten
sudo systemctl status ssh                        # Status prüfen
sudo ufw allow ssh                               # Firewall für SSH öffnen (Ubuntu)
```

## SSH einrichten / nutzen (Linux)

### Ist SSH installiert?
```bash
rpm -qa | grep ssh                        # RPM-basierte Systeme (z.B. CentOS, Fedora)
dpkg -l | grep ssh                        # Debian-basierte Systeme (z.B. Ubuntu, Debian)
```
### Welche Pakete sind installiert?  
```bash      
rpm -ql openssh-server                    # RPM-basierte Systeme
```
### Wie heißt das ausführbare Programm?   
```bash     
rpm -ql openssh-server | grep bin         # RPM-basierte Systeme
dpkg -L openssh-server | grep bin         # Debian-basierte Systeme
```
### Überprüfung laufender Dienste (Port 22)
```bash    
ss -tlnp | grep :22     
```
### SSH-Dienst starten   
```bash     
systemctl enable [service]                # Aktiviert den Dienst beim Systemstart
systemctl start [service]                 # Startet den Dienst jetzt
```
### Public Key überprüfen   
```bash     
ls -l /etc/ssh/                           # Vorhandene Schlüssel auflisten
ssh-keygen -l -f [public key]             # Fingerabdruck generieren
```
### Public Key erstellen & übertragen    
```bash    
ssh-keygen -t rsa -b 4096                 # Erstellt einen RSA-Schlüsselpaar mit 4096 Bit
ssh-copy-id user@host_IP                  # Kopiert den öffentlichen Schlüssel auf den Zielhost
```
### SSH-Agent   
```bash     
ssh-add -l                                # Hinzugefügte Identitäten überprüfen
ssh-add -D                                # ALLE Identitäten löschen
ssh-add                                   # Standardidentität hinzufügen
```    