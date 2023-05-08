// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        apiBaseUrl: '',
        apiKey: '',
        public: {
            imgBaseUrl: '',
        }
    }
})
