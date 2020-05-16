---
title: 优雅的ssm框架
date: 2020-05-14
category: Note
tags:
    - ssm
---

:::tip
已经连续练了好几天这个，但是一些细节还是会忘，加深一下印象。
:::

<!-- more -->

## 环境说明

种类 | 版本
- | -
电脑 | win10
IDEA商业版 | 1.45.0
项目 | maven

如果要是没有商业版，可以申请教育邮箱，或者用激活码激活。破解`jar`包下载，里面带有教程[点我](https://srcrs.lanzous.com/ibtbrbe)

## 整合的思路

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="383px" viewBox="-0.5 -0.5 383 273" content="&lt;mxfile host=&quot;Chrome&quot; modified=&quot;2020-05-14T13:37:05.164Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36&quot; etag=&quot;Ep6B8qSyu7yQqAg39nts&quot; version=&quot;13.0.7&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;KMxC7J5TO2hK7lTB8quv&quot; name=&quot;第 1 页&quot;&gt;3ZlPk6MqEMA/DcfZUlGDR51kdg/vVU3VHN7sEZUYalSyhPzbT/9A0SiSrd0qk9RsDilooIVfN02jAD5Xp68cbzf/spyUwHPyE4BL4HmBF8p/JThrQQRbQcFp3orci+CN/iRa6GjpnuZkN+ooGCsF3Y6FGatrkomRDHPOjuNua1aOn7rFBZkI3jJcTqX/0VxsWinyFhf5N0KLTfdkN4zalgp3nfVKdhucs+NABFcAPnPGRFuqTs+kVOw6Lu24lyut/cQ4qcXvDKghKt5PW/Tx9FS8/GBhcfTyJ22dAy73esF6suLcEZDz3qpixnhNOIDJcUMFedviTEmP0upSthFVKWuuLK5pWT6zkvFmOFyvM/mT8p3g7IMMWmAIIygnl0xXohd3IFyQ00CkV/aVsIoIfpZdTmN30V7mh7p+vNgs0KLNwFydDGsvKXrFF5CyoFn+Adfo5lzzgKDct3FFXgrDcB6uocEVPphrZ+cbgiWuRLuwgY3CBcQzgXVNj3UeTda9OdnUIZCENrIOQQ5C85CFBlkPTcmiu5L1bh9kUUbsQTZFgS9XNo/PGtEALh7ts/AOxxcJ7WTzRZQ6M5E142zvww8j69/+AMMEra1kwwyRdD0TWSMaQP/RZNGU7CoAMvpFiSokCUjiCh9IDVYRiF2QRGC1UI3xqmmPQBKqJiQHLVVTsmyamj4JapTJblBJ0ArEL0oSewDBiQUlQzG2ES5pUSubSuKNTRVpKtPhWDdUNM/V8ISTHf2J00aV2gVbRmvRwAoSECyVrr1guzahd2cK7caZiRYTW7q20O7dzJiWPG8VgsgB8bI35m7LaV18evjIgB9EE/iLe7L3LKngFfbVIfv0+F3T+T004R/dlf80rdGerqwg+fvKCnJKCP1FVjB2AYymVugtdR8zWHKgyTaozikWdPfp8ZsngC0DvesB4E3zpGub4K+xgbkFLBlVf7u9jxECyxbwpdsD1KRUKFZ51DRl+uyWgOZusNwawrsa4g9eJ+6rMs4EG0L9B6ekfJWQBGUKbsqEYJXsUKqGBGcfBWf7Oh9dz9TPYhjBjNvHHLz9MW/P4vmehbd/M96Wu8Q13iWtP8ZEyImKd+2uqvx9UF6qJXt9TS046GqvhFM5f7Uf2v61XMt7p1RVGk1f/K7aKOt7Nsr6mqlsxldGO7bnGfkFPu2tAvOCiF/0616NkXz0rWDqJ795p+SklCfBYfyFweYc+gmvKpYMAnAwdsMgMvyrXbge5Q2+CBiKYGTED8dQ1JKZKIo5x+dBNx3rrk7YfE7gjr5UyEKr8bIReqa2vSGrl68mbffLpye4+h8=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://app.diagrams.net/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:273px;"><defs/><g><path d="M 0 220 L 50 220 L 50 240 L 20 240 L 20 270 L 0 270 Z" fill="#ffcccc" stroke="#36393d" stroke-miterlimit="10" pointer-events="none"/><path d="M 50 190 L 100 190 L 100 210 L 70 210 L 70 240 L 50 240 Z" fill="#d5e8d4" stroke="#82b366" stroke-miterlimit="10" pointer-events="none"/><path d="M 100 160 L 150 160 L 150 180 L 120 180 L 120 210 L 100 210 Z" fill="#e1d5e7" stroke="#9673a6" stroke-miterlimit="10" pointer-events="none"/><path d="M 300 40 L 380 40 L 380 60 L 320 60 L 320 90 L 300 90 Z" fill="#b0e3e6" stroke="#0e8088" stroke-miterlimit="10" pointer-events="none"/><path d="M 150 130 L 200 130 L 200 150 L 170 150 L 170 180 L 150 180 Z" fill="#f8cecc" stroke="#b85450" stroke-miterlimit="10" pointer-events="none"/><path d="M 250 70 L 300 70 L 300 90 L 270 90 L 270 120 L 250 120 Z" fill="#ffe6cc" stroke="#d79b00" stroke-miterlimit="10" pointer-events="none"/><path d="M 200 100 L 250 100 L 250 120 L 220 120 L 220 150 L 200 150 Z" fill="#dae8fc" stroke="#6c8ebf" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 257px; margin-left: 110px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">创建maven项目并配置相关环境</div></div></div></foreignObject><text x="110" y="261" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">创建maven项目并配置相关环境</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 229px; margin-left: 105px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">搭建spring</div></div></div></foreignObject><text x="105" y="233" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">搭建spring</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 198px; margin-left: 165px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">搭建springmvc</div></div></div></foreignObject><text x="165" y="202" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">搭建springmvc</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 168px; margin-left: 235px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">spring整合springmvc</div></div></div></foreignObject><text x="235" y="172" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">spring整合springmvc</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 140px; margin-left: 260px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">搭建mybatis</div></div></div></foreignObject><text x="260" y="144" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">搭建mybatis</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 110px; margin-left: 325px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">spring整合mybatis</div></div></div></foreignObject><text x="325" y="114" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">spring整合mybatis</text></switch></g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 80px; margin-left: 350px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: none; white-space: nowrap; ">事务配置</div></div></div></foreignObject><text x="350" y="84" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">事务配置</text></switch></g><ellipse cx="340" cy="5" rx="5" ry="5" fill="#ffffff" stroke="#000000" pointer-events="none"/><path d="M 340 10 L 340 26.67 M 340 13.33 L 330 13.33 M 340 13.33 L 350 13.33 M 340 26.67 L 330 40 M 340 26.67 L 350 40" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 20 268 L 378 268 L 378 60 M 382 60 L 382 268 Q 382 272 378 272 L 20 272 M 382 60" fill="none" stroke="#0e8088" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="none"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

## 环境搭建

### 创建maven项目

### 在pom.xml中导入相关依赖

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <spring-version>5.2.5.RELEASE</spring-version>
</properties>

<dependencies>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <scope>test</scope>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-web -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-aop -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aop</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-jdbc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-tx -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>${spring-version}</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.aspectj/aspectjweaver -->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.5</version>
</dependency>
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.19</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.4</version>
</dependency>
<!-- https://mvnrepository.com/artifact/javax.servlet/servlet-api -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
    <scope>provided</scope>
</dependency>
<!-- https://mvnrepository.com/artifact/javax.servlet.jsp/jsp-api -->
<dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.2</version>
    <scope>provided</scope>
</dependency>
<!-- https://mvnrepository.com/artifact/com.mchange/c3p0 -->
<dependency>
    <groupId>com.mchange</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.5.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/javax.servlet/jstl -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis-spring -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>2.0.4</version>
</dependency>

</dependencies>
```

### 创建好项目的整体结构

这里就是整个`ssm`框架基本的结构了。可以根据下面的思路走，看到哪个文件开始编写时，就可以在这里找到文件该到哪里创建。`controller`是表示层，`dao`是持久层，`service`是业务层，`domain`是实体类。

```md
.
├── .idea
├── src
│   ├── main
|   ├── java
|   |   └── org
|   |       └── example
|   |           ├── controller
|   |           |   └── UserController.java
|   |           ├── dao
|   |           |   └── UserMapper.java
|   |           ├── domain
|   |           |   └── User.java
|   |           ├── service
|   |           |   ├── UserService.java
|   |           |   └── Impl
|   |           |      └── UserServiceImpl.java
|   |           └── test
|   |               ├── SpringTest.java
|   |               └── MybatisTest.java
|   ├── resources
|   |   ├── org
|   |   |   └── example
|   |   |       └──dao
|   |   ├── applicationContext.xml
|   |   ├── db.properties
|   |   ├── mybatis-config.xml
|   |   └── springmvc.xml
│   └── webapp
│       ├── WEB-INF
|       |   ├── Pages
|       |   |   └── success.jsp
│       │   └── web.xml
│       └── index.jsp 
├── target
├── pom.xml
└── ssm3.iml 
```

### 创建数据库

```
create database srcrs;
use srcrs;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 编写javabean实体类

即编写`User.java`，这个是根据数据库的内容来编写的，数据库表的内容不同，`javabean`就要做出相应改变。

```java
package org.example.domain;

import java.io.Serializable;

public class User implements Serializable {
    private Integer id;
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
```

### 编写service接口和实现类。

即编写`UserService.java`和`UserServiceImpl.java`

```java
package org.example.service;

import org.example.domain.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    void addUser(User user);
}
```

```java
package org.example.service.Impl;

import org.example.dao.UserMapper;
import org.example.domain.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public List<User> findAll() {
        System.out.println("Service业务层，查询所有用户");
        return null;
    }

    @Override
    public void addUser(User user) {
        System.out.println("Service业务层，保存用户");
    }
}
```

## spring框架代码编写

### 编写applicationContext.xml

配置`spring`扫描注解，将相应的类交给`Spring`管理。排除`Controller`注解。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx
       http://www.springframework.org/schema/tx/spring-tx.xsd
       ">
    <!-- 注解扫描，除了Controller不扫描 -->
    <context:component-scan base-package="org.example">
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>
</beans>
```

### 编写SpringTest.java进行测试

```java
package org.example.test;

import org.example.domain.User;
import org.example.service.Impl.UserServiceImpl;
import org.example.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class SpringTest {
    public static void main(String[] args) {
        ApplicationContext ac = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
        UserService userServiceImpl = ac.getBean("userServiceImpl", UserServiceImpl.class);
        userServiceImpl.findAll();
    }
}
```

输出以下内容，则证明`spring`搭建好了。

```sh
Service业务层，查询所有用户
```

## springmvc代码代码编写

### 在web.xml中配置前端控制器

```xml
<!-- 配置前端控制器 -->
<servlet>
    <servlet-name>dispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:springmvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>dispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

### 在web.xml中配置中文乱码过滤器

如果加上这个有报错信息，则是说明位置加的不对，没啥影响，如果看不顺眼可以换个位置就好了。

```xml
<!-- 解决中文乱码问题 -->
<filter>
    <filter-name>characterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>characterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### 编写springmvc.xml配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       ">
    <!-- 开启注解扫描，只扫描Controller注解 -->
    <context:component-scan base-package="org.example">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>
    <!-- 配置视图解析器对象 -->
    <bean id="internalResourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/Pages/"/>
        <property name="suffix" value=".jsp"></property>
    </bean>
    <!-- 过滤静态资源 -->
    <mvc:resources mapping="/css" location="/css/**"/>
    <mvc:resources mapping="/js" location="/js/**"/>
    <mvc:resources mapping="/images" location="/images/**"/>
    <!-- 开启SpringMVC注解的支持 -->
    <mvc:annotation-driven/>
</beans>
```

### 编写index.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  <a href="user/findAll">查询所有用户</a>
</body>
</html>
```

### 编写UserController.java

```java
package org.example.controller;

import org.example.domain.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/findAll")
    public String findAll(){
        System.out.println("Controller表现层，查询所有学生");
        return "success";
    }
}
```

### 编写success.jsp

这个页面没有做过多操作，如果能够成功跳转到这个页面则证明代码没有问题。反之如果在这个页面中有`500`等类似错误，就需要好好看看哪错了。

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  <h1>响应成功</h1>
</body>
</html>
```

