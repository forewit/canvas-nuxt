import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#typescript
    typescript: {
      shim: false, 
      strict: true
    }
  })