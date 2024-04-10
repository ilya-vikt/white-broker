<script setup lang="ts">
import RoomCountFilter from '@/catalog/components/RealtyFilters/blocks/RoomCountFilter/RoomCountFilter.vue';
import SelectListFilter from '@/catalog/components/RealtyFilters/blocks/SelectListFilter/SelectListFilter.vue';
import PriceFilter from '@/catalog/components/RealtyFilters/blocks/PriceFilter/PriceFilter.vue';
import AreaFilter from '@/catalog/components/RealtyFilters/blocks/AreaFilter/AreaFilter.vue';
import AddressFilter from '@/catalog/components/RealtyFilters/blocks/AddressFilter/AddressFilter.vue';
import AppButton from '@/share/components/AppButton/AppButton.vue';
import { CrossIcon } from '@/share/components/icons';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { reactive } from 'vue';

const filters = reactive({
  roomCount: 0,
  houseType: [1],
  realtyType: 1,
  price: {
    priceMin: 300000,
    priceMax: 100000000,
    algorithm: 'total'
  },
  area: {
    houseAreaMin: 20,
    houseAreaMax: 100,
    landAreaMin: 5,
    landAreaMax: 100
  },
  address: {
    isMetro: false,
    address: '',
    metro: []
  },
  sort: 1
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

const sortTypes = [
  {
    caption: 'по актуальности',
    value: 1
  },
  {
    caption: 'цена по возрастанию',
    value: 2
  },
  {
    caption: 'цена по убыванию',
    value: 3
  }
];

const { isCompact } = useBreakpoints();
</script>

<template>
  <div class="realty-filters">
    <div class="realty-filters__top">
      <div class="realty-filters__inner">
        <SelectListFilter
          v-model="filters.realtyType"
          :filter-data="realtyTypes"
          :filter-name="'realtyType'"
          placeholder="Выберите значение"
        />
        <RoomCountFilter v-model="filters.roomCount" class="realty-filters__room" />
        <SelectListFilter
          v-model="filters.houseType"
          :filter-data="houseTypes"
          :filter-name="'houseType'"
          placeholder="Выберите значение"
          multiselect
        />
        <PriceFilter
          v-model="filters.price"
          filter-name="price"
          :min-val="300000"
          :max-val="100000000"
        />
        <AreaFilter
          v-model="filters.area"
          filter-name="price"
          :constrains="{
            houseAreaMin: 10,
            houseAreaMax: 100,
            landAreaMin: 5,
            landAreaMax: 100
          }"
        />
        <AddressFilter v-model="filters.address" placeholder="Адрес, ЖК или Ж/Д  станция" />
      </div>
      <AppButton class="realty-filters__btn">Найти</AppButton>
    </div>
    <div v-if="!isCompact" class="realty-filters__bottom">
      <div class="realty-filters__sort">
        <span>Сортировать:</span>
        <SelectListFilter
          v-model="filters.sort"
          :filter-data="sortTypes"
          :filter-name="'sortType'"
          placeholder="Выберите значение"
          no-border
        />
      </div>

      <span class="realty-filters__founded">Найдено 91 предложение</span>
      <button class="realty-filters__clear lnk">Очистить фильтр<CrossIcon /></button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./realtyFilters.scss"></style>
