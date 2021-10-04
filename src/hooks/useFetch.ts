import useSWR from 'swr'
import api from '../services/api';



export function useFetch<Data = any, Error = any, >(url: string, params?: {}) {

  const { data, error, } = useSWR<Data, Error>(url, async url =>{

    const response = await api.get(url, {params: params});

    return response.data;

  }, { refreshInterval: 1000, revalidateOnFocus: true, shouldRetryOnError: true, revalidateOnReconnect: true,  } )

  return { data, error }
}