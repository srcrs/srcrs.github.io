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

### 实现原理

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

`log4j`就已经成功转到了`slf4j`+`logback`。以上就是`slf4j`的桥接器使用的方法。

## Logback

Logback是由log4j创始人设计的又一个开源日志组件。

Logback主要分为三个模块：

+ logback-core：其它两个模块的基础模块

+ logback-classic：它是log4j的一个改良版本，同时它完整实现了slf4j API。

+ logback-access：访问模块与servlet容器集成提供通过Http来访问日志的功能。

### logback日志级别

`error`-->`warn`-->`info`-->`debug`-->`trace`

默认的日志级别为`info`。

### logback入门程序

```xml
<!-- 日志门面 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- 日志实现 -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

### logback基础配置

logback会依次读取以下类型配置文件：

+ logback.groovy

+ logback-test.xml

+ logback.xml

如果以上配置文件均不存在，就会采用默认的配置文件。

logback组件之间的关系。

+ logger：日志的记录器，把它关联到应用的对应的context上后，主要用于存放日志对象，也可以定义日志类型、级别。

+ Appender：用于指定日志输出的目的地，目的地可以是控制台、文件、数据库等等。

+ Loyout：负责把时间转换成字符串，格式化日志信息的输出。logback中Layout对象被封装在encoder中。

**基本配置**

在`resource`目录中创建`logback.xml`文件，填写如下的代码内容。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<configuration>
    <!--
        配置集中管理属性
        说白了就是设置静态属性，
        后面使用的时候直接用${name}即可。
     -->
    <property name="pattern" value="[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L %thread %m%n">
        <!--
        日志输出格式：
            %-5level 日志级别
            %d{yyyy-MM-dd HH:mm:ss.SSS} 日期
            %c 类的完整名称
            %M method方法名
            %L 行号
            %thread 线程名
            %m或者%msg 日志信息
            %n 换行
        -->
    </property>

    <!-- 控制台日志输出的 appender -->
    <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
        <!-- 控制输出流对象 默认 System.out 改为 System.err -->
        <target>System.err</target>
        <!-- 日志消息格式配置 -->
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>${pattern}</pattern>
        </encoder>
    </appender>

    <!-- root logger配置 -->
    <root level="ALL">
        <appender-ref ref="console"></appender-ref>
    </root>
</configuration>
```

**输出到文件**

```xml
<!-- 定义日志文件的保存路径 -->
<property name="log_dir" value="D:/logs"></property>

<!-- 日志文件输出的 appender -->
<appender name="file" class="ch.qos.logback.core.FileAppender">
    <!-- 日志文件的保存路径 -->
    <file>${log_dir}/logback.log</file>
    <!-- 日志消息格式配置 -->
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
        <pattern>${pattern}</pattern>
    </encoder>
</appender>

<!-- root logger配置 -->
<root level="ALL">
    <appender-ref ref="file"/>
</root>
```

**html格式输出到文件**

```xml
<!-- 定义日志文件的保存路径 -->
<property name="log_dir" value="D:/logs"></property>

<!-- html格式日志文件输出 appender -->
<appender name="htmlFile" class="ch.qos.logback.core.FileAppender">
    <!-- 日志文件保存路径 -->
    <file>${log_dir}/logback.html</file>
    <!-- html 消息格式配置 -->
    <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">
        <layout class="ch.qos.logback.classic.html.HTMLLayout">
            <pattern>%-5level%d{yyyy-MM-dd HH:mm:ss.SSS}%c%M%L%thread%m</pattern>
        </layout>
    </encoder>
</appender>

<!-- root logger配置 -->
<root level="ALL">
    <appender-ref ref="htmlFile"/>
</root>
```

### 日志拆分和归档压缩

```xml
<!-- 定义日志文件的保存路径 -->
<property name="log_dir" value="D:/logs"></property>
<!-- 日志拆分和归档压缩 -->
<appender name="rollFile" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <!-- 日志消息格式配置 -->
    <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
        <pattern>${pattern}</pattern>
    </encoder>
    <!-- 拆分规则 -->
    <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
        <!-- 按照时间和压缩格式声明拆分的文件名 -->
        <fileNamePattern>${log_dir}/rolling.%d{yyyy-MM-dd-HH-mm-ss}.log%i.gz</fileNamePattern>
        <!-- 按照文件大小拆分 -->
        <maxFileSize>1MB</maxFileSize>
    </rollingPolicy>
</appender>
<!-- root logger配置 -->
<root level="ALL">
    <appender-ref ref="rollFile"/>
</root>
```

