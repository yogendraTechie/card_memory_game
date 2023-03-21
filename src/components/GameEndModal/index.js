import { useState, useMemo, useContext, useEffect, useCallback } from "react";
import { TimerContext } from "../../context/TimerContext";
import { ScoreContext } from "../../context/ScoreContext";
import { CardsContext } from "../../context/CardsContext";
import Button from "../Button";
import styles from "./GameEndModal.module.css";

const GameEndModal = () => {
  const [open, setOpen] = useState(false);
  const { timer, setTimer, remainingTime } = useContext(TimerContext);
  const { score, setScore } = useContext(ScoreContext);
  const { setReset } = useContext(CardsContext);

  useEffect(() => {
    if (timer && (!remainingTime || score === 600)) setOpen(true);
  }, [remainingTime, score, timer]);

  const handleClose = useCallback(() => {
    setReset(true);
    setScore(0);
    setTimer(false);
    setOpen(false);
  }, [setOpen, setReset, setScore, setTimer]);

  const GameEndModalEle = useMemo(() => {
    if (open) {
      return (
        <div className={styles.gameEndModal}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <span>GAME</span> <span>OVER</span>
            </div>
            <div className={styles.text}>Score: {score}</div>
            <Button title={"New game!"} action={handleClose} classes="" />
          </div>
        </div>
      );
    }
    return null;
  }, [open, score, handleClose]);

  return <>{GameEndModalEle}</>;
};

export default GameEndModal;
