<script setup lang="ts">
import RealtyCard from '@/catalog/components/RealtyCard/RealtyCard.vue';

const cardInfo = {
  title: '37 м2, 1-комнатная квартира',
  price: 11800000,
  priceNormalize: 231827,
  hypothec: 101740,
  params: ['1-комн. кв.', '50,9 м2', '9/17 эт.'],
  metro: {
    station: 'Автозаводская',
    walk: '5 мин.',
    iconColor: '#407133'
  },
  address: 'Москва, р-н Бутово Южное ул. Варшавское шоссе д.4',
  imgSlider: [
    {
      id: 1,
      url: './realty/1.jpg',
      alt: 'Зал'
    },
    {
      id: 2,
      url: './realty/2.jpg',
      alt: 'Кухня'
    },
    {
      id: 3,
      url: './realty/3.jpg',
      alt: 'Спальня'
    },
    {
      id: 4,
      url: './realty/4.jpg',
      alt: 'Кухня'
    }
  ]
};
</script>

<template>
  <ul class="realty-list">
    <li v-for="realtyCard in 16" :key="realtyCard" class="realty-list__card">
      <RouterLink to="/">
        <RealtyCard :card-info="cardInfo" />
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss" src="./realtyList.scss"></style>
