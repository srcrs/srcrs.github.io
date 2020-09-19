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

#### severe

当程序运行错误的时候，就可以用`severe`来记录错误信息。

#### warning

记录程序运行遇到的问题，一般不会造成程序中止运行，但是也需要注意。

#### info

记录程序运行中的一些消息，例如数据库连接信息，`io`的传递信息等等。

#### config

记录配置信息。

#### fine

#### finer

#### finest

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