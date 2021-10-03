import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { ADD_FAVORITE, DEL_FAVORITE } from "../actions";

export interface IFavorite {
    id: number;
    title: string;
}

const initialState = {
  data: [
      {
        id: 1,
        title: 'a'  
      },
      {
        id: 2,
        title: 'b'   
      },
      {
        id: 3,
        title: 'c'   
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
    
    
    const index = state.data.findIndex( item => item.id == action.payload)

    const s: IFavorite[] =  state.data;
    s.splice(index, 1);


    return { ...state, data: [ ...s ] };

    default:
      return state;
  }
};
