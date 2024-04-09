<script setup lang="ts">
import DropDownBase from '@/share/components/DropDownBase/DropDownBase.vue';
import { computed } from 'vue';

const props = defineProps<{
  filterName: string;
  placeholder: string;
  filterData: {
    caption: string;
    value: number;
  }[];
  multiselect?: boolean;
}>();

const modelValue = defineModel<number[] | number>();

const displayValue = computed(() => {
  if (!modelValue.value) return null;
  if (props.multiselect) {
    return (
      (modelValue.value as number[])
        ?.map((el) => props.filterData.find(({ value }) => value === el)?.caption)
        .join(', ') || null
    );
  }

  return (
    props.filterData.find(({ value }) => value === (modelValue.value as number))?.caption ?? null
  );
});
</script>

<template>
  <DropDownBase
    class="select-filter"
    :display-value="displayValue"
    placeholder="Значение не выбрано"
  >
    <ul class="select-filter__list">
      <li
        v-for="data in filterData"
        :key="data.value"
        v-close-popper="!multiselect"
        class="select-filter__item"
      >
        <input
          :id="`id-${data.value}`"
          v-model="modelValue"
          class="hidden-input"
          :type="multiselect ? 'checkbox' : 'radio'"
          :value="data.value"
          :name="filterName"
        />
        <label class="lnk" :for="`id-${data.value}`">{{ data.caption }}</label>
      </li>
    </ul>
  </DropDownBase>
</template>

<style scoped lang="scss" src="./selectListFilter.scss"></style>
