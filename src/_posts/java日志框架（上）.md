---
title: java日志框架（上）
date: 2020-09-19
category: Java
tags:
 - java
permalink: /posts/202009191.html
---

## 学习目标

+ 日志的作用和目的

+ 日志的框架

+ JUL的使用

+ log4j的使用

+ JCL的使用

## 日志文件

日志文件是用于记录系统操作事件的记录文件或文件及和，具有处理历史数据、诊断问题的追踪以及理解系统的活动等重要作用。

在编写代码的时候，通常需要通过日志信息程序运行是否正常，出错时，根据日志信息能快速定位到错误地点。对于软件系统的开发，以及日后的维护工作，都有极其重要的作用。

## 日志框架

### 问题

日志框架需要考虑的问题：

+ 控制日志输出的内容和格式

+ 控制日志输出的位置

+ 日志优化：一部日志，日志文件的归档和压缩

+ 日志系统的维护

+ 面向接口开发——日志门面

### 现有的日志框架

日志分为两个大的部分，日志实现与日志门面。所谓日志门面，就是为各种日志`API`提供一个统一的接口，类似于操作数据库的`JDBC`，针对不同的数据库，都是操作同一套`API`接口。

**日志门面：**

+ JCL

+ slf4j

**日志实现**

+ JUL

+ logback

+ log4j

+ log4j2

## JUL

`JUL`全称`Java util Logging`是`java`原生的日志框架，使用时，不需要引用第三方类库，方便、简单、灵活。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="712px" viewBox="-0.5 -0.5 712 182" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-09-19T09:10:39.356Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36&quot; etag=&quot;11M1p4o7dX2XFDLd5Kyp&quot; version=&quot;13.6.10&quot;&gt;&lt;diagram id=&quot;VWP7M5RTWK2UNxNhEXiQ&quot; name=&quot;第 1 页&quot;&gt;7Vldd6IwEP01PrZHiIg8ttpuH/ajZ31ofdqTQgo5GwgnxKL763eQhK+01e1K1Z76oMxNZkjuXIYBB2gar74InEbfeEDYwB4GqwGaDWzb81z4LoB1CbjOuARCQYMSsmpgTv8QBQ4VuqQByVoTJedM0rQN+jxJiC9bGBaC5+1pj5y1z5rikBjA3MfMRO9oIKMSndhujd8QGkb6zNbYK0dirCernWQRDnjegNDVAE0F57I8ildTwgruNC+l3/ULo9XCBEnkLg5ni4fF/Hv+axZchU8/rQfqSXlml1GeMFuqDX/lYUiEWrJcax4EXyYBKUINB+gyj6gk8xT7xWgOiQcskjEDy4LDTAr+u+ILdnqpTkOEJKsX129VrICaCI+JFGuYohzssSJSKcmaKDuv82JpsqNGTrQfVlIIq9A1W3CgCPsH8pBB3g1OAnaU7I2Ojj3HYO8iTRn1saQ8MRg0SWkyFuG0mBevwqIInT8ynvsRFvJcEhHTBEsuXuB9D9S6OzBrvSezrsHsj6XMoI4CeMcFVMATYnd8dPRODHqvKZOvXvUFjVj46vZmFUUgwFlUjZX8TzkrmARXNNx8YOSRMqbxhCfgfglZCCiw14GLgLdYwkISAGGRQ6hPQ2vz21dJ9pxWbhAyc+M8kxrUV2q8z9QoB6dT7w+eGn2JfubGHqFjy41l5MbICkmCi6KfBstnOMuov61rATbE+l71PBtjURjnjjZnq+bgbK2tFZX3Kmpx3PACq3YqjKbPLREU+CBCYeUWSGA0+J08wTb5Uvhke68isQiJ3NZOm3nfkleNCcKg+XlqL/e5ZKsz3HIKG6lkZY06shp19FJuU3k1nxS6gbx2INvrBCp5MAJttFdt+z/kaD6VnJgc9yg9e0fpoYNKr6sY+43S6zbTRqC+pWc+052Y9DYReiyFaEc9uofUI9qXHkeH1qP5lPyaHhs9TdUk7ajMWowLrbgdlFmrcdEU47PKzIAraV45GxhaQb3IPWp1cgq37epVp75tv7l2dlr+qpa+l1bN9w59adX+gGLVMjjuO323ICLrjWp17I5au+9r+lar+RqnL7W6H1Ct3imI1ZnsSaxj1JdYwaz/Aiqn1/+joau/&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:182px;"><defs/><g><rect x="191" y="1" width="120" height="60" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 31px; margin-left: 192px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Logger</div></div></div></foreignObject><text x="251" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Logger</text></switch></g><rect x="391" y="1" width="120" height="60" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 31px; margin-left: 392px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Handler</div></div></div></foreignObject><text x="451" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Handler</text></switch></g><path d="M 34.67 1 L 77.33 1 C 95.92 1 111 14.43 111 31 C 111 47.57 95.92 61 77.33 61 L 34.67 61 C 16.08 61 1 47.57 1 31 C 1 14.43 16.08 1 34.67 1 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 31px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Application</div></div></div></foreignObject><text x="56" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Application</text></switch></g><path d="M 634.67 1 L 677.33 1 C 695.92 1 711 14.43 711 31 C 711 47.57 695.92 61 677.33 61 L 634.67 61 C 616.08 61 601 47.57 601 31 C 601 14.43 616.08 1 634.67 1 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 31px; margin-left: 602px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Outside World</div></div></div></foreignObject><text x="656" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Outside World</text></switch></g><rect x="226" y="151" width="50" height="30" rx="3" ry="3" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="16 6 2 6" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="250.5" y="170.5">Filter</text></g><rect x="491" y="151" width="50" height="30" rx="3" ry="3" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="16 6 2 6" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="515.5" y="170.5">Filter</text></g><rect x="361" y="151" width="50" height="30" rx="3" ry="3" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="16 6 2 6" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="385.5" y="170.5">Filter</text></g><path d="M 111 31 L 182.76 31" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 188.76 31 L 180.76 35 L 182.76 31 L 180.76 27 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 311 31 L 382.76 31" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 388.76 31 L 380.76 35 L 382.76 31 L 380.76 27 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 511 31 L 592.76 31" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 598.76 31 L 590.76 35 L 592.76 31 L 590.76 27 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 251 142.76 L 251 61" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 251 148.76 L 247 140.76 L 251 142.76 L 255 140.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 388.99 143.32 L 421 61" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 386.81 148.92 L 385.98 140.01 L 388.99 143.32 L 393.44 142.91 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 513.01 143.32 L 481 61" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 515.19 148.92 L 508.56 142.91 L 513.01 143.32 L 516.02 140.01 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

