import { combineReducers } from "redux";
import { favoritesReducer } from "./favorites";

export const reducers = combineReducers({
  favorite: favoritesReducer,
});

export type RootState = ReturnType<typeof reducers>