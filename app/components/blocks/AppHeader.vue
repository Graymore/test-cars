<script setup lang="ts">
    import { UiLogo, UiInput } from '~/components/ui'
    import { useCarSearch } from "~/composables/carSearch";
    import { useDebounceFn } from '@vueuse/core'

    const state = reactive({
        search: '',
        searchLoading: false
    })

    const cars = useCars()
    const router = useRouter()
    const globalSearch = useCarSearch()

    const search = async () => {
        if (router.currentRoute.value.name !== 'index') await router.push('/')
        cars.actions.setup(globalSearch.get(cars.state.cars, state.search))
        state.searchLoading = false
    }

    const onSearchInput = () => {
        state.searchLoading = true
        useDebounceFn(() => search(), 500)()
    }

    const onSearchEnter = () => search()

    router.afterEach(() => state.search = '')
</script>

<template>
    <header :class="$style.header">
        <div :class="$style.wrapper">
            <ui-logo />

            <ui-input
                icon="search"
                placeholder="Search by model or make"
                v-model="state.search"
                :class="$style.search"
                :loading="state.searchLoading"
                @enter="onSearchEnter"
                @input="onSearchInput"
            />
        </div>
    </header>
</template>

<style module lang="scss">
@use "~/assets/mixins/flexbox";
@use "~/assets/vars/color" as c;
@use "~/assets/vars/global";

.header {
    @include flexbox.column;
    background-color: c.$primary;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    height: global.$app_header_height;
}

.wrapper {
    @include flexbox.inline-between;
    max-width: global.$app_max_content;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.search {
    max-width: 400px;
    width: 100%;
}
</style>