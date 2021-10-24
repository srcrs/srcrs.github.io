---
category: Other
tags: []
title: 慢查SQL与一个BUG
date: 2021-10-22 12:00:00 +0000
permalink: "/posts/202110221.html"

---
## 慢查SQL

具体遇到的场景是这样：order表有a,b,c,d,e这五个字段，我想找到所有b=0，并且c>1634957358数据，b和c是索引，b在数据库中是无序的，表中数据一共有19万条，基于以上，我写出了如下sql

```sql
select * from order where b=0 and c>1634957358;
```

需要查找的数据量，如下。

```sql
select count(*) from order where b=0;
+----------+
| count(*) |
+----------+
|    48440 |
+----------+
1 row in set (0.13 sec)
```

```sql
select count(*) from order where c>1624078160;
+----------+
| count(*) |
+----------+
|   161147 |
+----------+
1 row in set (0.06 sec)
```

分析sql语句

```sql
desc select * from order where b=0 and c>1624078160 \G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: order
   partitions: NULL
         type: ref
possible_keys: b,c
          key: b
      key_len: 8
          ref: const
         rows: 60267
     filtered: 100.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)
```

其实最开始的时候c并没有索引，后来发现存在慢sql的情况，才给c字段加上，但是发现sql在执行的时候仍然没有使用。

有一篇文章分析SQL语句执行过程挺好的[一条SQL语句在MySQL中执行过程全解析](https://blog.csdn.net/weter_drop/article/details/93386581)，我的理解就是一条SQL语句执行的过程中只能命中一个索引，优化器会依靠对应的算法去选择，但是没有考虑到数据量的问题。

## 奇怪的bug

```php
if($v['content']['bill_type'] ?? '' == 'replace_bill') {
    unset($aftersale['messages'][$k]);
}
```

因为这个bug，我花费了半天去找问题，花一天去写解决这个bug的代码，之前一直以为都是第三方的bug，后来一个同事发现是这部分的代码就非常的尴尬，我到现在也没发现问题究竟在哪。