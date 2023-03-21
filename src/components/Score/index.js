import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";

const Score = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div>
      <span>Score: </span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
