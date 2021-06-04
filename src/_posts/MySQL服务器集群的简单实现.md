---
title: MySQL服务器集群的简单实现
date: 2021-06-05
category: Note
tags:
    - mysql
permalink: /posts/202106051.html
---

## 起因
最近知道了几个关键词主从复制、读写分离、mysql集群。起因是我在做项目的时候，有的场景需要多写一行代码，作用是强制读取主库，起初也知道些许读写分离的思想，但是我好奇的是如何实现的强制读取主库，但是看了代码也没有发现是如何实现的。之后在网上搜索相关的知识，主从复制、读写分离、mysql集群等一股脑的都冒出来了，我开始了如下的实验之旅。

## 实验环境说明

我使用的是一个免费、在线的docker容器[play-with-docker](https://labs.play-with-docker.com/)，只需要在[Docker Hub](https://hub.docker.com/)注册一个账号就可以使用。

mysql镜像版本为mysql:latest，实际上对应的版本为8.0.25。

需要一定的Linux、docker命令基础。

## 涉及的操作命令示例

```bash
#查看本地镜像
docker images
#拉取MySQL镜像
docker pull xxxxx
#运行镜像
docker run -itd -name mysql-xxxxx -p xxxx:xxxx -e MYSQL_ROOT_PASSWORD=xxxxx mysql
#进入容器中
docker exec -it -e LANG=C.UTF-8 xxxxx bash
#查看容器的网络地址
docker inspect xxxxx
#查看容器列表
docker ps -a
```

## 拉取MySQL镜像

默认这种方式拉取的是最新的镜像文件，如果要拉取特定的版本则需要mysql在后面加上版本号，如mysql:5.7。

```bash
#拉取mysql镜像
docker pull mysql
```

## 主库容器操作

### 运行主库

```bash
docker run -itd --name mysql-master -e MYSQL_ROOT_PASSWORD=123456 -p 3307:3306 mysql
```

### 配置主库my.cnf

首先需要查看一下主库的容器ID

```bash
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS                               NAMES
03b4cbdd57a6   mysql     "docker-entrypoint.s…"   About a minute ago   Up About a minute   33060/tcp, 0.0.0.0:3307->3306/tcp   mysql-master
```

CONTAINER ID便是容器ID，进入到容器的内部。

```bash
docker exec -it -e LANG=C.UTF-8 03b4cbdd57a6 bash
```

此时，便进入到了容器的内部，这是一个非常干净的环境，类似于vi/vim需要手动安装。

```bash
apt-get update
apt-get install vim
```

然后使用Vim进入编辑器，将以下内容填写到相应的位置并保存。

```bash
vim /etc/mysql/my.cnf
```

```cnf
[mysqld]
server-id=1
log-bin=master-bin
```

修改完MySQL的配置文件，则需要将MySQL重启后才可以生效，但是常规的MySQL的重启的命令不可以，只好将主库容器重启，然后再进入到容器中。

```bash
#重启容器
docker restart 03b4cbdd57a6
#再次进入到容器中
docker exec -it -e LANG=C.UTF-8 03b4cbdd57a6 bash
```

### 数据库内部操作

接下来的操作需要进入到MySQL的内部进行操作。

```bash
#进入数据库
mysql -uroot -p123456
#创建用户slave用户
create user 'slave'@'%' identified by '123456';
#授权
grant replication slave,replication client on *.* to 'slave'@'%';
#防止密码简单报错
alter user 'slave'@'%' identified with mysql_native_password by '123456';
```

### 查看配置的结果

```bash
#查看容器的运行状态
show master status;
```

正常出现的结果为，需要记住File和Position，此后，退出数据库，退出容器，不要再做任何操作。

```sql
+-------------------+----------+--------------+------------------+-------------------+
| File              | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+-------------------+----------+--------------+------------------+-------------------+
| master-bin.000001 |      996 |              |                  |                   |
+-------------------+----------+--------------+------------------+-------------------+
```

退出容器后，需要查看主库的网络ip，172.17.0.2便是。

```bash
$ docker inspect 03b4cbdd57a6 | grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
```

## 从库容器操作

### 运行从库

```bash
docker run -itd --name mysql-slave-1 -e MYSQL_ROOT_PASSWORD=123456 -p 3308:3306 mysql
```

### 配置从库my.cnf

同样需要查看一下从库的容器ID

```bash
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                               NAMES
120fb0493866   mysql     "docker-entrypoint.s…"   23 seconds ago   Up 22 seconds   33060/tcp, 0.0.0.0:3308->3306/tcp   mysql-slave-1
03b4cbdd57a6   mysql     "docker-entrypoint.s…"   38 minutes ago   Up 11 minutes   33060/tcp, 0.0.0.0:3307->3306/tcp   mysql-master
```

进入到从库的内部

```bash
docker exec -it -e LANG=C.UTF-8 120fb0493866 bash
```

安装vim，编辑从库my.cnf

```bash
#安装vim
apt-get update
apt-get install vim
#编辑my.cnf
vim /etc/mysql/my.cnf
```

填写如下内容

```cnf
[mysqld]
server-id=2
log-bin=slave-1-bin
binlog_ignore_db=information_schema
binlog_ignore_db=performation_schema
binlog_ignore_db=mysql
binlog_ignore_db=sys
binlog-format=MIXED
```

退出容器，将容器重启。

```bash
#重启容器
docker restart 120fb0493866
#再次进入到容器中
docker exec -it -e LANG=C.UTF-8 120fb0493866 bash
```

### 数据库内部操作

进入到数据库中

```bash
mysql -uroot -p123456
```
 
配置同步主库

```sql
change master to master_host='172.17.0.2',master_port=3306,master_user='slave',master_password='123456',master_log_file='master-bin.000001',master_log_pos=996,master_connect_retry=30;
```

|名称 | 说明|
-|-
|master_host | 主库的网络地址 |
|master_port | 数据库端口，而不是外部端口 |
|master_user | 同步用户中间人 |
|master_password | 验证密码 |
|master_log_file | 同步的日志文件 |
|master_log_pos | 同步的日志文件位置 |
|master_connect_retry | 重连次数 |

### 查看配置结果

```bash
#开启同步
start slave;
#查看是否连接正常
show slave status \G
```

Slave_IO_Running和Slave_SQL_Running同为Yes就是正常的。

```sql
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 172.17.0.2
                  Master_User: slave
                  Master_Port: 3306
                Connect_Retry: 30
              Master_Log_File: master-bin.000001
          Read_Master_Log_Pos: 996
               Relay_Log_File: 120fb0493866-relay-bin.000002
                Relay_Log_Pos: 325
        Relay_Master_Log_File: master-bin.000001
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
```

退出容器。

## 实验测试结果

测试过程准备如下：在主库中创建test库，然后查看从库中是否会同步test库。

```bash
#进入主库之中
docker exec -it -e LANG=C.UTF-8 03b4cbdd57a6 bash
#进入数据库内部
mysql -uroot -p123456
#创建test库
create database test;
```

```bash
#进入从库之中
docker exec -it -e LANG=C.UTF-8 120fb0493866 bash
#进入数据库内部
mysql -uroot -p123456
#查看所有的数据库列表
show databases;
```

查看到从库中确实也有了test库，说明主从复制成功。

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
+--------------------+
```

## 遇到的问题

### 修改了配置文件未生效

每次修改完MySQL的配置文件，应该将数据库重启，因为在docker中我不知道该怎么同步，所以最后用重启docker的形式代替。

### 字符集问题

在进入容器的时候，我手动将字符集设置为UTF-8，是因为在此前我在数据库中插入中文数据的时候显示空白。

### 密码过于简单报错

这也是我最明显能体会到5版本和8版本的区别，当用户的密码设置过于简单的时候，就会报出mysql_native_password错误，解决办法是执行下面这条命令。

```sql
alter user 'slave'@'%' identified with mysql_native_password by '123456';
```

## 展望

未来需要了解，例如为什么要使用读写分离，如何保证数据的一致性，主从复制的延迟有多久，为什么能做到主从复制，使用了什么协议。

## 参考文章列表

[Mysql主从复制原理及搭建](https://juejin.cn/post/6844903921677238285)

[authentication plugin 'caching_sha2_password' 问题解决](https://blog.csdn.net/m290345792/article/details/88316962)

[MySQL-基于docker实现Replication集群主从复制及读写分离](https://blog.csdn.net/gu_wen_jie/article/details/102721524)

[docker查看容器的网络ip](https://www.cnblogs.com/mafeng/p/10237692.html)

[MySQL8.0中binlog的深入讲解](https://www.jb51.net/article/197042.htm)
