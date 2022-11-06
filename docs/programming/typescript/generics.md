# 泛型

泛型可以让我们定义的类型更加灵活

### 泛型的使用

```ts
function fn(arg: number): number {
  return arg
}
function fn(arg: string): string {
  return arg
}
function fn(arg: boolean): boolean {
  return arg
}
```

上面这种做法非常的不灵活，当我们需要实现一个函数作用的时候，你希望他支持很多的类型，那么你可以使用泛型

```ts
// 泛型搞定
function fn<T>(arg: T): T {
  return arg
}
```

class 使用

```ts
class User<T> {
  constructor(public name: T) {}
}

const user = new User<string>("张三")
const root = new User<number>(1007)
```

### 泛型的继承

```ts
interface user {
  name: string
  age: number
}

class User<T extends user> {
  constructor(public user: T) {}
}

const user = new User<user>({ name: "张三", age: 18 })
```
