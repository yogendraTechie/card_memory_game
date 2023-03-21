import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import styles from "./Score.module.css";

const Score = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div className={styles.score}>
      <span>Score: </span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
