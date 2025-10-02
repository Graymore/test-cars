<script setup lang="ts">
    const currentCar = useCurrentCar()

    const title = computed(() => `${currentCar.state.make} ${currentCar.state.model} ${currentCar.state.year}`)
    const subtitle = computed(() => currentCar.state.id)
</script>

<template>
    <div :class="$style.box">
        <div :class="$style.info">
            <div :class="$style.title">
                {{ title }}
            </div>

            <div :class="$style.subtitle">
                {{ subtitle }}
            </div>
        </div>

        <div :class="$style.cover" />
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/mixins/font';
@use '~/assets/vars/color' as c;

.box {
    @include flexbox.inline;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 0 22px rgba(0, 0, 0, .07);
}

.title {
    @include font.title-500;
}

.subtitle {
    @include font.def-500;
    color: c.$fg-neutral;
    margin-top: 3px;
}

.cover {
    background-color: c.$body-primary;
    border-radius: 10px;
    width: 360px;
    height: 200px;
    margin-left: auto;
}
</style>