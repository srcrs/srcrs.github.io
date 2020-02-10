---
title: 使用ssh连接到gitHub Actions服务器
date: 2020-02-10
categories:
 - Other
tags:
 - ssh
---

:::tip
gitHub Actions以前只是知道可以做持续集成，可以部署静态网站。我就突发奇想，既然是服务器，那么有没有可能，连接到这个服务器，比如可以免费撸一个服务器玩，没想到还真可以。
:::
<!--more-->

## 方案一

[mxschmitt/action-tmate](https://github.com/mxschmitt/action-tmate)

会导致不能进行到下一个步骤，但是没有尝试。打不开正在构建的流程，看不到操作日志，所以查不到ssh连接。

For example

```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1   //这段应该没什么用，拷贝代码，但是代码库是空的。
    - name: Setup tmate session
      uses: mxschmitt/action-tmate@v1
```

## 方案二

[mxschmitt/action-tmate](https://github.com/mxschmitt/action-tmate)

也是通过tmate连接，解决了方案一突出连接后不能进行下一步骤。默认添加了我15分钟自动断开，但是可通过`touch /tmp/keepalive`命令解除。

但是这个会有一个问题，连接成功之后，大概几分钟不进行操作，将会失去控制。这个正在构建的操作日志，很多时候也会打不开，难道是今天太多了？

For example

```yaml
name: Ubuntu
on: [push]
jobs:
  Ubuntu:
    runs-on: ubuntu-latest
    steps:
    - name: Setup Debug Session
      uses: csexton/debugger-action@master
```

## 方案三

[P3TERX/debugger-action](https://github.com/P3TERX/debugger-action)

这个是基于方案二改进的，超时事件设置为30分钟，同时也修改了操作日志大部分时间不能显示的问题。

For example

```yaml
name: Ubuntu
on: push
jobs:
  Ubuntu:
    runs-on: ubuntu-latest
    steps:
    - name: SSH connection to Actions
      uses: p3terx/debugger-action@master
```

## 使用

1. 创建一个工作流

2. 然后把例子代码复制到`.github/workflows/main.yml`中

3. Start commit提交更改

4. 查看操作日志，提取ssh并连接

此时应可以看到,实际上又两个这段代码，找到

`ssh DG62jMpSsns6MNDszJUkzFzLG@sfo2.tmate.io`复制到终端就可以连接上了。我用git终端连接上了。

+ win10 cmd终端我测试是不可以的

+ Xshell 6 终端我测试也是不可以的

```yaml
To connect to this session copy-n-paste the following into a terminal or browser:

ssh DG62jMpSsns6MNDszJUkzFzLG@sfo2.tmate.io

https://tmate.io/t/DG62jMpSsns6MNDszJUkzFzLG

After connecting you can run 'touch /tmp/keepalive' to disable the 30m timeout
```