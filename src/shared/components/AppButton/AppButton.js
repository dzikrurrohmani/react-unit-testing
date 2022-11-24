import React from 'react';

const AppButton = ({label, className, onClick}) => {
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default AppButton;
