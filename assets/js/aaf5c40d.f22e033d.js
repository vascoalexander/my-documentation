"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[9555],{9845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"csharp/operatoren","title":"Operatoren","description":"","source":"@site/docs/04-csharp/operatoren.md","sourceDirName":"04-csharp","slug":"/csharp/operatoren","permalink":"/my-documentation/docs/csharp/operatoren","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/04-csharp/operatoren.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"","sidebar_position":4,"title":"Operatoren"},"sidebar":"csharpSidebar","previous":{"title":"Typen","permalink":"/my-documentation/docs/csharp/typen"},"next":{"title":"Statements","permalink":"/my-documentation/docs/csharp/statements"}}');var o=t(4848),i=t(8453);const s={description:"",sidebar_position:4,title:"Operatoren"},a=void 0,l={},c=[{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Combined Assignment Operators",id:"combined-assignment-operators",level:2},{value:"Comparison Operators",id:"comparison-operators",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Bitwise Operators",id:"bitwise-operators",level:2},{value:"Operator Precedents",id:"operator-precedents",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/",children:(0,o.jsx)(n.strong,{children:"Microsoft Language Specification - Operators and Expressions"})})}),"\n",(0,o.jsx)(n.h2,{id:"arithmetic-operators",children:"Arithmetic Operators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"float myFloat = 0;\n\nmyFloat = 3 + 2; // Addition       => 5\nmyFloat = 3 - 2; // Subtraction    => 1\nmyFloat = 3 * 2; // Multiplication => 6\nmyFloat = 3 / 2; // Division       => 1\nmyFloat = 3 % 2; // Modulus        => 1\n\n/*\n    Notice that the division sign gives an incorrect result.\n    This is because it operates on two integer values and will therefore round the result and return an integer.\n    To get the correct value, one of the numbers needs to be converted into a floating-point number.\n*/\nmyFloat = 3 / (float) 2; // 1.5\n"})}),"\n",(0,o.jsx)(n.h2,{id:"combined-assignment-operators",children:"Combined Assignment Operators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"float myFloat = 0;\n\nmyFloat += 2; // myNumber = myNumber + 2\nmyFloat -= 2; // myNumber = myNumber - 2\nmyFloat *= 2; // myNumber = myNumber * 2\nmyFloat /= 2; // myNumber = myNumber / 2\nmyFloat %= 2; // myNumber = myNumber % 2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"comparison-operators",children:"Comparison Operators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'Console.WriteLine($"3 == 2? {3 == 2}"); // => false\nConsole.WriteLine($"3 != 2? {3 != 2}"); // => true\nConsole.WriteLine($"3 > 2? {3 > 2}");   // => true\nConsole.WriteLine($"3 < 2? {3 < 2}");   // => false\nConsole.WriteLine($"2 <= 2? {2 <= 2}"); // => true\nConsole.WriteLine($"2 >= 2? {2 >= 2}"); // => true\n'})}),"\n",(0,o.jsx)(n.h2,{id:"logical-operators",children:"Logical Operators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"bool myBool;\n\nmyBool = (true && false); // Logical AND => (false)\nmyBool = (true || false); // Logical OR  => (true)\nmyBool = !(true);         // Logical NOT => (false)\n\nConsole.WriteLine(myBool);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bitwise-operators",children:"Bitwise Operators"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"int myInteger;\n\n// The bitwise operators can manipulate individual bits inside an integer.\n\nmyInteger = 5 & 4;  // and (0b101 & 0b100 = 0b100 = 4)\nmyInteger = 5 | 4;  // or (0b101 | 0b100 = 0b101 = 5)\nmyInteger = 5 ^ 4;  // xor (0b101 ^ 0b100 = 0b001 = 1)\nmyInteger = 4 << 1; // left shift (0b100 << 1 = 0b1000 = 8)\nmyInteger = 4 >> 1; // right shift (0b100 >> 1 = 0b10 = 2)\nmyInteger = ~ 4;    // invert (~0b00000100 = 0b11111011 = -5)\n\n// These bitwise operators have shorthand assignment operators, just like the arithmetic operators.\n\nmyInteger = 5;\nmyInteger &= 4; // and (0b101 & 0b100 = 0b100 = 4)\n\nmyInteger = 5;\nmyInteger |= 4; // or (0b101 | 0b100 = 0b101 = 5)\n\nmyInteger = 5;\nmyInteger ^= 4; // xor (0b101 ^ 0b100 = 0b001 = 1)\n\nmyInteger = 5;\nmyInteger <<= 1; // left shift (0b101 << 1 = 0b1010 = 10)\n\nmyInteger = 5;\nmyInteger >>= 1; // right shift (0b101 >> 1 = 0b10 = 2)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"operator-precedents",children:"Operator Precedents"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"/*\n\n- parentheses ()\n\n- Postfix Increment and Decrement         ++, --\n- Prefix Increment, Decrement and Unary   ++, --, +, -, !, ~\n\n- Multiplicative                          *, /, %\n- Additive                                +, -\n\n- Shift                                   <<, >>\n- Relational                              <, <=, >, >=\n- Equality                                ==, !=\n\n- Bitwise AND                             &\n- Bitwise XOR                             ^\n- Bitwise OR                              |\n\n- Logical AND                             &&\n- Logical OR                              ||\n\n- Ternary                                 ? :\n- Assignment                              =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=\n\n*/\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);