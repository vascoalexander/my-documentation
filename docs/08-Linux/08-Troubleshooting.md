---
created: 2025-02-22, 09:23
title: Troubleshooting
description: ""
sidebar_position: 8
draft: false
---
### Rescue Root

- system boot -> grub -> mit e bootoptionen ändern
- am Ende der bootzeile (nicht in der initrd zeile!) rw init=/bin/bash

-> rw um das fs als read-writable beim booten zu mounten
-> init=/bin/bash bootet in die bash als einzigem process

ctrl-x -> boot in die bash

check filesystem (rw): 
- df
- mount | grep [root-fs-name]
- passwd
- touch /.autorelabel -> forciert relabeling des selinux
- reboot/restart