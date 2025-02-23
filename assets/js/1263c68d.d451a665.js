"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6552],{50200:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"DB/SQL/Transactions","title":"Transactions","description":"","source":"@site/docs/06-DB/02-SQL/08-Transactions.md","sourceDirName":"06-DB/02-SQL","slug":"/DB/SQL/Transactions","permalink":"/my-documentation/docs/DB/SQL/Transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/06-DB/02-SQL/08-Transactions.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"description":"","draft":false,"title":"Transactions"},"sidebar":"dbSidebar","previous":{"title":"Functions","permalink":"/my-documentation/docs/DB/SQL/Functions"},"next":{"title":"ProjectDB","permalink":"/my-documentation/docs/category/projectdb"}}');var t=i(74848),r=i(28453);const a={sidebar_position:8,description:"",draft:!1,title:"Transactions"},c=void 0,l={},o=[{value:"Was sind Transactions?",id:"was-sind-transactions",level:2},{value:"ACID-Prinzip",id:"acid-prinzip",level:2},{value:"SQL Transactions",id:"sql-transactions",level:2},{value:"MySQL / PostgreSQL",id:"mysql--postgresql",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"SQL Server",id:"sql-server",level:3},{value:"Transactions in Code",id:"transactions-in-code",level:2},{value:"Python mit SQLite",id:"python-mit-sqlite",level:3},{value:"C# mit Entity Framework",id:"c-mit-entity-framework",level:3},{value:"Isolation Levels",id:"isolation-levels",level:2},{value:"SQL Isolation Levels (von niedrig zu hoch)",id:"sql-isolation-levels-von-niedrig-zu-hoch",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"was-sind-transactions",children:"Was sind Transactions?"}),"\n",(0,t.jsx)(e.p,{children:"Transactions sind atomare Operationseinheiten in einer Datenbank, die entweder ganz oder gar nicht ausgef\xfchrt werden (ACID-Prinzip)."}),"\n",(0,t.jsx)(e.h2,{id:"acid-prinzip",children:"ACID-Prinzip"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Atomicity (Atomarit\xe4t):"})," Alles oder nichts wird ausgef\xfchrt."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Consistency (Konsistenz):"})," Daten bleiben in einem g\xfcltigen Zustand."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Isolation (Isolation):"})," Gleichzeitige Transaktionen beeinflussen sich nicht."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Durability (Dauerhaftigkeit):"})," Nach Best\xe4tigung bleiben \xc4nderungen erhalten."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"sql-transactions",children:"SQL Transactions"}),"\n",(0,t.jsx)(e.h3,{id:"mysql--postgresql",children:"MySQL / PostgreSQL"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- \xc4nderungen best\xe4tigen\n"})}),"\n",(0,t.jsx)(e.p,{children:"Rollback bei Fehler:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n-- Fehler tritt auf\nROLLBACK; -- \xc4nderungen verwerfen\n"})}),"\n",(0,t.jsx)(e.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"BEGIN TRANSACTION;\nINSERT INTO orders (customer_id, total) VALUES (1, 50);\nSAVEPOINT sp1;\nUPDATE inventory SET stock = stock - 1 WHERE product_id = 10;\nROLLBACK TO sp1; -- R\xfcckg\xe4ngig machen bis zum Savepoint\nCOMMIT;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"sql-server",children:"SQL Server"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nIF @@ERROR <> 0\n    ROLLBACK TRANSACTION;\nELSE\n    COMMIT TRANSACTION;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"transactions-in-code",children:"Transactions in Code"}),"\n",(0,t.jsx)(e.h3,{id:"python-mit-sqlite",children:"Python mit SQLite"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import sqlite3\nconn = sqlite3.connect(\'database.db\')\ncursor = conn.cursor()\ntry:\n    cursor.execute("BEGIN TRANSACTION;")\n    cursor.execute("UPDATE accounts SET balance = balance - 100 WHERE id = 1;")\n    cursor.execute("UPDATE accounts SET balance = balance + 100 WHERE id = 2;")\n    conn.commit()  # \xc4nderungen best\xe4tigen\nexcept Exception:\n    conn.rollback()  # \xc4nderungen zur\xfccksetzen\nfinally:\n    conn.close()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"c-mit-entity-framework",children:"C# mit Entity Framework"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"using (var context = new MyDbContext())\n{\n    using (var transaction = context.Database.BeginTransaction())\n    {\n        try\n        {\n            var acc1 = context.Accounts.Find(1);\n            var acc2 = context.Accounts.Find(2);\n            acc1.Balance -= 100;\n            acc2.Balance += 100;\n            context.SaveChanges();\n            transaction.Commit();\n        }\n        catch\n        {\n            transaction.Rollback();\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"isolation-levels",children:"Isolation Levels"}),"\n",(0,t.jsx)(e.h3,{id:"sql-isolation-levels-von-niedrig-zu-hoch",children:"SQL Isolation Levels (von niedrig zu hoch)"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Read Uncommitted"})," \u2013 Kann nicht best\xe4tigte \xc4nderungen lesen"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Read Committed"})," \u2013 Liest nur best\xe4tigte Daten"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Repeatable Read"})," \u2013 Gleiche Abfrage liefert immer dieselben Werte"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Serializable"})," \u2013 Maximale Isolation, vollst\xe4ndige Sperren"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Setzen eines Isolation Levels:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Verwende ",(0,t.jsx)(e.strong,{children:"transaktionssichere Tabellen"})," (z. B. InnoDB in MySQL)"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Nutze explizite Transaktionen"}),", wenn mehrere Operationen zusammengeh\xf6ren"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Behandle Fehler"})," und implementiere Rollbacks"]}),"\n",(0,t.jsxs)(e.li,{children:["Setze ",(0,t.jsx)(e.strong,{children:"passende Isolation Levels"})," f\xfcr Performance und Datenintegrit\xe4t"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Schlie\xdfe Transaktionen schnell ab"}),", um Sperren zu minimieren"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>c});var s=i(96540);const t={},r=s.createContext(t);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);