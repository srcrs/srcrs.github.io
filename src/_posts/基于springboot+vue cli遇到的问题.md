---
title: 基于springboot+vue cli遇到的问题
date: 2020-07-22
category: Note
tags:
    - web
permalink: /posts/202007221.html
---

:::tip
做了一个简单的图书管理系统，也就是实现了CRUD，记录一下中间遇到的问题，以及解决的办法。
:::

<!-- more -->

前后端分离，但是还没有加入权限认证，也是为加入权限认证做准备吧。

## vue组件之间如何嵌套

在以前的html中，一个页面显示的就是一个页面的内容，例如如果只是改变其中一部分内容，也是要重新写一个页面，引入了vue之后就不是这样了，页面还是那个页面，只是页面中出现的vue组件不同，因而渲染出不同的效果，同一个页面可由多个或者一个vue组件构成。

在路由index.js加入如下内容

```js
{path: '/home', name: '图书管理' , component: Home,redirect: '/viewBook',
  children: [
    {path: '/viewBook', name: '查看图书' ,component: ViewBook},
    {path: '/addBook', name: '添加图书' ,component: AddBook},
    {path: '/updateBook', name: '修改图书' ,component: UpdateBook},
  ]
},
```

`path`便代表访问这个页面的路径，`component`代表父组件的名字，`redirect`代表重定向，当用户访问这个路径，重定向到`viewBook`页面，`children`定义子组件，为数组类型，将在父组件中部分区域出现，其实也就是在父组件中`<router-view/>`位置出现。

## 如何动态读取路由以列表形式展示并进行路由跳转

有这样一个需求，用了element ui的布局，侧边栏有一级目录，二级目录等等，希望父组件自动添加在一级目录，它的子组件，添加到它的二级目录，其实用手写也是可以的，但是当组件多的时候，这是不方便的，还有就是点侧边栏的目录如何进行页面切换，我也没有搞明白。

这里用到了vue的v-for感觉很好用啊，记得那时候自己纯原生用jsp和jquery可难受，列表可以展示，但是如何选择并请求后端接口，太麻烦。

```js
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['0','1']">
        <el-submenu v-for="(item,index1) in $router.options.routes" v-if="item.path !== '/'" :index="''+index1">
            <template  slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item v-for="(items,index2) in item.children" :index="items.path">{{items.name}}</el-menu-item>
        </el-submenu>
    </el-menu>
</el-aside>
```

`v-for`类似`c`，`java`的`for`循环，`$router.options.routes`取的是路由的列表，但是都是一级目录，`v-xxx`等等都是写在标签之中，`:index`是唯一标识一个标签，当用户点击就会跳转到`:index`的值，如果它是一个路径的话，这也因此就能实现点击进行页面的切换，实际上是`vue`组件的切换。

`(item,index1)`第一个值`item`代表每次循环所取得的数组元素，`index1`代表数组得下标。

## 前端分页，后端如何分页查询

分页在此之前我也没有个概念，只知道把数据库数据部分查出来，或者全部查出来，其实，在此之前老师上课也讲过分页查询，只不过那时候不知道分页查询有什么用。

在前端需要分页的页面中，需要添加如下内容：

```js
<el-pagination
    background
    layout="prev, pager, next"
    :page-size="pageSize"
    @current-change="page"
    :total="total">
</el-pagination>
```

`page-size`代表每一页有多少个元素，`total`代表一共有多少个元素，前边的`:`代表与元素进行绑定，`@current-change="page"`代表当分页页面发生变化时，也就是用户点击发生跳转页面，将会触发`page`方法，可以对里面进行传参，代表跳转到了哪一页，这个很方面。

page方法是这样的。`currentPage`便是代表跳转到了哪一页，使用`_this`原因是因为在`axios.get`内部有回调函数，如果还是使用this的话，这个this将会指向回调函数，会取不到值。

```js
page(currentPage){
    const _this = this;
    if(currentPage==1){
        _this.pages = 0;
    }
    else{
        _this.pages = (currentPage-1) * _this.pageSize;
    }
    axios.get('http://47.92.23.236:9090/book/findByPage/'+_this.pages+'/'+_this.pageSize).then(function (resp) {
        _this.tableData = resp.data;
    })
}
```

这里的axios请求传入了两个参数一个是，需要跳转到哪个页面，页面的大小是多少，只需要进行简单计算起始位置，正好对应了后端limit，起始位置，元素个数。

后端应该怎么做，接收到请求，拿到两个参数，查询数据库，返回结果，简单写下sql分页查询。这里`start`便代表开始的位置，`size`代表页面元素的个数。

```xml
<select id="findByPage" parameterType="map" resultType="book">
    select * from book limit #{start},#{size}
</select>
```

## 前后端分离解决跨域问题

也可以在每个`controller`类上添加注解去解决，但是不如添加一个配置类来的方便。在你的springboot项目中添加如下类。

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET","HEAD","POST","PUT","DELETE")
                .allowCredentials(true)
                .maxAge(3600)
                .allowedHeaders("*");
    }
}
```