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

### 生成秘钥

要在 Git 中生成 SSH 密钥对，可以按照以下步骤进行操作：

打开终端或命令行工具，确保已经安装了 Git。
输入以下命令来生成 SSH 密钥对：

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

将 your_email@example.com 替换为你的电子邮件地址。
按回车键接受默认的密钥文件保存路径和名称（一般为 ~/.ssh/id_rsa）。
输入一个安全密码（passphrase）用于保护你的私钥，也可以留空不设置密码。
生成密钥对后，可以通过以下命令查看公钥内容：

```
cat ~/.ssh/id_rsa.pub
```
