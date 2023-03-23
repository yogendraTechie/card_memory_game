import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import styles from "./Score.module.css";

const Score = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div className={styles.score}>
      <span data-testid="score-label">Score: </span>
      <span data-testid="score-value">{score}</span>
    </div>
  );
};

export default Score;