### 日志级别过滤器

通常是写在`appender`中。

```xml
<appender>
    <filter class="ch.qos.logback.classic.filter.LevelFilter">
        <!-- 日志过滤规则 -->
        <!-- 日志级别 -->
        <level>ERROR</level>
        <!-- 超过规定日志级别则放行 -->
        <onMatch>ACCEPT</onMatch>
        <!-- 未超过日志级别则拦截 -->
        <onMismatch>DENY</onMismatch>
    </filter>
</appender>
```

### 异步日志

需要手动指定`appender`。

```xml
<!-- 异步日志 -->
<appender name="async" class="ch.qos.logback.classic.AsyncAppender">
    <!-- 指定 appender -->
    <appender-ref ref="rollFile"/>
</appender>
<!-- root logger配置 -->
<root level="ALL">
    <appender-ref ref="async"/>
</root>
```

### 自定义logger对象

`name`设置`logger`对象的包，`level`设置日志级别，`additivity`这个值代表是否继承`rootlogger`，默认为`true`继承父对象，改为`false`则不继承了。

```xml
<!-- 自定义logger对象 -->
<logger name="org.example" level="info" additivity="false">
    <appender-ref ref="console"/>
</logger>
```

### logback.xml配置文件转换器

当有一天，`log4j`的用户，想把日志转换为`logback`，还需要将配置文件也进行修改，logback官网有一个转换器，可以做这件事。

