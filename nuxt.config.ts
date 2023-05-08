// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        apiBaseUrl: process.env.NUXT_API_BASE_URL,
        apiKey: process.env.NUXT_API_KEY,
        public: {
            imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL,
        }
    }
})
