---
title: java连接数据库
date: 2019-10-15
tags: 
    - java
category: Other
---
## 思路

java连接数据库，写一个能够实现交互程序必不可少的一个操作。
首先我们要考虑几个问题

@flowstart
st=>start: 建立数据库并建立表
process1=>operation: 下载jdbc驱动
process2=>operation: 加载jdbc驱动
process3=>operation: 连接数据库
e=>end: 查询数据库

st->process1
process1->process2
process2->process3
process3->e
@flowend

## 建立数据库并建立表

这个我使用的是`mysql-5.5.28-winx64`版本的数据库，数据库实验中我们学的就是这一种，在电脑上安装完之后，就可以在电脑的命令行中进行数据库的一些操作。
创建一个数据库名字叫做`m1`。

```yaml
create database m1;
```

进入数据库`m1`，创建一个表名字叫做`tb_stu`,表结构如下。

```yaml
use m1
create table tb_stu（
    number char(11),
    name varchar(50),
    age int(11),
    gender varchar(50));
```

然后往表中插入一些数据

```yaml
insert into tb_stu(
    number,name,age,gender
)values(
    'jby_100001','zhangsan',15,'1'
);
```

这样表中就有一个数据了，但是一个太少了，又反复执行了上面的插入操作，最终形成了下表。

number | name | age | gender
- | - | - | -
jby_100001 | zhangsan | 15 | 1
jby_100002 | lisi | 29 | 0
jby_100003 | wangwu | 90 | 1
jby_100004 | zhaoliu | 45 | 1

接下来就是在`java`的`IDE`中操作了

## 下载MySQL的JDBC驱动

进入MySQL的官网下载,点击下方链接。

[MYSQL驱动](https://www.mysql.com/products/connector/)

点击`JDBC Driver for MySQL (Connector/J)`后面的`Download`进入下载页面，但是却发现，在选择下载的版本里没有windows的版本，这个时候我们需要点击`Looking for previous GA versions?`,然后我们就可以选择`mysql-connector-java-5.1.48.zip`进行下载了，解压这个下载好的压缩包，里面的`mysql-connector-java-5.1.40-bin.jar`文件就是连接`MySQL`数据库的`JDBC-`数据库驱动了。

下面我们需要把这个驱动放到我们的项目文件中，我用的是`eclipse`，直接把这个驱动拖到项目中，然后还需要把驱动`jar`包`build`一下。

## 加载JDBC—MySQL驱动

```java
try {
    Class.forName("com.mysql.jdbc.Driver");
}
catch(Exception e){

}
```

首先来了解一下`java:try{}catch(){}`语句块的作用。

```yaml
try{
    可能会出现异常的代码；
    这里的异常代码并不是指的是语法错误，指的是在写的时候判断不出来的错误
}
catch(Exception e){
    try中代码异常就执行这部分中的代码，
    每个异常类都是Exception的某个子类，所以可以判断。
}
```

## java连接MySQL数据库

```java
Connection con = null;
String uri = "jdbc:mysql://localhost:3306/数据库?useSSL=true";
String user = "root" ;
String password = "";
try {
	con = DriverManager.getConnection(uri,user,password);
	}
	catch (SQLException e) {//SQL是Exception的子集，判断执行SQL异常错误。
		System.out.println(e);//输出这个错误
	}
```

`connection`是一个类型，主要连接数据库，可以创建一个连接数据库的对象。`DriverManager.getConnection()`方法用户试图建立到指定数据库URL的连接。

## 查询数据库

```java
ResultSet rs ;
try {
    Statement sql = con.createStatement();
}
catch(SQLException){}
rs = sql.executeQuery("SELECT * FROM tb_stu");
```

`Statement`声明一个`SQL`语句对象，然后让已创建连接的对象`con`调用`createStatement()`创建的这个`SQL`语句对象。

`ResultSet`按列组织数据构成，跟在数据库中现实的情况是一样的。

## 完整代码

```java
package demo;

import java.sql.*;
public class demo {
	public static void main(String [] args) {
		Connection con = null;
		Statement sql ;
		ResultSet rs ;
		try {
			Class.forName("com.mysql.jdbc.Driver");
		}
		catch (Exception e)  {
			
		}
		String uri = "jdbc:mysql://localhost:3306/m1?useSSL=true";
		String user = "root" ;
		String password = "123";
		try {
			con = DriverManager.getConnection(uri,user,password);
		}
		catch (SQLException e) {
			System.out.println(e);
		}
		try {
			sql = con.createStatement();//sql是一个SQL语句的对象
			rs = sql.executeQuery("SELECT * FROM tb_stu");
			while(rs.next()) {
				String number = rs.getString(1);//获取第n列结果数据
				String name = rs.getString(2);
				int age = rs.getInt(3);
				String gender = rs.getString(4);
				System.out.printf("%s\t",number);
				System.out.printf("%s\t",name);
				System.out.printf("%d\t",age);
				System.out.printf("%s\n",gender);
			}
			con.close();
		}
		catch(SQLException e) {
			System.out.println(e);
		}
	}
}
```

`executeQuery()`//执行查询语句，并保存结果。

`Statement`（声明一个`SQL`语句对象），有下面三种执行`SQL`语句的方法。

1. executeQuery()

用于产生单个结果集(`ResultSet`)，通常倍执行的语句就是`select`语句

2. executeUpdate()

用于执行`insert`,`uodate`,`delete`,`DDL`(定义语言)如：`create`，`drop`。

3. execute()

可用于执行任何`SQL`语句，返回一个`boolean`值，表明该执行是否返回`ResultSet`，是则是`true`，否则就是`false`。