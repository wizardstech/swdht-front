import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Invoices from './views/Invoices.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: Invoices
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    next('/login')
  } else {
    next()
  }
})

export default router
