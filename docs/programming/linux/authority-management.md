# 权限管理

## 查看文件属性
``` shell
查看 index.html 的属性
ll index.html

-rw-r--r-- 1 root root 0 Nov 16 12:39 index.html

-  rw-  r--  r-- 
1  2    3    4

1 文件类型 
  d 目录
  - 文件
  | 链接文件
  b 块文件
2 文件所有者的权限
3 文件所有组的权限
4 其他人的权限
```

## 改变文件所有者
``` shell
chown 所有者 文件名
```
``` shell
改变 index.html 文件所有者为张三
chown zhangsan index.html

改变 index.html 文件所有者和所属组为张三
chown zhangsan:zhangsan index.html

改变 hello 目录以及目录下所有子文件的所有者为 zhangsan
chown -R zhangsan index.html
```

## 修改文件访问权限

所有权限 
`rwx` 
二进制表示
`111`

- 读权限   r (4)
- 写权限   w (2)
- 执行权限  x (1)

``` shell
将文件的所有权限开启 
chmod 777 index.html
```