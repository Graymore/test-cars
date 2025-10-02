import type { TActions, TState } from '~/types/states/cars'

export default (state: TState): TActions => {
    return {
        setup(cars) {
            state.cars.value = cars
        }
    }
}