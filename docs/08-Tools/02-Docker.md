## Installation

```bash
#!/usr/bin/env bash
# ===============================
# Script: docker_setup.sh
# Beschreibung: Installiert Docker auf Linux Mint (Ubuntu-basiert) und richtet die Docker-Gruppe ein.
# ===============================

set -euo pipefail

# 1. Alte Docker-Versionen entfernen
sudo apt remove -y docker docker-engine docker.io containerd runc || true

# 2. System aktualisieren
sudo apt update
sudo apt upgrade -y

# 3. Abhängigkeiten installieren
sudo apt install -y ca-certificates curl gnupg lsb-release

# 4. Docker GPG-Key hinzufügen
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg |
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 5. Repository einbinden (Ubuntu Jammy für Mint 21.x)
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu jammy stable" |
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 6. Paketliste aktualisieren und Docker installieren
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 7. Docker-Version prüfen
docker --version

# 8. Docker-Testcontainer ausführen
docker run --rm hello-world

# 9. Benutzer zur Docker-Gruppe hinzufügen
sudo usermod -aG docker "$USER"
echo "
*** Bitte abmelden und neu anmelden, damit die Gruppenzuordnung wirkt. ***"
```