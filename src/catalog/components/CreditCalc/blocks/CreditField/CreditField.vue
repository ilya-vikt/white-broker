<script setup lang="ts">
import { priceFormat } from '@/share/utils';
import { computed, watch, watchEffect } from 'vue';
import { CurrencyDisplay, useCurrencyInput } from 'vue-currency-input';

const modelValue = defineModel({ default: 0 });

const props = defineProps<{
  minVal: number;
  maxVal: number;
  caption: string;
  unit: string;
  info?: string;
  isCurrency?: boolean;
  isFractional?: boolean;
}>();

const defaultCurrencyOptions = {
  useGrouping: true,
  currency: 'EUR',
  currencyDisplay: CurrencyDisplay.hidden
};

const { inputRef, setValue, setOptions } = useCurrencyInput({
  ...defaultCurrencyOptions,
  precision: props.isFractional ? 2 : 0,
  valueRange: {
    min: props.minVal,
    max: props.maxVal
  }
});

watch([() => props.minVal, () => props.maxVal], () =>
  setOptions({
    ...defaultCurrencyOptions,
    precision: props.isFractional ? 2 : 0,
    valueRange: {
      min: props.minVal,
      max: props.maxVal
    }
  })
);

const thumbOffset = computed(
  () =>
    `${Math.min(((modelValue.value - props.minVal) / (props.maxVal - props.minVal)) * 100, 100)}%`
);

const display = computed(
  () => `${props.isCurrency ? priceFormat(modelValue.value) : modelValue.value} ${props.unit}`
);
watchEffect(() => setValue(modelValue.value));
</script>

<template>
  <label class="credit-field">
    <div class="credit-field__inner">
      <span class="credit-field__caption">{{ caption }}</span>
      <div
        class="credit-field__value control-base"
        :style="{
          '--thumb-offset': thumbOffset
        }"
      >
        <input ref="inputRef" class="credit-field__control" type="text" />
        <div class="credit-field__display" :class="{ 'credit-field__display--indent': info }">
          {{ display }}
        </div>

        <input
          v-model="modelValue"
          class="credit-field__range"
          type="range"
          :min="minVal"
          :max="maxVal"
        />
        <span class="credit-field__slider"></span>
        <span v-if="info" class="credit-field__info">{{ info }}</span>
      </div>
    </div>
  </label>
</template>

<style scoped lang="scss" src="./creditField.scss"></style>
