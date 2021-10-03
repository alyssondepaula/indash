import { ADD_FAVORITE, DEL_FAVORITE } from "../";

export const addFavorite = (title: string) => ({
  type: ADD_FAVORITE,
  payload: title,
});

export const delFavorite = (id: number) => {
  return {
    type: DEL_FAVORITE,
    payload: id
  };
};