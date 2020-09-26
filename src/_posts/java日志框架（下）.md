---
title: java日志框架（下）
date: 2020-09-23
category: Java
tags:
 - java
permalink: /posts/202009231.html
---

## 学习目标

+ 日志门面和日志实现的关系

+ `SLF4J`

+ `logback`的使用

+ `log4j2`的使用

+ `SpringBoot`的日志使用

## 日志门面和日志实现的关系

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="258px" viewBox="-0.5 -0.5 258 402" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-09-26T08:16:49.692Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36&quot; etag=&quot;0HPofPmNb2x9Hxmzodkr&quot; version=&quot;13.7.5&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;3VjbcpswEP0aPTpj7vCIbZJMJ5lJx51J89SRQcFqABEh3/r1XYEAA06Tpnbr5sVmj6Sj1e5ZVjYypun2iuN8ecsikiB9HG2RMUO67lkefEpgVwGOqVVAzGlUQXvAnP4gChwrdEUjUnQmCsYSQfMuGLIsI6HoYJhztulOe2RJd9ccx2QAzEOcDNF7Gollhbq60+LXhMbLemfNVgdOcT1ZnaRY4oht9iAjQMaUMyaqp3Q7JYmMXR2Xat3lC6ONY5xk4i0Lbrfx9bfYnD/vvtzgxfj+6vbz3UivWNY4WakDI91OgG/yyIAWvBY7FQr7ecXqgVFRJsqHCZqVQ64n7Tg8xeV34CDPRL6LAhu5Lpo4NTX4WLGriVV4mo10zlZZRKTbGgxvllSQeY5DOboBkQG2FGmihvGiYMlKEJ+HSj0l2lommIXg7KlJoK5OUc+wGifWhAuyfTHAWpM2kDthKRF8B1PUAt1Qmd7VElb2phVOgy33RGMpDCutxg11m054UBn9jewag+xOWZqyrBglLI5pFtcZWfA/S/VxaObJo/n9w6hh3FODd0AN9gE1eKdSgzlQww2LZcDPSQOf8BpfnK86RxnLz9GtgqY5EJyVZ6CuBQ6fPkpBa45+YXVK2tCHJa1r1rCkNfdUNW0f6N+9cJMs8uVFCKwwwUVBw26Eh8GDgPDdVzDGF1ZtPkizNmbbjrWrrS0Ve8vAelB7yOd2kTTqNYcTRaLBrayXJjgiW/GQvH63EZjHRLzWJYdp30uq9YumzUmCBV133T2UZ7XDHaPlxUqpyrC7baJpGzVFdUy1av961yMy+7cPu0dUxWFAVMquOfb7leicRInvUNR71XtCJRpvVKL5T5WodQVk9AX0ViX2Jd0Q/yUlukMlwi8Qz0G+dawGGVhocikpj8Xnlf65x+SbIX9YgtD+RK/BJjTOZEWCqgkHQDZJCj+AfTWQ0iiSyyecwNZ4UVLJgsllAsuUWhNkzSTXSrCi7dInaMKG8/qt2jhQIydrwN5/KDYL+QHygqPxOcgN0GT88cTmed0XmXsysYHZ/hNUvQjbv9OM4Cc=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:402px;"><defs/><g><rect x="58" y="1" width="100" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 26px; margin-left: 59px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="font-size: 15px">用户</font></div></div></div></foreignObject><text x="108" y="31" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">用户</text></switch></g><rect x="28" y="91" width="160" height="90" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 136px; margin-left: 29px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Commons-logging<br style="font-size: 15px" /><br style="font-size: 15px" />Slf4j</div></div></div></foreignObject><text x="108" y="141" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">Commons-logging...</text></switch></g><rect x="0.5" y="221" width="215" height="180" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 213px; height: 1px; padding-top: 311px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Log4j<br style="font-size: 15px" /><br style="font-size: 15px" />Java.logging<br style="font-size: 15px" /><br style="font-size: 15px" />Slf4j-nop<br style="font-size: 15px" /><br style="font-size: 15px" />Slf4j-simple<br style="font-size: 15px" /><br style="font-size: 15px" />Logback</div></div></div></foreignObject><text x="108" y="316" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">Log4j...</text></switch></g><path d="M 108 51 L 108 82.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 108 88.76 L 104 80.76 L 108 82.76 L 112 80.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 108 181 L 108 212.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 108 218.76 L 104 210.76 L 108 212.76 L 112 210.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="198" y="91" width="30" height="80" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 131px; margin-left: 213px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">日<br style="font-size: 15px" />志<br style="font-size: 15px" />门<br style="font-size: 15px" />面</div></div></div></foreignObject><text x="213" y="136" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">日志门面...</text></switch></g><rect x="227" y="281" width="30" height="80" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 321px; margin-left: 242px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">日<br style="font-size: 15px" />志<br style="font-size: 15px" />实<br style="font-size: 15px" />现</div></div></div></foreignObject><text x="242" y="326" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">日志实现...</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

