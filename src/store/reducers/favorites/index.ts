import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { ADD_FAVORITE, DEL_FAVORITE } from "../../actions";

export interface IFavorite {
  symbol: string;
}

const initialState = {
  data: [
    {
      symbol: "TWTR",
    },
    {
      symbol: "AMZN", 
    },
    {
      symbol: "SBUX",
    }
  ],
};

export const favoritesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
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
