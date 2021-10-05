import { useFetch } from "../hooks/useFetch";


export function getQuote(symbol: string, displayPercent: boolean, filter: {}) {


  

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data } = useFetch(`/${symbol}/quote/`, { displayPercent: displayPercent, filter: filter  });

        return data;

        
  
        
    }