### IDEA配置tomcat

这个就不用多说了。

### 测试运行

如果点击页面中的`查询所有用户`按钮，可以跳转到`响应成功`的页面，并且控制台输出

```sh
Controller表现层，查询所有学生
```

则说明`springmvc`搭建成功。

## spring整合springmvc

主要的一个问题就是当`web`项目启动时，`spring.xml`如何运行起来。所谓的整合也就是说，可以相互间调用其对象。

### 在web.xml中配置ContextLoaderListener监听器

```xml
<!-- 配置Sping的监听器，加载spring配置文件 -->
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
<!-- 设置配置文件路径 -->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
</context-param>
```

### controller中注入service对象

完善`UserController.java`。

```java
package org.example.controller;

import org.example.domain.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public String findAll(){
        System.out.println("Controller表现层，查询所有用户");
        //此时这里只能进行调用不能输出，因为List是null
        List<User> all = userService.findAll();
        return "success";
    }
}
```

### 测试整合的结果

运行`web`项目，点击查询所有学生，如果可以输出以下内容则证明整合成功。

```sh
Controller表现层，查询所有用户
Service业务层，查询所有用户
```

## mabatis代码编写

有很多都是采用注解的方式，以后假如说遇到复杂的查询还是需要使用配置文件的，我想的就是长痛不如短痛，一步到位。

