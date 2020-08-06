import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    redirect: '/counter',
    children: [
         
    ]
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('@/views/counter/count.vue'),
  }
]
  
export default new Router({
  base: '',
  mode: 'history',
  // base: 'http://127.0.0.1:8093',
  routes
})
  