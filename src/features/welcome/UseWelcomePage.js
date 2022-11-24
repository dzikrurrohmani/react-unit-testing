import React from 'react';
import { useNavigate } from 'react-router-dom';

const useWelcomePage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('transaction', replace);
  };
  return {
    onLogin,
  };
};

export default useWelcomePage;
