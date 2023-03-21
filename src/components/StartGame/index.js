import Button from "../Button";
import { CardsContext } from "../../context/CardsContext";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";
import styles from "./StartGame.module.css";

const StartGame = () => {
  const { dispatch, setReset } = useContext(CardsContext);
  const { timer, setTimer } = useContext(TimerContext);

  const handleStart = () => {
    setReset(false);
    dispatch({ type: "START" });
    setTimer(true);
  };

  return (
    <div className={styles.StartGame}>
      {!timer ? (
        <Button title={"Start Game"} classes={""} action={handleStart} />
      ) : null}
    </div>
  );
};

export default StartGame;
