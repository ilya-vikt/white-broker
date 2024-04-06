<script setup lang="ts">
defineProps<{
  simple?: boolean;
}>();
</script>

<template>
  <button
    class="app-button"
    :class="{
      'app-button--simple': simple
    }"
    type="button"
  >
    <slot />
  </button>
</template>

<style scoped src="./appButton.scss"></style>
