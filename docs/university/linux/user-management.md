# 用户管理

## 相关配置文件
``` shell
/etc/passwd 用户配置文件
/etc/shadow 密码配置文件
```

## 创建用户
``` shell
useradd 

可选项
-u   指定UID
-g   指定gid 主组
-G   指定Gid附加组ID
-c   加备注
-s   指定shell
-M   不创建家目录
-r   指定用户身份为系统用户
```

## 修改用户
``` shell
usermod 

可选项
-u   指定UID
-g   指定gid 主组
-G   指定Gid附加组ID
-c   加备注
-s   指定shell
-M   不创建家目录
-r   指定用户身份为系统用户
```

## 删除用户
``` shell 
userdel

可选项
-r 删除用户及其他相关内容
```

## 设置密码
``` shell
passwd 
```

``` shell
给当前用户设置密码
passwd

给用户 zhangsan 设置密码
passwd zhangsan
```

## 切换用户
```
su
```

``` shell
切换到 zhangsan
su zhangsan
```