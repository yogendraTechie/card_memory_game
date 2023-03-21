import Button from "../Button";
import { CardsContext } from "../../context/CardsContext";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";

const StartGame = () => {
  const { dispatch, setReset } = useContext(CardsContext);
  const { setTimer } = useContext(TimerContext);

  const handleStart = () => {
    setReset(false);
    dispatch({ type: "START" });
    setTimer(true);
  };

  return (
    <div>
      <Button title={"Start Game"} classes={"classes"} action={handleStart} />
    </div>
  );
};

export default StartGame;
