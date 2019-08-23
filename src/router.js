import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Arena from './views/Arena.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/arena/:id',
      name: 'arena',
      component: Arena
    }
  ]
})
