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

### 1. Rust installieren (für alternative mise-Installation)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Nach der Installation ggf. in die Shell-Konfigurationsdatei 
(`~/.zshrc` oder `~/.bashrc`) einfügen:

```bash
source "$HOME/.cargo/env"
```

Dann prüfen:

```bash
rustc --version
cargo --version
```

### 2. mise installieren

**Variante A: via Shell Script**

```bash
curl https://mise.run | sh
```

**Variante B: via Cargo** (nach Rust-Installation)

```bash
cargo install mise
```

Dann in der Shell-Konfigurationsdatei aktivieren:

`~/.bashrc`
```bash
# mise (Runtime Manager)
if command -v mise &> /dev/null; then
  eval "$(mise activate bash)"
fi
```
`~/.zshrc`
```bash
# mise aktivieren (Runtime-Manager)
eval "$(mise activate zsh)"

# mise Completion für Zsh
autoload -U +X bashcompinit && bashcompinit
eval "$(mise completion zsh)"
```

Shell neustarten oder `source ~/.zshrc` / `source ~/.bashrc`

### 3. Python und Poetry über mise installieren

```bash
mise install python@3.12.3
mise install poetry@2.1.3
mise use -g python@3.12.3
mise use -g poetry@2.1.3
```

### 4. Projekt initialisieren

```bash
mkdir my-project && cd my-project
poetry init  # oder poetry new my-project
```

### 5. Abhängigkeiten verwalten

```bash
poetry add pillow pypdf2 ttkbootstrap
poetry add --group dev ruff
```

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

