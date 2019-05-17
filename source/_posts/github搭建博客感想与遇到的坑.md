---
title: github搭建博客感想与遇到的坑
date: 2019-05-16 19:44:13
tags: 感悟
categories: 生活
---
世上本没有路，走的人多了，也便成了路。世上还有很多美好的地方，从未踏足，当你选择，抬起右脚的时候，黑暗中，却不知前方是深坑还是平地，硬着头皮踩吧，大不了从头再来。<!--more-->
# 过程
从上周六开始，就在再弄这个东西，每天都会去实现一些东西，一路上，虽然走了很多的弯路，但是，现在我的心里还是很高兴的，一步步hexo框架，本地与github相连接，添加一些小功能，换主题，改背景，持续集成CI。。。。一幕幕，说起来都是泪啊，有时候，为了一个很小的问题，我都要去花费很长时间才能解决掉，掉进坑去，再爬起来，掉进坑去，再爬起来。所幸的是，也算是有了一个结果。
# 遇到的一些坑
我是用hexo框架来做的
## 先就拿本地与github相连接来说吧
好多教程上根目录配置文件都是这样的
```html
deploy:
  type: git
  repository: git@github.com:xxx/xxx.github.io.git
  branch: master
  xxx代表用户名
```
是可以不需要密码就可以相互连接的，但是到我这，不行，起初我还不知道ssh有何用啊，就一直以为是ssh的问题，结果就是怎么着也不行，最后改成了这样的
```html
deploy:
  type: git
  repository: https://github.com/xxx/xxx.github.io.git
  branch: master
  xxx代表用户名
```
结果一下子就成功了，唉，现在想想，当时是真的傻啊。
## 还有就是添加小功能了
比方说，点击有小爱心了，按照教程完完整整的执行，`hexo s`一下，怀着兴奋的心情本地一打开，我点点点，啥也没有啊，再刷新一下，还是没有，最后好像不知道是文件放的位置有问题还是js文件已经失效了，最后又弄了好长时间才弄好
## next主题动态背景问题
平常我们见到的都是一动不动的背景，更多的是看网页中的一些内容，突然看见别人有个动态背景的博客，觉得好羡慕啊，自己也要弄一个，怀着这样的心情，就去做了，看了好多网上的都是老版的next主题，与现在的v7版本，有了一些改变，结果就是各种的出错，看了好多都是这样的
```
canvas_nest: true
```
让把canvas_next后面添加一个true，结果添加上去就开始报错
现在已经变成了这样
```html
canvas_nest:
  enable: true
  onmobile: true # display on mobile or not
  color: "0,0,255" # RGB values, use ',' to separate
  opacity: 0.5 # the opacity of line: 0~1
  zIndex: -1 # z-index property of the background
  count: 99 # the number of lines
```
需要把enable后面改成true，但仅仅如此就可以实现动态背景吗？试一下，结果是不行的，我们要这样做
```html
在_config.yml中有这么一段：
# Dependencies: https://github.com/theme-next/theme-next-canvas-nest
```
说明要想实现，下要下载这个文件的，我们只需要执行以下命令即可
```html
git clone https://github.com/theme-next/theme-next-canvas-nest source/lib/canvas-nest
```
next提供了四种动态背景，其他三种的使用方法大致相同
## 源文件保存问题
做完以上之后，我又想到了一个问题，我们的博客源文件不是一直在我们的电脑上，假如有一天，电脑不在身边或者坏了，那么我们该怎么办呢？对，我们要把代码备份起来，很多人的实现方式是在github上再添加一个分支，用于保存源代码。
好，那我也去这么做吧，`git branch hexo`创建一个新分支hexo，`git checkout hexo`将指针指向hexo，`git add .`暂存所有文件，然后`git commit -m "说明此次更改原因"`将暂存区内容提交到本地版本库，最后`git push origin hexo`将所有文件提交到github上，好吧，传是传上去了，那么我拉下来还能不能用呢？
首先要将hexo分支设置成主分支，`git clone github的地址`将github保存的源文件克隆下来，执行以下三条指令，`npm install hexo`,`npm install`,`npm install hexo-deployer-git`,这时候再在本地检查一下拉下来的源文件是否是否还是原来的样子，
三条指令依次执行 `heox clean`,`hexo g`,`hexo s`,这时候本地服务器就已经搭建成功了，再打开一看，咦，我的动态背景消失了，这时候我就知道了，我掉坑去了，找了一天还是找我班一个大神解决的。
  ### 上传到github上next文件中是空的
这个问题是next文件中隐藏了一个`.git`文件，只要删除就好了
  ### 动态效果没了
这个问题是lib中也会隐藏一个`.git`文件，下面是路径：根目录名\themes\next\source\lib\canvas-nest，~~删除就好~~，不不，还有另外一个问题，很重要，在上面花了很长的时间，`.gitignore`这个文件里面配置的是，在上传过程中哪些文件需要忽略掉，哪些文件很重要，动态效果没了，就是由这两个问题产生的，这个文件的路径是：根目录名\themes\next，这个是next主题，所以就是next，将里面配置文件保存成如下
```html
.DS_Store
.idea/
*.log
*.iml
yarn.lock
package-lock.json
node_modules/
```
其实就是将下面的一大块都删除掉，这时候，我再上传代码到hexo分支时，发现我的动态文件就不会消失了
## 接下来在说说持续集成CI
听到这个名字是不是感觉很高大上，事实上它所实现的，也很能方便我们日常使用博客。假如没有这个东西，我们每次写我们写完博客要怎么操作呢？假如现在是在master分支，好，我现在要使用三条指令将文章更新到github的master分支中，分别是`hexo clean`,`hexo g`,`hexo d`;接下来我还要更新我的hexo源代码分支，需要四条指令`git checkout hexo`,`git add .`,`git commit -m "更新"`,`git push origin hexo`,整整需要7条指令，那么我们用持续集成CI需要几条呢？3条就够了，`git add .`,`git commit -m "更新"`,`git push origin hexo`，让我们更新博客变得更加的简单了，有了更多的时间花费在如何写博客上，而不是去敲打命令，给大家提供一个网址，那上面讲的持续集成CI还不错，
````html
https://easyhexo.com/1-Hexo-install-and-config/1-5-continuous-integration.html#%E4%BB%80%E4%B9%88%E6%98%AF%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%EF%BC%9F
```
