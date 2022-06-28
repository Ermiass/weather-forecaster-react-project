import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button id="butto" type="button" className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: () => window.alert('No onClick prop was provided for button'),
};

export default Button;
