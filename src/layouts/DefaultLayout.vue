<script setup lang="ts">
import AppBreadcrumbs from '@/share/components/AppBreadcrumbs/AppBreadcrumbs.vue';
import MainHeader from '@/share/components/headers/MainHeader/MainHeader.vue';
import { useBreakpoints } from '@/share/composables/useBreakpoints';

const { isCompact } = useBreakpoints();
</script>

<template>
  <MainHeader />
  <AppBreadcrumbs
    v-if="!isCompact"
    class="container"
    :crumbs="[
      {
        caption: 'Главная',
        href: '/'
      },
      {
        caption: 'Купить',
        href: '/'
      },
      {
        caption: 'Квартира',
        href: '/'
      }
    ]"
  />
  <main>
    <slot />
  </main>
</template>
