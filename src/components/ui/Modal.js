import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Backdrop = (props) => <div className={styles['backdrop']} onClick={props.onClick} />;

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ModalOverlay = (props) =>
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
  </Card>;

ModalOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

const Modal = (props) => {
  return (
    <>
      {
        ReactDOM.createPortal(
            <Backdrop onClick={props.onClose} />,
            document.getElementById('backdrop-root'))
      }
      {
        ReactDOM.createPortal(
            <ModalOverlay
              title={props.title}
              messages={props.messages}
              onClose={props.onClose} />,
            document.getElementById('modal-root'))
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
