# git的基本操作
## 介绍：
    本地有main 和自己的分支，远程上也有main和其他分支；
## 使用
做团队项目时，需要git clone获得远程仓库后，在本地git branch创建自己的的分支
     `git branch ltf` 
然后本地分支就有main 和ltf分支了，操作的时候切换到ltf分支上操作。
提交的时候三部曲 
    ` git add .`

    ` git commit -m message`
    <!-- message就是提交的信息，比如feat：新增了...功能 -->
    ` git push -u origin ltf` 
    <!-- 第一次推送，-u可以表示远程也新增分支ltf（原来ltf只有本地有  git branch ltf时生成的 -->
## main分支合并要求
   本地的main可能与仓库中最新的内容不一致，这时候需要进行变基操作，即切换到main分支
` git checkout main` 或者` git switch main `
    在main分支进行` git pull origin main` 拉取更新后进行` git checkout ltf` 切换自己的分支后进行` git rebase main `
   因为新拉下的main与本地刚上传的不一致，则会与远端的ltf发生冲突，需要` git push -f origin ltf`  即可。

 提交的几个常用步骤，自己的分支：

` git add . git commit -m     git checkout main    git pull   git checkout my    git push origin my`

## 撤销push操作 
`git reset --soft HEAD~1`
撤销最近一次的commit(撤销commit，不撤销git add)

`git reset --mixed HEAD~1`
撤销最近一次的commit(撤销commit，撤销git add)

`git reset --hard HEAD~1 `
撤销最近一次的commit(撤销commit，撤销git add，工作区的代码改动将丢失。操作完成后回到上一次commit状态)

回退之后便是要撤销远程仓库的push了，使用push操作git push origin <分支> --force进行撤销
### 回退上一版本  
` git reset HEAD`


