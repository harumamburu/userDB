import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = (props) => (
  <button
    className={styles['button']}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
