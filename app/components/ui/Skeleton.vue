<template>
    <div :class="$style.skeleton" />
</template>

<style module lang="scss">
.skeleton {
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #f2f2f2;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
                90deg,
                rgba(#b0b0b0, 0) 0,
                rgba(#b0b0b0, 0.1) 20%,
                rgba(#b0b0b0, 0.2) 60%,
                rgba(#b0b0b0, 0)
        );
        animation: shimmer 1s infinite;
    }
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}
</style>