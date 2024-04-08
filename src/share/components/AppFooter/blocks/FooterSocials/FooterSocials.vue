<script setup lang="ts">
import { TelegramIcon, YoutubeIcon, VkIcon } from '@/share/components/icons';
import { useAppConfig } from '@/share/composables/useAppConfig';

const { appConfig } = useAppConfig();
</script>

<template>
  <ul v-if="appConfig" class="footer-socials">
    <li class="footer-socials__item">
      <a class="footer-socials__lnk" target="_blank" :href="appConfig.socials.telegram">
        <TelegramIcon class="footer-socials__telegram" />
        <span class="sr-only">telegram</span>
      </a>
    </li>
    <li class="footer-socials__item">
      <a class="footer-socials__lnk" target="_blank" :href="appConfig.socials.vk">
        <VkIcon />
        <span class="sr-only">Вконтакте</span>
      </a>
    </li>
    <li class="footer-socials__item">
      <a class="footer-socials__lnk" target="_blank" :href="appConfig.socials.youtube">
        <YoutubeIcon class="footer-socials__youtube" />
        <span class="sr-only">youtube</span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss" src="./footerSocials.scss"></style>
