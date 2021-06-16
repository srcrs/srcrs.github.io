---
title: Docker入门
date: 2021-05-20
category: Other
tags:
   - docker
permalink: /posts/202105202.html
---

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="542px" viewBox="-0.5 -0.5 542 452" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2021-05-22T08:30:25.359Z&quot; agent=&quot;5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36&quot; etag=&quot;ZY_pgTDYYNO3T0VaBFyK&quot; version=&quot;14.6.13&quot; type=&quot;github&quot;&gt;&lt;diagram id=&quot;8USQ0i447-cnHhbRCI8X&quot; name=&quot;第 1 页&quot;&gt;5ZpRc6I6FMc/TR63AwlBeBTrdmfu3bmd29nZ7tMOhVRzF4k3hGr76TeRIJBg7Tor1vXF4Rwgmv//58kxCNBksb7h8XL+maUkA9BJ1wBdAwhHgS9fVeK5SngqUokZp2mVcpvEHX0hOunobElTUnQuFIxlgi67yYTlOUlEJxdzzlbdyx5Z1n3XZTwjVuIuiTM7+5WmYl5lAzhq8p8Inc3rd3b9sDqziOuL9UyKeZyyVSuFpgBNOGOiOlqsJyRT2tW6VPd93HF2+8E4ycVbbpi+3H/6N8nXY9+Z/ff/6BbfZP988KpRnuKs1BMG0xCEGIQTMMUgQCD4qD++eK414azMU6KGdQGKVnMqyN0yTtTZlYRA5uZikenT8UPBslKQMU+0u5tsE3kyLARnP7YCS2miR5aL+gosY3u2WoAnwgVZt1J69jeELYjgz/ISfRY52gmNIsQ6XjXGurVb85apI52LNUuz7dCN3PJAK/4L6uMe9T0QRSBESv1orA5M9W2tWmpLyJbqusV6pr6OV48ZWyXzmIurQsjX73CHYceQ2+3K7bk9cjs9cm+Tv11v39JbigKmPgh9EIy09pF/tpJjZBCO8KklH/UgjsF4CqJQHYQhGAdnq7eJuH9ywgNL7muW/CD8kUptz1Xm8N1RHdpUm+KSPB2r/kNGSRYXBU26+po62WaQNRX38ti5GmEdflOhPr5et4NnHeyUu2AlT8j+VoCknYbINqWlOu4Rvc5xksWCPnXbqD4j9DvcMio/8dZzaHy1UGh4Wc1H39Vue4yBUBB0BnKxMZCkeUaENdCGi+20D0elnseRWcnlp6xggbiOt7SooMFlE+3lpZLlbHhBxtJn2fxWXrZFvB7IG5gXdxBedG1x24XlCr9aWlRwSziVMyS8DdN9O2iNdAh2e8tUcJZ4QmdHM/zLeGKjLvoD4wkHLmejTjlzL6WcGT2PBw/kxTPq4rZODsULGrKc1aufrmju6/WstWZ2q9c+yjaRWQoPL2neGxHF7wpRGBiImt32mzs0E9GhO7SeTbChVtzRniW3QdQxGPX99wmp/64g9cw6eui6i70Tr7s9e4VHXHfdLmxwXz/XFGAHdgBH8HXAe3rKwxn1z3Ktt3bt/OD3MHrEn7rL9Mv0C/88TRjO/kIzwf3i7w/2Lxde5halgqyF8Yggo7NcQSsNVxREamuIJnE21icWNE3V7REnBX2JHzZDKVSWaiqbyeEI4Gs1VilY0TxnqBCfsIwpunKWk51bVNZ+VA+Du3cCjTrj1nELIa8HIbOtO2SHqtcLu01P2GJBxWXYAX281w5/SDvsLvihpFl6IW4Ye3mwx42++no0N+yGb1kW8wsxI9jRyJzKDLuxWZbqrksww1w2+swYdNmwn5BmLL6QMuUZO7/QQ6c1w352WsRP9mO8P9MM3F3BkQOPVaZk2PwLp+qFm78yoelP&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;page=0&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:452px;"><defs/><g><rect x="211" y="191" width="120" height="70" rx="7" ry="7" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 226px; margin-left: 212px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">镜像</div></div></div></foreignObject><text x="271" y="231" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">镜像</text></switch></g><ellipse cx="271" cy="401" rx="50" ry="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 401px; margin-left: 222px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">仓库</div></div></div></foreignObject><text x="271" y="406" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">仓库</text></switch></g><ellipse cx="491" cy="226" rx="50" ry="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 226px; margin-left: 442px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">tar文件</div></div></div></foreignObject><text x="491" y="231" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">tar文件</text></switch></g><ellipse cx="271" cy="51" rx="50" ry="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 51px; margin-left: 222px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">容器</div></div></div></foreignObject><text x="271" y="56" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">容器</text></switch></g><ellipse cx="51" cy="226" rx="50" ry="50" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 226px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Dockerfile</div></div></div></foreignObject><text x="51" y="231" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">Dockerfile</text></switch></g><path d="M 301 191 L 299.16 99.23" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 299.04 93.24 L 303.2 101.15 L 299.16 99.23 L 295.21 101.31 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 241 91 L 241 182.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 241 188.76 L 237 180.76 L 241 182.76 L 245 180.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 101 226 L 202.76 226" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 208.76 226 L 200.76 230 L 202.76 226 L 200.76 222 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 301 361 L 301 269.24" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 301 263.24 L 305 271.24 L 301 269.24 L 297 271.24 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 241 261 L 241 352.76" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 241 358.76 L 237 350.76 L 241 352.76 L 245 350.76 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 331 243.5 L 434.76 242.11" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 440.76 242.03 L 432.82 246.14 L 434.76 242.11 L 432.71 238.14 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 443 208 L 339.24 208.46" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 333.24 208.49 L 341.22 204.45 L 339.24 208.46 L 341.25 212.45 Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="301" y="131" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 141px; margin-left: 321px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">run</div></div></div></foreignObject><text x="321" y="146" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">run</text></switch></g><rect x="176" y="131" width="60" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 141px; margin-left: 206px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">commit</div></div></div></foreignObject><text x="206" y="146" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">commit</text></switch></g><rect x="121" y="231" width="50" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 241px; margin-left: 146px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">build</div></div></div></foreignObject><text x="146" y="246" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">build</text></switch></g><rect x="191" y="301" width="50" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 311px; margin-left: 216px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">push</div></div></div></foreignObject><text x="216" y="316" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">push</text></switch></g><rect x="301" y="301" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 311px; margin-left: 321px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">pull</div></div></div></foreignObject><text x="321" y="316" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">pull</text></switch></g><rect x="371" y="184" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 194px; margin-left: 391px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">load</div></div></div></foreignObject><text x="391" y="199" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">load</text></switch></g><rect x="366" y="243" width="50" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 253px; margin-left: 391px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 15px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">save</div></div></div></foreignObject><text x="391" y="258" fill="#000000" font-family="Helvetica" font-size="15px" text-anchor="middle">save</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

