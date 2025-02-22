---
title: Links
description: ""
sidebar_position: 3
draft: false
---
### Symlinks
Symlinks sind wie Verknüpfungen: Sie verweisen auf eine Datei oder ein Verzeichnis, aber enthalten nicht die eigentlichen Daten.

```bash
ln -s <source> <destination/mein_link>
```

### Hardlinks
Hardlinks sind **alternative Namen für dieselbe Datei** im gleichen Dateisystem. Sie zeigen direkt auf die **gleichen Datenblöcke** wie die Originaldatei.

```bash
ln <source> <destination/mein_link>
```

**Anzahl der Hardlinks prüfen**
```bash
ls -l /home/user/datei.txt /tmp/mein_hardlink   # Die zweite Spalte zeigt die Anzahl der Hardlinks zur Datei.
stat /home/user/datei.txt                       # Zeigt die Anzahl der Hardlinks (Links:).
```

### Zusammenfassung

| Feature                                | Symbolischer Link (`ln -s`) | Hardlink (`ln`)        |
| :------------------------------------- | :-------------------------- | :--------------------- |
| Verweist auf                           | Datei oder Verzeichnis      | Direkt auf Datenblöcke |
| Gültig nach Löschen der Originaldatei? | ❌ Nein                      | ✅ Ja                   |
| Kann auf anderes Dateisystem zeigen?   | ✅ Ja                        | ❌ Nein                 |
| Unterstützt Verzeichnisse?             | ✅ Ja                        | ❌ Nein                 |

### Symlink Script

```bash
#!/bin/bash
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 target destination"
    exit 1
fi

TARGET=$1
DESTINATION=$2

for dir in "$TARGET"/*/; do
  ln -s "$dir" "$DESTINATION"
done

echo "Symbolic links created from $TARGET to $DESTINATION"
```
