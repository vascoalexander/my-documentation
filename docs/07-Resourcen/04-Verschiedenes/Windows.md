---
description: ""
---
## Executing Scripts

**Show actual Policies**  
`Get-ExecutionPolicy -list`

**Set Policy for -Scope to RemoteSigned**

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

#### -ExecutionPolicy

Specifies the execution policy. If there are no Group Policies and each scope's execution policy is set to `Undefined`, then `Restricted` becomes the effective policy for all users.

The acceptable execution policy values are as follows:

- `AllSigned`. Requires that all scripts and configuration files are signed by a trusted publisher, including scripts written on the local computer.
- `Bypass`. Nothing is blocked and there are no warnings or prompts.
- `Default`. Sets the default execution policy. `Restricted` for Windows clients or `RemoteSigned` for Windows servers.
- `RemoteSigned`. Requires that all scripts and configuration files downloaded from the Internet are signed by a trusted publisher. The default execution policy for Windows server computers.
- `Restricted`. Doesn't load configuration files or run scripts. The default execution policy for Windows client computers.
- `Undefined`. No execution policy is set for the scope. Removes an assigned execution policy from a scope that is not set by a Group Policy. If the execution policy in all scopes is `Undefined`, the effective execution policy is `Restricted`.
- `Unrestricted`. Beginning in PowerShell 6.0, this is the default execution policy for non-Windows computers and can't be changed. Loads all configuration files and runs all scripts. If you run an unsigned script that was downloaded from the internet, you're prompted for permission before it runs.

#### -Scope

Specifies the scope that is affected by an execution policy. The default scope is `LocalMachine`.

The effective execution policy is determined by the order of precedence as follows:

- `MachinePolicy` - Set by a Group Policy for all users of the computer
- `UserPolicy` - Set by a Group Policy for the current user of the computer
- `Process` - Affects only the current PowerShell session
- `LocalMachine` - Default scope that affects all users of the computer
- `CurrentUser` - Affects only the current user

### Set Alias
Creates a Windows Powershell Profile for the local User in `%USERPROFILE%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`

```powershell
 New-Item -path $profile -type file -force
```

Set an alias to execute a specific file:

```powershell
# in der zuvor erstellten Datei
set-alias my_alias c:\path\to\my\powershell\script.ps1
```

## Prüfsummen

### get-filehash
```powershell title="Beispiel (Formaierte Ausgabe)"
PS C:\WINDOWS\system32> get-filehash C:\Users\path\to\file.iso -Algorithm SHA384 | Format-List


Algorithm : SHA384
Hash      : 555073E147487CDC5428EED6FF18CEB3973F7322C461FF9AF0629A37ECF7CDF98912F931641C2C46C10F7F9E3E29B50A
Path      : C:\Users\lem0th\Desktop\Windows.iso
```
```powershell title="using the -path parameter"
PS C:\WINDOWS\system32> get-filehash -path C:\Users\lem0th\Desktop\Tuts.7z -Algorithm SHA256

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          38F3B3F4800A6E59C5DFCBC222ADB6ED6987087E9A90E25D39E1C0CCD3EAEA97 
```
**-Path**
Gibt den Pfad zu einer oder mehreren Dateien als Array an. Platzhalterzeichen sind zulässig.

### compare hashes
```powershell
Get-FileHash -Path C:\DateiName -Algorithm SHA256| Compare-Object -ReferenceObject "2F9296722Cd04054566D98F97649B09E" -DifferenceObject {$_.Hash}
```
**-ReferenceObject**
Die Referenz Prüfsumme mit der das zu prüfende Objekt verglichen wird