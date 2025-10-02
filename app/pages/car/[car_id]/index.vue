<script setup lang="ts">
    import { APICar } from "~/api";
    import { AdditionalInfoBlock, MainInfo } from "~/components/blocks/car-page"

    const route = useRoute();
    const currentCar = useCurrentCar();

    const { data } = await APICar({ id: Number(route.params.car_id) }).getPage()

    if (data.value && !currentCar.guards.isAlready(data.value.id)) currentCar.actions.setup(data.value)
</script>

<template>
    <div :class="$style.wrapper">
        <main-info />

        <additional-info-block
            :model_id="data?.id"
        />
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';

.wrapper {
    @include flexbox.column;
    margin-top: 30px;
    gap: 30px;
}
</style>