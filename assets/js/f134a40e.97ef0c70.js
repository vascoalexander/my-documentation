"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[8147],{31614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Code/CSharp/IO-Operations/Text Files","title":"Text Files","description":"","source":"@site/docs/09-Code/01-CSharp/05-IO-Operations/Text Files.md","sourceDirName":"09-Code/01-CSharp/05-IO-Operations","slug":"/Code/CSharp/IO-Operations/Text Files","permalink":"/my-documentation/docs/Code/CSharp/IO-Operations/Text Files","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/09-Code/01-CSharp/05-IO-Operations/Text Files.md","tags":[{"inline":true,"label":"using","permalink":"/my-documentation/docs/tags/using"},{"inline":true,"label":"txt","permalink":"/my-documentation/docs/tags/txt"},{"inline":true,"label":"streamreader","permalink":"/my-documentation/docs/tags/streamreader"},{"inline":true,"label":"readalltext","permalink":"/my-documentation/docs/tags/readalltext"}],"version":"current","frontMatter":{"created":"2025-02-23, 11:05","language":"C#","description":"","tags":["using","txt","streamreader","readalltext"]},"sidebar":"codeSidebar","previous":{"title":"CSV Files","permalink":"/my-documentation/docs/Code/CSharp/IO-Operations/CSV Files"},"next":{"title":"LINQ","permalink":"/my-documentation/docs/category/linq"}}');var i=n(74848),a=n(28453);const s={created:"2025-02-23, 11:05",language:"C#",description:"",tags:["using","txt","streamreader","readalltext"]},l=void 0,o={},d=[{value:"Create Temp File",id:"create-temp-file",level:3},{value:"ReadAllText()",id:"readalltext",level:3},{value:"Using + Streamreader",id:"using--streamreader",level:3},{value:"Write to new File",id:"write-to-new-file",level:3}];function c(e){const t={code:"code",h3:"h3",hr:"hr",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"create-temp-file",children:"Create Temp File"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"static string CreateTempFile()  \n{  \n    string newtempfile = System.IO.Path.GetTempFileName();\n    return newtempfile;  \n}\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"readalltext",children:"ReadAllText()"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'string filePath = "beispiel.txt";\ntry\n{\n\t// Liest den gesamten Inhalt der Datei als String ein\n\tstring content = File.ReadAllText(filePath);\n\tConsole.WriteLine(content);\n}\ncatch (Exception ex)\n{\n\tConsole.WriteLine("Fehler beim Lesen der Datei: " + ex.Message);\n}\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"using--streamreader",children:"Using + Streamreader"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'// besser geeignet als File.ReadAllText() bei gro\xdfen dateien\nusing (var streamReader = new StreamReader(@"C:\\file.txt"))\n{\n    string content = streamReader.ReadToEnd();\n    Console.WriteLine(content);\n}\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"write-to-new-file",children:"Write to new File"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'static void Main()\n{\n\tstring filePath = "neue_datei.txt";\n\tstring sourceText = "Das ist der Quelltext, der gespeichert werden soll.";\n\t\n\ttry\n\t{\n\t\t// \xd6ffnet die Datei im Schreibmodus (\xfcberschreibt bestehende Datei)\n\t\t// und schreibt den Text hinein\n\t\tusing (StreamWriter writer = new StreamWriter(filePath, false))\n\t\t{\n\t\t\twriter.Write(sourceText);\n\t\t}\n\t\tConsole.WriteLine("Text wurde in die Datei geschrieben.");\n\t}\n\tcatch (Exception ex)\n\t{\n\t\tConsole.WriteLine("Fehler beim Schreiben in die Datei: " + ex.Message);\n\t}\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);