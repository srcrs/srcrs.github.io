---
title: 50道SQL练手
date: 2021-05-24
category: Note
tags:
   - sql
permalink: /posts/202105241.html
---

## 表结构及数据

```sql
create table student(
sid varchar(10),
sname varchar(10),
sage datetime,
sex nvarchar(10)
);
 
insert into student values('01' , '赵雷' , '1990-01-01' , '男');
insert into student values('02' , '钱电' , '1990-12-21' , '男');
insert into student values('03' , '孙风' , '1990-05-20' , '男');
insert into student values('04' , '李云' , '1990-08-06' , '男');
insert into student values('05' , '周梅' , '1991-12-01' , '女');
insert into student values('06' , '吴兰' , '1992-03-01' , '女');
insert into student values('07' , '郑竹' , '1989-07-01' , '女');
insert into student values('08' , '王菊' , '1990-01-20' , '女');

create table course(
cid varchar(10),
cname varchar(10),
tid varchar(10)
);
 
insert into course values('01' , '语文' , '02');
insert into course values('02' , '数学' , '01');
insert into course values('03' , '英语' , '03');
 
create table teacher(
tid varchar(10),
tname varchar(10)
);
 
insert into teacher values('01' , '张三');
insert into teacher values('02' , '李四');
insert into teacher values('03' , '王五');

create table sc(
sid varchar(10),
cid varchar(10),
score decimal(18,1)
);
 
insert into sc values('01' , '01' , 80);
insert into sc values('01' , '02' , 90);
insert into sc values('01' , '03' , 99);
insert into sc values('02' , '01' , 70);
insert into sc values('02' , '02' , 60);
insert into sc values('02' , '03' , 80);
insert into sc values('03' , '01' , 80);
insert into sc values('03' , '02' , 80);
insert into sc values('03' , '03' , 80);
insert into sc values('04' , '01' , 50);
insert into sc values('04' , '02' , 30);
insert into sc values('04' , '03' , 20);
insert into sc values('05' , '01' , 76);
insert into sc values('05' , '02' , 87);
insert into sc values('06' , '01' , 31);
insert into sc values('06' , '03' , 34);
insert into sc values('07' , '02' , 89);
insert into sc values('07' , '03' , 98);
```

## 题目：1

查询"01"课程比"02"课程成绩高的学生的信息及课程分数。

```sql
SELECT s.*, sc1.score
FROM student s, sc sc1, sc sc2
WHERE sc1.cid = '01'
	AND sc2.cid = '02'
	AND sc1.score > sc2.score
	AND s.sid = sc1.sid
	AND s.sid = sc2.sid;
```

## 题目：2

查询平均成绩大于等于60分的同学的学生编号和学生姓名和平均成绩。

```sql
SELECT sid, avg(score)
FROM sc
GROUP BY sid
HAVING avg(score) > 60;
```

## 题目：3

查询所有同学的学号、姓名、选课数、总成绩。

```sql
SELECT s.sid, s.sname, count(sc.cid)
	, sum(sc.score)
FROM student s
	LEFT JOIN sc ON s.sid = sc.sid
GROUP BY s.sid;
```

我使用的是最新版的mysql8.0.25版本，执行上述代码遇到了一个莫名其妙的错误。

```sql
ERROR 1055 (42000): Expression #2 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'my.s.sname' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
```

执行下面两个sql就能解决，但是退出后还要重新输入。

```sql
set global sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
set session sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
```


## 题目：4

查询姓“李”的老师的个数。

```sql
SELECT count(tid)
FROM teacher
WHERE tname LIKE '李%';
```

## 题目：5

查询没学过“张三”老师课的同学的学号、姓名。

```sql
SELECT s.sid, s.sname
FROM student s
	LEFT JOIN sc
	ON sc.sid = s.sid
		AND sc.cid IN (
			SELECT cid
			FROM course c, teacher t
			WHERE t.tname = '张三'
				AND t.tid = c.tid
		)
GROUP BY sc.sid
HAVING count(sc.cid) = 0;
```

## 题目：6

查询学过“01”并且也学过编号“02”课程的同学的学号、姓名。

```sql
SELECT s.sid, s.sname
FROM sc, student s
WHERE sc.sid = s.sid
	AND sc.cid = '01'
	AND s.sid IN (
		SELECT sid
		FROM sc
		WHERE sc.cid = '02'
	);
```

