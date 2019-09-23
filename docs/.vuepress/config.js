module.exports = {
  "title": "",
  "description": "",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
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
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      //  },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/head.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart"
  ]
}