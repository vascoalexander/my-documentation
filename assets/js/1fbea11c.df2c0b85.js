"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6663],{9455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"csharp/dotnet-cli","title":".NET CLI","description":"","source":"@site/docs/04-csharp/dotnet-cli.md","sourceDirName":"04-csharp","slug":"/csharp/dotnet-cli","permalink":"/my-documentation/docs/csharp/dotnet-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-csharp/dotnet-cli.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"","sidebar_position":2,"title":".NET CLI"},"sidebar":"csharpSidebar","next":{"title":"Typen","permalink":"/my-documentation/docs/csharp/typen"}}');var i=t(4848),r=t(8453);const a={description:"",sidebar_position:2,title:".NET CLI"},s=void 0,d={},l=[{value:"Arbeiten mit Projekten",id:"arbeiten-mit-projekten",level:2},{value:"Abh\xe4ngigkeiten verwalten",id:"abh\xe4ngigkeiten-verwalten",level:2},{value:"Arbeiten mit dem Code",id:"arbeiten-mit-dem-code",level:2}];function c(e){const n={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"arbeiten-mit-projekten",children:"Arbeiten mit Projekten"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# .NET SDK Version pr\xfcfen\ndotnet --version\n\n# Neues Projekt erstellen\ndotnet new console -o MeinProjekt\ncd MeinProjekt\n\n# Projekt ausf\xfchren\ndotnet run\n\n# L\xf6sung (Solution) erstellen und Projekt hinzuf\xfcgen\ndotnet new sln -n MeineLoesung\ndotnet sln MeineLoesung.sln add MeinProjekt/MeinProjekt.csproj\n"})}),"\n",(0,i.jsx)(n.h2,{id:"abh\xe4ngigkeiten-verwalten",children:"Abh\xe4ngigkeiten verwalten"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Abh\xe4ngigkeiten verwalten (NuGet)\ndotnet add package Newtonsoft.Json            # Paket hinzuf\xfcgen\ndotnet remove package Newtonsoft.Json         # Paket entfernen\ndotnet list package                           # Installierte Pakete auflisten\ndotnet restore                                # Alle Abh\xe4ngigkeiten neu installieren\n\n# NuGet Feed konfigurieren\ndotnet nuget add source "https://api.nuget.org/v3/index.json" --name nuget.org\ndotnet nuget list source                      # Verf\xfcgbare Quellen anzeigen\ndotnet nuget remove source nuget.org          # Quelle entfernen\n\n# NuGet Cache verwalten\ndotnet nuget locals all --clear               # Cache leeren\ndotnet nuget locals http-cache --clear        # Nur HTTP-Cache leeren\ndotnet nuget locals global-packages --list    # Installierte Pakete anzeigen\n\n# Paket aus einer lokalen NuGet-Sammlung installieren\ndotnet add package MeinPaket --source ./mein-nuget-feed\n\n# Paket ver\xf6ffentlichen\ndotnet nuget push MeinPaket.nupkg -k API_KEY -s https://api.nuget.org/v3/index.json\n'})}),"\n",(0,i.jsx)(n.h2,{id:"arbeiten-mit-dem-code",children:"Arbeiten mit dem Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Build-Prozess\ndotnet build                                  # Kompiliert das Projekt\ndotnet build --configuration Release          # F\xfcr eine Release-Version\n\n# Tests ausf\xfchren\ndotnet test\n\n# Projekt ver\xf6ffentlichen\ndotnet publish -c Release -r win-x64 --self-contained false\n\n# Globale Tools installieren und verwalten\ndotnet tool install -g dotnet-ef\ndotnet tool update -g dotnet-ef\ndotnet tool list -g\n\n# Entity Framework Core Migrationen (falls EF installiert ist)\ndotnet ef migrations add InitialCreate\ndotnet ef database update\n\n# Code-Analyse und Formatierung\ndotnet format\ndotnet clean\n\n# Performance-Analyse\ndotnet watch run   # Beobachtet \xc4nderungen und startet neu\ndotnet trace collect --process-id <PID>  # Traced laufende App\n\n# Infos zu installierten SDKs und Laufzeiten\ndotnet --list-sdks\ndotnet --list-runtimes\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);