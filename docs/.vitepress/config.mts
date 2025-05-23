import { defineConfig } from 'vitepress'
import metroSidebar from './sidebars/metro.mjs'
import schoolSidebar from './sidebars/school.mjs'
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'bilibili-video'
      }
    }
  },
  title: "Made By Li",
  description: "由个人Li创建，一个兴趣结合生活的网站。",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/Li.ico' }],
    ['meta', { name: 'robots', content: 'index, follow' }], 
    ['meta', { property: 'og:title', content: 'Li的主页' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      label: '本页文章',
    },
    sidebarMenuLabel: '页面导航',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索本页",
            buttonAriaLabel: "搜索本页",
          },
          modal: {
            noResultsText: "无结果",
            resetButtonTitle: "清空输入",
            displayDetails: "显示详细信息",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '链接', items: [
          { text: 'MCJPG', link: 'https://mcjpg.org' },
          { text: 'LobeChat', link: 'https://chat.mcjpg.org' },
          { text: 'VitePress', link: 'https://vitepress.dev' }
        ]
      }
    ],
    sidebar: {
     '/metro/': metroSidebar,
     '/school/': schoolSidebar,
    },
    footer: { copyright: 'Copyright © 2025 Li' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg>'
        },
        link: 'https://qm.qq.com/q/7vaK8le9xu'
      },
      { icon: 'github', link: 'https://github.com/liyuhang90/li-web' },
    ],
    darkModeSwitchLabel: '深浅模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  }
})
