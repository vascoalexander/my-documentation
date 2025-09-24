---
created: 2025-02-22, 09:29
title: Diagnose & Systeminformation
description: ""
sidebar_position: 1
draft: false
---


| Kategorie              | Befehl                           | Beschreibung                                                       |
| :--------------------- | :------------------------------- | :----------------------------------------------------------------- |
| **Partitionierung**    | `fdisk -l`                       | Zeigt alle Festplatten & Partitionstabellen                        |
|                        | `parted -l`                      | Detaillierte Partitionsinformationen                               |
|                        | `cat /proc/partitions`           | Übersicht der vom Kernel erkannten Partitionen                     |
|                        | `lsblk`                          | Baumstruktur aller Blockgeräte                                     |
| **Speicheraufteilung** | `df -h`                          | Anzeige belegter & freier Speicherplatz in menschenlesbarem Format |
|                        | `du -sh <Verzeichnis>`           | Ermittelt den Speicherverbrauch eines Verzeichnisses               |
|                        | `lsblk -f`                       | Zeigt Blockgeräte inkl. zugehöriger Dateisystemtypen               |
| **Dateisysteme**       | `blkid`                          | Listet Dateisystemtypen und UUIDs                                  |
|                        | `mount \| column -t`             | Zeigt aktuell gemountete Dateisysteme                              |
|                        | `findmnt`                        | Alternative zu mount: Übersicht der Mount-Punkte                   |
|                        | `cat /etc/fstab`                 | Statische Konfiguration der zu mountenden Dateisysteme             |
| **Zusatzinfos**        | `lshw -class disk`               | Umfassende Hardwareinfos zu den Festplatten                        |
|                        | `dmesg \| grep -i -E "sd\|nvme"` | Kernelmeldungen zu SATA- bzw. NVMe-Geräten                         |
