<script setup lang="ts">
import type { BuyPageInfoRef } from '@/catalog/types';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { usePageInfo } from '@/share/composables/usePageInfo';
import { computed } from 'vue';
import PromoCard from '@/catalog/components/PromoSlider/blocks/PromoCard/PromoCard.vue';

const { breakpoint } = useBreakpoints();
const { pageInfo }: { pageInfo: BuyPageInfoRef } = usePageInfo();

const slidesPerView = computed(() => {
  switch (breakpoint.value) {
    case 'is-laptop':
      return 3;
    case 'is-tablet':
      return 2;
    case 'is-mobile':
      return 1.23;
    default:
      return 4;
  }
});

const slidesOffset = computed(() => (breakpoint.value === 'is-mobile' ? 20 : 0));
const spaceBetween = computed(() => (breakpoint.value === 'is-mobile' ? 10 : 20));
</script>

<template>
  <swiper-container
    v-if="pageInfo"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :slides-offset-before="slidesOffset"
    :slides-offset-after="slidesOffset"
  >
    <swiper-slide v-for="promo in pageInfo.promo" :key="promo.id">
      <RouterLink :to="promo.href">
        <PromoCard :promo="promo" />
      </RouterLink>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="scss"></style>
