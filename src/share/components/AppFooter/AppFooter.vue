<script setup lang="ts">
import FooterLogo from '@/share/components/AppFooter/blocks/FooterLogo/FooterLogo.vue';
import FooterSocials from '@/share/components/AppFooter/blocks/FooterSocials/FooterSocials.vue';
import FooterMenu from '@/share/components/AppFooter/blocks/FooterMenu/FooterMenu.vue';
import { useAppConfig } from '@/share/composables/useAppConfig';

const { appConfig } = useAppConfig();
</script>

<template>
  <footer v-if="appConfig" class="footer">
    <div class="footer__container container">
      <div class="footer__top">
        <FooterLogo class="footer__logo" />
        <a class="footer__phone lnk" :href="appConfig.footerPhone.href">
          {{ appConfig?.footerPhone.caption }}
        </a>
        <FooterSocials />
      </div>
      <FooterMenu class="footer__menu" />
      <div class="footer__bottom">
        <p class="footer__copyright">{{ appConfig.copyright }}</p>
        <p class="footer__creators">
          Сделано в —
          <a :href="appConfig.creators.href" class="lnk" target="_blank">{{
            appConfig.creators.text
          }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss" src="./appFooter.scss"></style>
