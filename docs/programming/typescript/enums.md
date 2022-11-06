# 枚举

```ts
// 不设置值默认从 0 开始

enum sex {
  male,
  female,
}

// 0 , 1
```

```ts
// 从1开始

enum sex {
  male = 1,
  female,
}

// 1 ， 2
```

```ts
// 自定义值

enum sex {
  male = "男",
  female = "女",
}

// 男 ， 女
```
