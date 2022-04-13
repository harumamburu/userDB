import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = props => {
  const[isActive, setIsActive] = useState(true);

  return (
    <div className={`${styles["modal"]} ${isActive ? "" : styles["not-active"]}`}>
      <Card className={styles["card"]}>
        <div className={styles["header"]}>
          <label>{props.header}</label>
        </div>
        <div>
          <p>{props.content}</p>
        </div>
        <div className={styles["button"]}>
          <Button onClick={() => setIsActive(false)} type="button">Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
