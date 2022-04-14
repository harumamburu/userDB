import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div>
      <div className={styles['backdrop']} onClick={props.onClose} />
      <Card className={styles['modal']}>
        <header className={styles['header']}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles['content']}>
          {props.messages
              .filter((block) => !!block)
              .map((block, index) => (
                <p key={index}>{block}</p>
              ))}
        </div>
        <footer className={styles['controls']}>
          <Button onClick={props.onClose}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