### 编写持久层接口UserMapper.java

即编写`UserMapper.java`。这个接口主要的作用制定操作数据库的规范，例如查询用户，增加用户，实现其方法就行，但是在`mybatis`中不需要自己实现，通过注解或者配置`xml`即可。

```java
package org.example.dao;

import org.example.domain.User;

import java.util.List;

@Repository
public interface UserMapper {

    //查找所有的用户
    List<User> findAll();

    //增加一个用户
    void addUser(User user);
}
```

### 编写mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 加载外部配置文件 -->
    <properties resource="db.properties"/>
    <!-- 为实体类设置别名 -->
    <typeAliases>
        <package name="org.example.domain"/>
    </typeAliases>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!-- 注册*Mapper.xml文件 -->
    <mappers>
        <package name="org.example.dao"/>
    </mappers>
</configuration>
```

### 编写UserMapper.xml

如果要使用扫包的方式注册UserMapper.xml，这里命名需要和对应的接口命名一致。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.example.dao.UserMapper">
    <!-- 开启二级缓存 -->
    <cache/>
    <select id="findAll" resultType="user">
      select * from user
    </select>
</mapper>
```

### 编写db.properties

```md
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/srcrs?useSSL=false&amp;serverTimezone=UTC
jdbc.username=root
jdbc.password=123456
```

