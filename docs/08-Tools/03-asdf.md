## Install & Config Script

```bash
git clone https://gist.github.com/f3805baa2bfcf4acd052e28a8d370a92.git
```

```bash
# ===============================
# Script: asdf_setup.sh
# Beschreibung: Installiert asdf, konfiguriert Shell und richtet Plugins für Python, Node.js und .NET ein.
# ===============================

# Abhängigkeiten installieren
sudo apt install -y curl git unzip dirmngr gpg

# asdf klonen
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

# Shell-Konfiguration (.bashrc)
echo -e "\n# asdf setup" >> ~/.bashrc
echo -e ". \"$HOME/.asdf/asdf.sh\"" >> ~/.bashrc
echo -e ". \"$HOME/.asdf/completions/asdf.bash\"" >> ~/.bashrc
source ~/.bashrc

# Version prüfen
asdf --version

# Plugins hinzufügen
asdf plugin add python
asdf plugin add nodejs || true
bash ~/.asdf/plugins/nodejs/bin/export-release-team-keyring 2>/dev/null || true
asdf plugin add dotnet-core

# Versionen installieren
asdf install python 3.12.3
asdf install nodejs 20.12.2
asdf install dotnet-core 8.0.204

# Global setzen
asdf global python 3.12.3
asdf global nodejs 20.12.2
asdf global dotnet-core 8.0.204

# Prüfung
python --version
node --version
dotnet --version

echo "asdf setup abgeschlossen."
```

## Command Quicklist
Mit asdf kannst du mehrere Sprach‑/Tool‑Versionen unkompliziert managen. Die Beispiele beziehen sich auf eine Bash‑ oder Zsh‑Umgebung.

```bash
# asdf Cheat Sheet

# Plugin-Verwaltung
asdf plugin add <name>         # Fügt ein neues Plugin hinzu (z.B. python, nodejs)
asdf plugin list               # Zeigt alle installierten Plugins an
asdf plugin update <name>      # Aktualisiert ein spezifisches Plugin
asdf plugin remove <name>      # Entfernt ein Plugin
asdf plugin search <term>      # Sucht nach verfügbaren Plugins

# Versionsverwaltung
asdf list all <name>            # Zeigt alle verfügbaren Versionen für ein Plugin
asdf install <name> <version>   # Installiert eine spezifische Version
asdf install <name> latest      # Installiert die neueste stabile Version
asdf install                    # Installiert Versionen aus der .tool-versions Datei
asdf uninstall <name> <version> # Deinstalliert eine spezifische Version
asdf where <name> <version>     # Zeigt den Installationspfad einer Version
asdf which <executable>         # Zeigt den Pfad des aktuell verwendeten Programms

# Versionsauswahl
asdf global <name> <version>    # Setzt die globale Standardversion
asdf local <name> <version>     # Setzt die lokale Projektversion (.tool-versions)
asdf shell <name> <version>     # Setzt die Version für die aktuelle Shell-Sitzung
asdf current                    # Zeigt die aktuell aktiven Versionen

# .tool-versions Datei (Beispiel)
# python 3.11.4
# nodejs 18.16.0

# Weitere Befehle (weniger häufig)
asdf update                     # Aktualisiert asdf selbst
asdf info                       # Zeigt Informationen über asdf
asdf env <command>              # Führt einen Befehl mit der asdf Umgebung aus
```