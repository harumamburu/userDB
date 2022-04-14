import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles['backdrop']}>
      <Card className={styles['modal']}>
        <header className={styles['header']}>
          <h2>{props.header}</h2>
        </header>
        <div className={styles['content']}>
          {props.content
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
  header: PropTypes.string.isRequired,
  content: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