`Loggers`：被称为日志记录器，应用程序通过获取`Logger`对象，调用其`API`来发布日志信息。`Logger`通常时应用系统访问日志系统的入口程序。

`Appenders`：也被称为`Handlers`，每个`Logger`都会关联一组`Handlers`，`Logger`会将日志交给关联`Handlers`处理，由`Handlers`负责将日志做记录。`Handlers`在此是一个抽象，其具体的实现决定了日志记录的位置可以是控制台、文件、网络上的其他日志服务或操作系统日志等。

`Layouts`：也被称为`Formatters`，它负责对日志事件中的数据进行转换和格式化。`Layouts`决定了数据在一条日志记录中的最终形式。

`Level`：每条日志消息都有一个关联的日志级别。该级别展现日志消息的重要性和紧迫性，不同的日志框架该级别会有细微差别。

`Filters`：过滤器，根据需要定制哪些信息会被记录，哪些信息会被放行。

### 日志级别

**severe**

当程序运行错误的时候，就可以用`severe`来记录错误信息。

**warning**

记录程序运行遇到的问题，一般不会造成程序中止运行，但是也需要注意。

**info**

记录程序运行中的一些消息，例如数据库连接信息，`io`的传递信息等等。

**config**

记录配置信息。

**fine**

**finer**

**finest**

这三者都是记录`debug`信息。使用时用其中一个就行了。

除上述外，还有两个特殊级别，`off`（用来关闭日志记录），`all`（用来开启日志记录）。

### 示例代码

**基础类**

```java
package org.example.test;
public class JULTest {
    public static void main(String[] args) throws IOException {
        
    }
}
```

**基本使用**

```java
// 获取日志记录器对象
Logger logger = Logger.getLogger("org.example.test.JULTest");
// 日志输出
logger.info("hello jul");
// 通用方法进行日记记录
logger.log(Level.INFO,"info msg");
String name = "小明";
String age = 12;
logger.log(Level.INFO,"用户信息：{0} {1}",new Object[]{name,age});
```

**日志级别**

```java
// 获取日志记录器对象
Logger logger = Logger.getLogger("org.example.test.JULTest");
// 日志记录输出
// jul默认的日志级别是info
logger.severe("severe");
logger.warning("warning");
logger.info("info");
logger.config("config");
logger.fine("fine");
logger.finer("finer");
logger.finest("finest");
```

`JUL`的默认级别时`info`，因此上述代码只会输出到`info`。

**自定义配置日志级别**

```java
// 获取日志记录器对象
Logger logger = Logger.getLogger("org.example.test.JULTest");
// 自定义日志级别

// 关闭JUL默认的日志级别
logger.setUseParentHandlers(false);

//创建ConsoleHandler
ConsoleHandler consoleHandler = new ConsoleHandler();

// 创建格式转换对象
SimpleFormatter simpleFormatter = new SimpleFormatter();

// 进行关联
consoleHandler.setFormatter(simpleFormatter);
logger.addHandler(consoleHandler);

// 配置自定义的日志级别
logger.setLevel(Level.ALL);
consoleHandler.setLevel(Level.ALL);

// 日志记录输出
logger.severe("severe");
logger.warning("warning");
logger.info("info");
logger.config("config");
logger.fine("fine");
logger.finer("finer");
logger.finest("finest");
```

在上述代码中，关闭`JUL`的默认配置，将日志的输出级别设置为`ALL`，所有的日志信息都将会输出。

**日志输出到文件**

