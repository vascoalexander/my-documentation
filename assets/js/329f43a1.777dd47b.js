"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[6956],{698:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tools/git","title":"GIT","description":"GitHub Documentation","source":"@site/docs/08-tools/git.mdx","sourceDirName":"08-tools","slug":"/tools/git","permalink":"/my-documentation/docs/tools/git","draft":false,"unlisted":false,"editUrl":"https://github.com/vascoalexander/my-documentation/tree/main/docs/08-tools/git.mdx","tags":[],"version":"current","frontMatter":{"draft":false,"title":"GIT"},"sidebar":"toolsSidebar"}');var n=i(4848),r=i(8453);const l={draft:!1,title:"GIT"},a=void 0,o={},c=[{value:"THE STAGING AREA",id:"the-staging-area",level:3},{value:"UNSTAGE (Reverse) A FILE / ALL FILES",id:"unstage-reverse-a-file--all-files",level:4},{value:"DISCARD LOCAL UNCOMMITTED CHANGES",id:"discard-local-uncommitted-changes",level:4},{value:"GIT PULL vs GIT FETCH",id:"git-pull-vs-git-fetch",level:3},{value:"GIT RESET --soft",id:"git-reset---soft",level:3},{value:"GIT RESET --hard",id:"git-reset---hard",level:3},{value:"GIT REBASE",id:"git-rebase",level:3},{value:"GIT MERGE",id:"git-merge",level:3},{value:"ADDING EMPTY DIRECTORIES TO REPOSITORY",id:"adding-empty-directories-to-repository",level:3},{value:"REMOVE DIRECTORY FROM REPOSITORY",id:"remove-directory-from-repository",level:3},{value:"CHANGE REMOTE REPOSITORY URL",id:"change-remote-repository-url",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.github.com/en",children:"GitHub Documentation"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://skills.github.com/",children:"GitHub Skills"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://git-school.github.io/visualizing-git/",children:"Git Visualization"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://www.toptal.com/developers/gitignore",children:"Generate gitignore file online"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Command"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Short Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git init"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Initialize repository"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git clone [repo_url]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Clone repository"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git status"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View repository status"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git add [file]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Stage changes of [file]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git add ."})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Stage all changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git reset [file]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unstage a file while retaining other changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git rm [file]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete file and stage the removal"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:'git commit -m "message"'})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Commit Changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git branch"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"List branches"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git branch [branch]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create branch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git checkout [branch]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Switch to branch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git checkout -b [new branchname]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a branch and switch to it"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git merge [branch]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Merge branch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git remote -v"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View remotes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git remote set-url origin [NEW_GIT_URL_HERE]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Set origin url for remote repo"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git pull origin [branch]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pull changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git push origin [branch]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Push changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git log"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View commit history"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git log --oneline"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View short commit history"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git log --oneline --decorate --graph --all"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View commit history with graphical layout (q to quit)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git revert [commit]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Revert commit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git reset [commit]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Reset to commit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git reset --hard [commit]"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Clear staging area, rewrite working tree from [commit]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git diff"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Diff of what is changed but not staged"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git diff --staged"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"diff of what is staged but not committed"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"git tag"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"List tags"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:'git config --global user.name "name"'})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Set global username"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:'git config --global user.email "email"'})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Set global email"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="github repository URL\'s"',children:"SSH: git@github.com:username/my-repository.git\nHTTPS: https://github.com/username/my-repository.git\n"})}),"\n",(0,n.jsx)(t.h3,{id:"the-staging-area",children:"THE STAGING AREA"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Working Directory"}),": The working directory is where you make edits and create new files. It represents the current state of your project."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Staging Area"}),": Once you've made changes in your working directory that you wish to save, you first add these changes to the staging area. This area captures a snapshot of the modifications and prepares them for committing."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Repository"}),": When you're ready to finalize your changes, you commit the modifications from the staging area. This action saves a permanent snapshot of the changes in your Git repository, along with metadata such as who made the changes and when."]}),"\n"]}),"\n",(0,n.jsx)("div",{class:"img-center img-200",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Staging",src:i(2407).A+""})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git add <file>    # adds changes in a file to the staging area\ngit add .         # adds all changes to the staging area\ngit diff          # shows unstaged changes in the working directory\ngit dif --staged  # shows changes that are staged for the next commit\ngit commit        # commits the staged changes\ngit reset <file>  # removes file from the staging area\n"})}),"\n",(0,n.jsx)(t.h4,{id:"unstage-reverse-a-file--all-files",children:"UNSTAGE (Reverse) A FILE / ALL FILES"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git restore --staged <file-path>   # unstage specified file\ngit restore --staged .             # unstage all files\n"})}),"\n",(0,n.jsx)(t.h4,{id:"discard-local-uncommitted-changes",children:"DISCARD LOCAL UNCOMMITTED CHANGES"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git restore .            # discard all uncommitted changes\ngit restore path/to/file # discard changes to specified file\ngit checkout -- .        # revert working directory to last commit\n"})}),"\n",(0,n.jsx)(t.h3,{id:"git-pull-vs-git-fetch",children:"GIT PULL vs GIT FETCH"}),"\n",(0,n.jsx)(t.p,{children:"git fetch is used to download updates from a remote repository to your local repository without merging or modifying your local branches.\nThis command allows you to review the changes before integrating them into your local branch."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git fetch <remote>\n"})}),"\n",(0,n.jsx)(t.p,{children:"git pull is a combination of git fetch and git merge. It downloads changes and merges them into the current branch."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git pull <remote> <branch>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"git-reset---soft",children:"GIT RESET --soft"}),"\n",(0,n.jsxs)(t.p,{children:["When you use git reset --soft, Git moves the ",(0,n.jsx)(t.strong,{children:"HEAD"})," pointer to the specified commit while leaving the staging area and working directory unchanged.\nThis means that all changes from commits after the specified one will remain in the staging area, ready to be recommitted."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git reset --soft HEAD~1\n"})}),"\n",(0,n.jsx)(t.p,{children:"This command moves the HEAD pointer one commit back. Changes made in the latest commit are transferred to the staging area:"}),"\n",(0,n.jsx)("div",{class:"img-center img-400",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Soft-Reset",src:i(5934).A+""})})}),"\n",(0,n.jsx)(t.h3,{id:"git-reset---hard",children:"GIT RESET --hard"}),"\n",(0,n.jsx)(t.p,{children:"The git reset --hard option can be thought of as a nuclear option.\nIt moves the HEAD pointer to the specified commit, updates the staging area to match this commit,\nand also adjusts the working directory to exactly match the commit.\nAny changes from commits made after the specified commit will be completely discarded."}),"\n",(0,n.jsx)(t.h3,{id:"git-rebase",children:"GIT REBASE"}),"\n",(0,n.jsx)(t.p,{children:"Rebasing effectively saves the changes in your current branch, temporarily \u201cremoves\u201d the commits you\u2019ve made on your branch,\napplies the new commits from the other branch, and then reapplies your changes one commit at a time on top of these."}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s important to note that rebasing rewrites commit history by generating new commits for each original commit.\nThis process can result in a cleaner and more understandable project history."}),"\n",(0,n.jsx)("div",{class:"img-center img-600",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Git-Rebase",src:i(8005).A+""})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Above Situation:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git checkout feature  \ngit rebase main\n"})}),"\n",(0,n.jsx)(t.p,{children:"After the rebase the Feature branch includes the commits from main and keeps the commits that have been commited earlier to the feature branch.\nThe main branch is untouched, but the commitment history has changed."}),"\n",(0,n.jsx)(t.p,{children:"If a conflict arises, Git will show you which files are conflicting.\nYou\u2019ll have to open these files, resolve the conflicts, and then continue the rebase like so:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# After resolving conflicts\ngit add .\ngit rebase --continue\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you want to abort the rebase for any reason, you can do so with the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git rebase --abort\n"})}),"\n",(0,n.jsx)(t.h3,{id:"git-merge",children:"GIT MERGE"}),"\n",(0,n.jsx)(t.p,{children:"Once your feature is ready and tested, you\u2019ll want to merge it back into the main project.\nFirst, switch back to the branch you want to merge your changes into. Assuming you want to merge your changes to main branch:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git checkout master\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then, merge your feature branch:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git merge <feature-branch>\n"})}),"\n",(0,n.jsx)(t.p,{children:"After merging your changes locally, push them to the remote repository to make them available to your teammate and update the live version of the website:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git push origin master\n"})}),"\n",(0,n.jsx)(t.h3,{id:"adding-empty-directories-to-repository",children:"ADDING EMPTY DIRECTORIES TO REPOSITORY"}),"\n",(0,n.jsxs)(t.p,{children:["Create a placeholder file named .gitkeep in the empty directory.\nThe\xa0",(0,n.jsx)(t.strong,{children:".gitkeep"})," file has no special meaning to Git, but it\u2019s a widely-accepted convention that signals the intention to keep the directory in the repository."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'echo "" .gitkeep                                    # create .gitkeep file\ngit add .gitkeep                                    # stage the file\ngit commit -m "add empty directory with .gitkeep"   # commit the changes\n'})}),"\n",(0,n.jsx)(t.h3,{id:"remove-directory-from-repository",children:"REMOVE DIRECTORY FROM REPOSITORY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git rm -r <directory> # removes a dir from git repository recursively\n"})}),"\n",(0,n.jsx)(t.h3,{id:"change-remote-repository-url",children:"CHANGE REMOTE REPOSITORY URL"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git remote -v                        # verify current remote repository\ngit remote set-url origin <new-url>  # set new url of origin\ngit remote -v                        # verify new remote repository url\ngit fetch origin                     # sync local repository to new remote\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8005:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/git-rebase-40aeaad2bba2f6906d4a27b90ce3087b.svg"},5934:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/soft-reset-d188a44e6f7c5b7427a0671a43333647.svg"},2407:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/staging-4cf18707ff001af53fd1bf8d7d025371.svg"},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var s=i(6540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);