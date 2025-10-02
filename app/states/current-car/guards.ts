import type { TState, TGuards } from '~/types/states/current-car'

export default (state: TState): TGuards => {
    return {
        isAlready(id) {
            return state.value?.id === id
        },

        additionalIsAlready() {
            return state.value.additional_is_loaded
        }
    }
}