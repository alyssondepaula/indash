import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites";
import { recentCompaniesReducer } from "./recentCompanies";

export const reducers = combineReducers({
  favorite: favoritesReducer,
  recentCompanies: recentCompaniesReducer
});

export type RootState = ReturnType<typeof reducers>