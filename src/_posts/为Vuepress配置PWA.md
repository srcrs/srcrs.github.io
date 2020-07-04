---
title: 为Vuepress配置PWA
date: 2020-01-27
category: Other
tags:
 - PWA
permalink: /posts/202001271.html
---
今天给博客配置了一个`PWA`，开始的时候按照官网的配置，以为就像是写文章一样，在本地测试就可以看到效果，结果踩了坑，一直都没有成功，最好找了好多的例子，发现我与他们的配置都差不多，就上传到`github`上，是可以使用的。原来本地是不能使用的，害我走了那么多弯路。

## 安装插件

```sh
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```

通过`yarn`或者`npm`都可以安装

## 使用插件

```js
module.exports = {
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,//用于缓存页面类容，供离线使用
      updatePopup: true  //用于刷新类容的弹窗
    }],
}
```

## 简单配置

为了使网站完全兼容PWA，需要做两件事：
- 在`.vuepress/public`添加`manifest.json`文件和`icons`文件夹
- 在`.vuepress/config.js`添加正确的head links

### manifest.json的例子

```json
{
  "name": "srcrs",//用户主屏幕上的名字
  "short_name": "srcrs",//当屏幕较小显示的短名字
  "icons": [//添加到主屏幕之后的图标，生成的web应用图标
    {
      "src": "/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/index.html",//设置启动网址
  "display": "standalone",//设置启动样式，隐藏浏览器的URL地址栏
  "background_color": "#fff",//设置启动页面的背景颜色
  "theme_color": "#3eaf7c"//设置地址栏的颜色
}

```

### 在Vuepress完全兼容PWA的例子

```js
   head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],//站点图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
```

在`public`中添加站点图标，在`icons`中添加应该缺少的图片，部署之后就可以使用了。
