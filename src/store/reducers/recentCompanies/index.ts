import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'

export interface IRecentCompanies {
  symbol: string;
}

const initialState = {
  data: [
      {
        symbol: "FB",
      },
      {
        symbol: "AAPL", 
      },
      {
        symbol: "ADBE",
      }
      
  ],
};

export const recentCompaniesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.title };
    default:
      return state;
  }
};
