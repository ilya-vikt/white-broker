import { createRouter, createWebHistory } from 'vue-router';
import { Layouts } from '@/layouts';
import { layoutMiddleware } from './layout.middleware';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: Layouts.default
      }
    }
  ]
});

router.beforeEach(layoutMiddleware);

export default router;
