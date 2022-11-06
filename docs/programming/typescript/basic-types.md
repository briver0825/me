# 基础类型

| 类型      | 作用         |
| --------- | ------------ |
| number    | 数字         |
| boolean   | 布尔值       |
| string    | 字符串       |
| object    | 对象         |
| undefined | 未定义       |
| null      | 空           |
| void      | 无效的       |
| any       | 任意         |
| unknown   | 未知的       |
| never     | 无法到达终点 |

### 使用

```ts
//基本使用
let num: number = 123
let str: string = 123
let b: boolean = true

//当然这么写也是没有问题的，因为在TS文件中他会自己进行类型推断
//为了代码的可读性还是建议写上类型
let num = 123
let str = 123
let b = true
```

### 普通类型赋值

变量赋值必须使用相同的类型

```ts
//正确
let a: number = 1
let b: number = a

// 错误
let a: number = 1
let b: string = a
```

### 对象赋值

```ts
let user: {
  name: string
  age: number
} = {
  name: "张三",
  age: 18,
}
```

### 数组

```ts
// 一个number类型的数组
let list: number[] = [1, 2, 3]

// 一个number或string类型的数组
let list: (number | string)[] = [1, 2, "aaa"]

// 当然还可以使用泛型来声明
let list: Array<number> = [1, 2, 3]
let list: Array<number, string> = [1, 2, "aaa"]
```

### 元组

如果你确定数组中具体位置变量的类型，那么你可使用元组来进行约束

```ts
let list: [number, string] = [123, "aaa"]
```

### any

any 类型表示任意类型，当你不进行类型约束的时候可以使用这个类型

```ts
// 一个任意类型的数组
let list: any[] = [1, true, "aaa"]
```
