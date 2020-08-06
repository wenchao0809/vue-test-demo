import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import('./test-source-map').then((r) => r.default())
console.log(2)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
  