---
title: SQL子查询与视图
date: 2020-03-27
category: Note
tags:
 - 数据库
---

## 某一元素是否包含某一集合成员

+ 基本语法

[not] in

+ 示例1

列出选修了001号课程的学生的学号和姓名

```sql
select S#,Sname From Student
Where S# in 
(select S# From SC Where C# = '001');
```

+ 示例2

求既学过001号课程，又学过002号课程的学生的学号。

```sql
select S# From SC
Where C# = '001' and S# in
(select S# From SC Where C# = '002');
```

+ 示例3

列出没学过李明老师讲授课程的所有同学姓名。

```sql
select Sname From Student
Where S# not in
(select S# From SC,Course C,Teacher T
Where T.Tname = '李明' and SC.C# = C.C# and T.T# = C.T#);
```

## 某一个集合是否包含另一个集合

+ 基本语法

some,all

+ 示例1

找出工资最低的教师姓名

```sql
select Tname From Teacher 
Where Salary <= all (select Salary From Teacher);
```

+ 示例2

找出001号课程成绩不是最高的所有学生的学号

```sql
select S# From SC
Where C# = '001' and Score < some (select Score From SC Where C# = '001');
```

+ 示例3

找出所有课程都不及格的学生姓名

```sql
select Sname From Student
Where 60 > all
(select Score From SC
Where S# = Student.S#);
```

+ 示例4

找出001号课程成绩最高的所有学生的学号

```sql
select S# From SC
Where C# = '001' and Score >= all
(select Score From SC Where C# = '001');
```

+ 示例5

找出98030101号同学成绩最低的课程号

```sql
select C# From SC
Where S# = '98030101' and Score <= all
(select Score From SC Where S# = '98030101');
```

+ 示例6

找出张三同学成绩最低的课程号

```sql
select C# From SC,Student S
Where Sname = '张三' and S.S# = SC.S# and
Score <= all(select Score From SC Where S# = S.S#);
```

## 测试集合存在和不存在

+ 基本语法

[not] Exists

+ 示例1

检索选修了赵三老师主讲课程的所有同学姓名。

```sql
select DISTINCT Sname From Student
Where exists
(select * From SC,Course,Teacher 
Where SC.C# = Course.C# and SC.S# = Student.S# and Course.T# = Teacher.T# and Tname = '赵三');
```

+ 示例2

检索学过001号教师主讲的所有课程的所有同学姓名。

```sql
select Sname From Student 
Where not exists
(select * From Course 
Where Course.T# = '001' and 
not exists
(select * From SC Where SC.S# = Student.S# and SC.C# = Course.C#));
```

+ 示例3

列出没学过李明老师讲授任何一门课程的所有同学姓名

```sql
select Sname From Student
Where not exists
(select * From Course,SC,Teacher 
Where Tname = '李明' and Course.T# = Teacher.T# and Course.C# = SC.C# and S# = Student.S#)
```

+ 示例4

列出至少学过98030101号同学学过所有课程的同学的学号。

```sql
select DISTINCT S# From SC SC1
Where not exists
(select * From SC SC2
Where SC2.S# = '98030101' and 
not exists
(select * From SC 
Where C# = SC2.C# and S# = SC1.S#));
```

元组演算表达（特征：全称量词和存在量词）

```yml
{t[S#]|t∈SC∧∀(u∈SC∧u[S#]='98030101')(∃(w∈SC)(w[S#]=t[S#]∧w[C#]=u[C#]))}
```

关系代数表达（选择，投影，乘除）

```yml
Πs#,c#(SC) ÷ Πc#(σs#='98030101'(SC))
```

+ 示例5

已知SPJ(Sno,Pno,Jno,Qty)，其中Sno供应商号，Pno零件号，Jno工程号，Qty数量，列出至少用了供应商S1供应的全部零件的工程号。

```sql
select DISTINCT Jno From SPJ SPJ1
Where not exists
(select * From SPJ SPJ2
Where SPJ2.Sno = 'S1' and
not exists (select * From SPJ SPJ3
Where PSJ3.Pno = SPJ2.Pno and SPJ3.Jno = SPJ1.Jno));
```

