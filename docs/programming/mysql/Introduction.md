# mysql 介绍

## 快速生成 user 表

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名称',
  `age` int(10) NOT NULL COMMENT '用户年龄',
  `gender` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户性别',
  `address` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户居住地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 45 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

INSERT INTO `user` VALUES (1, '雷恩加尔', 18, '男', '以绪塔尔');
INSERT INTO `user` VALUES (2, '妮蔻', 19, '女', '以绪塔尔');
INSERT INTO `user` VALUES (3, '墨菲特', 23, '男', '以绪塔尔');
INSERT INTO `user` VALUES (4, '潘森', 41, '男', '巨神峰');
INSERT INTO `user` VALUES (5, '索拉卡', 20, '女', '巨神峰');
INSERT INTO `user` VALUES (6, '蕾欧娜', 30, '女', '巨神峰');
INSERT INTO `user` VALUES (7, '艾希', 23, '女', '弗雷尔卓德');
INSERT INTO `user` VALUES (8, '泰达米尔', 30, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (9, '布隆', 34, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (10, '奥拉夫', 45, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (11, '乌迪尔', 41, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (12, '盖伦', 35, '男', '德玛西亚');
INSERT INTO `user` VALUES (13, '赵信', 32, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (14, '薇恩', 26, '女', '弗雷尔卓德');
INSERT INTO `user` VALUES (15, '卢锡安', 27, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (16, '嘉文', 28, '男', '弗雷尔卓德');
INSERT INTO `user` VALUES (17, '波比', 26, '女', '弗雷尔卓德');
INSERT INTO `user` VALUES (18, '拉克丝', 24, '女', '弗雷尔卓德');
INSERT INTO `user` VALUES (19, '阿兹尔', 50, '男', '恕瑞玛');
INSERT INTO `user` VALUES (20, '内瑟斯', 53, '男', '恕瑞玛');
INSERT INTO `user` VALUES (21, '泽拉斯', 52, '男', '恕瑞玛');
INSERT INTO `user` VALUES (22, '阿木木', 27, '男', '恕瑞玛');
INSERT INTO `user` VALUES (23, '岩雀', 23, '女', '恕瑞玛');
INSERT INTO `user` VALUES (24, '赫卡里姆', 60, '男', '暗影岛');
INSERT INTO `user` VALUES (25, '卡尔萨斯', 26, '男', '暗影岛');
INSERT INTO `user` VALUES (26, '卡莉丝塔', 19, '女', '暗影岛');
INSERT INTO `user` VALUES (27, '锤石', 98, '男', '暗影岛');
INSERT INTO `user` VALUES (28, '菲兹', 66, '男', '比尔吉沃特');
INSERT INTO `user` VALUES (29, '普朗克', 47, '男', '比尔吉沃特');
INSERT INTO `user` VALUES (30, '塔姆', 76, '男', '比尔吉沃特');
INSERT INTO `user` VALUES (31, '派克', 39, '男', '比尔吉沃特');
INSERT INTO `user` VALUES (32, '提莫', 23, '女', '班德尔城');
INSERT INTO `user` VALUES (33, '崔丝塔娜', 21, '女', '班德尔城');
INSERT INTO `user` VALUES (34, '悠米', 15, '女', '班德尔城');
INSERT INTO `user` VALUES (35, '维迦', 69, '男', '班德尔城');
INSERT INTO `user` VALUES (36, '蒙多', 36, '男', '祖安');
INSERT INTO `user` VALUES (37, '吉格斯', 37, '男', '祖安');
INSERT INTO `user` VALUES (38, '亚索', 2, '男', '艾欧尼亚');
INSERT INTO `user` VALUES (39, '易', 25, '男', '艾欧尼亚');
INSERT INTO `user` VALUES (40, '李青', 18, '男', '艾欧尼亚');
INSERT INTO `user` VALUES (41, '德莱文', 30, '男', '诺克萨斯');
INSERT INTO `user` VALUES (42, '德莱厄斯', 20, '男', '诺克萨斯');
INSERT INTO `user` VALUES (43, '塞恩', 98, '男', '诺克萨斯');
INSERT INTO `user` VALUES (44, '卡特琳娜', 24, '女', '诺克萨斯');

SET FOREIGN_KEY_CHECKS = 1;

```

## 快速生成 sql50 题数据库表

```sql
#学生表
CREATE TABLE `Student`(
`s_id` VARCHAR(20),
`s_name` VARCHAR(20) NOT NULL DEFAULT '',
`s_birth` VARCHAR(20) NOT NULL DEFAULT '',
`s_sex` VARCHAR(10) NOT NULL DEFAULT '',
PRIMARY KEY(`s_id`)
);

#课程表
CREATE TABLE `Course`(
`c_id` VARCHAR(20),
`c_name` VARCHAR(20) NOT NULL DEFAULT '',
`t_id` VARCHAR(20) NOT NULL,
PRIMARY KEY(`c_id`)
);

#教师表
CREATE TABLE `Teacher`(
`t_id` VARCHAR(20),
`t_name` VARCHAR(20) NOT NULL DEFAULT '',
PRIMARY KEY(`t_id`)
);

#成绩表
CREATE TABLE `Score`(
`s_id` VARCHAR(20),
`c_id` VARCHAR(20),
`s_score` INT(3),
PRIMARY KEY(`s_id`,`c_id`)
);

#插入学生表测试数据
insert into Student values('01' , '赵雷' , '1990-01-01' , '男');
insert into Student values('02' , '钱电' , '1990-12-21' , '男');
insert into Student values('03' , '孙风' , '1990-05-20' , '男');
insert into Student values('04' , '李云' , '1990-08-06' , '男');
insert into Student values('05' , '周梅' , '1991-12-01' , '女');
insert into Student values('06' , '吴兰' , '1992-03-01' , '女');
insert into Student values('07' , '郑竹' , '1989-07-01' , '女');
insert into Student values('08' , '王菊' , '1990-01-20' , '女');

#课程表测试数据
insert into Course values('01' , '语文' , '02');
insert into Course values('02' , '数学' , '01');
insert into Course values('03' , '英语' , '03');

#教师表测试数据
insert into Teacher values('01' , '张三');
insert into Teacher values('02' , '李四');
insert into Teacher values('03' , '王五');

#成绩表测试数据
insert into Score values('01' , '01' , 80);
insert into Score values('01' , '02' , 90);
insert into Score values('01' , '03' , 99);
insert into Score values('02' , '01' , 70);
insert into Score values('02' , '02' , 60);
insert into Score values('02' , '03' , 80);
insert into Score values('03' , '01' , 80);
insert into Score values('03' , '02' , 80);
insert into Score values('03' , '03' , 80);
insert into Score values('04' , '01' , 50);
insert into Score values('04' , '02' , 30);
insert into Score values('04' , '03' , 20);
insert into Score values('05' , '01' , 76);
insert into Score values('05' , '02' , 87);
insert into Score values('06' , '01' , 31);
insert into Score values('06' , '03' , 34);
insert into Score values('07' , '02' , 89);
insert into Score values('07' , '03' , 98);

```
