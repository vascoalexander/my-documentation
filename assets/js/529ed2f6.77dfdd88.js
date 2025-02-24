"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6634],{32933:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Csharp/Classes-OOP/Classes-Objects","title":"Classes & Objects","description":"","source":"@site/docs/04-Csharp/04-Classes-OOP/01-Classes-Objects.md","sourceDirName":"04-Csharp/04-Classes-OOP","slug":"/Csharp/Classes-OOP/Classes-Objects","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Classes-Objects","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-Csharp/04-Classes-OOP/01-Classes-Objects.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"created":"2025-02-23, 11:33","title":"Classes & Objects","description":"","sidebar_position":1,"language":"C#","tags":[]},"sidebar":"csharpSidebar","previous":{"title":"Classes & OOP","permalink":"/my-documentation/docs/category/classes--oop"},"next":{"title":"Struct","permalink":"/my-documentation/docs/Csharp/Classes-OOP/Struct"}}');var a=n(74848),r=n(28453);const i={created:"2025-02-23, 11:33",title:"Classes & Objects",description:"",sidebar_position:1,language:"C#",tags:[]},o=void 0,c={},l=[{value:"Simple Class with Constructor",id:"simple-class-with-constructor",level:2},{value:"Person Class with Full Name Property",id:"person-class-with-full-name-property",level:2}];function p(e){const s={code:"code",h2:"h2",hr:"hr",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"simple-class-with-constructor",children:"Simple Class with Constructor"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c",children:'public class Person \n{\n    public string Name {get, private set};\n    public int Age {get, private set};\n\n    public Person(string name, int age) \n    {\n        Name = name;\n        Age = age;\n    }\n    \n\tpublic void Greet() \n\t{  \n\t    Console.WriteLine($"Hallo, mein Name ist {Name} " +  \n\t                      $"und ich bin {Age} Jahre alt.");  \n\t}\n}\n\nclass Program \n{\n    static void Main() \n    {\n        Person p = new Person("Max", 30);\n        p.Greet();\n    }\n}\n'})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h2,{id:"person-class-with-full-name-property",children:"Person Class with Full Name Property"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c",children:'public class Person  \n{  \n    public string FirstName { get; set; }  \n    public string LastName { get; set; }  \n  \n    public string FullName =>   \n        $"{FirstName ?? "Unknown"} {LastName ?? "Unknown"}";  \n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);