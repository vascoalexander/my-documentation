---
title: MariaDB
---
Schritt-für-Schritt-Anleitung, um **MariaDB** und **MySQL Workbench** auf **Linux Mint** einzurichten:

---

## 🛠️ 1. MariaDB installieren

MariaDB ist in den offiziellen Repositories enthalten:

```bash
sudo apt update
sudo apt install mariadb-server mariadb-client
```

### 🔐 MariaDB absichern

Starte das Sicherheitssetup:

```bash
sudo mysql_secure_installation
```

---

## ▶️ 2. MariaDB starten und aktivieren

```bash
sudo systemctl enable mariadb
sudo systemctl start mariadb
```

### ✔️ Testen, ob MariaDB läuft:

```bash
sudo systemctl status mariadb
```

---

## ‍💻 3. Zugriff über die Shell

```bash
sudo mariadb -u root -p
```

Hier kannst du z.b. einen neuen Benutzer anlegen:

```sql
CREATE USER 'deinuser'@'localhost' IDENTIFIED BY 'deinpasswort';
GRANT ALL PRIVILEGES ON *.* TO 'deinuser'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
To list all users on a MariaDB instance, you can use the following SQL query:
```sql
SELECT User, Host FROM mysql.user;
```
Remove a user
```sql
DROP USER 'username'@'host';
```

---

## 🧰 4. MySQL Workbench installieren

Da **MySQL Workbench** offiziell nur MySQL unterstützt, funktioniert es mit MariaDB **meistens gut**, aber nicht zu 100 %.

### 💡 Installieren (am einfachsten über das DEB-Paket von Oracle):

Download: [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

```bash
cd ~/Downloads
sudo dpkg -i mysql-workbench-community*.deb
sudo apt --fix-broken install
```

---

## 🔌 5. MySQL Workbench mit MariaDB verbinden

1. Starte MySQL Workbench (`mysql-workbench`)
2. Klicke auf **+** zum Erstellen einer neuen Verbindung
3. Wähle:

    * **Connection Name**: z. B. `MariaDB Local`
    * **Hostname**: `127.0.0.1`
    * **Port**: `3306`
    * **Username**: der angelegte Benutzer (z. B. `deinuser`)
    * Passwort speichern (optional)
4. Teste die Verbindung

---

## 🔍 Optional: DBeaver als Alternative

**DBeaver** ist eine beliebte Open-Source-Alternative zu MySQL Workbench, die MariaDB nativ unterstützt:

[https://dbeaver.io/download/](https://dbeaver.io/download/)

---
