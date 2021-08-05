---
title: 使用PHPUinit进行单元测试
date: 2021-06-27
category: Note
tags:
    - 单元测试
permalink: /posts/202106271.html
---

在过去写代码的过程中，很少会去自己写一些单元测试的case，通常就是用输出、打印的方式人工确认数据是否正确。在工作过程中，遇到的代码多且杂，且容易忘，导致在修改的时候，会很害怕，但是有了测试的case，这一切将会变的非常的容易。

```php
// 判断arg1和arg2是否相等
$this->assertEquals(arg1, arg2);
// 判断arg1和arg2是否相等
$this->assertSame(arg1, arg2);
// 判读x是否为空
$this->assertEmpty(arg);
// 测试之间的依赖关系
@depends 方法名
// 判断arg是否为真
$this->assertTrue(arg);
// 数据供给器
@dataProvider 方法名
public function additionProvider()
{
    return [
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 2]
    ];
}
// 以迭代器方式提供数据
return new CsvFileIterator('data.csv')
// 判断类是否可实例
$this->assertInstanceOf();
```

## 视频教程

[使用 PHPUnit 进行单元测试](https://www.youtube.com/watch?v=cQucsmbOkpE&list=PLfdtiltiRHWGXSggf05W-pJbD47-_d8bJ)