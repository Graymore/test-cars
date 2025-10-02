<script setup lang="ts">
    import { UiIcon, UiPreloader } from '~/components/ui';
    import type { InputProps, InputState } from "~/types/ui/input"

    const {
        placeholder,
        icon,
        loading
    } = defineProps<InputProps>()

    const state = reactive<InputState>({
        focused: false,
    })

    const emit = defineEmits<{
        'enter': [];
        'input': [];
        'focus': [];
    }>()

    const $css = useCssModule()
    const value = defineModel<string>()

    const wrapperClasses = computed(() => {
        return state.focused ? [$css['wrapper'], $css['focused']] : $css['wrapper']
    })

    const isLoading = computed(() => loading)

    const onFocus = () => {
        state.focused = true
        emit('focus')
    }
    const onBlur = () => state.focused = false
    const onEnter = () => emit('enter')
    const onInput = () => emit('input')
</script>

<template>
    <div :class="wrapperClasses">
        <ui-icon
            v-if="icon"
            :name="icon"
            :class="$style.icon"
        />

        <input
            type="text"
            v-model="value"
            :placeholder="placeholder"
            :class="$style.input"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @keyup.enter="onEnter"
        >

        <ui-preloader
            v-if="isLoading"
        />
    </div>
</template>

<style module lang="scss">
@use '~/assets/mixins/flexbox';
@use '~/assets/mixins/font';
@use '~/assets/mixins/base';
@use '~/assets/vars/color';

.wrapper {
    @include flexbox.inline;
    @include base.ui-transition;
    background-color: color.$body-primary;
    border: 2px solid transparent;
    border-radius: 7px;
    padding: 0 10px;
    gap: 10px;

    &.focused {
        background-color: transparent;
        border-color: blue;
    }
}

.input {
    @include font.def;
    padding: 10px 0;
    background-color: unset;
    width: 100%;
}

.icon {
    width: 21px;
    height: 21px;
    color: color.$fg-neutral;
    flex-shrink: 0;
}
</style>