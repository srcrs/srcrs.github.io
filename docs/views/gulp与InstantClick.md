---
title: gulp与InstantClick
date: 2019-06-04 22:01:23
tags: 
    - 优化
categories:
          - Other
---

:::tip
最近又在折腾这个博客，虽然快考试了，但是一直也不知道要复习什么，无聊就瞎折腾吧。博客的源文件中的文件中有大量的空白，虽然是一些空格，但是也会占据空间，影响加载速度，本次目的就是为了提高加载速度。
:::

<!-- more -->

## 为什么我要去掉评论

第一个方面就是要提高加载速度，因为评论功能使用的是第三方的，当页面加载的时候，评论功能也是要加载的，在`tools.pingdom.com`中测试网站速度的时候，发现评论占据了大量的时间。第二个方面就是，博客中基本上就是我自己看，也很少有其他的人看，所以评论在那里就非常的尴尬，去掉影响也不是很大。

## gulp压缩

`gulp`是基于流的自动化构建工具，里面包含了众多的插件，使用哪个只要安装就可以使用，最后只要要创建一定的规则就可以使用这些插件。

### 首先我们要先安装的就是gulp

执行`npm install gulp`

### 然后依次执行以下命令

```yaml
npm install gulp-htmlclean//在不改变html结构下缩小
npm install gulp-htmlmin//压缩html
npm install gulp-clean-css//压缩css
npm install gulp-uglify//压缩js
npm install gulp-imagemin//压缩图片
```

网上很多用gulp压缩css插件都用的是`gulp-minify-css`,这在`gulp4.0`已经被放弃，所以上使用上面的css压缩插件

### 然后再在博客根目录中创建gulpfile.js文件

这是文件中的内容

```yaml
var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩 public 目录 html文件
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩 public 目录 css文件
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(cleancss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩 public/js 目录 js文件
gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
// 压缩图片
gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}),
        imagemin.jpegtran({'progressive': true}),
        imagemin.optipng({'optimizationLevel': 7}),
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public/images'))
});
// 默认任务
gulp.task('default', gulp.parallel(
    'minify-html','minify-css','minify-js','minify-images'
));
```

### 使用方法

顺序不能错了

```yaml
hexo clean
hexo g
gulp
```

## InstantClick是什么

`InstantClick`在网上都被别人叫做神器，可以假装网站运行的速度很快，当你的鼠标移动到你要点的那个按钮，后台就会自动开启预浏览模式，也就是当鼠标浮动在按钮之上时，你要点击的事件在后台就已经开始运行了(也许都已经运行完成了)，当你再点击的时候速度当然会提升很多。
具体原理是这样，但是我在使用的时候也没真真切切感觉速度有多么质的飞跃，没啥感觉。
再练习一下流程图吧。


