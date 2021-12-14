---
category: Note
tags: []
title: 初识docker swarm
date: 2021-11-28 12:00:00 +0000
permalink: "/posts/202111281.html"

---
最近在了解到docker swarm，它是docker官方推出的分布式容器编排的解决方案，利用中午休息的时间，简单的尝试了一下，创建一个集群，默认当前节点是主节点，然后让另一个节点加入，简简单单的小实验，让我有了深入了解它的兴趣。

## 什么是docker swarm

docker swarm是一个容器编排工具。一次启动多个容器，并且需要做健康检查，在其中某些容器挂掉的时候，另一些容器能够立马补充进来，通常在分布式系统中使用的较多一些，它可以将多个docker容器作为单个服务进行管理。

## 它可以做什么

## 适用的场景

## 和k8s有什么区别

## 基本命令

```sh
#初始化集群
docker swarm init
#删除一个集群
docker swarm leave
#加入集群
docker swarm join
#显示集群下的节点
docker node ls
#创建一个网络连接
docker network create
#显示网络下链接
docker network ls
#创建服务
docker service create
#显示服务列表
#docker service ls
```

## 实战一：在集群中创建nginx

### 环境

三台ubuntu服务器，已安装docker。

- 主机master

- 主机slave-1

- 主机slave-2

### 初始化集群

在主机master中初始化一个集群，适用于主机只有一个ip，如果有多个ip需要指定advertise-addr参数。

```bash
docker swarm init 
------------------------------------------------------------------------------------------
Swarm initialized: current node (4lgzjnbucxt084uzjk0w57v48) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-3vc98a50sdswxprama13hw2g6x89hgilb7r4fjo9y8dqt6mua-0z9ckp59rppep14rdgl5xktk4 144.126.78.96:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

### 增加节点

docker swarm join --token xxx 便可使另一台服务器加入此集群中，分别在主机slave-1、slave-2中操作，便可加入到集群中。

```bash
docker swarm join --token SWMTKN-1-3vc98a50sdswxprama13hw2g6x89hgilb7r4fjo9y8dqt6mua-0z9ckp59rppep14rdgl5xktk4 144.126.78.96:2377
----------------------------------------------------------------------------------------
This node joined a swarm as a worker.
```

### 查看节点数量

在主机master中查看集群中的节点

```bash
docker node ls
----------------------------------------------------------------------------
ID                            HOSTNAME           STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
vg51qtlwfzbcsishr88auytuk     C20210725133604    Ready     Active                          20.10.7
4lgzjnbucxt084uzjk0w57v48 *   alpha-57215ad7db   Ready     Active         Leader           20.10.7
xyy5ze5xkvqvzax4tw73epifh     srcrs              Ready     Active                          20.10.7
```

### 创建新服务

在集群中新建一个服务，replicas代表服务要创建容器的个数

```bash
docker service create --replicas 3 -p 80:80 --name nginx nginx:1.13.7-alpine
------------------------------------------------------------------------------
9ldytuysvf0x5fn5irmuk150n
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 
```

此时，输入三个节点任意一个ip都可访问到nginx服务。

### 查看服务

```bash
docke service ls
-----------------------------------------------------------------------------
ID             NAME      MODE         REPLICAS   IMAGE                 PORTS
9ldytuysvf0x   nginx     replicated   3/3        nginx:1.13.7-alpine   *:80->80/tcp
```

### 查看服务详情

```bash
docker service ps nginx
---------------------------------------------------------------------------------
ID             NAME      IMAGE                 NODE               DESIRED STATE   CURRENT STATE           ERROR     PORTS
3tdupr3vri4r   nginx.1   nginx:1.13.7-alpine   alpha-57215ad7db   Running         Running 4 minutes ago             
cnyad40s0tv8   nginx.2   nginx:1.13.7-alpine   C20210725133604    Running         Running 4 minutes ago             
4wxd3r9oxhw5   nginx.3   nginx:1.13.7-alpine   srcrs              Running         Running 5 minutes ago
```

### 查看服务日志

```bash
docker service logs nginx
```

### 服务伸缩

扩容，增加容器的数量

```bash
docker service scale nginx=5
----------------------------------------------------------------------------------
nginx scaled to 5
overall progress: 5 out of 5 tasks 
1/5: running   [==================================================>] 
2/5: running   [==================================================>] 
3/5: running   [==================================================>] 
4/5: running   [==================================================>] 
5/5: running   [==================================================>] 
verify: Service converged
```

缩容，减少容器的数量

```bash
docker service scale nginx=2
---------------------------------------------------------------------------------
nginx scaled to 2
overall progress: 2 out of 2 tasks 
1/2: running   [==================================================>] 
2/2: running   [==================================================>] 
verify: Service converged
```

### 删除服务

```bash
docker service rm nginx
```