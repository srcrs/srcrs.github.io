---
title: 使用Circle CI自动部署Vuepress博客
date: 2021-05-16
category: Other
tags:
 - ci/cd
permalink: /posts/202105161.html
---

## 背景

CI/CD在我的理解中，它是临时跑代码的机器，能够帮助使用者完成特定的任务。Github Actions就是一个这样的东西，在过去，我一直在使用，但是近期可能违反了使用规则，导致被禁用，过去的平衡被破坏，博客不能发布了，自动签到脚本不能运行了。

## 为什么选择Circle CI

市面上大致分为两种：一种需要在自己服务器搭建，一种不需要在自己服务器搭建。对于前者有比较熟知的Jenkins，缺点就是需要自己有一台服务器；对于后者有Travis CI、Github Actions、Circle CI等。之前一直在使用Actions，体验最好，但是被封禁了，Travis CI之前也使用过，在国内访问速度很慢，最近听说由于Actions抢占了太多市场，未来也将会对开源项目进行收费了，也不考虑了。Circle CI就很友好了，每周会有一定的免费的额度，完全够普通用户使用。


## 怎么使用

和其他的CI/CD一样，Circle CI使用的也是Yaml配置文件，方便阅读理解。我的博客框架依托于Vuepress，下面便是Vuepress类型博客部署的一个例子。

```yaml
#Circel CI版本
version: 2.1

#下面可以写很多job
jobs:
  #job名字
  build:
    #环境
    docker:
      - image: circleci/node:latest
    steps:
      # connect to github by ssh
      - add_ssh_keys:
          fingerprints:
          - $FPS
      - checkout
      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-
      - run: npm install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      #一系列操作
      - run: |
          git config --global user.email "srcrs@foxmail.com"
          git config --global user.name "srcrs"
          git checkout gh-pages
          git reset --hard origin/main
          npm run build
          git add .
          git commit -m "auto build"
          git push -f --set-upstream origin gh-pages
#工作流
workflows:
  #name
  build_and_deploy:
    jobs:
      - build:
          #触发的规则
          filters:
            branches:
              only: main
```

设置有缓存，因此安装依赖几乎不花时间，主要时间花费在npm run build，将Markdown转换成Html。

## 结果

过程也是很曲折，参考文档没有看的很明白，提交的请求在两个分支之间形成了闭环，导致了无限次循环，早上起来发现多了100多次commit，最开始触发分支条件设置在了jobs中，两个分支仍然都被触发。后来在文档中看到这种操作可能会出现未知问题，就换到了workflows。索性最后解决了问题。

## 参考

1. [使用 circleci 自动部署 vuepress 到 github](https://www.shuzhiduo.com/A/GBJrP6G3d0/)
2. [Circleci docs](https://circleci.com/docs/)
