import { getPlayingCards } from "../utils/getPlayingCards";

export const cardReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        selectedCards: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        allCards: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "SHUFFLE":
      return {
        ...state,
        selectedCards: getPlayingCards(action.payload),
      };
    case "START":
      return {
        ...state,
        selectedCards: [
          ...state.selectedCards.map((card) => {
            card["disable"] = false;
            return card;
          }),
        ],
      };
    case "UPDATE":
      return {
        ...state,
        selectedCards: [...action.payload],
      };
    default:
      return state;
  }
};
