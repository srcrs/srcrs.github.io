---
title: Spring Security整合
date: 2020-06-12
category: Note
tags:
    - web
---

:::tip
当对一个新事物不熟悉的时候，最好的办法就是走老路，别人怎样就怎样，版本需一致，勿要掉坑。
:::

<!-- more -->

Spring Security是一个安全框架，但是只能够在Spring项目中使用，与此相似的安全框架还有shiro，它并不依赖于任何框架。安全提供了两个主要功能：认证与授权。一些接口，并不能随意的就让任何人访问，需要通过网站管理者的认证，但是认证的用户也不能随意的访问任何接口，例如对于数据库增删改的操作接口，一定要慎重。用户有不同的角色，角色有不同的权限，这就是基于角色的权限访问控制，即RABC。基于这套理论，可以给每一个接口设置访问的权限，一个角色只有拥有这个权限才可以访问。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="302px" viewBox="-0.5 -0.5 302 162" style="max-width:100%;max-height:162px;"><defs/><g><rect x="1" y="1" width="60" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 21px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">用户</div></div></div></foreignObject><text x="31" y="25" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">用户</text></switch></g><path d="M 251 106 L 271 41" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 136 41 L 121 106" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 166 41 L 171 106" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 106 L 31 41" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><rect x="241" y="1" width="60" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 21px; margin-left: 242px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">权限</div></div></div></foreignObject><text x="271" y="25" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">权限</text></switch></g><rect x="121" y="1" width="60" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 21px; margin-left: 122px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">角色</div></div></div></foreignObject><text x="151" y="25" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">角色</text></switch></g><path d="M 81 81 L 121 106 L 81 131 L 41 106 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 106px; margin-left: 42px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">用户角色</div></div></div></foreignObject><text x="81" y="110" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">用户角色</text></switch></g><path d="M 211 81 L 251 106 L 211 131 L 171 106 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 106px; margin-left: 172px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">角色权限</div></div></div></foreignObject><text x="211" y="110" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">角色权限</text></switch></g><rect x="76" y="141" width="150" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 151px; margin-left: 151px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap; ">基于RABC的基本表</div></div></div></foreignObject><text x="151" y="156" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle" font-weight="bold">基于RABC的基本表</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

## spring Security和ssm的整合