转递地址在这：[log4j转logback](http://logback.qos.ch/translator/)

需要注意的是，log4j的输出字符串格式和logback有所区别，这个需要自己手动转换。例如`%l`在logback中是没有的。

### 记录tomcat日志

这个暂时先放着。

## log4j2

Apache Log4j2 是对log4j的升级，同时参考了logback的一些优秀设计，主要有以下几点：

+ 异常处理，logback中，Appender中的异常不会被应用感知到，但是在log4j2中，提供了一些异常处理机制。

+ 性能提升，log4j2相较于log4j和logback都具有很明显的性能提升，后面会有官方的测试数据。

+ 自动重载配置，参考了logback的设计，自动刷新参数配置，最实用的就是我们在生产上可以动态的修改日志的级别而无需重启应用。

+ 无垃圾机制，log4j2在大部分情况加，都可以使用其设计的一套无垃圾机制，避免频繁的日志收集导致垃圾回收。

Log4j2也是日志门面，但是因为它的日志实现功能很强大，性能优越，所以一般当作日志实现。（不解）

### log4j2的日志级别

`fatal`-->`error`-->`warn`-->`info`-->`debug`-->`trace`

默认的日志级别为`error`。

### log4j2入门程序

**单独使用log4j2实现**

```xml
<!-- 日志门面 -->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.12.1</version>
</dependency>

<!-- 日志实现 -->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.12.1</version>
</dependency>
```

```java
package org.example;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class App
{
    // 定义日志记录器对象
    public static final Logger LOGGER = LogManager.getLogger(App.class);

    public static void main( String[] args )
    {
        // 日志消息输出
        LOGGER.fatal("fatal");
        LOGGER.error("error");
        LOGGER.warn("warn");
        LOGGER.info("info");
        LOGGER.debug("debug");
        LOGGER.trace("trace");
    }
}
```

一般单独使用log4j2比较少，更多的是使用下面一种方式。

**使用slf4j+log4j2方式**

这样貌似有点南辕北辙了。

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-slf4j-impl</artifactId>
    <version>2.12.1</version>
</dependency>
<!-- 日志门面 -->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.12.1</version>
</dependency>
<!-- 日志实现 -->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.12.1</version>
</dependency>
```

```java
package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App
{
    // 定义日志记录器对象
    public static final Logger LOGGER = LoggerFactory.getLogger(App.class);

    public static void main( String[] args )
    {
        // 日志输出
        LOGGER.error("error");
        LOGGER.warn("warn");
        LOGGER.info("info");
        LOGGER.debug("debug");
        LOGGER.trace("trace");
    }
}
```

### log4j2配置

在`resource`目录中创建`log4j2.xml`，日志的书写示例如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- status 日志框架本身的输出日志级别 -->
<!-- monitorInterval 自动加载配置文件的间隔时间 -->
<Configuration status="debug" monitorInterval="5">
    <!-- 配置静态属性 通过${name}来使用 -->
    <properties>
        <property name="LOG_HOME">D:/logs</property>
    </properties>
    <!-- 日志处理 -->
    <Appenders>
        <!-- 控制台输出 appender -->
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] [%-5level] %c{36}:%L --- %m%n"/>
        </Console>
        <!-- 文件输出 appender -->
        <File name="file" fileName="${LOG_HOME}/myfile.log">
            <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n"/>
        </File>
        <!-- 使用随机读写流输出 appender -->
        <RandomAccessFile name="accessFile" fileName="${LOG_HOME}/myacclog.log">
            <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n"/>
        </RandomAccessFile>
        <!-- 按一定的规则拆问日志文件输出 appender -->
        <RollingFile name="rollingFile"
                     filePattern="/Logs/$${date:yyyy-MM-dd}/myrollog-%d{yyyy-MM-dd-HH-mm}-%i.log"
                     fileName="${LOG_HOME}/myrollog.log">
            <!-- 日志级别过滤器 -->
            <ThresholdFilter level="debug" onMatch="ACCEPT" onMismatch="DENY"/>
            <!-- 日志消息格式 -->
            <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n"/>
            <Policies>
                <!-- 在系统启动时，触发拆分规则，产生一个新的日志文件 -->
                <OnStartupTriggeringPolicy/>
                <!-- 按照文件的大小拆分，10MB -->
                <SizeBasedTriggeringPolicy size="10 MB"/>
                <!-- 按照时间节点拆分，规则根据filePattern定义的 -->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!-- 在同一个目录下，文件的个数限定为 30 个，超过进行覆盖 -->
            <DefaultRolloverStrategy max="30"/>
        </RollingFile>
    </Appenders>
    <!-- 使用 rootLogger 配置日志级别 level=“trace” -->
    <Loggers>
        <Root level="trace">
            <!-- 指定日志使用的处理器 -->
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

### log4j2异步日志

通常是将`Logger`进行异步，`Appender`异步对于性能的提升并不明显。

异步日志需要先添加一个实现异步的`jar`包。

```xml
<!-- 异步日志依赖 -->
<dependency>
    <groupId>com.lmax</groupId>
    <artifactId>disruptor</artifactId>
    <version>3.3.4</version>
</dependency>
```

**AsyncAppender方式**

```xml
<Appenders>
    <File name="file" fileName="${LOG_HOME}/myfile.log">
        <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n"/>
    </File>
    <Async name=Async>
        <AppenderRef ref="file">
    </Async>
</Appenders>
<Loggers>
    <Root level="trace">
    <!-- 使用异步 appender -->
    <AppenderRef ref="Async">
</Loggers>
```

**AsyncLogger全局方式**

在`resource`目录中创建`log4j2.component.properties`，里面内容如下。

```properties
Log4jContextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector
```

**AsyncLogger混合异步**

```xml
<Appenders>
    <File name="file" fileName="${LOG_HOME}/myfile.log">
        <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n"/>
    </File>
</Appenders>
<Loggers>
    <!-- includeLocation 关闭日志的行号信息，防止降低性能 -->
    <!-- additivity 不再继承rootLogger -->
    <AsyncLogger name="org.example" level="trace" includeLocation="false" additivity="false">
        <AppenderRef ref="file">
    </AsyncLogger>
    <Root level="trace">
    <AppenderRef ref="file">
</Loggers>
```

## SpringBoot中日志的使用

springboot中默认是使用slf4j+logback的方式日志记录。

使用方法与上面类似，配置文件方式有些区别。

在`application.properties`添加如下配置信息。

```properties
# 指定自定义 logger 对象日志级别
logging.level.com.example=trace
# 指定控制台输出消息格式
logging.pattern.console=[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L %thread %m%n
# 指定存放日志的具体路径
#logging.file=D:/logs/springboot.log
# logging.file已经过时，以后会使用下面一种方式，生成文件名spring.log
logging.file.path=D:/logs/springboot/
# 指定日志文件消息格式
logging.pattern.file=[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L %thread %m%n
```

同时也可使用外带的日志配置文件，使用哪种日志实现，直接将其配置文件导进来即可。

### 将日志切换为log4j2

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <!-- 排除logback -->
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!-- 添加log4j2 -->
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```