```java
// 获取日志记录器对象
Logger logger = Logger.getLogger("org.example.test.JULTest");

// 关闭JUL默认的日志级别
logger.setUseParentHandlers(false);

// 创建FileHandler，这里写日志文件的位置
FileHandler fileHandler = new FileHandler("D:\\jul.log");

// 创建格式转换对象
SimpleFormatter simpleFormatter = new SimpleFormatter();

// 进行关联
fileHandler.setFormatter(simpleFormatter);
logger.addHandler(fileHandler);

// 配置自定义的日志级别
logger.setLevel(Level.ALL);
fileHandler.setLevel(Level.ALL);

// 日志记录输出
logger.severe("severe");
logger.warning("warning");
logger.info("info");
logger.config("config");
logger.fine("fine");
logger.finer("finer");
logger.finest("finest");
```

上述代码将日志信息输出到了文件中，日志级别同样是`ALL`。

**logger对象父子关系**

```java
// 获取日志记录器对象
Logger logger1 = Logger.getLogger("org.example.test.JULTest");
// 获取日志记录器对象
Logger logger2 = Logger.getLogger("org.example.test");
// 测试是否是父子关系
System.out.println(logger1.getParent() == logger2);
// 所有日志记录器的顶级父元素 LogManager$RootLogger
System.out.println("Logger2 Parent:"+logger2.getParent()+",name:"+logger2.getParent().getName());

// 关闭JUL默认的日志级别
logger2.setUseParentHandlers(false);

//创建ConsoleHandler
ConsoleHandler consoleHandler = new ConsoleHandler();

// 创建格式转换对象
SimpleFormatter simpleFormatter = new SimpleFormatter();

// 进行关联
consoleHandler.setFormatter(simpleFormatter);
logger2.addHandler(consoleHandler);

// 配置自定义的日志级别
logger2.setLevel(Level.ALL);
consoleHandler.setLevel(Level.ALL);

// 日志记录输出
logger1.severe("severe");
logger1.warning("warning");
logger1.info("info");
logger1.config("config");
logger1.fine("fine");
logger1.finer("finer");
logger1.finest("finest");
```

上述代码展现了父子对象`Logger`对象关系，子承父业，父对象`logger2`设置日志级别为`ALL`，子对象的默认日志级别也变成了`ALL`。

### 日志配置

在`resource`目录下创建`logging.properties`文件

```properties
# RootLogger 顶级父元素制定的默认处理器为： ConsoleHandler
handlers= java.util.logging.ConsoleHandler,java.util.logging.FileHandler
# RootLogger 顶级父元素默认的日志级别为：ALL
.level= ALL

# 自定义 Logger 使用
org.example.handlers = java.util.logging.ConsoleHandler
org.example.level = CONFIG

org.example.userParentHandlers = false

# 向日志文件文件输出 handler 对象
# 指定日志文件的路径
java.util.logging.FileHandler.pattern= D:/logs/java%u.log
# 指定日志文件内容大小
java.util.logging.FileHandler.limit= 50000
# 指定日志文件级别
java.util.logging.FileHandler.level= ALL
# 指定日志文件数量
java.util.logging.FileHandler.count= 1
# 指定日志文件的输出格式
java.util.logging.FileHandler.formatter= java.util.logging.SimpleFormatter
# 指定文件输出以追加的方式
java.util.logging.FileHandler.append= false

# 向控制台输出的 handler 对象
# 指定 handler 对象的日志级别
java.util.logging.ConsoleHandler.level= ALL
# 指定 handler 对象的日志消息信息格式对象
java.util.logging.ConsoleHandler.formatter= java.util.logging.SimpleFormatter
# 指定 handler 对象的字符集
java.util.logging.ConsoleHandler.encoding= UTF-8
```

