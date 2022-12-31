# Vim

![/images/university-linux-vim.jpg](/images/university-linux-vim.jpg)

## 使用

使用vim编辑文件
```vim
vim index.html
```

退出
``` vim
:w   保存当前状态
:w!  强制保存当前状态
:q   退出当前文档
:Q   强制退出当前文档
:wq  保存并退出
:wq! 强制保存并退出
```

显示行号
``` vim
set nu 或  set number
```

## 移动
``` vim
h   左
j   下
k   上
l   右
w   移动到下个单词开头
e   移动到下个单词结尾
^   移动到行首
$   移动到行尾
gg  移动到第一行
3gg 移动到第三行
G   移动到最后一行
```

## 复制和粘贴
``` vim
yy  复制一行
5yy 复制当前光标开始下5行
p   粘贴到当前光标下一行
P   粘贴到当前光标上一行
```

## 插入模式
```vim
a append        在当位置后面插入
i insert        在当前位置前插入
c change        删除当前选中内容，并进入插入模式
o open new line 在下一行插入
O open new line 在上一行插入
```

## 删除
``` vim
dd  删除一行
4dd 删除4行
```

## 替换
``` vim
r 替换当前光标字符
R 连续替换
```
