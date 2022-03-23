/** @format */

import { GETPRODUCT_REQUEST, LOW_TO_HIGH, HIGH_TO_LOW } from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case GETPRODUCT_REQUEST:
      return { ...state, products: [...state.products, ...payload] };

    case LOW_TO_HIGH:
      return {
        ...state,
        products: [...state.products.sort((a, b) => a.price - b.price)],
      };
    case HIGH_TO_LOW:
      return {
        ...state,
        products: [...state.products.sort((a, b) => b.price - a.price)],
      };
    default:
      return { ...state };
  }
};
