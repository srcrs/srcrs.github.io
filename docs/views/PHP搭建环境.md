---
title: PHP搭建环境
date: 2020-02-13
categories:
 - Note
tags:
 - PHP
---
## 简述

搭建php环境需要用到三个软件

1. Apache：用作搭建服务器
2. PHP：用作解析php代码
3. Mysql：用作数据存储

下载Apache的时候我可是费了老劲了，短短10M我几乎花了五个小时才下载玩。在将PHP加载到Apache中的时候需要需要注意它们的版本，否则将会加载失败，我这里`PHP2.2.25`和`httpd5.4.8`、`PHP2.4.23`和`httpd7.4.2`是可以匹配成功的（httpd是Apache超文本传输协议(HTTP)服务器的主程序，下载Apache就是它），希望不要再踩坑了。

可以参考[学习地址](`https://www.bilibili.com/video/av12863134`)中老师讲的，完美配置。

## 下载

apache有支持https的，给的是不支持的。适用于64位Windows10计算机。

Apache下载地址：[点我](https://www.lanzous.com/i9auove)

PHP下载地址：[点我](https://www.lanzous.com/i9ahfbc)

Mysql下载地址：[点我](https://www.lanzous.com/i93viof)

## 安装

安装就不需要多说了，为了方便以后的配置，建议在D盘目录下建立一个名称为`server`的文件夹，将三个软件都安装在这个文件夹中

+ httpd的安装目录为`D:\server\apache`

+ PHP的安装目录为`D:\server\php7`

php是压缩包，不需要安装，只需要将里面的文件放到php7中就可以了

+ Mysql的安装目录`D:\server\mysql`

## 配置

1. 将`D:\server\apache\bin`配置到环境变量中，mysql因为我是之前就安装了，如果没有环境变量也需要把它的bin目录加载进来。

2. 打开`D:\server\apache\conf\httpd.conf`

需要认识几个地方

3. 37行的`ServerRoot`就是服务的根目录，这里不需要修改。

4. 将220行的`#ServerName localhost:80`修改成`ServerName localhost`,这里是服务的名字。

5. 58行的`Listen 80`这里是服务监听的端口，通常不需要修改。

6. 配置DNS域名解析

打开`C:\Windows\System32\drivers\etc\hosts`，注意要给管理员权限（但是我的给了也不行，后来用vscode才修改成功，今天再一看又可以修改了，迷），在最后一行添加

`127.0.0.1       localhost`

7. 三项配置

在178行后面添加

```yaml
#加载PHP
LoadModule php7_module 'D:/server/php7/php7apache2_4.dll'
#将PHP配置文件加载到Apache配置文件
PHPIniDir 'D:/server/php7/php.ini'
#分配给PHP
AddType application/x-httpd-php .php
```

8. 将`D:\server\php7\php.ini-development`复制一份，然后将`php - 副本.ini-development`修改为`php.ini`

## 将MySQL加载到PHP中

这里我就简短的说明一下，因为如果只是学习php语言的话很可能用不到。但是很重要。

在上面推荐的视频中，使用的时`php5.4.8`版本，有mysql的扩展，但是下载的软件时`php7.4.2`版本，在这哥版本中已经删掉了`php_mysql.dll`扩展，但是可以使用`php_pdo_mysql.dll`来代替。

1. 打开`D:\server\php7\php.ini`

2. 搜索`pdo_mysql`,将927行`;extension=pdo_mysql`修改成`extension=pdo_mysql`

3. 搜索`extension_dir`在757行后面添加

```ini
;增加扩展路径
extension_dir = "D:/server/php7/ext"
```

至此mysql已经加载成功，pdo是一个连接mysql数据库的工具。

## 检查

打开CMD命令行，输入`httpd -t`指令，可以检查是否有语法错误，如果返回

```yaml
'httpd' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```

说明是没有配置环境变量。

`httpd -M`可以看哪写模块加载到服务程序中。

注意每次更改配置文件都要重启一下。

## 测试

如果前面一切都没有问题，那么现在就可以测试了

在`D:\server\apache\htdocs`中新建一个`index.php`,里面内容为

```php
<?php
  echo 'hello world';
?>
```

在浏览器输入`http://localhost/index.php`正常时可以返回`hello world`的。不清楚的可以参考上面推荐的视频。
