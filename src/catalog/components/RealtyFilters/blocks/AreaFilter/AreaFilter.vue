<script setup lang="ts">
import DropDownBase from '@/share/components/DropDownBase/DropDownBase.vue';
import NumberInput from '@/catalog/components/RealtyFilters/blocks/NumberInput/NumberInput.vue';
import { computed } from 'vue';

const props = defineProps<{
  filterName: string;
  constrains: {
    houseAreaMin: number;
    houseAreaMax: number;
    landAreaMin: number;
    landAreaMax: number;
  };
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

const minAreaHandler = (value: number, group: 'house' | 'land') => {
  modelValue.value[`${group}AreaMin`] = Math.min(
    Math.max(value, props.constrains[`${group}AreaMin`]),
    modelValue.value[`${group}AreaMax`]
  );
};

const maxAreaHandler = (value: number, group: 'house' | 'land') => {
  modelValue.value[`${group}AreaMax`] = Math.max(
    props.constrains[`${group}AreaMin`],
    modelValue.value[`${group}AreaMin`]
  );
};

const displayValue = computed(
  () =>
    `${modelValue.value.houseAreaMin} - ${modelValue.value.houseAreaMax} м² • ${modelValue.value.landAreaMin} - ${modelValue.value.landAreaMax} сот.`
);
</script>

<template>
  <DropDownBase class="area-filter" :display-value="displayValue" placeholder="Цена">
    <div class="area-filter__dropdown">
      <div class="area-filter__group">
        <span class="area-filter__caption">Дом</span>
        <div class="area-filter__controls">
          <NumberInput
            v-model="modelValue.houseAreaMin"
            class="area-filter__control"
            placeholder="от"
            unit="м²"
            @change="(e) => minAreaHandler(e, 'house')"
          />
          <NumberInput
            v-model="modelValue.houseAreaMax"
            class="area-filter__control"
            placeholder="до"
            unit="м²"
            @change="(e) => maxAreaHandler(e, 'house')"
          />
        </div>
      </div>
      <div class="area-filter__group">
        <span class="area-filter__caption">Участок</span>
        <div class="area-filter__controls">
          <NumberInput
            v-model="modelValue.landAreaMin"
            class="area-filter__control"
            placeholder="от"
            unit="сот."
            @change="(e) => minAreaHandler(e, 'land')"
          />
          <NumberInput
            v-model="modelValue.landAreaMax"
            class="area-filter__control"
            placeholder="до"
            unit="сот."
            @change="(e) => maxAreaHandler(e, 'land')"
          />
        </div>
      </div>
    </div>
  </DropDownBase>
</template>

<style scoped lang="scss" src="./areaFilter.scss"></style>
