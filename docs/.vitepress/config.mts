import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Made By Li",
  description: "无锡地铁",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/Li.ico' }]
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
          { text: 'LobeChat', link: 'https://chat.mcjpg.org/chat' },
          { text: 'VitePress', link: 'https://vitepress.dev' }
        ]
      }
    ],
    sidebar: [
      {
        text: '无锡地铁',
        items: [
          { text: '引言', link: '/metro/metro_index' },
          {
            text: '1号线', collapsed: true, items: [
              { text: '1号线简介', link: '/metro/line_1_intro' },
              { text: '1号线站点明细', link: '/metro/line_1_station' },
            ]
          },
          {
            text: '2号线', collapsed: true, items: [
              { text: '2号线简介', link: '/metro/line_2_intro' },
              { text: '2号线站点明细', link: '/metro/line_2_station' },
            ]
          },
          {
            text: '3号线', collapsed: true, items: [
              { text: '3号线简介', link: '/metro/line_3_intro' },
              { text: '3号线站点明细', link: '/metro/line_3_station' },
            ]
          },
          {
            text: '4号线', collapsed: true, items: [
              { text: '4号线简介', link: '/metro/line_4_intro' },
              { text: '4号线站点明细', link: '/metro/line_4_station' },
            ]
          },
          {
            text: 'S1线', collapsed: true, items: [
              { text: 'S1线简介', link: '/metro/line_S1_intro' },
              { text: 'S1线站点', link: '/metro/line_S1_station' },
            ]
          },
          {
            text: '5号线', collapsed: true, items: [
              { text: '5号线简介', link: '/metro/line_5_intro' },
              { text: '5号线站点', link: '/metro/line_5_station' },
            ]
          },
          {
            text: '6号线', collapsed: true, items: [
              { text: '6号线简介', link: '/metro/line_6_intro' },
              { text: '6号线站点', link: '/metro/line_6_station' },
            ]
          },
          {
            text: 'S2线', collapsed: true, items: [
              { text: 'S2线简介', link: '/metro/line_S2_intro' },
              { text: 'S2线站点', link: '/metro/line_S2_station' },
            ]
          },
          {
            text: '远期规划', collapsed: true, items: [
              { text: '远期规划简介', link: '/metro/far_future_intro' },
              { text: '远期规划7号线', link: '/metro/far_future_line_7' },
              { text: '远期规划8号线', link: '/metro/far_future_line_8' },
              { text: '其它远期规划', link: '/metro/other_far_future' },
            ]
          },
        ]
      }
    ],
    footer: { copyright: 'Copyright © 2025-present, Li' },
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
