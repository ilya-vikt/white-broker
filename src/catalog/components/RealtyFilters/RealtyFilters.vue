<script setup lang="ts">
import type {
  AreaFilterType,
  BuyPageInfoRef,
  ModelValueFilters,
  PriceFilterType
} from '@/catalog/types';
import RoomCountFilter from '@/catalog/components/RealtyFilters/blocks/RoomCountFilter/RoomCountFilter.vue';
import SelectListFilter from '@/catalog/components/RealtyFilters/blocks/SelectListFilter/SelectListFilter.vue';
import PriceFilter from '@/catalog/components/RealtyFilters/blocks/PriceFilter/PriceFilter.vue';
import AreaFilter from '@/catalog/components/RealtyFilters/blocks/AreaFilter/AreaFilter.vue';
import AddressFilter from '@/catalog/components/RealtyFilters/blocks/AddressFilter/AddressFilter.vue';
import AppButton from '@/share/components/AppButton/AppButton.vue';
import { CrossIcon } from '@/share/components/icons';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { usePageInfo } from '@/share/composables/usePageInfo';
import { computed, ref, watchEffect } from 'vue';

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
const { pageInfo }: { pageInfo: BuyPageInfoRef } = usePageInfo();

const realtyTypes = computed(
  () =>
    pageInfo.value?.filters.realtyType.values.map(({ id, caption }) => ({
      value: id,
      caption
    })) ?? []
);

const realtySubtypes = computed(
  () =>
    pageInfo.value?.filters.realtyType.values
      .find(({ id }) => id === realtyTypeModel.value)
      ?.subType.map(({ id, caption }) => ({
        value: id,
        caption
      })) ?? []
);

const subFilters = computed(
  () =>
    pageInfo.value?.filters.realtyType.values.find(({ id }) => id === realtyTypeModel.value)
      ?.subFilters ?? []
);

//Model values
const realtyTypeModel = ref(1);
const realtySubtypeModel = ref([0]);
const subModels = ref<ModelValueFilters[]>([]); //all other filters

//Recreate ModelValues for Realty subtype when change Realty type filter
watchEffect(() => (realtySubtypeModel.value = [realtySubtypes.value[0]?.value ?? 0]));

//Recreate and init array of for the SubFilters when change Realty type filter
watchEffect(
  () =>
    (subModels.value = subFilters.value.map((el, idx) => {
      if (el.name === 'area') {
        const initVal = subFilters.value[idx] as AreaFilterType;

        return {
          houseAreaMin: initVal.houseAreaMin,
          houseAreaMax: initVal.houseAreaMax,
          landAreaMin: initVal.landAreaMin,
          landAreaMax: initVal.landAreaMax
        };
      }

      if (el.name === 'price') {
        const initVal = subFilters.value[idx] as PriceFilterType;

        return {
          priceMin: initVal.minVal,
          priceMax: initVal.maxVal,
          algorithm: initVal.algorithm
        };
      }

      if (el.name === 'roomCount') {
        return 0;
      }

      if (el.name === 'address') {
        return {
          address: '',
          isMetro: false,
          metro: []
        };
      }

      return 0;
    }))
);

const filterComponent = (filterName: string) => {
  if (filterName === 'roomCount') return RoomCountFilter;
  if (filterName === 'area') return AreaFilter;
  if (filterName === 'price') return PriceFilter;
  if (filterName === 'address') return AddressFilter;
  return 'div';
};
</script>

<template>
  <div class="realty-filters">
    <div class="realty-filters__top">
      <div class="realty-filters__inner">
        <SelectListFilter
          v-model="realtyTypeModel"
          :filter-data="realtyTypes"
          :filter-name="'realtyType'"
          placeholder="Выберите значение"
        />

        <SelectListFilter
          v-model="realtySubtypeModel"
          :filter-data="realtySubtypes"
          :filter-name="'houseType'"
          placeholder="Выберите значение"
          multiselect
        />

        <div
          v-for="(subFilter, idx) in subFilters"
          :key="subFilter.name"
          class="realty-filters__subfilters"
        >
          <component
            :is="filterComponent(subFilter.name)"
            v-model="subModels[idx]"
            :filter-data="subFilter"
            >{{ subFilter.name }}</component
          >
        </div>
      </div>
      <AppButton class="realty-filters__btn">Найти</AppButton>
    </div>
    <div v-if="!isCompact" class="realty-filters__bottom">
      <div class="realty-filters__sort">
        <span>Сортировать:</span>
        <SelectListFilter
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
