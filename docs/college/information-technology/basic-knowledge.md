# 第一章、计算机基础知识

## 计算机的起源

ENIAC

- 世界上第一台计算机
- 电子数字积分计算机
- 于 **1946** 年 2 月在美国的宾西法尼亚大学正式投入运行，采用 **十进制**

> 1946 可以记为 “你就是 6”

图灵

- 图灵机
- 可计算机性理论
- 计算机科学之父，人工智能之父

冯·诺依曼

- 现代计算机之父
- 提出 **冯·诺依曼体系结构**
  - 控制器
  - 存储器
  - 运算器
  - 输入设备
  - 输出设备
- 研制出了使用 **存储程序** 思想的 **EDVAC**
- **存储程序** 是 冯·诺依曼思想的核心
- 以 **存储程序** 为基础的计算机统称为**冯·诺依曼机**
- 提出的工作原理： **存储程序和程序控制**

莱布尼茨

- 二进制

## 计算机的发展阶段

|  分代  |        电子元器件        | 运算速度（每秒） |         软件         |        应用        |
| :----: | :----------------------: | :--------------: | :------------------: | :----------------: |
| 第一代 |          电子管          |      几千次      |  机器语言、汇编语言  | 军事领域、科学计算 |
| 第二代 |          晶体管          |     几十万次     |       高级语言       | 数据处理、工业控制 |
| 第三代 |     中小规模集成电路     |     几百万次     | 操作系统、会话式语言 | 文字处理、图形处理 |
| 第四代 | 大规模、超大规模集成电路 | 上亿次甚至亿亿次 |  数据库、计算机网络  |   社会的各个方面   |

- 1956 开始研制计算机
- 1958 第一台电子管计算机
- 1973 集成电路计算机
- 1983 **银河 1**
- 至今 **天河、曙光、深腾、神威**

> 超级计算机： 银河 1、天河、曙光、深腾、神威

## 计算机的特点

> 摩尔定律： 集成电路上可以容纳的晶体管数目在大约每经过 18 个月到 24 个月便会增加一倍

- 运算速度 **快**： 电子器件
- 计算精度 **高**： 可靠性很高，差错率极低
- 存储容量 **大**： 计算机的存储性是计算机区别于其他计算工具的 **重要特征**
- 具有逻辑判断能力： 分析命题是否成立，并可根据命题成立与否采取相应的对策
- 工作自动化： 根据人们预先编制的 **程序** 自动 **控制** 执行的
- 通用性强： 应用于各种领域的基础

## 计算机的分类

|                划分依据                |                  分类                  |
| :------------------------------------: | :------------------------------------: |
|                处理对象                |   模拟计算机、数字计算机、混合计算机   |
|                  用途                  |         专用计算机和通用计算机         |
| 性能指标（字长、运算速度、存储容量等） | 巨型机、大型机、小型机、微型机和工作站 |

## 计算机的应用

- **科学运算（数值计算）** ：如航天工程、气象、地震、核能技术、石油勘探、密码解译
- **信息处理（数据处理、事务处理）**
- 过程控制（实时控制、自动控制）
- 计算机辅助系统
- 人工智能
- 网络应用
- 多媒体技术
- 嵌入式系统

计算机辅助系统分类：

|        类别        | 简写 |                   单词                   |
| :----------------: | :--: | :--------------------------------------: |
|   计算机辅助设计   | CAD  |          Computer Aided Design           |
|   计算机辅助制造   | CAM  |       Computer Aided Manufacturing       |
|   计算机辅助测试   | CAT  |          Computer Aided Testing          |
|   计算机辅助教学   | CAI  |      Computer Assisted Instruction       |
|   计算机辅助教育   | CBE  |         Computer Based Education         |
|   计算机辅助工程   | CAE  |        Computer Aided Engineering        |
|   计算机管理教学   | CMI  |      Chartered Management Institute      |
| 计算机辅助工艺规划 | CAPP |     Computer Aided Process Planning      |
| 计算机集成制造系统 | CIMS | Computer Integrated Manufacturing System |

## 计算机的发展趋势

- 巨型化
- 微型化
- 网络化
- 智能化

## 计算机工作原理

- 指令的概念

  - **指令** 是指计算机执行某种操作的 **命令**，它由一串**二进制**数码组成
  - 所有**指令集合**成为计算机的**指令系统**。

