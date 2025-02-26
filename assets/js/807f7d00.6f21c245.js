"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[7345],{70460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Csharp/Collections/Sorted-Lists","title":"Sorted Lists","description":"","source":"@site/docs/04-Csharp/03-Collections/04-Sorted-Lists.md","sourceDirName":"04-Csharp/03-Collections","slug":"/Csharp/Collections/Sorted-Lists","permalink":"/my-documentation/docs/Csharp/Collections/Sorted-Lists","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/03-Collections/04-Sorted-Lists.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Sorted Lists","description":"","sidebar_position":4,"language":"C#","tags":[],"draft":false},"sidebar":"csharpSidebar","previous":{"title":"Linked Lists","permalink":"/my-documentation/docs/Csharp/Collections/Linked-Lists"},"next":{"title":"Dictionaries","permalink":"/my-documentation/docs/Csharp/Collections/Dictionaries"}}');var i=t(74848),r=t(28453);const a={title:"Sorted Lists",description:"",sidebar_position:4,language:"C#",tags:[],draft:!1},o=void 0,l={},d=[{value:"Elemente hinzuf\xfcgen",id:"elemente-hinzuf\xfcgen",level:2},{value:"Iteration mit KeyValuePair",id:"iteration-mit-keyvaluepair",level:2},{value:"Remove Element",id:"remove-element",level:2},{value:"ContainsKey",id:"containskey",level:2},{value:"Wert aktualisieren",id:"wert-aktualisieren",level:2},{value:"Keys, Values",id:"keys-values",level:2},{value:"SortedList Count",id:"sortedlist-count",level:2},{value:"Clear SortedList",id:"clear-sortedlist",level:2}];function c(e){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["A sorted list is a collection of key/value pairs that are automatically sorted by key. A key can be used to access its corresponding value in the sorted list.\nThe C# generic collection ",(0,i.jsx)(n.code,{children:"SortedList<K, V>"})," class requires all element key/value pairs to be of the same type K, V.\nDuplicate keys are not permitted, which ensures that every key/value pair is unique."]}),"\n",(0,i.jsx)(n.h2,{id:"elemente-hinzuf\xfcgen",children:"Elemente hinzuf\xfcgen"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'var sortedList = new SortedList<string, int>();\n\n// Hinzuf\xfcgen von Schl\xfcssel-Wert-Paaren\nsortedList.Add("Clara", 30);\nsortedList.Add("Anna", 25);\n\n// Zugriff per Schl\xfcssel\nConsole.WriteLine($"Anna ist {sortedList["Anna"]} Jahre alt.");\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"iteration-mit-keyvaluepair",children:"Iteration mit KeyValuePair"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'Console.WriteLine("\\nSortedList Eintr\xe4ge:");\nforeach (KeyValuePair<string, int> pair in sortedList)\n{\n\tConsole.WriteLine($"{pair.Key}: {pair.Value}");\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"remove-element",children:"Remove Element"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'sortedList.Remove("Bernd");\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"containskey",children:"ContainsKey"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'if (sortedList.ContainsKey("Clara"))\n{\n\tConsole.WriteLine("\\nClara ist in der SortedList vorhanden.");\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"wert-aktualisieren",children:"Wert aktualisieren"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'sortedList["Anna"] = 26;\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"keys-values",children:"Keys, Values"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'IList<string> keys = sortedList.Keys;\nIList<int> values = sortedList.Values;\n\nConsole.WriteLine("\\nSchl\xfcssel:");\nforeach (var key in keys)\n{\n\tConsole.WriteLine(key);\n}\n\nConsole.WriteLine("\\nWerte:");\nforeach (var value in values)\n{\n\tConsole.WriteLine(value);\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sortedlist-count",children:"SortedList Count"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'Console.WriteLine($"\\nAnzahl der Elemente: {sortedList.Count}");\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"clear-sortedlist",children:"Clear SortedList"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'sortedList.Clear();\nConsole.WriteLine($"\\nAnzahl der Elemente nach Clear: {sortedList.Count}");\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);