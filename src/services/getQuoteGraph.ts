import { useFetch } from "../hooks/useFetch";


export function getQuoteGraph(symbol: string, chartInterval: number ,exactDate: string, filter?: {}) {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data }  = useFetch(`/${symbol}/chart/`, { chartInterval: chartInterval, exactDate: exactDate, filter: filter  });

        return data;
        
    }
