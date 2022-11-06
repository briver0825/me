# DQL

`DQL` 英文全称 Data Query Language （数据查询语言），用来对数据库中表的数据记录进行查询操作。

## 基础查询

- 查询所有信息

下面两条查询语句效果一样，但是 `*` 的查询效率更低

```sql
SELECT * FROM user;
SELECT id,name,age,address FROM user;
```

- 查询并取别名

```sql
SELECT id as '用户id',name as '名称',age as '年龄',address as '地址' FROM user;
```

- 查询不重复记录

```sql
SELECT DISTINCT name FROM user;
```

## 条件查询

- 查询用户 id 等于 1 的用户

```sql
SELECT * FROM user WHERE id = 1;
```

- 查询用户 id 不等于 1 的用户

```sql
SELECT * FROM user WHERE id != 1;
SELECT * FROM user WHERE id <> 1;
```

- 查询用户 id 在某个区间的用户

```sql
SELECT * FROM user WHERE id >= 10 and id <= 20;
SELECT * FROM user WHere id BETWEEN 10 AND 20;
```

- 查询在列表中的用户

```sql
SELECT * FROM user WHERE id IN(1,2,3);
SELECT * FROM user WHERE id = 1 or id = 2 or id = 3;
```

- 查询不在列表中的用户

```sql
SELECT * FROM user WHERE id NOT IN(1,2,3);
```

- 模糊查询

```sql
SELECT * FROM user WHERE name LIKE '张%';
SELECT * FROM user WHERE name LIKE '张_';
```

## 聚合函数

| 函数  | 功能     |
| ----- | -------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |

- 统计用户总数

```sql
SELECT count(*) '用户总数' FROM user;
```

- 查找表中最大年龄

```sql
SELECT max(age) FROM user;
```

- 求用户平均年龄

```sql
SELECT avg(age) '平均年龄' FROM user;
```

## 分组查询

- 根据性别分组,统计男性用户和女性用户的数量

```sql
SELECT gender '性别' , count(gender) '用户数量' FROM user GROUP BY gender;
```

- 根据性别分组,统计男性用户和女性用户的平均年龄

```sql
SELECT gender '性别' , avg(age) '用户年龄' FROM user GROUP BY gender;
```

- 查询年龄小于 45，并根据地址分组，获取数量大于 3 的工作地址

```sql
SELECT address '用户住址',count(*) '用户数量' FROM user WHERE age < 45 GROUP BY address HAVING count(*) > 3;
```

## 排序查询

- 根据用户 id 进行升序排序

```sql
SELECT * FROM user ORDER BY id ASC;
```

- 根据用户年龄进行降序排序

```sql
SELECT * FROM user ORDER BY age DESC;
```

- 根据用户年龄进行降序排序,如果年龄一样再根据 id 进行升序排序

```sql
SELECT * FROM user ORDER BY age DESC , id ASC;
```

## 分页查询

- 查询 1 页用户数据，每页展示 10 条数据

```sql
SELECT * FROM user LIMIT 0 , 10;
SELECT * FROM user LIMIT 10;
```

- 查询 2 页用户数据，每页展示 10 条数据

```sql
SELECT * FROM user LIMIT 10 , 10;
```
