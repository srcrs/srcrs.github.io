---
tags:
- sql
title: SQL的with使用
date: 2021-10-16 12:00:00 +0000
category:
- Note
permalink: "/posts/202110161.html"

---
sql在此之前的联表查询，都是写在一条语句中，两个表的阅读还可以，但是上升到四五个表的时候，阅读性就会差很多，此时with语句就非常好用了。

使用的场景是在metabase中做数据展示、数据监控。

先分别在每一张表中，查到所需要的数据集，然后再去联表查。

```sql
with 

a as (
select 
concat('', tid) tid, 
concat('', oid) oid, 
get_json_object(jdp_response, '$.refund_get_response.refund.sid') as expressno, 
refundid 
from third_refund_item_tmall 
where refundid!=0 and get_json_object(jdp_response, '$.refund_get_response.refund.good_status')!='BUYER_NOT_RECEIVED' 
order by modified desc
),

b as (
select id as refundid,returnid from refund where sellid='tmall'
),

c as (
select id as returnid, orderid, expressno from bbt_return where sellid='tmall' and stat=0
)

select * from a, b, c where a.refundid=b.refundid and b.returnid=c.returnid and a.expressno!=c.expressno and c.expressno='';
```