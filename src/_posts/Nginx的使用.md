---
title: Nginx的使用
date: 2021-06-19
category: Note
tags:
    - 中间件
permalink: /posts/202106192.html
---

以前从未系统的了解过nginx，对于以后的配置学习和使用还是必不可少的。

<!-- more -->

## nginx的作用

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="222px" viewBox="-0.5 -0.5 222 209" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2021-06-20T09:03:33.789Z&quot; agent=&quot;5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36&quot; etag=&quot;Jvo2qQlJsIrPnGYJRf4I&quot; version=&quot;14.7.0&quot; type=&quot;github&quot;&gt;&lt;diagram id=&quot;n4fDj0X6GQweX54VeyBD&quot; name=&quot;Page-1&quot;&gt;zZRdb4IwFEB/zX1cQili+wiC82XJjEv23EgFMrCkVAF//VopIlGT7WGLCQm3p7dfpzcFvCjbV8mq7E0kvADXSVrAEbgu8lxf/wzpejKnXg9SmSc2aQSb/MQtdCw95AmvJ4lKiELl1RRuxX7Pt2rCmJSimabtRDFdtWIpvwGbLStu6WeeqKynxJ2PfMXzNBtWRj7te0o2JNuT1BlLRHOFcAx4IYVQfVS2C14YeYOXftzyQe9lY5Lv1U8GFH7TNYf3Y7U81WrNP1Zr6b4gO82RFQd7YohnQAIICMQUaASUngkB4kM8h8CHMLQnUt2gSS+lb0Q3wibLFd9UbGt6Gl0UmmWqLHQL6ZDVVX9Nu7zlemdhraT4urjVVuzkRy4Vbx+eFV0M6tLjouRKdjrFDnBnVrqtOm9oN+MdoqHEssn9Wchs3aSXuUe1OrB2f2PavW96CSQyAXWAIog9YzfAxrQmxH9209jxJqbxDN8xje6ZRn9lGt8xTSD0gC7PQWQ+ozwCMjckQOZ7dtP+P9a0bo4v07nv6n3H8Tc=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;page=0&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:209px;"><defs/><g><ellipse cx="56" cy="153" rx="55" ry="55" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 153px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">动静分离</div></div></div></foreignObject><text x="56" y="157" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">动静分离</text></switch></g><ellipse cx="110.5" cy="56.5" rx="55.5" ry="55.5" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 109px; height: 1px; padding-top: 57px; margin-left: 56px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">反向代理</div></div></div></foreignObject><text x="111" y="60" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">反向代理</text></switch></g><ellipse cx="166" cy="153" rx="55" ry="55" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 153px; margin-left: 112px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">负载均衡</div></div></div></foreignObject><text x="166" y="157" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">负载均衡</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

反向代理：和正向代理相区分，正向代理是通过一个代理服务器上网，类似一个由内到外的过程，而反向代理
我觉得是由外到内的过程，用户通过访问服务器暴露在外部host:port，能够映射服务器内部的web容器。

负载均衡：当用户访问量达到一定量级时，提升一台物理机的硬件已经不足以应对，则需要用到分而治之的思想了，
通过多台服务器合作，处理用户的请求，是一对多的一种关系，通过nginx可以将用户的请求分发到不同的服务器。

动静分离：在一个web项目中，有静态资源（图片、js、css等）和动态资源（需要实时访问服务器获取的资源），nginx可
以判断请求的资源类型，分发到不同的服务器，大概是这样吧。

## nginx的配置文件

默认的nginx配置文件大致如下，

```conf
#定义nginx运行的用户
user  nginx;
#nginx的进程数
worker_processes  auto;

#错误日志的存储
error_log  /var/log/nginx/error.log notice;
#进程文件
pid        /var/run/nginx.pid;

#工作模式与连接数上限
events {
    #单个进程的最大连接数
    worker_connections  1024;
}

#设置http服务器
#只一部分需要配置的内容很多，但是作为初级使用是不需要配置的。
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
    
    #需要配置最多配置就在这里
    include /etc/nginx/conf.d/*.conf;
}
```

