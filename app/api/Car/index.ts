import { getListItems, getPage, getAdditionalInfo } from './get'
import type { TContext, TOptions } from '~/types/api/APICar'

export const APICar = (options?: TOptions): TContext => {
    return {
        ...options,
        getListItems,
        getPage,
        getAdditionalInfo
    }
}