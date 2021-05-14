---
title: 在Vue.js项目中添加Echarts
date: 2021-05-04
tags: 
    - 前端
category: Other
permalink: /posts/202105041.html
---

## 背景

在毕设项目中需要使用报表展示一些数据，如生成当月的销售额、用户购买量分析、用户来源等等，在网上找到可以使用Echarts来做这件事情，只需要提供相应的数据即可。

## Echarts是什么

[Echarts](https://github.com/apache/echarts)是一个使用JavaScript实现的开源可视化库，可以生成各种各样的图表，基本涵盖了各行各业的图表需求。最新的版本是Echarts 5，参考[Echarts官网文档](https://echarts.apache.org/zh/tutorial.html)，可快速的在前端项目中生成可视化图表。

## Echarts的使用

只介绍在Vue项目中的使用，以及我遇到的一些问题。