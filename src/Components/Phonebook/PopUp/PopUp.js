import React from 'react';
import PropTypes from 'prop-types';
import css from './PopUp.module.css';

const PopUp = ({ message, onClose }) => {
  //   let message = 'This contact is already exist, you just saw standard alert message from browser. Lebovski was here.';
  return (
    <div className={css['alert-popup']}>
      <div className={css['alert-content']}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default PopUp;
