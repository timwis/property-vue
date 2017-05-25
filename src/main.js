import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Results from './components/results.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/address/:address', component: Results }
]
const router = new VueRouter({ routes })

new Vue({
  el: '#page',
  router,
  render: h => h(App)
})
