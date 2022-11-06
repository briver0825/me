# 建表约束

## 主键约束

主键约束不允许重复，且不允许为空

``` sql
primary key
```

单一主键，列级约束
``` sql
CREATE TABLE t_user(
  id int(10) primary key,
  name varchar(32)  
);
```

单一主键，表级约束
``` sql
CREATE TABLE t_user(
  id int(10),
  name varchar(32),
  primary key(id)  
);
```

复合主键（联合主键），表级约束 
``` sql
CREATE TABLE t_user(
  id int(10),
  name varchar(32),
  primary key(id,name)  
);
```

## 自增约束
```sql
auto_increment
```

```sql
CREATE TABLE t_user(
  id int(10) primary key auto_increment,
  name varchar(32)  
);
```

## 唯一约束
``` sql
unique
```

列级约束
``` sql
CREATE TABLE t_user(
  id int(10) unique,
  name varchar(32)
);
```

表级约束
``` sql
CREATE TABLE t_user(
  id int(10),
  name varchar(32),
  unique(id,name)
);
```

## 非空约束
``` sql
not null
```

``` sql
CREATE TABLE t_user(
  id int(10) unique not null,
  name varchar(32)
);
```

## 默认约束
``` sql
default
```

``` sql
CREATE TABLE t_user(
  id int(10) unique not null,
  name varchar(32) default 'zhangsan'
);
```

## 外键约束
> 注意：被引用外键的字段一定得是 `主键约束`

``` sql
constraint 外键名 foreign key(约束id) references 外键表（外键表id）
```

``` sql
-- 用户信息表
CREATE TABLE t_user_info(
  id int(10) primary key auto_increment,
  gender tinyint(1),
  address varchar(255) default '',
  age int(20)
);

-- 用户主表
CREATE TABLE t_user(
  id int(10) primary key auto_increment,
  user_id int(10) unique not null,
  name varchar(32) default 'zhangsan',
  constraint uid foreign key(id) references t_user_info(id)
);
```