```conf
server {
    #监听端口号
    listen       80;
    listen  [::]:80;
    #监听ing域名
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    #匹配Url进行方向代理
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

## 环境说明

https://labs.play-with-docker.com/ 一个免费在线的docker环境服务器

## 反向代理一

实现目标：通过访问nginx能够映射到tomcat。

- 拉取镜像、运行

```bash
docker pull nginx
docker pull tomcat
docker run -itd --name tomcat-1 -p 8081:8080 tomcat
docker run -itd --name nginx-master -p 80:80 nginx
```

- 解决tomcat访问404

tomcat默认的访问路径webapps，但是docker版的这个文件夹是空的，真正的是在webapps.list
需要先将webapps删除，再将webapps.list名字更改为webapps。

```bash
rm -rf webapps
mv webapps.list webapps
```

- 配置nginx

进入到nginx配置文件所在目录

更改server配置项

```conf
location / {
    proxy_pass http://192.168.0.28:8081
}
```

保存。

nginx -t 检查nginx配置文件是否正确
nginx -s reload 重启，新的配置将生效。

## 反向代理二

实现目标：通过访问nginx的不同的路径，能够映射到不同的tomcat服务器。


- 拉取镜像、运行

```bash
docker pull nginx
docker pull tomcat
docker run -itd --name tomcat-1 -p 8081:8080 tomcat
docker run -itd --name tomcat-2 -p 8082:8080 tomcat
docker run -itd --name nginx-master -p 80:80 nginx
```

- 配置服务器显示内容

默认tomcat服务访问的路径是 webapps/ROOT 目录，docker默认webapps为空文件夹，需要自己在里面创建index.html文件，来显示不同的内容。

```bash
#进入tomcat-1容器中
docker exec -it tomcat-1 bash
cd webapps

mkdir one
cd one
#写入8081
vim index.html
```

```bash
#进入tomcat-2容器中
docker exec -it tomcat-2 bash
cd webapps

mkdir one
cd one
#写入8082
vim index.html
```

使用免费的容器反向代理会把url后面的链接带上。

- 配置nginx

进入到nginx配置文件所在目录

更改server配置项

```conf
location ~ /one {
    proxy_pass httpL//192.168.0.28:8081
}
location ~ /two {
    proxy_pass httpL//192.168.0.28:8082
}
```

保存。

nginx -t 检查nginx配置文件是否正确
nginx -s reload 重启，新的配置将生效。

## 负载均衡

上面的反向代理通过访问不同的路径映射到了不同的tomcat服务器，而负载均衡是访问同一个路径，也就是一个请求会根据对应的策略转发到不同的服务器。

实现目标：一个请求能够被转发到不同的服务器上。

- 拉取镜像、运行

```bash
docker pull nginx
docker pull tomcat
docker run -itd --name tomcat-1 -p 8081:8080 tomcat
docker run -itd --name tomcat-2 -p 8082:8080 tomcat
docker run -itd --name nginx-master -p 80:80 nginx
```

- 配置服务器显示内容

默认tomcat服务访问的路径是 webapps/ROOT 目录，docker默认webapps为空文件夹，需要自己在里面创建index.html文件，来显示不同的内容。

```bash
#进入tomcat-1容器中
docker exec -it tomcat-1 bash
cd webapps

#写入8081
vim index.html
```

```bash
#进入tomcat-2容器中
docker exec -it tomcat-2 bash
cd webapps

#写入8082
vim index.html
```

- 配置nginx

更改server配置项

nginx.conf

```conf
upstream myserver {
    server   192.168.0.8:8081  weight=1;
    server   192.168.0.8:8082  weight=1;
}
```

当所有的请求weight相等的时候就相当于轮询。

conf.d/default.conf

```conf
location / {
    root         html;
    index        index.html index.htm;
    proxy_pass   http://myserver;
}
```

weight是负载均衡策略的一种。会根据权重的不同，改变请求落在一个包的几率。

nginx/1.21.0默认的负载均衡策略已经变为了ip_hash。

## 动静分离
