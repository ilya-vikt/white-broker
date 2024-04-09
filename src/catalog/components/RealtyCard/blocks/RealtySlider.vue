<script setup lang="ts">
defineProps<{
  images: {
    id: number;
    url: string;
    alt: string;
  }[];
}>();
</script>

<template>
  <div class="realty-slider">
    <span v-for="trigger in images.length" :key="trigger" class="realty-slider__trigger"></span>
    <ul class="realty-slider__list">
      <li v-for="image in images" :key="image.id" class="realty-slider__slide">
        <img class="realty-slider__img" :src="image.url" :alt="image.alt" />
      </li>
    </ul>
    <div class="realty-slider__pagination">
      <span v-for="paginate in images.length" :key="paginate"></span>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./realtySlider.scss"></style>
