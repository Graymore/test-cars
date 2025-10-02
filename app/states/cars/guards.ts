import type { TState, TGuards } from '~/types/states/cars'

export default (state: TState): TGuards => {
    return {
        isEmpty() {
            return state.cars.value.length === 0
        }
    }
}