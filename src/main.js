import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

store.commit('getOptionsFromStorage')
import '@/assets/style.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
