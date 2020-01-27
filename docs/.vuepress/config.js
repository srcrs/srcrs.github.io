module.exports = {
  "title": "srcrs",
  "description": "A place with all of me",
  "dest": "public",
  "base": "/",
    head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'application-name', content: 'srcrs' }],
	['meta', { name: 'apple-mobile-web-app-title', content: 'srcrs' }],
    ['meta', { name: 'msapplication-starturl', content: '/' }],
	[
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
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
            "link": "https://github.com/srcrs",
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
  //  "logo": "/",
    "search": true,
    "searchMaxSuggestions": 10,
    //"sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "",
    "record": "京ICP备51666888号-1",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart",
    "ribbon",
	['@vuepress/pwa', {
      serviceWorker: true
    }],
	["@vuepress-reco/loading-page", false] //去掉动画
  ]
}