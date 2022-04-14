import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = (props) => (
  <div className={`${styles['card']} ${props.className ? props.className : ''}`}>
    {
      // eslint-disable-next-line react/prop-types
      props.children
    }
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
