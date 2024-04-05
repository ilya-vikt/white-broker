<script setup lang="ts">
import { useAppConfig } from '@/share/composables/useAppConfig';
import { RouterLink } from 'vue-router';

const { appConfig } = useAppConfig();
</script>

<template>
  <ul v-if="appConfig" class="header-menu">
    <li v-for="menuItem in appConfig?.mainMenu" :key="menuItem.id" class="header-menu__item">
      <RouterLink class="header-menu__lnk" :to="menuItem.href">{{ menuItem.caption }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped src="./headerMenu.scss"></style>
