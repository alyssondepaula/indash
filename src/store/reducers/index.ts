import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites";
import { quoteSelectedReducer } from "./quoteSelected";
import { recentCompaniesReducer } from "./recentCompanies";

export const reducers = combineReducers({
  favorite: favoritesReducer,
  recentCompanies: recentCompaniesReducer,
  quoteSelected: quoteSelectedReducer
});

export type RootState = ReturnType<typeof reducers>