### 日志实现原理

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="396px" viewBox="-0.5 -0.5 396 447" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-09-21T15:46:37.402Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36&quot; etag=&quot;AHLA0STpHP8oYu_iBaJd&quot; version=&quot;13.7.3&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;7Vptb5swEP41fFwVMAT4mLZ0nbRK1Tppy6fKhQtYBRw5Tkn262eCCS9O1xdBCNG+IN9xNr7Hj+/OTjR0lWy+MryM7mgAsWZMgo2GrjXDcC1XPHPFtlDY1rRQhIwEhUqvFA/kD0jlRGrXJIBVw5BTGnOybCp9mqbg84YOM0azptmCxs2vLnEIiuLBx7Gq/UUCHhVax7Ar/S2QMCq/rE+lwwkujaUnqwgHNKupkKehK0YpL1rJ5griHLsSl6LfzStv9xNjkPL3dJjPYbuw48XtzxCcb8/2o+eRL3KUFxyvpcMZPGmepV3ONNfUPDt/zhzpAd+WsKw4o897RIQvlxFPYtHURVN4usztkk2Yc+JiEdPMjzDjFxxYQlLMKRNmWUQ4PCyxn9tmwlLo5HSAcdi86qe+R0+wDmgCnG2FSdnBkYBLxummlLNq/VypimpLZ0kdlowJ9yNXoIqGxPUDGBsKxt9pGAJTQGV0nQYQSBQPwVMDGT+taLzmMGO+3DU7bSWZ+Uooy9QDwMbQAKNDAP8An7LgXDBGQ2NsKhjf4jSIz4fF5tAITxWENc/RLj3NRXlAduw8Jo84DlvIGhZgWwW4DSekwSwvGoTkx3i1In4LUQVu2BD+W7QnF5aU5tI2b1/nWExKYVsT7oER4ZbYP4WumAoESjXSgltMl66ZD2/ndI5ZCPytvKQuX215rH8sD4MYc/LSnO6hNZNfuKdEOLJnB7JeSSLlEIWbsle9rGkNZE5a6d5tDVTgoAy0o9De7c+zyjkZVqXCkVqnXJzX31XddtK2e+YZ72QeGpJ5RhmHSuZNPsk8ZaB25OqZee5/5rVLwDeZZ54S81BXzENHZl55OB8v9XZSjznYfCcfp6fER7MrPprH5qN6jSFOgHc4xSM+ZqMTO2XrB47Z8JLf9o0UX8NsAuwODbB6xu4yqtZiahVhD0fVDgOhfia1ntHKuLp13Ahn9ckN/QPcqDJuI99W6bf/Yk8fxQn3bM4ZunozdUNiPt7MajQzKxo88Pd6M/WRzd3lJh20tNXb1ZPditefDfzmsQO/er90Q1mC+Yj3X7vyMp2Bb4b1fq9SBtqAzillP6urysvSu8p+Qqx+fS/Mq78wIO8v&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:447px;"><defs/><g><path d="M 188.55 1 L 223.45 1 C 238.66 1 251 12.19 251 26 C 251 39.81 238.66 51 223.45 51 L 188.55 51 C 173.34 51 161 39.81 161 26 C 161 12.19 173.34 1 188.55 1 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 26px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">web应用</div></div></div></foreignObject><text x="206" y="30" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">web应用</text></switch></g><rect x="161" y="101" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 126px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Logger</div></div></div></foreignObject><text x="206" y="130" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Logger</text></switch></g><rect x="161" y="201" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 226px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">LogRecord</div></div></div></foreignObject><text x="206" y="230" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">LogRecord</text></switch></g><rect x="161" y="301" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 326px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Handler</div></div></div></foreignObject><text x="206" y="330" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Handler</text></switch></g><path d="M 188.55 396 L 223.45 396 C 238.66 396 251 407.19 251 421 C 251 434.81 238.66 446 223.45 446 L 188.55 446 C 173.34 446 161 434.81 161 421 C 161 407.19 173.34 396 188.55 396 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 421px; margin-left: 162px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">输出</div></div></div></foreignObject><text x="206" y="425" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">输出</text></switch></g><path d="M 206 51 L 206 92.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 206 98.76 L 202 90.76 L 206 92.76 L 210 90.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 206 151 L 206 192.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 206 198.76 L 202 190.76 L 206 192.76 L 210 190.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 206 251 L 206 292.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 206 298.76 L 202 290.76 L 206 292.76 L 210 290.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 206 351 L 206 387.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 206 393.76 L 202 385.76 L 206 387.76 L 210 385.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="11" y="101" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 126px; margin-left: 12px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">LogManager</div></div></div></foreignObject><text x="56" y="130" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">LogManager</text></switch></g><rect x="305" y="151" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 176px; margin-left: 306px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Level</div></div></div></foreignObject><text x="350" y="180" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Level</text></switch></g><path d="M 305 176 L 214.24 176" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 208.24 176 L 216.24 172 L 214.24 176 L 216.24 180 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 101 126 L 152.76 126" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 158.76 126 L 150.76 130 L 152.76 126 L 150.76 122 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="1" y="251" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 276px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Filter</div></div></div></foreignObject><text x="46" y="280" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Filter</text></switch></g><path d="M 91 276 L 197.76 276" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 203.76 276 L 195.76 280 L 197.76 276 L 195.76 272 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="305" y="346" width="90" height="50" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 371px; margin-left: 306px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Formatter</div></div></div></foreignObject><text x="350" y="375" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Formatter</text></switch></g><path d="M 305 371 L 214.24 371" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 208.24 371 L 216.24 367 L 214.24 371 L 216.24 375 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

>1 初始化`LogManager`
>>1.1 `LogManager`加载`logging.properties`配置
>>1.2 添加`Logger`到`LogManager`

>2 从单例`LogManager`获取`Logger`

>3 设置级别`Level`，并指定日志记录`LogRecord`

>4 `Filter`提供了日志级别之外更细粒度的控制

>5 `Handler`是用来处理日志输出位置

>6 `Formatter`是用来格式化`LogRecord`的

## Log4j

`Log4j`是`Apache`的一个开源项目，通过使用`Log4j`，我们可以控制日志信息输送的目的地是控制台、文件等，可以定制每一条日志输出的格式，控制日志输出的级别，完成这些操作，仅仅只需要修改配置文件，并不用修改业务逻辑代码。

使用`Log4j`，首先需要导入`Log4j`的`jar`包，在`maven`项目中，只需引用相应坐标即可：

```xml
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>
```

### 日志级别

`Log4j`一共提供有六个日志级别：

