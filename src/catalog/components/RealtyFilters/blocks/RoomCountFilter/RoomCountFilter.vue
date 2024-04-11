<script setup lang="ts">
const modelValue = defineModel<number>();
</script>

<template>
  <div class="room-filter control-base">
    <input id="studio" v-model="modelValue" type="radio" name="room-count" value="0" />
    <label for="studio">Студия</label>
    <input id="room-1" v-model="modelValue" type="radio" name="room-count" value="1" />
    <label for="room-1">1</label>
    <input id="room-2" v-model="modelValue" type="radio" name="room-count" value="2" />
    <label for="room-2">2</label>
    <input id="room-3" v-model="modelValue" type="radio" name="room-count" value="3" />
    <label for="room-3">3</label>
    <input id="room-4" v-model="modelValue" type="radio" name="room-count" value="4" />
    <label for="room-4">4+</label>
  </div>
</template>

<style scoped lang="scss" src="./roomCountFilter.scss"></style>
