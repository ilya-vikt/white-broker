<script setup lang="ts">
import HeaderLogo from '@/share/components/headers/blocks/HeaderLogo/HeaderLogo.vue';
import HeaderMenu from '@/share/components/headers/blocks/HeaderMenu/HeaderMenu.vue';
import ContactUs from '@/share/components/headers/blocks/ContactUs/ContactUs.vue';
import AreaSelector from '@/share/components/headers/blocks/AreaSelector/AreaSelector.vue';
import DroverMenu from '@/share/components/headers/blocks/DroverMenu/DroverMenu.vue';
import AppButton from '@/share/components/AppButton/AppButton.vue';
import { BurgerIcon } from '@/share/components/icons';
import { useDroverController } from '@/share/composables/useDroverController';
import { useBreakpoints } from '@/share/composables/useBreakpoints';

const { openDrover } = useDroverController();
const { isCompact } = useBreakpoints();
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <nav class="header__top">
        <HeaderLogo class="header__logo" />
        <AreaSelector v-if="!isCompact" />
        <ContactUs class="header__contact-us" />
        <AppButton v-if="isCompact" class="header__burger" simple @click="openDrover('menu')">
          <BurgerIcon /><span class="sr-only">Открыть главное меню</span>
        </AppButton>
      </nav>
      <nav v-if="!isCompact" class="header__menu">
        <HeaderMenu />
      </nav>
    </div>
    <DroverMenu />
  </header>
</template>

<style scoped src="./mainHeader.scss"></style>
