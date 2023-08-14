# 基础语法

## Hello World
```go
package main

func main() {
	print("Hello World!")
}
```

## String 的长度
- string 的长度很特殊
    - 字节长度：和编码无关，用 `len(str)` 函数获取
    - 字符数量：和编码有关，用编码库来计算

```go
package main

import "unicode/utf8"

func main() {
	println(len("你好"))                    // 6
	println(len("Hello"))                  // 5
	println(utf8.RuneCountInString("你好")) // 2
}
```

## 变量  
```go
package main

var Global = "全局变量"

var local = "包变量"

func main() {
	var a int = 1
	print(a)

	b := 2
	print(b)
}  
```

## 数组
```go
package main

import "fmt"

func main() {
	//len: 数组长度
	//cap：数组容量
	// 初始化一个长度为3的数组
	var arr1 [3]int
	fmt.Printf("len:%d, cap:%d\n", len(arr1), cap(arr1))

	// 初始化一个长度为3的数组，并赋值
	arr2 := [3]int{1, 2, 3}
	fmt.Printf("%d", arr   2[0])

	// 自动声明长度
	arr3 := [...]int{4, 5, 6}
	fmt.Printf("%v", arr3)
}
```

## 切片
```go
package main

import "fmt"

func main() {
	// len: 3, cap: 3
	s1 := []int{1, 2, 3}
	fmt.Printf("s1:%v, len:%d, cap:%d \n", s1, len(s1), cap(s1))

	// len: 3, cap: 4
	s2 := make([]int, 3, 4)
	fmt.Printf("s2:%v, len:%d, cap:%d \n", s2, len(s2), cap(s2))

	// 追加一个元素，没有触发扩容, len: 4, cap: 4
	s2 = append(s2, 1)
 
	// 追加一个元素，触发扩容, len:5, cap: 8
	s2 = append(s2, 2)
	fmt.Printf("%v len:%d, cap:%d\n", s2, len(s2), cap(s2))

	// 一个参数，len:4, cap:4
	s3 := make([]int, 4)
	fmt.Printf("s3:%v, len:%d, cap:%d", s3, len(s3), cap(s3))
}
```

## switch
```go
package main

import "fmt"

func main() {
	a := 1
	switch a {
	case 1:
		fmt.Printf("不需要 break")
	case 2, 3:
		fmt.Printf("匹配两个")
	default:
		fmt.Printf("default")
	}
}
```
  
## for
> Go 中没有 while 循环，只有 for 循环
```go
package main

import "fmt"

func main() {
	// 无限循环， go 中没有 while
	for {

	}

	// 普通循环
	for i := 0; i < 10; i++ {

	}

	// range

	arr := []int{1, 2, 3}
	for index, value := range arr {
		fmt.Printf("index:%v, value:%v", index, value)
	}
}
```
