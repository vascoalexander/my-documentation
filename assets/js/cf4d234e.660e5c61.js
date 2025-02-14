"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[5136],{4620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"grundlagen/software-entwicklung/grundbegriffe","title":"Grundbegriffe","description":"","source":"@site/docs/01-grundlagen/software-entwicklung/grundbegriffe.mdx","sourceDirName":"01-grundlagen/software-entwicklung","slug":"/grundlagen/software-entwicklung/grundbegriffe","permalink":"/my-documentation/docs/grundlagen/software-entwicklung/grundbegriffe","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/01-grundlagen/software-entwicklung/grundbegriffe.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"","sidebar_position":1,"title":"Grundbegriffe"},"sidebar":"grundlagenSidebar","previous":{"title":"Software-Entwicklung","permalink":"/my-documentation/docs/category/software-entwicklung"},"next":{"title":"Datentypen und Variablen","permalink":"/my-documentation/docs/grundlagen/software-entwicklung/datentypen-variablen"}}');var t=r(4848),s=r(8453),l=r(5537),a=r(9329);const d={description:"",sidebar_position:1,title:"Grundbegriffe"},o="Grundbegriffe",c={},u=[{value:"Ausdruck",id:"ausdruck",level:3},{value:"Deklaration",id:"deklaration",level:3},{value:"Initialisierung",id:"initialisierung",level:3},{value:"Bezeichner",id:"bezeichner",level:3},{value:"Literal",id:"literal",level:3},{value:"Konstanten",id:"konstanten",level:3},{value:"Anweisung",id:"anweisung",level:3},{value:"Prozedur",id:"prozedur",level:3},{value:"Funktion",id:"funktion",level:3},{value:"Methode",id:"methode",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Argument",id:"argument",level:3},{value:"Klasse",id:"klasse",level:3},{value:"Feld",id:"feld",level:4},{value:"Attribut",id:"attribut",level:4},{value:"Property (Eigenschaft, Zugriffsmethode)",id:"property-eigenschaft-zugriffsmethode",level:4},{value:"Objekt",id:"objekt",level:3},{value:"Konstruktor",id:"konstruktor",level:3},{value:"Iterator",id:"iterator",level:3},{value:"Generator",id:"generator",level:3},{value:"Dekorator",id:"dekorator",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"grundbegriffe",children:"Grundbegriffe"})}),"\n",(0,t.jsx)(n.h3,{id:"ausdruck",children:"Ausdruck"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(eng Expression)"})}),"\n",(0,t.jsxs)(n.p,{children:["Ein Konstrukt das gem\xe4\xdf einer gegebenen Semantik in Bezug auf einen Kontext ",(0,t.jsx)(n.strong,{children:"ausgewertet werden kann, also einen Wert liefert"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Literale (Konstanten): \ud835\uded1 = 3.14, "Hallo Welt"'}),"\n",(0,t.jsx)(n.li,{children:"Variablen: x, betragInEuro, wochtagsNummer"}),"\n",(0,t.jsx)(n.li,{children:"Funktionen: random(), date()"}),"\n",(0,t.jsx)(n.li,{children:"Operationen: 2+5, 2^8, 2(x - 10)"}),"\n",(0,t.jsx)(n.li,{children:"Eine Kombination aus Variablen, Funktionen und Operationen die zu einem einzigen Wert ausgewertet wird."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deklaration",children:"Deklaration"}),"\n",(0,t.jsx)(n.p,{children:"Die Einf\xfchrung eines Bezeichners (zb einer Variablen, Funktion oder Klasse) im Code, ohne zwingend Speicher zu reservieren oder eine Initialisierung vorzunehmen."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Definition von Name und Typ einer Entit\xe4t (Variable, Funktion, Klasse)"}),"\n",(0,t.jsx)(n.li,{children:"Keine Speicherreservierung"}),"\n",(0,t.jsx)(n.li,{children:"Erm\xf6glicht sp\xe4tere Verwendung (Initialisierung)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explizite Deklaration"}),": Typ oder andere Metadaten werden direkt angegeben (int zahl)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Implizite Deklaration"}),": Automatische Ermittlung des Typs durch den Compiler/Interpreter (var zahl)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"initialisierung",children:"Initialisierung"}),"\n",(0,t.jsx)(n.p,{children:'Zuweisung eines Wertes zu einer Variablen. Explizit wenn der Variable direkt ein Wert zugewiesen wird (string name = "Bob"). Manche Sprachen (wie C#) weisen Variablen automatisch Standardwerte zu, wenn sie als Felder einer Klasse definiert sind (Implizite Initialisierung).'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"lokale Variablen m\xfcssen explizit initialisiert werden"}),"\n",(0,t.jsx)(n.li,{children:"lazy Initialization (verz\xf6gerte Initialisierung): Variable wird initialisiert, wenn sie das erste mal benutzt wird. Verbessert die Performance in manchen Szenarien."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Best Practice:"})," Variablen sollten immer mit sinnvollen Standardwerten initialisiert werden, um unerwartetes Verhalten zu vermeiden."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bezeichner",children:"Bezeichner"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(eng Identifier)"})}),"\n",(0,t.jsxs)(n.p,{children:["Eindeutige Benennung von Variablen, Datentypen, Funktionen oder Klassen. Bezeichner m\xfcssen ",(0,t.jsx)(n.strong,{children:"innerhalb eines Namensraumes eindeutig"})," sein, es sei denn die Programmiersprache erlaubt das \xdcberladen (siehe auch Polymorphie)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Allgemeine Regeln f\xfcr Bezeichner:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"K\xf6nnen Buchstaben (a-z, A-Z), Ziffern (0-9) und Unterstriche (_) enthalten."}),"\n",(0,t.jsx)(n.li,{children:"D\xfcrfen nicht mit einer Ziffer beginnen."}),"\n",(0,t.jsxs)(n.li,{children:["D\xfcrfen keine reservierten Schl\xfcsselw\xf6rter (wie ",(0,t.jsx)(n.code,{children:"if"}),", ",(0,t.jsx)(n.code,{children:"for"}),", ",(0,t.jsx)(n.code,{children:"while"}),") sein."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"literal",children:"Literal"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(lat. littera 'Buchstabe')"}),(0,t.jsx)(n.br,{}),"\n","Ein Literal ist ein fester Wert, der direkt im Code geschrieben steht. Literals stellen Werte dar, die nicht ver\xe4ndert werden k\xf6nnen."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"logische (wahr oder falsch), numerische oder Zeichenliterale"}),"\n",(0,t.jsx)(n.li,{children:"in der funktionalen Programmierung k\xf6nnen auch Funktionen als Literale geschrieben werden: werden als anonyme Funktionen oder Lambda Funktionen bezeichnet"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Best Practice"}),": Literale sind okay f\xfcr einfache, selbsterkl\xe4rende Werte"]}),"\n"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)(n.strong,{children:"Exkurs:"})," Magic Numbers"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Definition:"}),"\nEin Magic Number ist eine ungekennzeichnete numerische Konstante, die direkt im Code verwendet wird, ohne Erkl\xe4rung oder Kontext. Sie macht den Code schwer verst\xe4ndlich und schwer wartbar."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Fehlende Bedeutung:"})," ",(0,t.jsx)(n.code,{children:"double preis = menge * 19.99;"}),(0,t.jsx)(n.br,{}),"\n","Was bedeutet 19.99? Ist es ein Rabatt? Eine Steuer? Ein Fixpreis?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Schwer zu \xe4ndern:"})," ",(0,t.jsx)(n.code,{children:"if (punkte >= 100) { ... }"}),(0,t.jsx)(n.br,{}),"\n","Wenn sich die Punktegrenze \xe4ndert, muss sie ggfs. an mehreren Stellen ersetzt werden."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ersetze Magic Numbers durch Konstanten mit erkl\xe4rendem Namen:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"const double Umsatzsteuer = 19.99;  \ndouble preis = menge * Umsatzsteuer;\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Bessere Lesbarkeit und Wartbarkeit:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"const int MindestpunkteF\xfcrBonus = 100;  \nif (punkte >= MindestpunkteF\xfcrBonus) { ... }\n"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Best Practice:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"const f\xfcr fixe Werte"}),"\n",(0,t.jsx)(n.li,{children:"gib Konstanten sprechende Namen"}),"\n",(0,t.jsx)(n.li,{children:"Vermeide Hardcoded-Zahlen in Vergleichen oder Berechnungen"}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"konstanten",children:"Konstanten"}),"\n",(0,t.jsx)(n.p,{children:"Eine Konstante (lat constans 'feststehend') ist ein Beh\xe4lter f\xfcr eine Wert, der nach der Zuweisung nicht ver\xe4ndert werden kann. Das Gegenst\xfcck dazu ist eine Variable."}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)(n.strong,{children:"Exkurs"}),": const vs readonly"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Was ist readonly?"}),(0,t.jsx)(n.br,{}),"\n","Das Schl\xfcsselwort readonly in C# kennzeichnet Felder, deren Wert nach der Initialisierung nicht mehr ge\xe4ndert werden kann.\nIm Gegensatz zu const kann ein readonly-Feld zur Laufzeit initialisiert werden, z. B. im Konstruktor."]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Unterschiede zwischen ",(0,t.jsx)(n.code,{children:"readonly"})," und ",(0,t.jsx)(n.code,{children:"const"})]})}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Merkmal"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"const"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"readonly"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Wert\xe4nderung"})}),(0,t.jsxs)(n.td,{children:["Muss ",(0,t.jsx)(n.strong,{children:"zur Kompilierzeit"})," feststehen"]}),(0,t.jsxs)(n.td,{children:["Kann zur ",(0,t.jsx)(n.strong,{children:"Laufzeit"})," gesetzt werden"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"G\xfcltigkeitsbereich"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Nur f\xfcr primitive Typen & Strings"})}),(0,t.jsxs)(n.td,{children:["F\xfcr ",(0,t.jsx)(n.strong,{children:"alle Datentypen"})," nutzbar"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Wo erlaubt?"})}),(0,t.jsxs)(n.td,{children:["Nur in ",(0,t.jsx)(n.strong,{children:"statischen"})," Kontexten"]}),(0,t.jsxs)(n.td,{children:["In ",(0,t.jsx)(n.strong,{children:"Instanz- und statischen Feldern"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Verwendung in Konstruktoren"})}),(0,t.jsx)(n.td,{children:"\u274c Nein"}),(0,t.jsx)(n.td,{children:"\u2705 Ja"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Beispiel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"const double Pi = 3.14;"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"readonly int maxUsers;"})})]})]})]}),(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsxs)(n.strong,{children:["Nutze ",(0,t.jsx)(n.code,{children:"readonly"}),", wenn:"]})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Wert ",(0,t.jsx)(n.strong,{children:"erst zur Laufzeit"})," bekannt ist."]}),"\n",(0,t.jsx)(n.li,{children:"Der Wert von einem Konstruktor abh\xe4ngt."}),"\n",(0,t.jsx)(n.li,{children:"Du komplexe Objekte (z. B. Listen, Klassen) speichern m\xf6chtest."}),"\n"]}),(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsxs)(n.strong,{children:["Nutze ",(0,t.jsx)(n.code,{children:"const"}),", wenn:"]})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Wert ",(0,t.jsx)(n.strong,{children:"zur Kompilierzeit"})," bekannt ist."]}),"\n",(0,t.jsxs)(n.li,{children:["Es sich um einfache ",(0,t.jsx)(n.strong,{children:"Zahlen, Strings oder boolesche Werte"})," handelt."]}),"\n"]})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="Beispiel in statischen Feldern"',children:"class Config\n{\n    public static readonly int MaxConnections = 100;\n\n    static Config()\n    {\n        MaxConnections = 200;  // Initialisierung ist in statischem Konstruktor erlaubt\n    }\n}\n"})}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"readonly"})," in anderen Sprachen"]})}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Sprache"})}),(0,t.jsx)(n.th,{children:(0,t.jsxs)(n.strong,{children:["Entsprechung von ",(0,t.jsx)(n.code,{children:"readonly"})]})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"C++"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"const"})," f\xfcr Felder"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Java"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"final"})," f\xfcr Felder"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"TypeScript"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"readonly"})," f\xfcr Klassenvariablen"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Python"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"@property"})," mit nur einem Getter"]})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"anweisung",children:"Anweisung"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(eng Statement)"})}),"\n",(0,t.jsx)(n.p,{children:"Statements sind komplette Einheiten von Code, die eine bestimmte Operation ausf\xfchren, wie z.B. eine Variable zuzuweisen oder eine Schleife auszuf\xfchren."}),"\n",(0,t.jsxs)(n.p,{children:["Zentrales Element ",(0,t.jsx)(n.a,{href:"paradigmen#imperative-programmierung",children:(0,t.jsx)(n.strong,{children:"Imperativer Programmiersprachen"})}),": Programmierparadigma nach dem ein Programm aus einer Folge von Anweisungen besteht, die vorgeben in welcher Reihenfolge was vom Computer getan werden soll."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Beispiele:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Zuweisung: ",(0,t.jsx)(n.code,{children:"x = 5"})]}),"\n",(0,t.jsxs)(n.li,{children:["Funktionsaufruf: ",(0,t.jsx)(n.code,{children:'print("Hallo")'})]}),"\n",(0,t.jsxs)(n.li,{children:["Schleifen: ",(0,t.jsx)(n.code,{children:"for i in range(10): [...]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Bedingungen: ",(0,t.jsx)(n.code,{children:"if x > 3: [...]"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"prozedur",children:"Prozedur"}),"\n",(0,t.jsxs)(n.p,{children:['Variante zum Begriff "',(0,t.jsx)(n.strong,{children:"Unterprogramm"}),'". Anweisungen einer Prozedur k\xf6nnen \xfcber aufgerufen und dadurch mehrfach verwendet werden. Im Gegensatz zu Funktionen liefern Prozeduren normalerweise ',(0,t.jsx)(n.strong,{children:"keinen R\xfcckgabewert"}),". Je nach Programmiersprache und Programmierparadigma gibt es jedoch Unterschiede in der Definition des Begriffs Prozedur und der Abgrenzung zur Funktion."]}),"\n",(0,t.jsx)(n.h3,{id:"funktion",children:"Funktion"}),"\n",(0,t.jsxs)(n.p,{children:['Ein Programmkonstrukt ("Unterprogramm"), mit dem Quellcode strukturiert werden kann, sodass Teile der Funktionalit\xe4t wiederverwendbar sind. Im Gegensatz zu Prozeduren ',(0,t.jsx)(n.strong,{children:"geben Funktionen einen Wert zur\xfcck"}),", der direkt verwendet werden kann. Prozeduren, die keinen R\xfcckgabewert haben, k\xf6nnen nur indirekt Ergebnisse liefern, indem entweder Referenzparameter oder globale Variablen ver\xe4ndert werden."]}),"\n",(0,t.jsx)(n.h3,{id:"methode",children:"Methode"}),"\n",(0,t.jsxs)(n.p,{children:["Eine Methode ist eine ",(0,t.jsx)(n.strong,{children:"Funktion, die in einer Klasse oder einem Objekt definiert ist"}),". Sie geh\xf6rt zu einem bestimmten Objekt oder einer Klasse und kann daher auf dessen Eigenschaften (Attribute) und andere Methoden zugreifen."]}),"\n",(0,t.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,t.jsxs)(n.p,{children:["Platzhalter f\xfcr Werte in der Funktionsdefinition. Sie sind ",(0,t.jsx)(n.strong,{children:"Teil der Funktionsdeklaration"}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"funktion(parameter, parameter){[...]}"})]}),"\n",(0,t.jsx)(n.h3,{id:"argument",children:"Argument"}),"\n",(0,t.jsxs)(n.p,{children:["Ein Argument ist der ",(0,t.jsx)(n.strong,{children:"tats\xe4chliche Wert oder die Referenz, die an eine Funktion \xfcbergeben wird"}),", wenn diese aufgerufen wird. Argumente werden im Funktionsaufruf \xfcbergeben und entsprechen den Parametern, die in der Funktionsdefinition deklariert sind.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"funktion(3435, 23){[...]}"})]}),"\n",(0,t.jsx)(n.h3,{id:"klasse",children:"Klasse"}),"\n",(0,t.jsx)(n.p,{children:"Eine Klasse ist ein Bauplan f\xfcr Objekte. Sie definiert eine Datenstruktur und die Methoden (Funktionen), die darauf arbeiten."}),"\n",(0,t.jsx)(n.h4,{id:"feld",children:"Feld"}),"\n",(0,t.jsxs)(n.p,{children:["Ein Feld ist eine ",(0,t.jsx)(n.strong,{children:"direkte Variable in einer Klasse"})," oder Struktur, die den Zustand eines Objekts speichert."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Wird meistens als privates Datenmitglied (private) definiert, um direkten Zugriff zu vermeiden."}),"\n",(0,t.jsx)(n.li,{children:"Kann direkt gelesen oder ge\xe4ndert werden (sofern public, was oft vermieden wird -> Kapselung / Geheimnisprinziep)."}),"\n",(0,t.jsx)(n.li,{children:"Beinhaltet keine Logik (wie \xdcberpr\xfcfung oder Validierung)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attribut",children:"Attribut"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Der Begriff Attribut ist allgemeiner als "Feld".'}),"\n",(0,t.jsxs)(n.li,{children:["In der OOP bezeichnet ein Attribut einfach ",(0,t.jsx)(n.strong,{children:"eine Eigenschaft eines Objekts"}),", unabh\xe4ngig von der konkreten Implementierung."]}),"\n",(0,t.jsx)(n.li,{children:"In Sprachen wie Python oder JavaScript werden Attribute oft als alles betrachtet, was ein Objekt besitzt (Felder, Methoden, Properties)."}),"\n",(0,t.jsx)(n.li,{children:'In C# oder Java wird der Begriff "Attribut" weniger f\xfcr Felder/Properties verwendet, sondern f\xfcr Metadaten (Annotationen oder Decorators), die zus\xe4tzliche Informationen f\xfcr den Compiler oder Laufzeitumgebungen enthalten.'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"property-eigenschaft-zugriffsmethode",children:"Property (Eigenschaft, Zugriffsmethode)"}),"\n",(0,t.jsx)(n.p,{children:"Eine Property ist eine Methode, die wie ein Feld aussieht."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Erm\xf6glicht kontrollierten Zugriff auf Felder mit Getter- und Setter-Methoden."}),"\n",(0,t.jsx)(n.li,{children:"Unterst\xfctzt Validierung, Berechnungen oder Schutzmechanismen."}),"\n",(0,t.jsx)(n.li,{children:"Verhindert direkten Zugriff auf interne Felder."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Best Practice in C#"}),": Private Felder + Public Properties!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="Beispiel in Python"',children:'class Person:\n    # Konstruktor (wird aufgerufen wenn ein neues Objekt erstellt wird)\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Methode\n    def greet(self):\n        print(f"Hallo, mein Name ist {self.name} und ich bin {self.age} Jahre alt.")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"objekt",children:"Objekt"}),"\n",(0,t.jsxs)(n.p,{children:["Ein Objekt ist eine ",(0,t.jsx)(n.strong,{children:"Instanz einer Klasse"}),". Es repr\xe4sentiert ein spezifisches Exemplar der Klasse und hat Attribute (Daten) und Methoden (Funktionen)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="Ein Objekt der Klasse Person (s.o.)"',children:'person1 = Person("Alice", 30)\nperson1.greet()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"konstruktor",children:"Konstruktor"}),"\n",(0,t.jsxs)(n.p,{children:["Ein Konstruktor ist eine spezielle Methode innerhalb einer Klasse, die beim ",(0,t.jsx)(n.strong,{children:"Erstellen eines Objekts"})," automatisch aufgerufen wird."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Initialisiert ein Objekt in einem definierten Anfangszustand (z. B. setzt Standardwerte)."}),"\n",(0,t.jsx)(n.li,{children:"Reserviert ben\xf6tigte Resourcen, sofern diese zum Zeitpunkt der Objekterstellung bereits bekannt sind."}),"\n"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.strong,{children:"Konstruktoren in C#"})}),(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"csharp-einfach",label:"Einfach",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'using System;\n\nclass Person {\n    public string Name;\n    public int Age;\n\n    // Konstruktor\n    public Person(string name, int age) {\n        Name = name;\n        Age = age;\n    }\n\n    public void Greet() {\n        Console.WriteLine($"Hallo, mein Name ist {Name} und ich bin {Age} Jahre alt.");\n    }\n}\n\nclass Program {\n    static void Main() {\n        Person p = new Person("Max", 30);  // Konstruktor wird aufgerufen\n        p.Greet();\n    }\n}\n'})})}),(0,t.jsx)(a.A,{value:"csharp-ueberladung",label:"Mehrere (\xdcberladung)",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// man kann mehrere Konstruktoren mit verschiedenen Parametern\n// definieren (Konstruktor \xdcberladung)\nclass Person {\n    public string Name;\n    public int Age;\n\n    // Konstruktor 1\n    public Person(string name, int age) {\n        Name = name;\n        Age = age;\n    }\n\n    // Konstruktor 2 (Standardwerte)\n    public Person() {\n        Name = "Unbekannt";\n        Age = 0;\n    }\n}\n\nclass Program {\n    static void Main() {\n        Person p1 = new Person("Anna", 25);\n        Person p2 = new Person();  // Standardwerte werden gesetzt\n\n        Console.WriteLine($"{p1.Name}, {p1.Age} Jahre");\n        Console.WriteLine($"{p2.Name}, {p2.Age} Jahre");\n    }\n}\n'})})}),(0,t.jsx)(a.A,{value:"csharp-this",label:"Aufruf mit this",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'class Beispiel\n{\n    // Konstruktor ohne Parameter, der den anderen Konstruktor mit this(..., ...) aufruft\n    public Beispiel() : this("Heute ist der ", DateTime.Today)\n    {\n    }\n    \n    // Konstruktor mit zwei Parametern\n    public Beispiel(string text, DateTime datum)\n    {\n        Console.WriteLine(text + datum.ToShortDateString());\n    }\n    \n    // Hauptmethode\n    public static void Main(string[] args)\n    {\n        Beispiel beispiel1 = new Beispiel("Morgen ist der ", DateTime.Today.AddDays(1));\n        // Aufruf des ersten Konstruktors\n        // Ausgabe: Morgen ist der {dd.MM.yyyy}\n        \n        Beispiel beispiel2 = new Beispiel();\n        // Aufruf des zweiten Konstruktors\n        // Ausgabe: Heute ist der {dd.MM.yyyy}\n    }\n}\n'})})})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.strong,{children:"Konstruktoren in Python"})}),(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"python-einfach",label:"Einfach",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Person:\n    def __init__(self, name, age):  # Konstruktor\n        self.name = name\n        self.age = age\n\n    def greet(self):\n        print(f"Hallo, mein Name ist {self.name} und ich bin {self.age} Jahre alt.")\n\n# Objekterstellung\np = Person("Max", 30)  # Konstruktor wird automatisch aufgerufen\np.greet()\n'})})}),(0,t.jsx)(a.A,{value:"python-default",label:"Default Parameter",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Person:\n    def __init__(self, name="Unbekannt", age=0):\n        self.name = name\n        self.age = age\n\np1 = Person("Anna", 25)\np2 = Person()  # Standardwerte werden genutzt\n\nprint(f"{p1.name}, {p1.age} Jahre")\nprint(f"{p2.name}, {p2.age} Jahre")\n'})})}),(0,t.jsx)(a.A,{value:"python-super",label:"Vererbung mit super()",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Animal:\n    def __init__(self, species):\n        self.species = species\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__("Hund")  # Ruft den Konstruktor der Elternklasse auf\n        self.name = name\n\nd = Dog("Bello")\nprint(f"{d.name} ist ein {d.species}.")\n'})})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"iterator",children:"Iterator"}),"\n",(0,t.jsx)(n.p,{children:"Ein Iterator ist ein Objekt, das eine Sequenz von Elementen einen nach dem anderen zur\xfcckgibt, ohne alle Elemente gleichzeitig im Speicher zu halten.\nIteratoren erm\xf6glichen es, gro\xdfe oder unendliche Datenstrukturen effizient zu durchlaufen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="Erstellung und Nutzung eines Iterators in Python"',children:"my_list = [1, 2, 3]  # Eine Liste (iterierbares Objekt)\nmy_iter = iter(my_list)  # Erzeugt einen Iterator f\xfcr die Liste\nprint(next(my_iter))  # Gibt 1 aus\nprint(next(my_iter))  # Gibt 2 aus\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.strong,{children:"Iteratoren mit C#"})}),(0,t.jsxs)(n.p,{children:["C# nutzt das ",(0,t.jsx)(n.strong,{children:"yield"})," Schl\xfcsselwort, um Iteratoren einfach zu erstellen, ohne dass man eine eigene Klasse schreiben muss."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="Implementierung von yield return um ein gro\xdfes Array zu verarbeiten"',children:'using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        foreach (var name in GetNames()) {\n            if (name.StartsWith("A")) {  // Stoppt fr\xfchzeitig, wenn genug gefunden wurden\n                Console.WriteLine(name);\n                break;\n            }\n        }\n    }\n\n    static IEnumerable<string> GetNames() {\n        string[] names = new string[10000];\n        for (int i = 0; i < names.Length; i++) {\n            names[i] = "Name" + i;  // Dummy-Daten\n        }\n\n        foreach (var name in names) {\n            yield return name;  // Gibt Namen einzeln zur\xfcck\n        }\n    }\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"generator",children:"Generator"}),"\n",(0,t.jsx)(n.p,{children:"Ein Generator ist eine spezielle Funktion, die Iteratoren erstellt."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Er gibt Werte Schritt f\xfcr Schritt zur\xfcck, ohne alle Werte auf einmal zu speichern."}),"\n",(0,t.jsx)(n.li,{children:"Wird oft f\xfcr gro\xdfe Datenmengen oder unendliche Sequenzen verwendet."}),"\n",(0,t.jsx)(n.li,{children:"In C# nutzt man yield return, in Python yield."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Wann Generatoren nutzen?"}),(0,t.jsx)(n.br,{}),"\n","\u2705 Gro\xdfe Datenmengen streamen \u2013 Falls du nicht alles auf einmal laden willst.",(0,t.jsx)(n.br,{}),"\n","\u2705 Unendliche Sequenzen \u2013 Perfekt f\xfcr Fibonacci, Zufallszahlen, etc.",(0,t.jsx)(n.br,{}),"\n","\u2705 Effiziente Speicherverwendung \u2013 Erzeugt Werte nur bei Bedarf."]}),"\n",(0,t.jsx)(n.admonition,{title:"Einfacher Generator Beispielcode",type:"info",children:(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"python-generator",label:"Python",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"    # Gibt Werte Schritt f\xfcr Schritt zur\xfcck\n    # Die Methode merkt sich den Zustand\n    def count_up_to(max):\n        for i in range(1, max + 1):\n        yield i  # Gibt einen Wert zur\xfcck und pausiert\n\n    for num in count_up_to(5):\n    print(num)\n"})})}),(0,t.jsx)(a.A,{value:"csharp-generator",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static void Main() {\n        foreach (var num in CountUpTo(5)) {\n            Console.WriteLine(num);\n        }\n    }\n\n    static IEnumerable<int> CountUpTo(int max) {\n        for (int i = 1; i <= max; i++) {\n            yield return i;  // Gibt einen Wert zur\xfcck und merkt sich den Zustand\n        }\n    }\n}\n"})})})]})}),"\n",(0,t.jsx)(n.h3,{id:"dekorator",children:"Dekorator"}),"\n",(0,t.jsx)(n.p,{children:"Ein Dekorator ist ein Entwurfsmuster (Strukturmuster), mit dem eine Funktion, Methode oder Klasse zur Laufzeit ver\xe4ndert oder erweitert werden kann, ohne ihren eigentlichen Code zu \xe4ndern. Das Muster stellt eine flexible Alternative zur Unterklassenbildung dar, um eine Klasse um zus\xe4tzliche Funktionalit\xe4ten zu erweitern."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In Python gibt es native Dekoratoren (@decorator), um Funktionen zu modifizieren."}),"\n",(0,t.jsxs)(n.li,{children:["In C# nutzt man ",(0,t.jsx)(n.strong,{children:"Attribute"})," ([Attribute]) ",(0,t.jsx)(n.strong,{children:"oder Wrapper-Klassen"})," f\xfcr \xe4hnliche Funktionalit\xe4t."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="Ein Dekorator in Python"',children:'# my_decorator nimmt eine Funktion (func) als Argument\n# der wrapper f\xfchrt zus\xe4tzlichen Code vor und nach der Funktion aus\n# @my_decorator wendet die Modifikation auf say_hello() an\ndef my_decorator(func):\n    def wrapper():\n        print("Vor der Funktion")\n        func()\n        print("Nach der Funktion")\n    return wrapper\n\n@my_decorator  # Das ist der Dekorator\ndef say_hello():\n    print("Hallo!")\n\nsay_hello()\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var i=r(4164);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,l),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>v});var i=r(6540),t=r(4164),s=r(5627),l=r(6347),a=r(372),d=r(604),o=r(1861),c=r(8749);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),f=(()=>{const e=o??x;return g({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=r(4848);function b(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),t=a[r].value;t!==i&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{d.push(e)},onKeyDown:u,onClick:c,...s,className:(0,t.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=x(e);return(0,p.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,p.jsx)(b,{...n,...e}),(0,p.jsx)(k,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,p.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);