日志框架出现的历史顺序：

`log4j` --> `JUL` --> `JCL` --> `slf4j` --> `logback` --> `log4j2`

## Slf4j

简单日志门面，对应的英文名叫做`Simple Logging Facade`，是存取日志的标准接口，包括`slf4j`、`log4j`、`jdk logging api`和`apache common-log`等具体实现。

`slf4j`日志门面主要提供两大功能：

+ 日志框架的绑定

+ 日志框架的桥接

`slf4j`只能绑定一个日志实现框架。

## 项目初始化

导入相应的`jar`包

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
```

### slf4j的日志级别

`error` --> `wring` --> `info` --> `debug` --> `trace`

### slf4j绑定内置简单实现

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- slf4j 内置简单实现 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.7.25</version>
</dependency>
```

### 示例代码

```java
package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App
{
    // 获取日志记录对象
    public static final Logger LOGGER = LoggerFactory.getLogger(App.class);

    public static void main( String[] args )
    {
        // 日志输出
        LOGGER.error("error");
        LOGGER.warn("wring");
        LOGGER.info("info");
        LOGGER.debug("debug");
        LOGGER.trace("trace");

        // 使用占位符输出日志信息
        String name = "srcrs";
        Integer age = 14;
        LOGGER.info("用户，{} 年龄，{}",name,age);

        // 将系统的异常信息输出
        try {
            int i = 1/0;
        } catch (Exception e) {
            LOGGER.error("异常出现：",e);
        }
    }
}
```

上述代码我们就可以使用`slf4j`的内置简单实现输出日志。从而也可直到，`slf4j`的默认日志级别为`info`。

### slf4j的绑定日志实现

绑定的流程：

+ 添加`slf4j-api`的依赖

+ 使用`slf4j`的`API`在项目中进行统一的日志记录

+ 绑定具体的日志实现框架

  + 绑定已经实现了`slf4j`的日志框架，直接添加对应的依赖。

  + 绑定没有实现`slf4j`的日志框架，先添加日志的适配器，在添加实现类的依赖

+ `slf4j`有且仅有一个日志实现框架的绑定（如出现多个默认使用第一个依赖日志实现）

实现原理

![slf4j绑定其他日志框架](http://www.slf4j.org/images/concrete-bindings.png)

### slf4j绑定logback

**导入logback的jar包**

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

### slf4j日志开关

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-nop</artifactId>
    <version>1.7.25</version>
</dependency>
```

### slf4j绑定log4j

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- slf4j-log4j 适配器 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- log4j 日志实现 -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

### 绑定JUL

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- slf4j-jul 适配器-->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-jdk14</artifactId>
    <version>1.7.25</version>
</dependency>
```

## slf4j桥接器

假设你正在使用`slf4j`以外的日志记录API，在不久的将来将不会切换到`slf4j`。桥接器就是为了解决这种情况。`slf4j`附带了几个桥接模块，这些模块将对`log4j`，`jcl`和`java.util.logging API`的调用重定向，就好像是使用`slf4j api`一样。

具体实现的步骤：

+ 去除之前老的日志框架依赖

+ 添加`slf4j`提供的桥接组件

+ 为项目添加`slf4j`的具体实现

实现原理：

![slf4j桥接器原理](http://www.slf4j.org/images/legacy.png)

### 测试桥接器

开始时，项目使用的是`log4j`接口，现在需要换成`slf4j`+`logback`方式。

**开始时项目**

```xml
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

```java
package org.example;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class App
{
    // 定义 log4j 日志记录器
    public static final Logger LOGGER = Logger.getLogger(App.class);

    public static void main(String[] args) {
        // 初始化配置信息，暂不使用配置文件
        BasicConfigurator.configure();
        LOGGER.info("hello log4j");
    }
}
```

**升级为slf4j+logback**

去除`log4j`的依赖。

```xml
<!-- slf4j 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- log4j-slf4j 桥接器 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>log4j-over-slf4j</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- loback 日志实现 -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

`log4j`就已经成功转到了`slf4j`+`logback`。