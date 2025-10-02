import { APICar } from './Car'
import type { RequestArgs, AsyncRequestArgs } from "~/types/api/APIRequest";
import type { AsyncDataOptions } from "#app";

const ofetch = $fetch.create({
    baseURL: 'http://localhost:3000/api',
})

export function fetch<T>(args: RequestArgs): Promise<T> {
    return ofetch(args.url as string, { ...args })
}

export function asyncFetch<T>(args: AsyncRequestArgs, options?: AsyncDataOptions<T>) {
    return useAsyncData<T>(args.key, () => ofetch(args.url as string, { ...args, }), options)
}

export {
    APICar
}