import {useFetch,type UseFetchOptions} from 'nuxt/app'
/**
 * Generates a composable that sends a `get` request to `/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/${encodeURIComponent(data.id)}` endpoint with the given data as `query`.
 * @param data - Data to send as query.
 * @param opt - Options to pass to the underlying `useFetch`.
 
 */
export const useTFetchPidNameGetById = <T extends {price:number;status:string;productId:string;'pid':string;'name':string;'id':string;}, R extends {data:{data:string;result1:(boolean|{data:number;result1:{data:{data:{};};result1:boolean;items2:number;};})[];};result1:number;items2:{data:(number|{data:{data:boolean;result1:{data:{data:{data:boolean;};};};items2:string;};result1?:undefined;}|{data:{data:{data:{data:number;};};result1:{data:string;};items2:(number|(string|boolean)[])[];};result1:{data:{data:{data:number;};result1:string;items2:(boolean|{data:boolean;})[];};};})[];};}>(data: T, opt: UseFetchOptions<R> = {}) => useFetch<R>(`/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/${encodeURIComponent(data.id)}`, { method: `get`, query:omit(data, 'pid','name','id'), ...opt })
/**
 * Generates a composable that sends a `get` request to `/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/${encodeURIComponent(data.id)}` endpoint with the given data as `query`.
 * @param data - Data to send as query.
 * @param opt - Options to pass to the underlying `useFetch`.
 
 */
export const useTFetchPidNameGetByIdAsync = <T extends {price:number;status:string;productId:string;'pid':string;'name':string;'id':string;}, R extends {data:{data:string;result1:(boolean|{data:number;result1:{data:{data:{};};result1:boolean;items2:number;};})[];};result1:number;items2:{data:(number|{data:{data:boolean;result1:{data:{data:{data:boolean;};};};items2:string;};result1?:undefined;}|{data:{data:{data:{data:number;};};result1:{data:string;};items2:(number|(string|boolean)[])[];};result1:{data:{data:{data:number;};result1:string;items2:(boolean|{data:boolean;})[];};};})[];};}>(data: T, opt: UseFetchOptions<R> = {}) => $fetch<{data:{data:string;result1:(boolean|{data:number;result1:{data:{data:{};};result1:boolean;items2:number;};})[];};result1:number;items2:{data:(number|{data:{data:boolean;result1:{data:{data:{data:boolean;};};};items2:string;};result1?:undefined;}|{data:{data:{data:{data:number;};};result1:{data:string;};items2:(number|(string|boolean)[])[];};result1:{data:{data:{data:number;};result1:string;items2:(boolean|{data:boolean;})[];};};})[];};}>(`/api/${encodeURIComponent(data.pid)}/${encodeURIComponent(data.name)}/${encodeURIComponent(data.id)}`, { method: `get`, query:omit(data, 'pid','name','id'), ...opt })


