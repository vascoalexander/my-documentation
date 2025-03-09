"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[2118],{31003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Csharp/Classes-OOP/Classes-Objects","title":"Classes & Objects","description":"","source":"@site/docs/04-Csharp/04-Classes-OOP/02-Classes-Objects.md","sourceDirName":"04-Csharp/04-Classes-OOP","slug":"/Csharp/Classes-OOP/Classes-Objects","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Classes-Objects","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/04-Classes-OOP/02-Classes-Objects.md","tags":[{"inline":true,"label":"Konstruktor","permalink":"/my-documentation/docs/tags/konstruktor"},{"inline":true,"label":"getter","permalink":"/my-documentation/docs/tags/getter"},{"inline":true,"label":"setter","permalink":"/my-documentation/docs/tags/setter"},{"inline":true,"label":"properties","permalink":"/my-documentation/docs/tags/properties"}],"version":"current","sidebarPosition":2,"frontMatter":{"created":"2025-02-23, 11:33","title":"Classes & Objects","description":"","sidebar_position":2,"language":"C#","tags":["Konstruktor","getter","setter","properties"]},"sidebar":"csharpSidebar","previous":{"title":"Methoden & Funktionen","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Methoden-Funktionen"},"next":{"title":"Access Modifiers","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Access-Modifier"}}');var s=t(74848),i=t(28453);const a={created:"2025-02-23, 11:33",title:"Classes & Objects",description:"",sidebar_position:2,language:"C#",tags:["Konstruktor","getter","setter","properties"]},o=void 0,l={},c=[{value:"Simple Class with Constructor",id:"simple-class-with-constructor",level:2},{value:"Person Class with Full Name Property",id:"person-class-with-full-name-property",level:2},{value:"Explizite Getter und Setter",id:"explizite-getter-und-setter",level:2},{value:"Getter &amp; Setter (Lambda Schreibweise)",id:"getter--setter-lambda-schreibweise",level:2},{value:"Properties (ausf\xfchrliche Schreibweise)",id:"properties-ausf\xfchrliche-schreibweise",level:2},{value:"Expression-bodied Properties",id:"expression-bodied-properties",level:2},{value:"Properties (Auto-Properties)",id:"properties-auto-properties",level:2},{value:"Konstruktor mit \xdcberladung",id:"konstruktor-mit-\xfcberladung",level:2},{value:"Konstruktor Aufruf mit this",id:"konstruktor-aufruf-mit-this",level:2},{value:"Method Overriding",id:"method-overriding",level:2},{value:"String Representation with ToString",id:"string-representation-with-tostring",level:2},{value:"Override Equals",id:"override-equals",level:2}];function d(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"simple-class-with-constructor",children:"Simple Class with Constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person \n{\n    public string Name {get, private set};\n    public int Age {get, private set};\n\n\t// Einfacher Konstruktor\n    public Person(string name, int age) \n    {\n        Name = name;\n        Age = age;\n    }\n    \n\tpublic void Greet() \n\t{  \n\t    Console.WriteLine($"Hallo, mein Name ist {Name} " +  \n\t                      $"und ich bin {Age} Jahre alt.");  \n\t}\n}\n\nclass Program \n{\n    static void Main() \n    {\n        Person p = new Person("Max", 30);\n        p.Greet();\n    }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"person-class-with-full-name-property",children:"Person Class with Full Name Property"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person  \n{  \n    public string FirstName { get; set; }  \n    public string LastName { get; set; }  \n  \n    public string FullName =>   \n        $"{FirstName ?? "Unknown"} {LastName ?? "Unknown"}";  \n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"explizite-getter-und-setter",children:"Explizite Getter und Setter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person\n{\n    private string name;\n\n    // Getter-Methode\n    public string GetName()\n    {\n        return name;\n    }\n\n    // Setter-Methode\n    public void SetName(string value)\n    {\n        // Hier k\xf6nnte man auch Validierungen einbauen\n        name = value;\n    }\n}\n\n// Nutzung:\nvar person = new Person();\nperson.SetName("Max");\nConsole.WriteLine(person.GetName()); // Ausgabe: Max\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"getter--setter-lambda-schreibweise",children:"Getter & Setter (Lambda Schreibweise)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person\n{\n\tprivate string _name;\n\tprivate int _age;\n\n\tpublic void GetAge() => _age;\n\tpublic void SetAge(int age) => this.age = age >= 0 && age <= 150 ? age : -1;\n\n\tpublic void GetName => _name;\n\tpublic void SetName(string name) => this.name = name.IsNullOrEmpty ?\n\t\tname : "Invalid name";\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"properties-ausf\xfchrliche-schreibweise",children:"Properties (ausf\xfchrliche Schreibweise)"}),"\n",(0,s.jsx)(n.p,{children:"Properties kapseln intern oft ein privates Feld (Backing Field) und bieten einen direkten Zugriff \xfcber eine kompakte Syntax."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person\n{\n    private string _name;\n\n    public string Name\n    {\n        get { return _name; }\n        set { _name = value; }  // Hier k\xf6nnen auch Pr\xfcfungen eingebaut werden\n    }\n}\n\n// Nutzung:\nvar person = new Person();\nperson.Name = "Max";\nConsole.WriteLine(person.Name); // Ausgabe: Max\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"expression-bodied-properties",children:"Expression-bodied Properties"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public class Papier  \n{  \n    private double _laenge;  \n    private double _breite;  \n  \n    public double Laenge  \n    {  \n        get => _laenge;  \n        set => _laenge = value;  \n    }  \n    public double Breite  \n    {  \n        get => _breite;  \n        set => _breite = value;  \n    }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"properties-auto-properties",children:"Properties (Auto-Properties)"}),"\n",(0,s.jsx)(n.p,{children:"Bei Auto-Properties \xfcbernimmt der Compiler die Erstellung eines versteckten Backing Fields"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public class Person \n{ \n\tpublic string Name { get; set; } \n} \n// Nutzung: \nvar person = new Person { Name = "Max" }; Console.WriteLine(person.Name); \n// Ausgabe: Max\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"konstruktor-mit-\xfcberladung",children:"Konstruktor mit \xdcberladung"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// man kann mehrere Konstruktoren mit verschiedenen Parametern\n// definieren (Konstruktor \xdcberladung)\nclass Person {\n    public string Name;\n    public int Age;\n\n    // Konstruktor 1\n    public Person(string name, int age) {\n        Name = name;\n        Age = age;\n    }\n\n    // Konstruktor 2 (Standardwerte)\n    public Person() {\n        Name = "Unbekannt";\n        Age = 0;\n    }\n}\n\nclass Program {\n    static void Main() {\n        Person p1 = new Person("Anna", 25);\n        Person p2 = new Person();  // Standardwerte werden gesetzt\n\n        Console.WriteLine($"{p1.Name}, {p1.Age} Jahre");\n        Console.WriteLine($"{p2.Name}, {p2.Age} Jahre");\n    }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"konstruktor-aufruf-mit-this",children:"Konstruktor Aufruf mit this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'class Beispiel\n{\n    // Konstruktor ohne Parameter, der den anderen Konstruktor \n    // mit this(..., ...) aufruft\n    public Beispiel() : this("Heute ist der ", DateTime.Today)\n    {\n    }\n    \n    // Konstruktor mit zwei Parametern\n    public Beispiel(string text, DateTime datum)\n    {\n        Console.WriteLine(text + datum.ToShortDateString());\n    }\n    \n    // Hauptmethode\n    public static void Main(string[] args)\n    {\n\t    Beispiel beispiel1 = new Beispiel("Morgen ist der ", DateTime.Today.AddDays(1));\n        // Aufruf des ersten Konstruktors\n        // Ausgabe: Morgen ist der {dd.MM.yyyy}\n        \n        Beispiel beispiel2 = new Beispiel();\n        // Aufruf des zweiten Konstruktors\n        // Ausgabe: Heute ist der {dd.MM.yyyy}\n    }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"method-overriding",children:"Method Overriding"}),"\n",(0,s.jsx)(n.p,{children:"Provides a new version of a method inherited from a parent class. Inherited method must be: virutal, abstract or already overriden."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'class Animal\n{\n\tpublic virtual void Speak()\n\t{\n\t\tConsole.WriteLine("The animal goes *brrr*")\n\t}\n}\nclass Dog : Animal \n{\n\tpublic override void Speak()\n\t{\n\t\tConsole.WriteLine("The dog goes *wooff*")\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"string-representation-with-tostring",children:"String Representation with ToString"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public override string ToString()\n{\n\treturn "Hello my name is " + this.name + " and I am " + this.age \n        + " years old.";\n}\n\n// Aufruf in Main\nvar aPerson = new Person("Horst", 45);\nConsole.WriteLine(aPerson);\n// output: Hello my name is Horst and I am 45 years old.\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"override-equals",children:"Override Equals"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'class Person\n{\n\tpublic string Name { get; set; }\n\tpublic int Age { get; set; }\n\n\tpublic override bool Equals(object obj)\n\t{\n\t\tif (obj is Person)\n\t\t{\n\t\t\tPerson person = obj as Person;\n\t\t\treturn Name.Equals(person.Name) && Age == person.Age;\n\t\t}\n\t\treturn false;\n\t}\n}\nstativ void Main()\n{\n\tPerson person = new Person { "Harry", 25 };\n\tPerson test = new Person { "Harry", 25 };\n\tif (person.Equals(test))\n\t\tConsole.WriteLine("Same");\n\telse\n\t\tConsole.WriteLine("Not the same");\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);