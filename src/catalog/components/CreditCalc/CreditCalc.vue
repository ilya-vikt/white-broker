<script setup lang="ts">
import CreditParams from '@/catalog/components/CreditCalc/blocks/CreditParams/CreditParams.vue';
import CreditResult from '@/catalog/components/CreditCalc/blocks/CreditResult/CreditResult.vue';
import { computed, reactive } from 'vue';

const modelValue = reactive({
  cost: 0,
  initialFee: 0,
  term: 0,
  interest: 0
});

const amount = computed(() => modelValue.cost - modelValue.initialFee);
</script>

<template>
  <div class="credit-calc">
    <CreditParams v-model="modelValue" class="credit-calc__params" />
    <CreditResult
      :interest="modelValue.interest"
      :amount="amount"
      :term="modelValue.term"
      class="credit-calc__result"
    />
  </div>
</template>

<style scoped lang="scss" src="./creditCalc.scss"></style>
