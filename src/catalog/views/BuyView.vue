<script setup lang="ts">
import CreditCalc from '@/catalog/components/CreditCalc/CreditCalc.vue';
import PromoSlider from '@/catalog/components/PromoSlider/PromoSlider.vue';
import RealtyList from '@/catalog/components/RealtyList/RealtyList.vue';
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
    <div class="container">
      <h2 class="title">Акции</h2>
    </div>
    <div class="buy-view__promo container">
      <PromoSlider />
    </div>
    <div class="buy-view__calc container">
      <h2 class="title">Рассчитайте ипотеку</h2>
      <CreditCalc />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./buyView.scss"></style>
