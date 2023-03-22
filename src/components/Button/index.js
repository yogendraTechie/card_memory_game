import styles from "./Button.module.css";
import { string, func } from "prop-types";

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

Button.propTypes = {
  title: string.isRequired,
  action: func.isRequired,
  classes: string,
};

Button.defaultProps = {
  title: "",
  classes: "",
};

export default Button;
