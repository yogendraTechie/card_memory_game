import { useContext, useEffect, useMemo, useState } from "react";
import Card from "../Card";
import styles from "./Cards.module.css";
import { ScoreContext } from "../../context/ScoreContext";
import { CardsContext } from "../../context/CardsContext";
import Loader from "../Loader";

const Cards = () => {
  const [selectedPair, setSelectedPair] = useState([]);
  const {
    state: { selectedCards },
    dispatch,
    isLoading,
  } = useContext(CardsContext);
  const { setScore } = useContext(ScoreContext);

  const updateBoard = () => {
    new Promise((res) => {
      let updatedCards = [];
      let id = selectedPair[selectedPair.length - 1].uniqueId;
      updatedCards = selectedCards?.map((card) => {
        if (card?.uniqueId == id) {
          card["visibility"] = true;
          card["disable"] = true;
        }
        return card;
      });

      if (selectedPair?.length > 1) {
        if (selectedPair[0].id == selectedPair[1].id) {
          setScore((score) => score + 100);
          setSelectedPair([]);
        } else {
          updatedCards = selectedCards?.map((card) => {
            card["disable"] = true;
            return card;
          });
          setTimeout(() => {
            updatedCards = selectedCards?.map((card) => {
              if (
                card?.uniqueId == selectedPair[0].uniqueId ||
                card?.uniqueId == selectedPair[1].uniqueId
              ) {
                card["visibility"] = false;
              }
              card["disable"] = false;
              return card;
            });
            setSelectedPair([]);
            res(updatedCards);
          }, 1000);
        }
      }
      dispatch({ type: "UPDATE", payload: updatedCards });
    }).then((res) => res && dispatch({ type: "UPDATE", payload: res }));
  };

  useEffect(() => {
    if (selectedPair?.length) {
      updateBoard();
    }
  }, [selectedPair, dispatch, setSelectedPair]);

  const cardsEle = useMemo(() => {
    if (isLoading) return <Loader />;
    if (selectedCards?.length)
      return selectedCards.map((ele, i) => {
        return <Card key={i} data={ele} setSelectedPair={setSelectedPair} />;
      });
    return null;
  }, [selectedCards, setSelectedPair]);

  return <div className={styles.cards}>{cardsEle}</div>;
};

export default Cards;
