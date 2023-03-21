import Cards from "../Cards";
import ScoreBoard from "../ScoreBoard";
import StartGame from "../StartGame";
import GameEndModal from "../GameEndModal";
import styles from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div className={styles.gameBoard}>
      <GameEndModal />
      <Cards />
      <StartGame />
      <ScoreBoard />
    </div>
  );
};

export default GameBoard;
