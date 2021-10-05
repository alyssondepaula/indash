import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { UPDATE_QUOTE } from "../../actions";

export interface IQuoteSelected {
  symbol: string;
}

const initialState = {
  data: 
     {  
       symbol: "MSFT"
     }
   

};

export const quoteSelectedReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case UPDATE_QUOTE:
  
        return { ...state, data: {symbol:action.payload} };
    default:
      return state;
  }
};
