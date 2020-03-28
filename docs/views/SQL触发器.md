---
title: SQL触发器
date: 2020-03-28
categories:
 - Note
tags:
 - 数据库
---

:::tip
实现数据库的动态完整性，能够避免一些不必要的错误。例如当一个人的学号修改了，则相应的选课表等基本表的学号也要修改。
:::

<!-- more -->

## 示例1

设计一个触发器当进行Teacher表更新元组时，使其工资只能升不能降。

```sql
create trigger teacher_chgsal
#定义触发器的名字
before updata of salary
#触发条件
on teacher
#对应的表
referencing new x, old y
#定义变量
for each row when(x.salary < y.salary)
begin 
raise_application_reeor(-20003,'invalid salary on updata');
#Oracle报错函数
end;
```

## 示例2

假设student(S#,Sname,SumCourse),SumCourse为该同学已学习的课程的门数，初始值为0，以后没选秀一门课都要对其增1。设计一个触发器自动完成上述功能。

```sql
create trigger sumc 
after insert 
#触发条件
on sc
#对应的表
referencing new newi
#定义变量
for each row
begin
  update student set SumCourse = SumCourse + 1
  where S# = :newi.S#;
  #相应动作
end;
```

## 示例3

假设student(S#,Sname,Sage,Ssex,Sclass)中某一学生药变更其主码S#的值，如使其原来的98030101变更为99030101，此时sc表中该同学已选课的S#也需要随其改变。

```sql
create trigger updS#
#触发器名
after update of S#
#触发条件
on student
#相应的表
referencing old oldi,new newi
#定义变量
for each row
begin
  update sc set S# = newi.S# where S# = :oldi.S#;
  #动作
end
```

## 示例4

假设student(S#,Sname,SumCouse)，当删除某一同学S#时，该同学的所有选课也都要删除。

```sql
create trigger delS#
after delete
on Student
referncing old oldi
for each row
begin
  delete sc where S# = :oldi.S#;
end;
```

## 示例5

假设student(S#,Sname,SumCourse)，当删除某一同学S#时，该同学的所有选课中的S#都要置为空值。

```sql
create trigger delS# 
after delete
on Student
referencing old oldi
for each row
begin
  update sc set S# = Null where S# = :oldi.S#;
end;
```

## 示例6

假设Dept(D#,Dname,Dean)，而Dean一定是该系教师Teacher(T#,Tname,D#,Salary)中工资最高的教师。

```sql
create trigger upddean 
before update of Dean
on Dept
referencing old oldi,new newi
for each row when(dean not in (
    select Tname from Teacher where D# = :newi.D#
    and salary >= all (select salary from Teacher where D# = :newi.D#)))
begin
  raise_application_error(-20003,'invalid Dean on update');
end;
```