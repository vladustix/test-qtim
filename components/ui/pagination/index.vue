<script setup lang="ts">
const props = defineProps({
  page: {
    type: Object as PropType<IPage>,
    required: true
  }
});

const visibleNumber = computed(() => {
  const amount = [];
  let max = 5;
  if (props.page.last <= max) {
    for (let i = 1; i <= props.page.last; i++) {
      amount.push(i);
    }
  } else {
    let start = Math.max(1, props.page.current - Math.floor(max / 2));
    const end = Math.min(props.page.last, start + max - 1);
    if (end - start + 1 < max) {
      start = Math.max(1, end - max + 1);
    }
    for (let i = start; i <= end; i++) {
      amount.push(i);
    }
  }
  return amount;
});

const setPage = (num: number) => {
  if (num >= 1 && num <= props.page.last) {
    props.page.current = num;
  }
}
</script>

<template>
  <div v-if="page.last > 1" class="flex items-center gap-2 mt-[50px]">
    <template v-if="page.current > 1">
      <ui-pagination-arrow @click="setPage(page.current - 1)" direction="left" />
    </template>
    <nuxt-link v-for="num in visibleNumber" @click="setPage(num)">
      <ui-pagination-number :active="page.current == num">
        {{ num }}
      </ui-pagination-number>
    </nuxt-link>
    <template v-if="page.current < page.last">
      <ui-pagination-arrow @click="setPage(page.current + 1)" />
    </template>
  </div>
</template>