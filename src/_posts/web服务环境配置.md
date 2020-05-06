---
title: web服务环境配置
date: 2020-05-06
category: Note
tags:
    - ubuntu
---

## jdk

1. 将jdk压缩包上传到服务器

可以从官网下载，或者自己备份有。上传后文件名为

```md
jdk-8u231-linux-x64.tar.gz
```

2. 解压

如果什么都不加，默认解压在当前目录下。

```sh
sudo tar -zxvf jdk-8u231-linux-x64.tar.gz
```

3. 环境变量配置

在命令行输入此命令，打开环境变量配置文件。

```sh
sudo vim /etc/profile
```

下面的只需要改一下JAVA_HOME，推荐使用xftp查看路径，快捷高效。

```sh
JAVA_HOME=/home/ubuntu/jdk1.8.0_231
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```

4. 使配置生效

```sh
source /etc/profile
```

## mysql

mysql安装比较简单一点，此方式安装mysql版本是5.7。

1. 安装mysql-server

有弹窗，是设置mysql登录密码的。

```sh
sudo apt-get install mysql-server
```

2. 安装mysql-client

```sh
sudo apt-get install mysql-client
```

3. 安装libmysqlclient-dev

```sh
sudo apt-get install libmysqlclient-dev
```

## tomcat

1. 下载tomcat

地址：[tomcat 9.0.34](https://tomcat.apache.org/download-90.cgi)

2. 上传到服务器

上传后名字为

```md
apache-tomcat-9.0.34.tar.gz
```

3. 解压

解压到当前目录

```sh
sudo tar -zxvf apache-tomcat-9.0.34.tar.gz
```

3. 赋权限

我不知有何用。

```sh
sudo chmod 755 -R apache-tomcat-9.0.34
```

4. 修改startup.sh启动脚本

在apache-tomcat-9.0.34/bin目录中输入

```sh
sudo vi startup.sh
```

在最后一行的前面添加如下内容，路径要符合自己的实际情况。

```sh
export JAVA_HOME=/home/ubuntu/jdk1.8.0_231
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

#tomcat
export TOMCAT_HOME=/home/ubuntu/apache-tomcat-9.0.34
```

5. 修改shutdown.sh关闭脚本

在apache-tomcat-9.0.34/bin目录中输入

```sh
sudo vi shutdown.sh
```

和上面哪个一样，在最后一行的前面添加如下内容，路径要符合自己的实际情况。

```sh
export JAVA_HOME=/home/ubuntu/jdk1.8.0_231
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

#tomcat
export TOMCAT_HOME=/home/ubuntu/apache-tomcat-9.0.34
```

6. 启动tomcat

```sh
sudo ./startup.sh
```

提示如下内容则说明启动成功

```sh
Using CATALINA_BASE:   /home/ubuntu/apache-tomcat-9.0.34
Using CATALINA_HOME:   /home/ubuntu/apache-tomcat-9.0.34
Using CATALINA_TMPDIR: /home/ubuntu/apache-tomcat-9.0.34/temp
Using JRE_HOME:        /home/ubuntu/jdk1.8.0_231/jre
Using CLASSPATH:       /home/ubuntu/apache-tomcat-9.0.34/bin/bootstrap.jar:/home/ubuntu/apache-tomcat-9.0.34/bin/tomcat-juli.jar
Tomcat started.
```

## 参考链接

[Ubuntu18.04安装jdk](https://www.jianshu.com/p/dfce73d80ffb)

[Ubuntu 18.04安装mysql](https://www.jianshu.com/p/99c4baca1983)

[Ubuntu18.04 安装tomcat](https://blog.csdn.net/weixx3/article/details/80808484)