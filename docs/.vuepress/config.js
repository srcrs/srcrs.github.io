module.exports = {
  "title": "srcrs",
  "description": "A whole place about me",
  "dest": "public",
  "base": "/",
   head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],//站点图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
	['meta', { name: 'viewport', 'content': 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'meteorlxy',
  "themeConfig": {
	    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'srcrs',

      // 个人简介 (支持 HTML)
      description: 'Happy Coding',

      // 电子邮箱
      email: 'srcrszhu@gmail.com',

      // 所在地
      location: 'Xin\'yang City, China',

      // 头像
      avatar: 'head.svg',
      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/srcrs',
        },
      },
    },
    // 上方 header 的相关设置 (可选)
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },
      // 是否在 header 显示标题
      showTitle: true,
    },
	// 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 添加自定义 footer (支持 HTML)
      custom: 'Copyright 2019-present <a href="https://github.com/srcrs" target="_blank">srcrs</a> | MIT License',
    },
	// 个人信息卡片相关设置 (可选)
    infoCard: {
      // 卡片 header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      headerBackground: {

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },
    },
	// 是否显示文章的最近更新时间
    lastUpdated: true,
    // 顶部导航栏内容
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
	  { text: 'Custom Pages', link: 'Custom Pages', exact: false },
	  { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],
	// 分页配置 (可选)
    pagination: {
      perPage: 7,
    },
	// 评论配置
    comments: {
      platform: 'github',
      owner: 'srcrs',
      repo: 'comment',
      clientId: '9601fd4196d77c044a86',
      clientSecret: 'cb29c9a4d3e4e6f65718f416ac8ed1df81dec3de',
    },
  },
  plugins: [
	"vuepress-theme-meteorlxy",
    "flowchart",
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
	[
      '@vuepress/google-analytics',
      {
        'ga': 'UA-151053326-1' // UA-00000000-0
      }
    ]
  ]
}