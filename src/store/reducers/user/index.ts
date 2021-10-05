import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from 'redux'
import { UPDATE_QUOTE } from "../../actions";

export interface IUSer {
  name: string
  email: string
  password: string
  token: string
  refreshToken: string
}

const initialState = {
  data: { 
    name: 'João da Silva Almeida Magalhães',
    email: 'joão@guilherme.com',
    password: '123456',
    token: 'abcde',
    refreshToken: 'edcba'
  }
  
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
