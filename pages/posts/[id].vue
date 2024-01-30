<script setup lang="ts">
const { data: post } = await useFetch<any>(useRuntimeConfig().public.baseUrl + `posts/${useRoute().params.id}`);
</script>

<template>
  <div class="container">
    <h1 class="mt-[120px] mb-[33px]">{{ post.title }}</h1>
    <div class="pt-[40px] pb-[80px] flex flex-col gap-[80px]">
      <div class="aspect-[700:1216]">
        <img :src="post.image + '.png'" alt="" class="w-full h-full">
      </div>
      <div class="grid grid-cols-12">
        <div class="col-span-7 flex flex-col gap-8">
          <span class="text-[16px] leading-none">About</span>
          <p class="text-[36px] leading-[124%]">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>