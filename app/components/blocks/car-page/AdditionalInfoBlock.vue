<script setup lang="ts">
    import { InfoBlock, InfoBlockSkeleton } from ".";
    import { APICar } from "~/api"
    import type { CarInfoBlockOption } from "~/types/blocks/car-page/info-block";

    const { model_id } = defineProps<{
        model_id?: number;
    }>()

    const state = reactive({
        loading: true
    })

    const currentCar = useCurrentCar();

    const engineOptions = computed<CarInfoBlockOption[]>(() => [
        {
            title: 'Trim',
            value: currentCar.state.model_trim
        },
        {
            title: 'L',
            value: currentCar.state.model_engine_l
        },
        {
            title: 'Power hp',
            value: currentCar.state.model_engine_power_hp
        },
        {
            title: 'Valves',
            value: currentCar.state.model_engine_valves
        },
    ])

    const carOptions = computed<CarInfoBlockOption[]>(() => [
        {
            title: 'Country',
            value: currentCar.state.make_country
        },
        {
            title: 'Body',
            value: currentCar.state.model_body
        },
        {
            title: 'Doors',
            value: currentCar.state.model_doors
        },
        {
            title: 'Transmission',
            value: currentCar.state.model_transmission_type
        },
    ])

    const fetchAdditionalInfo = async () => {
        if (model_id && !currentCar.guards.additionalIsAlready()) {
            APICar({ model_id }).getAdditionalInfo()
                .then(additional => {
                    if (additional) currentCar.actions.setup({ ...currentCar.state, ...additional })
                })
                .catch(error => console.log(error))
                .finally(() => state.loading = false)
        }
    }

    onMounted(async () => await fetchAdditionalInfo())
</script>

<template>
    <template v-if="!state.loading">
        <div :class="$style.box">
            <info-block
                title="Engine"
                icon="engine"
                :options="engineOptions"
            />

            <info-block
                title="Car"
                icon="car"
                :options="carOptions"
            />
        </div>
    </template>

    <template v-if="state.loading">
        <client-only>
            <div :class="$style.box">
                <info-block-skeleton v-for="i in 2"/>
            </div>
        </client-only>
    </template>
</template>

<style module lang="scss">
.box {
    display: flex;
    gap: 30px;
}
</style>