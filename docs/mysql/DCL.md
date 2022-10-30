# DCL

`DCL` 英文全称 Data Control Language （数据控制语言），用来管理数据库用户、控制数据库的访问权限。

## 查询用户

```sql
USE mysql;
SELECT * FROM user;
```

## 创建用户

```sql
CREATE USER 'zhangsan'@'localhost' IDENTIFIED BY '123456';
```

## 修改用户密码

```sql
ALTER USER 'zhangsan'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
```

## 删除用户

```sql
DROP USER 'zhangsan'@'localhost';
```

## 权限控制

MySQL 常用权限

| 权限               | 说明               |
| ------------------ | ------------------ |
| ALL,ALL PRIVILEGES | 所有权限           |
| SELECT             | 查询数据           |
| INSERT             | 插入数据           |
| UPDATE             | 修改数据           |
| DELETE             | 删除数据           |
| ALTER              | 修改表             |
| DROP               | 删除数据库/表/视图 |
| CREATE             | 创建数据库/表      |

### 查询权限

```sql
SHOW GRANTS FOR 'zhangsan'@'localhost';
```

### 授予权限

```sql
GRANT ALL ON *.* to 'zhangsan'@'localhost';
```

### 撤销权限

```sql
REVOKE ALL ON *.* FROM 'zhangsan'@'localhost';
```
