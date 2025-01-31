import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Made By Li，Designed By VitePress",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '链接', items:[
        {text:'MCJPG',link:'https://mcjpg.org'},
        {text:'LobeChat',link:'https://chat.mcjpg.org/chat'},
        {text:'VitePress',link:'https://vitepress.dev'}
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        
      }
    ],

    socialLinks: [
    ]
  }
})