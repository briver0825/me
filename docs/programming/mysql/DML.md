# DML

`DML` 英文全称 Data Manipulation Language （数据操作语言），用来对数据库中表的数据记录进行增删改操作。

## INSERT

`INSERT` 语句可以对数据库中的表进行插入操作

- 给所有字段添加数据

```sql
INSERT INTO user VALUES(1,'张三');
```

- 给指定字段添加数据

```sql
INSERT INTO user (id,name) VALUES(1,'张三');
```

- 批量添加数据

```sql
INSERT INTO user VALUES(1,'张三'),(2,'李四'),(3,'王五');
INSERT INTO user (id,name) VALUES(1,'张三'),(2,'李四'),(3,'王五');
```

## UPDATE

`UPDATE` 语句可以对数据库中的表进行修改操作

- 批量修改数据

```sql
UPDATE user SET name = '李四' , age = 18;
```

- 修改指定数据

```sql
UPDATE user SET name = '李四' , age = 18 WHERE id = 1;
```

## DELETE

`DELETE` 语句可以对数据库中的表进行删除操作

- 批量删除数据

```sql
DELETE FROM user;
```

- 删除指定数据

```sql
DELETE FROM user WHERE id = 1;
```
