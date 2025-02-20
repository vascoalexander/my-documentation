"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[5835],{5133:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Grundlagen/Sonstiges/Windows","title":"Windows","description":"","source":"@site/docs/01-Grundlagen/05-Sonstiges/01-Windows.md","sourceDirName":"01-Grundlagen/05-Sonstiges","slug":"/Grundlagen/Sonstiges/Windows","permalink":"/my-documentation/docs/Grundlagen/Sonstiges/Windows","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/01-Grundlagen/05-Sonstiges/01-Windows.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"","title":"Windows","sidebar_position":1},"sidebar":"grundlagenSidebar","previous":{"title":"Sonstiges","permalink":"/my-documentation/docs/category/sonstiges"},"next":{"title":"Site","permalink":"/my-documentation/docs/category/site"}}');var t=s(4848),o=s(8453);const r={description:"",title:"Windows",sidebar_position:1},c=void 0,l={},d=[{value:"Executing Scripts",id:"executing-scripts",level:2},{value:"-ExecutionPolicy",id:"-executionpolicy",level:4},{value:"-Scope",id:"-scope",level:4},{value:"Set Alias",id:"set-alias",level:3},{value:"Pr\xfcfsummen",id:"pr\xfcfsummen",level:2},{value:"get-filehash",id:"get-filehash",level:3},{value:"compare hashes",id:"compare-hashes",level:3}];function a(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"executing-scripts",children:"Executing Scripts"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Show actual Policies"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Get-ExecutionPolicy -list"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set Policy for -Scope to RemoteSigned"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine\n"})}),"\n",(0,t.jsx)(n.h4,{id:"-executionpolicy",children:"-ExecutionPolicy"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the execution policy. If there are no Group Policies and each scope's execution policy is set to\xa0",(0,t.jsx)(n.code,{children:"Undefined"}),", then\xa0",(0,t.jsx)(n.code,{children:"Restricted"}),"\xa0becomes the effective policy for all users."]}),"\n",(0,t.jsx)(n.p,{children:"The acceptable execution policy values are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AllSigned"}),". Requires that all scripts and configuration files are signed by a trusted publisher, including scripts written on the local computer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Bypass"}),". Nothing is blocked and there are no warnings or prompts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Default"}),". Sets the default execution policy.\xa0",(0,t.jsx)(n.code,{children:"Restricted"}),"\xa0for Windows clients or\xa0",(0,t.jsx)(n.code,{children:"RemoteSigned"}),"\xa0for Windows servers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RemoteSigned"}),". Requires that all scripts and configuration files downloaded from the Internet are signed by a trusted publisher. The default execution policy for Windows server computers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Restricted"}),". Doesn't load configuration files or run scripts. The default execution policy for Windows client computers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Undefined"}),". No execution policy is set for the scope. Removes an assigned execution policy from a scope that is not set by a Group Policy. If the execution policy in all scopes is\xa0",(0,t.jsx)(n.code,{children:"Undefined"}),", the effective execution policy is\xa0",(0,t.jsx)(n.code,{children:"Restricted"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Unrestricted"}),". Beginning in PowerShell 6.0, this is the default execution policy for non-Windows computers and can't be changed. Loads all configuration files and runs all scripts. If you run an unsigned script that was downloaded from the internet, you're prompted for permission before it runs."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"-scope",children:"-Scope"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the scope that is affected by an execution policy. The default scope is\xa0",(0,t.jsx)(n.code,{children:"LocalMachine"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The effective execution policy is determined by the order of precedence as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MachinePolicy"}),"\xa0- Set by a Group Policy for all users of the computer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UserPolicy"}),"\xa0- Set by a Group Policy for the current user of the computer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Process"}),"\xa0- Affects only the current PowerShell session"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LocalMachine"}),"\xa0- Default scope that affects all users of the computer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CurrentUser"}),"\xa0- Affects only the current user"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-alias",children:"Set Alias"}),"\n",(0,t.jsxs)(n.p,{children:["Creates a Windows Powershell Profile for the local User in ",(0,t.jsx)(n.code,{children:"%USERPROFILE%\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:" New-Item -path $profile -type file -force\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set an alias to execute a specific file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# in der zuvor erstellten Datei\nset-alias my_alias c:\\path\\to\\my\\powershell\\script.ps1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pr\xfcfsummen",children:"Pr\xfcfsummen"}),"\n",(0,t.jsx)(n.h3,{id:"get-filehash",children:"get-filehash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="Beispiel (Formaierte Ausgabe)"',children:"PS C:\\WINDOWS\\system32> get-filehash C:\\Users\\path\\to\\file.iso -Algorithm SHA384 | Format-List\n\n\nAlgorithm : SHA384\nHash      : 555073E147487CDC5428EED6FF18CEB3973F7322C461FF9AF0629A37ECF7CDF98912F931641C2C46C10F7F9E3E29B50A\nPath      : C:\\Users\\lem0th\\Desktop\\Windows.iso\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="using the -path parameter"',children:"PS C:\\WINDOWS\\system32> get-filehash -path C:\\Users\\lem0th\\Desktop\\Tuts.7z -Algorithm SHA256\n\nAlgorithm       Hash                                                                   Path\n---------       ----                                                                   ----\nSHA256          38F3B3F4800A6E59C5DFCBC222ADB6ED6987087E9A90E25D39E1C0CCD3EAEA97 \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"-Path"}),"\nGibt den Pfad zu einer oder mehreren Dateien als Array an. Platzhalterzeichen sind zul\xe4ssig."]}),"\n",(0,t.jsx)(n.h3,{id:"compare-hashes",children:"compare hashes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'Get-FileHash -Path C:\\DateiName -Algorithm SHA256| Compare-Object -ReferenceObject "2F9296722Cd04054566D98F97649B09E" -DifferenceObject {$_.Hash}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"-ReferenceObject"}),"\nDie Referenz Pr\xfcfsumme mit der das zu pr\xfcfende Objekt verglichen wird"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);