**fatal**

表示严重错误，通常会造成系统崩溃中止运行。

**error**

表示错误信息，不会影响系统运行。

**warn**

表示警告信息，可能会发生的问题。

**info**

程序运行中的信息，数据库连接，io操作等等。

**debug**

表示调试信息，一般在开发中使用。

**trace**

表示追踪信息，记录所有的流程信息。

`Log4j`的默认级别为`debug`。

### 示例代码

**基础类**

```java
package org.example;
public class App{
    public static void main(String[] args){

    }
}
```

**入门代码**

```java
// 初始化配置信息，暂不使用配置文件
BasicConfigurator.configure();
// 获取日志记录器对象
Logger logger = Logger.getLogger(App.class);
// 严重错误，一般会造成系统崩溃，或者不能运行
logger.fatal("fatal");
// 错误信息，不会影响系统的运行
logger.error("error");
// 警告信息，可能会发生问题
logger.warn("warn");
// 运行信息，数据连接，网络连接，IO操作等等
logger.info("info");
// 调试信息，一般在开发中使用，记录程序变化
logger.debug("debug");
// 追踪信息，记录程序所有的流程信息
logger.trace("trace");
```

**基本使用**

一般`Log4j`的配置信息主要就是通过配置文件，因此代码一般不做过多的改动，只需要将上面的默认配置文件注释掉或者删掉，在`resource`目录下添加配置文件`log4j.properties`即可。

```java
// 获取日志记录器对象
Logger logger = Logger.getLogger(App.class);
// 严重错误，一般会造成系统崩溃，或者不能运行
logger.fatal("fatal");
// 错误信息，不会影响系统的运行
logger.error("error");
// 警告信息，可能会发生问题
logger.warn("warn");
// 运行信息，数据连接，网络连接，IO操作等等
logger.info("info");
// 调试信息，一般在开发中使用，记录程序变化
logger.debug("debug");
// 追踪信息，记录程序所有的流程信息
logger.trace("trace");
```

### 日志配置

在`resource`目录中创建`log4j.properties`文件

**基本配置**

最简单的配置，仅仅只配置了，日志级别，输出位置，输出格式。

```properties
# 指定 RootLogger 顶级父元素默认配置
# 指定日志级别=trace，使用的 appender 为console
log4j.rootLogger = trace,console
# 指定控制台日志输出的位置
log4j.appender.console = org.apache.log4j.ConsoleAppender
# 指定日志的输出格式 layout
log4j.appender.console.layout = org.apache.log4j.SimpleLayout
```

**开启log4j内置日志记录**

在要记录的类代码中添加如下代码。

```java
// 开启 log4j 内置日志记录
LogLog.setInternalDebugging(true);
```

开启后可以观察到`log4j`自身执行的日志信息。

**日志输出格式**

日志输出的格式，`log4j`提供了以下几种。

日志输出格式 | 作用
-|-
HTMLLayout | 以html表格形式布局
PatternLayout | 灵活指定布局模式
SimpleLayout | 简单日志布局
TTCCLayout | 包含产生时间、线程、类别等

通过修改，以下配置信息，就可实现简单的日志输出格式。

```properties
# 指定日志的输出格式 layout
log4j.appender.console.layout = org.apache.log4j.SimpleLayout
```

若是想实现自定义的日志输出格式，则需要指定日志的布局为`PatternLayout`，然后添加以下代码，就实现了自定义日志格式。

```properties
# 指定日志格式的内容
log4j.appender.console.layout.conversionPattern = [%-5p] %r %l %d{yyyy-MM-dd HH:mm:ss.SSS} %m%n
```

上述的一些代码定制日志输出格式，可在下面表格查找其含义。

符号 | 作用
-|-
%m | 输出代码中指定的日志信息
%p | 输出优先级，及 DEBUG、INFO 等
%n | 换行符（windows平台的换行符为"\n"，Unix平台为"\n"）
%r | 输出自应用启动到输出该 log 信息耗费的毫秒数
%c | 输出打印语句所属类的全名
%t | 输出产生该日志的线程全名
%d | 输出服务器的当前时间，默认为 ISO8601，也可以指定格式，如：%d{yyyy年MM月dd日 HH:mm:ss}
%l | 输出日志时间发生的位置，包括类名、线程、及在代码中的行数。如：Test.main(Test.java:10)
%F | 输出日志消息产生时所在的文件名称
%L | 输出代码中的行号
%% | 输出一个"%"字符

**日志输出到文件**

```properties
# 日志文件输出的 appender 对象
log4j.appender.file = org.apache.log4j.FileAppender
# 指定日志的的格式 layout
log4j.appender.file.layout = org.apache.log4j.PatternLayout
# 指定日志格式的内容
log4j.appender.file.layout.conversionPattern = [%-5p] %r %l %d{yyyy-MM-dd HH:mm:ss.SSS} %m%n
# 指定日志文件的保存路径
log4j.appender.file.file = D:/logs/log4j.log
# 指定日志文件的字符集
log4j.appender.file.encoding = UTF-8
```

同时需要更改`rootLogger`