<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="191px" viewBox="-0.5 -0.5 191 391" content="&lt;mxfile host=&quot;www.draw.io&quot; modified=&quot;2020-01-29T09:48:43.573Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36&quot; etag=&quot;bvGo0qIWNHkTRzYQmLeP&quot; version=&quot;12.6.1&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;jJ8nvPJ-jUUiLhiCvK4h&quot; name=&quot;第 1 页&quot;&gt;1VjbjtowEP0aP3ZFYnJ7TCD0oq1UiYftPnoTN0mVxMg4kPTra8fOHSgsZdmVEMocjy8zc+bgAOAiKz9TtIm/kxCnQJ+FJYBLoOtzaPNvAVQSMBxDAhFNQglpHbBO/mAFzhRaJCHeDhwZISlLNkMwIHmOAzbAEKVkP3T7RdLhrhsU4QmwDlA6RZ+SkMUStXWrw7/gJIqbnTXTkSMZapxVJNsYhWTfg6AP4IISwuRTVi5wKnLX5EXOWx0ZbQ9Gcc7OmeB4xrfga5m9VH5uePbT7vF5/klMEMvsUFqoiNcMUaaOzKomD3wtnnKsvDFluDx6Dq2NjrMCkwwzWnEXNcFSBFCEaNKz72VXQXEvsVBhSNUzatftQuYPKuoLMgD1aawhp4AyCWUxiUiOUr9DvaCgOyxW1bhBSZGHtTXjVjfhkZCNcvmNGasUuVHBCIdilqVqFJcJ+ymmPxjKeu6NLEu1cm1UjZGHrqA3N3OSY4msEhF7PS6DEpGcLhMPnBQ0wKc4Ag/Xk+IUsWQ33OBQfdTUHyThW7c80JrKKyJAc1RizsMIMzVrVOX2GK8vvAxrQH3gW8DWgecA3wC2BTxvwo2u2Fqb5avaYZQFzbhzP+jzaVrGSRjQPye9zqiRrgUGaZqQ8d/MU1tLJpxRyzPSfhlreY+hquewEWzcHie1Yz0M5c3Uh6I88jdH1Vc/l10B5QH+L/GNA8Q3gWcA16+J7wLXFg/Oon4wgb0ANu8JBzh67TMHni3cbt4cGnxv3WF+xO4w3kl3aFC/rD006w79AbVJST/YjSBI0XabBINLwQmmvepSYJ1LPudKpl3Xr9YBrXOAqwm5E4K2BK7eiN4M+DbwluLj12LIdY+rn7sCzUvLW2pdK2x30zr7HWmdcS7drLPzfmOtG0uXc5nU6eZbXAWcSYn9PJzK361e/uDtOM7N7t1a5qv7gwL6fwE=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:391px;"><defs/><g><ellipse cx="95" cy="15" rx="40" ry="15" fill="#ffffff" stroke="#000000" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="94.5" y="19.5">Start</text></g><path d="M 40 160 Q 40 250 70 250 Q 100 250 100 340" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><rect x="0" y="130" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="39.5" y="149.5">点击</text></g><path d="M 77.5 28.49 Q 77.5 42 58.75 80 Q 40 118 40 123.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 40 128.88 L 36.5 121.88 L 40 123.63 L 43.5 121.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="110" y="130" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="149.5" y="149.5">浮动在按钮上</text></g><path d="M 112.5 28.49 Q 112.5 42 131.25 80 Q 150 118 150 123.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 150 128.88 L 146.5 121.88 L 150 123.63 L 153.5 121.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 150 290 Q 150 325 122.5 325 Q 95 325 95 353.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 95 358.88 L 91.5 351.88 L 95 353.63 L 98.5 351.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="110" y="260" width="80" height="30" rx="4.5" ry="4.5" fill="#ffffff" stroke="#000000" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="149.5" y="279.5">页面加载完毕</text></g><path d="M 150 160 Q 150 172 150 210 Q 150 248 150 253.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 150 258.88 L 146.5 251.88 L 150 253.63 L 153.5 251.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="95" cy="375" rx="40" ry="15" fill="#ffffff" stroke="#000000" pointer-events="all"/><g fill="#000000" font-family="Helvetica" text-anchor="middle" font-size="12px"><text x="94.5" y="379.5">End</text></g></g></svg>

## InstantClick实现方法

### 首先需要下载创建instantclick.min.js文件

[instantclick.min.js](http://instantclick.io/v3.1.0/instantclick.min.js),直接点击就可以跳转到文件页面，直接点击右键另存为就可以了，或者创建`instantclick.min.js`文件，把链接中的内容复制下来放到里面也可以。
把新创建的文件放在`themes/next/source/js/src`中。

### 如何使用InstantClick

路径`themes/layout/_layout.swig`，打开`_layout.swig`在最下面的`body`(这里怕乱码就不用标签写了)上面，添加以下代码

```yaml
    <script src="/js/src/instantclick.min.js" data-no-instant></script>
    <script data-no-instant>InstantClick.init(true);</script>//里面是true就是默认所有都不预加载
    </body>//不包括
    </html>//不包括，只为了好找
```

这时候，我们就已经完成了，部署到github上，看看效果吧。
hexo博客似乎不支持，我原先以为成功了，原来一直都没有，true原来是所有都不预加载。
备方案：
直接在原位置引用这段就可以了
```yaml
<script src="//instant.page/1.2.2" type="module" integrity="sha384-2xV8M5griQmzyiY3CDqh1dn4z3llDVqZDqzjzcY+jCBCk/a5fXJmuZ/40JJAPeoU"></script>
```