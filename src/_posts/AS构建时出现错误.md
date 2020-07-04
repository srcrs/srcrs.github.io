---
title: AS构建时出现错误
date: 2020-02-27
category: Note
tags:
 - Android
permalink: /posts/202002271.html
---

:::tip
解决Gradle build时出现 Cause: unable to find valid certification path to requested target 错误
:::

<!-- more -->

## 简述

今天遇到了一个问题，AS在构建项目时就出现这个错误，从网上找说是因为，什么证书问题，一想这么麻烦，在自己电脑上从未出现这样的问题，安装步骤都是一样的，环境也都改的差不多了，按照往常的步骤，在部署时就是会出现这个错误，很迷。

下面是我参考的方法，但是两个都不一定有用，因为我用的时候是失败的，至于第二个还有错别字，我有点读不懂，但确实是这里来的一个偶然的发现。

## 第一个方法

修改项目的 `build.gradle` 文件

```md
allprojects {
    repositories {
        google()
        jcenter()
    }
}
```

修改后

```md
allprojects {
    repositories {
        google()
        jcenter()
        //新添加的
        mavenCentral()
        mavenLocal()
    }
}
```

起初是一点也不能下载，但是加上这个之后会下载一部分，但是还是不行，不知道清除缓存之后行不行，没有试过。

## 第二个方法

修改AS的Gradle配置

```md
路径
File | Settings | Build, Execution, Deployment | Gradle
找到Gradle配置页
将 Global Gradle settings中的Offine work前面的对勾去掉，Apply保存。
最后然后 Build | Clean Project。
```

这个方法很奇怪，默认的情况下 `Offine work` 前面的对勾是没有打上的，我参考的那篇文章写的是 `对勾去点` 我就默认以为打错了，但是为什么要写上呢？

## 我解决的方法

开始我没有发现我找到的就是gradle的配置页，因此就有了这一种方法。

```md
路径
File | Settings | Build, Execution, Deployment | Gradle | Android Studio
找到 Enable embedded Maven repository，将前面打上对勾，然后Apply保存，OK。
```

修改项目的 `build.gradle` 文件

将

```md
buildscript {
    repositories {
        google()
        jcenter()
    }
}
```

和

```md
allprojects {
    repositories {
        google()
        jcenter()
    }
}
```

修改为

```md
buildscript {
    repositories {
        //google()
        //jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven{ url 'https://maven.aliyun.com/repository/jcenter'}
    }
}
```

和

```md
allprojects {
    repositories {
        //google()
        //jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven{ url 'https://maven.aliyun.com/repository/jcenter'}
    }
}
```

但是我并不知道为什么能解决这个问题，于是我想查了一下 `Enable embedded Maven repository` 有什么作用，但是并无所获。

这句中文意思是 `启用嵌入式Maven存储库` ，根据字面意思我并不理解实际有何作用，但是确实可以解决遇到的问题。