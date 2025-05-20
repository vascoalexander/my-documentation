---
title: "Mise & Poetry"
draft: false
---
# Entwicklungsumgebung mit mise, Poetry und pre-commit einrichten

Diese Anleitung dokumentiert die Einrichtung einer modernen 
Python-Entwicklungsumgebung unter Linux mit Hilfe von **mise**, **Poetry** 
und **pre-commit**. Ziel ist eine saubere, reproduzierbare und einfach 
wartbare Projektstruktur.

---

## ✨ Übersicht der Tools

### mise

Ein Runtime-Manager (Alternative zu asdf), der Sprachen wie Python, Node, 
Go etc. verwaltet. Nutzt TOML-Konfigurationsdateien für per-Projekt-Versionen.

### Poetry

Ein Tool zur Paketverwaltung für Python. Es ersetzt `pip` und `virtualenv` 
durch ein ganzheitliches Konzept zur Projektverwaltung: Abhängigkeiten, 
Versionierung, Packaging und Lockfiles.

### pre-commit

Ein Framework zur Verwaltung von Git-Hooks, das automatisch Formatierung, 
Linting, uvm. beim Commit durchführen kann.

---

## ⚡ Installation & Setup

### 1. mise installieren

```bash
curl https://mise.run | sh
```

Dann in der Shell-Konfigurationsdatei aktivieren:  
**Info:** mise activate setzt die tools / runtime Pfade auf $PATH

`~/.bashrc`
```bash
# mise (Runtime Manager)
if command -v mise &> /dev/null; then
  eval "$(mise activate bash)"
fi
```
(mise activate zsh in der zshrc)  

**Beachte**: $PATH Variablen die nach der Aktivierung von Mise gesetzt werden
überschreiben den von mise gesetzten Pfad ggfs.!

# mise Completion für Zsh
Für die autocompletion in der z-shell benötigten wir das tool usage:
```bash
mise install usage
mise set --global usage
```
In der zshrc am Ende nach `source $ZSH/oh-my-zsh.sh`
```bash
autoload -Uz compinit
compinit
autoload -U +X bashcompinit && bashcompinit
eval "$(mise completion zsh)"
```

Shell neustarten oder `source ~/.zshrc` / `source ~/.bashrc` oder `zsh -l`

### 2. Python und Poetry über mise installieren

```bash
mise install python@<python-version>
mise install poetry@<poetry-version>
mise use --global python@<python-version>
mise use --global poetry@<poetry-version>
```
Hinweis: Anstelle der versionsnummer `latest` setzen 
um die aktuelleste stabile version zu nutzen.

mise use --global setzt die tools / runtimes auf required in der globalen
configuration. Wenn mise aktiviert wird, werden die pfade von den mit mise installierten
runtimes in $PATH übernommen. Diese global gesetzten Pfade können durch lokale in der
`mise.toml` oder `tool-versions` Datei gesetzte Pfade überschrieben werden.

### 3. Projekt initialisieren
Erstellen einer mise.toml falls die Python version von der global gesetzten
abweicht oder andere configs nötig sind.  

Für bestehendes Projekt, dann die pyproject.toml anpassen (s.u.).
```bash
poetry init
```

Für ein neues Projekt.
```bash
poetry new my-project
```

Operating mode setzen
Default ist true -> wenn das projekt als Paket genutzt werden soll und ggfs
veröffentlicht.
```toml
[tool.poetry]
package-mode = false
```

### 5. Abhängigkeiten verwalten

```bash
poetry add pillow pypdf2 ttkbootstrap
poetry add --group dev ruff
```
Wenn die Abhängigkeiten gesetzt sind mit `poetry install` installieren.

### 6. pre-commit einrichten

```bash
poetry add --group dev pre-commit
```

`.pre-commit-config.yaml` anlegen:

```yaml
repos:
  - repo: https://github.com/psf/black
    rev: 23.11.0
    hooks:
      - id: black

  - repo: https://github.com/pre-commit/mirrors-isort
    rev: v5.10.1
    hooks:
      - id: isort

  - repo: https://github.com/charliermarsh/ruff-pre-commit
    rev: v0.4.5
    hooks:
      - id: ruff
```

Dann aktivieren:

```bash
poetry run pre-commit install
```

---

## ⚙ Wichtige Befehle

### mise

* `mise install <tool>@<version>` – Installiert ein Tool in bestimmter Version
* `mise use -g <tool>@<version>` – Setzt globale Version
* `mise set <tool>@<version>` – Setzt Projekt-spezifische Version (generiert `.tool-versions`)
* `mise doctor` – Diagnose
* `mise cache clear` - Cache säubern (zb bei build prozessen ggfs wichtig)
* `mise run` - Run tasks
* `mise which` - Shows the path that a tool's bin points to.
* `mise ls` - List installed and active tool versions

### Poetry

* `poetry init` – Projekt initialisieren
* `poetry add <pkg>` – Abhängigkeit hinzufügen
* `poetry install` – Abhängigkeiten installieren
* `poetry shell` – Virtuelle Umgebung betreten
* `poetry run <cmd>` – Befehl in der Umgebung ausführen
* `poetry update` – Abhängigkeiten aktualisieren

### pre-commit

* `poetry run pre-commit install` – Git-Hooks aktivieren
* `poetry run pre-commit run --all-files` – Alle Hooks manuell ausführen

---

## 🔄 Empfehlung für PyCharm

Beim Einrichten des Interpreters in PyCharm:

* Nicht "existing interpreter" wählen
* Stattdessen: "New environment" → Typ: Poetry → automatisch wird die `pyproject.toml` erkannt und verwendet

---

## 📄 Hinweis zu `requirements.txt`

Poetry verwendet `pyproject.toml` und `poetry.lock`. Ein Export ist optional:

```bash
poetry export -f requirements.txt --output requirements.txt  # Nur mit Plugin oder neueren Versionen
```

---

Damit steht ein solides, modulares Setup zur Verfügung, das sich leicht auf andere Projekte übertragen lässt.

