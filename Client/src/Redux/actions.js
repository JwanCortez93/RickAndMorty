import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
  return (dispatch) => {
    axios
      .post("https://localhost:3001/favorites", character)
      .then(({ data }) => {
        return dispatch({ type: ADD_FAV, payload: data });
      });
  };
  return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};
