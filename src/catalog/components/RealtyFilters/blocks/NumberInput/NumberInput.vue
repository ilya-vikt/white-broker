<script setup lang="ts">
const modelValue = defineModel<number>({ default: 0 });
defineEmits<{
  change: [number];
}>();

defineProps<{
  placeholder: string;
  unit: string;
}>();
</script>

<template>
  <label class="number-input control-base">
    <input
      v-model="modelValue"
      class="number-input__control"
      type="number"
      @change="$emit('change', +($event.target as HTMLInputElement).value)"
    />
    <span class="number-input__unit">{{ unit }}</span>
  </label>
</template>

<style scoped lang="scss" src="./numberInput.scss"></style>
