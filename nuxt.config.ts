// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    }
  },
  css: ['~/assets/styles/base.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ['types/*.ts', 'store/*.ts', 'types/**/*.ts'],
  },
  modules: ['@pinia/nuxt', 'nuxt-svgo', "@nuxt/image"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'i'
  }
})