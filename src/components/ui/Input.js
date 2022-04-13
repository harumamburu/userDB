import { useState } from "react";

import styles from "./Input.module.css";

const Input = props => {
  const [isValid, setIsValid] = useState(true);

  const changeHandler = event => {
    props.onInput(event.target.value);
    if (
      (props.required && event.target.value.length === 0) ||
      !props.validate(event.target.value)
    ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  return (
    <div className={`${styles["input"]} ${!isValid ? styles["invalid"] : ""}`}>
      <label>{props.label}</label>
      <input type={props.type} onChange={changeHandler} value={props.value} />
    </div>
  );
};

export default Input;
