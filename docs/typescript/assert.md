# 断言

在没有较好的类型推断并且开发者更了解这个变量的类型时可以使用断言

### 使用方式

```ts
// 方式一  as  关键字
let a: any = 123
let b = a as string

// 方式二  <>  语法
let a: any = 123
let b = <string>a
```

### const 断言

`const` 关键字会将 `=` 后面的值作为变量类型

```ts
// 使用了 const 关键字之后，变量类型会变为 18
const age = 18
let age = 18 as const // 同样的效果
```

当 `as const` 遇上 数组

```ts
// 他会将 数组类型 转换为 元组类型
let list = [1, "2"] as const
```
