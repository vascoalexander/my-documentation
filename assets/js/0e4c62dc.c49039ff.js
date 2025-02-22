"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[3174],{2880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Csharp/DotNet-Framework","title":".NET Framework","description":"","source":"@site/docs/04-Csharp/01-DotNet-Framework.md","sourceDirName":"04-Csharp","slug":"/Csharp/DotNet-Framework","permalink":"/my-documentation/docs/Csharp/DotNet-Framework","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/01-DotNet-Framework.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":".NET Framework","description":"","sidebar_position":1,"draft":false},"sidebar":"csharpSidebar","next":{"title":".NET CLI","permalink":"/my-documentation/docs/Csharp/DotNet-CLI"}}');var t=r(4848),s=r(8453);const d={title:".NET Framework",description:"",sidebar_position:1,draft:!1},o=void 0,l={},a=[{value:"Einf\xfchrung in das .NET Framework",id:"einf\xfchrung-in-das-net-framework",level:3},{value:"<strong>1. Wichtige Kernkomponenten</strong>",id:"1-wichtige-kernkomponenten",level:4},{value:"<strong>2. Ablauf der Code-Ausf\xfchrung in .NET</strong>",id:"2-ablauf-der-code-ausf\xfchrung-in-net",level:4},{value:"<strong>3. Vorteile von .NET</strong>",id:"3-vorteile-von-net",level:4},{value:".NET-Pakete und ihre Funktionen",id:"net-pakete-und-ihre-funktionen",level:3},{value:"Setup unter Linux / Rider",id:"setup-unter-linux--rider",level:3},{value:"Related Links",id:"related-links",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"einf\xfchrung-in-das-net-framework",children:"Einf\xfchrung in das .NET Framework"}),"\n",(0,t.jsxs)(n.p,{children:["Das ",(0,t.jsx)(n.strong,{children:".NET Framework"})," ist eine von Microsoft entwickelte Plattform zur Entwicklung und Ausf\xfchrung von Anwendungen. Es bietet eine einheitliche Laufzeitumgebung, Bibliotheken und Werkzeuge f\xfcr verschiedene Programmiersprachen wie C#, VB.NET und F#."]}),"\n",(0,t.jsx)(n.h4,{id:"1-wichtige-kernkomponenten",children:(0,t.jsx)(n.strong,{children:"1. Wichtige Kernkomponenten"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Common Intermediate Language (CIL)"}),(0,t.jsx)(n.br,{}),"\n","Der von .NET unterst\xfctzte Quellcode wird zun\xe4chst in eine zwischengeschaltete Sprache namens ",(0,t.jsx)(n.strong,{children:"CIL"})," (fr\xfcher MSIL) \xfcbersetzt. Dieser Code ist unabh\xe4ngig von der Zielplattform."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Just-In-Time Compiler (JIT)"}),(0,t.jsx)(n.br,{}),"\n","Bevor eine Anwendung ausgef\xfchrt wird, \xfcbersetzt der ",(0,t.jsx)(n.strong,{children:"JIT-Compiler"})," den CIL-Code zur Laufzeit in Maschinencode, der direkt auf der jeweiligen Hardware ausgef\xfchrt werden kann."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Common Language Runtime (CLR)"}),(0,t.jsx)(n.br,{}),"\n","Die ",(0,t.jsx)(n.strong,{children:"CLR"})," ist die Laufzeitumgebung von .NET. Sie verwaltet den Speicher, f\xfchrt den JIT-Compiler aus und bietet Funktionen wie ",(0,t.jsx)(n.strong,{children:"Garbage Collection"})," und ",(0,t.jsx)(n.strong,{children:"Ausnahmebehandlung"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".NET Framework Class Library (FCL)"}),(0,t.jsx)(n.br,{}),"\n","Eine Sammlung von vordefinierten Klassen und Methoden, die f\xfcr h\xe4ufige Aufgaben wie Dateizugriff, Netzwerkkommunikation und GUI-Entwicklung genutzt werden kann."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"2-ablauf-der-code-ausf\xfchrung-in-net",children:(0,t.jsx)(n.strong,{children:"2. Ablauf der Code-Ausf\xfchrung in .NET"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Quellcode (z. B. in C#) wird mit dem Compiler (z. B. ",(0,t.jsx)(n.code,{children:"csc"}),") in ",(0,t.jsx)(n.strong,{children:"CIL"})," \xfcbersetzt."]}),"\n",(0,t.jsxs)(n.li,{children:["Der CIL-Code wird in einer ",(0,t.jsx)(n.strong,{children:".dll"})," oder ",(0,t.jsx)(n.strong,{children:".exe"})," gespeichert."]}),"\n",(0,t.jsxs)(n.li,{children:["Bei der Ausf\xfchrung \xfcbernimmt die ",(0,t.jsx)(n.strong,{children:"CLR"})," die Verwaltung."]}),"\n",(0,t.jsxs)(n.li,{children:["Der ",(0,t.jsx)(n.strong,{children:"JIT-Compiler"})," wandelt den CIL-Code in nativen Maschinencode um."]}),"\n",(0,t.jsx)(n.li,{children:"Der optimierte Maschinencode wird von der CPU ausgef\xfchrt."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"3-vorteile-von-net",children:(0,t.jsx)(n.strong,{children:"3. Vorteile von .NET"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Plattformunabh\xe4ngigkeit"})," (mit .NET Core/.NET 5+ auch f\xfcr Linux & macOS)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unterst\xfctzung mehrerer Programmiersprachen"})," (C#, F#, VB.NET)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatische Speicherverwaltung"})," dank ",(0,t.jsx)(n.strong,{children:"Garbage Collection"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gro\xdfe Standardbibliothek"})," f\xfcr viele Anwendungsf\xe4lle."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NET-Framwork",src:r(5447).A+"",width:"520",height:"600"})}),"\n",(0,t.jsx)(n.h3,{id:"net-pakete-und-ihre-funktionen",children:".NET-Pakete und ihre Funktionen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".NET SDK"}),": Das SDK ist das umfassendste Paket und enth\xe4lt alles, was man f\xfcr die Entwicklung von .NET-Anwendungen ben\xf6tigt, einschlie\xdflich:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".NET Runtime"}),": Die Runtime ist die Grundlage f\xfcr die Ausf\xfchrung von .NET-Anwendungen. Sie stellt die notwendigen Bibliotheken und Komponenten bereit, um .NET-Anwendungen auszuf\xfchren."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".NET Compiler (Roslyn)"}),": Der Compiler wird verwendet, um den C#- oder F#-Code in ausf\xfchrbaren Code zu \xfcbersetzen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".NET CLI (Command Line Interface)"}),": Die CLI ist ein Befehlszeilentool, mit dem man .NET-Projekte erstellen, kompilieren und ausf\xfchren kannst."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".NET Templates"}),": Vorlagen f\xfcr verschiedene Arten von .NET-Projekten (z.B. Konsolenanwendungen, Webanwendungen, Klassenbibliotheken)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".NET Libraries"}),": Eine Sammlung von Bibliotheken, die verschiedene Funktionalit\xe4ten bereitstellen (z.B. Datenzugriff, Netzwerkkommunikation, Benutzeroberfl\xe4chen)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".NET Runtime"}),": Die Runtime ist ausreichend, wenn man lediglich .NET-Anwendungen ausf\xfchren m\xf6chte. F\xfcr die Anwendungsentwicklung wird jedoch die SDK ben\xf6tigt."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ASP.NET Core Runtime"}),": F\xfcr Webanwendungen mit ASP.NET Core, ben\xf6tigt man zus\xe4tzlich die ASP.NET Core Runtime. Diese ist im .NET SDK enthalten, kann aber auch separat installiert werden."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setup-unter-linux--rider",children:"Setup unter Linux / Rider"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/rider/Installation_guide.html",children:"Install JetBrains\xa0Rider | JetBrains\xa0Rider Documentation"})}),"\n",(0,t.jsxs)(n.p,{children:["Pfad zum .NET CLI in Rider:",(0,t.jsx)(n.br,{}),"\n","\u27a1 ",(0,t.jsx)(n.strong,{children:"File"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Build, Execution, Deployment"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Toolset and Build"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"which dotnet       # Pfad zum dotnet executable\ndotnet --version   # verwendete dotnet version\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# default -> /home/user/.dotnet/dotnet\nexport DOTNET_ROOT=/pfad/zu/riders/dotnet\nexport PATH=$DOTNET_ROOT:$PATH\n\n# f\xfcr dauerhafte Anwendung in ~/.bashrc bzw ~/.zshrc eintragen\necho 'export DOTNET_ROOT=/pfad/zu/riders/dotnet' >> ~/.bashrc\necho 'export PATH=$DOTNET_ROOT:$PATH' >> ~/.bashrc\nsource ~/.bashrc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"related-links",children:"Related Links"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/.NET_Framework",children:"en.wikipedia.org/wiki/.NET_Framework"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/",children:".NET | Build. Test. Deploy."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5447:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/dotnet_framework-5d6dbdd1a9ad3427506dde40dcf6a115.png"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);