---
category: Note
tags:
- docker
title: docker实现动态负载均衡
date: 2021-12-29T12:00:00.000+00:00
permalink: "/posts/202112291.html"

---
## 起因

在docker swarm部署了简单的web服务，通过每台服务器的ip可访问到该服务，只需在主节点服务器操作即可，直观的感受到扩容和缩容的便捷，可是又产生了两个疑问

- 当在集群中增加机器后，如何动态的发现这些机器？

- 主入口是哪台服务器，如果该服务器挂掉，如何动态切换到正常的机器？

之前通过nginx实现过负载均衡，但需要手动配置请求打在哪些机器，很自然的我大概明白了服务发现是什么，服务注册是什么，如果nginx能够知道增加的机器信息，就能够实现动态的负载均衡了。

2022.01.16记: 经过，间间断断几周的时间，终于能够在机器上全部用docker搭建动态负载均衡的环境，期间踩了很多的坑，包括对该套体系不熟悉、不断的摸索，

## 环境

[play-with-k8s](https://labs.play-with-k8s.com/) 免费的docker机器

## 传统的负载均衡

这里以nginx为例。需要人工配置负载的机器，并且当机器服务不可用时，也不可智能的对节点进行摘除。

![nginx-load-balance](https://gallery-srcrs.vercel.app/blog/nginx-load-balance.png)

## 动态负载均衡

会使用到以下几个工具

- consul：用于服务发现、健康检查等

- registrator：用于做服务注册，将新服务注册到consul中

- consul-temlate：订阅consul，能够根据consul提供的数据，生成新的配置文件

- nginx：用于做负载均衡

![dynamic-nginx-load-balance](https://gallery-srcrs.vercel.app/blog/dynamic-nginx-load-balance.png)

## 实验一：单机动态负载均衡

### 目录

```sh
.
├── docker-compose.yml
└── nginx-consul-template
    ├── Dockerfile
    └── nginx.conf.ctmpl
```

### docker-compose.yml

```yaml
version: '3'
services:
    consul:
      image: progrium/consul:latest
      restart: always
      hostname: consul-master
      ports:
        - "8400:8400"
        - "8500:8500"
        - "8600:53/udp"
      command: "-server -bootstrap -ui-dir /ui"
    registrator:
      image: gliderlabs/registrator:latest
      restart: always
      hostname: registrator-master
      volumes:
        - "/var/run/docker.sock:/tmp/docker.sock"
      command: "-ip 176.126.78.96 consul://176.126.78.96:8500"
    elb:
      build: ./nginx-consul-template
      restart: always
      hostname: elb-master
      environment:
        CONSUL: 176.126.78.96:8500
      ports:
        - "9080:80"
    web:
      image: nginx:latest
      restart: always
      hostname: nginx
      ports:
        - "80"
      environment:
        SERVER_NAME: web
```

### Dockerfile

```sh
FROM nginx:latest

#Install Wget
RUN apt-get update && apt-get -y install wget

#Download and Install Consul Template
ENV CT_URL https://releases.hashicorp.com/consul-template/0.20.0/consul-template_0.20.0_linux_amd64.tgz
RUN wget $CT_URL && \
tar -zxf consul-template_0.20.0_linux_amd64.tgz -C /usr/bin/ && \
rm consul-template_0.20.0_linux_amd64.tgz

#Setup Consul Template Files
RUN mkdir /etc/consul-templates
ENV CT_FILE /etc/consul-templates/nginx.conf.ctmpl

#Setup Nginx File
ENV NX_FILE /etc/nginx/conf.d/default.conf

#Default Variables
ENV CONSUL consul:8500
ENV SERVICE consul-8500

# Command will
# 1. Write Consul Template File
# 2. Start Nginx
# 3. Start Consul Template
COPY ./nginx.conf.ctmpl $CT_FILE

CMD /usr/sbin/nginx -c /etc/nginx/nginx.conf \
& CONSUL_TEMPLATE_LOG=debug consul-template \
  -consul-addr=$CONSUL \
  -template "$CT_FILE:$NX_FILE:nginx -s reload";
```

### nginx.conf.ctmpl

```sh
upstream web {
  {{range service "nginx"}}server {{.Address}}:{{.Port}} max_fails=3 fail_timeout=60 weight=1;
  {{else}}server 127.0.0.1:65535 down; # force a 502{{end}}
}

server {
  listen 80 default_server;

  location / {
    proxy_pass http://web;
  }
}
```

### 部署

```sh
docker-compose up -d
```

访问9080端口，可以正确的访问到nginx服务器。

将web服务调整为3个，继续访问9080端口，发现还是可以正常访问的，可以进入elb进行中，查看nginx配置文件是否真的负载了3个服务。

```sh
docker-compose scale web=3
```

查看到服务上所有的镜像，找到文件夹_elb，我的是文件名是test，所以IMAGE是test_elb。

```sh
CONTAINER ID   IMAGE                           COMMAND                  CREATED         STATUS         PORTS                                                                                                                                                               NAMES
3a6587f3798e   nginx:latest                    "/docker-entrypoint.…"   3 minutes ago   Up 2 minutes   0.0.0.0:49186->80/tcp, :::49186->80/tcp                                                                                                                             test_web_2
5edcc0834771   nginx:latest                    "/docker-entrypoint.…"   3 minutes ago   Up 2 minutes   0.0.0.0:49187->80/tcp, :::49187->80/tcp                                                                                                                             test_web_3
3eedbb850feb   nginx:latest                    "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:49185->80/tcp, :::49185->80/tcp                                                                                                                             test_web_1
083fc68e4e1d   progrium/consul:latest          "/bin/start -server …"   6 minutes ago   Up 6 minutes   53/tcp, 0.0.0.0:8400->8400/tcp, :::8400->8400/tcp, 8300-8302/tcp, 8301-8302/udp, 0.0.0.0:8500->8500/tcp, :::8500->8500/tcp, 0.0.0.0:8600->53/udp, :::8600->53/udp   test_consul_1
af5e05ed3c82   test_elb                        "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:9080->80/tcp, :::9080->80/tcp                                                                                                                               test_elb_1
9bf8c0f6db55   gliderlabs/registrator:latest   "/bin/registrator -i…"   6 minutes ago   Up 6 minutes                                                                                                                                                                       test_registrator_1
```

进入到镜像为test_elb的容器，查看/etc/nginx/conf.d/default.conf配置文件的内容。

```sh
upstream web {
  server 176.126.78.96:49185 max_fails=3 fail_timeout=60 weight=1;
  server 176.126.78.96:49186 max_fails=3 fail_timeout=60 weight=1;
  server 176.126.78.96:49187 max_fails=3 fail_timeout=60 weight=1;
  
}

server {
  listen 80 default_server;

  location / {
    proxy_pass http://web;
  }
}
```

现在可以转发的web服务数量确实是3个了。

## 实验二：集群动态负载均衡

### 背景

在企业应用中，通常采用集群的部署方式，保证服务的高可用。

### 实现方式

consul部署到两台机器，一主一从，两台nginx服务器将流量转发到三台server机器进行处理。

![cluster-elb](https://gallery-srcrs.vercel.app/blog/cluster-elb.png)