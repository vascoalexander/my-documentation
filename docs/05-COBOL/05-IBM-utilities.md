- **IEB**  (= IBM Executive Batch) ist ein **Prefix**, das IBM für eine **Gruppe von Utilities** verwendet.
- **IEB = Batch-Utility** von IBM
- Die Endung beschreibt die Funktion:
    - `GENER` = Generate / Copy
    - `COPY` = Copy PDS
    - `PTPCH` = Punch / Print
    - `LIST` = List Dataset

## 1. **IEBGENER** – Kopieren von Dateien (Copy Utility)

```jcl
//SYSUT1   DD   Eingabedatei
//SYSUT2   DD   Ausgabedatei
//SYSPRINT DD   Protokoll (geht ins SYSOUT)
//SYSIN    DD   Steuerkarten (meist DUMMY)
```

**Beispiel**
```
//COPYJOB  JOB (ACCT),'IEBGENER',CLASS=A,MSGCLASS=X
//STEP1    EXEC PGM=IEBGENER
//SYSUT1   DD DSN=USER.INPUT.FILE,DISP=SHR
//SYSUT2   DD DSN=USER.OUTPUT.FILE,DISP=(NEW,CATLG,DELETE)
//SYSPRINT DD SYSOUT=*
//SYSIN    DD DUMMY
```

---

## 2. **SORT (DFSORT/ICETOOL)** – Sortieren & Selektieren

```jcl
//SORTIN   DD   Eingabedatei
//SORTOUT  DD   Ausgabedatei
//SORTWK01 DD   Temporärdatei (Arbeitsdatei)
//SORTWK02 DD   Temporärdatei
//...      DD   (mehr SORTWKnn je nach Bedarf)
//SYSOUT   DD   Meldungen
//SYSIN    DD   Steuerkarten (Sort-Statements)
```

**Beispiel:**
```
//SORTJOB  JOB (ACCT),'SORT',CLASS=A,MSGCLASS=X
//STEP1    EXEC PGM=SORT
//SORTIN   DD DSN=USER.INPUT.FILE,DISP=SHR
//SORTOUT  DD DSN=USER.SORTED.FILE,DISP=(NEW,CATLG,DELETE)
//SORTWK01 DD UNIT=SYSDA,SPACE=(CYL,(1,1))
//SYSOUT   DD SYSOUT=*
//SYSIN    DD *
  SORT FIELDS=(1,10,CH,A)
  /*
```

---

## 3. **IDCAMS** – Access Method Services (für VSAM, Kataloge)

```jcl
//SYSPRINT DD   Meldungen, Diagnose
//SYSIN    DD   Steuerkarten (z. B. DEFINE, DELETE, REPRO)
```

Beispiel: `REPRO` (Kopieren VSAM ↔ Sequential)

```jcl
//INDD     DD   Eingabe
//OUTDD    DD   Ausgabe
```

**Beispiel:**
```
//IDCAMSJOB JOB (ACCT),'IDCAMS',CLASS=A,MSGCLASS=X
//STEP1    EXEC PGM=IDCAMS
//SYSPRINT DD SYSOUT=*
//SYSIN    DD *
  REPRO INFILE(INPUT) OUTFILE(OUTPUT)
  /*
```
- Optional DDs für Dateien:
```
//INPUT    DD DSN=USER.SEQ.INPUT,DISP=SHR 
//OUTPUT   DD DSN=USER.VSAM.OUTPUT,DISP=(NEW,CATLG,DELETE)
```

---

## 4. **IEBCOPY** – PDS/PDSE kopieren & verwalten

```jcl
//SYSUT1   DD   Quell-PDS
//SYSUT2   DD   Ziel-PDS
//SYSPRINT DD   Meldungen
//SYSIN    DD   Steuerkarten (z. B. COPY, SELECT)
```

**Beispiel:**
```
//COPYPDS JOB (ACCT),'IEBCOPY',CLASS=A,MSGCLASS=X
//STEP1   EXEC PGM=IEBCOPY
//SYSUT1  DD DSN=USER.SOURCE.PDS,DISP=SHR
//SYSUT2  DD DSN=USER.TARGET.PDS,DISP=(NEW,CATLG,DELETE)
//SYSPRINT DD SYSOUT=*
//SYSIN   DD *
  COPY INDD=SYSUT1,OUTDD=SYSUT2
  /*
```

---

## 5. **IEHLIST** – Anzeigen von Dataset-Infos

```jcl
//SYSPRINT DD   Ausgabe (Infos zum Dataset oder Volumes)
//SYSIN    DD   Steuerkarten (z. B. LISTDS)
```

**Beispiel:**
```
//LISTJOB JOB (ACCT),'IEHLIST',CLASS=A,MSGCLASS=X
//STEP1   EXEC PGM=IEHLIST
//SYSIN   DD *
  LISTDS DSNAME(USER.INPUT.FILE)
  /*
//SYSPRINT DD SYSOUT=*
```

---

## 6. **IEBPTPCH** – Drucklisten erzeugen

```jcl
//SYSUT1   DD   Eingabe-Dataset
//SYSPRINT DD   Meldungen
//SYSIN    DD   Steuerkarten (Format, Felder)
```


Beispiel:
```
//BR14JOB  JOB (ACCT),'IEFBR14',CLASS=A,MSGCLASS=X
//STEP1   EXEC PGM=IEFBR14
//MYFILE  DD DSN=USER.NEW.FILE,DISP=(NEW,CATLG,DELETE),
//          UNIT=SYSDA,SPACE=(CYL,(1,1)),DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
```

---

## 7. **IEFBR14** – „Leerprogramm“ (macht nichts, nur zum Anlegen/Löschen von Datasets)

```jcl
//DDNAME   DD   DSN=...,DISP=(NEW,CATLG,DELETE),...
```

Es gibt keine festen Namen – man kann beliebige DDs definieren.  
Wird oft genutzt, um Datasets nur mit JCL zu erstellen.

---

# Zusammenfassung als Tabelle

|Utility|Pflicht-DDs|Typische Funktion|
|---|---|---|
|**IEBGENER**|SYSUT1, SYSUT2, SYSPRINT, SYSIN|Dateien kopieren|
|**SORT**|SORTIN, SORTOUT, SYSOUT, SYSIN (+SORTWKnn)|Sortieren, selektieren|
|**IDCAMS**|SYSIN, SYSPRINT (+IN/OUTDD bei REPRO)|VSAM, Kataloge verwalten|
|**IEBCOPY**|SYSUT1, SYSUT2, SYSPRINT, SYSIN|PDS/PDSE kopieren|
|**IEHLIST**|SYSIN, SYSPRINT|Dataset-/Volume-Infos listen|
|**IEBPTPCH**|SYSUT1, SYSPRINT, SYSIN|PDS-Inhalt als Druckliste|
|**IEFBR14**|frei wählbar|Datasets anlegen/löschen|