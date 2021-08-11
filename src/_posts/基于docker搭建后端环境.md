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

## 改版

使用Apache服务器会出现一些我解决不了的问题，无法安装yaf扩展，下面使用nginx来实操

### 安装

```sh
#运行ubuntu容器镜像
docker run -itd -p 10001:80 --name mytest ubuntu:20.04
#进入容器的内部
docker exec -it mytest bash
#更新apt库
apt-get update
#安装nginx
apt-get install nginx
#启动nginx
service nginx start
#检查nginx是否启动成功
service nginx status
#安装php-fpm
apt-get install php7.4-fpm php7.4-dev
#启动php-fpm
service php7.4-fpm start
#检查php-fpm的状态
service php7.4-fpm status
#安装vim
apt-get install vim
#安装wget
apt-get install wget
#安装yaf
wget http://pecl.php.net/get/yaf-3.2.3.tgz
tar -zxvf yaf-3.2.3.tgz
cd yaf-3.2.3
phpize
./configure --with-php-config=/usr/bin/php-config
make
make install
#在php.ini增加如下
extension_dir = "/usr/lib/php/20190902/"
extension = yaf.so
#安装git
apt-get install git
#克隆yaf官方
git clone https://github.com/laruence/yaf.git
#进入代码生成器目录
cd yaf/tools/cg
#生成基础项目
php yaf_cg -a test -d /var/www/html
#在docker外执行创建yaf基础项目
docker exec mytest /bin/bash -c 'cd /root/yaf/tools/cg && php yaf_cg -a test -d /var/www/html/test'
```

### 目录说明

docker路径 | 本地路径 | 说明 
-|-|-
/var/log/nginx | logs/nginx | nginx日志
/etc/nginx/nginx.conf | configs/nginx/nginx.conf | nginx配置文件（做了更改）
/etc/nginx/conf.d | configs/nginx/conf.d | nginx配置文件（做了更改）
/etc/php/7.4/fpm/php-fpm.conf | configs/php-fpm/php-fpm.conf | fpm配置文件
/etc/php/7.4/fpm/pool.d | configs/php-fpm/pool.d | fpm配置文件
/etc/php/7.4/fpm/php.ini | configs/php-fpm/php.ini | php配置文件
/var/www/html | configs/webroot | nginx容器

## 发布镜像

```sh
#将容器打包成镜像，容器终止态
docker commit -a "srcrs" -m "base nginx yaf" mytest  srcrs/nginx-yaf:1.0
docker push srcrs/nginx-yaf:1.0
```

## 参考文章

[如何在 Ubuntu 20.04 上安装和使用 Docker Compose](https://www.gingerdoc.com/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

[docker简单操作&安装Apache和php](https://blog.csdn.net/slavik_/article/details/82887025?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-9.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-9.control)

[Yaf入门三之依赖管理工具Composer的使用](https://blog.csdn.net/SGQ_CSDN/article/details/79405495)

[安装PECL（包括PHP5以及PHP7）,涵盖常用操作系统](https://blog.csdn.net/Douz_lungfish/article/details/103799769)