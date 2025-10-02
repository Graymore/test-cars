import { defineStore } from 'pinia'
import state from './state'
import actions from './actions'
import guards from './guards'

export const useCurrentCar = defineStore('current-car-store', () => {
    return {
        state,
        guards: guards(state),
        actions: actions(state),
    }
}, {
    persist: true
})
