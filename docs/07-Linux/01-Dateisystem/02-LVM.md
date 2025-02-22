---
created: 2025-02-22, 08:50
title: LVM
description: ""
sidebar_position: 2
draft: false
---
LVM (Logical Volume Manager) ist ein System zur flexiblen Verwaltung von Speicherplatz unter Linux. Es ermöglicht, physische Datenträger in abstrakte, logische Einheiten umzuwandeln, die dynamisch erweitert, verkleinert oder verschoben werden können – ohne dass man die physischen Partitionen direkt bearbeiten muss.

---

## Grundlagen von LVM

- **Physical Volumes (PV):**  
    Physische Datenträger oder Partitionen, die von LVM genutzt werden. Bevor ein Datenträger in eine Volume Group aufgenommen werden kann, muss er mit dem Befehl `pvcreate` initialisiert werden.
    
- **Volume Groups (VG):**  
    Eine Sammlung von Physical Volumes, die zu einem gemeinsamen Speicherpool zusammengefasst werden. Dieser Pool stellt den Speicherplatz bereit, aus dem dann logische Volumes erstellt werden. Ein neuer Speicherpool wird typischerweise mit `vgcreate` angelegt, und bestehende PVs können mit `vgextend` hinzugefügt werden.
    
- **Logical Volumes (LV):**  
    Die aus der Volume Group zugeteilten logischen Partitionen. Diese können als Dateisysteme eingebunden werden und bieten Flexibilität, da sie in der Größe verändert oder zwischen VGs verschoben werden können. Mit `lvcreate` legt man ein neues LV an, und mit `lvextend` oder `lvreduce` passt man die Größe an.
    

---

## Wichtige Befehle

Hier ist eine tabellarische Übersicht der wichtigsten LVM-Befehle:

| Befehl        | Beschreibung                                                              | Beispiel                                    |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------ |
| **pvcreate**  | Initialisiert ein physisches Volume (PV)                                  | `sudo pvcreate /dev/sda1`                   |
| **pvdisplay** | Zeigt detaillierte Informationen zu einem PV                              | `pvdisplay /dev/sda1`                       |
| **pvs**       | Kompakte Übersicht aller vorhandenen PVs                                  | `pvs`                                       |
| **vgcreate**  | Erstellt eine neue Volume Group (VG) aus einem oder mehreren PVs          | `sudo vgcreate vg_data /dev/sda1`           |
| **vgdisplay** | Zeigt Details zur Volume Group                                            | `vgdisplay vg_data`                         |
| **vgs**       | Kompakte Übersicht aller VGs                                              | `vgs`                                       |
| **vgextend**  | Erweitert eine VG durch Hinzufügen eines weiteren PVs                     | `sudo vgextend vg_data /dev/sdb1`           |
| **lvcreate**  | Erstellt ein neues logisches Volume (LV)                                  | `sudo lvcreate -L 10G -n lv_home vg_data`   |
| **lvdisplay** | Zeigt detaillierte Informationen zu einem LV                              | `lvdisplay /dev/vg_data/lv_home`            |
| **lvs**       | Kompakte Übersicht aller LVs                                              | `lvs`                                       |
| **lvextend**  | Erweitert ein LV um zusätzlichen Speicherplatz                            | `sudo lvextend -L +5G /dev/vg_data/lv_home` |
| **lvreduce**  | Verkleinert ein LV (nach vorheriger Anpassung des Dateisystems)           | `sudo lvreduce -L 5G /dev/vg_data/lv_home`  |
| **lvremove**  | Entfernt ein LV                                                           | `sudo lvremove /dev/vg_data/lv_home`        |
| **vgremove**  | Entfernt eine VG                                                          | `sudo vgremove vg_data`                     |
| **pvremove**  | Löscht LVM-Daten von einem PV (entfernt das PV aus der LVM-Konfiguration) | `sudo pvremove /dev/sda1`                   |

- **Dateisystem-Anpassung:**  
    Nach der Erweiterung eines LVs muss das darauf befindliche Dateisystem vergrößert werden. Bei ext4 etwa:
    
    ```bash
    sudo resize2fs /dev/vg_data/lv_home
    ```
    
    Für XFS-Dateisysteme:
    
    ```bash
    sudo xfs_growfs /mountpunkt
    ```
    

---

## Praxisbeispiel: Einbindung einer neuen Festplatte

### 1. Neue Festplatte identifizieren und vorbereiten

- **Überprüfe den aktuellen Speicherstatus**
	```bash
	df -h
	lsblk
	lfdisplay
	```

- **Festplatte finden:**  
    Verwenden Sie `lsblk` oder `fdisk -l`, um die neue Festplatte (z. B. `/dev/sdb`) zu identifizieren.
    
    ```bash
    lsblk
    sudo fdisk -l
    ```
    
- **Partition anlegen:**  
    Nutzen Sie `fdisk` oder `parted`, um eine neue Partition anzulegen. Achten Sie darauf, den Partitions-Typ auf „Linux LVM“ (Code 8e) zu setzen.
    
    ```bash
    sudo fdisk /dev/sdb
    ```
    
    Im fdisk-Menü:
    
    - Drücken Sie `n`, um eine neue Partition zu erstellen.
    - Ändern Sie mit `t` den Partitions-Typ auf `8e`.
    - Speichern Sie mit `w`.

### 2. Physical Volume erstellen oder erweitern
- Wenn du eine neue Festplatte oder Partition hinzufügst:
    
    ```bash
    pvcreate /dev/sdX # Falls eine neue Partition oder Festplatte genutzt wird
    vgextend my_vg /dev/sdX # Volume Group um das neue PV erweitern
    ```
	
- Falls das PV bereits existiert und vergrößert wurde (z. B. nach einer VM-Festplattenerweiterung):
	
    ```bash
        pvresize /dev/sdX
    ```

### 3. Logical Volume erweitern oder neu erstellen

- **Erweiterung eines bestehenden Logical Volumes:**  
    Falls Sie bereits ein Logical Volume (z. B. `/dev/vg_data/lv_home`) haben und dessen Größe vergrößern möchten:
    
    ```bash
    sudo lvextend -l +100%FREE /dev/vg_data/lv_home
    ```
    
    Anschließend muss das Dateisystem angepasst werden:
    
    ```bash
    df -Th / | grep mapper               # Prüfung des Typs (zb ext4 oder xfs)
    sudo resize2fs /dev/vg_data/lv_home  # für ext4
    sudo xfs_growfs /                    # für xfs
    ```
    
- **Neues Logical Volume erstellen:**  
    Falls Sie ein neues LV anlegen wollen:
    
    ```bash
    sudo lvcreate -L 20G -n lv_new vg_data
    ```
    
    Formatieren Sie das neue LV mit dem gewünschten Dateisystem, z. B. ext4:
    
    ```bash
    sudo mkfs.ext4 /dev/vg_data/lv_new
    ```
    
    Und binden Sie es in das Dateisystem ein:
    
    ```bash
    sudo mkdir /mnt/new_storage
    sudo mount /dev/vg_data/lv_new /mnt/new_storage
    ```
    

### 5. Abschluss und Überprüfung

- Überprüfen Sie mit `pvdisplay`, `vgdisplay` und `lvdisplay` die aktuelle LVM-Konfiguration.
- Stellen Sie sicher, dass das Dateisystem korrekt eingebunden und verfügbar ist.
