import React from 'react';

const AppButton = ({
  label,
  className = 'btn btn-primary',
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default AppButton;