### 编写MybatisTest.java

```java
package org.example.test;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.example.dao.UserMapper;
import org.example.domain.User;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MybatisTest {
    public static void main(String[] args) throws IOException {
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        //这里传入一个true开启自动提交事务
        SqlSession session = sqlSessionFactory.openSession(true);
        UserMapper mapper = session.getMapper(UserMapper.class);
        List<User> all = mapper.findAll();
        for (User user : all) {
            System.out.println(user);
        }
    }
}
```

运行，如果可以查询到数据库中的数据，则证明，可以`mybatis`搭建成功。增加用户就不用测了。

## spring整合mybatis

### 在applicationContext.xml中配置连接池

```xml
<!-- 配置连接池 -->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="${jdbc.driver}"/>
    <property name="jdbcUrl" value="${jdbc.url}"/>
    <property name="user" value="${jdbc.username}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>
```

### 在applicationContext.xml中加载外部文件db.properties

```xml
<!-- 添加数据库外部文件 -->
<context:property-placeholder location="classpath*:db.properties"/>
```

### 在applicationContext.xml中配置SqlSessionFactory工厂

```xml
<!-- 配置SqlSessionFactory工厂 -->
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <!-- 注入数据库连接池 -->
    <property name="dataSource" ref="dataSource"/>
    <!-- 扫描domain包 使用别名 -->
    <property name="typeAliasesPackage" value="org.example.domain"/>
    <!-- 扫描dao包，注册*Mpper.xml文件 -->
    <property name="mapperLocations" value="classpath:org/example/dao/*.xml"/>
    <!-- 日志 -->
    <property name="configuration" ref="configuration"></property>
</bean>
```

