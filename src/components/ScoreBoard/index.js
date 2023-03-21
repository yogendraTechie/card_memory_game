import Timer from "../Timer";
import Score from "../Score";
import styles from "./ScoreBoard.module.css";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";

const ScoreBoard = () => {
  const { timer } = useContext(TimerContext);
  return (
    <div className={styles.scoreBoard}>
      {timer ? (
        <div className={styles.container}>
          <Timer />
          <Score />
        </div>
      ) : null}
    </div>
  );
};

export default ScoreBoard;
