<script setup lang="ts">
    import type { IconProps } from "~/types/ui/icon";

    const { name } = defineProps<IconProps>()
</script>

<template>
    <svg-icon
        :name="name"
    />
</template>