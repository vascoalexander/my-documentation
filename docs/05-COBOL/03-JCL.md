In JCL , statements that define where data is coming from, or going to, are known as Data Definition statements, or simply, “ DD statements”.


## 1. Job-Struktur

|Abschnitt|Beschreibung|
|---|---|
|**JOB**|Start eines Jobs, Angaben zu Jobname, Abrechnung, Priorität|
|**EXEC**|Start eines Steps (Programm oder PROC)|
|**DD**|Definiert Eingabe-/Ausgabedatasets oder SYSOUT|
|**PROC/ PEND**|Prozedur-Definition, Ende mit `PEND`|
|**INCLUDE**|Einfügen von Statements aus Member|


## 2. Basis-Syntax

```jcl
//jobname  JOB (acct),'NAME',CLASS=A,MSGCLASS=X,MSGLEVEL=(1,1),NOTIFY=&SYSUID
//stepname EXEC PGM=program
//ddname   DD   DSN=dataset.name,DISP=SHR
```

## 3. DISP-Parameter (Disposition)

|Wert|Bedeutung|
|---|---|
|**NEW**|Neues Dataset anlegen|
|**OLD**|Exklusiver Zugriff|
|**SHR**|Shared-Zugriff (lesen/teilen)|
|**MOD**|An Dataset anhängen|
|**DISP=(NEW,CATLG,DELETE)**|(Status bei Start, Status bei Ende ok, Status bei Ende Fehler)|


## 4. Dataset Allocation

|Parameter|Beschreibung|
|---|---|
|**DSN=**|Dataset-Name|
|**UNIT=**|Gerätetyp (z. B. SYSDA)|
|**SPACE=**|Platzbedarf (z. B. SPACE=(CYL,(5,2),RLSE))|
|**DCB=**|Datenkontrolle (RECFM, LRECL, BLKSIZE)|

Beispiel:

```jcl
//MYOUT DD DSN=USER.OUTPUT.FILE,DISP=(NEW,CATLG,DELETE),
//         UNIT=SYSDA,SPACE=(TRK,(5,5)),DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
```

## 5. SYSOUT

|Parameter|Beschreibung|
|---|---|
|**SYSOUT=A**|Ausgabe in Klasse A (Drucker/SPOOL)|
|*_SYSOUT=_ **|Gleiche Klasse wie JOB-Statement|


## 6. PROC & PARM

```jcl
//MYSTEP EXEC PROCNAME,PARM1=VALUE
//SYSIN   DD *
   (Hier steht Input für das Programm)
   ...
/*
```

## 7. Beispiel-JCL 1

```jcl
//HELLOJOB JOB (ACCT),'HELLO WORLD',CLASS=A,MSGCLASS=X,NOTIFY=&SYSUID
//STEP1    EXEC PGM=IEBGENER
//SYSPRINT DD   SYSOUT=*
//SYSUT1   DD   *
HELLO MAINFRAME WORLD!
/*
//SYSUT2   DD   SYSOUT=*
//SYSIN    DD   DUMMY
```

## 8. Beispiel-JCL 2

|Platzhalter|Bedeutung|
|---|---|
|`<<COBOL_PROGRAMM_NAME>>`|Name deines COBOL-Programms (z. B. `MYCOBOL`)|
|`<<LOAD_LIBRARY>>`|Load-Library, in der das Programm liegt (z. B. `USER.COBOL.LOADLIB`)|
|`<<PARAMETER_WERT>>`|Eingabeparameter, den das Programm erwartet (z. B. `CUSTOMER42`)|
|`<<DEIN.OUTPUT.DATASET>>`|Dataset, in das die Ausgabe geschrieben wird (z. B. `USER.COBOL.OUTPUT`)|

```
//MYJOB    JOB (ACCOUNT),'COBOL RUN',CLASS=A,MSGCLASS=X,NOTIFY=&SYSUID
//* ------------------------------------------------------------------
//* STEP: COBOL-PROGRAMM STARTEN
//* ------------------------------------------------------------------
//RUNPROG  EXEC PGM=<<COBOL_PROGRAMM_NAME>>
//STEPLIB  DD   DSN=<<LOAD_LIBRARY>>,DISP=SHR
//* ------------------------------------------------------------------
//* PARAMETER ÜBERGEBEN (z.B. "INPUT1")
//* ------------------------------------------------------------------
//SYSIN    DD   *
<<PARAMETER_WERT>>
/*
//* ------------------------------------------------------------------
//* AUSGABEDATEI DEFINIEREN
//* ------------------------------------------------------------------
//OUTPUT   DD   DSN=<<DEIN.OUTPUT.DATASET>>,
//              DISP=(NEW,CATLG,DELETE),
//              UNIT=SYSDA,
//              SPACE=(CYL,(1,1)),
//              DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
//* ------------------------------------------------------------------
//* PROTOKOLL / MESSAGES
//* ------------------------------------------------------------------
//SYSPRINT DD   SYSOUT=*
//SYSOUT   DD   SYSOUT=*

```

