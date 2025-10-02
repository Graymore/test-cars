import type { TState, TActions } from '~/types/states/current-car'

export default (state: TState): TActions => {
    return {
        setup(car) {
            state.value = car
        }
    }
}