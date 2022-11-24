import { Navigate, Outlet } from 'react-router-dom';

const ProtectedPage = () => {
  const isActive = window.localStorage.getItem('isActive');
  return isActive ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedPage;
