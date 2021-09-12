---
title: kafka的安装与使用
date: 2021-09-11
category: Note
tags:
    - 消息队列
permalink: /posts/202109111.html
---

这次使用的是docker-compose进行部署，会记录下配置文件，以及部分命令

```yml
version: '3'

services:
  zookeeper:
    image: zookeeper
    container_name: zookeeper
    restart: always
    volumes:
      - $PWD/zookeeper:/etc/zookeeper
    ports:
      - "2181:2181"
  kafka1:
    image: wurstmeister/kafka
    container_name: kafka1
    ports:
      - "9092:9092"    #端口映射
    volumes:
      - $PWD/kafka1:/kafka
    environment:
      KAFKA_ADVERTISED_HOST_NAME: ip         # 修改:宿主机IP
      KAFKA_BROKER_ID: 0      #指定kafka的id
      KAFKA_ADVERTISED_PORT: 9092            #kafka外放端口
      KAFKA_MESSAGE_MAX_BYTES: 2000000
      KAFKA_ZOOKEEPER_CONNECT: ip:2181
    depends_on:
      - zookeeper
  kafka2:
    image: wurstmeister/kafka
    container_name: kafka2
    ports:
      - "9093:9092"
    volumes:
      - $PWD/kafka2:/kafka
    environment:
      KAFKA_ADVERTISED_HOST_NAME: ip          # 修改:宿主机IP
      KAFKA_BROKER_ID: 1           #指定kafka的id
      KAFKA_ADVERTISED_PORT: 9093             #kafka外放端口
      KAFKA_MESSAGE_MAX_BYTES: 2000000
      KAFKA_ZOOKEEPER_CONNECT: ip:2181
    depends_on:
      - zookeeper
  kafka3:
    image: wurstmeister/kafka
    container_name: kafka3
    ports:
      - "9094:9092"
    volumes:
      - $PWD/kafka3:/kafka
    environment:
      KAFKA_ADVERTISED_HOST_NAME: ip         # 修改:宿主机IP
      KAFKA_BROKER_ID: 2         #指定kafka的id
      KAFKA_ADVERTISED_PORT: 9094            #kafka外放端口
      KAFKA_MESSAGE_MAX_BYTES: 2000000
      KAFKA_ZOOKEEPER_CONNECT: ip:2181
    depends_on:
      - zookeeper
```

## 常用命令

```sh
#进入容器
docker-compose exec kafka1 bash
#进入kafka的bin目录
cd /opt/kafka/bin/
#创建一个topic，并设置三个分区和两个副本
./kafka-topics.sh --create --topic first --zookeeper ip:2181 --partitions 3 --replication-factor 2
#查看topic列表
./kafka-topics.sh --list --zookeeper ip:2181
#查询某个topic详情
./kafka-topics.sh --describe --topic first --zookeeper ip:2181
#创建生产者发送消息
./kafka-console-producer.sh --topic first --broker-list ip:9092
#创建消费者接收消息
./kafka-console-consumer.sh --topic first --bootstrap-server ip:9092 --from-beginning
#删除topic
./kafka-topics.sh --delete --topic first --zookeeper ip:2181
```

## 参考文档

- [docker-compose 搭建 kafka 集群](https://www.cnblogs.com/xuwenjin/p/14917360.html)
- [基于docker-compose搭建分布式消息队列Kafka](https://chengtong.me/posts/7fb66013.html)
- [kafka](https://kafka.apachecn.org/intro.html)