## Dataset - Space
Der **SPACE-Parameter** sagt dem System, **wie viel Speicherplatz** es beim Anlegen eines neuen Datasets reservieren soll.

```
SPACE=(Einheit,(Primär, Sekundär),RLSE)
```

|Teil|Bedeutung|
|---|---|
|**Einheit**|Gibt an, wie gemessen wird: - `TRK` = Tracks - `CYL` = Zylinder - `BLKS` = Blockanzahl - `AVGREC=K/M/G` für „relative records“ (z. B. bei VSAM)|
|**Primär**|Startgröße (wie viele Einheiten sofort reserviert werden)|
|**Sekundär**|Zusätzliche Einheiten, falls das Dataset wächst|
|**RLSE**|Gibt am Ende unbenutzten Platz wieder frei|
**Beispiel:**
```
SPACE=(CYL,(2,1),RLSE)
```

- Reserviert **2 Zylinder** beim Anlegen
- Falls die Datei größer wird → jeweils **1 weiterer Zylinder**
- Unbenutzter Rest wird nach Job-Ende freigegeben

## Dataset - Data Control Block
Der **DCB-Parameter** beschreibt das **Format und die physische Struktur der Daten** im Dataset.

```
DCB=(RECFM=xx,LRECL=nn,BLKSIZE=nnn)
```

|Teil|Bedeutung|
|---|---|
|**RECFM**|Record Format – wie die Sätze gespeichert sind: - `F` = Fixed (feste Länge) - `FB` = Fixed Blocked (feste Länge, in Blöcken) - `V` = Variable Länge - `VB` = Variable Blocked|
|**LRECL**|Logical Record Length – Länge eines logischen Records in Bytes (z. B. 80 für Kartenimage, 132 für Druckdateien)|
|**BLKSIZE**|Block Size – wie viele Bytes pro physischem Block geschrieben werden (oft Vielfaches von LRECL). Meist: **BLKSIZE = n × LRECL**|
|**DSORG** _(optional)_|Dataset-Organisation (PS=Sequential, DA=Direct Access, PO=Partitioned)|
**Beispiel:**
```
DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
```


### DUMMY
Bedeutung von `DUMMY`

- Sagt dem System: _„Hier ist eigentlich eine Datei definiert, aber du brauchst keine physische Datei anlegen oder lesen.“_
- Es wird **kein Dataset zugeordnet**.
- Das Programm „sieht“ zwar eine Datei, bekommt aber sofort **End-of-File (EOF)** beim Lesen oder **keinen Output** beim Schreiben.

```
//DDNAME  DD  DUMMY
```

#### Typische Anwendungsfälle

1. **Input weglassen**  
    Wenn dein Programm eine Eingabedatei erwartet, du aber gerade keine hast:
    `//SYSIN DD DUMMY`
    → Programm denkt: „Datei leer“, und bekommt sofort EOF.

2. **Output ignorieren**  
    Wenn dein Programm etwas in eine Datei schreiben würde, du das Ergebnis aber nicht brauchst:
    `//PRTFILE DD DUMMY`
    → Ausgabe wird verworfen.

3. **Testläufe**  
    Praktisch, wenn du ein Programm testest, ohne gleich echte Input/Output-Datasets anlegen zu wollen.

**Beispiel:**
```
//TESTJOB JOB (ACCT),'TEST DUMMY',CLASS=A,MSGCLASS=X
//STEP1   EXEC PGM=MYCOBOL
//SYSIN   DD DUMMY          <-- keine Eingabe
//OUTPUT  DD DUMMY          <-- Ausgabe wird verworfen
//SYSPRINT DD SYSOUT=*
```

### DD-Namen
- Jede **DD-Karte** (`//ddname DD ...`) braucht einen **DD-Namen** (1–8 Zeichen).
- **Der Programmierer des Programms bestimmt**, wie die DD-Namen heißen müssen.
- JCL selbst ist egal, ob du `SYSIN`, `INPUT1`, `MYDATA` oder `BANANE` schreibst – **das Programm muss den Namen wiedererkennen**.

#### Bekannte Standardnamen (Konventionen)

|DD-Name|Typischer Zweck (wenn vom Programm so erwartet)|
|---|---|
|**SYSIN**|„System Input“ → Steuerkarten, Parameter oder Eingabedaten für das Programm|
|**SYSPRINT**|„System Print“ → Protokoll- oder Diagnose-Ausgabe|
|**SYSOUT**|Standard-Output, geht in den Spool|
|**SYSUT1**|„System Utility 1“ → temporäre Arbeitsdatei (z. B. bei Copy- oder Sort-Utilities)|
|**SYSUT2**|Zweite Arbeitsdatei (z. B. Ziel-Datei bei Kopiervorgängen)|
|**SORTIN**|Eingabe-Datei für den Sort-Utility|
|**SORTOUT**|Ausgabe-Datei für den Sort-Utility|