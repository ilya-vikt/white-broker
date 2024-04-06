<script setup lang="ts">
import { useDroverController } from '@/share/composables/useDroverController';
import { onMounted, onUnmounted } from 'vue';

const { registerDrover, unregisterDrover, droversStates, closeDrover } = useDroverController();
const props = defineProps<{
  droverName: string;
}>();

defineEmits<{
  closeDrover: [];
}>();

onMounted(() => {
  registerDrover(props.droverName);
});

onUnmounted(() => {
  unregisterDrover(props.droverName);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="drover">
      <div v-if="droversStates[droverName]" class="drover" @click.self="closeDrover">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped src="./droverBase.scss"></style>
