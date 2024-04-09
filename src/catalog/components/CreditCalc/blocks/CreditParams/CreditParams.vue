<script setup lang="ts">
import type { BuyPageInfoRef } from '@/catalog/types';
import { usePageInfo } from '@/share/composables/usePageInfo';
import { declineYear } from '@/share/utils';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import CreditDisclaimer from '@/catalog/components/CreditCalc/blocks/CreditDisclaimer/CreditDisclaimer.vue';
import CreditField from '@/catalog/components/CreditCalc/blocks/CreditField/CreditField.vue';
import { computed, watchEffect } from 'vue';

const modelValue = defineModel<{
  cost: number;
  initialFee: number;
  term: number;
  interest: number;
}>({ required: true });

const { pageInfo }: { pageInfo: BuyPageInfoRef } = usePageInfo();

const maxInitialFee = computed(() => {
  console.log('bla');
  return pageInfo.value
    ? Math.floor((modelValue.value.cost / 100) * pageInfo.value.creditCalc.initialFee.maxVal)
    : 0;
});

const initialFeePercent = computed(() =>
  `${((modelValue.value.initialFee / modelValue.value.cost) * 100).toFixed(1)} %`.replace('.', ',')
);

watchEffect(() => {
  modelValue.value.cost = pageInfo.value?.creditCalc.cost.default ?? 0;
  modelValue.value.interest = pageInfo.value?.creditCalc.interest.default ?? 0;
  modelValue.value.term = pageInfo.value?.creditCalc.term.default ?? 0;
});

const termUnit = computed(() => declineYear(modelValue.value.term));
const { isCompact } = useBreakpoints();
</script>

<template>
  <div v-if="pageInfo" class="credit-params">
    <h3 v-if="!isCompact" class="credit-params__title">Параметры кредита</h3>
    <div class="credit-params__fields">
      <CreditField
        v-model.number="modelValue.cost"
        :min-val="pageInfo.creditCalc.cost.minVal"
        :max-val="pageInfo.creditCalc.cost.maxVal"
        is-currency
        caption="Стоимость квартиры"
        unit="₽"
      />
      <CreditField
        v-model="modelValue.initialFee"
        :min-val="0"
        :max-val="maxInitialFee"
        :info="initialFeePercent"
        is-currency
        caption="Первоначальный взнос"
        unit="₽"
      />
      <div class="credit-params__group">
        <CreditField
          v-model="modelValue.term"
          :min-val="pageInfo.creditCalc.term.minVal"
          :max-val="pageInfo.creditCalc.term.maxVal"
          caption="Срок кредита"
          :unit="termUnit"
        />
        <CreditField
          v-model="modelValue.interest"
          :min-val="pageInfo.creditCalc.interest.minVal"
          :max-val="pageInfo.creditCalc.interest.maxVal"
          is-fractional
          caption="Ставка по кредиту"
          unit="%"
        />
      </div>
    </div>
    <CreditDisclaimer v-if="!isCompact" in-param-block />
  </div>
</template>

<style scoped lang="scss" src="./creditParams.scss"></style>
