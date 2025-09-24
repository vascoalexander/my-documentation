**Kurzanleitung: Docker – Die wichtigsten Befehle**

Im Folgenden findest du eine kompakte Übersicht der gängigsten Docker‑Befehle. Die Beispiele nutzen die Kommandozeile (Terminal).

---

## 1. Images verwalten

| Befehl                    | Beschreibung                                | Beispiel                         |
| ------------------------- | ------------------------------------------- | -------------------------------- |
| `docker pull <image>`     | Image aus Registry (z. B. Docker Hub) laden | `docker pull nginx:latest`       |
| `docker images`           | Lokale Images auflisten                     | `docker images`                  |
| `docker rmi <image>`      | Lokales Image löschen                       | `docker rmi nginx:latest`        |
| `docker build -t <tag> .` | Image aus Dockerfile bauen und taggen       | `docker build -t mein-app:1.0 .` |

---

## 2. Container verwalten

| Befehl                                          | Beschreibung                                  | Beispiel                                |
| ----------------------------------------------- | --------------------------------------------- | --------------------------------------- |
| `docker run [OPTIONS] <image> [COMMAND] [ARGS]` | Neuen Container starten                       | `docker run -d --name web nginx:latest` |
| `docker ps`                                     | Laufende Container anzeigen                   | `docker ps`                             |
| `docker ps -a`                                  | Alle Container (auch gestoppte) anzeigen      | `docker ps -a`                          |
| `docker stop <container>`                       | Container stoppen                             | `docker stop web`                       |
| `docker start <container>`                      | Gestoppten Container starten                  | `docker start web`                      |
| `docker restart <container>`                    | Container neu starten (stop + start)          | `docker restart web`                    |
| `docker rm <container>`                         | Container löschen                             | `docker rm web`                         |
| `docker exec -it <container> <shell>`           | Befehl/Shell in laufendem Container ausführen | `docker exec -it web /bin/bash`         |
| `docker logs <container>`                       | Logs eines Containers anzeigen                | `docker logs web`                       |

---

## 3. Netzwerke & Volumes

### Netzwerke

| Befehl                             | Beschreibung           | Beispiel                       |
| ---------------------------------- | ---------------------- | ------------------------------ |
| `docker network ls`                | Netzwerke auflisten    | `docker network ls`            |
| `docker network create <net_name>` | Neues Netzwerk anlegen | `docker network create my-net` |
| `docker network rm <net_name>`     | Netzwerk löschen       | `docker network rm my-net`     |

### Volumes

| Befehl                            | Beschreibung         | Beispiel                       |
| --------------------------------- | -------------------- | ------------------------------ |
| `docker volume ls`                | Volumes auflisten    | `docker volume ls`             |
| `docker volume create <vol_name>` | Neues Volume anlegen | `docker volume create db-data` |
| `docker volume rm <vol_name>`     | Volume löschen       | `docker volume rm db-data`     |

---

## 4. Docker Compose (optional)

Mit Docker Compose kannst du Multi‑Container‑Anwendungen in einer YAML‑Datei definieren.

| Befehl                          | Beschreibung                                                   | Beispiel                 |
| ------------------------------- | -------------------------------------------------------------- | ------------------------ |
| `docker-compose up`             | Container wie in `docker-compose.yml` starten (im Vordergrund) | `docker-compose up`      |
| `docker-compose up -d`          | Im Hintergrund starten                                         | `docker-compose up -d`   |
| `docker-compose down`           | Alle Ressourcen stoppen und entfernen                          | `docker-compose down`    |
| `docker-compose ps`             | Status der definierten Services anzeigen                       | `docker-compose ps`      |
| `docker-compose logs [service]` | Logs eines Service anzeigen                                    | `docker-compose logs db` |

---

## 5. Nützliche Optionen & Flags

* `-d`
  → Container detached (im Hintergrund) starten
* `--name <name>`
  → Eigener Name für Container
* `-p <host>:<container>`
  → Ports mappen (z. B. `-p 8080:80`)
* `-v <host_path>:<container_path>`
  → Volume/Verzeichnis mounten
* `-e <VAR>=<WERT>`
  → Umgebungsvariable setzen
* `--rm`
  → Container nach Stop automatisch löschen
* `-it`
  → Interaktiver Modus mit pseudo‑TTY (z. B. für Shell)

---

### Kurztipp

Erstelle für wiederkehrende Setups ein **Dockerfile** und/oder eine **docker-compose.yml**, um alle Container‑Konfigurationen versioniert und portabel zu halten.

Mit dieser Übersicht hast du die wichtigsten Docker‑Kommandos zum Start in der Hand!



## Install & Config Script

```bash
git clone https://gist.github.com/eb06509366e58b21d1a1e9fe59b8ba1c.git
```

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