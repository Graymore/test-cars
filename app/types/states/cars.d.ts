import type { Ref } from 'vue'
import type { APICarListItem } from '~/types/api/APICar'

export interface TState {
    cars: Ref<APICarListItem[]>;
}

export interface TGuards {
    isEmpty: () => boolean;
}

export interface TActions {
    setup: (cars: APICarListItem[]) => void;
}
