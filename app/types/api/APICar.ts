import type { NuxtError } from '#app'
import type { _AsyncData } from '#app/composables/asyncData'

export interface APICarListItem {
    id: number;
    make: string;
    model: string;
    year: number;
}

export interface APICarPageAdditional {
    additional_is_loaded: boolean;
    make_country: string;
    model_body: string;
    model_doors: string;
    model_engine_l: string;
    model_engine_power_hp: string;
    model_engine_valves: string;
    model_transmission_type: string;
    model_trim: string;
}

export interface APICarPage extends APICarListItem, APICarPageAdditional {}

type AsyncDataType<Data> = Promise<_AsyncData<Data | undefined, NuxtError<unknown> | undefined>>

export interface TOptions {
    id?: number;
    model_id?: number;
}

export interface TContext extends TOptions {
    getListItems: () => AsyncDataType<APICarListItem[]>;
    getPage: (this: TContext) => AsyncDataType<APICarPage>;
    getAdditionalInfo: (this: TContext) => Promise<APICarPageAdditional>;
}