```properties
# 指定日志级别=trace，使用的 appender 为console和file
log4j.rootLogger = trace,console,file
```

**按大小日志文件拆分**

当日志输出到文件的时候，需要考虑到一个问题，能否将所有的日志记录都输出到一个文件中，这是不友好的，当日志记录众多，查找起来相当复杂，所以要使用到文件拆分。

```properties
# 按照文件大小拆分的 appender 对象
# 日志文件输出的 appender 对象
log4j.appender.rollingFile = org.apache.log4j.RollingFileAppender
# 指定日志的的格式 layout
log4j.appender.rollingFile.layout = org.apache.log4j.PatternLayout
# 指定日志格式的内容
log4j.appender.rollingFile.layout.conversionPattern = [%-5p] %r %l %d{yyyy-MM-dd HH:mm:ss.SSS} %m%n
# 指定日志文件的保存路径
log4j.appender.rollingFile.file = D:/logs/log4j.log
# 指定日志文件的字符集
log4j.appender.rollingFile.encode = UTF-8
# 指定日志文件内容的大小
log4j.appender.rollingFile.maxFileSize = 1MB
# 指定日志文件的数量
log4j.appender.rollingFile.maxBackupIndex = 10
```

同业需要修改`rootLogger`

```properties
log4j.rootLogger = trace,rollingFile
```

**按时间拆分日志文件**

```properties
# 按照时间规则拆分的 appender 对象
log4j.appender.dailyFile = org.apache.log4j.DailyRollingFileAppender
# 指定日志的的格式 layout
log4j.appender.dailyFile.layout = org.apache.log4j.PatternLayout
# 指定日志格式的内容
log4j.appender.dailyFile.layout.conversionPattern = [%-5p] %r %l %d{yyyy-MM-dd HH:mm:ss.SSS} %m%n
# 指定日志文件的保存路径
log4j.appender.dailyFile.file = D:/logs/log4j.log
# 指定日志文件的字符集
log4j.appender.dailyFile.encode = UTF-8
# 指定日期拆分规则
log4j.appender.dailyFile.datePattern = '.'yyyy-MM-dd-HH-mm-ss
```

修改`rootLogger`

```properties
log4j.rootLogger = trace,dailyFile
```

**将日志文件输出到数据库**

首先需要在数据库中创建一个表

```sql
CREATE TABLE `log` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL COMMENT '项目名',
  `create_date` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `level` varchar(255) DEFAULT NULL COMMENT '优先级',
  `category` varchar(255) DEFAULT NULL COMMENT '所在类的全类名',
  `file_name` varchar(255) DEFAULT NULL COMMENT '输出日志消息产生时所在的文件名称',
  `thread_name` varchar(255) DEFAULT NULL COMMENT '日志事件的线程名',
  `line` varchar(255) NOT NULL COMMENT '行号',
  `all_category` varchar(255) DEFAULT NULL COMMENT '日志事件的发生位置',
  `message` varchar(255) DEFAULT NULL COMMENT '输出代码中指定的消息',
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6005 DEFAULT CHARSET=utf8;
```

在`pom.xml`中添加`mysql`数据库的连接器。

```xml
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.19</version>
</dependency>
```

然后在配置文件中添加数据库的信息。针对不同的数据库有不同的实现，这里使用的是`mysql`。

```properties
# mysql
log4j.appender.logDB = org.apache.log4j.jdbc.JDBCAppender
log4j.appender.logDB.layout = org.apache.log4j.PatternLayout
log4j.appender.logDB.Driver = com.mysql.jdbc.Driver
log4j.appender.logDB.URL = jdbc:mysql://localhost:3306/srcrs?useSSL=false&amp;serverTimezone=UTC
log4j.appender.logDB.User = root
log4j.appender.logDB.Password = 123456
log4j.appender.logDB.Sql = INSERT INTO log(project_name,create_date,level,category,file_name,thread_name,line,all_category,message) values('itcast','%d{yyyy-MM-dd HH:mm:ss}','%p','%c','%F','%t','%L','%l','%m')
```

更改`rootLogger`

```properties
log4j.rootLogger = trace,logDB
```

**自定义logger配置**

这个是仅仅针对这个`org.example`包下的类文件有用

```properties
log4j.logger.org.example = info,file
```

对于父对象`rootLogger`，则会进行继承，日志的级别将进行覆盖，日志输出的位置将进行合并。

```properties
log4j.rootLogger = trace,console
```

### 日志实现原理

`Log4j`主要由`Loggers`（日志记录器）、`Appenders`（输出端）和`Layout`（日志格式化器）组成。其中`Loggers`控制日志的输出级别与日志是否输出；`Appenders`指定日志的输出方式（输出到控制台、文件等）；`Layout`控制日志信息的输出格式。

日志输出位置 | 作用
-|-
ConsoleAppender | 输出到控制台
FileAppender | 输出到文件
DailyRollingFileAppender | 按时间产生日志文件
RollingFileAppender | 按文件大小产生新文件
WriterAppender | 将日志按流的方式输出到任何位置

## JCL

