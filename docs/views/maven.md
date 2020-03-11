---
title: maven
date: 2020-03-11
categories:
 - Other
tags:
 - maven
---

:::tip
maven是自动化构建工具，有着强大的管理jar包的能力，这样当在做一个工程的时候，想使用哪个jar包时，不必去四处百度下载这个jar包，只需要在配置项中加入几行代码就可使用。
:::

<!-- more -->

## 下载

+ 这个是官网的下载地址：[点我](http://maven.apache.org/download.cgi)

需要忍受速度，甚至是下载不下来。翻墙也不行*_*。

+ 这个是国内下载地址：[点我](https://www.newasp.net/soft/71602.html)

这个网站叫做新云，资源质量还不错，一般下载巨慢的，我就在这上面下载。

## 配置

### 1.解压文件包

可以创建一个文件夹将解压的文件放到里面，例如我就创建了一个文件夹：

```yml
D:\maven
```

### 2.配置环境变量

可以对比以前创建jdk的环境变量。首先创建`MAVEN_HOME`变量，填上刚刚解压的文件路径，例如我的则是：

```yml
D:\maven\apache-maven-3.5.4
```

然后再将bin目录引入到path中。

接着就可以在cmd命令行中输入`mvn -v`查看版本信息。

### 3.将本地仓库配置到指定的路径

这一项其实也可以不用配置，默认会有一个仓库的路径，为了便于我们自己查找，也可以自定义一个路径，例如我在这里创建`repository`存放仓库的数据。

```yml
D:\maven\repository
```

然后打开`D:\maven\apache-maven-3.5.4\conf\settings.xml`，找到`localRepository`标签，在其附近添加`  <localRepository>D:\maven\repository</localRepository>`，注意不要写道注释里去了。

### 4.配置中央仓库的镜像源

打开`D:\maven\apache-maven-3.5.4\conf\settings.xml`，找到`mirrors`标签，在标签内添加如下代码

```xml
<mirror>      
  <id>nexus-aliyun</id>    
  <name>nexus-aliyun</name>  
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>    
  <mirrorOf>central</mirrorOf>      
</mirror>
```

### 修改maven项目的JRE版本

默认maven的JRE版本是1.5的（不排除版本高的maven，JRE版本更高），但是我电脑安装的jdk版本却是1.8的，所以要修改一下。

打开`D:\maven\apache-maven-3.5.4\conf\settings.xml`，找到`profiles`标签，在标签内添加如下代码

```xml
<profile>
  <id>jdk-1.8</id>
<activation>
<activeByDefault>true</activeByDefault>
  <jdk>1.8</jdk>
</activation>
<properties>
  <maven.compiler.source>1.8</maven.compiler.source>
  <maven.compiler.target>1.8</maven.compiler.target>
  <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
</properties>
</profile>
```

以后创建的maven项目就都是1.8版本的了。

在正式使用前还需要两个配置，指定本地maven地址，可参考地址：https://www.bilibili.com/video/av21004567?p=19

## 如何依赖一个包

在项目的`pom.xml`文件中，寻找`dependencies`(如没有则需要手动创建一个)，然后将该包的坐标添加进来。

## 自动化构建的各个环节

+ 清理：mvn clean

将以前编译得到的旧的class字节码文件删除，为下一次编译做准备

+ 编译：mvn compile

将Java源程序编译成class字节码文件

+ 测试：mvn test

自动测试，自动调用junit程序

+ 报告：mvn verify

测试程序执行的结果

+ 打包：mvn package

动态Web工程打war包，Java工程打jar包

+ 安装：mvn install

Maven特定的概念——将打包得到的文件复制到“仓库”中的指定位置

+ 部署：mvn deploy

将动态Web工程生成的war包复制到Servlet容器的指定目录下，使其可以运行

依次而执行

mvn site 创建项目文档

## 常见错误

1.No compiler is provided in this environment. Perhaps you are running on a JRE rather than a JDK?

解决办法参考：[点我](https://www.jianshu.com/p/1ed0ec397575)

学习地址：[点我](https://www.bilibili.com/video/av21004567?)


这次的主要目的还是为了爬虫，因为有的jar包确实不好下载，并且也可以更简单的方式运行代码。

```yml
mvn compile exec:java -Dexec.mainClass="包名.主函数的类名"
```

参考：

```md
[1]:https://blog.csdn.net/Smile__1/article/details/100884299
[2]:https://blog.csdn.net/u013760453/article/details/81055323
```