module.exports = {
  "base":"/",
  "title": "GORS工作室",
  "description": "不断坚守善良，诚实，责任和学习",
  "dest": "docs", //打包生成的默认路径
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "http://gitee.com/karqical/image/raw/master/wx/header-r.png"
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
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/karqical",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": "auto",
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标记"
      }
    },
    "friendLink": [
      {
        "title": "Areas",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "karqical@qq.com",
        "link": "https://www.cnblogs.com/areas/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 20,
    "lastUpdated": "Last Updated",
    "author": "Karl Du",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
}