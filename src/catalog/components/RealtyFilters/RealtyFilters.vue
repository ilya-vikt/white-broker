<script setup lang="ts">
import RoomCountFilter from '@/catalog/components/RealtyFilters/blocks/RoomCountFilter/RoomCountFilter.vue';
import SelectListFilter from '@/catalog/components/RealtyFilters/blocks/SelectListFilter/SelectListFilter.vue';
import { reactive } from 'vue';

const filters = reactive({
  roomCount: 0,
  houseType: [1],
  realtyType: 1
});
const realtyTypes = [
  {
    caption: 'Квартира',
    value: 1
  },
  {
    caption: 'Дом',
    value: 2
  },
  {
    caption: 'Коммерция',
    value: 3
  }
];

const houseTypes = [
  {
    caption: 'Дом',
    value: 1
  },
  {
    caption: 'Дача',
    value: 2
  },
  {
    caption: 'Коттедж',
    value: 3
  },
  {
    caption: 'Таунхаус',
    value: 4
  },
  {
    caption: 'Доля в доме',
    value: 5
  }
];
</script>

<template>
  <div class="realty-filters">
    <SelectListFilter
      v-model="filters.realtyType"
      :filter-data="realtyTypes"
      :filter-name="'realtyType'"
      placeholder="Выберите значение"
    />
    <RoomCountFilter v-model="filters.roomCount" />
    <SelectListFilter
      v-model="filters.houseType"
      :filter-data="houseTypes"
      :filter-name="'houseType'"
      placeholder="Выберите значение"
      multiselect
    />
  </div>
</template>

<style scoped lang="scss" src="./realtyFilters.scss"></style>
