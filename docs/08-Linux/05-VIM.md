---
title: "VIM"
sidebar_position: 5
description: ""
draft: false
---

### Moving the cursor
*(in Normal Mode)*

|       Key       | Function                                                      |
| :-------------: | :------------------------------------------------------------ |
|       `j`       | Moves cursor down one line (same as down arrow)               |
|       `k`       | Moves cursor up line (same as up arrow)                       |
|       `l`       | Moves cursor to the right one character (same as right arrow) |
|       `h`       | Moves cursor to the left one character (same as left arrow)   |
|       `w`       | Moves cursor to beginning of next word                        |
|       `e`       | Moves cursor to end of word                                   |
|       `b`       | Moves cursor to beginning of previous word                    |
|       `$`       | Moves cursor to end of current line (same as **End** key)     |
|   `0` (zero)    | Moves cursor beginning of current line (same as **Home** key) |
|      `3G`       | Jumps to third line (`nG` jumps to the nth line)              |
|      `1G`       | Jumps to first line                                           |
| **Shift**+**G** | Jumps to the last line                                        |

### Editing

|    Key    | Function                                                                                        |
| :-------: | :---------------------------------------------------------------------------------------------- |
|   `dw`    | Delete word                                                                                     |
|   `2dw`   | Delete 2 words                                                                                  |
|    `u`    | Undo last Operation                                                                             |
|   `4u`    | Undo 4 Operations                                                                               |
|    `x`    | Delete one Character                                                                            |
|   `5x`    | Delete 5 Characters                                                                             |
|   `dd`    | Delete current line                                                                             |
|   `2dd`   | Delete two lines                                                                                |
|    `p`    | Paste Buffer into line below                                                                    |
| `Shift+D` | Delete from the current position to the end of the line                                         |
| `Shift+J` | Join two lines (the current and the next line)                                                  |
|   `yw`    | Copy (yank) the current word                                                                    |
|    `~`    | Change letter to lower/uppercase                                                                |
|   `cw`    | Delete word up to the cursor position. (especially useful in conjunction with searched matches) |

### Change Mode


|   Key   | Function                                                |
| :-----: | :------------------------------------------------------ |
|    i    | Enter instert Mode - Cursor before current char         |
|    a    | Insert Mode (append) - Cursor after current char        |
|    o    | Insert line below and switch to insert Mode             |
| Shift+O | Insert line above and switch to insert Mode             |
| Shift+I | Enter insert Mode and jump to the beginning of the Line |
| Shift+A | Enter insert Mode and jump to the end of the Line       |

### Search

|       Key        | Function                                                        |
| :--------------: | :-------------------------------------------------------------- |
|   `%s/pattern`   | Search for a pattern                                            |
| `%s/pattern //g` | Search and delete the pattern                                   |
|      `noh`       | Turn off highlighting until next search                         |
|    `/pattern`    | Search. Type / without : Moves the cursor to the matched result |
|    `?pattern`    | Search backwards.                                               |
|       `n`        | Jump to the next result.                                        |

### Save / Quit

| Command | Function/Keys                                                       |
| :-----: | :------------------------------------------------------------------ |
|  `:x`   | Will save and close the file.                                       |
|  `:wq`  | Will write to file and quit.                                        |
| `:wq!`  | Will write to a read-only file, if possible, and quit.              |
|  `ZZ`   | Will save and close. Notice that no colon `:` is used in this case. |
|  `:q!`  | Exit without saving changes                                         |
|  `:e!`  | Discard changes and reload file                                     |
|  `:w!`  | Write to read-only, if possible.                                    |