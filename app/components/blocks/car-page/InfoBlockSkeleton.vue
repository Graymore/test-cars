<script setup lang="ts">
    import { UiSkeleton } from '~/components/ui'
</script>

<template>
    <div :class="$style.block">
        <div>
            <ui-skeleton :class="$style.icon" />
            <ui-skeleton :class="$style.title" />
        </div>

        <table>
            <tr
                v-for="i in 4"
                :key="i"
            >
                <td>
                    <ui-skeleton :class="$style['option-title']" />
                </td>

                <td>
                    <ui-skeleton :class="$style.value" />
                </td>
            </tr>
        </table>
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/mixins/font';
@use '~/assets/vars/color' as c;

@mixin text-skeleton {
    height: 25px;
    border-radius: 10px;
}

.block {
    @include flexbox.column;
    flex: 50%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 22px rgba(0, 0, 0, .07);

    div {
        @include flexbox.inline;
        gap: 20px;
    }

    table {
        border-collapse: collapse;
        margin-top: 10px;
    }

    table tr td {
        padding: 10px 15px;
    }
}

.icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.title {
    @include text-skeleton;
    width: 50%;
}

.option-title {
    @include text-skeleton;
    width: 100%;
}

.value {
    @include text-skeleton;
    width: 60%;
    margin-left: auto;
}
</style>