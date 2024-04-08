import { usePageInfo } from '@/share/composables/usePageInfo';
import { type RouteLocationNormalized } from 'vue-router';

export async function fetchPageDataMiddleware(route: RouteLocationNormalized): Promise<void> {
  const { refetchAppData } = usePageInfo();
  const routeName = typeof route.name === 'string' ? route.name : 'buyView';
  refetchAppData(routeName);
}