全名叫做`Jakarta Commons Logging`，是`Apache`提供的一个通用日志API。`JCL`为日志门面，为所有的`java`日志实现提供一个统一的接口，自身也提供了一个日志实现`SimpleLog`，允许开发人员使用`Log4j`，`JUL`日志实现。

`JCL`有两个基本的抽象类，`Log`（基本记录器）和`LogFactory`（创建`Log`对象）。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="476px" viewBox="-0.5 -0.5 476 342" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-09-21T18:35:41.709Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36&quot; etag=&quot;tMFRV6Ki24V2r2nKrI1P&quot; version=&quot;13.7.3&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;7VjbjtMwEP2aSPAAamK3aR/TbmBZLRJSQdAnZJJpYtaJI8e98fU4jXP1rnYp7PYiXiLPsWfsOXMUT2KhWbJ9L0gWf+QhMMsZhFsLXVmOMxlO1LMAdiXgYrsEIkHDEmoBc/oLNDjQ6IqGkHcWSs6ZpFkXDHiaQiA7GBGCb7rLlpx1d81IBAYwDwgz0a80lHGJjh23wa+BRnG1sz3SCSekWqwzyWMS8k0LQr6FZoJzWY6S7QxYwV3FS+n37oHZ+mACUvkUh8UCdkuXLa8/RzD+cOd+9336pjrcmrCVztjLslc3ZE0sf2hNPWuCLd8tnt74tU5E7ip2BF+lIRQb2BaabmIqYZ6RoJjdKDkoLJYJ09PkR87ZSoInAl3nPdpYWJm5FPyuplqRNNUHBCFh+2Dqdk2oEiLwBKTYqSXawcE6TS1CG2l705S0xuJWOUcaI1pFUR26IVoNNNd/wrtt8H4zu70Ufh336Pw6Br+3PMI/z5Vht0swto9OMDIF/OViBHwC/GKD3zlNMgZKxufKMrbR2+Gp8Tw0eDbohTT0ilZCWQEjeU6DLqMmWbCl8psaD1S+pbXQa4vxVcHHoDJ2lZGqfFpOhblozzVue6vyK48LodHH9MqiUuIrEcATugFJRATy0evLLHSrjMN7qlhhAhiRdN098H2l1Tt84lSl0tJR77pBPXWUiWqvdkvUDzTq9QXjXqCSCCPQXml12n8hvtHzis85L/VV/f2j6nOOqT5kd99hzuBA9RmBXlp97v9X3wHiQ8cUn/ry7F2hCB8oPxv37mLnheU3fl75uReqP3xKL7+D1dcP9O/Up8zmp0q5vPkzhfzf&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:342px;"><defs/><g><rect x="171" y="1" width="130" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 31px; margin-left: 172px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">App(Java应用)</div></div></div></foreignObject><text x="236" y="35" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">App(Java应用)</text></switch></g><rect x="171" y="141" width="130" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 171px; margin-left: 172px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">JCL</div></div></div></foreignObject><text x="236" y="175" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">JCL</text></switch></g><rect x="1" y="281" width="130" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 311px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Log4j</div></div></div></foreignObject><text x="66" y="315" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Log4j</text></switch></g><rect x="171" y="281" width="130" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 311px; margin-left: 172px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">JUL</div></div></div></foreignObject><text x="236" y="315" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">JUL</text></switch></g><rect x="344.5" y="281" width="130" height="60" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 311px; margin-left: 346px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">SimpleLog</div></div></div></foreignObject><text x="410" y="315" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">SimpleLog</text></switch></g><path d="M 236 61 L 236 132.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 236 138.76 L 232 130.76 L 236 132.76 L 240 130.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 203.5 201 L 73.12 276.86" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 67.93 279.88 L 72.84 272.39 L 73.12 276.86 L 76.86 279.31 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 236 201 L 236 272.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 236 278.76 L 232 270.76 L 236 272.76 L 240 270.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 268.5 201 L 402.34 276.94" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 407.56 279.9 L 398.62 279.43 L 402.34 276.94 L 402.57 272.47 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

### 项目初始化

在`pom.xml`中导入`JCL`的相应的坐标。

```xml
<dependency>
  <groupId>commons-logging</groupId>
  <artifactId>commons-logging</artifactId>
  <version>1.2</version>
</dependency>
```

基础类

```java
package org.example;
public class App
{
    public static void main( String[] args ){

    }
}
```

### JUL实现

**入门代码**

```java
// 获取 log 日志记录器对象
Log log = LogFactory.getLog(App.class);
// 日志记录输出
log.info("hello jcl");
```

### Log4j实现

在`pom.xml`中插入`log4j`的坐标

```xml
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>
```

在`resource`目录中创建`log4j.properties`文件，写入如下内容。

```properties
# 指定 RootLogger 顶级父元素默认配置
# 指定日志级别=trace，使用的 appender 为console
log4j.rootLogger = trace,console
# 指定控制台日志输出的位置
log4j.appender.console = org.apache.log4j.ConsoleAppender
# 指定日志的输出格式 layout
log4j.appender.console.layout = org.apache.log4j.SimpleLayout
```

### JCL原理

内置有日志实现的一个顺序，优先级高的执行了，优先级低的就会被屏蔽。

