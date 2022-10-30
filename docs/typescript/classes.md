# 类

### 访问修饰符

| 类型      | 作用     | 特点                   |
| --------- | -------- | ---------------------- |
| public    | 公共的   | 可以随意调用           |
| private   | 私有的   | 只有自身可以调用       |
| protected | 受保护的 | 只有自身和子类可以调用 |
| readonly  | 只读     | 只能读取不能修改       |
| static    | 静态的   | 只能从构造函数上获取   |

访问修饰符的使用类似于大多数强类型语言

```ts
class User {
  public name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const user = new User("张三", 18)
// 这里name属性时公共的，可以直接获取
user.name
// 由于age是私有属性只能内部获取
user.age // 报错
```

### 继承

```ts
class Person {
  protected name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class User {
  constructor(name: string, age: number) {
    super(name, age)
  }
  public sayHello(): string {
    return `hello,My name is ${this.name},I am ${this.age}`
  }
}

const user = new User("张三", 18)
// name 和 age 是 protected 只能是子类获取
user.name //报错
user.age //报错
```

### 抽象类

和大多数强类型语言一样，ts 有抽象类这个概念，抽象类类似于接口，不能实例化，使用 `abstract` 关键字

```ts
abstract class Person {
  public name: string
  protected age: number
  public abstract sayHello(): string

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class User extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
  public sayHello(): string {
    return `hello,My name is ${this.name},I am ${this.age}`
  }
}

const user = new User("张三", 18)
```

### 小技巧

优化代码，下面两种方式是等同的

```ts
// befor
class User {
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// after
class User {
  constructor(public name: string, public age: number) {}
}
```
