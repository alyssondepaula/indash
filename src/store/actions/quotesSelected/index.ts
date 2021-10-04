import { UPDATE_QUOTE } from "../";

export const UpdateQuoteSelected = (symbol: string) => {
    return {
      type: UPDATE_QUOTE,
      payload: symbol
    };
  };