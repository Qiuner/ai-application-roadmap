import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import ThemeSwitcher from './ThemeSwitcher.vue'
import TimelineDocMeta from './TimelineDocMeta.vue'
import HomeTimeline from './HomeTimeline.vue'
import RootRedirect from './RootRedirect.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeTimeline', HomeTimeline)
    app.component('RootRedirect', RootRedirect)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ThemeSwitcher),
      'doc-before': () => h(TimelineDocMeta),
    })
  }
}
