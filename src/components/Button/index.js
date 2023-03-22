import styles from "./Button.module.css";

const Button = ({ title, action, classes }) => {
  return (
    <button
      data-testid="button"
      className={`${classes} ${styles.button}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;
