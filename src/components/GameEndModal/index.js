import { useState, useMemo, useContext, useEffect } from "react";
import { TimerContext } from "../../context/TimerContext";
import { ScoreContext } from "../../context/ScoreContext";
import { CardsContext } from "../../context/CardsContext";
import Button from "../Button";
import "./GameEndModal.css";

const GameEndModal = () => {
  const [open, setOpen] = useState(false);
  const { timer, setTimer, remainingTime } = useContext(TimerContext);
  const { score, setScore } = useContext(ScoreContext);
  const { setReset } = useContext(CardsContext);

  useEffect(() => {
    if (timer && (!remainingTime || score === 600)) setOpen(true);
  }, [remainingTime, score, timer]);

  const handleClose = () => {
    setReset(true);
    setScore(0);
    setTimer(false);
    setOpen(false);
  };
  const GameEndModalEle = useMemo(() => {
    if (open) {
      return (
        <div className="modal">
          <div className="modal__content">
            <h1>GAME OVER</h1>
            <p>score: {score}</p>
            <Button title={"New game!"} action={handleClose} classes="btn" />
          </div>
        </div>
      );
    }
    return null;
  }, [open]);

  return <>{GameEndModalEle}</>;
};

export default GameEndModal;
