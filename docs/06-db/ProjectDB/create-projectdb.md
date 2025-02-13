---
sidebar_position: 1
description: ""
draft: false
title: "CREATE ProjectDB"
---
```sql
USE master;

-- Datenbank löschen, falls vorhanden
DROP DATABASE IF EXISTS ProjektDB;

-- Datenbank erstellen
CREATE DATABASE ProjektDB;
GO

-- Authorisierung ändern für Diagramme
ALTER AUTHORIZATION ON DATABASE::ProjektDB TO sa
GO

-- Zur neuen Datenbank wechseln
USE ProjektDB;
GO

-- Anlegen der Tabellen
CREATE TABLE Abteilung (
	id		CHAR(2) 	NOT NULL,
	bezeichnung	VARCHAR(30)	NOT NULL,
	stadt		VARCHAR(25)	NULL,
	CONSTRAINT pk_abteilung 
		PRIMARY KEY (id)
);
GO

CREATE TABLE Kunde (
	id		INT IDENTITY	NOT NULL,
	firma		VARCHAR(30)		NOT NULL,
	stadt		VARCHAR(25)		NOT NULL,
	CONSTRAINT pk_kunde 
		PRIMARY KEY (id)
);
GO

CREATE TABLE Projekt (
	id 		CHAR(2) 	NOT NULL,
	bezeichnung	VARCHAR(30)	NOT NULL,
	mittel 		MONEY		NULL,
	kd_id		INT			NULL,
	CONSTRAINT pk_projekt 
		PRIMARY KEY (id),
	CONSTRAINT fk_projekt_kunde 
		FOREIGN KEY (kd_id) REFERENCES Kunde (id)
);
GO

CREATE TABLE Mitarbeiter (
	id 		INT		 	NOT NULL,
	nachname 	VARCHAR(30) NOT NULL,
	vorname 	VARCHAR(30) NOT NULL,
	abt_id 		CHAR(2)		NULL,
	stadt		VARCHAR(25)	NULL,
	CONSTRAINT pk_mitarbeiter 
		PRIMARY KEY (id),
	CONSTRAINT fk_mitarbeiter_abteilung 
		FOREIGN KEY(abt_id) REFERENCES Abteilung (id)
);
GO

CREATE TABLE Arbeit (
	mit_id 		INT		NOT NULL,
	pro_id 		CHAR(2) 	NOT NULL,
	aufgabe		VARCHAR(30)	NULL,
	einst_dat 	DATE		NULL,
    CONSTRAINT pk_arbeit 
		PRIMARY KEY(mit_id, pro_id),
    CONSTRAINT fk_arbeit_mitarbeiter 
		FOREIGN KEY (mit_id) REFERENCES Mitarbeiter (id),
    CONSTRAINT fk_arbeit_projekt 
		FOREIGN KEY (pro_id) REFERENCES Projekt (id)
);
GO

CREATE TABLE Gehalt (
	mit_id		INT		NOT NULL,
	gehalt		MONEY		NOT NULL, 
	CONSTRAINT pk_gehalt 
		PRIMARY KEY(mit_id),
	CONSTRAINT fk_gehalt_mitarbeiter 
		FOREIGN KEY (mit_id) REFERENCES Mitarbeiter (id)
);
GO

CREATE TABLE Umsatz (
	id 	        INT		NOT NULL,
	mit_id 		INT		NOT NULL,
	datum 		DATE		NOT NULL,
	umsatz		MONEY		NOT NULL,
	CONSTRAINT pk_umsatz 
		PRIMARY KEY (id),
	CONSTRAINT fk_umsatz_mitarbeiter 
		FOREIGN KEY (mit_id) REFERENCES Mitarbeiter (id)
);
GO
  
-- Daten der Tabelle Abteilung
INSERT INTO Abteilung VALUES ('a1', 'Beratung', 'München');
INSERT INTO Abteilung VALUES ('a2', 'Diagnose', 'München');
INSERT INTO Abteilung VALUES ('a3', 'Freigabe', 'Stuttgart');
INSERT INTO Abteilung VALUES ('a4', 'Einkauf', 'München');
INSERT INTO Abteilung VALUES ('a5', 'Verkauf', 'Ulm');

-- Daten der Tabelle Kunde
INSERT INTO Kunde VALUES ('Im- und Export AG', 'München');
INSERT INTO Kunde VALUES ('Technische Produkte oHG', 'Ulm');
INSERT INTO Kunde VALUES ('Frankreich-Reisen GmbH', 'Saarlouis');
INSERT INTO Kunde VALUES ('Getränke Schneider', 'Heidenheim');
INSERT INTO Kunde VALUES ('Finanzamt Ulm', 'Fürth');
INSERT INTO Kunde VALUES ('100% Sonderzeichen AG', 'Baden_Baden');

-- Daten der Tabelle Projekt
INSERT INTO Projekt VALUES ('p1', 'Apollo', 120000.0, 3);
INSERT INTO Projekt VALUES ('p2', 'Gemini', 95000.0, 5);
INSERT INTO Projekt VALUES ('p3', 'Merkur', 186500.0, 1);
INSERT INTO Projekt VALUES ('p4', 'Pluto', 88500.0, 4);
INSERT INTO Projekt VALUES ('p5', 'Ariane', 165000.0, 2);

-- Daten der Tabelle Mitarbeiter
INSERT INTO Mitarbeiter VALUES (2581, 'Kaufmann', 'Brigitte', 'a2', NULL);
INSERT INTO Mitarbeiter VALUES (5765, 'Schäfer', 'Sabine', 'a3', 'Landshut');
INSERT INTO Mitarbeiter VALUES (9031, 'Meier', 'Rainer', 'a2', NULL);
INSERT INTO Mitarbeiter VALUES (9912, 'Wolf', 'Klaus', 'a4', 'Heidenheim');
INSERT INTO Mitarbeiter VALUES (10102, 'Huber', 'Petra', 'a3', 'Landshut');
INSERT INTO Mitarbeiter VALUES (12121, 'Richter', 'Ursula', 'a4', 'München');
INSERT INTO Mitarbeiter VALUES (17000, 'Krüger', 'Martin', 'a5', 'Ulm');
INSERT INTO Mitarbeiter VALUES (18316, 'Müller', 'Gabriele', 'a1', 'Rosenheim');
INSERT INTO Mitarbeiter VALUES (20204, 'Fuchs', 'Dirk', 'a4', 'Fürth');
INSERT INTO Mitarbeiter VALUES (22222, 'Vogel', 'Anke', 'a4', 'München');
INSERT INTO Mitarbeiter VALUES (24321, 'Schubert', 'Rolf', 'a5', 'München');
INSERT INTO Mitarbeiter VALUES (25348, 'Keller', 'Hans', 'a3', 'München');
INSERT INTO Mitarbeiter VALUES (27365, 'Albrecht', 'Lena', 'a5', NULL);
INSERT INTO Mitarbeiter VALUES (28559, 'Mozer', 'Sibille', 'a1', 'Ulm');
INSERT INTO Mitarbeiter VALUES (29346, 'Probst', 'Andreas', 'a2', 'Augsburg');

-- Daten der Tabelle Gehalt
INSERT INTO Gehalt VALUES (2581, 3000);
INSERT INTO Gehalt VALUES (5765, 4500);
INSERT INTO Gehalt VALUES (9031, 4000);
INSERT INTO Gehalt VALUES (9912, 3500);
INSERT INTO Gehalt VALUES (10102, 3500);
INSERT INTO Gehalt VALUES (12121, 3000);
INSERT INTO Gehalt VALUES (17000, 4000);
INSERT INTO Gehalt VALUES (18316, 3000);
INSERT INTO Gehalt VALUES (20204, 3500);
INSERT INTO Gehalt VALUES (22222, 5000);
INSERT INTO Gehalt VALUES (24321, 3000);
INSERT INTO Gehalt VALUES (25348, 1000);
INSERT INTO Gehalt VALUES (27365, 2500);
INSERT INTO Gehalt VALUES (28559, 6000);
INSERT INTO Gehalt VALUES (29346, 5000);

-- Daten der Tabelle Arbeit
INSERT INTO Arbeit VALUES (2581, 'p3', 'Projektleiter', '20191015');
INSERT INTO Arbeit VALUES (5765, 'p4', 'Projektleiter', '20180720');
INSERT INTO Arbeit VALUES (9031, 'p1', 'Gruppenleiter', '20190415');
INSERT INTO Arbeit VALUES (9031, 'p3', 'Sachbearbeiter', '20181115');
INSERT INTO Arbeit VALUES (9912, 'p5', 'Sachbearbeiter', '20190117');
INSERT INTO Arbeit VALUES (10102, 'p1', 'Projektleiter', '20181001');
INSERT INTO Arbeit VALUES (10102, 'p3', 'Gruppenleiter', '20190101');
INSERT INTO Arbeit VALUES (12121, 'p4', 'Gruppenleiter', '20180903');
INSERT INTO Arbeit VALUES (17000, 'p5', NULL, '20191112');
INSERT INTO Arbeit VALUES (17000, 'p1', NULL, '20191112');
INSERT INTO Arbeit VALUES (18316, 'p2', NULL, '20190601');
INSERT INTO Arbeit VALUES (20204, 'p4', 'Sachbearbeiter', '20171220');
INSERT INTO Arbeit VALUES (22222, 'p5', 'Projektleiter', '20190101');
INSERT INTO Arbeit VALUES (24321, 'p3', NULL, '20181201');
INSERT INTO Arbeit VALUES (25348, 'p2', 'Sachbearbeiter', '20180215');
INSERT INTO Arbeit VALUES (27365, 'p4', 'Sachbearbeiter', '20180903');
INSERT INTO Arbeit VALUES (28559, 'p1', NULL, '20180415');
INSERT INTO Arbeit VALUES (28559, 'p2', 'Sachbearbeiter', '20180201');
INSERT INTO Arbeit VALUES (29346, 'p1', 'Sachbearbeiter', '20190401');
INSERT INTO Arbeit VALUES (29346, 'p2', NULL, '20171215');

-- Daten der Tabelle Umsatz
INSERT INTO Umsatz VALUES (1, 10102, '20181001', 500);
INSERT INTO Umsatz VALUES (2, 10102, '20181002', 500);
INSERT INTO Umsatz VALUES (3, 10102, '20181101', 500);
INSERT INTO Umsatz VALUES (4, 10102, '20181101', 5000);
INSERT INTO Umsatz VALUES (5, 10102, '20181102', 500);
INSERT INTO Umsatz VALUES (6, 10102, '20181209', 500);
INSERT INTO Umsatz VALUES (7, 10102, '20181210', 500);
INSERT INTO Umsatz VALUES (8, 10102, '20181223', 5000);
INSERT INTO Umsatz VALUES (9, 10102, '20181228', 500);
INSERT INTO Umsatz VALUES (10, 10102, '20190101', 4500);
INSERT INTO Umsatz VALUES (11, 25348, '20180215', 1500);
INSERT INTO Umsatz VALUES (12, 25348, '20180216', 1500);
INSERT INTO Umsatz VALUES (13, 25348, '20180217', 1500);
INSERT INTO Umsatz VALUES (14, 25348, '20180501', 1500);
INSERT INTO Umsatz VALUES (15, 25348, '20180502', 15000);
INSERT INTO Umsatz VALUES (16, 25348, '20181011', 15000);
INSERT INTO Umsatz VALUES (17, 25348, '20190201', 150000);
INSERT INTO Umsatz VALUES (18, 25348, '20190301', 1500);
INSERT INTO Umsatz VALUES (19, 25348, '20190401', 15);
INSERT INTO Umsatz VALUES (20, 25348, '20190501', 150);
INSERT INTO Umsatz VALUES (21, 2581, '20190501', 100000);
INSERT INTO Umsatz VALUES (22, 17000, '20180303', 5000);
INSERT INTO Umsatz VALUES (23, 17000, '20180304', 5000);
INSERT INTO Umsatz VALUES (24, 17000, '20180305', 5000);
INSERT INTO Umsatz VALUES (25, 17000, '20180306', 5000);
```