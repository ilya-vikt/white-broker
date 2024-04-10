<script setup lang="ts">
import DropDownBase from '@/share/components/DropDownBase/DropDownBase.vue';
import NumberInput from '@/catalog/components/RealtyFilters/blocks/NumberInput/NumberInput.vue';
import { computed } from 'vue';
import { shortenNumber } from '@/share/utils';

const props = defineProps<{
  filterName: string;
  minVal: number;
  maxVal: number;
}>();

const modelValue = defineModel<{
  priceMin: number;
  priceMax: number;
  algorithm: string;
}>({
  default: {
    priceMin: 0,
    priceMax: 0,
    algorithm: 'total'
  }
});

const displayValue = computed(
  () =>
    `${shortenNumber(modelValue.value.priceMin)} - ${shortenNumber(modelValue.value.priceMax)} ₽${modelValue.value.algorithm === 'perSquareMeter' ? '/м²' : ''}`
);

const maxFrom = computed(() => {
  console.log(Math.min(props.maxVal, modelValue.value.priceMax));
  return Math.min(props.maxVal, modelValue.value.priceMax);
});
const minTo = computed(() => Math.max(props.minVal, modelValue.value.priceMin));
</script>

<template>
  <DropDownBase class="price-filter" :display-value="displayValue" placeholder="Цена">
    <div class="price-filter__dropdown">
      <NumberInput
        v-model.lazy="modelValue.priceMin"
        class="price-filter__from"
        :min-val="minVal"
        :max-val="maxFrom"
        placeholder="от"
        unit="₽"
      />
      <NumberInput
        v-model.lazy="modelValue.priceMax"
        class="price-filter__to"
        :min-val="minTo"
        :max-val="maxVal"
        placeholder="от"
        unit="₽"
      />
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
