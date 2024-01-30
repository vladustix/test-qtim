<template>
  <header>
    <div class="w-full mx-auto px-8 flex justify-between items-center">
      <nuxt-link to="/" class="brand text-decoration-none">
        <i-logo class="w-[84px] h-[25px]" :font-controlled="false" filled />
      </nuxt-link>
      <div class="flex items-center gap-[91px]">
        <menu>
          <nuxt-link>Works</nuxt-link>
          <nuxt-link>About</nuxt-link>
        </menu>
        <div class="flex items-center gap-4">
          <button class="btn-i">
            <i-lang class="w-6 h-6" :font-controlled="false" filled />
          </button>
          <button class="btn">
            Let’s work
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
header {
  @apply h-[121px] flex items-center justify-between
}
menu {
  @apply flex items-center gap-[58px]
}
.btn {
  @apply px-8 py-4 flex items-start gap-[10px] rounded-full bg-black text-[20px] leading-none text-white;
}
.btn-i {
  @apply min-w-[52px] min-h-[52px] rounded-full border-2 border-[#000000] border-opacity-10 flex justify-center items-center box-border;
}
</style>