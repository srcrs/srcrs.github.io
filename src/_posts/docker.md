---
category: Note
tags:
- docker
title: docker实现动态负载均衡
date: 2021-12-29 12:00:00 +0000
permalink: "/posts/202112291.html"

---
## 起因

在docker swarm部署了简单的web服务，通过每台服务器的ip可访问到该服务，只需在主节点服务器操作即可，直观的感受到扩容和缩容的便捷，可是又产生了两个疑问

- 当在集群中增加机器后，如何动态的发现这些机器？

- 主入口是哪台服务器，如果该服务器挂掉，如何动态切换到正常的机器？

之前通过nginx实现过负载均衡，但需要手动配置请求打在哪些机器，很自然的我大概明白了服务发现是什么，如果nginx能够知道增加的机器信息，就能够实现动态的负载均衡了。

## 环境

[play-with-k8s](https://labs.play-with-k8s.com/) 免费的docker机器

## 实验

### 部署consul

```bash
docker run -d -p 8400:8400 -p 8500:8500 -p 8600:53/udp \
 -h cookbook progrium/consul -server \
-bootstrap -ui-dir /ui
```

### 部署registrator

不同的机器ip做相应修改

```bash
docker run -d -v /var/run/docker.sock:/tmp/docker.sock \
 -h 192.168.33.10 gliderlabs/registrator \
-ip 192.168.33.10 consul://192.168.33.10:8500/elb
```

### 启动web服务

```bash
docker run -d -p 8081:80 nginx
docker run -d -p 8082:80 nginx
```

此时可以在consul的8500端口，看到nginx已成功注册。

### nginx配置

创建nginx配置文件，使请求打在8081和8082端口。

```bash
events {
  worker_connections 1024; 
} 
http { 
  upstream elb { 
    server 192.168.33.10:8081; 
    server 192.168.33.10:8082; 
  } 
  server { 
    listen 80; 
    location / {
      proxy_pass http://elb; 
    } 
  }
}
```

运行nginx，充当elb，由于8081和8082输出内容一样，有条件的可以进入容器，更改nginx默认输出内容，在`/usr/share/nginx/html/index.html`。

```bash
docker run -d -p 80:80 -v /root/nginx.conf:/etc/nginx/nginx.conf --name elb nginx
```

至此，便实现了通常意义上的负载均衡，但是服务器信息还需要手动配置，不能实现动态配置。

### 安装confd

参考[confd安装指南](https://github.com/kelseyhightower/confd/blob/master/docs/installation.md)。

