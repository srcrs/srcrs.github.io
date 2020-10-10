---
title: 项目部署到tomcat无法显示验证码
date: 2020-10-09
category: Other
tags:
 - 服务器 
permalink: /posts/202010091.html
---

## 起因

记得在今年六月份做的安卓作业，后端使用的是SSM+Spring Security，并且添加了验证码，服务器的环境是ubuntu，web服务器是tomcat，当我把项目部署上去的时候，验证码却不能显示，但是在本地却是可以的。

前两天，我再次将web项目部署到服务器中，仍旧出现了这样的问题。

## 遇到的问题

在linux服务器上使用tomcat部署web项目时，发现验证码刷新不出来，但是我在windows部署到tomcat却是正常的，令我很疑惑。

## 解决办法

在tomcat里面的catalina.sh文件中，增加以下代码：

```sh
JAVA_OPTS="$JAVA_OPTS -Djava.awt.headless=true"
```

## 问题原因

据说是因为Xsecurity的问题。我就在网上找关于Xsecurity是什么，一直也没有找到。等找到的时候再记录下来吧。

## 参考链接

[tomcat部署web服务，验证码刷新不出来](https://blog.csdn.net/qq_27808011/article/details/82730613)