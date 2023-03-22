import { useMemo } from "react";
import styles from "./Card.module.css";
import { func, bool, string, shape } from "prop-types";

const Card = ({ card, setSelectedPair }) => {
  const { disable, visibility, avatar_url } = card;
  const classes = disable ? styles.card_disable : styles.card;

  const imageEle = useMemo(
    () => (visibility ? <img src={avatar_url} alt="avatar" /> : null),
    [visibility, avatar_url]
  );
  return (
    <div
      className={classes}
      onClick={() =>
        !disable && setSelectedPair((selectedPair) => [...selectedPair, card])
      }
    >
      {imageEle}
    </div>
  );
};

Card.propTypes = {
  card: shape({ disable: bool, visibility: bool, avatar_url: string }),
  setSelectedPair: func.isRequired,
};

Card.defaultProps = {
  card: { disable: true, visibility: false, avatar_url: "" },
};

export default Card;
