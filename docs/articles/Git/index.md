# Git

- 常见错误

```
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

首先打开 Actions 报错的仓库，找到仓库下的 settings->Actions->General->Workflow permissions  
设置 Read and write permissions

### git 切换账户

```cmd
git config user.name    #查看用户名

git config user.email #查看邮箱

git config --global user.name "xxx" #切换用户

git config --global user.email "xxx" #切换邮箱
```
