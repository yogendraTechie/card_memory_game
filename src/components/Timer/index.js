import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";
import styles from "./Timer.module.css";

const Timer = () => {
  const { remainingTime } = useContext(TimerContext);
  return (
    <div className={styles.timer}>
      <span>Timer: </span>
      <span>{remainingTime} Seconds</span>
    </div>
  );
};

export default Timer;
