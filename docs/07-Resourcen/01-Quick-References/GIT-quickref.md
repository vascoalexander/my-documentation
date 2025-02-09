---
description: ""
sidebar_position: 4
title: "GIT Commands"
---
[GitHub Documentation](https://docs.github.com/en)  
[GitHub Skills](https://skills.github.com/ )  
[Git Visualization](https://git-school.github.io/visualizing-git/)  
[Generate gitignore file online](https://www.toptal.com/developers/gitignore)   

| Command                                          | Short Description                                      |
|:------------------------------------------------ |:------------------------------------------------------ |
| **git init**                                     | Initialize repository                                  |
| **git clone [repo_url]**                         | Clone repository                                       |
| **git status**                                   | View repository status                                 |
| **git add [file]**                               | Stage changes of [file]                                |
| **git add .**                                    | Stage all changes                                      |
| **git reset [file]**                             | Unstage a file while retaining other changes           |
| **git rm [file]**                                | Delete file and stage the removal                      |
| **git commit -m "message"**                      | Commit Changes                                         |
| **git branch**                                   | List branches                                          |
| **git branch [branch]**                          | Create branch                                          |
| **git checkout [branch]**                        | Switch to branch                                       |
| **git checkout -b [new branchname]**             | Create a branch and switch to it                       |
| **git merge [branch]**                           | Merge branch                                           |
| **git remote -v**                                | View remotes                                           |
| **git remote set-url origin [NEW_GIT_URL_HERE]** | Set origin url for remote repo                         |
| **git pull origin [branch]**                     | Pull changes                                           |
| **git push origin [branch]**                     | Push changes                                           |
| **git log**                                      | View commit history                                    |
| **git log --oneline**                            | View short commit history                              |
| **git log --oneline --decorate --graph --all**   | View commit history with graphical layout (q to quit)  |
| **git revert [commit]**                          | Revert commit                                          |
| **git reset [commit]**                           | Reset to commit                                        |
| **git reset --hard [commit]**                    | Clear staging area, rewrite working tree from [commit] |
| **git diff**                                     | Diff of what is changed but not staged                 |
| **git diff --staged**                            | diff of what is staged but not committed               |
| **git tag**                                      | List tags                                              |
| **git config --global user.name "name"**         | Set global username                                    |
| **git config --global user.email "email"**       | Set global email                                       |
|                                                  |                                                        |

```bash title="github repository URL's"
SSH: git@github.com:username/my-repository.git
HTTPS: https://github.com/username/my-repository.git
```