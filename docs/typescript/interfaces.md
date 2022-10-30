# 接口

接口能够让我们编写结构式代码的时候更加具有规范化

### 接口的使用

```ts
interface user {
  name: string
  age: number
}

class User implements user {
  public name: string
  public age: number
}

let zhangsan: user = {
  name: "张三",
  age: 18,
}
```

### 接口的继承

```ts
interface name {
  name: string
}
interface age {
  age: number
}
interface user extends name, age {
  sayHello(): void
}
```

### 接口的合并

```ts
interface user {
  name: string
}
interface user {
  age: number
}
interface user {
  sayHello(): void
}

// 上面这种方式最终会合并为下面这种
interface user {
  name: string
  age: number
  sayHello(): void
}
```
