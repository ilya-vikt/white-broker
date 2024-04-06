<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  crumbs: {
    href: string;
    caption: string;
  }[];
}>();

const crumbsList = computed(() => props.crumbs.slice(0, -1));
const lastCrumb = computed(() => props.crumbs[props.crumbs.length - 1]);
</script>

<template>
  <ul class="breadcrumbs">
    <li v-for="crumbItem in crumbsList" :key="crumbItem.caption" class="breadcrumbs__item">
      <RouterLink class="breadcrumbs__crumb lnk" :to="crumbItem.href">
        {{ crumbItem.caption }}
      </RouterLink>
    </li>
    <li class="breadcrumbs__item">
      <span class="breadcrumbs__crumb">{{ lastCrumb.caption }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss" src="./appBreadcrumbs.scss"></style>
