<script setup lang="ts">
import DropDownBase from '@/share/components/DropDownBase/DropDownBase.vue';
import NumberInput from '@/catalog/components/RealtyFilters/blocks/NumberInput/NumberInput.vue';
import { computed } from 'vue';

const props = defineProps<{
  filterName: string;
  minVal: number;
  maxVal: number;
}>();

const modelValue = defineModel<{
  houseAreaMin: number;
  houseAreaMax: number;
  landAreaMin: number;
  landAreaMax: number;
}>({
  default: {
    houseAreaMin: 0,
    houseAreaMax: 0,
    landAreaMin: 0,
    landAreaMax: 0
  }
});

const displayValue = computed(
  () =>
    `${modelValue.value.houseAreaMin} - ${modelValue.value.houseAreaMax} м² • ${modelValue.value.landAreaMin} - ${modelValue.value.landAreaMax} сот.`
);
</script>

<template>
  <DropDownBase class="area-filter" :display-value="displayValue" placeholder="Цена">
    <div class="area-filter__dropdown">
      <div class="area-filter__house">
        <span class="area-filter__caption">Дом</span>
        <NumberInput
          v-model.lazy="modelValue.houseAreaMin"
          class="area-filter__control"
          :min-val="minVal"
          :max-val="500"
          placeholder="от"
          unit="м²"
        />
        <NumberInput
          v-model.lazy="modelValue.houseAreaMax"
          class="area-filter__control"
          :min-val="0"
          :max-val="maxVal"
          placeholder="до"
          unit="м²"
        />
      </div>
      <div class="area-filter__house">
        <span class="area-filter__caption">Участок</span>
        <NumberInput
          v-model.lazy="modelValue.landAreaMin"
          class="area-filter__control"
          :min-val="minVal"
          :max-val="500"
          placeholder="от"
          unit="сот."
        />
        <NumberInput
          v-model.lazy="modelValue.landAreaMax"
          class="area-filter__control"
          :min-val="0"
          :max-val="maxVal"
          placeholder="до"
          unit="сот."
        />
      </div>
    </div>
  </DropDownBase>
</template>

<style scoped lang="scss" src="./areaFilter.scss"></style>
