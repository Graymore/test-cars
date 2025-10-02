import type { APICarListItem, APICarPage, APICarPageAdditional, TContext } from '~/types/api/APICar'
import { fetch, asyncFetch } from '~/api'
import { reactivePick } from '@vueuse/core'

export function getListItems() {
    return asyncFetch<APICarListItem[]>({
        method: 'GET',
        url: '/cars',
        key: 'cars'
    })
}

export function getPage(this: TContext) {
    return asyncFetch<APICarPage>({
        method: 'GET',
        url: `/car`,
        key: 'car-page',
        query: { id: this.id }
    })
}

export function getAdditionalInfo(this: TContext) {
    return fetch<APICarPageAdditional>({
        method: 'GET',
        url: '/car/additional',
        query: {
            cmd: 'getModel',
            model: this.model_id
        },
        onResponse: (res) => {
            const pick = reactivePick(res.response._data[0], [
                'make_country',
                'model_body',
                'model_doors',
                'model_engine_l',
                'model_engine_power_hp',
                'model_engine_valves',
                'model_transmission_type',
                'model_trim',
            ])

            res.response._data = {
                additional_is_loaded: true,
                ...pick
            }
        }
    })
}