VSAM (Virtual Storage Access Method) ist eine **Datenzugriffsmethode** auf IBM-Mainframes. Es ist quasi ein „Dateisystem im Dateisystem“, das effizientere Verwaltung und schnelleren Zugriff auf Daten ermöglicht als die klassischen sequentiellen oder partitionierten Datensätze (wie PS oder PDS). VSAM wird vor allem für **große Mengen strukturierter Daten** eingesetzt, die von Programmen wie COBOL, PL/I oder Assembler verarbeitet werden.

- VSAM ist **record-orientiert**, nicht byte-orientiert. Man arbeitet also mit logischen Records, nicht mit reinen Bytestreams.

- Daten werden in **Cluster** organisiert. Ein Cluster besteht typischerweise aus:
    - **Datenkomponente (Data Component)** → enthält die eigentlichen Records.
    - **Indexkomponente (Index Component)** → steuert den schnellen Zugriff auf die Daten.

- VSAM nutzt **Control Intervals (CI)** und **Control Areas (CA)** als Organisationseinheiten:
    - Ein **Control Interval** (meist 4 KB) ist der kleinste Block an Daten, den VSAM liest oder schreibt.
    - Mehrere CIs bilden eine **Control Area**.

- Vorteil: Schnellzugriff über Schlüssel oder relative Position, effiziente Verwaltung von Speicherplatz.

### 1. **ESDS (Entry-Sequenced Data Set)**

- Records werden **in der Reihenfolge gespeichert**, wie sie geschrieben werden (append-only).
- Jeder Record erhält automatisch eine **Relative Byte Address (RBA)**, also seine Position im Dataset.
- Zugriffsmöglichkeiten:
    - **Sequentiell**: Record für Record in gespeicherter Reihenfolge.
    - **Direkt**: über RBA (man muss also die Adresse kennen).
- **Typisches Einsatzgebiet**: Logfiles, Transaktionsprotokolle, Daten, die chronologisch wachsen.

**Nachteil**: Man kann nicht "mittendrin" einen neuen Record einfügen, nur am Ende. Zum Löschen werden Records oft nur als gelöscht markiert.

### 2. **KSDS (Key-Sequenced Data Set)**

- Jeder Record hat einen **eindeutigen Schlüssel (Key Field)**, z. B. Kundennummer.
- VSAM baut dazu eine **Indexkomponente** auf, die die Suche extrem beschleunigt.
- Zugriffsmöglichkeiten:
    - **Direkt** über den Schlüssel.
    - **Sequentiell** in Schlüsselreihenfolge.
- **Typisches Einsatzgebiet**: Datenbanken, Kundenstammdaten, Artikelbestände – also überall dort, wo man schnell nach einer ID oder einem Code suchen muss.
- Records können in logischer Reihenfolge eingefügt werden (VSAM sortiert sie anhand des Keys). Der Index wächst mit und zeigt immer auf die korrekte Stelle.

**Vorteil**: Extrem schnelle Suchzugriffe und flexible Nutzung (direkt & sequentiell).  
**Nachteil**: Aufwendiger in der Verwaltung (Index benötigt Platz, Updates kosten mehr I/O).