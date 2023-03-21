const Button = ({ title, classes, action }) => {
  return (
    <button className={classes} onClick={action}>
      {title}
    </button>
  );
};

export default Button;
