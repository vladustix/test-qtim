<script setup lang="ts">
interface IOffice {
  country: string,
  address: string,
  link: string
}
const offices: IOffice[] = [
  {
    country: 'Russia',
    address: '139 Ruben Station Lake Drew, NM 52678',
    link: 'http://localhost'
  },
  {
    country: 'Dubai',
    address: '139 Ruben Station Lake Drew, NM 52678',
    link: 'http://localhost'
  }
]

interface ILinks {
  name: string,
  url: string
}
const links: ILinks[] = [
  {
    name: 'Facebook',
    url: ''
  },
  {
    name: 'Instagram',
    url: ''
  },
  {
    name: 'Telegram',
    url: ''
  },
  {
    name: 'Behance',
    url: ''
  },
  {
    name: 'Linkedn',
    url: ''
  },
  {
    name: 'Privacy Policy',
    url: ''
  }
]
</script>

<template>
  <footer class="bg-primary">
    <div class="container overflow-hidden relative">
      <div class="flex justify-between pt-[120px]">
        <div>
          <p class="mb-[58px]">Is there a project?</p>
          <p class="action">Let’s work together</p>
        </div>
        <div class="mt-[75px] mb-[143px] flex flex-col gap-9">
          <div>
            <p class="mb-3">For all questions</p>
            <div class="flex flex-col gap-1">
              <a href="" class="leading-[120%]">+7 (920) 278—00—68</a>
              <a href="" class="leading-[120%]">qtim@agency.com</a>
            </div>
          </div>
          <div v-for="office in offices">
            <p class="mb-3">Office in {{ office.country }}</p>
            <div class="flex flex-col gap-2">
              <a href="" class="serif">{{ office.address }}</a>
              <a href="" class="w-8 h-8 flex justify-center items-center rounded-full bg-black">
                <i-fly class="text-[9px] leading-none" filled />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between py-[30px]">
        <div class="flex gap-8">
          <a v-for="link in links.slice(0, 3)" :href="link.url" class="underline underline-offset-[6px]">
            {{ link.name }}
          </a>
        </div>
        <div class="text-white z-[1] text-[32px] leading-none">
          Go
        </div>
        <div class="flex gap-8">
          <a v-for="link in links.slice(3)" :href="link.url" class="underline underline-offset-[6px]">
            {{ link.name }}
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[358px] h-[358px] bg-black rounded-full ">

      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.action {
  @apply text-[112px] leading-none decoration-1 underline underline-offset-[12px];
}
</style>