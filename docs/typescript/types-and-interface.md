# type 和 interface

关于 `type` 和 `interface` 的区别

### 都能做到，使用方式不同

```ts
// 类型定义
// interface
interface user {
  name: string
  age: number
  sayHello(): string
}

// type
type user = {
  name: string
  age: number
  sayHello(): string
}
```

```ts
// 继承
// interface
interface name {
  name: string
}
interface age {
  age: string
}
interface user extends name, age {
  sayHello(): string
}

// type
type name = string
type age = number
type user = {
  name: name
  age: age
  sayHello(): string
}
```

```ts
// 合并
// interface
interface user {
  name: string
}
interface user {
  age: number
}
interface user {
  sayHello(): void
}

// type
type name = {
  name: string
}
type age = {
  age: number
}
type user = name &
  age & {
    sayHello(): string
  }
```

### type 能做到 interface 不能的

```ts
// type 可以定义基本类型
type name = string
// type 可以使用typeof获取值
type name = typeof name
// type可以定义多类型
type sex = string | number
//type 可以定义元组
type sex = [string, number]
```

### 混合使用

```ts
type name = {
  name: string
}
interface user extends name {}
const u: user = {
  name: "",
}
```
