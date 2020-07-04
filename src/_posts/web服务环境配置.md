---
title: web服务环境配置
date: 2020-05-06
category: Note
tags:
    - ubuntu
permalink: /posts/202005061.html
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

以前那个方法不行了，这次又换了一个。

先运行`dpkg -l | grep mysql`查看有没有安装mysql，如果有输出就说明安装了，请参考，我的[ubuntu18.04彻底删除MySQL数据库]()这篇文章就能解决你的问题。

### 安装mysql-server

+ 安装MySQL`apt install mysql-server`

+ 查看是否安装成功`netstat -tap | grep mysql`,如果看到有mysql就说明安装成功。

+ 输入`mysql`进入数据库，此时数据库是没有密码的。

### 配置MySQL

+ 输入`mysql_secure_installation`

+ secure enough. Would you like to setup VALIDATE PASSWORD plugin?    # 要安装验证密码插件吗?

+ Press y|Y for Yes, any other key for No: `N`    # 这里我选择N

+ New password:   # 输入要为root管理员设置的数据库密码

+ Re-enter new password:   # 再次输入密码

+ Remove anonymous users? (Press y|Y for Yes, any other key for No) : `y`     # 删除匿名账户
Success.

+ Disallow root login remotely? (Press y|Y for Yes, any other key for No) : `N`    # 是否禁止root管理员从远程登录？

+ Remove test database and access to it? (Press y|Y for Yes, any other key for No) : `y`   # 删除test数据库并取消对它的访问权限

+ Reload privilege tables now? (Press y|Y for Yes, any other key for No) : `y`   # 刷新授权表，让初始化后的设定立即生效

此时mysql就是初步配置好了，但是仍然不够。

### 配置MySQL允许远程访问

+ 编辑配置文件`vim /etc/mysql/mysql.conf.d/mysqld.cnf`

+ 注释`bind-address = 127.0.0.1`

+ 按Esc键，输入冒号，再输入wq，即可保存退出。

+ 输入`mysql -uroot -p`加上你设置的密码，就能进入到数据库。

+ 进行授权`grant all on *.* to root@'%' identified by '你的密码' with grant option;`

+ 刷新权限`flush privileges;`

+ 退出`exit`

+ 重启MySQL`systemctl restart mysql`

接下来就可以远程访问了。

### 解决不用密码就能登录

到现在发现不用密码也是能登录的，相当与以前设置的密码还没有生效。

+ 进入数据库`mysql -uroot -p`

+ 进入mysql`use mysql;`

+ 无password版本，即5.7以下包括5.7`update user set authentication_string=password("你的密码") where user='root';`

+ 大于5.7`update user set password=password('你的密码') where user='root';`

不清楚这两条运行了，也没关系。

+ update user set plugin="mysql_native_password";

+ 刷新`flush privileges;`

+ 退出`exit`

+ 重启MySQL`systemctl restart mysql`

### 解决数据库大小写敏感问题

在windows中，数据库的大小写是不敏感的，而在Linux是区分大小写的。

mysql是通过lower_case_table_names变量来处理大小写问题的。

+ 进入mysql`mysql -uroot -p`，回车输入你的密码

+ 查询大小写变量`show variables like '%case%';`

输入如下内容，该变量值是0，说明对大小写是敏感的。

```sh
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| lower_case_file_system | OFF   |
| lower_case_table_names | 0     |
+------------------------+-------+
```

+ 退出数据库，进入终端`vim /etc/mysql/mysql.conf.d/mysqld.cnf`

+ 在[mysqld]下面添加`lower_case_table_names=1`

+ 保存并退出

+ 重启MySQL`systemctl restart mysql`

至此，mysql算是差不多配置完了。如果再出问题，应该就是驱动和数据版本不匹配了。

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

[Ubuntu 18.04安装mysql](https://blog.csdn.net/mier9042/article/details/106408075/)

[Ubuntu18.04 安装tomcat](https://blog.csdn.net/weixx3/article/details/80808484)

[Linux下MySQL大小写敏感问题](https://blog.csdn.net/zhaopeng_yu/article/details/80785813)