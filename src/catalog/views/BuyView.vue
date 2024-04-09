<script setup lang="ts">
import CreditCalc from '@/catalog/components/CreditCalc/CreditCalc.vue';
</script>

<template>
  <div class="buy-view">
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
