<script setup lang="ts">
import AppButton from '@/share/components/AppButton/AppButton.vue';
import { useAppConfig } from '@/share/composables/useAppConfig';
import { useBreakpoints } from '@/share/composables/useBreakpoints';

const { breakpoint } = useBreakpoints();

const { appConfig } = useAppConfig();
</script>

<template>
  <div class="contact-us">
    <a class="contact-us__phone lnk" :href="appConfig?.headerPhone.href">{{
      appConfig?.headerPhone.caption
    }}</a>
    <AppButton v-if="breakpoint !== 'is-mobile'" class="contact-us__application"
      >Оставить заявку</AppButton
    >
  </div>
</template>

<style scoped src="./contactUs.scss"></style>
