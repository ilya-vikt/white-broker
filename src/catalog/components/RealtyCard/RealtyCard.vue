<script setup lang="ts">
import RealtySlider from '@/catalog/components/RealtyCard/blocks/RealtySlider.vue';
import MetroIcon from '@/share/components/icons/MetroIcon.vue';
import { priceFormat } from '@/share/utils';

type CardInfo = {
  title: string;
  price: number;
  priceNormalize: number;
  hypothec: number;
  params: string[];
  metro: {
    station: string;
    walk: string;
    iconColor: string;
  };
  address: string;
  imgSlider: {
    id: number;
    url: string;
    alt: string;
  }[];
};

defineProps<{
  cardInfo: CardInfo;
}>();
</script>

<template>
  <article class="realty-card">
    <RealtySlider :images="cardInfo.imgSlider" />
    <div class="realty-card__properties">
      <h3 class="realty-card__title">{{ cardInfo.title }}</h3>
      <span class="realty-card__price">{{ priceFormat(cardInfo.price) }} ₽</span>
      <div>
        <span class="realty-card__price-normalize">
          {{ priceFormat(cardInfo.priceNormalize) }} ₽/м2
        </span>
        <span class="realty-card__hypothec">
          Ипотека от {{ priceFormat(cardInfo.hypothec) }} ₽/мес.
        </span>
      </div>
      <div class="realty-card__info">
        <span v-for="(param, idx) in cardInfo.params" :key="idx">{{ param }}</span>
      </div>
      <div class="realty-card__metro">
        <MetroIcon class="realty-card__icon" :color="cardInfo.metro.iconColor" />
        <span class="realty-card__station">{{ cardInfo.metro.station }}</span>
        <span class="realty-card__walk">{{ cardInfo.metro.walk }}</span>
      </div>
      <p class="realty-card__address">{{ cardInfo.address }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss" src="./realtyCard.scss"></style>
