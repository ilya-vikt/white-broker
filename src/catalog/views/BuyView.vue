<script setup lang="ts">
import CreditCalc from '@/catalog/components/CreditCalc/CreditCalc.vue';
import PromoSlider from '@/catalog/components/PromoSlider/PromoSlider.vue';
import RealtyList from '@/catalog/components/RealtyList/RealtyList.vue';

import { useBreakpoints } from '@/share/composables/useBreakpoints';
const { isCompact } = useBreakpoints();
</script>

<template>
  <div class="buy-view">
    <div class="container">
      <h1 class="buy-view__title">Купить квартиру в Москве</h1>
    </div>
    <div class="buy-view__realty">
      <div class="buy-view__shadow"></div>
      <div class="container"><RealtyList /></div>
    </div>

    <div class="buy-view__promo">
      <div class="buy-view__promo-top title-offset container">
        <h2 class="title">Акции</h2>
        <RouterLink v-if="!isCompact" class="buy-view__all-promo lnk-underline" to="/"
          >Все акции</RouterLink
        >
      </div>
      <div class="buy-view__slider container">
        <PromoSlider />
      </div>
    </div>

    <div class="buy-view__calc container">
      <h2 class="title title-offset">Рассчитайте ипотеку</h2>
      <CreditCalc />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./buyView.scss"></style>
