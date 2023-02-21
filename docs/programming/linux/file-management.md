# 文件管理

## 目录

```
📦 最高一级目录是根目录
 ┣ 📂 bin  普通用户可以使用的指令
 ┣ 📂 sbin 超级管理员使用指令
 ┣ 📂 root 超级管理员的家目录
 ┣ 📂 home 普通用户家目录
 ┣ 📂 boot 设备文件
 ┣ 📂 dev  用于存放设备文件的目录
 ┣ 📂 etc  配置文件
 ┗ 📂 var  可变文件 日志  log
```

## 命令行解释

``` shell
[root@localhost~] #

root       当前用户
localhost  主机名
~          当前目录名
#          权限
```

## 命令行符号

``` shell
.  当前目录
.. 上一级目录
~  当前用户的家目录
/  根目录
$  普通用户的命令提示符
#  root用户的命令提示符
*  万能匹配符
```

## 其他命令

### 查看当前用户名
``` shell
whoami
```

### 查看当前用户所在的绝对路径
``` shell
pwd
```
### 切换目录
``` shell
cd
```

``` shell
切换到etc目录
cd /etc
切换到上一级目录
cd ..
切换到家目录
cd ~
```

## 查看当前目录文件
``` shell
ls   查看当前目录文件
ll   查看当前目录文件的详细信息

可选项
-l   列表模式查看详细信息
-a   查看所有文件，包含隐藏文件，以.开头的文件就是隐藏文件
-h   人类可读的方式输出文件大小 要和-l同时使用
-d   目录本身
```

``` shell
查看当前目录所有文件的详细信息
ls -a -l 或 ls -la

查看etc目录的所有文件的详细信息
ls /etc -la
```

## Tree 命令

`tree` 这个命令不是 `linux` 自带的，但是我们可以通过第三方包的形式将它安装

`Centos 7` 安装
``` shell
sudo yum install tree
```

使用
``` shell
查看当前目录子集所有的文件
tree

只查看文件夹
tree -d
```

效果
```
.
├── a
│   ├── a1
│   ├── a2
│   └── a3
├── b
├── c
├── d
└── e
```

## 创建操作
### 创建文件夹
``` shell
mkdir
```


``` shell
在当前目录，创建a文件夹
mkdir a

在当前目录，一次性创建 a1,a2,a3 多个文件夹
mkdir a1 a2 a3

递归创建文件夹
mkdir -p a/b/c
```

### 创建文件
``` shell
touch
```

``` shell
在当前目录，创建 index.html
touch index.html

在 /etc 下创建 index.html
touch /etc/index.html
```

## 删除操作
```
rm

可选项
-d 删除目录
-f 强制删除，force 的缩写，强制的意思
-r 递归删除目录及其内容
```

``` shell
删除文件
rm index.html

删除文件夹
rm -d a

删除以a开头的文件
rm a*

强制删除a目录下所有的文件和文件夹
rm -rf a

跑路指令（删除根目录下所有文件，谨慎使用😄）
rm -rf /*
```

## 复制操作
``` shell
cp 

可选项
-r 递归复制目录
-p 保留文件的原始属性
-v 显示执行过程
```

``` shell
递归复制 /etc 下的所有文件到当前文件夹下
cp /etc ./ -r
```

## 移动操作 | 重命名操作
``` shell
mv
```

``` shell
重命名 index.html 为 index1.html
mv index.html index1.html

将当前目录下文件夹a，移动到同级目录b下
mv a ./b
```

## 查看文件内容
``` shell
cat 
```

``` shell 
查看当前目录下的 index.html 文件
cat index.html 

查看当前目录下的 index.html 文件，并显示行号
cat index.html -n

查看当前目录下的 index.html 文件，并显示行号和隐藏符号
cat index.html -nA
```

## 过滤内容
``` shell
grep

可选项
-n 显示行号
-v 取反
```

``` shell
查看当前目录下index.html文件中具有 "hello" 的行
grep hello index.html

查看当前目录下index.html文件中以 "hello" 开头的行
grep ^hello index.html

查看当前目录下index.html文件中以 "hello" 结尾的行
grep hello^ index.html

查看当前目录下index.html文件中没有 "hello" 的行
grep hello index.html -v
```
