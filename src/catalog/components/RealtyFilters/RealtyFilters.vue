<script setup lang="ts">
import RoomCountFilter from '@/catalog/components/RealtyFilters/blocks/RoomCountFilter/RoomCountFilter.vue';
import { reactive } from 'vue';

const filters = reactive({
  roomCount: 0
});
</script>

<template>
  <div class="realty-filters"><RoomCountFilter v-model="filters.roomCount" /></div>
</template>

<style scoped lang="scss" src="./realtyFilters.scss"></style>
