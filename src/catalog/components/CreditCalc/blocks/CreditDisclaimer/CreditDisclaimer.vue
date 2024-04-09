<script setup lang="ts">
import type { BuyPageInfoRef } from '@/catalog/types';
import { InfoIcon } from '@/share/components/icons';
import { usePageInfo } from '@/share/composables/usePageInfo';

const { pageInfo }: { pageInfo: BuyPageInfoRef } = usePageInfo();

defineProps<{
  inParamBlock?: boolean;
}>();
</script>

<template>
  <div
    v-if="pageInfo"
    class="credit-disclaimer"
    :class="{ 'credit-disclaimer--in-params': inParamBlock }"
  >
    <InfoIcon class="credit-disclaimer__icon" />
    <p class="credit-disclaimer__text">{{ pageInfo.creditCalc.disclaimer }}</p>
  </div>
</template>

<style scoped lang="scss" src="./creditDisclaimer.scss"></style>
