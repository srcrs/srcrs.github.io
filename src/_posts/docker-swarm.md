---
category: Note
tags: []
title: 初识docker swarm
date: 2021-11-28 12:00:00 +0000
permalink: "/posts/202111281.html"

---
最近在了解到docker swarm，它是docker官方推出的分布式容器编排的解决方案，利用中午休息的时间，简单的尝试了一下，创建一个集群，默认当前节点是主节点，然后让另一个节点加入，简简单单的小实验，让我有了深入了解它的兴趣。

## 什么是docker swarm

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