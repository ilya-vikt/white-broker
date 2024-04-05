<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { useAppConfig } from '@/share/composables/useAppConfig';

useAppConfig();
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
