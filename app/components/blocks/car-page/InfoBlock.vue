<script setup lang="ts">
    import { UiIcon } from '~/components/ui'
    import type { CarInfoBlockProps } from "~/types/blocks/car-page/info-block";

    const {
        title,
        icon,
        options
    } = defineProps<CarInfoBlockProps>()
</script>

<template>
    <div :class="$style.block">
        <p>
            <ui-icon :name="icon" />
            {{ title }}
        </p>

        <table
            v-if="options.length"
        >
            <tr
                v-for="(option, index) in options"
                :key="index"
            >
                <td>{{ option.title }}</td>
                <td>{{ option.value }}</td>
            </tr>
        </table>
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/mixins/font';
@use '~/assets/vars/color' as c;

.block {
    @include flexbox.column;
    flex: 50%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 22px rgba(0, 0, 0, .07);

    p {
        @include font.title-500;
        @include flexbox.inline;
        gap: 10px;
    }

    p svg {
        width: 32px;
        height: 32px;
        color: c.$fg-neutral;
    }

    table {
        border-collapse: collapse;
        margin-top: 10px;
    }

    table tr td {
        padding: 10px 15px;
        text-wrap-mode: nowrap;
    }

    table tr:nth-child(2n) {
        background-color: c.$body-primary;
    }

    table tr td:last-child {
        color: c.$fg-neutral;
        text-align: right;
    }
}
</style>