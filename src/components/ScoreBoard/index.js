import Timer from "../Timer";
import Score from "../Score";
import styles from "./ScoreBoard.module.css";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";

const ScoreBoard = () => {
  const { timer } = useContext(TimerContext);
  return (
    <>
      {timer ? (
        <div className={styles.scoreBoard}>
          <Timer />
          <Score />
        </div>
      ) : null}
    </>
  );
};

export default ScoreBoard;
