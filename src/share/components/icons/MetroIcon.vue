<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.5 6L10 8.5H9.5V10H14V8.5H13L10 0L7 5.5L4 0L1 8.5H0V10H4.5V8.5H4L4.5 6L7 10L9.5 6Z"
      :fill="color"
    />
  </svg>
</template>
