# 用户组管理

## 相关配置文件
``` shell
/etc/group   用户组配置文件
/etc/gshadow 用户组密码配置文件
```

## 查看所有用户组
``` shell
cat /etc/group

financial:x:1:zhangsan

financial：组名
x：组密码
1：组ID
zhangsan：附加组成员
```

## 修改用户组密码
``` shell
gpasswd 
```

``` shell
修改root用户组密码
gpasswd root
```

## 新增用户组
``` shell
groupadd

可选项
-g  指定用户组GID
-k  覆盖配置文件 /etc/login.defs
-o  允许使用重复用户组GID
-p  设置用户组密码
-r  创建系统用户组，系统用户组GID范围在 1~999
```

``` shell
创建系统用户组 zhangsan，并指定GID 666
groupadd -r -g 666 zhangsan
```

## 修改用户组
``` shell
groupmod 
-g  修改用户组GID
-o  允许使用已存在的GID
-n  修改用户组名称
```

``` shell
修改用户组 zhangsan 的 GID 为 333，并修改组名为liubei
groupmod -g 333 -n liubei zhangsan
```

## 删除用户组
``` shell
groupdel 
```

``` shell
删除 zhangsan 用户组
groupdel zhangsan
```