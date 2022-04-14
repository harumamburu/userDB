import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles['modal']}>
      <Card className={styles['card']}>
        <div className={styles['header']}>
          <label>{props.header}</label>
        </div>
        <div>
          {props.content
              .filter((block) => !!block)
              .map((block, index) => (
                <p key={index}>{block}</p>
              ))}
        </div>
        <div className={styles['button']}>
          <Button onClick={props.onClose} type="button">
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
