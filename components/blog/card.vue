<script setup lang="ts">
defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  }
});
</script>

<template>
  <div class="card">
    <div class="mb-6 aspect-square min-w-full">
      <img :src="post.image" :alt="post.title" class="object-cover w-full h-full">
    </div>
    <div class="pr-1">
      <p class="content">{{ post.preview }}</p>
    </div>
    <div class="link">
      <nuxt-link :to="`/posts/${post.id}`" class="btn-text">
        Read more
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply max-h-[358px] flex flex-col justify-end
}
.content {
  @apply line-clamp-3;
}
.link {
  @apply overflow-hidden min-h-0 max-h-0;
  transition: min-height 0.1s ease-in-out;
}
.card:hover > .link {
  @apply min-h-6 max-h-6 mt-3;
}
.btn-text {
  @apply text-xl leading-[120%] text-primary;
}
</style>