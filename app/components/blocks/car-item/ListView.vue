<script setup lang="ts">
    import { CarListItem } from '~/components/blocks'

    const cars = useCars()
</script>

<template>
    <div :class="$style.list">
        <div :class="$style.header">
            <span>ID</span>
            <span>Make</span>
            <span>Model</span>
            <span>Year</span>
        </div>

        <car-list-item
            v-for="(car, index) in cars.state.cars"
            :key="index"
            :id="car.id"
            :make="car.make"
            :model="car.model"
            :year="car.year"
        />
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/mixins/font';
@use '~/assets/vars/color' as c;

.list {
    display: table;
    border-collapse: collapse;
}

.header {
    display: table-row;
    background-color: c.$primary;

    span {
        @include font.def-500;
        display: table-cell;
        padding: 20px;
    }
}
</style>