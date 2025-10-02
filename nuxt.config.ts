// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    components: false,
    css: [
        // global styles
        '@/assets/app.scss',
    ],
    typescript: {
        typeCheck: true,
    },
    modules: ['@pinia/nuxt', 'nuxt-svg-sprite-icon', '@vueuse/nuxt'],
    svgSprite: {
        input: './app/assets/icons/svg',
        output: './app/assets/icons/gen',
        defaultSprite: 'icons',
        elementClass: 'icon',
    },
    pinia: {
        storesDirs: [
            './app/states/cars',
            './app/states/current-car'
        ]
    },
})