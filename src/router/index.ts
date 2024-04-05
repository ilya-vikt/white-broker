import { createRouter, createWebHistory } from 'vue-router';
import { Layouts } from '@/layouts';
import { layoutMiddleware } from './layout.middleware';
import BuyView from '@/catalog/views/BuyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buyView',
      component: BuyView,
      meta: {
        layout: Layouts.default
      }
    }
  ]
});

router.beforeEach(layoutMiddleware);

export default router;
