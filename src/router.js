import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Invoices from './views/Invoices.vue';
import Login from './views/Login.vue';

import authApi from '@/api/auth';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: Invoices,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    try {
      await authApi.checkToken();
      next();
    } catch (error) {
      if (error.response.data.code === 401) {
        next('/login');
      }
    }
    next();
  }
  next();
});

export default router;