```java
private static final String[] classesToDiscover = new String[]{
    "org.apache.commons.logging.impl.Log4JLogger",
    "org.apache.commons.logging.impl.Jdk14Logger",
    "org.apache.commons.logging.impl.Jdk13LumberjackLogger",
    "org.apache.commons.logging.impl.SimpleLog"
};
```

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="592px" viewBox="-0.5 -0.5 592 202" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-09-21T19:00:22.225Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36&quot; etag=&quot;ZqDrFJz3EkKLdLWhCmyG&quot; version=&quot;13.7.3&quot;&gt;&lt;diagram id=&quot;PQsuAjaLIpzGLL3Y-lxF&quot; name=&quot;第 1 页&quot;&gt;1Vhdb9owFP01eVwVfySEx0LpuqqTKnXSxlNlEpN4JBgZQ8l+/Zza+XJa2jEK6QvyPbm+9j2+J9fEQeNs91WQVfKdRzR1oBvtHHTlQDj0huq3AHINDDDQQCxYpKEG8MD+UAO6Bt2wiK5bjpLzVLJVGwz5cklD2cKIEPyp7TbnaXvVFYlpB3gISdpFf7JIJhoN4KDGbyiLk3Jl4JuEM1I6m0zWCYn4UwNCEweNBedSj7LdmKYFdyUvet71K0+rjQm6lO+ZMJ3SfD5I5zc/Yhp8WwweJxP2BZrdbkm6MRk7Y+hcjthSUjEnIS3M0ciBfqpWGc2EGsXFqEJK4I7HJaY2Mav9npOXecloIrNUjYB6tpaCLypeYeW9pULS3at5goo9VXWUZ1SKXLmYCcjFeoqpOOibA3iqzw+U5ZU0zs4zGDElE1eha1bVwBD7DyQjt0PybbQAWDEWU3FyggK3xQ8GZ+cHdPhR1ODbM/EDUe8Igh2CHli2Sumz5k6tr/7VD3pRX+huk82o+E3CxZkqyXtPJeGTUoW773ubFbqMLovOqaxZysOF4iIi64RGhir1/JoVy1652jJdGxSs7aVU0SbyX8XEC4C9EphWcZVxtaviFlbetO6pYIoGdZAG3DGpo3nGmjae1JEKowyks6VRp+tbZ6oY4RsR0ne81iURMZVvNtlulTSroGxSgqZEsm17dy+VgQl3z1WnrisOwHbFIWRVks7KzGreFqxAdpfoBNJZdwKpyiF5w21VOKz3bBh57XWwu3dfyE6w7a8Gege1RCrC/0M1Xk9Ugz+9Zso7fI80g3yrpPwDNePZtWkHOpJmYOC9uM6rmsHBPv8P0ozfE8343ufvNLB/qlF/7dt3G3igapBnVacd6EiqwXaneUs1A/8MqhmcVTUHlHlDaUEAm0pzL4bBIWI7pnBQ/4SD8bGEM7TaDfgY4fju3itXN0EXHPOKpsz6I5l2r780oslf&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:202px;"><defs/><g><rect x="225" y="1" width="110" height="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 26px; margin-left: 280px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">«interface»<br /><b>Log</b></div></div></div></foreignObject><text x="280" y="30" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">«interface»...</text></switch></g><rect x="1" y="151" width="110" height="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 176px; margin-left: 56px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Jdk14Logger</div></div></div></foreignObject><text x="56" y="180" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Jdk14Logger</text></switch></g><rect x="151" y="151" width="110" height="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 176px; margin-left: 206px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Log4JLogger</div></div></div></foreignObject><text x="206" y="180" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Log4JLogger</text></switch></g><rect x="301" y="151" width="110" height="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 176px; margin-left: 356px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">SimpleLog</div></div></div></foreignObject><text x="356" y="180" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">SimpleLog</text></switch></g><rect x="451" y="151" width="140" height="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 176px; margin-left: 521px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Jdk13LumberjackLogger</div></div></div></foreignObject><text x="521" y="180" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Jdk13LumberjackLogger</text></switch></g><path d="M 56 151 L 56 91 Q 56 81 66 81 L 231 81 Q 241 81 240.99 74.12 L 240.98 67.24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 240.95 53.24 L 247.98 67.22 L 233.98 67.25 Z" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 206 151 L 206 111 Q 206 101 216 101 L 259 101 Q 269 101 269 91 L 269 67.24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 269 53.24 L 276 67.24 L 262 67.24 Z" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 356 151 L 356 111 Q 356 101 346 101 L 307 101 Q 297 101 297.01 91 L 297.03 67.24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 297.05 53.24 L 304.03 67.24 L 290.03 67.23 Z" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 521 151 L 521 91 Q 521 81 511 81 L 332 81 Q 322 81 322 73.62 L 322.01 66.24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-dasharray="6 6" pointer-events="stroke"/><path d="M 322.02 52.24 L 329.01 66.24 L 315.01 66.23 Z" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

灵魂拷问，优先级低的如何让它实现呢？

## 参考链接

[全面学习多种日志框架](https://www.bilibili.com/video/BV1iJ411H74S?)