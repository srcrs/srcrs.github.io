module.exports = {
  "title": " ",
  "description": " ",
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
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://srcrs.github.io",
            "icon": "reco-github"
          },
		  {
			"text": "Gitee",
            "link": "https://srcrs.gitee.io",
            "icon": "reco-github"			
		  },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    vssueConfig: {//评论
      platform: 'github',
      owner: 'srcrs',
      repo: 'comment',
      clientId: '9601fd4196d77c044a86',
      clientSecret: 'cb29c9a4d3e4e6f65718f416ac8ed1df81dec3de',
    },
    "logo": "/head.svg",//个性图标
    "search": true,
	"authorAvatar": '/favicon.svg',//浮动栏图标
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "",
    "record": "京ICP备51666888号-1",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart",
    "ribbon",
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
	[
      '@vuepress/google-analytics',
      {
        'ga': 'UA-151053326-1' // UA-00000000-0
      }
    ],
	["@vuepress-reco/loading-page", false] //去掉动画
  ]
}