[docker在线版](https://labs.play-with-docker.com/)，每次申请可使用4个小时，本文所有的示例都是在它基础上实现。

## 名词解释

### 仓库

[Docker Hub](https://hub.docker.com/)是Docker官方维护的一个仓库，用来存储镜像。

### 镜像

类似于已经打包好的代码，如系统安装所需的iso文件。

### 容器

镜像文件运行在容器中，可以理解为一个虚拟机。

### Dockerfile

Dockerfile是Docker的配置文件，通过这个配置文件能够获取到相应的镜像。

### tar文件

镜像文件保存后便形成了一个tar文件。

## 基础命令

### pull

```bash
docker pull mysql
```

从docker仓库中拉取mysql镜像，默认拉取的是最新版本镜像，在镜像后面加上":latest"同效果，其他版本镜像一次类推。

### images

```bash
docker images
```

查看本地有哪些镜像。

### run

```bash
docker run -d -it -name mysql-test -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 mysql
```

run指令运行本地的镜像，-d代表后台运行 -it代表代表是可交互，-e代表设置容器中的环境变量，-p代表运行的端口，mysql代表将要运行的镜像。--name也可以不指定，也会随机生成一个名字。

### ps

```bash
#列出所有在运行的容器名称
docker ps
#列出所有的容器
docker ps -a
```

使用上述命令可以查看容器是否在运行之中。

### exec

```bash
docker exec -it 593b87f33c7b bash
```

进入容器的内部操作，-it代表交互式的，对该容器执行bash命令，593b87f33c7b代表容器号，即CONTAINER ID，镜像通过run命令进行运行状态，会在下面展示完整的ONTAINER ID，也可以通过ps进行查看。

基础的使用，基本上只涉及到上面几个操作。但是对于镜像的制作还需要一些时间去学习。

### stop

停止一个正在运行的容器。

```bash
docker stop xxxxx
```

### rm

删除容器，需要注意的是，容器的状态需要是停止状态，运行中的容器不可用这条命令删除。

```bash
docker rm xxxxx
```

## 示例

### mysql

```bash
#拉取mysql镜像
docker pull mysql
#运行mysql镜像 密码为123456
docker run -d -it --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
#进入运行mysql的容器内部
docker exec -it xxxxxx bash
#登陆mysql
mysql -uroot -p
```

上述进入mysql的容器中，当存在对汉字操作的时候可能会出现汉字异常无法出现的情况，此时只需要在进入容器的时候制定字符集即可。

```bash
docker exec -it -e LANG=C.UTF-8 xxxxxx bash
```

### nginx

```bash
#拉取nginx镜像
docker pull nginx
#运行nginx镜像
docker run -d --name nginx-test -p 80:80 nginx
#进入运行nginx的容器内部
docker exec -it xxxxxx bash
```

### ubuntu

```bash
#拉取ubuntu镜像
docker pull ubuntu
#运行ubuntu镜像
docker run -itd ubuntu
#进入运行ubuntu镜像容器的内部
docker exec -it xxxxxx bash
```