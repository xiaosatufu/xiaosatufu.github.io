export default {
  title: "K", // 博客的标题
  description: "111", // 博客的介绍
  // base: "/blog/", // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
  themeConfig: {
    logo: "/tree-bro.png", // 页面上显示的logo
    nav: [
      // 页面右上角的导航
      // { text: "vue", link: "/articles/vue2/上传素材到COS" },
      // { text: "uniapp", link: "/articles/uniapp/一键登录" },
      // {
      //   text: "博客文档",
      //   items: [
      //     // 可以配置成下拉
      //     {
      //       text: "JavaScript 核心系列",
      //       link: "/articles/javaScript-core/构造函数、原型、原型链",
      //     },
      //     { text: "Vue 三方组件库", link: "/articles/libs/VForm3低代码初体验" },
      //     { text: "其他", link: "/articles/other/nvm管理node" },
      //   ],
      // },
      {
        text: "Vue",
        items: [
          // 可以配置成下拉
          {
            text: "Vue2",
            link: "/articles/vue/vue2/index.md",
          },
          {
            text: "Vue3",
            link: "/articles/vue/vue3/index.md",
          },
          {
            text: "vue-router",
            link: "/articles/vue/vue-router/index.md",
          },
          {
            text: "VueX",
            link: "/articles/vue/vuex/index.md",
          },
          {
            text: "常用插件",
            link: "/articles/vue/vue 常用组件库.md",
          },
        ],
      },
      {
        text: "JavaScript",
        items: [
          // 可以配置成下拉
          {
            text: "学习资料",
            link: "/articles/JavaScript/index.md",
          },
          {
            text: "工具函数",
            link: "/articles/JavaScript/utils.md",
          },
          {
            text: "jquery",
            link: "/articles/JavaScript/jquery.md",
          },
          {
            text: "webSocket",
            link: "/articles/JavaScript/webSocket.md",
          },
        ],
      },
      {
        text: "HTML",
        items: [
          // 可以配置成下拉
          // {
          //   text: "学习资料",
          //   link: "/articles/Javascript/index.md",
          // },
          {
            text: "移动端",
            link: "/articles/Html/mobile.md",
          },
        ],
      },

      { text: "CSS", link: "/articles/Css/index.md" },
      { text: "TypeScript", link: "/articles/TypeScript/index.md" },
      { text: "Flutter", link: "/articles/Flutter/index.md" },
      { text: "微信小程序", link: "/articles/MiniPrograme/index.md" },
      { text: "Vite", link: "/articles/Vite/index.md" },
      { text: "Pinna", link: "/articles/Pinna/index.md" },
      { text: "Git", link: "/articles/Git/index.md" },
      { text: "Website", link: "/articles/Website/index.md" },
      { text: "Linux", link: "/articles/Linux/index.md" },
      { text: "VsCode", link: "/articles/Vscode/index.md" },
      { text: "正则", link: "/articles/Reg/index.md" },
      { text: "乱炖", link: "/articles/乱炖/index.md" },
      { text: "导航", link: "/articles/Navigator/index.md" },
    ],
    sidebar: {
      // 侧边栏，可以分组
      "/articles/vue2/": [
        {
          text: "代码段",
          items: [
            {
              text: "上传素材到COS",
              link: "/articles/vue/上传素材到COS",
            },
            {
              text: "文件下载",
              link: "/articles/vue/文件下载",
            },
          ],
        },
      ],
      "/frontend/": [
        {
          isGroup: true,

          text: "大前端",
          items: [
            {
              text: "javascript",
              link: "/frontend/javascript",
            },
            {
              text: "浏览器",
              link: "/frontend/browser",
            },
            {
              text: "node",
              link: "/frontend/nodejs",
            },
            {
              text: "http",
              link: "/frontend/http",
            },
          ],
        },
      ],
      "/articles/uniapp/": [
        {
          text: "基础",
          items: [],
        },
        {
          text: "代码段",
          items: [
            {
              text: "一键登录",
              link: "/articles/uniapp/一键登录",
            },
          ],
        },
      ],
      "/articles/javaScript-core/": [
        {
          text: "基础",
          items: [
            {
              text: "1. 构造函数、原型、原型链",
              link: "/articles/javaScript-core/构造函数、原型、原型链",
            },
            {
              text: "2. 执行上下文和执行上下文栈",
              link: "/articles/javaScript-core/执行上下文和执行上下文栈",
            },
            {
              text: "3. this的指向",
              link: "/articles/javaScript-core/this的指向",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/articles/libs/": [
        {
          items: [
            {
              text: "1. VForm3低代码初体验",
              link: "/articles/libs/VForm3低代码初体验",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "twitter", link: "https://github.com/mlyz-wdy" }], // 可以连接到 github
    footer: {
      message: "其实我也不知道写啥注脚",
      copyright: "那我就随便写个吧",
    },
  },
};
