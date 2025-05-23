---
title: Command Quick-Ref
draft: false
---
| Command                                                 | Function                                                                                            |
|:--------------------------------------------------------|:----------------------------------------------------------------------------------------------------|
| `echo $PATH \| tr ':' '\n'`                             | Zeigt $PATH in human readable format                                                                |
| `ln -s source_file link_name`                           | Create Symlink                                                                                      |
| `tail -n 5 file.txt`                                    | Displays the last 5 lines of the file “file.txt”                                                    |
| `head -n 5 file.txt`                                    | Displays the first 5 lines of the file "file.txt"                                                   |
| `rsync -av source destination`                          | Sync folders                                                                                        |
| `chmod +x myScript.sh`                                  | Make file executable                                                                                |
| `tar -czvf archive.tar.gz files/`                       | Creates a compressed archive containing the files in “files/”.                                      |
| `which executable-on-path`                              | Shows path to executable                                                                            |
| `netstat -tulnap`                                       | List of tcp/udp connections with PID                                                                |
| `ssh user@hostname`                                     | Initiates an SSH connection to the specified hostname                                               |
| `scp file.txt user@hostname:/path/to/destination`       | Securely copies “file.txt” to the specified remote host                                             |
| `wget http://example.com/file.txt`                      | Downloads “file.txt” from the specified URL                                                         |
| `nmtui`                                                 | Network configuration tool                                                                          |
| `telnet [address] [port]`                               | Testing a port                                                                                      |
| `your_command &> logfile.log`                           | stdout and stderr to logfile.log                                                                    |
| `your_command &>> logfile.log`                          | append to logfile.log                                                                               |
| `your_command > output.log 2>/dev/null`                 | stdout to output.log, stderr to nirvana                                                             |
| `your_command 2>&1 \| tee logfile.log`                  | log in file and show on screen                                                                      |
| `export VARIABLE_NAME=value`                            | Sets the value of an environment variable.                                                          |
| `unset VARIABLE_NAME`                                   | Unset variable                                                                                      |
| `PATH=$PATH:/path/to/dir`<br />`export PATH`            | Adding dir to $PATH                                                                                 |
| `ip addr show`<br />`ip route`                          | IP address, routing information                                                                     |
| `sudo tar -xvzf my_program.tar.gz -C /usr/local/bin/`   | Create a directory `/usr/bin/my_program/` and extract the contents of the archive into /my_program/ |
| `tar -tf your_archive.tar.gz`                           | List contents of an archive without extracting                                                      |
| `getent passwd $USER \| cut -d: -f7`<br />`echo $SHELL` | Show current default Shell                                                                          |
| `cat /etc/shells`                                       | Show available Shells                                                                               |
| `chsh`                                                  | Change default Shell                                                                                |
| `sudo apt update && sudo apt upgrade -y`                | Update repositories and upgrade packages                                                            |

