---
title: 基于docker搭建后端环境
date: 2019-10-03
tags:
    - 后端
category: Other
permalink: /posts/202108051.html
---

基于docker搭建一整套后端系统。

## 安装docker

```sh
apt-get update
# 安装docker
apt-get install docker.io
# 安装docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## 构建 apache-php镜像

构建docker镜像apache+php，基于ubuntu

```sh
docker pull ubuntu
docker run -itd --name apache-php ubuntu
docker exec -it apache-php bash
apt-get update
apt-get install apache2
apt-get install php
apt-get install libapache2-mod-php
service apache2 start
service apache2 status
```

## 使用composer管理php依赖

```sh
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

## 使用pecl管理php依赖

```sh
apt-get install autoconf libz-dev php7.4-dev php-pear
```

## 安装yaf

```sh
wget -c https://github.com/laruence/yaf/archive/yaf-3.3.3.tar.gz
tar xzvf yaf-3.3.3.tar.gz && cd yaf-3.3.3
phpize
./configure
make
pecl install yaf
```

## 参考文章

[如何在 Ubuntu 20.04 上安装和使用 Docker Compose](https://www.gingerdoc.com/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

[docker简单操作&安装Apache和php](https://blog.csdn.net/slavik_/article/details/82887025?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-9.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-9.control)

[Yaf入门三之依赖管理工具Composer的使用](https://blog.csdn.net/SGQ_CSDN/article/details/79405495)

[安装PECL（包括PHP5以及PHP7）,涵盖常用操作系统](https://blog.csdn.net/Douz_lungfish/article/details/103799769)