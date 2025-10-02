<script setup lang="ts">
    import { AppHeader } from '~/components/blocks';
</script>

<template>
    <main :class="$style.main">
        <app-header />

        <div :class="$style.page">
            <nuxt-page />
        </div>
    </main>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/vars/global';

.main {
    @include flexbox.column;
}

.page {
    @include flexbox.column;
    max-width: global.$app_max_content;
    width: 100%;
    margin: 0 auto;
}
</style>