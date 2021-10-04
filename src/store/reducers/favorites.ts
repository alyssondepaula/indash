import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { ADD_FAVORITE, DEL_FAVORITE } from "../actions";

export interface IFavorite {
  symbol: string;
  companyName: string;
  changePercent: number;
  latestPrice: number; 
  sourceImg: string;  
}

const initialState = {
  data: [
      {
        symbol: "TWTR",
        companyName: 'Twitter',
        changePercent: 0.00,
        latestPrice: 0, 
        sourceImg: '/images/companies/twitter.svg'  
      },
      {
        symbol: "AMZN",
        companyName: 'Amazon',
        changePercent: 0.00,
        latestPrice: 0, 
        sourceImg: '/images/companies/amazon.svg'    
      },
      {
        symbol: "SBUX",
        companyName: 'StarBucks',
        changePercent: 0.00,
        latestPrice: 0, 
        sourceImg: '/images/companies/starbuucks.svg'   
      }
      
  ],
};

export const favoritesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.title };
    case ADD_FAVORITE:
        return { ...state, data: [...state.data, action.payload] };
    case DEL_FAVORITE:  
    
    
    const index = state.data.findIndex( item => item.symbol == action.payload)

    const s: IFavorite[] =  state.data;
    s.splice(index, 1);


    return { ...state, data: [ ...s ] };

    default:
      return state;
  }
};
