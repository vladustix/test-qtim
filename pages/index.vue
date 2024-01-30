<script setup lang="ts">
const posts = ref<IPost[]>([]);
const page = reactive<IPage>({
  current: 1,
  last: 1,
  per: 8
});

const paginatePosts = computed(() => {
  const start = (page.current - 1) * page.per;
  const end = start + page.per;
  return posts.value.slice(start, end);
});

const getPosts = () => {
  useAsyncData(() => $fetch(useRuntimeConfig().public.baseUrl + 'posts').then((res: any) => {
    posts.value = res;
    page.last = Math.ceil(res.length / page.per);
  }));
}

onBeforeMount(() => {
  getPosts();
});
</script>

<template>
  <div class="container mb-[140px]">
    <h1 class="mt-[120px] mb-[60px]">Articles</h1>
    <div class="grid grid-cols-4 gap-x-[32px] gap-y-[40px]">
      <blog-card v-for="post in paginatePosts" :post="post" />
    </div>
    <ui-pagination :page="page" />
  </div>
</template>