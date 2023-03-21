import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useCallback,
} from "react";
import { cardReducer } from "../reducers/cardReducer";
import axios from "axios";

export const CardsContext = createContext();

const END_POINT = "https://api.github.com/repos/facebook/react/contributors?";
const PLAYING_CARDS_NUMBER = 6;

const initialState = {
  isLoading: false,
  error: null,
  allCards: null,
  selectedCards: null,
};

const CardsContextProvider = ({ children }) => {
  const [reset, setReset] = useState(false);
  const [state, dispatch] = useReducer(cardReducer, initialState);

  const fetchCardData = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const response = await axios.get(END_POINT);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const handleSuffleCards = useCallback(() => {
    dispatch({
      type: "SHUFFLE",
      payload: {
        allCards: state.allCards,
        playingCardsNumber: PLAYING_CARDS_NUMBER,
      },
    });
  }, [state.allCards, dispatch]);

  useEffect(() => {
    if (state.allCards?.length) {
      handleSuffleCards();
    }
  }, [state.allCards, handleSuffleCards]);

  useEffect(() => {
    if (reset) {
      handleSuffleCards();
    }
  }, [reset, handleSuffleCards]);

  return (
    <CardsContext.Provider value={{ state, dispatch, setReset }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsContextProvider };
