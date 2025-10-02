<script setup lang="ts">
    import type { APICarListItem } from "~/types/api/APICar";

    const {
        id,
        make,
        year,
        model,
    } = defineProps<APICarListItem>()

    const detailUrl = computed(() => `/car/${id}`)
</script>

<template>
    <nuxt-link
        :href="detailUrl"
        :class="$style.item"
    >
        <span>{{ id }}</span>
        <span>{{ make }}</span>
        <span>{{ model }}</span>
        <span>{{ year }}</span>
    </nuxt-link>
</template>

<style module lang="scss">
@use '~/assets/vars/color' as c;
@use '~/assets/mixins/base';

.item {
    @include base.ui-transition;
    display: table-row;
    border-radius: 10px;
    color: c.$fg;
    border-bottom: 1px solid c.$separator;

    &:hover {
        background-color: white;
        box-shadow: 0 5px 30px rgba(0, 0, 0, .1);
    }

    &:last-child {
        border-bottom: unset;
    }

    span {
        display: table-cell;
        padding: 20px;
    }

    span:first-child {
        color: c.$fg-neutral;
    }
}
</style>