### 在applicationContext.xml配置简单日志

需要和上面日志工厂配合使用。

```xml
<!-- 配置日志 -->
<bean id="configuration" class="org.apache.ibatis.session.Configuration">
    <property name="logImpl" value="org.apache.ibatis.logging.stdout.StdOutImpl"></property>
</bean>
```

### 在applicationContext.xml中配置dao接口

```xml
<!-- 配置dao接口所在包 -->
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <!-- 注入sqlSessionFacetory -->
    <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
    <!-- 给出需要扫描dao接口包 -->
    <property name="basePackage" value="org.example.dao"/>
</bean>
```

### 完善UserServiceImpl.java

```java
package org.example.service.Impl;

import org.example.dao.UserMapper;
import org.example.domain.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> findAll() {
        System.out.println("Service业务层，查询所有用户");
        return userMapper.findAll();
    }

    @Override
    public void addUser(User user) {
        System.out.println("Service业务层，保存用户");
        userMapper.addUser(user);
    }
}
```

### 完善UserController.java

```java
package org.example.controller;

import org.example.domain.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public String findAll(){
        System.out.println("Controller表现层，查询所有用户");
        List<User> all = userService.findAll();
        for (User user : all) {
            System.out.println(user);
        }
        return "success";
    }

    @RequestMapping("/addUser")
    public String addUser(User user){
        System.out.println("Controller表现层，增加用户");
        userService.addUser(user);
        return "success";
    }
}

```

### 完善UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.example.dao.UserMapper">
    <!-- 开启二级缓存 -->
    <cache/>
    <select id="findAll" resultType="user">
      select * from user
    </select>
    <insert id="addUser" parameterType="user">
        insert into User (id,name) values (
        #{id},#{name}
        );
    </insert>
</mapper>
```

### 完善index.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  <a href="user/findAll">查询所有学生</a>
  <form action="user/addUser" method="post">
      <input type="text" name="id"><br/>
      <input type="text" name="name"><br/>
      <input type="submit" name="注册">
  </form>
</body>
</html>
```

### 测试运行

运行`web`项目，点击查询所有用户，如果在控制台中输出所有的学生，则证明整合成功。也可以输入`id`和`name`，添加一个用户。可能添加用户会失败，因为增删改需要提交事务。接下来进行事务配置。

## 事务配置

### 在applicationContext中配置事务管理

```xml
<!-- 配置事务管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
<!-- 配置事务通知 -->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="find*" read-only="true"/>
        <tx:method name="*" isolation="DEFAULT"/>
    </tx:attributes>
</tx:advice>
<!-- 配置AOP增强 -->
<aop:config>
    <aop:advisor advice-ref="txAdvice" pointcut="execution(* org.example.service.Impl.*ServiceImp.*(..))"/>
</aop:config>
```

至此，一个优雅的框架搭建好了，如果需要别的功能可以在添加。可以删除不必要的文件，`org.example.test`做测试用的，可以删除，`mybatis-config.xml`也可以删除了。

## 完整代码

下载地址：[ssm框架源码](https://srcrs.lanzous.com/icmn3af)

## 参考

[史上最详细的IDEA优雅整合maven+ssm框架](https://blog.csdn.net/qq_44543508/article/details/100192558)

[maven中央仓库](https://mvnrepository.com/artifact/org.mybatis/mybatis-spring/2.0.4)

[mybatis官网](https://mybatis.org/mybatis-3/zh/getting-started.html)

[Spring整合mybatis的xml文件配置](https://blog.csdn.net/chenxue843400447/article/details/80605697)