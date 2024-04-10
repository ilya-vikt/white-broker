<script setup lang="ts">
const modelValue = defineModel<number>({ default: 0 });
defineProps<{
  placeholder: string;
  unit: string;
  minVal: number;
  maxVal: number;
}>();
</script>

<template>
  <label class="number-input control-base">
    <input
      v-model="modelValue"
      class="number-input__control"
      type="number"
      :min="minVal"
      :max="maxVal"
    />
    <span class="number-input__unit">{{ unit }}</span>
  </label>
</template>

<style scoped lang="scss" src="./numberInput.scss"></style>
