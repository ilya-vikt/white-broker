<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  placeholder: string;
  displayValue: string | null;
}>();

const isExpanded = ref(false);
</script>

<template>
  <VDropdown
    v-model:shown="isExpanded"
    class="dropdown-base control-base"
    :class="{ 'dropdown-base--expanded': isExpanded }"
    theme="info-dropdown"
    :distance="8"
  >
    <div class="dropdown-base__display" :class="{ 'dropdown-base__display--empty': !displayValue }">
      {{ displayValue ?? placeholder }}
    </div>
    <button class="dropdown-base__trigger" type="button"></button>
    <template #popper>
      <div class="dropdown-base__popper">
        <slot />
      </div>
    </template>
  </VDropdown>
</template>

<style scoped lang="scss" src="./dropDownBase.scss"></style>
