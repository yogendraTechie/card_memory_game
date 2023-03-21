import styles from "./Card.module.css";

const Card = ({ card, setSelectedPair }) => {
  const { disable, visibility, avatar_url } = card;
  const classes = disable ? styles.card_disable : styles.card;
  return (
    <div
      className={classes}
      onClick={() =>
        !disable && setSelectedPair((selectedPair) => [...selectedPair, card])
      }
    >
      {visibility ? <img src={avatar_url} alt="avatar" /> : null}
    </div>
  );
};

export default Card;
