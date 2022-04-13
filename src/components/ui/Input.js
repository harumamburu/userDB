import styles from "./Input.module.css";

const Input = props => {
  return (
    <div className={`${styles["input"]} ${props.isValid ? "" : styles["invalid"]}`}>
      <label>{props.label}</label>
      <input type={props.type} onChange={event => props.onChange(event.target.value)} value={props.value} />
    </div>
  );
};

export default Input;
