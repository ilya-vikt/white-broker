<script setup lang="ts">
import { useAppConfig } from '@/share/composables/useAppConfig';

const { appConfig } = useAppConfig();
</script>

<template>
  <div v-if="appConfig" class="footer-menu">
    <ul v-for="menuList in appConfig.footerMenu" :key="menuList.title.id" class="footer-menu__list">
      <!-- Title item -->
      <li class="footer-menu__title">
        <RouterLink :to="menuList.title.href" class="lnk">{{ menuList.title.caption }}</RouterLink>
      </li>
      <!-- Submenu Item -->
      <li v-for="menuItem in menuList.subMenu" :key="menuItem.id" class="footer-menu__item">
        <RouterLink :to="menuItem.href" class="footer-menu__submenu lnk">{{
          menuItem.caption
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss" src="./footerMenu.scss"></style>
