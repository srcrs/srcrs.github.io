---
title: vps安全设置
date: 2021-09-28
tags:
    - vps
category: Other
permalink: /posts/202109281.html
---

系统版本：ubuntu20.04

前不久入手的国外vps被入侵了，发生次数超过三次，发现是因为配置的公钥匙被更改，导致我登陆不上去，并且代码配置的公钥、私钥都被删除，cpu跑满，大概被拉去挖矿了，不知是何种方式入侵的。为了以后减少被入侵的风险，我做了如下配置

### 修改ssh登陆接口

```sh
vim /etc/ssh/sshd_config
#更改端口，自定义
Port: 12312
#重启sshd
/etc/init.d/ssh restart
```

### 禁止root用户远程登陆

```sh
vim /etc/ssh/sshd_config
#禁止root用户登陆，将yes改为no
PermitRootLogin no
#重启sshd
/etc/init.d/ssh restart
```

### 添加自定义用户

```sh
#根据提示操作即可
adduser book
```

### 指定用户切换root无需密码

```sh
#添加wheel用户组
addgroup wheel
vim /etc/pam.d/su
#取消注释
auth       sufficient pam_wheel.so trust
#指定username无需密码切换root
usermod -g wheel book
#未知操作
echo "SU_WHEEL_ONLY yes">>/etc/login.defs
```

## 开启BBR

```bash
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

#开启
sysctl -p

#查看是否开启，结果包含有bbr说明正常
sysctl net.ipv4.tcp_available_congestion_control
lsmod | grep bbr
```

## 设置交换内存

```bash
#设置7G交换内存
dd if=/dev/zero of=/swapfile bs=1G count=7
#设置文件访问权限
chmod 600 /swapfile
#设置改文件为交换分区
mkswap /swapfile
#激活交换分区
swapon /swapfile
#开启永久生效 下行内容写入到该文件 /etc/fstab
/swapfile swap swap defaults 0 0
#验证是否设置成功
swapon --show
free -h
```