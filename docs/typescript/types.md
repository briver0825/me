# type

`type` 也可以来进行约束变量类型，类似于`interface`

### type 的使用

```ts
type user = {
  name: string
  age: number
}

type name = string
type fn = (a: number, b: number) => void
```

### type 的继承

```ts
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
