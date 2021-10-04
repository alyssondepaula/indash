import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { UPDATE_QUOTE } from "../../actions";

export interface IFavorite {
  symbol: string;
}

const initialState = {
  data: [
    {
      symbol: "MSFT",
    },
  ],
};

export const quoteSelected = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case UPDATE_QUOTE:
        return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};
