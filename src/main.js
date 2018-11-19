import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as vue2GM from 'vue2-google-maps'
import AsyncComputed from 'vue-async-computed'

import UiToast from '@/components/Toast'

Vue.config.productionTip = false

Vue.use(AsyncComputed)

Vue.use(vue2GM, {
  load: {
    key: process.env.VUE_APP_MAP_KEY,
    libraries: 'places'
  }
})

Vue.component('ui-toast', UiToast)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
