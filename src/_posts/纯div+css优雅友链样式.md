---
title: 纯div+css优雅友链样式
date: 2020-07-16
category: Other
tags:
 - 友链
permalink: /posts/202007161.html
---

:::tip
偷了别人的一个友链样式，感觉挺不错的，分享一下。
:::

<!-- more -->

## 正文

因为使用的环境不一样，做了一些改动。我是直接拿出一个页面作为分享链接页面，写在markdown文档中即可生效。使用的时候可能不同的主题显示略微差别，自己修改下就好了。

```html
<div class="page-friends page-common">
<div class="link-title wow rollIn animated" style="visibility: visible; animation-name: rollIn;">博客友链</div>
<ul class="readers-list clearfix">

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="colleague" title="Happy Coding , Happy Life" target="_blank" href="https://liujunzhou.top/"><div>Junzhou Liu</div><div>Happy Coding , Happy Life</div></a></li>

</ul>

<div class="link-title wow rollIn animated" style="visibility: visible; animation-name: rollIn;">学习教程</div>
<ul class="readers-list clearfix">

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="学的不仅是技术，更是梦想" target="_blank" href="http://www.runoob.com/"><div>菜鸟教程</div><div>学的不仅是技术，更是梦想</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="经典模块化前端框架" target="_blank" href="http://www.layui.com/"><div>Layui</div><div>经典模块化前端框架</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="在线学习教程" target="_blank" href="http://www.w3school.com.cn/"><div>w3school</div><div>在线学习教程</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="有编程实战训练" target="_blank" href="https://www.w3cschool.cn/"><div>w3cschool</div><div>有编程实战训练</div></a></li>

</ul>

</div>

<style>
    .clearfix {zoom:1;}
    .clearfix:after {content:'.';display:block;visibility:hidden;height:0;clear:both;}
    .readers-list {list-style:none;}
    .readers-list *{margin:0;padding:0;}
    .readers-list li{position:relative;float:left;margin-top:20px!important;padding:0 10px;}
    .readers-list li a{display:block;border:1px solid #eee;border-left: 3px solid #FF002B;border-radius:7px;padding-left:15px;transition:all .3s;color: white;}
    .readers-list li:nth-of-type(6n+1) a{border-left-color:#FF002B;}
    .readers-list li:nth-of-type(6n+2) a{border-left-color:#FFA900;}
    .readers-list li:nth-of-type(6n+3) a{border-left-color:#00CC00;}
    .readers-list li:nth-of-type(6n+4) a{border-left-color:#00CCFF;}
    .readers-list li:nth-of-type(6n+5) a{border-left-color:#0089FA;}
    .readers-list li:nth-of-type(6n+6) a{border-left-color:#404040;}
    .readers-list li a div{padding:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#999;}
    .readers-list li a div:first-child{border-bottom:1px dashed #eee;font-size:1.3em;color:#666;}
    .readers-list li a:hover {
	-webkit-transform: translateY(-6px);
	transform: translateY(-6px);
	box-shadow: 0 26px 40px -24px rgba(0,0,0,0.3);
}
    .link-title {
	position: relative;
	left: -19px;
	display: inline-block;
	margin: 20px 0;
	font-size: 15px;
	padding: 0 30px 0 25px;
	height: 45px;
	line-height: 45px;
	border-radius: 0 35px 35px 0;
	background: #404040;
	color: #fff;
    }
    @media(min-width:768px){
        .readers-list li{width:50%;}
    }
    @media(max-width:767px){
        .readers-list li{width:100%;}
    }

    .page-common ul li, .page-common ol li {
        margin-bottom: 12px;
    }
    .page-friends ul {
        padding: 0;
        margin: 0;
    }
</style>
```

添加完之后就是这个效果，[点击我查看](https://srcrs.top/share/)

## 参考链接 

[友情链接参考页面](https://icss.me/3300.html)