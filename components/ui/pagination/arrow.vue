<script setup lang="ts">
const props = defineProps({
  direction: {
    type: String,
    default: 'right'
  }
});
// Контроль поворота
const deg = computed(() => {
  let dir: number;
  switch (props.direction) {
    case 'down':
      dir = 90;
      break;
    case 'left':
      dir = 180;
      break;
    case 'up':
      dir = 270;
      break;
    default:
      dir = 0;
      break;
  }
  return `${dir}deg`;
});
</script>

<template>
  <button type="button" class="pagination-arrow">
    <i-arrow class="icon" filled />
  </button>
</template>

<style scoped lang="postcss">
.pagination-arrow {
  @apply w-11 h-11 rounded-xl border border-gray-light hover:bg-gray-light flex justify-center items-center;
  transform: rotate(v-bind(deg));
}
.icon {
  @apply mt-0.5 ml-0.5 text-[24px];
}
</style>