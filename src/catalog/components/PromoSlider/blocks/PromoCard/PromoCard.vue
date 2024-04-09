<script setup lang="ts">
import type { BuyPageInfo } from '@/catalog/types';

defineProps<{
  promo: BuyPageInfo['promo'][0];
}>();
</script>

<template>
  <article class="promo-card">
    <div class="promo-card__top" :style="{ backgroundImage: `url(${promo.decorUrl})` }">
      <h3 class="promo-card__title">{{ promo.title }}</h3>
      <span class="promo-card__expire">{{ promo.expire }}</span>
    </div>
    <dl class="promo-card__params">
      <div class="promo-card__group">
        <dt class="promo-card__caption">Ставка</dt>
        <dd class="promo-card__value">{{ promo.rate }}%</dd>
      </div>
      <div class="promo-card__group">
        <dt class="promo-card__caption">Лимит</dt>
        <dd class="promo-card__value">{{ promo.limit }}</dd>
      </div>
    </dl>
  </article>
</template>

<style scoped lang="scss" src="./promoCard.scss"></style>
