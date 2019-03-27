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
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {
        auth: false
      },
      beforeEnter: (to, from, next) => {
        localStorage.clear();
        next('/login');
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    try {
      const response = await authApi.checkToken();
      const { auth } = response.data;
      if (!auth) {
        return next('/login');
      }
      return next();
    } catch (error) {
      if (error.response.data.code === 401) {
        next({ path: '/login', query: { redirect: to.fullPath } });
      }
    }
  } else {
    return next();
  }
});

export default router;
