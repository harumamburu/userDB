import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = props => {
  return (
    <div className={styles["modal"]}>
      <Card className={styles["card"]}>
        <div className={styles["header"]}>
          <label>{props.header}</label>
        </div>
        <div>
          {props.content
            .filter(block => !!block)
            .map(block => (
              <p>{block}</p>
            ))}
        </div>
        <div className={styles["button"]}>
          <Button onClick={props.onClose} type="button">
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
