---
title: Mybatis初入门
date: 2020-05-05
category: Note
tags:
    - mybatis
---

:::tip
记录一下Mybatis的入门环境配置。
:::

<!-- more -->

## 基本环境

使用工具 

+ IDEA商业版 2020.1

项目类型

+ maven项目


首先需要构建一个maven项目

在pom.xml添加所需要的依赖。持久层就是访问数据库，所以必须得有jdbc的驱动和mybatis支持。

```xml
<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.4</version>
</dependency>

<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.19</version>
</dependency>
```

在src/main/java目录中如果有目录文件就删除，没有就继续。

在src/main/java中创建如下目录

+ com/demo/controller 用于存放业务代码

+ com/demo/dao 用于存放持久层代码

+ com/demo/domain 用于存放javabean

+ com/demo/utils 用于简化生成SqlSession对象

## 创建核心配置文件

在src/main中创建资源文件resources目录，并在里面创建mybatis的核心配置文件mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="db.properties"/>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="${driver}"/>
                <property name="url" value="${url}"/>
                <property name="username" value="${username}"/>
                <property name="password" value="${password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="com/demo/dao/StudentMapper.xml"/>
    </mappers>
</configuration>
```

也可以使每个Mapper自动被加载，但是前提要求是，接口名需要和xml名相同。

```xml
<mappers>
    <package name="com.demo.dao"/>
</mappers>
```

## 创建数据库连接配置外部文件

在resources目录下创建db.properties文件，用于存放访问数据库的身份信息。使用需要注册。

```yml
driver=com.mysql.cj.jdbc.Driver
url=mysql://localhost:3306/srcrs?useSSL=false&amp;serverTimezone=UTC
username=root
password=123456
```

我觉得这个外部文件还挺不错的，当项目已经上线得时候，如果需要修改数据库连接，不需要动核心配置文件，只需要修改这个文件就行了。

## 创建javabean

准备访问数据库的student表，在domain目录中创建相应的javabean。

```java
public class Student {
    private String sno;
    private String sname;
    private String sgender;
    private Integer sage;

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getSgender() {
        return sgender;
    }

    public void setSgender(String sgender) {
        this.sgender = sgender;
    }

    public Integer getSage() {
        return sage;
    }

    public void setSage(Integer sage) {
        this.sage = sage;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sno='" + sno + '\'' +
                ", sname='" + sname + '\'' +
                ", sgender='" + sgender + '\'' +
                ", sage=" + sage +
                '}';
    }
}
```

这里需要注意的就是，数据库表的名字需要和javabean的名字相同，或者符合驼峰命名法，好像得需要在配置中开启，最好名称相同，也可以使用resultMap做结果集映射，就可以随便起名字了。

## 创建生成SqlSession对象类

在utils目录下创建MybatisUtils.java

```java
public class MybatisUtils {
    static SqlSessionFactory sqlSessionFactory;
    static {
        String resource = "mybatis-config.xml";
        InputStream inputStream = null;
        try {
            inputStream = Resources.getResourceAsStream(resource);
        } catch (Exception e) {
            e.printStackTrace();
        }
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    }

    public static SqlSession getSqlSession(){
        return sqlSessionFactory.openSession();
    }
}
```

简化获取SqlSession对象，每次需要用到的时候，直接从这个类的getSqlSession方法获取对象就行。

## 创建数据库查询接口

在dao中创建StudentDao.java

```java
public interface StudentDao {
    List<Student> getStudentList();
}
```

## 创建接口对应的xml

在resources目录中创建com/demo/dao/StudentMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.demo.dao.StudentDao">
    <select id="getStudentList" resultType="com.demo.domain.Student">
        select * from Student
    </select>
</mapper>
```

注意要在mybatis-config.xml中注册。

可以给javabean设置别名，就不需要写javabean的全路径名了。

在mybatis-config.xml中加入

```xml
<typeAliases>
  <package name="domain.blog"/>
</typeAliases>
```

每一个在包 domain.blog 中的 Java Bean，在没有注解的情况下，会使用 Bean 的首字母小写的非限定类名来作为它的别名。

## 创建业务代码

在controller中创建App.java

```java
public class App {
    public static void main(String[] args) {
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
        List<Student> studentList = mapper.getStudentList();
        for (Student student : studentList) {
            System.out.println(student);
        }
        sqlSession.close();
    }
}
```

sqlSession每次使用完都需要关闭，另外进行增删改的时候还得提交事务，也可以设置成自动提交事务。

## 参考链接

[maven中央仓库](https://mvnrepository.com/)

[mybatis官方文档](https://mybatis.org/mybatis-3/zh/index.html)

[mybatis狂神版](https://www.bilibili.com/video/BV1NE411Q7Nx)