ssm框架还是基于上次的[优雅的ssm框架](https://srcrs.top/posts/2020/05/14/%E4%BC%98%E9%9B%85%E7%9A%84ssm%E6%A1%86%E6%9E%B6.html)，可以查看，还是将项目所需要文件应该创建的位置用树形表示出来，作为参考，到需要的时候不知道在哪创建，就可以在这里找到，完善xxx，即是对已存在的文件增删改，创建xxx，即是新创建的文件。

```md
.
├── .idea
├── src
│   └── main
|       ├── java
|       |   └── org
|       |       └── example
|       |           ├── controller
|       |           |   ├── MainController.java
|       |           |   └── UserController.java
|       |           ├── dao
|       |           |   └── UserMapper.java
|       |           ├── domain
|       |           |   └── User.java
|       |           ├── service
|       |           |   ├── UserService.java
|       |           |   └── Impl
|       |           |      └── UserServiceImpl.java
|       |           └── test
|       |               ├── SpringTest.java
|       |               └── MybatisTest.java
|       ├── resources
|       |   ├── org
|       |   |   └── example
|       |   |       └──dao
|       |   |          └── UserMapper.xml
|       |   ├── applicationContext.xml
|       |   ├── db.properties
|       |   ├── mybatis-config.xml
|       |   ├── spring-security.xml
|       |   └── springmvc.xml
│       └── webapp
│           ├── WEB-INF
|           |   ├── Pages
|           |   |   ├── error.jsp
|           |   |   ├── login.jsp
|           |   |   └── success.jsp
│           │   └── web.xml
│           └── index.jsp 
├── target
├── pom.xml
└── shop.iml 
```

## 所需要的jar包坐标

就是因为这个jar包的版本让我掉坑去了，Spring-Security 5.x.x 就是密码的存储格式改变了，密码必须要选择一个加密方式，具体我也还没搞清楚密码该怎么验证，等4.x.x熟悉之后再看5版本吧。

```xml
<!-- https://mvnrepository.com/artifact/org.springframework.security/spring-security-web -->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-web</artifactId>
    <version>4.2.3.RELEASE</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.springframework.security/spring-security-config -->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-config</artifactId>
    <version>4.2.3.RELEASE</version>
</dependency>
```

## 创建spring-security.xml

spring security的核心配置文件，spring的配置文件大致都是如此，特殊的地方就是引用的文件有些区别，它这里就是多了一个security。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:security="http://www.springframework.org/schema/security"
       xsi:schemaLocation="
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/security
        http://www.springframework.org/schema/security/spring-security.xsd
       ">

    <security:http>
        <!-- 需要拦截的资源 -->
        <!-- isFullyAuthenticated():该资源需要认证才可以访问 -->
        <!-- permitAll():允许所有人访问 -->
        <!-- isAnonymous():只有未登录用户可以访问 -->
        <security:intercept-url pattern="/index.jsp" access="permitAll()"/>
        <security:intercept-url pattern="/userLogin" access="permitAll()"/>
        <security:intercept-url pattern="/**" access="isFullyAuthenticated()"/>
        <!--关闭csrf拦截-->
        <security:csrf disabled="true"/>
        <!-- 自定义登录页面 -->
        <security:form-login login-page="/userLogin" login-processing-url="/securityLogin"/>
    </security:http>
    <!-- 认证管理器 -->
    <security:authentication-manager>
        <security:authentication-provider>
            <security:user-service>
                <security:user name="admin" password="1234" authorities="ROLE_ADMIN"/>
            </security:user-service>
        </security:authentication-provider>
    </security:authentication-manager>
</beans>
```

这里可能一下子写的有点多，`<security:intercept-url pattern="" access=""/>`的作用是设置一些接口的访问权限，pattern里包含需要控制的接口，可以是一个路径，或者一个文件，一个“*”代表一级目录。

默认Spring Security是给了一个用于身份验证的方式，可以选择弹窗式的表单，也可以选择一个表单页面，这里就重写了一下登录的页面。

还有就是有一个认证管理器，用于定义一些用户，授予一些角色，相当于授权。在这里都已经写死了，也可以将这些用于存入到数据库，这样就可以实现动态的对一些用户的权限进行修改。

## 创建login.jsp

这个就是自己定制的登录页面了。

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录页面</title>
</head>
<body>
  <h3>登录页面</h3>
  <form action="securityLogin" method="post">
      用户名：<input type="text" name="username"><br/>
      密码：<input type="password" name="password"><br/>
      <input type="submit" value="提交">
  </form>
</body>
</html>
```

## 完善web.xml

这里就是在web.xml中添加了Spring Security的过滤链，也不贴完整代码了，将这个过滤链放到web.xml即可。

```xml
<!-- Spring Security过滤器链 -->
<filter>
    <filter-name>springSecurityFilterChain</filter-name>
    <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
</filter>
<filter-mapping>
    <filter-name>springSecurityFilterChain</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

## 完善applicationContext.xml

这个也是最重要的一点，加载Spring Security的核心配置文件。

```xml
<!-- 加载spring-security -->
<import resource="spring-security.xml"/>
```

## 创建MainController.xml

登录的方法就写在了这里，也比较的简单。

```java
package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/userLogin")
    public String login(){
        return "login";
    }
}
```

至此，已经可以实现所有的接口都需要身份认证才可以访问，但是还有很重要的一点，如何让不同的接口被不同的角色访问，还没有做。只需要修改Spring Security的核心配置文件就行了。

## 完善spring-security.xml

本次加上了权限控制，定义了两个角色，分别是ROLE_USER和ROLE_ADMIN，两个角色，一个可以查看所有用户，一个可以插入用户。hasAnyRole()可以判断一个用户是否是此种角色。这样就可以实现不同的接口被不同的角色访问。但是此种方式并不符合实际的开发需要，不可能授权一个用户，还把项目文件改改，下面将介绍RBAC。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:security="http://www.springframework.org/schema/security"
       xsi:schemaLocation="
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/security
        http://www.springframework.org/schema/security/spring-security.xsd
       ">

    <security:http>
        <!-- 需要拦截的资源 -->
        <!-- isFullyAuthenticated():该资源需要认证才可以访问 -->
        <!-- permitAll():允许所有人访问 -->
        <!-- isAnonymous():只有未登录用户可以访问 -->
        <security:intercept-url pattern="/index.jsp" access="permitAll()"/>
        <security:intercept-url pattern="/userLogin" access="permitAll()"/>
        <security:intercept-url pattern="/user/findAll" access="hasAnyRole('ROLE_USER')"/>
        <security:intercept-url pattern="/user/addUser" access="hasAnyRole('ROLE_ADMIN')"/>
        <security:intercept-url pattern="/**" access="isFullyAuthenticated()"/>
        <!--放开csrf拦截-->
        <security:csrf disabled="true"/>
        <!-- 自定义登录页面 -->
        <security:form-login login-page="/userLogin" login-processing-url="/securityLogin"/>
    </security:http>
    <!-- 认证管理器 -->
    <security:authentication-manager>
        <security:authentication-provider>
            <security:user-service>
                <security:user name="admin" password="1234" authorities="ROLE_ADMIN"/>
                <security:user name="user" password="1234" authorities="ROLE_USER"/>
            </security:user-service>
        </security:authentication-provider>
    </security:authentication-manager>

</beans>
```

## 配置权限不足跳转的错误页面

默认访问一个页面权限不足，是报403的一个错误页面，这对于用户来说体验式很不好的，所以需要定制一下错误页面。

### 创建error.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>未授权</title>
</head>
<body>
你无权限访问此页面。
</body>
</html>
```

### 完善spring-security.xml

在此文件的<security:http></security:http>标签中添加如下内容

```xml
<!-- 自定义权限不足页面 -->
<security:access-denied-handler error-page="/error"/>
```

### 完善MainController.java

在此文件中定义错误需要跳转的路径。

```java
package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/userLogin")
    public String login(){
        return "login";
    }

    @RequestMapping("/error")
    public String error(){
        return "error";
    }
}
```

---

以下是将实现动态用户授权。

## 数据库数据

```sql
/*
 Navicat Premium Data Transfer

 Source Server         : srcrs
 Source Server Type    : MySQL
 Source Server Version : 50528
 Source Host           : localhost:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 50528
 File Encoding         : 65001

 Date: 13/06/2020 01:30:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `permTag` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `roleDesc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission`  (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`, `permission_id`) USING BTREE,
  INDEX `permission_id`(`permission_id`) USING BTREE,
  CONSTRAINT `role_permission_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `role_permission_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `realname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createDate` date NULL DEFAULT NULL,
  `lastLoginTime` date NULL DEFAULT NULL,
  `enabled` int(5) NULL DEFAULT NULL,
  `accountNonExpired` int(5) NULL DEFAULT NULL,
  `accountNonLocked` int(5) NULL DEFAULT NULL,
  `credentialsNonExpired` int(5) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;

```


## 参考链接

[springboot整合spring security教程](https://www.bilibili.com/video/BV1jJ411q7fp?)