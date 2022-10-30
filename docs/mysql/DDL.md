# DDL

`DDL` 英文全称 Data Definition Language （数据定义语言），用于描述数据库中要存储的现实世界实体的语言。

## SHOW DATABASES

`SHOW DATABASES` 查询所有数据库

```sql
SHOW DATABASES;
```

## SELECT DATABASE()

`SHOW DATABASE()` 查询当前数据库

```sql
SELECT DATABASE();
```

## CREATE DATABASE

`CREATE DATABASE` 创建数据库

```sql
CREATE DATABASE test;
-- 如果不存在则创建
CREATE DATABASE IF NOT EXISTS test;
-- 创建一个数据库并设置他的字符集
CREATE DATABASE IF NOT EXISTS test DEFAULT CHARSET utf8mb4;
```

## DROP DATABASE

`DROP DATABASE` 删除数据库

```sql
DROP DATABASE test;
-- 如果存在则删除
DROP DATABASE IF EXISTS test;
```

## USE

`USE` 切换当前数据库

```sql
use test;
```

## SHOW TABLES

`SHOW TABLES` 查询当前数据所有表

```sql
SHOW TABLES;
```

## DESC

`DESC` 查询表结构

```sql
DESC user;
```

## SHOW CREATE TABLE

`SHOW CREATE TABLE` 查询指定表的建表语句

```sql
SHOW CREATE TABLE user;
```

## CREATE TABLE

`CREATE TABLE` 新建一张表

```sql
CREATE TABLE user (
	id int comment '用户编号',
	name varchar(20) comment '用户名称',
	gender char(1) comment '性别',
	age tinyint unsigned comment 's年龄',
	create_time date comment '创建时间'
) comment '用户表';
```

## ALTER TABLE

`ALTER TABLE` 对表的字段进行操作

- 添加一个字段

```sql
ALTER TABLE user ADD address varchar(40) COMMENT '用户地址';
```

- 修改数据类型

```sql
ALTER TABLE user MODIFY address varchar(20);
```

- 修改字段名和字段类型

```sql
ALTER TABLE user CHANGE address u_address varchar(20) COMMENT '用户地址';
```

- 删除字段

```sql
ALTER TABLE user DROP address;
```

- 修改表名

```sql
ALTER TABLE user RENAME TO users;
```

- 删除表

```sql
DROP TABLE user;
-- 如果存在则删除
DROP TABLE IF EXISTS user;
```

- 删除指定表并重新创建

```sql
TRUNCATE TABLE user;
```
