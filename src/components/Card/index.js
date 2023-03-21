import styles from "./Card.module.css";

const Card = ({ data, setSelectedPair }) => {
  return (
    <div
      className={styles.card}
      onClick={() =>
        !data?.disable &&
        setSelectedPair((selectedPair) => [...selectedPair, data])
      }
    >
      {data?.visibility ? <img src={data?.avatar_url} alt="avatar" /> : null}
    </div>
  );
};

export default Card;
