<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="pagination-number" :class="props.active ? 'bg-dark text-white' : 'bg-light hover:bg-gray-light'">
    <slot />
  </button>
</template>

<style scoped lang="postcss">
.pagination-number {
  @apply w-11 h-11 rounded-xl leading-[50%] inline-flex justify-center items-center box-border
}
</style>