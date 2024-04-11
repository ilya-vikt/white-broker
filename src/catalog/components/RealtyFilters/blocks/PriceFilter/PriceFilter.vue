<script setup lang="ts">
import DropDownBase from '@/share/components/DropDownBase/DropDownBase.vue';
import NumberInput from '@/catalog/components/RealtyFilters/blocks/NumberInput/NumberInput.vue';
import { computed } from 'vue';
import { shortenNumber } from '@/share/utils';
import type { ModelValuePriceFilter, PriceFilterType } from '@/catalog/types';

const props = defineProps<{
  filterData: PriceFilterType;
}>();

const modelValue = defineModel<ModelValuePriceFilter>({ required: true });

const displayValue = computed(
  () =>
    `${shortenNumber(modelValue.value.priceMin)} - ${shortenNumber(modelValue.value.priceMax)} ₽${modelValue.value.algorithm === 'perSquareMeter' ? '/м²' : ''}`
);

const minChangeHandler = (value: number) => {
  modelValue.value.priceMin = Math.min(
    Math.max(value, props.filterData.minVal),
    modelValue.value.priceMax
  );
};

const maxChangeHandler = (value: number) => {
  modelValue.value.priceMax = Math.max(
    Math.min(value, props.filterData.maxVal),
    modelValue.value.priceMin
  );
};
</script>

<template>
  <DropDownBase class="price-filter" :display-value="displayValue" placeholder="Цена">
    <div class="price-filter__dropdown">
      <div class="price-filter__controls">
        <NumberInput
          v-model="modelValue.priceMin"
          class="price-filter__from"
          placeholder="от"
          unit="₽"
          @change="minChangeHandler"
        />
        <NumberInput
          v-model="modelValue.priceMax"
          class="price-filter__to"
          placeholder="от"
          unit="₽"
          @change="maxChangeHandler"
        />
      </div>
      <div class="price-filter__algorithm">
        <input
          id="for-all"
          v-model="modelValue.algorithm"
          class="hidden-input"
          type="radio"
          value="total"
          name="algorithm"
        />
        <label class="price-filter__for-all" for="for-all">за все</label>
        <input
          id="for-m2"
          v-model="modelValue.algorithm"
          class="hidden-input"
          type="radio"
          value="perSquareMeter"
          name="algorithm"
        />
        <label class="price-filter__for-m2" for="for-m2">за м²</label>
      </div>
    </div>
  </DropDownBase>
</template>

<style scoped lang="scss" src="./priceFilter.scss"></style>
