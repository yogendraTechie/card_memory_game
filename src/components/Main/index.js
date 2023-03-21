import Header from "../Header";
import GameBoard from "../GameBoard";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <GameBoard />
    </div>
  );
};

export default Main;
