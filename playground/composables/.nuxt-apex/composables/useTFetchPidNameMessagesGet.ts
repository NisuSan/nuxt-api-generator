import {useFetch,type UseFetchOptions} from 'nuxt/app'
/**
 * Generates a composable that sends a `get` request to `/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/messages` endpoint with the given data as `query`.
 * @param data - Data to send as query.
 * @param opt - Options to pass to the underlying `useFetch`.
 
 */
export const useTFetchPidNameMessagesGet = <T extends {count:number;itemId:string;'pid':string;'name':string;}, R extends {data:{data:{data:number;result1:{data:boolean;result1:string;items2:{data:{};};};items2:{data:boolean[];result1:{data:number;};items2:number;};};result1:number;};result1:string;}>(data: T, opt: UseFetchOptions<R> = {}) => useFetch<R>(`/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/messages`, { method: `get`, query:omit(data, 'pid','name'), ...opt })
/**
 * Generates a composable that sends a `get` request to `/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/messages` endpoint with the given data as `query`.
 * @param data - Data to send as query.
 * @param opt - Options to pass to the underlying `useFetch`.
 
 */
export const useTFetchPidNameMessagesGetAsync = <T extends {count:number;itemId:string;'pid':string;'name':string;}, R extends {data:{data:{data:number;result1:{data:boolean;result1:string;items2:{data:{};};};items2:{data:boolean[];result1:{data:number;};items2:number;};};result1:number;};result1:string;}>(data: T, opt: UseFetchOptions<R> = {}) => $fetch<{data:{data:{data:number;result1:{data:boolean;result1:string;items2:{data:{};};};items2:{data:boolean[];result1:{data:number;};items2:number;};};result1:number;};result1:string;}>(`/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/messages`, { method: `get`, query:omit(data, 'pid','name'), ...opt })


