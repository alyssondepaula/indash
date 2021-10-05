import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites";
import { quoteSelectedReducer } from "./quoteSelected";
import { recentCompaniesReducer } from "./recentCompanies";
import { userReducer } from "./user";

export const reducers = combineReducers({
  favorite: favoritesReducer,
  recentCompanies: recentCompaniesReducer,
  quoteSelected: quoteSelectedReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof reducers>