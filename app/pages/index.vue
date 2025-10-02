<script setup lang="ts">
    import { CarListView } from '~/components/blocks'
    import { APICar } from "~/api"

    const cars = useCars()

    const { data } = await APICar().getListItems()

    if (data.value) cars.actions.setup(data.value)
</script>

<template>
    <div :class="$style.wrapper">
        <car-list-view />
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';

.wrapper {
    @include flexbox.column;
    padding: 30px 0;
    gap: 20px;
}
</style>