## 五个基本聚集函数

+ COUNT求个数

+ SUM求和

+ AVG求平均

+ MAX求最大

+ MIN求最小

## 分组查询

+ 示例1

求每一学生的平均成绩

```sql
select S#,AVG(Score) From SC Group by S#;
```

+ 示例2

求每一门课程的平均成绩

```sql
select C#,AVG(Score) From SC Group by C#;
```

## 分组过滤

+ 示例1

求不及格课程超过两门的同学的学号

```sql
select S# From SC
Where Score < 60
Group by S# Having Count(*) > 2;
```

+ 示例2

求有10人以上不及格的课程号

```sql
select C# From From SC 
Where Score < 60 Group by C# Having Count(*) > 10;
```

+ 示例3

求有两门课以上不及格课程同学的学号及其平均成绩

```sql
select S#,AVG(Score) From SC
Where S# in
(select S# From SC 
Where Score < 60
Group by S# Having Count(*) > 2)
Group by S#;
```

## 并运算

+ 基本语句

UNION

+ 示例1

求学过002号课的同学或学过003号课的同学学号

```sql
select S# From SC Where C# = '002'
UNION
select S# From SC Where C# = '003';
```

+ 示例2

已知两个表

Customers(CID,Cname,City,Discnt)
Agents(AID,Aname,City,Percent)

求客户所在的或者代理商所在的城市

```sql
select City From Customers
UNION
select City From Agents;
```

## 交运算

+ 基本语句

INTERSECT

求既学过002号课，又学过003号课的同学学号

```sql
select S# From SC Where C# = '002'
INTERSECT
select S# From SC Where C# = '003';
```

## 差运算

+ 基本语句

EXCEPT

+ 示例1

假定所有学生都有选课，求没学过002号课程的学生学号

```sql
select DISTINCT S# From SC
EXCEPT
select S# From SC Where C# = '002';
```

## 视图

### 创建视图

+ 示例1

定义一个视图CompStud为计算机系的学生，通过该视图可以将Student表中其他系的学生屏蔽掉

```sql
Create View CompStud As
(select * From Student
Where D# in(select D# From Dept
Where Dname = '计算机'));
```

+ 示例2

定义一个视图Teach为教师任课的情况，把Teacher表中的个人隐私方面的信息，如工资等信息屏蔽掉，仅反映其教哪门课及其学分等。

```sql
Create View Teach AS
(select T.Tname,C.Cname,Credit From Teacher T,Course C
Where T.T# = C.T#);
```

### 使用视图

可以像使用table一样使用视图。

+ 示例1

检索主讲数据库的教师姓名，可使用Teach

```sql
select T.Tname From Teach T
Where T.Cname = '数据库';
```

+ 示例2

检索计算机系的所有学生，可使用CompStud

```sql
select * From CompStud;
```

+ 示例3

检索计算机系的年龄小于20的所有学生，我们可使用CompStud

```sql
select * From CompStud 
Where Sage < 20;
```

+ 示例4

定义视图StudStat，描述学生的平均成绩、最高成绩，最低成绩等。

```sql
Create View StudStat(S#,Sname,Avgs,MinS,MaxS,CNT)
as (select S#,Sname,AVG(Score),MIN(Score),MAX(Score),Count(*)
From Student S,SC Where S.S# = SC.S#
Group by S.S#);
```

+ 示例5

基于视图StudStat检索某一学生平均成绩

```sql
select Sname,Avgs From StudStat Where 
Sname = '张三';
```

## 视图的更新

对于视图的更新最终要反映到基本表中，因此更新操作需要好好思考一下，什么数据可以更新，什么不可以更新。

总结以下几点

+ 如果视图的select目标列包含聚集函数，则不能更新。

+ 如果视图的select子句中使用了unique或distinct，则不能更新。

+ 如果视图包括了group by子句，则不能更新。

+ 如果视图中包括了经过算术表达式计算出来的列，则不能更新。

+ 如果视图是由单个表的列构成，但并没有包括主键，则不能更新。

## 撤销视图

```sql
Drop View view_name;
```

## delete和drop的使用

+ create对应drop

+ insert对应delete