import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView/WelcomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/days/:date(\\d{4}-\\d{2}-\\d{2})',
      name: 'DayDetails',
      component: () => import('../views/DayDetails/DayDetails.vue'),
      props: true
    },
    {
      path: '/habits',
      name: 'habits',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HabitsView/HabitsView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/days/:catchAll(.*)',
      redirect: { name: 'NotFound' }
    }
  ]
});

export default router;
