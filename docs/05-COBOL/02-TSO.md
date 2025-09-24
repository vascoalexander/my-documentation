### TSO Commands

| **Kommando**         | **Beschreibung**                                       | **Beispiel**                                                              |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| `ALLOCATE` / `ALLOC` | Allokiert ein Dataset oder eine Datei für die Session. | `ALLOC DA(MEINE.DATEI) NEW SPACE(5,5) CYL DSORG(PS) RECFM(F,B) LRECL(80)` |
| `FREE`               | Gibt allokierte Datasets wieder frei.                  | `FREE DA(MEINE.DATEI)`                                                    |
| `LISTALC`            | Zeigt aktuell allokierte Datasets an.                  | `LISTALC STATUS`                                                          |
| `LISTCAT`            | Listet Einträge aus dem Katalog.                       | `LISTCAT ENT(MEINE.DATEI)`                                                |
| `DELETE` / `DEL`     | Löscht ein Dataset.                                    | `DELETE MEINE.DATEI PURGE`                                                |
| `RENAME`             | Benennt ein Dataset um.                                | `RENAME ALTES.DATEI.NAME NEUES.DATEI.NAME`                                |
| `SEND`               | Sendet eine Nachricht an einen anderen Benutzer.       | `SEND 'Hallo' USER(USERID)`                                               |
| `PROFILE`            | Zeigt oder ändert Profildaten (z. B. Zeilenlänge).     | `PROFILE PREFIX(MEINID)`                                                  |
| `TIME`               | Zeigt die aktuelle Zeit an.                            | `TIME`                                                                    |
| `LISTBC`             | Zeigt Broadcast-Messages an.                           | `LISTBC`                                                                  |
| `LISTUSER`           | Listet Informationen über einen Benutzer.              | `LISTUSER MEINID OMVS`                                                    |
| `HELP`               | Zeigt Hilfe zu einem Kommando.                         | `HELP ALLOC`                                                              |
| `ISHELL`             | Startet die UNIX System Services Shell (OMVS).         | `ISHELL`                                                                  |
| `SUBMIT`             | Reicht ein JCL-Job ein.                                | `SUBMIT 'MEINE.JCL(LIB)'`                                                 |
| `STATUS`             | Zeigt den Status der aktuellen TSO-Session.            | `STATUS`                                                                  |
| `LOGOFF`             | Beendet die TSO-Session.                               | `LOGOFF`                                                                  |

### ISPF
wip