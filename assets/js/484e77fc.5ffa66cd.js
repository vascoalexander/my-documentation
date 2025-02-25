"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[9981],{99720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Csharp/IO-Operations/CSV-Files","title":"CSV Files","description":"","source":"@site/docs/04-Csharp/05-IO-Operations/02-CSV-Files.md","sourceDirName":"04-Csharp/05-IO-Operations","slug":"/Csharp/IO-Operations/CSV-Files","permalink":"/my-documentation/docs/Csharp/IO-Operations/CSV-Files","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/05-IO-Operations/02-CSV-Files.md","tags":[{"inline":true,"label":"csv","permalink":"/my-documentation/docs/tags/csv"},{"inline":true,"label":"dictionary","permalink":"/my-documentation/docs/tags/dictionary"}],"version":"current","sidebarPosition":2,"frontMatter":{"created":"2025-02-23, 11:05","title":"CSV Files","language":"C#","description":"","sidebar_position":2,"tags":["csv","dictionary"]},"sidebar":"csharpSidebar","previous":{"title":"Text Files","permalink":"/my-documentation/docs/Csharp/IO-Operations/Text-Files"},"next":{"title":"User Input","permalink":"/my-documentation/docs/Csharp/IO-Operations/User-Input"}}');var r=n(74848),a=n(28453);const s={created:"2025-02-23, 11:05",title:"CSV Files",language:"C#",description:"",sidebar_position:2,tags:["csv","dictionary"]},o=void 0,d={},l=[{value:"CSV File to Dictionary",id:"csv-file-to-dictionary",level:2},{value:"Append to CSV File",id:"append-to-csv-file",level:2},{value:"Related Links",id:"related-links",level:2}];function c(e){const t={code:"code",h2:"h2",hr:"hr",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"csv-file-to-dictionary",children:"CSV File to Dictionary"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'static List<Dictionary<string, string>> ReadCsvFile(string filePath)\n{\n\tvar records = new List<Dictionary<string, string>>();\n\ttry\n\t{\n\t\tusing (var reader = new StreamReader(filePath))\n\t\t{\n\t\t\t// Read the header line\n\t\t\tstring headerLine = reader.ReadLine();\n\t\t\tif (headerLine == null) return records;\n\n\t\t\tvar headers = headerLine.Split(\',\');\n\n\t\t\t// Read the remaining lines\n\t\t\twhile (!reader.EndOfStream)\n\t\t\t{\n\t\t\t\tvar line = reader.ReadLine();\n\t\t\t\tif (line == null) continue;\n\n\t\t\t\tvar values = line.Split(\',\');\n\t\t\t\tvar record = new Dictionary<string, string>();\n\n\t\t\t\t// Map each header to its corresponding value\n\t\t\t\tfor (int i = 0; i < headers.Length && i < values.Length; i++)\n\t\t\t\t{\n\t\t\t\t\trecord[headers[i]] = values[i];\n\t\t\t\t}\n\t\t\t\trecords.Add(record);\n\t\t\t}\n\t\t}\n\t}\n\tcatch (Exception ex)\n\t{\n\t\tConsole.WriteLine("Error reading CSV file: " + ex.Message);\n\t}\n\treturn records;\n}\n\nstatic void Main()\n{\n\tstring filePath = "data.csv";\n\tvar records = ReadCsvFile(filePath);\n\n\t// Output the read records\n\tforeach (var record in records)\n\t{\n\t\tforeach (var kvp in record)\n\t\t{\n\t\t\tConsole.Write($"{kvp.Key}: {kvp.Value}  ");\n\t\t}\n\t\tConsole.WriteLine();\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"append-to-csv-file",children:"Append to CSV File"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'static void AppendCsvRow(string filePath, Dictionary<string, string> record, List<string> fieldOrder)\n{\n\ttry\n\t{\n\t\t// \xd6ffne die Datei im Append-Modus\n\t\tusing (var writer = new StreamWriter(filePath, append: true))\n\t\t{\n\t\t\t// Erzeuge eine CSV-Zeile in der definierten Reihenfolge\n\t\t\tstring line = string.Join(",", fieldOrder.Select(field => record.ContainsKey(field) ? record[field] : ""));\n\t\t\twriter.WriteLine(line);\n\t\t}\n\t}\n\tcatch (Exception ex)\n\t{\n\t\tConsole.WriteLine("Fehler beim Schreiben in die CSV-Datei: " + ex.Message);\n\t}\n}\n\nstatic void Main()\n{\n\tstring filePath = "data.csv";\n\tvar newRecord = new Dictionary<string, string>()\n\t{\n\t\t{"Name", "John Doe"},\n\t\t{"Alter", "30"},\n\t\t{"Stadt", "Berlin"}\n\t};\n\n\t// Definiere die Reihenfolge der Felder wie in der CSV-Header-Zeile\n\tList<string> fieldOrder = new List<string> { "Name", "Alter", "Stadt" };\n\n\tAppendCsvRow(filePath, newRecord, fieldOrder);\n\tConsole.WriteLine("Neuer Datensatz wurde hinzugef\xfcgt.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-links",children:"Related Links"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);