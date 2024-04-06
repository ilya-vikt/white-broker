<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { useAppConfig } from '@/share/composables/useAppConfig';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { watchEffect } from 'vue';

useAppConfig();

// Add watching for breakpoints and switching of corresponding classes
const { breakpoint, allBreakpointsNames, isCompact } = useBreakpoints();

watchEffect(() => {
  document.body.classList.remove(...allBreakpointsNames, 'is-compact');
  if (!breakpoint.value) return;
  document.body.classList.add(breakpoint.value);

  if (isCompact.value) {
    document.body.classList.add('is-compact');
  }
});
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
