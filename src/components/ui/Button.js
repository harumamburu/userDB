import styles from "./Button.module.css";

const Button = props => (
  <button
    className={styles["button"]}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;
