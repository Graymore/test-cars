import type { TState } from '~/types/states/cars'
import type { APICarListItem } from "~/types/api/APICar";
import { ref } from 'vue'

export default {
    cars: ref<APICarListItem[]>([])
} satisfies TState