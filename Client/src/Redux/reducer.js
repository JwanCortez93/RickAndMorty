import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./action-types";



const initialState = {
  myFavorites: [...myFavorites],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: action.payload
          ? state.allCharacters.filter((char) => char.gender === action.payload)
          : state.allCharacters,
      };

    case ORDER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : action.payload === "D"
            ? allCharactersCopy.sort((a, b) => b.id - a.id)
            : null,
      };

    default:
      return { ...state };
  }
};

export default reducer;
