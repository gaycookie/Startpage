import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchEngines: [
      { name: 'Google', url: 'https://www.google.com/search?q=${query}', icon: 'google' },
      { name: 'Bing', url: 'https://www.bing.com/search?q=${query}', icon: 'bing' },
      { name: 'Yahoo', url: 'https://search.yahoo.com/search?p=${query}', icon: 'yahoo' },
      { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=${query}', icon: 'duckduckgo' },
      { name: 'Baidu', url: 'https://www.baidu.com/s?wd=${query}', icon: 'baidu' },
      { name: 'Yandex', url: 'https://yandex.ru/search/?text=${query}', icon: 'yandex' },
      { name: 'Qwant', url: 'https://www.qwant.com/?q=${query}', icon: 'qwant' },
      { name: 'StartPage', url: 'https://startpage.com/do/search?q=${query}', icon: 'startpage' }
    ],
    userOptions: {
      themeOptions: {
        dark: true,
        accentColor: ''
      },
      searchEngineOptions: {
        selected: 'Google',
        openInNewTab: true
      },
      wallpaperOptions: {
        source: 'url',
        options: {
          value: 'https://share.gaycookie.dev/zudO9/vugehani07.jpg/raw'
        }
      },
      timeOptions: {
        timeFormat: '24h',
        dateFormat: 'MMMM Do YYYY',
        blinking: true
      },
      weatherOptions: {
        location: '',
        units: '',
        apiKey: '',
      },
      shortcutsOptions: {
        shortcuts: [
          {
            name: 'Source Code',
            icon: 'fa-brands fa-github',
            url: 'https://github.com/gaycookie/Startpage'
          }
        ],
        openInNewTab: true,
      }
    }
  },
  getters: {
    searchEngines: state => state.searchEngines,
    themeOptions: state => state.userOptions.themeOptions,
    userOptions: state => state.userOptions,
    searchEngineOptions: state => state.userOptions.searchEngineOptions,
    wallpaperOptions: state => state.userOptions.wallpaperOptions,
    timeOptions: state => state.userOptions.timeOptions,
    weatherOptions: state => state.userOptions.weatherOptions,
    shortcutsOptions: state => state.userOptions.shortcutsOptions,
    shortcuts: state => state.userOptions.shortcutsOptions.shortcuts
  },
  mutations: {
    getOptionsFromStorage(state) {
      if (localStorage.getItem('userOptions')) {
        state.userOptions = JSON.parse(localStorage.getItem('userOptions'))
      } else {
        localStorage.setItem('userOptions', JSON.stringify(state.userOptions))
      }
    },
    saveOptionsToStorage(state) {
      localStorage.setItem('userOptions', JSON.stringify(state.userOptions))
    },
    addShortcut(state, shortcut) {
      state.userOptions.shortcutsOptions.shortcuts.push(shortcut)
      this.commit('saveOptionsToStorage')
    }
  },
  actions: {

  },
  modules: {

  }
})