- 指令的组成

  - 操作码 ： 机器执行上面操作
  - 地址码（操作数） ： 执行对象（具体数、存放位置）

- 指令的分类

  - 单地址指令
  - 双地址指令
  - 三地址指令

- 计算机工作过程
  - 取指令
  - 分析指令
  - 执行指令
  - 以上步骤执行完之后，指令计数器加一，为执行下一条指令做准备

## 计算机系统的组成

- CPU = 运算器 + 控制器
- 主机 = 运算器 + 控制器 + 存储器
- 外设 = 输入设备 + 输出设备
- 裸机： 未配置任何软件的计算机，它是计算机完成工作的物质基础
- 计算机系统
  - 硬件系统
    - 运算器：用于**控制**和**协调**计算机各部件自动、连续地执行各指令
    - 控制器：负责对信息进行**加工**和**运算**，它的速度决定了计算机的运算速度
    - 存储器： 分为**内存储器（主存储器）** 和 **外存储器（辅存储器）**
    - 输出设备
    - 输入设备
  - 软件系统
    - 系统软件
    - 应用软件
- 存储器
  - 只读存储器（RAM）
    - 只能读不能写
    - **断电后不消失**，可靠性高
    - 主要用来存放 **BIOS**（基本输入输出系统）
  - 随机存储器（ROM）
    - 可读可写
    - **断电会消失**
    - **微机内存（运行内存）** 一般指 RAM
    - 又分为 **静态随机存储器（SRAM）** 和 **动态随机存储器（DRAM）**
  - 高速缓存（Cache）：协调 CPU 和内存的速度差
  - 外存：可以长期保存，**不可和 CPU 直接交换数据**

## 计算机软件系统
- 分为 **系统软件** 和 **应用软件**
- 软件是计算机运行所需的**程序**、**数据**和有关**文档**的总和
- 操作系统是直接运行在裸机上最基本的系统软件

## 程序设计基础
- 程序 = 算法 + 数据结构
- 算法的主要特征： **有穷性**、**确定性**、**可行性**
- 程序设计语言：**机器语言**、**汇编语言**、**高级语言**
- 低级语言 = 机器语言 + 汇编语言
- **源程序**指用高级语言编写的程序
- 高级语言两大类：解释型、编译型

## 微型计算机
- 分类
  - 单片机
  - 单板机
  - PC（个人计算机）
- 性能指标
  - 主频：CPU的**时钟频率（工作频率）**，单位 **赫兹（HZ）**
  - 字长：CPU一次能处理的二进制数据的位数
  - 存储容量
  - 存储周期
  - 运算速度：每秒执行指令的条数

## 计算机中信息的表示

> 计算机中都采用 **二进制**形式表示和处理

计算机采用二进制的原因

- 易于表示，技术实现简单
- 运算简单
- 适用于逻辑运算
- 可靠性高

进制记数制的概念

- 数码 ： 如果是 10 进制 0 ～ 9，如果是二进制 0 ～ 1
- 基数 ： 几进制
- 位权 ： 不同位置上的权值

```
十进制
数码 ： 0 1 2 3 4 5 6 7 8 9
基数 ： 10
位权 ： 1 10 100 1000 10000 ...
```

```
二进制
数码 ： 0 1 2 3 4 5 6 7 8 9
基数 ： 2
位权 ： 1 2 4 6 8 16 ...
```

常用的几种进制计数制

- 十进制 （D）0 ～ 9
- 二进制 （B）0 ～ 1
- 八进制 （O）0 ～ 7
- 十六进制（H） 0 1 2 3 4 5 6 7 8 9 A B C D E F

逻辑运算规则

- 与（AND）：

```
0 0 0 1
0 0 1 1
- - - -
0 0 0 1
```

- 或（OR）：

```
0 0 0 1
0 0 1 1
- - - -
0 0 1 1
```

- 非（NOT）：

```
0 0 0 1
1 1 1 0
```

- 异或（XOR）：
  > 相同为 0，不同为 1

```
0 0 1 1
0 0 1 0
- - - -
0 0 0 1
```

进制转换

- x 进制转换十进制

  > 位权展开求和：按位权展开，然后按照十进制规则进行求和计算，其结果就是转换后对应的十进制数

- 十进制转换 x 进制
  - 整数部分： 除基取余倒着连
  - 小数部分： 乘基取整正着连
