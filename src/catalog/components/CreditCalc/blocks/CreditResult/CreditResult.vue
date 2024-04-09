<script setup lang="ts">
import CreditDisclaimer from '@/catalog/components/CreditCalc/blocks/CreditDisclaimer/CreditDisclaimer.vue';
import { declineYear, priceFormat } from '@/share/utils';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { computed } from 'vue';

const props = defineProps<{
  interest: number;
  amount: number;
  term: number;
}>();
const { isCompact } = useBreakpoints();

const monthlyFee = computed(() => {
  const monthlyInterestRate = props.interest / 100 / 12;
  const totalPayments = props.term * 12;
  const monthlyPayment =
    (props.amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

  return priceFormat(monthlyPayment);
});
</script>

<template>
  <div class="credit-result">
    <dl v-if="!isCompact" class="credit-result__list">
      <dt class="credit-result__caption">Процентная ставка</dt>
      <dd class="credit-result__value">{{ interest }} %</dd>
      <dt class="credit-result__caption">Сумма кредита</dt>
      <dd class="credit-result__value">{{ priceFormat(amount) }} ₽</dd>
      <dt class="credit-result__caption">Срок кредита</dt>
      <dd class="credit-result__value">{{ term }} {{ declineYear(term) }}</dd>
    </dl>
    <div class="credit-result__payment">
      <span>Ежемесячный платеж</span>
      <span>{{ monthlyFee }} ₽</span>
    </div>
    <CreditDisclaimer v-if="isCompact" />
  </div>
</template>

<style scoped lang="scss" src="./creditResult.scss"></style>
