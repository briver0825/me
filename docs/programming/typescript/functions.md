# 函数

### 参数类型

```ts
function sum(a: number, b: number) {}

const sum = (a: number, b: number) => {}
```

### 返回值类型

```ts
function sum(a: number, b: number): void {}

const sum = (a: number, b: number): void => {}
```

### 可选参数

当我们认为参数不是必要传的时候我们可以使用`?`

```ts
const sum = (a: number, b: number, c?: number): void => {}
```

### 默认参数

```ts
const sum = (a: number, b: number, c: number = 5): void => {}
```

### 剩余参数

```ts
const sum = (a: number, b: number, ...restList: number[]): void => {}
```

### Type 关键字

`type` 关键字能让我们提取一个公共类型

```ts
// before
const createUser = (user: { name: string; age: number }): void => {}
const updateUser = (user: { name: string; age: number }): void => {}

// after
type userType = {
  name: string
  age: number
}

const createUser = (user: userType): void => {}
const updateUser = (user: userType): void => {}
```
