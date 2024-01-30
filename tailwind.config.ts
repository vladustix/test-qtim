/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'TTCommons' : ['TT Commons', 'sans-serif'],
      }
    },
    colors: {
      'black': '#101010',
      'dark': '#232323',
      gray: {
        DEFAULT: '#868686',
        light: '#E8E8E8'
      },
      'light': '#F3F3F3',
      'white': '#FFFFFF',
      'primary': '#E2BEFF',
    }
  },
  plugins: [],
}

