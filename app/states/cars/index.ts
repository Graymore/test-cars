import { defineStore } from 'pinia'
import state from './state'
import actions from './actions'
import guards from './guards'

export const useCars = defineStore('cars-store', () => {
    return {
        state,
        guards: guards(state),
        actions: actions(state),
    }
}, {
    persist: true
})
