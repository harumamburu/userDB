import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${styles['input']} ${props.isInvalid ? styles['invalid'] : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type || 'text'}
        value={props.value ?? ''}
        onChange={(event) => props.onChange(event.target.value)}
        onBlur={props.onBlur} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  isInvalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default Input;
