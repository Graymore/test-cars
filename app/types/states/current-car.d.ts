import type { Ref } from 'vue'
import type { APICarPage } from "~/types/api/APICar";

export type TState = Ref<APICarPage>;

export interface TActions {
    setup: (car: APICarPage) => void;
}

export interface TGuards {
    isAlready: (id: number) => boolean;
    additionalIsAlready: () => boolean;
}