## 题目：7

查询学过“张三”老师所教的所有课的同学的学号、姓名。

```sql
SELECT s.sid, s.sname, c.cid, c.cname
FROM student s, course c, sc
WHERE sc.sid = s.sid
	AND sc.cid = c.cid
GROUP BY s.sid
HAVING count(s.sid) = (
	SELECT count(c.cid)
	FROM teacher t, course c
	WHERE t.tid = c.tid
);
```

## 题目：8

查询课程编号“01”的成绩比课程编号“02”课程低的所有同学的学号、姓名。

```sql
SELECT s.sid, s.sname
FROM (student s, sc s1)
	JOIN sc s2
	ON s1.sid = s2.sid
		AND s1.cid = '01'
		AND s2.cid = '02'
		AND s1.score < s2.score
WHERE s.sid = s1.sid;
```

## 题目：9

查询所有课程成绩小于60分的同学的学号、姓名。

```sql
SELECT s.sid, s.sname
FROM student s
	LEFT JOIN sc ON s.sid = sc.sid
GROUP BY s.sid
HAVING max(sc.score) < 60;
```

## 题目：10

查询没有学全所有课的同学的学号、姓名。

```sql
SELECT *
FROM student s, sc
WHERE s.sid = sc.sid
GROUP BY s.sid
HAVING count(sc.cid) != (
	SELECT count(cid)
	FROM course
);
```

## 题目：11

查询至少有一门课与学号为“01”的同学所学相同的同学的学号和姓名。

```sql
SELECT s.sid, s.sname
FROM student s
WHERE s.sid != '01'
	AND EXISTS (
		SELECT *
		FROM sc
		WHERE s.sid = sc.sid
	);
```

## 题目：12

查询和"01"号的同学学习的课程完全相同的其他同学的学号和姓名

解题思路：首先查找到01同学所学的课程。

```sql
select s.sid, s.sname from student s, sc where s.sid=sc.sid and s.sid!='01' and sc.cid in
(select cid from student s, sc where s.sid=sc.sid and s.sid='01') sf group by sc.cid having count(sf.cid)==count(sc.sid);
```

## 题目：13

把“SC”表中“张三”老师教的课的成绩都更改为此课程的平均成绩；

```sql
UPDATE sc, (
		SELECT sc.cid, avg(sc.score) AS score
		FROM teacher t, course c, sc
		WHERE c.tid = t.tid
			AND c.cid = sc.cid
			AND t.tname = '张三'
	) sc2
SET sc.score = sc2.score
WHERE sc.cid = sc2.cid;
```

## 题目：14

查询没学过"张三"老师讲授的任一门课程的学生姓名

解题思路：找到张三老师教的所有课程，筛选出没学过张三老师课程同学的学号，输出他们的姓名

```sql
select sname from student s where sid in (select sid from student sc where sc.cid not in (select cid from course c,teacher t where t.tname='张三' and c.tid=t.tid));
```

## 题目：15

查询两门及其以上不及格课程的同学的学号，姓名及其平均成绩

```sql
select s.sid, s.sname, avg(sc.score) from student s right join sc on s.sid=sc.sid and sc.score<60 having count(sc.cid)>=2;
```

## 题目：16

检索"01"课程分数小于60，按分数降序排列的学生信息

```sql
select * from (select * from sc where sc.cid='01' and sc.score<60) sc left join student s on s.sid=sc.sid order by sc.score desc;
```

## 题目：17

按平均成绩从高到低显示所有学生的所有课程的成绩以及平均成绩

```sql
select sc.sid, sc.cid, sc.score, dot.avgScore avgScore from sc left join (select sid, avg(score) avgScore from sc group by sid) dot on sc.sid=dot.sid order by dot.avgScore de
sc;
```

## 题目：18

查询各科成绩最高分、最低分和平均分：以如下形式显示：课程ID，课程name，最高分，最低分，平均分，及格率，中等率，优良率，优秀率

## 题目：19

按各科平均成绩从低到高和及格率的百分数从高到低顺序

## 题目：20

查询学生的总成绩并进行排名

```sql
select sum(score) from sc group by sid order by sc.sid desc;
```ß
