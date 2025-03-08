// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import BackToTop from './components/BackToTop.vue'
import './custom.css' 

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('BackToTop', BackToTop)
  }
} satisfies Theme
