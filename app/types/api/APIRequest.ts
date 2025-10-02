import type { APICarPoints } from "~/types/api/APIPoints"
import type { FetchHooks } from 'ofetch'

enum RequestMethods {
    'GET',
    'POST',
    'DELETE',
    'PATCH',
    'PUT'
}

interface Request extends FetchHooks {
    method: keyof typeof RequestMethods;
    key: string;
    url: APICarPoints;
    body?: Record<string, any>;
    query?: Record<string, any>;
}

export type RequestArgs = Omit<Request, 'key'>;
export type AsyncRequestArgs = Request;
