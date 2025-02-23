"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[7699],{24107:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Code/CSharp/Collections/Arrays","title":"Arrays","description":"","source":"@site/docs/09-Code/01-CSharp/03-Collections/Arrays.md","sourceDirName":"09-Code/01-CSharp/03-Collections","slug":"/Code/CSharp/Collections/Arrays","permalink":"/my-documentation/docs/Code/CSharp/Collections/Arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/09-Code/01-CSharp/03-Collections/Arrays.md","tags":[{"inline":true,"label":"sort","permalink":"/my-documentation/docs/tags/sort"},{"inline":true,"label":"search","permalink":"/my-documentation/docs/tags/search"},{"inline":true,"label":"reverse","permalink":"/my-documentation/docs/tags/reverse"},{"inline":true,"label":"ForEach","permalink":"/my-documentation/docs/tags/for-each"},{"inline":true,"label":"LINQ","permalink":"/my-documentation/docs/tags/linq"},{"inline":true,"label":"jaggedArray","permalink":"/my-documentation/docs/tags/jagged-array"}],"version":"current","frontMatter":{"created":"2025-02-23, 11:45","language":"C#","description":"","tags":["sort","search","reverse","ForEach","LINQ","jaggedArray"]},"sidebar":"codeSidebar","previous":{"title":"Collections","permalink":"/my-documentation/docs/category/collections"},"next":{"title":"Dictionaries","permalink":"/my-documentation/docs/Code/CSharp/Collections/Dictionaries"}}');var t=n(74848),i=n(28453);const o={created:"2025-02-23, 11:45",language:"C#",description:"",tags:["sort","search","reverse","ForEach","LINQ","jaggedArray"]},s=void 0,l={},d=[{value:"Jagged Array Deklaration",id:"jagged-array-deklaration",level:3},{value:"LINQ Array Methods",id:"linq-array-methods",level:3},{value:"Sort, Reverse or Search (with ForEach())",id:"sort-reverse-or-search-with-foreach",level:3},{value:"Duplikate entfernen",id:"duplikate-entfernen",level:3},{value:"Vorkommen z\xe4hlen",id:"vorkommen-z\xe4hlen",level:3},{value:"Print 2D Array to console",id:"print-2d-array-to-console",level:3},{value:"Fill 2D Array with Random Numbers",id:"fill-2d-array-with-random-numbers",level:3},{value:"Merge Arrays",id:"merge-arrays",level:3}];function c(e){const r={code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"jagged-array-deklaration",children:"Jagged Array Deklaration"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"int[][] anotherJaggedArray = new int[][]\n{  \n\tnew int[] {1,8,2,7,9},  \n\tnew int[] {2,4,6},  \n\tnew int[] {33,42}  \n};  \n  \nint x = anotherJaggedArray[2][1];  \nConsole.WriteLine(x); // Outputs => 42\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"linq-array-methods",children:"LINQ Array Methods"}),"\n",(0,t.jsx)(r.p,{children:"The Array class implements the IEnumerable interface, so you can LINQ extension methods such as Max(), Min(), Sum(), Average() and many others."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"public static void Main(string[] args)\n{\n\tint[] integersArray = new int[5]{80, 20, 35, 18, 9};\n\n\tConsole.WriteLine(integersArray.Max());\n\tConsole.WriteLine(integersArray.Min());\n\tConsole.WriteLine(integersArray.Sum());\n\tConsole.WriteLine(integersArray.Average());\n}\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"sort-reverse-or-search-with-foreach",children:"Sort, Reverse or Search (with ForEach())"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"int[] integersArray = {20, 9, 16, 50, 3};\n\n// SORT\nArray.Sort(integersArray);  \nArray.ForEach<int>(integersArray, n => Console.WriteLine(n));\n\n// REVERSE\nArray.Reverse(integersArray);  \nArray.ForEach<int>(integersArray, n => Console.WriteLine(n));\n\n// SEARCH\nConsole.WriteLine(Array.BinarySearch(integersArray, 9));\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"duplikate-entfernen",children:"Duplikate entfernen"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'Console.Write("W\xf6rter eingeben: ");  \nstring[] text = Console.ReadLine().Split(" ");\n\nstring[] textOhneDuplikate = text.Distinct().ToArray();\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"vorkommen-z\xe4hlen",children:"Vorkommen z\xe4hlen"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"static int CountOccurrences(int[,] array, int target)  \n{  \n    int count = 0;  \n    foreach (int value in array)  \n    {        \n\t    if (value == target)  \n            count++;  \n    }    \n    return count;  \n}\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"print-2d-array-to-console",children:"Print 2D Array to console"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'static void PrintArray(int[,] array)\n{\n    for (int i = 0; i < array.GetLength(0); i++)\n    {\n        for (int j = 0; j < array.GetLength(1); j++)\n            Console.Write($"{array[i, j]} ");\n        Console.WriteLine();\n    }\n}\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"fill-2d-array-with-random-numbers",children:"Fill 2D Array with Random Numbers"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"static void FillArray(int[,] array, int rows, int cols)\n{\n    Random rnd = new Random();\n    for (int i = 0; i < rows; i++)\n        for (int j = 0; j < cols; j++)\n            array[i, j] = rnd.Next(1, 10); \n}\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"merge-arrays",children:"Merge Arrays"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"// Array copy: copies a range from a source array to a destination array with\n// optional start and end indices\nstatic int[] MergeArray(int[] array1, int[] array2)\n{\n    int[] arrayMerged = new int[array1.Length + array2.Length];\n    Array.Copy(array1, arrayMerged, array1.Length);\n    Array.Copy(array2, 0, arrayMerged, array1.Length, array2.Length);\n    Array.Sort(arrayMerged);\n    return arrayMerged;\n}\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"// lange variante ohne Array.Copy\n// Arrays m\xfcssen vorsortiert sein\nstatic int[] MergeArray(int[] array1, int[] array2)\n{\n    int[] arrayMerged = new int[array1.Length + array2.Length];\n    int indexMerged = 0;\n    int indexArray1 = 0;\n    int indexArray2 = 0;\n\n    while (indexArray1 < array1.Length && indexArray2 < array2.Length)\n        // solange keines der beiden arrays komplett durchlaufen wurde\n    {\n        if (array1[indexArray1] < array2[indexArray2])\n            arrayMerged[indexMerged++] = array1[indexArray1++];\n        else\n            arrayMerged[indexMerged++] = array2[indexArray2++];\n    }\n\n    // schreibe das array dessen index nicht bis zum ende durchlaufen wurde\n    while (indexArray1 < array1.Length)\n        arrayMerged[indexMerged++] = array1[indexArray1++];\n\n    while (indexArray2 < array2.Length)\n        arrayMerged[indexMerged++] = array2[indexArray2++];\n\n    return arrayMerged;\n}\n"})})]})}function y(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>s});var a=n(96540);const t={},i=a.createContext(t);function o(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);