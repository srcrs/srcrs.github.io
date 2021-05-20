---
title: Linux操作系统之用户管理
date: 2021-05-20
category: Linux
tags:
   - Linux
permalink: /posts/202105201.html
---

Linux是一个多用户多任务的操作系统，在过去只使用过root账号，它是一个特殊的账号，在Linux系统中具有最高的权限。其他的用户都需要通过root账号去管理。

## 用户组

在Linux系统中，每一个用户都会存在于一个用户组中，如果在创建用户的时候没有指定用户组，默认用户组和用户名同名。

## 创建用户

使用useradd命令可以创建一个新的用户，但是这种方式并不能将用户添加到一个已有的用户组中。

```bash
useradd xiaoming
```

如果要将新用户添加到用户组中，需要使用-d命令。

```bash
useradd -d /home/users xiaoming
```

## 设置或更新密码

用户登陆需要用户名和密码，上面的操作，仅仅是创建了用户，还不知道用户名和密码，设置密码则需要userpw命令。

```bash
userpw xiaoming
```

## 删除用户

当用户在系统中不再存在的时候，则应该将该用户删除。

```bash
userdel xiaoming
```