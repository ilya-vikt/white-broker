<script setup lang="ts">
import type { ModelValueAddressFilter } from '@/catalog/types';
import { useMetroStations } from '@/catalog/composables/useMetroStations';
import { MetroIcon } from '@/share/components/icons';
import { computed, ref } from 'vue';

const isExpanded = ref(false);

const modelValue = defineModel<ModelValueAddressFilter>({ required: true });

const displayValue = computed(() => {
  if (!modelValue.value) return null;

  if (modelValue.value.isMetro) {
    return (
      modelValue.value.metro
        ?.map((el) => metroStations.value?.find(({ id }) => id === el)?.caption)
        .join(', ') || null
    );
  }
  return modelValue.value.address || null;
});

const listMode = ref<'all' | 'selected'>('all');

const { metroStations } = useMetroStations();
const search = ref('');

const stationList = computed(() => {
  if (listMode.value === 'all') {
    if (search.value) {
      const reg = new RegExp(search.value, 'iu');
      return metroStations.value?.filter((el) => reg.test(el.caption)).slice(0, 10) ?? [];
    }
    return metroStations.value?.slice(0, 10) ?? [];
  }

  return (
    modelValue.value.metro.map((el) => metroStations.value?.find(({ id }) => id === el)!) ?? []
  );
});
</script>

<template>
  <VDropdown
    v-model:shown="isExpanded"
    class="address-filter control-base"
    :class="{ 'address-filter--expanded': isExpanded }"
    theme="info-dropdown"
    :distance="8"
    :disabled="!modelValue.isMetro"
    @hide="listMode = 'all'"
  >
    <div
      class="address-filter__display"
      :class="{ 'address-filter__display--empty': !displayValue }"
    >
      <input
        v-if="!modelValue.isMetro"
        v-model="modelValue.address"
        class="address-filter__address"
        type="text"
      />
      <span>{{ displayValue ?? 'Адрес, ЖК или Ж/Д  станция' }}</span>
    </div>

    <div class="address-filter__triggers">
      <button
        class="address-filter__trigger"
        :disabled="!modelValue.isMetro"
        type="button"
      ></button>
      <button
        v-if="modelValue.isMetro && modelValue.metro?.length"
        class="address-filter__trigger-selected"
        @click="listMode = 'selected'"
      >
        {{ modelValue.metro?.length }}
      </button>
      <input
        id="id-metro"
        v-model="modelValue.isMetro"
        class="address-filter__trigger-metro hidden-input"
        type="checkbox"
      />
      <label for="id-metro">Метро</label>
    </div>

    <template #popper>
      <div class="address-filter__popper">
        <label v-if="listMode === 'all'" class="address-filter__search control-base">
          <input v-model="search" type="text" placeholder="Введите метро" />
        </label>

        <ul v-if="stationList" class="address-filter__results">
          <li v-for="station in stationList" :key="station.id" class="address-filter__item">
            <input
              :id="`id-metro-${station.id}`"
              v-model="modelValue.metro"
              class="hidden-input"
              type="checkbox"
              :value="station.id"
              name="metroFilter"
              @change="
                () => listMode === 'selected' && !modelValue.metro.length && (listMode = 'all')
              "
            />
            <label class="lnk" :for="`id-metro-${station.id}`"
              >{{ station.caption }} <MetroIcon :color="station.colorIcon" />
            </label>
          </li>
        </ul>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped lang="scss" src="./addressFilter.scss"></style>
