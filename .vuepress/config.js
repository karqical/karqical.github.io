module.exports = {
  base: "/",
  title: "GORS工作室",
  description: "不断坚守善良，诚实，责任和学习",
  dest: "docs", //打包生成的默认路径
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "http://gitee.com/karqical/image/raw/master/wx/header-r.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  theme: "reco", // https://vuepress-theme-reco.recoluan.com/
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/karqical",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: "auto",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标记",
      },
    },
    friendLink: [
      {
        title: "Areas",
        desc: "Enjoy when you can, and endure when you must.",
        email: "karqical@qq.com",
        link: "https://www.cnblogs.com/areas/",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 20,
    lastUpdated: "Last Updated",
    author: "Karl Du",
    authorAvatar: "/avatar.png",
    record: "0.0.1.1",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },
  plugins: [
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功~", // default is 'Copy successfully and then paste it for use.'
        duration: 300, // prompt message display time
      },
    ],
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: "...", // 绝对路径
        },
      },
    ],
  ],
};
