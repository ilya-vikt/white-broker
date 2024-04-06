<script setup lang="ts">
import DroverBase from '@/share/components/DroverBase/DroverBase.vue';
import AppButton from '@/share/components/AppButton/AppButton.vue';
import HeaderMenu from '@/share/components/headers/blocks/HeaderMenu/HeaderMenu.vue';
import AreaSelector from '@/share/components/headers/blocks/AreaSelector/AreaSelector.vue';
import { useBreakpoints } from '@/share/composables/useBreakpoints';
import { CrossIcon } from '@/share/components/icons';
import { useDroverController } from '@/share/composables/useDroverController';

const { closeDrover } = useDroverController();
const { isCompact, breakpoint } = useBreakpoints();
</script>

<template>
  <DroverBase drover-name="menu" class="drover-menu">
    <div class="drover-menu__inner">
      <div class="drover-menu__top">
        <AreaSelector v-if="isCompact" />
        <AppButton class="drover-menu__close" simple @click="closeDrover"
          ><CrossIcon class="drover-menu__cross"
        /></AppButton>
      </div>
      <HeaderMenu class="drover-menu__menu" mobile />
      <AppButton v-if="breakpoint === 'is-mobile'" class="drover-menu__application">
        Оставить заявку
      </AppButton>
    </div>
  </DroverBase>
</template>

<style lang="scss" src="./droverMenu.scss"></style>
