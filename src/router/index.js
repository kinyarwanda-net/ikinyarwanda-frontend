import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/about'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '*',
    component: () => import('../pages/notFound')
  }
];

const router = new vueRouter({
  routes,
  mode: 'history'
});

export default router;
