---
title: "Security"
sidebar_position: 6
description: ""
draft: false
---
## Checking file integrity

The `sha256sum` command creates a 256-bit checksum number that can be used to verify a file. This command uses a similar syntax to that of the `md5sum` command:
```
sha256sum [OPTIONS]... [FILE]...
```
Use the `sha256sum` command to create the checksum for the `anyfile.txt` file:

```
sha256sum anyfile.txt > anyfile.sha256
cat anyfile.sha256

# anyfile.txt: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  anyfile.txt
```
The `sha256sum` and the `md5sum` command can be used with the `-c` option to verify the integrity of the file:
```
sha256sum -c anyfile.sha256
# anyfile.txt: OK
```