<script setup lang="ts">
import HeaderLogo from '@/share/components/headers/blocks/HeaderLogo/HeaderLogo.vue';
import HeaderMenu from '@/share/components/headers/blocks/HeaderMenu/HeaderMenu.vue';
import ContactUs from '@/share/components/headers/blocks/ContactUs/ContactUs.vue';
import AreaSelector from '@/share/components/headers/blocks/AreaSelector/AreaSelector.vue';
</script>
<template>
  <header class="header">
    <div class="header__container container">
      <nav class="header__top">
        <HeaderLogo class="header__logo" />
        <AreaSelector />
        <ContactUs class="header__contact-us" />
      </nav>
      <nav class="header__menu">
        <HeaderMenu></HeaderMenu>
      </nav>
    </div>
  </header>
</template>

<style scoped src="./mainHeader.scss"></style>
