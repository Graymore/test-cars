<script setup lang="ts">

</script>

<template>
    <nuxt-link
        href="/"
        :class="$style.logo"
    >
        Autos
    </nuxt-link>
</template>

<style module lang="scss">
@use '~/assets/mixins/font' as f;
@use '~/assets/vars/color' as c;

.logo {
    @include f.logo-600;
    color: c.$fg-red;

    &:hover {
        text-decoration-line: underline;
    }
}
</style>