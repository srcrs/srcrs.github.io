---
title: Go并发机制
date: 2022-05-05
category: Note
tags:
   - go
permalink: /posts/202205051.html
---

在大部分语言中，并发机制都是通过锁来实现的，Go语言也同样。

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	counter := 0
	for i := 0; i < 5000; i++ {
		go func() {
			counter++
		}()
	}
	time.Sleep(1 * time.Second)
	fmt.Println(counter)
}
```

通过go关键字可以开启一个协程，上面这段程序运行的结果是不固定的。counter是一个共享变量，有5000个函数去争夺，产生了并发问题。

使用mutex解决并发问题，但此种方式耗时较长。如果把中间sleep去掉，fmt打印较快仍然会产生并发问题。

```go
import (
	"fmt"
	"sync"
	"time"
)

func main() {
	counter := 0
	var mutex sync.Mutex
	for i := 0; i < 5000; i++ {
		go func() {
			defer func() {
				mutex.Unlock()
			}()
			mutex.Lock()
			counter++
		}()
	}
	time.Sleep(1 * time.Second)
	fmt.Println(counter)
}
```

使用waitGroup+mutex解决并发问题

```go
package main

import (
	"fmt"
	"sync"
)

func main() {
	counter := 0
	var wg sync.WaitGroup
	var mutex sync.Mutex
	for i := 0; i < 5000; i++ {
		wg.Add(1)
		go func() {
			defer func() {
				mutex.Unlock()
			}()
			mutex.Lock()
			counter++
			wg.Done()
		}()
	}
	wg.Wait()
	fmt.Println(counter)
}
```

## CSP并发机制

CSP vs Actor

- Actor直接通讯，CSP模式则是通过Channel进行通讯，耦合度更低。

- Go中channel是由容量限制并且独立于处理Groutine，而Actor模式中的mailbox容量是无限的，接受进程也总是被动的处理消息。

### channel基本机制

- 通讯双方必须在channel中

- 异步方式，跟队列类似   

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println(service())
	OtherTask()
}

func OtherTask() {
	fmt.Println("working on something else")
	time.Sleep(time.Microsecond * 100)
	fmt.Println("Task is done")
}
```

```go
s
```